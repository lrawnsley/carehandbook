export interface FireRiskCategory {
  category: string;
  description: string;
  assessmentAreas: string[];
}

export const fireRiskCategories: FireRiskCategory[] = [
  {
    category: "Fire Hazards (Sources of Ignition)",
    description: "Identify anything that could start a fire within the care home.",
    assessmentAreas: [
      "Smoking areas — designated, supervised, with sand buckets and butt bins",
      "Kitchen — cooking equipment, grease build-up, extraction filters",
      "Electrical equipment — PAT testing up to date? Overloaded sockets? Damaged leads?",
      "Heating — portable heaters, boilers, open fires",
      "Laundry — tumble dryer lint build-up, iron equipment",
      "Candles, matches, or lighters in residents' rooms",
      "Hoist chargers and medical equipment",
      "Hot works (if any maintenance activities)",
    ],
  },
  {
    category: "Fire Hazards (Sources of Fuel)",
    description: "Identify materials that could burn and feed a fire.",
    assessmentAreas: [
      "Paper, cardboard, and general waste storage",
      "Furniture and soft furnishings — fire retardant ratings?",
      "Cleaning chemicals and flammable substances",
      "Laundry — large volumes of textiles",
      "Oxygen cylinders or concentrators",
      "Medical supplies packaging",
      "Residents' personal belongings",
    ],
  },
  {
    category: "People at Risk",
    description: "Identify who is at risk and their specific vulnerabilities.",
    assessmentAreas: [
      "Residents with limited mobility — can they evacuate without assistance?",
      "Residents with sensory impairments — hearing or sight loss affecting alarm awareness",
      "Residents with cognitive impairment — may not understand alarms or instructions",
      "Residents who use oxygen or are bed-bound",
      "Staff working alone or in isolated areas",
      "Visitors and contractors unfamiliar with the building layout",
      "Night-time staffing levels — fewer staff available for evacuation",
    ],
  },
  {
    category: "Fire Protection Measures",
    description: "Assess existing fire safety measures and identify gaps.",
    assessmentAreas: [
      "Smoke detectors and fire alarm system — tested weekly, serviced annually?",
      "Emergency lighting — tested monthly, full discharge test annually?",
      "Fire extinguishers — correct types, serviced annually, accessible?",
      "Fire doors — self-closing, no wedging open, intumescent strips and smoke seals intact?",
      "Fire escape routes — clear, signed, illuminated?",
      "Fire assembly point — clearly designated and known to all?",
      "PEEPs (Personal Emergency Evacuation Plans) — drawn up for each resident?",
      "Sprinkler system (if fitted) — maintained and tested?",
    ],
  },
];

export interface PEEPField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const peepFields: PEEPField[] = [
  {
    category: "Resident Information",
    fields: [
      { label: "Full Name", type: "text" },
      { label: "Room Number / Location", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "Date Plan Created", type: "date" },
      { label: "Date Plan Last Reviewed", type: "date" },
    ],
  },
  {
    category: "Mobility & Evacuation Needs",
    fields: [
      { label: "Mobility Level (independent / with aid / requires hoist / bedbound)", type: "text" },
      { label: "Can the Person Walk to the Assembly Point Unaided?", type: "select", options: [] },
      { label: "Evacuation Method (walk / wheelchair / carry sheet / evacuation chair / hoist)", type: "text" },
      { label: "Equipment Needed for Evacuation", type: "textarea" },
      { label: "Number of Staff Required to Assist", type: "text" },
    ],
  },
  {
    category: "Sensory & Cognitive Needs",
    fields: [
      { label: "Does the Person Have Hearing Impairment?", type: "select", options: [] },
      { label: "Does the Person Use a Hearing Aid?", type: "select", options: [] },
      { label: "Does the Person Have Visual Impairment?", type: "select", options: [] },
      { label: "Does the Person Have Cognitive Impairment (dementia, confusion)?", type: "select", options: [] },
      { label: "Will the Person Understand the Fire Alarm?", type: "select", options: [] },
      { label: "Will the Person Cooperate with Evacuation?", type: "select", options: [] },
      { label: "Specific Communication Needs During Evacuation", type: "textarea" },
    ],
  },
  {
    category: "Medical Needs",
    fields: [
      { label: "Does the Person Use Oxygen?", type: "select", options: [] },
      { label: "Is the Person Connected to Medical Equipment?", type: "textarea" },
      { label: "Does the Person Require Medication Urgently?", type: "textarea" },
      { label: "Other Relevant Medical Conditions Affecting Evacuation", type: "textarea" },
    ],
  },
  {
    category: "Evacuation Plan",
    fields: [
      { label: "Primary Evacuation Route", type: "textarea" },
      { label: "Secondary Evacuation Route (if primary is blocked)", type: "textarea" },
      { label: "Designated Staff Member(s) Responsible for This Person", type: "text" },
      { label: "Assembly Point", type: "text" },
      { label: "Special Instructions", type: "textarea" },
    ],
  },
];

export interface EvacuationStep {
  phase: string;
  actions: string[];
}

export const evacuationSteps: EvacuationStep[] = [
  {
    phase: "On Discovering a Fire",
    actions: [
      "Raise the alarm — activate the nearest fire alarm call point",
      "Call 999 — give the address, location of fire, and any persons at risk",
      "Only attempt to fight the fire if it is small and you have been trained, using the correct extinguisher, and you have a clear exit route",
      "Do NOT put yourself at risk",
      "Close doors behind you as you leave the area",
    ],
  },
  {
    phase: "On Hearing the Fire Alarm",
    actions: [
      "Stop all non-essential activities immediately",
      "Commence evacuation procedure — start with the zone of the fire",
      "Evacuate residents using PEEPs — start with those at highest risk",
      "Check all rooms — including bathrooms, toilets, and cupboards",
      "Close doors and windows as you go to contain smoke and fire spread",
      "Do NOT use lifts",
      "Do NOT stop to collect personal belongings",
      "Assist residents with mobility needs first — they take longest to evacuate",
    ],
  },
  {
    phase: "At the Assembly Point",
    actions: [
      "Take the register / resident list and medication administration records",
      "Roll call — account for every resident, staff member, and visitor",
      "Report anyone missing to the fire service immediately",
      "Provide first aid as needed",
      "Do NOT re-enter the building until told it is safe by the fire service",
    ],
  },
  {
    phase: "After the Incident",
    actions: [
      "Record the incident fully in the fire log book",
      "Notify CQC if there was any injury or significant risk",
      "Review and update PEEPs as necessary",
      "Review the fire risk assessment",
      "Debrief staff and address any issues identified",
      "Arrange counselling or support for affected residents and staff",
    ],
  },
];