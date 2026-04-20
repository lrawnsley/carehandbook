import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { postFallProtocol } from "@/data/falls";

export const metadata: Metadata = {
  title: "Post-Fall Protocol",
  description:
    "Step-by-step protocol for responding to a fall in a care home — immediate actions, assessment, monitoring, and reporting requirements including CQC notification.",
};

export default function PostFallProtocolPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Falls Prevention & Management", href: "/falls" },
        { label: "Post-Fall Protocol" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Post-Fall Protocol
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Knowing exactly what to do when a resident falls is critical. A clear, evidence-based
            post-fall protocol protects the resident, ensures appropriate assessment and treatment,
            and meets CQC reporting requirements.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Emergency */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-red-800 font-semibold mb-1">⚠ Emergency Action</p>
        <p className="text-sm text-red-800">
          If the resident has sustained a <strong>serious head injury</strong>, has <strong>lost consciousness</strong>,
          is <strong>unable to move a limb</strong> (suspected fracture), or is <strong>bleeding heavily</strong>:
          <strong> do NOT move the resident. Call 999 immediately.</strong>
        </p>
      </div>

      {/* Protocol Steps */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Post-Fall Protocol</h2>
        <div className="space-y-6">
          {postFallProtocol.map((phase, index) => (
            <div key={phase.phase} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground pt-1.5">{phase.phase}</h3>
              </div>
              <div className="pl-14">
                <ol className="space-y-2">
                  {phase.actions.map((action, actionIndex) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-muted">
                      <span className="flex-shrink-0 w-5 h-5 bg-gray-100 text-foreground rounded-full flex items-center justify-center font-bold text-xs">
                        {actionIndex + 1}
                      </span>
                      {action}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to call 999 */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">When to Call 999</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Call 999 immediately if the resident has any of the following:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Loss of consciousness (even briefly)",
            "Suspected fracture (swelling, deformity, cannot move limb)",
            "Signs of head injury (confusion, unequal pupils, vomiting, severe headache)",
            "Severe bleeding that cannot be controlled",
            "Difficulty breathing or chest pain",
            "Suspected spinal injury (numbness, tingling, inability to move legs)",
            "Seizure following the fall",
            "The resident is in severe pain and cannot be moved safely",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-muted bg-red-50 rounded-lg p-3 border border-red-200">
              <span className="text-red-500 font-bold">!</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* NICE Assessment Tools */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Assessment Tools After a Fall</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          After the immediate actions are taken, use structured assessment tools to evaluate the
          resident thoroughly:
        </p>
        <div className="space-y-3">
          {[
            { tool: "Glasgow Coma Scale (GCS)", use: "If head injury is suspected — assess eye, verbal, and motor responses" },
            { tool: "AVPU Scale", use: "Quick consciousness check — Alert, Voice, Pain, Unresponsive" },
            { tool: "4AT or CAM", use: "Delirium screening — essential after any fall in an older adult" },
            { tool: "Abbey Pain Scale", use: "For residents who cannot self-report pain" },
            { tool: "Neurological Observations", use: "2-hourly GCS checks for 48 hours if indicated after head injury" },
            { tool: "NEWS2 (National Early Warning Score)", use: "Baseline physiological observations to detect deterioration" },
          ].map((item) => (
            <div key={item.tool} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 text-primary font-semibold">{item.tool}:</span>
              <span className="text-muted">{item.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CQC Reporting */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Reporting Requirements</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">CQC Notification (Regulation 18)</h3>
            <p className="text-sm text-muted leading-relaxed">
              Care homes must notify CQC of any incident that affects the health, safety, or
              welfare of a person using the service. A fall that results in serious injury
              (fracture, head injury, hospital admission) must be notified to CQC via the
              notification portal. This is a legal requirement under Regulation 18 and
              failure to notify is a breach of registration.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Internal Reporting</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Record the incident in the resident&apos;s care notes and the 24-hour log
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Complete the accident/incident report form in accordance with your organisation&apos;s policy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Notify the registered manager and senior team
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Inform the resident&apos;s family / next of kin
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Notify the GP if any injury is sustained or if the resident&apos;s condition changes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                RIDDOR (Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013): report to HSE if the fall results in a specified injury or over-7-day incapacity
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Post-fall review */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Post-Fall Review</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          After every fall — even if no serious injury occurred — a post-fall review meeting should
          be held to identify lessons learned and update the care plan. This is a key requirement
          of C &ldquo;Responsive&rdquo; and &ldquo;Well-led&rdquo; key questions.
        </p>
        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            What happened? (Review the ABC of the fall — Antecedent, Behaviour, Consequence)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Were there environmental hazards that contributed?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Could medication have been a factor? (Request a medication review)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Are there new or worsening intrinsic risk factors?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Does the care plan need updating?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Has the falls risk assessment been reviewed and updated?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Have lessons learned been shared with all staff?
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.nice.org.uk/guidance/cg161" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE CG161 — Falls: Assessment and Prevention ↗
            </a>
          </li>
          <li>
            <a href="https://www.nhs.uk/conditions/falls/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NHS — Preventing Falls ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/riddor/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — RIDDOR Reporting ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
              policies, formal training, or current CQC standards. Always follow your employer&apos;s
              specific post-fall procedures. If in doubt, always seek medical advice. Call 999 for
              any suspected serious injury, head injury, or loss of consciousness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}