export interface MUSTScoreStep {
  step: number;
  name: string;
  description: string;
  scoring: { score: number; criteria: string }[];
}

export const mustScoreSteps: MUSTScoreStep[] = [
  {
    step: 1,
    name: "BMI Score",
    description:
      "Calculate the resident's Body Mass Index (BMI) using their measured weight and height. If weight and height cannot be measured, use alternative measures (mid-upper arm circumference) or clinical judgement.",
    scoring: [
      { score: 0, criteria: "BMI > 20.0 (overweight or normal weight)" },
      { score: 1, criteria: "BMI 18.5–20.0 (at risk of malnutrition borderline)" },
      { score: 2, criteria: "BMI < 18.5 (underweight — high risk of malnutrition)" },
    ],
  },
  {
    step: 2,
    name: "Unplanned Weight Loss Score",
    description:
      "Assess the percentage of unplanned weight loss in the last 3–6 months. This can be calculated from previous weight records. A loss of more than 5% in 3 months or 10% in 6 months is significant.",
    scoring: [
      { score: 0, criteria: "Weight loss < 5% in 3 months (or < 10% in 6 months)" },
      { score: 1, criteria: "Weight loss 5–10% in 3 months (or concern about weight loss but figures unavailable)" },
      { score: 2, criteria: "Weight loss > 10% in 3 months (significant malnutrition risk)" },
    ],
  },
  {
    step: 3,
    name: "Acute Disease Effect Score",
    description:
      "Assess whether the resident has an acute condition that has caused or is likely to cause no dietary intake for 5 or more days. Even if intake is reduced but patient is likely to be able to eat, this score may not apply. If no acute disease, score 0.",
    scoring: [
      { score: 0, criteria: "No acute disease effect or patient has been eating normally" },
      { score: 2, criteria: "Acute disease and no nutritional intake for 5+ days (or likely)" },
    ],
  },
];

export interface MUSTRiskCategory {
  totalScore: string;
  risk: string;
  management: string[];
}

export const mustRiskCategories: MUSTRiskCategory[] = [
  {
    totalScore: "0",
    risk: "Low Risk",
    management: [
      "Routine care — continue normal dietary intake",
      "Weigh monthly (or weekly if clinical concern)",
      "Record weight and BMI on care plan",
      "Re-screen at least monthly or on clinical change",
      "Offer food and fluid of appropriate texture and temperature",
      "Document nutritional intake if concern arises",
    ],
  },
  {
    totalScore: "1",
    risk: "Medium Risk",
    management: [
      "Observe and document food and fluid intake for 3 days",
      "Weigh weekly",
      "Encourage nutritious snacks and fortified drinks between meals",
      "Consider referral to dietitian for advice",
      "Set realistic target weight and review weekly",
      "Offer food preferences and choices",
      "Review in 1–2 weeks — if not improving, increase to high risk management",
      "Re-screen monthly",
    ],
  },
  {
    totalScore: "2 or more",
    risk: "High Risk",
    management: [
      "Refer to dietitian within 24–48 hours",
      "Treat underlying condition if possible (e.g., infection, medication side effects)",
      "Provide fortified food and supplements as prescribed",
      "Offer food little and often — 6 small meals/snacks rather than 3 large meals",
      "Record food and fluid intake accurately",
      "Weigh weekly",
      "Consider oral nutritional supplements (ONS) if prescribed",
      "Consider texture-modified diet if swallowing difficulties (IDDSI levels)",
      "Monitor closely — re-weigh weekly, adjust care plan accordingly",
      "Discuss with GP — consider medical investigations if cause unknown",
      "Re-screen weekly until improving",
    ],
  },
];

export interface IDDSILevel {
  level: number;
  name: string;
  description: string;
  examples: string[];
}

