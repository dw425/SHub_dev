import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'go-live-planning',
    badge: '📋 Page 18.1',
    title: 'Go-Live Planning',
    description: 'Comprehensive readiness assessment, structured Go/No-Go criteria, and launch preparation frameworks. The difference between chaotic deployments and smooth launches.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4-8 wks', label: 'Typical Planning Horizon' },
      { value: '150+', label: 'Checklist Items' },
      { value: '5', label: 'Readiness Dimensions' },
      { value: '48 hrs', label: 'Final Freeze Window' },
    ],
    overview: {
      title: 'Launch Countdown Framework',
      subtitle: 'Structured timeline from T-8 weeks to Go-Live',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Go-live planning follows a countdown structure with specific milestones and gates. Each phase has defined deliverables, stakeholder checkpoints, and exit criteria. Missing a milestone should trigger escalation—not schedule compression. The countdown provides visibility and accountability across all workstreams.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Five Readiness Dimensions',
      subtitle: 'Comprehensive assessment across all go-live factors',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔧',
          title: 'Technical Readiness',
          description: 'Systems configured, tested, and production-ready. Includes infrastructure, integrations, security, performance, and data migration validation.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '💼',
          title: 'Business Readiness',
          description: 'Processes documented, users trained, and acceptance criteria met. UAT complete with sign-off. Business continuity plans in place.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '⚙️',
          title: 'Operational Readiness',
          description: 'Support model defined, monitoring configured, and runbooks documented. Escalation paths clear. On-call schedules confirmed.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '👥',
          title: 'Organizational Readiness',
          description: 'Stakeholders aligned, change management complete, and resistance addressed. Leadership engaged. Champions activated.',
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
        { icon: '📌', title: 'Launch Countdown Framework', subtitle: '', description: 'Structured timeline from T-8 weeks to Go-Live', tags: [] },
        { icon: '📌', title: 'Five Readiness Dimensions', subtitle: '', description: 'Comprehensive assessment across all go-live factors', tags: [] },
        { icon: '📌', title: 'Master Readiness Checklists', subtitle: '', description: 'Comprehensive criteria for each readiness dimension', tags: [] },
        { icon: '📌', title: 'Go/No-Go Decision Framework', subtitle: '', description: 'Structured process for the final launch decision', tags: [] },
        { icon: '📌', title: 'Pre-Launch Risk Assessment', subtitle: '', description: 'Identify, assess, and mitigate go-live risks', tags: [] },
        { icon: '📌', title: 'Stakeholder Sign-Off Matrix', subtitle: '', description: 'Who must approve before go-live proceeds', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered go-live readiness assessment', tags: [] },
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
      avatar: '📋',
      name: 'ReadinessAssessor',
      role: 'Go-Live Planning Intelligence',
      description: 'Continuously monitors readiness across all dimensions, identifies gaps, predicts risks, and provides recommendations. Automates checklist tracking and stakeholder status collection.',
      capabilities: [
        'Multi-dimensional readiness scoring',
        'Automated checklist verification',
        'Risk identification and prediction',
        'Stakeholder sign-off tracking',
        'Timeline milestone monitoring',
        'Go/No-Go recommendation engine',
        'Historical comparison analysis',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        readiness_assessor_agent.py',
      code: `# Go-Live Readiness Assessment Agent
from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Define Readiness Assessment Agent
readiness_agent = Agent(
    role="Go-Live Readiness Assessor",
    goal="Evaluate all readiness dimensions and provide Go/No-Go recommendation",
    backstory="""Expert in implementation readiness with 
    deep experience across technical, business, and 
    operational dimensions. Data-driven assessor who 
    identifies gaps before they become blockers.""",
    llm=llm,
    tools=[
        checklist_verifier,
        risk_analyzer,
        stakeholder_tracker,
        timeline_monitor
    ]
)

# Readiness Assessment Task
assessment_task = Task(
    description="""
    Assess go-live readiness across all dimensions:
    1. Verify all checklist items with evidence
    2. Calculate readiness scores per dimension
    3. Identify gaps and blockers
    4. Evaluate risk profile
    5. Check stakeholder sign-off status
    6. Provide Go/No-Go recommendation with confidence
    """,
    agent=readiness_agent,
    expected_output="Readiness report with scores, gaps, risks, and recommendation"
)

def assess_readiness(project_id: str) -> dict:
    """Run full readiness assessment for a project."""
    crew = Crew(
        agents=[readiness_agent],
        tasks=[assessment_task],
        verbose=True
    )
    result = crew.kickoff(inputs={"project_id": project_id})
    return {
        "recommendation": result.recommendation,
        "confidence": result.confidence,
        "scores": result.dimension_scores,
        "blockers": result.blockers,
        "risks": result.risks
    }`,
    },
    relatedPages: [
    ],
    prevPage: undefined,
    nextPage: { title: '18.2 Cutover Management', slug: 'cutover-management' },
  },
  {
    slug: 'cutover-management',
    badge: '⚡ Page 18.2',
    title: 'Cutover Management',
    description: 'Execute flawless cutovers with detailed runbooks, precise task sequencing, war room coordination, and tested rollback procedures. The critical hours that determine success.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '4-12 hrs', label: 'Typical Cutover Window' },
      { value: '50-200', label: 'Tasks per Cutover' },
      { value: '15 min', label: 'Target Rollback RTO' },
      { value: '2-3', label: 'Dress Rehearsals' },
    ],
    overview: {
      title: 'Cutover Runbook Structure',
      subtitle: 'The master playbook for go-live execution',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The cutover runbook is the definitive guide for go-live execution. It documents every task, dependency, owner, and timing. A well-designed runbook leaves nothing to memory or improvisation. Every task should be executable by someone who has never done it before—the runbook is that detailed.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Task Sequencing & Dependencies',
      subtitle: 'Critical path management during cutover',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔗',
          title: 'Finish-to-Start (FS)',
          description: 'Task B cannot start until Task A completes. Most common dependency type. Example: Data validation cannot start until migration completes.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '⏱️',
          title: 'Start-to-Start (SS)',
          description: 'Task B cannot start until Task A starts. Allows parallel execution with offset. Example: Monitoring starts when cutover starts.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: 'Critical Path',
          description: 'Longest sequence of dependent tasks. Zero float—any delay extends total duration. Must be protected and monitored closely.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: 'Float/Slack',
          description: 'Time a non-critical task can slip without affecting end date. Tasks with float provide buffer. Use float strategically for risk.',
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
        { icon: '📌', title: 'Cutover Runbook Structure', subtitle: '', description: 'The master playbook for go-live execution', tags: [] },
        { icon: '📌', title: 'Task Sequencing & Dependencies', subtitle: '', description: 'Critical path management during cutover', tags: [] },
        { icon: '📌', title: 'War Room Operations', subtitle: '', description: 'Command center coordination during cutover', tags: [] },
        { icon: '📌', title: 'Rollback Procedures', subtitle: '', description: 'The safety net for failed cutovers', tags: [] },
        { icon: '📌', title: 'Cutover Communications', subtitle: '', description: 'Keeping stakeholders informed during execution', tags: [] },
        { icon: '📌', title: 'Post-Cutover Validation', subtitle: '', description: 'Smoke tests and verification procedures', tags: [] },
        { icon: '📌', title: 'Cutover Timing Strategy', subtitle: '', description: 'When to execute for maximum success', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered cutover orchestration', tags: [] },
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
      avatar: '⚡',
      name: 'CutoverOrchestrator',
      role: 'Real-Time Execution Coordinator',
      description: 'Orchestrates cutover execution in real-time, tracking task progress, managing dependencies, monitoring for issues, and coordinating rollback when needed. Provides intelligent recommendations and automates status communications.',
      capabilities: [
        'Real-time runbook task tracking',
        'Dependency chain management',
        'Critical path monitoring',
        'Automated health checks',
        'Rollback trigger detection',
        'Stakeholder communication automation',
        'Decision support recommendations',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        cutover_orchestrator_agent.py',
      code: `# Cutover Orchestration Agent
from crewai import Agent, Task, Crew, Process
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Define Cutover Orchestration Agent
orchestrator = Agent(
    role="Cutover Orchestrator",
    goal="Execute cutover runbook with precision and manage issues",
    backstory="""Expert cutover coordinator with experience 
    managing hundreds of go-lives. Excels at real-time 
    decision making, dependency management, and rapid 
    issue resolution under pressure.""",
    llm=llm,
    tools=[
        runbook_tracker,
        dependency_manager,
        health_monitor,
        rollback_controller,
        notification_sender
    ]
)

# Task execution with rollback awareness
async def execute_cutover_task(task_id: str):
    """Execute a single cutover task with monitoring."""
    task = Task(
        description=f"""
        Execute cutover task {task_id}:
        1. Verify all dependencies complete
        2. Execute task steps per runbook
        3. Monitor for rollback triggers
        4. Validate completion criteria
        5. Update status and notify stakeholders
        6. Identify any blockers for next task
        """,
        agent=orchestrator,
        expected_output="Task completion status with metrics"
    )
    
    crew = Crew(agents=[orchestrator], tasks=[task])
    result = await crew.kickoff_async()
    
    # Check for rollback triggers
    if result.rollback_triggered:
        await initiate_rollback(result.trigger_reason)
    
    return result`,
    },
    relatedPages: [
    ],
    prevPage: { title: '18.1 Go-Live Planning', slug: 'go-live-planning' },
    nextPage: { title: '18.3 Hypercare & Support', slug: 'hypercare' },
  },
  {
    slug: 'hypercare',
    badge: '🩺 Page 18.3',
    title: 'Hypercare & Support',
    description: 'Intensive post-go-live support with elevated staffing, accelerated SLAs, and rapid issue resolution. The critical period that determines long-term adoption success.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '2-6 wks', label: 'Typical Duration' },
      { value: '3x', label: 'Normal Staffing' },
      { value: '24/7', label: 'Coverage Week 1' },
      { value: '<1 hr', label: 'P1 Response SLA' },
    ],
    overview: {
      title: 'Hypercare Support Model',
      subtitle: 'Tiered support structure for post-go-live period',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Hypercare is the intensive support period immediately following go-live. It\'s characterized by elevated staffing, accelerated SLAs, and proactive monitoring. The goal is to rapidly identify and resolve issues before they impact user confidence and adoption. Hypercare typically lasts 2-6 weeks, with intensity decreasing as the system stabilizes.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Hypercare Staffing Model',
      subtitle: 'Resource allocation across the hypercare period',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🌙',
          title: 'Shift Handoff',
          description: '15-minute overlap between shifts for context transfer. Open tickets, pending issues, and hot topics must be handed off explicitly—not assumed.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📞',
          title: 'On-Call Rules',
          description: 'On-call must respond within 15 minutes. No alcohol, must have laptop and connectivity. Backup on-call if primary unavailable.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '😴',
          title: 'Fatigue Management',
          description: 'No more than 12-hour shifts. Minimum 8 hours between shifts. Rotate high-stress P1 work across team members.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📝',
          title: 'Article Template',
          description: 'Standardize format: Title, Summary, Applies To, Steps, Screenshots, Related Articles, Last Updated. Consistency improves findability.',
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
        { icon: '📌', title: 'Hypercare Support Model', subtitle: '', description: 'Tiered support structure for post-go-live period', tags: [] },
        { icon: '📌', title: 'Issue Triage Framework', subtitle: '', description: 'Prioritize and route issues effectively', tags: [] },
        { icon: '📌', title: 'SLA Management', subtitle: '', description: 'Service level agreements for hypercare period', tags: [] },
        { icon: '📌', title: 'Escalation Paths', subtitle: '', description: 'When and how to escalate issues', tags: [] },
        { icon: '📌', title: 'Hypercare Staffing Model', subtitle: '', description: 'Resource allocation across the hypercare period', tags: [] },
        { icon: '📌', title: 'Hypercare Exit Criteria', subtitle: '', description: 'When to transition to BAU support', tags: [] },
        { icon: '📌', title: 'Knowledge Base Strategy', subtitle: '', description: 'Building self-service resources during hypercare', tags: [] },
        { icon: '📌', title: 'User Feedback Collection', subtitle: '', description: 'Capturing sentiment and improvement opportunities', tags: [] },
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
      avatar: '🩺',
      name: 'HypercareAssistant',
      role: 'Intelligent Support Coordinator',
      description: 'Automates ticket triage, monitors SLA compliance, predicts escalation needs, and assists support agents with resolution guidance. Learns from resolved tickets to improve future responses.',
      capabilities: [
        'Intelligent ticket triage and routing',
        'Real-time SLA monitoring and alerts',
        'Similar issue detection and KB suggestions',
        'Escalation prediction and recommendation',
        'Agent assist with resolution steps',
        'Trend analysis and pattern detection',
        'Exit criteria tracking and reporting',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        hypercare_assistant_agent.py',
      code: `# Hypercare Support Assistant Agent
from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Define Hypercare Support Agent
hypercare_agent = Agent(
    role="Hypercare Support Assistant",
    goal="Maximize issue resolution speed and user satisfaction",
    backstory="""Expert support coordinator with deep 
    knowledge of triage, escalation, and rapid resolution. 
    Combines technical troubleshooting with empathetic 
    user communication.""",
    llm=llm,
    tools=[
        ticket_triage_tool,
        kb_search_tool,
        sla_monitor,
        escalation_predictor,
        similar_issue_finder
    ]
)

# Ticket triage and routing
async def triage_ticket(ticket: dict) -> dict:
    """Intelligently triage and route incoming ticket."""
    task = Task(
        description=f"""
        Analyze ticket and determine:
        1. Priority (P1-P4) based on impact/urgency
        2. Category and subcategory
        3. Appropriate support tier
        4. Similar resolved tickets for reference
        5. Suggested resolution steps
        6. SLA timeline based on priority
        
        Ticket: {ticket}
        """,
        agent=hypercare_agent,
        expected_output="Triage decision with routing and suggestions"
    )
    
    crew = Crew(agents=[hypercare_agent], tasks=[task])
    result = await crew.kickoff_async()
    
    return {
        "priority": result.priority,
        "tier": result.assigned_tier,
        "similar_tickets": result.similar_issues,
        "suggested_resolution": result.resolution_steps,
        "sla_deadline": result.sla_time
    }`,
    },
    relatedPages: [
    ],
    prevPage: { title: '18.2 Cutover Management', slug: 'cutover-management' },
    nextPage: { title: '18.4 Wave Rollout Strategy', slug: 'wave-rollout' },
  },
  {
    slug: 'wave-rollout',
    badge: '🌊 Page 18.4',
    title: 'Wave Rollout Strategy',
    description: 'Phased deployment across user groups and regions. Each wave builds on learnings from the last, progressively reducing risk while expanding reach.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '3-6', label: 'Typical Waves' },
      { value: '2-4 wks', label: 'Between Waves' },
      { value: '94%', label: 'Success Rate' },
      { value: '3x', label: 'vs Big Bang Risk' },
    ],
    overview: {
      title: 'Wave Rollout Strategy',
      subtitle: 'Progressive deployment for reduced risk',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Wave rollout divides users into groups and deploys sequentially rather than all at once. This approach reduces risk by limiting blast radius—if something goes wrong, only a subset of users is affected. Each wave provides learnings that improve subsequent waves, creating a virtuous cycle of improvement.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Wave Sizing Principles',
      subtitle: 'How to determine the right size for each wave',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'Pilot (1-5%)',
          description: 'Smallest group—typically IT, super users, or volunteers. Purpose is to validate basic functionality and identify major issues. Can tolerate rough edges.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '⚡',
          title: 'Early Adopters (5-15%)',
          description: 'Champions and enthusiastic users. Provides broader validation, stress-tests support model, and generates internal advocates. Tolerates some issues.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🏢',
          title: 'Business Unit (15-30%)',
          description: 'Full department or region. Tests real-world workflows, integrations, and scale. Should be stable enough for normal business operations.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🌍',
          title: 'Division (30-50%)',
          description: 'Multiple business units or geographies. Validates enterprise readiness, cross-functional processes, and full support model.',
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
        { icon: '📌', title: 'Wave Rollout Strategy', subtitle: '', description: 'Progressive deployment for reduced risk', tags: [] },
        { icon: '📌', title: 'Wave Sizing Principles', subtitle: '', description: 'How to determine the right size for each wave', tags: [] },
        { icon: '📌', title: 'Wave Sequencing Strategy', subtitle: '', description: 'Who goes first, and why', tags: [] },
        { icon: '📌', title: 'Wave Go/No-Go Criteria', subtitle: '', description: 'When to proceed to the next wave', tags: [] },
        { icon: '📌', title: 'Wave Learning Loop', subtitle: '', description: 'Capturing and applying insights between waves', tags: [] },
        { icon: '📌', title: 'Wave Communication Strategy', subtitle: '', description: 'Keeping all stakeholders informed across waves', tags: [] },
        { icon: '📌', title: 'Parallel Systems Management', subtitle: '', description: 'Running old and new systems during transition', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered wave planning and monitoring', tags: [] },
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
      avatar: '🌊',
      name: 'WaveOptimizer',
      role: 'Rollout Planning Intelligence',
      description: 'Analyzes organizational data to recommend optimal wave composition, sequence, and timing. Monitors wave progress in real-time and predicts go/no-go outcomes based on current metrics.',
      capabilities: [
        'Optimal wave sizing recommendations',
        'User segmentation for wave assignment',
        'Risk-based sequence optimization',
        'Real-time wave health monitoring',
        'Go/No-Go prediction and alerts',
        'Learning extraction and application',
        'Wave timeline optimization',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        wave_optimizer_agent.py',
      code: `# Wave Rollout Optimization Agent
from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Define Wave Optimizer Agent
wave_optimizer = Agent(
    role="Wave Rollout Optimizer",
    goal="Maximize rollout success through optimal wave planning",
    backstory="""Expert in phased deployments with deep 
    understanding of organizational dynamics, risk 
    management, and change adoption. Uses data-driven 
    approaches to optimize wave composition and timing.""",
    llm=llm,
    tools=[
        user_analyzer,
        risk_assessor,
        metrics_monitor,
        learning_extractor,
        timeline_optimizer
    ]
)

# Wave planning task
def plan_next_wave(current_wave_data: dict) -> dict:
    """Plan optimal next wave based on current results."""
    task = Task(
        description=f"""
        Analyze current wave results and plan next wave:
        1. Evaluate exit criteria status
        2. Extract key learnings and issues
        3. Recommend wave size and composition
        4. Identify users for next wave
        5. Predict success probability
        6. Suggest timeline and resources
        
        Current wave data: {current_wave_data}
        """,
        agent=wave_optimizer,
        expected_output="Next wave plan with recommendations"
    )
    
    crew = Crew(agents=[wave_optimizer], tasks=[task])
    result = crew.kickoff()
    
    return {
        "wave_ready": result.criteria_met,
        "recommended_size": result.wave_size,
        "user_segments": result.target_users,
        "success_probability": result.prediction,
        "key_risks": result.risks
    }`,
    },
    relatedPages: [
    ],
    prevPage: { title: '18.3 Hypercare & Support', slug: 'hypercare' },
    nextPage: { title: '18.5 Post-Implementation Review', slug: 'post-implementation' },
  },
  {
    slug: 'post-implementation',
    badge: '📊 Page 18.5',
    title: 'Post-Implementation Review',
    description: 'Comprehensive evaluation of project outcomes, benefits realization, lessons learned, and formal closure. The critical final phase that transforms project experience into organizational wisdom.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '30-90 days', label: 'PIR Window' },
      { value: '85%', label: 'Benefits Realized' },
      { value: '24', label: 'Lessons Captured' },
      { value: '100%', label: 'Handover Complete' },
    ],
    overview: {
      title: 'Executive Summary',
      subtitle: 'High-level project outcomes at a glance',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The Enterprise Platform Modernization project has successfully achieved 85% of projected benefits within 60 days of go-live. User adoption exceeds target at 87%, system stability is strong with 99.7% uptime, and stakeholder satisfaction is positive with NPS +38. The project came in under budget (-2.4%) despite a 4-week schedule extension for quality. Key risks have been mitigated and the system is ready for full operations handover.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Post-Implementation Phases',
      subtitle: 'The complete PIR lifecycle from stabilization to closure',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔧',
          title: 'Phase 1: Stabilization',
          description: 'Days 1-14: Focus on system stability and critical issue resolution. Bug fixes, performance tuning, user support escalations, and 24/7 monitoring. Exit: Zero P1 issues, SLA >95%.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '⚡',
          title: 'Phase 2: Optimization',
          description: 'Days 15-30: Fine-tuning processes and reinforcing adoption. Training refreshers, knowledge base expansion, workflow optimization. Exit: Adoption >80%, declining support volume.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: 'Phase 3: Evaluation',
          description: 'Days 30-60: Measuring outcomes against objectives. Benefits tracking, stakeholder surveys, data analysis, PIR draft preparation. Exit: All metrics collected.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🤝',
          title: 'Phase 4: Transition',
          description: 'Days 60-75: Knowledge transfer to operations. Documentation handover, KT sessions, shadow period, support transition. Exit: Ops handling 95% independently.',
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
        { icon: '📌', title: 'Executive Summary', subtitle: '', description: 'High-level project outcomes at a glance', tags: [] },
        { icon: '📌', title: 'Post-Implementation Phases', subtitle: '', description: 'The complete PIR lifecycle from stabilization to closure', tags: [] },
        { icon: '📌', title: 'Benefits Realization', subtitle: '', description: 'Measuring actual value delivered vs. business case', tags: [] },
        { icon: '📌', title: 'Success Metrics & KPIs', subtitle: '', description: 'Comprehensive performance measurement', tags: [] },
        { icon: '📌', title: 'Stakeholder Feedback', subtitle: '', description: 'Qualitative insights from users and sponsors', tags: [] },
        { icon: '📌', title: 'Lessons Learned', subtitle: '', description: 'Actionable insights for future projects', tags: [] },
        { icon: '📌', title: 'Technical Debt Assessment', subtitle: '', description: 'Shortcuts taken and remediation needed', tags: [] },
        { icon: '📌', title: 'Risk Register Closeout', subtitle: '', description: 'Final disposition of project risks', tags: [] },
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
      avatar: '📊',
      name: 'PIRAnalyst',
      role: 'Post-Implementation Intelligence',
      description: 'Automates benefits tracking, synthesizes lessons from project artifacts, analyzes stakeholder feedback, and generates comprehensive PIR reports. Identifies patterns across projects for organizational improvement.',
      capabilities: [
        'Automated benefits measurement vs business case',
        'Lessons learned extraction from documents',
        'Cross-project pattern analysis',
        'Stakeholder sentiment analysis from surveys',
        'PIR report generation with visualizations',
        'Technical debt assessment and prioritization',
        'Risk closeout recommendations',
        'Continuous improvement prioritization',
        'KPI dashboard generation',
        'Executive summary creation',
      ],
      codeFilename: 'PythonConfigpir_analyst_agent.py',
      code: `# Post-Implementation Review Analyst Agent
from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from pir_tools import (
    BenefitsTracker, SentimentAnalyzer,
    PatternDetector, ReportGenerator,
    DebtAssessor, RiskAnalyzer, KPICalculator
)

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Initialize specialized tools
benefits_tracker = BenefitsTracker(business_case_path="./business_case.json")
sentiment_analyzer = SentimentAnalyzer(model="sentiment-v2")
pattern_detector = PatternDetector(historical_pirs="./pir_archive/")
report_generator = ReportGenerator(template="enterprise")
debt_assessor = DebtAssessor(codebase_path="./src/")
risk_analyzer = RiskAnalyzer(risk_register="./risks.json")
kpi_calculator = KPICalculator(metrics_db="./metrics/")

pir_analyst = Agent(
    role="Post-Implementation Review Analyst",
    goal="Extract maximum learning and value from project completion",
    backstory="""Expert in project evaluation with deep 
    experience in benefits realization, lessons learned 
    facilitation, and organizational learning. Combines 
    quantitative analysis with qualitative insights to 
    deliver actionable recommendations.""",
    llm=llm,
    tools=[
        benefits_tracker, sentiment_analyzer, 
        pattern_detector, report_generator,
        debt_assessor, risk_analyzer, kpi_calculator
    ],
    verbose=True
)

async def generate_pir_report(project_data: dict) -> dict:
    """Generate comprehensive PIR with all phases."""
    
    task = Task(
        description=f"""
        Analyze project and generate full PIR:
        
        PHASE 1: Benefits Analysis
        - Compare actual vs business case targets
        - Calculate ROI, NPV, and payback period
        - Project future benefits trajectory
        - Identify gaps and remediation actions
        
        PHASE 2: Stakeholder Analysis
        - Analyze survey responses (NPS, CSAT)
        - Extract themes from qualitative feedback
        - Segment by stakeholder group
        - Identify satisfaction drivers and detractors
        
        PHASE 3: Lessons Learned
        - Extract lessons from all project artifacts
        - Categorize as keep/start/stop/celebrate
        - Assign owners and target dates
        - Cross-reference with historical PIRs
        
        PHASE 4: Technical Assessment
        - Inventory technical debt items
        - Assess risk register closeout status
        - Evaluate system health KPIs
        - Prioritize remediation backlog
        
        PHASE 5: Recommendations
        - Prioritize enhancement roadmap
        - Define handover readiness criteria
        - Generate executive summary
        - Create stakeholder-specific views
        
        Project: {project_data}
        """,
        agent=pir_analyst,
        expected_output="Comprehensive PIR report with all sections"
    )
    
    crew = Crew(
        agents=[pir_analyst], 
        tasks=[task],
        verbose=True
    )
    result = await crew.kickoff_async()
    
    return {
        "benefits_score": result.benefits_pct,
        "roi_actual": result.roi,
        "nps_score": result.nps,
        "lessons_count": len(result.lessons_learned),
        "lessons": result.lessons_learned,
        "tech_debt_items": result.debt_items,
        "risk_summary": result.risks,
        "recommendations": result.improvements,
        "executive_summary": result.summary,
        "report_url": result.report_path
    }`,
    },
    relatedPages: [
    ],
    prevPage: { title: '18.4 Wave Rollout Strategy', slug: 'wave-rollout' },
    nextPage: undefined,
  },
]

export default pages
