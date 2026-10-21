import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

const socialLinks = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Twitter/X", href: siteConfig.twitter },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1
        className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
        style={{ letterSpacing: "-0.02em", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
      >
        Contact
      </h1>

      <p className="mb-8 max-w-lg leading-relaxed text-gray-600">
        Have a project in mind or just want to say hi? Reach out through any of
        the channels below.
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Email</h2>
        <div className="space-y-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="block rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
          >
            <p className="text-sm text-gray-500">Primary</p>
            <p className="font-semibold text-blue-500">{siteConfig.email}</p>
          </a>
          <a
            href={`mailto:${siteConfig.alternativeEmail}`}
            className="block rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
          >
            <p className="text-sm text-gray-500">Alternative</p>
            <p className="font-semibold text-blue-500">
              {siteConfig.alternativeEmail}
            </p>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Phone</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <a
            className="font-semibold text-gray-800 hover:text-blue-500"
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          >
            {siteConfig.phone}
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Social</h2>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Location</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <p className="font-semibold text-gray-800">{siteConfig.location}</p>
        </div>
      </section>

      <div className="border-t border-gray-100 pt-6">
        <Link
          href="/"
          className="text-sm font-medium text-blue-500 hover:text-blue-600"
        >
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
