# LAKSHYA GUPTA — COMPLETE KNOWLEDGE BASE
> Compiled from: `ABOUTME.md`, `LakshyaGupta_resume.pdf`, `hpair_resume_.pdf`, `resume-mlh.pdf`
> Notes on discrepancies across sources are marked with ⚠️

---

## 1. CONTACT & IDENTITY

| Field | Detail |
|-------|--------|
| **Full Name** | Lakshya Gupta |
| **Phone** | +91-7011528896 |
| **Email** | lakshyagupta2440@gmail.com |
| **LinkedIn** | linkedin.com/in/lakshyaa |
| **GitHub** | github.com/Lakshya-2440 |
| **Portfolio** | lakshyapf.vercel.app |
| **Location** | Pune, India (home base: New Delhi, India) |

---

## 2. IDENTITY SUMMARY

Across different resumes, Lakshya frames himself differently depending on the target audience:

**General / HPAIR version:**
> "First-year CS student, coding since age 9. 12,000+ users across four live AI and education tools deployed in India, Vietnam, Indonesia, and the Philippines. Chaired IIT Delhi's flagship MUN as Director General; won Best Delegate on AI governance and APEC economic integration. Builds RAG systems and responsible AI at the intersection of technical depth and Asia-Pacific policy."

**Software Engineering / SWE version (LakshyaGupta_resume):**
> "Object-oriented programmer (Python, TypeScript, JavaScript) with 10+ years of coding experience and strong foundation in data structures, algorithms, and computer science fundamentals. Shipped production software to 12,000+ users across 4 countries; validated via A/B testing, debugging, and performance profiling. Selected delegate at HPAIR 2026 (Hanoi, Vietnam)."

**MLH Fellowship version:**
> Open source contributor; highlights merged PRs, 8,000+ lines contributed, full Git workflow, international maintainer collaboration.

---

## 3. EDUCATION

**Institution:** Newton School of Technology (NST), Pune, India
**Degree:** B.Tech in Computer Science (AI/ML specialisation mentioned in SWE resume)
**Duration:** Aug 2025 – May 2029
**GPA:** 8.91 / 10
**Coursework:** Machine Learning, Data Structures & Algorithms, Database Systems, Linear Algebra, Discrete Mathematics

⚠️ **Year of study:** Most resumes say "First-year CS student"; the SWE resume (LakshyaGupta_resume) says "2nd Year" — likely updated at a later date.

---

## 4. EXPERIENCE & ACTIVITIES

### 4.1 Google Developers Group (GDG)
- **Affiliation:** ADYPU, Remote
- **Duration:** Mar 2026 – Present
- **Role:** ⚠️ Varies by resume:
  - "Student Member" (ABOUTME, hpair)
  - "AI/ML Lead" (LakshyaGupta_resume)
  - "AI Workshop Facilitator" (MLH resume)
- **Achievement:** Ranked Top 15,000 / 150,000 globally at Google Big Code 2026 — algorithmic problem-solving and debugging challenge
- Applied software engineering best practices across collaborative open-source engineering workshops
- Engaging with developer ecosystems, AI tooling workshops, collaborative open-source challenges

### 4.2 Open Source Contributions
- **Programs:** Hacktoberfest (Oct 2025), Open Source Connect Global / OSCG (Feb 2026), GirlScript Summer of Code / GSSoC (Apr 2026)
- Contributed to 10+ repositories across AI/ML and developer tooling
- Ranked **Top 10,000 / 98,000+** at Hacktoberfest 2025
- Recognized as OSCG 2026 and GSSoC 2026 contributor
- Full Git workflow: fork → branch → rebase → maintainer review → CI merge
- 6+ merged PRs, 8,000+ lines contributed (MLH resume)
- Worked with international maintainer teams; improvements to AI/ML tooling and production-level code quality
- Skills: Git workflows, pull requests, issue resolution, code review, GitHub Actions CI

### 4.3 MINDS: Machine Intelligence and Neural Development Society
- **Role:** Student Member
- **Organisation:** Newton School of Technology
- **Duration:** Oct 2025 – Present
- Built mini-projects: classification pipelines, feature engineering, model evaluation (Python, scikit-learn)
- Participating in peer-led groups on algorithms, NLP techniques, real-world ML use cases

---

## 5. PROJECTS (COMPLETE)

