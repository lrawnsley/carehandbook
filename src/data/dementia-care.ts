export interface DementiaType {
  name: string;
  description: string;
  symptoms: string[];
  proportion: string;
}

export const dementiaTypes: DementiaType[] = [
  {
    name: "Alzheimer's Disease",
    description:
      "The most common type of dementia. Caused by abnormal protein deposits (amyloid plaques and tau tangles) that damage brain cells, leading to progressive memory loss and cognitive decline.",
    symptoms: [
      "Difficulty remembering recent events",
      "Problems with language and word-finding",
      "Disorientation in time and place",
      "Poor or impaired judgement",
      "Changes in mood and personality",
      "Difficulty with familiar tasks",
      "Misplacing items or putting them in unusual places",
    ],
    proportion: "60-70% of all dementia cases",
  },
  {
    name: "Vascular Dementia",
    description:
      "Caused by reduced blood flow to the brain, often following a stroke or series of mini-strokes (TIAs). Symptoms may appear suddenly or progress in steps rather than gradually.",
    symptoms: [
      "Problems with planning and organisation",
      "Slowed thinking speed",
      "Difficulty with concentration and attention",
      "Physical weakness or paralysis (on one side)",
      "Problems with walking and balance",
      "Mood changes, including depression",
      "Urinary incontinence (in some cases)",
    ],
    proportion: "15-20% of all dementia cases",
  },
  {
    name: "Dementia with Lewy Bodies (DLB)",
    description:
      "Caused by abnormal protein deposits (Lewy bodies) inside brain cells. Shares symptoms with both Alzheimer's and Parkinson's disease. Fluctuating cognition is a hallmark feature.",
    symptoms: [
      "Fluctuating attention and alertness (good days and bad days)",
      "Visual hallucinations (often people or animals)",
      "Parkinson's-type symptoms (tremor, stiffness, slow movement)",
      "Sleep disturbances (REM sleep behaviour disorder)",
      "Falls and fainting",
      "Severe sensitivity to antipsychotic medication",
      "Problems with spatial awareness",
    ],
    proportion: "10-15% of all dementia cases",
  },
  {
    name: "Frontotemporal Dementia (FTD)",
    description:
      "Caused by damage to the frontal and temporal lobes of the brain. Often affects people at a younger age (45-65) than other dementias. Personality and behaviour changes are typically the first signs.",
    symptoms: [
      "Personality changes and inappropriate behaviour",
      "Loss of social awareness and empathy",
      "Difficulty with language (speaking or understanding)",
      "Obsessive or repetitive behaviours",
      "Changes in eating habits (cravings, overeating)",
      "Lack of insight into own condition",
      "Movement problems in some variants",
    ],
    proportion: "5-10% of all dementia cases",
  },
  {
    name: "Mixed Dementia",
    description:
      "A combination of two or more types of dementia, most commonly Alzheimer's disease and vascular dementia. Mixed dementia is increasingly recognised and may be more common than previously thought, especially in people over 85.",
    symptoms: [
      "Combination of symptoms from the different types present",
      "Memory problems (Alzheimer's component)",
      "Step-like deterioration (vascular component)",
      "May present with more complex symptom patterns",
      "Progressive but with variable speed of decline",
    ],
    proportion: "Up to 50% of dementia in people over 85 may involve mixed pathology",
  },
];

export interface DementiaStage {
  name: string;
  description: string;
  features: string[];
  careFocus: string[];
}

