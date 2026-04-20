import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fiveMomentsOfHandHygiene, handWashingTechnique } from "@/data/infection-control";

export const metadata: Metadata = {
  title: "Hand Hygiene in Care Homes",
  description:
    "The WHO 5 Moments of Hand Hygiene, correct handwashing technique, and when to use alcohol hand rub — the single most effective way to prevent infection in care homes.",
};

export default function HandHygienePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Infection Prevention & Control", href: "/infection-control" },
        { label: "Hand Hygiene" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Hand Hygiene
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Hand hygiene is the single most effective measure to prevent the spread of infections
            in health and social care settings (WHO). Get it right and you protect your residents,
            your colleagues, and yourself.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key message */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>The evidence is clear:</strong> The World Health Organization (WHO) and the
          Department of Health &amp; Social Care both identify hand hygiene as the most important
          measure in preventing healthcare-associated infections. CQC inspectors observe hand
          hygiene compliance as part of the &ldquo;Safe&rdquo; key question assessment.
        </p>
      </div>

      {/* The 5 Moments */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">The WHO 5 Moments of Hand Hygiene</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          The World Health Organization defines five critical moments when hand hygiene must be
          performed in health and social care settings. These apply to every care interaction
          in a care home.
        </p>

        <div className="space-y-6">
          {fiveMomentsOfHandHygiene.map((moment) => (
            <div key={moment.moment} className="bg-white rounded-lg border border-border p-5">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {moment.moment}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{moment.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-1">{moment.description}</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-sm text-muted">
                  <strong>Why:</strong> {moment.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Handwashing Technique */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Handwashing Technique</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          When hands are visibly soiled or after using the toilet, hands must be washed with soap
          and water. The WHO recommends the following technique, which should take
          approximately 40–60 seconds from wet hands to dry hands.
        </p>

        <div className="space-y-3">
          {handWashingTechnique.map((step) => (
            <div key={step.step} className="flex items-start gap-3 bg-white rounded-lg border border-border p-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.step}
              </span>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">{step.action}</p>
                {step.duration !== "—" && (
                  <p className="text-xs text-muted mt-0.5">{step.duration}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alcohol Hand Rub */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Alcohol-Based Hand Rub</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Alcohol-based hand rub (ABHR) is the preferred method for routine hand decontamination
          when hands are not visibly soiled. It is faster, more effective, and better tolerated
          by skin than soap and water.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-green-700 mb-2">When to Use ABHR</h3>
            <ul className="space-y-1.5">
              {[
                "Before touching a resident (Moment 1)",
                "Before a clean/aseptic procedure (Moment 2)",
                "After touching a resident (Moment 4)",
                "After touching resident surroundings (Moment 5)",
                "When hands are NOT visibly soiled",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-700 mb-2">When NOT to Use ABHR</h3>
            <ul className="space-y-1.5">
              {[
                "When hands are visibly soiled",
                "After using the toilet (use soap and water)",
                "After body fluid exposure (Moment 3 — use soap and water)",
                "When caring for a resident with Clostridioides difficile (spores are alcohol-resistant)",
                "When caring for a resident with norovirus (use soap and water)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bare Below the Elbows */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Bare Below the Elbows</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The &ldquo;bare below the elbows&rdquo; (BBE) policy requires clinical staff to have
          bare forearms when delivering direct care. This ensures effective hand hygiene and
          reduces the risk of contamination from clothing, watches, and jewellery.
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Short sleeves — no long sleeves when delivering care
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            No wristwatches or jewellery (a plain wedding band is usually acceptable)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            No nail polish or artificial nails — these harbour bacteria
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Nails should be kept short and clean
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.who.int/teams/integrated-health-services/infection-prevention-control/5-moments-for-hand-hygiene" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              WHO — 5 Moments for Hand Hygiene ↗
            </a>
          </li>
          <li>
            <a href="https://www.gov.uk/government/publications/infection-prevention-and-control-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              DHSC — IPC Code of Practice ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/care/infection-control.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Infection Control in Care Homes ↗
            </a>
          </li>
          <li>
            <a href="https://www.nhs.uk/live-well/healthy-body/best-way-to-wash-your-hands/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NHS — How to Wash Your Hands ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s
              policies, formal training, or current CQC standards. Always follow your employer&apos;s
              specific procedures and consult your line manager or the relevant professional body
              if you are unsure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}