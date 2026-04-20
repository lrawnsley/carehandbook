# CareKit Content Gap Analysis

## Current CareKit Inventory

### Pages (26 total)

| Section | Pages |
|---------|-------|
| **Home** | `/` (main page with 6 section links + search) |
| **CQC Regulations** (4 pages) | Overview, Five Key Questions, Fundamental Standards, Inspection Ratings |
| **Handover Templates** (4 pages) | Overview, Shift Handover, Night-to-Day, Resident Summary |
| **Care & Nursing Templates** (9 pages) | Overview, Care Plan, Risk Assessment, Daily Care Record, Incident Report, Moving & Handling, Pressure Sore (Waterlow), Mental Capacity, Consent Forms, Supervision Record |
| **Medication Guidance** (7 pages) | Overview, Five Rights, MAR Chart, Controlled Drugs, Abbreviations, PRN Protocols, Storage, Errors |
| **Employee Responsibilities** (5 pages) | Overview, Duty of Care, Safeguarding, Code of Conduct, Whistleblowing |
| **Staff Resources** (5 pages) | Overview, Induction & Training, Supervision & Appraisal, Employment Rights, Teamwork & Communication |

### Data Files (7 total)
- `site.ts` — Main navigation, section links, searchable pages index
- `cqc.ts` — CQC 5 Key Questions, Fundamental Standards (Regulations 9-20), Inspection Ratings
- `handover.ts` — 3 handover templates (shift, night-to-day, resident summary) with full field definitions
- `templates.ts` — 8 care templates (care plan, risk assessment, daily care record, incident report, moving & handling, pressure sore/Waterlow, mental capacity, consent forms, supervision record)
- `medication.ts` — 5 Rights, abbreviations, controlled drug schedules, PRN guidance, storage requirements, error guidance
- `employee.ts` — Duty of care, abuse types (7), safeguarding procedures (5 steps), conduct principles (6), professional boundaries (5), whistleblowing steps (5)
- `staff.ts` — Care Certificate standards (15), mandatory training topics (12), supervision elements (3), employment rights (6), communication elements (4)

### Templates/Forms Included (11 interactive templates)
1. Care Plan Template
2. Risk Assessment Template
3. Daily Care Record
4. Incident Report Form
5. Moving & Handling Assessment
6. Pressure Sore Assessment (Waterlow Scale)
7. Mental Capacity Assessment Template
8. Consent Forms
9. Supervision Record Template
10. Shift Handover Template
11. Night-to-Day Handover Template
12. Resident Handover Summary

---

## Gap Analysis: What Competitors Offer That CareKit Is Missing

Based on research of QCS, Skills for Care, Alzheimer's Society, Carers UK, Age UK, NHS, and CQC resources.

### 🔴 HIGH PRIORITY — Daily-use content that care staff actually need

| Gap | Description | Competitor Source | Why It Matters |
|-----|-------------|-------------------|----------------|
| **Infection Prevention & Control** | Full IPC section: hand hygiene posters, PPE donning/doffing checklist, outbreak management plan, infection control audit tool, chain of infection guide | Skills for Care (dedicated care topic), QCS (full IPC policy suite) | Post-COVID, CQC inspects IPC rigorously. Every care home needs IPC audits, outbreak logs, and hand hygiene compliance. This is Care Certificate Standard 15 — referenced but not covered in depth. |
| **Falls Assessment & Prevention** | Falls risk assessment tool, fall prevention checklist, post-fall protocol, falls environment audit | QCS, NHS, Skills for Care | Falls are the #1 incident in care homes. CQC Key Question "Safe" specifically looks at falls management. CareKit has incident reporting but NO falls-specific content. |
| **Nutrition & Hydration (MUST Screening)** | MUST (Malnutrition Universal Screening Tool) assessment, food/fluid chart, weight monitoring chart, texture-modified diet guide | Skills for Care, Age UK, QCS | CQC Regulation 14 requires nutritional needs are met. Referenced in daily care record but no standalone assessment tool or screening guide. |
| **Skin Integrity & Wound Care** | Wound assessment chart, pressure ulcer grading tool, repositioning chart, wound care plan template | Skills for Care (dedicated care topic), QCS | Waterlow score is covered but no follow-through to wound documentation, repositioning logs, or treatment plans. |
| **Fire Safety & Emergency Procedures** | Fire risk assessment template, PEEP (Personal Emergency Evacuation Plan), fire drill log, evacuation checklist | Skills for Care (mandatory training topic), QCS | Fire safety is mandatory annual training. PEEPs are legally required for each resident. Entirely missing from CareKit. |
| **Complaints Handling** | Complaints policy template, complaint form, investigation record, response letter templates | CQC Regulation 16, QCS, Age UK | CQC Fundamental Standard Regulation 16 (Complaints) is listed but no practical complaint form or process guide exists. |
| **End of Life Care** | End of life care plan, DNACPR discussion guide, anticipatory care plan, spirituality/religion assessment, verification of death checklist | Skills for Care (dedicated care topic), Alzheimer's Society, QCS | A major area of CQC inspection under "Responsive". DNACPR is listed in resident summary but no standalone guidance or templates. |