### 5.1 Agentic Hybrid RAG Platform *(SWE resume only)*
- **Stack:** Python · FastAPI · TypeScript · LangChain · LangGraph · ChromaDB · Cohere · Ragas
- **Status:** Live | 2026
- **Architecture:** Combines BM25 sparse search and ChromaDB dense vector retrieval with Cohere reranking; autonomous self-reflection loop iteratively reformulates queries until quality criteria are satisfied
- **Metrics:**
  - 92% context retrieval accuracy
  - Zero ungrounded hallucinations
  - Sub-second query processing
  - 100% automated deployment reliability
  - Exceeds 0.80 faithfulness threshold and 0.75 answer relevancy threshold (Ragas)
- **Features:** Multi-model execution via OpenRouter; real-time Ragas evaluation pipelines; granular source citations; fully verifiable responses
- **Deployment:** FastAPI backend on Render; React frontend on Vercel

### 5.2 Ask My Notes — AI Study Assistant
- **URL:** bestaskmynotes.vercel.app
- **Stack:** Python · LangChain · OpenAI · Pinecone · RAG · React
- **Year:** 2026
- **Co-built:** Yes (MLH resume notes "Co-built")
- **Users:** 700+ active users
- **Embedding model:** ada-002 embeddings (MLH resume)
- **Retrieval:** Pinecone → score-ranked retrieval
- **Performance:** Sub-100ms hallucination-mitigated AI tutoring
- **Features:** Chain-of-Thought (CoT) MCQs, flashcards, Socratic viva, voice interaction (MLH resume)
- **Impact:** Serves 700+ first-generation learners across South & Southeast Asia at zero cost; addresses coaching gap

### 5.3 Virtual Robos — Robotics Education
- **URL:** virtualrobos.vercel.app
- **Also called:** "Alpha One Labs — Virtual Robotics Playground" (MLH resume)
- **Licence:** Open Source (MIT)
- **Stack:** OpenCV.js · JavaScript · WebRTC · HTML5 Canvas
- **Year:** 2026
- **Users:** 7,800+
- **Performance:** <50ms latency at 30fps
- **Technical depth:**
  - HSV colour-space filtering + contour detection
  - Gesture-driven control via convexity defect analysis on hand contours
  - Gaussian blur, morphological operations, frame-skipping optimisations
  - Zero-install, zero framework dependencies
  - Modular assembly, real-time physics, 360° LiDAR, FPV camera via Canvas API + WebRTC
  - Full CONTRIBUTING.md lifecycle, GitHub Actions CI
- **Impact:** Hardware-free robotics education for under-resourced schools
- **Open source contribution:** 6+ merged PRs, 8,000+ lines contributed (MLH resume)

### 5.4 Science Lab — Virtual Science Platform
- **URL:** bestsciencelab.vercel.app
- **Stack:** JavaScript · React · HTML5 Canvas · Open Source
- **Year:** 2026
- **Users:** 1,600+ students
- **Countries:** India, Vietnam, Indonesia, Philippines
- **Features:** Free browser-based physics & chemistry simulations — pendulum, circuits, titration — no install required

### 5.5 RepoGraph — Explainable AI Code Infrastructure
- **URL:** bestrepograph.vercel.app
- **Stack:** Python · FastAPI · LangChain · Neo4j · TypeScript · React
- **Year:** 2026
- **Users:** 1,800+
- **Architecture:**
  - AST-level code embeddings fused with Neo4j knowledge graph traversal
  - Hybrid AST-embedding + Neo4j graph traversal
  - Commit-metadata fusion with LLM intent summaries
  - Factual graph strictly separated from AI inference (MLH resume)
- **Design principle:** Responsible AI design aligned with ASEAN digital governance principles; auditable AI reasoning

### 5.6 LLM Evaluation & Red-Teaming Platform
- **Stack:** Python · FastAPI · TypeScript · DeepEval · LangSmith · SQLite
- **Year:** 2026
- **Status:** Live (deployed)
- **Scale:** Tested 528 adversarial prompts across 6 failure categories
- **Methods:** DeepEval metrics, LangSmith tracing, MART-style prompt mutation
- **Results:**
  - Identified 20.5% baseline violation rate
  - 4.5% hallucination failure rate
  - Reduced violations to **0.0%** after policy guardrail mitigation
- **Exports:** Audit reports in JSON, CSV, Markdown, PDF

### 5.7 Search Ranking Model
- **Stack:** Python · Pandas · NumPy · XGBoost · Scikit-learn · BM25 · SciPy · Pytest · Matplotlib · Seaborn · Gradio
- **Year:** 2026
- **Status:** Live
- **Scale:** 2M+ query-document pairs
- **Algorithm:** LambdaMART Learning-to-Rank
- **Bias correction:** IPW propensity scoring to correct position bias in click data
- **Results:**
  - Improved NDCG@10 by **57%** over BM25 baseline
- **Validation:** Shadow deploy + A/B testing; ablation across NDCG@1/5/10, MAP, MRR

