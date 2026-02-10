import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'product-lifecycle',
    badge: '🔄 Page 10.1',
    title: 'Product Lifecycle',
    description: 'Master the complete product development journey from initial discovery through launch and continuous iteration. A structured approach that balances speed with quality, enabling teams to ship value incrementally while maintaining technical excellence and user focus throughout the entire product lifecycle.',
    accentColor: '#14B8A6',
    accentLight: '#2DD4BF',
    metrics: [
      { value: '7', label: 'Core Phases' },
      { value: '18-32', label: 'Weeks Typical' },
      { value: '85%', label: 'Success Rate' },
      { value: '3x', label: 'Faster Iteration' },
    ],
    overview: {
      title: 'Understanding the Product Lifecycle',
      subtitle: 'From concept to continuous improvement—building products that last',
      subsections: [
        {
          heading: 'What is the Product Lifecycle?',
          paragraphs: [
            'The product lifecycle is a structured framework that guides teams from initial concept through market launch and ongoing iteration. It provides clear phases with defined deliverables, quality gates, and success criteria—enabling better planning, resource allocation, and risk management.',
            'The key insight: successful products aren\'t built in isolation—they\'re developed through continuous cycles of building, measuring, and learning. Each phase serves a specific purpose and builds systematically on the previous one.',
            'Unlike traditional waterfall approaches, modern lifecycle management embraces uncertainty and change. It acknowledges that requirements evolve, markets shift, and user needs are discovered—not predicted.',
          ],
        },
        {
          heading: 'Why Lifecycle Management Matters',
          paragraphs: [
            'Reduced Risk: Validate assumptions early before investing significant resources. Kill projects that won\'t succeed before they drain budgets. The earlier you fail, the cheaper the lesson.',
            'Faster Time-to-Market: Structured phases eliminate decision paralysis. Teams know what to do and when to move forward. Clear handoffs prevent bottlenecks.',
            'Better Outcomes: Products built with continuous user input outperform those built on assumptions. Each phase incorporates feedback loops that course-correct early.',
            'Team Alignment: Everyone understands where they are in the journey, what success looks like, and what comes next. No more "are we done yet?" conversations.',
          ],
        },
        {
          heading: 'Key Lifecycle Characteristics',
          paragraphs: [
          ],
        },
      ],
    },
    concepts: {
      title: 'Waterfall vs. Agile Lifecycle',
      subtitle: 'Understanding the fundamental approaches to product development',
      columns: 2,
      cards: [
        {
          className: 'waterfall',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '📊 Waterfall Lifecycle',
          description: '',
          examples: ['Sequential phases, no overlap', 'Complete documentation upfront', 'Big bang release at the end', 'Change is expensive and disruptive', 'Long feedback cycles'],
        },
        {
          className: 'agile',
          borderColor: '#10B981',
          icon: '💡',
          title: '🔄 Agile Lifecycle',
          description: '',
          examples: ['Iterative cycles with overlap', 'Just-enough documentation', 'Incremental releases frequently', 'Change is expected and welcomed', 'Continuous feedback loops'],
        },
        {
          className: 'overview-2',
          borderColor: '#8B5CF6',
          icon: '📌',
          title: 'Key Lifecycle Characteristics',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Product Lifecycle',
          description: 'Master the complete product development journey from initial discovery through launch and continuous iteration. A structured approach that balances speed with quality, enabling teams to ship value inc',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Tools & Platforms',
      subtitle: 'Essential tools for managing the product lifecycle',
      cards: [
        { icon: '🛠️', title: 'Best For', subtitle: 'Enterprise Agile', description: 'Non-technical', tags: ['Enterprise Agile'] },
        { icon: '🛠️', title: 'Learning Curve', subtitle: 'Steep', description: 'Easy', tags: ['Steep'] },
        { icon: '🛠️', title: 'Customization', subtitle: '✓ Extensive', description: '✓ Extensive', tags: ['✓ Extensive'] },
        { icon: '🛠️', title: 'Git Integration', subtitle: '✓ Native', description: '~ Via Apps', tags: ['✓ Native'] },
        { icon: '🛠️', title: 'Pricing', subtitle: '$$$', description: '$$', tags: ['$$$'] },
        { icon: '📌', title: 'Product Lifecycle', subtitle: '', description: 'Master the complete product development journey from initial discovery through launch and continuous iteration. A structured approach that balances sp', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Platforms',
      subtitle: 'Essential tools for managing the product lifecycle',
      items: [
        { icon: '📋', name: '📋\n                        \n                            Jira\n                            Project Management', vendor: '', description: 'Industry-standard agile project management. Sprints, backlogs, roadmaps, and deep integrations.', tags: [] },
        { icon: '⚡', name: '⚡\n                        \n                            Linear\n                            Project Management', vendor: '', description: 'Fast, modern issue tracking built for speed. Keyboard-first design with beautiful UX.', tags: [] },
        { icon: '📝', name: '📝\n                        \n                            Notion\n                            Documentation', vendor: '', description: 'All-in-one workspace for docs, wikis, and databases. Flexible for any workflow.', tags: [] },
        { icon: '🎨', name: '🎨\n                        \n                            Figma\n                            Design', vendor: '', description: 'Collaborative design platform for UI/UX. Real-time multiplayer with dev handoff.', tags: [] },
        { icon: '📊', name: '📊\n                        \n                            Amplitude\n                            Analytics', vendor: '', description: 'Product analytics for user behavior. Funnels, cohorts, and experimentation platform.', tags: [] },
        { icon: '🔬', name: '🔬\n                        \n                            Mixpanel\n                            Analytics', vendor: '', description: 'Event-based product analytics. Track user journeys and measure impact.', tags: [] },
        { icon: '🎯', name: '🎯\n                        \n                            LaunchDarkly\n                            Feature Flags', vendor: '', description: 'Feature management platform for controlled rollouts and experimentation.', tags: [] },
        { icon: '🔔', name: '🔔\n                        \n                            PagerDuty\n                            Incident Response', vendor: '', description: 'On-call management and incident response. Keep teams informed during outages.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven patterns from high-performing product teams',
      doItems: [
        'Start with user research—validate problems before building solutions',
        'Ship early MVPs to learn fast, even if they\'re embarrassing',
        'Use feature flags for progressive rollouts and easy rollbacks',
        'Define success metrics before building—measure relentlessly',
        'Run retrospectives after every phase for continuous improvement',
        'Kill projects early if data shows they won\'t succeed',
        'Document decisions and rationale for future reference',
        'Involve users throughout—not just at the beginning and end',
        'Build cross-functional teams that own outcomes end-to-end',
      ],
      dontItems: [
        'Build features in isolation without user feedback loops',
        'Spend months on a "perfect" v1—perfectionism kills products',
        'Launch to 100% on day one—you\'ll miss critical learnings',
        'Measure success by features shipped rather than outcomes',
        'Skip documentation—future you will hate present you',
        'Ignore technical debt until it becomes crippling',
        'Let stakeholders add scope without trade-off discussions',
        'Assume what users want—always validate with evidence',
        'Throw features over the wall without support enablement',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'ProductLifecycleManager',
      role: 'Product Lifecycle Manager',
      description: 'An AI agent that monitors phase progress, validates deliverables, ensures quality gates are met before transitions, and generates status reports for stakeholders.',
      capabilities: [
        'Track phase deliverables and completion status',
        'Validate quality gates before phase transitions',
        'Identify risks and blockers proactively',
        'Generate phase transition reports automatically',
        'Alert stakeholders on milestone completion',
        'Forecast delivery dates based on velocity',
      ],
      codeFilename: 'lifecycle_agent.py',
      code: `from crewai import Agent, Task, Crew

lifecycle_manager = Agent(
    role="Product Lifecycle Manager",
    goal="Guide products through phases with quality gates",
    backstory="""Expert in product development lifecycle.
    Ensures deliverables complete and quality standards met.
    Identifies risks early and recommends mitigations.""",
    tools=[phase_tracker, deliverable_validator,
           risk_assessor, stakeholder_notifier]
)

transition_task = Task(
    description="""Evaluate phase transition readiness:
    - Audit required deliverables vs checklist
    - Verify quality gates satisfied
    - Review stakeholder sign-offs
    - Assess team capacity for next phase
    - Generate go/no-go recommendation""",
    agent=lifecycle_manager,
    expected_output="Phase transition report"
)

crew = Crew(agents=[lifecycle_manager], tasks=[transition_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '', title: 'Best Practices', description: 'Code quality, documentation, and technical debt management', slug: 'best-practices' },
      { number: '', title: 'Methodologies', description: 'Agile, Scrum, Kanban, and SAFe frameworks in depth', slug: 'methodologies' },
      { number: '', title: 'Product Metrics', description: 'KPIs, OKRs, and DORA metrics for measuring success', slug: 'product-metrics' },
    ],
    prevPage: undefined,
    nextPage: { title: '10.2 Best Practices', slug: 'best-practices' },
  },
  {
    slug: 'best-practices',
    badge: '✨ Page 10.2',
    title: 'Best Practices',
    description: 'Master the engineering practices that separate exceptional codebases from technical debt disasters. From SOLID principles to code review workflows, learn the patterns that enable teams to ship fast while maintaining long-term velocity and code health.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '80%+', label: 'Test Coverage Target' },
      { value: '<4hrs', label: 'PR Review SLA' },
      { value: '0', label: 'Critical Lint Errors' },
      { value: '20%', label: 'Tech Debt Budget' },
    ],
    overview: {
      title: 'Understanding Code Quality',
      subtitle: 'The foundation of sustainable software development',
      subsections: [
        {
          heading: 'What Makes Code "Good"?',
          paragraphs: [
            'Good code isn\'t just code that works—it\'s code that can be understood, modified, and extended by others (including future you). It balances readability with performance, flexibility with simplicity.',
            'The best codebases share common traits: consistent style, clear naming, small focused functions, comprehensive tests, and documentation that explains "why" not just "what."',
            'Code quality isn\'t about perfection—it\'s about sustainable velocity. Clean code lets teams move fast without breaking things.',
          ],
        },
        {
          heading: 'Why Best Practices Matter',
          paragraphs: [
            'Reduced Bugs: Consistent patterns and testing catch issues before production. Prevention beats firefighting every time.',
            'Faster Onboarding: New team members productive in days instead of weeks when code is readable and documented.',
            'Sustainable Velocity: Technical debt compounds. Best practices prevent the slowdown that kills projects.',
            'Team Happiness: Engineers want to work in clean codebases. Retention improves when the code isn\'t painful.',
          ],
        },
      ],
    },
    concepts: {
      title: 'SOLID Principles',
      subtitle: 'The five pillars of object-oriented design',
      columns: 2,
      cards: [
        {
          className: 'principle-0',
          borderColor: '#3B82F6',
          icon: 'S',
          title: '',
          description: 'A class should have only one reason to change. One job, done well.',
          examples: [],
        },
        {
          className: 'principle-1',
          borderColor: '#10B981',
          icon: 'O',
          title: '',
          description: 'Open for extension, closed for modification. Add features without changing existing code.',
          examples: [],
        },
        {
          className: 'principle-2',
          borderColor: '#8B5CF6',
          icon: 'L',
          title: '',
          description: 'Subtypes must be substitutable for their base types without breaking behavior.',
          examples: [],
        },
        {
          className: 'principle-3',
          borderColor: '#F59E0B',
          icon: 'I',
          title: '',
          description: 'Many specific interfaces are better than one general-purpose interface.',
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
        { icon: '📌', title: 'Understanding Code Quality', subtitle: '', description: 'The foundation of sustainable software development', tags: [] },
        { icon: '📌', title: 'The Code Quality Pyramid', subtitle: '', description: 'Layers of quality from foundation to peak', tags: [] },
        { icon: '📌', title: 'SOLID Principles', subtitle: '', description: 'The five pillars of object-oriented design', tags: [] },
        { icon: '📌', title: 'Common Code Smells', subtitle: '', description: 'Warning signs that code needs refactoring', tags: [] },
        { icon: '📌', title: 'Technical Debt Management', subtitle: '', description: 'Strategic approach to managing code quality trade-offs', tags: [] },
        { icon: '📌', title: 'Code Review Excellence', subtitle: '', description: 'Collaborative quality assurance that levels up the whole team', tags: [] },
        { icon: '📌', title: 'Documentation Excellence', subtitle: '', description: 'The right docs at the right level of detail', tags: [] },
        { icon: '📌', title: 'Testing Best Practices', subtitle: '', description: 'Write tests that catch bugs and enable refactoring', tags: [] },
      ],
    },
    tools: {
      title: 'Quality Tools',
      subtitle: 'Essential tooling for maintaining code quality',
      items: [
        { icon: '🔍', name: 'ESLint', vendor: '', description: 'Pluggable linter for JavaScript/TypeScript. Catches bugs, enforces style, integrates everywhere.', tags: [] },
        { icon: '🎨', name: 'Prettier', vendor: '', description: 'Opinionated formatter. End style debates forever. Consistent code across the team.', tags: [] },
        { icon: '🔐', name: 'SonarQube', vendor: '', description: 'Continuous inspection platform. Security vulnerabilities, code smells, coverage tracking.', tags: [] },
        { icon: '📊', name: 'Codecov', vendor: '', description: 'Test coverage reporting. PR comments, trend tracking, coverage gates.', tags: [] },
        { icon: '🐙', name: 'GitHub Actions', vendor: '', description: 'Native GitHub CI. Workflows as code, marketplace actions, seamless PR integration.', tags: [] },
        { icon: '🔄', name: 'Husky', vendor: '', description: 'Modern Git hooks. Run linters, tests, formatters before commit or push.', tags: [] },
        { icon: '📦', name: 'Dependabot', vendor: '', description: 'Automated dependency updates. Security patches, version bumps, changelog summaries.', tags: [] },
        { icon: '🛡️', name: 'Snyk', vendor: '', description: 'Find and fix vulnerabilities. Dependencies, containers, IaC scanning.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices Summary',
      subtitle: 'Quick reference for code quality standards',
      doItems: [
        'Write self-documenting code with clear names',
        'Keep functions small and focused (under 20 lines)',
        'Test behavior, not implementation details',
        'Review PRs within 4 hours during work days',
        'Track and budget for technical debt',
        'Automate everything that can be automated',
        'Document decisions, not just code',
        'Refactor continuously in small increments',
        'Use feature flags for safe deployments',
      ],
      dontItems: [
        'Write clever code that only you understand',
        'Let functions grow to hundreds of lines',
        'Mock everything—integration matters',
        'Let PRs sit for days without review',
        'Ignore tech debt until crisis mode',
        'Rely on manual processes that can be automated',
        'Write documentation once and forget it',
        'Save refactoring for "someday"',
        'Deploy directly to production without gates',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'CodeQualityReviewer',
      role: 'Senior Code Reviewer',
      description: 'An AI agent that reviews code for quality issues, suggests refactorings, identifies code smells, and ensures adherence to team standards before human review.',
      capabilities: [
        'Detect code smells and anti-patterns',
        'Suggest refactoring opportunities',
        'Check adherence to style guides',
        'Identify missing test coverage',
        'Generate documentation suggestions',
        'Flag potential security issues',
      ],
      codeFilename: 'code_reviewer_agent.py',
      code: `from crewai import Agent, Task, Crew

code_reviewer = Agent(
    role="Senior Code Reviewer",
    goal="Ensure code quality and best practices",
    backstory="""Expert in clean code principles,
    SOLID design, and refactoring patterns. Reviews
    code for quality, security, and maintainability.""",
    tools=[ast_analyzer, complexity_checker,
           security_scanner, style_enforcer]
)

review_task = Task(
    description="""Review this pull request:
    - Check for code smells and anti-patterns
    - Verify test coverage for new code
    - Ensure documentation is adequate
    - Flag security vulnerabilities
    - Suggest refactoring improvements""",
    agent=code_reviewer,
    expected_output="Code review with actionable feedback"
)

crew = Crew(agents=[code_reviewer], tasks=[review_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '', title: 'Product Lifecycle', description: 'The complete journey from discovery to iteration', slug: 'product-lifecycle' },
      { number: '', title: 'Validation & Testing', description: 'Comprehensive testing strategies and automation', slug: 'validation' },
      { number: '', title: 'AI-Assisted Development', description: 'Leveraging AI for faster, better code', slug: 'ai-assisted-dev' },
    ],
    prevPage: { title: '10.1 Product Lifecycle', slug: 'product-lifecycle' },
    nextPage: { title: '10.3 Scaling Strategies', slug: 'scaling-strategies' },
  },
  {
    slug: 'scaling-strategies',
    badge: '📈 Page 10.3',
    title: 'Scaling Strategies',
    description: 'Build systems that grow with your business. From vertical scaling for quick wins to horizontal scaling for unlimited growth, master the patterns that let you handle 10x traffic without 10x headaches. Scale confidently from MVP to millions of users.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '99.99%', label: 'Uptime Target' },
      { value: '<100ms', label: 'P95 Latency' },
      { value: '10x', label: 'Traffic Headroom' },
      { value: 'Auto', label: 'Scale Mode' },
    ],
    overview: {
      title: 'Understanding Scalability',
      subtitle: 'Building systems that handle growth gracefully',
      subsections: [
        {
          heading: 'What is Scalability?',
          paragraphs: [
            'Scalability is the ability of a system to handle increased load by adding resources. A scalable system maintains performance as demand grows—whether that\'s more users, more data, or more requests.',
            'The key insight: scalability isn\'t just about handling today\'s traffic—it\'s about building systems that can grow 10x or 100x without architectural rewrites.',
            'Good scalability means linear cost scaling: double the traffic should roughly double the cost, not 10x it.',
          ],
        },
        {
          heading: 'Why Scaling Matters',
          paragraphs: [
            'User Experience: Slow is the new down. Users abandon sites that take more than 3 seconds to load. Scaling keeps you fast.',
            'Business Growth: Success creates traffic. Viral moments, press coverage, and product-market fit all drive sudden spikes.',
            'Cost Efficiency: Right-sized infrastructure means paying for what you need. Over-provisioning wastes money; under-provisioning loses customers.',
            'Competitive Advantage: Companies that scale smoothly can grow faster than those fighting infrastructure fires.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Caching Strategies',
      subtitle: 'Reduce load by serving pre-computed results',
      columns: 2,
      cards: [
        {
          className: 'cache-0',
          borderColor: '#3B82F6',
          icon: '🌐',
          title: 'CDN Caching',
          description: 'Cache static assets at edge locations worldwide. Users get content from nearest server.',
          examples: [],
        },
        {
          className: 'cache-1',
          borderColor: '#10B981',
          icon: '⚡',
          title: 'Application Cache',
          description: 'In-memory cache (Redis, Memcached) for frequently accessed data and computed results.',
          examples: [],
        },
        {
          className: 'cache-2',
          borderColor: '#8B5CF6',
          icon: '🗄️',
          title: 'Database Cache',
          description: 'Query result caching at database level. Reduces expensive query execution.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Scaling Strategies',
          description: 'Build systems that grow with your business. From vertical scaling for quick wins to horizontal scaling for unlimited growth, master the patterns that let you handle 10x traffic without 10x headaches.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Load Balancing',
      subtitle: 'Distributing traffic across multiple servers',
      cards: [
        { icon: '🛠️', title: 'Round Robin', subtitle: 'Distributes requests sequentially', description: 'Ignores server load', tags: ['Distributes requests sequentially'] },
        { icon: '🛠️', title: 'Least Connections', subtitle: 'Routes to server with fewest active connections', description: 'Connection != load', tags: ['Routes to server with fewest active connections'] },
        { icon: '🛠️', title: 'IP Hash', subtitle: 'Same client IP always hits same server', description: 'Uneven distribution', tags: ['Same client IP always hits same server'] },
        { icon: '🛠️', title: 'Weighted', subtitle: 'Servers receive traffic proportional to weight', description: 'Manual configuration', tags: ['Servers receive traffic proportional to weight'] },
        { icon: '📌', title: 'Scaling Strategies', subtitle: '', description: 'Build systems that grow with your business. From vertical scaling for quick wins to horizontal scaling for unlimited growth, master the patterns that', tags: [] },
        { icon: '📌', title: 'Scaling Strategies', subtitle: '', description: 'Build systems that grow with your business. From vertical scaling for quick wins to horizontal scaling for unlimited growth, master the patterns that', tags: [] },
      ],
    },
    tools: {
      title: 'Scaling Tools',
      subtitle: 'Infrastructure for building scalable systems',
      items: [
        { icon: '☸️', name: 'Kubernetes', vendor: '', description: 'Auto-scaling, self-healing container orchestration. The standard for scalable deployments.', tags: [] },
        { icon: '🔴', name: 'Redis', vendor: '', description: 'Lightning-fast cache and data structure store. Essential for scaling read-heavy workloads.', tags: [] },
        { icon: '🌊', name: 'Kafka', vendor: '', description: 'Distributed event streaming for async processing. Decouple services at scale.', tags: [] },
        { icon: '🌐', name: 'Cloudflare', vendor: '', description: 'Global CDN with built-in DDoS protection. Edge caching for static assets.', tags: [] },
        { icon: '📊', name: 'Prometheus', vendor: '', description: 'Metrics collection and alerting. Know when you need to scale before users notice.', tags: [] },
        { icon: '🐘', name: 'PostgreSQL', vendor: '', description: 'Rock-solid relational database with excellent scaling options. Replicas, partitioning, Citus.', tags: [] },
        { icon: '⚡', name: 'NGINX', vendor: '', description: 'High-performance reverse proxy and load balancer. Handles millions of concurrent connections.', tags: [] },
        { icon: '🔧', name: 'Terraform', vendor: '', description: 'Provision and manage infrastructure with code. Reproducible, version-controlled scaling.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Scaling Best Practices',
      subtitle: 'Proven patterns for building scalable systems',
      doItems: [
        'Design stateless services from day one',
        'Cache aggressively at every layer',
        'Use async processing for non-critical paths',
        'Monitor everything—you can\'t fix what you can\'t see',
        'Load test regularly to find breaking points',
        'Set up auto-scaling with appropriate thresholds',
        'Use read replicas for database scaling',
        'Plan capacity 6+ months ahead',
      ],
      dontItems: [
        'Store session state on application servers',
        'Make synchronous calls to slow external services',
        'Ignore database query performance',
        'Scale up when you should scale out',
        'Wait for outages to discover scaling limits',
        'Over-engineer for hypothetical scale',
        'Forget about cold cache scenarios',
        'Rely on single points of failure',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'ScalingArchitect',
      role: 'Scaling Architect',
      description: 'An AI agent that analyzes your infrastructure, identifies bottlenecks, and recommends scaling strategies based on traffic patterns and growth projections.',
      capabilities: [
        'Analyze traffic patterns and growth trends',
        'Identify performance bottlenecks',
        'Recommend scaling strategies',
        'Estimate infrastructure costs',
        'Generate architecture diagrams',
        'Predict scaling risks',
      ],
      codeFilename: 'scaling_architect_agent.py',
      code: `from crewai import Agent, Task, Crew

scaling_architect = Agent(
    role="Scaling Architect",
    goal="Design scalable infrastructure",
    backstory="""Expert in distributed systems and
    cloud architecture. Designs systems that handle
    millions of users while controlling costs.""",
    tools=[metrics_analyzer, load_tester,
           cost_estimator, architecture_generator]
)

scaling_task = Task(
    description="""Analyze this system and recommend:
    - Current bottlenecks and limits
    - Short-term scaling options (3 months)
    - Long-term architecture evolution
    - Cost projections at 10x scale
    - Migration strategy and timeline""",
    agent=scaling_architect,
    expected_output="Scaling roadmap with recommendations"
)

crew = Crew(agents=[scaling_architect], tasks=[scaling_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '', title: 'Best Practices', description: 'Code quality and engineering excellence', slug: 'best-practices' },
      { number: '', title: 'Validation & Testing', description: 'Load testing and performance validation', slug: 'validation' },
      { number: '', title: 'Product Metrics', description: 'Monitoring and measuring system health', slug: 'product-metrics' },
    ],
    prevPage: { title: '10.2 Best Practices', slug: 'best-practices' },
    nextPage: { title: '10.4 AI-Assisted Development', slug: 'ai-assisted-dev' },
  },
  {
    slug: 'ai-assisted-dev',
    badge: '🤖 Page 10.4',
    title: 'AI-Assisted Development',
    description: 'Leverage AI to accelerate development without sacrificing quality. From code generation to documentation, learn how to integrate AI tools into your workflow while maintaining code ownership, security, and architectural integrity.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '55%', label: 'Faster Coding' },
      { value: '40%', label: 'Less Boilerplate' },
      { value: '92%', label: 'Dev Adoption' },
      { value: '2x', label: 'PR Throughput' },
    ],
    overview: {
      title: 'Understanding AI-Assisted Development',
      subtitle: 'Augmenting human intelligence, not replacing it',
      subsections: [
        {
          heading: 'What is AI-Assisted Development?',
          paragraphs: [
            'AI-assisted development uses machine learning models to help developers write, review, test, and document code. These tools understand context, suggest completions, explain code, and automate repetitive tasks.',
            'The key insight: AI is a powerful collaborator, not an autonomous agent. It excels at pattern matching and boilerplate but requires human judgment for architecture, security, and business logic.',
            'Think of AI as a very fast junior developer—helpful for drafting, but always needs review.',
          ],
        },
        {
          heading: 'Why AI-Assisted Development Matters',
          paragraphs: [
            'Velocity: Spend time on hard problems, not boilerplate. AI handles the tedious stuff so you can focus on what matters.',
            'Learning: Get explanations, see alternatives, discover patterns. AI is like having a knowledgeable pair programmer available 24/7.',
            'Consistency: AI can help enforce coding standards across the team. Same patterns, same style, everywhere.',
            'Accessibility: Lower barrier to entry for new languages and frameworks. AI helps bridge knowledge gaps.',
          ],
        },
      ],
    },
    concepts: {
      title: 'High-Value Use Cases',
      subtitle: 'Where AI delivers the most impact',
      columns: 2,
      cards: [
        {
          className: 'usecase-0',
          borderColor: '#3B82F6',
          icon: '📝',
          title: 'Boilerplate Generation',
          description: 'CRUD endpoints, data models, API clients. AI excels at repetitive patterns you\'ve written 100 times.',
          examples: [],
        },
        {
          className: 'usecase-1',
          borderColor: '#10B981',
          icon: '🧪',
          title: 'Test Generation',
          description: 'Unit tests, edge cases, mocks. Given a function, AI generates comprehensive test suites.',
          examples: [],
        },
        {
          className: 'usecase-2',
          borderColor: '#8B5CF6',
          icon: '📚',
          title: 'Documentation',
          description: 'JSDoc, README files, API docs. AI drafts, humans refine. Always better than nothing.',
          examples: [],
        },
        {
          className: 'usecase-3',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: 'Code Refactoring',
          description: 'Modernize legacy code, apply design patterns, improve performance. AI suggests, you decide.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'AI Development Tool Ecosystem',
      subtitle: 'The landscape of AI-powered development tools',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'GitHub Copilot', tagText: 'Inline completion', tagClass: 'tag-blue', bestFor: 'Enterprise options', complexity: 'medium', rating: '✓ All major IDEs' },
        { icon: '🛠️', name: 'Cursor', tagText: 'Full IDE experience', tagClass: 'tag-green', bestFor: 'Good', complexity: 'medium', rating: 'Standalone IDE' },
        { icon: '🛠️', name: 'Claude', tagText: 'Complex reasoning', tagClass: 'tag-purple', bestFor: '✓ Excellent', complexity: 'medium', rating: 'Web/API' },
        { icon: '🛠️', name: 'Codeium', tagText: 'Free option', tagClass: 'tag-orange', bestFor: 'Good', complexity: 'medium', rating: '✓ All major IDEs' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'AI Development Best Practices',
      subtitle: 'Maximizing value while minimizing risk',
      doItems: [
        'Review all AI-generated code before committing',
        'Use AI for first drafts, iterate with human judgment',
        'Write detailed prompts with context and constraints',
        'Test AI output more thoroughly than human code',
        'Use AI for learning and exploring unfamiliar domains',
        'Maintain coding skills—AI is a tool, not a replacement',
        'Track AI-assisted code for quality patterns',
      ],
      dontItems: [
        'Copy-paste without understanding',
        'Include secrets or PII in prompts',
        'Trust AI for security-critical code without expert review',
        'Assume AI understands your unique business logic',
        'Skip code review because "AI wrote it"',
        'Use AI as excuse to avoid learning fundamentals',
        'Blame AI for bugs—you accepted the code',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'DeveloperAssistantCrew',
      role: 'Senior Developer',
      description: 'A multi-agent system that combines specialized AI agents for different development tasks: code generation, review, testing, and documentation working together.',
      capabilities: [
        'Generate code from specifications',
        'Review for quality and security',
        'Generate comprehensive test suites',
        'Auto-generate documentation',
        'Suggest refactoring improvements',
        'Debug and explain errors',
      ],
      codeFilename: 'dev_assistant_crew.py',
      code: `from crewai import Agent, Task, Crew

coder = Agent(
    role="Senior Developer",
    goal="Write clean, efficient code",
    tools=[code_generator, linter]
)

reviewer = Agent(
    role="Code Reviewer",
    goal="Ensure quality and security",
    tools=[security_scanner, style_checker]
)

tester = Agent(
    role="QA Engineer",
    goal="Comprehensive test coverage",
    tools=[test_generator, coverage_analyzer]
)

dev_crew = Crew(
    agents=[coder, reviewer, tester],
    tasks=[code_task, review_task, test_task],
    process="sequential"
)
result = dev_crew.kickoff()`,
    },
    relatedPages: [
      { number: '', title: 'Best Practices', description: 'Code quality standards for human and AI code', slug: 'best-practices' },
      { number: '', title: 'Validation & Testing', description: 'Testing strategies including AI-generated tests', slug: 'validation' },
      { number: '', title: 'Product Metrics', description: 'Measuring AI impact on development velocity', slug: 'product-metrics' },
    ],
    prevPage: { title: '10.3 Scaling Strategies', slug: 'scaling-strategies' },
    nextPage: { title: '10.5 Validation & Testing', slug: 'validation' },
  },
  {
    slug: 'validation',
    badge: '✅ Page 10.5',
    title: 'Validation & Testing',
    description: 'Build confidence in your code with comprehensive testing strategies. From unit tests to end-to-end validation, master the testing pyramid, CI/CD pipelines, and quality gates that catch bugs before users do.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '80%+', label: 'Coverage Target' },
      { value: '<10min', label: 'CI Pipeline' },
      { value: '0', label: 'Prod Bugs Goal' },
      { value: '100%', label: 'Critical Path' },
    ],
    overview: {
      title: 'Understanding Testing',
      subtitle: 'Why testing is essential for sustainable development',
      subsections: [
        {
          heading: 'What is Software Testing?',
          paragraphs: [
            'Software testing is the systematic process of verifying that code behaves as expected. It catches bugs early, enables safe refactoring, and documents expected behavior through executable specifications.',
            'Good tests are fast, reliable, and focused. They test behavior, not implementation details.',
          ],
        },
        {
          heading: 'Why Testing Matters',
          paragraphs: [
            'Confidence: Ship without fear. Tests catch regressions before users do.',
            'Refactoring: Change code safely. Tests verify behavior is preserved.',
            'Documentation: Tests show how code should be used.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Test Types',
      subtitle: 'Different tests for different purposes',
      columns: 2,
      cards: [
        {
          className: 'test-type-0',
          borderColor: '#3B82F6',
          icon: '⚡',
          title: '',
          description: 'Test individual functions in isolation. Mock dependencies. Fast execution.',
          examples: [],
        },
        {
          className: 'test-type-1',
          borderColor: '#10B981',
          icon: '🔗',
          title: '',
          description: 'Test component interactions. Real databases, real APIs.',
          examples: [],
        },
        {
          className: 'test-type-2',
          borderColor: '#8B5CF6',
          icon: '🌐',
          title: '',
          description: 'Test complete user flows through the UI. Browser automation.',
          examples: [],
        },
        {
          className: 'test-type-3',
          borderColor: '#F59E0B',
          icon: '📄',
          title: '',
          description: 'Verify API contracts between services. Consumer-driven.',
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
        { icon: '📌', title: 'Understanding Testing', subtitle: '', description: 'Why testing is essential for sustainable development', tags: [] },
        { icon: '📌', title: 'The Testing Pyramid', subtitle: '', description: 'Balanced test distribution for efficient quality assurance', tags: [] },
        { icon: '📌', title: 'CI/CD Pipeline', subtitle: '', description: 'Automated testing and deployment workflow', tags: [] },
        { icon: '📌', title: 'Coverage Analysis', subtitle: '', description: 'Visualize test coverage across your codebase', tags: [] },
        { icon: '📌', title: 'Test Types', subtitle: '', description: 'Different tests for different purposes', tags: [] },
        { icon: '📌', title: 'Testing Tools', subtitle: '', description: 'Essential tools for comprehensive testing', tags: [] },
        { icon: '📌', title: 'Testing Anti-Patterns', subtitle: '', description: 'Common mistakes that undermine test effectiveness', tags: [] },
        { icon: '📌', title: 'Testing Best Practices', subtitle: '', description: 'Proven patterns for effective testing', tags: [] },
      ],
    },
    tools: {
      title: 'Testing Tools',
      subtitle: 'Essential tools for comprehensive testing',
      items: [
        { icon: '🃏', name: 'Jest', vendor: '', description: 'Delightful JavaScript testing with zero config.', tags: [] },
        { icon: '🎭', name: 'Playwright', vendor: '', description: 'Cross-browser E2E testing with auto-wait.', tags: [] },
        { icon: '🌲', name: 'Cypress', vendor: '', description: 'Fast, reliable browser testing with time travel.', tags: [] },
        { icon: '⚡', name: 'Vitest', vendor: '', description: 'Blazing fast unit testing for Vite projects.', tags: [] },
        { icon: '🐍', name: 'PyTest', vendor: '', description: 'Simple, powerful Python testing framework.', tags: [] },
        { icon: '📊', name: 'k6', vendor: '', description: 'Modern load testing with JavaScript scripting.', tags: [] },
        { icon: '🔐', name: 'OWASP ZAP', vendor: '', description: 'Free security scanner for web applications.', tags: [] },
        { icon: '📈', name: 'Codecov', vendor: '', description: 'Coverage reports, PR comments, quality gates.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Testing Best Practices',
      subtitle: 'Proven patterns for effective testing',
      doItems: [
        'Test behavior, not implementation',
        'Keep tests fast—under 10 minutes total',
        'Make tests deterministic and isolated',
        'Use descriptive test names',
        'Follow the testing pyramid',
        'Run tests on every commit',
        'Fix flaky tests immediately',
      ],
      dontItems: [
        'Mock everything—integration matters',
        'Write tests after code is done',
        'Chase 100% coverage blindly',
        'Share state between tests',
        'Write one giant test per feature',
        'Ignore failing tests',
        'Test private methods directly',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'TestArchitect',
      role: 'Test Architect',
      description: 'An AI agent that analyzes code to generate comprehensive test suites, identifies coverage gaps, and suggests testing strategies.',
      capabilities: [
        'Generate unit tests from function signatures',
        'Identify coverage gaps and risky code',
        'Generate edge case test data',
        'Analyze test effectiveness metrics',
        'Detect flaky test patterns',
      ],
      codeFilename: 'test_architect_agent.py',
      code: `from crewai import Agent, Task, Crew

test_architect = Agent(
    role="Test Architect",
    goal="Maximize test coverage and quality",
    backstory="""Expert in testing strategies
    and quality metrics. Generates effective tests.""",
    tools=[code_analyzer, test_generator,
           coverage_analyzer]
)

testing_task = Task(
    description="""Analyze codebase and:
    - Generate missing unit tests
    - Identify high-risk untested code
    - Recommend testing improvements""",
    agent=test_architect
)

crew = Crew(agents=[test_architect], tasks=[testing_task])`,
    },
    relatedPages: [
      { number: '', title: 'Best Practices', description: 'Code quality standards that complement testing', slug: 'best-practices' },
      { number: '', title: 'AI-Assisted Development', description: 'AI-generated tests and quality checks', slug: 'ai-assisted-dev' },
      { number: '', title: 'Product Metrics', description: 'Measuring test effectiveness and quality', slug: 'product-metrics' },
    ],
    prevPage: { title: '10.4 AI-Assisted Development', slug: 'ai-assisted-dev' },
    nextPage: { title: '10.6 Development Methodologies', slug: 'methodologies' },
  },
  {
    slug: 'methodologies',
    badge: '📋 Page 10.6',
    title: 'Development Methodologies',
    description: 'Master the frameworks that organize product development. From Scrum sprints to Kanban flow to Shape Up\'s appetite-based betting, understand when and how to apply each methodology for maximum team effectiveness and delivery velocity.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '7', label: 'Methodologies' },
      { value: '2 wks', label: 'Typical Sprint' },
      { value: '5-9', label: 'Team Size' },
      { value: '∞', label: 'Continuous Flow' },
    ],
    overview: {
      title: 'Understanding Methodologies',
      subtitle: 'Frameworks for organizing development work and delivering value',
      subsections: [
        {
          heading: 'What are Development Methodologies?',
          paragraphs: [
            'Development methodologies are structured approaches to organizing work, coordinating teams, and delivering value. They provide ceremonies, roles, and artifacts that create predictability and alignment across organizations.',
            'The key insight: no methodology is universally best. Choose based on team size, product maturity, organizational culture, and the nature of work. Most successful teams blend elements from multiple frameworks to create their own operating system.',
          ],
        },
        {
          heading: 'Why Methodologies Matter',
          paragraphs: [
            'Predictability: Regular cadences create rhythm. Teams know what to expect and when to deliver. Stakeholders can plan around reliable schedules.',
            'Visibility: Progress is transparent. Everyone sees what\'s happening without interrupting work. Bottlenecks surface early.',
            'Continuous Improvement: Built-in reflection points through retrospectives, inspect-and-adapt cycles, and kaizen events drive teams to get better over time.',
            'Alignment: Shared language and practices mean everyone understands the process and their role. Reduces coordination overhead.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Scrum Framework',
      subtitle: 'Iterative development with time-boxed sprints and defined roles',
      columns: 2,
      cards: [
        {
          className: 'role-0',
          borderColor: '#3B82F6',
          icon: '👤',
          title: '',
          description: 'Owns the product vision and maximizes value delivered. Single voice for stakeholders. Makes prioritization decisions.',
          examples: ['Manages and orders product backlog', 'Defines acceptance criteria', 'Accepts or rejects completed work', 'Communicates with stakeholders', 'Makes trade-off decisions'],
        },
        {
          className: 'role-1',
          borderColor: '#10B981',
          icon: '🎯',
          title: '',
          description: 'Facilitates the process and removes impediments. Servant leader who coaches team on Scrum practices.',
          examples: ['Facilitates all Scrum events', 'Removes blockers quickly', 'Shields team from distractions', 'Coaches on Scrum practices', 'Drives continuous improvement'],
        },
        {
          className: 'role-2',
          borderColor: '#8B5CF6',
          icon: '👥',
          title: '',
          description: 'Cross-functional, self-organizing team that delivers the increment. All skills needed to create value.',
          examples: ['Self-organizes to achieve sprint goal', 'Commits to what they can deliver', 'Estimates work collaboratively', 'Owns quality and Definition of Done', 'Delivers working software each sprint'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Development Methodologies',
          description: 'Master the frameworks that organize product development. From Scrum sprints to Kanban flow to Shape Up\'s appetite-based betting, understand when and how to apply each methodology for maximum team effe',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Choosing a Methodology',
      subtitle: 'Match the framework to your team\'s context and constraints',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Team Size', tagText: '5-9', tagClass: 'tag-blue', bestFor: '50-125', complexity: 'medium', rating: 'Any' },
        { icon: '🛠️', name: 'Cycle Length', tagText: '2 weeks', tagClass: 'tag-green', bestFor: '10 weeks', complexity: 'medium', rating: 'Continuous' },
        { icon: '🛠️', name: 'Focus', tagText: 'Process', tagClass: 'tag-purple', bestFor: 'Coordination', complexity: 'medium', rating: 'Flow' },
        { icon: '🛠️', name: 'Ceremonies', tagText: '~ Many', tagClass: 'tag-orange', bestFor: '✗ Many', complexity: 'medium', rating: '✓ Few' },
        { icon: '🛠️', name: 'Complexity', tagText: 'Medium', tagClass: 'tag-pink', bestFor: 'High', complexity: 'medium', rating: 'Low' },
        { icon: '🛠️', name: 'Best For', tagText: 'Product dev', tagClass: 'tag-blue', bestFor: 'Enterprise', complexity: 'medium', rating: 'Support' },
      ],
    },
    tools: {
      title: 'Tools',
      subtitle: 'Popular tools for implementing methodologies',
      items: [
        { icon: '🛠️', name: 'Jira', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Linear', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Asana', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Trello', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Monday', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Basecamp', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Making methodologies work for your team',
      doItems: [
        'Adapt framework to your context—no methodology works out of the box',
        'Run meaningful retrospectives and actually implement improvements',
        'Protect team from interruptions during focused work time',
        'Keep ceremonies strictly time-boxed to maintain energy',
        'Combine methodologies—Scrum process + XP engineering',
        'Empower teams to self-organize and make decisions',
        'Start simple and add complexity only when pain demands it',
        'Measure outcomes delivered, not process compliance',
      ],
      dontItems: [
        'Follow rules blindly without understanding the principles',
        'Skip retros when busy—that\'s when you need them most',
        'Let standups become status reports to management',
        'Change scope mid-sprint constantly—protect commitments',
        'Use velocity for individual performance reviews—ever',
        'Implement SAFe when you have 15 developers—it\'s overkill',
        'Micromanage team\'s daily work—trust the process',
        'Ignore engineering practices—process without quality fails',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'AgileCoach',
      role: 'Agile Coach',
      description: 'An AI agent that analyzes team dynamics, sprint metrics, and process health to recommend methodology adaptations and facilitate continuous improvement.',
      capabilities: [
        'Analyze sprint velocity and burndown trends',
        'Recommend process improvements based on data',
        'Facilitate retrospective discussions',
        'Identify anti-patterns early',
        'Suggest methodology mix for context',
      ],
      codeFilename: 'agile_coach_agent.py',
      code: `from crewai import Agent, Task

agile_coach = Agent(
    role="Agile Coach",
    goal="Optimize team processes",
    backstory="""Expert in Scrum,
    Kanban, XP, Lean, Shape Up, SAFe.
    Helps teams find the right mix.""",
    tools=[metrics_analyzer,
           retro_facilitator,
           health_monitor]
)`,
    },
    relatedPages: [
      { number: '', title: 'Product Lifecycle', description: 'How methodologies fit development phases', slug: 'product-lifecycle' },
      { number: '', title: 'Product Metrics', description: 'Measuring methodology effectiveness', slug: 'product-metrics' },
      { number: '', title: 'Best Practices', description: 'Engineering practices that support agile', slug: 'best-practices' },
    ],
    prevPage: { title: '10.5 Validation & Testing', slug: 'validation' },
    nextPage: { title: '10.7 Product Metrics', slug: 'product-metrics' },
  },
  {
    slug: 'product-metrics',
    badge: '📊 Page 10.7',
    title: 'Product Metrics',
    description: 'Master the metrics that matter. From North Star alignment to DORA engineering metrics, learn to measure what drives product success and make data-informed decisions at every level.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '9', label: 'Metric Categories' },
      { value: '40+', label: 'Key Metrics' },
      { value: '5', label: 'AARRR Stages' },
      { value: '4', label: 'DORA Metrics' },
    ],
    overview: {
      title: 'DORA Metrics',
      subtitle: 'Engineering excellence indicators from DevOps Research',
      subsections: [
        {
          heading: 'Why DORA Matters',
          paragraphs: [
            'Research shows elite performers ship 208x more frequently than low performers while maintaining higher quality. Speed and stability aren\'t tradeoffs—they reinforce each other.',
          ],
        },
        {
          heading: 'Performance Levels',
          paragraphs: [
            'Elite: Multiple deploys/day, <1hr lead time, <1hr recovery, <15% failure rate.',
            'Low: Monthly deploys, 1-6mo lead time, 1wk-1mo recovery, 46-60% failure rate.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Engagement Metrics',
      subtitle: 'Measure how deeply users interact with your product',
      columns: 2,
      cards: [
        {
          className: 'engagement-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '"Stickiness" - how often monthly users come daily. 50%+ is excellent for consumer apps.',
          examples: [],
        },
        {
          className: 'engagement-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Average time users spend per session. Context matters—longer isn\'t always better.',
          examples: [],
        },
        {
          className: 'engagement-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Frequency of use. Strong habits = 5+ sessions/week for daily-use products.',
          examples: [],
        },
        {
          className: 'engagement-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Average features used per session. Low breadth may indicate discovery issues.',
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
        { icon: '📌', title: 'North Star Metric', subtitle: '', description: 'The single metric that captures your product\'s core value', tags: [] },
        { icon: '📌', title: 'AARRR Pirate Metrics', subtitle: '', description: 'The growth funnel framework for understanding user lifecycle', tags: [] },
        { icon: '📌', title: 'Engagement Metrics', subtitle: '', description: 'Measure how deeply users interact with your product', tags: [] },
        { icon: '📌', title: 'Financial & Business Metrics', subtitle: '', description: 'Unit economics and revenue health indicators', tags: [] },
        { icon: '📌', title: 'User Satisfaction Metrics', subtitle: '', description: 'Measure customer happiness and loyalty', tags: [] },
        { icon: '📌', title: 'DORA Metrics', subtitle: '', description: 'Engineering excellence indicators from DevOps Research', tags: [] },
        { icon: '📌', title: 'Feature Adoption', subtitle: '', description: 'Track how users discover and adopt product features', tags: [] },
        { icon: '📌', title: 'A/B Testing & Experimentation', subtitle: '', description: 'Data-driven decision making through controlled experiments', tags: [] },
      ],
    },
    tools: {
      title: 'Analytics Tools',
      subtitle: 'Popular tools for product analytics',
      items: [
        { icon: '🛠️', name: 'Amplitude', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Mixpanel', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Heap', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'PostHog', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Looker', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Metrics Best Practices',
      subtitle: 'Guidelines for effective product measurement',
      doItems: [
        'Pick one North Star metric that reflects core value',
        'Measure outcomes, not just outputs',
        'Use cohort analysis for retention metrics',
        'A/B test before making major changes',
        'Segment metrics by user type and behavior',
        'Review metrics weekly with the team',
        'Set leading indicators, not just lagging',
      ],
      dontItems: [
        'Track too many metrics—focus on 5-7 key ones',
        'Use vanity metrics that don\'t drive decisions',
        'Ignore statistical significance in experiments',
        'Optimize one metric at the expense of others',
        'Compare metrics without context or segments',
        'Set metrics and forget them—review regularly',
        'Let metrics become targets (Goodhart\'s Law)',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'MetricsAnalyst',
      role: 'Metrics Analyst',
      description: 'An AI agent that monitors product metrics, detects anomalies, identifies trends, and generates actionable insights for product teams.',
      capabilities: [
        'Monitor key metrics and detect anomalies',
        'Root cause analysis for metric changes',
        'Trend forecasting and predictions',
        'Experiment analysis and recommendations',
        'Generate weekly metrics reports',
      ],
      codeFilename: 'metrics_analyst_agent.py',
      code: `from crewai import Agent, Task

metrics_analyst = Agent(
    role="Metrics Analyst",
    goal="Surface actionable insights",
    backstory="""Expert in product
    analytics, statistical analysis,
    and growth metrics.""",
    tools=[anomaly_detector,
           trend_analyzer, forecaster]
)`,
    },
    relatedPages: [
      { number: '', title: 'Validation & Testing', description: 'Testing strategies that feed into metrics', slug: 'validation' },
      { number: '', title: 'Methodologies', description: 'Track methodology effectiveness', slug: 'methodologies' },
      { number: '', title: 'Product Lifecycle', description: 'Metrics at each lifecycle stage', slug: 'product-lifecycle' },
    ],
    prevPage: { title: '10.6 Development Methodologies', slug: 'methodologies' },
    nextPage: undefined,
  },
]

export default pages
