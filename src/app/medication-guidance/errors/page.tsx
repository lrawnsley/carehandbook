import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { errorGuidance } from "@/data/medication";

export const metadata: Metadata = {
  title: "Medication Errors — What to Do",
  description:
    "What to do when a medication error occurs in a UK care home — immediate steps, reporting requirements, common error types, and prevention strategies.",
};

export default function ErrorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "Medication Errors" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Medication Errors — What to Do
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A medication error is any preventable event that may cause or lead to inappropriate 
            medication use or patient harm. How you respond to an error is critical — the 
            resident&apos;s safety comes first, followed by honest reporting and learning.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Overview */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Understanding Medication Errors</h2>
        <p className="text-sm text-muted leading-relaxed">{errorGuidance.overview}</p>
      </section>

      {/* Immediate Steps */}
      <section className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Immediate Steps — Follow This Sequence</h2>
        <ol className="space-y-2.5">
          {errorGuidance.immediateSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground">
              <span className="flex-shrink-0 w-7 h-7 bg-danger text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Common Errors */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Common Medication Errors</h2>
        <div className="space-y-4">
          {errorGuidance.commonErrors.map((error, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-3">{error.error}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="font-medium text-foreground block mb-1">Common Causes:</span>
                  <span className="text-muted">{error.causes}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="font-medium text-foreground block mb-1">Prevention:</span>
                  <span className="text-muted">{error.prevention}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reporting & Learning */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Reporting & Learning</h2>
        <ul className="space-y-2.5">
          {errorGuidance.reportingAndLearning.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="flex-shrink-0 text-primary font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Just Culture */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-foreground mb-2">A Just Culture Approach</h3>
        <p className="text-sm text-muted leading-relaxed">
          A &ldquo;just culture&rdquo; is one where staff feel safe to report errors and near-misses 
          without fear of unfair blame or punishment. The CQC and NICE both support a just 
          culture approach. In a just culture:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          <li>• <strong>Human error</strong> (an honest mistake) is met with support and learning</li>
          <li>• <strong>At-risk behaviour</strong> (taking shortcuts) is met with coaching and system improvement</li>
          <li>• <strong>Reckless behaviour</strong> (conscious disregard for safety) is met with disciplinary action</li>
        </ul>
        <p className="mt-2 text-sm text-muted">
          The vast majority of medication errors are caused by system failures — not individual 
          incompetence. Blaming individuals without fixing the system does not prevent future errors.
        </p>
      </section>

      {/* Emergency Contacts */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Emergency Contacts for Medication Errors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong className="text-foreground block mb-1">Life-Threatening Emergency</strong>
            <span className="text-danger font-bold text-lg">999</span>
            <p className="text-muted mt-1">If the resident has a severe reaction, loss of consciousness, or difficulty breathing</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong className="text-foreground block mb-1">Non-Emergency Advice</strong>
            <span className="text-primary font-bold text-lg">111</span>
            <p className="text-muted mt-1">NHS 111 for advice on medication errors when the resident appears stable</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong className="text-foreground block mb-1">Pharmacist / GP</strong>
            <span className="text-primary font-bold">Contact directly</span>
            <p className="text-muted mt-1">For advice on whether a missed dose should be given late, or potential interactions</p>
          </div>
        </div>
      </section>
    </div>
  );
}