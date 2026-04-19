import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { whistleblowingSteps } from "@/data/employee";

export const metadata: Metadata = {
  title: "Whistleblowing",
  description:
    "Public Interest Disclosure Act, how to raise concerns, protection for whistleblowers, and CQC reporting for care home staff.",
};

export default function WhistleblowingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Employee Responsibilities", href: "/employee-responsibilities" },
        { label: "Whistleblowing" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Whistleblowing
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Whistleblowing — sometimes called &lsquo;raising a concern&rsquo; or &lsquo;speaking up&rsquo; — 
            is when a worker reports a concern about wrongdoing, malpractice, or a risk to safety that 
            they have witnessed in their workplace. You have a legal right and a professional duty to 
            raise concerns. The law protects you from victimisation or dismissal for doing so.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Legal framework */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">Legal Framework: Public Interest Disclosure Act 1998</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The Public Interest Disclosure Act 1998 (PIDA) amends the Employment Rights Act 1996 and 
          provides legal protection to workers who make &lsquo;qualifying disclosures&rsquo; in the public 
          interest. A qualifying disclosure is one that the worker reasonably believes tends to show 
          one or more of the following:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A criminal offence has been, is being, or is likely to be committed
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A person has failed, is failing, or is likely to fail to comply with a legal obligation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A miscarriage of justice has occurred, is occurring, or is likely to occur
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            The health and safety of any individual has been, is being, or is likely to be endangered
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            The environment has been, is being, or is likely to be damaged
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Information showing any of the above has been, or is likely to be, deliberately concealed
          </li>
        </ul>
      </div>

      {/* Protection */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Protection for Whistleblowers</h2>
        <p className="text-muted leading-relaxed mb-4">
          If you make a protected disclosure (whistleblow), the law protects you from:
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Dismissal</strong> — you cannot be sacked for raising a genuine concern
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Detriment</strong> — you cannot be subjected to any disadvantage (e.g. demotion, transfer, reduction of hours, bullying, or exclusion) for raising a concern
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Victimisation by colleagues</strong> — your employer has a duty to protect you from victimisation by other members of staff
          </li>
        </ul>
        <p className="text-muted leading-relaxed mt-4 text-sm">
          If you are dismissed for making a protected disclosure, you can claim unfair dismissal at an 
          Employment Tribunal regardless of length of service. Compensation for whistleblowing claims is 
          uncapped. The Employment Rights Act 1996 (as amended) provides these protections.
        </p>
      </div>

      {/* Steps */}
      <h2 className="text-xl font-bold text-foreground mb-4">How to Raise a Concern</h2>
      <p className="text-muted leading-relaxed mb-6">
        If you have a concern about practice, safety, or wrongdoing in your workplace, follow these steps:
      </p>

      <div className="space-y-6 mb-8">
        {whistleblowingSteps.map((step) => (
          <section key={step.step} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </span>
              <h2 className="text-xl font-bold text-foreground pt-1.5">
                {step.heading}
              </h2>
            </div>
            <p className="text-muted leading-relaxed pl-14">{step.content}</p>
          </section>
        ))}
      </div>

      {/* CQC Reporting */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Reporting to the CQC</h2>
        <p className="text-muted leading-relaxed mb-4">
          The Care Quality Commission encourages workers to raise concerns about health and social care 
          services. You can contact the CQC directly and your concern will be treated confidentially.
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>CQC whistleblowing line:</strong> 08000 733 486 (Monday to Friday, 8am–6pm)
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>CQC online form:</strong> Available at www.cqc.org.uk/contact-us
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Protect (whistleblowing charity):</strong> 020 3102 7020 or www.protect-advice.org.uk — free, confidential advice for workers considering raising a concern
          </li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          You do not need to have all the evidence — a reasonable belief that something is wrong is enough. 
          The CQC will assess your concern and may use it to inform inspection and enforcement activity. 
          Your identity will be protected unless you consent to it being disclosed.
        </p>
      </div>
    </div>
  );
}