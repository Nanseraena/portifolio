export interface Exp {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
  dotColor: string;
  accentColor: string;
  accentBg: string;
}

export const experiences: Exp[] = [
  {
    period: "Dec 2025 – Aug 2026",
    role: "Software Developer (Full-stack)",
    company: "Baisoft Global",
    description:
      "Contributed to enterprise Task Management ERP and EDUMAS platforms, building reusable Next.js and Django components, typed REST integrations, and resilient user experiences.",
    tags: ["Next.js", "TypeScript", "Django", "PostgreSQL"],
    icon: "ri-code-s-slash-line",
    dotColor: "bg-slate-900",
    accentColor: "text-slate-900",
    accentBg: "bg-slate-100 dark:bg-slate-800",
  },
  {
    period: "Jul 2024 – Oct 2024",
    role: "UI/UX Designer & Frontend Developer",
    company: "YMCA Institute Uganda",
    description:
      "Translated Figma designs into responsive React components, integrated frontend interfaces with backend APIs, and collaborated on reliable MySQL data models in weekly sprints.",
    tags: ["React", "Figma", "REST APIs", "MySQL"],
    icon: "ri-layout-4-line",
    dotColor: "bg-blue-500",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    period: "Jul 2023 – Oct 2023",
    role: "Software Developer",
    company: "Innovation Hub",
    description:
      "Developed versioned Laravel APIs for the Turwa MICE platform, optimised PostgreSQL queries, Dockerised services, and helped achieve 95% test coverage on payment workflows.",
    tags: ["Laravel", "PostgreSQL", "Docker", "REST APIs"],
    icon: "ri-terminal-box-line",
    dotColor: "bg-emerald-500",
    accentColor: "text-emerald-500",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
];
