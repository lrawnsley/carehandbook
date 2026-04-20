import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { distressedBehaviourStrategies } from "@/data/dementia-care";

export const metadata: Metadata = {
  title: "Distressed Behaviour & Positive Behavioural Support",
  description:
    "Understanding distressed behaviour in dementia through Positive Behavioural Support (PBS), de-escalation strategies, and using ABC charts to identify triggers and patterns.",
};

export default function DistressedBehaviourPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "Distressed Behaviour & PBS" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Distressed Behaviour &amp; Positive Behavioural Support
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Behaviour that challenges in dementia is not &ldquo;challenging behaviour&rdquo; — it is
            distressed behaviour. It is communication. Understanding what the person is trying to
            tell us is the key to providing compassionate, effective support.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key message */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground font-semibold mb-2">
          Language matters: &ldquo;Distressed behaviour&rdquo; not &ldquo;challenging behaviour&rdquo;
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The term &ldquo;challenging behaviour&rdquo; places the problem with the person and can lead to
          a culture of control and containment. &ldquo;Distressed behaviour&rdquo; recognises that the
          person is in distress and that our role is to understand and relieve that distress — not
          to manage or suppress the behaviour. CQC inspectors look for person-centred approaches
          that address the underlying causes of distress.
        </p>
      </div>

      {/* Understanding distressed behaviour */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Understanding Distressed Behaviour</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          People living with dementia may express distress through behaviours such as agitation,
          aggression, wandering, calling out, or refusing care. These behaviours are not
          intentional — they are the person&apos;s way of communicating an unmet need, a reaction to
          an environment that overwhelms them, or an expression of physical discomfort.
        </p>
        <h3 className="text-sm font-semibold text-foreground mb-2">Common causes of distressed behaviour:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Pain or physical discomfort (often unreported)",
            "Unmet needs — hunger, thirst, needing the toilet",
            "Overstimulation — noise, light, crowds",
            "Understimulation — boredom, lack of meaningful activity",
            "Fear or feeling threatened",
            "Inability to communicate needs verbally",
            "Medication side effects",
            "Infection (especially urinary tract infections)",
            "Depression or anxiety",
            "Disorientation in time, place, or person",
            "Unfamiliar environment or caregiver",
            "Past trauma or difficult memories",
          ].map((cause) => (
            <div key={cause} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-primary mt-1">•</span>
              {cause}
            </div>
          ))}
        </div>
      </section>

      {/* PBS Overview */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Positive Behavioural Support (PBS)</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Positive Behavioural Support (PBS) is the recommended framework for understanding and
          supporting distressed behaviour. It is a values-led, evidence-based approach that aims to
          improve quality of life and reduce behaviours that cause distress, by understanding their
          function and addressing the underlying causes.
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-border p-4">
            <h3 className="text-sm font-bold text-foreground mb-1">Primary Prevention</h3>
            <p className="text-sm text-muted leading-relaxed">
              Reducing the likelihood of distressed behaviour by creating the right environment and
              meeting the person&apos;s needs proactively. This includes person-centred care, meaningful
              activities, consistent routines, good communication, and addressing physical health needs.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-border p-4">
            <h3 className="text-sm font-bold text-foreground mb-1">Secondary Prevention</h3>
            <p className="text-sm text-muted leading-relaxed">
              Responding quickly and effectively when early signs of distress appear — using
              de-escalation techniques, reducing demands, changing the environment, or offering
              reassurance. The aim is to prevent escalation before the behaviour becomes established.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-border p-4">
            <h3 className="text-sm font-bold text-foreground mb-1">Reactive Strategies</h3>
            <p className="text-sm text-muted leading-relaxed">
              Safe, evidence-based responses during a crisis that focus on keeping everyone safe while
              maintaining the person&apos;s dignity. These include giving space, reducing stimulation, and
              using last-resort interventions only when necessary and proportionate.
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-primary-light/30 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Key principle:</strong> PBS emphasises that behaviour serves a function. By identifying
            the &ldquo;ABC&rdquo; — Antecedent (what happened before), Behaviour (what the person did),
            and Consequence (what happened after) — we can understand patterns and develop
            proactive strategies. <Link href="/dementia-care/abc-chart" className="text-primary hover:underline">Use our ABC chart template →</Link>
          </p>
        </div>
      </section>

      {/* De-escalation strategies */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">De-escalation Strategies</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          These strategies are organised by the type of distressed behaviour. Always rule out pain,
          infection, and physical illness first.
        </p>

        <div className="space-y-6">
          {distressedBehaviourStrategies.map((strategy) => (
            <div key={strategy.behaviour} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-3">{strategy.behaviour}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-700 mb-2">Possible Causes:</h4>
                  <ul className="space-y-1.5">
                    {strategy.possibleCauses.map((cause) => (
                      <li key={cause} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-red-400 mt-1">•</span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-700 mb-2">Recommended Approaches:</h4>
                  <ul className="space-y-1.5">
                    {strategy.approaches.map((approach) => (
                      <li key={approach} className="flex items-start gap-2 text-sm text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {approach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General de-escalation steps */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">General De-escalation Steps</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Whatever the type of distressed behaviour, these general steps apply:
        </p>
        <ol className="space-y-3">
          {[
            "Stay calm — your emotional state affects the person. Take a breath before responding.",
            "Ensure safety — remove hazards, keep others at a safe distance, and call for help if needed.",
            "Rule out pain and physical causes — could the person be in pain, hungry, thirsty, or needing the toilet?",
            "Reduce stimulation — lower noise, reduce light, move to a quieter space if possible.",
            "Use calming communication — speak softly, slowly, and reassuringly. Do not argue or contradict.",
            "Validate the emotion — 'I can see you're upset' rather than 'Calm down' or 'There's nothing to worry about.'",
            "Give the person space — do not crowd or restrain. Back away to a safe distance.",
            "Observe and record — use an ABC chart after the incident to identify patterns and triggers.",
            "Review — what happened, why, and what could be done differently next time? Update the care plan.",
          ].map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-sm text-muted">
              <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* ABC chart link */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">ABC Behaviour Chart</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          ABC charts (Antecedent–Behaviour–Consequence) are an essential tool for understanding
          patterns in distressed behaviour. By systematically recording what happens before, during,
          and after episodes of distress, you can identify triggers and develop proactive support plans.
        </p>
        <Link
          href="/dementia-care/abc-chart"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Use the interactive ABC chart template
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.alzheimers.org.uk/about-dementia/dementia-and-the-person/dealing-with-difficult-behaviour" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — Behaviour that Challenges ↗
            </a>
          </li>
          <li>
            <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE NG97 — Dementia: Assessment, Management and Support ↗
            </a>
          </li>
          <li>
            <a href="https://www.bild.org.uk/pbs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              BILD — Positive Behavioural Support ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
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
              if you are unsure. Restraint and restrictive practices must only be used as a last
              resort and must be proportionate, lawful, and in line with your organisation&apos;s policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}