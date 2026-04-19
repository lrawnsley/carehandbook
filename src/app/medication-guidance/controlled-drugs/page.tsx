import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { controlledDrugSchedules } from "@/data/medication";

export const metadata: Metadata = {
  title: "Controlled Drugs Procedures",
  description:
    "Controlled drugs procedures in UK care homes — storage, administration, recording, stock checking, and destruction requirements under the Misuse of Drugs Regulations 2001.",
};

export default function ControlledDrugsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Medication Guidance", href: "/medication-guidance" },
        { label: "Controlled Drugs Procedures" },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Controlled Drugs Procedures
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Controlled drugs (CDs) are medicines regulated under the Misuse of Drugs 
            Regulations 2001 due to their potential for misuse and dependence. Care homes 
            must have robust procedures for their management.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Legal Framework */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Legal Framework</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The control of CDs in care homes is governed by:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Misuse of Drugs Act 1971</strong> — classifies drugs into Classes A, B, and C based on harm potential
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Misuse of Drugs Regulations 2001</strong> — schedules drugs (Schedules 1–5) based on medicinal use and misuse potential
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Misuse of Drugs (Safe Custody) Regulations 1973</strong> — specifies storage requirements for CDs
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <strong>Controlled Drugs (Supervision of Management and Use) Act 2006</strong> — following the Shipman Inquiry, introduced accountable officers
          </li>
        </ul>
      </section>

      {/* Schedules */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">CD Schedules</h2>
        <p className="text-sm text-muted mb-6">
          The 2001 regulations classify controlled drugs into five schedules, each with 
          different levels of control. The schedules replaced the previous system of 
          Schedules 1–5 (which were previously called CD1–CD5).
        </p>
        <div className="space-y-4">
          {controlledDrugSchedules.map((schedule) => (
            <div key={schedule.schedule} className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-2">{schedule.schedule}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-muted flex-shrink-0 w-24 font-medium">Examples:</span>
                  <span className="text-muted">{schedule.examples}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-muted flex-shrink-0 w-24 font-medium">Storage:</span>
                  <span className="text-muted">{schedule.storage}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-muted flex-shrink-0 w-24 font-medium">Requirements:</span>
                  <span className="text-muted">{schedule.requirements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Administration */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Administration of Schedule 2 CDs</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">1.</span>
            Check the prescription and MAR chart
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">2.</span>
            Check the CD register — confirm the current stock balance
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">3.</span>
            Two authorised staff must witness the administration (the administrator and a witness)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">4.</span>
            Check the resident&apos;s identity, the drug name, dose, route, and time (5 Rights)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">5.</span>
            Remove the required dose from stock and check the remaining balance
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">6.</span>
            Administer the medication
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">7.</span>
            Both staff sign the CD register and the MAR chart immediately
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">8.</span>
            Record any part-doses (e.g. if a tablet was halved) and the quantity wasted or destroyed
          </li>
        </ul>
      </section>

      {/* Stock Checking */}
      <section className="bg-surface rounded-xl border border-border p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Stock Checking & Record Keeping</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            A running balance must be maintained in the CD register for all Schedule 2 drugs
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            CD stock counts must be performed at every shift change by two authorised staff
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Both staff must confirm the count and sign the register
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Any discrepancy between the expected and actual stock must be investigated immediately
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Report discrepancies to the registered manager and the CQC (if a significant quantity)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            CD registers must be kept for 2 years after the date of the last entry (Schedule 2) or as per organisational policy
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Entries must be made in ink — no correction fluid or erasing; errors should be crossed through, initialled, and the correct entry written alongside
          </li>
        </ul>
      </section>

      {/* Destruction */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h2 className="font-bold text-foreground mb-2">Destruction of Controlled Drugs</h2>
        <p className="text-sm text-muted leading-relaxed">
          Controlled drugs must never be disposed of in normal waste. Schedule 2 CDs must be 
          destroyed in the presence of an authorised witness (typically a pharmacist, police 
          officer, or other authorised person). The destruction must be recorded in the CD 
          register with the date, quantity destroyed, signatures of the destructor and witness. 
          Expired or discontinued CDs should be separated from current stock and clearly labelled 
          pending destruction. Contact your community pharmacist to arrange witnessed destruction.
        </p>
      </section>
    </div>
  );
}