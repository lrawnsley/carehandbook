import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Person-Centred Dementia Care",
  description:
    "Person-centred care principles for dementia — valuing the individual, seeing the whole person, and delivering care aligned with NICE NG97 and the Alzheimer's Society framework.",
};

const personCentredPrinciples = [
  {
    name: "Valuing the Person",
    description: "Every person has absolute value regardless of their cognitive abilities. Their worth is not diminished by dementia. This means treating the person with dignity, respecting their choices, and acknowledging their individuality.",
    inPractice: [
      "Greet the person by their preferred name",
      "Ask about their preferences before making decisions for them",
      "Include them in conversations — never speak about them as if they are not there",
      "Acknowledge their feelings, even if the facts are incorrect",
    ],
  },
  {
    name: "Individualised Care",
    description: "There is no one-size-fits-all approach to dementia care. Every person's experience is shaped by their life history, culture, personality, relationships, and the type and stage of their dementia.",
    inPractice: [
      "Learn and use the person's life story (use the Getting to Know Me template)",
      "Tailor activities to the person's past interests and current abilities",
      "Adapt communication styles to individual needs",
      "Create a personalised care plan that reflects the person's preferences",
    ],
  },
  {
    name: "Seeing the Whole Person",
    description: "Dementia is only one part of a person's life. They also have physical health needs, emotional needs, spiritual needs, social needs, and cultural needs that must all be addressed.",
    inPractice: [
      "Consider physical health — pain, nutrition, hydration, sleep",
      "Support social connections and relationships",
      "Respect cultural and spiritual beliefs and practices",
      "Address emotional wellbeing — loneliness, anxiety, boredom",
    ],
  },
  {
    name: "Understanding Behaviour as Communication",
    description: "Behaviour that challenges is often an expression of unmet need. Rather than labelling behaviour as 'problematic', try to understand what the person is communicating — pain, fear, boredom, frustration, or an unmet physical need.",
    inPractice: [
      "Observe and record behaviour patterns (use ABC charts)",
      "Rule out pain and physical illness first",
      "Consider the environment — is it noisy, unfamiliar, or over-stimulating?",
      "Ask 'What is this person trying to tell me?'",
    ],
  },
  {
    name: "Positive Communication & Relationships",
    description: "The quality of the relationship between the person with dementia and their carer is fundamental. Positive interactions build trust, reduce distress, and enhance wellbeing for both the person and the carer.",
    inPractice: [
      "Approach calmly and from the front",
      "Use a warm, respectful tone",
      "Allow time for responses — don't rush",
      "Use validation and empathy rather than reality orientation",
      "Share laughter and enjoyable moments",
    ],
  },
  {
    name: "Empowering & Enabling",
    description: "Focus on what the person CAN do, not what they cannot. Maximize independence and provide support that enables the person to remain as autonomous as possible for as long as possible.",
    inPractice: [
      "Offer choices, not instructions — 'Would you like tea or coffee?' rather than 'It's time for a drink'",
      "Break tasks into manageable steps",
      "Use visual cues and prompts alongside verbal instructions",
      "Celebrate small achievements and maintain the person's sense of purpose",
    ],
  },
];

export default function PersonCentredCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "Person-Centred Care" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Person-Centred Dementia Care
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Person-centred care means seeing the person first, not the dementia. It was pioneered
            by Professor Tom Kitwood and is the foundation of quality dementia care in the UK,
            underpinned by NICE NG97 and CQC Regulation 9.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Kitwood quote / NICE alignment */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground italic mb-3">
          &ldquo;The task is not to deal with a condition called dementia, but to deal with a person
          who has dementia, and to do so in such a way as to maintain the absolute value of that
          person.&rdquo;
        </p>
        <p className="text-xs text-muted">
          — Professor Tom Kitwood, pioneer of person-centred dementia care
        </p>
        <div className="mt-4 pt-4 border-t border-primary/20">
          <p className="text-sm text-foreground">
            <strong>NICE NG97 alignment:</strong> NICE Guideline NG97 (Dementia: Assessment,
            Management and Support) recommends that health and social care staff deliver care that
            is person-centred, respects the individual&apos;s preferences, and involves the person
            with dementia in decisions about their own care and support.
          </p>
        </div>
      </div>

      {/* Principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">The Principles of Person-Centred Dementia Care</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Tom Kitwood identified that the quality of dementia care depends on the interpersonal
          environment as much as the physical one. These six principles form the foundation of
          person-centred care practice in UK care homes.
        </p>

        <div className="space-y-6">
          {personCentredPrinciples.map((principle) => (
            <div key={principle.name} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">{principle.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{principle.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">In practice:</h4>
                <ul className="space-y-1.5">
                  {principle.inPractice.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Malignant Social Psychology */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Malignant Social Psychology</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Kitwood also identified patterns of interaction that actively harm people with dementia.
          Recognising and avoiding these is just as important as practising positive approaches.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Treachery — using deception to manipulate the person",
            "Disempowerment — doing things for the person that they can do themselves",
            "Infantilisation — treating the person like a child",
            "Intimidation — using fear or threat to control behaviour",
            "Labelling — reducing the person to their diagnosis or a behaviour",
            "Stigmatisation — treating the person as socially devalued",
            "Outpacing — rushing the person beyond their natural pace",
            "Invalidation — failing to acknowledge the person's feelings or reality",
            "Banishment — sending the person away or excluding them",
            "Objectification — treating the person as a task rather than a human being",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-red-500 flex-shrink-0">✗</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CQC alignment */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">CQC &amp; Legislative Framework</h2>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Regulation 9 (Person-Centred Care):</strong> Care and treatment must be appropriate, meet the person&apos;s needs, and reflect their preferences.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Regulation 10 (Dignity and Respect):</strong> People must be treated with dignity and respect at all times.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Regulation 11 (Need for Consent):</strong> Care must not be provided without the person&apos;s consent, unless the Mental Capacity Act applies.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Mental Capacity Act 2005:</strong> Always assume capacity; support people to make their own decisions; any decision made on their behalf must be in their best interests.
          </li>
        </ul>
      </section>

      {/* Link to Getting to Know Me */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Getting to Know Me Template</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          One of the most powerful tools for person-centred care is a &ldquo;Getting to Know Me&rdquo; or
          &ldquo;This Is Me&rdquo; life story document. It captures the person&apos;s history, preferences,
          routines, and communication needs so that every member of the care team can deliver
          truly individualised care.
        </p>
        <Link
          href="/dementia-care/getting-to-know-me"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View the Getting to Know Me template
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
            <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE NG97 — Dementia: Assessment, Management and Support ↗
            </a>
          </li>
          <li>
            <a href="https://www.alzheimers.org.uk/about-dementia/dementia-and-the-person/person-centred-care" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — Person-Centred Care ↗
            </a>
          </li>
          <li>
            <a href="https://www.alzheimers.org.uk/get-support/daily-living/this-is-me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — This Is Me Tool ↗
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
              if you are unsure. The information here is based on current CQC frameworks and UK
              legislation but may not reflect the very latest updates. Always verify with
              <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> for the most current guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}