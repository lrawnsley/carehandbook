import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { abuseTypes, safeguardingProcedures } from "@/data/employee";

export const metadata: Metadata = {
  title: "Safeguarding Adults",
  description:
    "Types of abuse in care settings, recognising signs, reporting procedures, and your duties under the Care Act 2014.",
};

export default function SafeguardingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Employee Responsibilities", href: "/employee-responsibilities" },
        { label: "Safeguarding Adults" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Safeguarding Adults
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Safeguarding means protecting an adult&apos;s right to live in safety, free from abuse 
            and neglect. Under the Care Act 2014, safeguarding is everyone&apos;s responsibility — 
            not just the safeguarding lead&apos;s. If you work in a care home, you have a legal and 
            professional duty to recognise, respond to, and report abuse.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Legal framework */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">Legal Framework</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Care Act 2014, Sections 42–46</strong> — establishes the legal framework for adult safeguarding in England, placing a duty on local authorities to make enquiries when abuse is suspected
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>CQC Regulation 13</strong> — Safeguarding service users from abuse and improper treatment
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Human Rights Act 1998</strong> — Article 3 (freedom from torture and inhuman or degrading treatment) and Article 8 (right to respect for private and family life)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Mental Capacity Act 2005</strong> — safeguarding protections for people who lack capacity, including the Best Interests principle and Deprivation of Liberty Safeguards (DoLS)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Domestic Abuse Act 2021</strong> — extends recognition of domestic abuse and provides protections
          </li>
        </ul>
      </div>

      {/* Types of Abuse */}
      <h2 className="text-xl font-bold text-foreground mb-4">Types of Abuse and Recognising Signs</h2>
      <p className="text-muted leading-relaxed mb-6">
        Abuse can take many forms. In a care setting, it is important to recognise that abuse may be 
        carried out by anyone — family members, other residents, staff, volunteers, or visitors. Below 
        are the main categories of abuse recognised in the Care Act 2014 Care and Support Statutory 
        Guidance, along with signs that may indicate abuse is occurring.
      </p>

      <div className="space-y-6 mb-8">
        {abuseTypes.map((abuse) => (
          <section key={abuse.name} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">{abuse.name}</h2>
            <p className="text-muted leading-relaxed mb-4">{abuse.description}</p>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Possible signs and indicators:</h3>
              <ul className="space-y-1.5">
                {abuse.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Reporting procedures */}
      <h2 className="text-xl font-bold text-foreground mb-4">Reporting Procedures: Recognise, Respond, Report, Record, Review</h2>
      <p className="text-muted leading-relaxed mb-6">
        If you suspect or witness abuse, or if someone discloses abuse to you, you must act. The following 
        five-step framework is widely used in adult safeguarding practice:
      </p>

      <div className="space-y-6 mb-8">
        {safeguardingProcedures.map((procedure) => (
          <section key={procedure.step} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {procedure.step}
              </span>
              <h2 className="text-xl font-bold text-foreground pt-1.5">
                {procedure.heading}
              </h2>
            </div>
            <p className="text-muted leading-relaxed pl-14">{procedure.content}</p>
          </section>
        ))}
      </div>

      {/* Important callout */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h2 className="text-lg font-bold text-foreground mb-2">If There Is Immediate Danger</h2>
        <p className="text-sm text-muted leading-relaxed">
          If a person is in immediate danger of harm, call <strong>999</strong> and ask for the police or an ambulance. 
          Do not wait to report internally first — the person&apos;s safety always comes first. If you are unsure whether 
          the situation is an emergency, it is always better to call and let the professionals decide. After contacting 
          emergency services, follow your organisation&apos;s safeguarding procedure and inform your manager.
        </p>
      </div>
    </div>
  );
}