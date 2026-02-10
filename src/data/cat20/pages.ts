import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'agentic-workforce',
    badge: '🤖 Page 20.1',
    title: 'The Agentic Workforce',
    description: 'By 2030, the average knowledge worker will spend more time directing AI agents than performing tasks directly. This isn\'t automation replacing humans—it\'s augmentation transforming every role. Organizations that master human-agent collaboration will define the next era of competitive advantage.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '1', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Agentic Workforce',
      subtitle: '',
      subsections: [
        {
          heading: 'Human-Agent Collaboration Model',
          paragraphs: [
            'The five phases of effective human-AI teamwork in 2028',
            'Humans define what success looks like. This includes business objectives, ethical constraints, risk tolerance, and quality standards. AI agents cannot determine what\'s worth building—only humans can make value judgments about priorities.',
            'AI agents break goals into actionable tasks, identify dependencies, estimate effort, and propose approaches. Human reviews the plan for strategic alignment, catches blind spots, and approves the direction before execution begins.',
          ],
        },
        {
          heading: 'Role Transformation',
          paragraphs: [
            'How specific jobs evolve in the agentic era',
          ],
        },
        {
          heading: 'Agentic Workforce: Value Analysis',
          paragraphs: [
            'Assessing the strategic value of workforce transformation',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'past',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'AI as Assistant',
          description: '',
          examples: ['Chatbots answer on demand', 'Code completion suggestions', 'Single-turn interactions', 'Human plans everything', 'AI accelerates specific tasks'],
        },
        {
          className: 'present',
          borderColor: '#10B981',
          icon: '💡',
          title: 'AI as Collaborator',
          description: '',
          examples: ['Multi-step workflow execution', 'Persistent memory & context', 'Human sets goals, AI plans', 'End-to-end process handling', 'Cross-system orchestration'],
        },
        {
          className: 'future',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'AI as Workforce',
          description: '',
          examples: ['Multi-agent team coordination', 'Autonomous project execution', 'Human provides vision only', 'AI-to-AI coordination', 'Proactive problem-solving'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'The Agentic Workforce',
          description: 'By 2030, the average knowledge worker will spend more time directing AI agents than performing tasks directly. This isn\'t automation replacing humans—it\'s augmentation transforming every role. Organiz',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Human-Agent Collaboration Model', subtitle: '', description: 'The five phases of effective human-AI teamwork in 2028', tags: [] },
        { icon: '📌', title: 'Role Transformation', subtitle: '', description: 'How specific jobs evolve in the agentic era', tags: [] },
        { icon: '📌', title: 'Agentic Workforce: Value Analysis', subtitle: '', description: 'Assessing the strategic value of workforce transformation', tags: [] },
        { icon: '📌', title: 'Workforce Predictions by Year', subtitle: '', description: 'What to expect as the agentic workforce emerges', tags: [] },
        { icon: '📌', title: 'The Agentic Workforce', subtitle: '', description: 'By 2030, the average knowledge worker will spend more time directing AI agents than performing tasks directly. This isn\'t automation replacing humans—', tags: [] },
        { icon: '📌', title: 'The Agentic Workforce', subtitle: '', description: 'By 2030, the average knowledge worker will spend more time directing AI agents than performing tasks directly. This isn\'t automation replacing humans—', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Massive productivity gains: 3-10x output improvements documented across early adopters, with some teams reporting they accomplish in days what previously took weeks',
        'Talent leverage: Smaller teams of highly skilled workers can outperform larger traditional teams, reducing hiring pressure and enabling focus on quality over quantity',
        '24/7 operations: Agents work continuously without breaks, enabling overnight processing, global coverage, and faster iteration cycles',
        'Consistency and quality: Agents follow processes exactly every time, reducing errors from fatigue, distraction, or skill variation across team members',
        'Rapid scaling: Add capacity instantly without recruiting, onboarding, or training delays—critical for handling demand spikes or growth',
        'Competitive moat: Organizations that build effective human-agent workflows create advantages that are difficult for competitors to replicate quickly',
      ],
      dontItems: [
        'Change management complexity: Workforce anxiety, skill gaps, and resistance to new ways of working require sustained leadership attention and investment',
        'Quality oversight burden: AI output requires human review—without proper processes, errors can scale as fast as productivity gains',
        'Dependency risks: Over-reliance on AI systems creates vulnerabilities if services go down, pricing changes, or capabilities shift unexpectedly',
        'Security and compliance: Agents accessing business systems raise data privacy, intellectual property, and regulatory compliance questions',
        'Skill atrophy: As AI handles routine work, human skills in those areas may decline, creating risks if AI becomes unavailable',
        'Uneven adoption: Benefits concentrate among early adopters and AI-skilled workers, potentially widening organizational and societal inequalities',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'Code Agents',
      role: 'Workforce Transformation Strategist',
      description: 'Autonomous software development from spec to deployment',
      capabilities: [
        'Analyze job roles for AI augmentation potential',
        'Design human-agent collaboration workflows',
        'Generate role transformation roadmaps',
        'Identify skill gaps and training needs',
        'Model productivity impact scenarios',
      ],
      codeFilename: 'workforce_orchestrator.py',
      code: `from crewai import Agent, Task, Crew

# Workforce transformation agent
orchestrator = Agent(
    role="Workforce Transformation Strategist",
    goal="Design optimal human-agent workflows",
    backstory="""Expert in organizational design
    and AI integration. Balances productivity
    gains with human-centered transitions.""",
    tools=[role_analyzer, workflow_designer,
           skill_mapper, impact_modeler]
)

transform_task = Task(
    description="""Analyze department and:
    - Map current roles to AI augmentation tiers
    - Design new human-agent team structures  
    - Create 12-month transition roadmap
    - Identify training requirements""",
    agent=orchestrator
)

crew = Crew(
    agents=[orchestrator],
    tasks=[transform_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: undefined,
    nextPage: { title: '20.2 The Builder Revolution & The Great Age of Personal AI', slug: 'builder-revolution' },
  },
  {
    slug: 'builder-revolution',
    badge: '🛠️ Page 20.2',
    title: 'The Builder Revolution & The Great Age of Personal AI',
    description: 'Two transformations are converging: AI tools enabling individuals to build what once required teams, and personal AI companions becoming the most intimate technology relationship in human history. Together, they\'re democratizing creation while personalizing intelligence—reshaping both how we make and how we live. This is the story of empowerment at both ends of the spectrum.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '2', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Builder Revolution & The Great Age of Personal AI',
      subtitle: '',
      subsections: [
        {
          heading: 'The Solo Builder\'s AI Stack',
          paragraphs: [
            'Six capabilities that enable one person to build at enterprise scale',
          ],
        },
        {
          heading: 'The Personal AI Evolution',
          paragraphs: [
            'From assistant to companion: the most personal technology relationship',
            'Today\'s AI assistants are essentially amnesiac—each conversation starts fresh. They don\'t know who you are, what you care about, or what you\'ve discussed before. Every interaction requires re-establishing context. This creates a ceiling on how helpful AI can be: without memory, it can\'t learn you, can\'t anticipate you, can\'t truly assist you.',
            'Personal AI changes this fundamentally. When AI remembers months or years of interaction, it becomes something qualitatively different—not just smarter, but more personal. It knows your preferences without asking. It understands your goals and can spot when you\'re drifting from them. It recognizes patterns in your behavior that you might not see yourself.',
          ],
        },
        {
          heading: 'A Day with Personal AI in 2028',
          paragraphs: [
            'How life changes when AI truly knows you',
            'Experience how personal AI transforms daily life',
          ],
        },
      ],
    },
    concepts: {
      title: '📊 Builder Revolution: Value Analysis',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'value-0',
          borderColor: '#3B82F6',
          icon: '⚡',
          title: '',
          description: 'Near-immediate productivity gains. Solo builders report shipping in days what previously took months. Tools are available today and improving weekly.',
          examples: [],
        },
        {
          className: 'value-1',
          borderColor: '#10B981',
          icon: '🔧',
          title: '',
          description: 'Low barrier to entry. Most tools are consumer-friendly with minimal learning curve. Main effort is learning to think in terms of AI collaboration rather than manual execution.',
          examples: [],
        },
        {
          className: 'value-2',
          borderColor: '#8B5CF6',
          icon: '💥',
          title: '',
          description: 'Transformative for entrepreneurs and small teams. Enables competition with larger players. Creates entirely new business models based on AI-human collaboration.',
          examples: [],
        },
        {
          className: 'value-3',
          borderColor: '#F59E0B',
          icon: '💰',
          title: '',
          description: 'Dramatic cost reduction. $20-100/month in AI tools replaces tens of thousands in specialist salaries. Enables bootstrapping without external funding.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: '🌍 Societal Implications',
      subtitle: 'Evaluating approaches and tools',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'SaaS MVP', tagText: '3-5 people, 6 months', tagClass: 'tag-blue', bestFor: '1 person, 2 days', complexity: 'medium', rating: '1 person, 2 weeks' },
        { icon: '🛠️', name: 'Mobile App', tagText: '2-4 people, 4 months', tagClass: 'tag-green', bestFor: '1 person, 1 week', complexity: 'medium', rating: '1 person, 1 month' },
        { icon: '🛠️', name: 'E-commerce Store', tagText: '2-3 people, 2 months', tagClass: 'tag-purple', bestFor: '1 person, 1 day', complexity: 'medium', rating: '1 person, 1 week' },
        { icon: '🛠️', name: 'Content Platform', tagText: '5-10 people, 8 months', tagClass: 'tag-orange', bestFor: '1 person, 2 weeks', complexity: 'medium', rating: '2 people, 2 months' },
        { icon: '🛠️', name: '$1M ARR Business', tagText: '10-20 people', tagClass: 'tag-pink', bestFor: '1-2 people', complexity: 'medium', rating: '3-5 people' },
        { icon: '🛠️', name: 'Feature Film', tagText: '50+ people, 2 years', tagClass: 'tag-blue', bestFor: '1-3 people, 3 months', complexity: 'medium', rating: '10 people, 6 months' },
        { icon: '🛠️', name: 'Building Products', tagText: 'Teams of specialists required', tagClass: 'tag-green', bestFor: '10x productivity per person', complexity: 'medium', rating: 'Solo builders + AI normal' },
        { icon: '🛠️', name: 'Personal Assistance', tagText: 'Task-based tools', tagClass: 'tag-purple', bestFor: 'Relationship replaces transaction', complexity: 'medium', rating: 'Persistent companions' },
        { icon: '🛠️', name: 'Knowledge Access', tagText: 'Search and read', tagClass: 'tag-orange', bestFor: 'Conversation replaces browsing', complexity: 'medium', rating: 'Ask and understand' },
        { icon: '🛠️', name: 'Life Admin', tagText: 'Manual coordination', tagClass: 'tag-pink', bestFor: 'Intention replaces execution', complexity: 'medium', rating: 'AI-managed' },
        { icon: '🛠️', name: 'Creative Work', tagText: 'Skill-gated', tagClass: 'tag-blue', bestFor: 'Ideas matter more than execution', complexity: 'medium', rating: 'Vision-gated' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Radical capability democratization: World-class tools available to anyone with internet access, regardless of background, education, or capital',
        'Speed of iteration: Test ideas in hours rather than months; fail fast and pivot quickly; reduce the cost of experimentation to near-zero',
        'Capital efficiency: Build profitable businesses without external funding; maintain ownership and control; reduce burn rate dramatically',
        'Global talent access: Personal AI as advisor gives everyone access to expert-level guidance previously reserved for the privileged few',
        'Creative amplification: Express ideas at the quality level of your vision rather than your execution skills; idea quality matters more than technical ability',
        'Work-life integration: Personal AI handles life admin, freeing time and mental energy for meaningful work and relationships',
      ],
      dontItems: [
        'Quality differentiation difficulty: When everyone can produce good work, standing out requires exceptional vision or execution that AI can\'t provide',
        'Market saturation risk: Lower barriers mean more competition; markets flood with AI-generated content and products; attention becomes scarcer',
        'Dependency concerns: Heavy reliance on AI tools creates vulnerability to outages, pricing changes, and capability shifts',
        'Privacy trade-offs: Personal AI requires intimate data sharing; security breaches become more consequential; new attack surfaces emerge',
        'Skill atrophy potential: Relying on AI for execution may erode human skills; future generations may lack foundational capabilities',
        'Economic displacement: Specialists whose value was execution face displacement; wealth may concentrate among those who control AI access',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'SoloBuilderAgent',
      role: 'Full-Stack Solo Builder',
      description: 'An AI agent that helps solo founders and creators build complete products. Handles code generation, design decisions, content creation, and go-to-market planning—acting as an entire startup team in a single assistant.',
      capabilities: [
        'Generate full-stack code from product specs',
        'Create UI designs and brand assets',
        'Write marketing copy and documentation',
        'Plan go-to-market strategy',
        'Automate launch and growth tasks',
      ],
      codeFilename: 'solo_builder_agent.py',
      code: `from crewai import Agent, Task, Crew

# Solo builder multi-capability agent
solo_builder = Agent(
    role="Full-Stack Solo Builder",
    goal="Ship complete products solo",
    backstory="""Expert across engineering,
    design, marketing, and growth. Helps
    founders build and launch fast.""",
    tools=[code_gen, design_gen, 
           content_writer, analytics]
)

build_task = Task(
    description="""For the product idea:
    - Generate MVP codebase
    - Create landing page design
    - Write launch copy
    - Plan first 30-day growth""",
    agent=solo_builder
)

crew = Crew(
    agents=[solo_builder],
    tasks=[build_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '20.1 The Agentic Workforce', slug: 'agentic-workforce' },
    nextPage: { title: '20.3 Tech Forecasts Beyond Data', slug: 'tech-forecasts' },
  },
  {
    slug: 'tech-forecasts',
    badge: '🚀 Page 20.3',
    title: 'Tech Forecasts Beyond Data',
    description: 'AI is transforming data and software—but the most profound impacts may come from its convergence with other frontier technologies. Quantum computing, biotechnology, climate tech, space, robotics, and energy are all accelerating as AI enhances research, design, and optimization. These forecasts look beyond the digital to the physical transformations reshaping our world by 2030.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '3', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Tech Forecasts Beyond Data',
      subtitle: '',
      subsections: [
        {
          heading: 'Frontier Technology Forecasts',
          paragraphs: [
            'How AI accelerates breakthroughs beyond software',
          ],
        },
        {
          heading: 'AI Convergence Effects',
          paragraphs: [
            'When AI meets other frontier technologies',
          ],
        },
        {
          heading: 'Wildcard Scenarios',
          paragraphs: [
            'Low-probability, high-impact possibilities that could accelerate or disrupt forecasts',
            'These scenarios could dramatically alter the trajectory of technology development',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'quantum',
          borderColor: '#3B82F6',
          icon: '⚛️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'biotech',
          borderColor: '#10B981',
          icon: '🧬',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'climate',
          borderColor: '#8B5CF6',
          icon: '🌍',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'robotics',
          borderColor: '#F59E0B',
          icon: '🦾',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: '📅 Cross-Domain Timeline',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '🛠️', title: '2026', subtitle: 'Agentic AI mainstream adoption', description: 'First quantum-AI hybrid applications', tags: ['Agentic AI mainstream adoption'] },
        { icon: '🛠️', title: '2027', subtitle: 'Multi-agent orchestration mature', description: 'Drug discovery fundamentally transforms', tags: ['Multi-agent orchestration mature'] },
        { icon: '🛠️', title: '2028', subtitle: '50% code AI-generated', description: 'Physical + digital AI convergence', tags: ['50% code AI-generated'] },
        { icon: '🛠️', title: '2029', subtitle: 'AI-native enterprises dominate', description: 'Energy + compute abundance begins', tags: ['AI-native enterprises dominate'] },
        { icon: '🛠️', title: '2030', subtitle: '1B+ personal AI companions', description: 'AI integrated into all aspects of daily life', tags: ['1B+ personal AI companions'] },
        { icon: '📌', title: 'Tech Forecasts Beyond Data', subtitle: '', description: 'AI is transforming data and software—but the most profound impacts may come from its convergence with other frontier technologies. Quantum computing,', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'First-mover advantages: Early positioning in convergence domains can create durable competitive moats as technologies mature and barriers to entry increase',
        'Problem scope expansion: AI applied to physical world challenges (climate, health, materials) addresses larger markets than pure software',
        'Talent magnetism: Working on civilization-scale challenges attracts mission-driven talent increasingly important in competitive hiring',
        'Portfolio diversification: Cross-domain exposure reduces risk from disruption in any single technology area',
        'Government alignment: Convergence areas (climate, health, chips) attract significant government funding and policy support',
        'Long-term optionality: Early investment in emerging areas creates options to expand as technologies mature and markets develop',
      ],
      dontItems: [
        'Timing uncertainty: Forecasts are unreliable; investing too early ties up capital in areas that may take longer to mature than expected',
        'Deep expertise requirements: Cross-domain work requires specialists who understand both AI and the target domain—rare and expensive talent',
        'Regulatory complexity: Biotech, climate, quantum all face significant regulatory hurdles that add time and cost to commercialization',
        'Capital intensity: Physical world applications typically require more capital than pure software; longer path to profitability',
        'Execution complexity: Integrating AI with physical systems involves hardware, logistics, safety that pure software avoids',
        'Hype cycles: Emerging tech areas prone to boom-bust cycles; risk of investing at peak hype and facing long trough of disillusionment',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'TechConvergenceScout',
      role: 'Tech Convergence Analyst',
      description: 'An AI agent that monitors emerging technology developments across domains, identifies convergence opportunities, and generates strategic briefings on cross-domain innovation.',
      capabilities: [
        'Monitor research papers and patents across domains',
        'Identify cross-domain convergence patterns',
        'Track funding flows and startup activity',
        'Generate strategic opportunity briefings',
        'Alert on breakthrough developments',
      ],
      codeFilename: 'tech_scout_agent.py',
      code: `from crewai import Agent, Task, Crew

# Tech convergence monitoring agent
tech_scout = Agent(
    role="Tech Convergence Analyst",
    goal="Identify strategic tech opportunities",
    backstory="""Expert in cross-domain tech
    analysis. Tracks AI, quantum, biotech,
    climate, robotics convergence.""",
    tools=[arxiv_search, patent_monitor,
           funding_tracker, news_analyzer]
)

scout_task = Task(
    description="""Weekly analysis:
    - Scan latest research breakthroughs
    - Identify AI+X convergence signals
    - Track competitor movements
    - Generate strategic briefing""",
    agent=tech_scout
)

crew = Crew(
    agents=[tech_scout],
    tasks=[scout_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '20.2 The Builder Revolution & The Great Age of Personal AI', slug: 'builder-revolution' },
    nextPage: undefined,
  },
]

registerPages('industry-forecasts', pages)
export default pages
