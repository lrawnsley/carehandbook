export interface AbuseType {
  type: string;
  description: string;
  signs: string[];
}

export const abuseTypes: AbuseType[] = [
  {
    type: "Physical Abuse",
    description:
      "The use of physical force that results in bodily injury, pain, or impairment. This includes hitting, pushing, slapping, inappropriate use of restraint, or misuse of medication.",
    signs: [
      "Unexplained injuries, bruises, or welts",
      "Injuries in various stages of healing",
      "Marks on wrists or arms suggesting restraint",
      "Fear of certain staff or visitors",
      "Reluctance to discuss injuries",
      "Unexplained fractures or falls",
    ],
  },
  {
    type: "Sexual Abuse",
    description:
      "Any sexual activity to which the person has not consented or could not consent, or was pressured into consenting to. This includes sexual assault, sexual harassment, or inappropriate touching.",
    signs: [
      "Unexplained sexually transmitted infections",
      "Bruising or marks in intimate areas",
      "Distress during personal care",
      "Changes in behaviour or mood",
      "Torn or stained underclothing",
      "Reluctance to be alone with certain people",
    ],
  },
  {
    type: "Psychological / Emotional Abuse",
    description:
      "The infliction of mental or emotional anguish through verbal or non-verbal acts. This includes threats, humiliation, intimidation, harassment, or isolation from family and friends.",
    signs: [
      "Withdrawal or fearfulness",
      "Low self-esteem or unexplained tearfulness",
      "Avoidance of eye contact",
      "Change in appetite or sleep pattern",
      "Reluctance to speak openly",
      "Appearing anxious or agitated",
    ],
  },
  {
    type: "Financial or Material Abuse",
    description:
      "The illegal or unauthorised use of a person's funds, property, or resources. This includes theft, fraud, exploitation, coercion in relation to finances, or misuse of a Lasting Power of Attorney.",
    signs: [
      "Unexplained withdrawals from bank accounts",
      "Missing personal possessions",
      "Unpaid bills despite adequate funds",
      "Sudden changes to wills or financial arrangements",
      "Unexplained lack of money for day-to-day items",
      "Reluctance by family to pay for care despite ability",
    ],
  },
  {
    type: "Neglect and Acts of Omission",
    description:
      "The refusal or failure to fulfil obligations to a vulnerable person. This includes failing to provide food, shelter, clothing, medical care, or personal hygiene — or withholding these necessities of life.",
    signs: [
      "Malnutrition or unexplained weight loss",
      "Dehydration",
      "Untreated medical conditions or pressure sores",
      "Poor personal hygiene or unchanged incontinence wear",
      "Inadequate clothing or bedding",
      "Withdrawn or apathetic behaviour",
      "Unkept environment",
    ],
  },
  {
    type: "Discriminatory Abuse",
    description:
      "Abuse motivated by discriminatory attitudes towards a person's age, disability, gender, race, religion, sexual orientation, or other protected characteristic. This includes harassment, slurs, or denial of services.",
    signs: [
      "Lack of respect for cultural or religious needs",
      "Unequal treatment compared to other residents",
      "Derogatory remarks about age, disability, or background",
      "Exclusion from activities based on a protected characteristic",
      "Denial of access to appropriate services",
    ],
  },
  {
    type: "Organisational / Institutional Abuse",
    description:
      "Abuse occurring within a care setting where the regime, routine, or culture denies people dignity, choice, or control. Includes rigid routines, lack of person-centred care, and institutional practices.",
    signs: [
      "Rigid routines that do not respond to individual needs",
      "Lack of choice in daily life (meals, bedtimes, activities)",
      "Inappropriate use of restraint or sedation",
      "People treated in a depersonalised way",
      "Poor staffing levels or high staff turnover",
      "Lack of management oversight or accountability",
    ],
  },
  {
    type: "Self-Neglect",
    description:
      "An adult who is unable to care for themselves and refuses essential services, leading to a deterioration in their health or living conditions. This can be complex to manage as adults have the right to make unwise decisions if they have capacity.",
    signs: [
      "Persistent inability to maintain personal hygiene",
      "Living in squalor or hazardous conditions",
      "Refusal of essential care or medical treatment",
      "Hoarding behaviour",
      "Malnutrition or dehydration due to self-neglect",
    ],
  },
  {
    type: "Domestic Abuse",
    description:
      "Any incident or pattern of incidents of controlling, coercive, or threatening behaviour between people who are or have been intimate partners or family members, regardless of gender or sexuality.",
    signs: [
      "Controlling behaviour by a family member or partner",
      "Fear of a particular visitor",
      "Unexplained injuries coinciding with visits",
      "Reluctance to speak in front of certain people",
      "Coercion in financial or care decisions",
    ],
  },
  {
    type: "Modern Slavery",
    description:
      "Encompasses slavery, human trafficking, forced labour, and domestic servitude. People can be trafficked and exploited in care settings, particularly those with uncertain immigration status or who are dependent on others.",
    signs: [
      "Signs of physical or psychological abuse",
      "Person appears to be under the control of another",
      "Lack of personal identification or documents",
      "Unable to speak freely or appear frightened",
      "Working excessively long hours with no or low pay",
    ],
  },
];

