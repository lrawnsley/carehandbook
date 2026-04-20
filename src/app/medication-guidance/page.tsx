import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TemplateCard from "@/components/TemplateCard";

export const metadata: Metadata = {
  title: "Medication Guidance",
  description:
    "Comprehensive medication guidance for UK care homes: the 5 Rights, MAR chart guidance, controlled drugs procedures, abbreviations, PRN protocols, storage, and error management.",
};

const subPages = [
  {
    href: "/medication-guidance/five-rights",
    title: "The 5 Rights of Medication",
    description:
      "Right Patient, Right Medication, Right Dose, Right Route, Right Time — the foundation of safe medication administration in care homes.",
    icon: "💊",
  },
  {
    href: "/medication-guidance/mar-chart",
    title: "MAR Chart Guidance",
    description:
      "Medication Administration Record charts: how to complete them correctly, coding systems, what to do when a dose is administered, refused, or omitted.",
    icon: "📊",
  },
  {
    href: "/medication-guidance/controlled-drugs",
    title: "Controlled Drugs Procedures",
    description:
      "Storage, administration, recording, and destruction of controlled drugs (CDs) in compliance with the Misuse of Drugs Regulations 2001.",
    icon: "🔒",
  },
  {
    href: "/medication-guidance/abbreviations",
    title: "Common Medication Abbreviations",
    description:
      "OD, BD, TDS, QDS, PRN, AC, PC, and more — a comprehensive reference of abbreviations used on prescriptions and MAR charts in UK care homes.",
    icon: "📖",
  },
  {
    href: "/medication-guidance/prn-protocols",
    title: "PRN Medication Protocols",
    description:
      "When and how to administer 'as required' medication, recording requirements, common PRN medications, and key principles for PRN use.",
    icon: "⏰",
  },
  {
    href: "/medication-guidance/storage",
    title: "Medication Storage Requirements",
    description:
      "General storage, fridge medications, and controlled drug storage requirements including temperature monitoring and good practice.",
    icon: "🌡️",
  },
  {
    href: "/medication-guidance/errors",
    title: "Medication Errors",
    description:
      "What to do when a medication error occurs, immediate steps, reporting requirements, common error types, and prevention strategies.",
    icon: "⚠️",
  },
];

export default function MedicationGuidancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Medication Guidance" }]} />

      <div className="mb-10">
        <span className="text-4xl block mb-4">💊</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Medication Guidance
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Safe medication management is one of the most critical responsibilities in 
          care homes. Errors can cause serious harm or death. This section provides 
          clear guidance on all aspects of medication administration, based on current 
          CQC standards, NICE guidelines, and the Royal Pharmaceutical Society&apos;s 
          standards.
        </p>
      </div>

      {/* Key Framework */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-foreground mb-2">Key Regulatory Framework</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>CQC Regulation 12</strong> — Safe Care and Treatment: providers must ensure proper medicines management
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>CQC Regulation 17</strong> — Good Governance: proper records, audits, and improvement systems
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>NICE Guideline SC1</strong> — Managing medicines in care homes (2014, last reviewed 2017)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Royal Pharmaceutical Society</strong> — The Handling of Medicines in Social Care (2018)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Misuse of Drugs Regulations 2001</strong> — Controlled drug requirements
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Health and Safety at Work etc. Act 1974</strong> — Employer duties for safe systems of work
          </li>
        </ul>
      </div>

      {/* Sub-pages */}
      <h2 className="text-xl font-bold text-foreground mb-4">In This Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subPages.map((page) => (
          <TemplateCard
            key={page.href}
            title={page.title}
            description={page.description}
            href={page.href}
            icon={page.icon}
          />
        ))}
      </div>
    </div>
  );
}