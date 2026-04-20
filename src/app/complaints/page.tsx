import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Complaints Handling",
  description:
    "Complaints handling resources for UK care homes — complaint record forms, investigation tracker, CQC Regulation 16 compliance, and response timeline guidance.",
};

const subPages = [
  {
    href: "/complaints/complaint-form",
    title: "Complaint Record Form",
    description:
      "Record complaints formally using our interactive template — complainant details, complaint categories, incident description, desired outcomes, and office-use fields. Printable.",
    icon: "📋",
  },
  {
    href: "/complaints/investigation-tracker",
    title: "Investigation Tracker",
    description:
      "Step-by-step investigation process from acknowledgment to follow-up, CQC Regulation 16 requirements, response timelines, and learning actions.",
    icon: "🔍",
  },
];

export default function ComplaintsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Complaints Handling" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">📝</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Complaints Handling
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Every care home in England must have an effective complaints system.
          CQC Regulation 16: Receiving and acting on complaints requires
          providers to establish and operate an effective complaints procedure.
          Care Handbook provides practical tools to help you record, investigate,
          and resolve complaints properly.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Complaints in Care Homes</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Complaints are not something to fear — they are a valuable means
            of improving care. The CQC expects providers to have a culture
            where complaints are welcomed and used as a source of learning.
            A complaint, whether from a resident, relative, or staff member,
            highlights something that has gone wrong or could be done better.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Under CQC Regulation 16, care providers must: have an effective
            system for receiving, recording, and responding to complaints;
            respond to complaints within a reasonable time; provide a
            written response; and take action to resolve the complaint and
            prevent recurrence. Failure to comply with Regulation 16 can
            result in enforcement action.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Local Government and Social Care Ombudsman (LGSCO) is the
            final stage for complaints about adult social care that cannot
            be resolved by the provider. All residents and their families
            should be informed about their right to escalate to the LGSCO
            if they remain dissatisfied.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key regulation:</strong> CQC Regulation 16 — Receiving
            and acting on complaints. Health and Social Care Act 2008
            (Regulated Activities) Regulations 2014. The regulation requires
            that complaints are acknowledged promptly, investigated
            thoroughly, and responded to in writing within a reasonable
            timescale.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {subPages.map((page) => (
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

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Complaints Resources</h2>
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
              href="https://www.nhs.uk/using-the-nhs/about-the-nhs/how-to-complain-to-the-nhs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — How to Complain ↗
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
          The complaints handling guidance on Care Handbook is for
          informational purposes only and does not constitute legal advice.
          Always follow your care home&apos;s complaints policy and
          procedures. If a complaint involves a safeguarding concern, you
          must follow your safeguarding procedures and report to the local
          authority. Seek legal advice if you are unsure about your
          regulatory obligations.
        </p>
      </div>
    </div>
  );
}