export interface AlertFormField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const alertFormFields: AlertFormField[] = [
  {
    category: "Reporter Details",
    fields: [
      { label: "Your Full Name", type: "text" },
      { label: "Your Role / Job Title", type: "text" },
      { label: "Date and Time of This Report", type: "text" },
      { label: "Your Contact Number", type: "text" },
    ],
  },
  {
    category: "Person at Risk",
    fields: [
      { label: "Name of Person at Risk", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "Address / Location", type: "text" },
      { label: "NHS Number (if known)", type: "text" },
    ],
  },
  {
    category: "Concern Details",
    fields: [
      { label: "Type of Abuse (select all that apply)", type: "select", options: ["Physical", "Sexual", "Psychological/Emotional", "Financial/Material", "Neglect", "Discriminatory", "Organisational/Institutional", "Self-Neglect", "Domestic", "Modern Slavery"] },
      { label: "Date and Time of Incident(s)", type: "text" },
      { label: "Location of Incident(s)", type: "text" },
      { label: "Description of Concern (what happened, what you saw/heard)", type: "textarea" },
    ],
  },
  {
    category: "Alleged Perpetrator (if known)",
    fields: [
      { label: "Name (if known)", type: "text" },
      { label: "Relationship to Person at Risk", type: "text" },
    ],
  },
  {
    category: "Witnesses",
    fields: [
      { label: "Witness 1 Name and Contact", type: "text" },
      { label: "Witness 2 Name and Contact", type: "text" },
    ],
  },
  {
    category: "Actions Taken",
    fields: [
      { label: "Immediate Actions Taken to Protect the Person", type: "textarea" },
      { label: "Actions Taken to Preserve Evidence", type: "textarea" },
      { label: "Who Have You Reported This To (line manager, safeguarding lead)?", type: "text" },
      { label: "Has the Person at Risk Been Informed? (and their views if so)", type: "textarea" },
    ],
  },
  {
    category: "Referral",
    fields: [
      { label: "Referral Made to Local Authority Safeguarding Team?", type: "select", options: ["Yes", "No — to be completed", "Not required at this stage"] },
      { label: "If Yes — Date and Time of Referral", type: "text" },
      { label: "Name of Local Authority Contact", type: "text" },
      { label: "Reference Number Given by Local Authority", type: "text" },
      { label: "CQC Notification Required? (injury, abuse, or allegation of abuse)", type: "select", options: ["Yes", "No", "To be determined"] },
    ],
  },
];

export interface InvestigationStep {
  step: number;
  title: string;
  description: string;
  actions: string[];
}

export const investigationSteps: InvestigationStep[] = [
  {
    step: 1,
    title: "Ensure Immediate Safety",
    description: "The first priority is always the safety and welfare of the adult at risk.",
    actions: [
      "Take immediate action to protect the person from further harm",
      "Call emergency services (999) if there is an immediate risk to life",
      "Separate the person from the alleged perpetrator if safe to do so",
      "Ensure any medical needs are addressed promptly",
      "Preserve any physical evidence (do not clean up or move items)",
    ],
  },
  {
    step: 2,
    title: "Report Internally",
    description: "All safeguarding concerns must be reported within the organisation without delay.",
    actions: [
      "Report to your line manager or the designated safeguarding lead immediately",
      "If the concern involves the manager, report to the next senior manager or the local authority directly",
      "Record your concern in writing — include dates, times, names, and what was observed or reported",
      "Do not confront the alleged perpetrator at this stage",
      "Do not promise confidentiality to the person raising the concern",
    ],
  },
  {
    step: 3,
    title: "Report Externally",
    description: "The safeguarding lead or manager must report to the local authority and other agencies as required.",
    actions: [
      "Contact the local authority safeguarding team within 24 hours (or immediately if there is ongoing risk)",
      "Submit a safeguarding alert/referral using the local authority's process",
      "Notify the CQC if required (Regulation 18 — notification of abuse or allegation of abuse)",
      "Contact the police if a crime may have been committed",
      "Inform the person's GP if medical assessment is needed",
      "Notify the commissioning body / local authority if the person is funded by them",
    ],
  },
  {
    step: 4,
    title: "Cooperate with the Investigation",
    description: "The local authority will lead the Section 42 enquiry under the Care Act 2014.",
    actions: [
      "Cooperate fully with the local authority safeguarding enquiry",
      "Provide all records, statements, and evidence as requested",
      "Ensure staff are available for interview by investigators",
      "Do not destroy or alter any records related to the concern",
      "Follow any instructions from the safeguarding lead or investigating officer",
      "Maintain confidentiality — share information only on a need-to-know basis",
    ],
  },
  {
    step: 5,
    title: "Implement Safeguards and Support",
    description: "Ensure ongoing protection and support for the adult at risk throughout the process.",
    actions: [
      "Implement any safeguarding plan agreed with the local authority",
      "Provide emotional and practical support to the person at risk",
      "Ensure the person has access to an advocate if needed (under the Care Act 2014)",
      "Review and adjust the care plan to address identified risks",
      "Arrange additional supervision or monitoring as needed",
      "Support staff who may be affected by the investigation",
    ],
  },
  {
    step: 6,
    title: "Review and Learn",
    description: "After the investigation concludes, review what happened and take steps to prevent recurrence.",
    actions: [
      "Review the outcome of the safeguarding enquiry and any recommendations",
      "Update risk assessments and care plans accordingly",
      "Implement any changes to policies, procedures, or training identified by the investigation",
      "Conduct a lessons-learned review with staff (maintaining confidentiality)",
      "Share anonymised learning with the wider team where appropriate",
      "Monitor the situation to ensure the safeguarding plan remains effective",
      "Consider whether a safeguarding adults review (SAR) is required for serious cases",
    ],
  },
];