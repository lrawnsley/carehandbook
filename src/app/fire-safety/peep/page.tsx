import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { peepFields } from "@/data/fire-safety";

export const metadata: Metadata = {
  title: "Personal Emergency Evacuation Plan (PEEP)",
  description:
    "Create a PEEP for every care home resident who needs assistance to evacuate — covering mobility, sensory and cognitive needs, medical requirements, and designated escape routes. Printable template included.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function PEEPPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "Fire Safety", href: "/fire-safety" }, { label: "Personal Emergency Evacuation Plan (PEEP)" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Personal Emergency Evacuation Plan (PEEP)
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A PEEP is a personalised plan that sets out how a specific person
            will be evacuated in an emergency. Every care home resident who
            may need assistance to evacuate must have a PEEP — this includes
            people with limited mobility, sensory impairments, or cognitive
            conditions.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Why PEEPs Matter */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">Why PEEPs Are Essential</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          Under the Regulatory Reform (Fire Safety) Order 2005, the Responsible
          Person must ensure that &ldquo;effective arrangements ... are made for
          the evacuation of relevant persons&rdquo;. In a care home, where many
          residents cannot evacuate independently, PEEPs are how this duty is
          fulfilled in practice.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            A PEEP ensures each resident&apos;s specific needs are planned for before an emergency occurs
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Staff know exactly who needs help, what equipment is needed, and which route to use
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            PEEPs must be reviewed regularly — at least annually, or when a resident&apos;s needs change
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            CQC inspectors specifically look for PEEPs during &ldquo;Safe&rdquo; key question assessments
          </li>
        </ul>
      </div>

      {/* PEEP Form */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">PEEP Template</h2>
        <p className="text-muted leading-relaxed mb-6">
          Complete this form for each resident. The plan should be shared with
          all staff, kept in an accessible location, and reviewed at least
          annually or when the resident&apos;s condition changes. Print this
          page for a paper version.
        </p>

        <div className="space-y-8">
          {peepFields.map((section) => (
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
                          <option value="sometimes">Sometimes</option>
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

          {/* Additional Sign-Off Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">
              Sign-Off
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Plan Prepared By
                </label>
                <input type="text" className={inputClass} placeholder="Name and role" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Date Plan Created
                </label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Reviewed By
                </label>
                <input type="text" className={inputClass} placeholder="Name and role" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Next Review Date
                </label>
                <input type="date" className={inputClass} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guidance on Completing PEEPs */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Guidance on Completing PEEPs</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Mobility &amp; Evacuation</h3>
            <p className="text-sm text-muted leading-relaxed">
              Consider how the person moves around normally and how this
              changes in an emergency. Can they walk with a frame but not
              stairs? Do they need a wheelchair, evacuation chair, or carry
              sheet? Always identify at least two evacuation routes in case the
              primary route is blocked by fire.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Sensory &amp; Cognitive Needs</h3>
            <p className="text-sm text-muted leading-relaxed">
              A person with hearing loss may not hear the alarm — consider
              vibrating pagers or flashing beacons. A person with dementia may
              not understand what the alarm means or may resist leaving their
              room. Staff need to know how to communicate with and reassure
              each resident during evacuation.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Medical Needs</h3>
            <p className="text-sm text-muted leading-relaxed">
              Residents who use oxygen present an additional fire risk and need
              their oxygen supply considered in their evacuation. Anyone
              connected to medical equipment (e.g., a ventilator or drip) needs
              a plan for safe disconnection or portable alternatives.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Night-Time Evacuation</h3>
            <p className="text-sm text-muted leading-relaxed">
              Night-time is often the most dangerous time for fire in a care
              home because staffing levels are lower and many residents are
              asleep. PEEPs must specify how many staff are needed to evacuate
              each person and this must be checked against night staffing
              levels. If there are insufficient staff to evacuate all residents
              simultaneously, a phased evacuation strategy should be planned.
            </p>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.uk/workplace-fire-safety-your-responsibilities"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              GOV.UK — Workplace Fire Safety Responsibilities ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.hse.gov.uk/fire-and-explosion.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              HSE — Fire and Explosion ↗
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
          This PEEP template is provided by Care Handbook for informational
          purposes. It does not constitute legal or professional fire safety
          advice. Your care home must comply with the Regulatory Reform (Fire
          Safety) Order 2005 and ensure PEEPs are written by a competent
          person. Always consult a qualified fire safety professional and your
          local Fire and Rescue Service for premises-specific advice.
        </p>
      </div>
    </div>
  );
}