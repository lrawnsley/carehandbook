export interface CQCKeyQuestion {
  name: string;
  description: string;
  keyAreas: string[];
}

export const fiveKeyQuestions: CQCKeyQuestion[] = [
  {
    name: "Safe",
    description:
      "People are protected from abuse and avoidable harm. Safeguarding systems are in place, risks are assessed and managed, and staffing is sufficient to keep people safe.",
    keyAreas: [
      "Safeguarding and protection from abuse",
      "Staffing levels and skill mix",
      "Medicines management and safety",
      "Assessment and management of risk",
      "Learning from safety incidents",
      "Safe recruitment practices",
      "Premises and equipment safety",
    ],
  },
  {
    name: "Effective",
    description:
      "People's care, treatment and support achieves good outcomes, promotes a good quality of life, and is based on the best available evidence. Staff are competent and work within their scope of practice.",
    keyAreas: [
      "Assessment of needs and choices",
      "Delivery of evidence-based care and treatment",
      "Staff competence, training, and development",
      "Consent to care and treatment",
      "Nutrition and hydration needs met",
      "Physical, mental, and emotional wellbeing outcomes",
      "Cooperation with other providers and professionals",
    ],
  },
  {
    name: "Caring",
    description:
      "People are treated with kindness, dignity, and respect. Staff involve people in decisions about their care and ensure their preferences and needs are understood and met.",
    keyAreas: [
      "Kindness, compassion, and dignity",
      "Treating people as individuals",
      "Respecting people's independence and privacy",
      "Involving people in decisions about their care",
      "Emotional support and wellbeing",
      "Listening to and acting on people's views",
    ],
  },
  {
    name: "Responsive",
    description:
      "Services are organised so that they meet people's needs. Care is personalised, people's preferences and choices are respected, and services adapt to changing needs.",
    keyAreas: [
      "Personalised care and support planning",
      "Responding to people's changing needs",
      "Access to care and support when needed",
      "End of life care and palliative support",
      "Complaints handling and learning from feedback",
      "Equality, diversity, and human rights",
    ],
  },
  {
    name: "Well-led",
    description:
      "Leadership, management, and governance assure the delivery of high-quality, person-centred care. There is a clear vision and strategy, an open and fair culture, and continuous learning and improvement.",
    keyAreas: [
      "Clear vision and strategy",
      "Open, inclusive, and fair culture",
      "Governance and accountability systems",
      "Continuous learning and improvement",
      "Engaging with people who use services",
      "Working in partnership with stakeholders",
      "Leadership and management capability",
    ],
  },
];

export interface FundamentalStandard {
  regulation: string;
  title: string;
  summary: string;
}

export const fundamentalStandards: FundamentalStandard[] = [
  {
    regulation: "Regulation 9",
    title: "Person-Centred Care",
    summary:
      "Care and treatment must be appropriate, meet service users' needs, and reflect their preferences. Providers must consult with service users about their care and act on what they say.",
  },
  {
    regulation: "Regulation 10",
    title: "Dignity and Respect",
    summary:
      "Service users must be treated with dignity and respect at all times. This includes respecting their privacy, supporting their independence, and valuing them as individuals.",
  },
  {
    regulation: "Regulation 11",
    title: "Consent",
    summary:
      "Care and treatment must only be provided with the consent of the service user. Where a person lacks capacity, the Mental Capacity Act 2005 and Deprivation of Liberty Safeguards must be followed.",
  },
  {
    regulation: "Regulation 12",
    title: "Safe Care and Treatment",
    summary:
      "Care and treatment must be provided in a safe way. Providers must assess risks to health and safety, do everything reasonably practicable to mitigate them, and ensure proper medicines management.",
  },
  {
    regulation: "Regulation 13",
    title: "Safeguarding",
    summary:
      "Service users must be protected from abuse and improper treatment. Providers must have safeguarding policies, train staff, and work with local authorities to investigate any concerns.",
  },
  {
    regulation: "Regulation 14",
    title: "Nutrition and Hydration",
    summary:
      "Service users' nutritional and hydration needs must be met. This includes adequate food and drink that meets their needs, preferences, and any special dietary requirements.",
  },
  {
    regulation: "Regulation 15",
    title: "Premises and Equipment",
    summary:
      "Premises and equipment must be clean, secure, suitable, and properly maintained. Providers must ensure facilities are fit for purpose and support the delivery of safe care.",
  },
  {
    regulation: "Regulation 16",
    title: "Complaints",
    summary:
      "Providers must have an accessible complaints system and respond to complaints effectively. Complainants must receive a timely response and information about any action taken.",
  },
  {
    regulation: "Regulation 17",
    title: "Good Governance",
    summary:
      "Providers must have systems and processes to assess, monitor, and improve the quality and safety of services. They must maintain accurate records and use information about safety and quality to drive improvement.",
  },
  {
    regulation: "Regulation 18",
    title: "Staffing",
    summary:
      "Providers must employ sufficient numbers of suitably qualified, competent, and experienced staff to meet service users' needs. Staff must receive appropriate training, support, and supervision.",
  },
  {
    regulation: "Regulation 19",
    title: "Fit and Proper Persons (Directors)",
    summary:
      "Directors or equivalent must be fit and proper persons. Providers must not appoint anyone who has been responsible for malpractice or mismanagement.",
  },
  {
    regulation: "Regulation 20",
    title: "Duty of Candour",
    summary:
      "Providers must be open and transparent with service users about their care and treatment. When something goes wrong, they must apologise, explain what happened, and describe what will be done to prevent recurrence.",
  },
];

export interface InspectionRating {
  level: string;
  description: string;
  colour: string;
}

export const inspectionRatings: InspectionRating[] = [
  {
    level: "Outstanding",
    description:
      "The service is performing exceptionally well. Practice is innovative, effective, and significantly exceeds the standards required.",
    colour: "bg-green-700 text-white",
  },
  {
    level: "Good",
    description:
      "The service is performing well and meeting expectations. Care is safe, effective, caring, responsive, and well-led.",
    colour: "bg-green-500 text-white",
  },
  {
    level: "Requires Improvement",
    description:
      "The service is not performing well enough and needs to improve. One or more of the five key questions is rated as requires improvement.",
    colour: "bg-amber-500 text-white",
  },
  {
    level: "Inadequate",
    description:
      "The service is performing badly. There are serious concerns and the CQC will take enforcement action to protect people.",
    colour: "bg-red-600 text-white",
  },
];