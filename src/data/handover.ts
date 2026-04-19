export interface HandoverField {
  label: string;
  type: "text" | "textarea" | "select" | "date" | "time";
  options?: string[];
  width?: "full" | "half";
}

export interface HandoverTemplate {
  id: string;
  title: string;
  description: string;
  fields: HandoverField[];
}

export const shiftHandoverTemplate: HandoverTemplate = {
  id: "shift-handover",
  title: "Shift Handover Template",
  description:
    "A comprehensive shift handover form to ensure all critical information is communicated between outgoing and incoming care staff. Covering each resident's current status, any changes during the shift, and pending actions.",
  fields: [
    { label: "Home / Unit Name", type: "text", width: "half" },
    { label: "Date", type: "date", width: "half" },
    { label: "Outgoing Shift (e.g. 07:00–14:00)", type: "text", width: "half" },
    { label: "Incoming Shift (e.g. 14:00–21:00)", type: "text", width: "half" },
    { label: "Outgoing Staff Name & Role", type: "text", width: "half" },
    { label: "Incoming Staff Name & Role", type: "text", width: "half" },
    { label: "Total Residents on Shift", type: "text", width: "half" },
    { label: "Number of Staff on Shift", type: "text", width: "half" },
    { label: "Staffing Concerns or Shortages", type: "textarea", width: "full" },
    { label: "General Warden / Environment Issues", type: "textarea", width: "full" },
    { label: "Resident 1 — Full Name", type: "text", width: "half" },
    { label: "Room Number", type: "text", width: "half" },
    { label: "Conditions / Diagnosis", type: "text", width: "full" },
    { label: "Medication Changes During Shift", type: "textarea", width: "full" },
    { label: "Mood / Behaviour Observations", type: "textarea", width: "full" },
    { label: "Food / Fluid Intake", type: "select", width: "half", options: ["Good", "Fair", "Poor", "Refused", "NPO"] },
    { label: "Urinary Output", type: "select", width: "half", options: ["Normal", "Reduced", "Increased", "Catheter", "Incontinent"] },
    { label: "Bowel Movement", type: "select", width: "half", options: ["Normal", "Constipated", "Diarrhoea", "None Today"] },
    { label: "Mobility Status", type: "select", width: "half", options: ["Independent", "One Assist", "Two Assist", "Hoist", "Wheelchair", "Bedbound"] },
    { label: "Upcoming Appointments", type: "text", width: "full" },
    { label: "Actions Required by Incoming Shift", type: "textarea", width: "full" },
    { label: "Resident 2 — Full Name", type: "text", width: "half" },
    { label: "Room Number", type: "text", width: "half" },
    { label: "Conditions / Diagnosis", type: "text", width: "full" },
    { label: "Medication Changes During Shift", type: "textarea", width: "full" },
    { label: "Mood / Behaviour Observations", type: "textarea", width: "full" },
    { label: "Food / Fluid Intake", type: "select", width: "half", options: ["Good", "Fair", "Poor", "Refused", "NPO"] },
    { label: "Urinary Output", type: "select", width: "half", options: ["Normal", "Reduced", "Increased", "Catheter", "Incontinent"] },
    { label: "Bowel Movement", type: "select", width: "half", options: ["Normal", "Constipated", "Diarrhoea", "None Today"] },
    { label: "Mobility Status", type: "select", width: "half", options: ["Independent", "One Assist", "Two Assist", "Hoist", "Wheelchair", "Bedbound"] },
    { label: "Upcoming Appointments", type: "text", width: "full" },
    { label: "Actions Required by Incoming Shift", type: "textarea", width: "full" },
    { label: "Additional Residents — Continue on Separate Sheet", type: "textarea", width: "full" },
    { label: "Any Falls, Incidents, or Accidents During Shift", type: "textarea", width: "full" },
    { label: "Visitors or Family Contact", type: "textarea", width: "full" },
    { label: "GP / District Nurse / Other Professional Visits", type: "textarea", width: "full" },
    { label: "Pending Actions for Next Shift", type: "textarea", width: "full" },
    { label: "Outgoing Staff Signature", type: "text", width: "half" },
    { label: "Time", type: "time", width: "half" },
    { label: "Incoming Staff Signature", type: "text", width: "half" },
    { label: "Time", type: "time", width: "half" },
  ],
};

