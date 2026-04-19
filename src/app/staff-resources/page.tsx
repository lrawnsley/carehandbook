import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { staffSubPages } from "@/data/staff";

export const metadata: Metadata = {
  title: "Staff & Employer Resources",
  description:
    "What employers must provide and staff are entitled to in UK care homes: induction, the Care Certificate, supervision, employment rights, and teamwork.",
};

export default function StaffResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Staff & Employer Resources" }]} />

      <div className="mb-10">
        <span className="text-4xl block mb-4">👥</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Staff & Employer Resources
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Care employers have a legal duty to provide adequate staffing, training, supervision, and 
          support for their employees. At the same time, care workers have employment rights that 
          protect their welfare and ensure they can deliver safe, effective care. This section 
          covers what employers must provide and what staff are entitled to.
        </p>
      </div>

      {/* Regulatory background */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Regulatory Requirements for Employers</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            CQC Regulation 18 (Staffing) requires providers to employ sufficient numbers of suitably 
            qualified, competent, skilled, and experienced staff to meet the needs of the people they 
            support. This includes ensuring staff receive appropriate support, training, professional 
            development, and supervision to carry out their roles.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Care Certificate sets out the minimum standards that new health and social care workers 
            should be trained to before they can work unsupervised. It was introduced in 2015 jointly 
            by Skills for Care, Health Education England, and Skills for Health, and replaces the 
            Common Induction Standards (CIS) and National Minimum Training Standards.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Health and Social Care Act 2008 (Regulated Activities) 
            Regulations 2014 — Regulation 18 (Staffing). Employment Rights Act 1996. Working Time 
            Regulations 1998. National Minimum Wage Act 1998. Equality Act 2010.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {staffSubPages.map((page) => (
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
                <svg xmlns="http://www.w3.org/0/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Reference */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Employer Must-Do Checklist</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Provide a written contract</strong> with all required employment particulars from day one (Employment Rights Act 1996)</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Complete Care Certificate training</strong> for all new care workers within 12 weeks of starting work</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Provide regular supervision</strong> — at least 4–6 times per year for each staff member (CQC expectation)</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Pay at least the National Minimum Wage</strong> — including for sleep-in shifts where applicable</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Comply with Working Time Regulations</strong> — including rest breaks, rest periods, and maximum weekly hours</span>
          </li>
          <li className="flex items-start gap-2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm"><strong>Carry out a DBS check</strong> before employing anyone in a regulated activity (Regulated Activity Regulations 2009)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}