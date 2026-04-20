import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { weightMonitoringActions } from "@/data/nutrition";

export const metadata: Metadata = {
  title: "Weight Monitoring",
  description:
    "Weight monitoring guidance for UK care homes — when and how to weigh residents, when to refer to a dietitian, and how to respond to significant weight changes.",
};

export default function WeightMonitoringPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Nutrition & Hydration", href: "/nutrition" },
          { label: "Weight Monitoring" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Weight Monitoring
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Accurate weight monitoring is essential for identifying malnutrition risk early.
            Regular weighing allows care staff to detect significant weight changes, trigger
            appropriate interventions, and provide evidence for dietitian referrals. This guidance
            covers when and how to weigh residents, what constitutes a significant change, and
            when to escalate concerns.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* CQC requirement */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>CQC Requirement:</strong> Under Regulation 14 of the Health and Social Care Act
          2008, providers must ensure service users receive adequate nutrition and hydration. CQC
          inspectors will review weight records and MUST screening as evidence of effective
          nutritional care. Records should demonstrate that weight changes are identified promptly
          and appropriate action is taken.
        </p>
      </div>

      {/* Weight monitoring actions by category */}
      <div className="space-y-6 mb-8">
        {weightMonitoringActions.map((action, index) => (
          <section
            key={action.category}
            className="bg-surface rounded-xl border border-border p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{action.category}</h2>
                <p className="text-sm text-muted mt-1">
                  <strong>When:</strong> {action.trigger}
                </p>
              </div>
            </div>

            <div className="pl-14">
              <h3 className="text-sm font-semibold text-foreground mb-2">Actions Required:</h3>
              <ul className="space-y-2">
                {action.actions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Key principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Principles of Weight Monitoring</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">1.</span>
            Weigh residents using calibrated scales — record the scale type and serial number on
            the weight chart.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">2.</span>
            Ensure consistency: weigh at the same time of day, with similar clothing, and using
            the same scales each time.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">3.</span>
            Significant weight loss is defined as: &gt;5% in 3 months or &gt;10% in 6 months.
            This triggers an urgent dietitian referral.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">4.</span>
            Always note if weight was measured or estimated — estimated weights are less reliable
            and should be verified as soon as possible.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Consider factors that may affect weight: oedema, dehydration, recent surgery, or
            changes in medication.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">6.</span>
            Weight monitoring is a team responsibility — all care staff should be trained in
            correct weighing technique and documentation.
          </li>
        </ul>
      </section>

      {/* Weight change thresholds */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Weight Change Thresholds</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse print-table">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground">
                  Time Period
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground">
                  Weight Loss
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground">
                  Risk Level
                </th>
                <th className="border border-gray-300 px-4 py-2.5 text-left font-semibold text-foreground">
                  Action Required
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2.5">1 week</td>
                <td className="border border-gray-300 px-4 py-2.5">&gt;1–2%</td>
                <td className="border border-gray-300 px-4 py-2.5 text-amber-700 font-medium">Monitor closely</td>
                <td className="border border-gray-300 px-4 py-2.5">Re-weigh in 1 week; increase food monitoring</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border border-gray-300 px-4 py-2.5">1 month</td>
                <td className="border border-gray-300 px-4 py-2.5">&gt;2–3%</td>
                <td className="border border-gray-300 px-4 py-2.5 text-amber-700 font-medium">Moderate concern</td>
                <td className="border border-gray-300 px-4 py-2.5">Complete MUST reassessment; consider dietitian referral</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2.5">3 months</td>
                <td className="border border-gray-300 px-4 py-2.5">&gt;5%</td>
                <td className="border border-gray-300 px-4 py-2.5 text-red-700 font-bold">High risk</td>
                <td className="border border-gray-300 px-4 py-2.5">Urgent dietitian referral; implement high-risk care plan</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="border border-gray-300 px-4 py-2.5">6 months</td>
                <td className="border border-gray-300 px-4 py-2.5">&gt;10%</td>
                <td className="border border-gray-300 px-4 py-2.5 text-red-700 font-bold">High risk</td>
                <td className="border border-gray-300 px-4 py-2.5">Urgent dietitian referral; inform GP; medical investigations</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-3">
          Based on BAPEN MUST guidelines. Weight loss percentages are cumulative and should be
          calculated from the baseline weight recorded at admission.
        </p>
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
              BAPEN — MUST and Malnutrition Screening ↗
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
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Care Quality Commission ↗
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
          <strong>Important Notice:</strong> The weight monitoring guidance provided by Care
          Handbook is for reference only and does not replace professional clinical judgement.
          Always follow your organisation&apos;s policies and consult a registered dietitian or GP
          when making clinical decisions about nutritional care. Significant weight changes should
          be reported to the GP and dietitian without delay.
        </p>
      </div>
    </div>
  );
}