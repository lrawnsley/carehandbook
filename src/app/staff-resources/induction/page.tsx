import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { careCertificateStandards, mandatoryTrainingTopics } from "@/data/staff";

export const metadata: Metadata = {
  title: "Induction & Training",
  description:
    "CQC Regulation 18, the Care Certificate, mandatory training requirements, and ongoing continuing professional development for UK care home staff.",
};

export default function InductionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Staff & Employer Resources", href: "/staff-resources" },
        { label: "Induction & Training" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Induction & Training
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Under CQC Regulation 18, providers must ensure that staff are suitably qualified, 
            competent, skilled, and experienced to deliver safe, effective care. Induction and 
            ongoing training are essential components of meeting this requirement.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* CQC Regulation 18 */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">CQC Regulation 18: Staffing</h2>
        <p className="text-sm text-muted leading-relaxed">
          Regulation 18 requires providers to employ &ldquo;sufficient numbers of suitably qualified, 
          competent, skilled and experienced persons&rdquo; and to ensure that staff receive &ldquo;appropriate 
          support, training, professional development, supervision and appraisal.&rdquo; New staff must 
          complete an induction that meets the Care Certificate standards before working unsupervised. 
          Existing staff must have ongoing training, supervision, and development opportunities.
        </p>
      </div>

      {/* Care Certificate */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">The Care Certificate</h2>
        <p className="text-muted leading-relaxed mb-4">
          The Care Certificate was introduced in April 2015 and applies to all new health and social 
          care workers. It sets out the minimum standards that new workers should be trained to before 
          they can work without day-to-day supervision. It consists of 15 standards, each covering 
          a fundamental area of knowledge and skill. The Care Certificate should be completed within 
          12 weeks of starting work.
        </p>
        <p className="text-muted leading-relaxed mb-6">
          Although the Care Certificate is not a legal requirement in itself, CQC inspectors will 
          expect to see evidence that new staff have been inducted to at least Care Certificate level. 
          Skills for Care recommends that the Care Certificate is completed by all new starters, 
          including those with prior qualifications, as it ensures a consistent baseline of knowledge.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">The 15 Care Certificate Standards</h3>
        <div className="space-y-4">
          {careCertificateStandards.map((standard) => (
            <div key={standard.number} className="flex items-start gap-3 p-3 bg-background rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                {standard.number}
              </span>
              <div>
                <h4 className="font-bold text-foreground text-sm">{standard.title}</h4>
                <p className="text-xs text-muted mt-0.5">{standard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Training */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Mandatory Training</h2>
        <p className="text-muted leading-relaxed mb-6">
          In addition to the Care Certificate, all care staff must complete ongoing mandatory training. 
          This is training that every employee must undertake, regardless of their role, to ensure the 
          safety of residents, staff, and visitors. The specific topics and their frequency may vary 
          between organisations, but the following are widely recognised as mandatory in care homes.
        </p>
        <div className="space-y-4">
          {mandatoryTrainingTopics.map((topic) => (
            <div key={topic.topic} className="p-4 bg-background rounded-lg">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-bold text-foreground">{topic.topic}</h3>
                <span className="text-xs font-medium text-primary bg-primary-light rounded-full px-2.5 py-0.5 flex-shrink-0">
                  {topic.frequency}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CPD */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Continuing Professional Development (CPD)</h2>
        <p className="text-muted leading-relaxed mb-4">
          Learning does not stop after the Care Certificate. Continuing Professional Development (CPD) 
          is the ongoing process of maintaining, improving, and extending your knowledge, skills, and 
          competence throughout your career. CQC inspectors will look for evidence that staff are 
          continually learning and developing.
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Qualifications:</strong> Level 2, 3, 4, and 5 Diplomas in Health and Social Care; adult social care apprenticeships
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Specialist training:</strong> dementia awareness, end of life care, diabetes management, stroke awareness, epilepsy management
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Reflective practice:</strong> keeping a reflective journal, participating in clinical supervision, and learning from incidents
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Online learning:</strong> e-learning modules, webinars, and distance learning courses
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Leadership development:</strong> aspiring managers should consider the Level 5 Diploma in Leadership for Health and Social Care
          </li>
        </ul>
      </div>
    </div>
  );
}