export interface SectionLink {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const mainSections: SectionLink[] = [
  {
    title: "CQC Regulations",
    description:
      "Understand the Care Quality Commission's framework, the 5 Key Questions, Fundamental Standards, and inspection ratings.",
    href: "/cqc-regulations",
    icon: "🛡️",
  },
  {
    title: "Handover Templates",
    description:
      "Printable shift handover, night-to-day, and resident summary templates for effective communication between care teams.",
    href: "/handover-templates",
    icon: "📋",
  },
  {
    title: "Care & Nursing Templates",
    description:
      "Care plans, risk assessments, incident reports, Mental Capacity Act templates, and supervision records.",
    href: "/templates",
    icon: "📝",
  },
  {
    title: "Medication Guidance",
    description:
      "The 5 Rights of medication administration, MAR chart guidance, controlled drugs procedures, and error protocols.",
    href: "/medication-guidance",
    icon: "💊",
  },
  {
    title: "Employee Responsibilities",
    description:
      "UK care home employee duties: duty of care, safeguarding adults, code of conduct, and whistleblowing procedures.",
    href: "/employee-responsibilities",
    icon: "👤",
  },
  {
    title: "Staff & Employer Resources",
    description:
      "What employers must provide and staff are entitled to: induction, the Care Certificate, supervision, employment rights, and teamwork.",
    href: "/staff-resources",
    icon: "👥",
  },
];

export const searchablePages = [
  { title: "CQC Regulations Overview", href: "/cqc-regulations", section: "CQC Regulations", keywords: "cqc care quality commission regulator inspection ratings" },
  { title: "The 5 Key Questions", href: "/cqc-regulations/five-key-questions", section: "CQC Regulations", keywords: "safe effective caring responsive well-led key questions" },
  { title: "Fundamental Standards", href: "/cqc-regulations/fundamental-standards", section: "CQC Regulations", keywords: "fundamental standards regulations health social care act" },
  { title: "CQC Inspection Process & Ratings", href: "/cqc-regulations/inspection-ratings", section: "CQC Regulations", keywords: "inspection process ratings outstanding good requires improvement inadequate" },
  { title: "Shift Handover Template", href: "/handover-templates/shift-handover", section: "Handover Templates", keywords: "shift handover template printable care" },
  { title: "Night-to-Day Handover Template", href: "/handover-templates/night-to-day", section: "Handover Templates", keywords: "night day handover template" },
  { title: "Resident Handover Summary", href: "/handover-templates/resident-summary", section: "Handover Templates", keywords: "resident handover summary individual care" },
  { title: "Care Plan Template", href: "/templates/care-plan", section: "Care & Nursing Templates", keywords: "care plan template person centred" },
  { title: "Risk Assessment Template", href: "/templates/risk-assessment", section: "Care & Nursing Templates", keywords: "risk assessment template hazard likelihood" },
  { title: "Daily Care Record", href: "/templates/daily-care-record", section: "Care & Nursing Templates", keywords: "daily care record log activities meals" },
  { title: "Incident Report Form", href: "/templates/incident-report", section: "Care & Nursing Templates", keywords: "incident report form accident injury" },
  { title: "Moving & Handling Assessment", href: "/templates/moving-handling", section: "Care & Nursing Templates", keywords: "moving handling assessment manual hoist" },
  { title: "Pressure Sore Assessment", href: "/templates/pressure-sore-assessment", section: "Care & Nursing Templates", keywords: "pressure sore waterlow scale assessment ulcer" },
  { title: "Mental Capacity Assessment", href: "/templates/mental-capacity", section: "Care & Nursing Templates", keywords: "mental capacity assessment mca deprivation liberty" },
  { title: "Consent Forms", href: "/templates/consent-forms", section: "Care & Nursing Templates", keywords: "consent form informed consent capacity" },
  { title: "Supervision Record", href: "/templates/supervision-record", section: "Care & Nursing Templates", keywords: "supervision record appraisal staff" },
  { title: "The 5 Rights of Medication", href: "/medication-guidance/five-rights", section: "Medication Guidance", keywords: "five rights medication right patient drug dose route time" },
  { title: "MAR Chart Guidance", href: "/medication-guidance/mar-chart", section: "Medication Guidance", keywords: "mar chart medication administration record" },
  { title: "Controlled Drugs Procedures", href: "/medication-guidance/controlled-drugs", section: "Medication Guidance", keywords: "controlled drugs cd schedule 2 3 4 5" },
  { title: "Medication Abbreviations", href: "/medication-guidance/abbreviations", section: "Medication Guidance", keywords: "medication abbreviations od bd tds qds prn" },
  { title: "PRN Medication Protocols", href: "/medication-guidance/prn-protocols", section: "Medication Guidance", keywords: "prn pro re nata as required medication" },
  { title: "Medication Storage Requirements", href: "/medication-guidance/storage", section: "Medication Guidance", keywords: "medication storage temperature fridge controlled drugs cupboard" },
  { title: "Medication Errors", href: "/medication-guidance/errors", section: "Medication Guidance", keywords: "medication error omission wrong dose adverse reaction reporting" },
  { title: "Employee Responsibilities Overview", href: "/employee-responsibilities", section: "Employee Responsibilities", keywords: "employee responsibilities care worker duties legal obligations" },
  { title: "Duty of Care", href: "/employee-responsibilities/duty-of-care", section: "Employee Responsibilities", keywords: "duty of care health social care act health safety work act legal obligation residents safe" },
  { title: "Safeguarding Adults", href: "/employee-responsibilities/safeguarding", section: "Employee Responsibilities", keywords: "safeguarding adults abuse types recognise report care act 2014 protect vulnerable" },
  { title: "Code of Conduct", href: "/employee-responsibilities/code-of-conduct", section: "Employee Responsibilities", keywords: "code of conduct skills for care professional boundaries confidentiality gdpr data protection" },
  { title: "Whistleblowing", href: "/employee-responsibilities/whistleblowing", section: "Employee Responsibilities", keywords: "whistleblowing public interest disclosure act raise concerns cqc reporting protection" },
  { title: "Staff & Employer Resources Overview", href: "/staff-resources", section: "Staff & Employer Resources", keywords: "staff resources employer training supervision employment rights" },
  { title: "Induction & Training", href: "/staff-resources/induction", section: "Staff & Employer Resources", keywords: "induction training care certificate mandatory cpd regulation 18 cqc standards qualification" },
  { title: "Supervision & Appraisal", href: "/staff-resources/supervision-appraisal", section: "Staff & Employer Resources", keywords: "supervision appraisal one to one professional development cqc requirements" },
  { title: "Employment Rights", href: "/staff-resources/employment-rights", section: "Staff & Employer Resources", keywords: "employment rights contract working time minimum wage nmw grievance union" },
  { title: "Teamwork & Communication", href: "/staff-resources/teamwork-communication", section: "Staff & Employer Resources", keywords: "teamwork communication handover multidisciplinary conflict resolution documentation sbar" },
];