export const dementiaStages: DementiaStage[] = [
  {
    name: "Early / Mild",
    description:
      "The person may still be largely independent but begins to experience noticeable difficulties. Symptoms may be subtle and attributed to normal ageing at first.",
    features: [
      "Forgetfulness, especially recent events",
      "Difficulty finding the right words",
      "Losing track of conversations",
      "Difficulty managing finances or complex tasks",
      "Getting lost in familiar places occasionally",
      "Mood changes — anxiety, frustration, withdrawal",
    ],
    careFocus: [
      "Support independence and choice",
      "Use memory aids (labels, reminders, calendars)",
      "Encourage social engagement and routine",
      "Involve the person in care planning (Mental Capacity Act)",
      "Provide information in accessible formats",
      "Signpost to support services (Alzheimer's Society, Age UK)",
    ],
  },
  {
    name: "Middle / Moderate",
    description:
      "Symptoms become more pronounced. The person needs increasing support with daily activities. Behavioural and psychological symptoms (BPSD) may emerge.",
    features: [
      "Increasing confusion and disorientation",
      "Difficulty recognising familiar people",
      "Problems with personal care and dressing",
      "Behavioural changes — agitation, aggression, wandering",
      "Delusions or hallucinations may develop",
      "Sleep disturbance and sundowning",
      "Difficulty communicating needs",
    ],
    careFocus: [
      "Person-centred care — know the person's history and preferences",
      "Simplify communication — short sentences, one idea at a time",
      "Maintain a calm, consistent environment and routine",
      "Use distraction and validation rather than confrontation",
      "Assess and address unmet needs (pain, hunger, boredom)",
      "Support with nutrition and hydration",
      "Implement falls prevention measures",
      "Complete ABC charts for distressed behaviour",
    ],
  },
  {
    name: "Late / Severe",
    description:
      "The person is highly dependent on others for all aspects of care. Communication may be very limited. Physical symptoms become more prominent.",
    features: [
      "Very limited verbal communication",
      "Unable to recognise close family members",
      "Increasingly immobile — may become bedbound",
      "Difficulty swallowing (dysphagia)",
      "Incontinence",
      "Vulnerability to infections (especially chest and urinary)",
      "Weight loss and frailty",
    ],
    careFocus: [
      "Focus on comfort, dignity, and quality of life",
      "Palliative care approach — symptom management",
      "Pain assessment using appropriate tools (e.g., Abbey Pain Scale)",
      "Support nutrition with texture-modified food and thickened fluids (IDDSI)",
      "Regular repositioning for pressure area care",
      "Maintain sensory connections — music, touch, scent",
      "Support families and facilitate end of life conversations",
      "Anticipatory care planning and DNACPR discussions",
    ],
  },
];

export interface CommunicationTip {
  category: string;
  do: string[];
  dont: string[];
}

export const communicationTips: CommunicationTip[] = [
  {
    category: "Getting Attention",
    do: [
      "Approach from the front where possible",
      "Use the person's preferred name",
      "Make eye contact (respect cultural preferences)",
      "Gain attention before speaking — gentle touch on arm if appropriate",
    ],
    dont: [
      "Startle the person from behind",
      "Speak from another room",
      "Assume the person has heard you if they haven't responded",
    ],
  },
  {
    category: "Speaking",
    do: [
      "Speak clearly and at a slightly slower pace",
      "Use short, simple sentences",
      "Give one piece of information at a time",
      "Allow extra time for the person to process and respond",
      "Use a calm, warm tone of voice",
    ],
    dont: [
      "Use complex or long sentences",
      "Rush the person or finish their sentences",
      "Use jargon, idioms, or sarcasm",
      "Shout or raise your voice",
      "Talk over the person or to others about them as if they're not there",
    ],
  },
  {
    category: "Non-Verbal Communication",
    do: [
      "Use gestures and point to objects",
      "Maintain open and relaxed body language",
      "Use facial expressions to convey warmth and reassurance",
      "Ensure good lighting and reduce background noise",
      "Sit at the person's level",
    ],
    dont: [
      "Stand over the person or loom",
      "Cross your arms or appear defensive",
      "Rely on written communication alone (reading may be affected)",
      "Underestimate the power of touch and presence",
    ],
  },
  {
    category: "Active Listening",
    do: [
      "Listen carefully and try to understand the emotion behind words",
      "Repeat back what you think the person means",
      "Validate feelings even if the facts are incorrect",
      "Use phrases like 'I can see you're upset' or 'Tell me more'",
      "Be patient — silence can be meaningful",
    ],
    dont: [
      "Correct the person aggressively or argue with their reality",
      "Dismiss feelings or say 'don't be silly'",
      "Ignore attempts to communicate",
      "Assume non-verbal responses mean understanding",
    ],
  },
];

export interface BehaviourStrategy {
  behaviour: string;
  possibleCauses: string[];
  approaches: string[];
}

