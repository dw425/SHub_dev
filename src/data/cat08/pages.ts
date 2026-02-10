import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'automation-maturity',
    badge: '📊 Page 8.1 • Strategic Framework',
    title: 'Automation Maturity Model',
    description: 'Five levels from manual processes to fully autonomous operations. Understand where you are, where you\'re going, and how to get there faster.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '5', label: 'Maturity Levels' },
      { value: 'L2-3', label: 'Typical Enterprise' },
      { value: '18-24', label: 'Months to Advance' },
      { value: '3x', label: 'ROI at Level 4+' },
    ],
    overview: {
      title: 'Understanding Automation Maturity',
      subtitle: 'Why maturity models matter for automation success',
      subsections: [
        {
          heading: 'The Journey from Manual to Autonomous',
          paragraphs: [
            'Organizations progress through distinct automation maturity levels, from basic task automation to fully autonomous AI-driven operations. Understanding your current level helps identify the right technologies, investments, and strategies for advancement. Most enterprises today sit at Level 2-3, having implemented RPA for individual tasks but not yet achieving intelligent, end-to-end process automation.',
            'Each maturity level represents a step change in capability, complexity, and value delivered. Moving up requires not just technology, but also process redesign, organizational change, and governance evolution. The goal isn\'t necessarily to reach Level 5—it\'s to reach the level that maximizes value for your specific context while building a foundation for continuous improvement.',
            'This framework helps you assess current state, identify gaps, prioritize investments, and build a realistic roadmap. It\'s based on patterns observed across hundreds of enterprise automation programs and aligns with industry standards from Gartner, Forrester, and major RPA vendors.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Industry Benchmarks',
      subtitle: 'Real-world examples of automation maturity leaders and laggards',
      columns: 2,
      cards: [
        {
          className: 'insight-0',
          borderColor: '#3B82F6',
          icon: '📊',
          title: 'Fortune 500 Average',
          description: 'Most large enterprises have deployed RPA but lack AI integration and end-to-end orchestration',
          examples: [],
        },
        {
          className: 'insight-1',
          borderColor: '#10B981',
          icon: '🏆',
          title: 'Top Quartile',
          description: 'Leaders operate 500+ bots with centralized orchestration and AI-powered decision making',
          examples: [],
        },
        {
          className: 'insight-2',
          borderColor: '#8B5CF6',
          icon: '💰',
          title: 'ROI Benchmark',
          description: 'Mature programs (L3+) achieve 3-4x ROI within 18 months of deployment',
          examples: [],
        },
        {
          className: 'insight-3',
          borderColor: '#F59E0B',
          icon: '⏱️',
          title: 'Hours per Bot',
          description: 'Well-designed bots save 2,500+ hours annually—equivalent to 1.2 FTEs',
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
        { icon: '📌', title: 'Understanding Automation Maturity', subtitle: '', description: 'Why maturity models matter for automation success', tags: [] },
        { icon: '📌', title: 'The Five Maturity Levels', subtitle: '', description: 'From manual operations to autonomous intelligence', tags: [] },
        { icon: '📌', title: 'Industry Benchmarks', subtitle: '', description: 'Real-world examples of automation maturity leaders and laggards', tags: [] },
        { icon: '📌', title: 'Maturity Assessment', subtitle: '', description: 'Evaluate your organization across four dimensions', tags: [] },
        { icon: '📌', title: 'Progression Roadmap', subtitle: '', description: 'Typical journey to advance maturity levels', tags: [] },
        { icon: '📌', title: 'Maturity Scorecard', subtitle: '', description: 'Sample scoring across dimensions', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for advancing automation maturity', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered maturity assessment', tags: [] },
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
      subtitle: 'Guidelines for advancing automation maturity',
      doItems: [
        'Start with high-volume, rule-based processes for quick wins',
        'Establish a Center of Excellence early in the journey',
        'Invest in process discovery before automation development',
        'Build reusable components and automation libraries',
        'Implement robust exception handling from the start',
        'Measure and communicate ROI consistently',
        'Enable citizen development with proper governance',
        'Plan for scale from the beginning',
      ],
      dontItems: [
        'Automate broken processes—fix first, then automate',
        'Skip the pilot phase and deploy at scale immediately',
        'Ignore change management and user adoption',
        'Build automations without considering maintenance',
        'Underestimate the need for IT infrastructure support',
        'Focus only on cost savings—consider quality and speed too',
        'Let individual teams build siloed automation capabilities',
        'Assume one level up is always the right next step',
      ],
    },
    agent: {
      avatar: '📊',
      name: 'MaturityAssessor',
      role: 'Automation Maturity Analyst',
      description: 'Conducts comprehensive maturity assessments through structured interviews, analyzes current state across all dimensions, identifies gaps, and generates personalized roadmaps for advancement.',
      capabilities: [
        'Structured maturity interviews',
        'Multi-dimensional scoring',
        'Gap analysis and prioritization',
        'Benchmark against industry peers',
        'Generate progression roadmaps',
        'Estimate investment requirements',
        'Track maturity over time',
        'Recommend next best actions',
      ],
      codeFilename: 'Assessment\n                        Roadmap\n                        maturity_assessor.py',
      code: `# maturity_assessor.py - Automation Maturity Agent
from crewai import Agent, Task
from pydantic import BaseModel

class MaturityScore(BaseModel):
    process: float
    technology: float  
    people: float
    governance: float
    overall: float
    level: int

class MaturityAssessor:
    dimensions = ["process", "technology", "people", "governance"]
    
    def assess(self, responses: dict) -> MaturityScore:
        """Calculate maturity scores from assessment responses."""
        scores = {}
        for dim in self.dimensions:
            scores[dim] = self._score_dimension(dim, responses)
        
        overall = sum(scores.values()) / len(scores)
        level = self._determine_level(overall)
        
        return MaturityScore(**scores, overall=overall, level=level)
    
    def generate_roadmap(self, current: MaturityScore, target: int):
        """Generate progression roadmap to target level."""
        gaps = self._identify_gaps(current, target)
        initiatives = self._prioritize_initiatives(gaps)
        timeline = self._estimate_timeline(initiatives)
        
        return {
            "current_level": current.level,
            "target_level": target,
            "gaps": gaps,
            "initiatives": initiatives,
            "timeline": timeline,
            "investment": self._estimate_investment(initiatives)
        }

# Agent definition
assessor_agent = Agent(
    role="Automation Maturity Assessor",
    goal="Evaluate and improve automation maturity",
    tools=[AssessmentSurvey(), GapAnalyzer(), 
           RoadmapGenerator(), BenchmarkTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 8.2', title: 'Bot Orchestration', description: 'Central command for automation fleets', slug: 'bot-orchestration' },
      { number: 'Page 8.3', title: 'Process Mining', description: 'Discover automation opportunities', slug: 'process-mining' },
      { number: 'Page 8.5', title: 'RPA Platforms', description: 'UiPath, AA, Blue Prism deep dives', slug: 'rpa-platforms' },
    ],
    prevPage: undefined,
    nextPage: { title: '8.2 Bot Orchestration', slug: 'bot-orchestration' },
  },
  {
    slug: 'bot-orchestration',
    badge: '🤖 Page 8.2 • Infrastructure',
    title: 'Bot Orchestration',
    description: 'Central command for managing automation fleets. Control attended and unattended bots, manage work queues, handle exceptions, and optimize performance at scale.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '99.9%', label: 'Uptime Target' },
      { value: '<5%', label: 'Exception Rate' },
      { value: '24/7', label: 'Bot Operations' },
      { value: '100+', label: 'Concurrent Bots' },
    ],
    overview: {
      title: 'Understanding Bot Orchestration',
      subtitle: 'The brain behind your automation fleet',
      subsections: [
        {
          heading: 'Why Orchestration Matters',
          paragraphs: [
            'Bot orchestration is the centralized management layer that coordinates all automation activities across an enterprise. As organizations scale from a handful of bots to hundreds, orchestration becomes critical for managing bot lifecycles, distributing workloads, handling failures, and ensuring automations run reliably at scale.',
            'Without proper orchestration, enterprises face bot sprawl: ungoverned automations running on individual machines, no visibility into what\'s running, competing for resources, and failing silently. Orchestration provides the control plane that transforms ad-hoc bots into a managed, enterprise-grade automation capability.',
            'Modern orchestration platforms provide work queue management (distributing tasks across available bots), scheduling (time and event-based triggers), exception handling (automated retries and escalation), credential management (secure storage for bot credentials), and analytics (performance monitoring and optimization insights).',
          ],
        },
      ],
    },
    concepts: {
      title: 'Orchestrator Control Room',
      subtitle: 'Real-time visibility and control over your bot fleet',
      columns: 2,
      cards: [
        {
          className: 'running',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'processing',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'running',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'idle',
          borderColor: '#F59E0B',
          icon: '💡',
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
        { icon: '📌', title: 'Understanding Bot Orchestration', subtitle: '', description: 'The brain behind your automation fleet', tags: [] },
        { icon: '📌', title: 'Attended vs Unattended Bots', subtitle: '', description: 'Two deployment models for different use cases', tags: [] },
        { icon: '📌', title: 'Orchestrator Control Room', subtitle: '', description: 'Real-time visibility and control over your bot fleet', tags: [] },
        { icon: '📌', title: 'Queue Management', subtitle: '', description: 'Work distribution and prioritization', tags: [] },
        { icon: '📌', title: 'Exception Handling', subtitle: '', description: 'Automated recovery and intelligent escalation', tags: [] },
        { icon: '📌', title: 'Scheduling & Triggers', subtitle: '', description: 'When and how automations start', tags: [] },
        { icon: '📌', title: 'Orchestration Platform Comparison', subtitle: '', description: 'Feature comparison across major RPA orchestrators', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective bot orchestration', tags: [] },
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
      subtitle: 'Guidelines for effective bot orchestration',
      doItems: [
        'Implement centralized orchestration before scaling beyond 10 bots',
        'Design queues with clear SLAs and priority rules',
        'Build comprehensive exception handling into every bot',
        'Use credential vaults—never hardcode passwords',
        'Monitor bot health proactively with alerts',
        'Maintain hot standby bots for critical processes',
        'Log everything for audit trails and debugging',
        'Separate dev, test, and prod environments',
      ],
      dontItems: [
        'Let individual teams run bots on their own machines',
        'Schedule all bots at the same time (thundering herd)',
        'Retry failed items indefinitely without limits',
        'Store credentials in bot code or config files',
        'Ignore exception patterns—they indicate problems',
        'Deploy directly to production without testing',
        'Run bots without proper logging and screenshots',
        'Assume bots will run forever without maintenance',
      ],
    },
    agent: {
      avatar: '🎛️',
      name: 'OrchestratorAgent',
      role: 'Bot Fleet Commander',
      description: 'Manages bot orchestration operations including queue optimization, exception triage, performance monitoring, and capacity planning. Uses AI to predict issues before they occur.',
      capabilities: [
        'Real-time fleet health monitoring',
        'Intelligent queue prioritization',
        'Automated exception triage and routing',
        'Predictive capacity planning',
        'Performance anomaly detection',
        'SLA breach prediction and alerting',
        'Bot utilization optimization',
        'Automated incident response',
      ],
      codeFilename: 'Fleet Manager\n                        Queue Optimizer\n                        orchestrator_agent.py',
      code: `# orchestrator_agent.py - Bot Fleet Management
from crewai import Agent, Task
from datetime import datetime, timedelta

class OrchestratorAgent:
    def __init__(self, orchestrator_api):
        self.api = orchestrator_api
        self.alert_threshold = 0.95  # 95% capacity
    
    def monitor_fleet(self) -> dict:
        """Real-time fleet health assessment."""
        bots = self.api.get_all_bots()
        queues = self.api.get_queue_stats()
        
        return {
            "running": len([b for b in bots if b.status == "running"]),
            "idle": len([b for b in bots if b.status == "idle"]),
            "error": len([b for b in bots if b.status == "error"]),
            "queue_depth": queues.total_pending,
            "capacity_pct": self._calc_capacity(bots, queues),
            "sla_at_risk": self._check_sla_risk(queues)
        }
    
    def triage_exception(self, exception: dict) -> str:
        """AI-powered exception classification and routing."""
        if exception["type"] == "system":
            return self._handle_system_exception(exception)
        elif exception["type"] == "business":
            return self._route_to_human_queue(exception)
        else:
            return self._auto_retry(exception)
    
    def optimize_queue(self, queue_id: str):
        """Reorder queue based on SLA and priority."""
        items = self.api.get_queue_items(queue_id)
        scored = [(self._calc_priority_score(i), i) for i in items]
        return sorted(scored, reverse=True)

# Agent definition
fleet_agent = Agent(
    role="Bot Fleet Commander",
    goal="Ensure optimal bot operations",
    tools=[FleetMonitor(), QueueOptimizer(), 
           ExceptionTriager(), CapacityPlanner()]
)`,
    },
    relatedPages: [
      { number: 'Page 8.1', title: 'Automation Maturity', description: 'Five-level maturity model', slug: 'automation-maturity' },
      { number: 'Page 8.3', title: 'Process Mining', description: 'Discover automation opportunities', slug: 'process-mining' },
      { number: 'Page 8.5', title: 'RPA Platforms', description: 'UiPath, AA, Blue Prism deep dives', slug: 'rpa-platforms' },
    ],
    prevPage: { title: '8.1 Automation Maturity Model', slug: 'automation-maturity' },
    nextPage: { title: '8.3 Process Mining', slug: 'process-mining' },
  },
  {
    slug: 'process-mining',
    badge: '⛏️ Page 8.3 • Discovery & Analysis',
    title: 'Process Mining',
    description: 'Discover how processes actually work by analyzing event logs from enterprise systems. Identify automation opportunities, bottlenecks, compliance issues, and root causes with data-driven insights that reveal the truth about your operations.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '383%', label: 'Avg ROI (Forrester)' },
      { value: '6 mo', label: 'Payback Period' },
      { value: '10-50x', label: 'More Variants Found' },
      { value: '$44M', label: 'Avg Benefits (Study)' },
    ],
    overview: {
      title: 'What is Process Mining?',
      subtitle: 'Data-driven process discovery and analysis',
      subsections: [
        {
          heading: 'From Event Logs to Process Intelligence',
          paragraphs: [
            'Process mining extracts knowledge from event logs recorded by enterprise systems. Every time someone creates an invoice, approves a purchase order, or updates a customer record, the system logs that event with a timestamp. Process mining tools analyze millions of these events to reconstruct how processes actually execute—not how they\'re documented, but how they truly work in practice.',
            'The power of process mining lies in its objectivity. Traditional process discovery relies on interviews and workshops where people describe what they think happens. Process mining shows what actually happens, revealing the gap between documented procedures and reality. Organizations typically discover 10-50x more process variants than expected, along with bottlenecks, rework loops, and compliance violations invisible to manual analysis.',
            'Process mining serves three primary purposes: Discovery (understanding current state), Conformance (comparing actual vs expected behavior), and Enhancement (identifying improvement opportunities). For automation programs, it\'s invaluable for finding the right processes to automate, quantifying the business case before investing in development, and ensuring automations are built on optimized processes rather than broken ones.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Process Mining Platforms',
      subtitle: 'Leading tools for process discovery and analysis',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'The dominant process mining platform with the most mature capabilities. Strong in SAP environments with pre-built connectors and process models for common scenarios.',
          examples: ['Execution Management System (EMS)', 'Pre-built SAP connectors', 'Action Engine for recommendations', 'Real-time process monitoring', 'ML-powered root cause analysis'],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Built into Power Platform, Process Advisor combines traditional process mining with task mining (recording user actions). Best for Microsoft-centric organizations.',
          examples: ['Power Platform integration', 'Task mining via desktop recorder', 'Dataverse data storage', 'Direct to Power Automate flows', 'Lower cost entry point'],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Acquired from ProcessGold, UiPath\'s solution connects process discovery directly to automation development. Ideal for organizations already using UiPath RPA.',
          examples: ['Direct UiPath Studio integration', 'Automation Hub connection', 'Task capture for attended processes', 'ROI calculation built-in', 'Combined licensing available'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Process Mining',
          description: 'Discover how processes actually work by analyzing event logs from enterprise systems. Identify automation opportunities, bottlenecks, compliance issues, and root causes with data-driven insights that',
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
        { icon: '📌', title: 'What is Process Mining?', subtitle: '', description: 'Data-driven process discovery and analysis', tags: [] },
        { icon: '📌', title: 'Process Mining Value Chain', subtitle: '', description: 'End-to-end journey from data to business impact', tags: [] },
        { icon: '📌', title: 'Enterprise Success Stories', subtitle: '', description: 'Real-world results from process mining implementations', tags: [] },
        { icon: '📌', title: 'How Process Mining Reveals Business Operations', subtitle: '', description: 'Three lenses for understanding how your business actually works', tags: [] },
        { icon: '📌', title: 'Event Log Structure', subtitle: '', description: 'The raw material for process mining', tags: [] },
        { icon: '📌', title: 'Process Maps & Variants', subtitle: '', description: 'Visualizing how processes actually execute', tags: [] },
        { icon: '📌', title: 'Conformance Checking', subtitle: '', description: 'Comparing actual execution against expected behavior', tags: [] },
        { icon: '📌', title: 'Root Cause Analysis', subtitle: '', description: 'Identifying why problems occur', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Celonis', vendor: '', description: 'The dominant process mining platform with the most mature capabilities. Strong in SAP environments with pre-built connectors and process models for common scenarios.', tags: [] },
        { icon: '🛠️', name: 'Microsoft Process Advisor', vendor: '', description: 'Built into Power Platform, Process Advisor combines traditional process mining with task mining (recording user actions). Best for Microsoft-centric organizations.', tags: [] },
        { icon: '🛠️', name: 'UiPath Process Mining', vendor: '', description: 'Acquired from ProcessGold, UiPath\'s solution connects process discovery directly to automation development. Ideal for organizations already using UiPath RPA.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for successful process mining initiatives',
      doItems: [
        'Start with a specific question or hypothesis to test',
        'Invest in data quality—it\'s 60% of the project effort',
        'Involve process owners early to validate findings',
        'Look for quick wins to build momentum and credibility',
        'Combine event log mining with task mining for full picture',
        'Use findings to redesign processes before automating',
        'Establish baseline metrics to measure improvement',
        'Plan for ongoing monitoring, not just one-time analysis',
      ],
      dontItems: [
        'Assume documented processes match reality',
        'Skip the data preparation phase—garbage in, garbage out',
        'Present raw findings without business context',
        'Automate broken processes—fix first, then automate',
        'Ignore the "long tail" of process variants',
        'Expect process mining alone to drive change',
        'Underestimate political resistance to transparency',
        'Treat it as a one-time project vs ongoing capability',
      ],
    },
    agent: {
      avatar: '⛏️',
      name: 'ProcessMiner',
      role: 'Process Discovery Analyst',
      description: 'Analyzes event logs to discover process flows, identify bottlenecks, score automation opportunities, perform root cause analysis, and generate actionable recommendations with quantified business cases.',
      capabilities: [
        'Event log ingestion and cleaning',
        'Process flow reconstruction',
        'Variant analysis and clustering',
        'Bottleneck identification',
        'Conformance checking',
        'Root cause analysis',
        'Automation opportunity scoring',
        'Natural language insights',
      ],
      codeFilename: 'Discovery\n                        Root Cause\n                        process_miner.py',
      code: `# process_miner.py - Process Mining Agent
from crewai import Agent, Task
import pm4py
from pm4py.algo.discovery.alpha import algorithm as alpha_miner

class ProcessMiner:
    def __init__(self, event_log_path: str):
        self.log = pm4py.read_xes(event_log_path)
        self.process_model = None
    
    def discover_process(self):
        """Mine process model from event log."""
        self.process_model = alpha_miner.apply(self.log)
        variants = pm4py.get_variants(self.log)
        
        return {
            "total_cases": len(self.log),
            "variant_count": len(variants),
            "activities": self._get_activities(),
            "avg_cycle_time": self._calc_cycle_time()
        }
    
    def find_bottlenecks(self):
        """Identify activities with longest wait times."""
        bottlenecks = []
        for activity in self._get_activities():
            wait_time = self._calc_wait_time(activity)
            if wait_time > self.threshold:
                bottlenecks.append({
                    "activity": activity,
                    "avg_wait": wait_time,
                    "impact": self._calc_impact(activity)
                })
        return sorted(bottlenecks, key=lambda x: x["impact"])
    
    def analyze_conformance(self, reference_model):
        """Check conformance against reference."""
        return pm4py.conformance_diagnostics_tbr(
            self.log, reference_model
        )

# Agent definition
miner_agent = Agent(
    role="Process Discovery Analyst",
    goal="Find automation opportunities",
    tools=[EventLogLoader(), ProcessDiscovery(), 
           BottleneckFinder(), ConformanceChecker()]
)`,
    },
    relatedPages: [
      { number: 'Page 8.1', title: 'Automation Maturity', description: 'Five-level maturity model', slug: 'automation-maturity' },
      { number: 'Page 8.2', title: 'Bot Orchestration', description: 'Managing automation fleets', slug: 'bot-orchestration' },
      { number: 'Page 8.5', title: 'RPA Platforms', description: 'UiPath, AA, Blue Prism', slug: 'rpa-platforms' },
    ],
    prevPage: { title: '8.2 Bot Orchestration', slug: 'bot-orchestration' },
    nextPage: { title: '8.4 Low-Code Automation Platforms', slug: 'lowcode-platforms' },
  },
  {
    slug: 'lowcode-platforms',
    badge: '⚡ Page 8.4 • Comprehensive Platform Guide',
    title: 'Low-Code Automation Platforms',
    description: 'A comprehensive guide to choosing, implementing, and governing API-based workflow automation platforms. From Microsoft Power Automate to Zapier to enterprise integration specialists like Workato—understand the trade-offs, calculate TCO, and select the right platform for your organization.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Understanding Low-Code Automation',
      subtitle: 'What these platforms are and why they matter',
      subsections: [
        {
          heading: 'Understanding Low-Code Automation',
          paragraphs: [
            'What these platforms are and why they matter',
            'Low-code automation platforms (also called iPaaS—Integration Platform as a Service) represent a fundamentally different approach to automation than traditional RPA. Instead of mimicking human actions on user interfaces by recording mouse clicks and keystrokes, these platforms connect applications through their native APIs—the programmatic interfaces that applications expose for machine-to-machine communication.',
            'This distinction has profound implications for reliability and maintenance. API-based integrations don\'t break when a button moves, a screen layout changes, or an application gets updated. They\'re significantly faster (no UI rendering required), more scalable (no need for virtual desktop infrastructure), and more secure (proper authentication protocols rather than stored passwords). When an application offers an API, using it is almost always preferable to UI automation.',
          ],
        },
        {
          heading: 'Market Landscape',
          paragraphs: [
            'Understanding the competitive landscape and vendor categories',
            'Enterprise Suite vendors have an unfair advantage within their ecosystems. Microsoft Power Automate is essentially free for M365 customers and integrates seamlessly with Outlook, Teams, SharePoint, and Dynamics. Salesforce Flow is built into every Salesforce org and understands CRM data models natively. If you\'re deeply committed to one of these platforms, their automation tools are the path of least resistance.',
            'Integration Specialists excel when you need cross-platform sophistication. Workato can orchestrate a process spanning SAP, Salesforce, Workday, and NetSuite with sophisticated error handling and data transformation. These platforms cost more but deliver capabilities the self-service tools can\'t match.',
          ],
        },
        {
          heading: 'Microsoft Power Platform',
          paragraphs: [
            'The default choice for Microsoft-centric organizations',
          ],
        },
      ],
    },
    concepts: {
      title: 'Microsoft Power Platform',
      subtitle: 'The default choice for Microsoft-centric organizations',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Microsoft Power Platform\n                        Low-code development suite integrated with Microsoft 365 and Azure\n                        \n                            Gartner Leader\n                            Forrester Leader\n                            Copilot Integration',
          description: '',
          examples: ['Cloud Flows: API-based automation triggered by events or schedules. The preferred approach when applications have APIs.', 'Desktop Flows: UI automation (RPA) for legacy applications without APIs. Records mouse clicks and keystrokes.', 'Business Process Flows: Guided step-by-step processes for users. Ensure consistent data entry and compliance.', 'Microsoft 365 Native: Seamless integration with Outlook, Teams, SharePoint, OneDrive.', 'Desktop RPA Included: No need for separate UiPath or AA license for basic desktop automation.'],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Salesforce Flow\n                        Declarative automation built into the Salesforce Platform\n                        \n                            CRM Native\n                            MuleSoft Parent\n                            Einstein GPT',
          description: '',
          examples: ['Record-Triggered: Run when records are created, updated, or deleted. Replacement for Process Builder.', 'Screen Flows: Interactive guided experiences for users. Multi-step wizards and data collection.', 'Schedule-Triggered: Run on a schedule. Batch processing and recurring tasks.', 'Flow Orchestration: Long-running multi-step processes with human tasks.', 'Einstein Next Best Action: AI-powered recommendations within flows.'],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Zapier\n                        Automation for everyone. Connect your apps and automate workflows.\n                        \n                            Largest App Library\n                            Easiest to Use\n                            AI Actions',
          description: 'Zapier\'s genius is radical simplicity. The "Zap" model (Trigger → Action) is immediately understandable. No training required.',
          examples: ['Trigger-action model anyone understands intuitively', 'Natural language app search—type what you want to do', 'Pre-built templates for thousands of common workflows', 'AI-powered suggestions for next steps', 'Per-task pricing scales poorly for high-volume scenarios'],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Workato\n                        The leading enterprise automation platform for IT and business teams\n                        \n                            Gartner Leader\n                            Enterprise iPaaS\n                            AI-Powered',
          description: '',
          examples: ['Recipe IQ: AI-powered suggestions from 17,000+ customer patterns.', 'Workbot: Conversational interface for Slack and Teams.', 'API Platform: Expose automations as APIs. Build internal API products.', 'On-Prem Agent: Secure connection to on-premise systems.', 'Embedded iPaaS: White-label for your products.'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Platform Comparison Matrix',
      subtitle: 'Side-by-side comparison across key dimensions',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Ease of Use', tagText: '★★★★☆', tagClass: 'tag-blue', bestFor: '★★★★☆', complexity: 'medium', rating: '★★★☆☆' },
        { icon: '🛠️', name: 'Enterprise Scale', tagText: '★★★★★', tagClass: 'tag-green', bestFor: '★★★☆☆', complexity: 'medium', rating: '★★★★★' },
        { icon: '🛠️', name: 'Connector Library', tagText: '1,000+', tagClass: 'tag-purple', bestFor: '1,800+', complexity: 'medium', rating: '200+ native' },
        { icon: '🛠️', name: 'Desktop RPA', tagText: '✓ Built-in', tagClass: 'tag-orange', bestFor: '✗ None', complexity: 'medium', rating: '✗ None' },
        { icon: '🛠️', name: 'AI/ML Built-in', tagText: '✓ AI Builder', tagClass: 'tag-pink', bestFor: '○ Basic', complexity: 'medium', rating: '✓ Einstein' },
        { icon: '🛠️', name: 'Governance Tools', tagText: 'Excellent', tagClass: 'tag-blue', bestFor: 'Basic', complexity: 'medium', rating: 'Good' },
        { icon: '🛠️', name: 'On-Premise Gateway', tagText: '✓ Data Gateway', tagClass: 'tag-green', bestFor: '✗ None', complexity: 'medium', rating: '○ Limited' },
        { icon: '🛠️', name: 'Free Tier', tagText: '✓ With M365', tagClass: 'tag-purple', bestFor: '✓ 1,000 ops', complexity: 'medium', rating: '✓ With SFDC' },
        { icon: '🛠️', name: 'Entry Price', tagText: '$15/user/mo', tagClass: 'tag-orange', bestFor: '$9/mo', complexity: 'medium', rating: 'Included' },
        { icon: '🛠️', name: 'Best For', tagText: 'M365 orgs', tagClass: 'tag-pink', bestFor: 'Power users', complexity: 'medium', rating: 'SFDC users' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Microsoft Power Platform\n                        Low-code development suite integrated with Microsoft 365 and Azure\n                        \n                            Gartner Leader\n                            Forrester Leader\n                            Copilot Integration', vendor: '', description: '', tags: ['Low-code development suite integrated with Microsoft 365 and Azure'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'If you\'re a Microsoft shop, start with Power Automate. Fighting your ecosystem wastes energy.',
        'Establish governance before scaling. The first 1,000 automations without governance become a nightmare.',
        'Use service accounts for shared flows. Personal credentials break when people leave.',
        'Document everything—naming conventions, descriptions, business context.',
        'Build error handling from the start. Every automation fails eventually.',
        'Test in non-production first. Dev/Test/Prod environments exist for a reason.',
      ],
      dontItems: [
        'Letting automations proliferate untracked. Shadow automation is as risky as shadow IT.',
        'Using personal credentials in shared flows. When that person leaves, everything breaks.',
        'Building complex logic without IT. Complex orchestration needs expertise.',
        'Ignoring licensing costs. Premium connectors, task overages, and capacity limits add up.',
        'Deploying directly to production. Testing catches errors before users do.',
        'Automating bad processes. A broken process just fails faster when automated.',
      ],
    },
    agent: {
      avatar: '⚡',
      name: 'IntegrationAdvisor',
      role: 'Low-Code Platform Specialist',
      description: 'Analyzes your technology ecosystem, requirements, and constraints to recommend the optimal automation platform. Designs integration patterns, estimates costs, and generates implementation roadmaps.',
      capabilities: [
      ],
      codeFilename: 'Platform Selector\n                        integration_advisor.py',
      code: `# integration_advisor.py - Platform Selection
from crewai import Agent, Task
from typing import Dict, List

class IntegrationAdvisor:
    """AI agent for low-code platform selection."""
    
    def __init__(self):
        self.platforms = {
            "power_automate": {
                "ecosystem": "microsoft",
                "ease": 4, "enterprise": 5
            },
            "zapier": {
                "ecosystem": "neutral",
                "ease": 5, "enterprise": 3
            },
            "workato": {
                "ecosystem": "neutral",
                "ease": 3, "enterprise": 5
            }
        }
    
    def recommend(self, reqs: Dict) -> List:
        """Score platforms against requirements."""
        scores = {}
        for p, meta in self.platforms.items():
            score = meta["ease"] + meta["enterprise"]
            scores[p] = score
        return sorted(scores.items(), 
                       key=lambda x: x[1], 
                       reverse=True)`,
    },
    relatedPages: [
      { number: 'Page 8.3', title: 'Process Mining', description: 'Discover automation opportunities with process discovery', slug: 'process-mining' },
      { number: 'Page 8.5', title: 'RPA Platforms', description: 'UiPath, Automation Anywhere, Blue Prism', slug: 'rpa-platforms' },
      { number: 'Page 8.6', title: 'Document Processing', description: 'IDP and AI-powered document extraction', slug: 'document-processing' },
    ],
    prevPage: { title: '8.3 Process Mining', slug: 'process-mining' },
    nextPage: { title: '8.5 RPA Platforms', slug: 'rpa-platforms' },
  },
  {
    slug: 'rpa-platforms',
    badge: '🔧 Page 8.5 • Desktop & UI Automation',
    title: 'RPA Platforms',
    description: 'A comprehensive guide to Robotic Process Automation platforms—UiPath, Automation Anywhere, Blue Prism, and Microsoft Power Automate Desktop. Understand when UI automation is the right choice, compare platform capabilities, and build a sustainable RPA practice.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '5', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Understanding RPA',
      subtitle: 'What RPA is, when to use it, and when to avoid it',
      subsections: [
        {
          heading: 'Understanding RPA',
          paragraphs: [
            'What RPA is, when to use it, and when to avoid it',
            'RPA automates tasks by mimicking human interactions with software. Rather than connecting through APIs (the approach used by iPaaS and low-code platforms), RPA bots interact with applications the same way humans do—clicking buttons, typing text, reading screens, moving files. This "surface-level" automation works with any application that has a user interface, regardless of whether it exposes APIs.',
            'The technology uses screen scraping, image recognition, and UI element identification to "see" what\'s on screen and interact with it. Modern RPA platforms combine these techniques with AI (Computer Vision, NLP, Document Understanding) to handle unstructured content and make decisions that previously required human judgment.',
          ],
        },
        {
          heading: 'Market Landscape',
          paragraphs: [
            'The competitive landscape of RPA platforms',
            'UiPath leads in market share and mindshare, with the most extensive feature set and largest community. They\'ve expanded beyond RPA into full "automation platform" territory with process mining, test automation, and AI capabilities.',
            'Automation Anywhere pioneered cloud-native RPA and has strong enterprise credentials. Their recent focus on generative AI integration positions them for the next wave of intelligent automation.',
          ],
        },
        {
          heading: 'UiPath',
          paragraphs: [
            'The market leader in enterprise RPA',
          ],
        },
      ],
    },
    concepts: {
      title: 'UiPath',
      subtitle: 'The market leader in enterprise RPA',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'UiPath\n                        The leading enterprise automation platform\n                        \n                            Gartner Leader\n                            Forrester Leader\n                            Autopilot AI',
          description: '',
          examples: ['Studio: Development environment for building automations. Studio X for citizen developers, Studio Pro for professionals.', 'Orchestrator: Centralized management, scheduling, monitoring, and analytics for all robots.', 'Robots: Attended (human-triggered), Unattended (scheduled/triggered), or Test robots.', 'Document Understanding: AI-powered extraction from invoices, receipts, forms.', 'Process Mining: Discover automation opportunities from system logs.'],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Automation Anywhere\n                        Cloud-native automation with generative AI\n                        \n                            Gartner Leader\n                            Cloud Native\n                            Automation Co-Pilot',
          description: '',
          examples: ['Automation 360: Cloud-native control room for managing automations.', 'Bot Creator: Development environment with recorder and visual designer.', 'Bot Runners: Attended and unattended bot execution.', 'IQ Bot: AI-powered document processing and data extraction.', 'Process Discovery: Automated process mining and task capture.'],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Blue Prism\n                        Secure, scalable intelligent automation (now part of SS&C)\n                        \n                            Gartner Leader\n                            Enterprise Focus\n                            SS&C Acquired',
          description: '',
          examples: ['Security & Governance: Built for regulated industries—banking, healthcare, government.', 'Centralized Control: All bot activity logged and auditable.', 'Object Reusability: Strong component library approach.', 'Blue Prism Cloud: SaaS offering for faster deployment.', 'Digital Exchange: Marketplace of pre-built assets.'],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Power Automate Desktop\n                        Free desktop automation for Windows users\n                        \n                            Free with Windows\n                            M365 Integration\n                            Copilot Actions',
          description: '',
          examples: ['Zero cost barrier: Free with Windows 11 and M365 E3/E5.', 'Microsoft integration: Native with Excel, Outlook, Teams, SharePoint.', 'Power Platform synergy: Combine with cloud flows and Power Apps.', 'Low learning curve: Accessible to citizen developers.', 'AI Builder: Document processing and AI capabilities.'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Platform Comparison',
      subtitle: 'Side-by-side comparison of RPA platforms',
      cards: [
        { icon: '🛠️', title: 'Market Position', subtitle: 'Leader', description: 'Niche', tags: ['Leader'] },
        { icon: '🛠️', title: 'Deployment', subtitle: 'Cloud + On-Prem', description: 'Desktop + Cloud', tags: ['Cloud + On-Prem'] },
        { icon: '🛠️', title: 'Attended RPA', subtitle: '★★★★★', description: '★★★★☆', tags: ['★★★★★'] },
        { icon: '🛠️', title: 'Unattended RPA', subtitle: '★★★★★', description: '★★★☆☆', tags: ['★★★★★'] },
        { icon: '🛠️', title: 'Document AI', subtitle: '★★★★★', description: '★★★☆☆', tags: ['★★★★★'] },
        { icon: '🛠️', title: 'Process Mining', subtitle: '✓ Built-in', description: '○ Process Advisor', tags: ['✓ Built-in'] },
        { icon: '🛠️', title: 'Test Automation', subtitle: '✓ Native', description: '✗ No', tags: ['✓ Native'] },
        { icon: '🛠️', title: 'Generative AI', subtitle: 'Autopilot', description: 'Copilot', tags: ['Autopilot'] },
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
        'Start with process standardization before automation—fix the process first.',
        'Build a Center of Excellence to govern, support, and scale the program.',
        'Design for exception handling—every automation will encounter unexpected scenarios.',
        'Create reusable components and libraries to accelerate future development.',
        'Monitor bot performance and business outcomes, not just technical metrics.',
        'Plan for maintenance—applications change, and bots break.',
      ],
      dontItems: [
        'Automating broken or unstable processes—garbage in, garbage out faster.',
        'Choosing RPA when an API integration would be more reliable and maintainable.',
        'Underestimating maintenance effort—plan for 25% of dev time ongoing.',
        'Deploying without proper error handling and logging.',
        'Letting citizen developers build without governance or standards.',
        'Expecting "set and forget"—RPA requires continuous attention.',
      ],
    },
    agent: {
      avatar: '🔧',
      name: 'RPAArchitect',
      role: 'RPA Platform Specialist',
      description: 'Analyzes your process requirements, technology ecosystem, and constraints to recommend the optimal RPA platform and architecture. Designs bot frameworks, estimates ROI, and creates implementation roadmaps.',
      capabilities: [
      ],
      codeFilename: 'Process Analyzer\n                        rpa_architect.py',
      code: `# rpa_architect.py - Process Analysis
from crewai import Agent, Task
from typing import Dict, List

class RPAArchitect:
    """AI agent for RPA platform selection."""
    
    def analyze_process(self, process: Dict) -> Dict:
        """Score process for RPA suitability."""
        score = 0
        
        # Rule-based = good for RPA
        if process["rule_based"]:
            score += 25
        
        # High volume = better ROI
        if process["volume"] > 100:
            score += 25
            
        # Stable process = lower maintenance
        if process["change_frequency"] == "low":
            score += 25
            
        # No API = RPA required
        if not process["api_available"]:
            score += 25
            
        return {
            "score": score,
            "recommendation": "RPA" if score >= 50 
                              else "API Integration"
        }`,
    },
    relatedPages: [
      { number: 'Page 8.4', title: 'Low-Code Platforms', description: 'API-based automation with Power Automate, Zapier, Workato', slug: 'lowcode-platforms' },
      { number: 'Page 8.6', title: 'Document Processing', description: 'IDP and AI-powered document extraction', slug: 'document-processing' },
      { number: 'Page 8.2', title: 'Bot Orchestration', description: 'Managing and scaling your bot workforce', slug: 'bot-orchestration' },
    ],
    prevPage: { title: '8.4 Low-Code Automation Platforms', slug: 'lowcode-platforms' },
    nextPage: undefined,
  },
]

registerPages('automation-rpa', pages)
export default pages
