import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'assessment',
    badge: '📋 Page 13.1',
    title: 'Assessment',
    description: 'Discovery, complexity scoring, and migration readiness analysis to plan and prioritize workloads for efficient migration execution.',
    accentColor: '#7C3AED',
    accentLight: '#A78BFA',
    metrics: [
      { value: '12,847', label: 'Objects Discovered' },
      { value: '85%', label: 'Auto-Migratable' },
      { value: '4.2', label: 'Avg Complexity' },
      { value: '6', label: 'Source Systems' },
    ],
    overview: {
      title: 'Assessment Overview',
      subtitle: 'Foundation for successful migration planning',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Every database object receives a complexity score from 1-10 based on weighted factors including SQL dialect usage, procedural code patterns, data types, and dependencies. Objects are then bucketed into four categories that determine the migration approach: automated conversion, semi-automated with review, assisted manual conversion, or full rewrite.',
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
          className: 'green',
          borderColor: '#3B82F6',
          icon: '✅',
          title: '',
          description: 'SQL syntax aligns well with target platform. Most SELECT, JOIN, and DML statements convert directly.',
          examples: [],
        },
        {
          className: 'blue',
          borderColor: '#10B981',
          icon: '📊',
          title: '',
          description: 'Most data types have direct mappings. Custom types and LOBs need special handling.',
          examples: [],
        },
        {
          className: 'yellow',
          borderColor: '#8B5CF6',
          icon: '🔗',
          title: '',
          description: 'Object dependencies partially documented. Some cross-schema references need resolution.',
          examples: [],
        },
        {
          className: 'red',
          borderColor: '#F59E0B',
          icon: '📄',
          title: '',
          description: 'Critical gap in technical documentation. Business logic embedded in code without explanation.',
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
        { icon: '📌', title: 'Assessment Overview', subtitle: '', description: 'Foundation for successful migration planning', tags: [] },
        { icon: '📌', title: 'Complexity Scoring', subtitle: '', description: 'Categorize objects by migration difficulty', tags: [] },
        { icon: '📌', title: 'Discovery Inventory', subtitle: '', description: 'Complete catalog of source system objects', tags: [] },
        { icon: '📌', title: 'Migration Readiness Score', subtitle: '', description: 'Multi-dimensional assessment of migration preparedness', tags: [] },
        { icon: '📌', title: 'Assessment Workflow', subtitle: '', description: 'Systematic process for comprehensive evaluation', tags: [] },
        { icon: '📌', title: 'Source Platform Analysis', subtitle: '', description: 'Assessment results by source system', tags: [] },
        { icon: '📌', title: 'Complexity Scoring Criteria', subtitle: '', description: 'Factors that determine migration difficulty', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assessment automation', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Oracle', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Teradata', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Hadoop', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'SQL Server', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Netezza', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Redshift', vendor: '', description: '', tags: [] },
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
      name: 'AssessmentAgent',
      role: 'Source System Discovery & Analysis',
      description: 'Automates the discovery and assessment of source database objects, scoring complexity and identifying migration blockers across heterogeneous platforms.',
      capabilities: [
        'Schema extraction and cataloging',
        'Code parsing and complexity scoring',
        'Dependency graph generation',
        'Blocker identification and reporting',
        'Readiness score calculation',
        'Wave planning recommendations',
      ],
      codeFilename: 'Python\n                            Tools\n                        \n                        assessment_agent.py',
      code: `# Assessment Agent with Discovery Tools
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Define assessment tools
schema_scanner = Tool(
    name="schema_scanner",
    description="Scans source database and extracts 
    all schema objects with metadata",
    func=scan_database_schema
)

code_analyzer = Tool(
    name="code_analyzer",
    description="Parses SQL/procedural code and 
    calculates complexity score",
    func=analyze_code_complexity
)

dependency_mapper = Tool(
    name="dependency_mapper",
    description="Maps object dependencies and 
    generates lineage graph",
    func=map_dependencies
)

blocker_detector = Tool(
    name="blocker_detector",
    description="Identifies incompatible features 
    that block automated migration",
    func=detect_blockers
)

# Create Assessment Agent
assessment_agent = Agent(
    role="Migration Assessment Specialist",
    goal="Discover and score all source objects 
    for migration readiness",
    backstory="""Expert database analyst skilled at 
    evaluating legacy systems for cloud migration. 
    Identifies complexity, dependencies, and blockers.""",
    llm=llm,
    tools=[schema_scanner, code_analyzer, 
           dependency_mapper, blocker_detector],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: undefined,
    nextPage: { title: '13.2 Conversion', slug: 'conversion' },
  },
  {
    slug: 'conversion',
    badge: '🔀 Page 13.2',
    title: 'Conversion',
    description: 'Automated SQL dialect transformation and code conversion pipelines for large-scale migration execution.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '85%', label: 'Auto-Convert Rate' },
      { value: '847K', label: 'Lines Converted' },
      { value: '234', label: 'Conversion Rules' },
      { value: '12', label: 'Source Dialects' },
    ],
    overview: {
      title: 'Conversion Overview',
      subtitle: 'Transforming source code to target platform syntax',
      subsections: [
        {
          heading: 'Conversion Overview',
          paragraphs: [
            'Transforming source code to target platform syntax',
            'Conversion is the core transformation engine of the migration factory. It takes source database objects—SQL queries, stored procedures, functions, and ETL jobs—and automatically transforms them into target platform syntax while preserving business logic and data integrity.',
            'The conversion process uses a combination of pattern-based rules, abstract syntax tree (AST) manipulation, and AI-assisted rewriting to achieve high automation rates. Objects are categorized by conversion complexity, with simple transformations fully automated and complex cases flagged for manual review.',
          ],
        },
        {
          heading: 'Conversion Pipeline',
          paragraphs: [
            'Five-stage automated transformation process',
            'The conversion pipeline processes source code through five distinct stages, each building on the previous. The architecture is designed for parallelization—thousands of objects can be processed simultaneously while maintaining dependency order and conflict resolution.',
            'Each stage produces artifacts that feed the next stage, with comprehensive logging and rollback capability. Failed conversions are automatically retried with alternative strategies before being flagged for manual review.',
          ],
        },
        {
          heading: 'Code Transformation',
          paragraphs: [
            'Side-by-side source and target comparison',
            'The transformation engine analyzes source code structure and applies intelligent conversions that preserve business logic while adapting to target platform idioms. Below is a real example showing how an Oracle PL/SQL procedure becomes a Databricks SQL function.',
            'Why this matters: Manual conversion of 1,923 stored procedures would take an estimated 7,700+ developer hours. Automated conversion with AI-assisted review reduces this to under 800 hours—a 90% time savings.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Conversion Overview',
      subtitle: 'Transforming source code to target platform syntax',
      columns: 2,
      cards: [
        {
          className: 'stat-0',
          borderColor: '#3B82F6',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'stat-1',
          borderColor: '#10B981',
          icon: '👁️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'stat-2',
          borderColor: '#8B5CF6',
          icon: '✏️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'stat-3',
          borderColor: '#F59E0B',
          icon: '⏳',
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
        { icon: '📌', title: 'Conversion Overview', subtitle: '', description: 'Transforming source code to target platform syntax', tags: [] },
        { icon: '📌', title: 'Conversion Pipeline', subtitle: '', description: 'Five-stage automated transformation process', tags: [] },
        { icon: '📌', title: 'Code Transformation', subtitle: '', description: 'Side-by-side source and target comparison', tags: [] },
        { icon: '📌', title: 'Dialect Mapping', subtitle: '', description: 'Function and syntax translation rules', tags: [] },
        { icon: '📌', title: 'Conversion Rules', subtitle: '', description: 'Pattern-based transformation categories', tags: [] },
        { icon: '📌', title: 'Conversion Progress', subtitle: '', description: 'Real-time conversion status by object type', tags: [] },
        { icon: '📌', title: 'Edge Cases & Manual Review', subtitle: '', description: 'Patterns requiring human intervention', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered code conversion automation', tags: [] },
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
      avatar: '🔀',
      name: 'ConversionAgent',
      role: 'Automated Code Transformation',
      description: 'Leverages LLMs and rule engines to automatically convert source database code to target platform syntax while preserving business logic and optimizing for performance.',
      capabilities: [
        'SQL dialect translation (12+ source dialects)',
        'Stored procedure conversion',
        'Function mapping and rewriting',
        'ETL pipeline transformation',
        'Performance optimization hints',
        'Edge case flagging for review',
        'Batch processing at scale',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        conversion_agent.py',
      code: `# Conversion Agent with SQL Transformation
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic
from sqlglot import transpile

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# SQL Transpiler Tool
sql_transpiler = Tool(
    name="sql_transpiler",
    description="Converts SQL between dialects using 
    rule-based transformation engine",
    func=lambda sql: transpile(
        sql, 
        read="oracle", 
        write="databricks"
    )[0]
)

# AI Rewriter for complex cases
ai_rewriter = Tool(
    name="ai_rewriter",
    description="Uses LLM to rewrite complex PL/SQL 
    patterns that rule engine can't handle",
    func=rewrite_with_llm
)

# Edge Case Detector
edge_detector = Tool(
    name="edge_detector",
    description="Identifies patterns requiring 
    manual review and flags for human attention",
    func=detect_edge_cases
)

conversion_agent = Agent(
    role="SQL Conversion Specialist",
    goal="Transform source SQL to target dialect 
    with maximum automation and accuracy",
    backstory="""Expert database engineer skilled at 
    converting legacy SQL across platforms while 
    preserving logic and optimizing performance.""",
    llm=llm,
    tools=[sql_transpiler, ai_rewriter, edge_detector],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: { title: '13.1 Assessment', slug: 'assessment' },
    nextPage: { title: '13.3 Validation', slug: 'validation' },
  },
  {
    slug: 'validation',
    badge: '✅ Page 13.3',
    title: 'Validation',
    description: 'Comprehensive testing and data reconciliation to ensure migration accuracy and business continuity.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '99.7%', label: 'Pass Rate' },
      { value: '24,847', label: 'Tests Executed' },
      { value: '100%', label: 'Data Match' },
      { value: '12', label: 'Open Defects' },
    ],
    overview: {
      title: 'Validation Overview',
      subtitle: 'Ensuring migration quality through comprehensive testing',
      subsections: [
        {
          heading: 'Validation Overview',
          paragraphs: [
            'Ensuring migration quality through comprehensive testing',
            'Validation is the quality gate that ensures converted code produces identical results to the source system. It encompasses multiple testing layers—from unit tests on individual objects to full system integration tests—combined with data reconciliation to verify row counts, checksums, and business rule compliance.',
            'The validation process runs continuously throughout the migration, catching regressions early and providing confidence for stakeholders. Automated test generation creates baseline tests from production query patterns, while AI-assisted test analysis identifies gaps in coverage.',
          ],
        },
        {
          heading: 'Test Pyramid',
          paragraphs: [
            'Layered validation strategy from unit to UAT',
            'The test pyramid ensures comprehensive coverage at every level. Unit tests validate individual SQL statements and functions, integration tests verify object interactions, system tests confirm end-to-end workflows, and UAT validates business acceptance criteria with real users.',
            'Each layer catches different types of defects. Unit tests are fast and numerous, catching syntax and logic errors early. Higher layers are slower but validate complex interactions and business requirements.',
          ],
        },
        {
          heading: 'Test Categories',
          paragraphs: [
            'Specialized test suites by validation type',
            'Tests are organized into functional categories, each with specialized assertions and expected outcomes. This organization enables targeted reruns when specific areas fail and provides clear reporting for different stakeholder groups.',
            'Each category has its own entry/exit criteria, with critical categories blocking deployment if any tests fail. Non-critical categories may proceed with documented exceptions and remediation plans.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Validation Overview',
      subtitle: 'Ensuring migration quality through comprehensive testing',
      columns: 2,
      cards: [
        {
          className: 'passed',
          borderColor: '#3B82F6',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'failed',
          borderColor: '#10B981',
          icon: '❌',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'skipped',
          borderColor: '#8B5CF6',
          icon: '⏭️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'running',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Data Comparison',
      subtitle: 'Row-level validation between source and target',
      cards: [
        { icon: '🛠️', title: 'TRANSACTION_HISTORY', subtitle: '847,293,412', description: '✅', tags: ['847,293,412'] },
        { icon: '🛠️', title: 'CUSTOMER_360', subtitle: '12,847,921', description: '✅', tags: ['12,847,921'] },
        { icon: '🛠️', title: 'ORDER_DETAILS', subtitle: '234,891,234', description: '✅', tags: ['234,891,234'] },
        { icon: '🛠️', title: 'PRODUCT_CATALOG', subtitle: '1,247,832', description: '✅', tags: ['1,247,832'] },
        { icon: '🛠️', title: 'EVENT_LOG', subtitle: '2,891,234,567', description: '✅', tags: ['2,891,234,567'] },
        { icon: '🛠️', title: 'INVENTORY_SNAPSHOT', subtitle: '89,234,123', description: '✅', tags: ['89,234,123'] },
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
      avatar: '✅',
      name: 'ValidationAgent',
      role: 'Automated Testing & Analysis',
      description: 'Generates test cases from production query patterns, executes parallel test suites, compares results between source and target, and analyzes failures to identify root causes and suggest fixes.',
      capabilities: [
        'Auto-generate tests from query logs',
        'Parallel test execution at scale',
        'Result comparison and diff analysis',
        'Data reconciliation automation',
        'Failure root cause analysis',
        'Coverage gap identification',
        'Regression detection',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        validation_agent.py',
      code: `# Validation Agent with Test Generation
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic
from databricks.sdk import WorkspaceClient

llm = ChatAnthropic(model="claude-sonnet-4-20250514")
dbx = WorkspaceClient()

# Test Generator Tool
test_generator = Tool(
    name="test_generator",
    description="Generates validation tests from 
    production query patterns and expected results",
    func=generate_tests_from_queries
)

# Data Comparator Tool
data_comparator = Tool(
    name="data_comparator",
    description="Compares query results between 
    source and target systems with diff analysis",
    func=compare_datasets
)

# Reconciliation Tool
reconciler = Tool(
    name="reconciler",
    description="Validates business metrics and 
    financial totals between systems",
    func=reconcile_metrics
)

# Failure Analyzer Tool
failure_analyzer = Tool(
    name="failure_analyzer",
    description="Analyzes test failures to identify 
    root causes and suggest remediation",
    func=analyze_failures
)

validation_agent = Agent(
    role="Migration Validation Specialist",
    goal="Ensure 100% data accuracy and functional 
    equivalence between source and target",
    backstory="""Expert QA engineer specializing in 
    data platform migrations with deep experience 
    in automated testing and reconciliation.""",
    llm=llm,
    tools=[test_generator, data_comparator, 
           reconciler, failure_analyzer],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: { title: '13.2 Conversion', slug: 'conversion' },
    nextPage: { title: '13.4', slug: 'cutover' },
  },
  {
    slug: 'cutover',
    badge: '',
    title: '',
    description: '',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Cutover Overview',
      subtitle: 'Orchestrated transition from legacy to modern platform',
      subsections: [
        {
          heading: 'Cutover Overview',
          paragraphs: [
            'Orchestrated transition from legacy to modern platform',
            'Cutover is the carefully orchestrated transition from the source data platform to the target Databricks environment. This is the culmination of weeks of assessment, conversion, and validation work—the moment when the new platform goes live and business operations switch over.',
            'Success requires meticulous planning, clear communication, and extensively tested rollback procedures. Every step is documented in the runbook, and a dedicated war room monitors execution in real-time. The goal is zero unplanned downtime and seamless business continuity.',
          ],
        },
        {
          heading: 'War Room Command Team',
          paragraphs: [
            'Key personnel for cutover execution',
            'The war room is staffed continuously from T-2 hours through post-cutover validation. Each lead has clear responsibilities and escalation authority. The Cutover Lead has final go/no-go authority, while each functional lead owns their domain\'s readiness and execution.',
          ],
        },
        {
          heading: 'Cutover Timeline',
          paragraphs: [
            'Hour-by-hour execution schedule',
            'The cutover is scheduled during the lowest-traffic weekend window. The war room opens 2 hours before cutover start for final preparations. Each phase has specific entry/exit criteria, and the timeline includes 30-minute buffer for unexpected issues. All times are PST.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Cutover Checklist',
      subtitle: 'Pre, during, and post-cutover task tracking',
      columns: 2,
      cards: [
        {
          className: 'checklist-0',
          borderColor: '#3B82F6',
          icon: '📋',
          title: 'Pre-Cutover (T-24h)',
          description: '',
          examples: [],
        },
        {
          className: 'checklist-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'During Cutover',
          description: '',
          examples: [],
        },
        {
          className: 'checklist-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: 'Post-Cutover',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Topic 4',
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
        { icon: '📌', title: 'Cutover Overview', subtitle: '', description: 'Orchestrated transition from legacy to modern platform', tags: [] },
        { icon: '📌', title: 'War Room Command Team', subtitle: '', description: 'Key personnel for cutover execution', tags: [] },
        { icon: '📌', title: 'Cutover Timeline', subtitle: '', description: 'Hour-by-hour execution schedule', tags: [] },
        { icon: '📌', title: 'Go/No-Go Decision', subtitle: '', description: 'Criteria evaluation for cutover approval', tags: [] },
        { icon: '📌', title: 'Execution Runbook', subtitle: '', description: 'Step-by-step commands with real-time status', tags: [] },
        { icon: '📌', title: 'Rollback Plan', subtitle: '', description: 'Emergency recovery procedures', tags: [] },
        { icon: '📌', title: 'Cutover Checklist', subtitle: '', description: 'Pre, during, and post-cutover task tracking', tags: [] },
        { icon: '📌', title: 'Communication Plan', subtitle: '', description: 'Stakeholder notifications throughout cutover', tags: [] },
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
      avatar: '🚀',
      name: 'CutoverAgent',
      role: 'Orchestration & Monitoring',
      description: 'Orchestrates cutover execution by automating runbook steps, monitoring system health in real-time, validating success criteria at each checkpoint, and triggering automated rollback if predefined thresholds are exceeded. Provides continuous status updates to the war room and stakeholders.',
      capabilities: [
        'Runbook step orchestration with dependency tracking',
        'Real-time health monitoring across source and target',
        'Automated validation checkpoint execution',
        'Rollback trigger detection and automated initiation',
        'Stakeholder notification via Slack, email, PagerDuty',
        'Timeline tracking with ETA updates',
        'Post-cutover metrics collection and reporting',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        cutover_agent.py',
      code: `# Cutover Orchestration Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic
from databricks.sdk import WorkspaceClient

llm = ChatAnthropic(model="claude-sonnet-4-20250514")
dbx = WorkspaceClient()

# Runbook step executor with validation
runbook_executor = Tool(
    name="runbook_executor",
    description="Executes runbook steps in sequence,
    validates success criteria before proceeding",
    func=execute_runbook_step
)

# Real-time system health monitor
health_monitor = Tool(
    name="health_monitor",
    description="Monitors cluster health, query 
    latency, error rates, and resource metrics",
    func=monitor_system_health
)

# Automated rollback trigger
rollback_trigger = Tool(
    name="rollback_trigger",
    description="Evaluates rollback conditions and
    initiates automated recovery if needed",
    func=evaluate_and_rollback
)

# Multi-channel notification system
notifier = Tool(
    name="notifier",
    description="Sends status updates via Slack,
    email, and PagerDuty based on severity",
    func=send_notification
)

cutover_agent = Agent(
    role="Cutover Orchestration Specialist",
    goal="Execute zero-downtime migration with
    automated monitoring and instant rollback",
    backstory="""Expert DevOps engineer with 
    extensive experience in zero-downtime 
    migrations and automated recovery.""",
    llm=llm,
    tools=[runbook_executor, health_monitor, 
           rollback_trigger, notifier],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: { title: '13.3 Validation', slug: 'validation' },
    nextPage: { title: '13.5 Wave Planning', slug: 'wave-planning' },
  },
  {
    slug: 'wave-planning',
    badge: '📊 Page 13.5',
    title: 'Wave Planning',
    description: 'Strategic sequencing of migration workloads for risk mitigation and resource optimization.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '5', label: 'Migration Waves' },
      { value: '4,231', label: 'Total Objects' },
      { value: '6 mo', label: 'Total Duration' },
      { value: '45%', label: 'Complete' },
    ],
    overview: {
      title: 'Wave Planning Overview',
      subtitle: 'Strategic approach to phased migration execution',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The wave dashboard provides a real-time view of migration progress across all five waves. The visual progress bar shows the relative size and status of each wave, while the stat cards below provide detailed metrics. This dashboard is updated continuously as objects complete each phase of the migration lifecycle—from assessment through cutover.',
            'Currently, Waves 1 and 2 are complete, representing 1,905 objects (45% of total scope). Wave 3 is actively in progress at 65% completion, with Waves 4 and 5 pending. The team is on track for the projected March 2026 completion, with Wave 3 cutover scheduled for early January.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Wave Dashboard',
      subtitle: 'Real-time progress across all migration waves',
      columns: 2,
      cards: [
        {
          className: 'wave1',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'wave2',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'wave3',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'wave4',
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
        { icon: '📌', title: 'Wave Planning Overview', subtitle: '', description: 'Strategic approach to phased migration execution', tags: [] },
        { icon: '📌', title: 'Wave Dashboard', subtitle: '', description: 'Real-time progress across all migration waves', tags: [] },
        { icon: '📌', title: 'Wave Details', subtitle: '', description: 'Scope, timing, and composition of each wave', tags: [] },
        { icon: '📌', title: 'Migration Timeline', subtitle: '', description: 'Gantt view of wave execution schedule', tags: [] },
        { icon: '📌', title: 'Wave Dependencies', subtitle: '', description: 'Inter-wave relationships and sequencing constraints', tags: [] },
        { icon: '📌', title: 'Prioritization Criteria', subtitle: '', description: 'Factors used to sequence objects into waves', tags: [] },
        { icon: '📌', title: 'Resource Allocation', subtitle: '', description: 'Team assignments and capacity planning per wave', tags: [] },
        { icon: '📌', title: 'Risk Assessment', subtitle: '', description: 'Wave-specific risks and mitigation strategies', tags: [] },
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
      name: 'WavePlannerAgent',
      role: 'Sequencing & Optimization',
      description: 'Analyzes object dependencies, calculates complexity scores, and recommends optimal wave assignments. Continuously monitors wave progress and suggests rebalancing when issues arise or scope changes. Integrates with assessment data for data-driven planning and provides real-time schedule impact analysis.',
      capabilities: [
        'Dependency graph analysis using NetworkX',
        'Multi-factor complexity scoring algorithm',
        'Constraint-based wave optimization',
        'Critical path identification',
        'Resource utilization forecasting',
        'Risk-based dynamic rebalancing',
        'Schedule impact what-if analysis',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        wave_planner_agent.py',
      code: `# Wave Planning Optimization Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic
import networkx as nx

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Dependency graph analyzer
dependency_analyzer = Tool(
    name="dependency_analyzer",
    description="Builds dependency graph from catalog
    metadata, identifies critical paths and 
    circular dependencies",
    func=analyze_dependencies
)

# Multi-factor complexity scorer
complexity_scorer = Tool(
    name="complexity_scorer",
    description="Calculates weighted complexity score
    for each object based on LOC, features,
    dependencies, and risk factors",
    func=score_complexity
)

# Constraint-based wave optimizer
wave_optimizer = Tool(
    name="wave_optimizer",
    description="Assigns objects to waves while
    respecting dependencies, resource limits,
    and timeline constraints",
    func=optimize_waves
)

# Resource utilization forecaster
resource_forecaster = Tool(
    name="resource_forecaster",
    description="Predicts resource needs per wave
    based on object characteristics and
    historical team velocity",
    func=forecast_resources
)

wave_planner_agent = Agent(
    role="Wave Planning Strategist",
    goal="Optimize wave assignments for minimum
    risk and maximum resource efficiency",
    backstory="""Expert program manager with deep
    experience in large-scale data migrations,
    dependency management, and critical path
    optimization.""",
    llm=llm,
    tools=[dependency_analyzer, complexity_scorer,
           wave_optimizer, resource_forecaster],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: { title: '13.4', slug: 'cutover' },
    nextPage: { title: '13.6 Tooling', slug: 'tooling' },
  },
  {
    slug: 'tooling',
    badge: '🛠️ Page 13.6',
    title: 'Tooling',
    description: 'The technology stack and automation infrastructure powering the Migration Factory.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '15+', label: 'Integrated Tools' },
      { value: '4', label: 'Custom Accelerators' },
      { value: '85%', label: 'Automation Rate' },
      { value: '3', label: 'Environments' },
    ],
    overview: {
      title: 'Tooling Overview',
      subtitle: 'Integrated technology stack for migration automation',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The tool stack is organized into six functional layers, each with specific responsibilities in the migration lifecycle. The bottom layers provide foundational infrastructure and data processing capabilities, while upper layers handle orchestration, validation, and user interaction. This layered architecture ensures separation of concerns and allows independent scaling of each layer.',
            'Tool selection follows strict criteria: enterprise-grade reliability, active community/vendor support, team familiarity, and proven integration patterns. We avoid bleeding-edge tools in favor of battle-tested solutions that won\'t introduce unnecessary risk to the migration program. All tools are deployed using Infrastructure as Code (Terraform) for reproducibility across environments.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Security & Compliance',
      subtitle: 'Data protection and access governance',
      columns: 2,
      cards: [
        {
          className: 'security-0',
          borderColor: '#3B82F6',
          icon: '🔑',
          title: 'Access Control',
          description: '',
          examples: [],
        },
        {
          className: 'security-1',
          borderColor: '#10B981',
          icon: '🛡️',
          title: 'Data Protection',
          description: '',
          examples: [],
        },
        {
          className: 'security-2',
          borderColor: '#8B5CF6',
          icon: '📋',
          title: 'Compliance',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Tooling',
          description: 'The technology stack and automation infrastructure powering the Migration Factory.',
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
        { icon: '📌', title: 'Tooling Overview', subtitle: '', description: 'Integrated technology stack for migration automation', tags: [] },
        { icon: '📌', title: 'Tool Stack Architecture', subtitle: '', description: 'Layered technology stack from infrastructure to observability', tags: [] },
        { icon: '📌', title: 'Platform Tools', subtitle: '', description: 'Core tools powering each migration phase with detailed guidance', tags: [] },
        { icon: '📌', title: 'Custom Accelerators', subtitle: '', description: 'Purpose-built tools for migration automation with detailed usage guidance', tags: [] },
        { icon: '📌', title: 'Integration Architecture', subtitle: '', description: 'How tools connect and data flows through the pipeline', tags: [] },
        { icon: '📌', title: 'Automation Pipelines', subtitle: '', description: 'CI/CD workflows for continuous migration', tags: [] },
        { icon: '📌', title: 'Environment Matrix', subtitle: '', description: 'Development, staging, and production configurations', tags: [] },
        { icon: '📌', title: 'Security & Compliance', subtitle: '', description: 'Data protection and access governance', tags: [] },
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
      avatar: '🛠️',
      name: 'ToolingAgent',
      role: 'Infrastructure & Orchestration',
      description: 'Monitors and optimizes the entire migration tooling stack. Coordinates between accelerators, manages resource allocation, and provides intelligent recommendations for process improvements based on historical patterns and real-time telemetry.',
      capabilities: [
        'Pipeline health monitoring and auto-remediation',
        'Resource utilization prediction and scaling',
        'Cross-tool coordination and sequencing',
        'Pattern recognition for new transpiler rules',
        'Anomaly detection and alerting',
        'Configuration drift detection',
        'Cost optimization recommendations',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        tooling_agent.py',
      code: `# Tooling Orchestration Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic
from databricks.sdk import WorkspaceClient

llm = ChatAnthropic(model="claude-sonnet-4-20250514")
dbx = WorkspaceClient()

# Pipeline health monitor
pipeline_monitor = Tool(
    name="pipeline_monitor",
    description="Monitors CI/CD pipeline health,
    detects failures, triggers remediation",
    func=monitor_pipelines
)

# Resource optimizer
resource_optimizer = Tool(
    name="resource_optimizer",
    description="Analyzes cluster utilization,
    recommends scaling adjustments",
    func=optimize_resources
)

# Tool coordinator
tool_coordinator = Tool(
    name="tool_coordinator",
    description="Orchestrates actions across
    crawler, transpiler, validator",
    func=coordinate_tools
)

tooling_agent = Agent(
    role="Migration Infrastructure Specialist",
    goal="Ensure tooling operates at peak
    efficiency with minimal intervention",
    backstory="""Expert DevOps engineer with deep
    experience in data platform automation
    and CI/CD optimization.""",
    llm=llm,
    tools=[pipeline_monitor, resource_optimizer,
           tool_coordinator],
    verbose=True
)`,
    },
    relatedPages: [
    ],
    prevPage: { title: '13.5 Wave Planning', slug: 'wave-planning' },
    nextPage: undefined,
  },
]

export default pages
