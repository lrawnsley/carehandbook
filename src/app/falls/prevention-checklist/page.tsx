import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { preventionStrategies } from "@/data/falls";

export const metadata: Metadata = {
  title: "Falls Prevention Checklist",
  description:
    "Evidence-based falls prevention strategies for care homes — environmental safety, medication review, exercise and mobility, and individual care planning aligned with NICE CG161.",
};

export default function FallsPreventionChecklistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Falls Prevention & Management", href: "/falls" },
        { label: "Prevention Checklist" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Falls Prevention Checklist
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Most falls are preventable. A proactive, multifactorial approach — combining environmental
            safety, medication review, exercise, and individualised care planning — can significantly
            reduce falls risk.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key message */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>NICE CG161 recommends:</strong> Older people who have fallen or are at risk of
          falling should be offered a multifactorial assessment and individualised intervention
          plan. A single intervention is rarely effective on its own — the greatest impact comes
          from addressing multiple risk factors simultaneously.
        </p>
      </div>

      {/* Prevention Strategies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Evidence-Based Prevention Strategies</h2>
        <div className="space-y-6">
          {preventionStrategies.map((strategy) => (
            <div key={strategy.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4">{strategy.category}</h3>
              <ul className="space-y-2">
                {strategy.strategies.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Audit */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Environmental Safety Audit</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Use this checklist to assess the physical environment for falls hazards. Walk through the
          home and each resident&apos;s room regularly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { area: "Bedroom", checks: ["Bed at correct height for safe transfers", "Call bell within easy reach", "Night light available", "Non-slip mat beside the bed", "Floor free of clutter and trailing wires", "Personal items within easy reach"] },
            { area: "Bathroom / Toilet", checks: ["Grab rails installed and secure", "Non-slip mats in place", "Commode available if needed", "Toilet seat at appropriate height", "Adequate lighting", "Call bell accessible from toilet"] },
            { area: "Corridors / Communal Areas", checks: ["Even flooring — no loose carpets or mats", "No trailing cables", "Adequate lighting (especially at night)", "Handrails along corridors", "Clear pathways — no clutter", "Wet floor signs available and used"] },
            { area: "General", checks: ["Appropriate footwear available for residents", "Walking aids in good repair and correct height", "Heating adequate — cold rooms increase stiffness", "Spill response kits accessible", "Outdoor areas safe and well-lit", "Signage clear and visible"] },
          ].map((section) => (
            <div key={section.area} className="bg-white rounded-lg border border-border p-4">
              <h4 className="text-sm font-bold text-foreground mb-3">{section.area}</h4>
              <ul className="space-y-1.5">
                {section.checks.map((check) => (
                  <li key={check} className="flex items-start gap-2 text-xs text-muted">
                    <span className="inline-block w-3.5 h-3.5 border border-gray-300 rounded-sm flex-shrink-0 mt-0.5" />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise Recommendations */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Exercise &amp; Mobility Recommendations</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          NICE CG161 recommends that older people at risk of falls are offered group or home-based
          exercise programmes that combine strength and balance training. Exercise is one of the
          most effective single interventions for falls prevention.
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-border p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Evidence-Based Exercise Programmes</h4>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>OSTEO programme:</strong> Evidence-based home exercise programme for older people at risk of falls
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Tai Chi:</strong> Shown to reduce falls risk in older adults by improving balance and proprioception
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Strength and balance classes:</strong> Group-based sessions incorporating chair-based exercises, standing balance, and progressive resistance training
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Walking programmes:</strong> For residents who can walk with or without aids — promotes independence and deconditioning prevention
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Seated exercises:</strong> For residents with limited mobility — maintains upper body strength and circulation
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-border p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Key Principles</h4>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Any exercise is better than none — even seated exercises reduce deconditioning
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Programmes should be at least 12 weeks in duration for maximum benefit
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Refer to physiotherapy for individual assessment and programme design
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Encourage residents to be active within their capability — reduce sedentary time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Quick Reference: Falls Prevention Summary</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">1.</span>
            <strong>Assess</strong> — Conduct a multifactorial falls risk assessment on admission, after any fall, and regularly.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">2.</span>
            <strong>Environment</strong> — Conduct regular environmental checks — lighting, flooring, call bells, grab rails.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">3.</span>
            <strong>Medication</strong> — Request regular medication reviews, especially for psychotropic and polypharmacy.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">4.</span>
            <strong>Exercise</strong> — Promote regular strength and balance exercise appropriate to ability.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">5.</span>
            <strong>Plan</strong> — Develop an individualised falls prevention care plan for every resident at risk.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">6.</span>
            <strong>Monitor</strong> — Review and update the care plan after every fall, change in condition, or near-miss.
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
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
            <a href="https://www.ageuk.org.uk/information-advice/health-wellkeeping/keeping-fit-healthy/preventing-falls/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Age UK — Preventing Falls ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/slips/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Preventing Slips, Trips and Falls ↗
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
              specific procedures and consult your line manager, GP, or falls team if you are unsure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}