import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { dementiaTypes, dementiaStages } from "@/data/dementia-care";

export const metadata: Metadata = {
  title: "Types & Stages of Dementia",
  description:
    "Learn about the main types of dementia — Alzheimer's, vascular, Lewy body, frontotemporal, and mixed — and how dementia progresses through early, middle, and late stages.",
};

export default function DementiaOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "Types & Stages of Dementia" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Types &amp; Stages of Dementia
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Understanding the different types of dementia and how the condition progresses is
            fundamental to delivering person-centred care. Every person&apos;s experience of
            dementia is unique.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key Statistics */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-3">Key Statistics (UK)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-primary/10">
            <p className="text-2xl font-bold text-primary">944,000</p>
            <p className="text-sm text-muted">People estimated to be living with dementia in the UK (Alzheimer&apos;s Society, 2023)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-primary/10">
            <p className="text-2xl font-bold text-primary">1 in 14</p>
            <p className="text-sm text-muted">People over 65 have dementia; this rises to 1 in 3 over 95</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-primary/10">
            <p className="text-2xl font-bold text-primary">70%+</p>
            <p className="text-sm text-muted">Of care home residents have dementia or severe memory problems</p>
          </div>
        </div>
      </div>

      {/* Types of Dementia */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Types of Dementia</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Dementia is an umbrella term for a range of progressive conditions that affect the brain.
          Knowing the type of dementia helps you understand the person&apos;s symptoms, anticipate
          challenges, and tailor your care approach. Below are the most common types encountered
          in UK care homes.
        </p>

        <div className="space-y-6">
          {dementiaTypes.map((type) => (
            <div key={type.name} className="bg-white rounded-lg border border-border p-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                <h3 className="text-lg font-bold text-foreground">{type.name}</h3>
                <span className="inline-flex items-center text-xs font-medium bg-primary-light text-primary rounded-full px-3 py-1 whitespace-nowrap">
                  {type.proportion}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {type.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Common Symptoms:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {type.symptoms.map((symptom) => (
                    <li key={symptom} className="flex items-start gap-2 text-sm text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stages of Dementia */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Stages of Dementia</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Dementia is progressive, but the rate and pattern of decline varies greatly between individuals
          and between types. These stages provide a general framework — every person&apos;s journey is different.
        </p>

        <div className="space-y-6">
          {dementiaStages.map((stage, index) => (
            <div key={stage.name} className="bg-white rounded-lg border border-border p-5">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{stage.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-1">{stage.description}</p>
                </div>
              </div>

              <div className="pl-14 mt-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1.5 mb-4">
                  {stage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-foreground mb-2">Care Focus:</h4>
                <ul className="space-y-1.5">
                  {stage.careFocus.map((focus) => (
                    <li key={focus} className="flex items-start gap-2 text-sm text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important considerations */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Important Considerations</h2>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Person-centred approach:</strong> Always see the person first, not the dementia. Their life history, preferences, and personality remain central to who they are.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Delirium vs. dementia:</strong> Delirium is a sudden-onset confusional state, often caused by infection, pain, or medication changes. It is a medical emergency and must always be ruled out when a person&apos;s condition changes rapidly.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Mental Capacity Act 2005:</strong> Always assume a person has capacity unless assessed otherwise. Support people to make their own decisions wherever possible.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Individual variation:</strong> No two people experience dementia the same way. Always tailor your approach to the individual.
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.alzheimers.org.uk/about-dementia/types-dementia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — Types of Dementia ↗
            </a>
          </li>
          <li>
            <a href="https://www.nhs.uk/conditions/dementia/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NHS — Dementia Overview ↗
            </a>
          </li>
          <li>
            <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE NG97 — Dementia: Assessment, Management and Support ↗
            </a>
          </li>
          <li>
            <a href="https://www.dementiadojo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Dementia Dojo — Learning Resources ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
              policies, formal training, or current CQC standards. Always follow your employer&apos;s
              specific procedures and consult your line manager or the relevant professional body
              if you are unsure. The information here is based on current CQC frameworks and UK
              legislation but may not reflect the very latest updates. Always verify with
              <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> and
              <a href="https://www.alzheimers.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> alzheimers.org.uk</a> for the most current guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}