export type CompanyVisual = "software" | "safari" | "network" | "civic" | "research";

export interface CompanyDetails {
  sector: string;
  headline: string;
  context: string;
  websiteUrl?: string;
  websiteLabel?: string;
  initials: string;
  visual: CompanyVisual;
}

export const companyDetails: Record<string, CompanyDetails> = {
  "Baisoft Global": {
    sector: "Enterprise software",
    headline: "Systems that help teams move.",
    context: "A software team building enterprise-grade products for organisations that need clear, scalable operations.",
    initials: "BG",
    visual: "software",
  },
  "YMCA Institute Uganda": {
    sector: "Education & skills",
    headline: "Design into useful experiences.",
    context: "An education-focused environment where accessible interfaces and collaborative product work meet.",
    initials: "YI",
    visual: "civic",
  },
  "Innovation Hub": {
    sector: "Digital innovation",
    headline: "Ideas, engineered carefully.",
    context: "A collaborative setting for building, testing, and improving digital solutions with practical impact.",
    initials: "IH",
    visual: "network",
  },
};
