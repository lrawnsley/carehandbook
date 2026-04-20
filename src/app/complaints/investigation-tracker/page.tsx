import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { investigationSteps } from "@/data/complaints";

export const metadata: Metadata = {
  title: "Investigation Tracker",
  description:
    "Step-by-step complaint investigation process for UK care homes — from acknowledgment to follow-up, CQC Regulation 16 requirements, and response timeline guidance.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function InvestigationTrackerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "Complaints Handling", href: "/complaints" }, { label: "Investigation Tracker" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Investigation Tracker
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A thorough, well-documented investigation is essential for
            resolving complaints fairly and meeting CQC Regulation 16. This
            page outlines the investigation process, timelines, and CQC
            requirements, with a tracking template for your care home.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* CQC Regulation 16 */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">CQC Regulation 16: Receiving and Acting on Complaints</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          Regulation 16 of the Health and Social Care Act 2008 (Regulated
          Activities) Regulations 2014 requires care providers to:
        </p>
          <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Establish and operate an effective system for receiving, recording, and responding to complaints
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ensure complaints are investigated and responded to within a reasonable time
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Provide a written response to the complainant that includes an explanation of how the complaint has been dealt with and any action taken
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Take action to put right what went wrong and prevent similar complaints in future
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inform complainants of their right to escalate to the Local Government and Social Care Ombudsman if they are not satisfied
          </li>
        </ul>
      </div>

      {/* Investigation Steps */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Investigation Process</h2>
        <p className="text-muted leading-relaxed">
          The following phases outline how a complaint should be investigated.
          Each phase has clear steps and an indicative timeline. Following
          this process ensures a fair, thorough investigation that meets CQC
          requirements.
        </p>
        {investigationSteps.map((step, index) => (
          <section key={step.phase} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground">{step.phase}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary-light/30 px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.timeline}
                  </span>
                </div>
              </div>
            </div>
            <div className="pl-14">
              <ul className="space-y-2">
                {step.steps.map((action) => (
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

      {/* Response Timeline Guidance */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Response Timeline Guidance</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            CQC Regulation 16 requires complaints to be investigated and
            responded to within a &ldquo;reasonable time&rdquo;. While the
            regulation does not define this precisely, best practice and
            guidance suggest the following timelines:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Stage</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Recommended Timescale</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium text-foreground">Acknowledgment</td>
                  <td className="py-2 px-3 text-muted">Within 3 working days of receipt</td>
                  <td className="py-2 px-3 text-muted">CQC Regulation 16 requirement. Provide reference number and named contact.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium text-foreground">Investigation</td>
                  <td className="py-2 px-3 text-muted">Within 10–20 working days</td>
                  <td className="py-2 px-3 text-muted">Complex complaints may take longer. Keep the complainant informed of progress.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium text-foreground">Written Response</td>
                  <td className="py-2 px-3 text-muted">Within 20 working days of receipt</td>
                  <td className="py-2 px-3 text-muted">Or within an agreed extended timescale. Address every point raised.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium text-foreground">Action Plan &amp; Learning</td>
                  <td className="py-2 px-3 text-muted">Ongoing — actions within agreed timescales</td>
                  <td className="py-2 px-3 text-muted">Implement actions committed to. Share learning with all staff.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-foreground">Escalation to Ombudsman</td>
                  <td className="py-2 px-3 text-muted">After internal process exhausted</td>
                  <td className="py-2 px-3 text-muted">The complainant has the right to refer to the LGSCO if dissatisfied.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-border">
            <p className="text-xs text-muted leading-relaxed">
              <strong>Tip:</strong> If the investigation will take longer than
              20 working days, contact the complainant to explain the delay
              and agree a new timescale. Document this communication in the
              complaint file. Failure to keep complainants informed is one of
              the most common findings at CQC inspection.
            </p>
          </div>
        </div>
      </div>

      {/* Investigation Tracker Template */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Investigation Tracker</h2>
        <p className="text-muted leading-relaxed mb-6">
          Use this template to track the progress of each complaint through
          the investigation process. One form per complaint.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">Complaint Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Complaint Reference Number</label>
                <input type="text" className={inputClass} placeholder="e.g. CMP-2024-001" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date Received</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Complainant Name</label>
                <input type="text" className={inputClass} placeholder="Enter name" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">Investigation Progress</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/5">Phase</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Key Actions Completed</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Date Completed</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Completed By</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Notes / Issues</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 px-2 text-muted">Acknowledgment</td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Actions taken" /></td>
                  <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Staff name" /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Notes" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-2 text-muted">Investigation</td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Actions taken" /></td>
                  <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Staff name" /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Notes" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-2 text-muted">Response</td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Actions taken" /></td>
                  <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Staff name" /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Notes" /></td>
                </tr>
                <tr>
                  <td className="py-2 px-2 text-muted">Follow-Up</td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Actions taken" /></td>
                  <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Staff name" /></td>
                  <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Notes" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">Outcome &amp; Learning</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Complaint Finding (Upheld / Partially Upheld / Not Upheld)</label>
                <input type="text" className={inputClass} placeholder="Upheld / Partially Upheld / Not Upheld" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Actions Taken to Resolve the Complaint</label>
                <textarea className={`${inputClass} min-h-[80px] resize-y`} placeholder="Detail the actions taken" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Actions to Prevent Recurrence</label>
                <textarea className={`${inputClass} min-h-[80px] resize-y`} placeholder="What changes will be made?" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">How Learning Was Shared with Staff</label>
                <textarea className={`${inputClass} min-h-[60px] resize-y`} placeholder="e.g., team meeting, supervision, policy update" rows={2} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Is a CQC Notification Required?</label>
                <select className={inputClass}>
                  <option value="">Select...</option>
                  <option value="yes">Yes — notification submitted</option>
                  <option value="no">No — not required</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Investigator Signature</label>
                  <input type="text" className={inputClass} placeholder="Name and role" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Manager Sign-Off</label>
                  <input type="text" className={inputClass} placeholder="Name and role" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Duty of Candour */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Duty of Candour (Regulation 20)</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            When a complaint involves a notifiable safety incident, the
            Duty of Candour (CQC Regulation 20) requires the provider to
            tell the relevant person (or their representative) that a
            notifiable safety incident has occurred, provide reasonable
            support, and give an apology. This applies in addition to the
            complaints process and should be considered as part of the
            investigation.
          </p>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">When Duty of Candour Applies</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                An incident has occurred that resulted in or could result in death, severe harm, moderate harm, or prolonged psychological suffering
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The provider must notify the person as soon as reasonably practicable
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The notification must include an apology, details of the incident, and what actions will be taken
              </li>
            </ul>
          </div>
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
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulation-20-duty-of-candour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Regulation 20: Duty of Candour ↗
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
          The investigation guidance on Care Handbook is for informational
          purposes only and does not constitute legal advice. Your care home
          must comply with CQC Regulation 16 and have its own complaints
          procedure. If a complaint identifies a safeguarding concern or a
          notifiable incident, you must follow safeguarding procedures and
          notify CQC as required. Seek legal advice if you are unsure about
          your regulatory obligations.
        </p>
      </div>
    </div>
  );
}