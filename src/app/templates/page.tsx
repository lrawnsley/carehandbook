import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TemplateCard from "@/components/TemplateCard";
import { careTemplates } from "@/data/templates";

export const metadata: Metadata = {
  title: "Care & Nursing Templates",
  description:
    "Free printable care templates for UK care homes: care plans, risk assessments, daily records, incident reports, mental capacity assessments, and more.",
};

const iconMap: Record<string, string> = {
  "care-plan": "📝",
  "risk-assessment": "⚠️",
  "daily-care-record": "📅",
  "incident-report": "🚨",
  "moving-handling": "🏗️",
  "pressure-sore-assessment": "🩹",
  "mental-capacity": "🧠",
  "consent-forms": "✍️",
  "supervision-record": "👥",
};

const categories = [...new Set(careTemplates.map((t) => t.category))];

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Care & Nursing Templates" }]} />

      <div className="mb-10">
        <span className="text-4xl block mb-4">📝</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Care Assistant & Nursing Templates
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Printable, fillable templates for essential care documentation. Each template 
          is based on current CQC standards and UK care home best practice. All templates 
          are designed to be used as guidance — adapt them to your organisation&apos;s policies.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category} className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careTemplates
              .filter((t) => t.category === category)
              .map((template) => (
                <TemplateCard
                  key={template.id}
                  title={template.title}
                  description={template.description}
                  href={`/templates/${template.id}`}
                  icon={iconMap[template.id] || "📄"}
                  category={template.category}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}