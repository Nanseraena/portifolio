import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  siDocker,
  siDjango,
  siCss,
  siExpress,
  siFastapi,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGoogleanalytics,
  siGooglesearchconsole,
  siHtml5,
  siJavascript,
  siLaravel,
  siLinux,
  siLivewire,
  siMqtt,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siPytorch,
  siReact,
  siScikitlearn,
  siScrumalliance,
  siShopify,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siWordpress,
  siArduino,
  siBootstrap,
} from "simple-icons";
import CareerBook from "./CareerBook";
import SectionMenu, { type SectionMenuItem } from "./SectionMenu";
import TrialContact from "./TrialContact";
import styles from "./trialdesign.module.css";

export const metadata: Metadata = {
  title: "Nansera Ena — Software Developer",
  description: "Portfolio of Nansera Ena, a full-stack software developer based in Kampala, Uganda.",
  alternates: { canonical: "/" },
};

const technologies = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Django", icon: siDjango },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
];
const sectionNavigation: SectionMenuItem[] = [
  { label: "About", href: "#about-me", number: "01", icon: "ri-user-3-line" },
  { label: "Capabilities", href: "#services", number: "02", icon: "ri-stack-line" },
  { label: "Work", href: "#projects", number: "03", icon: "ri-layout-grid-line" },
  { label: "Career", href: "#experience", number: "04", icon: "ri-git-branch-line" },
  { label: "Contact", href: "#contact", number: "05", icon: "ri-mail-send-line" },
];

const capabilityGroups = [
  {
    title: "Frontend Development",
    icon: "ri-layout-4-line",
    featured: "React.js",
    accent: "#13e0d2",
    surface: "#092327",
    items: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "HTML5 & CSS3", icon: siHtml5 },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "JavaScript ES6+", icon: siJavascript },
      { name: "React Query", icon: siReact },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "ri-database-2-line",
    featured: "Django",
    accent: "#3191ff",
    surface: "#101e4a",
    items: [
      { name: "Django", icon: siDjango },
      { name: "Django REST Framework", icon: siDjango },
      { name: "Laravel", icon: siLaravel },
      { name: "Java", icon: siJavascript },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
      { name: "REST APIs", icon: siFastapi },
    ],
  },
  {
    title: "Mobile Development",
    icon: "ri-smartphone-line",
    featured: "Firebase",
    accent: "#18d386",
    surface: "#072d28",
    items: [
      { name: "React Native", icon: siReact },
      { name: "Flutter", icon: siFlutter },
      { name: "Firebase", icon: siFirebase },
      { name: "Firebase Auth", icon: siFirebase },
      { name: "REST API integration", icon: siFastapi },
    ],
  },
  {
    title: "Quality & Delivery",
    icon: "ri-brain-line",
    featured: "Docker",
    accent: "#ffad22",
    surface: "#392204",
    items: [
      { name: "Docker", icon: siDocker },
      { name: "CI/CD", icon: siGithub },
      { name: "Postman", icon: siFastapi },
      { name: "Swagger", icon: siFastapi },
      { name: "PHPUnit", icon: siLaravel },
    ],
  },
  {
    title: "UI & Product Design",
    icon: "ri-pages-line",
    featured: "Figma",
    accent: "#f047a8",
    surface: "#390c28",
    items: [
      { name: "Figma", icon: siReact },
      { name: "Radix UI", icon: siReact },
      { name: "Shadcn UI", icon: siReact },
      { name: "Responsive design", icon: siCss },
      { name: "Mobile-first UI", icon: siReact },
    ],
  },
  {
    title: "Collaboration & Workflow",
    icon: "ri-git-branch-line",
    featured: "Agile / Scrum",
    accent: "#8b7cff",
    surface: "#191740",
    items: [
      { name: "Agile / Scrum", icon: siScrumalliance },
      { name: "GitHub", icon: siGithub },
      { name: "GitLab", icon: siGit },
      { name: "Component architecture", icon: siReact },
      { name: "API contracts", icon: siFastapi },
      { name: "Clean code", icon: siTypescript },
    ],
  },
];

