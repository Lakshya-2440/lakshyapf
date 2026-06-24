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
    slug: 'ask-my-notes',
    accent: 'lime',
    featured: true,
    year: '2026',
    name: 'Ask My Notes',
    strap: 'AI study assistant that answers strictly from your own uploaded notes — no hallucinations.',
    summary:
      'An end-to-end RAG pipeline that grounds every answer in user-uploaded material, refusing to respond when the answer is not present.',
    description:
      'This project demonstrates production RAG architecture at scale: subject-scoped isolation, citation-backed answers, knowledge gap mapping, practice engines, and AI viva simulation — serving 700+ first-generation learners at zero cost.',
    role: 'Full-stack AI engineering and product design',
    repo: 'https://github.com/Lakshya-2440/AskMyNotes',
    liveUrl: 'https://bestaskmynotes.vercel.app',
    domainSlug: 'ai-projects',
    images: ['/askmynotes.png', '/askmynotes-case-study.png'],
    stack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'RAG'],
    artLines: ['92%', '58%', '78%', '44%'],
    metrics: ['700+ users', '<100ms response', 'Zero cost'],
    outcomes: [
      'Hallucination-mitigated AI tutoring with citation-backed answers',
      'Subject-scoped context isolation prevents cross-topic leakage',
      'Knowledge gap mapping tracks strong, weak, and unknown concept areas',
      'Practice engine with MCQs, flashcards, and AI viva mode',
    ],
    challenge:
      'Build an AI study tool that students can actually trust — where every answer is verifiable and the system explicitly refuses when content is missing.',
    buildNarrative:
      'The architecture separates concerns cleanly: upload → subject-based indexing → context retrieval → citation-grounded generation. Voice interaction adds accessibility for hands-free study sessions.',
    recruiterSignal:
      'Demonstrates production RAG at scale with real users, hallucination mitigation, and social impact across South and Southeast Asia.',
    idealNextStep:
      'Expand into collaborative study groups, multi-modal note support (images, diagrams), and institutional deployment.',
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
    repo: 'https://github.com/alphaonelabs/alphaonelabs-virtual-robotics-playground',
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
    repo: 'https://github.com/Lakshya-2440/LLM_EVALUATION',
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
    repo: 'https://github.com/Lakshya-2440/search_ranking',
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
]

export const featuredProjects = projects.filter((project) => project.featured)

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug)

export const getDomainBySlug = (slug) =>
  domains.find((domain) => domain.slug === slug)

export const getProjectsByDomain = (slug) =>
  projects.filter((project) => project.domainSlug === slug)
