import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { foodFluidChartFields, foodFluidChartTimes } from "@/data/nutrition";

export const metadata: Metadata = {
  title: "Food & Fluid Chart",
  description:
    "Interactive food and fluid intake record for care home residents. Monitor dietary intake, track hydration, and document nutritional support with this printable chart.",
};

const inputClasses =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function FoodFluidChartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Nutrition & Hydration", href: "/nutrition" },
          { label: "Food & Fluid Chart" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Food & Fluid Intake Record
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Use this chart to record a resident&apos;s food and fluid intake throughout the day.
            Accurate intake records are essential for monitoring nutritional status, identifying
            concerns, and providing evidence for dietitian referrals. Complete for residents at
            medium or high MUST risk, or for any resident where intake is a concern.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Info box */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>CQC Requirement:</strong> Under Regulation 14 of the Health and Social Care Act
          2008 (Regulated Activities) Regulations 2014, providers must ensure that service users
          receive adequate nutrition and hydration. CQC inspectors will review food and fluid
          records as part of the &ldquo;Effective&rdquo; key question assessment. Records should
          be completed in real time — not from memory at the end of a shift.
        </p>
      </div>

      {/* Resident info form */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Resident Information</h2>
        {foodFluidChartFields.map((section) => (
          <div key={section.category} className="mb-6 last:mb-0">
            <h3 className="text-base font-semibold text-foreground mb-3">{section.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      className={`${inputClasses} min-h-[80px] resize-y`}
                      placeholder="Write here..."
                      rows={3}
                    />
                  ) : field.type === "date" ? (
                    <input type="date" className={inputClasses} />
                  ) : (
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Enter text..."
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Intake chart */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-2">Daily Intake Chart</h2>
        <p className="text-sm text-muted mb-6">
          Record all food and fluid offered and consumed. Use the intake column to record
          approximate percentage consumed (e.g., 25%, 50%, 75%, 100%, or all/none/half).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse print-table">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold text-foreground w-[160px]">
                  Time / Meal
                </th>
                <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold text-foreground">
                  Food Description
                </th>
                <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold text-foreground w-[100px]">
                  Intake %
                </th>
                <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold text-foreground">
                  Fluid Description
                </th>
                <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold text-foreground w-[100px]">
                  Volume (ml)
                </th>
              </tr>
            </thead>
            <tbody>
              {foodFluidChartTimes.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="border border-gray-300 px-3 py-2">
                    <span className="font-medium text-foreground text-xs">{row.time}</span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="text"
                      className={`${inputClasses} border-none bg-transparent p-0 shadow-none hover:border-none focus:border-none focus:bg-white focus:ring-0`}
                      placeholder="Describe food offered..."
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="text"
                      className={`${inputClasses} border-none bg-transparent p-0 shadow-none hover:border-none focus:border-none focus:bg-white focus:ring-0 text-center`}
                      placeholder="%"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="text"
                      className={`${inputClasses} border-none bg-transparent p-0 shadow-none hover:border-none focus:border-none focus:bg-white focus:ring-0`}
                      placeholder="Describe fluids offered..."
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="text"
                      className={`${inputClasses} border-none bg-transparent p-0 shadow-none hover:border-none focus:border-none focus:bg-white focus:ring-0 text-center`}
                      placeholder="ml"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals row */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Estimated Total Fluid Intake (ml)
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Enter total ml..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Overall Food Intake Estimate (%)
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Enter overall percentage..."
            />
          </div>
        </div>
      </section>

      {/* Additional notes */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Additional Notes</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Concerns or Observations
            </label>
            <textarea
              className={`${inputClasses} min-h-[100px] resize-y`}
              placeholder="Note any concerns about the resident's intake, refusal of meals, difficulty swallowing, nausea, etc."
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Actions Taken
            </label>
            <textarea
              className={`${inputClasses} min-h-[80px] resize-y`}
              placeholder="Note any actions taken in response to concerns..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Recorded By (Staff Name)
              </label>
              <input
                type="text"
                className={inputClasses}
                placeholder="Enter your name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Signature & Date
              </label>
              <input
                type="text"
                className={inputClasses}
                placeholder="Sign and date..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Recording Guidance</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Record intake as soon as possible after each meal — do not rely on memory at the end
            of a shift.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            Be specific — record actual foods and drinks, not just &ldquo;ate lunch&rdquo; or
            &ldquo;drank tea&rdquo;.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Record the volume of all fluids in millilitres where possible. A typical cup of tea is
            approximately 200ml.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            If a resident refuses a meal, record this and the reason if known.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Target fluid intake for most adults is 1,500–2,000ml per day, or 30ml per kg body
            weight.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">6.</span>
            If a resident&apos;s intake is consistently below 50% of meals, consider a dietitian
            referral and review the MUST score.
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
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
              href="https://www.nhs.uk/conditions/dehydration/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — Dehydration ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> This food and fluid chart provided by Care Handbook
          is a template for recording purposes only. It does not replace professional clinical
          assessment or dietitian advice. Always follow your organisation&apos;s policies and
          procedures for nutritional monitoring and reporting. If you are concerned about a
          resident&apos;s intake, escalate to your line manager and seek dietitian or GP input
          promptly.
        </p>
      </div>
    </div>
  );
}