export interface PreAdmissionField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const preAdmissionFields: PreAdmissionField[] = [
  {
    category: "Personal Details",
    fields: [
      { label: "Full Name", type: "text" },
      { label: "Preferred Name", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "NHS Number", type: "text" },
      { label: "Address", type: "text" },
      { label: "Telephone Number", type: "text" },
      { label: "Next of Kin Name", type: "text" },
      { label: "Next of Kin Relationship", type: "text" },
      { label: "Next of Kin Contact Number", type: "text" },
    ],
  },
  {
    category: "Health Information",
    fields: [
      { label: "GP Name and Practice", type: "text" },
      { label: "GP Telephone Number", type: "text" },
      { label: "Known Medical Conditions / Diagnoses", type: "textarea" },
      { label: "Current Medications (including doses and frequency)", type: "textarea" },
      { label: "Known Allergies (including type of reaction)", type: "textarea" },
      { label: "Recent Hospital Admissions (last 12 months)", type: "textarea" },
      { label: "Communication Needs (sensory, language, cognitive)", type: "textarea" },
      { label: "Mobility Level and Aids Used", type: "text" },
    ],
  },
  {
    category: "Mental Capacity & Legal",
    fields: [
      { label: "Has Mental Capacity Assessment Been Completed?", type: "select", options: ["Yes", "No", "Under Review"] },
      { label: "Is There a Lasting Power of Attorney (LPA)?", type: "select", options: ["Yes — Health & Welfare", "Yes — Property & Finance", "Yes — Both", "No", "Unknown"] },
      { label: "Is There a Deprivation of Liberty Safeguards (DoLS) Authorisation?", type: "select", options: ["Yes", "No", "Application Pending", "Not Applicable"] },
      { label: "Is There an Advance Care Plan or Advance Decision?", type: "select", options: ["Yes — Advance Care Plan", "Yes — Advance Decision to Refuse Treatment", "No", "Unknown"] },
    ],
  },
  {
    category: "Personal Preferences",
    fields: [
      { label: "Cultural and Religious Needs", type: "textarea" },
      { label: "Dietary Requirements and Preferences", type: "textarea" },
      { label: "Daily Routine Preferences", type: "textarea" },
      { label: "Likes and Interests", type: "textarea" },
      { label: "What Is Important to the Person", type: "textarea" },
    ],
  },
];

export interface AdmissionChecklistItem {
  category: string;
  items: string[];
}

export const admissionChecklist: AdmissionChecklistItem[] = [
  {
    category: "Before Arrival",
    items: [
      "Pre-admission assessment completed",
      "Room prepared and furnished appropriately",
      "Bed and mattress suitable for resident's needs",
      "Call bell tested and explained",
      "Care plan template ready for completion",
      "Medication administration record (MAR) chart prepared",
      "GP surgery notified of new admission",
      "Staffing levels appropriate to meet assessed needs",
    ],
  },
  {
    category: "On Arrival",
    items: [
      "Welcome the resident and their family",
      "Introduce staff who will be involved in care",
      "Show the resident around the home (facilities, their room, garden)",
      "Explain fire safety procedures and evacuation plan",
      "Demonstrate call bell and ensure resident can use it",
      "Discuss meal times, menus, and dietary preferences",
      "Review personal belongings and valuables list",
      "Photograph for identification (with consent)",
    ],
  },
  {
    category: "Within 24 Hours",
    items: [
      "Complete full care needs assessment",
      "Complete falls risk assessment",
      "Complete waterlow/pressure sore risk assessment",
      "Complete MUST nutritional screening",
      "Complete medication reconciliation with GP/pharmacy",
      "Obtain consent for care and treatment",
      "Assess mental capacity for key decisions",
      "Record baseline observations (BP, pulse, weight, temperature)",
      "Ensure GP visit arranged within 24 hours of admission",
      "Notify local authority / funding body of admission",
      "Complete bedroom and personal property inventory",
    ],
  },
  {
    category: "Within 72 Hours",
    items: [
      "Develop initial care plan with resident and family input",
      "Complete communication and language needs assessment",
      "Arrange referrals as needed (physio, OT, SALT, dietitian)",
      "Confirm advance care plan or DNACPR status with GP",
      "Review DoLS status and apply if needed",
      "Arrange for personal laundry preferences",
      "Ensure all medications received from pharmacy",
      "Complete any outstanding risk assessments",
    ],
  },
  {
    category: "Within 4 Weeks",
    items: [
      "Review and finalise care plan with multidisciplinary input",
      "Complete comprehensive assessment review",
      "Review and adjust risk assessments based on settling-in period",
      "Hold first review meeting with resident and family",
      "Ensure all referrals have been actioned",
      "Review staffing levels against assessed care needs",
      "Record settling-in observations and any concerns",
    ],
  },
];

export const admissionChecklistItems = admissionChecklist;

export interface HospitalTransferField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const hospitalTransferFields: HospitalTransferField[] = [
  {
    category: "Resident Information",
    fields: [
      { label: "Full Name", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "NHS Number", type: "text" },
      { label: "Care Home Name", type: "text" },
      { label: "Address of Care Home", type: "text" },
    ],
  },
  {
    category: "Transfer Details",
    fields: [
      { label: "Date and Time of Transfer", type: "text" },
      { label: "Reason for Transfer", type: "textarea" },
      { label: "Hospital / Department Name", type: "text" },
      { label: "Mode of Transport", type: "text" },
      { label: "Accompanying Staff Member", type: "text" },
    ],
  },
  {
    category: "Clinical Information (SBAR Format)",
    fields: [
      { label: "Situation — Current Problem and Reason for Transfer", type: "textarea" },
      { label: "Background — Relevant Medical History and Current Care Plan", type: "textarea" },
      { label: "Assessment — Current Observations and Clinical Findings", type: "textarea" },
      { label: "Recommendation — What You Are Requesting from Hospital", type: "textarea" },
    ],
  },
  {
    category: "Current Diagnoses",
    fields: [
      { label: "Current Diagnoses", type: "textarea" },
      { label: "Current Medications (with doses and times)", type: "textarea" },
      { label: "Known Allergies", type: "textarea" },
      { label: "Recent Observations (BP, pulse, temp, O2 sats)", type: "textarea" },
      { label: "Mental Capacity Status", type: "text" },
      { label: "DNACPR / ReSPECT Status", type: "text" },
      { label: "DoLS Authorisation Status", type: "text" },
    ],
  },
  {
    category: "Communication & Support Needs",
    fields: [
      { label: "Communication Needs (e.g., hearing aid, glasses, language)", type: "textarea" },
      { label: "Mobility and Transfer Needs", type: "textarea" },
      { label: "Eating and Drinking Needs (including IDDSI level)", type: "textarea" },
      { label: "Continence Needs", type: "textarea" },
      { label: "Behavioural Needs (including triggers and de-escalation)", type: "textarea" },
    ],
  },
  {
    category: "Medication Being Sent",
    fields: [
      { label: "List All Medications Sent with Resident", type: "textarea" },
      { label: "Controlled Drugs Sent (quantity and signature)", type: "textarea" },
    ],
  },
  {
    category: "Belongings Sent",
    fields: [
      { label: "List of Personal Belongings Sent", type: "textarea" },
      { label: "Valuables (list or confirm in safe)", type: "textarea" },
    ],
  },
];