interface TrialProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const portfolioProjects: TrialProject[] = [
  {
    title: "Task Management & Organisational ERP",
    category: "Enterprise · Baisoft Global",
    description: "A multi-module, multi-tenant platform for project management, KPI/OKR tracking, resource allocation, and an integrated AI assistant.",
    tags: ["Next.js", "TypeScript", "Django", "PostgreSQL"],
  },
  {
    title: "EDUMAS",
    category: "Education technology · Baisoft Global",
    description: "An institutional management system for academics, library operations, performance tracking, objectives, and resources, with live performance dashboards.",
    tags: ["Next.js", "TypeScript", "Django", "PostgreSQL"],
  },
  {
    title: "Nasse Cleaning Services",
    category: "Full stack · Personal project",
    description: "A service-booking platform for discovering cleaning services, managing quotations, uploading property images, and booking online.",
    tags: ["Next.js", "TypeScript", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/enanansera/Nasse-cleaning-services",
  },
  {
    title: "RouteWise",
    category: "Mobility · Machine learning",
    description: "An AI-powered school transportation platform that dynamically optimises routes using traffic, weather, and road-condition signals.",
    tags: ["React Native", "Django", "PostgreSQL", "ML"],
    repoUrl: "https://github.com/walnatum/routewise-ml",
  },
  {
    title: "BeautyHub",
    category: "Beauty services · YMCA Institute",
    description: "A responsive beauty-services platform built from Figma designs, with accessible interfaces for listings, bookings, and user profiles.",
    tags: ["React", "Next.js", "REST API"],
    repoUrl: "https://github.com/YMCA-Comprehensive-Institute/beautyhubFrontend",
  },
];

type ProjectContent = "title" | "description" | "stack" | "links";

const projectContentOrders: ProjectContent[][] = [
  ["title", "description", "stack", "links"],
  ["title", "description", "links", "stack"],
  ["title", "stack", "description", "links"],
  ["title", "stack", "links", "description"],
  ["title", "links", "description", "stack"],
  ["title", "links", "stack", "description"],
  ["description", "title", "stack", "links"],
  ["description", "title", "links", "stack"],
  ["description", "stack", "title", "links"],
  ["description", "stack", "links", "title"],
  ["description", "links", "title", "stack"],
  ["description", "links", "stack", "title"],
  ["stack", "title", "description", "links"],
  ["stack", "title", "links", "description"],
  ["stack", "description", "title", "links"],
  ["stack", "description", "links", "title"],
  ["stack", "links", "title", "description"],
  ["stack", "links", "description", "title"],
  ["links", "title", "description", "stack"],
  ["links", "title", "stack", "description"],
  ["links", "description", "title", "stack"],
  ["links", "description", "stack", "title"],
  ["links", "stack", "title", "description"],
  ["links", "stack", "description", "title"],
];

const projectTagIcons: Record<string, typeof siReact> = {
  "Next.js": siNextdotjs,
  "React Native": siReact,
  React: siReact,
  "Node.js": siNodedotjs,
  TypeScript: siTypescript,
  Django: siDjango,
  Flutter: siFlutter,
  Firebase: siFirebase,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Docker: siDocker,
  "Socket.IO": siSocketdotio,
  Prisma: siPrisma,
  Laravel: siLaravel,
  Livewire: siLivewire,
  Tailwind: siTailwindcss,
  CSS: siCss,
  "REST API": siFastapi,
};

const projectTagFallbackIcons: Record<string, string> = {
  AI: "ri-brain-line",
  "AI Advisor": "ri-brain-line",
  ML: "ri-line-chart-line",
  NLP: "ri-message-3-line",
  IoT: "ri-radar-line",
  SEO: "ri-search-eye-line",
  Booking: "ri-calendar-check-line",
  "Landing Page": "ri-layout-4-line",
  Chatbot: "ri-robot-2-line",
  Botpress: "ri-message-3-line",
  "Farm Operations": "ri-leaf-line",
  "Web App": "ri-window-line",
};

export default function TrialDesignPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="top">
        <header className={styles.header}>
          <div className={styles.navigationGroup}>
            <a className={styles.mark} href="#top" aria-label="Nansera Ena home">EN</a>
            <SectionMenu sections={sectionNavigation} />
          </div>
          <nav className={styles.centerNav} aria-label="Primary navigation">
            {sectionNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className={styles.callLink} href="mailto:enanansera311@gmail.com">Get in touch ↗</a>
        </header>

        <aside className={styles.sideRail}>
          <span>Full-stack software developer</span>
          <i />
          <small>2026</small>
        </aside>

        <div className={styles.stats}>
          <div><strong>05</strong><span>Featured systems</span></div>
          <div><strong>3+</strong><span>Years experience</span></div>
        </div>

        <section className={styles.heroCopy} aria-labelledby="hero-title">
          <h1 id="hero-title">Hello.</h1>
          <p>— I&apos;m Ena, a full-stack software developer.</p>
          <a className={styles.heroResume} href="/Nansera-Ena-CV.pdf" target="_blank" rel="noreferrer">View CV <span aria-hidden="true">↗</span></a>
        </section>

        <div className={styles.portrait}>
          <Image
            src="/ena-nansera-profile.jpeg"
            alt="Nansera Ena"
            fill
            priority
            sizes="(max-width: 780px) 88vw, 49vw"
            className={styles.portraitImage}
          />
        </div>

        <p className={styles.scrollCue}>Scroll down ↓</p>
      </section>

      <section className={styles.about} id="about-me" aria-labelledby="about-title">
        <div className={styles.aboutHeading}>
          <p className={styles.sectionLabel}>02 / About me</p>
          <h2 id="about-title">Thoughtful software, from interface to infrastructure.</h2>
          <div className={styles.aboutAside}>
            <p className={styles.aboutLead}>
              I translate product ideas and Figma designs into scalable, accessible digital experiences.
            </p>
            <div className={styles.signature}>
              <i />
              <Image
                src="/ena-nansera-profile.jpeg"
                alt="Nansera Ena"
                width={112}
                height={29}
                className={styles.signatureImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCopy}>
            <span className={styles.cardEyebrow}>Who I am</span>
            <p>
              I&apos;m a mission-driven software developer based in Kampala, Uganda. I build clean, accessible user interfaces and dependable full-stack systems with React, Next.js, TypeScript, Django, and PostgreSQL.
            </p>
            <a href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
          </article>

          <div className={styles.impactCard}>
            <span>Delivery focus</span>
            <i className={styles.impactAction} aria-hidden="true">↗</i>
            <strong>95%</strong>
            <p>test coverage achieved on payment workflows through focused unit and integration testing.</p>
            <a href="#projects">View case studies <span aria-hidden="true">↗</span></a>
          </div>

          <div className={styles.aboutPortrait}>
            <Image
              src="/ena-nansera-profile.jpeg"
              alt="Nansera Ena"
              fill
              sizes="(max-width: 780px) 100vw, 32vw"
              className={styles.aboutPortraitImage}
            />
            <span>Design · build · improve</span>
          </div>
        </div>

        <div className={styles.principles}>
          <p>How I work</p>
          <div><i aria-hidden="true">✦</i><b>01</b><span>Start with people, workflows, and the real problem.</span></div>
          <div><i aria-hidden="true">&lt;/&gt;</i><b>02</b><span>Build reusable, accessible components with clean code.</span></div>
          <div><i aria-hidden="true">➤</i><b>03</b><span>Collaborate, test, and improve deliberately.</span></div>
        </div>

        <div className={styles.detailsGrid}>
          <article>
            <h3>What drives me</h3>
            <p className={styles.quote}>Creating technology that is clear to use, reliable to maintain, and meaningful to the people it serves.</p>
          </article>
          <article>
            <h3>Core values</h3>
            <ul>
              <li>Collaboration in delivery</li>
              <li>Clarity in communication</li>
              <li>Continuous learning</li>
              <li>Quality in execution</li>
            </ul>
          </article>
          <article>
            <h3>Tools &amp; technologies</h3>
            <div className={styles.toolList} aria-label="Tools and technologies">
              {technologies.map(({ name, icon }) => (
                <span key={name} aria-label={name} title={name}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.toolIcon}>
                    <path d={icon.path} />
                  </svg>
                </span>
              ))}
            </div>
            <a href="#services">and more...</a>
          </article>
          <article className={styles.locationCard}>
            <p><b>⌖</b><span>Kampala, Uganda<small>East Africa</small></span></p>
            <p><b>◷</b><span>Local time<small>EAT · UTC +3</small></span></p>
          </article>
        </div>
      </section>

      <section className={styles.capabilities} id="services" aria-labelledby="capabilities-title">
        <div className={styles.capabilitiesHeading}>
          <p>Technical arsenal</p>
          <h2 id="capabilities-title">Languages, frameworks &amp; tools.</h2>
          <p>A practical set of technologies I use to deliver accessible, scalable products.</p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              style={
                {
                  "--capability-accent": group.accent,
                  "--capability-surface": group.surface,
                } as CSSProperties
              }
            >
              <div className={styles.capabilityLabel}>
                <h3>{group.title}</h3>
                <i className={group.icon} aria-hidden="true" />
              </div>
              <ul>
                {group.items.map(({ name, icon }) => (
                  <li
                    key={name}
                    className={name === group.featured ? styles.featuredTech : undefined}
                  >
                    <span>{name}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={icon.path} />
                    </svg>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.capabilityFooter}>
          <span aria-hidden="true">&lt;/&gt;</span>
          <p>I choose tools that help teams ship clear, dependable software and keep it maintainable as it evolves.</p>
          <small>Design with empathy · build with purpose</small>
        </div>
      </section>

      <section className={styles.projects} id="projects" aria-labelledby="projects-title">
        <div className={styles.projectsHeading}>
          <p>03 / Recent projects</p>
          <h2 id="projects-title">Selected work, built to be useful.</h2>
          <p>A selection of enterprise, education, service, mobility, and consumer experiences shaped around real needs.</p>
        </div>

        <div className={styles.projectList}>
          {portfolioProjects.map((project, index) => (
            <article
              className={styles.projectRow}
              key={project.title}
              tabIndex={0}
              aria-label={`${project.title} project`}
            >
              {projectContentOrders[index].map((content) => {
                if (content === "title") {
                  return (
                    <div className={`${styles.projectBlock} ${styles.projectTitle}`} key={content}>
                      <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                  );
                }

                if (content === "description") {
                  return <p className={`${styles.projectBlock} ${styles.projectDescription}`} key={content}>{project.description}</p>;
                }

                if (content === "stack") {
                  return (
                    <div className={`${styles.projectBlock} ${styles.projectTags}`} aria-label={`${project.title} technologies`} key={content}>
                      {project.tags.map((tag) => {
                        const icon = projectTagIcons[tag];

                        return (
                          <span key={tag}>
                            <span>{tag}</span>
                            {icon ? (
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d={icon.path} />
                              </svg>
                            ) : (
                              <i className={projectTagFallbackIcons[tag] ?? "ri-code-s-slash-line"} aria-hidden="true" />
                            )}
                          </span>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <div className={`${styles.projectBlock} ${styles.projectLinks}`} key={content}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        View live <i className="ri-arrow-right-up-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        Source <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.frontendUrl && (
                      <a href={project.frontendUrl} target="_blank" rel="noreferrer">
                        Frontend <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.backendUrl && (
                      <a href={project.backendUrl} target="_blank" rel="noreferrer">
                        Backend <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                );
              })}
            </article>
          ))}
        </div>
      </section>
      <section className={styles.career} id="experience" aria-labelledby="career-title">
        <div className={styles.careerHeading}>
          <p className={styles.careerEyebrow}>04 / Career path</p>
          <h2 id="career-title">Professional<br /><span>Milestones.</span></h2>
          <div className={styles.careerIntro}>
            <span aria-hidden="true">↗</span>
            <p>My journey building enterprise software, user-focused interfaces, and dependable integrations.</p>
          </div>
        </div>

        <CareerBook />
        <div className={styles.careerClosing}><span>Built on experience. Driven by curiosity.</span><a href="#top">Back to top ↑</a></div>
      </section>
      <TrialContact />
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a className={styles.footerMark} href="#top" aria-label="Back to top">EN</a>
          <p>Full-stack software developer<br />Kampala, Uganda</p>
          <div className={styles.footerSocials}>
            <a href="https://github.com/Nanseraena" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://linkedin.com/in/ena-nansera-a4bb18253" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="/Nansera-Ena-CV.pdf" target="_blank" rel="noreferrer">CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className={styles.footerWordmark}><span>NANSERA</span><span>ENA</span></div>
        <div className={styles.footerBottom}><span>© 2026 Nansera Ena</span><span>Built with intention</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