### 🟡 MEDIUM PRIORITY — Important specialist content

| Gap | Description | Competitor Source | Why It Matters |
|-----|-------------|-------------------|----------------|
| **Dementia Care Resources** | Dementia-friendly communication guide, "This is me" life story template, behaviour tracking chart, de-escalation techniques, environment checklist | Alzheimer's Society ("This is me" tool), Skills for Care (dedicated care topic) | 70%+ of care home residents have dementia. Alzheimer's Society's "This is me" is the most widely-used tool in UK care homes and CareKit has nothing equivalent. |
| **Challenging/Distressed Behaviour** | ABC (Antecedent-Behaviour-Consequence) chart, behaviour support plan, restraint reduction checklist, positive behaviour support guide | Skills for Care (dedicated care topic), QCS | Listed as a Care Certificate awareness point but no practical tools. ABC charts are used daily in care homes. |
| **Safeguarding Alert Form** | Specific safeguarding concern form (separate from incident report), safeguarding investigation tracker, safeguarding adults review (SAR) checklist | Carers UK, QCS, local authority guidance | CareKit covers safeguarding PROCEDURE but provides no practical FORM to record a safeguarding concern with all required fields. |
| **First Aid Quick Reference** | First aid flowcharts (CPR, choking, bleeding, burns, seizure), first aid kit checklist, accident book template | Skills for Care (mandatory training), St John Ambulance | Mandatory training topic with no reference material. Staff need quick-reference guides at the point of care. |
| **COSHH Assessment** | COSHH risk assessment template, hazardous substances register, safety data sheet index | Skills for Care (mandatory training topic), HSE | Mandatory training — no template or guide exists in CareKit. |
| **Recruitment & DBS Checks** | Safer recruitment checklist, DBS application tracker, interview question bank, reference request template, right to work checklist | CQC Regulation 19, Skills for Care, QCS | CareKit references "safe recruitment" under CQC but provides no practical templates or checklists. |
| **Staff Training Record** | Training matrix template, training needs analysis form, CPD log, competency assessment checklist | Skills for Care, QCS | Referenced in mandatory training list but no tool to track completion or identify gaps. |
| **Resident Admission & Discharge** | Pre-admission assessment form, admission checklist, discharge planning template, hospital transfer form | Age UK (hospital discharge), NHS, QCS | Major daily workflow — new admissions happen regularly. No admission or discharge content at all. |
| **Activity Planning** | Activity assessment (what the person enjoys), weekly activity planner, activity evaluation form | Skills for Care (dedicated care topic) | CQC "Responsive" key question requires meaningful activities. No activity planning content. |
| **Oral Health Assessment** | Oral health assessment tool, daily mouth care plan | Skills for Care (dedicated care topic), NICE guideline | CQC inspects oral health. NICE guideline NG48 requires care homes to do oral health assessments. Entirely missing. |

### 🟢 LOWER PRIORITY — Nice-to-have but useful

