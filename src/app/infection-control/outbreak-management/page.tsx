import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Outbreak Management in Care Homes",
  description:
    "How to recognise, manage, and report outbreaks in care homes — norovirus, influenza, COVID-19, and scabies. Isolation procedures, notification requirements, and outbreak management plans.",
};

const outbreakManagementSteps = [
  {
    phase: "1. Recognise & Report",
    actions: [
      "Identify potential outbreak — two or more cases of similar illness in residents or staff within 48 hours",
      "Notify your line manager and the registered manager immediately",
      "Contact the local Health Protection Team (HPT) — they will advise on testing and management",
      "Report to CQC under Regulation 18 if the outbreak results in serious injury or death",
      "Isolate affected residents as per infection type",
      "Record all cases, dates, symptoms, and actions taken in the outbreak log",
    ],
  },
  {
    phase: "2. Contain & Control",
    actions: [
      "Implement isolation precautions — cohort affected residents if single-room isolation is not possible",
      "Restrict admissions, transfers, and discharges as advised by the HPT",
      "Restrict visitor access — communicate clearly with families and follow HPT advice",
      "Increase hand hygiene compliance — monitor and support all staff",
      "Enhance environmental cleaning — increase frequency, focus on high-touch surfaces",
      "Ensure PPE is available and used correctly by all staff",
      "Separate affected and unaffected residents where possible — dedicated staff, equipment, and facilities",
    ],
  },
  {
    phase: "3. Communicate & Coordinate",
    actions: [
      "Hold daily meetings with staff — review outbreak status and actions",
      "Communicate with residents, families, and visitors — honesty and reassurance",
      "Liaise with GPs, community health services, and the HPT regularly",
      "Update the CQC via portal notification if outbreaks are prolonged or serious",
      "Ensure all documentation is contemporaneous and accurate",
      "Share learning with other local care homes if appropriate",
    ],
  },
  {
    phase: "4. Stand Down & Review",
    actions: [
      "Declare the outbreak over only when advised by the HPT (usually 48–72 hours after the last case)",
      "Conduct a post-outbreak review — what went well, what could improve",
      "Update the outbreak management plan and IPC policy based on lessons learned",
      "Ensure all affected residents have fully recovered before resuming normal activities",
      "Share the review findings with all staff",
      "Check that all outbreak-related paperwork and reports are filed",
    ],
  },
];

const commonOutbreaks = [
  {
    name: "Norovirus (Winter Vomiting Bug)",
    symptoms: "Sudden onset vomiting, diarrhoea, nausea, stomach cramps, mild fever. Can affect both residents and staff.",
    transmission: "Faecal-oral route, aerosolised vomit, contaminated surfaces. Highly contagious — as few as 18 virus particles can cause infection.",
    keyActions: [
      "Isolate affected residents in their rooms for 48 hours after last symptoms",
      "Enhanced cleaning with chlorine-based disinfectant (1,000 ppm)",
      "Suspend communal dining and activities",
      "Staff who are symptomatic must stay off work for 48 hours after symptoms resolve",
      "Do NOT use alcohol-based hand rub alone — soap and water is essential",
    ],
  },
  {
    name: "Influenza (Flu)",
    symptoms: "Fever, cough, sore throat, muscle aches, headache, fatigue. Can be severe in older adults and those with chronic conditions.",
    transmission: "Respiratory droplets, close contact, contaminated surfaces. Peak season is October to March.",
    keyActions: [
      "Offer annual flu vaccination to all residents and staff",
      "Isolate affected residents — respiratory precautions (mask, gloves, apron)",
      "Consider antiviral treatment (oseltamivir) for residents and prophylaxis for contacts",
      "Enhanced cleaning, especially of shared equipment and surfaces",
      "Restrict visitor access during the outbreak period",
    ],
  },
  {
    name: "COVID-19",
    symptoms: "Fever, persistent cough, loss of taste/smell, fatigue, shortness of breath. May present atypically in older adults.",
    transmission: "Respiratory droplets and aerosols, close contact, contaminated surfaces.",
    keyActions: [
      "Follow current UKHSA guidance for care homes (updated regularly)",
      "Isolate positive residents according to current guidance",
      "Enhanced PPE for staff — FFP2/FFP3 masks as advised",
      "Test residents and staff as per current testing guidance",
      "Ensure ventilation in communal areas",
      "Follow the most recent guidance on restrictions, testing, and management",
    ],
  },
  {
    name: "Scabies",
    symptoms: "Intense itching (worse at night), rash — typically between fingers, wrists, elbows, armpits, and groin. In care homes, may present as widespread crusted (Norwegian) scabies in immunocompromised residents.",
    transmission: "Prolonged skin-to-skin contact. Mites can survive on clothing and bedding for up to 3 days.",
    keyActions: [
      "Treat all affected residents with topical permethrin or oral ivermectin (as prescribed)",
      "Treat all close contacts (residents and staff) simultaneously — even if asymptomatic",
      "Launder all bedding, clothing, and towels at 60°C",
      "Second treatment after 7 days is usually required",
      "Notify the HPT if crusted scabies or multiple cases",
    ],
  },
];

