import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { abuseTypes, alertFormFields, investigationSteps } from "@/data/safeguarding";

export const metadata: Metadata = {
  title: "Safeguarding Alert Form",
  description:
    "Interactive safeguarding alert form for UK care homes — recognise abuse types, document concerns, and follow the correct investigation procedures to protect adults at risk.",
};

const inputClasses =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function SafeguardingAlertFormPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Safeguarding", href: "/safeguarding" },
          { label: "Safeguarding Alert Form" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Safeguarding Alert Form
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Use this form to document and raise a safeguarding concern. Complete as fully as
            possible and submit to your designated safeguarding lead. All safeguarding concerns
            must be taken seriously and reported promptly. Under the Care Act 2014, you have a
            duty to report any suspicion of abuse or neglect.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Urgent notice */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-red-800">
          <strong>If someone is in immediate danger, call 999.</strong> If you suspect a crime has
          been committed, contact the police. Do not confront the alleged perpetrator. Preserve
          any evidence. Report to your designated safeguarding lead immediately.
        </p>
      </div>

      {/* Key guidance */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Your duty:</strong> Under Section 42 of the Care Act 2014 and Regulation 13 of
          the Health and Social Care Act 2008, all care workers must report concerns about abuse
          or neglect. You do not need proof — a reasonable suspicion is enough to raise a concern.
          Never promise confidentiality. The local authority will decide whether a Section 42
          enquiry is needed.
        </p>
      </div>

      {/* Abuse types */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Types of Abuse — Recognise the Signs</h2>
        <p className="text-sm text-muted mb-6">
          Abuse can take many forms. Familiarise yourself with the different types of abuse and
          their signs so that you can recognise concerns and take action. Click on each type to
          learn more.
        </p>
        <div className="space-y-4">
          {abuseTypes.map((abuse) => (
            <details
              key={abuse.type}
              className="border border-border rounded-lg group"
            >
              <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-gray-50 transition-colors flex items-center justify-between">
                <span>{abuse.type}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted leading-relaxed mb-3">{abuse.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Signs to look for:</h4>
                <ul className="space-y-1.5">
                  {abuse.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-sm text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Alert form */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Safeguarding Alert Form</h2>
        {alertFormFields.map((section) => (
          <div
            key={section.category}
            className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">{section.category}</h3>
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
                  ) : field.type === "select" && field.options && field.options.length > 0 ? (
                    <>
                      {/* Screen: interactive radio pills */}
                      <div className="flex flex-wrap gap-2 print:hidden">
                        {field.options.map((option) => (
                          <label
                            key={option}
                            className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                          >
                            <input
                              type="checkbox"
                              name={field.label.replace(/\s+/g, "-").toLowerCase()}
                              value={option}
                              className="accent-primary"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                      {/* Print: clean checkbox list */}
                      <div className="hidden print:block">
                        {field.options.map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm py-0.5">
                            <span className="inline-block w-3.5 h-3.5 border border-black rounded-sm flex-shrink-0" />
                            {option}
                          </label>
                        ))}
                      </div>
                    </>
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
          </div>
        ))}
      </section>

      {/* Investigation steps */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          What Happens After You Raise a Concern
        </h2>
        <p className="text-sm text-muted mb-6">
          After you raise a safeguarding concern, a series of steps will follow. The local
          authority will decide whether to carry out a Section 42 enquiry under the Care Act 2014.
          Here is what to expect:
        </p>
        <div className="space-y-4">
          {investigationSteps.map((step) => (
            <div
              key={step.step}
              className="border border-border rounded-lg p-4 sm:p-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted mt-1">{step.description}</p>
                  <ul className="mt-3 space-y-1.5">
                    {step.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Whistleblowing */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Whistleblowing</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you feel unable to report a safeguarding concern through your organisation&apos;s
          internal procedures — for example, if the concern involves your manager — you can raise
          it externally through whistleblowing.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Public Interest Disclosure Act 1998 (PIDA):</strong> Protects workers who
            blow the whistle on wrongdoing in the workplace. You are protected from victimisation
            or dismissal if you raise a concern in good faith.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>CQC Whistleblowing:</strong> You can report concerns directly to the CQC,
            who have a duty to investigate and can take enforcement action against providers.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Local Authority:</strong> You can contact the local authority safeguarding team
            directly if you are unable to report internally.
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/how-we-do-our-job/raising-concerns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Raising Concerns ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.scie.org.uk/safeguarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              SCIE — Safeguarding Adults ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/care-act-statutory-guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Care Act 2014 — Statutory Guidance ↗
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
          <strong>Important Notice:</strong> The safeguarding resources provided by Care Handbook
          are for guidance only and do not replace your organisation&apos;s safeguarding policies or
          local authority procedures. If you suspect abuse or neglect, follow your
          organisation&apos;s safeguarding procedure and report to your designated safeguarding lead
          immediately. In an emergency, call 999. All safeguarding concerns must be reported to the
          local authority under the Care Act 2014. Never promise confidentiality when someone
          discloses abuse.
        </p>
      </div>
    </div>
  );
}