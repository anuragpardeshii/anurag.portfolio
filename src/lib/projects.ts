export type Project = {
  name: string;
  description: string;
  category: "Web" | "AI";
  tags: readonly string[];
  preview: string;
  url: string;
};

export const featuredProject: Project = {
  name: "Stretus",
  description:
    "AI-assisted strategy infrastructure for financial platforms, covering strategy creation, validation, backtesting, and governance.",
  category: "AI",
  tags: ["Strategy", "Fintech", "Platform"],
  preview: "/projects/stretus.webp",
  url: "https://stretus.com/",
};

export const projects: readonly Project[] = [
  featuredProject,
  {
    name: "TeethFast",
    description:
      "A digital dental lab platform for exploring restoration services, sharing case files, and managing lab orders.",
    category: "Web",
    tags: ["Dental", "Orders", "Web platform"],
    preview: "/projects/teethfast.webp",
    url: "https://lab.teethfast.in/",
  },
  {
    name: "Wisdom World Academy",
    description:
      "A school website for exploring programmes, discovering campus life, and planning a visit in Indore.",
    category: "Web",
    tags: ["Education", "School", "Admissions"],
    preview: "/projects/wisdom-world-academy.webp",
    url: "https://www.wisdomworldacademy.co.in/",
  },
  {
    name: "Clozt",
    description:
      "A fashion storefront for discovering collections, browsing new arrivals, and shopping everyday essentials.",
    category: "Web",
    tags: ["E-commerce", "Fashion", "Storefront"],
    preview: "/projects/clozt.webp",
    url: "https://clozt.vercel.app/",
  },
  {
    name: "Bagiya",
    description:
      "A mindful productivity app that turns focus sessions into progress in a growing virtual garden.",
    category: "Web",
    tags: ["Productivity", "Focus", "Gamification"],
    preview: "/projects/bagiya.webp",
    url: "https://bagiya.vercel.app/",
  },
  {
    name: "Built-fast (Agentic)",
    description:
      "An AI website builder for turning ideas into websites, refining the result, and exporting editable source code.",
    category: "AI",
    tags: ["Agentic AI", "Website builder", "Developer tools"],
    preview: "/projects/built-fast.webp",
    url: "https://agentic-workflow.vercel.app/",
  },
  {
    name: "Out",
    description:
      "A cricket squad draft game for building an XI, challenging friends, and playing simulated matches.",
    category: "Web",
    tags: ["Cricket", "Gaming", "Multiplayer"],
    preview: "/projects/out.webp",
    url: "https://out-khaki-pi.vercel.app/",
  },
];

export const galleryProjects = projects.filter(
  (project) => project.url !== featuredProject.url,
);
