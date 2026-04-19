import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { storageRequirements } from "@/data/medication";

export const metadata: Metadata = {
  title: "Medication Storage Requirements",
  description:
    "Medication storage requirements in UK care homes — general storage, fridge medications, controlled drug storage, temperature monitoring, and good practice.",
};

export default function StoragePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "Medication Storage Requirements" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Medication Storage Requirements
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Correct storage of medication is essential to ensure it remains effective and 
            safe. Storage that is too hot, too cold, or too humid can degrade medication 
            and make it dangerous or ineffective.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* General Storage */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">General Storage Requirements</h2>
        <ul className="space-y-2.5">
          {storageRequirements.general.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="flex-shrink-0 text-primary font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Fridge Storage */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Refrigerated Medication Storage</h2>
        <ul className="space-y-2.5">
          {storageRequirements.fridge.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="flex-shrink-0 text-primary font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Common fridge medications:</strong> Insulin (most types), some antibiotics 
            (e.g. amoxicillin suspension after reconstitution), some eye drops (e.g. 
            chloramphenicol), some vaccines (influenza, COVID-19), certain liquids 
            (e.g. some morphine solutions, some calcium supplements). Always check the label — 
            if it says &ldquo;Store in refrigerator&rdquo; or &ldquo;Store at 2–8°C&rdquo;, it must go in the fridge.
          </p>
        </div>
      </section>

      {/* Controlled Drug Storage */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Controlled Drug Storage</h2>
        <ul className="space-y-2.5">
          {storageRequirements.controlledDrugs.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="flex-shrink-0 text-primary font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Temperature Monitoring */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Temperature Monitoring</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Temperature monitoring is a key part of safe medication storage. Recommended practice:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Medication room temperature should be recorded daily — ideally between 15°C and 25°C (check specific product requirements)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Fridge temperature must be recorded at least once daily (minimum–maximum thermometer recommended)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            If room temperature exceeds 25°C for a prolonged period, check with the pharmacist whether medication is still safe to use
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Record any temperature breaches and the action taken (e.g. &ldquo;pharmacist contacted — medication safe to continue&rdquo; or &ldquo;medication replaced&rdquo;)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            During hot weather, consider additional measures: close curtains, use fans, or request air conditioning in the medication room
          </li>
        </ul>
      </section>

      {/* Self-Administration */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5">
        <h3 className="font-bold text-foreground mb-2">Self-Administration of Medication</h3>
        <p className="text-sm text-muted leading-relaxed">
          Some residents may self-administer medication where a risk assessment has been completed 
          and the resident has been assessed as having capacity and the ability to do so safely 
          (in line with CQC Regulation 12 and NICE Guideline SC1). Self-administered medication 
          should still be stored securely unless the risk assessment supports the resident keeping 
          it in their room (e.g. in a locked drawer). A record of self-administered medication 
          must still be maintained on the MAR chart (coded &ldquo;S&rdquo;).
        </p>
      </section>
    </div>
  );
}