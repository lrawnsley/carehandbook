import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Falls Prevention & Management",
  description:
    "Comprehensive falls prevention and management guidance for UK care homes — risk assessment, prevention checklists, and post-fall protocols aligned with NICE CG161 and CQC standards.",
};

const subPages = [
  {
    href: "/falls/risk-assessment",
    title: "Risk Assessment",
    description:
      "Intrinsic, extrinsic, and medication-related risk factors for falls. Interactive falls risk assessment template to identify and document individual risk.",
    icon: "📋",
  },
  {
    href: "/falls/prevention-checklist",
    title: "Prevention Checklist",
    description:
      "Evidence-based prevention strategies across environment, medication, exercise, and care planning — aligned with NICE CG161 recommendations.",
    icon: "🛡️",
  },
  {
    href: "/falls/post-fall-protocol",
    title: "Post-Fall Protocol",
    description:
      "Step-by-step protocol for responding to a fall — immediate actions, assessment, monitoring, and reporting requirements including CQC notification.",
    icon: "🚨",
  },
];

export default function FallsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Falls Prevention & Management" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🦴</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Falls Prevention &amp; Management
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Falls are among the most common and serious incidents in care homes. Approximately 30% of
          people over 65 and 50% of people over 80 fall each year, and falls are the leading cause
          of injury-related death in older adults. Yet most falls are preventable.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">About Falls in Care Homes</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Falls are a significant concern in care homes, where residents often have multiple risk
            factors including advanced age, mobility problems, cognitive impairment, and polypharmacy.
            NICE Clinical Guideline CG161 (Assessment and Prevention of Falls in Older People) and
            CQC &ldquo;Safe&rdquo; regulations both require care homes to assess falls risk, implement
            prevention strategies, and respond appropriately when falls occur.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Care Handbook provides guidance on identifying risk factors, implementing prevention
            strategies, and following a clear post-fall protocol. A proactive, evidence-based
            approach can significantly reduce the incidence and severity of falls.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation &amp; guidance:</strong> NICE CG161 (Falls: Assessment and Prevention),
            CQC Regulation 12 (Safe Care and Treatment), Health and Safety at Work etc. Act 1974,
            and the Manual Handling Operations Regulations 1992.
          </p>
        </div>
      </div>

      {/* Key stats */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">30%</p>
            <p className="text-sm text-muted">Of people over 65 fall each year — rising to 50% for those over 80</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">1 in 5</p>
            <p className="text-sm text-muted">Falls in care homes result in serious injury (fracture, head injury)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-primary">50%+</p>
            <p className="text-sm text-muted">Of falls in care homes are repeat falls — previous fall is the strongest predictor</p>
          </div>
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
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.nice.org.uk/guidance/cg161" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE CG161 — Falls: Assessment and Prevention ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.nhs.uk/conditions/falls/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NHS — Preventing Falls ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/slips/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Preventing Slips, Trips and Falls ↗
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
                specific procedures and consult your line manager, GP, or falls team if you are unsure.
                Refer to
                <a href="https://www.nice.org.uk/guidance/cg161" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> NICE CG161</a> and
                <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> for the most current guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}