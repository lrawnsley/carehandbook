import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { employmentRights } from "@/data/staff";

export const metadata: Metadata = {
  title: "Employment Rights",
  description:
    "Contracts, Working Time Regulations, National Minimum Wage, grievance procedures, and trade union support for UK care home staff.",
};

export default function EmploymentRightsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Staff & Employer Resources", href: "/staff-resources" },
        { label: "Employment Rights" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Employment Rights
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Every care worker has employment rights protected by law. Understanding your rights 
            helps you ensure you are treated fairly and can deliver safe, effective care without 
            exploitation or unfair treatment. This section covers the key employment rights that 
            apply to care home workers in England.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Important:</strong> The information on this page is for general guidance only and 
          does not constitute legal advice. If you have a specific employment issue, you should 
          seek advice from your trade union, ACAS, or an employment law solicitor. ACAS provides 
          free, impartial advice on employment rights: <strong>www.acas.org.uk</strong> or 
          <strong> 0300 123 1100</strong>.
        </p>
      </div>

      {/* Employment rights */}
      <div className="space-y-6">
        {employmentRights.map((right) => (
          <section key={right.title} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-3">{right.title}</h2>
            <p className="text-muted leading-relaxed text-sm">{right.content}</p>
          </section>
        ))}
      </div>

      {/* Useful contacts */}
      <div className="mt-8 bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Where to Get Help</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">•</span>
            <div><strong>ACAS</strong> — Free, impartial advice on employment rights and workplace disputes. www.acas.org.uk / 0300 123 1100</div>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">•</span>
            <div><strong>Your trade union</strong> — UNISON, GMB, or RCN can provide advice, representation, and support on employment matters</div>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">•</span>
            <div><strong>Employment Tribunal</strong> — If you cannot resolve your dispute through internal procedures or ACAS, you may be able to bring a claim to an Employment Tribunal</div>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">•</span>
            <div><strong>HMRC National Minimum Wage Enforcement</strong> — If you believe you are being paid below the NMW, you can report this to HMRC: www.gov.uk/national-minimum-wage</div>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">•</span>
            <div><strong>Protect</strong> — Free, confidential advice on whistleblowing: www.protect-advice.org.uk / 020 3102 7020</div>
          </li>
        </ul>
      </div>
    </div>
  );
}