// Build-time link previews: fetch a page once, pull its og:image and title, and
// save the image into src/assets/link-previews/. Pages render from that saved
// copy, so commit it: when a later fetch fails (timeout, rate limit, site down)
// the last good image is still there. With neither, the card shows a plain tile.

import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

export interface LinkPreview {
  // Short label for the card: the hostname, or the file type for local files.
  label: string;
  title?: string;
  // The og:image URL, set only when it downloaded. Pages normally render the
  // saved copy; this covers the build that saves an image for the first time.
  image?: string;
}

const PREVIEW_DIR = path.resolve('src/assets/link-previews');

const EXTENSIONS: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

const cache = new Map<string, Promise<LinkPreview>>();

// File name (without extension) the preview image for `href` is saved under.
export function previewKey(href: string): string {
  return href
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 100);
}

export function getLinkPreview(href: string, { image = true } = {}): Promise<LinkPreview> {
  let preview = cache.get(href);
  if (!preview) {
    preview = load(href, image);
    cache.set(href, preview);
  }
  return preview;
}

async function load(href: string, wantImage: boolean): Promise<LinkPreview> {
  // Local files (e.g. /papers/x.pdf) have nothing to fetch.
  if (!/^https?:\/\//.test(href)) {
    const ext = href.split(/[?#]/)[0].split('.').pop();
    return { label: ext && ext !== href ? ext.toUpperCase() : 'Link' };
  }

  const url = new URL(href);
  const label = url.hostname.replace(/^www\./, '');

  try {
    const res = await get(url, 'text/html');
    if (!res.headers.get('content-type')?.includes('text/html')) return { label };

    const html = await res.text();
    const meta = readMeta(html);
    const image = meta['og:image'] ?? meta['twitter:image'];
    const title = meta['og:title'] ?? html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];

    let imageUrl: string | undefined;
    if (wantImage && image) {
      const src = new URL(decode(image), res.url);
      if (await saveImage(previewKey(href), src).catch(() => false)) imageUrl = src.href;
    }
    return { label, title: title ? decode(title).trim() || undefined : undefined, image: imageUrl };
  } catch {
    return { label };
  }
}

async function get(url: URL, accept: string): Promise<Response> {
  const res = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (link preview)', accept },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

async function saveImage(key: string, url: URL): Promise<boolean> {
  const res = await get(url, 'image/*');
  const ext = EXTENSIONS[res.headers.get('content-type')?.split(';')[0].trim() ?? ''];
  if (!ext) return false;

  const bytes = Buffer.from(await res.arrayBuffer());
  const file = path.join(PREVIEW_DIR, `${key}.${ext}`);

  // Only touch the file when the image actually changed, so the dev server's
  // file watcher doesn't reload the page in a loop.
  const existing = await readFile(file).catch(() => undefined);
  if (existing?.equals(bytes)) return true;

  await mkdir(PREVIEW_DIR, { recursive: true });
  for (const name of await readdir(PREVIEW_DIR)) {
    if (name.startsWith(`${key}.`) && name !== `${key}.${ext}`) await unlink(path.join(PREVIEW_DIR, name));
  }
  await writeFile(file, bytes);
  return true;
}

function readMeta(html: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs: Record<string, string> = {};
    for (const [, name, , dq, sq] of tag.matchAll(/([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
      attrs[name.toLowerCase()] = dq ?? sq;
    }
    const key = (attrs.property ?? attrs.name)?.toLowerCase();
    if (key && attrs.content && !(key in out)) out[key] = attrs.content;
  }
  return out;
}

function decode(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}
