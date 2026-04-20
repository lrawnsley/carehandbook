export interface SectionLink {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const mainSections: SectionLink[] = [
  {
    title: "Dementia Care",
    description:
      "Person-centred dementia care guides, communication techniques, ABC behaviour charts, and the Getting to Know Me life story template for care homes.",
    href: "/dementia-care",
    icon: "🧠",
  },
  {
    title: "CQC Regulations",
    description:
      "Understand the Care Quality Commission's framework, the 5 Key Questions, Fundamental Standards, and inspection ratings.",
    href: "/cqc-regulations",
    icon: "🛡️",
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
    title: "Infection Prevention & Control",
    description:
      "Hand hygiene 5 moments, PPE donning and doffing, outbreak management plans, and IPC audit checklists.",
    href: "/infection-control",
    icon: "🦠",
  },
  {
    title: "Falls Prevention",
    description:
      "Falls risk assessment tools, prevention checklists, and post-fall protocols for care home residents.",
    href: "/falls",
    icon: "🚨",
  },
  {
    title: "Nutrition & Hydration",
    description:
      "MUST screening, food and fluid charts, weight monitoring, and IDDSI texture-modified diet guidance.",
    href: "/nutrition",
    icon: "🍽️",
  },
  {
    title: "Admission & Discharge",
    description:
      "Pre-admission assessment forms, admission checklists, and hospital transfer documentation for smooth transitions.",
    href: "/admission-discharge",
    icon: "🏥",
  },
  {
    title: "Safeguarding",
    description:
      "Safeguarding alert forms, types of abuse, and investigation procedures for protecting vulnerable adults.",
    href: "/safeguarding",
    icon: "🛡️",
  },
  {
    title: "Fire Safety",
    description:
      "Fire risk assessments, Personal Emergency Evacuation Plans (PEEPs), and evacuation checklists for care homes.",
    href: "/fire-safety",
    icon: "🔥",
  },
  {
    title: "End of Life Care",
    description:
      "Advance care planning templates, DNACPR guidance, recognising dying signs, and anticipatory medications.",
    href: "/end-of-life",
    icon: "💜",
  },
  {
    title: "Complaints Handling",
    description:
      "Complaint record forms, investigation trackers, and CQC Regulation 16 guidance for care home complaints.",
    href: "/complaints",
    icon: "📋",
  },
  {
    title: "Handover Templates",
    description:
      "Printable shift handover, night-to-day, and resident summary templates for effective communication between care teams.",
    href: "/handover-templates",
    icon: "📋",
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
  // Dementia Care
  { title: "Dementia Care", href: "/dementia-care", section: "Dementia Care", keywords: "dementia alzheimer vascular lewy body frontotemporal care types stages" },
  { title: "Dementia Types & Stages", href: "/dementia-care/overview", section: "Dementia Care", keywords: "dementia types alzheimer vascular lewy body frontotemporal mixed early middle late stages" },
  { title: "Person-Centred Dementia Care", href: "/dementia-care/person-centred-care", section: "Dementia Care", keywords: "person centred care dementia individual needs NICE NG97 getting to know me" },
  { title: "Dementia Communication", href: "/dementia-care/communication", section: "Dementia Care", keywords: "communication dementia non verbal active listening techniques dos donts" },
  { title: "Distressed Behaviour", href: "/dementia-care/distressed-behaviour", section: "Dementia Care", keywords: "distressed behaviour PBS positive behaviour support de-escalation challenging behaviour" },
  { title: "Getting to Know Me Template", href: "/dementia-care/getting-to-know-me", section: "Dementia Care", keywords: "getting to know me life story person centred dementia template this is me" },
  { title: "ABC Behaviour Chart", href: "/dementia-care/abc-chart", section: "Dementia Care", keywords: "ABC chart antecedent behaviour consequence recording chart dementia" },
  // CQC Regulations
  { title: "CQC Regulations Overview", href: "/cqc-regulations", section: "CQC Regulations", keywords: "cqc care quality commission regulator inspection ratings" },
  { title: "The 5 Key Questions", href: "/cqc-regulations/five-key-questions", section: "CQC Regulations", keywords: "safe effective caring responsive well-led key questions" },
  { title: "Fundamental Standards", href: "/cqc-regulations/fundamental-standards", section: "CQC Regulations", keywords: "fundamental standards regulations health social care act" },
  { title: "CQC Inspection Process & Ratings", href: "/cqc-regulations/inspection-ratings", section: "CQC Regulations", keywords: "inspection process ratings outstanding good requires improvement inadequate" },
  // Handover Templates
  { title: "Shift Handover Template", href: "/handover-templates/shift-handover", section: "Handover Templates", keywords: "shift handover template printable care" },
  { title: "Night-to-Day Handover Template", href: "/handover-templates/night-to-day", section: "Handover Templates", keywords: "night day handover template" },
  { title: "Resident Handover Summary", href: "/handover-templates/resident-summary", section: "Handover Templates", keywords: "resident handover summary individual care" },
  // Care & Nursing Templates
  { title: "Care Plan Template", href: "/templates/care-plan", section: "Care & Nursing Templates", keywords: "care plan template person centred" },
  { title: "Risk Assessment Template", href: "/templates/risk-assessment", section: "Care & Nursing Templates", keywords: "risk assessment template hazard likelihood" },
  { title: "Daily Care Record", href: "/templates/daily-care-record", section: "Care & Nursing Templates", keywords: "daily care record log activities meals" },
  { title: "Incident Report Form", href: "/templates/incident-report", section: "Care & Nursing Templates", keywords: "incident report form accident injury" },
  { title: "Moving & Handling Assessment", href: "/templates/moving-handling", section: "Care & Nursing Templates", keywords: "moving handling assessment manual hoist" },
  { title: "Pressure Sore Assessment", href: "/templates/pressure-sore-assessment", section: "Care & Nursing Templates", keywords: "pressure sore waterlow scale assessment ulcer" },
  { title: "Mental Capacity Assessment", href: "/templates/mental-capacity", section: "Care & Nursing Templates", keywords: "mental capacity assessment mca deprivation liberty" },
  { title: "Consent Forms", href: "/templates/consent-forms", section: "Care & Nursing Templates", keywords: "consent form informed consent capacity" },
  { title: "Supervision Record", href: "/templates/supervision-record", section: "Care & Nursing Templates", keywords: "supervision record appraisal staff" },
  // Medication Guidance
  { title: "The 5 Rights of Medication", href: "/medication-guidance/five-rights", section: "Medication Guidance", keywords: "five rights medication right patient drug dose route time" },
  { title: "MAR Chart Guidance", href: "/medication-guidance/mar-chart", section: "Medication Guidance", keywords: "mar chart medication administration record" },
  { title: "Controlled Drugs Procedures", href: "/medication-guidance/controlled-drugs", section: "Medication Guidance", keywords: "controlled drugs cd schedule 2 3 4 5" },
  { title: "Medication Abbreviations", href: "/medication-guidance/abbreviations", section: "Medication Guidance", keywords: "medication abbreviations od bd tds qds prn" },
  { title: "PRN Medication Protocols", href: "/medication-guidance/prn-protocols", section: "Medication Guidance", keywords: "prn pro re nata as required medication" },
  { title: "Medication Storage Requirements", href: "/medication-guidance/storage", section: "Medication Guidance", keywords: "medication storage temperature fridge controlled drugs cupboard" },
  { title: "Medication Errors", href: "/medication-guidance/errors", section: "Medication Guidance", keywords: "medication error omission wrong dose adverse reaction reporting" },
  // Infection Prevention & Control
  { title: "Infection Prevention & Control", href: "/infection-control", section: "Infection Control", keywords: "infection prevention control IPC hand hygiene PPE outbreak audit" },
  { title: "Hand Hygiene", href: "/infection-control/hand-hygiene", section: "Infection Control", keywords: "hand hygiene five moments handwashing sanitiser technique" },
  { title: "PPE — Personal Protective Equipment", href: "/infection-control/ppe", section: "Infection Control", keywords: "PPE personal protective equipment donning doffing gloves apron mask" },
  { title: "Outbreak Management", href: "/infection-control/outbreak-management", section: "Infection Control", keywords: "outbreak management pandemic flu norovirus COVID care home plan" },
  { title: "IPC Audit Tool", href: "/infection-control/audit-tool", section: "Infection Control", keywords: "IPC audit checklist infection control assessment compliance" },
  // Falls Prevention
  { title: "Falls Prevention", href: "/falls", section: "Falls Prevention", keywords: "falls prevention risk assessment care home elderly" },
  { title: "Falls Risk Assessment", href: "/falls/risk-assessment", section: "Falls Prevention", keywords: "falls risk assessment factors intrinsic extrinsic medication" },
  { title: "Falls Prevention Checklist", href: "/falls/prevention-checklist", section: "Falls Prevention", keywords: "falls prevention environment exercise mobility checklist" },
  { title: "Post-Fall Protocol", href: "/falls/post-fall-protocol", section: "Falls Prevention", keywords: "post fall protocol immediate actions monitoring reporting 999" },
  // Nutrition & Hydration
  { title: "Nutrition & Hydration", href: "/nutrition", section: "Nutrition & Hydration", keywords: "nutrition hydration MUST screening IDDSI texture modified" },
  { title: "MUST Screening", href: "/nutrition/must-screening", section: "Nutrition & Hydration", keywords: "MUST malnutrition universal screening tool BMI weight loss" },
  { title: "Food & Fluid Chart", href: "/nutrition/food-fluid-chart", section: "Nutrition & Hydration", keywords: "food fluid chart intake record hydration monitoring" },
  { title: "Weight Monitoring", href: "/nutrition/weight-monitoring", section: "Nutrition & Hydration", keywords: "weight monitoring nutrition dietitian referral triggers" },
  { title: "Texture-Modified Diets", href: "/nutrition/texture-modified-diets", section: "Nutrition & Hydration", keywords: "IDDSI texture modified diet thickener dysphagia levels" },
  // Admission & Discharge
  { title: "Admission & Discharge", href: "/admission-discharge", section: "Admission & Discharge", keywords: "admission discharge transfer care home new resident" },
  { title: "Pre-Admission Assessment", href: "/admission-discharge/pre-admission", section: "Admission & Discharge", keywords: "pre admission assessment form care home new resident" },
  { title: "Admission Checklist", href: "/admission-discharge/admission-checklist", section: "Admission & Discharge", keywords: "admission checklist process steps first day new resident" },
  { title: "Hospital Transfer Form", href: "/admission-discharge/hospital-transfer", section: "Admission & Discharge", keywords: "hospital transfer form SBAR emergency handover" },
  // Safeguarding
  { title: "Safeguarding", href: "/safeguarding", section: "Safeguarding", keywords: "safeguarding adults abuse protect care act 2014 section 42" },
  { title: "Safeguarding Alert Form", href: "/safeguarding/alert-form", section: "Safeguarding", keywords: "safeguarding alert form concern report abuse types investigation" },
  // Fire Safety
  { title: "Fire Safety", href: "/fire-safety", section: "Fire Safety", keywords: "fire safety risk assessment PEEP evacuation care home" },
  { title: "Fire Risk Assessment", href: "/fire-safety/risk-assessment", section: "Fire Safety", keywords: "fire risk assessment categories significant findings action plan" },
  { title: "Personal Emergency Evacuation Plan", href: "/fire-safety/peep", section: "Fire Safety", keywords: "PEEP personal emergency evacuation plan mobility sensory" },
  { title: "Fire Evacuation Checklist", href: "/fire-safety/evacuation-checklist", section: "Fire Safety", keywords: "fire evacuation drill assembly point checklist steps" },
  // End of Life Care
  { title: "End of Life Care", href: "/end-of-life", section: "End of Life Care", keywords: "end of life care dying advance DNACPR palliative" },
  { title: "Advance Care Planning", href: "/end-of-life/advance-care-planning", section: "End of Life Care", keywords: "advance care plan DNACPR LPA lasting power attorney advance decision" },
  { title: "Recognising Dying", href: "/end-of-life/recognising-dying", section: "End of Life Care", keywords: "recognising dying signs symptoms comfort care final hours" },
  { title: "Anticipatory Care", href: "/end-of-life/anticipatory-care", section: "End of Life Care", keywords: "anticipatory medications syringe driver comfort measures palliative" },
  // Complaints
  { title: "Complaints Handling", href: "/complaints", section: "Complaints Handling", keywords: "complaints handling CQC regulation 16 care home" },
  { title: "Complaint Form", href: "/complaints/complaint-form", section: "Complaints Handling", keywords: "complaint form record categories investigation" },
  { title: "Investigation Tracker", href: "/complaints/investigation-tracker", section: "Complaints Handling", keywords: "investigation tracker timeline regulation 16 duty of candour" },
  // Employee Responsibilities
  { title: "Employee Responsibilities Overview", href: "/employee-responsibilities", section: "Employee Responsibilities", keywords: "employee responsibilities care worker duties legal obligations" },
  { title: "Duty of Care", href: "/employee-responsibilities/duty-of-care", section: "Employee Responsibilities", keywords: "duty of care health social care act health safety work act legal obligation residents safe" },
  { title: "Safeguarding Adults", href: "/employee-responsibilities/safeguarding", section: "Employee Responsibilities", keywords: "safeguarding adults abuse types recognise report care act 2014 protect vulnerable" },
  { title: "Code of Conduct", href: "/employee-responsibilities/code-of-conduct", section: "Employee Responsibilities", keywords: "code of conduct skills for care professional boundaries confidentiality gdpr data protection" },
  { title: "Whistleblowing", href: "/employee-responsibilities/whistleblowing", section: "Employee Responsibilities", keywords: "whistleblowing public interest disclosure act raise concerns cqc reporting protection" },
  // Staff & Employer Resources
  { title: "Staff & Employer Resources Overview", href: "/staff-resources", section: "Staff & Employer Resources", keywords: "staff resources employer training supervision employment rights" },
  { title: "Induction & Training", href: "/staff-resources/induction", section: "Staff & Employer Resources", keywords: "induction training care certificate mandatory cpd regulation 18 cqc standards qualification" },
  { title: "Supervision & Appraisal", href: "/staff-resources/supervision-appraisal", section: "Staff & Employer Resources", keywords: "supervision appraisal one to one professional development cqc requirements" },
  { title: "Employment Rights", href: "/staff-resources/employment-rights", section: "Staff & Employer Resources", keywords: "employment rights contract working time minimum wage nmw grievance union" },
  { title: "Teamwork & Communication", href: "/staff-resources/teamwork-communication", section: "Staff & Employer Resources", keywords: "teamwork communication handover multidisciplinary conflict resolution documentation sbar" },
];