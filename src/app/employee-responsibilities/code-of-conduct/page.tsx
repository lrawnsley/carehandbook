import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { conductPrinciples, professionalBoundaries } from "@/data/employee";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Skills for Care Code of Conduct, professional boundaries, confidentiality obligations, and GDPR/Data Protection for UK care home workers.",
};

export default function CodeOfConductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Employee Responsibilities", href: "/employee-responsibilities" },
        { label: "Code of Conduct" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Code of Conduct
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The Skills for Care <em>Code of Conduct for Healthcare Support Workers and Adult Social 
            Care Workers in England</em> sets out the standards of behaviour and practice that every 
            care worker is expected to meet. It describes what good care looks like and helps you 
            understand your responsibilities.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Code of Conduct Principles */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>About the Code of Conduct:</strong> The Code of Conduct was developed by Skills 
          for Care, Skills for Health, and the Department of Health. It applies to all healthcare 
          support workers and adult social care workers in England. It is not a legal requirement in 
          itself, but it underpins the CQC&apos;s expectations of staff conduct and is used by employers 
          as a benchmark for performance, supervision, and disciplinary matters. Failing to follow 
          the Code may result in disciplinary action, including dismissal, and may be referred to 
          the DBS.
        </p>
      </div>

      <h2 className="text-xl font-bold text-foreground mb-4">The Six Principles of the Code of Conduct</h2>

      <div className="space-y-6 mb-8">
        {conductPrinciples.map((principle, index) => (
          <section key={principle.title} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{principle.title}</h2>
                <p className="text-muted leading-relaxed mt-1">{principle.description}</p>
              </div>
            </div>
            <div className="pl-14">
              <ul className="space-y-2">
                {principle.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Professional Boundaries */}
      <h2 className="text-xl font-bold text-foreground mb-4">Professional Boundaries</h2>
      <p className="text-muted leading-relaxed mb-6">
        Maintaining professional boundaries is essential for safe, ethical care. Professional boundaries 
        define the limits of the relationship between a care worker and the person they support. They 
        protect both the resident and the care worker.
      </p>

      <div className="space-y-6 mb-8">
        {professionalBoundaries.map((boundary) => (
          <section key={boundary.heading} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h2 className="text-lg font-bold text-foreground mb-3">{boundary.heading}</h2>
            <p className="text-muted leading-relaxed text-sm">{boundary.guidance}</p>
          </section>
        ))}
      </div>

      {/* GDPR Callout */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5">
        <h2 className="text-lg font-bold text-foreground mb-2">GDPR and Data Protection</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 govern 
          how personal data is processed. As a care worker, you handle sensitive personal data daily — 
          health records, care plans, medication records, and personal information about residents and 
          their families.
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Lawfulness, fairness, and transparency</strong> — you must have a lawful basis for processing personal data and be transparent about how you use it
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Purpose limitation</strong> — data collected for one purpose must not be used for a different purpose without consent
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Data minimisation</strong> — only collect and store the personal data you actually need
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Accuracy</strong> — keep records accurate and up to date
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Storage limitation</strong> — do not keep personal data longer than necessary; follow your organisation&apos;s retention policy
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Integrity and confidentiality</strong> — keep data secure from unauthorised access, loss, or damage
          </li>
        </ul>
      </div>
    </div>
  );
}