export const iddsiLevels: IDDSILevel[] = [
  {
    level: 0,
    name: "Thin",
    description:
      "Fluids that flow through a straw or syringe with no resistance — water, tea, coffee, clear soups, and all normal drinks.",
    examples: ["Water", "Tea", "Coffee", "Fruit juice (no bits)", "Clear soup", "Milk"],
  },
  {
    level: 1,
    name: "Slightly Thick",
    description:
      "Slightly thicker than water — flows through a straw but with mild resistance. Similar to the consistency of an anti-reflux formula.",
    examples: ["Slightly thickened drinks", "Some commercial thickeners at minimum dose", "Buttermilk"],
  },
  {
    level: 2,
    name: "Mildly Thick (Nectar-thick)",
    description:
      "Sippable from a cup — pours slowly off a spoon. Leaves a thin coating on the spoon. Can be drunk through a straw (wide bore).",
    examples: ["Mildly thickened fluids", "Nectar-style juices", "Some cream soups (smooth)"],
  },
  {
    level: 3,
    name: "Moderately Thick (Honey-thick)",
    description:
      "Must be eaten with a spoon — cannot be drunk through a straw. Falls off a spoon slowly but holds its shape briefly on the plate.",
    examples: ["Moderately thickened fluids", "Honey-consistency", "Smooth yogurts", "Thickened soup"],
  },
  {
    level: 4,
    name: "Extremely Thick (Pudding-thick / Puree)",
    description:
      "Must be eaten with a spoon — holds its shape on a plate. Does not flow. Cannot be drunk through a straw. Must not be sticky or clumpy.",
    examples: [
      "Pureed meals (smooth with no lumps)",
      "Pudding-consistency",
      "Smooth mashed potato (no lumps)",
      "Pureed fruits",
    ],
  },
  {
    level: 5,
    name: "Minced & Moist",
    description:
      "Soft and moist food that requires minimal chewing. Food should be cohesive and not fall apart. Particles are 2–4mm. Must not be sticky or crumbly.",
    examples: [
      "Minced meat with thick gravy",
      "Flaked fish in thick sauce",
      "Soft scrambled egg",
      "Porridge with small soft lumps",
    ],
  },
  {
    level: 6,
    name: "Soft & Bite-Sized",
    description:
      "Soft, tender, and bite-sized (1.5cm x 1.5cm). Requires chewing but not hard or crunchy. Must pass the 'fork pressure test' — food yields when pressed with a fork.",
    examples: [
      "Soft cooked vegetables (not hard or crunchy)",
      "Tender casseroles",
      "Soft fruit (without skin or pips)",
      "Well-cooked pasta",
    ],
  },
  {
    level: 7,
    name: "Regular (Easy to Chew / Normal)",
    description:
      "Regular, everyday food textures. May be modified for ease of chewing (Easy to Chew: 7-EC) or be fully regular texture (7-Regular). No restrictions on food type.",
    examples: [
      "Normal meals",
      "All regular food textures",
      "For 7-EC: avoid hard, crunchy, chewy, or sticky items",
    ],
  },
];

export interface FoodFluidColumn {
  time: string;
  meal: string;
  foodDescription: string;
  fluidDescription: string;
  intake: string;
}

export const foodFluidChartTimes: FoodFluidColumn[] = [
  { time: "Breakfast (07:00–09:00)", meal: "Breakfast", foodDescription: "", fluidDescription: "", intake: "" },
  { time: "Mid-morning (10:00–11:00)", meal: "Snack", foodDescription: "", fluidDescription: "", intake: "" },
  { time: "Lunch (12:00–13:00)", meal: "Lunch", foodDescription: "", fluidDescription: "", intake: "" },
  { time: "Mid-afternoon (14:00–15:00)", meal: "Snack", foodDescription: "", fluidDescription: "", intake: "" },
  { time: "Tea (17:00–18:00)", meal: "Tea / Evening Meal", foodDescription: "", fluidDescription: "", intake: "" },
  { time: "Supper (19:00–20:00)", meal: "Supper", foodDescription: "", fluidDescription: "", intake: "" },
];

export const foodFluidChartFields: { category: string; fields: { label: string; type: string; options?: string[]; width?: string }[] }[] = [
  {
    category: "Resident Information",
    fields: [
      { label: "Resident Name", type: "text" },
      { label: "Date of Recording", type: "date" },
      { label: "IDDSI Food Level", type: "text" },
      { label: "IDDSI Fluid Level", type: "text" },
      { label: "Special Dietary Requirements", type: "textarea" },
    ],
  },
];

export interface WeightMonitoringAction {
  category: string;
  trigger: string;
  actions: string[];
}

