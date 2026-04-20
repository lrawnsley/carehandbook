import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { admissionChecklistItems } from "@/data/admission";

export const metadata: Metadata = {
  title: "Admission Checklist",
  description:
    "Step-by-step admission process checklist for UK care homes — from before arrival through 4-week review. Ensure every task is completed when welcoming a new resident.",
};

export default function AdmissionChecklistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Admission & Discharge", href: "/admission-discharge" },
          { label: "Admission Checklist" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Admission Checklist
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A comprehensive step-by-step checklist for managing new admissions. Use this guide to
            ensure nothing is missed — from preparing the room before arrival, through the first
            24 hours, to the 4-week review. A well-structured admission process helps residents
            feel welcome and supported, and ensures all necessary assessments and documentation are
            completed promptly.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* CQC guidance */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>CQC Expectations:</strong> Under the &ldquo;Safe&rdquo; and
          &ldquo;Responsive&rdquo; key questions, CQC inspectors look for evidence that admissions
          are well-managed, that care plans are completed promptly, and that necessary assessments
          are carried out within required timescales. The admission checklist helps demonstrate
          compliance with Regulations 9, 10, 11, 12, and 13 of the Health and Social Care Act
          2008.
        </p>
      </div>

      {/* Checklist sections */}
      <div className="space-y-6 mb-8">
        {admissionChecklistItems.map((section) => {
          const accentColors: Record<string, string> = {
            "Before Arrival": "bg-blue-50 border-blue-200",
            "On Arrival": "bg-green-50 border-green-200",
            "Within 24 Hours": "bg-amber-50 border-amber-200",
            "Within 72 Hours": "bg-orange-50 border-orange-200",
            "Within 4 Weeks": "bg-purple-50 border-purple-200",
          };
          const colors = accentColors[section.category] || "bg-gray-50 border-gray-200";

          return (
            <section
              key={section.category}
              className={`rounded-xl border p-6 sm:p-8 ${colors}`}
            >
              <h2 className="text-xl font-bold text-foreground mb-2">{section.category}</h2>
              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-primary rounded print:hidden flex-shrink-0"
                    />
                    <span className="inline-block w-4 h-4 border border-black rounded-sm hidden print:inline-block flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Additional notes section */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Admission Notes</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Resident Name
            </label>
            <input
              type="text"
              className="w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none"
              placeholder="Enter resident name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Date of Admission
            </label>
            <input
              type="date"
              className="w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Additional Notes / Observations
            </label>
            <textarea
              className="w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none min-h-[100px] resize-y"
              placeholder="Note any additional observations, concerns, or actions taken during admission..."
              rows={5}
            />
          </div>
        </div>
      </section>

      {/* Key principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Admission Principles</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Make the new resident feel welcome — introduce yourself, show them around, and explain
            what to expect.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            Complete all risk assessments within 24 hours — falls, pressure sore, MUST, and
            medication reconciliation are priorities.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Obtain consent for care and treatment, and assess mental capacity for key decisions
            following the Mental Capacity Act 2005.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Ensure the GP has been notified and a visit arranged within 24 hours.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Develop an initial care plan in partnership with the resident and their family — do
            not rely solely on the pre-admission assessment.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">6.</span>
            Hold a review meeting with the resident and family within 4 weeks to finalise the care
            plan and address any concerns.
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Care Quality Commission ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.scie.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              SCIE — Social Care Institute for Excellence ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.skillsforcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Skills for Care — Workforce Development ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.ageuk.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Age UK — Advice and Support for Older People ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> This admission checklist provided by Care Handbook is
          a template for guidance only. It does not replace your organisation&apos;s approved
          admission procedures or local authority requirements. Always follow your employer&apos;s
          policies and ensure all statutory and regulatory requirements are met. Timescales may
          vary depending on local authority and CCG requirements.
        </p>
      </div>
    </div>
  );
}