export const distressedBehaviourStrategies: BehaviourStrategy[] = [
  {
    behaviour: "Agitation and Restlessness",
    possibleCauses: [
      "Pain or physical discomfort",
      "Unmet needs (hunger, thirst, toilet)",
      "Overstimulation (noise, clutter, crowds)",
      "Boredom or lack of meaningful activity",
      "Infection (urinary tract infection common)",
      "Medication side effects",
    ],
    approaches: [
      "Rule out pain and physical causes first",
      "Offer food, drink, or toilet",
      "Reduce stimulation — move to a quiet area",
      "Provide reassuring touch if appropriate",
      "Offer a calming activity (music, walking, folding)",
      "Use validation — acknowledge the person's feelings",
      "Avoid restraint or coercion",
    ],
  },
  {
    behaviour: "Verbal Aggression (Shouting, Swearing)",
    possibleCauses: [
      "Fear or feeling threatened",
      "Frustration at inability to communicate",
      "Pain or physical discomfort",
      "Delusions or hallucinations",
      "Depression or anxiety",
      "Feeling rushed or patronised",
    ],
    approaches: [
      "Stay calm and keep a neutral expression",
      "Do not argue back or take it personally",
      "Give the person space — do not crowd",
      "Speak softly and slowly",
      "Validate the emotion: 'I can see you're upset'",
      "Identify and address the root cause",
      "Document using ABC chart",
      "Consider referral to GP or community mental health team",
    ],
  },
  {
    behaviour: "Wandering",
    possibleCauses: [
      "Searching for something or someone (e.g., going 'home')",
      "Unmet physical need (toilet, food)",
      "Boredom or restlessness",
      "Disorientation in time",
      "Previous routine (e.g., going to work)",
    ],
    approaches: [
      "Ensure the environment is safe and secure",
      "Identify the pattern — time of day, triggers",
      "Provide purposeful activities and exercise",
      "Ensure adequate supervision",
      "Consider a 'wander guard' or alarm system",
      "Register with the Herbert Protocol (police missing person scheme)",
      "Ensure the person has identification on them",
      "Walk with the person — don't try to stop them forcefully",
    ],
  },
  {
    behaviour: "Refusal of Care",
    possibleCauses: [
      "Not understanding what is being asked",
      "Fear or past trauma",
      "Depression",
      "Feeling too hot or cold",
      "Pain",
      "Not recognising the caregiver",
    ],
    approaches: [
      "Step back and try again later",
      "Use simple, clear language — explain what you are doing",
      "Build rapport before attempting care",
      "Use a different approach or different caregiver",
      "Ensure the environment is comfortable",
      "Assess mental capacity for the specific decision",
      "Document refusal and the reasons given",
    ],
  },
];

export const gettingToKnowMeFields = [
  { section: "About Me", fields: [
    { label: "Full Name", type: "text" },
    { label: "Preferred Name", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "Place of Birth", type: "text" },
    { label: "Important People in My Life", type: "textarea" },
    { label: "Languages Spoken", type: "text" },
  ]},
  { section: "My Daily Routine", fields: [
    { label: "How I Like to Start My Day", type: "textarea" },
    { label: "Morning Routine Preferences", type: "textarea" },
    { label: "How I Spend My Afternoons", type: "textarea" },
    { label: "Evening / Bedtime Preferences", type: "textarea" },
  ]},
  { section: "Likes & Dislikes", fields: [
    { label: "Favourite Foods & Drinks", type: "textarea" },
    { label: "Foods I Don't Like", type: "textarea" },
    { label: "Music & Entertainment I Enjoy", type: "textarea" },
    { label: "Activities I Like", type: "textarea" },
    { label: "Things That Bother Me", type: "textarea" },
  ]},
  { section: "My Life History", fields: [
    { label: "Where I Grew Up", type: "text" },
    { label: "Work & Career", type: "textarea" },
    { label: "Family & Relationships", type: "textarea" },
    { label: "Hobbies & Interests Over the Years", type: "textarea" },
    { label: "Important Memories & Achievements", type: "textarea" },
  ]},
  { section: "Communication", fields: [
    { label: "How I Communicate Best", type: "textarea" },
    { label: "Words or Phrases I Use for Things", type: "textarea" },
    { label: "How I Show I'm Happy", type: "text" },
    { label: "How I Show I'm Upset or Anxious", type: "text" },
  ]},
  { section: "What Makes Me Happy / Anxious", fields: [
    { label: "What Makes Me Happy and Content", type: "textarea" },
    { label: "What Makes Me Anxious or Upset", type: "textarea" },
    { label: "How to Reassure Me When I'm Anxious", type: "textarea" },
    { label: "How I Like to Be Supported", type: "textarea" },
  ]},
];