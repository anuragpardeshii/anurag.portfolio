import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}'s portfolio website. No cookies, no personal data collection.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1
        className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
        style={{ letterSpacing: "-0.02em", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
      >
        Privacy Policy
      </h1>

      <p className="mb-8 leading-relaxed text-gray-600">
        This privacy policy explains how {siteConfig.name}&apos;s portfolio
        website handles visitor data. This site is designed with privacy in mind:
        it does not collect personal data, does not use cookies, and does not
        track individual visitors.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          Data Collection
        </h2>
        <p className="leading-relaxed text-gray-600">
          This website does not collect, store, or process any personal data from
          visitors. There are no sign-up forms, user accounts, login systems, or
          databases that store visitor information. No information is sold,
          shared, or transferred to third parties for any purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Analytics</h2>
        <p className="leading-relaxed text-gray-600">
          This site uses{" "}
          <a
            href="https://vercel.com/analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 hover:text-blue-600"
          >
            Vercel Analytics
          </a>{" "}
          for anonymous, aggregated usage statistics. Vercel Analytics is a
          privacy-focused analytics service that does not use cookies, does not
          track individual visitors across sessions, and does not collect
          personally identifiable information. It measures page views and Web
          Vitals performance metrics only. No data is shared with advertising
          networks.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Cookies</h2>
        <p className="leading-relaxed text-gray-600">
          This website does not set any first-party or third-party cookies. No
          cookie consent banner is needed because no cookies are used.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          Third-Party Services
        </h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-gray-600">
          <li>
            <strong className="text-gray-800">Vercel</strong>: Hosts the
            website and provides anonymous analytics as described above.
            Vercel&apos;s own{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              privacy policy
            </a>{" "}
            applies to their hosting infrastructure.
          </li>
          <li>
            <strong className="text-gray-800">Google Fonts</strong>: Typography
            is loaded from Google Fonts. When fonts are requested, your browser
            makes a request to Google&apos;s servers.{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Google&apos;s privacy policy
            </a>{" "}
            applies to these requests.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Contact</h2>
        <p className="leading-relaxed text-gray-600">
          If you have any questions about this privacy policy or how this website
          handles data, please contact {siteConfig.name} at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-blue-500 hover:text-blue-600"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Changes</h2>
        <p className="leading-relaxed text-gray-600">
          This privacy policy may be updated from time to time. The latest
          version is always available at this URL. Any significant changes will
          be noted with an updated date below.
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Last updated: August 2026
        </p>
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
