import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Safeguarding",
  description:
    "Safeguarding resources for UK care homes — understand abuse types, raise safeguarding alerts, and follow the correct procedures to protect adults at risk.",
};

const subPages = [
  {
    href: "/safeguarding/alert-form",
    title: "Safeguarding Alert Form",
    description:
      "Interactive safeguarding alert form with abuse type definitions, reporting guidance, and investigation steps. Follow the correct procedure to raise and document a safeguarding concern.",
    icon: "🛡️",
  },
];

export default function SafeguardingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Safeguarding" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🛡️</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Safeguarding
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Safeguarding is everyone&apos;s responsibility. Under the Care Act 2014, all care workers
          have a duty to protect adults at risk of abuse or neglect. The Care Handbook provides
          the tools and guidance you need to recognise abuse, raise concerns, and follow the
          correct procedures to keep people safe.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">What Is Safeguarding?</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Safeguarding means protecting an adult&apos;s right to live in safety, free from abuse
            and neglect. It is about people and organisations working together to prevent and stop
            both the risks and experience of abuse or neglect, while at the same time making sure
            that the adult&apos;s wellbeing is promoted including, where appropriate, having regard
            to their views, wishes, feelings, and beliefs.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Under Section 42 of the Care Act 2014, local authorities have a duty to make enquiries
            — or cause others to do so — where an adult has needs for care and support, is
            experiencing or at risk of abuse or neglect, and as a result of those care and support
            needs is unable to protect themselves. The Care Handbook supports care workers in
            understanding their role within this framework.
          </p>
        </div>
        <div className="mt-4 p-4 bg-red-50/50 border border-red-200 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Key duty:</strong> Under Regulation 13 of the Health and Social Care Act 2008
            (Regulated Activities) Regulations 2014, providers must have systems and processes
            designed to ensure that service users are safeguarded from abuse. CQC inspectors will
            review safeguarding policies, procedures, and records as part of the &ldquo;Safe&rdquo;
            key question.
          </p>
        </div>
      </div>

      {/* Key statistics */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Understanding Abuse in Care Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <span className="text-3xl font-bold text-primary">10</span>
            <p className="text-sm text-muted mt-1">Recognised types of abuse</p>
            <p className="text-xs text-muted mt-1">Including physical, financial, neglect, and modern slavery</p>
          </div>
          <div className="text-center p-4">
            <span className="text-3xl font-bold text-primary">24h</span>
            <p className="text-sm text-muted mt-1">Maximum time to report</p>
            <p className="text-xs text-muted mt-1">Safeguarding concerns should be reported within 24 hours</p>
          </div>
          <div className="text-center p-4">
            <span className="text-3xl font-bold text-primary">§42</span>
            <p className="text-sm text-muted mt-1">Care Act 2014</p>
            <p className="text-xs text-muted mt-1">The legal duty to make safeguarding enquiries</p>
          </div>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
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

      {/* Principle reminder */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Six Principles of Safeguarding</h2>
        <p className="text-sm text-muted mb-4">
          The Department of Health&apos;s Care and Support Statutory Guidance sets out six principles
          that should underpin all safeguarding work:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Empowerment", desc: "People are supported and encouraged to make their own decisions and give informed consent." },
            { name: "Prevention", desc: "It is better to take action before harm occurs." },
            { name: "Proportionality", desc: "The least intrusive response appropriate to the risk presented." },
            { name: "Protection", desc: "Support and representation for those in greatest need." },
            { name: "Partnership", desc: "Services offer local solutions through working closely with communities and other services." },
            { name: "Accountability", desc: "Accountability and transparency in safeguarding practice." },
          ].map((principle) => (
            <div key={principle.name} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-foreground text-sm">{principle.name}</h3>
              <p className="text-xs text-muted mt-1">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Care Quality Commission ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.scie.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              SCIE — Social Care Institute for Excellence ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/care-act-statutory-guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Care Act 2014 — Statutory Guidance ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.skillsforcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Skills for Care — Workforce Development ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> The safeguarding resources provided by Care Handbook
          are for guidance only and do not replace your organisation&apos;s safeguarding policies or
          local authority procedures. If you suspect abuse or neglect, follow your
          organisation&apos;s safeguarding procedure and report to your designated safeguarding lead
          immediately. In an emergency, call 999. All safeguarding concerns must be reported to the
          local authority under the Care Act 2014.
        </p>
      </div>
    </div>
  );
}