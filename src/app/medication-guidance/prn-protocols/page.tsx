import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { prnGuidance } from "@/data/medication";

export const metadata: Metadata = {
  title: "PRN Medication Protocols",
  description:
    "Guidance on PRN (as required) medication in UK care homes — when to administer, recording requirements, common PRN medications, and key principles.",
};

export default function PRNProtocolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "PRN Medication Protocols" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            PRN Medication Protocols
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            PRN (pro re nata) means &ldquo;as required&rdquo;. PRN medications are not given at set times 
            but when the resident needs them. Proper use of PRN medication requires clear 
            protocols, good assessment skills, and thorough recording.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Overview */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">What Is PRN Medication?</h2>
        <p className="text-sm text-muted leading-relaxed">{prnGuidance.overview}</p>
      </section>

      {/* Key Principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Principles for PRN Medication</h2>
        <ul className="space-y-2.5">
          {prnGuidance.keyPrinciples.map((principle, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              {principle}
            </li>
          ))}
        </ul>
      </section>

      {/* Recording */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Recording PRN Medication</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Every PRN dose must be recorded on the MAR chart. Unlike regular medication, PRN 
          entries require additional information:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Indication</strong> — why was the medication given? (e.g. &ldquo;resident reporting headache&rdquo;)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Time administered</strong> — the exact time the dose was given
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Dose given</strong> — the specific amount administered
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Response/Outcome</strong> — did the medication work? Review 30–60 minutes after giving
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Non-pharmacological approaches tried</strong> — did you try alternatives first?
          </li>
        </ul>
      </section>

      {/* Common PRN Medications */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Common PRN Medications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Medication</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Indication</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Max Daily Dose</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Min Interval</th>
              </tr>
            </thead>
            <tbody>
              {prnGuidance.commonPrnMedications.map((med) => (
                <tr key={med.medication}>
                  <td className="border border-border px-4 py-2 font-medium text-foreground">{med.medication}</td>
                  <td className="border border-border px-4 py-2 text-muted">{med.indication}</td>
                  <td className="border border-border px-4 py-2 text-muted">{med.maxDailyDose}</td>
                  <td className="border border-border px-4 py-2 text-muted">{med.minimumInterval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Review Alert */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-foreground mb-2 text-sm">⚠️ When to Review PRN Use</h3>
        <p className="text-sm text-muted leading-relaxed mb-2">
          If a resident is receiving PRN medication frequently, this should trigger a review. 
          Consider the following thresholds for contacting the GP:
        </p>
        <ul className="space-y-1 text-sm text-muted">
          <li>• More than 2–3 doses of the same PRN medication in 24 hours</li>
          <li>• PRN medication needed daily for more than 3 consecutive days</li>
          <li>• PRN medication not providing adequate relief</li>
          <li>• Any adverse reaction after PRN administration</li>
        </ul>
      </section>

      {/* Non-Pharmacological Approaches */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5">
        <h3 className="font-bold text-foreground mb-2">Non-Pharmacological Alternatives</h3>
        <p className="text-sm text-muted leading-relaxed mb-2">
          Always consider whether a non-pharmacological approach could help before giving PRN medication:
        </p>
        <ul className="space-y-1 text-sm text-muted">
          <li>• <strong>Pain:</strong> Repositioning, heat/cold packs, gentle massage, distraction, companion</li>
          <li>• <strong>Anxiety/Agitation:</strong> Reassurance, familiar objects, music, reduction in stimulation, one-to-one time</li>
          <li>• <strong>Constipation:</strong> Encourage fluids, increase fibre, encourage mobility, abdominal massage</li>
          <li>• <strong>Nausea:</strong> Fresh air, ginger, small frequent meals, position adjustments</li>
          <li>• <strong>Insomnia:</strong> Reduce evening stimulation, warm drink, night light, comfort measures</li>
        </ul>
      </section>
    </div>
  );
}