import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { supervisionElements } from "@/data/staff";

export const metadata: Metadata = {
  title: "Supervision & Appraisal",
  description:
    "CQC requirements for one-to-one supervision, annual appraisals, and professional development planning for UK care home staff.",
};

export default function SupervisionAppraisalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Staff & Employer Resources", href: "/staff-resources" },
        { label: "Supervision & Appraisal" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Supervision & Appraisal
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Supervision and appraisal are essential for ensuring staff competence, supporting 
            wellbeing, and driving continuous improvement in care. Under CQC Regulation 18, 
            providers must ensure that staff receive appropriate support, supervision, and 
            appraisal to carry out their duties effectively.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* CQC context */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">CQC Expectations</h2>
        <p className="text-sm text-muted leading-relaxed">
          CQC inspectors will look for evidence that supervision and appraisal are taking place 
          regularly, that they are documented, and that they result in actions that improve practice. 
          The CQC Key Question &lsquo;Well-led&rsquo; specifically assesses whether &ldquo;there are clear and 
          effective arrangements for staff supervision and appraisal&rdquo; and whether &ldquo;staff are 
          supported to deliver effective care.&rdquo; A lack of supervision and appraisal will be 
          flagged as a concern and may result in a rating of Requires Improvement or Inadequate.
        </p>
      </div>

      {/* Supervision elements */}
      <div className="space-y-8 mb-8">
        {supervisionElements.map((element, index) => (
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
              <h3 className="text-sm font-semibold text-foreground mb-3">Key points:</h3>
              <ul className="space-y-2">
                {element.checklist.map((item) => (
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

      {/* What makes effective supervision */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">What Effective Supervision Looks Like</h2>
        <p className="text-muted leading-relaxed mb-4">
          Good supervision is more than just a meeting — it is a structured, supportive process that 
          helps staff develop their skills, reflect on their practice, and address any concerns they may 
          have. Here are the hallmarks of effective supervision:
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Predictable and regular</strong> — scheduled in advance, not cancelled repeatedly, and never rushed
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Private and uninterrupted</strong> — held in a confidential space where the conversation cannot be overheard
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Two-way</strong> — the supervisee should have the opportunity to raise concerns, ask questions, and suggest their own development goals
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Documented</strong> — written records of discussion points, agreed actions, and targets should be kept by both parties
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Followed up</strong> — actions from previous supervision should be reviewed at the next session
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Supportive, not just monitoring</strong> — supervision should focus on development and support, not just performance management
          </li>
        </ul>
      </div>
    </div>
  );
}