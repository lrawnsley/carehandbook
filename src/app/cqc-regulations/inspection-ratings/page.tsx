import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { inspectionRatings } from "@/data/cqc";

export const metadata: Metadata = {
  title: "CQC Inspection Process & Ratings",
  description:
    "How CQC inspections work — what to expect during comprehensive and focused inspections, how ratings are awarded, and what each rating means for care homes.",
};

export default function InspectionRatingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "CQC Regulations", href: "/cqc-regulations" }, { label: "Inspection Process & Ratings" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            CQC Inspection Process & Ratings
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Understanding how CQC inspections work, what inspectors will look at, and what 
            the ratings mean for your service.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Inspection Types */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Types of Inspection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-primary-light/20 rounded-lg border border-primary/10">
            <h3 className="font-bold text-foreground mb-2">Comprehensive Inspection</h3>
            <p className="text-sm text-muted leading-relaxed">
              A full inspection covering all five key questions. Usually carried out at least 
              once every 2–3 years for services rated Good or Outstanding. For services rated 
              Requires Improvement, the CQC may inspect more frequently. Inspections may be 
              announced or unannounced.
            </p>
          </div>
          <div className="p-4 bg-primary-light/20 rounded-lg border border-primary/10">
            <h3 className="font-bold text-foreground mb-2">Focused Inspection</h3>
            <p className="text-sm text-muted leading-relaxed">
              A shorter inspection that focuses on specific concerns or areas of improvement. 
              Focused inspections do not usually change the overall rating unless the CQC finds 
              significant improvements or deterioration. They may follow up on previous 
              enforcement action or respond to specific concerns.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">What to Expect During an Inspection</h2>
        <p className="text-muted text-sm leading-relaxed mb-4">
          During a CQC inspection, inspectors will:
        </p>
        <ul className="space-y-2.5">
          {[
            "Speak with people who use the service, their relatives, and carers to understand their experiences",
            "Observe care delivery and the interactions between staff and residents",
            "Review care plans, risk assessments, medication records, and other documentation",
            "Speak with staff, managers, and the registered manager about how the service is run",
            "Check the physical environment — premises, equipment, cleanliness, safety",
            "Review staffing levels, recruitment records, training records, and supervision logs",
            "Check safeguarding records, complaint records, and incident reports",
            "Review governance systems — audits, quality monitoring, and improvement plans",
            "Observe meal times and assess nutrition and hydration provision",
            "Look at how the service monitors and improves the quality of care",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Ratings */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">CQC Ratings</h2>
        <p className="text-muted text-sm leading-relaxed mb-6">
          After an inspection, the CQC awards a rating for each of the five key questions 
          and an overall rating. The overall rating cannot be higher than the lowest-rated 
          key question, unless the inspection team provides a clear rationale.
        </p>
        <div className="space-y-4">
          {inspectionRatings.map((rating) => (
            <div key={rating.level} className="flex items-start gap-4 p-4 rounded-lg border border-border">
              <span className={`flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-bold ${rating.colour}`}>
                {rating.level}
              </span>
              <p className="text-sm text-muted leading-relaxed">{rating.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enforcement */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Enforcement Action</h2>
        <p className="text-muted text-sm leading-relaxed mb-4">
          When the CQC identifies breaches of regulations, it has a range of enforcement powers:
        </p>
        <ul className="space-y-2.5">
          {[
            { action: "Requirement notices", detail: "Formal notice that a provider must meet a specific regulation by a set date" },
            { action: "Warning notices", detail: "Notice that a provider is breaching a regulation and must improve or face further action" },
            { action: "Conditions on registration", detail: "Restrictions placed on what a provider can do (e.g. limiting the number of service users)" },
            { action: "Suspension of registration", detail: "Temporarily stopping a provider from operating — used in serious cases" },
            { action: "Cancellation of registration", detail: "Permanently removing a provider's registration — the most serious action" },
            { action: "Fixed penalty notices", detail: "Financial penalties for specific offences" },
            { action: "Simple caution", detail: "A formal caution accepted by a provider as an alternative to prosecution" },
            { action: "Prosecution", detail: "Criminal prosecution for the most serious breaches, including ill-treatment or wilful neglect" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <strong className="text-foreground flex-shrink-0">{item.action}:</strong>
              {item.detail}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}