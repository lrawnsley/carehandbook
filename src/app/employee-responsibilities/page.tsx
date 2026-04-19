import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { employeeSubPages } from "@/data/employee";

export const metadata: Metadata = {
  title: "Employee Responsibilities",
  description:
    "UK care home employee duties and responsibilities: duty of care, safeguarding adults, code of conduct, and whistleblowing procedures.",
};

export default function EmployeeResponsibilitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Employee Responsibilities" }]} />

      <div className="mb-10">
        <span className="text-4xl block mb-4">👤</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Employee Responsibilities
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Every person working in a UK care home has legal and professional responsibilities 
          that go beyond simply carrying out tasks. Understanding your duty of care, safeguarding 
          obligations, professional code of conduct, and whistleblowing rights is essential for 
          delivering safe, effective, and compassionate care — and for protecting yourself and 
          the people you support.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Your Responsibilities as a Care Worker</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            As a care worker in England, you are bound by legislation including the Health and Social 
            Care Act 2008, the Health and Safety at Work etc. Act 1974, the Care Act 2014, and the 
            Data Protection Act 2018. You also have professional obligations set out by Skills for Care 
            in the Code of Conduct for Healthcare Support Workers and Adult Social Care Workers in England.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            These responsibilities are not optional — they are legal requirements. Failing to meet them 
            can result in disciplinary action, dismissal, referral to the Disclosure and Barring Service 
            (DBS), criminal prosecution, or CQC enforcement action against your employer. Understanding 
            and fulfilling your responsibilities protects residents, colleagues, and yourself.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Health and Social Care Act 2008 (Regulated Activities) 
            Regulations 2014 — sets out the Fundamental Standards that underpin your duty of care. 
            The Care Act 2014 — establishes adult safeguarding duties. The Health and Safety at Work 
            etc. Act 1974 — places duties on both employers and employees.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {employeeSubPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all no-underline"
          >
            <div className="p-5 sm:p-6">
              <span className="text-3xl block mb-3">{page.icon}</span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {page.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{page.description}</p>
              <div className="mt-3 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Key Principles */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Principles for Every Care Worker</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Always act in the best interests of the person you support</strong> — person-centred care is not optional; it is the foundation of good practice (CQC Regulation 9).</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Never ignore a concern</strong> — if you see abuse, neglect, poor practice, or a safety hazard, you have a duty to report it immediately.</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Work within your scope of practice</strong> — do not carry out tasks you have not been trained and assessed as competent to perform.</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Maintain confidentiality</strong> — personal information must only be shared on a need-to-know basis and in accordance with the Data Protection Act 2018 and UK GDPR.</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Keep your knowledge and skills up to date</strong> — the Care Certificate, mandatory training, and ongoing CPD are all parts of your professional responsibility.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}