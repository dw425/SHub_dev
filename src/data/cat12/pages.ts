import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'cloud-providers',
    badge: '🏢 Page 12.1',
    title: 'Cloud Providers',
    description: 'Deep dive into AWS, Microsoft Azure, and Google Cloud Platform. Understand their services, strengths, pricing models, and when to choose each provider for your workloads.',
    accentColor: '#0EA5E9',
    accentLight: '#38BDF8',
    metrics: [
      { value: '3', label: 'Hyperscalers' },
      { value: '66%', label: 'Combined Market Share' },
      { value: '500+', label: 'Total Services' },
      { value: '100+', label: 'Global Regions' },
    ],
    overview: {
      title: 'Pricing Models',
      subtitle: 'Understanding how cloud providers charge',
      subsections: [
        {
          heading: 'AWS Unique Pricing',
          paragraphs: [
            'Savings Plans: Flexible commitment covering EC2, Fargate, and Lambda usage with up to 72% savings.',
            'Spot Fleet: Automated spot instance management across multiple pools for maximum availability.',
          ],
        },
        {
          heading: 'Azure Unique Pricing',
          paragraphs: [
            'Hybrid Benefit: Use existing Windows Server/SQL licenses in cloud for up to 40% savings.',
            'Dev/Test Pricing: Reduced rates for development and testing workloads.',
          ],
        },
        {
          heading: 'GCP Unique Pricing',
          paragraphs: [
            'Sustained Use Discounts: Automatic discounts (up to 30%) just for running VMs 25%+ of month—no commitment needed. Per-Second Billing: All compute billed per-second with 1-minute minimum.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Provider Selection Guide',
      subtitle: 'When to choose each cloud provider',
      columns: 2,
      cards: [
        {
          className: 'aws',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Choose AWS When...',
          description: '',
          examples: ['You need the broadest service catalog', 'Global scale with maximum coverage', 'Serverless/event-driven is primary pattern', 'Extensive marketplace integrations needed', 'Team has existing AWS expertise'],
        },
        {
          className: 'azure',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Choose Azure When...',
          description: '',
          examples: ['You\'re a Microsoft shop (Windows, .NET, M365)', 'Hybrid cloud with on-prem is essential', 'Enterprise identity (Entra ID) integration', 'Government/compliance requirements', 'Leverage existing Microsoft licensing'],
        },
        {
          className: 'gcp',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Choose GCP When...',
          description: '',
          examples: ['Data analytics/warehousing (BigQuery) core', 'Best-in-class Kubernetes (GKE) needed', 'AI/ML workloads are significant', 'Transparent, predictable pricing matters', 'Low-latency global networking critical'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Cloud Providers',
          description: 'Deep dive into AWS, Microsoft Azure, and Google Cloud Platform. Understand their services, strengths, pricing models, and when to choose each provider for your workloads.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Service Comparison',
      subtitle: 'Equivalent services across providers',
      cards: [
        { icon: '🛠️', title: 'Virtual Machines', subtitle: 'EC2', description: 'Compute Engine', tags: ['EC2'] },
        { icon: '🛠️', title: 'Object Storage', subtitle: 'S3', description: 'Cloud Storage', tags: ['S3'] },
        { icon: '🛠️', title: 'Block Storage', subtitle: 'EBS', description: 'Persistent Disk', tags: ['EBS'] },
        { icon: '🛠️', title: 'Serverless Functions', subtitle: 'Lambda', description: 'Cloud Functions', tags: ['Lambda'] },
        { icon: '🛠️', title: 'Kubernetes', subtitle: 'EKS', description: 'GKE', tags: ['EKS'] },
        { icon: '🛠️', title: 'Container Registry', subtitle: 'ECR', description: 'Artifact Registry', tags: ['ECR'] },
        { icon: '🛠️', title: 'Managed SQL', subtitle: 'RDS', description: 'Cloud SQL', tags: ['RDS'] },
        { icon: '🛠️', title: 'NoSQL Document', subtitle: 'DynamoDB', description: 'Firestore', tags: ['DynamoDB'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Google Cloud Platform', vendor: '', description: 'Data analytics leader • Kubernetes creators', tags: [] },
        { icon: '🛠️', name: 'Google Cloud Platform', vendor: '', description: 'Data analytics leader • Kubernetes creators', tags: [] },
        { icon: '🛠️', name: 'Core Services', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: '✓ Strengths', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: '⚠ Considerations', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Largest service catalog (200+ services)',
        'Most extensive global infrastructure',
        'Mature serverless ecosystem (Lambda pioneer)',
        'Best documentation and community support',
        'Strong enterprise adoption and case studies',
        'Comprehensive compliance certifications',
        'Seamless Microsoft 365 / Office integration',
        'Best hybrid cloud solution (Azure Arc, Stack)',
        'Enterprise identity leadership (Entra ID)',
        'Strong .NET and Visual Studio support',
        'Most regions globally (60+ regions)',
        'Government and compliance strength',
        'BigQuery - best serverless data warehouse',
        'GKE - best managed Kubernetes (creators of K8s)',
        'AI/ML leadership with Vertex AI and TPUs',
        'Global network backbone (lowest latency)',
        'Competitive and transparent pricing',
        'Sustained use discounts (automatic)',
      ],
      dontItems: [
        'Complex pricing across many services',
        'Steep learning curve for new users',
        'Console UI can be overwhelming',
        'Premium pricing vs. competitors',
        'Requires expertise to optimize costs',
        'Less integrated than Azure for Microsoft shops',
        'Service naming frequently changes',
        'Documentation can lag new features',
        'Portal performance issues at scale',
        'Some services less mature than AWS equivalents',
        'Linux/open-source ecosystem not as deep',
        'Complex licensing for enterprise features',
        'Smaller enterprise footprint than AWS/Azure',
        'Fewer compliance certifications in some regions',
        'Less mature enterprise support programs',
        'Smaller partner ecosystem',
        'Product discontinuation concerns',
        'Less intuitive IAM model',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '☁️ CloudAdvisor',
      role: 'Cloud Strategy Advisor',
      description: 'Analyzes workload requirements, existing technology stack, team expertise, and business constraints to recommend optimal cloud provider strategy. Compares pricing, services, and capabilities across AWS, Azure, and GCP.',
      capabilities: [
        'Workload-to-provider matching',
        'Service equivalency mapping',
        'Total cost of ownership analysis',
        'Multi-cloud strategy assessment',
        'Compliance requirement matching',
      ],
      codeFilename: 'cloud_advisor_agent.py',
      code: `from crewai import Agent, Task, Crew

# Initialize provider analysis tools
aws_pricing = AWSPricingTool()
azure_pricing = AzurePricingTool()
gcp_pricing = GCPPricingTool()

# Cloud Advisor Agent
cloud_advisor = Agent(
    role="Cloud Strategy Advisor",
    goal="""Analyze requirements and recommend 
    optimal cloud provider strategy.""",
    tools=[aws_pricing, azure_pricing, gcp_pricing],
    verbose=True
)

# Provider Analysis Task
analysis_task = Task(
    description="""
    1. Analyze workload requirements
    2. Map required services across providers
    3. Assess compliance requirements
    4. Calculate TCO across providers
    5. Provide recommendation with rationale
    """,
    agent=cloud_advisor
)

crew = Crew(agents=[cloud_advisor], tasks=[analysis_task])`,
    },
    relatedPages: [
      { number: '', title: 'Architecture Patterns', description: 'Multi-region, microservices, serverless reference architectures', slug: 'architecture-patterns' },
      { number: '', title: 'Migration Strategies', description: '6Rs framework, wave planning, and assessment tools', slug: 'migration-strategies' },
      { number: '', title: 'Cost Optimization', description: 'FinOps practices, reserved instances, and rightsizing', slug: 'cost-optimization' },
    ],
    prevPage: undefined,
    nextPage: { title: '12.2 Architecture Patterns', slug: 'architecture-patterns' },
  },
  {
    slug: 'architecture-patterns',
    badge: '🏗️ Page 12.2',
    title: 'Architecture Patterns',
    description: 'Design scalable, resilient, and cost-effective cloud architectures. From multi-region deployments to serverless event-driven systems, master the patterns that power modern cloud applications.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '6', label: 'Core Patterns' },
      { value: '99.99%', label: 'Multi-Region SLA' },
      { value: '60%', label: 'Cost Savings Possible' },
      { value: '5', label: 'Well-Architected Pillars' },
    ],
    overview: {
      title: 'Understanding Cloud Architecture',
      subtitle: 'Foundational concepts for building in the cloud',
      subsections: [
        {
          heading: 'Why Patterns Matter',
          paragraphs: [
            'Cloud architecture patterns are proven solutions to common challenges. They encode best practices from thousands of implementations, helping teams avoid pitfalls and build systems that scale.',
            'The right pattern depends on your requirements: availability needs, data consistency, latency sensitivity, cost constraints, and team expertise.',
          ],
        },
        {
          heading: 'Key Principles',
          paragraphs: [
            'Design for Failure: Assume everything fails. Build redundancy and automatic recovery into every layer.',
            'Decouple Components: Use queues, events, and APIs to reduce dependencies between services.',
            'Automate Everything: Infrastructure as code, CI/CD, auto-scaling—remove manual steps.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Architecture Patterns',
      subtitle: 'Six fundamental patterns for cloud-native systems',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🌍',
          title: '',
          description: 'Deploy across multiple geographic regions for high availability, disaster recovery, and reduced latency for global users.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔲',
          title: '',
          description: 'Decompose applications into small, independently deployable services that communicate via APIs or messaging.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '⚡',
          title: '',
          description: 'Run code without managing servers. Pay only for execution time. Auto-scales from zero to massive throughput.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📨',
          title: '',
          description: 'Components communicate through events via message brokers. Enables loose coupling and async processing.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Microservices Architecture',
      subtitle: 'Build independently deployable services',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Deployment', tagText: 'All-or-nothing', tagClass: 'tag-blue', bestFor: 'Independent per service', complexity: 'medium', rating: 'Independent per service' },
        { icon: '🛠️', name: 'Scaling', tagText: 'Scale entire app', tagClass: 'tag-green', bestFor: 'Scale individual services', complexity: 'medium', rating: 'Scale individual services' },
        { icon: '🛠️', name: 'Technology', tagText: 'Single stack', tagClass: 'tag-purple', bestFor: 'Polyglot (best tool per service)', complexity: 'medium', rating: 'Polyglot (best tool per service)' },
        { icon: '🛠️', name: 'Data', tagText: 'Shared database', tagClass: 'tag-orange', bestFor: 'Database per service', complexity: 'medium', rating: 'Database per service' },
        { icon: '🛠️', name: 'Team Structure', tagText: 'Functional silos', tagClass: 'tag-pink', bestFor: 'Cross-functional product teams', complexity: 'medium', rating: 'Cross-functional product teams' },
        { icon: '🛠️', name: 'Complexity', tagText: 'In the codebase', tagClass: 'tag-blue', bestFor: 'In the infrastructure', complexity: 'medium', rating: 'In the infrastructure' },
        { icon: '🛠️', name: 'Testing', tagText: 'Easier E2E testing', tagClass: 'tag-green', bestFor: 'Requires contract testing', complexity: 'medium', rating: 'Requires contract testing' },
        { icon: '🛠️', name: 'Best For', tagText: 'Small teams, simple domains', tagClass: 'tag-purple', bestFor: 'Large teams, complex domains', complexity: 'medium', rating: 'Large teams, complex domains' },
        { icon: '🛠️', name: 'Global users, low latency', tagText: 'Multi-Region Active-Active', tagClass: 'tag-orange', bestFor: 'Serve users from nearest region', complexity: 'medium', rating: 'Serve users from nearest region' },
        { icon: '🛠️', name: 'Disaster recovery', tagText: 'Multi-Region Active-Passive', tagClass: 'tag-pink', bestFor: 'Failover capability, lower cost', complexity: 'medium', rating: 'Failover capability, lower cost' },
        { icon: '🛠️', name: 'Independent team scaling', tagText: 'Microservices', tagClass: 'tag-blue', bestFor: 'Teams deploy independently', complexity: 'medium', rating: 'Teams deploy independently' },
        { icon: '🛠️', name: 'Rapid feature iteration', tagText: 'Microservices + CI/CD', tagClass: 'tag-green', bestFor: 'Deploy without coordinating', complexity: 'medium', rating: 'Deploy without coordinating' },
        { icon: '🛠️', name: 'Variable/spiky traffic', tagText: 'Serverless', tagClass: 'tag-purple', bestFor: 'Auto-scale to zero, pay-per-use', complexity: 'medium', rating: 'Auto-scale to zero, pay-per-use' },
        { icon: '🛠️', name: 'Event processing', tagText: 'Event-Driven + Serverless', tagClass: 'tag-orange', bestFor: 'React to events, loose coupling', complexity: 'medium', rating: 'React to events, loose coupling' },
        { icon: '🛠️', name: 'Legacy integration', tagText: 'Hybrid Cloud', tagClass: 'tag-pink', bestFor: 'Connect on-prem to cloud', complexity: 'medium', rating: 'Connect on-prem to cloud' },
        { icon: '🛠️', name: 'Unified analytics', tagText: 'Data Lakehouse', tagClass: 'tag-blue', bestFor: 'BI + ML on same platform', complexity: 'medium', rating: 'BI + ML on same platform' },
        { icon: '🛠️', name: 'Simple, small team', tagText: 'Modular Monolith', tagClass: 'tag-green', bestFor: 'Lower complexity, faster to start', complexity: 'medium', rating: 'Lower complexity, faster to start' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Security', vendor: '', description: 'Protect data, systems, and assets through risk assessment and mitigation strategies', tags: [] },
        { icon: '🛠️', name: 'Reliability', vendor: '', description: 'Recover from failures and meet demand through distributed design', tags: [] },
        { icon: '🛠️', name: 'Performance', vendor: '', description: 'Use resources efficiently and maintain performance as demand changes', tags: [] },
        { icon: '🛠️', name: 'Cost Optimization', vendor: '', description: 'Avoid unnecessary costs and maximize value from cloud spend', tags: [] },
        { icon: '🛠️', name: 'Operations', vendor: '', description: 'Run and monitor systems to deliver business value continuously', tags: [] },
        { icon: '🛠️', name: 'Sustainability', vendor: '', description: 'Minimize environmental impact and maximize resource efficiency', tags: [] },
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
      avatar: '🤖',
      name: '🏗️ ArchitectAgent',
      role: 'Cloud Solutions Architect',
      description: 'Analyzes requirements and generates cloud architecture designs. Creates infrastructure diagrams, Terraform code, and cost estimates based on workload characteristics and constraints.',
      capabilities: [
        'Requirements analysis',
        'Architecture diagram generation',
        'Terraform/IaC code generation',
        'Cost estimation',
        'Well-Architected review',
      ],
      codeFilename: 'architect_agent.py',
      code: `from crewai import Agent, Task, Crew

# Architecture design tools
diagram_tool = DiagramGeneratorTool()
terraform_tool = TerraformGeneratorTool()
cost_tool = CloudCostEstimatorTool()
wa_tool = WellArchitectedReviewTool()

# Architect Agent
architect = Agent(
    role="Cloud Solutions Architect",
    goal="""Design optimal cloud architectures
    based on requirements, generate IaC code,
    and ensure Well-Architected compliance.""",
    tools=[diagram_tool, terraform_tool, 
           cost_tool, wa_tool],
    verbose=True
)

# Architecture Design Task
design_task = Task(
    description="""
    1. Analyze workload requirements
    2. Select appropriate architecture pattern
    3. Design component topology
    4. Generate architecture diagram
    5. Create Terraform modules
    6. Estimate monthly costs
    7. Review against Well-Architected
    """,
    agent=architect
)

crew = Crew(agents=[architect], tasks=[design_task])`,
    },
    relatedPages: [
      { number: '', title: 'Cloud Providers', description: 'AWS, Azure, GCP services and comparison', slug: 'cloud-providers' },
      { number: '', title: 'Migration Strategies', description: '6Rs framework and migration execution', slug: 'migration-strategies' },
      { number: '', title: 'Compute & Containers', description: 'Kubernetes, Docker, and serverless compute', slug: 'compute-containers' },
    ],
    prevPage: { title: '12.1 Cloud Providers', slug: 'cloud-providers' },
    nextPage: { title: '12.3 Migration Strategies', slug: 'migration-strategies' },
  },
  {
    slug: 'migration-strategies',
    badge: '🚀 Page 12.3',
    title: 'Migration Strategies',
    description: 'Plan and execute successful cloud migrations. From assessment to cutover, master the 6 R\'s framework, wave planning, and tools that ensure migrations succeed on time and budget.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '6', label: 'Migration Strategies (R\'s)' },
      { value: '70%', label: 'Migrations Delayed' },
      { value: '3-5', label: 'Waves Typical' },
      { value: '30%', label: 'Avg Cost Savings' },
    ],
    overview: {
      title: 'Migration Fundamentals',
      subtitle: 'Key concepts for successful cloud migrations',
      subsections: [
        {
          heading: 'Why Migrations Fail',
          paragraphs: [
            'Inadequate Assessment: Underestimating dependencies, technical debt, and complexity leads to delays and budget overruns.',
            'Big Bang Approach: Trying to migrate everything at once increases risk. Phased waves reduce exposure.',
            'Ignoring People: Technical migration is easy compared to change management. Train teams early.',
          ],
        },
        {
          heading: 'Success Factors',
          paragraphs: [
            'Executive Sponsorship: Migrations need top-down support and clear business outcomes tied to cloud adoption.',
            'Application Rationalization: Don\'t migrate everything. Retire unused apps, consolidate duplicates first.',
            'Automation First: Manual migrations don\'t scale. Invest in tooling and repeatable processes.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Migration Assessment',
      subtitle: 'What to evaluate before migrating',
      columns: 2,
      cards: [
        {
          className: 'checklist-0',
          borderColor: '#3B82F6',
          icon: '🖥️',
          title: 'Technical Assessment',
          description: '',
          examples: ['Current server inventory (CPU, RAM, storage)', 'Operating system versions and patch levels', 'Application dependencies and integrations', 'Network topology and bandwidth requirements', 'Database types, sizes, and replication needs'],
        },
        {
          className: 'checklist-1',
          borderColor: '#10B981',
          icon: '💼',
          title: 'Business Assessment',
          description: '',
          examples: ['Business criticality (Tier 1/2/3)', 'Downtime tolerance and maintenance windows', 'Compliance and data residency requirements', 'Current and projected costs (TCO)', 'Business owner and stakeholder identification'],
        },
        {
          className: 'checklist-2',
          borderColor: '#8B5CF6',
          icon: '🔒',
          title: 'Security Assessment',
          description: '',
          examples: ['Data classification (PII, PHI, financial)', 'Encryption requirements (at-rest, in-transit)', 'Authentication and access control needs', 'Compliance frameworks (SOC 2, HIPAA, PCI)', 'Network segmentation requirements'],
        },
        {
          className: 'checklist-3',
          borderColor: '#F59E0B',
          icon: '🔗',
          title: 'Dependency Mapping',
          description: '',
          examples: ['Upstream systems (data sources)', 'Downstream systems (consumers)', 'Shared databases and storage', 'API integrations and protocols', 'Batch job schedules and dependencies'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Migration Risk Management',
      subtitle: 'Identify and mitigate common migration risks',
      cards: [
        { icon: '🛠️', title: 'Technical', subtitle: 'Hidden dependencies, incompatible OS versions, performance degradation', description: 'Thorough discovery, parallel testing, performance baselines', tags: ['Hidden dependencies, incompatible OS versions, performance degradation'] },
        { icon: '🛠️', title: 'Data', subtitle: 'Data loss, corruption, sync failures, extended replication times', description: 'Validated backups, checksums, incremental sync, rollback plans', tags: ['Data loss, corruption, sync failures, extended replication times'] },
        { icon: '🛠️', title: 'Security', subtitle: 'Misconfigured firewalls, exposed data, compliance violations', description: 'Security reviews, penetration testing, compliance audits', tags: ['Misconfigured firewalls, exposed data, compliance violations'] },
        { icon: '🛠️', title: 'Business', subtitle: 'Extended downtime, user disruption, missed SLAs', description: 'Maintenance windows, phased rollouts, communication plans', tags: ['Extended downtime, user disruption, missed SLAs'] },
        { icon: '🛠️', title: 'Resource', subtitle: 'Skill gaps, team burnout, competing priorities', description: 'Training, managed services, realistic timelines', tags: ['Skill gaps, team burnout, competing priorities'] },
        { icon: '🛠️', title: 'Cost', subtitle: 'Budget overruns, dual-running costs, license surprises', description: 'Detailed TCO, contingency budgets, license audits', tags: ['Budget overruns, dual-running costs, license surprises'] },
      ],
    },
    tools: {
      title: 'Migration Tools',
      subtitle: 'Provider and third-party migration solutions',
      items: [
        { icon: '🟠', name: 'AWS MGN', vendor: '', description: 'Automated lift-and-shift migrations with continuous replication. Minimal downtime cutovers.', tags: [] },
        { icon: '🔵', name: 'Azure Migrate', vendor: '', description: 'Discovery, assessment, and migration hub. Server, database, and app migration tools.', tags: [] },
        { icon: '🔷', name: 'Migrate for Compute', vendor: '', description: 'Migrate VMs from on-prem, AWS, or Azure to GCP Compute Engine.', tags: [] },
        { icon: '🗄️', name: 'AWS DMS', vendor: '', description: 'Migrate databases to AWS with minimal downtime. Supports heterogeneous migrations.', tags: [] },
        { icon: '🔍', name: 'Flexera One', vendor: '', description: 'IT asset management, cloud cost optimization, and migration planning platform.', tags: [] },
        { icon: '📊', name: 'Cloudamize', vendor: '', description: 'Machine learning-based cloud assessment and migration planning. Right-sizing recommendations.', tags: [] },
        { icon: '🚀', name: 'CloudEndure', vendor: '', description: 'Block-level replication for near-zero downtime migrations and disaster recovery.', tags: [] },
        { icon: '🔄', name: 'Zerto', vendor: '', description: 'Continuous replication for migrations and DR. Multi-cloud support.', tags: [] },
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
      avatar: '🤖',
      name: '🚀 MigrationPlanner',
      role: 'Cloud Migration Planner',
      description: 'Analyzes application portfolios and generates optimized migration plans. Recommends 6R strategies, creates wave groupings, estimates timelines and costs, and identifies risks based on workload characteristics.',
      capabilities: [
        'Portfolio analysis and discovery',
        '6R strategy recommendation',
        'Wave planning optimization',
        'TCO and timeline estimation',
        'Risk identification and scoring',
      ],
      codeFilename: 'migration_planner_agent.py',
      code: `from crewai import Agent, Task, Crew

# Migration planning tools
discovery_tool = ApplicationDiscoveryTool()
dependency_tool = DependencyMapperTool()
tco_tool = TCOCalculatorTool()
wave_tool = WavePlannerTool()

# Migration Planner Agent
planner = Agent(
    role="Cloud Migration Planner",
    goal="""Analyze application portfolios,
    recommend optimal migration strategies,
    and create detailed wave plans.""",
    tools=[discovery_tool, dependency_tool, 
           tco_tool, wave_tool],
    verbose=True
)

# Migration Planning Task
plan_task = Task(
    description="""
    1. Inventory all applications
    2. Map dependencies between apps
    3. Assess each app against 6Rs
    4. Calculate TCO for each strategy
    5. Group apps into migration waves
    6. Estimate timeline and resources
    7. Identify and score risks
    """,
    agent=planner
)

crew = Crew(agents=[planner], tasks=[plan_task])`,
    },
    relatedPages: [
      { number: '', title: 'Architecture Patterns', description: 'Target architectures for migrated workloads', slug: 'architecture-patterns' },
      { number: '', title: 'Compute & Containers', description: 'VM and container options for rehosted apps', slug: 'compute-containers' },
      { number: '', title: 'Cost Optimization', description: 'Optimize costs post-migration', slug: 'cost-optimization' },
    ],
    prevPage: { title: '12.2 Architecture Patterns', slug: 'architecture-patterns' },
    nextPage: { title: '12.4 Compute & Containers', slug: 'compute-containers' },
  },
  {
    slug: 'compute-containers',
    badge: '📦 Page 12.4',
    title: 'Compute & Containers',
    description: 'From virtual machines to serverless functions, choose the right compute model for your workloads. Master containers, Kubernetes orchestration, and modern cloud-native deployment patterns.',
    accentColor: '#F97316',
    accentLight: '#FB923C',
    metrics: [
      { value: '700+', label: 'Instance Types' },
      { value: '92%', label: 'Use Containers' },
      { value: '61%', label: 'Use Kubernetes' },
      { value: '50%', label: 'Serverless Adoption' },
    ],
    overview: {
      title: 'Compute Fundamentals',
      subtitle: 'Understanding cloud compute options',
      subsections: [
        {
          heading: 'The Compute Evolution',
          paragraphs: [
            'Cloud compute has evolved from simple VMs to a spectrum of options. Each layer trades control for convenience—VMs give full OS control, containers abstract the OS, serverless abstracts infrastructure entirely.',
            'The right choice depends on workload characteristics: state requirements, scaling patterns, team expertise, and cost optimization goals.',
            'Most organizations use multiple compute models simultaneously—VMs for legacy apps, containers for microservices, serverless for event processing. The key is matching each workload to its optimal compute model.',
          ],
        },
        {
          heading: 'Key Decision Factors',
          paragraphs: [
            'Control vs. Convenience: VMs offer maximum control; serverless offers maximum convenience. Choose based on operational maturity and compliance requirements.',
            'Scaling Model: Steady workloads favor VMs with reserved pricing. Spiky workloads favor auto-scaling containers or serverless.',
            'State Management: Stateful apps need VMs or StatefulSets. Stateless apps can leverage any compute model.',
            'Cold Start Sensitivity: Latency-critical apps may not tolerate serverless cold starts (100ms-3s). Containers or VMs provide consistent response times.',
          ],
        },
        {
          heading: 'Total Cost of Ownership Considerations',
          paragraphs: [
            'Compute costs extend beyond hourly rates. Factor in: Operations overhead (K8s requires expertise, serverless is hands-off), Licensing (Windows VMs cost more, BYOL can save 40%+), Data transfer (egress charges add up fast), Reserved capacity (commit for 30-72% savings), and Right-sizing (most VMs are over-provisioned by 40%+). A well-optimized container deployment often costs less than poorly-managed VMs, even if the per-unit container price appears higher.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Containers',
      subtitle: 'Docker, registries, and orchestration platforms',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Docker',
          description: 'The standard container format and runtime. Package applications with dependencies into portable images.',
          examples: ['Dockerfile declarative builds', 'Layer caching for fast builds', 'Multi-stage builds for small images', 'Docker Compose for local dev'],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Kubernetes',
          description: 'Industry-standard orchestration. Automate deployment, scaling, and management of containerized applications.',
          examples: ['Declarative desired state', 'Self-healing and auto-scaling', 'Service discovery & load balancing', 'Rolling updates & rollbacks'],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Managed Containers',
          description: 'Run containers without managing infrastructure. No cluster setup, node scaling, or Kubernetes expertise needed.',
          examples: ['Per-second billing', 'Auto-scaling to zero', 'Simplified networking', 'Integrated with cloud services'],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Image Security',
          description: 'Secure container images before they reach production. Shift security left into CI/CD pipelines.',
          examples: ['Use minimal base images (Alpine, Distroless)', 'Scan for CVEs (Trivy, Snyk, Prisma)', 'Sign images (Cosign, Notary)', 'No secrets in images—use vaults', 'Multi-stage builds to reduce attack surface'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'The Compute Spectrum',
      subtitle: 'From bare metal to serverless',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Abstraction', tagText: 'Hardware virtualization', tagClass: 'tag-blue', bestFor: 'Function/code level', complexity: 'medium', rating: 'OS-level virtualization' },
        { icon: '🛠️', name: 'Startup Time', tagText: 'Minutes', tagClass: 'tag-green', bestFor: 'Milliseconds (warm) to seconds (cold)', complexity: 'medium', rating: 'Seconds' },
        { icon: '🛠️', name: 'Scaling', tagText: 'Manual or auto-scale groups', tagClass: 'tag-purple', bestFor: 'Automatic, instant, to zero', complexity: 'medium', rating: 'Horizontal pod autoscaling' },
        { icon: '🛠️', name: 'State', tagText: 'Full support (local disk)', tagClass: 'tag-orange', bestFor: 'Stateless by design', complexity: 'medium', rating: 'Possible with persistent volumes' },
        { icon: '🛠️', name: 'Billing', tagText: 'Per hour/second (running)', tagClass: 'tag-pink', bestFor: 'Per invocation + duration (ms)', complexity: 'medium', rating: 'Per hour (nodes running)' },
        { icon: '🛠️', name: 'OS Control', tagText: 'Full root access', tagClass: 'tag-blue', bestFor: 'None (managed runtime)', complexity: 'medium', rating: 'Shared kernel, isolated userspace' },
        { icon: '🛠️', name: 'Networking', tagText: 'Full control (VPC, security groups)', tagClass: 'tag-green', bestFor: 'Managed, VPC optional', complexity: 'medium', rating: 'Overlay networks, service mesh' },
        { icon: '🛠️', name: 'Patching', tagText: 'You manage OS + app', tagClass: 'tag-purple', bestFor: 'Provider manages runtime', complexity: 'medium', rating: 'You manage container image' },
        { icon: '🛠️', name: 'Portability', tagText: 'Low (provider-specific images)', tagClass: 'tag-orange', bestFor: 'Low (provider-specific)', complexity: 'medium', rating: 'High (OCI standard)' },
        { icon: '🛠️', name: 'Best For', tagText: 'Legacy apps, stateful, compliance', tagClass: 'tag-pink', bestFor: 'Event-driven, APIs, glue code', complexity: 'medium', rating: 'Microservices, portability' },
        { icon: '🛠️', name: 'Control Plane Cost', tagText: '$0.10/hour (~$73/mo)', tagClass: 'tag-blue', bestFor: 'Free (Autopilot: included)', complexity: 'medium', rating: 'Free' },
        { icon: '🛠️', name: 'Max Nodes', tagText: '5,000 per cluster', tagClass: 'tag-green', bestFor: '15,000 per cluster', complexity: 'medium', rating: '5,000 per cluster' },
        { icon: '🛠️', name: 'Serverless Nodes', tagText: 'Fargate profiles', tagClass: 'tag-purple', bestFor: 'Autopilot (fully managed)', complexity: 'medium', rating: 'Virtual Nodes (ACI)' },
        { icon: '🛠️', name: 'GPU Support', tagText: 'NVIDIA, Inferentia, Trainium', tagClass: 'tag-orange', bestFor: 'NVIDIA, TPU', complexity: 'medium', rating: 'NVIDIA' },
        { icon: '🛠️', name: 'Service Mesh', tagText: 'App Mesh, Istio add-on', tagClass: 'tag-pink', bestFor: 'Anthos Service Mesh (managed)', complexity: 'medium', rating: 'Istio, Open Service Mesh' },
        { icon: '🛠️', name: 'GitOps', tagText: 'Flux, ArgoCD', tagClass: 'tag-blue', bestFor: 'Config Sync (built-in)', complexity: 'medium', rating: 'GitOps with Flux (built-in)' },
        { icon: '🛠️', name: 'Windows Containers', tagText: 'Supported', tagClass: 'tag-green', bestFor: 'Supported', complexity: 'medium', rating: 'Supported (best)' },
        { icon: '🛠️', name: 'Multi-Cluster', tagText: 'Manual or Rancher', tagClass: 'tag-purple', bestFor: 'Anthos / Fleet', complexity: 'medium', rating: 'Azure Arc' },
        { icon: '🛠️', name: 'Strengths', tagText: 'AWS integration, mature', tagClass: 'tag-orange', bestFor: 'Best K8s, Autopilot, GKE Enterprise', complexity: 'medium', rating: 'Azure AD, hybrid, Windows' },
        { icon: '🛠️', name: 'API Backend', tagText: 'HTTP request', tagClass: 'tag-pink', bestFor: 'API Gateway + Lambda + DynamoDB', complexity: 'medium', rating: 'REST/GraphQL APIs' },
        { icon: '🛠️', name: 'Event Processing', tagText: 'Cloud event', tagClass: 'tag-blue', bestFor: 'S3 upload triggers image resize', complexity: 'medium', rating: 'React to changes' },
        { icon: '🛠️', name: 'Stream Processing', tagText: 'Queue/stream', tagClass: 'tag-green', bestFor: 'Kinesis/Kafka to Lambda', complexity: 'medium', rating: 'Real-time data' },
        { icon: '🛠️', name: 'Scheduled', tagText: 'Cron/timer', tagClass: 'tag-purple', bestFor: 'Nightly report generation', complexity: 'medium', rating: 'Batch jobs' },
        { icon: '🛠️', name: 'Orchestration', tagText: 'Workflow', tagClass: 'tag-orange', bestFor: 'Step Functions for order processing', complexity: 'medium', rating: 'Multi-step processes' },
        { icon: '🛠️', name: 'Edge Computing', tagText: 'CDN request', tagClass: 'tag-pink', bestFor: 'Lambda@Edge for personalization', complexity: 'medium', rating: 'Low-latency' },
        { icon: '🛠️', name: 'Trivy', tagText: 'Scanner', tagClass: 'tag-blue', bestFor: 'Open-source vulnerability scanner for containers and IaC', complexity: 'medium', rating: 'Build' },
        { icon: '🛠️', name: 'Snyk', tagText: 'Scanner', tagClass: 'tag-green', bestFor: 'Developer-first security with IDE integration', complexity: 'medium', rating: 'Build + Runtime' },
        { icon: '🛠️', name: 'Falco', tagText: 'Detection', tagClass: 'tag-purple', bestFor: 'Cloud-native runtime security and anomaly detection', complexity: 'medium', rating: 'Runtime' },
        { icon: '🛠️', name: 'OPA/Gatekeeper', tagText: 'Policy', tagClass: 'tag-orange', bestFor: 'Policy-as-code for Kubernetes admission control', complexity: 'medium', rating: 'Deploy' },
        { icon: '🛠️', name: 'Kyverno', tagText: 'Policy', tagClass: 'tag-pink', bestFor: 'Kubernetes-native policy engine (easier than OPA)', complexity: 'medium', rating: 'Deploy' },
        { icon: '🛠️', name: 'Cosign', tagText: 'Signing', tagClass: 'tag-blue', bestFor: 'Container image signing and verification', complexity: 'medium', rating: 'Build' },
        { icon: '🛠️', name: 'Vault', tagText: 'Secrets', tagClass: 'tag-green', bestFor: 'Dynamic secrets management for containers', complexity: 'medium', rating: 'Runtime' },
        { icon: '🛠️', name: 'Cilium', tagText: 'Network', tagClass: 'tag-purple', bestFor: 'eBPF-based networking, security, and observability', complexity: 'medium', rating: 'Runtime' },
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
      avatar: '🤖',
      name: '📦 ComputeOptimizer',
      role: 'Cloud Compute Specialist',
      description: 'Analyzes workload characteristics and recommends optimal compute configuration. Evaluates instance types, container sizing, and serverless fit. Generates Terraform/CloudFormation for deployment.',
      capabilities: [
        'Workload profiling and analysis',
        'Instance type recommendation',
        'Container sizing optimization',
        'Serverless fit assessment',
        'IaC code generation',
      ],
      codeFilename: 'compute_optimizer_agent.py',
      code: `from crewai import Agent, Task, Crew

# Compute analysis tools
profiler = WorkloadProfilerTool()
instance_matcher = InstanceMatcherTool()
cost_calc = ComputeCostCalculatorTool()
iac_gen = TerraformGeneratorTool()

# Compute Optimizer Agent
optimizer = Agent(
    role="Cloud Compute Specialist",
    goal="""Analyze workloads and recommend
    optimal compute configuration for cost
    and performance.""",
    tools=[profiler, instance_matcher, 
           cost_calc, iac_gen],
    verbose=True
)

# Optimization Task
optimize_task = Task(
    description="""
    1. Profile workload (CPU, memory, I/O)
    2. Evaluate compute model fit
    3. Recommend instance types/sizes
    4. Calculate cost comparison
    5. Generate Terraform deployment
    """,
    agent=optimizer
)

crew = Crew(agents=[optimizer], tasks=[optimize_task])`,
    },
    relatedPages: [
      { number: '', title: 'Migration Strategies', description: 'Plan workload migrations to cloud compute', slug: 'migration-strategies' },
      { number: '', title: 'Storage & Databases', description: 'Persistent storage for compute workloads', slug: 'storage-databases' },
      { number: '', title: 'Cost Optimization', description: 'Right-size instances and reduce compute costs', slug: 'cost-optimization' },
    ],
    prevPage: { title: '12.3 Migration Strategies', slug: 'migration-strategies' },
    nextPage: { title: '12.5 Storage & Databases', slug: 'storage-databases' },
  },
  {
    slug: 'storage-databases',
    badge: '💾 Page 12.5',
    title: 'Storage & Databases',
    description: 'From object storage to managed databases, choose the right persistence layer for your cloud workloads. Master storage tiers, database selection, and data migration strategies.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '$0.02', label: 'Per GB/Month (S3)' },
      { value: '11 9\'s', label: 'Object Durability' },
      { value: '15+', label: 'Managed DB Engines' },
      { value: '99.99%', label: 'Multi-AZ SLA' },
    ],
    overview: {
      title: 'Data Persistence Fundamentals',
      subtitle: 'Understanding cloud storage and database options',
      subsections: [
        {
          heading: 'Storage vs. Database',
          paragraphs: [
            'Storage is raw persistence—files, blobs, blocks. No query engine, no schema, no relationships. You decide how to organize and access data.',
            'Databases add structure and query capabilities. Schemas, indexes, transactions, and query languages help you work with data efficiently.',
            'Most applications use both: databases for structured application data, storage for files, backups, and large objects.',
          ],
        },
        {
          heading: 'Key Selection Criteria',
          paragraphs: [
            'Access Patterns: Random reads? Sequential scans? Write-heavy? Read-heavy? Access pattern determines optimal storage/DB type.',
            'Consistency Requirements: Strong consistency (banking) vs. eventual consistency (social media). Drives database architecture choices.',
            'Scale Requirements: Terabytes vs. petabytes. Thousands vs. millions of IOPS. Different solutions for different scales.',
            'Cost Sensitivity: Storage tiers and DB instance sizing dramatically impact costs. Right-size from day one.',
          ],
        },
        {
          heading: 'Managed vs. Self-Managed',
          paragraphs: [
            'Cloud providers offer managed services for most storage and database needs. Managed services handle patching, backups, replication, and scaling—you focus on your application. Self-managed (databases on VMs) gives maximum control but requires operational expertise. Default to managed unless you have specific requirements (custom extensions, specific versions, licensing) that mandate self-management. The operational overhead of self-managed databases is often underestimated—factor in 24/7 on-call, patching windows, and upgrade complexity.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Database Migration',
      subtitle: 'Strategies for moving databases to cloud',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔄',
          title: 'Homogeneous Migration',
          description: 'Same engine (Oracle → Oracle, MySQL → MySQL). Use native tools, minimal transformation needed.',
          examples: ['Create target instance (RDS/Cloud SQL)', 'Set up replication (DMS continuous)', 'Validate data integrity', 'Cutover during maintenance window', 'Redirect application connections'],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔀',
          title: 'Heterogeneous Migration',
          description: 'Different engines (Oracle → PostgreSQL). Schema conversion, code changes, extensive testing required.',
          examples: ['Assess schema compatibility (SCT)', 'Convert schemas and procedures', 'Modify application code (queries)', 'Migrate data with transformation', 'Extensive parallel testing'],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: 'Dual-Write Migration',
          description: 'Write to both old and new databases during migration. Zero downtime but complex to implement.',
          examples: ['Backfill historical data', 'Enable dual writes in app', 'Validate data consistency', 'Gradually shift reads to new DB', 'Disable writes to old DB'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📦',
          title: 'Dump & Restore',
          description: 'Simple backup and restore. Works for small databases where downtime is acceptable.',
          examples: ['Schedule maintenance window', 'Stop writes to source', 'Export full dump (pg_dump, mysqldump)', 'Import to target database', 'Update connection strings'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'AWS Storage Services',
      subtitle: 'Comprehensive storage portfolio',
      cards: [
        { icon: '🛠️', title: 'S3 Standard', subtitle: 'Object', description: '$0.023/GB + requests', tags: ['Object'] },
        { icon: '🛠️', title: 'S3 Intelligent-Tiering', subtitle: 'Object', description: '$0.023/GB + monitoring fee', tags: ['Object'] },
        { icon: '🛠️', title: 'S3 Glacier Instant', subtitle: 'Archive', description: '$0.004/GB', tags: ['Archive'] },
        { icon: '🛠️', title: 'S3 Glacier Deep Archive', subtitle: 'Archive', description: '$0.00099/GB', tags: ['Archive'] },
        { icon: '🛠️', title: 'EBS gp3', subtitle: 'Block (SSD)', description: '$0.08/GB + IOPS/throughput', tags: ['Block (SSD)'] },
        { icon: '🛠️', title: 'EBS io2 Block Express', subtitle: 'Block (SSD)', description: '$0.125/GB + $0.065/IOPS', tags: ['Block (SSD)'] },
        { icon: '🛠️', title: 'EBS st1', subtitle: 'Block (HDD)', description: '$0.045/GB', tags: ['Block (HDD)'] },
        { icon: '🛠️', title: 'EBS sc1', subtitle: 'Block (HDD)', description: '$0.015/GB', tags: ['Block (HDD)'] },
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
      avatar: '🤖',
      name: '💾 DataArchitect',
      role: 'Data Solutions Architect',
      description: 'Analyzes data requirements and recommends optimal storage and database solutions. Evaluates access patterns, consistency needs, scale requirements, and cost constraints to design the right data architecture.',
      capabilities: [
        'Workload pattern analysis',
        'Database type recommendation',
        'Storage tier optimization',
        'Cost modeling and comparison',
        'Migration strategy planning',
      ],
      codeFilename: 'data_architect_agent.py',
      code: `from crewai import Agent, Task, Crew

# Data architecture tools
pattern_analyzer = AccessPatternTool()
db_matcher = DatabaseMatcherTool()
storage_optimizer = StorageTierTool()
migration_planner = DBMigrationTool()

# Data Architect Agent
architect = Agent(
    role="Data Solutions Architect",
    goal="""Design optimal data architecture
    based on access patterns, consistency
    requirements, and cost constraints.""",
    tools=[pattern_analyzer, db_matcher, 
           storage_optimizer, migration_planner],
    verbose=True
)

# Architecture Design Task
design_task = Task(
    description="""
    1. Analyze data access patterns
    2. Determine consistency requirements
    3. Evaluate scale and growth projections
    4. Recommend database type(s)
    5. Design storage tier strategy
    6. Plan backup and DR architecture
    7. Estimate costs across providers
    """,
    agent=architect
)

crew = Crew(agents=[architect], tasks=[design_task])`,
    },
    relatedPages: [
      { number: '', title: 'Compute & Containers', description: 'Connect databases to compute workloads', slug: 'compute-containers' },
      { number: '', title: 'Networking & Security', description: 'Secure database connectivity and access', slug: 'networking-security' },
      { number: '', title: 'Cost Optimization', description: 'Right-size databases and optimize storage costs', slug: 'cost-optimization' },
    ],
    prevPage: { title: '12.4 Compute & Containers', slug: 'compute-containers' },
    nextPage: { title: '12.6 Networking & Security', slug: 'networking-security' },
  },
  {
    slug: 'networking-security',
    badge: '🌐 Page 12.6',
    title: 'Networking & Security',
    description: 'Design secure, high-performance cloud networks. From VPCs and hybrid connectivity to Zero Trust architecture and compliance frameworks—protect your cloud infrastructure at every layer.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '99.99%', label: 'Network SLA' },
      { value: '100 Gbps', label: 'Direct Connect' },
      { value: '300+', label: 'Edge Locations' },
      { value: '143', label: 'Compliance Certs' },
    ],
    overview: {
      title: 'Cloud Network Fundamentals',
      subtitle: 'Understanding cloud networking and security',
      subsections: [
        {
          heading: 'Software-Defined Networking',
          paragraphs: [
            'Cloud networks are software-defined, meaning you configure virtual networks, subnets, routing, and security through APIs and consoles rather than physical hardware.',
            'Benefits: Instant provisioning, programmable infrastructure, consistent security policies, and integration with IaC tools like Terraform.',
            'Key Concepts: Virtual Private Clouds (VPCs), subnets, route tables, internet gateways, NAT gateways, and network ACLs.',
          ],
        },
        {
          heading: 'Defense in Depth',
          paragraphs: [
            'Cloud security follows defense-in-depth: multiple layers of security controls so that if one layer fails, others still protect your resources.',
            'Layers: Network perimeter (WAF, DDoS), network segmentation (subnets, security groups), identity (IAM, MFA), data (encryption), and application (secure coding).',
            'Shared Responsibility: Providers secure the infrastructure; you secure your configurations, data, and applications.',
          ],
        },
        {
          heading: 'Network Design Principles',
          paragraphs: [
            'Least Privilege Networking: Only allow traffic that\'s explicitly required. Default deny all, then open specific ports and protocols. Segmentation: Separate workloads by environment (dev/prod), sensitivity (PCI/non-PCI), and function (web/app/data tiers). Private by Default: Keep resources in private subnets. Use load balancers, API gateways, and bastion hosts for controlled access. Centralized Egress: Route outbound traffic through inspection points for logging, filtering, and compliance.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Hybrid & Multi-Cloud Connectivity',
      subtitle: 'Connect on-premises and cloud environments',
      columns: 2,
      cards: [
        {
          className: 'connect-0',
          borderColor: '#3B82F6',
          icon: '🔒',
          title: 'Site-to-Site VPN',
          description: 'IPsec VPN tunnel between on-premises and cloud. Quick to set up, runs over public internet with encryption. Good for dev/test or backup connectivity.',
          examples: [],
        },
        {
          className: 'connect-1',
          borderColor: '#10B981',
          icon: '⚡',
          title: 'Direct Connect',
          description: 'Dedicated physical connection bypassing the internet. Consistent low latency, high bandwidth. Required for large data transfers and latency-sensitive workloads.',
          examples: [],
        },
        {
          className: 'connect-2',
          borderColor: '#8B5CF6',
          icon: '🌐',
          title: 'SD-WAN / SASE',
          description: 'Overlay network with intelligent routing across multiple transports. Combines networking with security (SASE). Ideal for branch offices and remote workers.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Networking & Security',
          description: 'Design secure, high-performance cloud networks. From VPCs and hybrid connectivity to Zero Trust architecture and compliance frameworks—protect your cloud infrastructure at every layer.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'VPC & Virtual Networking',
      subtitle: 'Build isolated cloud networks',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Virtual Network', tagText: 'VPC', tagClass: 'tag-blue', bestFor: 'Isolated network boundary', complexity: 'medium', rating: 'VNet' },
        { icon: '🛠️', name: 'Subnet', tagText: 'Subnet (AZ-scoped)', tagClass: 'tag-green', bestFor: 'IP address segmentation', complexity: 'medium', rating: 'Subnet' },
        { icon: '🛠️', name: 'Route Table', tagText: 'Route Table', tagClass: 'tag-purple', bestFor: 'Traffic routing rules', complexity: 'medium', rating: 'Route Table' },
        { icon: '🛠️', name: 'Internet Gateway', tagText: 'Internet Gateway', tagClass: 'tag-orange', bestFor: 'Public internet access', complexity: 'medium', rating: '-' },
        { icon: '🛠️', name: 'NAT', tagText: 'NAT Gateway', tagClass: 'tag-pink', bestFor: 'Private subnet outbound', complexity: 'medium', rating: 'NAT Gateway' },
        { icon: '🛠️', name: 'Firewall (Instance)', tagText: 'Security Groups', tagClass: 'tag-blue', bestFor: 'Instance-level filtering', complexity: 'medium', rating: 'NSG' },
        { icon: '🛠️', name: 'Firewall (Subnet)', tagText: 'Network ACL', tagClass: 'tag-green', bestFor: 'Subnet-level filtering', complexity: 'medium', rating: 'NSG' },
        { icon: '🛠️', name: 'VPC Peering', tagText: 'VPC Peering', tagClass: 'tag-purple', bestFor: 'Connect VPCs privately', complexity: 'medium', rating: 'VNet Peering' },
        { icon: '🛠️', name: 'Transit Hub', tagText: 'Transit Gateway', tagClass: 'tag-orange', bestFor: 'Hub-and-spoke topology', complexity: 'medium', rating: 'Virtual WAN' },
        { icon: '🛠️', name: 'Private Endpoints', tagText: 'VPC Endpoints', tagClass: 'tag-pink', bestFor: 'Private access to services', complexity: 'medium', rating: 'Private Endpoints' },
        { icon: '🛠️', name: 'Flow Logs', tagText: 'VPC Flow Logs', tagClass: 'tag-blue', bestFor: 'Network traffic logging', complexity: 'medium', rating: 'NSG Flow Logs' },
        { icon: '🛠️', name: 'IPsec VPN', tagText: 'Site-to-Site VPN', tagClass: 'tag-green', bestFor: 'Encrypted over internet', complexity: 'medium', rating: 'VPN Gateway' },
        { icon: '🛠️', name: 'Dedicated 1-10G', tagText: 'Direct Connect', tagClass: 'tag-purple', bestFor: 'High bandwidth, low latency', complexity: 'medium', rating: 'ExpressRoute' },
        { icon: '🛠️', name: 'Partner Connect', tagText: 'Direct Connect Partners', tagClass: 'tag-orange', bestFor: 'Via carrier/exchange', complexity: 'medium', rating: 'ExpressRoute Partners' },
        { icon: '🛠️', name: 'Transit Hub', tagText: 'Transit Gateway', tagClass: 'tag-pink', bestFor: 'Hub-and-spoke at scale', complexity: 'medium', rating: 'Virtual WAN Hub' },
        { icon: '🛠️', name: 'Multi-Cloud', tagText: 'Transit Gateway + VPN', tagClass: 'tag-blue', bestFor: 'Connect AWS + Azure + GCP', complexity: 'medium', rating: 'Virtual WAN' },
        { icon: '🛠️', name: 'Global Backbone', tagText: 'Global Accelerator', tagClass: 'tag-green', bestFor: 'Optimized global routing', complexity: 'medium', rating: 'Front Door' },
        { icon: '🛠️', name: 'Edge Locations', tagText: '450+ in 90+ cities', tagClass: 'tag-purple', bestFor: '200+ locations', complexity: 'medium', rating: '200+ (CDN), 180+ (AFD)' },
        { icon: '🛠️', name: 'Origin Types', tagText: 'S3, ALB, EC2, custom', tagClass: 'tag-orange', bestFor: 'GCS, Compute, custom', complexity: 'medium', rating: 'Blob, App Service, custom' },
        { icon: '🛠️', name: 'SSL/TLS', tagText: 'Free ACM certs, SNI', tagClass: 'tag-pink', bestFor: 'Free managed certs', complexity: 'medium', rating: 'Free managed certs' },
        { icon: '🛠️', name: 'Edge Compute', tagText: 'Lambda@Edge, CF Functions', tagClass: 'tag-blue', bestFor: 'Cloud Functions', complexity: 'medium', rating: 'Rules Engine, Functions' },
        { icon: '🛠️', name: 'WAF Integration', tagText: 'AWS WAF', tagClass: 'tag-green', bestFor: 'Cloud Armor', complexity: 'medium', rating: 'Azure WAF' },
        { icon: '🛠️', name: 'DDoS Protection', tagText: 'Shield Standard (free)', tagClass: 'tag-purple', bestFor: 'Cloud Armor (standard)', complexity: 'medium', rating: 'DDoS Protection Basic' },
        { icon: '🛠️', name: 'Real-time Logs', tagText: 'Kinesis, S3', tagClass: 'tag-orange', bestFor: 'Cloud Logging', complexity: 'medium', rating: 'Log Analytics' },
        { icon: '🛠️', name: 'Pricing', tagText: '$0.085/GB (first 10TB)', tagClass: 'tag-pink', bestFor: '$0.08/GB (first 10TB)', complexity: 'medium', rating: '$0.081/GB (Zone 1)' },
        { icon: '🛠️', name: 'Web Application Firewall', tagText: 'AWS WAF', tagClass: 'tag-blue', bestFor: 'OWASP Top 10, SQL injection, XSS', complexity: 'medium', rating: 'Azure WAF' },
        { icon: '🛠️', name: 'DDoS Protection', tagText: 'Shield Standard/Advanced', tagClass: 'tag-green', bestFor: 'Volumetric and application attacks', complexity: 'medium', rating: 'DDoS Protection' },
        { icon: '🛠️', name: 'Network Firewall', tagText: 'Network Firewall', tagClass: 'tag-purple', bestFor: 'Stateful inspection, IDS/IPS', complexity: 'medium', rating: 'Azure Firewall' },
        { icon: '🛠️', name: 'Secrets Management', tagText: 'Secrets Manager', tagClass: 'tag-orange', bestFor: 'API keys, passwords, certificates', complexity: 'medium', rating: 'Key Vault' },
        { icon: '🛠️', name: 'Key Management', tagText: 'KMS', tagClass: 'tag-pink', bestFor: 'Encryption key lifecycle', complexity: 'medium', rating: 'Key Vault' },
        { icon: '🛠️', name: 'Certificate Manager', tagText: 'ACM', tagClass: 'tag-blue', bestFor: 'SSL/TLS certificate provisioning', complexity: 'medium', rating: 'App Service Certs' },
        { icon: '🛠️', name: 'Threat Detection', tagText: 'GuardDuty', tagClass: 'tag-green', bestFor: 'Anomaly detection, threat intel', complexity: 'medium', rating: 'Defender for Cloud' },
        { icon: '🛠️', name: 'Vulnerability Scanning', tagText: 'Inspector', tagClass: 'tag-purple', bestFor: 'OS and container vulnerabilities', complexity: 'medium', rating: 'Defender for Cloud' },
        { icon: '🛠️', name: 'SIEM', tagText: 'Security Lake', tagClass: 'tag-orange', bestFor: 'Security event aggregation', complexity: 'medium', rating: 'Sentinel' },
        { icon: '🛠️', name: 'Compliance Manager', tagText: 'Audit Manager', tagClass: 'tag-pink', bestFor: 'Compliance evidence collection', complexity: 'medium', rating: 'Compliance Manager' },
        { icon: '🛠️', name: 'Human Users', tagText: 'IAM Users (avoid) → Identity Center', tagClass: 'tag-blue', bestFor: 'Google Workspace / Cloud Identity', complexity: 'medium', rating: 'Entra ID Users' },
        { icon: '🛠️', name: 'Groups', tagText: 'IAM Groups', tagClass: 'tag-green', bestFor: 'Google Groups', complexity: 'medium', rating: 'Entra ID Groups' },
        { icon: '🛠️', name: 'Service Identity', tagText: 'IAM Roles', tagClass: 'tag-purple', bestFor: 'Service Accounts', complexity: 'medium', rating: 'Managed Identity' },
        { icon: '🛠️', name: 'Permission Model', tagText: 'Policy-based (JSON)', tagClass: 'tag-orange', bestFor: 'IAM Policy (bindings)', complexity: 'medium', rating: 'RBAC (role assignments)' },
        { icon: '🛠️', name: 'Least Privilege Tool', tagText: 'IAM Access Analyzer', tagClass: 'tag-pink', bestFor: 'IAM Recommender', complexity: 'medium', rating: 'Privileged Identity Management' },
        { icon: '🛠️', name: 'Cross-Account', tagText: 'AssumeRole', tagClass: 'tag-blue', bestFor: 'Cross-project roles', complexity: 'medium', rating: 'Azure Lighthouse' },
        { icon: '🛠️', name: 'Temporary Credentials', tagText: 'STS (AssumeRole)', tagClass: 'tag-green', bestFor: 'Workload Identity Federation', complexity: 'medium', rating: 'Managed Identity tokens' },
        { icon: '🛠️', name: 'SSO', tagText: 'IAM Identity Center (SAML/OIDC)', tagClass: 'tag-purple', bestFor: 'Workforce Identity Federation', complexity: 'medium', rating: 'Entra ID (native)' },
        { icon: '🛠️', name: 'Identity Verification', tagText: 'IAM Identity Center + MFA', tagClass: 'tag-orange', bestFor: 'BeyondCorp Enterprise', complexity: 'medium', rating: 'Conditional Access' },
        { icon: '🛠️', name: 'Device Trust', tagText: 'Verified Access', tagClass: 'tag-pink', bestFor: 'Access Context Manager', complexity: 'medium', rating: 'Intune + Compliance' },
        { icon: '🛠️', name: 'Network Segmentation', tagText: 'Security Groups + PrivateLink', tagClass: 'tag-blue', bestFor: 'VPC Service Controls', complexity: 'medium', rating: 'NSG + Private Endpoints' },
        { icon: '🛠️', name: 'App Access Proxy', tagText: 'Verified Access', tagClass: 'tag-green', bestFor: 'Identity-Aware Proxy', complexity: 'medium', rating: 'Application Proxy' },
        { icon: '🛠️', name: 'Threat Detection', tagText: 'GuardDuty', tagClass: 'tag-purple', bestFor: 'Security Command Center', complexity: 'medium', rating: 'Defender for Cloud' },
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
      avatar: '🤖',
      name: '🛡️ SecurityArchitect',
      role: 'Cloud Security Architect',
      description: 'Designs secure cloud network architectures, reviews IAM policies for least privilege, recommends security controls based on compliance requirements, and generates Terraform for security infrastructure.',
      capabilities: [
        'Network security architecture design',
        'IAM policy review and generation',
        'Compliance mapping and gap analysis',
        'Security group rule optimization',
        'Terraform security module generation',
      ],
      codeFilename: 'security_architect_agent.py',
      code: `from crewai import Agent, Task, Crew

# Security analysis tools
policy_analyzer = IAMPolicyAnalyzerTool()
network_scanner = SecurityGroupScannerTool()
compliance_mapper = ComplianceMapperTool()
terraform_gen = TerraformSecurityTool()

# Security Architect Agent
architect = Agent(
    role="Cloud Security Architect",
    goal="""Design secure cloud architectures,
    review IAM policies, ensure compliance,
    and generate security infrastructure.""",
    tools=[policy_analyzer, network_scanner, 
           compliance_mapper, terraform_gen],
    verbose=True
)

# Security Review Task
review_task = Task(
    description="""
    1. Analyze current IAM policies
    2. Review security group rules
    3. Map to compliance requirements
    4. Identify gaps and risks
    5. Generate remediation Terraform
    6. Create security architecture doc
    """,
    agent=architect
)

crew = Crew(agents=[architect], tasks=[review_task])`,
    },
    relatedPages: [
      { number: '', title: 'Architecture Patterns', description: 'Multi-region and Well-Architected security', slug: 'architecture-patterns' },
      { number: '', title: 'Storage & Databases', description: 'Data encryption and backup security', slug: 'storage-databases' },
      { number: '', title: 'Cost Optimization', description: 'Security tool cost management', slug: 'cost-optimization' },
    ],
    prevPage: { title: '12.5 Storage & Databases', slug: 'storage-databases' },
    nextPage: { title: '12.7 Cost Optimization', slug: 'cost-optimization' },
  },
  {
    slug: 'cost-optimization',
    badge: '💰 Page 12.7',
    title: 'Cost Optimization',
    description: 'Maximize cloud value while minimizing waste. Master pricing models, commitment strategies, rightsizing, and FinOps practices to reduce cloud spend by 30-50% without sacrificing performance.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '35%', label: 'Average Cloud Waste' },
      { value: '72%', label: 'Max Reserved Savings' },
      { value: '90%', label: 'Max Spot Savings' },
      { value: '40%', label: 'Rightsizing Potential' },
    ],
    overview: {
      title: 'Cost Optimization Fundamentals',
      subtitle: 'Understanding cloud economics',
      subsections: [
        {
          heading: 'Why Cloud Costs Spiral',
          paragraphs: [
            'Easy Provisioning: Spinning up resources is easy; remembering to delete them is hard. Resources accumulate.',
            'Over-Provisioning: Teams size for peak load "just in case." Average utilization is often 20-30%.',
            'Lack of Visibility: Without tagging and allocation, no one owns the bill. Accountability drives optimization.',
            'Default Pricing: On-demand is the most expensive option. Without commitment strategies, you pay premium rates.',
          ],
        },
        {
          heading: 'Optimization Framework',
          paragraphs: [
            '1. Visibility: You can\'t optimize what you can\'t see. Implement tagging, cost allocation, and dashboards first.',
            '2. Waste Elimination: Delete unused resources. This is free money—no downside risk.',
            '3. Rightsizing: Match resource size to actual usage. Downsize over-provisioned instances.',
            '4. Commitment: For stable workloads, commit to reserved instances or savings plans for 30-72% savings.',
          ],
        },
        {
          heading: 'The Cost Optimization Maturity Journey',
          paragraphs: [
            'Crawl: Basic visibility—cost dashboards, alerts on budget thresholds, initial tagging strategy. Walk: Active optimization—rightsizing recommendations, reserved instance purchases, automated shutdown of dev environments. Run: FinOps culture—cost ownership by teams, unit economics (cost per transaction), continuous optimization, spot instances for fault-tolerant workloads. Fly: Predictive optimization—ML-based forecasting, automated commitment purchases, real-time anomaly detection, cost as a first-class architecture concern.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Cloud Pricing Models',
      subtitle: 'Understand your options for paying for cloud resources',
      columns: 2,
      cards: [
        {
          className: 'ondemand',
          borderColor: '#3B82F6',
          icon: '💳',
          title: '',
          description: 'Pay by the second/hour with no commitment. Maximum flexibility, maximum price.',
          examples: ['No upfront commitment', 'Pay only for what you use', 'Stop anytime', 'Best for variable/unpredictable', 'Dev/test environments'],
        },
        {
          className: 'reserved',
          borderColor: '#10B981',
          icon: '📋',
          title: '',
          description: 'Commit to 1-3 years for significant discounts. Best for steady-state workloads.',
          examples: ['1 or 3 year terms', 'All upfront = max savings', 'Specific instance type', 'Production workloads', 'Predictable baseline'],
        },
        {
          className: 'spot',
          borderColor: '#8B5CF6',
          icon: '⚡',
          title: '',
          description: 'Use spare capacity at massive discounts. Can be interrupted with 2-min notice.',
          examples: ['Massive discounts', 'Can be terminated', 'Fault-tolerant workloads', 'Batch processing, CI/CD', 'Stateless containers'],
        },
        {
          className: 'savings',
          borderColor: '#F59E0B',
          icon: '💰',
          title: '',
          description: 'Commit to spend amount, not instance type. More flexibility than reserved.',
          examples: ['Commit to $/hour', 'Flexible across instances', 'Compute or EC2 plans', 'Easier than reserved', 'AWS & Azure'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Understanding Cloud Billing',
      subtitle: 'How cloud providers charge and bill for services',
      cards: [
        { icon: '🛠️', title: 'Compute (VMs)', subtitle: 'Per second/hour by instance type', description: 'Rightsizing, Reserved/Spot, ARM', tags: ['Per second/hour by instance type'] },
        { icon: '🛠️', title: 'Managed Services', subtitle: 'Per hour + usage (RDS, EKS, etc.)', description: 'Rightsize, consolidate, reserved', tags: ['Per hour + usage (RDS, EKS, etc.)'] },
        { icon: '🛠️', title: 'Storage', subtitle: 'Per GB-month + operations', description: 'Lifecycle policies, tiering, cleanup', tags: ['Per GB-month + operations'] },
        { icon: '🛠️', title: 'Data Transfer', subtitle: 'Per GB egress', description: 'CDN, keep data in region, VPC endpoints', tags: ['Per GB egress'] },
        { icon: '🛠️', title: 'Serverless', subtitle: 'Per request + duration (GB-seconds)', description: 'Memory optimization, cold start reduction', tags: ['Per request + duration (GB-seconds)'] },
        { icon: '🛠️', title: 'Support', subtitle: '% of monthly spend or fixed fee', description: 'Right-size support tier, use community', tags: ['% of monthly spend or fixed fee'] },
        { icon: '🛠️', title: 'Licensing', subtitle: 'Per core/user or BYOL', description: 'BYOL, license-included vs. separate', tags: ['Per core/user or BYOL'] },
        { icon: '🛠️', title: 'Cost per Transaction', subtitle: 'Cloud Spend / # Transactions', description: 'Shows efficiency gains with scale', tags: ['Cloud Spend / # Transactions'] },
      ],
    },
    tools: {
      title: 'Cost Management Tools',
      subtitle: 'Native and third-party cost optimization solutions',
      items: [
        { icon: '🟠', name: 'Cost Explorer', vendor: '', description: 'Visualize, understand, and manage AWS costs. Filter by service, tag, linked account. RI/SP recommendations.', tags: [] },
        { icon: '🟠', name: 'Budgets', vendor: '', description: 'Set custom budgets and receive alerts when you exceed thresholds. Actions can auto-respond.', tags: [] },
        { icon: '🔵', name: 'Cost Management', vendor: '', description: 'Cost analysis, budgets, and recommendations. Export to Power BI for custom reporting.', tags: [] },
        { icon: '🔷', name: 'Cost Management', vendor: '', description: 'Cost breakdown, budgets, alerts. Export to BigQuery for custom analysis.', tags: [] },
        { icon: '🟢', name: 'Kubecost', vendor: '', description: 'Kubernetes cost monitoring. Allocation by namespace, deployment, label. Rightsizing for pods.', tags: [] },
        { icon: '🟣', name: 'Spot.io', vendor: '', description: 'Automated spot instance management. Predicts interruptions, handles failover.', tags: [] },
        { icon: '🔴', name: 'CloudHealth', vendor: '', description: 'Enterprise multi-cloud cost management. Governance, rightsizing, reserved instance management.', tags: [] },
        { icon: '⚫', name: 'Infracost', vendor: '', description: 'Terraform cost estimation in CI/CD. See cost impact of infrastructure changes before apply.', tags: [] },
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
      avatar: '🤖',
      name: '💰 CostOptimizer',
      role: 'Cloud Cost Optimization Specialist',
      description: 'Analyzes cloud spending patterns, identifies waste, recommends commitment strategies, and generates cost reduction action plans. Integrates with Cost Explorer APIs for real-time analysis.',
      capabilities: [
        'Spending pattern analysis',
        'Waste identification',
        'Rightsizing recommendations',
        'Commitment strategy planning',
        'Cost forecasting',
      ],
      codeFilename: 'cost_optimizer_agent.py',
      code: `from crewai import Agent, Task, Crew

# Cost analysis tools
cost_api = CostExplorerTool()
compute_opt = ComputeOptimizerTool()
waste_finder = WasteIdentifierTool()
ri_analyzer = ReservationAnalyzerTool()

# Cost Optimizer Agent
optimizer = Agent(
    role="Cloud Cost Optimization Specialist",
    goal="""Analyze cloud spending, identify
    waste, recommend optimizations, and
    create cost reduction action plans.""",
    tools=[cost_api, compute_opt, 
           waste_finder, ri_analyzer],
    verbose=True
)

# Optimization Task
optimize_task = Task(
    description="""
    1. Pull last 30 days of cost data
    2. Identify idle and unused resources
    3. Analyze rightsizing opportunities
    4. Calculate optimal RI/SP coverage
    5. Prioritize by savings potential
    6. Generate action plan with timeline
    """,
    agent=optimizer
)

crew = Crew(agents=[optimizer], tasks=[optimize_task])`,
    },
    relatedPages: [
      { number: '', title: 'Cloud Providers', description: 'Provider pricing models and selection', slug: 'cloud-providers' },
      { number: '', title: 'Compute & Containers', description: 'Instance types and compute optimization', slug: 'compute-containers' },
      { number: '', title: 'Storage & Databases', description: 'Storage tiers and lifecycle policies', slug: 'storage-databases' },
    ],
    prevPage: { title: '12.6 Networking & Security', slug: 'networking-security' },
    nextPage: undefined,
  },
]

registerPages('cloud-platforms', pages)
export default pages
