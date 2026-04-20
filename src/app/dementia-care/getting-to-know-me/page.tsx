import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { gettingToKnowMeFields } from "@/data/dementia-care";

export const metadata: Metadata = {
  title: "Getting to Know Me Template",
  description:
    "Interactive, printable 'Getting to Know Me' life story template for dementia care — capture personal history, preferences, routines, and communication needs.",
};

const inputClasses = "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function GettingToKnowMePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      {/* Print-only header */}
      <div className="hidden print:block mb-6">
        <div className="text-center border-b-2 border-black pb-4 mb-4">
          <h1 className="text-2xl font-bold">Getting to Know Me</h1>
          <p className="text-sm">Care Handbook — Person-Centred Life Story Template</p>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "Getting to Know Me Template" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Getting to Know Me
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A person-centred life story template. Complete this with the person and their family
            to help every member of the care team understand who the person is, what matters to
            them, and how they want to be supported.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Instructions */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8 no-print">
        <h2 className="font-bold text-foreground mb-2">How to Use This Template</h2>
        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Complete this form together with the person, their family, and anyone who knows them well.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            It should be reviewed and updated regularly — people&apos;s preferences can change.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Keep a copy in the person&apos;s room and in their care plan file so all staff can access it.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            This is a living document — add notes, photos, and mementoes that bring the person&apos;s story to life.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            You can fill in this form on-screen or print a blank version.
          </li>
        </ul>
      </div>

      {/* Form fields */}
      <div>
        {gettingToKnowMeFields.map((section) => (
          <section key={section.section} className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
              {section.section}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.label} className={field.type === "textarea" ? "col-span-2" : ""}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      className={`${inputClasses} min-h-[80px] resize-y`}
                      placeholder="Write here..."
                      rows={3}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className={inputClasses}
                      placeholder={field.type === "text" ? "Enter text..." : undefined}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Additional notes */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Additional Notes
          </h2>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Anything else that would help us care for this person?
          </label>
          <textarea
            className={`${inputClasses} min-h-[100px] resize-y`}
            placeholder="Write here..."
            rows={4}
          />
        </section>

        {/* Completed by */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Completed By
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input type="text" className={inputClasses} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Role</label>
              <input type="text" className={inputClasses} placeholder="Your role" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Date Completed</label>
              <input type="date" className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Date Reviewed</label>
              <input type="date" className={inputClasses} />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
        <h2 className="text-lg font-bold text-foreground mb-3">Why This Matters</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The Alzheimer&apos;s Society &ldquo;This Is Me&rdquo; tool and NICE NG97 both recommend that care homes
          develop a detailed life story document for every person living with dementia. This helps
          staff deliver person-centred care and is specifically referenced by CQC inspectors when
          assessing the &ldquo;Caring&rdquo; and &ldquo;Responsive&rdquo; key questions.
        </p>
        <ul className="space-y-3">
          <li>
            <a href="https://www.alzheimers.org.uk/get-support/daily-living/this-is-me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — This Is Me Tool ↗
            </a>
          </li>
          <li>
            <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE NG97 — Dementia: Assessment, Management and Support ↗
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
              Care Handbook is a <strong>guidance resource only</strong>. This template is designed to
              support person-centred care and should be completed in accordance with your
              organisation&apos;s policies. Always follow your employer&apos;s specific procedures for
              recording and storing personal information in compliance with GDPR and data protection
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}