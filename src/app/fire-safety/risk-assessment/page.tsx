import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fireRiskCategories } from "@/data/fire-safety";

export const metadata: Metadata = {
  title: "Fire Risk Assessment",
  description:
    "How to carry out a fire risk assessment in a UK care home — four key categories of risk, responsible person duties, and a step-by-step template walkthrough.",
};

const inputClass =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function FireRiskAssessmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "Fire Safety", href: "/fire-safety" }, { label: "Fire Risk Assessment" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Fire Risk Assessment
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A fire risk assessment identifies fire hazards, people at risk, and
            the measures needed to keep everyone safe. Under the Regulatory
            Reform (Fire Safety) Order 2005, every care home must have a
            written fire risk assessment that is reviewed regularly.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Who Is Responsible */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">The Responsible Person</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          Under the Regulatory Reform (Fire Safety) Order 2005, the
          &ldquo;Responsible Person&rdquo; is the employer, the person who has
          control of the premises, or the owner. In a care home, this is
          typically the registered manager or the organisation that employs
          the staff. The Responsible Person must:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Carry out a fire risk assessment and review it regularly (at least annually, or whenever there are significant changes)
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Put in place fire safety measures identified by the assessment
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Provide fire safety training to all staff, including induction training and regular refresher training
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Prepare an emergency plan and ensure staff are familiar with it
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ensure PEEPs are in place for every resident who needs assistance to evacuate
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Maintain fire safety equipment (alarms, extinguishers, emergency lighting, fire doors)
          </li>
        </ul>
      </div>

      {/* Fire Risk Categories */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Four Key Assessment Categories</h2>
        <p className="text-muted leading-relaxed">
          A care home fire risk assessment should systematically cover these
          four categories. For each category, identify hazards, assess who is
          at risk, evaluate existing measures, and record actions needed.
        </p>
        {fireRiskCategories.map((category, index) => (
          <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                <p className="text-muted leading-relaxed mt-1">{category.description}</p>
              </div>
            </div>
            <div className="pl-14">
              <h4 className="text-sm font-semibold text-foreground mb-2">Areas to assess:</h4>
              <ul className="space-y-1.5">
                {category.assessmentAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Template Walkthrough */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Fire Risk Assessment Template</h2>
        <p className="text-muted leading-relaxed mb-6">
          Use this template to record your fire risk assessment findings. Each
          section should be completed by the Responsible Person or a competent
          person appointed by them. Print this page to create a working
          document for your care home.
        </p>

        <div className="space-y-6">
          {/* Assessment Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Assessment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Care Home Name</label>
                <input type="text" className={inputClass} placeholder="Enter care home name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                <input type="text" className={inputClass} placeholder="Enter full address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date of Assessment</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Assessor Name &amp; Qualification</label>
                <input type="text" className={inputClass} placeholder="Enter assessor name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date of Previous Assessment</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Number of Residents</label>
                <input type="text" className={inputClass} placeholder="Enter number" />
              </div>
            </div>
          </div>

          {/* Significant Findings */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Significant Findings</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Identified Hazard</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">People at Risk</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Risk Level (Low/Med/High)</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Existing Measures</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/4">Action Required</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="border-b border-border">
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder={`Hazard ${row}`} /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="e.g. residents, staff" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Low / Med / High" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Current measures" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Action needed" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Plan */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Action Plan</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/3">Action</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Responsible Person</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Priority</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Target Date</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground w-1/6">Date Completed</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((row) => (
                  <tr key={row} className="border-b border-border">
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder={`Action ${row}`} /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Name" /></td>
                    <td className="py-2 px-2"><input type="text" className={inputClass} placeholder="Low / Med / High" /></td>
                    <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                    <td className="py-2 px-2"><input type="date" className={inputClass} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sign-off */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Sign-Off</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Assessor Signature</label>
                <input type="text" className={inputClass} placeholder="Assessor name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Responsible Person Signature</label>
                <input type="text" className={inputClass} placeholder="Responsible person name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date of Next Review</label>
                <input type="date" className={inputClass} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              GOV.UK — Fire Risk Assessments ↗
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
          The fire risk assessment guidance on Care Handbook is for
          informational purposes only and does not replace a professional fire
          risk assessment. You must comply with the Regulatory Reform (Fire
          Safety) Order 2005. Always engage a competent person to carry out
          your fire risk assessment and consult your local Fire and Rescue
          Service for premises-specific advice.
        </p>
      </div>
    </div>
  );
}