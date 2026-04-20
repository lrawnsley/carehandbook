export interface ComplaintCategory {
  category: string;
  examples: string[];
}

export const complaintCategories: ComplaintCategory[] = [
  {
    category: "Quality of Care",
    examples: [
      "Inadequate personal care or hygiene support",
      "Delay in responding to call bells or requests for assistance",
      "Inappropriate or insufficient care planning",
      "Failure to follow agreed care plans",
      "Lack of meaningful activities or stimulation",
    ],
  },
  {
    category: "Staff Conduct",
    examples: [
      "Rude, dismissive, or unprofessional behaviour",
      "Failure to treat residents with dignity and respect",
      "Breaches of confidentiality",
      "Inappropriate use of restraint",
      "Staff under the influence of alcohol or drugs",
    ],
  },
  {
    category: "Environment and Facilities",
    examples: [
      "Poor cleanliness or hygiene standards",
      "Unpleasant odours or unclean communal areas",
      "Maintenance issues not addressed promptly",
      "Inadequate heating or ventilation",
      "Safety concerns — trip hazards, broken equipment",
    ],
  },
  {
    category: "Food and Nutrition",
    examples: [
      "Poor quality or insufficient meals",
      "Dietary requirements not met",
      "Lack of choice at mealtimes",
      "Meals served cold or at wrong times",
      "Inadequate support with eating and drinking",
    ],
  },
  {
    category: "Communication",
    examples: [
      "Not being kept informed about care or changes",
      "Difficulty contacting managers or senior staff",
      "Lack of transparency about fees or charges",
      "Not informed about incidents involving their relative",
      "Complaints not acknowledged or responded to",
    ],
  },
  {
    category: "Medication",
    examples: [
      "Medication errors or missed doses",
      "Delays in administering pain relief",
      "Changes to medication without consultation",
      "Side effects not monitored or reported",
      "Administration of covert medication without proper authorisation",
    ],
  },
];

export interface ComplaintFormField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const complaintFormFields: ComplaintFormField[] = [
  {
    category: "Complainant Details",
    fields: [
      { label: "Full Name", type: "text" },
      { label: "Relationship to Resident (if applicable)", type: "text" },
      { label: "Address", type: "text" },
      { label: "Telephone Number", type: "text" },
      { label: "Email Address (if applicable)", type: "text" },
    ],
  },
  {
    category: "Resident Details (if complaint on behalf of a resident)",
    fields: [
      { label: "Resident Full Name", type: "text" },
      { label: "Room Number / Unit", type: "text" },
    ],
  },
  {
    category: "Complaint Details",
    fields: [
      { label: "Date of Incident / Issue", type: "date" },
      { label: "Location (if relevant)", type: "text" },
      { label: "Category of Complaint", type: "text" },
      { label: "Full Description of the Complaint", type: "textarea" },
      { label: "Names of Staff Involved (if known)", type: "text" },
      { label: "Witnesses (names and contact details)", type: "textarea" },
    ],
  },
  {
    category: "Desired Outcome",
    fields: [
      { label: "What Resolution Are You Seeking?", type: "textarea" },
      { label: "Have You Raised This Before? (when and with whom)", type: "textarea" },
    ],
  },
  {
    category: "Office Use Only",
    fields: [
      { label: "Date Received", type: "date" },
      { label: "Received By", type: "text" },
      { label: "Complaint Reference Number", type: "text" },
      { label: "Assigned Investigator", type: "text" },
    ],
  },
];

export interface InvestigationStep {
  phase: string;
  steps: string[];
  timeline: string;
}

export const investigationSteps: InvestigationStep[] = [
  {
    phase: "Acknowledgment",
    steps: [
      "Acknowledge receipt of complaint within 3 working days (CQC Regulation 16 requirement)",
      "Provide the complainant with a reference number and named contact",
      "Explain the complaints process and expected timeline",
      "Confirm how the complainant wishes to be communicated with",
    ],
    timeline: "Within 3 working days of receipt",
  },
  {
    phase: "Investigation",
    steps: [
      "Assign an appropriate investigator (not directly involved in the complaint)",
      "Gather evidence — interview staff, review records, view CCTV if relevant",
      "Interview the complainant and any witnesses",
      "Review relevant policies, care plans, and documentation",
      "Consider whether other residents may be affected",
      "Assess whether a safeguarding referral is needed",
      "Keep the complainant updated on progress at agreed intervals",
    ],
    timeline: "Within 10–20 working days",
  },
  {
    phase: "Response",
    steps: [
      "Prepare a written response detailing findings and actions taken",
      "Address each point raised by the complainant",
      "Apologise where the complaint is upheld (duty of candour — Reg 20)",
      "Outline specific actions to prevent recurrence",
      "Provide details of the Local Government and Social Care Ombudsman if the complainant remains dissatisfied",
      "Arrange a meeting with the complainant if they wish",
    ],
    timeline: "Within 20 working days of receipt (or agreed extension)",
  },
  {
    phase: "Follow-Up and Learning",
    steps: [
      "Implement the actions committed to in the response",
      "Share learning with all staff — team meeting, supervision",
      "Update policies or procedures if needed",
      "Record the complaint and outcome in the complaints log",
      "Reflect in the next quality audit or compliance review",
      "Check in with the complainant to ensure satisfaction with the resolution",
      "Report to CQC if the complaint relates to a notifiable event",
    ],
    timeline: "Ongoing — actions within agreed timescales",
  },
];