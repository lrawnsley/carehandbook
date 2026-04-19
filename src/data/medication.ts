export interface MedSection {
  id: string;
  title: string;
  content: string;
}

export const fiveRights: MedSection[] = [
  {
    id: "right-patient",
    title: "Right Patient",
    content:
      "Confirm the identity of the resident before administering any medication. In care homes, this means checking the resident's name on the MAR chart against the resident themselves. Use at least two identifiers — typically the resident's full name and photograph on the MAR chart, or their name and date of birth. Never assume a resident's identity based on their room number alone. If you are unsure, verify with another member of staff before proceeding.",
  },
  {
    id: "right-medication",
    title: "Right Medication",
    content:
      "Check that the medication you are about to administer matches exactly what is prescribed on the MAR chart. Read the medication label carefully and compare it to the MAR entry. Check the generic name and brand name, the form (tablet, capsule, liquid, patch), and the strength. If a medication appears different from what you normally give (e.g. a different colour or shape due to a change of supplier), verify with the pharmacy before administering. Never administer medication from an unlabelled container.",
  },
  {
    id: "right-dose",
    title: "Right Dose",
    content:
      "Administer the correct dose as prescribed on the MAR chart. If a tablet needs to be halved, ensure it is scored for splitting. If the dose requires measuring (e.g. liquid medication), use an appropriate measuring device — never estimate. Double-check calculations for any dose that varies or requires conversion. If the prescribed dose seems unusually high or low, or differs from what you would normally expect, clarify with the prescriber or pharmacist before administering.",
  },
  {
    id: "right-route",
    title: "Right Route",
    content:
      "Ensure the medication is given by the correct route as prescribed. The route may be oral (by mouth), sublingual (under the tongue), topical (applied to skin), inhaled, via PEG tube, or by injection (where appropriately trained staff are available). Never crush a tablet or open a capsule unless it is specifically authorised — some medications are modified-release or enteric-coated, and crushing can cause rapid-release of the drug, leading to overdose. If a resident has difficulty swallowing, consult the pharmacist about alternative formulations.",
  },
  {
    id: "right-time",
    title: "Right Time",
    content:
      "Administer medication at the correct time as indicated on the MAR chart. Standard abbreviations include: OD (once daily), BD (twice daily), TDS (three times daily), QDS (four times daily), and STAT (immediately). Some medications must be given at specific times relative to food (e.g. before meals, with food, on an empty stomach). If a dose is missed, follow your organisation's policy on late administration — some medications have a wider window than others. Always record the actual time of administration on the MAR chart.",
  },
];

export const medAbbreviations: { abbreviation: string; meaning: string; note?: string }[] = [
  { abbreviation: "OD", meaning: "Once Daily" },
  { abbreviation: "BD (b.d.)", meaning: "Twice Daily (bis die)" },
  { abbreviation: "TDS (t.d.s.)", meaning: "Three Times Daily (ter die sumendus)" },
  { abbreviation: "QDS (q.d.s.)", meaning: "Four Times Daily (quater die sumendus)" },
  { abbreviation: "STAT", meaning: "Immediately" },
  { abbreviation: "PRN", meaning: "As Required (pro re nata)" },
  { abbreviation: "AC", meaning: "Before Food (ante cibum)" },
  { abbreviation: "PC", meaning: "After Food (post cibum)" },
  { abbreviation: "OM", meaning: "Every Morning" },
  { abbreviation: "ON", meaning: "Every Night" },
  { abbreviation: "Mane", meaning: "In the Morning" },
  { abbreviation: "Nocte", meaning: "At Night" },
  { abbreviation: "NBV", meaning: "Nebulised" },
  { abbreviation: "SL", meaning: "Sublingual (under the tongue)" },
  { abbreviation: "SC", meaning: "Subcutaneous (under the skin)" },
  { abbreviation: "IM", meaning: "Intramuscular" },
  { abbreviation: "IV", meaning: "Intravenous" },
  { abbreviation: "PR", meaning: "Per Rectum (rectally)" },
  { abbreviation: "PV", meaning: "Per Vaginam (vaginally)" },
  { abbreviation: "NG", meaning: "Via Nasogastric Tube" },
  { abbreviation: "PEG", meaning: "Via PEG Tube" },
  { abbreviation: "TOP", meaning: "Topically (applied to skin)" },
  { abbreviation: "INH", meaning: "Inhaled / Inhaler" },
  { abbreviation: "e/c", meaning: "Enteric Coated" },
  { abbreviation: "m/r", meaning: "Modified Release" },
  { abbreviation: "NP", meaning: "Nil Per Os / Nothing by Mouth" },
  { abbreviation: "SQ", meaning: "Subcutaneous" },
  { abbreviation: "5mL", meaning: "5 Millilitres (one standard medicine spoon)" },
];

