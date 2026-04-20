import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Admission & Discharge",
  description:
    "Admission and discharge resources for UK care homes — pre-admission assessments, admission checklists, hospital transfer forms, and step-by-step guidance for smooth transitions.",
};

const subPages = [
  {
    href: "/admission-discharge/pre-admission",
    title: "Pre-Admission Assessment",
    description:
      "Comprehensive pre-admission assessment form covering personal details, health information, mental capacity, and personal preferences. Print-ready for face-to-face assessments.",
    icon: "📝",
  },
  {
    href: "/admission-discharge/admission-checklist",
    title: "Admission Checklist",
    description:
      "Step-by-step admission process checklist from before arrival through to 4-week review. Ensure no step is missed when welcoming a new resident.",
    icon: "✅",
  },
  {
    href: "/admission-discharge/hospital-transfer",
    title: "Hospital Transfer Form",
    description:
      "SBAR-format hospital transfer form to ensure all essential information accompanies a resident when transferring to hospital. Printable and ready for use.",
    icon: "🚑",
  },
];

export default function AdmissionDischargePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Admission & Discharge" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🏠</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Admission & Discharge
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          A well-managed admission and discharge process is essential for ensuring smooth
          transitions, reducing risk, and supporting the wellbeing of residents. The Care Handbook
          provides practical tools and checklists to help care homes manage every stage of the
          process — from pre-admission assessment to hospital transfers.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Why Admission Processes Matter</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            CQC inspectors assess the &ldquo;Safe&rdquo; and &ldquo;Responsive&rdquo; key
            questions in part by reviewing how well new residents are welcomed, assessed, and
            supported during their transition into a care home. Effective admission processes
            ensure that care plans are accurate, risks are identified early, and residents feel
            settled and supported from day one.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Under Regulation 9 (Person-Centred Care) and Regulation 10 (Dignity and Respect), the
            CQC expects providers to involve the person and their family in decisions about their
            care from the outset. Good admission processes also support compliance with the Mental
            Capacity Act 2005, the Care Act 2014, and Deprivation of Liberty Safeguards (DoLS).
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Health and Social Care Act 2008 (Regulated Activities)
            Regulations 2014 — Regulation 9 (Person-centred care), Regulation 10 (Dignity and
            respect), Regulation 11 (Need for consent), and Regulation 13 (Safeguarding from abuse).
            The Care Act 2014 also places duties on local authorities regarding assessment and
            transitions.
          </p>
        </div>
      </div>

      {/* Sub-Pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              href="https://www.skillsforcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Skills for Care — Workforce Development ↗
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
              href="https://www.ageuk.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Age UK — Advice and Support for Older People ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> The admission and discharge resources provided by
          Care Handbook are for guidance only and do not replace professional judgement or your
          organisation&apos;s policies. Always follow your employer&apos;s procedures and relevant
          legislation. If you are unsure about any aspect of a resident&apos;s admission or
          transfer, seek advice from your line manager or the responsible local authority.
        </p>
      </div>
    </div>
  );
}