// ─────────────────────────────────────────────────────────────
// Everything you need to personalise lives in this one file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Harshit Saini',
  role: 'Computer Engineering @ Texas A&M',
  email: 'harshit06saini@gmail.com',
  // Shown in <meta description> and social previews.
  description: 'Personal site and portfolio of Harshit Saini — computer engineer building perception systems, robotics, and web products.',
};

export const hero = {
  // The big statement at the top. Keep it to one line if you can.
  headline: 'Building perception systems and products that ship.',
  // One or two sentences of context under the headline.
  intro:
    'Computer Engineering student at Texas A&M, currently researching autonomous vehicle perception at the ENDEAVR Institute and building flight software for the Texas A&M Vertical Flight Society. Previously leading marketing and web development for tidalTAMU.',
};

export const about = [
  "I'm a Computer Engineering student at Texas A&M, minoring in Math, with a 4.0 GPA as a President's Endowed Merit Scholar and National Merit Scholar. I'm passionate about using engineering and leadership to solve complex problems and contribute to research in tech — right now that means autonomous vehicle perception, embedded flight software, and machine learning.",
  "Day to day I move between research (fine-tuning vision models on HPC clusters, building low-cost perception rigs), embedded and robotics work (ROS 2, Raspberry Pi, edge hardware), and full-stack web development. I like projects that force me to work across that whole stack.",
  'Outside of engineering I run marketing and web development for tidalTAMU, sit on the Engineering Honors executive committee, and I am usually the one dragging a Raspberry Pi into a project that did not need one.',
];

// One-line teaser for each section, shown on the landing page.
export const overview = {
  about: 'Who I am, how I work, and what I am looking for next.',
  experience: 'Research, engineering, and leadership roles — where, and what I did there.',
  projects: 'Case studies, shipped products and things I built to find out if they would work.',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Harshit-Saini0' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshit---saini/' },
  { label: 'Email', href: 'mailto:harshit06saini@gmail.com' },
];

// Optional "worked with / trusted by" strip. Empty array hides the section.
export const clients: string[] = ['ENDEAVR Institute', 'Texas A&M Vertical Flight Society', 'tidalTAMU', 'Texas A&M Engineering Honors'];

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/#contact' },
];
