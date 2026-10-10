// ─────────────────────────────────────────────────────────────
// Site details and shared page copy.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Harshit Saini',
  role: 'Computer Engineering @ Texas A&M',
  email: 'harshit06saini@gmail.com',
  // Shown in <meta description> and social previews.
  description: 'Personal site and portfolio of Harshit Saini, a computer engineering student at Texas A&M.',
};

export const hero = {
  // The big statement at the top. Keep it to one line if you can.
  headline: 'I build autonomous systems and the software behind them.',
  // One or two sentences of context under the headline.
  intro:
    "I study computer engineering at Texas A&M. At the ENDEAVR Institute, I work on autonomous vehicle perception; with the Texas A&M Vertical Flight Design Team, I write flight software. I also lead marketing and web development for tidalTAMU. I co-wrote a paper on LLM multi-agent safety that was accepted to the NeurIPS 2026 Workshop on Interpreting Agent Behavior (IAB).",
};

export const about = [
  "I'm studying computer engineering at Texas A&M with a minor in math. I have a 4.0 GPA and am a President's Endowed Merit Scholar and National Merit Scholar. My research interests are autonomous vehicle perception and LLM agent safety, and I also work on embedded flight software.",
  "Some days I'm fine-tuning vision models on HPC clusters; others, I'm building low-cost perception rigs or working with ROS 2, Raspberry Pi, and edge hardware. I also do full-stack web development. I like projects that make me work across the computer, from low-level hardware to the software people use.",
  "Outside of engineering, I run marketing and web development for tidalTAMU and sit on the Engineering Honors executive committee. I'm usually the one dragging a Raspberry Pi into a project that didn't need one.",
];

// One-line teaser for each section, shown on the landing page.
export const overview = {
  about: 'A bit about me and the work I enjoy.',
  experience: 'My research, engineering, and leadership roles.',
  projects: "Things I've built, and what I'm still working on.",
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Harshit-Saini0' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshit---saini/' },
  { label: 'Email', href: 'mailto:harshit06saini@gmail.com' },
];

// Optional "worked with / trusted by" strip. Empty array hides the section.
export const clients: string[] = [];

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/#contact' },
];
