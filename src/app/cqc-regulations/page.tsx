import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "CQC Regulations",
  description:
    "Understand the Care Quality Commission's framework, the 5 Key Questions, Fundamental Standards, inspection process, and ratings for UK care homes.",
};

const subPages = [
  {
    href: "/cqc-regulations/five-key-questions",
    title: "The 5 Key Questions",
    description:
      "Safe, Effective, Caring, Responsive, Well-led — the five questions CQC inspectors use to assess care quality. Understand what each question covers and what inspectors look for.",
    icon: "❓",
  },
  {
    href: "/cqc-regulations/fundamental-standards",
    title: "Fundamental Standards",
    description:
      "The 13 regulations that all health and social care providers in England must meet, from person-centred care (Reg 9) to duty of candour (Reg 20).",
    icon: "📜",
  },
  {
    href: "/cqc-regulations/inspection-ratings",
    title: "Inspection Process & Ratings",
    description:
      "How CQC inspections work — what to expect during a comprehensive or focused inspection, how ratings are awarded, and what each rating means.",
    icon: "🔍",
  },
];

export default function CQCRegulationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "CQC Regulations" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🛡️</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          CQC Regulations
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          The Care Quality Commission (CQC) is the independent regulator of health 
          and social care in England. It monitors, inspects, and rates care homes and 
          other services to ensure they meet fundamental standards of quality and safety. 
          Understanding the CQC framework is essential for every care worker.
        </p>
      </div>

      {/* CQC Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">About the Care Quality Commission</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            The CQC was established under the Health and Social Care Act 2008 and began 
            operating in its current form in 2009. Its purpose is to make sure health and 
            social care services provide people with safe, effective, compassionate, 
            high-quality care, and to encourage services to improve.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The CQC registers care providers if they meet fundamental standards, monitors 
            services through inspections and data, takes action to protect people who use 
            services, and publishes its findings to help people choose care.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            For care homes in England, the CQC is the primary regulator. Care homes in 
            Scotland are regulated by the Care Inspectorate; in Wales by Care Inspectorate 
            Wales; and in Northern Ireland by the Regulation and Quality Improvement 
            Authority (RQIA). The resources on CareKit focus on the English CQC framework.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Health and Social Care Act 2008 (Regulated Activities) 
            Regulations 2014 — these set out the Fundamental Standards that all registered 
            providers must meet.
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
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official CQC Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/how-we-do-our-job"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              How CQC Monitors Services ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/how-we-do-our-job"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              How CQC Inspects Services ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/how-we-do-our-job"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              How CQC Uses Ratings ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulations-service-providers-managers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Regulations Service Providers Must Meet ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/fundamental-standards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC Fundamental Standards ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}