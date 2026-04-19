export interface EmployeeSubPage {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const employeeSubPages: EmployeeSubPage[] = [
  {
    slug: "duty-of-care",
    title: "Duty of Care",
    description:
      "Legal obligations under the Health and Social Care Act, Health & Safety at Work Act, and keeping residents safe.",
    icon: "⚖️",
    href: "/employee-responsibilities/duty-of-care",
  },
  {
    slug: "safeguarding",
    title: "Safeguarding Adults",
    description:
      "Types of abuse, recognising signs, reporting procedures, and your duties under the Care Act 2014.",
    icon: "🛡️",
    href: "/employee-responsibilities/safeguarding",
  },
  {
    slug: "code-of-conduct",
    title: "Code of Conduct",
    description:
      "Skills for Care Code of Conduct, professional boundaries, confidentiality, and GDPR/Data Protection obligations.",
    icon: "📋",
    href: "/employee-responsibilities/code-of-conduct",
  },
  {
    slug: "whistleblowing",
    title: "Whistleblowing",
    description:
      "Public Interest Disclosure Act, how to raise concerns, protection for whistleblowers, and CQC reporting.",
    icon: "📢",
    href: "/employee-responsibilities/whistleblowing",
  },
];

export interface DutyOfCarePoint {
  heading: string;
  content: string;
}

export const dutyOfCarePoints: DutyOfCarePoint[] = [
  {
    heading: "Health and Social Care Act 2008",
    content:
      "The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 establish the Fundamental Standards that all care providers must meet. As an employee, you have a duty to deliver care that meets these standards. This includes providing person-centred care (Regulation 9), treating people with dignity and respect (Regulation 10), obtaining valid consent (Regulation 11), ensuring safe care and treatment (Regulation 12), and protecting people from abuse (Regulation 13). Failure to meet these standards can result in CQC enforcement action, including conditions on registration, suspension, or cancellation.",
  },
  {
    heading: "Health and Safety at Work etc. Act 1974",
    content:
      "This Act places a general duty on employers to ensure, so far as is reasonably practicable, the health, safety, and welfare of all their employees. It also places duties on employees to take reasonable care for the health and safety of themselves and others who may be affected by their acts or omissions at work. In a care home context, this means following safe working practices, using equipment correctly, reporting hazards, and cooperating with employers on health and safety matters. Employees must not intentionally or recklessly interfere with anything provided in the interests of health and safety.",
  },
  {
    heading: "Keeping Residents Safe",
    content:
      "Every care worker has a duty to keep residents safe from harm. This includes identifying risks, following risk assessments, reporting concerns, and never ignoring signs that a resident may be at risk. You must follow your organisation's policies and procedures for safeguarding, health and safety, infection control, and medication management. If you see something that concerns you, you have a duty to report it — whether it is a safeguarding concern, a health and safety hazard, or a breach of regulations. Remaining silent when you observe poor practice is itself a failure of your duty of care.",
  },
  {
    heading: "Duty of Candour",
    content:
      "Regulation 20 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 imposes a Duty of Candour on all registered providers. When a notifiable safety incident occurs, the provider must notify the relevant person, explain what happened, apologise, and describe what will be done to prevent recurrence. As an employee, you must support this process by reporting incidents promptly and honestly, providing accurate accounts, and cooperating fully with any investigation. Being open and transparent about mistakes is a professional and legal obligation — not an admission of liability.",
  },
  {
    heading: "Personal Accountability",
    content:
      "While employers have overarching responsibilities, each employee is personally accountable for their own practice. You cannot hide behind organisational failures to excuse your own poor practice. The Professional Standards Authority requires that health and care professionals work within their competence, maintain their skills through continuing professional development (CPD), and act with integrity at all times. If you are asked to do something outside your scope of practice or training, you must refuse and escalate. If you make a mistake, you must report it immediately — not wait to see if it is noticed.",
  },
];

export interface AbuseType {
  name: string;
  description: string;
  signs: string[];
}

export const abuseTypes: AbuseType[] = [
  {
    name: "Physical Abuse",
    description:
      "The use of physical force that results in pain, injury, or impairment. This includes hitting, pushing, slapping, rough handling, inappropriate use of restraint, forced feeding, or misuse of medication.",
    signs: [
      "Unexplained bruises, marks, or injuries (particularly in clusters, on the face, or in unusual locations)",
      "Reluctance to be touched or flinching when approached",
      "Unexplained falls or injuries that are inconsistent with the explanation given",
      "Marks from restraints on wrists or ankles",
      "Broken bones or fractures without a clear cause",
      "Behaviour changes such as agitation, fearfulness, or withdrawal",
    ],
  },
  {
    name: "Sexual Abuse",
    description:
      "Any non-consensual sexual activity, including unwanted touching, sexual assault, or inducement to perform sexual acts. This also includes sexual activity with a person who is unable to give consent due to lacking mental capacity.",
    signs: [
      "Unexplained genital or anal pain, bleeding, or injury",
      "Difficulty walking or sitting that may indicate physical trauma",
      "Torn, stained, or bloody underclothing",
      "Changes in behaviour — overtly sexual behaviour, withdrawal, or distress",
      "Fear of a particular person or reluctance to be alone with them",
      "STIs in a person who is not sexually active, or in someone unable to give consent",
    ],
  },
  {
    name: "Psychological / Emotional Abuse",
    description:
      "Acts that cause mental or emotional distress, including threats, humiliation, intimidation, verbal abuse, isolation, withdrawal of affection, or denial of choice. This is often the most difficult type of abuse to identify and prove.",
    signs: [
      "Unexplained withdrawal, fearfulness, or resignation",
      "Appearing anxious, tearful, or agitated without clear cause",
      "Loss of confidence or self-esteem",
      "Reluctance to speak openly or appearing to be 'walking on eggshells'",
      "Changes in appetite, sleep patterns, or mood",
      "A carer or staff member speaking to the resident in a demeaning or controlling way",
    ],
  },
  {
    name: "Financial or Material Abuse",
    description:
      "Theft, fraud, exploitation, or pressure in connection with money, property, or possessions. This includes misappropriation of a resident's funds, coercion to change a will, or unexplained withdrawals from a resident's account.",
    signs: [
      "Unexplained withdrawals from bank accounts or missing money",
      "Personal items or valuables going missing",
      "Sudden changes to wills, property titles, or financial arrangements",
      "A person appearing to control the resident's finances without authority",
      "Bills not being paid despite adequate funds being available",
      "Disparity between the resident's financial resources and their standard of living",
    ],
  },
  {
    name: "Neglect and Acts of Omission",
    description:
      "The failure to provide necessary care, resulting in harm or distress. This includes ignoring medical or physical care needs, failure to provide access to food, water, warmth, or medication, and failure to provide adequate supervision.",
    signs: [
      "Unexplained weight loss or malnutrition",
      "Dehydration or untreated medical conditions",
      "Poor personal hygiene or unchanged continence aids",
      "Pressure sores or skin breakdown",
      "Inadequate clothing or heating",
      "The resident appearing withdrawn, listless, or socially isolated",
    ],
  },
  {
    name: "Discriminatory Abuse",
    description:
      "Abuse motivated by discriminatory attitudes towards a person's race, gender, gender identity, age, disability, sexual orientation, religion, or cultural background. This can overlap with other forms of abuse but is distinguished by its motivation.",
    signs: [
      "A resident being treated less favourably than others",
      "Derogatory or discriminatory comments or 'jokes' directed at the resident",
      "Lack of respect for cultural or religious practices (e.g. dietary requirements, prayer times)",
      "Exclusion from activities or social opportunities based on a protected characteristic",
      "Unequal access to care, support, or resources",
      "Staff making assumptions about what a resident wants based on stereotypes",
    ],
  },
  {
    name: "Institutional Abuse",
    description:
      "Abuse occurring within a setting that should provide care, where the regime, routines, or culture impose rigid expectations on residents. This includes treating residents as a group rather than as individuals, enforcing unnecessary rules, and failing to respect dignity and choice.",
    signs: [
      "Rigid routines that do not accommodate individual preferences (e.g. set mealtimes, set bedtimes)",
      "Residents being expected to fit around staff schedules rather than the reverse",
      "Lack of personalisation in care — identical care plans, identical activities",
      "Closed culture — restrictions on visiting, monitoring, or external scrutiny",
      "Staff speaking about residents in a dismissive or dehumanising way",
      "Lack of choice in meals, activities, clothing, or daily routines",
    ],
  },
];

export interface SafeguardingProcedure {
  step: string;
  heading: string;
  content: string;
}

export const safeguardingProcedures: SafeguardingProcedure[] = [
  {
    step: "1",
    heading: "Recognise",
    content:
      "Be alert to the signs of abuse. Trust your instincts — if something does not feel right, it probably is not. Look for physical signs (bruises, weight loss, poor hygiene), behavioural signs (withdrawal, fearfulness, agitation), and environmental signs (poor living conditions, locked doors, restricted access). Remember that abuse can happen to anyone, and anyone can be an abuser — including family members, other residents, staff, and volunteers.",
  },
  {
    step: "2",
    heading: "Respond",
    content:
      "If someone discloses abuse to you, listen carefully and take them seriously. Do not promise confidentiality — you have a duty to report. Stay calm, reassure the person, and avoid asking leading questions. Use open questions such as 'Can you tell me what happened?' rather than 'Did [name] hit you?'. Do not confront the alleged abuser. Make the person safe and comfortable, and preserve any physical evidence. Record exactly what was said using the person's own words where possible.",
  },
  {
    step: "3",
    heading: "Report",
    content:
      "Report your concerns immediately to your manager, safeguarding lead, or designated person. Under the Care Act 2014, you must also consider reporting to the local authority Adult Social Care team — they have a statutory duty to make enquiries. If there is immediate danger, call 999. If you are concerned about criminal activity, contact the police. If your manager does not act on your concerns, or if your concerns involve your manager, you should escalate to the local authority, the CQC, or use the whistleblowing procedure.",
  },
  {
    step: "4",
    heading: "Record",
    content:
      "As soon as possible, make a written record of what you have seen, heard, or been told. Include the date, time, location, and your signature. Record facts and observations rather than opinions. If recording what someone said, use their exact words and put them in quotation marks. Note any witnesses. Records should be factual, legible, and contemporaneous (written at the time or as soon as possible afterwards). These records may be used in a safeguarding enquiry or legal proceedings, so accuracy is essential.",
  },
  {
    step: "5",
    heading: "Review and Support",
    content:
      "After reporting, follow up to ensure the concern has been actioned. Cooperate fully with any safeguarding enquiry. Support the person who may have been abused — they may need advocacy, medical attention, or emotional support. You should also access support for yourself — witnessing or reporting abuse can be distressing. Your employer should have a policy on staff wellbeing and access to counselling. Reflect on the incident: were there any wider lessons for the team or the organisation?",
  },
];

export interface ConductPrinciple {
  title: string;
  description: string;
  points: string[];
}

export const conductPrinciples: ConductPrinciple[] = [
  {
    title: "Accountability",
    description:
      "You must take responsibility for your own actions and omissions. You should be able to justify your decisions and actions at all times.",
    points: [
      "Work within your scope of practice and competence at all times",
      "Be honest if you make a mistake and report it immediately",
      "Maintain clear and accurate records of the care and support you provide",
      "Follow your organisation's policies, procedures, and codes of conduct",
      "Seek advice from your manager or a more experienced colleague when you are unsure",
      "Do not delegate care tasks to someone who is not competent to carry them out",
    ],
  },
  {
    title: "Promote and Uphold People's Rights",
    description:
      "You must promote and uphold the dignity, privacy, and independence of the people you support. You must treat every person as an individual and respect their views, wishes, and preferences.",
    points: [
      "Always knock before entering a resident's room and ask permission before providing care",
      "Support residents to make their own choices wherever possible — what to wear, eat, and do",
      "Respect confidentiality and never share personal information without consent (unless required by law or to prevent serious harm)",
      "Challenge discrimination, prejudice, and stereotypical attitudes wherever you encounter them",
      "Act as an advocate for residents who cannot speak up for themselves, while respecting their views",
      "Support residents to maintain their relationships and community connections",
    ],
  },
  {
    title: "Work in Partnership",
    description:
      "You must work in partnership with colleagues, other professionals, and the people you support and their families to deliver safe, effective, and compassionate care.",
    points: [
      "Communicate clearly and respectfully with colleagues, residents, families, and other professionals",
      "Share information appropriately and follow handover protocols to ensure continuity of care",
      "Work collaboratively with health professionals (GPs, district nurses, occupational therapists, etc.)",
      "Support new colleagues and students during their induction and learning",
      "Respect the roles and contributions of all team members",
      "Raise concerns if team working is not functioning effectively or safely",
    ],
  },
  {
    title: "Maintain and Improve Your Knowledge and Skills",
    description:
      "You must keep your knowledge and skills up to date through continuous professional development. You must take part in learning activities that maintain and develop your competence.",
    points: [
      "Complete all mandatory training and refresh it when required",
      "The Care Certificate provides the minimum training standards for new care workers",
      "Engage in supervision and appraisal as required by your employer",
      "Reflect on your practice and identify areas for improvement",
      "Keep up to date with changes in legislation, policy, and best practice",
      "Pursue additional qualifications relevant to your role (e.g. Level 2/3/4 Diplomas in Health and Social Care)",
    ],
  },
  {
    title: "Be Honest and Trustworthy",
    description:
      "You must be honest and trustworthy in all your professional dealings. Integrity is the foundation of trust between care workers, residents, families, and the wider community.",
    points: [
      "Be truthful in your records, reports, and communications",
      "Do not falsify records, MAR chart entries, or any documentation",
      "Declare any conflicts of interest (e.g. personal relationships with residents or their families)",
      "Do not accept gifts or favours that could be seen as influencing your professional judgement",
      "Report concerns about the conduct of colleagues, even if this is difficult",
      "If you are suspended, investigated, or subject to disciplinary proceedings, you must inform your employer",
    ],
  },
  {
    title: "Respect Confidentiality",
    description:
      "You must respect people's right to confidentiality and only share information with those who need to know. Confidentiality is both a professional and legal obligation under the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.",
    points: [
      "Only access personal information that you need for the care and support you are providing",
      "Do not discuss residents' personal information in public areas or with people who do not need to know",
      "Ensure written records are stored securely and not left visible to unauthorised people",
      "Follow your organisation's information sharing and data protection policies",
      "Understand when confidentiality can be breached — e.g. to prevent serious harm, for safeguarding, or when required by law",
      "Be aware that personal data must be processed lawfully, fairly, and transparently under GDPR Article 5",
    ],
  },
];

export interface ProfessionalBoundary {
  heading: string;
  guidance: string;
}

export const professionalBoundaries: ProfessionalBoundary[] = [
  {
    heading: "Gifts and Favouritism",
    guidance:
      "You should not accept gifts from residents or their families, regardless of value, unless your organisation's policy specifically permits small gifts at Christmas or birthdays. Never accept money, loans, or items of significant value. Declining gifts politely but firmly is part of maintaining professional relationships. If a resident insists, explain that your professional code does not allow you to accept, and suggest they make a donation to a charity instead. Never show favouritism towards particular residents — all residents are entitled to equal care and attention.",
  },
  {
    heading: "Personal Relationships",
    guidance:
      "You must not form personal or sexual relationships with residents, their families, or representatives. This includes social media connections. Even after a resident has left the service, a relationship formed during the professional working period raises significant concerns about the power dynamic and whether genuine consent was possible. If you find yourself in a situation where a personal relationship may develop (e.g. the resident is someone you knew before their admission), you must declare this to your manager immediately so appropriate action can be taken.",
  },
  {
    heading: " Financial Involvement",
    guidance:
      "You must not become involved in a resident's financial affairs unless this is explicitly part of your role and has been properly authorised. Never agree to be a power of attorney, executor of a will, or signatory on a resident's bank account. You should never lend money to or borrow money from a resident. If a resident asks you to manage their money or make financial decisions on their behalf, direct them to the home manager or an independent advocacy service.",
  },
  {
    heading: "Social Media and Outside Contact",
    guidance:
      "Do not share personal social media accounts, phone numbers, or email addresses with residents. Do not take or share photographs of residents on personal devices or social media. Be mindful of your own social media presence — anything that could undermine public confidence in the care profession may breach your professional code. If a resident or their family member sends you a personal message on social media, do not engage — report it to your manager and follow your organisation's policy.",
  },
  {
    heading: "Emotional Over-Involvement",
    guidance:
      "It is natural to care about the people you support, but you must maintain professional distance. Warning signs of over-involvement include spending significantly more time with one resident than others, feeling personally responsible for a resident's happiness, making exceptions to rules for a particular resident, or finding it difficult to accept that a resident may prefer another colleague's care. If you notice these signs, discuss them with your manager in supervision — they are a risk to both you and the resident.",
  },
];

export interface WhistleblowingStep {
  step: string;
  heading: string;
  content: string;
}

export const whistleblowingSteps: WhistleblowingStep[] = [
  {
    step: "1",
    heading: "Identify Your Concern",
    content:
      "You may witness or become aware of practice that concerns you. This could include: abuse or neglect of residents, unsafe staffing levels, falsification of records, breach of regulations, financial irregularities, or a culture that suppresses concerns. You do not need absolute proof — a reasonable belief that malpractice has occurred, is occurring, or is likely to occur is sufficient. Write down what you have observed, including dates, times, people involved, and any evidence.",
  },
  {
    step: "2",
    heading: "Raise It Internally First",
    content:
      "In the first instance, raise your concern with your line manager. If your concern involves your manager, or if they do not take it seriously, escalate to a more senior manager, the registered manager, the safeguarding lead, or the provider's compliance team. Most organisations have a whistleblowing policy — familiarise yourself with it before you need it. Your employer should provide clear information about how to raise concerns and who to contact. You may also speak to your trade union representative for advice and support.",
  },
  {
    step: "3",
    heading: "Escalate Externally If Needed",
    content:
      "If internal channels do not resolve your concern, or if you believe the organisation will not act appropriately, you can raise your concern externally. The CQC has a dedicated whistleblowing line and encourages workers to raise concerns about health and social care services. Other external bodies include the local authority safeguarding team, NHS England, and professional regulators (e.g. Nursing and Midwifery Council, Health and Care Professions Council). You can also contact the whistleblowing charity Protect (formerly Public Concern at Work) for free, confidential advice.",
  },
  {
    step: "4",
    heading: "Know Your Rights",
    content:
      "The Public Interest Disclosure Act 1998 (PIDA) protects workers who make 'qualifying disclosures' in the public interest. A qualifying disclosure is one that relates to: a criminal offence, a breach of a legal obligation, a miscarriage of justice, a danger to health and safety, damage to the environment, or a deliberate concealment of any of these. You are protected from dismissal, disciplinary action, victimisation, or any other detriment for raising a genuine concern. You do not need to be certain — a reasonable belief is enough. However, deliberately making false allegations is not protected.",
  },
  {
    step: "5",
    heading: "Document Everything",
    content:
      "Keep your own written records of what you have raised, with whom, when, and the response received. If you make a verbal disclosure, follow it up in writing and keep a copy. If you contact the CQC or another external body, keep a record of the date, time, and reference number. This documentation is essential if you later need to demonstrate that you raised concerns appropriately and in good faith. Store your records securely — they may be needed to support you if your disclosure is questioned or if you face any detriment.",
  },
];