export const nightToDayTemplate: HandoverTemplate = {
  id: "night-to-day",
  title: "Night-to-Day Handover Template",
  description:
    "Specifically designed for the transition between night staff and day staff. Focuses on overnight events, sleep patterns, early morning routines, and any concerns that day staff need to be aware of immediately.",
  fields: [
    { label: "Home / Unit Name", type: "text", width: "half" },
    { label: "Date", type: "date", width: "half" },
    { label: "Night Staff Names", type: "text", width: "full" },
    { label: "Night Staffing Levels", type: "text", width: "half" },
    { label: "Day Staff Names Receiving Handover", type: "text", width: "half" },
    { label: "Quiet Night / Disturbed Night", type: "select", width: "full", options: ["Quiet — no significant events", "Disturbed — see details below", "Emergency — see incident reports"] },
    { label: "Residents Requiring Immediate Attention (Morning)", type: "textarea", width: "full" },
    { label: "Resident 1 — Name & Room", type: "text", width: "half" },
    { label: "Sleep Quality", type: "select", width: "half", options: ["Slept Well", "Restless", "Woke Several Times", "Did Not Sleep", "Agitated Through Night"] },
    { label: "Night-Time Medication Given", type: "textarea", width: "full" },
    { label: "Pain or Distress During Night", type: "textarea", width: "full" },
    { label: "Incontinence Episodes", type: "text", width: "full" },
    { label: "Actions Taken by Night Staff", type: "textarea", width: "full" },
    { label: "Resident 2 — Name & Room", type: "text", width: "half" },
    { label: "Sleep Quality", type: "select", width: "half", options: ["Slept Well", "Restless", "Woke Several Times", "Did Not Sleep", "Agitated Through Night"] },
    { label: "Night-Time Medication Given", type: "textarea", width: "full" },
    { label: "Pain or Distress During Night", type: "textarea", width: "full" },
    { label: "Incontinence Episodes", type: "text", width: "full" },
    { label: "Actions Taken by Night Staff", type: "textarea", width: "full" },
    { label: "Additional Residents — Continue on Separate Sheet", type: "textarea", width: "full" },
    { label: "Early Morning Call Bells (06:00–07:00)", type: "textarea", width: "full" },
    { label: "Residents Up Early / Wandering", type: "textarea", width: "full" },
    { label: "Breakfast Orders / Special Dietary Needs", type: "textarea", width: "full" },
    { label: "Morning Appointments / Visits", type: "textarea", width: "full" },
    { label: "Any Falls or Incidents Overnight", type: "textarea", width: "full" },
    { label: "Controlled Drug Count Confirmed", type: "select", width: "half", options: ["Yes — Count Correct", "Discrepancy — See Record"] },
    { label: "Night Staff On-Call Contact Used?", type: "select", width: "half", options: ["No", "Yes — See Details"] },
    { label: "On-Call Contact Details (if used)", type: "textarea", width: "full" },
    { label: "Outstanding Actions for Day Staff", type: "textarea", width: "full" },
    { label: "Night Staff Signature", type: "text", width: "half" },
    { label: "Time", type: "time", width: "half" },
    { label: "Day Staff Signature", type: "text", width: "half" },
    { label: "Time", type: "time", width: "half" },
  ],
};

export const residentSummaryTemplate: HandoverTemplate = {
  id: "resident-summary",
  title: "Resident Handover Summary",
  description:
    "A one-page resident summary for quick, effective handover of individual care needs. Can be kept at the nurses' station or at the bedside for easy reference during shift changes.",
  fields: [
    { label: "Resident Full Name", type: "text", width: "half" },
    { label: "Preferred Name", type: "text", width: "half" },
    { label: "Room Number", type: "text", width: "half" },
    { label: "Date of Birth", type: "date", width: "half" },
    { label: "NHS Number", type: "text", width: "half" },
    { label: "GP Name & Practice", type: "text", width: "half" },
    { label: "Next of Kin / Emergency Contact", type: "text", width: "full" },
    { label: "Contact Telephone", type: "text", width: "half" },
    { label: "Relationship to Resident", type: "text", width: "half" },
    { label: "Primary Conditions / Diagnoses", type: "textarea", width: "full" },
    { label: "Allergies", type: "textarea", width: "full" },
    { label: "Current Medications (List All)", type: "textarea", width: "full" },
    { label: "Medication Times Requiring Assistance", type: "textarea", width: "full" },
    { label: "PRN Medications & Indications", type: "textarea", width: "full" },
    { label: "Mobility Level", type: "select", width: "full", options: ["Fully Independent", "Standby Supervision", "One-Person Assist", "Two-Person Assist", "Hoist (Sling Size: ___)", "Wheelchair", "Bedbound"] },
    { label: "Moving & Handling Equipment Required", type: "textarea", width: "full" },
    { label: "Communication Needs", type: "textarea", width: "full" },
    { label: "Hearing / Vision Aids", type: "text", width: "full" },
    { label: "Dietary Requirements / Texture Modified", type: "textarea", width: "full" },
    { label: "Fluid Restriction (ml/day) or Target (ml/day)", type: "text", width: "half" },
    { label: "Weight Monitoring", type: "select", width: "half", options: ["Weekly", "Monthly", "As Required"] },
    { label: "Continence Needs", type: "textarea", width: "full" },
    { label: "Skin Integrity / Pressure Relief", type: "textarea", width: "full" },
    { label: "Waterlow Score", type: "text", width: "half" },
    { label: "Date Last Assessed", type: "date", width: "half" },
    { label: "Mental Capacity Status", type: "select", width: "full", options: ["Has Capacity", "Lacks Capacity — LPA in Place", "Lacks Capacity — Court Appointed Deputy", "Assessment Required", "Best Interest Decision in Place"] },
    { label: "Do Not Attempt Resuscitation (DNAR)", type: "select", width: "half", options: ["No DNAR", "DNAR in Place", "Under Review"] },
    { label: "Advance Care Plan", type: "select", width: "half", options: ["In Place", "Not Yet Completed", "Under Discussion"] },
    { label: "Behavioural Triggers / De-Escalation Notes", type: "textarea", width: "full" },
    { label: "Daily Routine Preferences", type: "textarea", width: "full" },
    { label: "Likes & Dislikes", type: "textarea", width: "full" },
    { label: "Upcoming Appointments / Reviews", type: "textarea", width: "full" },
    { label: "Key Concerns for Incoming Staff", type: "textarea", width: "full" },
    { label: "Completed By (Name & Role)", type: "text", width: "half" },
    { label: "Date Completed", type: "date", width: "half" },
  ],
};

export const allHandoverTemplates = [shiftHandoverTemplate, nightToDayTemplate, residentSummaryTemplate];