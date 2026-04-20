import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nutrition & Hydration",
  description:
    "Nutrition and hydration resources for UK care homes — MUST screening, food and fluid charts, weight monitoring, and IDDSI texture-modified diet guidance.",
};

const subPages = [
  {
    href: "/nutrition/must-screening",
    title: "MUST Screening",
    description:
      "Step-by-step guide to the Malnutrition Universal Screening Tool (MUST) — calculate BMI, assess weight loss, determine risk, and take appropriate action.",
    icon: "⚖️",
  },
  {
    href: "/nutrition/food-fluid-chart",
    title: "Food & Fluid Chart",
    description:
      "Interactive food and fluid intake record to monitor what a resident eats and drinks throughout the day. Print-ready for care plan documentation.",
    icon: "📋",
  },
  {
    href: "/nutrition/weight-monitoring",
    title: "Weight Monitoring",
    description:
      "Guidance on when and how to weigh residents, when to refer to a dietitian, and how to document and respond to significant weight changes.",
    icon: "📊",
  },
  {
    href: "/nutrition/texture-modified-diets",
    title: "Texture-Modified Diets (IDDSI)",
    description:
      "The International Dysphagia Diet Standardisation Initiative (IDDSI) framework — understand each level from thin fluids to regular food, plus thickener guidance.",
    icon: "🍝",
  },
];

export default function NutritionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Nutrition & Hydration" }]} />

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl block mb-4">🍽️</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Nutrition & Hydration
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Good nutrition and hydration are fundamental to the health and wellbeing of care home
          residents. Malnutrition affects up to 35% of care home residents and is associated with
          increased risk of falls, pressure ulcers, infections, and longer recovery times. The Care
          Handbook provides practical tools to help staff identify risk, monitor intake, and take
          appropriate action.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Why Nutrition Matters</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted leading-relaxed mb-4">
            Under the CQC&apos;s Key Question &ldquo;Effective&rdquo;, care homes must ensure that
            residents are supported to eat and drink enough to maintain a balanced diet. The Care
            Quality Commission expects providers to assess nutritional needs, monitor weight, and
            take action when concerns are identified. The Care Handbook supports compliance with
            Regulations 9, 10, 11, and 14 of the Health and Social Care Act 2008.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            BAPEN (the British Association for Parenteral and Enteral Nutrition) recommends that all
            care home residents should be screened for malnutrition risk on admission and at regular
            intervals using a validated tool such as MUST. Effective nutrition care is a
            multidisciplinary responsibility involving care staff, nurses, dietitians, and GPs.
          </p>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key legislation:</strong> Health and Social Care Act 2008 (Regulated Activities)
            Regulations 2014 — Regulation 14 (Meeting nutrition and hydration needs) requires
            providers to ensure service users receive adequate nutrition and hydration.
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
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.bapen.org.uk/screening-and-must/must-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              BAPEN — MUST Calculator ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.bapen.org.uk/screening-and-must"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              BAPEN — Malnutrition Screening ↗
            </a>
          </li>
          <li>
            <a
              href="https://iddsi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              IDDSI — International Dysphagia Diet Standardisation ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng32"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG32 — Nutrition Support for Adults ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/about-us/how-we-do-our-job"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — How We Regulate Services ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> The resources provided by Care Handbook are for
          guidance only and do not replace professional clinical judgement. Always follow your
          organisation&apos;s policies and procedures and consult with a registered dietitian or GP
          when making clinical decisions about a resident&apos;s nutritional care. If you are
          concerned about a resident&apos;s health, seek medical advice immediately.
        </p>
      </div>
    </div>
  );
}