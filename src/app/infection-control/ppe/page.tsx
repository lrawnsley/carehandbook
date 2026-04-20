import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { ppeDonningSequence, ppeDoffingSequence } from "@/data/infection-control";

export const metadata: Metadata = {
  title: "Personal Protective Equipment (PPE) in Care Homes",
  description:
    "Correct donning and doffing sequence for PPE in care homes — aprons, gloves, masks, and eye protection. When to use each type, how to put it on and take it off safely.",
};

const ppeTypes = [
  {
    name: "Disposable Aprons / Gowns",
    when: "When there is a risk of clothing contamination with blood, body fluids, secretions, or excretions. Essential for personal care, toileting, wound care, and cleaning tasks.",
    keyPoints: [
      "Change between residents and between tasks",
      "Aprons are single-use — dispose of after each task",
      "Ensure the apron covers your clothing fully",
      "Tie at the back of the waist; do not touch the outside when removing",
    ],
  },
  {
    name: "Gloves",
    when: "When there is a risk of exposure to blood, body fluids, secretions, excretions, or contaminated items. Also required for invasive procedures and when handling clinical waste.",
    keyPoints: [
      "Gloves are single-use — change between residents and between tasks",
      "Gloves are NOT a substitute for hand hygiene — wash or sanitise hands after removing gloves",
      "Select the correct size — ill-fitting gloves increase the risk of tears and reduce dexterity",
      "Use powder-free, low-protein nitrile gloves (reduces allergy risk)",
      "Do not wash or reuse disposable gloves",
    ],
  },
  {
    name: "Surgical Masks (Type IIR)",
    when: "When there is a risk of splash or spray of blood, body fluids, secretions, or excretions. Required during outbreak situations and when caring for residents with respiratory infections.",
    keyPoints: [
      "Type IIR fluid-repellent masks are recommended for care homes",
      "Ensure a close fit — mould the nose piece and check the seal",
      "Do not touch the front of the mask during wear or removal",
      "Change the mask if it becomes damp, damaged, or soiled",
      "Single-use — dispose of after each episode of care",
    ],
  },
  {
    name: "Eye Protection (Goggles / Face Shields)",
    when: "When there is a risk of splash or spray of blood, body fluids, or chemicals to the eyes. Required during aerosol-generating procedures and some wound care.",
    keyPoints: [
      "Goggles provide a seal around the eyes; face shields cover the face",
      "Can be single-use or reusable (follow manufacturer's instructions for decontamination)",
      "Prescription glasses are NOT adequate eye protection",
      "Adjust to fit before starting the task",
    ],
  },
];

export default function PPEPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Infection Prevention & Control", href: "/infection-control" },
        { label: "Personal Protective Equipment (PPE)" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Personal Protective Equipment (PPE)
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            PPE provides a barrier between you and infectious agents. Using the right PPE,
            in the correct way, at the right time is essential to protect yourself, your
            colleagues, and the people you care for.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key message */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Remember:</strong> PPE is the last line of defence, not the first. Hand hygiene,
          safe working practices, and environmental cleanliness are more important. PPE must be
          used correctly — incorrect use can increase the risk of infection transmission. CQC
          inspectors observe whether staff select, don, and doff PPE correctly.
        </p>
      </div>

      {/* When to use each type */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">When to Use Each Type of PPE</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          The type of PPE required depends on the task and the level of risk. Always perform a risk
          assessment and select PPE appropriate to the situation. The table below provides general
          guidance for common care home activities.
        </p>

        <div className="space-y-6">
          {ppeTypes.map((type) => (
            <div key={type.name} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                <strong>When to use:</strong> {type.when}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Points:</h4>
                <ul className="space-y-1.5">
                  {type.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donning Sequence */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Donning (Putting On) Sequence</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The order in which you put on PPE matters. If you put items on in the wrong order,
          you may contaminate clean items. Always perform hand hygiene before touching any PPE.
        </p>

        <div className="space-y-3">
          {ppeDonningSequence.map((step) => (
            <div key={step.step} className="flex items-start gap-3 bg-white rounded-lg border border-border p-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.step}
              </span>
              <div>
                <p className="text-sm text-foreground font-medium">{step.action}</p>
                <p className="text-xs text-muted mt-0.5">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doffing Sequence */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Doffing (Taking Off) Sequence</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The doffing sequence is critical — this is when you are most at risk of contaminating
          yourself. Touch ONLY the inside or fastenings of PPE items, never the contaminated
          outer surface. Perform hand hygiene between each step.
        </p>

        <div className="space-y-3">
          {ppeDoffingSequence.map((step) => (
            <div key={step.step} className="flex items-start gap-3 bg-white rounded-lg border border-border p-4">
              <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.step}
              </span>
              <div>
                <p className="text-sm text-foreground font-medium">{step.action}</p>
                <p className="text-xs text-muted mt-0.5">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            <strong>Critical:</strong> The most common mistake is failing to perform hand hygiene
            between doffing steps. Hand hygiene must be performed after removing gloves, after
            removing the apron/gown, and after removing the mask. The final hand hygiene step is
            the most critical of all.
          </p>
        </div>
      </section>

      {/* PPE Quick Reference */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Quick Reference: PPE by Task</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Task</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Apron</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Gloves</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Mask</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Eye Protection</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Personal care / Toileting", "✓", "✓", "✓*", "—"],
                ["Wound care (non-splash)", "✓", "✓", "—", "—"],
                ["Wound care (splash risk)", "✓", "✓", "✓", "✓"],
                ["Food preparation / Serving", "—", "✓", "✓*", "—"],
                ["Handling clinical waste", "✓", "✓", "✓*", "—"],
                ["Cleaning / Disinfection", "✓", "✓", "✓*", "✓*"],
                ["Caring for resident with respiratory infection", "✓", "✓", "✓", "✓*"],
                ["Body fluid spillage management", "✓", "✓", "✓", "✓"],
              ].map(([task, apron, gloves, mask, eye]) => (
                <tr key={task}>
                  <td className="border border-border px-4 py-2 text-muted">{task}</td>
                  <td className="border border-border px-4 py-2 text-center">{apron}</td>
                  <td className="border border-border px-4 py-2 text-center">{gloves}</td>
                  <td className="border border-border px-4 py-2 text-center">{mask}</td>
                  <td className="border border-border px-4 py-2 text-center">{eye}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">* Based on risk assessment / outbreak situation</p>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.gov.uk/government/publications/infection-prevention-and-control-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              DHSC — IPC Code of Practice ↗
            </a>
          </li>
          <li>
            <a href="https://www.who.int/teams/integrated-health-services/infection-prevention-control" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              WHO — Infection Prevention and Control ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/care/infection-control.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Infection Control in Care Homes ↗
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
              if you are unsure. PPE requirements may change during outbreaks — follow your
              organisation&apos;s current outbreak management plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}