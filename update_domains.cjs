const fs = require('fs');

const filepath = 'src/data/siteData.js';
let content = fs.readFileSync(filepath, 'utf8');

// 1. Replace the domains array
const domainsStart = content.indexOf('export const domains = [');
const domainsEnd = content.indexOf('export const projects = [');

const newDomainsStr = `export const domains = [
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
    title: 'Computer Vision',
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

`;

content = content.substring(0, domainsStart) + newDomainsStr + content.substring(domainsEnd);

// 2. Update domainSlug for each project
const mapping = {
  'ask-my-notes': 'ai-projects',
  'repograph': 'ai-projects',
  'llm-evaluation': 'machine-learning',
  'search-ranking': 'machine-learning',
  '3d-gesture-drone-simulator': 'computer-vision',
  'virtual-robos': 'computer-vision',
  'glitchy-cube-ar': 'computer-vision',
  'science-lab': 'product-teardowns',
  'jobtrackr': 'product-teardowns',
  'dietcokelovers-landing': 'product-teardowns'
};

for (const [slug, newDomain] of Object.entries(mapping)) {
  const regex = new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?domainSlug:\\s*)'[a-zA-Z0-9-]+'`, 'g');
  content = content.replace(regex, `$1'${newDomain}'`);
}

fs.writeFileSync(filepath, content);
console.log('Domains and mapping updated');
