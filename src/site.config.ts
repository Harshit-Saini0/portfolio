// ─────────────────────────────────────────────────────────────
// Everything you need to personalise lives in this one file.
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
  headline: 'Building autonomous systems and products that run in the real world.',
  // One or two sentences of context under the headline.
  intro:
    'Computer Engineering student at Texas A&M, researching autonomous vehicle perception at the ENDEAVR Institute, building flight software for the Texas A&M Vertical Flight Design Team, and leading marketing and web development for tidalTAMU. Co-author of an LLM multi-agent safety paper accepted to the NeurIPS 2026 Workshop on Interpreting Agent Behavior (IAB).',
};

export const about = [
  "I'm a Computer Engineering student at Texas A&M, minoring in Math, with a 4.0 GPA as a President's Endowed Merit Scholar and National Merit Scholar. I'm interested in using engineering and leadership to solve complex problems and contribute to research in tech; specifically autonomous vehicle perception, embedded flight software, and LLM agent safety.",
  "Day to day I work on research (fine-tuning vision models on HPC clusters and building low-cost perception rigs), embedded and robotics work (ROS 2, Raspberry Pi, edge hardware), and full-stack web development. I like projects that force me to work across all aspects of computers, from the lowest to the highest levels.",
  'Outside of engineering I run marketing and web development for tidalTAMU, sit on the Engineering Honors executive committee, and I am usually the one dragging a Raspberry Pi into a project that did not need one.',
];

// One-line teaser for each section, shown on the landing page.
export const overview = {
  about: 'Who I am, how I work, and what I am looking forward to.',
  experience: 'My research, engineering, and leadership roles.',
  projects: 'Case studies, products, and things I built to explore new ideas.',
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
