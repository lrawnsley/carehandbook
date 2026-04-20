export interface ACPField {
  category: string;
  fields: { label: string; type: string; options?: string[]; width?: string }[];
}

export const advanceCarePlanFields: ACPField[] = [
  {
    category: "Personal Details",
    fields: [
      { label: "Full Name", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "NHS Number", type: "text" },
      { label: "Key Contact / Next of Kin", type: "text" },
      { label: "GP Name and Practice", type: "text" },
    ],
  },
  {
    category: "Understanding My Condition",
    fields: [
      { label: "Current Diagnosis / Conditions", type: "textarea" },
      { label: "What I Understand About My Condition", type: "textarea" },
      { label: "What Matters Most to Me", type: "textarea" },
    ],
  },
  {
    category: "My Wishes for Future Care",
    fields: [
      { label: "Where I Would Like to Be Cared For", type: "text" },
      { label: "What Treatments I Would Want", type: "textarea" },
      { label: "What Treatments I Would NOT Want", type: "textarea" },
      { label: "My Views on Cardiopulmonary Resuscitation (CPR)", type: "textarea" },
      { label: "My Views on Hospital Admission", type: "textarea" },
      { label: "My Views on Artificial Nutrition and Hydration", type: "textarea" },
      { label: "Any Other Wishes or Preferences", type: "textarea" },
    ],
  },
  {
    category: "Legal Documents",
    fields: [
      { label: "Advance Decision to Refuse Treatment (ADRT) in Place?", type: "select", options: [] },
      { label: "Lasting Power of Attorney (Health & Welfare) in Place?", type: "select", options: [] },
      { label: "If Yes — Attorney Name and Contact", type: "text" },
      { label: "DNACPR / ReSPECT Form in Place?", type: "select", options: [] },
      { label: "DoLS Authorisation in Place?", type: "select", options: [] },
    ],
  },
  {
    category: "Comfort and Quality of Life",
    fields: [
      { label: "What Gives Me Comfort and Joy", type: "textarea" },
      { label: "How I Like to Be Supported When Unwell", type: "textarea" },
      { label: "Spiritual or Religious Needs", type: "textarea" },
      { label: "Who I Want With Me When I Am Dying", type: "textarea" },
      { label: "My Funeral Wishes (if discussed)", type: "textarea" },
    ],
  },
  {
    category: "Review",
    fields: [
      { label: "Date of Discussion", type: "date" },
      { label: "Discussed With (names and roles)", type: "textarea" },
      { label: "Date to Review This Plan", type: "date" },
      { label: "Signature of Person (or How Consent Was Gained)", type: "text" },
      { label: "Signature of Lead Professional", type: "text" },
    ],
  },
];

export interface DyingSign {
  category: string;
  signs: { sign: string; explanation: string }[];
}

export const recognisingDyingSigns: DyingSign[] = [
  {
    category: "Physical Signs",
    signs: [
      { sign: "Progressive weakness and fatigue", explanation: "The person becomes increasingly drowsy, spends more time sleeping, and may be difficult to rouse. This is a normal part of the dying process." },
      { sign: "Reduced food and fluid intake", explanation: "As the body slows down, the need for food and drink decreases naturally. Forcing food or fluids can cause discomfort. Offer small sips if the person is able." },
      { sign: "Changes in breathing pattern", explanation: "Breathing may become irregular — Cheyne-Stokes breathing (cycles of deep and shallow breaths) or periods of apnoea (pauses). This can be distressing to observe but is not usually uncomfortable for the person." },
      { sign: "Noisy or rattling breathing", explanation: "Often called 'death rattle' — caused by secretions pooling in the throat when the person can no longer swallow. Repositioning on their side can help. Anticholinergic medication may be prescribed." },
      { sign: "Skin changes", explanation: "Extremities (hands and feet) may become cool, pale, mottled, or cyanotic (blue-purple). The skin may become fragile. This is due to reduced circulation." },
      { sign: "Urinary and bowel changes", explanation: "Urine output decreases and may become darker. Loss of continence may occur. Constipation is common if the person is on opioid medication." },
      { sign: "Restlessness and agitation", explanation: "Terminal agitation can occur — the person may pick at bedclothes, appear distressed, or call out. This should be assessed — it could indicate pain, urinary retention, or delirium." },
    ],
  },
  {
    category: "Psychological and Cognitive Signs",
    signs: [
      { sign: "Increasing drowsiness", explanation: "The person spends increasing amounts of time asleep and may be difficult to wake. When awake, they may be confused or disoriented." },
      { sign: "Communication changes", explanation: "Speech may become slower, softer, or less coherent. Eventually, the person may stop speaking altogether but may still hear and understand." },
      { sign: "Visions or dream-like experiences", explanation: "Some people describe seeing or speaking to people who have died. This is common and should be accepted respectfully — do not dismiss or argue." },
      { sign: "Withdrawal", explanation: "The person may become less interested in their surroundings and social interaction. This is a natural part of the process of letting go." },
      { sign: "Surge of energy", explanation: "Occasionally, a dying person may have a brief period of increased alertness or energy — sometimes called a 'terminal lucidity'. This can give families false hope and is not a sign of recovery." },
    ],
  },
];

