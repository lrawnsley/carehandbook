import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { communicationElements } from "@/data/staff";

export const metadata: Metadata = {
  title: "Teamwork & Communication",
  description:
    "Effective handover, multi-disciplinary working, conflict resolution, and documentation standards for UK care home teams.",
};

export default function TeamworkCommunicationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Staff & Employer Resources", href: "/staff-resources" },
        { label: "Teamwork & Communication" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Teamwork & Communication
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Effective teamwork and communication areessential for safe, high-quality care. Poor 
            communication is a leading cause of adverse events in care settings, including medication 
            errors, missed care, and safeguarding incidents. This section covers the key areas of 
            teamwork and communication that every care worker needs to be competent in.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Communication elements */}
      <div className="space-y-8 mb-8">
        {communicationElements.map((element, index) => (
          <section key={element.title} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{element.title}</h2>
                <p className="text-muted leading-relaxed mt-1">{element.description}</p>
              </div>
            </div>
            <div className="pl-14">
              <h3 className="text-sm font-semibold text-foreground mb-3">Best practice:</h3>
              <ul className="space-y-2">
                {element.bestPractice.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* SBAR */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">SBAR Communication Framework</h2>
        <p className="text-muted leading-relaxed mb-4">
          SBAR is a structured communication framework widely used in health and social care to 
          ensure information is conveyed clearly and completely, particularly during handover or when 
          escalating concerns to other professionals.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-background rounded-lg">
            <h3 className="font-bold text-foreground mb-1">S — Situation</h3>
            <p className="text-sm text-muted">What is happening right now? Identify yourself, the resident, and the current problem clearly and concisely.</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h3 className="font-bold text-foreground mb-1">B — Background</h3>
            <p className="text-sm text-muted">What is the relevant background? Provide context: the resident&apos;s medical history, current care plan, recent changes, and any relevant information.</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h3 className="font-bold text-foreground mb-1">A — Assessment</h3>
            <p className="text-sm text-muted">What do you think is going on? Give your professional assessment of the situation, including any observations, vital signs, or changes in condition.</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h3 className="font-bold text-foreground mb-1">R — Recommendation</h3>
            <p className="text-sm text-muted">What do you want to happen? State what you think needs to be done — e.g. a GP review, a medication change, an urgent assessment. Be specific.</p>
          </div>
        </div>
      </div>

      {/* Additional resources */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5">
        <h2 className="font-bold text-foreground mb-2">Related Resources</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <a href="/handover-templates" className="text-primary hover:underline">Handover Templates</a> — printable shift handover, night-to-day, and resident summary templates
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <a href="/templates/incident-report" className="text-primary hover:underline">Incident Report Form</a> — for documenting adverse events and near-misses
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <a href="/templates/supervision-record" className="text-primary hover:underline">Supervision Record</a> — for recording supervision and appraisal discussions
          </li>
        </ul>
      </div>
    </div>
  );
}