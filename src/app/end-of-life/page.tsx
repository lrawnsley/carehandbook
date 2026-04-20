import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "End of Life Care",
  description:
    "End of life care resources for UK care homes — advance care planning, recognising when someone is dying, anticipatory prescribing, and comfort measures.",
};

const subPages = [
  {
    href: "/end-of-life/advance-care-planning",
    title: "Advance Care Planning",
    description:
      "Support residents to plan their future care — including Advance Decisions, DNACPR, Lasting Power of Attorney, and recording wishes. Interactive printable form included.",
    icon: "📝",
  },
  {
    href: "/end-of-life/recognising-dying",
    title: "Recognising When Someone Is Dying",
    description:
      "Understand the physical and psychological signs that indicate a person is approaching the end of life, and how to provide compassionate comfort care.",
    icon: "🕊️",
  },
  {
    href: "/end-of-life/anticipatory-care",
    title: "Anticipatory Prescribing & Comfort Care",
    description:
      "Anticipatory medications for common end-of-life symptoms, syringe driver overview, and comfort care measures to ensure dignity and relief.",
    icon: "💊",
  },
];

export default function EndOfLifePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "End of Life Care" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🤍</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          End of Life Care
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          End of life care helps people live as well as possible until they
          die, and to die with dignity. For care homes, this means supporting
          residents and their families through advance care planning,
          recognising when someone is dying, managing symptoms, and
          providing compassionate comfort. Care Handbook provides practical
          resources to guide care workers through this most important phase of
          care.
        </p>
      </div>

      {/* End of Life Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">End of Life Care in Care Homes</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            The majority of care home residents are older people, many with
            advanced dementia or other life-limiting conditions. Research
            shows that around 30% of people who die in England each year die
            in care homes. Yet end of life care is often not given the
            attention it deserves in care home training and planning.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Good end of life care begins well before a person&apos;s final
            days. It starts with advance care planning — conversations about
            what matters to the person, what treatments they would or would
            not want, and where they wish to be cared for. These conversations
            should happen early, ideally when the person is still able to
            express their wishes clearly.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Gold Standards Framework (GSF) and the Six Steps Programme
            provide structured approaches to end of life care in care homes.
            The CQC assesses end of life care under the &ldquo;Caring&rdquo;
            and &ldquo;Responsive&rdquo; key questions, and expects care homes
            to have systems in place for advance care planning, symptom
            management, and support for families.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key frameworks:</strong> NICE guideline NG31 — Care of
            dying adults in the last days of life; The Ambitions Framework
            for Palliative and End of Life Care; The Gold Standards Framework
            (GSF) for Care Homes; The Mental Capacity Act 2005 (for advance
            decisions and LPA).
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
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official End of Life Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG31 — Care of Dying Adults in the Last Days of Life ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.dyingmatters.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Dying Matters — Talk, Plan, Live ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/conditions/end-of-life-care/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — End of Life Care ↗
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
          <li>
            <a
              href="https://www.goldstandardsframework.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Gold Standards Framework for Care Homes ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The end of life care guidance on Care Handbook is for informational
          purposes only and does not constitute medical, nursing, or legal
          advice. Always follow your care home&apos;s policies and procedures,
          consult the resident&apos;s GP or palliative care team for clinical
          decisions, and seek legal advice for matters relating to advance
          decisions, lasting power of attorney, or DNACPR. Every person&apos;s
          situation is unique and should be assessed individually.
        </p>
      </div>
    </div>
  );
}