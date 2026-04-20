export interface HandHygieneMoment {
  moment: number;
  title: string;
  description: string;
  why: string;
}

export const fiveMomentsOfHandHygiene: HandHygieneMoment[] = [
  {
    moment: 1,
    title: "Before Touching a Resident",
    description:
      "Wash or sanitise your hands before touching a resident or having any contact with their skin, clothing, or personal items.",
    why:
      "Protects the resident from organisms on your hands, including your own flora and organisms picked up from the environment or other residents.",
  },
  {
    moment: 2,
    title: "Before Clean / Aseptic Procedure",
    description:
      "Wash or sanitise your hands immediately before any clean or aseptic procedure, such as wound care, catheter care, or preparing food.",
    why:
      "Protects the resident from organisms entering their body during procedures that bypass natural defence barriers.",
  },
  {
    moment: 3,
    title: "After Body Fluid Exposure Risk",
    description:
      "Wash your hands immediately after any task that involves exposure to body fluids, including after glove removal.",
    why:
      "Protects you and the care environment from organisms that may have transferred to your hands during the procedure or from body fluid contact.",
  },
  {
    moment: 4,
    title: "After Touching a Resident",
    description:
      "Wash or sanitise your hands after touching a resident or having any contact with their skin, clothing, or personal items.",
    why:
      "Protects you and the care environment from organisms that may have transferred to your hands from the resident.",
  },
  {
    moment: 5,
    title: "After Touching Resident Surroundings",
    description:
      "Wash or sanitise your hands after touching any object, surface, or furniture in the resident's immediate environment — even if the resident was not directly touched.",
    why:
      "Protects you and the care environment from organisms that can survive on surfaces and equipment in the resident's surroundings.",
  },
];

export interface HandHygieneStep {
  step: number;
  action: string;
  duration: string;
}

export const handWashingTechnique: HandHygieneStep[] = [
  { step: 1, action: "Wet hands with water", duration: "—" },
  { step: 2, action: "Apply enough soap to cover all hand surfaces", duration: "—" },
  { step: 3, action: "Rub hands palm to palm", duration: "5 seconds" },
  { step: 4, action: "Right palm over left dorsum with interlaced fingers and vice versa", duration: "5 seconds" },
  { step: 5, action: "Palm to palm with fingers interlaced", duration: "5 seconds" },
  { step: 6, action: "Backs of fingers to opposing palms with fingers interlocked", duration: "5 seconds" },
  { step: 7, action: "Rotational rubbing of left thumb clasped in right palm and vice versa", duration: "5 seconds" },
  { step: 8, action: "Rotational rubbing, backwards and forwards, with clasped fingers of right hand in left palm and vice versa", duration: "5 seconds" },
  { step: 9, action: "Rinse hands with water", duration: "—" },
  { step: 10, action: "Dry hands thoroughly with a single-use towel", duration: "—" },
  { step: 11, action: "Use the towel to turn off the tap", duration: "—" },
];

export interface PPEDonningStep {
  step: number;
  action: string;
  detail: string;
}

export const ppeDonningSequence: PPEDonningStep[] = [
  { step: 1, action: "Perform hand hygiene", detail: "Wash or sanitise hands before touching any PPE" },
  { step: 2, action: "Put on apron or gown", detail: "Tie at the back of the waist. Ensure it covers your clothing fully" },
  { step: 3, action: "Put on surgical mask", detail: "Place over nose, mouth, and chin. Mould the nose piece. Check fit" },
  { step: 4, action: "Put on eye protection (if required)", detail: "Goggles or face shield — adjust to fit comfortably" },
  { step: 5, action: "Put on gloves", detail: "Extend gloves over the cuffs of the gown or apron" },
];

export interface PPEDoffingStep {
  step: number;
  action: string;
  detail: string;
}

export const ppeDoffingSequence: PPEDoffingStep[] = [
  { step: 1, action: "Remove gloves", detail: "Grasp the outside of one glove with the opposite gloved hand. Peel off. Hold removed glove in gloved hand. Slide fingers of un-gloved hand under the remaining glove at the wrist. Peel off over the first glove. Dispose of safely" },
  { step: 2, action: "Perform hand hygiene", detail: "Wash or sanitise hands immediately after removing gloves" },
  { step: 3, action: "Remove apron or gown", detail: "Unfasten ties. Pull away from neck and shoulders, touching the inside only. Roll into a bundle and dispose of" },
  { step: 4, action: "Perform hand hygiene", detail: "Wash or sanitise hands after removing apron/gown" },
  { step: 5, action: "Remove eye protection", detail: "Handle by head band or ear pieces only. Place in designated area for reprocessing or disposal" },
  { step: 6, action: "Perform hand hygiene", detail: "Wash or sanitise hands after removing eye protection" },
  { step: 7, action: "Remove mask", detail: "Handle by ties or elastic bands only — do not touch the front. Pull away from face and dispose of" },
  { step: 8, action: "Perform hand hygiene", detail: "Wash or sanitise hands — this is the most critical step" },
];

export interface AuditItem {
  category: string;
  items: string[];
}

export const ipcAuditChecklist: AuditItem[] = [
  {
    category: "Hand Hygiene",
    items: [
      "Alcohol hand rub dispensers available at point of care",
      "Soap and warm water available at all sinks",
      "Paper towels available and stocked",
      "Hand hygiene signage displayed (5 Moments poster)",
      "Staff observed performing hand hygiene at all 5 moments",
      "Hand hygiene compliance rate monitored and recorded",
      "No nail polish or artificial nails observed on clinical staff",
      "Hands and forearms free of watches and jewellery (except plain band)",
    ],
  },
  {
    category: "Personal Protective Equipment (PPE)",
    items: [
      "PPE (gloves, aprons, masks, eye protection) readily available",
      "Correct PPE selected for the task",
      "Staff observed donning PPE in correct sequence",
      "Staff observed doffing PPE in correct sequence",
      "Gloves changed between tasks and between residents",
      "No bare below the elbows compliance observed",
    ],
  },
  {
    category: "Environment and Equipment",
    items: [
      "Communal areas visibly clean and free from clutter",
      "Commodes and toilets cleaned after each use",
      "Cleaning schedules displayed and up to date",
      "Cleaning equipment colour coded appropriately (national colour coding)",
      "PPE and clinical waste bins available and not overflowing",
      "Sharps bins correctly assembled, not overfilled (3/4 line), and dated",
      "Equipment cleaned between each resident use",
      "Spillage kits available for body fluid spillages",
    ],
  },
  {
    category: "Waste Management",
    items: [
      "Waste segregated correctly (clinical, domestic, recyclable)",
      "Waste bins foot-operated or hands-free",
      "Clinical waste bags not overfilled and correctly sealed",
      "Sharps disposed of at point of use",
      "Waste collection schedules maintained",
    ],
  },
  {
    category: "Outbreak Preparedness",
    items: [
      "Outbreak management plan available and up to date",
      "Outbreak box/kit stocked and accessible",
      "Staff trained in outbreak procedures (within last 12 months)",
      "Norovirus and influenza signage available",
      "Contact information for local Health Protection Team displayed",
      "Isolation rooms available and ready for use",
      "Enhanced cleaning protocols documented",
    ],
  },
  {
    category: "Resident Care",
    items: [
      "Residents with infections risk assessed and isolated appropriately",
      "Antibiotic stewardship policy in place",
      "Urinary catheter care bundle in use",
      "Wound care aseptic technique used",
      "Enteral feeding equipment cleaned and maintained",
      "Laundry managed according to infection control policy (separate infected laundry)",
    ],
  },
];