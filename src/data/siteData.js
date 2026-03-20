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
    slug: 'realtime-product-systems',
    accent: 'cyan',
    title: 'Realtime Product Systems',
    strap: 'Collaborative flows, live state, and product UX that stays clear under pressure.',
    description:
      'This track is about shared state, multiplayer presence, and interfaces that feel immediate instead of fragile.',
    capabilities: [
      'Realtime room architecture and interaction flows',
      'Presence-led UX, cursors, avatars, and activity states',
      'Product surfaces that explain complexity without flattening it',
    ],
    idealBriefs: [
      'Collaborative tools',
      'Dashboards with live state',
      'Interactive products that need strong UX hierarchy',
    ],
  },
  {
    slug: 'spatial-interfaces-and-simulation',
    accent: 'orange',
    title: 'Spatial Interfaces and Simulation',
    strap: '3D systems, motion-led interfaces, and experiments that treat the screen like a scene.',
    description:
      'This domain covers spatial UI language, scene composition, and prototypes that think in depth, motion, and control.',
    capabilities: [
      '3D interface concepts and spatial navigation',
      'Simulation-minded prototypes with physical logic',
      'Interface motion that supports structure instead of decoration',
    ],
    idealBriefs: [
      'Immersive product concepts',
      'Experimental UI studies',
      'Robotics and hardware-adjacent visual systems',
    ],
  },
  {
    slug: 'ai-tools-and-intelligent-workflows',
    accent: 'lime',
    title: 'AI Tools and Intelligent Workflows',
    strap: 'Usefulness-first AI interfaces with retrieval, automation, and real product framing.',
    description:
      'The emphasis here is not AI theater. It is AI that helps someone do something faster, more clearly, or more intelligently.',
    capabilities: [
      'RAG-powered interfaces and applied retrieval',
      'Tool-like workflows with prompt-aware UX',
      'Product framing around actual usefulness rather than trend-chasing',
    ],
    idealBriefs: [
      'Internal tools',
      'Research copilots',
      'Workflow accelerators and applied AI products',
    ],
  },
  {
    slug: 'campaigns-art-direction-and-web-art',
    accent: 'rose',
    title: 'Campaigns, Art Direction, and Web Art',
    strap: 'Editorial landing pages, expressive front-end work, and browser-native visual worlds.',
    description:
      'This is where pace, composition, typography, and atmosphere take the lead without losing engineering discipline.',
    capabilities: [
      'Launch pages with story and pacing',
      'Creative coding and CSS-driven visuals',
      'Art direction systems that keep the site feeling authored',
    ],
    idealBriefs: [
      'Brand launches',
      'Creative portfolio work',
      'Visually ambitious marketing pages',
    ],
  },
]

