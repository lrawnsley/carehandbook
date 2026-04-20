import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fire Safety",
  description:
    "Fire safety resources for UK care homes — risk assessment, personal emergency evacuation plans (PEEPs), and evacuation checklists to keep residents and staff safe.",
};

const subPages = [
  {
    href: "/fire-safety/risk-assessment",
    title: "Fire Risk Assessment",
    description:
      "How to carry out a fire risk assessment in your care home, including the four key categories of risk, who is responsible, and a step-by-step template walkthrough.",
    icon: "📋",
  },
  {
    href: "/fire-safety/peep",
    title: "Personal Emergency Evacuation Plan (PEEP)",
    description:
      "Create a PEEP for every resident who needs assistance to evacuate — covering mobility, sensory and cognitive needs, medical requirements, and designated escape routes.",
    icon: "🚑",
  },
  {
    href: "/fire-safety/evacuation-checklist",
    title: "Evacuation Checklist",
    description:
      "Step-by-step evacuation procedure from discovering a fire to post-incident review, including a fire drill log and assembly point guidance.",
    icon: "🚪",
  },
];

export default function FireSafetyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Fire Safety" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🔥</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Fire Safety
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Fire safety is a critical responsibility for every care home. Under the
          Regulatory Reform (Fire Safety) Order 2005, care homes must carry out a
          fire risk assessment, maintain fire safety measures, and ensure all
          residents — especially those with limited mobility or cognitive
          impairment — can evacuate safely. Care Handbook provides practical
          resources to help you meet these obligations.
        </p>
      </div>

      {/* Fire Safety Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Fire Safety in Care Homes
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Care homes present unique fire safety challenges. Many residents have
            limited mobility, sensory impairments, or cognitive conditions such
            as dementia that mean they cannot evacuate without assistance. Some
            residents use oxygen, which increases fire risk. The fire risk
            assessment must take all of these factors into account.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Responsible Person — usually the registered manager or care home
            owner — must ensure that a suitable and sufficient fire risk
            assessment is carried out, that fire safety measures are
            implemented and maintained, and that staff receive fire safety
            training. This includes practising fire drills at least twice a year.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Every resident who may have difficulty evacuating must have a
            Personal Emergency Evacuation Plan (PEEP). This document sets out
            the person&apos;s needs, the assistance they require, and the
            evacuation route they will use. PEEPs should be reviewed regularly
            and shared with all staff who may need to implement them.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Regulatory Reform (Fire Safety)
            Order 2005 (England & Wales); Fire (Scotland) Act 2005 and the
            Fire Safety (Scotland) Regulations 2006; Fire Safety Regulations
            (Northern Ireland) 2010. The CQC also inspects fire safety as part
            of its &ldquo;Safe&rdquo; key question.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {subPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all no-underline"
          >
            <div className="p-5 sm:p-6">
              <span className="text-3xl block mb-3">{page.icon}</span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {page.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{page.description}</p>
              <div className="mt-3 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Fire Safety Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.uk/workplace-fire-safety-your-responsibilities"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              GOV.UK — Workplace Fire Safety Responsibilities ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.hse.gov.uk/fire-and-explosion.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              HSE — Fire and Explosion ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulations-service-providers-managers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Regulations for Service Providers and Managers ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nfsa.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              National Fire Chiefs Council — Fire Safety Guidance ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The fire safety guidance on Care Handbook is for informational purposes
          only and does not constitute legal or professional fire safety advice.
          Care homes must comply with the Regulatory Reform (Fire Safety) Order
          2005 and any applicable devolved legislation. Always consult a
          qualified fire safety professional and your local Fire and Rescue
          Service for advice specific to your premises. In an emergency, always
          call 999.
        </p>
      </div>
    </div>
  );
}