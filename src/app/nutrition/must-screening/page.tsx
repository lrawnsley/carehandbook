import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { mustScoreSteps, mustRiskCategories } from "@/data/nutrition";

export const metadata: Metadata = {
  title: "MUST Screening",
  description:
    "Step-by-step guide to the Malnutrition Universal Screening Tool (MUST) — calculate BMI, assess weight loss, determine risk category, and take appropriate action for care home residents.",
};

const inputClasses =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function MUSTScreeningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Nutrition & Hydration", href: "/nutrition" },
          { label: "MUST Screening" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            MUST Screening Guide
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The Malnutrition Universal Screening Tool (MUST) is a five-step screening tool
            recommended by BAPEN for identifying adults who are at risk of malnutrition or who are
            already malnourished. Complete all three scoring steps then calculate the total to
            determine the management plan.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* MUST scoring steps */}
      <div className="space-y-6 mb-8">
        {mustScoreSteps.map((step) => (
          <section
            key={step.step}
            className="bg-surface rounded-xl border border-border p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{step.name}</h2>
                <p className="text-sm text-muted leading-relaxed mt-1">{step.description}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {step.scoring.map((scoreItem) => (
                <div
                  key={scoreItem.score}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {scoreItem.score}
                    </span>
                    <span className="text-xs text-muted uppercase tracking-wider">Score</span>
                  </div>
                  <p className="text-sm text-foreground">{scoreItem.criteria}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Score calculator form */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">MUST Score Calculator</h2>
        <p className="text-sm text-muted mb-6">
          Enter each step score below to calculate the total MUST score and identify the
          appropriate risk category and management plan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Step 1 — BMI Score
            </label>
            <select className={inputClasses} defaultValue="">
              <option value="">Select score…</option>
              <option value="0">0 — BMI &gt; 20.0</option>
              <option value="1">1 — BMI 18.5–20.0</option>
              <option value="2">2 — BMI &lt; 18.5</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Step 2 — Weight Loss Score
            </label>
            <select className={inputClasses} defaultValue="">
              <option value="">Select score…</option>
              <option value="0">0 — Weight loss &lt; 5%</option>
              <option value="1">1 — Weight loss 5–10%</option>
              <option value="2">2 — Weight loss &gt; 10%</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Step 3 — Acute Disease Score
            </label>
            <select className={inputClasses} defaultValue="">
              <option value="">Select score…</option>
              <option value="0">0 — No acute disease effect</option>
              <option value="2">2 — No intake 5+ days</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Resident Name
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Enter resident name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Date of Assessment
            </label>
            <input type="date" className={inputClasses} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Current Weight (kg)
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Enter weight in kg..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Height (m)
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Enter height in metres..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Calculated BMI
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Auto-calculated or enter manually..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Total MUST Score
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Sum of Step 1 + Step 2 + Step 3"
            />
          </div>
        </div>
      </section>

      {/* Risk categories */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Risk Categories & Management Plans</h2>
        <div className="space-y-6">
          {mustRiskCategories.map((cat) => {
            const bgClass =
              cat.risk === "Low Risk"
                ? "bg-green-50 border-green-200"
                : cat.risk === "Medium Risk"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-red-50 border-red-200";
            const textClass =
              cat.risk === "Low Risk"
                ? "text-green-700"
                : cat.risk === "Medium Risk"
                  ? "text-amber-700"
                  : "text-red-700";

            return (
              <div
                key={cat.totalScore}
                className={`rounded-xl border p-6 sm:p-8 ${bgClass}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-lg font-bold px-3 py-1 rounded-md ${cat.risk === "Low Risk" ? "bg-green-200 text-green-800" : cat.risk === "Medium Risk" ? "bg-amber-200 text-amber-800" : "bg-red-200 text-red-800"}`}
                  >
                    Score {cat.totalScore}
                  </span>
                  <h3 className={`text-xl font-bold ${textClass}`}>{cat.risk}</h3>
                </div>
                <ul className="space-y-2 mt-4">
                  {cat.management.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional guidance */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Principles</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Screen all residents on admission and at least monthly thereafter — or more frequently
            if clinically indicated.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            If you cannot obtain a BMI (e.g., resident unable to be weighed), use mid-upper arm
            circumference (MUAC) as an alternative, or use clinical judgement to assign a score.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Always document the MUST score, risk category, and management plan in the
            resident&apos;s care plan.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Refer to a dietitian for high-risk residents (score of 2+) within 24–48 hours.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            MUST is a screening tool, not a diagnostic tool. A low score does not rule out
            malnutrition if clinical judgement suggests concern.
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
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
              href="https://www.nhs.uk/conditions/malnutrition/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — Malnutrition ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> The MUST guidance provided by Care Handbook is for
          reference only and does not replace professional clinical judgement. Always follow your
          organisation&apos;s policies and consult a registered dietitian or GP when making clinical
          decisions about nutritional care. BAPEN&apos;s MUST tool should be used in accordance with
          the official guidelines available at bapen.org.uk.
        </p>
      </div>
    </div>
  );
}