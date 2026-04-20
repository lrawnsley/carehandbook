import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { communicationTips } from "@/data/dementia-care";

export const metadata: Metadata = {
  title: "Communication Techniques for Dementia Care",
  description:
    "Practical do's and don'ts for communicating with people living with dementia — verbal, non-verbal, and active listening approaches based on best practice and NICE guidance.",
};

export default function CommunicationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "Communication Techniques" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Communication Techniques
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Communication is one of the most important skills in dementia care. As the condition
            progresses, a person&apos;s ability to understand and express themselves changes — but
            meaningful communication is always possible with the right approach.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Why it matters */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>Why this matters:</strong> NICE NG97 recommends that care workers are trained in
          communication techniques that support people living with dementia. The CQC&apos;s &ldquo;Caring&rdquo;
          key question specifically assesses whether people are treated with compassion, kindness,
          dignity, and respect — all of which depend on effective communication. Communication
          difficulties are often the root cause of distressed behaviour, so investing in good
          communication is also a key prevention strategy.
        </p>
      </div>

      {/* General principles */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">General Communication Principles</h2>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Always assume the person can understand you</strong> — even if they cannot respond verbally, they may understand more than you think.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Be patient</strong> — allow extra time for the person to process information and formulate a response.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Enter their reality</strong> — rather than correcting factual errors, validate the emotion behind what they are saying.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Use non-verbal cues</strong> — gestures, facial expressions, and touch can convey meaning when words fail.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Reduce background noise</strong> — turn off the television, close doors, and find a quiet space for important conversations.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Be consistent</strong> — use the same words and phrases each time; avoid changing how you refer to things.
          </li>
        </ul>
      </section>

      {/* Do's and Don'ts by Category */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Communication Do&apos;s &amp; Don&apos;ts</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Below are evidence-based communication tips organised by category. These are drawn from
          NICE guidance, the Alzheimer&apos;s Society framework, and best practice in UK care homes.
        </p>

        <div className="space-y-6">
          {communicationTips.map((category) => (
            <div key={category.category} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1.5">
                    <span className="inline-block w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    Do
                  </h4>
                  <ul className="space-y-2">
                    {category.do.map((item) => (
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
                  <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1.5">
                    <span className="inline-block w-5 h-5 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">✗</span>
                    Don&apos;t
                  </h4>
                  <ul className="space-y-2">
                    {category.dont.map((item) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Non-Verbal Communication */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Non-Verbal Communication</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          As dementia progresses, non-verbal communication becomes increasingly important. Research
          suggests that up to 93% of communication is non-verbal (Mehrabian, 1971). When verbal
          language diminishes, the person relies more on tone of voice, facial expression, body
          language, and touch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { type: "Facial Expression", tip: "Maintain a warm, relaxed expression. People with dementia are highly attuned to facial expressions and can sense tension or anxiety." },
            { type: "Body Language", tip: "Adopt an open posture. Sit at the person's level rather than standing over them. Avoid crossing your arms, which can appear defensive." },
            { type: "Eye Contact", tip: "Make gentle eye contact (respecting cultural norms). This conveys attention and interest and helps the person focus on you." },
            { type: "Touch", tip: "Appropriate gentle touch — a hand on the arm or shoulder — can communicate reassurance and warmth. Always be guided by the person's preferences and cultural background." },
            { type: "Tone of Voice", tip: "Use a calm, warm, and respectful tone. Avoid sharp, raised, or sing-song voices. The emotion in your voice often matters more than the words you use." },
            { type: "Gestures & Pointing", tip: "Use simple gestures to support your words. Point to objects, mime actions, and use visual cues to aid understanding." },
          ].map((item) => (
            <div key={item.type} className="bg-white rounded-lg border border-border p-4">
              <h4 className="text-sm font-bold text-foreground mb-1">{item.type}</h4>
              <p className="text-xs text-muted leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Listening */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Active Listening</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Active listening means giving your full attention and genuinely trying to understand the
          meaning and emotion behind the person&apos;s words — even when those words don&apos;t make
          logical sense. It is one of the most powerful communication tools in dementia care.
        </p>
        <div className="space-y-2">
          {[
            "Give the person your full attention — stop what you are doing, face them, and make eye contact",
            "Listen for the emotion behind the words — a person saying 'I want to go home' may be expressing fear or insecurity, not a literal wish to leave",
            "Reflect back what you hear — 'It sounds like you're feeling worried' validates their experience",
            "Avoid correcting facts — if they say they need to go to work, respond to the feeling of purpose rather than arguing",
            "Be comfortable with silence — sometimes the person just needs time",
            "Watch for non-verbal cues — gestures, facial expressions, and body language can tell you more than words",
            "Summarise and check — 'So you're saying you'd like a cup of tea — is that right?'",
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 text-sm text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* Practical Tips Summary */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Quick Reference: Communication Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Approach from the front, use their preferred name, and make eye contact
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Use short, simple sentences — one idea at a time
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Allow plenty of time for responses — don&apos;t rush or finish their sentences
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Validate feelings — acknowledge emotions even if the facts don&apos;t make sense
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Use gestures, pointing, and visual cues alongside words
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            Never talk about the person as if they are not there
          </li>
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.alzheimers.org.uk/about-dementia/dementia-and-the-person/communicating" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — Communicating with People with Dementia ↗
            </a>
          </li>
          <li>
            <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              NICE NG97 — Dementia: Assessment, Management and Support ↗
            </a>
          </li>
          <li>
            <a href="https://www.skillsforcare.org.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Skills for Care — Dementia Training Standards ↗
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