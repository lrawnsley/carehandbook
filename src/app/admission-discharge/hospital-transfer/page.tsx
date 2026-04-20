import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { hospitalTransferFields } from "@/data/admission";

export const metadata: Metadata = {
  title: "Hospital Transfer Form",
  description:
    "SBAR-format hospital transfer form for UK care homes — ensure all essential clinical and personal information accompanies a resident when transferring to hospital. Interactive and printable.",
};

const inputClasses =
  "w-full border-2 border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50/50 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors print:border-solid print:border-black print:bg-white print:rounded-none";

export default function HospitalTransferPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs
        items={[
          { label: "Admission & Discharge", href: "/admission-discharge" },
          { label: "Hospital Transfer" },
        ]}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Hospital Transfer Form
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Use this form when a resident needs to be transferred to hospital. It uses the SBAR
            (Situation, Background, Assessment, Recommendation) format recommended by NHS England
            and the Royal College of Physicians to ensure clear, structured handover of clinical
            information. Complete this form before the resident leaves the care home and send it
            with them.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* SBAR explanation */}
      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>What is SBAR?</strong> SBAR stands for <strong>S</strong>ituation, <strong>B</strong>ackground, <strong>A</strong>ssessment, <strong>R</strong>ecommendation. It is a structured communication
          method widely used in healthcare to ensure that critical information is communicated
          clearly and completely. The SBAR format helps hospital staff understand the reason for
          transfer, the resident&apos;s baseline, current observations, and what the care home is
          requesting. This form includes a dedicated SBAR section in the Clinical Information area.
        </p>
      </div>

      {/* Urgent notice */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-red-800">
          <strong>Urgent Transfer:</strong> If the resident requires emergency transfer (e.g.,
          suspected stroke, severe breathing difficulty, chest pain, or reduced consciousness),
          call 999 immediately. Complete as much of this form as possible before the ambulance
          arrives and hand it to the paramedic team. Even partial information is better than none.
        </p>
      </div>

      {/* Form sections */}
      {hospitalTransferFields.map((section) => (
        <section
          key={section.category}
          className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </section>
      ))}

      {/* Handover signature */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Handover Confirmation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Name of Staff Member Completing Form
            </label>
            <input type="text" className={inputClasses} placeholder="Enter your name..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Role / Job Title
            </label>
            <input type="text" className={inputClasses} placeholder="Enter your role..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Date and Time of Completion
            </label>
            <input type="text" className={inputClasses} placeholder="DD/MM/YYYY HH:MM..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Hospital Staff Member Received By
            </label>
            <input type="text" className={inputClasses} placeholder="Enter name of receiver..." />
          </div>
        </div>
      </section>

      {/* SBAR tips */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">SBAR Communication Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">S — Situation:</span>
            Briefly explain what is happening now. What is the problem? Why is the resident being
            transferred?
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">B — Background:</span>
            Provide relevant medical history, current diagnoses, medications, and baseline care
            information that hospital staff need to know.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">A — Assessment:</span>
            Share your clinical findings — observations, changes in condition, and your professional
            opinion of the situation.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">R — Recommendation:</span>
            State clearly what you are asking for — admission, assessment, investigation, or
            treatment. Be specific.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">5.</span>
            Ensure all medications are sent with the resident, including controlled drugs with
            appropriate documentation and signatures.
          </li>
          <li className="flex items-start gap-2 text-sm text-muted">
            <span className="text-primary font-bold">6.</span>
            Include a copy of the resident&apos;s care plan and any advance care planning documents
            (DNACPR, ReSPECT, advance decisions).
          </li>
        </ul>
      </section>

      {/* External links */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Authoritative Resources</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.nhs.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              NHS England — Hospital Transfer Guidance ↗
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
              href="https://www.scie.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              SCIE — Social Care Institute for Excellence ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.skillsforcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm"
            >
              Skills for Care — Workforce Development ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Important Notice:</strong> This hospital transfer form provided by Care Handbook
          is a template for guidance only. It does not replace your organisation&apos;s approved
          transfer documentation or local NHS trust requirements. Always follow your employer&apos;s
          policies and ensure all relevant information is provided when transferring a resident to
          hospital. In an emergency, call 999 and provide as much information as possible to the
          ambulance crew.
        </p>
      </div>
    </div>
  );
}