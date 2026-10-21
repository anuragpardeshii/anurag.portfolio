import type { Metadata } from "next";
import { Caveat, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${baseUrl}/`,
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.twitter,
    ],
    jobTitle: siteConfig.experience.role,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.experience.company,
      sameAs: siteConfig.experience.url,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    description: siteConfig.description,
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="alternate"
          type="text/markdown"
          href="/api/markdown?path=/"
        />
        <link rel="describedby" href="/llms.txt" />
        <link
          rel="service-desc"
          type="application/json"
          href="/openapi.json"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
