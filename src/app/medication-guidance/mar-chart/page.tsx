import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "MAR Chart Guidance",
  description:
    "How to complete Medication Administration Record (MAR) charts correctly in UK care homes — coding systems, signatures, refusals, omissions, and common errors.",
};

export default function MARChartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "MAR Chart Guidance" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            MAR Chart Guidance
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The Medication Administration Record (MAR) chart is the primary document for recording 
            all medication administered to residents. It must be completed accurately and 
            contemporaneously — that is, at the time of administration, not later from memory.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* What is a MAR Chart */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">What Is a MAR Chart?</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          A MAR chart is a record of all the medication prescribed for a resident and a log 
          of when each dose is administered, refused, or omitted. It serves as:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A legal record of medication administration
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A communication tool between staff, GPs, and pharmacists
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            An audit tool for medication management
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Evidence of compliance with CQC Regulation 12 and Regulation 17
          </li>
        </ul>
      </section>

      {/* How to Complete */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">How to Complete a MAR Chart</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-foreground mb-2 text-sm">Signing for Administrated Medication</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>• Sign in the correct date/time box immediately after giving the medication</li>
              <li>• Use your full signature or initials as per the signature sheet — be consistent</li>
              <li>• Never pre-sign (sign before administering) — this is a serious breach</li>
              <li>• Never sign for medication administered by someone else</li>
              <li>• Record the actual time if it differs from the prescribed time</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-2 text-sm">Recording a Refused Dose</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>• Circle the time box or use the agreed coding (check your organisation&apos;s policy)</li>
              <li>• Record the reason for refusal if known (e.g. &ldquo;resident feels nauseous&rdquo;)</li>
              <li>• Try to administer again later if within the allowed time window</li>
              <li>• If the resident consistently refuses, inform the GP and nurse in charge</li>
              <li>• Never force medication — document the refusal clearly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-2 text-sm">Recording an Omitted Dose</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>• Mark the box as omitted using the agreed code</li>
              <li>• State the reason: resident nil by mouth, medication not available, resident off unit</li>
              <li>• Follow your organisation&apos;s policy on late administration windows</li>
              <li>• If the medication was unavailable, record what action was taken to obtain it</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Coding */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Common MAR Chart Coding</h2>
        <p className="text-sm text-muted mb-4">Most care homes use a standard coding system. Always check your organisation&apos;s specific codes.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Code</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A", "Administered (or sign/initial in box)"],
                ["O", "Omitted — reason recorded"],
                ["R", "Refused by resident — reason recorded"],
                ["N", "Not available — pharmacy contacted"],
                ["S", "Self-administered (where applicable)"],
                ["U", "Resident unconscious / nil by mouth"],
                ["H", "On leave / hospital appointment"],
                ["D", "Discontinued — new chart issued"],
              ].map(([code, meaning]) => (
                <tr key={code}>
                  <td className="border border-border px-4 py-2 font-mono font-bold text-primary">{code}</td>
                  <td className="border border-border px-4 py-2 text-muted">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Errors */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Common MAR Chart Errors</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>Pre-signing</strong> — signing before administering (a serious medication error)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>Signing for another person</strong> — each person signs only what they administered
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>Leaving boxes blank</strong> — every box must be accounted for
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>No reason for omission</strong> — if a dose is not given, the reason must be recorded
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>Illegible writing</strong> — signatures and codes must be clear and readable
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>Outdated charts</strong> — MAR charts must be renewed monthly or when medication changes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger">✗</span>
            <strong>PRN not recorded</strong> — &ldquo;as required&rdquo; medication must be recorded with indication and response
          </li>
        </ul>
      </section>

      {/* Good Practice */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5">
        <h2 className="font-bold text-foreground mb-2">Good Practice Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Check the MAR chart for new or changed prescriptions at the start of every shift
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Keep MAR charts in a secure location — they are confidential records
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Ensure all staff are trained on the specific MAR chart system your home uses
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Audit MAR charts regularly as part of your medication management governance
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Replace the MAR chart immediately when medication is changed — do not handwrite changes without authorisation from the prescriber or pharmacist
          </li>
        </ul>
      </section>
    </div>
  );
}