export const weightMonitoringActions: WeightMonitoringAction[] = [
  {
    category: "Weekly Weighing",
    trigger: "Residents identified as medium or high malnutrition risk (MUST score ≥ 1)",
    actions: [
      "Weigh at the same time of day, ideally before breakfast",
      "Use the same scales each time — record the scale type and serial number",
      "Ensure the resident is wearing similar clothing each time",
      "Record weight to the nearest 0.1 kg",
      "Plot weight on the weight monitoring chart",
      "Calculate percentage weight loss from previous recordings",
    ],
  },
  {
    category: "Monthly Weighing",
    trigger: "Residents at low risk of malnutrition (MUST score 0) and stable weight",
    actions: [
      "Weigh monthly at a consistent time",
      "Record on weight chart",
      "Compare to previous month's weight",
      "Re-screen with MUST if any weight change observed",
    ],
  },
  {
    category: "Significant Weight Loss — Urgent Action",
    trigger: "Unintentional weight loss > 5% in 3 months or > 10% in 6 months",
    actions: [
      "Refer to dietitian within 24–48 hours",
      "Increase frequency of weighing to weekly",
      "Implement high-risk MUST management plan",
      "Review and adjust nutritional care plan",
      "Inform GP and consider medical investigations",
      "Consider oral nutritional supplements if not already prescribed",
      "Document all actions in care plan and daily notes",
    ],
  },
  {
    category: "Dietitian Referral Criteria",
    trigger: "When to refer to a dietitian",
    actions: [
      "MUST score of 2 or more (high risk)",
      "Unintentional weight loss > 5% in 3 months or > 10% in 6 months",
      "BMI < 18.5",
      "Difficulty swallowing requiring texture-modified diet",
      "Poor dietary intake for 5 or more days",
      "Pressure injuries with nutritional implications",
      "Resident requiring enteral feeding support",
      "Complex dietary needs (e.g., renal diet, diabetes management combined with malnutrition)",
    ],
  },
  {
    category: "Recording and Documentation",
    trigger: "Every weighing occasion",
    actions: [
      "Record date, time, and weight in kg",
      "Note if weight is estimated or measured",
      "Note any factors affecting weight (oedema, dehydration, clothing)",
      "Calculate and record percentage weight change",
      "Update MUST screening score",
      "Record actions taken in response to weight changes",
      "Ensure weight is recorded on the care plan and communicated to the team",
    ],
  },
];

export interface TextureModificationGuide {
  level: string;
  foodType: string;
  preparation: string;
  thickenerGuidance: string;
}

export const textureModificationGuide: TextureModificationGuide[] = [
  {
    level: "Level 3 — Moderately Thick (Liquid)",
    foodType: "Drinks, soups, sauces",
    preparation: "Add thickener to reach honey-like consistency. Use prescribed thickener (e.g., Resource ThickenUp, Nutilis). Test by dripping from a spoon — should fall slowly.",
    thickenerGuidance: "Follow manufacturer instructions for dosage. Typically 1–3 scoops per 100ml depending on desired thickness. Always add thickener to liquid and stir briskly for 20–30 seconds. Allow to stand for 1 minute to reach full consistency.",
  },
  {
    level: "Level 4 — Extremely Thick / Puree (Liquid to Food)",
    foodType: "Meals, vegetables, fruits, desserts",
    preparation: "Blend food until completely smooth with no lumps. Add liquid or thickener to achieve a pudding-like consistency. Food should hold its shape on a spoon and plate.",
    thickenerGuidance: "For pureed meals, use potato flakes, thickener, or cornflour to achieve the right consistency. Portion before pureeing to ensure correct texture throughout. Do not serve with separate liquid that could alter the texture.",
  },
  {
    level: "Level 5 — Minced & Moist (Food)",
    foodType: "Meat, fish, vegetables, cereals",
    preparation: "Mince or finely chop food to 2–4mm particles. Food should be moist and cohesive — add thick gravy or sauce to bind. Must pass the 'spoon tilt test' (food slides off spoon with a gentle tilt).",
    thickenerGuidance: "Use commercial thickener in sauces and gravies to bind minced food. Ensure all liquid is absorbed — no separate liquid should pool on the plate. Do not use breadcrumbs or regular flour as a thickener — use prescribed products only.",
  },
  {
    level: "Level 6 — Soft & Bite-Sized (Food)",
    foodType: "Cooked vegetables, tender meat, soft fruit",
    preparation: "Cut food to 1.5cm × 1.5cm pieces (about the size of a pea). Must pass the 'fork pressure test' — food yields when pressed with a fork. No hard, crunchy, or sticky textures.",
    thickenerGuidance: "Thickener may be needed in sauces served with Level 6 food to moisten and bind. Ensure no thin liquids pool on the plate. Avoid dry foods that could crumble.",
  },
  {
    level: "Level 7 — Easy to Chew",
    foodType: "Normal food with modifications",
    preparation: "Soft, tender cooked foods. Avoid hard, crunchy, sticky, or chewy textures. No bones, gristle, or tough skins. Foods should require normal chewing but not excessive effort.",
    thickenerGuidance: "No thickener needed for food. If drinks require modification, follow relevant IDDSI drink level (0–4). Ensure the person can manage the food texture safely before leaving them unattended.",
  },
];