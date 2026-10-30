import { projects } from "./projects";

export const siteConfig = {
  name: "Anurag Pardeshi",
  title: "Anurag Pardeshi - Software Engineer",
  description:
    "Software engineer building scalable products with clean code and purposeful engineering.",
  tagline: "Turning ideas into",
  taglineAccent: "software solutions.",
  bio: "Software engineer building scalable products with clean code and purposeful engineering.",
  email: "pardeshianurag22@gmail.com",
  alternativeEmail: "Anuragpardeshi2001@gmail.com",
  phone: "+91 84353 04050",
  location: "Indore, Madhya Pradesh, India",
  github: "https://github.com/anuragpardeshii",
  linkedin: "https://www.linkedin.com/in/pardeshianurag22/",
  twitter: "https://x.com/anuragpardeshi",
  experience: {
    duration: "1 year of experience",
    company: "iMentus Technologies",
    role: "Associate Software Engineer",
    period: "Nov 2025 – Present",
    url: "https://www.linkedin.com/company/imentus/",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  availability: {
    title: "Open to Work",
    preference: "Full-time | Remote",
    details: "Open to full-time & freelance roles",
  },
  stickyNote: "Ship fast. Iterate often. Write clean code.",
  footerQuote: "Build systems that outlast the hype.",
  services: [
    {
      name: "Web Development",
      description: "Websites and web applications.",
    },
    {
      name: "Business Solutions",
      description: "CRM, ERP, HRMS.",
    },
    {
      name: "Data & Analytics",
      description: "Dashboards, reporting, BI.",
    },
    {
      name: "Automation Solutions",
      description: "Workflow automation, AI agents, integrations.",
    },
    {
      name: "Industry-Specific SaaS",
      description: "School, healthcare, logistics, retail.",
    },
    {
      name: "Cloud & IT Solutions",
      description: "Hosting, deployment, APIs, maintenance.",
    },
  ],
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Golang",
    "Solidity",
    "Rust",
    "Microservices",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  projects,
} as const;
