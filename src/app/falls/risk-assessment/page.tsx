import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fallRiskFactors } from "@/data/falls";

export const metadata: Metadata = {
  title: "Falls Risk Assessment",
  description:
    "Intrinsic, extrinsic, and medication-related falls risk factors with an interactive falls risk assessment template for UK care homes.",
};

const inputClasses = "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

const fallsAssessmentFields = [
  { section: "Resident Details", fields: [
    { label: "Full Name", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "Room Number", type: "text" },
    { label: "Date of Assessment", type: "date" },
    { label: "Completed By", type: "text" },
  ]},
  { section: "Previous Falls History", fields: [
    { label: "Number of Falls in Last 12 Months", type: "text" },
    { label: "Date of Most Recent Fall", type: "date" },
    { label: "Circumstances of Most Recent Fall", type: "textarea" },
    { label: "Injuries Sustained", type: "text" },
  ]},
  { section: "Medical History", fields: [
    { label: "Diagnosed Conditions (e.g., Parkinson's, stroke, arthritis)", type: "textarea" },
    { label: "Current Medications (list all, noting high-risk medications)", type: "textarea" },
    { label: "Visual Impairment", type: "select", options: ["Yes — corrected", "Yes — uncorrected", "No", "Unknown"] },
    { label: "Cognitive Impairment (e.g., dementia, delirium)", type: "select", options: ["Yes — diagnosed", "Suspected", "No", "Unknown"] },
    { label: "Continence Issues", type: "select", options: ["None", "Urgency", "Incontinence — urinary", "Incontinence — bowel", "Dual incontinence"] },
    { label: "History of Dizziness or Blackouts", type: "select", options: ["Yes", "No", "Unknown"] },
  ]},
  { section: "Mobility & Balance", fields: [
    { label: "Walking Aid Used", type: "select", options: ["None", "Zimmer frame", "Wheeled walker", "Stick — single", "Stick — double", "Crutches", "Wheelchair", "Other"] },
    { label: "Description of Gait and Balance", type: "textarea" },
    { label: "Transfers (bed/chair) Independence Level", type: "select", options: ["Independent", "Needs standby assistance", "Needs physical assistance", "Requires hoist", "Bedbound"] },
    { label: "Fear of Falling", type: "select", options: ["Not reported", "Mild concern", "Significant fear", "Avoids activity due to fear"] },
  ]},
  { section: "Environmental Assessment", fields: [
    { label: "Lighting (adequate in bedroom, bathroom, corridors)", type: "select", options: ["Adequate", "Needs improvement"] },
    { label: "Floor Surfaces (even, non-slip, dry)", type: "select", options: ["Adequate", "Needs improvement"] },
    { label: "Call Bell Accessible", type: "select", options: ["Yes", "No"] },
    { label: "Bed Height Appropriate", type: "select", options: ["Yes", "No — too high", "No — too low"] },
    { label: "Bathroom Safety (grab rails, non-slip mats)", type: "select", options: ["Adequate", "Needs improvement"] },
    { label: "Clutter / Obstruction Hazards", type: "select", options: ["None identified", "Minor hazards", "Significant hazards"] },
  ]},
  { section: "Overall Risk Rating", fields: [
    { label: "Overall Falls Risk Level", type: "select", options: ["Low", "Medium", "High", "Very High"] },
    { label: "Key Concerns Identified", type: "textarea" },
    { label: "Preventive Actions to Be Taken", type: "textarea" },
    { label: "Review Date", type: "date" },
  ]},
];

export default function FallsRiskAssessmentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Falls Prevention & Management", href: "/falls" },
        { label: "Risk Assessment" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Falls Risk Assessment
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Understanding the risk factors for falls is the foundation of effective prevention. All
            residents should be assessed on admission, after any fall, after a change in condition,
            and at regular intervals. NICE CG161 recommends using a multifactorial falls risk
            assessment.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Risk Factor Information */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
        <h2 className="text-xl font-bold text-foreground mb-2">Understanding Falls Risk Factors</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Falls risk factors are traditionally categorised into three groups: intrinsic (personal),
          extrinsic (environmental), and medication-related. Most falls result from a combination
          of risk factors rather than a single cause. The more risk factors a person has, the
          greater their risk of falling.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          <strong>The strongest single predictor of a fall is a history of previous falls.</strong> This
          is why every resident who falls should be reassessed promptly, and why recording and
          analysing falls data is essential.
        </p>
      </div>

      {/* Risk Factors Detail */}
      {fallRiskFactors.map((category) => (
        <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
          <h2 className="text-xl font-bold text-foreground mb-2">{category.category}</h2>
          <ul className="space-y-2">
            {category.factors.map((factor) => (
              <li key={factor} className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {factor}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Assessment Form */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Falls Risk Assessment Template
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Complete this assessment on admission, after any fall, after a change in condition or
          medication, and at regular intervals (at least monthly or as per your organisation&apos;s policy).
        </p>

        <div>
          {fallsAssessmentFields.map((section) => (
            <div key={section.section} className="mb-8 last:mb-0">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                {section.section}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div key={field.label} className={field.type === "textarea" ? "col-span-2" : ""}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        className={`${inputClasses} min-h-[80px] resize-y`}
                        placeholder="Write here..."
                        rows={3}
                      />
                    ) : field.type === "select" && field.options ? (
                      <>
                        {/* Screen: interactive radio pills */}
                        <div className="flex flex-wrap gap-2 print:hidden">
                          {field.options.map((option) => (
                            <label key={option} className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light">
                              <input type="radio" name={field.label} value={option} className="accent-primary" />
                              {option}
                            </label>
                          ))}
                        </div>
                        {/* Print: clean checkbox list */}
                        <div className="hidden print:block">
                          {field.options.map((option) => (
                            <label key={option} className="flex items-center gap-2 text-sm py-0.5">
                              <span className="inline-block w-3.5 h-3.5 border border-black rounded-sm flex-shrink-0" />
                              {option}
                            </label>
                          ))}
                        </div>
                      </>
                    ) : (
                      <input
                        type={field.type}
                        className={inputClasses}
                        placeholder={field.type === "text" ? "Enter text..." : undefined}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NICE guidance */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6 no-print">
        <h2 className="font-bold text-foreground mb-2">NICE CG161 Recommendations</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            All older people in contact with healthcare professionals should be asked routinely about falls in the past year.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Older people who present with a fall should be offered a multifactorial falls risk assessment.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Older people with identified risk factors should be offered a multifactorial intervention plan.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Regular medication review should be part of the multifactorial assessment.
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.nice.org.uk/guidance/cg161" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE CG161 — Falls: Assessment and Prevention ↗
            </a>
          </li>
          <li>
            <a href="https://www.nhs.uk/conditions/falls/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NHS — Preventing Falls ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8 no-print">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
              policies, formal training, or current CQC standards. Always follow your employer&apos;s
              specific procedures and consult your line manager, GP, or falls team if you are unsure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}