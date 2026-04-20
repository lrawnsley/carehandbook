import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Infection Prevention & Control",
  description:
    "Essential infection prevention and control guidance for UK care homes — hand hygiene, PPE, outbreak management, and IPC audit tools aligned with CQC and WHO standards.",
};

const subPages = [
  {
    href: "/infection-control/hand-hygiene",
    title: "Hand Hygiene",
    description:
      "The WHO 5 Moments of Hand Hygiene, handwashing technique, and when to use alcohol hand rub — the single most effective way to prevent the spread of infection.",
    icon: "🧼",
  },
  {
    href: "/infection-control/ppe",
    title: "Personal Protective Equipment (PPE)",
    description:
      "Correct donning and doffing sequence for PPE in care homes — aprons, gloves, masks, and eye protection. When to use each type and how to dispose of it safely.",
    icon: "🧤",
  },
  {
    href: "/infection-control/outbreak-management",
    title: "Outbreak Management",
    description:
      "How to recognise, manage, and report outbreaks in care homes — including norovirus, influenza, COVID-19, and scabies. Notification requirements and isolation procedures.",
    icon: "🦠",
  },
  {
    href: "/infection-control/audit-tool",
    title: "IPC Audit Tool",
    description:
      "Interactive infection prevention and control audit checklist — assess your home's compliance across hand hygiene, PPE, environment, waste management, and outbreak preparedness.",
    icon: "📋",
  },
];

export default function InfectionControlPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Infection Prevention & Control" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🦠</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Infection Prevention &amp; Control
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Infection prevention and control (IPC) is a critical aspect of care home practice.
          Care home residents are often more vulnerable to infections due to age, underlying health
          conditions, and close living arrangements. Effective IPC protects residents, staff,
          and visitors.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">About Infection Control in Care Homes</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 require
            registered providers to assess the risk of, and prevent, detect, and control the spread
            of infections (Regulation 12). CQC inspectors specifically assess infection control as
            part of the &ldquo;Safe&rdquo; key question.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Care Handbook provides guidance aligned with the Department of Health &amp; Social
            Care&apos;s &ldquo;Health and Social Care Act 2008: Code of Practice on the prevention
            and control of infections&rdquo; (the IPC Code of Practice), World Health Organization
            guidelines, and Health Protection Agency best practice.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key standard:</strong> CQC Regulation 12 (Safe Care and Treatment) requires
            providers to do all that is reasonably practicable to mitigate risks to health and
            safety, including the risk of infection. The IPC Code of Practice sets out the 10
            criteria that registered providers must meet.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

      {/* Key Stats */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Why Infection Control Matters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">3,000–4,000</p>
            <p className="text-sm text-muted">Outbreaks reported in UK care homes each year (norovirus, flu, COVID-19, scabies)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">1 in 5</p>
            <p className="text-sm text-muted">Care home residents experience a healthcare-associated infection at any given time</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">#1</p>
            <p className="text-sm text-muted">Hand hygiene is the single most effective measure to prevent the spread of infections (WHO)</p>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.gov.uk/government/publications/infection-prevention-and-control-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              DHSC — IPC Code of Practice for Care Homes ↗
            </a>
          </li>
          <li>
            <a href="https://www.who.int/teams/integrated-health-services/infection-prevention-control" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              WHO — Infection Prevention and Control ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/care/infection-control.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Infection Control in Care Homes ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
              <p className="text-muted leading-relaxed">
                Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
                policies, formal training, or current CQC standards. Always follow your employer&apos;s
                specific procedures and consult your line manager or the relevant professional body
                if you are unsure. Infection control guidance evolves rapidly — always verify with
                <a href="https://www.gov.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> gov.uk</a> and
                <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> for the most current guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}