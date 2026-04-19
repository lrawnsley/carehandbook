import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fiveRights } from "@/data/medication";

export const metadata: Metadata = {
  title: "The 5 Rights of Medication Administration",
  description:
    "The five rights of safe medication administration in UK care homes: Right Patient, Right Medication, Right Dose, Right Route, Right Time.",
};

export default function FiveRightsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "The 5 Rights" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            The 5 Rights of Medication Administration
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The 5 Rights are the foundation of safe medication administration. Every time you 
            give medication, you must check all five rights — never skip this, even if you 
            are familiar with the resident and their medication.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Important:</strong> Some organisations use 7, 8 or even 10 Rights — adding 
          Right Documentation, Right to Refuse, Right Reason, and Right Response. While these 
          extended frameworks are valuable, the core 5 Rights remain the essential minimum for 
          every medication administration. Always follow your organisation&apos;s policy.
        </p>
      </div>

      <div className="space-y-6">
        {fiveRights.map((right, index) => (
          <section key={right.id} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <h2 className="text-xl font-bold text-foreground pt-1.5">
                {right.title}
              </h2>
            </div>
            <p className="text-muted leading-relaxed pl-14">{right.content}</p>
          </section>
        ))}
      </div>

      {/* Additional Rights */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mt-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Additional Rights (Some Organisations)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-foreground mb-1">Right Documentation</h3>
            <p className="text-sm text-muted leading-relaxed">
              Sign the MAR chart immediately after administration — never pre-sign or sign later from memory. Record 
              the actual time of administration, and note if a dose was refused, omitted, or administered late.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Right to Refuse</h3>
            <p className="text-sm text-muted leading-relaxed">
              Competent residents have the right to refuse medication. If a resident refuses, document the refusal on 
              the MAR chart, explain the reason, and try again later if appropriate. Never force medication. If refusal 
              persists, inform the GP and nurse in charge.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Right Reason</h3>
            <p className="text-sm text-muted leading-relaxed">
              Understand why the medication is being given. Check the indication on the MAR chart and be aware of what 
              the medication is for. If the reason seems unclear or the resident no longer needs the medication, flag it 
              for GP review.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Right Response</h3>
            <p className="text-sm text-muted leading-relaxed">
              Monitor the resident after administration for the intended effect and any adverse reactions. For example, 
              does the resident appear less anxious after PRN lorazepam? Has their pain reduced? Record the outcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}