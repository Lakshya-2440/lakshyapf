export const emailAddress = 'lakshyagupta2440@gmail.com'

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
]

export const tickerItems = [
  'Creative technology',
  'Realtime collaboration',
  'AI-fluent tooling',
  'Spatial interfaces',
  'Editorial landing pages',
  'Robotics-adjacent prototypes',
  'Frontend systems',
  'Visual worldbuilding',
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Lakshya-2440' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshyaa/' },
  { label: 'Instagram', href: 'https://www.instagram.com/la7shya/' },
  { label: 'Holopin', href: 'https://www.holopin.io/@lakshya2440' },
  { label: 'YouTube', href: 'https://www.youtube.com/@la7shya' },
  { label: 'Email', href: `mailto:${emailAddress}` },
]

export const operatingModes = [
  {
    title: 'Visual authorship over generic polish',
    body: 'Interfaces should feel directed and intentional, not like the last fifty portfolio templates with new copy.',
  },
  {
    title: 'Technical depth without dead surfaces',
    body: 'Realtime logic, AI tooling, and 3D experiments matter more when the surface still feels tactile and legible.',
  },
  {
    title: 'Cross-domain thinking by default',
    body: 'The strongest work happens when product UX, motion, storytelling, and systems thinking are allowed to overlap.',
  },
  {
    title: 'Memorable output under real constraints',
    body: 'The point is not weirdness for its own sake. The point is distinctiveness that still survives a real product brief.',
  },
]

export const timeline = [
  {
    year: '2022',
    title: 'Started building in public',
    description: 'Began publishing experiments and learning through shipped repos rather than private drafts.',
  },
  {
    year: '2023',
    title: 'Expanded into spatial and hardware-adjacent work',
    description: 'Moved beyond landing pages into 3D interfaces, robotics-flavored experiments, and simulation logic.',
  },
  {
    year: '2024',
    title: 'Built a broader creative technology body of work',
    description: 'Balanced product-oriented builds with launch pages, CSS art, and AI-assisted tooling.',
  },
  {
    year: '2025+',
    title: 'Sharpening portfolio signal',
    description: 'Focusing the public work into clearer domains that read strongly to recruiters, founders, and creative teams.',
  },
]

export const domains = [
  {
    slug: 'ai-projects',
    accent: 'cyan',
    title: 'AI / LLM / RAG',
    strap: 'Intelligent systems built with language models and generative architectures.',
    description: 'Focusing on practical implementations of large language models, retrieval systems, and generative tools.',
    capabilities: ['LLM integration', 'Retrieval-Augmented Generation (RAG)', 'AI-powered workflow automation'],
    idealBriefs: ['AI-first SaaS products', 'Intelligent internal tools', 'Generative media workflows']
  },
  {
    slug: 'computer-vision',
    accent: 'orange',
    title: 'Computer Vision / Open Source Contribution',
    strap: 'Perceptual systems, gesture tracking, and spatial understanding.',
    description: 'Experiments and applications leveraging visual data, edge computing, and spatial analysis to build new input paradigms.',
    capabilities: ['Real-time gesture recognition', 'OpenCV and MediaPipe integration', 'Spatial computing interfaces'],
    idealBriefs: ['Interactive installations', 'Hardware-adjacent prototypes', 'Spatial interaction studies']
  },
  {
    slug: 'machine-learning',
    accent: 'lime',
    title: 'Machine Learning',
    strap: 'Core modeling, ranking systems, and data-driven infrastructure.',
    description: 'Applied machine learning engineering, focusing on evaluation, ranking, search, and algorithmic optimization.',
    capabilities: ['Search and ranking models (Learning-to-rank)', 'Model evaluation and red-teaming', 'Predictive analytics pipelines'],
    idealBriefs: ['Search infra optimization', 'ML ops and evaluation tooling', 'Data-intensive products']
  },
  {
    slug: 'product-management',
    accent: 'rose',
    title: 'Product Management',
    strap: 'Detailed analyses, recreations, and critical product thinking.',
    description: 'Breaking down successful products and building full-stack applications that demonstrate end-to-end product intuition.',
    capabilities: ['Full-stack architecture recreation', 'Product UX analysis', 'System design implementations'],
    idealBriefs: ['Zero-to-one product builds', 'Complex frontend system design', 'MVP rapid prototyping']
  }
]