export const controlledDrugSchedules: { schedule: string; examples: string; storage: string; requirements: string }[] = [
  {
    schedule: "Schedule 1",
    examples: "Cannabis, LSD, MDMA, heroin (for research only)",
    storage: "Not normally held in care homes",
    requirements: "Rarely used in clinical practice; Home Office licence required for possession.",
  },
  {
    schedule: "Schedule 2",
    examples: "Morphine, diamorphine, fentanyl, oxycodone, methadone, pethidine, methylphenidate",
    storage: "Within a locked CD cabinet, separate from other medication. Must be in a dedicated CD safe or cupboard fixed to the fabric of the building.",
    requirements: "Full CD register required. Each receipt and administration must be recorded. Dual signing (two authorised witnesses) for administration and stock counts. Running balance must be maintained.",
  },
  {
    schedule: "Schedule 3",
    examples: "Temazepam, buprenorphine, midazolam, pregabalin (from April 2019), gabapentin (from April 2019), ketamine, tramadol",
    storage: "Locked medicine cupboard (does not require a dedicated CD cabinet but must be stored securely).",
    requirements: "No register required, but records of receipt and administration must be kept in line with organisational policy.",
  },
  {
    schedule: "Schedule 4 (Part I)",
    examples: "Diazepam, lorazepam, zopiclone, zolpidem, nitrazepam",
    storage: "Locked medicine cupboard.",
    requirements: "No special record requirements beyond standard MAR chart documentation and standard stock control.",
  },
  {
    schedule: "Schedule 4 (Part II)",
    examples: "Anabolic steroids, growth hormones",
    storage: "Locked medicine cupboard.",
    requirements: "Rarely used in care homes. No special record requirements.",
  },
  {
    schedule: "Schedule 5",
    examples: "Low-dose codeine preparations, kaolin and morphine mixture",
    storage: "General medicine storage.",
    requirements: "Minimal control requirements. Standard MAR chart documentation applies.",
  },
];

export const prnGuidance = {
  overview:
    "PRN (pro re nata) means 'as required'. PRN medications are prescribed for use when a resident needs them rather than at set times. Care homes must have clear protocols for when and how to administer PRN medication, and all PRN doses must be recorded on the MAR chart with the indication, time, and response.",
  keyPrinciples: [
    "PRN medication should only be administered when there is a clear clinical need — not routinely or 'just in case'",
    "The MAR chart must specify: the indication (when to give), the minimum interval between doses, and the maximum daily dose",
    "Staff must assess the resident before administering PRN medication — is it needed? Could non-pharmacological approaches be tried first?",
    "Record the reason for giving PRN medication (e.g. 'resident complaining of headache', 'distressed and agitated')",
    "Monitor the resident's response after PRN administration and record the outcome (e.g. 'pain relief obtained', 'no improvement — GP contacted')",
    "If PRN medication is being used frequently, this should be reviewed with the GP or pharmacist — the regular prescription may need adjusting",
    "PRN medication must be reviewed as part of the regular medication review cycle",
    "Never administer PRN medication without a current prescription on the MAR chart",
  ],
  commonPrnMedications: [
    { medication: "Paracetamol", indication: "Mild-to-moderate pain, low-grade pyrexia", maxDailyDose: "4g in 24 hours (8 x 500mg tablets)", minimumInterval: "4–6 hours" },
    { medication: "Ibuprofen", indication: "Inflammatory pain, musculoskeletal pain", maxDailyDose: "1.2g in 24 hours (unless otherwise prescribed)", minimumInterval: "6–8 hours" },
    { medication: "Lorazepam", indication: "Severe anxiety, acute agitation (Schedule 3 CD)", maxDailyDose: "As prescribed", minimumInterval: "As prescribed — usually 4–6 hours" },
    { medication: "Diazepam", indication: "Anxiety, muscle spasm, alcohol withdrawal (Schedule 4)", maxDailyDose: "As prescribed", minimumInterval: "As prescribed" },
    { medication: "Omeprazole", indication: "Reflux symptoms, gastric irritation", maxDailyDose: "20–40mg OD", minimumInterval: "N/A — typically once daily if needed" },
    { medication: "Lactulose", indication: "Constipation", maxDailyDose: "15–30ml BD–TDS", minimumInterval: "N/A" },
    { medication: "Co-dydramol", indication: "Moderate pain", maxDailyDose: "As prescribed (varies by strength)", minimumInterval: "4–6 hours" },
    { medication: "Gaviscon / Antacids", indication: "Heartburn, indigestion", maxDailyDose: "As directed on label / prescribed", minimumInterval: "1–2 hours after meals" },
  ],
};

