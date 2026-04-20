import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { advanceCarePlanFields } from "@/data/end-of-life";

export const metadata: Metadata = {
  title: "Advance Care Planning",
  description:
    "Support residents to plan their future care — advance decisions, DNACPR, Lasting Power of Attorney, and recording wishes. Interactive printable form included.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function AdvanceCarePlanningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "End of Life Care", href: "/end-of-life" }, { label: "Advance Care Planning" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Advance Care Planning
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Advance care planning (ACP) is a process of discussion between a
            person, their care providers, and those important to them. It
            enables the person to express their wishes, preferences, and
            priorities for their future care — including decisions about
            treatments they would or would not want.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key Principles */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">Key Principles of Advance Care Planning</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Person-centred:</strong> The person&apos;s wishes and preferences must be at the centre of all decisions
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Voluntary:</strong> ACP is entirely voluntary — no one should be pressured into making decisions
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Mental Capacity:</strong> The person must have the mental capacity to make advance decisions — if capacity is lost, previously recorded wishes must be respected (Mental Capacity Act 2005)
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Reviewed regularly:</strong> An advance care plan should be reviewed whenever the person&apos;s condition or wishes change
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Shared:</strong> The plan should be shared with all those involved in the person&apos;s care, including the GP and any specialists
          </li>
        </ul>
      </div>

      {/* DNACPR Section */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">DNACPR (Do Not Attempt Cardiopulmonary Resuscitation)</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            A DNACPR decision records that if a person&apos;s heart or
            breathing stops, CPR should not be attempted. This is a clinical
            decision made by a senior clinician, but it should be discussed
            with the person (if they have capacity) or their legal
            representative.
          </p>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Key Points</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                A DNACPR decision applies only to CPR — it does not mean &ldquo;do not treat&rdquo; or withdrawal of any other care
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The ReSPECT (Recommended Summary Plan for Emergency Care and Treatment) form is now widely used and includes DNACPR decisions alongside broader emergency care recommendations
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The decision must be recorded clearly, reviewed regularly, and communicated to all relevant staff
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                If a person with capacity refuses CPR, this must be respected under the Mental Capacity Act 2005
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lasting Power of Attorney */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Lasting Power of Attorney (LPA)</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            A Lasting Power of Attorney is a legal document that allows someone
            to appoint one or more trusted people to make decisions on their
            behalf if they lose the capacity to make those decisions
            themselves. There are two types relevant to care planning:
          </p>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Health and Welfare LPA</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              This allows the attorney to make decisions about the
              person&apos;s medical treatment, care, and daily routine. It
              can only be used when the person has lost capacity. This is the
              most relevant LPA for advance care planning.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Property and Financial Affairs LPA</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              This allows the attorney to make decisions about the
              person&apos;s finances and property. It can be used while the
              person still has capacity, with their permission.
            </p>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-border">
            <p className="text-xs text-muted leading-relaxed">
              <strong>Note:</strong> An LPA must be registered with the Office
              of the Public Guardian before it can be used. It must be set up
              while the person still has mental capacity. Care homes should
              check on admission whether a resident has an LPA in place and
              record the details of any attorney.
            </p>
          </div>
        </div>
      </div>

      {/* Advance Decision to Refuse Treatment */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Advance Decision to Refuse Treatment (ADRT)</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            An Advance Decision (sometimes called a &ldquo;living will&rdquo;)
            is a legal document where a person states which treatments they
            would not want to receive in specific circumstances if they
            later lose capacity. Under the Mental Capacity Act 2005:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              An ADRT is legally binding if it is valid and applicable to the situation
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              If a person wants to refuse life-sustaining treatment, the ADRT must be in writing, signed, witnessed, and include a statement that it applies even if their life is at risk
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              An ADRT can be withdrawn or changed at any time while the person still has capacity
            </li>
          </ul>
        </div>
      </div>

      {/* Advance Care Plan Form */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Advance Care Plan Form</h2>
        <p className="text-muted leading-relaxed mb-6">
          Use this form to record a resident&apos;s advance care plan. This
          should be completed in conversation with the resident (where
          possible), their family, and the care team. Print this page for a
          paper version.
        </p>

        <div className="space-y-8">
          {advanceCarePlanFields.map((section) => (
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

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG31 — Care of Dying Adults in the Last Days of Life ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.dyingmatters.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Dying Matters — Talk, Plan, Live ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/conditions/end-of-life-care/advance-care-planning/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — Advance Care Planning ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.uk/power-of-attorney"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              GOV.UK — Lasting Power of Attorney ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.respectprocess.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              ReSPECT — Emergency Care and Treatment Planning ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The advance care planning guidance on Care Handbook is for
          informational purposes only and does not constitute medical, legal,
          or professional advice. Always follow your care home&apos;s policies
          and procedures, consult the resident&apos;s GP or palliative care
          team for clinical decisions, and seek legal advice for matters
          relating to advance decisions, lasting power of attorney, or
          DNACPR. The Mental Capacity Act 2005 and its Code of Practice must
          be followed at all times.
        </p>
      </div>
    </div>
  );
}