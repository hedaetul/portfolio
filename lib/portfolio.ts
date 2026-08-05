export type Experience = {
  company: string;
  location: string;
  title: string;
  period: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  link: string;
  source: string;
};

export const portfolio = {
  firstName: 'Hedaetul',
  name: 'MD HEDAETUL ISLAM',
  role: 'Software Engineer',
  titleLine: 'Frontend & Flutter Developer',
  location: 'Dhaka, Bangladesh',
  locationShort: 'Bangladesh ↔ Remote',
  phone: '016431 49281',
  email: 'hedaetul.official@gmail.com',
  github: 'https://github.com/hedaetul',
  domain: 'hedaetul.dev',
  username: 'hedaetul',
  profileImage: '/hedaetul_dp.jpg',
  availability: 'open to roles & freelance',
  headline: 'Modern web & mobile applications.',
  focus: ['React', 'Next.js', 'TypeScript', 'Flutter'],
  summary:
    'Self-driven Frontend Engineer with 2+ years of professional experience building modern web and mobile applications across UK, USA, and Bangladeshi teams.',
  extendedSummary:
    'Experienced in React, Next.js, TypeScript, Flutter, and Firebase, with a strong focus on building reusable UI components, responsive interfaces, API integrations, and maintainable codebases. Passionate about web platform engineering, application performance, developer experience, and leveraging AI-assisted development tools to improve development speed, code quality, and productivity.',
  heroBio:
    'I build production web and mobile software end-to-end — from reusable UI systems to Firebase-backed apps. 2+ years across UK, USA, and Bangladesh teams, with a focus on React, Next.js, TypeScript, and Flutter.',
  aboutBio:
    'Software engineer and frontend & Flutter developer. I build production web and mobile applications end-to-end — from reusable UI systems and responsive interfaces to Firebase-backed apps, API integrations, and maintainable codebases.',
  aboutFacts: [
    { label: 'name', value: 'MD Hedaetul Islam' },
    {
      label: 'role',
      value: 'Software Engineer',
      comment: 'frontend & flutter',
    },
    {
      label: 'based in',
      value: 'Dhaka, Bangladesh',
      comment: 'remote-friendly',
    },
    { label: 'speaks', value: 'Bangla, English, Hindi, Urdu' },
    { label: 'status', value: 'open to roles & freelance', status: true },
  ],
  experience: [
    {
      company: 'Barqen Ltd',
      location: 'UK',
      title: 'Jr. Frontend & Flutter Developer',
      period: 'Jul 2025 – Present',
      points: [
        'Build and maintain production web and Flutter applications, working directly with a UK-based team in an async, remote-first environment.',
        'Prioritize performance and code quality, following established review and testing practices to reduce regressions.',
        'Collaborate cross-functionally to translate product requirements into responsive, user-friendly interfaces.',
      ],
    },
    {
      company: 'Echo Pass Tech',
      location: 'USA',
      title: 'Flutter Developer (Internship)',
      period: 'Jan 2025 – Jun 2025',
      points: [
        'Developed and maintained Flutter mobile applications end-to-end, from UI implementation to release.',
        'Integrated third-party and internal REST APIs, handling authentication, data syncing, and error states.',
        'Diagnosed and resolved performance and stability bugs, improving overall app reliability.',
      ],
    },
    {
      company: 'Wide Star Tech',
      location: 'Bangladesh',
      title: 'Jr. Frontend Developer (Internship)',
      period: 'Feb 2024 – Dec 2024',
      points: [
        'Built responsive web interfaces using HTML, CSS, JavaScript, and React under senior developer guidance.',
        'Collaborated within an agile team to implement UI components from design specs to functional code.',
        'Gained foundational experience in code review, version control workflows, and cross-browser testing.',
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Bajar',
      link: 'https://e-commerce-chi-peach.vercel.app/',
      source: 'https://github.com/hedaetul/e-commerce',
      category: 'E-commerce Platform',
      description:
        'Built a full-featured e-commerce app covering product catalog, cart, and checkout flow with integrated payments.',
      technologies: ['Next.js', 'Firebase', 'Stripe'],
    },
    {
      name: 'MA Education',
      link: 'https://ma-education-website-neon.vercel.app/',
      source: 'https://github.com/hedaetul/ma-education-website',
      category: 'Global Education Agency Website',
      description:
        'Developed a responsive education agency website that helps students explore study-abroad opportunities, university programs, and admission guidance.',
      technologies: ['Frontend Development'],
    },
    {
      name: 'Habit Tracker App',
      link: '#',
      source: 'https://github.com/hedaetul/flutter_habit_tracker',
      category: 'Mobile Application',
      description:
        'Developed a habit tracking application enabling users to create, manage, and monitor daily habits with progress tracking, reminders, and Stripe billing integration.',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
    },
    {
      name: 'bKash Stats App',
      link: '#',
      source: '',
      category: 'Analytics Application',
      description:
        'Built an analytics application that visualizes bKash transaction data with interactive charts, spending insights, and financial summaries to help users track their expenses.',
      technologies: ['Flutter'],
    },
  ] satisfies Project[],
  skills: [
    {
      label: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Dart', 'HTML5', 'CSS3'],
    },
    {
      label: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Material UI',
        'ShadCN UI',
        'Chakra UI',
        'Radix UI',
        'Responsive Design',
        'Semantic HTML',
      ],
    },
    {
      label: 'Mobile & State',
      items: ['Flutter', 'Riverpod', 'React Context API'],
    },
    {
      label: 'Backend & APIs',
      items: ['Firebase', 'Firestore', 'Supabase', 'REST APIs'],
    },
    {
      label: 'Architecture',
      items: [
        'Component-Based Design',
        'Reusable Components',
        'Clean Architecture',
        'MVVM',
        'Repository Pattern',
      ],
    },
    {
      label: 'Quality',
      items: [
        'Performance Optimization',
        'Code Splitting',
        'Lazy Loading',
        'Debugging',
        'Cross-Browser Compatibility',
        'Accessibility (WCAG Basics)',
      ],
    },
    {
      label: 'Tools',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Firebase Hosting',
        'Vercel',
        'npm',
        'pnpm',
      ],
    },
    {
      label: 'AI & Productivity',
      items: [
        'GitHub Copilot',
        'ChatGPT',
        'Prompt Engineering',
        'AI-assisted Software Development',
      ],
    },
  ],
  languages: ['Bangla (Native)', 'English (Professional)', 'Hindi', 'Urdu'],
  stats: [
    { value: '2+', label: 'Years experience' },
    { value: '3', label: 'Professional roles' },
    { value: '4', label: 'Selected projects' },
  ],
  education: [] as { school: string; credential: string; period: string }[],
} as const;

export const navLinks = [
  { href: '/', label: '~/home' },
  { href: '/projects', label: '~/projects' },
  { href: '/contact', label: '~/contact' },
  { href: '/about', label: '~/about' },
  { href: '/experience', label: '~/experience' },
  { href: '/skills', label: '~/skills' },
] as const;

export const terminalSuggestions = [
  'what is your stack?',
  'are you available for hire?',
  'tell me about a recent project',
  'where have you worked?',
] as const;
