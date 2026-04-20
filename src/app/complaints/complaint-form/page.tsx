import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { complaintCategories, complaintFormFields } from "@/data/complaints";

export const metadata: Metadata = {
  title: "Complaint Record Form",
  description:
    "Record complaints formally in your care home — interactive printable template covering complainant details, complaint categories, incident description, and desired outcomes.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function ComplaintFormPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "Complaints Handling", href: "/complaints" }, { label: "Complaint Record Form" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Complaint Record Form
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Use this form to record complaints formally. A written record is
            essential for CQC Regulation 16 compliance — it ensures
            complaints are tracked, investigated, and responded to within
            appropriate timescales.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Complaint Categories */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Complaint Categories</h2>
        <p className="text-muted leading-relaxed mb-6">
          Classifying complaints helps identify patterns and areas for
          improvement. The following categories cover the most common
          complaints in care homes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complaintCategories.map((cat) => (
            <div key={cat.category} className="border border-border rounded-lg p-4">
              <h3 className="text-base font-semibold text-foreground mb-2">{cat.category}</h3>
              <ul className="space-y-1.5">
                {cat.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Complaint Form */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Complaint Record</h2>
        <p className="text-muted leading-relaxed mb-6">
          Complete this form when a complaint is received. All fields should
          be filled in as fully as possible. Print this page for a paper
          version, or complete digitally and print for your records.
        </p>

        <div className="space-y-8">
          {complaintFormFields.map((section) => (
            <div key={section.category}>
              <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.fields.map((field) => {
                  if (field.type === "textarea") {
                    return (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          {field.label}
                        </label>
                        <textarea
                          className={`${inputClass} min-h-[80px] resize-y`}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          rows={3}
                        />
                      </div>
                    );
                  }
                  if (field.type === "select") {
                    return (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          {field.label}
                        </label>
                        <select className={inputClass}>
                          <option value="">Select...</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    );
                  }
                  return (
                    <div key={field.label}>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className={inputClass}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practice */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Best Practice for Recording Complaints</h2>
        <div className="space-y-4">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Record the complaint as soon as it is received — include the date and time
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Use the complainant&apos;s own words — do not paraphrase or summarise
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Assign a unique reference number for tracking the complaint through to resolution
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acknowledge the complaint within 3 working days (CQC Regulation 16)
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Keep the complainant informed of progress at agreed intervals
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Assess whether the complaint raises a safeguarding concern — if so, follow safeguarding procedures immediately
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
              </svg>
              Store complaint records securely and in accordance with data protection requirements
            </li>
          </ul>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulation-16-receiving-acting-complaints"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Regulation 16: Receiving and Acting on Complaints ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.lgo.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Local Government and Social Care Ombudsman ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulations-service-providers-managers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Regulations for Service Providers ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          This complaint record form is provided by Care Handbook for
          informational purposes. It does not constitute legal advice. Your
          care home must comply with CQC Regulation 16 and have its own
          complaints procedure. Complaint records must be handled in
          accordance with UK GDPR and the Data Protection Act 2018. If a
          complaint raises a safeguarding concern, follow your safeguarding
          procedures and report to the local authority immediately.
        </p>
      </div>
    </div>
  );
}