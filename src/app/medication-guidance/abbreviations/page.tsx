import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { medAbbreviations } from "@/data/medication";

export const metadata: Metadata = {
  title: "Common Medication Abbreviations",
  description:
    "A comprehensive reference of medication abbreviations used in UK care homes — OD, BD, TDS, QDS, PRN, AC, PC and more on prescriptions and MAR charts.",
};

export default function AbbreviationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "Common Medication Abbreviations" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Common Medication Abbreviations
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A reference guide to the Latin and English abbreviations commonly used on 
            prescriptions, MAR charts, and in medication documentation in UK care homes.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Safety note:</strong> Many abbreviations come from Latin. If you are ever unsure about an 
          abbreviation on a prescription or MAR chart, <strong>never guess</strong> — always check with the 
          pharmacist, prescriber, or your organisation&apos;s medication policy. Mistaking one abbreviation 
          for another (e.g. OD for QDS) could lead to a serious medication error.
        </p>
      </div>

      {/* Frequency Abbreviations */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Dose Frequency Abbreviations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Abbreviation</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {medAbbreviations.filter(a => ["OD", "BD (b.d.)", "TDS (t.d.s.)", "QDS (q.d.s.)", "STAT", "PRN", "OM", "ON", "Mane", "Nocte"].includes(a.abbreviation)).map((item) => (
                <tr key={item.abbreviation}>
                  <td className="border border-border px-4 py-2 font-mono font-bold text-primary">{item.abbreviation}</td>
                  <td className="border border-border px-4 py-2 text-muted">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Route Abbreviations */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Route & Timing Abbreviations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Abbreviation</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {medAbbreviations.filter(a => !["OD", "BD (b.d.)", "TDS (t.d.s.)", "QDS (q.d.s.)", "STAT", "PRN", "OM", "ON", "Mane", "Nocte", "5mL"].includes(a.abbreviation)).map((item) => (
                <tr key={item.abbreviation}>
                  <td className="border border-border px-4 py-2 font-mono font-bold text-primary">{item.abbreviation}</td>
                  <td className="border border-border px-4 py-2 text-muted">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Form Abbreviations */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Form & Preparation Abbreviations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-light/30">
                <th className="border border-border px-4 py-2 text-left font-semibold">Abbreviation</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                { abbr: "e/c", meaning: "Enteric Coated — must not be crushed" },
                { abbr: "m/r", meaning: "Modified Release — must not be crushed or chewed" },
                { abbr: "cap", meaning: "Capsule" },
                { abbr: "tab", meaning: "Tablet" },
                { abbr: "liq", meaning: "Liquid / Solution" },
                { abbr: "susp", meaning: "Suspension — must be shaken before use" },
                { abbr: "pess", meaning: "Pessary" },
                { abbr: "supp", meaning: "Suppository" },
                { abbr: "patch", meaning: "Transdermal Patch" },
                { abbr: "inj", meaning: "Injection" },
                { abbr: "inh", meaning: "Inhaler" },
                { abbr: "neb", meaning: "Nebuliser" },
                { abbr: "eff", meaning: "Effervescent — must be dissolved in water" },
                { abbr: "disp", meaning: "Dispersible — can be dissolved in water" },
                { abbr: "s/c", meaning: "Sublingual — under the tongue" },
              ].map((item) => (
                <tr key={item.abbr}>
                  <td className="border border-border px-4 py-2 font-mono font-bold text-primary">{item.abbr}</td>
                  <td className="border border-border px-4 py-2 text-muted">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-foreground mb-2 text-sm">Avoid Dangerous Abbreviations</h3>
        <p className="text-sm text-muted leading-relaxed">
          The following abbreviations should <strong>never</strong> be used in medication documentation 
          as they are frequently misinterpreted and have caused serious errors:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          <li><strong>U</strong> — write &ldquo;units&rdquo; in full (confused with 0 or 4)</li>
          <li><strong>QD</strong> — write &ldquo;OD&rdquo; or &ldquo;once daily&rdquo; (QD confused with QID/four times daily)</li>
          <li><strong>QOD</strong> — write &ldquo;every other day&rdquo; in full</li>
          <li><strong>µg</strong> — write &ldquo;micrograms&rdquo; in full (µg confused with mg)</li>
          <li><strong>NG tube</strong> — write &ldquo;nasogastric tube&rdquo; (confused with &ldquo;no grade&rdquo;)</li>
          <li><strong>HS</strong> — write &ldquo;at bedtime&rdquo; (HS confused with half-strength)</li>
        </ul>
      </div>
    </div>
  );
}