| Gap | Description | Competitor Source | Why It Matters |
|-----|-------------|-------------------|----------------|
| **"This is Me" Life Story Template** | Person-centred life story booklet for residents with dementia/delirium | Alzheimer's Society (widely adopted across UK) | The most requested free tool by care homes from any provider. |
| **Carer Assessment Template** | Carer's assessment form, carer support plan | Carers UK, NHS | Under Care Act 2014, carers are entitled to assessment. Useful for homes supporting family carers. |
| **Environmental Audit** | Bedroom/bathroom/communal area safety checklists, lighting audit, signage audit | Alzheimer's Society (dementia-friendly signage), QCS | CQC "Safe" looks at premises safety. Dementia-friendly environment audits are increasingly expected. |
| **Advance Care Planning** | Advance statement template, advance decision to refuse treatment (ADRT) form, DNAR form | Age UK, Dying Matters, QCS | Listed in care plan template but no standalone advance care plan. |
| **Loneliness & Wellbeing Assessment** | Wellbeing assessment tool, social isolation screening | Age UK, Carers UK | CQC "Caring" key question. Mental wellbeing of residents is inspected. |
| **Equality & Diversity Monitoring** | E&D monitoring form, cultural needs assessment, religious/spiritual needs assessment | Skills for Care (dedicated care topic), QCS | CQC Fundamental Standard Regulation 10. Referenced but no practical form. |
| **Staff Roster/Shift Planner** | Shift planning template, staffing ratio calculator, agency staff record | Skills for Care, QCS | CQC "Safe" — staffing levels are inspected. No tools to plan or demonstrate safe staffing. |
| **Medication Stock & Audit** | Medication stock record, medication audit tool, pharmacy receipt log | QCS, Skills for Care | Medication section is extensive but focused on process, not stock management or audit tools. |
| **Autism Awareness** | Autism-specific communication guide, sensory assessment, reasonable adjustments checklist | Skills for Care (dedicated care topic) | New Care Certificate Standard 16 (2025 update). Completely absent from CareKit. |
| **Learning Disability Resources** | Easy-read care plan, health action plan, hospital passport | Skills for Care (dedicated care topic), Mencap | New Care Certificate Standard 16. Not in CareKit's Care Certificate list. |

---

## Summary of Key Findings

### What CareKit Does Well
- **Strong regulatory foundation**: CQC regulations, Fundamental Standards, and inspection ratings are well-covered
- **Excellent medication section**: Comprehensive coverage of the 5 Rights, controlled drugs, PRN, storage, errors
- **Good employment/legal content**: Duty of care, safeguarding, whistleblowing, employment rights are thorough
- **Solid template base**: 12 interactive templates covering core clinical documentation
- **Care Certificate standards**: All 15 (now 16) standards listed with descriptions

### Critical Gaps (What CareKit Is Missing Most)
1. **No Infection Prevention & Control section** — This is the #1 gap. Post-COVID, every CQC inspection focuses on IPC. No audit tools, no outbreak plan, no hand hygiene poster.
2. **No Falls Prevention content** — Falls are the most common incident in care homes. No assessment tool, no prevention checklist, no post-fall protocol.
3. **No Nutrition/MUST Screening tool** — CQC Regulation 14 requires nutritional assessment. MUST is the standard UK tool. Entirely absent.
4. **No Dementia-specific resources** — 70%+ of residents have dementia. No "This is Me" equivalent, no ABC chart, no behaviour support plan.
5. **No Admission/Discharge process** — A daily workflow for every care home. No pre-admission assessment, no discharge planning.
6. **No Fire Safety/PEEP templates** — Legally required annual training and individual evacuation plans.
7. **No Complaints form** — CQC Regulation 16 is listed but no practical complaint handling tools.
8. **No End of Life Care guidance** — A major CQC inspection area (Key Question: Responsive).
9. **No Safeguarding Alert Form** — Procedures are documented but no actual form to record a concern.
10. **Care Certificate Standard 16 (Learning Disability & Autism) missing** — Updated March 2025, CareKit still lists 15 standards.

### Recommended Priority Additions (Top 10)
1. **Infection Prevention & Control section** — Audit tool, hand hygiene guide, outbreak management plan, PPE checklist
2. **Falls Risk Assessment & Prevention** — Assessment template, prevention checklist, post-fall protocol
3. **MUST Nutrition Screening** — MUST score calculator, food/fluid chart, weight monitoring record
4. **"This is Me" Life Story Template** — Person-centred life story booklet for dementia residents
5. **Admission & Discharge section** — Pre-admission assessment, admission checklist, hospital transfer form
6. **ABC Behaviour Chart** — Antecedent-Behaviour-Consequence recording chart with behaviour support plan
7. **Safeguarding Alert Form** — Practical form for recording safeguarding concerns with all required fields
8. **Fire Safety & PEEP template** — Fire risk assessment, personal emergency evacuation plan
9. **End of Life Care section** — Advance care plan, DNACPR guidance, anticipatory care plan
10. **Complaints Form** — Complaint record form, investigation tracker, response template

---

*Analysis completed April 2026. Sources: QCS.co.uk, Skills for Care, Alzheimer's Society, Carers UK, Age UK, NHS, CQC.*