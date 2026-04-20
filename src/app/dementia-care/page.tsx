import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dementia Care",
  description:
    "Essential dementia care guidance for UK care homes — types of dementia, person-centred care, communication techniques, distressed behaviour support, and printable tools like Getting to Know Me and ABC charts.",
};

const subPages = [
  {
    href: "/dementia-care/overview",
    title: "Types & Stages of Dementia",
    description:
      "Understand the main types of dementia, their symptoms, proportions, and how dementia progresses through early, middle, and late stages.",
    icon: "🧠",
  },
  {
    href: "/dementia-care/person-centred-care",
    title: "Person-Centred Care",
    description:
      "The principles of person-centred dementia care — valuing the individual, seeing the whole person, and delivering care aligned with NICE NG97.",
    icon: "🤝",
  },
  {
    href: "/dementia-care/communication",
    title: "Communication Techniques",
    description:
      "Practical do's and don'ts for communicating with people living with dementia — verbal, non-verbal, and active listening approaches.",
    icon: "💬",
  },
  {
    href: "/dementia-care/distressed-behaviour",
    title: "Distressed Behaviour & PBS",
    description:
      "Understanding distressed behaviour through Positive Behavioural Support (PBS), de-escalation strategies, and when to use ABC charts.",
    icon: "🧘",
  },
  {
    href: "/dementia-care/getting-to-know-me",
    title: "Getting to Know Me Template",
    description:
      "Interactive, printable life story template — capture personal history, preferences, routines, and communication needs to deliver truly individualised care.",
    icon: "📝",
  },
  {
    href: "/dementia-care/abc-chart",
    title: "ABC Behaviour Chart",
    description:
      "Interactive, printable ABC (Antecedent–Behaviour–Consequence) chart to record, analyse, and understand distressed behaviour patterns.",
    icon: "📊",
  },
];

export default function DementiaCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Dementia Care" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🧠</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Dementia Care
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Approximately 1 in 14 people over the age of 65 in the UK have dementia, and over
          70% of care home residents live with some form of dementia or cognitive impairment.
          Delivering high-quality, person-centred dementia care is one of the most important
          aspects of care work. This section provides the essential knowledge and practical
          tools every care worker needs.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">About Dementia Care</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Dementia is not a single disease — it is an umbrella term for a range of conditions
            that affect the brain, causing progressive decline in memory, thinking, orientation,
            comprehension, calculation, learning capacity, language, and judgement. The most
            common types are Alzheimer&apos;s disease, vascular dementia, dementia with Lewy
            bodies, and frontotemporal dementia.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The Care Handbook provides guidance rooted in best practice and UK regulatory
            frameworks, including the CQC&apos;s key question &ldquo;Is the service Caring?&rdquo; and
            NICE Guideline NG97 on dementia assessment, management, and support. Person-centred
            care is at the heart of everything we do in dementia support — seeing the person
            first, not the condition.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation &amp; guidance:</strong> Mental Capacity Act 2005, NICE NG97
            (Dementia: Assessment, Management and Support), CQC Regulation 9 (Person-Centred Care),
            and the Alzheimer&apos;s Society best practice framework.
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
              href="https://www.alzheimers.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Alzheimer&apos;s Society ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG97 — Dementia: Assessment, Management and Support ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/fundamental-standards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/conditions/dementia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — Dementia Overview ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
              <p className="text-muted leading-relaxed">
                Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
                policies, formal training, or current CQC standards. Always follow your employer&apos;s
                specific procedures and consult your line manager or the relevant professional body
                if you are unsure. The information here is based on current CQC frameworks and UK
                legislation but may not reflect the very latest updates. Always verify with
                <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> and
                <a href="https://www.alzheimers.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> alzheimers.org.uk</a> for the most current guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}