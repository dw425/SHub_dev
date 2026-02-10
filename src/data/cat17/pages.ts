import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'change-frameworks',
    badge: '📐 Page 17.1',
    title: 'Change Frameworks',
    description: 'Structured methodologies for planning and executing organizational change. Each framework offers different trade-offs in speed, value delivery, and long-term sustainability.',
    accentColor: '#F97316',
    accentLight: '#FB923C',
    metrics: [
      { value: '1', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'ADKAR Model',
      subtitle: 'Prosci • Individual change framework • 1998',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'ADKAR is a goal-oriented change management model that focuses on individual change as the foundation for organizational change. Created by Prosci founder Jeff Hiatt, it provides a sequential framework where each element must be substantially achieved before moving to the next. ADKAR\'s power lies in its diagnostic capability—it helps identify exactly where individuals are stuck in the change process, enabling targeted interventions rather than blanket training.',
            'The model treats organizational change as the sum of individual changes. If you can move each person through the five stages, the organization transforms. This bottom-up approach makes it particularly effective for technology adoptions where individual behavior change is the primary success factor.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Choosing the Right Framework',
      subtitle: 'A practical guide for every situation',
      columns: 2,
      cards: [
        {
          className: 'selection-0',
          borderColor: '#3B82F6',
          icon: '💻',
          title: '',
          description: 'ERP, CRM, or other technology rollout where success = user adoption. Individual behavior change is the primary challenge. You need measurable progress and can identify exactly where people are stuck.',
          examples: [],
        },
        {
          className: 'selection-1',
          borderColor: '#10B981',
          icon: '🏢',
          title: '',
          description: 'Changing "how we work" across the organization. Requires executive sponsorship, coalition building, and sustained momentum over years. Quick wins prove the new way works.',
          examples: [],
        },
        {
          className: 'selection-2',
          borderColor: '#8B5CF6',
          icon: '🤝',
          title: '',
          description: 'Integrating two organizations with different cultures, systems, and structures. Need to understand alignment gaps and help people through identity transition.',
          examples: [],
        },
        {
          className: 'selection-3',
          borderColor: '#F59E0B',
          icon: '📉',
          title: '',
          description: 'High-emotion change where people lose jobs, roles, or reporting relationships. The psychological impact is the primary challenge. People need to grieve before they can move on.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Framework Comparison',
      subtitle: 'Side-by-side analysis across key dimensions',
      cards: [
        { icon: '🛠️', title: 'Primary Focus', subtitle: 'Individual adoption', description: 'Psychological transition', tags: ['Individual adoption'] },
        { icon: '🛠️', title: 'Speed to Value', subtitle: '', description: '', tags: [] },
        { icon: '🛠️', title: 'Long-term Impact', subtitle: '', description: '', tags: [] },
        { icon: '🛠️', title: 'Measurability', subtitle: '', description: '', tags: [] },
        { icon: '🛠️', title: 'Ease of Use', subtitle: '', description: '', tags: [] },
        { icon: '🛠️', title: 'Typical Cost', subtitle: '$$-$$$', description: '$', tags: ['$$-$$$'] },
        { icon: '🛠️', title: 'Timeline', subtitle: 'Weeks-Months', description: 'Varies', tags: ['Weeks-Months'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Strategy', vendor: '', description: 'Plan for competitive advantage—where you play, how you win', tags: [] },
        { icon: '🛠️', name: 'Structure', vendor: '', description: 'Organizational hierarchy, reporting lines, divisions, coordination', tags: [] },
        { icon: '🛠️', name: 'Systems', vendor: '', description: 'Daily processes, IT, workflows, decision-making procedures', tags: [] },
        { icon: '🛠️', name: 'Style', vendor: '', description: 'Leadership approach, management behavior, cultural norms', tags: [] },
        { icon: '🛠️', name: 'Shared Values', vendor: '', description: 'The fundamental beliefs, principles, and purpose the organization was built on — the central element that connects and influences all others', tags: [] },
        { icon: '🛠️', name: 'Staff', vendor: '', description: 'Workforce composition, talent management, recruitment, development', tags: [] },
        { icon: '🛠️', name: 'Skills', vendor: '', description: 'Core competencies, distinctive capabilities, what the organization does best', tags: [] },
        { icon: '🛠️', name: '✅ Advantages', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: '❌ Disadvantages', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '📐',
      name: 'FrameworkAdvisor',
      role: 'Change Framework Selection',
      description: 'Analyzes change scenarios to recommend optimal frameworks, generates implementation plans, creates assessment instruments, and provides framework-specific templates and guidance.',
      capabilities: [
        'Change scenario analysis',
        'Framework recommendation engine',
        'ADKAR assessment generation',
        '7S alignment mapping',
        'Kotter phase planning',
        'Transition stage identification',
        'Framework combination strategy',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        framework_advisor_agent.py',
      code: `# Change Framework Advisor Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Framework selector tool
framework_selector = Tool(
    name="framework_selector",
    description="""Analyzes change scenario to
    recommend primary and supporting change
    frameworks based on change type""",
    func=select_frameworks
)

# ADKAR assessor tool
adkar_assessor = Tool(
    name="adkar_assessor",
    description="""Generates ADKAR assessment surveys
    and analyzes results to identify barrier
    points for individuals and groups""",
    func=assess_adkar
)

# 7S analyzer tool
seven_s_analyzer = Tool(
    name="seven_s_analyzer",
    description="""Maps current vs desired state across
    all 7S elements and identifies gaps""",
    func=analyze_7s
)

framework_advisor = Agent(
    role="Change Framework Advisor",
    goal="""Guide selection and application of
    change management frameworks""",
    backstory="""Prosci-certified practitioner
    with experience applying frameworks
    across diverse industries.""",
    llm=llm,
    tools=[framework_selector, adkar_assessor,
           seven_s_analyzer],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.2', title: 'Stakeholder Management', description: 'Identification, analysis, and engagement strategies', slug: 'stakeholder-management' },
      { number: '17.3', title: 'Adoption Waves', description: 'Diffusion of innovations and wave planning', slug: 'adoption-waves' },
      { number: '17.4', title: 'Communication Strategies', description: 'Messaging frameworks and channel selection', slug: 'communication' },
    ],
    prevPage: undefined,
    nextPage: { title: '17.2 Stakeholder Management', slug: 'stakeholder-management' },
  },
  {
    slug: 'stakeholder-management',
    badge: '👥 Page 17.2',
    title: 'Stakeholder Management',
    description: 'Identify, analyze, and engage the people who can make or break your change initiative. Stakeholder management is the art of understanding who matters, what they care about, and how to bring them along.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '2', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Stakeholder Identification',
      subtitle: 'Finding everyone who has a stake in your change',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The first step in stakeholder management is identification—finding everyone who might influence or be affected by your change. Missing a key stakeholder is one of the most common causes of change failure. That quiet VP who wasn\'t consulted? They can derail your initiative with a single email. The team that wasn\'t included? They\'ll resist what they didn\'t help create.',
            'Cast a wide net initially. It\'s easier to deprioritize a stakeholder later than to recover from excluding someone important. Use multiple identification techniques to ensure comprehensive coverage.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Stakeholder Identification',
      subtitle: 'Finding everyone who has a stake in your change',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🏢',
          title: 'Org Chart Analysis',
          description: 'Walk the hierarchy. Identify everyone in the chain of command from executives to front-line managers. Don\'t forget dotted-line relationships and matrix structures.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'Process Mapping',
          description: 'Trace the workflows your change will affect. Everyone who touches the process is a stakeholder—upstream suppliers, downstream customers, parallel teams.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '💰',
          title: 'Budget Holders',
          description: 'Follow the money. Anyone who controls budget, approves spending, or manages P&L for affected areas has legitimate interest in your change.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '⚡',
          title: 'Influence Networks',
          description: 'Identify informal influencers—the people others listen to regardless of title. These "go-to" people can accelerate or kill adoption.',
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
        { icon: '📌', title: 'Stakeholder Identification', subtitle: '', description: 'Finding everyone who has a stake in your change', tags: [] },
        { icon: '📌', title: 'Power/Interest Grid', subtitle: '', description: 'The classic 2x2 matrix for stakeholder prioritization', tags: [] },
        { icon: '📌', title: 'Salience Model', subtitle: '', description: 'A more nuanced three-dimensional analysis', tags: [] },
        { icon: '📌', title: 'Key Stakeholder Types', subtitle: '', description: 'Common archetypes and how to engage them', tags: [] },
        { icon: '📌', title: 'Engagement Strategy Matrix', subtitle: '', description: 'Tailoring your approach to stakeholder position', tags: [] },
        { icon: '📌', title: 'Stakeholder Management Process', subtitle: '', description: 'A repeatable approach to stakeholder engagement', tags: [] },
        { icon: '📌', title: 'Influence Network Mapping', subtitle: '', description: 'Understanding how stakeholders influence each other', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered stakeholder analysis and engagement', tags: [] },
      ],
    },
    tools: {
      title: 'Salience Model',
      subtitle: 'A more nuanced three-dimensional analysis',
      items: [
        { icon: '🛠️', name: 'Definitive', vendor: '', description: 'All three attributes. Highest priority. These stakeholders cannot be ignored—they will act if not engaged.', tags: [] },
        { icon: '🛠️', name: 'Dangerous', vendor: '', description: 'Power + Urgency, no legitimacy. May use coercive tactics. Manage carefully to prevent disruption.', tags: [] },
        { icon: '🛠️', name: 'Dependent', vendor: '', description: 'Legitimacy + Urgency, no power. Rely on others to act. May ally with powerful stakeholders.', tags: [] },
        { icon: '🛠️', name: 'Dormant', vendor: '', description: 'Power only. Not currently engaged but could wake up. Monitor for activation triggers.', tags: [] },
        { icon: '🛠️', name: 'Demanding', vendor: '', description: 'Urgency only. Loud but limited influence. Don\'t over-invest, but don\'t ignore complaints.', tags: [] },
        { icon: '🛠️', name: 'Discretionary', vendor: '', description: 'Legitimacy only. No pressure to engage. Philanthropic attention when resources allow.', tags: [] },
        { icon: '🛠️', name: 'Dominant', vendor: '', description: 'Power + Legitimacy. Expect and receive attention. Formal engagement mechanisms.', tags: [] },
        { icon: '🛠️', name: 'Non-Stakeholder', vendor: '', description: 'No attributes. Not a stakeholder currently. May gain attributes over time.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '👥',
      name: 'StakeholderMapper',
      role: 'Stakeholder Analysis & Engagement',
      description: 'Automatically identifies stakeholders from org data, analyzes their position using Power/Interest and Salience models, recommends engagement strategies, and monitors sentiment for early warning.',
      capabilities: [
        'Org chart stakeholder identification',
        'Power/Interest grid generation',
        'Salience model classification',
        'Influence network mapping',
        'Engagement plan generation',
        'Sentiment monitoring & alerts',
        'Position change tracking',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        stakeholder_mapper_agent.py',
      code: `# Stakeholder Mapper Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Stakeholder identifier tool
stakeholder_finder = Tool(
    name="stakeholder_finder",
    description="""Analyzes org charts, project docs,
    and process maps to identify all
    stakeholders for a change initiative""",
    func=find_stakeholders
)

# Power/Interest analyzer tool
power_interest = Tool(
    name="power_interest_analyzer",
    description="""Assesses stakeholder power and
    interest levels, plots on grid, and
    recommends engagement strategy""",
    func=analyze_power_interest
)

# Sentiment monitor tool
sentiment_monitor = Tool(
    name="sentiment_monitor",
    description="""Monitors communication channels for
    stakeholder sentiment changes and
    alerts on significant shifts""",
    func=monitor_sentiment
)

stakeholder_mapper = Agent(
    role="Stakeholder Mapper",
    goal="""Identify, analyze, and monitor
    stakeholders throughout change""",
    backstory="""Expert in organizational dynamics
    with deep experience in change
    management and political navigation.""",
    llm=llm,
    tools=[stakeholder_finder, power_interest,
           sentiment_monitor],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.1', title: 'Change Frameworks', description: 'ADKAR, Kotter, Lewin, and when to use each', slug: 'change-frameworks' },
      { number: '17.3', title: 'Adoption Waves', description: 'Diffusion of innovations and wave planning', slug: 'adoption-waves' },
      { number: '17.4', title: 'Communication Strategies', description: 'Messaging frameworks and channel selection', slug: 'communication' },
    ],
    prevPage: { title: '17.1 Change Frameworks', slug: 'change-frameworks' },
    nextPage: { title: '17.3 Adoption Waves', slug: 'adoption-waves' },
  },
  {
    slug: 'adoption-waves',
    badge: '📈 Page 17.3',
    title: 'Adoption Waves',
    description: 'Understanding how change spreads through an organization in waves, from early innovators to the late majority. Strategic wave planning accelerates adoption and minimizes resistance.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '3', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Adoption Curve',
      subtitle: 'Rogers\' diffusion of innovations applied to organizational change',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The adoption curve illustrates how change spreads through an organization in predictable waves. Understanding where your population falls helps tailor communication, training, and support strategies for each segment. Different adopter types require fundamentally different approaches.',
            'The bell curve distribution shows that most people (68%) fall in the middle as early or late majority—they won\'t adopt until they see others succeeding. This is why strategic wave planning is critical: you need innovators and early adopters to create visible success stories before the majority will move.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Finding Optimal Timing',
      subtitle: 'The sweet spot between bleeding edge and obsolescence',
      columns: 2,
      cards: [
        {
          className: 'green',
          borderColor: '#3B82F6',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'green',
          borderColor: '#10B981',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'green',
          borderColor: '#8B5CF6',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'green',
          borderColor: '#F59E0B',
          icon: '✅',
          title: '',
          description: '',
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
        { icon: '📌', title: 'The Adoption Curve', subtitle: '', description: 'Rogers\' diffusion of innovations applied to organizational change', tags: [] },
        { icon: '📌', title: 'Adopter Segments', subtitle: '', description: 'Understanding each group\'s motivations and needs', tags: [] },
        { icon: '📌', title: 'Adopter Trade-offs', subtitle: '', description: 'Every position on the curve has costs and benefits', tags: [] },
        { icon: '📌', title: 'When Early Adopters Get Burned', subtitle: '', description: 'The hidden costs of being on the bleeding edge', tags: [] },
        { icon: '📌', title: 'When Late Adopters Get Burned Worse', subtitle: '', description: 'The catastrophic costs of waiting too long', tags: [] },
        { icon: '📌', title: 'Finding Optimal Timing', subtitle: '', description: 'The sweet spot between bleeding edge and obsolescence', tags: [] },
        { icon: '📌', title: 'The Chasm', subtitle: '', description: 'The dangerous gap between early adopters and early majority', tags: [] },
        { icon: '📌', title: 'Wave Planning', subtitle: '', description: 'Structuring rollouts for maximum adoption momentum', tags: [] },
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
        'First-mover competitive advantage',
        'Shape the solution to your needs',
        'Influence vendor roadmap direction',
        'Attract talent who want cutting-edge',
        'Build expertise before competitors',
        'Lock in favorable pricing/terms',
        'Immature product with bugs/gaps',
        'Higher implementation costs',
        'Vendor may pivot or fail',
        'Limited best practices/playbooks',
        'Integration challenges',
        'Skills scarcity and training costs',
      ],
      dontItems: [
        'Proven, stable technology',
        'Established best practices',
        'Lower implementation risk',
        'Commoditized pricing',
        'Abundant skilled talent pool',
        'Mature ecosystem and integrations',
        'Competitors already have advantage',
        'Forced migration under pressure',
        'Legacy systems become unsupported',
        'Talent leaves for modern shops',
        'Technical debt compounds',
        'Disruption risk from new entrants',
      ],
    },
    agent: {
      avatar: '📈',
      name: 'AdoptionAnalyst',
      role: 'Wave Planning & Segment Strategy',
      description: 'Analyzes population segments, predicts adoption curves, designs wave rollout strategies, and monitors adoption momentum. Provides early warning for chasm risks and recommends segment-specific interventions.',
      capabilities: [
        'Population segment identification',
        'Adoption curve prediction',
        'Wave planning & sequencing',
        'Chasm risk detection',
        'Segment-specific messaging',
        'Champion identification',
        'Momentum tracking dashboards',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        adoption_analyst_agent.py',
      code: `# Adoption Wave Analysis Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Segment classifier tool
segment_classifier = Tool(
    name="segment_classifier",
    description="""Analyzes user attributes to
    classify into adopter segments based on
    behavior patterns and characteristics""",
    func=classify_segments
)

# Wave planner tool
wave_planner = Tool(
    name="wave_planner",
    description="""Designs optimal wave sequence
    based on dependencies, risk factors,
    and momentum requirements""",
    func=plan_waves
)

# Chasm detector tool
chasm_detector = Tool(
    name="chasm_detector",
    description="""Monitors adoption metrics for
    early warning signs of chasm approach
    and recommends interventions""",
    func=detect_chasm_risk
)

# Champion finder tool
champion_finder = Tool(
    name="champion_finder",
    description="""Identifies potential champions
    based on influence, enthusiasm, and
    peer network analysis""",
    func=find_champions
)

adoption_analyst = Agent(
    role="Adoption Wave Strategist",
    goal="""Maximize adoption momentum through
    strategic wave planning and targeting""",
    backstory="""Expert in diffusion of innovations
    with experience driving enterprise-scale
    transformations through wave rollouts.""",
    llm=llm,
    tools=[segment_classifier, wave_planner,
           chasm_detector, champion_finder],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.2', title: 'Stakeholder Management', description: 'Identification, analysis, and engagement strategies', slug: 'stakeholder-management' },
      { number: '17.4', title: 'Communication Strategies', description: 'Messaging frameworks and channel selection', slug: 'communication' },
      { number: '17.6', title: 'Adoption Measurement', description: 'KPIs, metrics, and tracking adoption progress', slug: 'adoption-measurement' },
    ],
    prevPage: { title: '17.2 Stakeholder Management', slug: 'stakeholder-management' },
    nextPage: { title: '17.4 Communication Strategies', slug: 'communication' },
  },
  {
    slug: 'communication',
    badge: '📢 Page 17.4',
    title: 'Communication Strategies',
    description: 'Craft messages that resonate, select channels that reach, and time communications that land. Effective change communication answers the questions people are actually asking—not the ones you wish they\'d ask.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Messaging Framework',
      subtitle: 'Building a coherent message architecture',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Great change communication starts with a messaging hierarchy—a structured set of messages that cascade from strategic vision to tactical detail. Without this architecture, communications become inconsistent, contradictory, and confusing. Every email, town hall, and FAQ should trace back to core messages.',
            'The hierarchy ensures that leaders, managers, and frontline communicators all tell the same story, adjusted for their audience but consistent in substance. When the CEO says "digital transformation" and the IT director says "new CRM," people get confused. The messaging framework prevents this.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Messaging Framework',
      subtitle: 'Building a coherent message architecture',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '❓',
          title: 'Why Are We Changing?',
          description: 'The business case in human terms. What\'s broken? What opportunity are we missing? Make the status quo uncomfortable. Connect to things people already know are problems.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🎯',
          title: 'What\'s the Vision?',
          description: 'Paint a picture of the future state. What will work better? What will people\'s day-to-day look like? Be specific enough to be credible, inspiring enough to motivate.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🛤️',
          title: 'How Will We Get There?',
          description: 'The roadmap in plain language. Key phases, major milestones, what happens when. Don\'t overwhelm with detail, but give enough to feel planned.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '👤',
          title: 'What\'s In It For Me?',
          description: 'The WIIFM question everyone asks silently. Address it directly. Will my job be easier? Will I learn new skills? Will I have more autonomy? Be honest about trade-offs.',
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
        { icon: '📌', title: 'Messaging Framework', subtitle: '', description: 'Building a coherent message architecture', tags: [] },
        { icon: '📌', title: 'Channel Selection', subtitle: '', description: 'Matching message to medium for maximum impact', tags: [] },
        { icon: '📌', title: 'Timing & Cadence', subtitle: '', description: 'When to communicate and how often', tags: [] },
        { icon: '📌', title: 'Audience Tailoring', subtitle: '', description: 'Same facts, different framing', tags: [] },
        { icon: '📌', title: 'Message Templates', subtitle: '', description: 'Proven structures for common change communications', tags: [] },
        { icon: '📌', title: 'Two-Way Communication & Feedback', subtitle: '', description: 'Listening is half the conversation', tags: [] },
        { icon: '📌', title: 'Common Communication Mistakes', subtitle: '', description: 'Pitfalls to avoid in change communication', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered communication planning and generation', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Why Are We Changing?', vendor: '', description: 'The business case in human terms. What\'s broken? What opportunity are we missing? Make the status quo uncomfortable. Connect to things people already know are problems.', tags: [] },
        { icon: '🛠️', name: 'What\'s the Vision?', vendor: '', description: 'Paint a picture of the future state. What will work better? What will people\'s day-to-day look like? Be specific enough to be credible, inspiring enough to motivate.', tags: [] },
        { icon: '🛠️', name: 'How Will We Get There?', vendor: '', description: 'The roadmap in plain language. Key phases, major milestones, what happens when. Don\'t overwhelm with detail, but give enough to feel planned.', tags: [] },
        { icon: '🛠️', name: 'What\'s In It For Me?', vendor: '', description: 'The WIIFM question everyone asks silently. Address it directly. Will my job be easier? Will I learn new skills? Will I have more autonomy? Be honest about trade-offs.', tags: [] },
        { icon: '🛠️', name: 'What Do I Need to Do?', vendor: '', description: 'Clear, actionable expectations. What changes in my behavior? What do I need to learn? When do I need to act? Make the ask explicit.', tags: [] },
        { icon: '🛠️', name: 'Where Do I Get Help?', vendor: '', description: 'Support resources and escalation paths. Training schedules, help desk contacts, manager availability. Reduce anxiety by showing the safety net.', tags: [] },
        { icon: '🛠️', name: '✅ Structured Messaging Advantages', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: '❌ Potential Pitfalls', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '📢',
      name: 'CommCrafter',
      role: 'Change Communication Specialist',
      description: 'Generates messaging frameworks, drafts communications for multiple audiences, creates communication calendars, and monitors effectiveness through engagement analysis.',
      capabilities: [
        'Messaging hierarchy generation',
        'Audience-specific content drafting',
        'Communication calendar creation',
        'Channel selection recommendations',
        'FAQ generation from questions',
        'Engagement metric analysis',
        'Sentiment monitoring',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        comm_crafter_agent.py',
      code: `# Change Communication Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Message generator tool
message_generator = Tool(
    name="message_generator",
    description="""Creates messaging hierarchy from
    change context including core narrative,
    strategic messages, and talking points""",
    func=generate_messages
)

# Audience adapter tool
audience_adapter = Tool(
    name="audience_adapter",
    description="""Tailors core messages for specific
    audiences adjusting language, emphasis,
    and detail level appropriately""",
    func=adapt_for_audience
)

# Calendar builder tool
calendar_builder = Tool(
    name="calendar_builder",
    description="""Creates communication calendar with
    channel, timing, owner, and content
    for each communication touchpoint""",
    func=build_calendar
)

comm_crafter = Agent(
    role="Communication Specialist",
    goal="""Plan and generate effective change
    communications for all audiences""",
    backstory="""Former corporate communications
    director with expertise in change
    messaging and stakeholder engagement.""",
    llm=llm,
    tools=[message_generator, audience_adapter,
           calendar_builder],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.2', title: 'Stakeholder Management', description: 'Identification, analysis, and engagement strategies', slug: 'stakeholder-management' },
      { number: '17.5', title: 'Training & Enablement', description: 'Building capability for change adoption', slug: 'training-enablement' },
      { number: '17.7', title: 'Resistance Management', description: 'Understanding and addressing resistance', slug: 'resistance-management' },
    ],
    prevPage: { title: '17.3 Adoption Waves', slug: 'adoption-waves' },
    nextPage: { title: '17.5 Training & Enablement', slug: 'training-enablement' },
  },
  {
    slug: 'training-enablement',
    badge: '🎓 Page 17.5',
    title: 'Training & Enablement',
    description: 'Build the knowledge, skills, and confidence people need to succeed with change. Training bridges the gap between "I understand why" and "I know how"—the critical ADKAR transition from Knowledge to Ability.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '5', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The 70-20-10 Learning Model',
      subtitle: 'How adults actually learn and retain skills',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The 70-20-10 model, developed by the Center for Creative Leadership, shows that adults learn primarily through experience, not formal training. Only 10% of learning comes from courses and classes. The other 90% comes from doing the work and learning from others. This has profound implications for change enablement.',
            'Most organizations over-invest in formal training (the 10%) and under-invest in on-the-job experience (the 70%) and social learning (the 20%). A two-day training class won\'t create competence—but combining training with coaching, practice environments, and peer learning will.',
          ],
        },
      ],
    },
    concepts: {
      title: 'The 70-20-10 Learning Model',
      subtitle: 'How adults actually learn and retain skills',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'Apply to Change Training',
          description: 'Design training programs that include all three elements: formal instruction (10%), coaching and peer support (20%), and hands-on practice with real work (70%). Training alone won\'t work.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'Sandbox Environments',
          description: 'Create safe spaces to practice. For system changes, build training environments with realistic data. For process changes, run simulations. Mistakes in sandbox = learning. Mistakes in production = pain.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '👥',
          title: 'Peer Learning Networks',
          description: 'Connect learners with each other and with experts. Slack channels, lunch-and-learns, office hours with power users. The 20% social learning often gets neglected.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📋',
          title: 'Skills Matrix',
          description: 'Map required skills against roles and current proficiency. Identifies exactly who needs what training. Reveals common gaps across groups and unique gaps for specific roles.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Training Modalities',
      subtitle: 'Different formats for different needs',
      cards: [
        { icon: '🛠️', title: 'Instructor-Led', subtitle: '', description: '10-30 per session', tags: [] },
        { icon: '🛠️', title: 'eLearning', subtitle: '', description: 'Unlimited', tags: [] },
        { icon: '🛠️', title: 'Microlearning', subtitle: '', description: 'Unlimited', tags: [] },
        { icon: '🛠️', title: 'Simulation', subtitle: '', description: 'Unlimited', tags: [] },
        { icon: '🛠️', title: 'Peer Coaching', subtitle: '', description: '1-5 per coach', tags: [] },
        { icon: '🛠️', title: 'Job Aids', subtitle: '', description: 'Unlimited', tags: [] },
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
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🎓',
      name: 'TrainingArchitect',
      role: 'Learning Design & Delivery',
      description: 'Designs role-based curricula, generates training content, recommends modality mix, tracks effectiveness across Kirkpatrick levels, and identifies learners needing support.',
      capabilities: [
        'Training needs assessment',
        'Skills gap analysis',
        'Role-based curriculum design',
        'Content generation (scripts, job aids)',
        'Modality recommendation',
        'Kirkpatrick measurement tracking',
        'Learner support identification',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        training_architect_agent.py',
      code: `# Training Architect Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Needs assessment tool
needs_assessor = Tool(
    name="needs_assessor",
    description="""Analyzes role requirements against
    current capabilities to identify training
    gaps and prioritize learning objectives""",
    func=assess_training_needs
)

# Curriculum designer tool
curriculum_designer = Tool(
    name="curriculum_designer",
    description="""Creates role-based learning paths
    with appropriate modality mix, sequencing,
    and assessment checkpoints""",
    func=design_curriculum
)

# Effectiveness tracker tool
effectiveness_tracker = Tool(
    name="effectiveness_tracker",
    description="""Monitors training metrics across
    Kirkpatrick levels and identifies
    learners needing additional support""",
    func=track_effectiveness
)

training_architect = Agent(
    role="Training Architect",
    goal="""Design and optimize training
    programs for change adoption""",
    backstory="""Instructional designer with
    expertise in adult learning, change
    management, and learning technology.""",
    llm=llm,
    tools=[needs_assessor, curriculum_designer,
           effectiveness_tracker],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.4', title: 'Communication Strategies', description: 'Messaging frameworks and channel selection', slug: 'communication' },
      { number: '17.6', title: 'Adoption Measurement', description: 'Tracking and measuring change success', slug: 'adoption-measurement' },
      { number: '17.7', title: 'Resistance Management', description: 'Understanding and addressing resistance', slug: 'resistance-management' },
    ],
    prevPage: { title: '17.4 Communication Strategies', slug: 'communication' },
    nextPage: { title: '17.6 Adoption Measurement', slug: 'adoption-measurement' },
  },
  {
    slug: 'adoption-measurement',
    badge: '📊 Page 17.6',
    title: 'Adoption Measurement',
    description: 'What gets measured gets managed. Track the right metrics to understand whether change is taking hold, identify struggling areas early, and demonstrate value to stakeholders. Move beyond "did they log in?" to "did it work?"',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '6', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Measurement Framework',
      subtitle: 'A hierarchy of adoption metrics',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Adoption isn\'t a single number—it\'s a hierarchy of outcomes. At the base, did people even access the new system? Above that, are they using it correctly? Higher still, are they proficient? At the top, is it delivering business results? Each level builds on the one below.',
            'Most organizations measure only the bottom level (access/login) and declare victory. Real adoption measurement tracks the full hierarchy and identifies where people are getting stuck.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Measurement Framework',
      subtitle: 'A hierarchy of adoption metrics',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📈',
          title: 'Leading Indicators',
          description: 'Metrics that predict future adoption: training completion, awareness scores, early usage patterns. Spot problems before they become crises. Allow time to intervene.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📉',
          title: 'Lagging Indicators',
          description: 'Metrics that confirm adoption happened: proficiency scores, business results, sustained usage. Prove success after the fact. Needed for stakeholder reporting and ROI.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🔄',
          title: 'Feedback Loops',
          description: 'Measurement enables action only if someone reviews and acts on it. Define who sees which metrics, when they review them, and what actions they take when metrics are off-track.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🎯',
          title: 'Pick 5-7 Key Metrics',
          description: 'Resist the urge to track everything. Too many metrics dilute focus. Select metrics that represent each hierarchy level and directly connect to change objectives.',
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
        { icon: '📌', title: 'Measurement Framework', subtitle: '', description: 'A hierarchy of adoption metrics', tags: [] },
        { icon: '📌', title: 'Key Adoption Metrics', subtitle: '', description: 'What to measure at each level of the hierarchy', tags: [] },
        { icon: '📌', title: 'Dashboard Design', subtitle: '', description: 'Visualizing adoption data for action', tags: [] },
        { icon: '📌', title: 'Measurement Stages', subtitle: '', description: 'What to measure when', tags: [] },
        { icon: '📌', title: 'Benchmarks & Targets', subtitle: '', description: 'What "good" looks like', tags: [] },
        { icon: '📌', title: 'Measurement Pitfalls', subtitle: '', description: 'Common mistakes that undermine measurement value', tags: [] },
        { icon: '📌', title: 'Data Collection Methods', subtitle: '', description: 'Where adoption data comes from', tags: [] },
        { icon: '📌', title: 'Reporting & Stakeholder Communication', subtitle: '', description: 'Turning data into decisions', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Leading Indicators', vendor: '', description: 'Metrics that predict future adoption: training completion, awareness scores, early usage patterns. Spot problems before they become crises. Allow time to intervene.', tags: [] },
        { icon: '🛠️', name: 'Lagging Indicators', vendor: '', description: 'Metrics that confirm adoption happened: proficiency scores, business results, sustained usage. Prove success after the fact. Needed for stakeholder reporting and ROI.', tags: [] },
        { icon: '🛠️', name: 'Feedback Loops', vendor: '', description: 'Measurement enables action only if someone reviews and acts on it. Define who sees which metrics, when they review them, and what actions they take when metrics are off-track.', tags: [] },
        { icon: '🛠️', name: '✅ Structured Measurement Advantages', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: '❌ Common Measurement Challenges', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '📊',
      name: 'AdoptionAnalyst',
      role: 'Adoption Measurement & Analytics',
      description: 'Collects adoption data from multiple sources, builds dashboards, identifies trends and anomalies, predicts adoption trajectories, and recommends interventions for struggling segments.',
      capabilities: [
        'Multi-source data integration',
        'Automated dashboard generation',
        'Trend analysis and anomaly detection',
        'Segmentation by role/dept/location',
        'Predictive adoption modeling',
        'At-risk user identification',
        'Intervention recommendations',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        adoption_analyst_agent.py',
      code: `# Adoption Analyst Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Data collector tool
data_collector = Tool(
    name="data_collector",
    description="""Integrates with system logs, surveys,
    and help desk platforms to collect adoption
    metrics across the measurement hierarchy""",
    func=collect_adoption_data
)

# Trend analyzer tool
trend_analyzer = Tool(
    name="trend_analyzer",
    description="""Analyzes adoption trends over time,
    segments by department/role, identifies
    anomalies and at-risk populations""",
    func=analyze_trends
)

# Predictor tool
adoption_predictor = Tool(
    name="adoption_predictor",
    description="""Forecasts adoption trajectories,
    identifies users likely to disengage,
    recommends targeted interventions""",
    func=predict_adoption
)

adoption_analyst = Agent(
    role="Adoption Analyst",
    goal="""Track, analyze, and predict change
    adoption to enable data-driven decisions""",
    backstory="""Data scientist specializing in
    organizational analytics and change
    measurement with predictive modeling.""",
    llm=llm,
    tools=[data_collector, trend_analyzer,
           adoption_predictor],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.3', title: 'Adoption Waves', description: 'Phased rollout strategies and wave management', slug: 'adoption-waves' },
      { number: '17.5', title: 'Training & Enablement', description: 'Building capability for change adoption', slug: 'training-enablement' },
      { number: '17.7', title: 'Resistance Management', description: 'Understanding and addressing resistance', slug: 'resistance-management' },
    ],
    prevPage: { title: '17.5 Training & Enablement', slug: 'training-enablement' },
    nextPage: { title: '17.7 Resistance Management', slug: 'resistance-management' },
  },
  {
    slug: 'resistance-management',
    badge: '🛡️ Page 17.7',
    title: 'Resistance Management',
    description: 'Resistance isn\'t the enemy—it\'s information. Every objection reveals a barrier to address, a fear to acknowledge, or a legitimate concern to incorporate. The goal isn\'t to crush resistance but to understand it, address it, and convert resisters into adopters—or at least neutralize their opposition.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: '7', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Resistance Spectrum',
      subtitle: 'From champions to saboteurs',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'People don\'t fall into binary "support" or "resist" categories—they exist on a spectrum of engagement. Understanding where someone sits helps you choose the right approach. Active supporters need different treatment than passive resisters. And the silent majority in the middle often determines success or failure.',
            'The goal of resistance management is to shift people toward the supportive end of the spectrum—converting active resisters to passive, passive to neutral, neutral to passive support, and passive support to active champions.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Difficult Conversations',
      subtitle: 'Scripts for common resistance scenarios',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '👂',
          title: 'Listen to Understand',
          description: 'Before responding, make sure you actually understand. Paraphrase what you heard. Ask clarifying questions. People become more open once they feel heard.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '✅',
          title: 'Validate Before Addressing',
          description: 'Acknowledge the validity of their feelings or perspective before presenting your view. "You\'re right that..." or "I understand why you\'d feel..." opens doors.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🤝',
          title: 'Invite Partnership',
          description: 'Shift from adversarial to collaborative. "What would need to happen for this to work for you?" puts you on the same side of the problem.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🎁',
          title: 'Give Them a Win',
          description: 'Incorporate their feedback visibly. When they see their input shaped the solution, they become invested in its success. "We changed X because of your input" is powerful.',
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
        { icon: '📌', title: 'The Resistance Spectrum', subtitle: '', description: 'From champions to saboteurs', tags: [] },
        { icon: '📌', title: 'Root Causes of Resistance', subtitle: '', description: 'Understanding the "why" behind the "no"', tags: [] },
        { icon: '📌', title: 'Response Tactics', subtitle: '', description: 'Matching intervention to resistance type', tags: [] },
        { icon: '📌', title: 'Difficult Conversations', subtitle: '', description: 'Scripts for common resistance scenarios', tags: [] },
        { icon: '📌', title: 'Escalation Path', subtitle: '', description: 'When dialogue doesn\'t work', tags: [] },
        { icon: '📌', title: 'Early Warning Signs', subtitle: '', description: 'Detecting resistance before it escalates', tags: [] },
        { icon: '📌', title: 'Converting Resisters to Advocates', subtitle: '', description: 'The ultimate resistance management outcome', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered resistance detection and response', tags: [] },
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
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🛡️',
      name: 'ResistanceRadar',
      role: 'Resistance Detection & Response',
      description: 'Monitors for resistance signals across communication channels, diagnoses root causes, recommends intervention strategies, and tracks conversion progress.',
      capabilities: [
        'Sentiment analysis across channels',
        'Resistance pattern detection',
        'Root cause diagnosis (ADKAR mapping)',
        'Intervention recommendation',
        'Conversation script generation',
        'Escalation path tracking',
        'Conversion progress monitoring',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        resistance_radar_agent.py',
      code: `# Resistance Radar Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Sentiment analyzer tool
sentiment_analyzer = Tool(
    name="sentiment_analyzer",
    description="""Analyzes communication sentiment
    across surveys, tickets, and messages
    to detect resistance signals""",
    func=analyze_sentiment
)

# Root cause diagnoser tool
root_cause_diagnoser = Tool(
    name="root_cause_diagnoser",
    description="""Maps resistance signals to ADKAR
    gaps and recommends targeted
    interventions by root cause""",
    func=diagnose_root_cause
)

# Intervention recommender tool
intervention_recommender = Tool(
    name="intervention_recommender",
    description="""Suggests conversation approaches,
    escalation strategies, and conversion
    tactics based on resistance pattern""",
    func=recommend_intervention
)

resistance_radar = Agent(
    role="Resistance Analyst",
    goal="""Detect and diagnose resistance early,
    recommend effective interventions""",
    backstory="""Organizational psychologist with
    expertise in change resistance and
    stakeholder influence patterns.""",
    llm=llm,
    tools=[sentiment_analyzer, root_cause_diagnoser,
           intervention_recommender],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '17.2', title: 'Stakeholder Management', description: 'Identification, analysis, and engagement strategies', slug: 'stakeholder-management' },
      { number: '17.4', title: 'Communication Strategies', description: 'Messaging frameworks and channel selection', slug: 'communication' },
      { number: '17.1', title: 'Change Frameworks', description: 'ADKAR, Kotter, and other proven models', slug: 'change-frameworks' },
    ],
    prevPage: { title: '17.6 Adoption Measurement', slug: 'adoption-measurement' },
    nextPage: undefined,
  },
]

registerPages('change-management', pages)
export default pages