### 5.8 JobTrackr
- **Stack:** React · Node.js · Express · PostgreSQL · LangChain · OpenAI · JWT · AWS S3
- **Year:** 2026
- **Features:**
  - RAG assistant over job application records
  - Context-only enforcement for hallucination-free career advice
  - JWT authentication
  - Kanban workflow management
  - Analytics dashboard
  - AWS S3 resume uploads

---

## 6. TECHNICAL SKILLS (EXHAUSTIVE)

### Programming Languages
Python · TypeScript · JavaScript · SQL · C

### AI / ML
Retrieval-Augmented Generation (RAG) · LangChain · LangGraph · CrewAI · n8n · OpenAI API · DeepEval · LangSmith · XGBoost · Scikit-learn · Prompt Engineering · Embeddings · Semantic Search · LLM Evaluation · Hallucination Mitigation · Knowledge Graphs · Responsible AI · BM25 · NLP · Learning-to-Rank · Position Bias Correction · Chunking Strategies · Grounding · ChromaDB · Cohere · Ragas

### Data & Visualisation
Pandas · NumPy · SciPy · Matplotlib · Seaborn · Gradio

### Frameworks
React · Node.js · Express · FastAPI · Vite · WebRTC · OpenCV.js

### Databases
PostgreSQL · SQLite · Pinecone · Neo4j · MongoDB · ChromaDB

### Cloud & Infrastructure
AWS S3 · Vercel · Render

### Auth & Security
JWT

### Testing & Quality
Pytest · DeepEval · LangSmith · A/B testing · Shadow deploys

### Open Source / DevOps
Git · GitHub (PRs · Issues · Code Review · CI) · GitHub Actions · CONTRIBUTING.md workflows

### Core CS Fundamentals (SWE resume emphasis)
Data Structures & Algorithms · Object-Oriented Programming · System Design · Database Management Systems · Debugging · Version Control (Git) · Code Review · REST APIs

### Human Languages
English (Fluent) · Hindi (Native) · French (Proficient)

---

## 7. LEADERSHIP & GLOBAL ENGAGEMENT

### 7.1 HPAIR 2026 — Harvard Project for Asian and International Relations
- **Role:** Selected Delegate
- **Event:** Harvard's flagship Asia-Pacific conference
- **Location:** Hanoi, Vietnam
- **Scope:** 50+ countries represented

### 7.2 Hackathon Judge — Agentic AI Track
- **Organisation:** Newton School of Technology
- **Year:** 2026 (×2 events)
- **Scope:** ⚠️ Varies by source:
  - "20+ teams" (ABOUTME, hpair)
  - "100+ teams" (LakshyaGupta_resume)
- Evaluated on solution architecture, responsible AI design, real-world applicability
- Recognised by faculty as domain authority in LLM systems
- Used as criteria-setter for future hackathon events

### 7.3 AI/ML Mentor & Educator
- **Organisation:** Newton School of Technology
- **Duration:** Oct 2025 – Present
- **Scope:** ⚠️ Varies by source:
  - "10+ peers" (ABOUTME, hpair, MLH)
  - "20+ peers" (LakshyaGupta_resume)
- Guided through structured ML and LLM engineering roadmaps
- Multiple mentees secured technical AI/ML internships through hands-on project mentorship
- Teaching AI/ML tooling in community sprints

### 7.4 Director General — IIT Delhi Model United Nations (IITD MUN'24)
- **Date:** Mar 2024
- **Location:** New Delhi, India
- **Scope:** 200+ delegates (MLH resume)
- Chaired multi-delegation committees on geopolitical, humanitarian, and economic policy
- Mediated opposing blocs
- Produced formal conflict-resolution reports adopted by 3 committees

### 7.5 Best Delegate Awards — MUN Circuit
- **Indraprastha MUN** — Nov 2022 | India — Best Delegate on AI governance committee
- **Bharti Public School MUN** — Nov 2023 | India — Best Delegate on digital trade & APEC economic integration committee
- Policy domains central to ASEAN and Indo-Pacific governance reform

### 7.6 Founder — Sparker Kit
- **Age at founding:** 16 (approx. 2023)
- **Context:** Won 10-Day Entrepreneurship Hackathon
- Revenue generated: ₹40,000
- Profit: ₹20,000
- End-to-end venture: ideation → sales in single sprint
- Post-win: mentored school peers on product thinking

### 7.7 Masterclass Organiser & Student Panelist
- **Organisation:** Newton School of Technology
- **Duration:** 2025 – Present
- Organised masterclasses with Forbes 30 Under 30 founders on EdTech scaling
- Hosted senior leaders from: Adani, IndiGo, Airtel, Upwork, Everstream Analytics
- Topic focus: AI-driven transformation in South & Southeast Asia

