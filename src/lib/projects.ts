import { siteConfig } from "./config";

export type GalleryProject = {
  name: string;
  description: string;
  category: "Web" | "Backend";
  tags: readonly string[];
  preview: "teethfast" | "signal" | "workspace" | "chain";
  href?: string;
  status: "Live project" | "Sample project";
};

export const featuredProject = {
  ...siteConfig.projects[0],
  tags: ["Strategy", "Fintech", "Platform"],
};

// Sample entries are intentionally separate from the real projects in siteConfig.
// Replace them with verified work and links as the portfolio grows.
export const galleryProjects: GalleryProject[] = [
  {
    ...siteConfig.projects[1],
    href: siteConfig.projects[1].url,
    category: "Web",
    tags: ["Dental", "Orders", "Web platform"],
    preview: "teethfast",
    status: "Live project",
  },
  {
    name: "Signal API",
    description: "Sample concept for an API monitoring service. Replace with a real project when ready.",
    category: "Backend",
    tags: ["API", "Monitoring", "Backend"],
    preview: "signal",
    status: "Sample project",
  },
  {
    name: "Workspace UI",
    description: "Sample concept for a team dashboard with tasks and activity views.",
    category: "Web",
    tags: ["Dashboard", "UI", "Web"],
    preview: "workspace",
    status: "Sample project",
  },
  {
    name: "Chain Explorer",
    description: "Sample concept for browsing on-chain activity. Replace with a real project later.",
    category: "Web",
    tags: ["Web3", "Explorer", "Web"],
    preview: "chain",
    status: "Sample project",
  },
];
