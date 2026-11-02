export const resumeSkills = [
  ["Frontend", "HTML5 · CSS3 · JavaScript · TypeScript · React.js · Next.js"],
  ["State management", "Redux Toolkit · Redux Saga · React Query · TanStack Query · React Context"],
  ["UI & design", "Figma · Radix UI · Shadcn UI · Tailwind CSS · Responsive design"],
  ["Backend", "Python · Django · Django REST Framework · Laravel · RESTful APIs · Java"],
  ["Data & delivery", "PostgreSQL · MySQL · Firebase · Docker · CI/CD · Git"],
  ["Mobile", "Flutter · React Native · Firebase Auth · Payment gateway integration"],
] as const;

export const resumeProjects = [
  { icon: "ri-layout-grid-line", name: "Task Management & Organisational ERP", text: "A multi-tenant ERP for project management, KPI/OKR tracking, resource allocation, and an integrated AI assistant.", technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL"], liveUrl: null },
  { icon: "ri-graduation-cap-line", name: "EDUMAS", text: "An educational management system for academics, libraries, performance, objectives, and institutional resources.", technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL"], liveUrl: null },
  { icon: "ri-home-heart-line", name: "Nasse Cleaning Services", text: "A full-stack booking platform with quotations, service-area management, secure authentication, and an administrative dashboard.", technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL"], liveUrl: null },
  { icon: "ri-route-line", name: "RouteWise", text: "An AI-powered school transportation platform that dynamically optimises routes from traffic, weather, and road conditions.", technologies: ["React Native", "Django", "PostgreSQL", "ML"], liveUrl: null },
  { icon: "ri-store-2-line", name: "BeautyHub", text: "A responsive beauty-services platform built from Figma designs with accessible booking and profile experiences.", technologies: ["React", "Next.js", "REST API"], liveUrl: null },
  { icon: "ri-calendar-event-line", name: "Turwa MICE Booking System", text: "A secure hotel bookings and events management platform with OAuth2-protected APIs and versioned documentation.", technologies: ["Laravel", "PostgreSQL", "REST API"], liveUrl: null },
] as const;

export interface EarlierExperience {
  company: string;
  role: string;
  text: string;
}

export const earlierExperience: readonly EarlierExperience[] = [];
