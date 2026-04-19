import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TemplateCard from "@/components/TemplateCard";
import { allHandoverTemplates } from "@/data/handover";

export const metadata: Metadata = {
  title: "Handover Templates",
  description:
    "Free printable handover templates for UK care homes: shift handover, night-to-day handover, and individual resident summary forms.",
};

const iconMap: Record<string, string> = {
  "shift-handover": "📋",
  "night-to-day": "🌙",
  "resident-summary": "👤",
};

export default function HandoverTemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Handover Templates" }]} />

      <div className="mb-10">
        <span className="text-4xl block mb-4">📋</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Handover Templates
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Effective handover is critical for safe, continuous care. Poor communication between 
          shifts is a leading cause of medication errors, missed care, and missed deterioration. 
          These templates ensure all essential information is handed over clearly.
        </p>
      </div>

      {/* Best Practice Box */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">Handover Best Practice</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Always conduct handover face-to-face — not just by leaving notes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Allow adequate time for handover — it should never be rushed
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Prioritise by clinical need — discuss unwell or at-risk residents first
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Use the ISBAR framework: Identify, Situation, Background, Assessment, Recommendation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Both outgoing and incoming staff should sign the handover record
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Record any medications administered or outstanding during the shift
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            CQC expects evidence of effective handover systems — these templates support Regulation 17 (Good Governance)
          </li>
        </ul>
      </div>

      {/* Template Cards */}
      <h2 className="text-xl font-bold text-foreground mb-4">Available Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allHandoverTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            description={template.description}
            href={`/handover-templates/${template.id}`}
            icon={iconMap[template.id] || "📋"}
          />
        ))}
      </div>
    </div>
  );
}