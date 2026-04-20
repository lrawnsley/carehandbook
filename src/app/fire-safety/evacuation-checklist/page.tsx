import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { evacuationSteps } from "@/data/fire-safety";

export const metadata: Metadata = {
  title: "Evacuation Checklist",
  description:
    "Step-by-step fire evacuation procedure for UK care homes — from discovering a fire to post-incident review. Includes fire drill log and assembly point guidance.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function EvacuationChecklistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "Fire Safety", href: "/fire-safety" }, { label: "Evacuation Checklist" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Evacuation Checklist
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A clear, step-by-step evacuation procedure is essential for every
            care home. All staff must know the procedure and practice it
            regularly through fire drills. This page covers the evacuation
            phases, a fire drill log, and assembly point guidance.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key Principle */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-red-900 mb-2">🚨 Critical Rule</h2>
        <p className="text-sm text-red-800 leading-relaxed">
          <strong>Never put yourself or others at additional risk.</strong> If
          you discover a fire, raise the alarm immediately. Only attempt to
          fight a fire if it is small, you have been trained, you have the
          correct extinguisher, and you have a clear exit route behind you.
          When the alarm sounds, evacuate immediately — do not stop for
          personal belongings. Call 999 as soon as it is safe to do so.
        </p>
      </div>

      {/* Evacuation Steps */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Evacuation Procedure</h2>
        <p className="text-muted leading-relaxed">
          The following phases outline what to do at each stage of a fire
          evacuation. These steps should be part of your care home&apos;s
          emergency plan and practised during fire drills.
        </p>
        {evacuationSteps.map((step, index) => (
          <section key={step.phase} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-foreground pt-1.5">{step.phase}</h3>
            </div>
            <div className="pl-14">
              <ul className="space-y-2">
                {step.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Assembly Point Guidance */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Assembly Point Guidance</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            The fire assembly point is where everyone gathers after evacuating.
            It must be clearly designated, well-known to all staff and
            residents, and suitable for the needs of care home residents.
          </p>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">Choosing an Assembly Point</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Must be a safe distance from the building (at least 1.5× the building height)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Must not block access for Fire and Rescue Service vehicles
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Should provide shelter for residents (especially those in nightwear or with limited mobility)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Must be accessible for wheelchair users and people with mobility aids
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Clearly signposted from all exit routes
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                A secondary assembly point should be identified in case the primary one is downwind of smoke
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">At the Assembly Point</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Take the resident register and medication administration records (MAR charts)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conduct an immediate roll call — account for every resident, staff member, and visitor
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Report anyone missing to the Fire and Rescue Service immediately
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Provide first aid as needed and keep residents warm and comfortable
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Do not re-enter the building until told it is safe by the Fire and Rescue Service
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fire Drill Log */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Fire Drill Log</h2>
        <p className="text-muted leading-relaxed mb-6">
          Fire drills must be carried out at least twice a year and at varying
          times of day (including at least one at night). Use this log to record
          each drill, including observations and actions for improvement.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Drill Record</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Date &amp; Time</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Drill Type (planned / unannounced)</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Time to Evacuate</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Issues / Observations</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Actions Required</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Coordinated By</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="border-b border-border">
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder={`Drill ${row} date/time`} /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Planned / Unannounced" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="e.g. 4 min 30 sec" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Observations" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Actions needed" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Staff name" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Fire Safety Equipment Checks</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Equipment</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Check Frequency</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Last Checked</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Next Due</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { equipment: "Fire Alarm System", frequency: "Weekly test, annual service" },
                  { equipment: "Emergency Lighting", frequency: "Monthly test, annual full discharge" },
                  { equipment: "Fire Extinguishers", frequency: "Monthly visual, annual service" },
                  { equipment: "Fire Doors", frequency: "Weekly visual, quarterly inspection" },
                  { equipment: "Sprinkler System (if fitted)", frequency: "Weekly test, annual service" },
                ].map((item) => (
                  <tr key={item.equipment} className="border-b border-border">
                    <td className="py-2 px-2 text-muted">{item.equipment}</td>
                    <td className="py-2 px-2 text-muted">{item.frequency}</td>
                    <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                    <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="OK / Overdue" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-emergency-plans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              GOV.UK — Fire Emergency Plans ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.hse.gov.uk/fire-and-explosion/fire-safety.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              HSE — Fire Safety in the Workplace ↗
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
          The evacuation guidance on Care Handbook is for informational purposes
          only and does not replace your care home&apos;s emergency plan. You
          must comply with the Regulatory Reform (Fire Safety) Order 2005 and
          ensure your emergency plan is specific to your premises. Always
          consult a qualified fire safety professional and your local Fire and
          Rescue Service. In a fire emergency, always call 999.
        </p>
      </div>
    </div>
  );
}