export const projects = [
  {
    slug: 'collaborative-canvas',
    accent: 'cyan',
    featured: true,
    year: '2025',
    name: 'Collaborative Canvas',
    strap: 'Realtime drawing room built for shared presence and low-friction creativity.',
    summary:
      'A multiplayer drawing space that turns collaboration into the main interaction model instead of a technical afterthought.',
    description:
      'This project shows product thinking, socket-driven architecture, and interface restraint working together in one coherent build.',
    role: 'Realtime product design and engineering',
    repo: 'https://github.com/Lakshya-2440/canvas_collab',
    domainSlug: 'realtime-product-systems',
    stack: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Custom CSS'],
    artLines: ['86%', '42%', '74%', '62%'],
    outcomes: [
      'Live room-based sync for shared drawing sessions',
      'Presence cues with cursors, avatars, and multiplayer clarity',
      'A product surface that feels social rather than merely technical',
    ],
    challenge:
      'Make collaboration feel instant and inviting while keeping the interaction model understandable at a glance.',
    buildNarrative:
      'The build leans on socket-based room logic, lightweight interface chrome, and presence signals that make the session feel inhabited.',
    recruiterSignal:
      'Signals that complex state can be translated into a product surface that looks calm, useful, and deliberate.',
    idealNextStep:
      'A natural extension would be richer asset handling, shareable workspaces, and collaboration history.',
  },
  {
    slug: '3d-os',
    accent: 'orange',
    featured: true,
    year: '2025',
    name: '3D OS',
    strap: 'A spatial interface study that treats the desktop as an explorable scene.',
    summary:
      'Instead of stacking windows on a flat plane, this experiment imagines the desktop as a 3D environment with depth and motion.',
    description:
      'It broadens the portfolio signal from standard app work into interface worldbuilding, motion logic, and scene-first UI thinking.',
    role: 'Concept development, interface design, and front-end experimentation',
    repo: 'https://github.com/Lakshya-2440/3D_OS',
    domainSlug: 'spatial-interfaces-and-simulation',
    stack: ['JavaScript', '3D UI', 'Interaction Design', 'Frontend Experiments'],
    artLines: ['78%', '56%', '39%', '94%'],
    outcomes: [
      'A spatial navigation model rather than a flat document stack',
      'More cinematic motion language than most product interfaces attempt',
      'Clear evidence of experimentation beyond commodity UI patterns',
    ],
    challenge:
      'Push an interface into three dimensions without losing all sense of orientation, hierarchy, or usability.',
    buildNarrative:
      'The value is in the study itself: layout becomes staging, motion becomes information, and the browser becomes a design lab.',
    recruiterSignal:
      'Shows that the work is capable of concept generation and experiential thinking, not just implementation.',
    idealNextStep:
      'This direction could evolve into immersive dashboards, installations, or product demos that need a stronger sense of scene.',
  },
  {
    slug: '3d-robot-assembly',
    accent: 'orange',
    featured: true,
    year: '2024',
    name: '3D Robot Assembly',
    strap: 'Simulation-led prototype for assembly logic, spatial reasoning, and systems thinking.',
    summary:
      'A robotics-flavored build focused on structure, sequencing, and interface logic that relates to physical behavior.',
    description:
      'It adds a more technical and mechanical edge to the portfolio by showing interest in tools, systems, and process.',
    role: 'Prototype design and systems exploration',
    repo: 'https://github.com/Lakshya-2440/3D-Robot-Assembly',
    domainSlug: 'spatial-interfaces-and-simulation',
    stack: ['Python', 'Simulation', '3D Logic', 'Robotics'],
    artLines: ['68%', '89%', '46%', '78%'],
    outcomes: [
      'A stronger connection between digital logic and physical assembly behavior',
      'Simulation thinking that expands beyond front-end execution',
      'A portfolio story that touches engineering curiosity, not only visuals',
    ],
    challenge:
      'Translate physical assembly logic into a system someone can reason about through a digital interface.',
    buildNarrative:
      'The project frames code as a tool for understanding sequence, dependency, and structure, not just output.',
    recruiterSignal:
      'Signals comfort with abstract systems, technical curiosity, and workflows closer to engineering tools.',
    idealNextStep:
      'This could move toward interactive training, robotic planning visualizations, or richer simulation dashboards.',
  },
  {
    slug: 'css-art-museum',
    accent: 'rose',
    featured: true,
    year: '2024',
    name: 'CSS Art Museum',
    strap: 'A browser-native gallery where front-end craft is treated like a visual medium.',
    summary:
      'An expressive gallery of HTML, CSS, and JavaScript work that makes visual experimentation the core product.',
    description:
      'This keeps the portfolio from reading too narrowly technical by showing that taste, curation, and visual authorship are active strengths.',
    role: 'Visual direction, curation, and front-end implementation',
    repo: 'https://github.com/Lakshya-2440/css-art-museum',
    domainSlug: 'campaigns-art-direction-and-web-art',
    stack: ['HTML', 'CSS', 'JavaScript', 'Creative Coding'],
    artLines: ['55%', '88%', '48%', '66%'],
    outcomes: [
      'A stronger visual signature than standard developer portfolio work',
      'Clear evidence that craft and experimentation matter in the process',
      'A useful proof point for campaign work, creative coding, and art direction',
    ],
    challenge:
      'Keep the work expressive and visual without letting it collapse into novelty without intent.',
    buildNarrative:
      'The museum framing turns code into exhibition design, where pacing, texture, and composition matter as much as the underlying implementation.',
    recruiterSignal:
      'Signals that front-end is not being treated as a skin but as a serious creative discipline.',
    idealNextStep:
      'This direction maps well to branded experiences, campaigns, installations, and editorial web stories.',
  },
  {
    slug: 'rag-llm-chatbot',
    accent: 'lime',
    featured: false,
    year: '2025',
    name: 'RAG LLM Chatbot',
    strap: 'Applied retrieval workflow focused on usefulness instead of AI theater.',
    summary:
      'An AI-fluent tool that explores retrieval-backed conversation and the shape of practical assistant UX.',
    description:
      'It gives the portfolio a credible applied-AI thread without drifting away from product thinking.',
    role: 'AI workflow prototyping and interface design',
    repo: 'https://github.com/Lakshya-2440/rag-llm-chatbot',
    domainSlug: 'ai-tools-and-intelligent-workflows',
    stack: ['Python', 'LLM', 'RAG', 'Workflow Design'],
    artLines: ['82%', '37%', '68%', '54%'],
    outcomes: [
      'Retrieval-oriented product thinking',
      'A tool-shaped AI interaction model',
      'A stronger applied-systems thread inside the portfolio',
    ],
    challenge:
      'Make an AI interface feel dependable, structured, and genuinely helpful rather than vague or performative.',
    buildNarrative:
      'The value is in how retrieval, response quality, and information architecture are framed as a usable workflow.',
    recruiterSignal:
      'Shows an ability to treat AI as product infrastructure rather than a decorative feature.',
    idealNextStep:
      'A next version could include source controls, context management, and team-facing workflow surfaces.',
  },
  {
    slug: 'glitchy-cube-ar',
    accent: 'lime',
    featured: false,
    year: '2024',
    name: 'glitchy_cube_AR',
    strap: 'A small AR-driven visual experiment with a more image-led interaction language.',
    summary:
      'A proof point that the work can move into spatial overlays, perception, and more playful visual computing.',
    description:
      'It adds a lightweight but useful edge to the portfolio by widening the medium beyond the browser window.',
    role: 'Experiment design and visual prototyping',
    repo: 'https://github.com/Lakshya-2440/glitchy_cube_AR',
    domainSlug: 'spatial-interfaces-and-simulation',
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
    slug: 'dietcokelovers-landing',
    accent: 'rose',
    featured: false,
    year: '2024',
    name: 'dietcokelovers_landing',
    strap: 'Narrative-led landing page with mood, pacing, and stronger art direction.',
    summary:
      'A launch-page style build where typography, sequencing, and visual hooks do the work of persuasion.',
    description:
      'It proves there is range beyond tools and product UI, especially for brands or founders who need memorable surfaces.',
    role: 'Landing page concept, copy pacing, and front-end execution',
    repo: 'https://github.com/Lakshya-2440/dietcokelovers_landing',
    domainSlug: 'campaigns-art-direction-and-web-art',
    stack: ['React', 'Motion', 'Visual Direction', 'CSS'],
    artLines: ['74%', '44%', '83%', '52%'],
    outcomes: [
      'A stronger campaign and launch-page story',
      'Pacing-driven interface composition',
      'Evidence of copy, layout, and mood working together',
    ],
    challenge:
      'Make a landing page feel authored and culturally specific rather than like a generic startup template.',
    buildNarrative:
      'The page works through atmosphere, contrast, and sequencing, treating scroll like storytelling instead of content dumping.',
    recruiterSignal:
      'Signals that branded experiences and high-attention launch pages are also in range.',
    idealNextStep:
      'This naturally leads to bolder campaign sites, product launches, and fashion- or culture-adjacent digital work.',
  },
  {
    slug: '3d-gesture-drone-simulator',
    accent: 'cyan',
    featured: false,
    year: '2024',
    name: '3D Gesture Drone Simulator',
    strap: 'Control-systems prototype that connects movement, simulation, and interface response.',
    summary:
      'A more physical interaction model that points toward control systems, simulation, and motion-aware tooling.',
    description:
      'It reinforces the portfolio theme that interface work can be tied to bodies, space, and behavior instead of static screens alone.',
    role: 'Simulation concept and interaction prototyping',
    repo: 'https://github.com/Lakshya-2440/3D-Gesture-drone-simulator',
    domainSlug: 'realtime-product-systems',
    stack: ['Simulation', 'Gesture Control', '3D Systems'],
    artLines: ['63%', '71%', '51%', '86%'],
    outcomes: [
      'A more embodied input model',
      'Stronger overlap between interaction design and control systems',
      'A portfolio point that feels technical, physical, and exploratory',
    ],
    challenge:
      'Design around movement and control feedback while still keeping the system legible.',
    buildNarrative:
      'The simulator shows an interest in interfaces that respond to gesture and physical intent, not only clicks and taps.',
    recruiterSignal:
      'Signals range across simulation, input experimentation, and human-machine interaction thinking.',
    idealNextStep:
      'This could mature into training tools, motion dashboards, or physical-computing demonstrations.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug)

export const getDomainBySlug = (slug) =>
  domains.find((domain) => domain.slug === slug)

export const getProjectsByDomain = (slug) =>
  projects.filter((project) => project.domainSlug === slug)
