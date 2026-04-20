export interface StaffSubPage {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const staffSubPages: StaffSubPage[] = [
  {
    slug: "induction",
    title: "Induction & Training",
    description:
      "CQC Regulation 18, the Care Certificate, mandatory training topics, and ongoing continuing professional development (CPD).",
    icon: "🎓",
    href: "/staff-resources/induction",
  },
  {
    slug: "supervision-appraisal",
    title: "Supervision & Appraisal",
    description:
      "CQC requirements for one-to-one supervision, annual appraisal, and professional development planning for care staff.",
    icon: "🤝",
    href: "/staff-resources/supervision-appraisal",
  },
  {
    slug: "employment-rights",
    title: "Employment Rights",
    description:
      "Contracts, Working Time Regulations, National Minimum Wage, grievance procedures, and trade union support.",
    icon: "⚖️",
    href: "/staff-resources/employment-rights",
  },
  {
    slug: "teamwork-communication",
    title: "Teamwork & Communication",
    description:
      "Effective handover, multi-disciplinary working, conflict resolution, and documentation standards in care settings.",
    icon: "💬",
    href: "/staff-resources/teamwork-communication",
  },
];

export interface CareCertificateStandard {
  number: number;
  title: string;
  description: string;
}

export const careCertificateStandards: CareCertificateStandard[] = [
  { number: 1, title: "Understand Your Role", description: "Your job description, employment rights, responsibilities, and the aims and values of your organisation." },
  { number: 2, title: "Your Personal Development", description: "How to identify your learning needs, create a personal development plan, and engage in reflective practice." },
  { number: 3, title: "Duty of Care", description: "Your legal obligation to provide safe and appropriate care, and the importance of working within your scope of practice." },
  { number: 4, title: "Equality and Diversity", description: "Respecting and promoting each person's individuality, diversity, and human rights, and challenging discrimination." },
  { number: 5, title: "Work in a Person-Centred Way", description: "Putting the person at the centre of their care, respecting their preferences, and supporting their independence." },
  { number: 6, title: "Communication", description: "Effective communication skills, including verbal, non-verbal, and written communication, and the importance of accurate record-keeping." },
  { number: 7, title: "Privacy and Dignity", description: "Maintaining people's privacy and dignity in all aspects of care, including personal care, conversations, and information sharing." },
  { number: 8, title: "Fluids and Nutrition", description: "Supporting people to maintain adequate hydration and nutrition, and recognising signs of poor intake or dehydration." },
  { number: 9, title: "Awareness of Mental Health, Dementia, and Learning Disability", description: "Understanding common conditions, how they affect people, and how to provide effective and compassionate support." },
  { number: 10, title: "Safeguarding Adults", description: "Recognising signs of abuse, understanding your duty to report concerns, and knowing how to respond to disclosures." },
  { number: 11, title: "Safeguarding Children", description: "Awareness of safeguarding responsibilities towards children and young people, including recognising signs of abuse and reporting concerns." },
  { number: 12, title: "Basic Life Support", description: "Knowledge of cardiopulmonary resuscitation (CPR) and basic first aid, appropriate to your role and working environment." },
  { number: 13, title: "Health and Safety", description: "Understanding of health and safety legislation, risk assessment, safe moving and handling, infection control, and fire safety." },
  { number: 14, title: "Handling Information", description: "How to handle confidential information correctly, including data protection, record-keeping, and information sharing." },
  { number: 15, title: "Infection Prevention and Control", description: "Understanding how infections spread and the measures to prevent and control them, including hand hygiene and PPE." },
];

export interface MandatoryTraining {
  topic: string;
  frequency: string;
  description: string;
}

export const mandatoryTrainingTopics: MandatoryTraining[] = [
  { topic: "Health and Safety at Work", frequency: "Annual", description: "Overview of the Health and Safety at Work etc. Act 1974, employer and employee responsibilities, risk assessment, and safe working practices." },
  { topic: "Moving and Handling", frequency: "Annual", description: "Safe principles of moving and handling, use of hoists and slings, risk assessment for manual handling tasks, and relevant legislation." },
  { topic: "Infection Prevention and Control", frequency: "Annual", description: "Hand hygiene, PPE use, sharps management, outbreak management, and the chain of infection." },
  { topic: "Safeguarding Adults", frequency: "Annual (Level 1/2); 3-yearly (Level 3)", description: "Recognising abuse, reporting concerns, the Care Act 2014 safeguarding duties, and Making Safeguarding Personal." },
  { topic: "Fire Safety", frequency: "Annual", description: "Fire prevention, evacuation procedures, fire extinguisher use, and personal emergency evacuation plans (PEEPs)." },
  { topic: "Medication Awareness", frequency: "Annual", description: "The 5 Rights of medication, MAR chart completion, storage requirements, and what to do when errors occur." },
  { topic: "First Aid", frequency: "Every 3 years", description: "Basic first aid skills including CPR, dealing with choking, bleeding, burns, and shock. Some staff require full First Aid at Work certificate." },
  { topic: "Food Hygiene", frequency: "Every 3 years", description: "Safe food handling, storage, preparation, and service. Relevant for all staff involved in food preparation or serving." },
  { topic: "Mental Capacity Act and Deprivation of Liberty Safeguards", frequency: "Annual", description: "Understanding the five principles of the Mental Capacity Act, assessing capacity, best interests decisions, and DoLS authorisation." },
  { topic: "Equality and Diversity", frequency: "Annual", description: "Understanding the Equality Act 2010, protected characteristics, challenging discrimination, and promoting inclusive practice." },
  { topic: "COSHH (Control of Substances Hazardous to Health)", frequency: "Annual", description: "Identifying hazardous substances in the workplace, risk assessment, and safe handling, storage, and disposal." },
  { topic: "Data Protection and GDPR", frequency: "Annual", description: "Understanding the UK GDPR, Data Protection Act 2018, data handling, confidentiality, and subject access requests." },
];

export interface SupervisionElement {
  title: string;
  description: string;
  checklist: string[];
}

export const supervisionElements: SupervisionElement[] = [
  {
    title: "One-to-One Supervision",
    description: "Regular, protected time between a manager and a staff member to reflect on practice, discuss concerns, and plan development. CQC expects all staff to receive regular supervision.",
    checklist: [
      "Should take place at least 4–6 times per year (every 6–8 weeks)",
      "Must be in a private setting where the conversation cannot be overheard",
      "Both parties should prepare in advance — agendas should be agreed",
      "Should cover: workload review, practice reflection, safeguarding concerns, training needs, wellbeing",
      "Records should be kept of discussion points, agreed actions, and follow-up items",
      "Supervision is not the same as a 'check-in' or a 'chat' — it should be structured and documented",
    ],
  },
  {
    title: "Annual Appraisal",
    description: "A formal, yearly review of the staff member's overall performance, achievements, and development over the preceding 12 months, with goal-setting for the year ahead.",
    checklist: [
      "Should take place once per year as a minimum",
      "Should review performance against objectives set at the previous appraisal",
      "Should include self-assessment by the staff member as well as the manager's assessment",
      "Should identify achievements, areas for development, and new objectives",
      "Should result in a written personal development plan (PDP) for the coming year",
      "Should be a two-way conversation — not a top-down assessment",
    ],
  },
  {
    title: "Professional Development Planning",
    description: "An ongoing process of identifying learning needs, planning development activities, and reviewing progress. This links to supervision and appraisal.",
    checklist: [
      "Identify learning needs through supervision, appraisal, incident debriefs, and reflective practice",
      "Agree development objectives that are specific, measurable, achievable, relevant, and time-bound (SMART)",
      "Plan activities: formal training, e-learning, shadowing, mentoring, conferences, qualifications",
      "Record all CPD activities — this is evidence for your appraisal and for any professional registration",
      "Review progress regularly through supervision — not just at annual appraisal",
      "Consider career progression: Level 2/3/4/5 Diplomas in Health and Social Care, nursing associate pathway, or registered nurse apprenticeship",
    ],
  },
];

export interface EmploymentRight {
  title: string;
  content: string;
}

export const employmentRights: EmploymentRight[] = [
  {
    title: "Your Contract of Employment",
    content:
      "Under the Employment Rights Act 1996, you are entitled to a written statement of employment particulars within two months of starting work (from 6 April 2020, this must be provided on or before day one). This document must include: your name and your employer's name, your job title or a brief description of the work, the date your employment began, your rate of pay and how it is calculated, the intervals at which you will be paid, your hours of work, your holiday entitlement, your place of work, any probationary period, and notice periods. If your employer fails to provide this, you can apply to an Employment Tribunal for a declaration of your terms. Always read your contract carefully before signing and seek advice from your trade union or ACAS if anything is unclear.",
  },
  {
    title: "Working Time Regulations 1998",
    content:
      "The Working Time Regulations 1998 implement the EU Working Time Directive into UK law and provide important protections for workers. Key entitlements include: a maximum of 48 hours per week on average (unless you choose to opt out in writing), a minimum daily rest period of 11 consecutive hours between shifts, a minimum weekly rest period of 24 hours in each 7-day period (or 48 hours in each 14-day period), a rest break of at least 20 minutes if your shift exceeds 6 hours, and at least 5.6 weeks (28 days for a full-time worker) of paid annual leave per year. In care homes, these regulations are particularly important because of shift patterns, sleep-ins, and overnight working. Your employer must keep records of your working hours and ensure you receive your entitlements.",
  },
  {
    title: "National Minimum Wage and National Living Wage",
    content:
      "All care workers are entitled to be paid at least the National Minimum Wage (NMW) or National Living Wage (NLW), depending on their age. As of April 2026, the rates are: NLW (age 21 and over): £12.71 per hour; 18–20 year rate: £10.85 per hour; 16–17 year rate: £8.00 per hour; Apprentice rate: £8.00 per hour. Sleep-in workers must be paid at least the NMW/NLW for time they are awake and working, and may be entitled to the NMW for the whole sleep-in shift depending on the circumstances. If you suspect you are being paid below the minimum wage, you can report this to HMRC's National Minimum Wage Enforcement team or to ACAS. Your employer cannot dismiss you or treat you unfairly for asserting your NMW rights.",
  },
  {
    title: "Grievance Procedures",
    content:
      "If you have a concern, complaint, or grievance about your work, your working conditions, or the way you are being treated, you have the right to raise a formal grievance. The ACAS Code of Practice on Disciplinary and Grievance Procedures sets out the minimum steps your employer should follow: you should raise the grievance in writing, your employer should invite you to a meeting to discuss it (you have the right to be accompanied by a trade union representative or colleague), your employer should make a decision and inform you in writing, and you should have the right to appeal if you are not satisfied with the outcome. If your employer does not have a formal grievance policy, the ACAS Code applies anyway. If internal procedures do not resolve your concern, you may be able to take your case to an Employment Tribunal.",
  },
  {
    title: "Trade Union Rights and Support",
    content:
      "You have the right under the Trade Union and Labour Relations (Consolidation) Act 1992 to join a recognised trade union. In the care sector, common unions include UNISON, GMB, and the Royal College of Nursing (RCN). Your employer cannot refuse you employment, dismiss you, or treat you unfairly for being a union member. You have the right to be accompanied by a trade union representative in disciplinary or grievance hearings. You also have the right not to be offered a 'settlement' that waives your future tribunal rights in exchange for employment (except in limited, lawful circumstances). Trade unions can provide advice on pay, conditions, grievances, disciplinary matters, health and safety, and whistleblowing. They also negotiate collective agreements on behalf of members, which can set terms above the legal minimum.",
  },
  {
    title: "Whistleblowing Protection",
    content:
      "The Public Interest Disclosure Act 1998 (PIDA) protects workers who raise concerns about wrongdoing in the workplace. You are protected from dismissal, disciplinary action, or victimisation if you make a 'qualifying disclosure' in the public interest. See our Whistleblowing section for full details on how to raise concerns and the protections available.",
  },
];

export interface CommunicationElement {
  title: string;
  description: string;
  bestPractice: string[];
}

export const communicationElements: CommunicationElement[] = [
  {
    title: "Effective Handover",
    description:
      "Shift handover is the process of passing critical information from one team to the next. Poor handover is a leading cause of care failures, missed medication, and missed observations. A structured handover ensures continuity and safety.",
    bestPractice: [
      "Use a standardised handover template or proforma (see Handover Templates section)",
      "Handovers should be face-to-face, not just written — verbal communication allows questions",
      "Use a systematic approach: e.g. SBAR (Situation, Background, Assessment, Recommendation) or a resident-by-resident walkthrough",
      "Cover: changes in condition, new admissions, discharges, medication changes, safeguarding concerns, upcoming appointments, and any tasks yet to be completed",
      "Allow time for questions — the incoming shift should clarify anything they are unsure about",
      "Do not rush or skip handover — it is a clinical safety process, not a formality",
      "Written handover notes should be legible, factual, and signed by the author",
      "Confidentiality: handover should take place in a private area, not in corridors or public spaces where it could be overheard",
    ],
  },
  {
    title: "Multi-Disciplinary Working",
    description:
      "Care homes work alongside many external professionals: GPs, district nurses, occupational therapists, physiotherapists, speech and language therapists, dietitians, chiropodists, social workers, and mental health teams. Effective multi-disciplinary working ensures residents receive coordinated, holistic care.",
    bestPractice: [
      "Know which professionals are involved in each resident's care and their roles",
      "Attend and contribute to multi-disciplinary meetings when invited",
      "Keep accurate records of all professional visits, assessments, and recommendations",
      "Communicate changes in a resident's condition promptly to the relevant professional",
      "Follow through on recommendations made by visiting professionals and record outcomes",
      "If a professional's recommendation conflicts with your observations or the resident's wishes, raise this with your manager",
      "Ensure all handover information includes updates from external professionals",
      "Recognise that you are part of a wider team — you have valuable information to contribute and your input is essential",
    ],
  },
  {
    title: "Conflict Resolution",
    description:
      "Conflict in care teams can arise from differing opinions, workload pressures, personality clashes, or poor communication. Left unresolved, conflict affects morale, retention, and — most importantly — the quality of care provided to residents. Every care worker has a role in managing and resolving conflict constructively.",
    bestPractice: [
      "Address concerns early — do not let frustrations build up over time",
      "Use 'I' statements rather than accusatory language: 'I feel concerned when...' rather than 'You always...'",
      "Focus on the issue, not the person — describe the behaviour and its impact",
      "Listen actively to the other person's perspective without interrupting",
      "Seek to understand before seeking to be understood",
      "If direct conversation does not resolve the issue, involve your manager or team leader",
      "Use supervision to discuss ongoing interpersonal difficulties in a safe, structured setting",
      "If conflict involves harassment, bullying, or discrimination, raise it formally through your employer's grievance or dignity at work policy",
      "Remember: the primary concern is always the safety and wellbeing of the residents",
    ],
  },
  {
    title: "Documentation Standards",
    description:
      "Accurate, timely, and professional documentation is a legal requirement and a cornerstone of safe care. Poor documentation leads to poor continuity, increased risk, and may constitute a regulatory breach under CQC Regulation 17 (Good Governance).",
    bestPractice: [
      "All entries must be dated, timed, and signed with your full name and designation",
      "Write in black ink (or as per organisational policy) — never in pencil or erasable ink",
      "Be factual and objective — record what you observed and what the resident told you, not your personal opinion",
      "Avoid jargon, abbreviations that could be misinterpreted, and subjective language",
      "Record late entries as 'Late entry' with the actual time and date of the original event",
      "Never alter, overwrite, or remove a previous entry — if a mistake is made, draw a single line through it, sign, date, and write the correct entry",
      "Ensure records are stored securely and only accessed by authorised personnel",
      "Record refusals of care, medication, or food — not just what was given, but also what was declined and why",
      "Document conversations with relatives, GPs, and other professionals, including any advice or decisions made",
      "If in doubt about whether to record something, record it — it is always better to have information documented than missing",
    ],
  },
];