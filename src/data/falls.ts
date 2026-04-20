export interface FallRiskFactor {
  category: string;
  factors: string[];
}

export const fallRiskFactors: FallRiskFactor[] = [
  {
    category: "Intrinsic (Personal) Risk Factors",
    factors: [
      "History of previous falls (strongest single predictor)",
      "Age over 65 (risk increases significantly with age)",
      "Mobility problems — gait instability, muscle weakness, balance disorders",
      "Visual impairment — cataracts, macular degeneration, poor lighting needs",
      "Cognitive impairment — dementia, confusion, delirium",
      "Urinary incontinence or urgency (rushing to the toilet)",
      "Orthostatic hypotension — dizziness on standing",
      "Acute illness — infection, dehydration, anaemia",
      "Depression or anxiety",
      "Fear of falling (leads to reduced activity and deconditioning)",
      "Sensory deficits — neuropathy, poor proprioception",
      "Chronic conditions — Parkinson's, stroke, arthritis",
    ],
  },
  {
    category: "Extrinsic (Environmental) Risk Factors",
    factors: [
      "Slippery or wet floors",
      "Uneven flooring, loose rugs, or trailing cables",
      "Poor lighting (especially at night)",
      "Lack of handrails or grab rails",
      "Inappropriate footwear (slippery soles, loose-fitting shoes)",
      "Cluttered walkways and corridors",
      "Furniture at unsafe heights (bed too high or too low)",
      "Missing or ill-fitting mobility aids",
      "Inappropriate use of walking aids",
      "Lack of call bell access or response delay",
    ],
  },
  {
    category: "Medication-Related Risk Factors",
    factors: [
      "Sedatives and hypnotics (e.g., benzodiazepines, z-drugs)",
      "Antipsychotic medication",
      "Antidepressants (especially SSRIs and TCAs)",
      "Antihypertensives (causing postural hypotension)",
      "Diuretics (causing urgency and dehydration)",
      "Hypoglycaemic agents (risk of low blood sugar)",
      "Opioid analgesics (sedation, dizziness)",
      "Polypharmacy (4+ medications increases fall risk significantly)",
      "Recent medication changes",
    ],
  },
];

export interface PreventionStrategy {
  category: string;
  strategies: string[];
}

export const preventionStrategies: PreventionStrategy[] = [
  {
    category: "Environmental Safety",
    strategies: [
      "Conduct environmental risk assessments on admission and regularly thereafter",
      "Ensure adequate lighting, especially at night (night lights in bedrooms and corridors)",
      "Remove loose rugs, trailing wires, and clutter from walkways",
      "Install handrails in corridors and grab rails in bathrooms and toilets",
      "Use non-slip mats in bathrooms",
      "Ensure beds are at the correct height for safe transfers",
      "Keep call bells within easy reach at all times",
      "Ensure resident's walking aids are accessible and in good repair",
      "Maintain even flooring and repair damage promptly",
      "Ensure wet floor signs are used and wet areas cleaned promptly",
    ],
  },
  {
    category: "Medication Review",
    strategies: [
      "Request medication review from GP or pharmacist for all residents at risk",
      "Review psychotropic medication regularly (NICE recommends 3-monthly for antipsychotics in dementia)",
      "Reduce polypharmacy where possible — deprescribe where appropriate",
      "Monitor for side effects of medications that increase fall risk",
      "Ensure 'when required' (PRN) sedating medications are used cautiously",
      "Record and report any new symptoms after medication changes",
    ],
  },
  {
    category: "Exercise and Mobility",
    strategies: [
      "Promote regular physical activity appropriate to the resident's ability",
      "Refer to physiotherapy for strength and balance training",
      "Encourage walking with appropriate aids rather than relying on wheelchairs",
      "Include seated exercises for residents with limited mobility",
      "Support occupational therapy input for functional mobility",
      "Ensure continence care to avoid urgent rushes to the toilet",
      "Reduce sedentary time — encourage movement throughout the day",
    ],
  },
  {
    category: "Individual Care Planning",
    strategies: [
      "Complete a falls risk assessment on admission and after any fall",
      "Develop an individualised falls prevention care plan",
      "Review the care plan after every fall or near-miss",
      "Ensure all staff are aware of residents at high risk",
      "Use visual identifiers for high-risk residents (e.g., coloured wristband, symbol on door)",
      "Ensure adequate supervision and staffing levels",
      "Consider assistive technology — bed sensors, chair sensors, alarm mats",
    ],
  },
];

export interface PostFallAction {
  phase: string;
  actions: string[];
}

export const postFallProtocol: PostFallAction[] = [
  {
    phase: "Immediate Actions (First 10 Minutes)",
    actions: [
      "Do NOT rush to move the resident — stay calm and reassure them",
      "Assess for injury — check for pain, deformity, bleeding, or head injury",
      "Check consciousness level and responsiveness",
      "Observe for signs of fracture — swelling, deformity, inability to move limb",
      "Check for signs of head injury — confusion, unequal pupils, vomiting, headache",
      "If a serious injury is suspected — do NOT move the resident, call 999",
      "If no serious injury — assist the resident up slowly using appropriate moving and handling technique (use hoist if needed)",
      "Stay with the resident and provide comfort",
      "Inform the nurse in charge immediately",
    ],
  },
  {
    phase: "Assessment (Within 1 Hour)",
    actions: [
      "Complete neurological observations if head injury suspected (GCS or AVPU scale)",
      "Record baseline observations — blood pressure, pulse, oxygen saturation",
      "Assess for pain and administer prescribed analgesia if needed",
      "Check skin for grazes, bruising, or lacerations — clean and dress wounds",
      "Check for signs of fracture — request X-ray if suspected",
      "Review medications — consider contribution to fall",
      "Assess for delirium (4AT or CAM tool)",
      "Record full details in the incident report",
    ],
  },
  {
    phase: "Monitoring (Next 24-48 Hours)",
    actions: [
      "Increase observation frequency for at least 48 hours post-fall",
      "Continue neurological observations if indicated (2-hourly initially)",
      "Monitor for delayed symptoms — worsening pain, swelling, confusion",
      "Offer food, fluids, and comfort measures",
      "Ensure the resident can reach the call bell",
      "Review and update the falls prevention care plan",
      "Consider referral to falls clinic or physiotherapy",
    ],
  },
  {
    phase: "Reporting and Review",
    actions: [
      "Complete the incident/accident report form",
      "Notify the registered manager and family/next of kin",
      "Notify CQC if the fall resulted in serious injury (Regulation 18 notification)",
      "Hold a post-fall review meeting — what happened and why?",
      "Review the falls risk assessment and update as necessary",
      "Review the environment — was there a hazard that needs to be addressed?",
      "Review medications — did any contribute to the fall?",
      "Share learning with the care team — update care plan and risk assessment",
      "Record in 24-hour log and handover",
    ],
  },
];