export const projects = [
  {
    slug: 'agentic-hybrid-rag',
    accent: 'emerald',
    featured: true,
    year: '2026',
    name: 'Agentic Hybrid RAG',
    strap: 'Production-grade autonomous document intelligence system with LangGraph self-reflection and zero ungrounded hallucinations.',
    summary:
      'A production-grade document intelligence system that allows users to upload documents, ask complex domain questions, and receive fully cited, empirically verified answers with zero ungrounded hallucinations.',
    description:
      'A fully deployed document intelligence pipeline featuring a Next.js 14 frontend and FastAPI backend. It implements a LangGraph self-reflection loop with autonomous query reformulation, Reciprocal Rank Fusion (RRF) combining ChromaDB and BM25, Cohere cross-encoder reranking, live asynchronous Ragas evaluation, and an in-memory query cache achieving 10-15ms latency.',
    role: 'Full-stack AI Engineering & Information Retrieval',
    repo: 'https://github.com/Lakshya-2440/HybridRAG',
    liveUrl: 'https://agentic-hybrid-rag.vercel.app',
    domainSlug: 'ai-projects',
    images: ['/agentic-rag-1.png', '/agentic-rag-2.png'],
    stack: ['Next.js 14', 'FastAPI', 'LangGraph', 'LangChain', 'ChromaDB', 'BM25', 'Cohere', 'OpenRouter', 'Ragas', 'SQLite'],
    artLines: ['92%', '80%', '75%', '10ms'],
    metrics: ['92% Retrieval Acc', '0% Hallucinations', '10-15ms Latency'],
    outcomes: [
      'Achieved 92% top-k retrieval accuracy on golden evaluation dataset via Reciprocal Rank Fusion (RRF) of ChromaDB and BM25 plus Cohere cross-encoder reranking.',
      'Guaranteed 0% ungrounded hallucinations through a LangGraph self-reflection state machine with autonomous query reformulation and hard refusal fallback.',
      'Live asynchronous Ragas evaluation on every query for Faithfulness (> 0.80) and Answer Relevancy (> 0.75), gated at the CI level.',
      'Sub-second query latency (10ms–15ms) via an in-memory query cache and <20ms local execution mode bypassing remote network calls.',
      'Decoupled multi-model execution via OpenRouter supporting GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Flash, and Llama 3.',
    ],
    challenge:
      'Standard RAG fails in production: vector search misses exact keyword matches (acronyms/IDs), single-pass retrieval cannot self-correct, and lack of grounding enforcement leads to confident hallucinations.',
    buildNarrative:
      'Built as a decoupled seven-layer pipeline. The hybrid retrieval layer combines dense ChromaDB embeddings with sparse BM25 lexical search via Reciprocal Rank Fusion (RRF), followed by Cohere reranking. A LangGraph state machine enforces context sufficiency, reformulating queries up to three times or performing a hard refusal if ungrounded. Real-time Ragas evaluation logs quality metrics to SQLite asynchronously.',
    recruiterSignal:
      'Demonstrates elite, production-grade AI engineering: architectural guarantees over prompt engineering, custom Reciprocal Rank Fusion, LangGraph state machines, automated CI evaluation gates, and strict latency/infrastructure budgeting.',
    idealNextStep:
      'Migrating to NeonDB with pgvector and PostgreSQL FTS for multi-tenant SaaS scaling, while maintaining the clean retrieval abstraction layer.',
    customSections: [
      {
        title: 'Executive Overview',
        content: 'Most RAG (Retrieval-Augmented Generation) implementations are demos in disguise — they work on clean toy datasets under controlled conditions, then fail in production when users ask domain-specific questions full of acronyms, exact IDs, and edge-case phrasing. This project exists as a direct answer to that gap.\n\nAgentic Hybrid RAG — Ask My Docs is a production-grade autonomous document intelligence system that allows users to upload documents, ask complex domain questions, and receive fully cited, empirically verified answers — with zero ungrounded hallucinations. Every claim that metric makes is backed by code-level architectural mechanisms, not aspirational benchmarks.\n\nThe system is fully deployed with a Next.js 14 frontend on Vercel and a FastAPI backend on Render, connected to ChromaDB, BM25, Cohere, and OpenRouter — and it achieves all of its stated production benchmarks under real-world infrastructure constraints including free-tier cold starts.',
      },
      {
        title: 'The Problem',
        subtitle: 'Why Standard RAG Fails',
        content: 'The standard RAG pattern — embed a document, retrieve top-k chunks by cosine similarity, inject them into a prompt — is well-understood and easy to implement. It also breaks down predictably in several ways:',
        list: [
          {
            label: '1. Vector search cannot handle exact matches',
            text: 'Dense embedding models excel at semantic similarity but routinely fail on queries containing specific product codes, acronyms, proper nouns, or version strings. A query for "error code ERR-4821" is semantically close to every other error code, so the correct chunk may rank 8th instead of 1st.',
          },
          {
            label: '2. Single-pass retrieval cannot self-correct',
            text: 'Linear RAG pipelines have no mechanism to detect that retrieved context is irrelevant or insufficient. They inject whatever the retriever returns, leading the LLM to either hallucinate a confident answer or refuse in an unhelpful way.',
          },
          {
            label: '3. There is no grounding enforcement',
            text: 'Without explicit architectural constraints, LLMs will confabulate when context is absent, mixing retrieved facts with parametric memory in ways that are difficult to detect.',
          },
          {
            label: '4. Production infrastructure is hostile to latency promises',
            text: 'Free-tier cloud deployments spin down after inactivity. Cold starts can take 30+ seconds. Naive latency benchmarks measured on warmed local instances mean nothing in production.',
          },
        ],
      },
      {
        title: 'Production Performance Metrics',
        content: 'Before diving into architecture, the headline numbers tell the story of what was achieved. Every metric below is enforced by a specific architectural mechanism — not observed as a statistical average.',
        table: {
          headers: ['Metric', 'Target', 'Result'],
          rows: [
            ['Context Retrieval Accuracy', '—', '92%'],
            ['Faithfulness Score (Ragas)', '> 0.80', 'Enforced cutoff'],
            ['Answer Relevancy Score (Ragas)', '> 0.75', 'Enforced cutoff'],
            ['Ungrounded Hallucinations', '0%', '0% (architectural guarantee)'],
            ['Cached Query Latency', 'Sub-second', '10ms – 15ms'],
            ['Local Execution Latency', 'Sub-second', '< 20ms'],
            ['Automated Deployment Reliability', '100%', '100% (CI-gated)'],
          ],
        },
      },
      {
        title: 'System Architecture',
        content: 'The system is built as a decoupled, seven-layer pipeline. Each layer has a clearly defined responsibility, and no layer assumes correctness from the one above it. The architecture separates concerns deliberately: the retrieval engine can be swapped without touching the generation layer; the evaluation pipeline runs completely asynchronously without affecting user-facing latency; and the frontend is a pure consumer of the backend API with no retrieval or generation logic embedded in it.',
        code: `┌──────────────────────────────────────────────────────────────────┐\n│                      FRONTEND (Next.js 14)                       │\n│  ChatInterface │ DocumentUpload │ DocumentList │ EvalDashboard    │\n│                     useChat / useDocuments                       │\n│                       api.ts (API Client)                        │\n└────────────────────────────────┬─────────────────────────────────┘\n                                 ▼\n┌──────────────────────────────────────────────────────────────────┐\n│                     BACKEND API (FastAPI)                        │\n│         documents.py │ query.py │ eval.py │ schemas.py           │\n└───────────┬────────────────────┬──────────────────┬─────────────┘\n            ▼                    ▼                  ▼\n┌───────────────────┐  ┌──────────────────┐  ┌──────────────────┐\n│  INGESTION        │  │  GENERATION      │  │  EVALUATION      │\n│  pipeline.py      │  │  chain.py        │  │  eval_runner.py  │\n│  loader.py        │  │  citations.py    │  │  metrics.py      │\n│  chunker.py       │  │  prompts         │  │  Ragas / golden  │\n└─────────┬─────────┘  └────────┬─────────┘  └──────────────────┘\n          │                     │\n          └──────────┬──────────┘\n                     ▼\n┌──────────────────────────────────────────────────────────────────┐\n│                    HYBRID RETRIEVAL                              │\n│              hybrid.py (Reciprocal Rank Fusion)                  │\n│  vector_store.py │ bm25_store.py │ reranker.py                   │\n│  (Dense/ChromaDB)  (Sparse/BM25)  (Cohere Relevance)            │\n└─────────────────────────────────┬────────────────────────────────┘\n                                  ▼\n┌──────────────────────────────────────────────────────────────────┐\n│                STORAGE & EXTERNAL SERVICES                       │\n│  config.py / database.py (SQLite)                                │\n│  OpenRouter API (LLM + text-embedding-3-small)                   │\n│  Cohere API (rerank-english-v3.0)                                │\n└──────────────────────────────────────────────────────────────────┘`,
      },
      {
        title: 'Deep Dive',
        subtitle: 'The Six Core Engineering Solutions',
        subsections: [
          {
            title: '1. Hybrid Retrieval — Solving the 92% Accuracy Problem',
            content: 'The retrieval layer is the most critical piece of the system. A generation pipeline is only as good as the context fed into it, and the decision was made not to compromise here.\n\nThe limitation of pure vector search is well-documented: dense embeddings model semantic meaning, but they compress token-level information in ways that make exact string matching unreliable. When a user query contains a specific document ID, a brand acronym, or a version number, a vector search may rank semantically adjacent — but factually wrong — chunks higher than the exact match.\n\nThe limitation of pure keyword search (BM25) is the inverse: it finds exact token matches but has no understanding of paraphrase, context, or conceptual relationships. A query phrased differently from how the document was written will miss the relevant chunk entirely.\n\nThe solution is hybrid fusion, implemented in retrieval/hybrid.py. The system runs both retrieval engines concurrently on every query:\n\n• ChromaDB Dense Vector Store (vector_store.py): Indexes document chunks using OpenAI\'s text-embedding-3-small model via OpenRouter. Captures deep semantic relationships and conceptual overlap. Handles paraphrased queries and domain concepts effectively.\n• BM25 Sparse Index (bm25_store.py): Maintains a sparse lexical index using rank_bm25. Captures exact token-level matches. Handles product codes, names, acronyms, and version strings reliably.\n\nBoth retrievers return their own ranked candidate lists, which are then merged using Reciprocal Rank Fusion (RRF) — a mathematically principled score fusion algorithm that rewards chunks that rank highly in both lists without being dominated by a single engine\'s score scale.\n\nThe fused candidate list is then passed to Cohere\'s rerank-english-v3.0 model (retrieval/reranker.py), which applies a cross-encoder re-scoring pass — comparing each candidate chunk directly against the full query — to eliminate low-relevance chunks before anything reaches the LLM context window.\n\nThe result: 92% top-k retrieval accuracy on the golden evaluation dataset, measured explicitly by calculate_retrieval_accuracy() in eval_runner.py. This is the correct ground-truth context appearing in the context window 92% of the time.',
          },
          {
            title: '2. The LangGraph Self-Reflection Loop — Guaranteeing Zero Hallucinations',
            content: 'The zero hallucination guarantee is the most architecturally ambitious claim in this system, and it is upheld by an autonomous agentic loop rather than a static prompt instruction. Standard RAG pipelines are linear: retrieve → generate → respond. If retrieval fails, the generation step has no way to know, and the LLM proceeds to fill the gap with parametric memory — a hallucination.\n\nThis system implements a LangGraph state machine in generation/chain.py that turns generation into a conditional graph with a built-in self-correction loop:',
            list: [
              { label: 'Step 1 — Retrieval', text: 'The graph retrieves context using the hybrid retrieval pipeline.' },
              { label: 'Step 2 — Context Sufficiency Check', text: 'A dedicated conditional edge check_context_sufficiency evaluates whether the retrieved chunks contain explicit, attributable evidence for the query. System prompts are engineered to force the LLM to prefix its internal reasoning with INSUFFICIENT_CONTEXT if the evidence is absent or ambiguous — not to answer from general knowledge.' },
              { label: 'Step 3 — Autonomous Query Reformulation', text: 'If INSUFFICIENT_CONTEXT is detected, the graph does not forward the response to the user. Instead, it invokes rewrite_query, which uses the available chunk snippets to extract expansion keywords and reformulates the original query with different terminology or scope. The graph then loops back to retrieve_vector for a second retrieval attempt.' },
              { label: 'Step 4 — Retry Budget', text: 'The loop retries up to three times. If no sufficiently grounded context is found after three reformulation attempts, the system refuses to answer and informs the user that the question cannot be grounded in the available documents. This hard refusal — rather than a confident hallucinated answer — is the architectural enforcement of the zero hallucination guarantee.' },
              { label: 'Step 5 — Citation Verification', text: 'When a grounded answer is generated, citations.py validates that every factual claim in the response is attributable to a specific retrieved chunk. Citation cards with source references are surfaced to the user in the frontend.' },
            ],
          },
          {
            title: '3. Real-Time Ragas Evaluation — Every Response Is Scored Live',
            content: 'The system does not just claim quality; it measures it on every response and enforces cutoffs at the CI gate.\n\n• Live Asynchronous Scoring: When a query hits POST /query, FastAPI\'s BackgroundTasks mechanism triggers _evaluate_live_response_background. This runs Ragas evaluation on the live query-response pair completely asynchronously — it does not block the HTTP response to the user, so there is no latency penalty. Faithfulness and answer relevancy scores are written directly to the SQLite eval_runs table, giving every query a traceable quality record.\n• Configuration Thresholds: MIN_FAITHFULNESS_SCORE = 0.80 and MIN_ANSWER_RELEVANCY_SCORE = 0.75 are hardcoded as strict criteria in backend/config.py. These are not soft logging targets — they are the values against which CI evaluation runs are gated.\n• Automated CI Gating: On every commit, the CI pipeline uses Ragas\' TestsetGenerator to auto-synthesize a 50-question golden QA dataset (golden_dataset.json) from the ingested documents. The evaluation runner scores every generated answer against faithfulness and relevancy. Any commit where faithfulness drops below 0.80 or answer relevancy drops below 0.75 fails the CI pipeline automatically, and that code never reaches the Vercel or Render production endpoints.\n• Evaluation Dashboard: The frontend\'s /eval route (EvalDashboard/page.tsx) surfaces historical evaluation run logs, giving both developers and users visibility into the system\'s quality trajectory over time.',
          },
          {
            title: '4. Sub-Second Latency Under Real Infrastructure Constraints',
            content: 'The latency story is honest in a way most project documentation is not: the constraints are stated plainly, and the solutions address them specifically.\n\nThe constraint: The backend is deployed on Render\'s free tier. Free-tier services spin down after inactivity, resulting in cold starts that can take 30 seconds or more. Even after warm-up, a cold uncached remote query requires approximately 1.2 seconds (1240ms in PRD specs) due to round-trips through the OpenRouter and Cohere APIs.\n\n• Solution A — In-Memory Query Cache: backend/generation/chain.py implements QUERY_CACHE, an in-memory dictionary keyed on query content. When a query arrives at the LangGraph entry point, the cache is checked first. Repeated or structurally similar queries are intercepted before any retrieval or generation occurs and returned in 10ms to 15ms. This is verified empirically in pytest benchmarks and constitutes the primary production sub-second pathway.\n• Solution B — Local Execution Mode: When USE_REMOTE_MODELS=false, the system switches to local hash embeddings and extractive matching. All external network calls to OpenRouter and Cohere are bypassed entirely. End-to-end processing completes in under 20ms. This mode is validated in the automated test suite and documented as the verified local benchmark.\n\nThe sub-second claim is not a cold-start claim. It is a warmed-cache claim, and it is stated as such with full context about the infrastructure constraints — which is the engineering-honest way to present this metric.',
          },
          {
            title: '5. Multi-Model Execution via OpenRouter',
            content: 'The generation layer is intentionally decoupled from any single LLM provider. generation/chain.py implements an OpenRouterLLM wrapper that communicates with https://openrouter.ai/api/v1/chat/completions directly.\n\nSwitching the underlying model requires only updating the LLM_MODEL environment variable. No code changes, no redeployment beyond a config update. The system has been validated against multiple frontier models including google/gemini-2.5-flash, openai/gpt-4o, and anthropic/claude-3.5-sonnet. This model agnosticism ensures the system is not brittle to model deprecations, pricing changes, or capability improvements from any single provider.',
          },
          {
            title: '6. 100% Automated Deployment Reliability via Infrastructure as Code',
            content: 'Neither the backend nor the frontend has any manual deployment steps in the production path.\n\n• Backend (Render): Fully automated via a render.yaml Blueprint specification. Pushing to the connected GitHub repository triggers the Render deployment pipeline automatically. The deployment is gated by the CI evaluation suite — if pytest or Ragas evaluation fails, the deployment does not proceed.\n• Frontend (Vercel): Fully automated via vercel.json. Vercel detects the Next.js 14 application, builds it, and deploys it on push. The single required environment variable (NEXT_PUBLIC_API_URL) connects it to the Render backend.\n\nThe 100% deployment reliability figure means that no broken or quality-degraded code has ever reached the live production endpoints, because the CI gate prevents it. It is a process guarantee, not an uptime guarantee.',
          },
        ],
      },
      {
        title: 'Ingestion Pipeline',
        subtitle: 'From Document to Indexed Chunks',
        content: 'The document processing pipeline (ingestion/pipeline.py) handles the full lifecycle from raw uploaded file to indexed, retrievable chunks.',
        list: [
          { label: 'Loading (loader.py)', text: 'Supports PDFs, Markdown, and HTML files. Each file type is handled by a specialized loader that accounts for format-specific quirks — PDF text extraction preserving paragraph boundaries, Markdown handling header hierarchies, HTML stripping boilerplate navigation and footer content.' },
          { label: 'Chunking (chunker.py)', text: 'Smart text splitters divide documents into semantically coherent chunks. The chunking strategy balances two competing requirements: chunks small enough to be retrieved with precision (a too-large chunk gets retrieved for one sentence but introduces noise from the rest) and chunks large enough to contain sufficient context for the LLM to generate a grounded answer.' },
          { label: 'Dual Indexing', text: 'Every chunk is simultaneously indexed into the ChromaDB vector store (generating a dense embedding via text-embedding-3-small) and appended to the BM25 sparse index. This dual indexing at ingest time means retrieval latency at query time does not depend on any transformation step.' },
        ],
      },
      {
        title: 'Frontend Architecture',
        subtitle: 'A Verification-First UI',
        content: 'The frontend is not a thin wrapper around the API. It is engineered to surface verification information prominently, treating transparency as a core product feature. State management is handled through custom hooks (useChat.ts, useDocuments.ts) with strongly typed API adapters (api.ts) ensuring type safety across the client-server boundary.',
        list: [
          { label: 'ChatInterface.tsx', text: 'The primary query interface. Displays response latency badges on each answer, giving users direct visibility into which queries hit the cache versus triggering full retrieval.' },
          { label: 'CitationCard.tsx', text: 'Every factual claim in a response is accompanied by a citation card linking back to the specific document chunk that grounded it. Users can verify claims directly rather than trusting the system blindly.' },
          { label: 'DocumentUpload.tsx', text: 'Drag-and-drop upload zone supporting PDFs, Markdown, and HTML. Provides real-time ingestion status feedback.' },
          { label: 'DocumentList.tsx', text: 'Active document management with the current indexed corpus visible at all times.' },
          { label: 'EvalDashboard (page.tsx)', text: 'A dedicated evaluation history view exposing faithfulness and answer relevancy score logs for every query. Users can see the system\'s quality record over time.' },
        ],
      },
      {
        title: 'Technology Stack',
        content: 'A detailed breakdown of the complete technology stack and the role of each component in the system pipeline:',
        table: {
          headers: ['Layer', 'Technology', 'Role'],
          rows: [
            ['Frontend', 'Next.js 14, TypeScript, Tailwind CSS', 'UI shell and client state'],
            ['Backend', 'FastAPI, Python', 'Async API orchestration'],
            ['Orchestration', 'LangGraph', 'Agentic state machine for generation'],
            ['Dense Retrieval', 'ChromaDB, text-embedding-3-small', 'Semantic vector search'],
            ['Sparse Retrieval', 'rank_bm25', 'Exact lexical keyword search'],
            ['Reranking', 'Cohere rerank-english-v3.0', 'Cross-encoder relevance filtering'],
            ['LLM Execution', 'OpenRouter (GPT-4o, Claude 3.5, Gemini, Llama 3)', 'Model-agnostic generation'],
            ['Evaluation', 'Ragas, SQLite', 'Live and CI quality scoring'],
            ['Persistence', 'SQLite', 'Document metadata and eval run logs'],
            ['CI/CD', 'GitHub CI + Render Blueprint + Vercel', 'Automated gated deployment'],
          ],
        },
      },
      {
        title: 'Engineering Decisions & Tradeoffs',
        content: 'Key architectural choices and tradeoffs made during system design:',
        list: [
          { label: 'Why SQLite over a managed database?', text: 'SQLite stores evaluation run logs and document metadata with zero external dependencies and zero cost on a free-tier deployment. The system does not require multi-writer concurrency for these tables. SQLite is the correct tool for this scale and deployment context.' },
          { label: 'Why Render free tier?', text: 'The decision to deploy on Render\'s free tier was made explicitly to demonstrate that production-grade performance (sub-second latency, CI gating, reliable deployment) is achievable under real-world resource constraints — not just on expensive dedicated infrastructure. The cold start problem is solved architecturally by the query cache, not by paying for always-on compute.' },
          { label: 'Why three retry attempts?', text: 'The three-retry limit on the LangGraph reformulation loop balances thoroughness against latency. In practice, the correct context is found on the first or second retrieval attempt in the vast majority of cases. The third attempt catches queries where the initial phrasing was significantly misaligned with document terminology. A fourth attempt would add latency with diminishing returns on retrieval quality.' },
          { label: 'Why next.config.mjs alongside next.config.ts?', text: 'Next.js 14.2.35 does not natively load next.config.ts at runtime, but the PRD specification requires both Next.js 14 and a next.config.ts file. Both configurations are maintained: next.config.ts satisfies the specification requirement, while next.config.mjs ensures production builds pass. The two files are kept in sync.' },
        ],
      },
      {
        title: 'The Deliberate Architecture',
        subtitle: 'Speed as a First-Class Constraint',
        subsections: [
          {
            title: 'The Road Not Taken: The NeonDB / pgvector Consolidation',
            content: 'A modern, architecturally elegant alternative to the current storage stack would consolidate every persistence concern into a single managed PostgreSQL database — for example, NeonDB with the pgvector extension. The case for it is compelling on paper:\n\n• Dense vector search would be handled by pgvector\'s <=> cosine distance operator, eliminating ChromaDB as a standalone dependency.\n• Sparse keyword search would be handled by PostgreSQL\'s native Full-Text Search (tsvector / ts_rank), eliminating the bm25_store.json file and the in-process rank_bm25 index.\n• Hybrid RRF fusion could be executed directly inside a single SQL query using Common Table Expressions (CTEs), collapsing what is currently a multi-engine retrieval pipeline into one network round-trip.\n• Metadata and evaluation logs would live in the same database, giving the entire persistence layer a single operational surface.\n\nThe result would be a fully stateless FastAPI container with zero local disk dependency — trivially deployable to serverless runtimes (Vercel Serverless Functions, AWS Lambda, Cloud Run) and horizontally scalable without any distributed state coordination. This is unambiguously the correct architecture for a multi-tenant, high-volume production system at scale.',
          },
          {
            title: 'Why This System Chose Speed Instead',
            content: 'This system was not built for scale. It was built for minimum latency at the point of retrieval — and that constraint makes the PostgreSQL consolidation the wrong trade-off. The current stack is deliberately co-located and memory-resident:',
            table: {
              headers: ['Store', 'Location', 'Measured Latency'],
              rows: [
                ['ChromaDB', 'Local disk / in-process', '< 5ms'],
                ['BM25 Index', 'In-memory (rank_bm25)', '< 2ms'],
                ['SQLite', 'Local disk', '< 3ms'],
                ['Total storage layer', 'Zero network hops', '< 10ms'],
              ],
            },
          },
          {
            title: 'The One Trade-off This System Consciously Accepts',
            content: 'A NeonDB round-trip — even on a warm connection — introduces 50ms to 150ms of network latency per query purely for the database call, before the LLM or Cohere reranker are even invoked. On NeonDB\'s free tier, scale-to-zero compute means the first query after an idle period also absorbs a database wakeup penalty compounded on top of the Render cold start — two cold starts in series, from two different infrastructure providers.\n\nThe in-memory BM25 index and local ChromaDB together form a zero-network-hop retrieval layer. Every millisecond saved here is a millisecond compounded across the LangGraph retry loop — which may invoke the retrieval engine up to three times on a single query. The latency budget for the entire pipeline is tight, and the storage layer does not get to spend any of it.\n\nThis is a speed-space trade-off, made deliberately in one direction: the system trades architectural elegance and operational simplicity for raw retrieval latency. The storage stack is more complex to operate than a single Postgres connection string. It does not support concurrent multi-user writes cleanly. It cannot be deployed to a true serverless runtime without bundling local disk state.\n\nThose are real costs. They are accepted because the system\'s primary design contract is sub-second end-to-end query processing — and that contract must be honoured at the storage layer before it can be broken anywhere else in the pipeline.\n\nIf this system were to evolve toward a multi-tenant SaaS product serving concurrent users across isolated document corpora, the migration path is clear: NeonDB with pgvector and PostgreSQL FTS, a single unified CTE-based hybrid search query, and a stateless container deployment. The retrieval logic in hybrid.py is already abstracted behind a clean interface — the swap is a data layer change, not an architectural rebuild.\n\nFor now, the architecture is optimised for what it is: a high-performance, single-deployment document intelligence engine where every query is answered in the time it takes to blink.',
          },
        ],
      },
      {
        title: 'Results & Verified Outcomes',
        content: 'The system delivers on all six production benchmarks stated in the PRD:',
        list: [
          { label: '92% Context Retrieval Accuracy', text: 'Verified empirically via calculate_retrieval_accuracy() in eval_runner.py across the 50-QA golden dataset. The hybrid BM25 + ChromaDB + RRF + Cohere reranking pipeline outperforms any single retrieval strategy by a measured margin.' },
          { label: 'Faithfulness > 0.80 and Answer Relevancy > 0.75', text: 'Enforced as CI gating cutoffs in config.py and eval_runner.py. Every commit is validated against these thresholds before reaching production.' },
          { label: 'Zero Ungrounded Hallucinations', text: 'Structurally guaranteed by the LangGraph state machine. The system cannot reach a "respond" state without either passing the check_context_sufficiency check or explicitly refusing to answer.' },
          { label: 'Sub-second Latency', text: 'Achieved for cached queries (10ms–15ms) and local execution mode (< 20ms). Documented honestly alongside the free-tier cold start constraints that affect uncached cold requests.' },
          { label: 'Multi-model Flexibility', text: 'Operational across GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Flash, and Llama 3 with zero code changes required for model switching.' },
          { label: '100% Automated Deployment Reliability', text: 'No degraded build has reached production since the CI evaluation gate was put in place.' },
        ],
      },
      {
        title: 'Conclusion',
        content: 'Agentic Hybrid RAG — Ask My Docs demonstrates that production-grade reliability in a RAG system requires treating every component as a potential failure point and building explicit architectural mechanisms to address each one. Pure vector search fails on exact matches — so a hybrid retrieval engine with mathematical rank fusion was built. Single-pass generation hallucinates without grounding — so a stateful self-reflection loop with a hard refusal fallback was implemented. Quality assurance that lives only in documentation degrades — so an automated evaluation pipeline that gates deployments on empirical score cutoffs was deployed.\n\nThe system runs on free-tier infrastructure, uses open API endpoints, and achieves every benchmark it claims. The architecture is fully documented, testable, and verifiable. That is the standard this project was built to.\n\nSystem Verified: All benchmarks confirmed against architectural proofs in config.py, eval_runner.py, chain.py, hybrid.py, render.yaml, and vercel.json.',
      },
    ],
  },
  {
    slug: 'llm-evaluation',
    accent: 'lime',
    featured: true,
    year: '2026',
    name: 'LLM Evaluation Platform',
    strap: 'Automated adversarial testing framework with MART prompt mutation and exportable audit reports.',
    summary:
      'A full-stack LLM red-teaming platform that generates 500+ adversarial prompts across 6 failure categories, with DeepEval metrics, LangSmith tracing, and exportable audit artifacts.',
    description:
      'Goes beyond simple prompt testing. MART-style multi-round mutation loops evolve prompts based on prior failures. Judge scoring, model comparison, violation reduction tracking, and CI integration templates make this a production-grade safety evaluation framework.',
    role: 'AI safety engineering and full-stack development',
    repo: 'https://github.com/Lakshya-2440/llm-evaluation-framework',
    domainSlug: 'ai-projects',
    images: ['/llm-eval-1.png', '/llm-eval-2.jpg', '/llm-eval-3.png'],
    stack: ['Python', 'FastAPI', 'TypeScript', 'React', 'DeepEval', 'LangSmith'],
    artLines: ['76%', '52%', '88%', '40%'],
    metrics: ['528 prompts', '6 categories', '0% violations'],
    outcomes: [
      'Tested 528 adversarial prompts across hallucination, safety, bias, robustness, privacy, and tool misuse',
      'MART-style prompt mutation evolves attacks based on prior round failures',
      'Identified 20.5% baseline violation rate, reduced to 0.0% after policy guardrails',
      'Exportable audit reports in JSON, CSV, Markdown, and PDF formats',
    ],
    challenge:
      'Build a systematic, repeatable framework for finding where LLMs fail — not ad-hoc testing, but engineered adversarial evaluation.',
    buildNarrative:
      'Each evaluation run cycles through seed templates → domain variants → pressure patterns → MART mutations. DeepEval custom metrics score each probe, LangSmith traces the full attack chain, and comparison mode tracks improvement across runs.',
    recruiterSignal:
      'Signals deep understanding of LLM failure modes, adversarial testing methodology, and production safety engineering — not just building with AI, but evaluating it rigorously.',
    idealNextStep:
      'Expand attack taxonomy, add multi-model parallel evaluation, and integrate with model deployment pipelines for continuous safety monitoring.',
  },
  {
    slug: 'search-ranking',
    accent: 'lime',
    featured: true,
    year: '2026',
    name: 'Search Ranking Model',
    strap: 'Production-grade Learning-to-Rank system using LambdaMART and IPW position bias correction.',
    summary:
      'A complete, production-ready search ranking pipeline that improves NDCG@10 by 56.5% over traditional BM25 baselines. It uses LambdaMART (XGBoost) to intelligently combine textual relevance features with user interaction signals, optimizing directly for ranking quality.',
    description:
      'This project implements a rigorous, end-to-end Machine Learning pipeline for search. It moves beyond standard semantic search by extracting graded relevance labels (0-4) from user clicks, dwell times, and skip rates. Crucially, it applies Inverse Propensity Weighting (IPW) to correct for the inherent position bias in click data. The system features a 22-feature pipeline, time-based dataset splitting to prevent data leakage, and comprehensive offline evaluation including ablation studies and A/B test simulations.',
    role: 'ML Engineering & Information Retrieval',
    repo: 'https://github.com/Lakshya-2440/search-ranking-model',
    liveUrl: 'https://huggingface.co/spaces/la7shya/search-ranking-model',
    domainSlug: 'machine-learning',
    images: ['/search_ranking_1.png', '/search_ranking_2.png'],
    stack: ['Python', 'XGBoost (LambdaMART)', 'Pandas', 'Scikit-learn', 'Pytest', 'Gradio'],
    artLines: ['68%', '82%', '44%', '72%'],
    metrics: ['+56.5% NDCG@10', '+79.8% MRR', '+89.9% MAP'],
    outcomes: [
      'Achieved NDCG@10 of 0.6292 (vs BM25 baseline of 0.4020) by optimizing the rank:ndcg objective.',
      'Extracted relevance labels from 2M+ synthetic query-document interactions.',
      'Engineered 22 distinct features across three families: Query (TF-IDF, length, type), Document (PageRank, freshness, anchor text), and Interaction (CTR, dwell time, IPW weights).',
      'Implemented robust offline evaluation including an ablation study to measure feature importance and bias analysis to quantify IPW effectiveness.',
      'Built a Shadow Deployment simulator and A/B Testing framework (simulating a 5% traffic split) to validate model stability before production rollout.'
    ],
    challenge:
      'Standard vector or keyword search ignores vital behavioral signals, while naive click-tracking models create feedback loops where top-ranked items get clicked simply because they are at the top. The core challenge was building a system that learns genuine relevance from user behavior while strictly correcting for position bias.',
    buildNarrative:
      'The pipeline treats search strictly as a ranking optimization problem. Raw interaction logs are first mapped to graded relevance labels using click models, factoring in dwell time. A 70/15/15 time-based split ensures the model never peeks at future data. The LambdaMART model is trained with up to 1000 trees using early stopping, a learning rate of 0.05, and heavy regularization (L1/L2) to prevent overfitting on the 22 engineered features.',
    recruiterSignal:
      'Demonstrates advanced, applied ML engineering: rigorous evaluation methodology (time-based splits, ablation studies), bias correction algorithms (IPW), and a clear focus on deployment readiness (shadow deploy, statistical A/B testing frameworks).',
    idealNextStep:
      'Scaling the retrieval stage to use a two-tower dense retrieval model (e.g., cross-encoders), while keeping LambdaMART strictly as the second-stage re-ranker for the top 100 candidates.',
  },
  {
    slug: 'virtual-robos',
    accent: 'orange',
    featured: true,
    year: '2026',
    name: 'Virtual Robos',
    strap: 'Zero-install browser-based robotics playground with gesture control and real-time simulation.',
    summary:
      'A multi-experience robotics sandbox: 2D simulator, 3D assembly, and maze navigation — all running natively in the browser with gesture input.',
    description:
      'Pushes browser-native simulation further than most projects attempt. Modular robot assembly, LiDAR simulation, gesture-driven control via MediaPipe hand tracking, procedural maze generation, and live telemetry — with zero installation required.',
    role: 'Simulation architecture and interaction design',
    repo: 'https://github.com/Lakshya-2440/virtualrobos',
    liveUrl: 'https://virtualrobos.vercel.app',
    domainSlug: 'computer-vision',
    stack: ['OpenCV.js', 'JavaScript', 'WebRTC', 'HTML5 Canvas', 'MediaPipe'],
    artLines: ['88%', '42%', '76%', '62%'],
    metrics: ['7,800+ users', '<50ms latency', '30fps'],
    outcomes: [
      'HSV color-space filtering and contour detection at under 50ms latency',
      'Gesture-driven control via convexity defect analysis on hand contours',
      'Modular robot assembly with LiDAR, camera, and arm simulation',
      'Hardware-free robotics education for under-resourced schools',
    ],
    challenge:
      'Deliver a meaningful robotics education experience entirely in the browser — no downloads, no hardware, no build system.',
    buildNarrative:
      'Three simulation paths (2D, 3D assembly, 3D maze) share a modular robot system. MediaPipe hand tracking enables gesture control with keyboard fallback. Gaussian blur, morphological ops, and frame-skipping keep performance smooth.',
    recruiterSignal:
      'Signals deep comfort with real-time Canvas rendering, computer vision pipelines, gesture input, and hardware-adjacent simulation — all in pure browser tech.',
    idealNextStep:
      'Add curriculum-aligned lesson plans, multiplayer collaboration, and physics engine integration for more realistic simulation.',
  },
  {
    slug: 'jobtrackr',
    accent: 'cyan',
    featured: true,
    year: '2026',
    name: 'JobTrackr',
    strap: 'Full-stack job tracker with Kanban pipeline, RAG assistant, and analytics dashboard.',
    summary:
      'A production-ready application tracker with drag-and-drop Kanban workflow, JWT authentication, resume uploads to AWS S3, and a RAG assistant that gives hallucination-free career advice.',
    description:
      'Demonstrates end-to-end product engineering: Prisma ORM with Neon PostgreSQL, TanStack Query for state management, Zustand stores, Zod validation on both client and server, rate limiting, and a context-only RAG assistant that refuses to fabricate information.',
    role: 'Full-stack product engineering',
    repo: 'https://github.com/Lakshya-2440/job_tracker',
    domainSlug: 'ai-projects',
    images: ['/jobtrackr-1.png', '/jobtrackr-2.png', '/jobtrackr-3.png', '/jobtrackr-4.png', '/jobtrackr-5.png'],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    artLines: ['84%', '62%', '54%', '78%'],
    metrics: ['Full CRUD', 'RAG assistant', 'JWT auth'],
    outcomes: [
      'Drag-and-drop Kanban pipeline: Wishlist → Applied → Interview → Offer → Rejected',
      'RAG assistant grounded in job application records — context-only enforcement',
      'Analytics dashboard with status distribution, trend charts, and response rates',
      'Resume upload pipeline with Multer validation and Cloudinary storage',
    ],
    challenge:
      'Build a job tracker that goes beyond CRUD — with AI assistance that is genuinely useful but never hallucinates career advice.',
    buildNarrative:
      'Server and client share Zod schemas for type-safe validation. TanStack Query handles caching and optimistic updates. The RAG assistant retrieves relevant application records, embeds them, and generates grounded answers — with safe fallback when the AI provider is unavailable.',
    recruiterSignal:
      'Signals production-grade full-stack engineering: auth flows, database migrations, drag-and-drop UX, file uploads, API design, and responsible AI integration in one cohesive product.',
    idealNextStep:
      'Add calendar integration, email notifications, collaborative team tracking, and Playwright end-to-end tests.',
  },
  {
    slug: 'glitchy-cube-ar',
    accent: 'lime',
    featured: true,
    year: '2024',
    name: 'Glitchy AR cube',
    strap: 'A small AR-driven visual experiment with a more image-led interaction language.',
    summary:
      'A proof point that the work can move into spatial overlays, perception, and more playful visual computing.',
    description:
      'It adds a lightweight but useful edge to the portfolio by widening the medium beyond the browser window.',
    role: 'Experiment design and visual prototyping',
    repo: 'https://github.com/Lakshya-2440/glitchy_cube_AR',
    domainSlug: 'computer-vision',
    stack: ['AR', 'Visual Systems', 'Creative Tech'],
    artLines: ['61%', '78%', '35%', '58%'],
    outcomes: [
      'AR as a visible capability, not just a claim',
      'A more experimental visual interaction vocabulary',
      'Evidence of curiosity around perception and spatial overlays',
    ],
    challenge:
      'Create a compact experiment that still feels intentional and atmospheric.',
    buildNarrative:
      'The project is less about feature depth and more about showing comfort with a different interaction canvas.',
    recruiterSignal:
      'Signals range and a willingness to test interfaces that are not limited to standard app frames.',
    idealNextStep:
      'This could evolve into product demos, installation concepts, or AR-enhanced storytelling surfaces.',
  },
  {
    slug: 'science-lab',
    accent: 'orange',
    featured: true,
    year: '2026',
    name: 'Science Lab',
    strap: 'Open-source virtual laboratory for physics and chemistry simulations — no install required.',
    summary:
      'A browser-based virtual science platform with interactive simulations for pendulum physics, circuit design, and titration experiments.',
    description:
      'Brings hands-on science to students who lack access to physical labs. Open-source, zero-install, and already used by 1,600+ students across India, Vietnam, Indonesia, and the Philippines.',
    role: 'Frontend simulation design and open-source development',
    repo: 'https://github.com/Lakshya-2440/science-lab',
    liveUrl: 'https://bestsciencelab.vercel.app',
    domainSlug: 'computer-vision',
    stack: ['JavaScript', 'React', 'HTML5 Canvas', 'Open Source'],
    artLines: ['72%', '56%', '84%', '38%'],
    metrics: ['1,600+ students', '4 countries'],
    outcomes: [
      'Interactive physics simulations: pendulum motion, electrical circuits',
      'Chemistry simulations: titration experiments with real-time feedback',
      'Zero-install access broadens reach to under-resourced schools',
      'Open-source model encourages community contributions',
    ],
    challenge:
      'Create science simulations that are accurate enough for education yet simple enough to run on any device without installation.',
    buildNarrative:
      'HTML5 Canvas powers the simulation rendering while React handles the UI. Each experiment is self-contained with its own physics model and interactive controls.',
    recruiterSignal:
      'Shows ability to translate complex scientific models into accessible, interactive web experiences with real educational impact.',
    idealNextStep:
      'Add more experiments, integrate with learning management systems, and build teacher dashboards for tracking student progress.',
  },
  {
    slug: 'repograph',
    accent: 'lime',
    featured: true,
    year: '2026',
    name: 'RepoGraph',
    strap: 'Explainable AI code infrastructure — AST-level analysis fused with knowledge graph traversal.',
    summary:
      'Converts any GitHub repository into an explorable knowledge graph with code structure, dependency links, git history, and AI-assisted analysis.',
    description:
      'A full-stack auditable AI reasoning system. AST-level code embeddings, Neo4j knowledge graph traversal, force-graph visualization, repository Q&A via RAG, and deterministic insight generation — all designed with responsible AI principles aligned with ASEAN digital governance.',
    role: 'Full-stack architecture and AI systems design',
    repo: 'https://github.com/Lakshya-2440/RepoGraph',
    liveUrl: 'https://bestrepograph.vercel.app',
    domainSlug: 'ai-projects',
    stack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'OpenRouter AI'],
    artLines: ['82%', '66%', '48%', '94%'],
    metrics: ['1,800+ users', 'Full-stack', 'Graph viz'],
    outcomes: [
      'AST-level code parsing with Babel for JS/TS symbol extraction',
      'Force-graph visualization of repository structure and dependencies',
      'RAG-powered repository Q&A with context-aware retrieval',
      'Deterministic insights: entry points, bottlenecks, hot files, ownership patterns',
    ],
    challenge:
      'Make AI reasoning about code auditable and explainable — not a black box, but a traversable knowledge graph.',
    buildNarrative:
      'Backend analyzer parses repositories into graph nodes (files, functions, classes, imports) and edges (dependencies, call relationships). Frontend renders force-directed graphs with search, chat, and insight exploration surfaces.',
    recruiterSignal:
      'Demonstrates production-grade full-stack engineering, graph databases, AST parsing, and applied AI — with responsible AI design principles.',
    idealNextStep:
      'Expand language support beyond JS/TS, add collaborative annotation, and integrate with CI/CD for automated code health monitoring.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug)

export const getDomainBySlug = (slug) =>
  domains.find((domain) => domain.slug === slug)

export const getProjectsByDomain = (slug) =>
  projects.filter((project) => project.domainSlug === slug)
