// ─────────────────────────────────────────────────────────────
// Everything you need to personalise lives in this one file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  role: 'What you do',
  email: 'you@example.com',
  // Shown in <meta description> and social previews.
  description: 'Personal site and portfolio of Your Name.',
};

export const hero = {
  // The big statement at the top. Keep it to one line if you can.
  headline: 'Bridging the gap between ideas and things people use.',
  // One or two sentences of context under the headline.
  intro:
    'I design and build software. Currently doing something you should write about here, previously somewhere else worth mentioning.',
};

export const about = [
  'Two or three short paragraphs about you. What you care about, how you work, what you are looking for. Write it the way you would say it out loud.',
  'Outside of work you can find me doing the thing that makes you a person and not a résumé.',
];

// One-line teaser for each section, shown on the landing page.
export const overview = {
  about: 'Who I am, how I work, and what I am looking for next.',
  work: 'Case studies, shipped products and things I built to find out if they would work.',
  writing: 'Notes on the craft — short posts about what I learn along the way.',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'X', href: 'https://x.com/yourname' },
  { label: 'Email', href: 'mailto:you@example.com' },
];

// Optional "worked with / trusted by" strip. Empty array hides the section.
export const clients: string[] = ['Company One', 'Company Two', 'Company Three', 'Company Four'];

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Work', href: '/work/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Contact', href: '/#contact' },
];
