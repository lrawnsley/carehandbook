import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { ipcAuditChecklist } from "@/data/infection-control";

export const metadata: Metadata = {
  title: "IPC Audit Tool",
  description:
    "Interactive infection prevention and control audit checklist for UK care homes — assess compliance across hand hygiene, PPE, environment, waste management, and outbreak preparedness.",
};

const inputClasses = "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function IPCAuditToolPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Infection Prevention & Control", href: "/infection-control" },
        { label: "IPC Audit Tool" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            IPC Audit Tool
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            An interactive infection prevention and control audit checklist for UK care homes.
            Use this tool to assess your home&apos;s compliance across key IPC areas and identify
            areas for improvement.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Instructions */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8 no-print">
        <h2 className="font-bold text-foreground mb-2">How to Use This Tool</h2>
        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Work through each category and check / tick items that are compliant.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Items that are not compliant require an action plan — note these in the comments section.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            The audit should be completed at least monthly and whenever there is an outbreak or incident.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Print a copy for your records or save as evidence for CQC inspection.
          </li>
        </ul>
      </div>

      {/* Audit header */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
          Audit Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Care Home Name</label>
            <input type="text" className={inputClasses} placeholder="Enter care home name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Date of Audit</label>
            <input type="date" className={inputClasses} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Completed By</label>
            <input type="text" className={inputClasses} placeholder="Name and role" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Date of Previous Audit</label>
            <input type="date" className={inputClasses} />
          </div>
        </div>
      </section>

      {/* Checklist categories */}
      <div>
        {ipcAuditChecklist.map((category) => (
          <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
              {category.category}
            </h2>
            <div className="space-y-3">
              {category.items.map((item, index) => (
                <label key={item} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="h-4 w-4 mt-0.5 accent-primary rounded print:hidden"
                    id={`item-${category.category}-${index}`}
                  />
                  <span className="hidden print:inline-block w-4 h-4 border border-black rounded-sm flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </label>
              ))}
            </div>
          </section>
        ))}

        {/* Comments */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Action Plan &amp; Comments
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Areas of Non-Compliance
              </label>
              <textarea
                className={`${inputClasses} min-h-[80px] resize-y`}
                placeholder="List any items that were not compliant and the action required..."
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Action Plan &amp; Responsible Person
              </label>
              <textarea
                className={`${inputClasses} min-h-[80px] resize-y`}
                placeholder="Detail actions, responsible persons, and completion dates..."
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                General Comments
              </label>
              <textarea
                className={`${inputClasses} min-h-[60px] resize-y`}
                placeholder="Any additional observations or comments..."
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* Sign-off */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Sign-Off
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Auditor Signature</label>
              <input type="text" className={inputClasses} placeholder="Print name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Date</label>
              <input type="date" className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Manager Signature</label>
              <input type="text" className={inputClasses} placeholder="Print name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Date</label>
              <input type="date" className={inputClasses} />
            </div>
          </div>
        </section>
      </div>

      {/* Context */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
        <h2 className="text-lg font-bold text-foreground mb-3">CQC &amp; Legislative Context</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The CQC assesses infection prevention and control as part of the &ldquo;Safe&rdquo; key question.
          Regulation 12 requires providers to prevent and control the spread of infection. The IPC
          Code of Practice (Department of Health &amp; Social Care) sets out the 10 criteria against
          which CQC judges IPC compliance. This audit tool covers all 10 criteria areas.
        </p>
        <ul className="space-y-3">
          <li>
            <a href="https://www.gov.uk/government/publications/infection-prevention-and-control-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              DHSC — IPC Code of Practice ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.who.int/teams/integrated-health-services/infection-prevention-control" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              WHO — Infection Prevention and Control ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8 no-print">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. This audit tool is designed to
              support your IPC governance and should be used in accordance with your organisation&apos;s
              policies. It does not replace your organisation&apos;s own audit tools or the IPC Code of
              Practice requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}