export interface AnticipatoryMedication {
  medication: string;
  indication: string;
  route: string;
  notes: string;
}

export const anticipatoryMedications: AnticipatoryMedication[] = [
  {
    medication: "Diamorphine (or Morphine)",
    indication: "Pain and breathlessness",
    route: "SC injection or syringe driver",
    notes: "For opioid-naïve patients, start at low dose (e.g., diamorphine 2.5–5mg SC 4-hourly PRN). Monitor for sedation and respiratory depression.",
  },
  {
    medication: "Midazolam",
    indication: "Agitation, restlessness, seizures",
    route: "SC injection or syringe driver",
    notes: "2.5–5mg SC PRN. Can also be given via buccal route. Particularly useful for terminal agitation not responding to non-pharmacological measures.",
  },
  {
    medication: "Glycopyrronium (or Hyoscine butylbromide)",
    indication: "Respiratory secretions ('death rattle')",
    route: "SC injection or syringe driver",
    notes: "200mcg SC 4–6 hourly PRN. Must be given early for best effect — once secretions are established, effectiveness is limited. Reposition the person on their side.",
  },
  {
    medication: "Levomepromazine",
    indication: "Nausea and vomiting, also agitation",
    route: "SC injection or syringe driver",
    notes: "2.5–5mg SC PRN for nausea. Higher doses (12.5–25mg) can be used for agitation. Has sedative properties.",
  },
  {
    medication: "Metoclopramide or Cyclizine",
    indication: "Nausea and vomiting",
    route: "SC injection",
    notes: "Alternative to levomepromazine. Cyclizine 50mg SC 8-hourly. Metoclopramide is not suitable for bowel obstruction.",
  },
];

export interface ComfortMeasure {
  category: string;
  measures: string[];
}

export const comfortMeasures: ComfortMeasure[] = [
  {
    category: "Physical Comfort",
    measures: [
      "Regular mouth care — moisten lips with swabs, offer small sips of water if safe to swallow",
      "Position for comfort — on the side with pillows for support if unable to sit up",
      "Keep the person clean and dry — gentle personal care",
      "Manage pain proactively — assess using appropriate tools",
      "Ensure the room is a comfortable temperature and well-ventilated",
      "Reduce unnecessary interventions (e.g., routine observations if they cause distress)",
      "Use a syringe driver if multiple SC medications needed — reduces injection frequency",
      "Consider catheterisation only if urinary retention is causing distress",
      "Gentle massage with unscented lotion can be soothing",
    ],
  },
  {
    category: "Emotional and Spiritual Support",
    measures: [
      "Be present — sit with the person, hold their hand if appropriate",
      "Speak gently and reassuringly — hearing is thought to be the last sense to go",
      "Play the person's favourite music softly",
      "Read aloud from a preferred book, prayer, or religious text",
      "Facilitate visits from family and important people",
      "Support the person's spiritual or religious practices",
      "Create a calm, peaceful environment — dim harsh lighting, reduce noise",
      "Acknowledge and validate family members' feelings",
    ],
  },
  {
    category: "Supporting Family and Carers",
    measures: [
      "Explain what is happening and what to expect — demystify the dying process",
      "Encourage family to talk to and be with the person",
      "Offer refreshments and a private space for family",
      "Provide written information about the dying process",
      "Discuss after-death arrangements sensitively if the family wishes",
      "Offer referral to bereavement support services",
      "Ensure family know who to contact for support after the death",
    ],
  },
];