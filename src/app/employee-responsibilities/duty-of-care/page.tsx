import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { dutyOfCarePoints } from "@/data/employee";

export const metadata: Metadata = {
  title: "Duty of Care",
  description:
    "Legal obligations for UK care home employees under the Health and Social Care Act, Health & Safety at Work Act, and duty of candour. Understand your duty to keep residents safe.",
};

export default function DutyOfCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Employee Responsibilities", href: "/employee-responsibilities" },
        { label: "Duty of Care" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Duty of Care
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Every care worker owes a duty of care to the people they support. This is a legal 
            obligation to act with reasonable care and skill, and to not cause harm. It arises 
            from both legislation and the professional relationship between a care worker and 
            the people they care for.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Key point:</strong> Duty of care is not something you can choose to opt in or out 
          of — it applies to everyone providing care, whether you are a registered nurse, a senior 
          care assistant, or a newly appointed care worker on your first day. If you are providing 
          care, you owe a duty of care.
        </p>
      </div>

      <div className="space-y-6">
        {dutyOfCarePoints.map((point, index) => (
          <section key={point.heading} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <h2 className="text-xl font-bold text-foreground pt-1.5">
                {point.heading}
              </h2>
            </div>
            <p className="text-muted leading-relaxed pl-14">{point.content}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 bg-surface rounded-xl border border-border p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Summary of Key Duties</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Provide care that meets the Fundamental Standards set out in the Health and Social Care Act 2008 Regulations 2014
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Take reasonable care for your own health and safety and that of others who may be affected by your actions (Health and Safety at Work etc. Act 1974)
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Report concerns about safety, abuse, or poor practice promptly and through the correct channels
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cooperate with your employer&apos;s health and safety policies and procedures
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Support the Duty of Candour by being open, honest, and transparent when things go wrong
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Work within your scope of practice and competence at all times
          </li>
        </ul>
      </div>
    </div>
  );
}