export default function OutbreakManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Infection Prevention & Control", href: "/infection-control" },
        { label: "Outbreak Management" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Outbreak Management
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            An outbreak is defined as two or more cases of a similar illness occurring in the same
            setting within a short period of time. Effective outbreak management prevents harm to
            residents and staff, limits the spread of infection, and demonstrates compliance with
            CQC Regulation 12.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Key message */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-red-800">
          <strong>If you suspect an outbreak:</strong> Notify the registered manager immediately and
          contact your local Health Protection Team (HPT). Do not wait for laboratory confirmation —
          early reporting saves lives. The HPT number should be displayed in your care home.
        </p>
      </div>

      {/* Notification requirements */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Notification Requirements</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Care homes have a legal duty to notify CQC of certain events. Under the Health and
          Social Care Act 2008 (Regulated Activities) Regulations 2014:
        </p>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Regulation 18:</strong> Notify CQC of any event that affects the health, safety, or welfare of people who use the service — this includes outbreaks of infectious disease.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Health Protection (Notification) Regulations 2010:</strong> Registered medical practitioners must notify the proper officer of the local authority of suspected cases of specified infectious diseases.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Local Health Protection Team:</strong> Always contact your local HPT for advice and support. They can help with risk assessment, testing, and management.
          </li>
        </ul>
      </section>

      {/* Outbreak Management Steps */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Outbreak Management Plan</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Every care home must have an outbreak management plan that is reviewed and tested annually.
          Below is the framework for managing an outbreak effectively.
        </p>

        <div className="space-y-6">
          {outbreakManagementSteps.map((step) => (
            <div key={step.phase} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-3">{step.phase}</h3>
              <ol className="space-y-2">
                {step.actions.map((action, index) => (
                  <li key={action} className="flex items-start gap-2 text-sm text-muted">
                    <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </span>
                    {action}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Common outbreaks */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Common Care Home Outbreaks</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          The most common outbreaks in UK care homes are norovirus, influenza, COVID-19, and
          scabies. Below is key information on each.
        </p>

        <div className="space-y-6">
          {commonOutbreaks.map((outbreak) => (
            <div key={outbreak.name} className="bg-white rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">{outbreak.name}</h3>
              <div className="space-y-3 text-sm text-muted">
                <p><strong>Symptoms:</strong> {outbreak.symptoms}</p>
                <p><strong>Transmission:</strong> {outbreak.transmission}</p>
                <div>
                  <h4 className="font-semibold text-foreground">Key Actions:</h4>
                  <ul className="space-y-1.5 mt-2">
                    {outbreak.keyActions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-sm text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outbreak Box */}
      <section className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-foreground mb-2">Outbreak Box Checklist</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          Every care home should maintain a readily accessible outbreak box containing:
        </p>
        <ul className="space-y-1.5 text-sm text-muted">
          {[
            "Current outbreak management plan (printed copy)",
            "PPE — aprons, gloves (various sizes), Type IIR masks, eye protection",
            "Chlorine-based cleaning products (1,000 ppm and 10,000 ppm solutions)",
            "Hand hygiene products — soap, paper towels, alcohol hand rub",
            "Clinical waste bags and ties",
            "Patient dignity signage — isolation door signs",
            "Thermometers (dedicated, not shared between residents)",
            "Contact numbers — HPT, CQC, local authority, NHS 111",
            "Resident isolation logs and ABC charts",
            "Staff surveillance forms",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* External Links */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Further Reading</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.gov.uk/government/publications/infection-prevention-and-control-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              DHSC — IPC Code of Practice for Care Homes ↗
            </a>
          </li>
          <li>
            <a href="https://www.gov.uk/government/collections/acute-respiratory-infections-including-covid-19-managing-outbreaks-in-care-homes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              UKHSA — Managing Acute Respiratory Infections in Care Homes ↗
            </a>
          </li>
          <li>
            <a href="https://www.cqc.org.uk/about-us/fundamental-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              CQC Fundamental Standards ↗
            </a>
          </li>
          <li>
            <a href="https://www.hse.gov.uk/care/infection-control.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1.5 text-sm">
              HSE — Infection Control ↗
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
              policies, formal training, or current CQC standards. Outbreak management guidance changes
              frequently — always follow your local Health Protection Team&apos;s advice and check
              <a href="https://www.gov.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> gov.uk</a> and
              <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> for the most current guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}