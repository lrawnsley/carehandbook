import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fundamentalStandards } from "@/data/cqc";

export const metadata: Metadata = {
  title: "Fundamental Standards",
  description:
    "The 13 Fundamental Standards set out in the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — the minimum standards all UK care providers must meet.",
};

export default function FundamentalStandardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "CQC Regulations", href: "/cqc-regulations" }, { label: "Fundamental Standards" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Fundamental Standards
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The Fundamental Standards are the minimum standards below which care must never fall. 
            They are set out in the Health and Social Care Act 2008 (Regulated Activities) 
            Regulations 2014, Regulations 9–20.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Important:</strong> These standards came into force on 1 April 2015. The CQC can 
          take enforcement action if a provider breaches the Fundamental Standards. Breaches can 
          result in conditions on registration, suspension, or cancellation of registration. In 
          the most serious cases, the CQC can prosecute.
        </p>
      </div>

      <div className="space-y-4">
        {fundamentalStandards.map((standard) => (
          <section key={standard.regulation} className="bg-surface rounded-xl border border-border p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">
                {standard.regulation.replace("Regulation ", "Reg ")}
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-foreground mb-1">
                  {standard.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">{standard.summary}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 bg-surface rounded-xl border border-border p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Key Points for Care Workers</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            You have a personal duty to comply with these standards — they are not just the responsibility of managers
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            If you witness a breach of standards, you have a professional and legal duty to report it
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            The Duty of Candour (Reg 20) requires honesty and openness when things go wrong
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Person-centred care (Reg 9) means treating each resident as an individual with their own preferences and needs
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Consent (Reg 11) must always be sought and the Mental Capacity Act 2005 followed when capacity is in doubt
          </li>
        </ul>
      </div>
    </div>
  );
}