import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { preAdmissionFields } from "@/data/admission";

export const metadata: Metadata = {
  title: "Pre-Admission Assessment",
  description:
    "Comprehensive pre-admission assessment form for UK care homes — personal details, health information, mental capacity, and personal preferences. Interactive and printable.",
};

const inputClasses =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function PreAdmissionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Admission & Discharge", href: "/admission-discharge" },
          { label: "Pre-Admission Assessment" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Pre-Admission Assessment Form
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Complete this assessment before or at the point of admission to gather key information
            about the prospective resident. This form covers personal details, health history,
            mental capacity, and personal preferences — ensuring a smooth transition into the home
            and an accurate initial care plan.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Guidance */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Good practice:</strong> The pre-admission assessment should ideally be completed
          in person during a visit to the prospective resident (at their home, in hospital, or at
          the care home). Involve the person, their family, and any existing care professionals in
          the assessment. Under the Care Act 2014, local authorities have a duty to assess needs
          before placement, and the care home should ensure this information is available and
          incorporated into the care plan.
        </p>
      </div>

      {/* Assessment form sections */}
      {preAdmissionFields.map((section) => (
        <section
          key={section.category}
          className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Write here..."
                    rows={3}
                  />
                ) : field.type === "date" ? (
                  <input type="date" className={inputClasses} />
                ) : field.type === "select" ? (
                  <div className="flex flex-wrap gap-2 print:hidden">
                    {field.options && field.options.length > 0
                      ? field.options.map((option) => (
                          <label
                            key={option}
                            className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                          >
                            <input
                              type="radio"
                              name={field.label.replace(/\s+/g, "-").toLowerCase()}
                              value={option}
                              className="accent-primary"
                            />
                            {option}
                          </label>
                        ))
                      : ["Yes", "No", "Under Review"].map((option) => (
                          <label
                            key={option}
                            className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                          >
                            <input
                              type="radio"
                              name={field.label.replace(/\s+/g, "-").toLowerCase()}
                              value={option}
                              className="accent-primary"
                            />
                            {option}
                          </label>
                        ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    className={inputClasses}
                    placeholder="Enter text..."
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Additional assessment notes */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Assessment Notes</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Overall Assessment Summary
            </label>
            <textarea
              className={`${inputClasses} min-h-[100px] resize-y`}
              placeholder="Summarise key findings, risks, and recommendations from this assessment..."
              rows={5}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Identified Risks and Mitigation
            </label>
            <textarea
              className={`${inputClasses} min-h-[80px] resize-y`}
              placeholder="Note any risks identified and how they will be managed..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Assessor Name
              </label>
              <input
                type="text"
                className={inputClasses}
                placeholder="Enter your name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Signature & Date
              </label>
              <input
                type="text"
                className={inputClasses}
                placeholder="Sign and date..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Principles</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Involve the person and their family in the assessment — person-centred care starts
            before admission.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            Check mental capacity for key decisions at the time of admission — do not assume
            capacity or lack of capacity.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Obtain and review all existing care plans, risk assessments, and medical records from
            the referring agency or hospital.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Ensure the home can meet the person&apos;s assessed needs before confirming admission.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Store all assessment information securely and in accordance with GDPR and data
            protection requirements.
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
          <strong>Important Notice:</strong> This pre-admission assessment form provided by Care
          Handbook is a template for guidance only. It does not replace your organisation&apos;s
          approved assessment forms. Always follow your employer&apos;s policies and procedures.
          All personal data collected must be handled in accordance with the UK General Data
          Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
      </div>
    </div>
  );
}