---

## 8. CERTIFICATIONS & RECOGNITION

| Achievement | Details | Date |
|---|---|---|
| NPTEL (IIT Bombay) | LLMs using Python | Dec 2025 |
| Hacktoberfest 2025 | Top 10,000 / 98,000+ participants globally | Oct 2025 |
| Google Big Code 2026 | Top 15,000 / 150,000+ participants | 2026 |
| Open Source Connect Global (OSCG) 2026 | Recognised Contributor | Feb 2026 |
| GirlScript Summer of Code (GSSoC) 2026 | Recognised Contributor | Apr 2026 |
| Sparker Kit | Winner, 10-Day Entrepreneurship Hackathon (₹40K revenue, ₹20K profit) | Age 16 (~2023) |
| Examination Scribe | For students with physical disabilities, Cambridge School, New Delhi | 2023–2024 |
| HPAIR 2026 | Selected Delegate (Harvard Asia-Pacific conference, 50+ countries) | 2026 |

---

## 9. IMPACT AT A GLANCE

| Metric | Value | Source |
|--------|-------|--------|
| Total users across live products | 12,000+ | All |
| Countries reached | India, Vietnam, Indonesia, Philippines | All |
| Ask My Notes users | 700+ | All |
| Virtual Robos users | 7,800+ | All |
| Science Lab users | 1,600+ | All |
| RepoGraph users | 1,800+ | All |
| Adversarial prompts tested | 528 | All |
| Failure categories tested | 6 | All |
| Baseline violation rate | 20.5% | All |
| Violation rate post-guardrails | 0.0% | All |
| Hallucination failure rate (baseline) | 4.5% | All |
| NDCG@10 improvement over BM25 | 57% | All |
| Query-doc pairs in ranking model | 2M+ | All |
| Agentic RAG context retrieval accuracy | 92% | SWE resume |
| Open source lines contributed | 8,000+ | MLH resume |
| Merged PRs (open source) | 6+ | MLH resume |
| Peers mentored | 10+ / 20+ ⚠️ | ABOUTME vs SWE |
| Hackathon teams judged | 20+ / 100+ ⚠️ | ABOUTME vs SWE |
| MUN committees mediated | 3 | All |
| MUN delegates | 200+ | MLH resume |
| Coding experience | Since age 9 (~10+ years) | All |

---

## 10. RESUME VARIANTS & POSITIONING

Lakshya maintains multiple resume versions tailored to specific audiences:

| Resume File | Target Audience | Key Emphasis |
|---|---|---|
| `hpair_resume_.pdf` | HPAIR (Harvard Asia-Pacific conference) | Leadership, MUN, global engagement, Asia-Pacific policy |
| `LakshyaGupta_resume.pdf` | SWE / general tech roles | CS fundamentals, OOP, debugging, A/B testing, HPAIR mention |
| `resume-mlh.pdf` | MLH Fellowship | Open source, merged PRs, Git workflows, community contribution |
| `ABOUTME.md` | Comprehensive personal record | All-encompassing; most complete project list |

---

## 11. KEY NARRATIVE THREADS

These themes appear consistently across all documents and represent Lakshya's core identity:

1. **Real-world scale:** Every major project has user numbers — not toy demos
2. **Asia-Pacific focus:** Deployed tools in India, Vietnam, Indonesia, Philippines; MUN wins on ASEAN/APEC policy; HPAIR delegate
3. **Responsible AI:** LLM evaluation, hallucination mitigation, guardrails, explainability, ASEAN governance alignment
4. **Teaching & community:** Mentoring peers, organising masterclasses, judging hackathons, facilitating workshops
5. **Early achiever:** Coding since age 9; founded a company at 16; now building production systems as a second-year undergrad
6. **Open source:** Active contributor across 3 global programmes; full professional Git workflow

---

## 12. ADDITIONAL CONTEXT FROM MLH COVER LETTER

*(Unique details only in the MLH resume's cover letter section)*

- Contributed to Virtual Robos with full CONTRIBUTING.md lifecycle and GitHub Actions CI integration
- Ask My Notes supports: Chain-of-Thought MCQs, flashcards, Socratic viva, voice interaction
- RepoGraph design principle: "factual graph strictly separated from AI inference" — no LLM hallucination over code structure
- Has worked in unfamiliar codebases under international maintainer review
- Taught AI/ML tooling in community sprints
- Post-win from Sparker Kit: mentored school peers on product thinking

---

*Last compiled: June 2026 | Cross-referenced from 4 source documents*
