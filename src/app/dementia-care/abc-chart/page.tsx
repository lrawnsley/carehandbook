import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "ABC Behaviour Chart",
  description:
    "Interactive, printable ABC (Antecedent–Behaviour–Consequence) behaviour chart for dementia care — record, analyse, and understand distressed behaviour patterns.",
};

const abcChartFields = {
  headerFields: [
    { label: "Resident Name", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "Location / Unit", type: "text" },
    { label: "Date of Observation", type: "date" },
    { label: "Time of Observation", type: "time" },
    { label: "Completed By", type: "text" },
  ],
  sections: [
    {
      title: "A — Antecedent (What happened BEFORE the behaviour?)",
      description:
        "Record what was happening immediately before the behaviour. Include the time, setting, who was present, what was said or done, and any environmental factors.",
      fields: [
        { label: "What was the person doing just before the behaviour?", type: "textarea" },
        { label: "Who else was present?", type: "text" },
        { label: "What was the environment like? (noise, lighting, temperature)", type: "textarea" },
        { label: "Was there a trigger or change in routine?", type: "textarea" },
        { label: "Had the person been given any medication recently?", type: "text" },
        { label: "Any known recent events affecting the person? (illness, change, visitor)", type: "textarea" },
      ],
    },
    {
      title: "B — Behaviour (What EXACTLY did the person do?)",
      description:
        "Describe the behaviour in specific, observable, and measurable terms. Avoid interpretation — record what you saw and heard, not what you think the person was feeling.",
      fields: [
        { label: "Describe the behaviour in detail (what exactly did the person do or say?)", type: "textarea" },
        { label: "How intense was the behaviour?", type: "select", options: ["Mild", "Moderate", "Severe"] },
        { label: "How long did the behaviour last?", type: "text" },
        { label: "Was the person physically aggressive? (If yes, describe)", type: "textarea" },
        { label: "Was the person verbally aggressive? (If yes, describe)", type: "textarea" },
        { label: "Were there any other behaviours at the same time?", type: "textarea" },
      ],
    },
    {
      title: "C — Consequence (What happened AFTER the behaviour?)",
      description:
        "Record what happened immediately after the behaviour — how did staff respond, what was the outcome, and how did the person's state change?",
      fields: [
        { label: "How did staff respond immediately?", type: "textarea" },
        { label: "What was the person's immediate reaction to the staff response?", type: "textarea" },
        { label: "How was the behaviour resolved or did it continue?", type: "textarea" },
        { label: "Did the person calm down? If so, how long did it take?", type: "text" },
        { label: "Was any physical intervention used? (If yes, describe)", type: "textarea" },
        { label: "Were there any injuries to the person, staff, or others?", type: "text" },
      ],
    },
  ],
  reviewFields: [
    { label: "What patterns can be identified from this and previous ABC records?", type: "textarea" },
    { label: "What might the function of this behaviour be? (communication, escape, sensory, attention, tangible)", type: "textarea" },
    { label: "What proactive strategies could prevent this behaviour in future?", type: "textarea" },
    { label: "What changes to the care plan are recommended?", type: "textarea" },
    { label: "Review completed by (name and role)", type: "text" },
    { label: "Review date", type: "date" },
  ],
};

const inputClasses = "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function ABCChartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      {/* Print-only header */}
      <div className="hidden print:block mb-6">
        <div className="text-center border-b-2 border-black pb-4 mb-4">
          <h1 className="text-2xl font-bold">ABC Behaviour Chart</h1>
          <p className="text-sm">Care Handbook — Antecedent–Behaviour–Consequence Record</p>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "ABC Behaviour Chart" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            ABC Behaviour Chart
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            The ABC (Antecedent–Behaviour–Consequence) chart is a structured tool for recording
            episodes of distressed behaviour. It helps identify patterns, triggers, and the
            function of behaviour so that proactive support strategies can be developed.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Instructions */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8 no-print">
        <h2 className="font-bold text-foreground mb-2">How to Complete an ABC Chart</h2>
        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Record as soon as possible</strong> after the event — memory fades quickly.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Be specific and factual</strong> — describe what you saw and heard, not what you think the person was feeling.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Include context</strong> — the time, setting, who was present, and what was happening before the behaviour.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Record ALL episodes</strong> — the more data you have, the easier it is to spot patterns.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Review regularly</strong> — look for patterns in triggers, times, and consequences. Share findings with the care team.
          </li>
        </ul>
      </div>

      <div>
        {/* Header / Resident Details */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Resident Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {abcChartFields.headerFields.map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className={inputClasses}
                  placeholder={field.type === "text" ? "Enter text..." : undefined}
                />
              </div>
            ))}
          </div>
        </section>

        {/* A, B, C Sections */}
        {abcChartFields.sections.map((section) => (
          <section key={section.title} className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-foreground mb-2 border-b border-border pb-2">
              {section.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {section.description}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {section.fields.map((field) => (
                <div key={field.label} className={field.type === "textarea" ? "" : "md:w-1/2"}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      className={`${inputClasses} min-h-[80px] resize-y`}
                      placeholder="Write here..."
                      rows={3}
                    />
                  ) : field.type === "select" && field.options ? (
                    <>
                      {/* Screen: interactive radio pills */}
                      <div className="flex flex-wrap gap-2 print:hidden">
                        {field.options.map((option) => (
                          <label key={option} className="inline-flex items-center gap-1.5 text-xs border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light">
                            <input type="radio" name={field.label} value={option} className="accent-primary" />
                            {option}
                          </label>
                        ))}
                      </div>
                      {/* Print: clean checkbox list */}
                      <div className="hidden print:block">
                        {field.options.map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm py-0.5">
                            <span className="inline-block w-3.5 h-3.5 border border-black rounded-sm flex-shrink-0" />
                            {option}
                          </label>
                        ))}
                      </div>
                    </>
                  ) : (
                    <input
                      type={field.type}
                      className={inputClasses}
                      placeholder={field.type === "text" ? "Enter text..." : undefined}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Review & Analysis */}
        <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-2 border-b border-border pb-2">
            Review &amp; Analysis
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Complete this section after reviewing multiple ABC records. Look for patterns in
            triggers, timing, and outcomes. Consider what the behaviour might be communicating.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {abcChartFields.reviewFields.map((field) => (
              <div key={field.label} className={field.type === "textarea" ? "" : "md:w-1/2"}>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Write here..."
                    rows={3}
                  />
                ) : (
                  <input
                    type={field.type}
                    className={inputClasses}
                    placeholder={field.type === "text" ? "Enter text..." : undefined}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Context */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6 no-print">
        <h2 className="text-lg font-bold text-foreground mb-3">Why ABC Charts Matter</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          ABC charts are recommended by NICE and form part of the Positive Behavioural Support
          framework. They help care teams move from reactive to proactive approaches by identifying
          the patterns and functions behind distressed behaviour. CQC inspectors look for evidence
          that care homes understand and respond to the causes of behaviour, rather than simply
          managing the symptoms.
        </p>
        <ul className="space-y-3">
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
            <a href="https://www.alzheimers.org.uk/about-dementia/dementia-and-the-person/dealing-with-difficult-behaviour" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              Alzheimer&apos;s Society — Behaviour that Challenges ↗
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8 no-print">
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
            <p className="text-muted leading-relaxed">
              Care Handbook is a <strong>guidance resource only</strong>. This template is designed to
              support person-centred care and should be used in accordance with your
              organisation&apos;s policies. Always follow your employer&apos;s specific procedures for
              recording and storing personal information. All records must comply with GDPR and
              data protection requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}