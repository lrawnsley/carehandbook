import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { iddsiLevels, textureModificationGuide } from "@/data/nutrition";

export const metadata: Metadata = {
  title: "Texture-Modified Diets (IDDSI)",
  description:
    "IDDSI framework for texture-modified diets in care homes — understand each level from thin fluids to regular food, thickener guidance, and preparation instructions for dysphagia management.",
};

export default function TextureModifiedDietsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Nutrition & Hydration", href: "/nutrition" },
          { label: "Texture-Modified Diets" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Texture-Modified Diets — IDDSI Framework
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The International Dysphagia Diet Standardisation Initiative (IDDSI) provides a
            globally-recognised framework for describing food and drink textures for people with
            dysphagia. Understanding and correctly implementing IDDSI levels is essential for
            resident safety and is a key component of nutritional care in care homes.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* IDDSI info */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>IDDSI Framework:</strong> The IDDSI framework consists of 8 levels (0–7)
          measured by simple, objective tests. Levels 0–4 describe drinks and fluids, while
          Levels 4–7 describe food textures. Level 4 spans both categories because extremely thick
          fluids and pureed foods share similar textural properties. All texture modifications
          must be prescribed by a Speech and Language Therapist (SLT) or dietitian — never alter
          a resident&apos;s diet texture without professional guidance.
        </p>
      </div>

      {/* IDDSI levels - Drinks (0-4) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Drinks &amp; Fluids — IDDSI Levels 0–4
        </h2>
        <div className="space-y-4">
          {iddsiLevels.filter((l) => l.level <= 4).map((level) => (
            <div
              key={level.level}
              className="bg-surface rounded-xl border border-border p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-lg">
                  {level.level}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{level.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-1">{level.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {level.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IDDSI levels - Food (5-7) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Food Textures — IDDSI Levels 5–7
        </h2>
        <div className="space-y-4">
          {iddsiLevels.filter((l) => l.level >= 5).map((level) => (
            <div
              key={level.level}
              className="bg-surface rounded-xl border border-border p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-bold text-lg">
                  {level.level}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{level.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-1">{level.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {level.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Texture modification guide */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Texture Modification &amp; Thickener Guide
        </h2>
        <p className="text-sm text-muted mb-6">
          Practical guidance on preparing food and fluids at each IDDSI level, including
          thickener usage. Always follow the manufacturer&apos;s instructions for any thickening
          product and ensure consistency matches the prescribed level.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse print-table">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground w-[180px]">
                  IDDSI Level
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground w-[140px]">
                  Food Type
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground">
                  Preparation
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground w-[200px]">
                  Thickener Guidance
                </th>
              </tr>
            </thead>
            <tbody>
              {textureModificationGuide.map((row) => (
                <tr key={row.level}>
                  <td className="border border-gray-300 px-4 py-2.5 font-medium text-foreground">
                    {row.level}
                  </td>
                  <td className="border border-gray-300 px-4 py-2.5">{row.foodType}</td>
                  <td className="border border-gray-300 px-4 py-2.5">{row.preparation}</td>
                  <td className="border border-gray-300 px-4 py-2.5">{row.thickenerGuidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety and compliance */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Safety &amp; Compliance Requirements
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Texture modifications must be prescribed by a Speech and Language Therapist (SLT) or
            dietitian — never change a resident&apos;s diet texture without a prescription.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            Always check the IDDSI level on the care plan before serving food or drinks.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Use IDDSI flow tests (syringe test, fork drip test, fork pressure test) to verify
            the correct consistency before serving.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Thickened drinks can change consistency over time — serve promptly and re-mix if
            they have been standing.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Never serve thin fluids (Level 0) to a resident prescribed a thickened diet — this
            is a choking risk.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">6.</span>
            Document any texture modification on the care plan and ensure all staff are aware of
            the resident&apos;s prescribed level.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">7.</span>
            CQC inspectors will look for evidence that texture modifications are correctly
            implemented and that staff understand IDDSI levels.
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://iddsi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              IDDSI — International Dysphagia Diet Standardisation Initiative ↗
            </a>
          </li>
          <li>
            <a
              href="https://iddsi.org/Framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              IDDSI Framework — Complete Levels and Testing Methods ↗
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
              href="https://www.rcslt.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              RCSLT — Royal College of Speech and Language Therapists ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.bapen.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              BAPEN — British Association for Parenteral and Enteral Nutrition ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> The IDDSI guidance provided by Care Handbook is for
          reference only and does not replace professional assessment. Texture modifications must
          only be made on the advice of a Speech and Language Therapist (SLT) or dietitian.
          Incorrect texture modification can pose a serious choking risk. Always follow your
          organisation&apos;s policies, the resident&apos;s care plan, and the IDDSI framework
          available at iddsi.org.
        </p>
      </div>
    </div>
  );
}