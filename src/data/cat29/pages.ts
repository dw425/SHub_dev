import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'agile-scrum',
    badge: '📋 Page 29.1',
    title: 'Agile & Scrum',
    description: 'Iterative, incremental framework emphasizing adaptability, collaboration, and rapid delivery of working software through fixed-length sprints (2-4 weeks), daily standups, and continuous feedback.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '71%', label: 'Global Adoption Rate' },
      { value: '5-9', label: 'Optimal Team Size' },
      { value: '2-4wk', label: 'Sprint Duration' },
      { value: '15min', label: 'Daily Standup' },
    ],
    overview: {
      title: 'Agile & Scrum',
      subtitle: 'Empowering small cross-functional teams to deliver customer value incrementally',
      subsections: [
        {
          heading: 'What Is Agile & Scrum?',
          paragraphs: [
            'Scrum is the most widely adopted agile framework, providing structure for teams to deliver working software every 2-4 weeks through fixed-length sprints. Teams self-organize around a sprint backlog, hold daily 15-minute standups, demo completed work to stakeholders, and retrospectively improve their process.',
            'Agile principles emphasize responding to change over following a plan, working software over comprehensive documentation, and customer collaboration over contract negotiation. Scrum operationalizes these principles through specific roles (Product Owner, Scrum Master, Development Team), ceremonies (Sprint Planning, Daily Standup, Review, Retrospective), and artifacts (Product Backlog, Sprint Backlog, Increment).',
          ],
        },
        {
          heading: 'Sprint Cycle and Ceremonies',
          paragraphs: [
            'The sprint cycle begins with Sprint Planning where the team commits to a sprint goal and selects user stories from the product backlog. Throughout the sprint, daily standups synchronize work and surface blockers. The sprint ends with a Sprint Review demonstrating working software to stakeholders, followed by a Sprint Retrospective where the team reflects on process improvements.',
            'This iterative cadence creates a predictable rhythm enabling rapid feedback, early risk identification, and continuous adaptation based on actual user feedback rather than upfront assumptions.',
          ],
        },
        {
          heading: 'Roles and Accountability',
          paragraphs: [
            'The Product Owner maximizes product value by defining and prioritizing the backlog based on business value. The Scrum Master serves the team by removing impediments, facilitating ceremonies, and coaching on agile practices. The Development Team is cross-functional, self-organizing, and collectively responsible for delivering a potentially shippable increment each sprint.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Scrum Concepts',
      subtitle: 'Fundamental elements of the Scrum framework',
      columns: 2,
      cards: [
        {
          className: 'scrum-roles',
          borderColor: '#3B82F6',
          icon: '👥',
          title: 'Three Scrum Roles',
          description: 'Product Owner defines what to build and prioritizes backlog. Scrum Master facilitates process and removes impediments. Development Team builds, tests, and delivers working increments every sprint.',
          examples: ['Product Owner: Value Maximizer', 'Scrum Master: Process Facilitator', 'Development Team: Delivery Engine', 'Collective ownership model'],
        },
        {
          className: 'sprint-cycle',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'Sprint Cycle',
          description: 'Time-boxed iteration (2-4 weeks) delivering working software. Starts with planning, includes daily standups, ends with review and retrospective. Creates predictable cadence for stakeholders.',
          examples: ['Sprint Planning: 4-8 hours', 'Daily Standup: 15 minutes', 'Sprint Review: 2-4 hours', 'Retrospective: 1-3 hours'],
        },
        {
          className: 'scrum-artifacts',
          borderColor: '#F59E0B',
          icon: '📦',
          title: 'Scrum Artifacts',
          description: 'Product Backlog contains all desired work prioritized by business value. Sprint Backlog holds committed items for current sprint. Increment is sum of completed work meeting Definition of Done.',
          examples: ['Product Backlog: Ordered list', 'Sprint Backlog: Sprint commitment', 'Increment: Shippable software', 'Definition of Done: Quality standard'],
        },
        {
          className: 'ceremonies',
          borderColor: '#8B5CF6',
          icon: '🗓️',
          title: 'Five Ceremonies',
          description: 'Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective, and Backlog Refinement create rhythm and transparency. Each ceremony has specific purpose, participants, and time-box.',
          examples: ['Planning: Commit to sprint goal', 'Standup: Daily coordination', 'Review: Demo to stakeholders', 'Retrospective: Improve process'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Agile Practices & Techniques',
      subtitle: 'Complementary practices enhancing Scrum effectiveness',
      cards: [
        { icon: '📏', title: 'Story Points', subtitle: 'Relative Estimation', description: 'Estimate user stories using Fibonacci sequence (1, 2, 3, 5, 8, 13) for relative complexity, not hours. Tracks team velocity for planning.', tags: ['Estimation', 'Planning', 'Velocity'] },
        { icon: '🎯', title: 'User Stories', subtitle: 'As a...I want...So that...', description: 'Format requirements from user perspective with acceptance criteria. Small, independently deliverable, and vertically sliced features.', tags: ['Requirements', 'Customer Focus', 'Deliverable'] },
        { icon: '✅', title: 'Definition of Done', subtitle: 'Quality Standard', description: 'Checklist ensuring every story meets quality bar: coded, tested, reviewed, documented, deployed to staging. Prevents incomplete work.', tags: ['Quality', 'Standard', 'Complete'] },
        { icon: '👥', title: 'Pair Programming', subtitle: 'Collaborative Coding', description: 'Two developers work together at one workstation. Driver writes code, navigator reviews. Improves quality, spreads knowledge, reduces defects.', tags: ['Collaboration', 'Quality', 'Knowledge Sharing'] },
        { icon: '🔄', title: 'Continuous Integration', subtitle: 'Automated Build & Test', description: 'Integrate code to main branch multiple times daily. Automated builds and tests catch defects early when cheapest to fix.', tags: ['Automation', 'Quality', 'Early Detection'] },
        { icon: '📊', title: 'Burndown Charts', subtitle: 'Progress Visualization', description: 'Visual representation of remaining work across sprint or release. Shows if team on track to meet commitment. Highlights scope creep early.', tags: ['Visualization', 'Tracking', 'Transparency'] },
        { icon: '🎨', title: 'Planning Poker', subtitle: 'Consensus Estimation', description: 'Team estimates stories simultaneously using cards. Reveals different perspectives, drives discussion, builds shared understanding and consensus.', tags: ['Estimation', 'Consensus', 'Discussion'] },
        { icon: '🚀', title: 'Sprint Goal', subtitle: 'Focused Objective', description: 'Single sentence describing sprint\'s business objective. Guides decisions when trade-offs arise. Unifies team around shared purpose beyond individual stories.', tags: ['Focus', 'Alignment', 'Purpose'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Popular platforms supporting Agile and Scrum teams',
      items: [
        { icon: '🔷', name: 'Jira', vendor: 'Atlassian', description: 'Industry-leading agile project management with Scrum/Kanban boards, backlog management, sprint planning, burndown charts. Integrates with Confluence, Bitbucket, Slack.', tags: ['Enterprise', 'Comprehensive', 'Integration'] },
        { icon: '📘', name: 'Azure DevOps', vendor: 'Microsoft', description: 'Complete DevOps platform with Azure Boards for agile planning, Azure Repos for Git, Azure Pipelines for CI/CD. Excellent for .NET teams and Microsoft ecosystem.', tags: ['Microsoft', 'DevOps', 'Integrated'] },
        { icon: '💎', name: 'Monday.com', vendor: 'Monday.com', description: 'Visual work management platform with flexible boards, automation, and integrations. User-friendly interface appealing to non-technical teams for cross-functional collaboration.', tags: ['Visual', 'Flexible', 'Cross-Functional'] },
        { icon: '📊', name: 'Linear', vendor: 'Linear', description: 'Modern, fast issue tracker built for product teams. Clean interface, keyboard shortcuts, Git integration. Popular with startups and fast-moving teams valuing simplicity.', tags: ['Modern', 'Fast', 'Developer-Focused'] },
        { icon: '🎯', name: 'ClickUp', vendor: 'ClickUp', description: 'All-in-one work management with docs, sprints, goals, time tracking. Highly customizable views (list, board, calendar, Gantt). Replaces multiple tools but feature-heavy.', tags: ['All-in-One', 'Customizable', 'Feature-Rich'] },
        { icon: '🏔️', name: 'Shortcut', vendor: 'Shortcut (Clubhouse)', description: 'Built specifically for software teams with iterations, epics, stories. Emphasizes team collaboration and alignment. Good middle ground between Jira complexity and Trello simplicity.', tags: ['Software Teams', 'Balanced', 'Collaborative'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful Scrum implementation',
      doItems: [
        'Create explicit Definition of Done covering code, tests, review, documentation, and deployment',
        'Use story points (Fibonacci) for relative estimation, not hours or days',
        'Keep stories small: ideally <5 points, definitely <13 points to complete in sprint',
        'Hold retrospectives every sprint—never skip, even when "everything went well"',
        'Invest in product owner availability—PO must be engaged daily answering questions',
        'Track velocity over 3-5 sprints for planning, but don\'t gamify it as performance metric',
        'Focus on 1-3 actionable improvements per retrospective, not laundry list',
        'Invite stakeholders to sprint reviews and make demos compelling and interactive',
      ],
      dontItems: [
        'Don\'t violate sprint scope lock mid-sprint—protects team focus and sustainable pace',
        'Don\'t skip sprint retrospectives or treat them as optional time filler',
        'Don\'t use velocity to compare teams—creates wrong incentives and gaming',
        'Don\'t let product owner be absent or unavailable during sprint',
        'Don\'t estimate in hours—story points account for complexity, not just time',
        'Don\'t carry over incomplete work without examining root causes',
        'Don\'t let sprint planning run long without breaks—it breeds poor decisions',
        'Don\'t treat daily standup as status report to manager—it\'s team coordination',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'AgileCoach',
      role: 'Scrum Implementation Specialist',
      description: 'Expert in agile transformation, sprint planning, backlog refinement, and team coaching. Automates agile assessments, generates sprint plans, and provides retrospective facilitation guidance for high-performing teams.',
      capabilities: [
        'Sprint planning and backlog prioritization',
        'User story creation and estimation guidance',
        'Retrospective facilitation and improvement tracking',
        'Team formation and role clarity coaching',
        'Velocity tracking and sprint metrics analysis',
        'Agile transformation roadmaps and change management',
      ],
      codeFilename: 'agile_coach.py',
      code: `# agile_coach.py - AgileCoach Agent
from crewai import Agent, Task, Crew

agile_coach = Agent(
    role="Scrum Implementation Specialist",
    goal="Guide teams to effective agile delivery and continuous improvement",
    backstory="""Certified Scrum Master and agile coach with 15+ years
    transforming traditional teams to high-performing agile organizations.
    Expert in sprint facilitation, backlog refinement, and team dynamics.""",
    tools=[
        BacklogOptimizer(),
        VelocityCalculator(),
        RetrospectiveFacilitator(),
        StoryEstimator(),
        TeamHealthAssessor(),
    ]
)

coach_task = Task(
    description="""
    1. Assess current sprint health and team velocity
    2. Optimize backlog prioritization using business value and WSJF
    3. Generate sprint plan with capacity allocation
    4. Identify impediments and propose removal strategies
    5. Provide retrospective agenda and improvement suggestions
    """,
    agent=agile_coach,
    expected_output="Optimized sprint plan with prioritized backlog and team improvements"
)

crew = Crew(agents=[agile_coach], tasks=[coach_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.3', title: 'Kanban', description: 'Visual workflow management with WIP limits and continuous flow', slug: 'kanban' },
      { number: 'Page 29.4', title: 'SAFe', description: 'Scaled Agile Framework for enterprise coordination', slug: 'safe' },
      { number: 'Page 29.5', title: 'Lean', description: 'Eliminate waste and amplify learning through continuous improvement', slug: 'lean' },
    ],
    prevPage: undefined,
    nextPage: { title: '29.2 Waterfall', slug: 'waterfall' },
  },
  {
    slug: 'waterfall',
    badge: '📋 Page 29.2',
    title: 'Waterfall Methodology',
    description: 'Sequential, phase-driven approach where each stage flows downward through requirements, design, implementation, testing, and deployment. Emphasizes comprehensive upfront planning and formal phase gate approvals.',
    accentColor: '#3B82F6',
    accentLight: '#93C5FD',
    metrics: [
      { value: '23%', label: 'Current Adoption Rate' },
      { value: '6-18mo', label: 'Typical Project Duration' },
      { value: '5-7', label: 'Sequential Phases' },
      { value: '100%', label: 'Upfront Requirements' },
    ],
    overview: {
      title: 'Waterfall Methodology',
      subtitle: 'Best suited for well-defined projects with stable requirements and regulatory compliance needs',
      subsections: [
        {
          heading: 'What Is Waterfall?',
          paragraphs: [
            'Waterfall is a linear, sequential approach where each phase must be completed before the next begins. Requirements are gathered and frozen upfront, followed by design, implementation, testing, deployment, and maintenance. Each phase has formal entry and exit criteria with gate reviews for stakeholder approval.',
            'This approach works well when requirements are well-understood, unlikely to change, and compliance demands comprehensive documentation. Examples include infrastructure projects, data migrations, regulatory systems, and hardware-dependent software where changes are expensive.',
          ],
        },
        {
          heading: 'Phases and Documentation',
          paragraphs: [
            'Requirements Analysis produces BRD and FRS documents capturing all functional and non-functional needs. System Design creates architecture diagrams, database schemas, and interface specifications. Implementation follows design specifications with code reviews and unit tests. Testing validates against requirements through integration, system, regression, performance, and UAT.',
            'Comprehensive documentation at each phase provides traceability from requirements to implementation to test cases. This satisfies regulatory requirements (FDA, SOX, FAA) and enables knowledge transfer, but creates overhead and risks becoming outdated.',
          ],
        },
        {
          heading: 'Governance and Control',
          paragraphs: [
            'Waterfall projects employ formal change control boards (CCB) reviewing all scope changes after requirements freeze. Phase gate reviews at major transitions ensure deliverables meet quality standards before proceeding. Steering committees provide executive oversight, make go/no-go decisions, and approve budget increases.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Waterfall Components',
      subtitle: 'Key elements of sequential project delivery',
      columns: 2,
      cards: [
        {
          className: 'waterfall-phases',
          borderColor: '#3B82F6',
          icon: '🌊',
          title: 'Sequential Phases',
          description: 'Each phase flows into the next like a waterfall: Requirements → Design → Implementation → Testing → Deployment → Maintenance. No phase begins until previous is complete and approved.',
          examples: ['Requirements: 2-4 months', 'Design: 1-3 months', 'Implementation: 4-8 months', 'Testing: 2-4 months'],
        },
        {
          className: 'phase-gates',
          borderColor: '#10B981',
          icon: '🚪',
          title: 'Phase Gate Reviews',
          description: 'Formal checkpoints between phases where stakeholders review deliverables, approve progression, and make go/no-go decisions. Ensures quality standards met before expensive commitment to next phase.',
          examples: ['Requirements Review & Sign-off', 'Design Review & Approval', 'Code Complete Review', 'UAT Sign-off'],
        },
        {
          className: 'documentation',
          borderColor: '#F59E0B',
          icon: '📄',
          title: 'Comprehensive Documentation',
          description: 'Detailed documentation at every phase: project charter, requirements documents (BRD, FRS), design specifications (HLD, LLD), test plans, user manuals. Provides complete project record and regulatory compliance.',
          examples: ['Project Charter', 'BRD/FRS Documents', 'Architecture Design', 'Test Plans & Cases'],
        },
        {
          className: 'change-control',
          borderColor: '#8B5CF6',
          icon: '🔄',
          title: 'Change Control',
          description: 'Formal change control board reviews all scope changes after requirements freeze. Impact analysis required showing cost, timeline, resource, and quality implications before approval.',
          examples: ['Change Request Forms', 'Impact Analysis', 'CCB Approval', 'Scope Baseline Management'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Waterfall Project Phases',
      subtitle: 'Sequential stages from conception to maintenance',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '📋', name: 'Requirements Analysis', tagText: 'Planning', tagClass: 'tag-blue', bestFor: 'Defining complete project scope', complexity: 'medium', rating: '4.5/5' },
        { icon: '🎨', name: 'System Design', tagText: 'Architecture', tagClass: 'tag-purple', bestFor: 'Technical architecture and specifications', complexity: 'high', rating: '4.7/5' },
        { icon: '💻', name: 'Implementation', tagText: 'Development', tagClass: 'tag-green', bestFor: 'Code development per design', complexity: 'high', rating: '4.6/5' },
        { icon: '🔍', name: 'Testing & QA', tagText: 'Validation', tagClass: 'tag-orange', bestFor: 'Comprehensive quality validation', complexity: 'medium', rating: '4.8/5' },
        { icon: '🚀', name: 'Deployment', tagText: 'Release', tagClass: 'tag-pink', bestFor: 'Production release and training', complexity: 'medium', rating: '4.4/5' },
        { icon: '🛠️', name: 'Maintenance', tagText: 'Support', tagClass: 'tag-blue', bestFor: 'Post-deployment support and fixes', complexity: 'medium', rating: '4.3/5' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Software supporting traditional project management',
      items: [
        { icon: '📊', name: 'Microsoft Project', vendor: 'Microsoft', description: 'Industry standard for waterfall project management with Gantt charts, resource leveling, critical path analysis, and earned value management. Deep Microsoft ecosystem integration.', tags: ['Gantt', 'Resource Planning', 'Enterprise'] },
        { icon: '🏢', name: 'Planview', vendor: 'Planview', description: 'Enterprise portfolio management for large organizations. Waterfall project templates, resource capacity planning, financial tracking, and governance workflows for stage gates.', tags: ['Enterprise PMO', 'Portfolio', 'Governance'] },
        { icon: '📈', name: 'Smartsheet', vendor: 'Smartsheet', description: 'Spreadsheet-based project management with Gantt views, dependencies, resource management. More user-friendly than MS Project with better collaboration features.', tags: ['Collaborative', 'User-Friendly', 'Gantt'] },
        { icon: '📋', name: 'Wrike', vendor: 'Wrike', description: 'Flexible work management supporting waterfall and hybrid approaches. Gantt charts, task dependencies, approval workflows, and custom fields for phase gates.', tags: ['Flexible', 'Workflows', 'Hybrid'] },
        { icon: '🎯', name: 'Asana', vendor: 'Asana', description: 'While known for agile, Asana supports waterfall with Timeline view (Gantt), dependencies, milestones, and portfolio management for tracking multiple projects.', tags: ['Timeline', 'Dependencies', 'Portfolio'] },
        { icon: '📊', name: 'Primavera P6', vendor: 'Oracle', description: 'Oracle\'s enterprise project management for large, complex projects. Popular in construction, engineering, energy. Handles thousands of activities with resource optimization.', tags: ['Enterprise', 'Complex', 'Resource Optimization'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful waterfall execution',
      doItems: [
        'Invest heavily in requirements phase—getting this right is critical when changes are expensive later',
        'Use prototypes, mockups, and proof-of-concepts to validate requirements before sign-off',
        'Create requirements traceability matrix linking each requirement to design, code, and test cases',
        'Build prototypes for high-risk technical areas before full implementation commitment',
        'Establish formal change control board reviewing all scope change requests',
        'Create communication plan defining frequency, format, and audience for status updates',
        'Provide phase-end demos even in waterfall to show progress and gather early feedback',
        'Review and update risk register at each phase gate, escalating to steering committee as needed',
      ],
      dontItems: [
        'Don\'t assume all requirements can be known upfront—validate through prototypes',
        'Don\'t treat scope changes lightly—each change has ripple effects on cost and timeline',
        'Don\'t skip phase gate reviews or rubber-stamp approvals without proper validation',
        'Don\'t ignore the people and culture aspects—waterfall requires discipline and follow-through',
        'Don\'t let documentation become outdated—maintain it or it loses value',
        'Don\'t overload the critical path without buffer time for unknowns and integration',
        'Don\'t proceed to next phase with known defects or incomplete deliverables',
        'Don\'t confuse predictability with inflexibility—some adaptation is necessary',
      ],
    },
    agent: {
      avatar: '📊',
      name: 'WaterfallPM',
      role: 'Traditional Project Manager',
      description: 'Expert in sequential project planning, requirements documentation, phase gate governance, and traditional SDLC execution. Helps create project plans, manage dependencies, track milestones, and ensure comprehensive documentation.',
      capabilities: [
        'Project plan creation with Gantt charts and critical path',
        'Requirements documentation and traceability matrices',
        'Phase gate criteria and approval workflows',
        'Risk identification and mitigation planning',
        'Change control and impact analysis',
        'Documentation templates and governance artifacts',
      ],
      codeFilename: 'waterfall_pm.py',
      code: `# waterfall_pm.py - WaterfallPM Agent
from crewai import Agent, Task, Crew

waterfall_pm = Agent(
    role="Traditional Project Manager",
    goal="Execute waterfall projects with comprehensive planning and governance",
    backstory="""Seasoned project manager with PMP certification and 20+ years
    delivering large-scale waterfall projects. Expert in requirements management,
    phase gate governance, and stakeholder communication.""",
    tools=[
        GanttPlanner(),
        RequirementsTracer(),
        RiskRegister(),
        ChangeControlBoard(),
        PhaseGateChecker(),
    ]
)

plan_task = Task(
    description="""
    1. Create detailed project plan with all phases and milestones
    2. Develop requirements traceability matrix
    3. Define phase gate criteria and approval workflow
    4. Identify risks and create mitigation strategies
    5. Establish change control process and impact analysis framework
    """,
    agent=waterfall_pm,
    expected_output="Complete waterfall project plan with governance framework"
)

crew = Crew(agents=[waterfall_pm], tasks=[plan_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.1', title: 'Agile & Scrum', description: 'Iterative development with 2-4 week sprints', slug: 'agile-scrum' },
      { number: 'Page 29.4', title: 'SAFe', description: 'Scaled Agile Framework for enterprise coordination', slug: 'safe' },
      { number: 'Page 29.6', title: 'DevOps', description: 'Unify development and operations for continuous delivery', slug: 'devops' },
    ],
    prevPage: { title: '29.1 Agile & Scrum', slug: 'agile-scrum' },
    nextPage: { title: '29.3 Kanban', slug: 'kanban' },
  },
  {
    slug: 'kanban',
    badge: '📋 Page 29.3',
    title: 'Kanban Methodology',
    description: 'Visual workflow management system using boards with columns representing work stages and work-in-progress (WIP) limits to optimize flow. Emphasizes continuous delivery through pull-based system.',
    accentColor: '#10B981',
    accentLight: '#6EE7B7',
    metrics: [
      { value: '58%', label: 'Adoption Rate' },
      { value: '3-12', label: 'Typical Team Size' },
      { value: 'WIP', label: 'Core Concept' },
      { value: 'Flow', label: 'Delivery Model' },
    ],
    overview: {
      title: 'Kanban Methodology',
      subtitle: 'Originated in Toyota manufacturing, adapted for knowledge work and software development',
      subsections: [
        {
          heading: 'What Is Kanban?',
          paragraphs: [
            'Kanban is a visual system for managing work as it moves through a process. Work items are represented as cards moving across columns on a board representing workflow stages (e.g., To Do, In Progress, Review, Done). Work-in-progress (WIP) limits constrain how many items can be active in each stage, forcing teams to finish work before starting new work.',
            'Unlike time-boxed sprints in Scrum, Kanban enables continuous flow where work is pulled into the next stage only when capacity exists. This makes it ideal for operations teams, support work, and unpredictable environments where planning fixed iterations is impractical.',
          ],
        },
        {
          heading: 'WIP Limits and Flow',
          paragraphs: [
            'WIP limits are the heart of Kanban. By limiting work in progress, teams reduce context switching, expose bottlenecks, and improve flow efficiency. When a column reaches its WIP limit, the team must finish existing work before pulling new work. This creates healthy pressure to complete items rather than starting new ones.',
            'Flow metrics—cycle time, lead time, throughput, and flow efficiency—provide objective measurements of system health. Teams use cumulative flow diagrams to visualize WIP trends and identify where work accumulates, signaling bottlenecks requiring improvement.',
          ],
        },
        {
          heading: 'Pull vs Push',
          paragraphs: [
            'Kanban operates as a pull system where downstream operations pull work from upstream when they have capacity. This contrasts with push systems where work is assigned regardless of capacity, creating queues and delays. Pull systems naturally balance workload and prevent overproduction—one of the eight wastes in Lean.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Kanban Principles',
      subtitle: 'Fundamental practices driving Kanban effectiveness',
      columns: 2,
      cards: [
        {
          className: 'visualize-workflow',
          borderColor: '#3B82F6',
          icon: '👁️',
          title: 'Visualize Workflow',
          description: 'Make all work visible on a board showing each stage of the process. Cards represent work items moving left to right through columns. Transparency reveals bottlenecks, blockers, and flow problems immediately.',
          examples: ['Physical or digital Kanban board', 'Color-coded by work type', 'Swimlanes for teams or classes', 'Real-time updates'],
        },
        {
          className: 'limit-wip',
          borderColor: '#10B981',
          icon: '🚦',
          title: 'Limit Work in Progress',
          description: 'Set explicit limits on number of items in each stage. When column reaches WIP limit, team must finish existing work before pulling new work. Prevents multitasking, reduces context switching, exposes bottlenecks.',
          examples: ['WIP = team size or team size - 1', 'Visualize limits on board', 'Block new work at limit', 'Adjust based on data'],
        },
        {
          className: 'manage-flow',
          borderColor: '#F59E0B',
          icon: '📊',
          title: 'Manage Flow',
          description: 'Focus on smooth, continuous flow of work through system rather than resource utilization. Monitor cycle time, lead time, throughput. Identify and eliminate bottlenecks. Flow efficiency over individual productivity.',
          examples: ['Cycle time tracking', 'Lead time measurement', 'Throughput monitoring', 'Cumulative flow diagrams'],
        },
        {
          className: 'explicit-policies',
          borderColor: '#8B5CF6',
          icon: '📋',
          title: 'Make Policies Explicit',
          description: 'Document and display process policies, acceptance criteria, Definition of Done, and prioritization rules. Everyone understands how work flows, what quality means, and how decisions are made.',
          examples: ['Entry/exit criteria per column', 'Definition of Done visible', 'Prioritization rules documented', 'Pull policies clarified'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Kanban Metrics & Measurements',
      subtitle: 'Key measurements for flow and predictability',
      cards: [
        { icon: '⏱️', title: 'Cycle Time', subtitle: 'Done Date - Start Date', description: 'Time from when work starts until completed. Measures delivery speed. Lower cycle time = faster delivery. Track average and percentiles (50th, 85th, 95th).', tags: ['Speed', 'Delivery', 'Flow'] },
        { icon: '📅', title: 'Lead Time', subtitle: 'Delivery - Request Date', description: 'Time from request until delivered to customer. Includes queue time. Customer-facing metric showing responsiveness. Longer than cycle time due to waiting.', tags: ['Customer', 'Responsiveness', 'Total Time'] },
        { icon: '📈', title: 'Throughput', subtitle: 'Items Done / Week', description: 'Number of work items completed per time period (typically weekly). Measures team velocity and capacity. Stable throughput indicates predictable flow.', tags: ['Velocity', 'Capacity', 'Predictability'] },
        { icon: '📊', title: 'WIP', subtitle: 'Active Items', description: 'Number of items currently in progress across all stages. Lower WIP generally correlates with faster cycle time (Little\'s Law). Monitor WIP trends for problems.', tags: ['Inventory', 'Flow', 'Little\'s Law'] },
        { icon: '⚡', title: 'Flow Efficiency', subtitle: 'Touch Time / Lead Time', description: 'Percentage of time work is actively worked on vs waiting. Typical knowledge work: 5-15%. Low efficiency indicates bottlenecks and excess WIP.', tags: ['Efficiency', 'Waste', 'Bottlenecks'] },
        { icon: '🎯', title: 'Blocked Time', subtitle: 'Time Spent Blocked', description: 'Time work items spend blocked waiting for external dependencies. Blockers destroy flow. Track blocked items, duration, and reasons to eliminate them.', tags: ['Blockers', 'Dependencies', 'Waste'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Software platforms supporting Kanban workflows',
      items: [
        { icon: '📋', name: 'Trello', vendor: 'Atlassian', description: 'Simple, intuitive Kanban boards with cards, lists, and drag-and-drop. Power-ups add WIP limits, calendar view, automation. Great for small teams and simple workflows.', tags: ['Simple', 'Visual', 'Beginner-Friendly'] },
        { icon: '🔷', name: 'Jira', vendor: 'Atlassian', description: 'Powerful Kanban boards with WIP limits, swimlanes, cumulative flow diagrams, cycle time reports. Supports complex workflows and custom fields. Integrates with Atlassian ecosystem.', tags: ['Enterprise', 'Advanced', 'Analytics'] },
        { icon: '📘', name: 'Azure Boards', vendor: 'Microsoft', description: 'Kanban boards integrated with Azure DevOps for end-to-end workflow. WIP limits, analytics, query-based boards. Excellent for .NET teams and Microsoft ecosystem.', tags: ['Microsoft', 'DevOps', 'Integrated'] },
        { icon: '🌊', name: 'Kanbanize', vendor: 'Kanbanize', description: 'Purpose-built for Kanban with advanced analytics, forecasting, flow metrics, and portfolio-level visualization. Business rules automation. Best for mature Kanban practitioners.', tags: ['Advanced', 'Analytics', 'Portfolio'] },
        { icon: '💎', name: 'Monday.com', vendor: 'Monday.com', description: 'Flexible boards supporting Kanban views with automation, time tracking, and integrations. User-friendly for cross-functional teams beyond engineering. Supports multiple view types.', tags: ['Flexible', 'Visual', 'Cross-Functional'] },
        { icon: '🎯', name: 'LeanKit', vendor: 'Planview', description: 'Planview\'s Kanban platform for scaled agile. Advanced metrics, dependency mapping, hierarchical boards. Designed for large organizations managing multiple teams and portfolios.', tags: ['Enterprise', 'Scaled', 'Metrics'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful Kanban implementation',
      doItems: [
        'Start with current workflow exactly as it exists—visualize reality before optimizing',
        'Set initial WIP limits conservatively based on team size (team size or team size - 1)',
        'Measure cycle time and throughput from day one to establish baseline',
        'Use cumulative flow diagrams to visualize WIP and identify bottlenecks over time',
        'Focus on finishing work from right to left—pull work when ready, don\'t push',
        'Break large work into smaller, similarly-sized items for predictable flow',
        'Hold regular replenishment meetings to pull work from backlog into selected column',
        'Track cycle time distribution using percentiles (50th, 85th, 95th) not just average',
      ],
      dontItems: [
        'Don\'t violate WIP limits—resist temptation when pressure increases',
        'Don\'t optimize for highest utilization—optimize for shortest cycle time',
        'Don\'t treat metrics as individual performance measures—they\'re system health indicators',
        'Don\'t skip retrospectives thinking continuous flow means no improvement needed',
        'Don\'t ignore policies for entry/exit criteria—explicit policies prevent confusion',
        'Don\'t batch work items—smaller batches enable faster feedback and flow',
        'Don\'t compare team throughput as competition—different contexts yield different results',
        'Don\'t forget to celebrate improvements and learnings from experiments',
      ],
    },
    agent: {
      avatar: '🌊',
      name: 'KanbanFlow',
      role: 'Flow Optimization Specialist',
      description: 'Expert in Kanban flow optimization, WIP limit tuning, bottleneck identification, and cycle time reduction. Analyzes flow metrics, recommends process improvements, and helps teams achieve predictable, sustainable delivery.',
      capabilities: [
        'Flow metrics analysis and bottleneck detection',
        'WIP limit optimization and tuning recommendations',
        'Cycle time forecasting and predictability analysis',
        'Board structure and workflow design guidance',
        'Prioritization strategies and replenishment planning',
        'Cumulative flow diagram interpretation and insights',
      ],
      codeFilename: 'kanban_flow.py',
      code: `# kanban_flow.py - KanbanFlow Agent
from crewai import Agent, Task, Crew

kanban_flow = Agent(
    role="Flow Optimization Specialist",
    goal="Optimize Kanban workflow for predictable, sustainable delivery",
    backstory="""Kanban expert specializing in flow metrics, WIP optimization,
    and continuous improvement. Trained in Lean principles and statistical
    process control for knowledge work.""",
    tools=[
        FlowAnalyzer(),
        WIPOptimizer(),
        CycleTimeForecaster(),
        BottleneckDetector(),
        CFDInterpreter(),
    ]
)

optimize_task = Task(
    description="""
    1. Analyze current flow metrics and identify bottlenecks
    2. Recommend WIP limit adjustments based on data
    3. Forecast cycle time and predictability
    4. Suggest workflow improvements and policy changes
    5. Create action plan for flow optimization
    """,
    agent=kanban_flow,
    expected_output="Flow optimization recommendations with WIP tuning and improvements"
)

crew = Crew(agents=[kanban_flow], tasks=[optimize_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.1', title: 'Agile & Scrum', description: 'Iterative development with 2-4 week sprints', slug: 'agile-scrum' },
      { number: 'Page 29.5', title: 'Lean', description: 'Eliminate waste and amplify learning through continuous improvement', slug: 'lean' },
      { number: 'Page 29.6', title: 'DevOps', description: 'Unify development and operations for continuous delivery', slug: 'devops' },
    ],
    prevPage: { title: '29.2 Waterfall', slug: 'waterfall' },
    nextPage: { title: '29.4 SAFe', slug: 'safe' },
  },
  {
    slug: 'safe',
    badge: '📋 Page 29.4',
    title: 'SAFe (Scaled Agile Framework)',
    description: 'Enterprise-scale agile framework coordinating 50-1000+ people across multiple Agile Release Trains. Combines Scrum, Kanban, XP, and Lean principles with enterprise governance and architecture runway.',
    accentColor: '#8B5CF6',
    accentLight: '#C4B5FD',
    metrics: [
      { value: '37%', label: 'Enterprise Adoption' },
      { value: '50-125', label: 'People per ART' },
      { value: '8-12wk', label: 'PI Duration' },
      { value: '4', label: 'Configuration Levels' },
    ],
    overview: {
      title: 'SAFe (Scaled Agile Framework)',
      subtitle: 'Provides structure for portfolio management, program coordination, and value stream alignment',
      subsections: [
        {
          heading: 'What Is SAFe?',
          paragraphs: [
            'SAFe is a comprehensive framework for implementing agile at enterprise scale. It organizes hundreds to thousands of people into Agile Release Trains (ARTs)—long-lived teams of teams delivering value on fixed cadence through Program Increments (PIs) of 8-12 weeks. SAFe combines Scrum practices at team level with program-level coordination, portfolio governance, and solution-level architecture.',
            'SAFe has four configurations: Essential SAFe (single ART), Large Solution SAFe (multiple ARTs building complex solutions), Portfolio SAFe (strategy to execution alignment), and Full SAFe (complete framework). Most organizations start with Essential SAFe before scaling up.',
          ],
        },
        {
          heading: 'Agile Release Trains and PIs',
          paragraphs: [
            'An ART is a virtual organization of 50-125 people organized into 5-12 Agile teams plus program-level roles (Release Train Engineer, Product Management, System Architect). ARTs operate on synchronized cadence, planning together in 2-day PI Planning events, integrating continuously, and demoing working systems every two weeks.',
            'Program Increments provide the heartbeat. Every 8-12 weeks, the entire ART gathers for PI Planning where teams commit to objectives, identify dependencies, manage risks, and build shared understanding. This creates alignment impossible in independent team-level agile.',
          ],
        },
        {
          heading: 'Portfolio to Team Alignment',
          paragraphs: [
            'SAFe connects strategic themes at portfolio level to team-level execution. Lean Portfolio Management allocates budgets to value streams, governs epics through portfolio Kanban, and ensures investments deliver business outcomes. This top-down alignment balances with bottom-up innovation where teams propose improvements and architecture evolves emergently.',
          ],
        },
      ],
    },
    concepts: {
      title: 'SAFe Core Concepts',
      subtitle: 'Key elements of scaled agile delivery',
      columns: 2,
      cards: [
        {
          className: 'agile-release-train',
          borderColor: '#3B82F6',
          icon: '🚂',
          title: 'Agile Release Train',
          description: 'Virtual organization of 50-125 people delivering value on fixed cadence. Comprises 5-12 Agile teams plus train-level roles. Operates as long-lived, self-organizing entity with all skills needed to deliver.',
          examples: ['5-12 Agile Teams', 'Release Train Engineer', 'Product Management', 'System Architect'],
        },
        {
          className: 'program-increment',
          borderColor: '#10B981',
          icon: '📅',
          title: 'Program Increment',
          description: 'Time-boxed planning interval of 8-12 weeks (typically 10 weeks = 5 two-week sprints). Entire ART plans together in 2-day PI Planning, delivers integrated solution, and demonstrates progress to stakeholders.',
          examples: ['PI Planning: 2 days', '5 x 2-week sprints', 'Innovation & Planning sprint', 'Inspect & Adapt workshop'],
        },
        {
          className: 'pi-planning',
          borderColor: '#F59E0B',
          icon: '🎯',
          title: 'PI Planning',
          description: 'Critical 2-day event where entire ART (50-125 people) plans together. Business context, product vision, architecture vision presented. Teams create objectives, identify dependencies, manage risks using ROAM, and vote on confidence.',
          examples: ['Day 1: Context & draft plans', 'Day 2: Refinement & commitment', 'Program board visualization', 'Confidence vote'],
        },
        {
          className: 'value-streams',
          borderColor: '#8B5CF6',
          icon: '🌊',
          title: 'Value Streams',
          description: 'Primary constructs for organizing ARTs around delivering customer value. Operational value streams deliver ongoing value (product development). Development value streams build systems enabling operational value streams.',
          examples: ['Operational: Product delivery', 'Development: Platform building', 'Portfolio budgeting', 'Value stream mapping'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'SAFe Configuration Levels',
      subtitle: 'Four levels of organizational structure from team to portfolio',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '👥', name: 'Team Level', tagText: 'Foundation', tagClass: 'tag-blue', bestFor: 'Agile teams executing in sprints', complexity: 'medium', rating: '4.6/5' },
        { icon: '🚂', name: 'Program Level', tagText: 'Essential', tagClass: 'tag-green', bestFor: 'Single ART coordination', complexity: 'high', rating: '4.7/5' },
        { icon: '🌊', name: 'Large Solution', tagText: 'Scaled', tagClass: 'tag-purple', bestFor: 'Multiple ARTs building complex solutions', complexity: 'high', rating: '4.5/5' },
        { icon: '💼', name: 'Portfolio Level', tagText: 'Full SAFe', tagClass: 'tag-orange', bestFor: 'Strategy to execution alignment', complexity: 'high', rating: '4.8/5' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Software supporting scaled agile coordination',
      items: [
        { icon: '🔷', name: 'Jira Align', vendor: 'Atlassian (AgileCraft)', description: 'Purpose-built for SAFe with ARTs, PIs, program boards, dependency mapping, PI planning tools. Integrates with Jira for team-level work. Most comprehensive SAFe platform.', tags: ['SAFe Native', 'Comprehensive', 'Enterprise'] },
        { icon: '📘', name: 'Azure DevOps', vendor: 'Microsoft', description: 'Supports SAFe through Azure Boards with team/program hierarchy, sprints, PIs, dependencies. Extensions add PI planning features. Good for Microsoft-centric enterprises.', tags: ['Microsoft', 'Integrated', 'DevOps'] },
        { icon: '🎯', name: 'VersionOne', vendor: 'Broadcom (CollabNet)', description: 'Enterprise agile planning platform with SAFe templates, program boards, PI planning support. Portfolio Kanban, value stream mapping, dependency tracking across ARTs.', tags: ['Enterprise', 'Templates', 'Portfolio'] },
        { icon: '🏢', name: 'Targetprocess', vendor: 'Apptio', description: 'Visual enterprise agile tool supporting SAFe, LeSS, custom frameworks. Strong portfolio management, roadmapping, and visual board customization. Now part of Apptio Targetprocess.', tags: ['Visual', 'Portfolio', 'Flexible'] },
        { icon: '📊', name: 'Rally (CA Agile Central)', vendor: 'Broadcom', description: 'Legacy enterprise agile platform with SAFe support. Portfolio epics, program increments, dependency management. Being consolidated into Broadcom ValueOps suite.', tags: ['Legacy', 'Enterprise', 'Portfolio'] },
        { icon: '🔧', name: 'ServiceNow SPM', vendor: 'ServiceNow', description: 'Enterprise work management including SAFe support. Agile development integrated with ITSM, demand management, and PPM. Good for IT-led transformations.', tags: ['ITSM', 'Integrated', 'Enterprise'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful SAFe implementation',
      doItems: [
        'Start with Essential SAFe (single ART) before scaling to portfolio or large solution levels',
        'Invest in SAFe training—SPC, RTE, PO/PM certifications for leadership and key roles',
        'Run first PI planning in person if possible—builds relationships and trust across teams',
        'Allocate 20-30% capacity to enablers and architectural work for sustainable pace',
        'Make PI planning collaborative—entire ART attends both days with active engagement',
        'Use ROAM (Resolved, Owned, Accepted, Mitigated) to explicitly manage all dependencies',
        'Measure flow metrics (deployment frequency, lead time, MTTR) not just story points',
        'Focus on predictability—can ART reliably meet PI objectives? Use for improvement.',
      ],
      dontItems: [
        'Don\'t implement SAFe without executive sponsorship and organizational commitment',
        'Don\'t skip architecture runway—sacrificing architecture for features causes tech debt',
        'Don\'t make PI planning a theater where decisions are predetermined elsewhere',
        'Don\'t treat SAFe as heavyweight process—maintain agile mindset and adaptability',
        'Don\'t compare team velocities as performance metric—creates wrong incentives',
        'Don\'t violate fixed PI duration—predictable cadence is core to synchronization',
        'Don\'t let confidence vote become rubber stamp—<3 means teams can push back',
        'Don\'t implement Full SAFe initially—start small and scale based on need',
      ],
    },
    agent: {
      avatar: '🚂',
      name: 'SAFeCoach',
      role: 'Scaled Agile Specialist',
      description: 'Expert in SAFe implementation, ART coordination, PI planning facilitation, and enterprise agile transformation. Helps organizations scale agile practices, optimize ARTs, resolve dependencies, and align portfolio to execution.',
      capabilities: [
        'ART formation and value stream identification',
        'PI planning facilitation and agenda design',
        'Dependency mapping and resolution strategies',
        'Program board visualization and risk management',
        'Portfolio Kanban and lean budgeting guidance',
        'PI objectives crafting and business value assignment',
      ],
      codeFilename: 'safe_coach.py',
      code: `# safe_coach.py - SAFeCoach Agent
from crewai import Agent, Task, Crew

safe_coach = Agent(
    role="Scaled Agile Specialist",
    goal="Guide enterprise agile transformation using SAFe framework",
    backstory="""SAFe Program Consultant (SPC) with extensive experience
    launching ARTs and transforming large organizations. Expert in PI planning,
    value stream mapping, and portfolio alignment.""",
    tools=[
        ARTDesigner(),
        PIPlanner(),
        DependencyMapper(),
        ProgramBoardVisualizer(),
        PortfolioKanbanManager(),
    ]
)

scale_task = Task(
    description="""
    1. Identify value streams and design ART structure
    2. Create PI planning agenda and facilitation guide
    3. Map dependencies and create program board
    4. Define portfolio Kanban for epic governance
    5. Develop transformation roadmap with training plan
    """,
    agent=safe_coach,
    expected_output="Comprehensive SAFe launch plan with ART design and PI calendar"
)

crew = Crew(agents=[safe_coach], tasks=[scale_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.1', title: 'Agile & Scrum', description: 'Iterative development with 2-4 week sprints', slug: 'agile-scrum' },
      { number: 'Page 29.5', title: 'Lean', description: 'Eliminate waste and amplify learning through continuous improvement', slug: 'lean' },
      { number: 'Page 29.6', title: 'DevOps', description: 'Unify development and operations for continuous delivery', slug: 'devops' },
    ],
    prevPage: { title: '29.3 Kanban', slug: 'kanban' },
    nextPage: { title: '29.5 Lean', slug: 'lean' },
  },
  {
    slug: 'lean',
    badge: '📋 Page 29.5',
    title: 'Lean Methodology',
    description: 'Philosophy and principles from Toyota Production System focused on eliminating waste, amplifying learning, deciding late, delivering fast, empowering teams, building quality in, and respecting people.',
    accentColor: '#F59E0B',
    accentLight: '#FCD34D',
    metrics: [
      { value: '45%', label: 'Global Adoption' },
      { value: '8', label: 'Types of Waste' },
      { value: '5', label: 'Core Principles' },
      { value: '1940s', label: 'Toyota Origins' },
    ],
    overview: {
      title: 'Lean Methodology',
      subtitle: 'Foundation for modern agile and DevOps practices',
      subsections: [
        {
          heading: 'What Is Lean?',
          paragraphs: [
            'Lean is a philosophy originating from Toyota Production System focused on maximizing customer value while minimizing waste. The five core principles are: specify value from customer perspective, map the value stream showing all steps, create flow by eliminating barriers, establish pull where customer demand triggers production, and pursue perfection through continuous improvement (kaizen).',
            'Lean thinking applies to any domain—manufacturing, software, healthcare, services. It provides timeless wisdom about understanding customer value, making waste visible, optimizing flow, and respecting people. Lean principles underpin Kanban, DevOps, and parts of SAFe.',
          ],
        },
        {
          heading: 'Eight Wastes and Value Streams',
          paragraphs: [
            'Lean identifies eight types of waste (DOWNTIME): Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, and Extra processing. These are activities that consume resources without adding value customers would pay for. Value stream mapping makes waste visible by showing all steps with cycle time (value-adding) and wait time (waste).',
            'Typical knowledge work has 5-15% flow efficiency—meaning 85-95% of lead time is spent waiting in queues rather than active work. Value stream mapping exposes this waste, enabling targeted improvements that dramatically reduce lead time.',
          ],
        },
        {
          heading: 'Continuous Improvement and Respect',
          paragraphs: [
            'Kaizen (continuous improvement) involves everyone from CEO to front-line workers in identifying waste and experimenting with improvements. The PDCA cycle (Plan-Do-Check-Act) provides structured approach to small experiments. Respect for people means trusting that those doing the work understand it best, creating psychological safety to surface problems, and investing in people\'s growth.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Five Lean Principles',
      subtitle: 'Core philosophy adapted from manufacturing to knowledge work',
      columns: 2,
      cards: [
        {
          className: 'specify-value',
          borderColor: '#3B82F6',
          icon: '💎',
          title: 'Specify Value',
          description: 'Define value from customer perspective—what are customers willing to pay for? Everything else is waste. Value is specific product/service delivered at specific time meeting customer needs at specific price.',
          examples: ['Understand customer jobs-to-be-done', 'Define value in customer terms', 'Validate assumptions through experiments', 'Revalidate as needs change'],
        },
        {
          className: 'map-value-stream',
          borderColor: '#10B981',
          icon: '🗺️',
          title: 'Map Value Stream',
          description: 'Identify all steps required to deliver value from concept to customer. Measure cycle time and wait time at each step. Design future state eliminating non-value-adding activities. Make waste visible.',
          examples: ['Walk actual process', 'Measure cycle and wait times', 'Identify bottlenecks', 'Design radical improvement'],
        },
        {
          className: 'create-flow',
          borderColor: '#F59E0B',
          icon: '🌊',
          title: 'Create Flow',
          description: 'Make value-creating steps flow smoothly without interruptions, delays, or batch-and-queue. Continuous flow from raw materials to finished product. Eliminate barriers causing work to stop or pile up.',
          examples: ['Reduce batch sizes to one', 'Eliminate handoffs', 'Cross-train to prevent bottlenecks', 'Level work to avoid cycles'],
        },
        {
          className: 'establish-pull',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: 'Establish Pull',
          description: 'Let customer pull value from producer rather than pushing products based on forecasts. Produce only what\'s needed when needed. Reduces overproduction, inventory, and waste from building wrong things.',
          examples: ['Customer demand triggers production', 'Visual Kanban signals', 'Small inventory buffers', 'Downstream pulls from upstream'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Eight Types of Waste (DOWNTIME)',
      subtitle: 'Muda that adds cost without adding value',
      cards: [
        { icon: '🚚', title: 'Defects', subtitle: 'Rework & Errors', description: 'Bugs, errors requiring correction. Time spent fixing problems instead of creating value. Root cause analysis prevents recurrence.', tags: ['Quality', 'Rework', 'Prevention'] },
        { icon: '📦', title: 'Overproduction', subtitle: 'Building Unnecessary', description: 'Making more than needed or before needed. In software: features nobody uses, gold-plating, speculative development. Largest waste.', tags: ['Speculation', 'Unused Features', 'Waste'] },
        { icon: '⏳', title: 'Waiting', subtitle: 'Idle Time', description: 'Work waits for approval, information, resources, or previous step. Queue time between activities. Approval bottlenecks destroying flow.', tags: ['Delays', 'Queues', 'Bottlenecks'] },
        { icon: '🧠', title: 'Non-Utilized Talent', subtitle: 'Wasting People', description: 'Not leveraging people\'s skills, ideas, creativity. Command-and-control preventing team input. Most expensive waste—wasting human potential.', tags: ['People', 'Ideas', 'Potential'] },
        { icon: '🚛', title: 'Transportation', subtitle: 'Movement of Work', description: 'Moving work, materials, or information unnecessarily. Handoffs between teams. Work passing through multiple approval layers. Geographic distribution.', tags: ['Handoffs', 'Movement', 'Distance'] },
        { icon: '📊', title: 'Inventory', subtitle: 'Work in Progress', description: 'Work started but not finished. Partially done code, untested features, undeployed releases. WIP accumulating. Hides problems and delays feedback.', tags: ['WIP', 'Unfinished', 'Hidden Problems'] },
        { icon: '🏃', title: 'Motion', subtitle: 'People Movement', description: 'Unnecessary movement of people. Searching for information, tools, or resources. Context switching between tasks. Excessive meetings pulling people away.', tags: ['Context Switch', 'Searching', 'Meetings'] },
        { icon: '⚙️', title: 'Extra Processing', subtitle: 'Over-Engineering', description: 'Doing more than customer requires. Over-engineering, excessive documentation, unnecessary approvals. Gold-plating features. Multiple review stages adding no value.', tags: ['Over-Engineering', 'Unnecessary', 'Bureaucracy'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Practical methods supporting Lean implementation',
      items: [
        { icon: '🗺️', name: 'Value Stream Mapping', vendor: 'Lean Enterprise Institute', description: 'Map current state showing all steps, cycle times, wait times. Calculate flow efficiency. Design future state eliminating waste. Most powerful Lean tool.', tags: ['Visualization', 'Analysis', 'Improvement'] },
        { icon: '❓', name: '5 Whys', vendor: 'Root Cause Analysis', description: 'Ask "why" five times to drill past symptoms to root cause. Simple but powerful technique for problem-solving. Prevents treating symptoms while leaving underlying causes.', tags: ['Root Cause', 'Simple', 'Problem Solving'] },
        { icon: '🐟', name: 'Ishikawa Diagram', vendor: 'Fishbone / Cause-Effect', description: 'Visual tool showing multiple potential causes organized by category (People, Process, Technology, Environment). Brainstorm all possible causes before jumping to solutions.', tags: ['Fishbone', 'Brainstorming', 'Structured'] },
        { icon: '🎯', name: 'Kanban System', vendor: 'Pull-Based Flow', description: 'Visual cards signaling when to produce next item. Limits WIP preventing overproduction. Downstream pulls from upstream when ready. Physical implementation of pull principle.', tags: ['Pull', 'Visual', 'WIP Limits'] },
        { icon: '✋', name: 'Andon Cord', vendor: 'Quality Control', description: 'Mechanism for workers to stop production line when quality issue detected. Empowers everyone to prevent defects. Surface problems immediately rather than passing downstream.', tags: ['Quality', 'Empowerment', 'Stop-the-Line'] },
        { icon: '🔄', name: 'Kaizen Events', vendor: 'Improvement Workshops', description: 'Focused 3-5 day workshops where cross-functional team tackles specific problem using PDCA. Rapid improvement with immediate results. Builds improvement muscle.', tags: ['Workshop', 'PDCA', 'Rapid Improvement'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful Lean implementation',
      doItems: [
        'Start by deeply understanding customer value—what are they willing to pay for?',
        'Walk the actual process (gemba) observing reality, not relying on secondhand reports',
        'Map value stream showing cycle time and wait time at each step to calculate flow efficiency',
        'Run many small experiments using PDCA cycle rather than big-bang transformations',
        'Make work, progress, and problems visible to everyone through visual management',
        'Create psychological safety so people can surface problems without blame',
        'Focus on 1-3 actionable improvements at a time, not overwhelming laundry lists',
        'Measure before and after to validate impact objectively with data',
      ],
      dontItems: [
        'Don\'t define value from company perspective—start with customer needs and jobs-to-be-done',
        'Don\'t rely on reports or dashboards—go see the actual work at gemba where value is created',
        'Don\'t skip value stream mapping—you can\'t improve what you don\'t understand',
        'Don\'t treat waste elimination as excuse for layoffs—it\'s about process improvement',
        'Don\'t ignore the people aspect—Lean requires respect, trust, and empowerment',
        'Don\'t optimize individual parts—optimize the whole value stream end-to-end',
        'Don\'t expect quick results—deep cultural change requires patience and sustained commitment',
        'Don\'t treat Lean as cost-cutting program—it\'s about creating customer value efficiently',
      ],
    },
    agent: {
      avatar: '🎯',
      name: 'LeanSensei',
      role: 'Lean Transformation Expert',
      description: 'Expert in Lean principles, waste elimination, value stream mapping, and continuous improvement. Helps teams identify muda, optimize flow, conduct kaizen events, and embed Lean thinking throughout organization.',
      capabilities: [
        'Value stream mapping and flow analysis',
        'Waste identification across 8 categories (DOWNTIME)',
        'Kaizen event planning and facilitation',
        'Root cause analysis with 5 Whys and Ishikawa',
        'Flow efficiency metrics and improvement tracking',
        'Customer value definition and validation',
      ],
      codeFilename: 'lean_sensei.py',
      code: `# lean_sensei.py - LeanSensei Agent
from crewai import Agent, Task, Crew

lean_sensei = Agent(
    role="Lean Transformation Expert",
    goal="Eliminate waste and optimize flow for maximum customer value",
    backstory="""Lean expert trained at Toyota with deep experience in value
    stream mapping, kaizen, and continuous improvement. Specializes in
    translating manufacturing Lean principles to knowledge work.""",
    tools=[
        ValueStreamMapper(),
        WasteIdentifier(),
        KaizenFacilitator(),
        RootCauseAnalyzer(),
        FlowEfficiencyCalculator(),
    ]
)

optimize_task = Task(
    description="""
    1. Map current state value stream with cycle and wait times
    2. Identify waste across 8 DOWNTIME categories
    3. Calculate flow efficiency and improvement opportunity
    4. Design future state eliminating waste
    5. Create kaizen roadmap with prioritized improvements
    """,
    agent=lean_sensei,
    expected_output="Value stream analysis with waste breakdown and improvement roadmap"
)

crew = Crew(agents=[lean_sensei], tasks=[optimize_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.3', title: 'Kanban', description: 'Visual workflow management with WIP limits and continuous flow', slug: 'kanban' },
      { number: 'Page 29.4', title: 'SAFe', description: 'Scaled Agile Framework for enterprise coordination', slug: 'safe' },
      { number: 'Page 29.6', title: 'DevOps', description: 'Unify development and operations for continuous delivery', slug: 'devops' },
    ],
    prevPage: { title: '29.4 SAFe', slug: 'safe' },
    nextPage: { title: '29.6 DevOps', slug: 'devops' },
  },
  {
    slug: 'devops',
    badge: '📋 Page 29.6',
    title: 'DevOps Methodology',
    description: 'Cultural and technical movement unifying software development (Dev) and IT operations (Ops) to shorten development lifecycle and deliver high-quality software continuously through automation, collaboration, and monitoring.',
    accentColor: '#06B6D4',
    accentLight: '#67E8F9',
    metrics: [
      { value: '65%', label: 'Global Adoption' },
      { value: 'Daily+', label: 'Deploy Frequency' },
      { value: '<1hr', label: 'MTTR Target' },
      { value: '99.9%', label: 'Uptime Goal' },
    ],
    overview: {
      title: 'DevOps Methodology',
      subtitle: 'Breaks down silos between traditionally separate teams to enable faster, more reliable releases',
      subsections: [
        {
          heading: 'What Is DevOps?',
          paragraphs: [
            'DevOps is a cultural movement breaking down traditional walls between development and operations teams. Developers take responsibility for operational concerns (monitoring, deployment, incident response), while operations adopt development practices (version control, automated testing, continuous integration). This shared responsibility accelerates delivery while maintaining stability.',
            'DevOps emphasizes three pillars: Culture (collaboration, blameless postmortems, psychological safety), Automation (CI/CD pipelines, infrastructure as code, automated testing), and Measurement (monitoring, metrics, feedback loops). Together these enable organizations to deploy software daily or hourly while maintaining high reliability.',
          ],
        },
        {
          heading: 'CI/CD and Infrastructure as Code',
          paragraphs: [
            'Continuous Integration (CI) automatically builds and tests code on every commit, catching defects early. Continuous Delivery (CD) extends this by automatically deploying to staging environments and enabling push-button production releases. Continuous Deployment goes further by automatically releasing every change that passes automated tests.',
            'Infrastructure as Code (IaC) treats servers, networks, and cloud resources as versioned code rather than manual configuration. Tools like Terraform, CloudFormation, and Ansible enable teams to provision infrastructure through code reviews and automated pipelines, ensuring consistency and enabling rapid disaster recovery.',
          ],
        },
        {
          heading: 'Monitoring and Feedback Loops',
          paragraphs: [
            'DevOps teams instrument everything: application performance monitoring (APM), infrastructure metrics, distributed tracing, log aggregation, and synthetic monitoring. Fast feedback loops enable rapid course correction when issues arise. DORA metrics (deployment frequency, lead time, MTTR, change failure rate) measure DevOps effectiveness objectively.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Three Pillars of DevOps',
      subtitle: 'Cultural, process, and technological foundations',
      columns: 2,
      cards: [
        {
          className: 'devops-culture',
          borderColor: '#3B82F6',
          icon: '🤝',
          title: 'Culture & Collaboration',
          description: 'Break down silos between development, operations, QA, security. Shared responsibility for outcomes. Blameless postmortems. Psychological safety for experimentation and learning from failures.',
          examples: ['Cross-functional teams', 'Shared metrics and goals', 'Blameless culture', 'ChatOps transparency'],
        },
        {
          className: 'devops-automation',
          borderColor: '#10B981',
          icon: '⚙️',
          title: 'Automation',
          description: 'Automate repetitive tasks enabling speed and consistency. CI/CD pipelines, infrastructure provisioning, testing, deployment, monitoring. Reduce manual toil allowing focus on higher-value work.',
          examples: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Self-service platforms'],
        },
        {
          className: 'devops-measurement',
          borderColor: '#F59E0B',
          icon: '📊',
          title: 'Measurement & Feedback',
          description: 'Instrument everything. Monitor application and infrastructure continuously. Fast feedback loops enabling rapid course correction. Data-driven decisions on performance, reliability, and user experience.',
          examples: ['APM monitoring', 'Infrastructure metrics', 'Distributed tracing', 'DORA metrics'],
        },
        {
          className: 'devops-security',
          borderColor: '#8B5CF6',
          icon: '🔒',
          title: 'DevSecOps Integration',
          description: 'Shift security left by integrating security practices into DevOps workflow. Automated security scanning, compliance as code, threat modeling, and vulnerability management throughout pipeline.',
          examples: ['Security scanning in CI/CD', 'Compliance as code', 'Automated vulnerability detection', 'Threat modeling'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'CI/CD Pipeline Stages',
      subtitle: 'Automated software delivery workflow',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '📝', name: 'Code Commit', tagText: 'Version Control', tagClass: 'tag-blue', bestFor: 'Triggering automated builds', complexity: 'low', rating: '4.9/5' },
        { icon: '🏗️', name: 'Build & Compile', tagText: 'Integration', tagClass: 'tag-purple', bestFor: 'Creating deployable artifacts', complexity: 'medium', rating: '4.7/5' },
        { icon: '🧪', name: 'Automated Testing', tagText: 'Quality', tagClass: 'tag-green', bestFor: 'Catching defects early', complexity: 'high', rating: '4.8/5' },
        { icon: '🚀', name: 'Deploy to Staging', tagText: 'Delivery', tagClass: 'tag-orange', bestFor: 'Pre-production validation', complexity: 'medium', rating: '4.6/5' },
        { icon: '✅', name: 'Deploy to Production', tagText: 'Release', tagClass: 'tag-pink', bestFor: 'Customer value delivery', complexity: 'high', rating: '4.8/5' },
        { icon: '📊', name: 'Monitor & Observe', tagText: 'Feedback', tagClass: 'tag-blue', bestFor: 'Continuous improvement', complexity: 'medium', rating: '4.7/5' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential DevOps toolchain components',
      items: [
        { icon: '🔀', name: 'Jenkins', vendor: 'Open Source', description: 'Most popular CI/CD automation server with extensive plugin ecosystem. Supports pipelines as code, distributed builds, and integration with virtually any tool.', tags: ['CI/CD', 'Automation', 'Open Source'] },
        { icon: '🦊', name: 'GitLab CI/CD', vendor: 'GitLab', description: 'Complete DevOps platform with built-in CI/CD, version control, issue tracking, security scanning. Single application for entire DevOps lifecycle.', tags: ['Integrated', 'Security', 'Complete'] },
        { icon: '🌩️', name: 'Terraform', vendor: 'HashiCorp', description: 'Infrastructure as Code tool supporting multiple cloud providers. Declarative syntax, state management, plan/apply workflow. Industry standard for cloud provisioning.', tags: ['IaC', 'Multi-Cloud', 'Declarative'] },
        { icon: '🐳', name: 'Docker', vendor: 'Docker Inc.', description: 'Containerization platform packaging applications with dependencies. Consistent environments from dev to production. Foundation for Kubernetes and microservices.', tags: ['Containers', 'Consistency', 'Portability'] },
        { icon: '☸️', name: 'Kubernetes', vendor: 'CNCF', description: 'Container orchestration platform for automated deployment, scaling, and management. Industry standard for running containerized applications at scale.', tags: ['Orchestration', 'Scaling', 'Cloud Native'] },
        { icon: '📊', name: 'Datadog', vendor: 'Datadog', description: 'Comprehensive monitoring and observability platform. APM, infrastructure monitoring, log management, distributed tracing. SaaS solution with extensive integrations.', tags: ['Monitoring', 'APM', 'Observability'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Proven strategies for successful DevOps implementation',
      doItems: [
        'Start with culture—DevOps is cultural transformation, not just tool adoption',
        'Automate testing at all levels: unit, integration, end-to-end, performance, security',
        'Implement CI/CD pipeline incrementally—start with CI, add automated deployment gradually',
        'Treat infrastructure as code using version control, code reviews, and automated testing',
        'Monitor everything: application performance, infrastructure, user experience, business metrics',
        'Practice blameless postmortems focusing on systemic improvements, not individual blame',
        'Measure DORA metrics (deployment frequency, lead time, MTTR, change failure rate) for improvement',
        'Adopt "you build it, you run it" culture where teams own services end-to-end',
      ],
      dontItems: [
        'Don\'t treat DevOps as purely tool problem—culture and collaboration are essential',
        'Don\'t skip automated testing in pursuit of speed—quality enables sustainable velocity',
        'Don\'t ignore security until the end—shift security left into development pipeline',
        'Don\'t create separate "DevOps team"—DevOps is practice adopted by product teams',
        'Don\'t deploy without monitoring and rollback capability—fast feedback is critical',
        'Don\'t optimize for individual team metrics—optimize for end-to-end flow and outcomes',
        'Don\'t skip incident reviews and blameless postmortems—learning prevents recurrence',
        'Don\'t treat infrastructure as immutable pets—embrace disposable, reproducible infrastructure',
      ],
    },
    agent: {
      avatar: '♾️',
      name: 'DevOpsArchitect',
      role: 'DevOps Transformation Specialist',
      description: 'Expert in CI/CD pipeline design, infrastructure automation, monitoring strategy, and DevOps culture transformation. Helps organizations accelerate delivery while improving reliability through automation and collaboration.',
      capabilities: [
        'CI/CD pipeline design and optimization',
        'Infrastructure as Code templates and best practices',
        'Monitoring and observability strategy',
        'DevOps maturity assessment and roadmapping',
        'Container orchestration and Kubernetes',
        'Security integration and compliance automation',
      ],
      codeFilename: 'devops_architect.py',
      code: `# devops_architect.py - DevOpsArchitect Agent
from crewai import Agent, Task, Crew

devops_architect = Agent(
    role="DevOps Transformation Specialist",
    goal="Accelerate delivery and improve reliability through DevOps practices",
    backstory="""DevOps expert with deep experience in CI/CD, infrastructure
    automation, and cultural transformation. Specializes in helping
    organizations transition from traditional IT to modern DevOps.""",
    tools=[
        PipelineDesigner(),
        IaCGenerator(),
        MonitoringStrategy(),
        MaturityAssessor(),
        SecurityIntegrator(),
    ]
)

transform_task = Task(
    description="""
    1. Assess current DevOps maturity and identify gaps
    2. Design CI/CD pipeline architecture for automated delivery
    3. Create infrastructure as code templates and standards
    4. Define monitoring and observability strategy
    5. Develop transformation roadmap with cultural and technical changes
    """,
    agent=devops_architect,
    expected_output="DevOps transformation plan with CI/CD design and IaC standards"
)

crew = Crew(agents=[devops_architect], tasks=[transform_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 29.1', title: 'Agile & Scrum', description: 'Iterative development with 2-4 week sprints', slug: 'agile-scrum' },
      { number: 'Page 29.3', title: 'Kanban', description: 'Visual workflow management with WIP limits and continuous flow', slug: 'kanban' },
      { number: 'Page 29.5', title: 'Lean', description: 'Eliminate waste and amplify learning through continuous improvement', slug: 'lean' },
    ],
    prevPage: { title: '29.5 Lean', slug: 'lean' },
    nextPage: undefined,
  },
]

registerPages('methodologies', pages)