export const storageRequirements = {
  general: [
    "All medication must be stored in a locked cupboard or trolley that is dedicated to medicines storage only",
    "The medicine cupboard must be fixed to the wall or floor and kept locked when not in use",
    "Keys to the medicine cupboard must be held by authorised staff only — keys must be kept on the person, not left on surfaces or in drawers",
    "Medication must be stored at the temperature specified by the manufacturer — check labels for storage instructions",
    "Room-temperature medication should be stored below 25°C (or as stated on the label)",
    "Regular temperature monitoring of the medicine storage area is recommended",
    "External medicines (creams, lotions, shampoos) must be stored separately from internal medicines",
    "Medication for different residents must be clearly separated and labelled",
    "Discontinued or expired medication must be removed promptly and returned to the pharmacy for destruction",
    "Controlled drugs must be stored in a separate, dedicated locked CD cabinet (Schedule 2) — see Controlled Drugs section",
  ],
  fridge: [
    "Medication requiring refrigeration must be stored between 2°C and 8°C",
    "A dedicated medication fridge is required — medication must never be stored in a food fridge",
    "Fridge temperature must be monitored and recorded at least once daily (ideally at the start and end of each shift)",
    "If the fridge temperature falls outside 2–8°C, contact the pharmacist for advice — do not administer medication that may have been compromised",
    " Fridges must be lockable or kept in a locked medication room",
    "Do not overfill the fridge — air must circulate to maintain even temperature",
    "Common fridge items: insulin, some antibiotics, some eye drops, some vaccines",
    "Insulin in current use may be kept at room temperature for up to 28 days (check manufacturer's guidance)",
  ],
  controlledDrugs: [
    "Schedule 2 CDs must be stored in a locked CD cabinet that conforms to the Misuse of Drugs (Safe Custody) Regulations 1973",
    "The CD cabinet must be fixed to the fabric of the building (wall or floor)",
    "CD keys must be held by authorised staff only and kept on the person at all times",
    "When the home is closed (night), CD keys should be held by the senior person on duty",
    "CD stock counts must be performed at each shift change and the running balance confirmed by two authorised staff",
    "Any discrepancy in CD stock must be investigated immediately and reported to the manager and potentially the CQC",
    "Schedule 3 CDs (e.g. temazepam, pregabalin, gabapentin) do not require a CD cabinet but must be stored in a locked medicine cupboard",
  ],
};

export const errorGuidance = {
  overview:
    "A medication error is any preventable event that may cause or lead to inappropriate medication use or patient harm. This includes wrong drug, wrong dose, wrong route, wrong time, wrong patient, omission of a dose, or extra dose given. All medication errors must be reported, investigated, and learned from. A just culture approach should be taken — staff should feel safe to report errors without fear of unfair blame.",
  immediateSteps: [
    "Stay calm and assess the resident — check for any signs of adverse reaction or distress",
    "Do not leave the resident unattended if they are showing any concerning symptoms",
    "If the resident is in immediate danger (e.g. severe reaction, loss of consciousness), call 999",
    "If the error is identified quickly and the resident appears well, contact the GP, NHS 111, or the on-call pharmacist for advice",
    "Do not attempt to 'correct' the error yourself (e.g. giving an extra dose to make up for a missed one) without professional advice",
    "Record exactly what happened: what medication, what dose, what route, what time, who was involved, and what the error was",
    "Record the resident's condition and any symptoms observed",
    "Inform the nurse in charge or manager immediately",
    "Complete an incident report form",
    "Notify the resident's next of kin if appropriate, as per organisational policy",
  ],
  reportingAndLearning: [
    "All medication errors must be recorded as an incident and reported through the organisation's incident reporting system",
    "CQC Regulation 12 requires providers to have systems to assess, monitor, and mitigate risks to safety — medication error reporting is part of this",
    "Significant medication errors should be reported to CQC as a statutory notification (under Regulation 18, which requires notification of any event that adversely affects a person's welfare)",
    "Near-misses should also be reported — they are learning opportunities that can prevent future harm",
    "Root cause analysis should be conducted for significant errors to identify system failures, not just individual mistakes",
    "Learning from errors should be shared with all staff through team meetings, supervision, and training",
    "Repeat errors or patterns should trigger a review of the medication management system",
    "National Reporting and Learning System (NRLS) and/or local Clinical Commissioning Group (CCG) reporting requirements should be followed",
  ],
  commonErrors: [
    { error: "Wrong medication given", causes: "Similar packaging, similar names (look-alike/sound-alike drugs), poor lighting, rushing", prevention: "Read the label every time. Check against MAR chart. Use barcode scanning if available. Separate look-alike medications." },
    { error: "Wrong dose given", causes: "Calculation errors, confusion over units (e.g. mg vs micrograms), illegible prescriptions", prevention: "Double-check calculations. Use standard measuring devices. Clarify unclear prescriptions with prescriber before administering." },
    { error: "Dose omitted", causes: "Resident refused, resident was off unit, medication not available, staffing pressures", prevention: "Check MAR charts regularly. Follow up on missed doses within the appropriate time window. Record reasons for any omissions." },
    { error: "Wrong time", causes: "Disrupted routines, pressure of work, confusion over timing instructions", prevention: "Follow prescribed times. Seek advice if a dose is late — do not assume it is still safe to give." },
    { error: "Crushed or modified inappropriately", causes: "Resident difficulty swallowing, lack of knowledge about modified-release formulations", prevention: "Never crush without pharmacist approval. Seek alternative formulations. Train staff on which medications must not be crushed." },
    { error: "Duplicate dose given", causes: "Poor handover, two staff administering same medication, MAR not signed promptly", prevention: "Sign MAR chart immediately after administration. Clear handover communication. Only one staff member per medication round." },
  ],
};