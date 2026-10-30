import { siteConfig } from "./config";
import { featuredProject, galleryProjects } from "./projects";

type PageMarkdown = {
  title: string;
  body: string;
};

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

/** Generate the Markdown representation of a public page. */
export function getPageMarkdown(pathname: string): PageMarkdown | null {
  const normalized = pathname.replace(/\/$/, "") || "/";

  switch (normalized) {
    case "/":
      return getHomeMarkdown();
    case "/about":
      return getAboutMarkdown();
    case "/projects":
      return getProjectsMarkdown();
    case "/developers":
      return getDevelopersMarkdown();
    case "/contact":
      return getContactMarkdown();
    case "/privacy":
      return getPrivacyMarkdown();
    default:
      return null;
  }
}

function getHomeMarkdown(): PageMarkdown {
  return {
    title: siteConfig.title,
    body: `# ${siteConfig.name}

> Turning ideas into software solutions.

${siteConfig.bio} Based in ${siteConfig.location}.

## Experience

- [${siteConfig.experience.role} at ${siteConfig.experience.company}](${siteConfig.experience.url}) — ${siteConfig.experience.period}; ${siteConfig.experience.duration}

## Tech Stack

${siteConfig.techStack.map((tech) => `- ${tech}`).join("\n")}

## Services

${siteConfig.services.map((service) => `- **${service.name}**: ${service.description}`).join("\n")}

## Recent Projects

${siteConfig.projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`).join("\n")}

## Links

- [GitHub](${siteConfig.github})
- [LinkedIn](${siteConfig.linkedin})
- [Twitter/X](${siteConfig.twitter})
- [Email](mailto:${siteConfig.email})
- [About](${baseUrl}/about)
- [Projects](${baseUrl}/projects)
- [Developers](${baseUrl}/developers)
- [Contact](${baseUrl}/contact)
- [Privacy](${baseUrl}/privacy)
- [llms.txt](${baseUrl}/llms.txt)
`,
  };
}

function getProjectsMarkdown(): PageMarkdown {
  return {
    title: `Projects - ${siteConfig.name}`,
    body: `# Projects

## Featured Project

- [${featuredProject.name}](${featuredProject.url}): ${featuredProject.description}

## Project Gallery

${galleryProjects.map((project) => `- [${project.name}](${project.url}) (${project.category}): ${project.description}`).join("\n")}
`,
  };
}

function getAboutMarkdown(): PageMarkdown {
  return {
    title: `About - ${siteConfig.name}`,
    body: `# About ${siteConfig.name}

I’m ${siteConfig.name}, a software engineer based in ${siteConfig.location}. I build scalable products with clean, maintainable code.

I enjoy turning ideas into practical software, from intuitive user interfaces to the systems that support them.

[Connect on LinkedIn](${siteConfig.linkedin})

## Experience

- [${siteConfig.experience.role} at ${siteConfig.experience.company}](${siteConfig.experience.url}) — ${siteConfig.experience.period}; ${siteConfig.experience.duration}

## Projects

${siteConfig.projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`).join("\n")}

- [Browse all projects](${baseUrl}/projects)

## Tech Stack

${siteConfig.techStack.map((tech) => `- ${tech}`).join("\n")}

## Contact

- Email: ${siteConfig.email}
- Alternative email: ${siteConfig.alternativeEmail}
- Phone: ${siteConfig.phone}
- Location: ${siteConfig.location}
- GitHub: ${siteConfig.github}
- LinkedIn: ${siteConfig.linkedin}
- Twitter/X: ${siteConfig.twitter}
`,
  };
}

function getDevelopersMarkdown(): PageMarkdown {
  return {
    title: `Developer Resources - ${siteConfig.name}`,
    body: `# ${siteConfig.name} Developer Resources

## Projects

${siteConfig.projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`).join("\n")}

- [Browse all projects](${baseUrl}/projects)

## Machine-Readable Resources

- [OpenAPI 3.1.0 Contract](${baseUrl}/openapi.json): Public Markdown endpoint description
- [llms.txt Guide](${baseUrl}/llms.txt): Portfolio overview for AI agents
- [Sitemap XML](${baseUrl}/sitemap.xml): Public page index

## Source Code

- [GitHub Profile](${siteConfig.github})
`,
  };
}

function getContactMarkdown(): PageMarkdown {
  return {
    title: `Contact - ${siteConfig.name}`,
    body: `# Contact ${siteConfig.name}

## Email

- **Primary**: ${siteConfig.email}
- **Alternative**: ${siteConfig.alternativeEmail}

## Phone

- ${siteConfig.phone}

## Social

- [GitHub](${siteConfig.github})
- [LinkedIn](${siteConfig.linkedin})
- [Twitter/X](${siteConfig.twitter})

## Location

${siteConfig.location}
`,
  };
}

function getPrivacyMarkdown(): PageMarkdown {
  return {
    title: `Privacy Policy - ${siteConfig.name}`,
    body: `# Privacy Policy

> This privacy policy explains how ${siteConfig.name}'s portfolio website (${baseUrl}) handles visitor data.

## Data Collection

This website does not collect, store, or process personal data from visitors. There are no sign-up forms, accounts, or user databases.

## Analytics

This site uses [Vercel Analytics](https://vercel.com/analytics) for anonymous, aggregated usage statistics.

## Cookies

This website does not set cookies.

## Third-Party Services

- **Vercel**: Hosts the website and provides analytics.
- **Google Fonts**: Fonts are loaded from Google Fonts.

## Contact

If you have questions about this policy, contact ${siteConfig.name} at [${siteConfig.email}](mailto:${siteConfig.email}).

## Changes

This policy may be updated from time to time. The latest version is available at ${baseUrl}/privacy.
`,
  };
}
