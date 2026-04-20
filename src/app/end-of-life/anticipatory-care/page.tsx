import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { anticipatoryMedications, comfortMeasures } from "@/data/end-of-life";

export const metadata: Metadata = {
  title: "Anticipatory Prescribing & Comfort Care",
  description:
    "Anticipatory medications for common end-of-life symptoms, syringe driver overview, and comfort care measures to ensure dignity and relief in UK care homes.",
};

export default function AnticipatoryCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "End of Life Care", href: "/end-of-life" }, { label: "Anticipatory Prescribing & Comfort Care" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Anticipatory Prescribing &amp; Comfort Care
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Anticipatory prescribing means having medications ready before
            they are needed, so that symptoms can be managed promptly when
            they arise. This is a key part of good end of life care — it
            prevents delay in relieving pain, agitation, nausea, and
            respiratory secretions.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Why Anticipatory Prescribing Matters */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">Why Anticipatory Prescribing Matters</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          When a person is dying, symptoms can develop quickly. Without
          anticipatory prescribing, there can be delays of hours before a
          doctor prescribes and a nurse administers the medication — during
          which the person may experience unnecessary distress. NICE
          guideline NG31 recommends that anticipatory medicines are
          prescribed for people who are likely to need symptom control in
          the last days of life.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Anticipatory prescriptions should be in place before the dying phase, based on likely symptoms
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All nursing staff must know which anticipatory medications are prescribed and how to administer them
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Medications must be stored safely and checked regularly to ensure they are in date and available
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The GP or palliative care team should review anticipatory prescriptions regularly
          </li>
        </ul>
      </div>

      {/* Anticipatory Medications Table */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Common Anticipatory Medications</h2>
        <p className="text-muted leading-relaxed mb-6">
          The following medications are commonly prescribed as anticipatory
          (PRN) medications for end of life symptom management. Doses are
          typical starting ranges — always follow the individual
          prescription and the prescriber&apos;s instructions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-3 font-semibold text-foreground">Medication</th>
                <th className="text-left py-3 px-3 font-semibold text-foreground">Indication</th>
                <th className="text-left py-3 px-3 font-semibold text-foreground">Route</th>
                <th className="text-left py-3 px-3 font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {anticipatoryMedications.map((med) => (
                <tr key={med.medication} className="border-b border-border">
                  <td className="py-3 px-3 font-medium text-foreground">{med.medication}</td>
                  <td className="py-3 px-3 text-muted">{med.indication}</td>
                  <td className="py-3 px-3 text-muted whitespace-nowrap">{med.route}</td>
                  <td className="py-3 px-3 text-muted">{med.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
          <p className="text-xs text-red-800 leading-relaxed">
            <strong>Important:</strong> Only nurses who are trained and
            competent to administer subcutaneous (SC) injections should do so.
            All medication administration must be in accordance with the
            prescription, the care home&apos;s medication policy, and the
            NMC Code. Never administer medication if you are unsure about
            the dose, route, or indication.
          </p>
        </div>
      </div>

      {/* Syringe Driver Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Syringe Driver Overview</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            A syringe driver (or syringe pump) is a small, portable device
            that delivers medication continuously under the skin
            (subcutaneously) over a set period — usually 24 hours. It is
            commonly used in end of life care when a person can no longer
            swallow oral medication, or when multiple medications need to be
            given via a continuous infusion.
          </p>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">When a Syringe Driver Is Used</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                When the person is unable to swallow (e.g., semi-conscious, vomiting, or unable to absorb oral medication)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                When multiple subcutaneous medications are needed — a syringe driver reduces the number of injections
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                To maintain steady blood levels of medication for consistent symptom control
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Key Considerations</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Not all medications are compatible in the same syringe — check compatibility charts or consult a pharmacist
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The site should be checked regularly for inflammation, leakage, or discomfort — rotate the site if needed
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                A syringe driver should be set up and checked by a nurse trained in its use
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Explain to the person and their family what the syringe driver is for — it is not &ldquo;giving up&rdquo; but ensuring comfort
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comfort Measures */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Comfort Care Measures</h2>
        <p className="text-muted leading-relaxed">
          Alongside medication, these comfort measures are essential to ensure
          the person&apos;s dignity, relieve distress, and support their
          family. Good comfort care is as important as good medical
          management.
        </p>
        {comfortMeasures.map((category) => (
          <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-3">{category.category}</h3>
            <ul className="space-y-2">
              {category.measures.map((measure) => (
                <li key={measure} className="flex items-start gap-2 text-sm text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {measure}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG31 — Care of Dying Adults in the Last Days of Life ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/conditions/end-of-life-care/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — End of Life Care ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.mariecurie.org.uk/help/support/terminal-illness/managing-symptoms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Marie Curie — Managing Symptoms at End of Life ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.palliativecareguidelines.scot.nhs.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Palliative Care Guidelines (Scotland) — Symptom Management ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.bnf.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              BNF — British National Formulary ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The anticipatory prescribing information on Care Handbook is for
          informational purposes only and does not constitute medical,
          nursing, or prescribing advice. All medication must be prescribed
          by a qualified prescriber and administered by a competent, trained
          professional in accordance with the prescription and your care
          home&apos;s medication policy. Always consult the GP, district
          nurse, or palliative care specialist for clinical decisions.
        </p>
      </div>
    </div>
  );
}