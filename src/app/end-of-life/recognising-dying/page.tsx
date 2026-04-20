import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { recognisingDyingSigns, comfortMeasures } from "@/data/end-of-life";

export const metadata: Metadata = {
  title: "Recognising When Someone Is Dying",
  description:
    "Understand the physical and psychological signs that a person is approaching the end of life, comfort care measures, and what to expect in the final days and hours.",
};

export default function RecognisingDyingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "End of Life Care", href: "/end-of-life" }, { label: "Recognising When Someone Is Dying" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Recognising When Someone Is Dying
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Recognising that a person is entering the dying phase is essential
            for providing appropriate care. It enables the care team to adjust
            the focus of care from active treatment to comfort, ensure the
            right medications are available, and support the person and their
            family through this time.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Introduction */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">Understanding the Dying Process</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          Dying is a natural process, but recognising it can be difficult.
          NICE guideline NG31 advises that the dying phase should be
          identified based on a holistic assessment — not any single sign.
          The multi-professional team should agree that the person is dying,
          and this should be communicated sensitively to the person and those
          important to them.
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          The signs described below are common but not universal. Some people
          show only a few of these signs; others show many. The speed of
          decline also varies — some people die within hours, others over
          days or weeks. Support from a district nurse, hospice team, or
          palliative care specialist can help you assess and manage the
          person&apos;s care effectively.
        </p>
      </div>

      {/* Dying Signs */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Signs of Dying</h2>
        <p className="text-muted leading-relaxed">
          The following signs are commonly observed as a person approaches
          the end of life. They are grouped into physical signs and
          psychological or cognitive signs. Not every person will show all of
          these signs, and the presence of a single sign does not
          necessarily mean the person is dying.
        </p>
        {recognisingDyingSigns.map((category) => (
          <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.signs.map((item) => (
                <div key={item.sign} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <h4 className="text-base font-semibold text-foreground mb-1">{item.sign}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.explanation}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* What to Expect */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">What to Expect in the Final Hours</h2>
        <div className="prose prose-slate max-w-none space-y-4">
          <p className="text-muted leading-relaxed">
            In the final hours of life, the person will typically be
            unconscious or semi-conscious. Breathing patterns may change
            significantly — periods of no breathing (apnoea) are common.
            The person&apos;s skin may become mottled, particularly on the
            hands, feet, and knees.
          </p>
          <p className="text-muted leading-relaxed">
            It is important to reassure family members that these changes are
            normal and part of the natural dying process. Hearing is
            thought to be the last sense to diminish, so encourage families
            to continue speaking to and being with the person.
          </p>
          <p className="text-muted leading-relaxed">
            When death occurs, the person will stop breathing and their heart
            will stop. The pupils will become fixed and dilated. The person
            will not respond to touch or sound. A doctor or qualified
            professional must confirm death — follow your care home&apos;s
            policy for verification and certification.
          </p>
        </div>
      </div>

      {/* Comfort Care Measures */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-foreground">Comfort Care Measures</h2>
        <p className="text-muted leading-relaxed">
          When a person is dying, the focus of care shifts from active
          treatment to comfort and dignity. These measures help ensure the
          person is as comfortable as possible and that families feel
          supported.
        </p>
        {comfortMeasures.map((category) => (
          <section key={category.category} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-3">{category.category}</h3>
            <ul className="space-y-2">
              {category.measures.map((measure) => (
                <li key={measure} className="flex items-start gap-2 text-sm text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {measure}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* External Links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Official Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.nice.org.uk/guidance/ng31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NICE NG31 — Care of Dying Adults in the Last Days of Life ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/conditions/end-of-life-care/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS — End of Life Care ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.dyingmatters.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Dying Matters — Talk, Plan, Live ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.mariecurie.org.uk/help/support/terminal-illness/signs-dying"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Marie Curie — Signs That Someone Is Dying ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulations-service-providers-managers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              CQC — Regulations for Service Providers ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The guidance on recognising dying on Care Handbook is for
          informational purposes only and does not constitute medical or
          nursing advice. Recognising the dying phase should be carried out by
          the multi-professional care team following NICE guideline NG31.
          Always consult the resident&apos;s GP, district nurse, or
          palliative care team for clinical assessment and management. Every
          person&apos;s experience of dying is unique.
        </p>
      </div>
    </div>
  );
}