import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'compliance-frameworks',
    badge: '📋 Page 11.1',
    title: 'Compliance Frameworks',
    description: 'Master regulatory requirements from GDPR to SOC 2. Learn to map controls across frameworks, automate evidence collection, and maintain continuous compliance that builds customer trust and accelerates sales cycles.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: '8', label: 'Major Frameworks' },
      { value: '300+', label: 'Control Requirements' },
      { value: '40%', label: 'Control Overlap' },
      { value: '6-12', label: 'Months to Certify' },
    ],
    overview: {
      title: 'Compliance Frameworks',
      subtitle: 'Real-time status across all regulatory frameworks',
      subsections: [
        {
          heading: 'Why Compliance Frameworks Matter',
          paragraphs: [
            'Compliance frameworks provide structured approaches to information security, data protection, and operational controls. They establish baseline requirements that help organizations protect sensitive data, build customer trust, and meet regulatory obligations. More importantly, they serve as a competitive differentiator—SOC 2 compliance, for instance, can accelerate enterprise sales cycles by months.',
            'The key insight is that many frameworks share common control requirements. A well-designed compliance program maps controls across multiple frameworks, reducing duplicate effort and enabling "certify once, satisfy many" efficiency. Modern GRC (Governance, Risk, Compliance) platforms automate evidence collection, continuously monitor control effectiveness, and streamline audit preparation.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Compliance Dashboard',
      subtitle: 'Real-time status across all regulatory frameworks',
      columns: 2,
      cards: [
        {
          className: 'framework-0',
          borderColor: '#3B82F6',
          icon: '🇪🇺',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'framework-1',
          borderColor: '#10B981',
          icon: '🔐',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'framework-2',
          borderColor: '#8B5CF6',
          icon: '🏥',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'framework-3',
          borderColor: '#F59E0B',
          icon: '💳',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Framework Comparison',
      subtitle: 'Key characteristics of major compliance frameworks',
      cards: [
        { icon: '🛠️', title: '🇪🇺GDPR', subtitle: 'Privacy', description: '$50K-$200K', tags: ['Privacy'] },
        { icon: '🛠️', title: '🔐SOC 2', subtitle: 'Security', description: '$30K-$100K', tags: ['Security'] },
        { icon: '🛠️', title: '🏥HIPAA', subtitle: 'Healthcare', description: '$40K-$150K', tags: ['Healthcare'] },
        { icon: '🛠️', title: '💳PCI-DSS', subtitle: 'Payments', description: '$20K-$200K', tags: ['Payments'] },
        { icon: '🛠️', title: '🌐ISO 27001', subtitle: 'Security', description: '$30K-$80K', tags: ['Security'] },
        { icon: '🛠️', title: '🏛️FedRAMP', subtitle: 'Government', description: '$250K-$2M', tags: ['Government'] },
        { icon: '🛠️', title: '📘NIST CSF', subtitle: 'Security', description: '$20K-$100K', tags: ['Security'] },
      ],
    },
    tools: {
      title: 'Compliance Platforms',
      subtitle: 'Tools for automating compliance management',
      items: [
        { icon: '🛠️', name: 'Vanta', vendor: '', description: 'Automated SOC 2, HIPAA, ISO 27001 compliance with continuous monitoring and evidence collection.', tags: [] },
        { icon: '🛠️', name: 'Drata', vendor: '', description: 'Real-time compliance monitoring with automated evidence collection and audit preparation.', tags: [] },
        { icon: '🛠️', name: 'Secureframe', vendor: '', description: 'Streamlined compliance for SOC 2, ISO 27001, HIPAA, PCI-DSS with integrations.', tags: [] },
        { icon: '🛠️', name: 'OneTrust', vendor: '', description: 'Enterprise GRC with privacy management, third-party risk, and compliance automation.', tags: [] },
        { icon: '🛠️', name: 'ServiceNow GRC', vendor: '', description: 'Integrated risk and compliance management for large enterprises with workflow automation.', tags: [] },
        { icon: '🛠️', name: 'Archer', vendor: '', description: 'Enterprise risk management platform for compliance, audit, and policy management.', tags: [] },
        { icon: '🛠️', name: 'Anecdotes', vendor: '', description: 'AI-powered compliance operating system with automated evidence mapping.', tags: [] },
        { icon: '🛠️', name: 'Sprinto', vendor: '', description: 'Fast-track SOC 2 and ISO 27001 for startups with automated workflows.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Compliance program do\'s and don\'ts',
      doItems: [
        'Implement a unified control framework that maps to multiple standards',
        'Automate evidence collection to reduce manual audit burden',
        'Conduct readiness assessments before formal audits',
        'Integrate compliance checks into CI/CD pipelines',
        'Maintain continuous monitoring rather than point-in-time compliance',
        'Document control exceptions with compensating controls',
        'Train employees on security awareness annually',
        'Review and update policies at least annually',
      ],
      dontItems: [
        'Treat compliance as a checkbox exercise rather than security improvement',
        'Wait until audit time to gather evidence',
        'Ignore findings from previous audits',
        'Underestimate the scope and complexity of frameworks like FedRAMP',
        'Skip the gap assessment phase to save time',
        'Rely solely on technical controls without documented policies',
        'Assume one framework\'s compliance satisfies all requirements',
        'Overlook third-party/vendor compliance requirements',
      ],
    },
    agent: {
      avatar: '📋',
      name: 'ComplianceAgent',
      role: 'Framework Assessment Specialist',
      description: 'Automates compliance assessments by continuously scanning your infrastructure against framework requirements. Identifies gaps, maps controls across multiple frameworks, generates audit evidence, and tracks remediation progress.',
      capabilities: [
        'Multi-framework control mapping',
        'Automated gap analysis',
        'Evidence collection & organization',
        'Audit-ready report generation',
        'Remediation tracking',
        'Policy template generation',
      ],
      codeFilename: 'Python\n                        Config\n                        compliance_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Compliance Assessment Agent
compliance_agent = Agent(
    role="Compliance Framework Specialist",
    goal="""Assess infrastructure against compliance 
    frameworks and identify gaps""",
    backstory="""Expert in SOC 2, HIPAA, GDPR, 
    ISO 27001, and PCI-DSS requirements with deep 
    knowledge of control mapping.""",
    tools=[
        infrastructure_scanner,
        policy_analyzer,
        evidence_collector,
        control_mapper
    ],
    verbose=True
)

# Gap Assessment Task
gap_assessment = Task(
    description="""
    1. Scan infrastructure configuration
    2. Map controls to SOC 2 requirements
    3. Identify gaps and exceptions
    4. Generate remediation roadmap
    5. Estimate timeline and resources
    """,
    agent=compliance_agent,
    expected_output="Gap analysis report with 
    prioritized remediation plan"
)

# Evidence Collection Task
evidence_task = Task(
    description="""
    1. Collect screenshots and logs
    2. Organize by control objective
    3. Validate evidence completeness
    4. Generate audit-ready package
    """,
    agent=compliance_agent
)

# Run the compliance crew
crew = Crew(
    agents=[compliance_agent],
    tasks=[gap_assessment, evidence_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: undefined,
    nextPage: { title: '11.2 Data Privacy', slug: 'data-privacy' },
  },
  {
    slug: 'data-privacy',
    badge: '🔒 Page 11.2',
    title: 'Data Privacy',
    description: 'Consent management, data subject rights, and privacy-by-design principles. Build robust privacy controls that protect personal data while maintaining operational efficiency and regulatory compliance.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '30', label: 'Days DSAR Deadline' },
      { value: '€20M', label: 'Max GDPR Fine' },
      { value: '140+', label: 'Global Privacy Laws' },
      { value: '72hr', label: 'Breach Notification' },
    ],
    overview: {
      title: 'Data Privacy',
      subtitle: 'Real-time consent collection and preference management',
      subsections: [
        {
          heading: 'Privacy as a Competitive Advantage',
          paragraphs: [
            'Data privacy is no longer just a compliance checkbox—it\'s a business differentiator. Organizations that handle personal data responsibly build trust with customers, reduce regulatory risk, and create sustainable data practices. GDPR, CCPA, and dozens of other privacy regulations mandate specific rights for individuals and obligations for organizations.',
            'Effective privacy management requires understanding data flows, managing consent preferences, automating data subject requests, and embedding privacy considerations into product design from the start. Modern privacy platforms like OneTrust and BigID help automate these processes at scale.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Privacy by Design Principles',
      subtitle: 'Seven foundational principles for building privacy into systems',
      columns: 2,
      cards: [
        {
          className: 'principle-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Anticipate and prevent privacy-invasive events before they happen. Privacy is built in, not bolted on.',
          examples: [],
        },
        {
          className: 'principle-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Personal data is automatically protected. No action required from individuals to protect their privacy.',
          examples: [],
        },
        {
          className: 'principle-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Privacy is integral to system design, not a feature or add-on. Core component of functionality.',
          examples: [],
        },
        {
          className: 'principle-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Privacy and security are not trade-offs. Achieve both objectives without compromise.',
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
        { icon: '📌', title: 'Consent Management Dashboard', subtitle: '', description: 'Real-time consent collection and preference management', tags: [] },
        { icon: '📌', title: 'Privacy-Controlled Data Flows', subtitle: '', description: 'Consent-based routing through the privacy engine', tags: [] },
        { icon: '📌', title: 'DSAR Processing Workflow', subtitle: '', description: 'Data Subject Access Request handling within 30-day deadline', tags: [] },
        { icon: '📌', title: 'Consent Categories', subtitle: '', description: 'Cookie and tracking consent management by purpose', tags: [] },
        { icon: '📌', title: 'Privacy by Design Principles', subtitle: '', description: 'Seven foundational principles for building privacy into systems', tags: [] },
        { icon: '📌', title: 'Privacy Impact Assessment', subtitle: '', description: 'Systematic evaluation of privacy risks for new projects', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Privacy program do\'s and don\'ts', tags: [] },
        { icon: '📌', title: 'Privacy Platforms', subtitle: '', description: 'Tools for managing privacy at scale', tags: [] },
      ],
    },
    tools: {
      title: 'Privacy Platforms',
      subtitle: 'Tools for managing privacy at scale',
      items: [
        { icon: '🛠️', name: 'OneTrust', vendor: '', description: 'Enterprise privacy platform with consent management, DSAR automation, and data mapping.', tags: [] },
        { icon: '🛠️', name: 'BigID', vendor: '', description: 'AI-powered data discovery and classification for privacy compliance.', tags: [] },
        { icon: '🛠️', name: 'TrustArc', vendor: '', description: 'Cookie consent management and privacy compliance automation.', tags: [] },
        { icon: '🛠️', name: 'Cookiebot', vendor: '', description: 'Cookie scanning and consent banner management for websites.', tags: [] },
        { icon: '🛠️', name: 'Osano', vendor: '', description: 'Consent management with real-time privacy monitoring and vendor tracking.', tags: [] },
        { icon: '🛠️', name: 'Transcend', vendor: '', description: 'Automated data subject request fulfillment across all systems.', tags: [] },
        { icon: '🛠️', name: 'Privitar', vendor: '', description: 'Data anonymization and de-identification for analytics and AI.', tags: [] },
        { icon: '🛠️', name: 'DataGrail', vendor: '', description: 'Privacy control center with automated DSR processing.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Privacy program do\'s and don\'ts',
      doItems: [
        'Implement granular consent management with clear opt-in/opt-out options',
        'Automate DSAR processing to meet 30-day deadlines consistently',
        'Maintain comprehensive data inventories and processing records',
        'Conduct PIAs before launching new products or features',
        'Apply data minimization—collect only what\'s necessary',
        'Encrypt personal data at rest and in transit',
        'Train employees on privacy responsibilities annually',
        'Document legal basis for each data processing activity',
      ],
      dontItems: [
        'Use dark patterns to manipulate consent decisions',
        'Collect data "just in case" without specific purpose',
        'Share data with third parties without proper agreements',
        'Ignore data subject requests or miss response deadlines',
        'Rely on pre-checked consent boxes (opt-out patterns)',
        'Store personal data longer than necessary',
        'Assume one consent covers all processing purposes',
        'Process children\'s data without appropriate safeguards',
      ],
    },
    agent: {
      avatar: '🔒',
      name: 'PrivacyGuard',
      role: 'Data Protection Specialist',
      description: 'Automates privacy operations including consent management, DSAR processing, data discovery, and privacy impact assessments. Monitors data flows for policy violations and ensures timely response to data subject requests.',
      capabilities: [
        'Automated DSAR processing & fulfillment',
        'Consent preference enforcement',
        'Personal data discovery across systems',
        'Privacy impact assessment automation',
        'Data flow monitoring & alerts',
        'Retention policy enforcement',
      ],
      codeFilename: 'Python\n                        Config\n                        privacy_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Privacy Guard Agent
privacy_agent = Agent(
    role="Data Protection Specialist",
    goal="""Process data subject requests and 
    enforce privacy policies across systems""",
    backstory="""Expert in GDPR, CCPA, and global 
    privacy regulations with deep knowledge of 
    consent management and data subject rights.""",
    tools=[
        data_discovery_tool,
        consent_manager,
        dsar_processor,
        retention_enforcer
    ],
    verbose=True
)

# DSAR Processing Task
dsar_task = Task(
    description="""
    1. Verify requester identity
    2. Search all systems for personal data
    3. Compile data package
    4. Apply redactions for third-party data
    5. Generate response within 30 days
    """,
    agent=privacy_agent,
    expected_output="Complete DSAR response 
    package with all personal data"
)

# Consent Enforcement Task
consent_task = Task(
    description="""
    1. Monitor data flows in real-time
    2. Check consent preferences per user
    3. Block unauthorized data transfers
    4. Log all enforcement actions
    """,
    agent=privacy_agent
)

# Run the privacy crew
crew = Crew(
    agents=[privacy_agent],
    tasks=[dsar_task, consent_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.1 Compliance Frameworks', slug: 'compliance-frameworks' },
    nextPage: { title: '11.3 Data Governance', slug: 'data-governance' },
  },
  {
    slug: 'data-governance',
    badge: '⚖️ Page 11.3',
    title: 'Data Governance',
    description: 'Establish trust in your data through quality management, lineage tracking, and stewardship. Build a data governance program that enables self-service analytics while maintaining control and compliance.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '95%', label: 'Data Quality Target' },
      { value: '2.4K', label: 'Cataloged Assets' },
      { value: '156', label: 'Data Policies' },
      { value: '12', label: 'Data Stewards' },
    ],
    overview: {
      title: 'Data Governance',
      subtitle: 'Real-time quality metrics across dimensions',
      subsections: [
        {
          heading: 'Why Data Governance Matters',
          paragraphs: [
            'Data governance ensures that data is accurate, consistent, secure, and used appropriately across the organization. It establishes accountability through data stewardship, enables trust through quality metrics, and supports compliance through lineage tracking. Without governance, organizations face data silos, inconsistent definitions, and compliance risks.',
            'Modern data governance balances control with agility. Rather than creating bottlenecks, effective governance programs enable self-service analytics by providing clear data catalogs, automated quality checks, and transparent lineage—so data consumers can find, understand, and trust the data they need.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Governance Pillars',
      subtitle: 'Core components of a data governance program',
      columns: 2,
      cards: [
        {
          className: 'pillar-0',
          borderColor: '#3B82F6',
          icon: '📋',
          title: '',
          description: 'Measure and improve accuracy, completeness, consistency, and timeliness of data through automated profiling and validation.',
          examples: [],
        },
        {
          className: 'pillar-1',
          borderColor: '#10B981',
          icon: '🗺️',
          title: '',
          description: 'Track data from source to consumption, understand transformations, and perform impact analysis for changes.',
          examples: [],
        },
        {
          className: 'pillar-2',
          borderColor: '#8B5CF6',
          icon: '📚',
          title: '',
          description: 'Enable discovery with searchable metadata, business glossaries, and documentation of data assets.',
          examples: [],
        },
        {
          className: 'pillar-3',
          borderColor: '#F59E0B',
          icon: '👥',
          title: '',
          description: 'Establish ownership and accountability for data domains with clear roles and responsibilities.',
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
        { icon: '📌', title: 'Data Quality Dashboard', subtitle: '', description: 'Real-time quality metrics across dimensions', tags: [] },
        { icon: '📌', title: 'Data Lineage', subtitle: '', description: 'Track data from source to consumption', tags: [] },
        { icon: '📌', title: 'Data Catalog', subtitle: '', description: 'Discover and understand your data assets', tags: [] },
        { icon: '📌', title: 'Governance Pillars', subtitle: '', description: 'Core components of a data governance program', tags: [] },
        { icon: '📌', title: 'Stewardship Model', subtitle: '', description: 'Roles and responsibilities in data governance', tags: [] },
        { icon: '📌', title: 'Data Lifecycle Management', subtitle: '', description: 'Managing data from creation to deletion', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Data governance do\'s and don\'ts', tags: [] },
        { icon: '📌', title: 'Governance Platforms', subtitle: '', description: 'Tools for implementing data governance', tags: [] },
      ],
    },
    tools: {
      title: 'Governance Platforms',
      subtitle: 'Tools for implementing data governance',
      items: [
        { icon: '🛠️', name: 'Databricks UC', vendor: '', description: 'Unity Catalog provides unified governance for data and AI on Databricks with fine-grained access control.', tags: [] },
        { icon: '🛠️', name: 'Collibra', vendor: '', description: 'Enterprise data catalog with business glossary, lineage, and stewardship workflows.', tags: [] },
        { icon: '🛠️', name: 'Atlan', vendor: '', description: 'Modern data catalog with collaboration features and active metadata management.', tags: [] },
        { icon: '🛠️', name: 'Alation', vendor: '', description: 'AI-powered data catalog with collaborative data governance capabilities.', tags: [] },
        { icon: '🛠️', name: 'Monte Carlo', vendor: '', description: 'Data observability platform for monitoring quality, lineage, and freshness.', tags: [] },
        { icon: '🛠️', name: 'Great Expectations', vendor: '', description: 'Open-source data quality framework with automated testing and documentation.', tags: [] },
        { icon: '🛠️', name: 'dbt', vendor: '', description: 'Data transformation with built-in documentation, testing, and lineage tracking.', tags: [] },
        { icon: '🛠️', name: 'OpenMetadata', vendor: '', description: 'Open-source metadata platform with discovery, lineage, and quality features.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Data governance do\'s and don\'ts',
      doItems: [
        'Start with high-value, high-visibility data domains',
        'Automate data quality monitoring and alerting',
        'Maintain a business glossary with clear definitions',
        'Implement data lineage tracking at the column level',
        'Assign clear ownership for each data domain',
        'Integrate governance into data pipelines (shift-left)',
        'Measure and report on data quality metrics regularly',
        'Enable self-service discovery through a data catalog',
      ],
      dontItems: [
        'Try to govern all data at once—start small and expand',
        'Create governance that blocks productivity',
        'Rely on manual processes for quality checks',
        'Ignore data quality issues in source systems',
        'Skip documentation for "temporary" solutions',
        'Assume IT alone can solve governance challenges',
        'Treat governance as a one-time project',
        'Create data silos through overly restrictive access',
      ],
    },
    agent: {
      avatar: '⚖️',
      name: 'GovernanceBot',
      role: 'Data Stewardship Specialist',
      description: 'Automates data governance tasks including quality monitoring, lineage discovery, metadata enrichment, and policy enforcement. Continuously scans data assets, identifies issues, and routes them to appropriate stewards for resolution.',
      capabilities: [
        'Automated data quality profiling',
        'Lineage discovery & impact analysis',
        'Metadata auto-enrichment',
        'Policy violation detection',
        'Stewardship task routing',
        'Business glossary suggestions',
      ],
      codeFilename: 'Python\n                        Config\n                        governance_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Governance Agent
governance_agent = Agent(
    role="Data Stewardship Specialist",
    goal="""Monitor data quality, discover lineage, 
    and enforce governance policies""",
    backstory="""Expert in data governance with deep 
    knowledge of data quality dimensions, metadata 
    management, and stewardship best practices.""",
    tools=[
        quality_profiler,
        lineage_discoverer,
        catalog_enricher,
        policy_enforcer
    ],
    verbose=True
)

# Quality Assessment Task
quality_task = Task(
    description="""
    1. Profile data assets for quality metrics
    2. Check completeness, accuracy, consistency
    3. Identify anomalies and outliers
    4. Generate quality score reports
    5. Route issues to data stewards
    """,
    agent=governance_agent,
    expected_output="Quality assessment report 
    with scores and remediation tasks"
)

# Lineage Discovery Task
lineage_task = Task(
    description="""
    1. Scan transformation code
    2. Map column-level lineage
    3. Identify upstream dependencies
    4. Document data flows
    """,
    agent=governance_agent
)

# Run the governance crew
crew = Crew(
    agents=[governance_agent],
    tasks=[quality_task, lineage_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.2 Data Privacy', slug: 'data-privacy' },
    nextPage: { title: '11.4 Risk Management', slug: 'risk-management' },
  },
  {
    slug: 'risk-management',
    badge: '⚠️ Page 11.4',
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate security and business risks. Build a proactive risk management program that balances protection with business agility through continuous monitoring and adaptive controls.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '147', label: 'Active Risks' },
      { value: '23', label: 'Critical/High' },
      { value: '89%', label: 'Mitigated On Time' },
      { value: '$2.4M', label: 'Risk Exposure' },
    ],
    overview: {
      title: 'Risk Management',
      subtitle: 'Foundational terminology and calculations',
      subsections: [
        {
          heading: 'What is Risk Management?',
          paragraphs: [
            'Risk management is the systematic process of identifying, analyzing, evaluating, and treating risks that could impact an organization\'s objectives. In the context of information security and data platforms, this means understanding threats to your data assets, evaluating their potential impact, and implementing appropriate controls to reduce risk to acceptable levels.',
            'Modern data platforms face a complex threat landscape: cyberattacks, insider threats, compliance violations, vendor failures, and operational disruptions. Without a structured approach to risk management, organizations react to incidents rather than preventing them. Effective risk management enables proactive decision-making, optimal resource allocation, and demonstrates due diligence to regulators and stakeholders.',
            'The goal of risk management is not to eliminate all risks—that would be impossible and prohibitively expensive. Instead, effective risk management helps organizations make informed decisions about which risks to accept, which to mitigate, and how much to invest in controls.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Risk Concepts',
      subtitle: 'Foundational terminology and calculations',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'Threat',
          description: 'A potential cause of an unwanted incident that may result in harm. Threats can be natural (earthquakes), human (hackers), or environmental (power failures).',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔓',
          title: 'Vulnerability',
          description: 'A weakness in a system, process, or control that could be exploited by a threat. Includes software bugs, misconfigurations, or gaps in procedures.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '⚠️',
          title: 'Risk',
          description: 'The potential for loss when a threat exploits a vulnerability. Risk is the combination of likelihood and impact.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Risk Management',
          description: 'Identify, assess, and mitigate security and business risks. Build a proactive risk management program that balances protection with business agility through continuous monitoring and adaptive controls',
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
        { icon: '📌', title: 'Key Risk Concepts', subtitle: '', description: 'Foundational terminology and calculations', tags: [] },
        { icon: '📌', title: 'Risk Dashboard', subtitle: '', description: 'Real-time risk posture overview', tags: [] },
        { icon: '📌', title: 'Risk Assessment Matrix', subtitle: '', description: 'Impact vs. Likelihood heat map', tags: [] },
        { icon: '📌', title: 'Risk Categories', subtitle: '', description: 'Types of risks affecting data platforms', tags: [] },
        { icon: '📌', title: 'Top Risks Register', subtitle: '', description: 'Priority risks requiring immediate attention', tags: [] },
        { icon: '📌', title: 'Threat Landscape', subtitle: '', description: 'Current threat categories and intelligence', tags: [] },
        { icon: '📌', title: 'Risk Management Framework', subtitle: '', description: 'NIST RMF continuous process', tags: [] },
        { icon: '📌', title: 'Risk Quantification', subtitle: '', description: 'Expressing risk in financial terms', tags: [] },
      ],
    },
    tools: {
      title: 'GRC Platforms',
      subtitle: 'Tools for risk management',
      items: [
        { icon: '🛠️', name: 'ServiceNow GRC', vendor: '', description: 'Integrated risk, compliance, and audit on the Now Platform with workflow automation.', tags: [] },
        { icon: '🛠️', name: 'RSA Archer', vendor: '', description: 'Comprehensive GRC platform with quantitative risk analytics and regulatory content.', tags: [] },
        { icon: '🛠️', name: 'LogicGate Risk Cloud', vendor: '', description: 'Flexible GRC platform with visual workflow builder and rapid deployment.', tags: [] },
        { icon: '🛠️', name: 'OneTrust GRC', vendor: '', description: 'Privacy-centric GRC with integrated third-party risk management.', tags: [] },
        { icon: '🛠️', name: 'ZenGRC', vendor: '', description: 'SaaS GRC designed for simplicity, speed, and compliance automation.', tags: [] },
        { icon: '🛠️', name: 'Prevalent', vendor: '', description: 'Vendor risk management with continuous monitoring and assessment automation.', tags: [] },
        { icon: '🛠️', name: 'SecurityScorecard', vendor: '', description: 'External security ratings and cyber risk intelligence for you and your vendors.', tags: [] },
        { icon: '🛠️', name: 'Bitsight', vendor: '', description: 'Security performance management and continuous cyber risk monitoring.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Risk management do\'s and don\'ts',
      doItems: [
        'Quantify risks in business terms—use financial impact to communicate with leadership',
        'Integrate risk management into daily operations, not just annual assessments',
        'Maintain a living risk register with regular reviews and updates',
        'Assign clear ownership for each risk with accountability for mitigation',
        'Use threat intelligence to inform and prioritize risk assessments',
        'Automate risk monitoring through KRIs and continuous control testing',
        'Report risk metrics to leadership and board on a regular cadence',
        'Test your assumptions through tabletop exercises and simulations',
        'Consider both likelihood and impact—don\'t ignore low-probability, high-impact risks',
        'Document risk acceptance decisions with clear rationale and expiration dates',
      ],
      dontItems: [
        'Treat risk management as a one-time checkbox exercise for auditors',
        'Focus only on technical risks while ignoring business and operational risks',
        'Accept risks without documented justification and appropriate authority',
        'Let your risk register become stale, outdated, or disconnected from reality',
        'Assume that compliance equals security—they\'re related but distinct',
        'Overcomplicate your methodology—simple, consistent approaches work better',
        'Hide risks from leadership to avoid difficult conversations',
        'Rely solely on qualitative assessments—add quantification where possible',
        'Ignore residual risk after implementing controls—it still needs monitoring',
        'Treat all risks equally—prioritization is essential for resource allocation',
      ],
    },
    agent: {
      avatar: '⚠️',
      name: 'RiskAnalyzer',
      role: 'Risk Assessment Specialist',
      description: 'Automates risk identification, assessment, and monitoring by integrating threat intelligence feeds, vulnerability scanners, and business context. Continuously monitors risk posture, calculates dynamic risk scores, and recommends mitigations based on cost-benefit analysis.',
      capabilities: [
        'Automated risk identification from multiple data sources',
        'Dynamic risk scoring with real-time threat intelligence',
        'Financial impact analysis and ALE calculation',
        'Mitigation recommendation engine with ROI estimates',
        'Risk trend analysis and predictive forecasting',
        'Executive risk reporting and dashboard generation',
      ],
      codeFilename: 'Python\n                        Config\n                        risk_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Risk Analyzer Agent
risk_agent = Agent(
    role="Risk Assessment Specialist",
    goal="""Identify, assess, and prioritize 
    security risks using threat intelligence 
    and business context""",
    backstory="""Expert risk analyst with deep 
    knowledge of NIST RMF, ISO 31000, FAIR, 
    and quantitative risk methodologies.""",
    tools=[
        threat_intel_feed,
        vuln_scanner,
        asset_inventory,
        risk_calculator,
        grc_platform_api
    ],
    verbose=True
)

# Risk Assessment Task
assess_task = Task(
    description="""
    1. Gather current threat intelligence
    2. Correlate with asset vulnerabilities
    3. Calculate likelihood and impact
    4. Compute ALE for quantification
    5. Score and prioritize risks
    6. Recommend cost-effective mitigations
    """,
    agent=risk_agent,
    expected_output="Prioritized risk report 
    with financial analysis and mitigations"
)

# Continuous Monitoring Task
monitor_task = Task(
    description="""
    1. Track KRI metrics in real-time
    2. Detect changes in risk posture
    3. Alert on threshold breaches
    4. Update risk scores dynamically
    5. Generate trend reports
    """,
    agent=risk_agent
)

# Run the risk assessment crew
crew = Crew(
    agents=[risk_agent],
    tasks=[assess_task, monitor_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.3 Data Governance', slug: 'data-governance' },
    nextPage: { title: '11.5 Identity & Access Management', slug: 'identity-access' },
  },
  {
    slug: 'identity-access',
    badge: '🪪 Page 11.5',
    title: 'Identity & Access Management',
    description: 'Control who can access what resources and under what conditions. Implement robust authentication, authorization, and identity governance to protect your data platform while enabling productivity.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '12,847', label: 'Managed Identities' },
      { value: '98.7%', label: 'MFA Adoption' },
      { value: '847', label: 'Active Roles' },
      { value: '4.2M', label: 'Daily Auth Events' },
    ],
    overview: {
      title: 'Identity & Access Management',
      subtitle: 'Foundational concepts for secure access management',
      subsections: [
        {
          heading: 'What is Identity & Access Management (IAM)?',
          paragraphs: [
            'Identity and Access Management (IAM) is the security discipline that ensures the right individuals have appropriate access to the right resources at the right time for the right reasons. IAM encompasses the policies, processes, and technologies used to manage digital identities and control access to systems, applications, and data.',
            'Modern data platforms present unique IAM challenges: thousands of users with varying needs, sensitive data requiring granular access controls, service accounts for automated pipelines, external partner access, and regulatory requirements for access governance. Without proper IAM, organizations face data breaches, compliance violations, and operational inefficiencies.',
            'IAM consists of two fundamental processes that work together:',
            'The foundation of good IAM is the principle of least privilege: users should have only the minimum access necessary to perform their job functions. This limits the blast radius of compromised accounts and reduces the risk of accidental or intentional data exposure. Implementing least privilege requires continuous review and adjustment as roles and responsibilities change.',
          ],
        },
      ],
    },
    concepts: {
      title: 'IAM Core Principles',
      subtitle: 'Foundational concepts for secure access management',
      columns: 2,
      cards: [
        {
          className: 'principle-0',
          borderColor: '#3B82F6',
          icon: '🔐',
          title: 'Least Privilege',
          description: 'Grant users only the minimum permissions required to perform their job functions. Start with no access and add permissions as needed, rather than starting with broad access and restricting later.',
          examples: [],
        },
        {
          className: 'principle-1',
          borderColor: '#10B981',
          icon: '🔀',
          title: 'Separation of Duties',
          description: 'Divide critical tasks among multiple people to prevent fraud and errors. No single person should control all aspects of a sensitive process—for example, the person who requests access should not approve it.',
          examples: [],
        },
        {
          className: 'principle-2',
          borderColor: '#8B5CF6',
          icon: '⏱️',
          title: 'Just-In-Time Access',
          description: 'Provide elevated access only when needed and for the minimum time required. Privileged access should be temporary by default, with automatic expiration after the task is complete.',
          examples: [],
        },
        {
          className: 'principle-3',
          borderColor: '#F59E0B',
          icon: '🔍',
          title: 'Need to Know',
          description: 'Access to sensitive information should be restricted to those with a legitimate business need. Even with technical access, viewing data requires specific authorization based on job requirements.',
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
        { icon: '📌', title: 'IAM Core Principles', subtitle: '', description: 'Foundational concepts for secure access management', tags: [] },
        { icon: '📌', title: 'IAM Dashboard', subtitle: '', description: 'Identity and access metrics overview', tags: [] },
        { icon: '📌', title: 'Authentication Methods', subtitle: '', description: 'How to verify user identity', tags: [] },
        { icon: '📌', title: 'Authorization Models', subtitle: '', description: 'How to control what users can access', tags: [] },
        { icon: '📌', title: 'Identity Lifecycle Management', subtitle: '', description: 'Managing identities from creation to deletion', tags: [] },
        { icon: '📌', title: 'Privileged Access Management', subtitle: '', description: 'Securing the keys to the kingdom', tags: [] },
        { icon: '📌', title: 'Zero Trust Architecture', subtitle: '', description: 'Never trust, always verify', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'IAM do\'s and don\'ts', tags: [] },
      ],
    },
    tools: {
      title: 'IAM Platforms',
      subtitle: 'Tools for identity and access management',
      items: [
        { icon: '🛠️', name: 'Microsoft Entra ID', vendor: '', description: 'Enterprise identity platform (formerly Azure AD) with SSO, MFA, conditional access, and governance.', tags: [] },
        { icon: '🛠️', name: 'Okta', vendor: '', description: 'Cloud-native identity management with universal directory, SSO, MFA, and lifecycle management.', tags: [] },
        { icon: '🛠️', name: 'CyberArk', vendor: '', description: 'Privileged access management with credential vaulting, session recording, and JIT access.', tags: [] },
        { icon: '🛠️', name: 'HashiCorp Vault', vendor: '', description: 'Secrets management platform for dynamic credentials, encryption, and PKI services.', tags: [] },
        { icon: '🛠️', name: 'Ping Identity', vendor: '', description: 'Enterprise IAM with adaptive authentication, API security, and customer identity management.', tags: [] },
        { icon: '🛠️', name: 'SailPoint', vendor: '', description: 'Identity governance and administration with access reviews, role mining, and compliance.', tags: [] },
        { icon: '🛠️', name: 'BeyondTrust', vendor: '', description: 'Privileged access management with password safe, endpoint privilege management, and remote access.', tags: [] },
        { icon: '🛠️', name: 'Auth0', vendor: '', description: 'Customer identity platform with universal login, social connections, and extensible authentication.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'IAM do\'s and don\'ts',
      doItems: [
        'Require MFA for all human users without exception—hardware keys for privileged access',
        'Implement SSO to reduce password sprawl and centralize authentication control',
        'Automate provisioning/deprovisioning with HR system integration for zero-delay offboarding',
        'Use managed identities or workload identity federation for service accounts—no passwords',
        'Conduct quarterly access reviews with manager attestation and auto-revocation for non-response',
        'Implement just-in-time privileged access—eliminate standing admin privileges',
        'Apply least privilege by default—explicit grants only, deny everything else',
        'Monitor and alert on authentication anomalies: impossible travel, unusual times, failed attempts',
        'Encrypt all authentication traffic and store credentials in vaults, never in code',
        'Document all roles and permissions with clear business justification',
      ],
      dontItems: [
        'Allow shared accounts or credentials—every identity should be individual and accountable',
        'Use SMS for MFA—it\'s vulnerable to SIM swapping and interception attacks',
        'Store passwords, API keys, or secrets in source code, config files, or environment variables',
        'Grant standing privileged access—admin rights should be temporary and just-in-time',
        'Rely on self-service access requests without approval workflows and review cycles',
        'Keep orphaned accounts after employee termination—deactivate within hours, not days',
        'Use service accounts interactively or share them across multiple applications',
        'Grant broad permissions like "Owner" or "Admin" when specific permissions suffice',
        'Skip access reviews because they\'re time-consuming—automate and enforce completion',
        'Trust internal network traffic—apply Zero Trust principles everywhere',
      ],
    },
    agent: {
      avatar: '🪪',
      name: 'IdentityGuard',
      role: 'IAM Automation Specialist',
      description: 'Automates identity lifecycle management, access reviews, and anomaly detection. Integrates with identity providers, HR systems, and ticketing platforms to streamline provisioning, detect risky access patterns, and enforce least privilege continuously.',
      capabilities: [
        'Automated provisioning from HR system events',
        'Intelligent access request routing and approval',
        'Continuous access review automation',
        'Orphaned account detection and cleanup',
        'Privilege creep detection and remediation',
        'Anomalous access pattern alerting',
      ],
      codeFilename: 'Python\n                        Config\n                        identity_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Identity Guard Agent
identity_agent = Agent(
    role="IAM Automation Specialist",
    goal="""Automate identity lifecycle, 
    enforce least privilege, and detect 
    anomalous access patterns""",
    backstory="""Expert in identity governance 
    with deep knowledge of RBAC, ABAC, 
    PAM, and Zero Trust architecture.""",
    tools=[
        idp_api,          # Okta/Entra ID
        hr_system_api,    # Workday/SAP
        pam_api,          # CyberArk
        siem_api,         # Splunk/Sentinel
        ticketing_api     # ServiceNow
    ],
    verbose=True
)

# Access Review Automation Task
review_task = Task(
    description="""
    1. Pull current access entitlements
    2. Compare against role definitions
    3. Identify excess permissions
    4. Flag dormant access (90+ days)
    5. Generate review notifications
    6. Auto-revoke on non-response
    """,
    agent=identity_agent,
    expected_output="Access review report 
    with remediation actions"
)

# Anomaly Detection Task
anomaly_task = Task(
    description="""
    1. Analyze authentication logs
    2. Detect impossible travel
    3. Flag unusual access times
    4. Identify privilege escalation
    5. Alert on suspicious patterns
    """,
    agent=identity_agent
)

# Run the identity management crew
crew = Crew(
    agents=[identity_agent],
    tasks=[review_task, anomaly_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.4 Risk Management', slug: 'risk-management' },
    nextPage: { title: '11.6 Audit & Logging', slug: 'audit-logging' },
  },
  {
    slug: 'audit-logging',
    badge: '📊 Page 11.6',
    title: 'Audit & Logging',
    description: 'Capture, store, and analyze security events to detect threats, investigate incidents, and demonstrate compliance. Build comprehensive visibility into your data platform with centralized logging and real-time monitoring.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '2.4TB', label: 'Daily Log Volume' },
      { value: '847', label: 'Active Alert Rules' },
      { value: '99.7%', label: 'Log Collection Rate' },
      { value: '45s', label: 'Avg Detection Time' },
    ],
    overview: {
      title: 'Audit & Logging',
      subtitle: 'Categories of security-relevant logs',
      subsections: [
        {
          heading: 'What is Audit Logging?',
          paragraphs: [
            'Audit logging is the practice of recording events that occur within systems, applications, and networks to create a chronological record of activities. These logs serve as the foundation for security monitoring, incident investigation, compliance reporting, and operational troubleshooting. Without comprehensive logging, organizations are blind to threats and unable to reconstruct events after incidents.',
            'Data platforms are high-value targets because they contain sensitive information. Comprehensive logging provides visibility into who accessed what data, when, and how. This visibility is essential for detecting unauthorized access, investigating data breaches, meeting regulatory requirements (like GDPR\'s accountability principle), and maintaining trust with customers and stakeholders.',
            'Understanding the differences helps build comprehensive observability:',
          ],
        },
      ],
    },
    concepts: {
      title: 'Log Types',
      subtitle: 'Categories of security-relevant logs',
      columns: 2,
      cards: [
        {
          className: 'log-type-0',
          borderColor: '#3B82F6',
          icon: '🔐',
          title: 'Authentication Logs',
          description: 'Records of login attempts, successes, failures, and session events. Critical for detecting brute force attacks, credential stuffing, and compromised accounts.',
          examples: [],
        },
        {
          className: 'log-type-1',
          borderColor: '#10B981',
          icon: '🔓',
          title: 'Authorization Logs',
          description: 'Records of access control decisions—granted and denied. Shows who tried to access what resources and whether they were permitted.',
          examples: [],
        },
        {
          className: 'log-type-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: 'Data Access Logs',
          description: 'Records of data queries, reads, writes, exports, and downloads. Essential for detecting data exfiltration and unauthorized data access patterns.',
          examples: [],
        },
        {
          className: 'log-type-3',
          borderColor: '#F59E0B',
          icon: '⚙️',
          title: 'Administrative Logs',
          description: 'Records of configuration changes, user management, and system administration activities. Tracks who changed what and when.',
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
        { icon: '📌', title: 'Log Types', subtitle: '', description: 'Categories of security-relevant logs', tags: [] },
        { icon: '📌', title: 'Logging Dashboard', subtitle: '', description: 'Operational metrics overview', tags: [] },
        { icon: '📌', title: 'Logging Architecture', subtitle: '', description: 'End-to-end log management pipeline', tags: [] },
        { icon: '📌', title: 'SIEM Capabilities', subtitle: '', description: 'Security Information and Event Management', tags: [] },
        { icon: '📌', title: 'Log Retention', subtitle: '', description: 'How long to keep different log types', tags: [] },
        { icon: '📌', title: 'Detection Rules', subtitle: '', description: 'Critical alerts for data platform security', tags: [] },
        { icon: '📌', title: 'Compliance Requirements', subtitle: '', description: 'Regulatory logging mandates', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Logging do\'s and don\'ts', tags: [] },
      ],
    },
    tools: {
      title: 'Logging Platforms',
      subtitle: 'Tools for log management and SIEM',
      items: [
        { icon: '🛠️', name: 'Microsoft Sentinel', vendor: '', description: 'Cloud-native SIEM with AI-powered analytics, Azure integration, and SOAR capabilities.', tags: [] },
        { icon: '🛠️', name: 'Splunk', vendor: '', description: 'Industry-leading SIEM with powerful search, machine learning, and extensive app ecosystem.', tags: [] },
        { icon: '🛠️', name: 'Elastic Security', vendor: '', description: 'Open-source SIEM built on Elasticsearch with detection rules, ML, and endpoint integration.', tags: [] },
        { icon: '🛠️', name: 'CrowdStrike Falcon LogScale', vendor: '', description: 'High-performance log management (formerly Humio) with streaming ingestion and fast search.', tags: [] },
        { icon: '🛠️', name: 'Datadog Security', vendor: '', description: 'Security monitoring integrated with observability platform for unified DevSecOps.', tags: [] },
        { icon: '🛠️', name: 'Sumo Logic', vendor: '', description: 'Cloud-native log analytics with machine learning and compliance dashboards.', tags: [] },
        { icon: '🛠️', name: 'Panther', vendor: '', description: 'Detection-as-code SIEM built for cloud-native environments with Python rules.', tags: [] },
        { icon: '🛠️', name: 'Google Chronicle', vendor: '', description: 'Petabyte-scale security analytics with Google infrastructure and threat intelligence.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Logging do\'s and don\'ts',
      doItems: [
        'Log all authentication events—successful and failed—with source IP, user agent, and timestamp',
        'Normalize logs to a common schema (ECS, OCSF) to enable cross-source correlation',
        'Enrich logs with context: user department, asset criticality, data classification',
        'Implement tamper-evident logging with cryptographic verification or WORM storage',
        'Synchronize time across all systems using NTP to enable accurate correlation',
        'Set up real-time alerting for high-priority security events with clear escalation',
        'Conduct regular log reviews—daily for critical systems, weekly for others',
        'Test your logging pipeline regularly to ensure coverage and detect gaps',
        'Document retention policies and automate lifecycle management',
        'Protect log infrastructure as critical security assets—it\'s a prime attacker target',
      ],
      dontItems: [
        'Log sensitive data: passwords, API keys, tokens, SSNs, credit card numbers—even accidentally',
        'Store logs only on the systems that generate them—centralize to prevent tampering',
        'Ignore log collection failures—treat them as critical incidents requiring immediate action',
        'Create alerts without tuning—alert fatigue leads to missed real threats',
        'Delete logs before retention requirements expire or without legal review',
        'Assume logging is working—verify coverage continuously through testing',
        'Grant broad access to log data—it often contains sensitive operational details',
        'Skip log analysis—collected logs are worthless if never reviewed',
        'Use inconsistent timestamps—time zones and formats must be standardized',
        'Treat logging as an afterthought—design it into systems from the start',
      ],
    },
    agent: {
      avatar: '📊',
      name: 'LogSentinel',
      role: 'Security Log Analyst',
      description: 'Automates log analysis, threat hunting, and alert triage. Integrates with SIEM platforms to correlate events, identify attack patterns, and generate investigation timelines. Reduces analyst workload by pre-processing alerts and surfacing high-confidence threats.',
      capabilities: [
        'Automated alert triage and prioritization',
        'Cross-source event correlation',
        'Attack pattern recognition (MITRE ATT&CK)',
        'Investigation timeline generation',
        'Natural language log queries',
        'Anomaly detection and hunting',
      ],
      codeFilename: 'Python\n                        Config\n                        log_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool

# Define the Log Sentinel Agent
log_agent = Agent(
    role="Security Log Analyst",
    goal="""Analyze security logs to detect 
    threats, triage alerts, and support 
    incident investigations""",
    backstory="""Expert SOC analyst with deep 
    knowledge of MITRE ATT&CK, log analysis, 
    threat hunting, and incident response.""",
    tools=[
        siem_query_api,     # Splunk/Sentinel
        threat_intel_api,   # MISP/VirusTotal
        enrichment_api,     # IP/Domain lookup
        ticketing_api,      # ServiceNow
        mitre_attack_db     # ATT&CK mapping
    ],
    verbose=True
)

# Alert Triage Task
triage_task = Task(
    description="""
    1. Retrieve new alerts from SIEM
    2. Enrich with threat intelligence
    3. Correlate with related events
    4. Determine true/false positive
    5. Prioritize by severity and context
    6. Create investigation tickets
    """,
    agent=log_agent,
    expected_output="Triaged alert queue 
    with investigation recommendations"
)

# Threat Hunting Task
hunt_task = Task(
    description="""
    1. Generate hunting hypotheses
    2. Query logs for indicators
    3. Identify anomalous patterns
    4. Map findings to ATT&CK
    5. Document and report findings
    """,
    agent=log_agent
)

# Run the log analysis crew
crew = Crew(
    agents=[log_agent],
    tasks=[triage_task, hunt_task]
)
result = crew.kickoff()`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.5 Identity & Access Management', slug: 'identity-access' },
    nextPage: { title: '11.7 Incident Response', slug: 'incident-response' },
  },
  {
    slug: 'incident-response',
    badge: '🚨 Page 11.7',
    title: 'Incident Response',
    description: 'Comprehensive protocols for detecting, containing, eradicating, and recovering from security incidents. Build a battle-tested incident response capability that minimizes damage, ensures regulatory compliance, and strengthens your security posture through continuous improvement.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: '23', label: 'Incidents YTD' },
      { value: '4.2h', label: 'Mean Time to Contain' },
      { value: '98%', label: 'SLA Compliance' },
      { value: '12', label: 'Active Playbooks' },
    ],
    overview: {
      title: 'IR Fundamentals',
      subtitle: 'Core concepts and foundational knowledge',
      subsections: [
        {
          heading: 'IR Fundamentals',
          paragraphs: [
            'Core concepts and foundational knowledge',
            'Incident response (IR) is the organized, systematic approach to addressing and managing the aftermath of a security breach, cyberattack, or other security event. The goal is to handle the situation in a way that limits damage, reduces recovery time and costs, preserves evidence for potential legal action, and prevents future incidents through lessons learned.',
            'A well-prepared incident response capability is essential for every organization. Security incidents are inevitable—the question is not if you\'ll experience one, but when. Organizations with mature IR programs consistently demonstrate faster containment, lower breach costs, and better regulatory outcomes.',
          ],
        },
        {
          heading: 'IR Lifecycle',
          paragraphs: [
            'NIST SP 800-61 Incident Response phases',
            'Preparation is the most important phase—it determines how effectively you\'ll handle actual incidents. This phase is ongoing and should consume 80% of your IR program effort.',
            'The detection phase determines how quickly you identify incidents. Faster detection means less damage, lower costs, and better outcomes.',
          ],
        },
        {
          heading: 'Severity Classification',
          paragraphs: [
            'How to categorize and prioritize incidents',
            'Use these factors to determine incident severity. When factors point to different severities, use the highest indicated level.',
            'Severity levels can change as more information becomes available:',
          ],
        },
      ],
    },
    concepts: {
      title: 'Severity Classification',
      subtitle: 'How to categorize and prioritize incidents',
      columns: 2,
      cards: [
        {
          className: 'severity-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Active attack causing significant business impact. Confirmed data breach, ransomware, or compromise of critical systems. All-hands response required immediately.',
          examples: [],
        },
        {
          className: 'severity-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Confirmed security incident with potential for significant impact. Not yet critical but could escalate quickly without rapid response.',
          examples: [],
        },
        {
          className: 'severity-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Security event requiring investigation and response. Limited immediate impact but needs attention to prevent escalation.',
          examples: [],
        },
        {
          className: 'severity-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Minor security event or policy violation. Can be handled through standard processes without urgency or significant resource allocation.',
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
        { icon: '📌', title: 'IR Fundamentals', subtitle: '', description: 'Core concepts and foundational knowledge', tags: [] },
        { icon: '📌', title: 'IR Lifecycle', subtitle: '', description: 'NIST SP 800-61 Incident Response phases', tags: [] },
        { icon: '📌', title: 'Severity Classification', subtitle: '', description: 'How to categorize and prioritize incidents', tags: [] },
        { icon: '📌', title: 'Ransomware Response Playbook', subtitle: '', description: 'Complete protocol for ransomware incidents', tags: [] },
        { icon: '📌', title: 'Data Breach Response Playbook', subtitle: '', description: 'Protocol for confirmed data exfiltration', tags: [] },
        { icon: '📌', title: 'Phishing Response Playbook', subtitle: '', description: 'Protocol for phishing and credential theft', tags: [] },
        { icon: '📌', title: 'Insider Threat Response Playbook', subtitle: '', description: 'Protocol for malicious or negligent insiders', tags: [] },
        { icon: '📌', title: 'DDoS Response Playbook', subtitle: '', description: 'Protocol for denial of service attacks', tags: [] },
      ],
    },
    tools: {
      title: 'IR Tools & Platforms',
      subtitle: 'Essential tools for incident response',
      items: [
        { icon: '🛠️', name: 'CrowdStrike Falcon', vendor: '', description: 'Industry-leading endpoint detection and response with threat hunting, forensics, and managed services.', tags: [] },
        { icon: '🛠️', name: 'Microsoft Defender XDR', vendor: '', description: 'Integrated XDR across endpoint, identity, email, and cloud with automated investigation.', tags: [] },
        { icon: '🛠️', name: 'SentinelOne', vendor: '', description: 'AI-powered endpoint protection with autonomous response and deep visibility.', tags: [] },
        { icon: '🛠️', name: 'Palo Alto Cortex XDR', vendor: '', description: 'Extended detection and response integrating network, endpoint, and cloud data.', tags: [] },
        { icon: '🛠️', name: 'Palo Alto XSOAR', vendor: '', description: 'Security orchestration and automated response with 700+ integrations and playbook automation.', tags: [] },
        { icon: '🛠️', name: 'Splunk SOAR', vendor: '', description: 'Automation platform with 300+ app integrations and customizable playbooks.', tags: [] },
        { icon: '🛠️', name: 'TheHive', vendor: '', description: 'Open-source incident response platform with case management and Cortex integration.', tags: [] },
        { icon: '🛠️', name: 'ServiceNow SecOps', vendor: '', description: 'Security operations integrated with ITSM for unified incident and vulnerability management.', tags: [] },
        { icon: '🛠️', name: 'Velociraptor', vendor: '', description: 'Digital forensics and incident response for endpoint visibility, artifact collection, and hunting.', tags: [] },
        { icon: '🛠️', name: 'Volatility', vendor: '', description: 'Open-source memory forensics framework for analyzing RAM dumps and malware artifacts.', tags: [] },
        { icon: '🛠️', name: 'Autopsy', vendor: '', description: 'Open-source digital forensics platform for disk analysis, timeline, and keyword search.', tags: [] },
        { icon: '🛠️', name: 'FTK Imager', vendor: '', description: 'Free forensic imaging tool for creating evidence-grade disk and memory images.', tags: [] },
        { icon: '🛠️', name: 'Wireshark', vendor: '', description: 'Industry-standard network protocol analyzer for packet capture and analysis.', tags: [] },
        { icon: '🛠️', name: 'KAPE', vendor: '', description: 'Kroll Artifact Parser and Extractor for rapid forensic artifact collection and processing.', tags: [] },
        { icon: '🛠️', name: 'GRR Rapid Response', vendor: '', description: 'Google\'s open-source remote live forensics framework for enterprise-scale response.', tags: [] },
        { icon: '🛠️', name: 'Plaso/log2timeline', vendor: '', description: 'Super timeline creation from diverse evidence sources for chronological analysis.', tags: [] },
        { icon: '🛠️', name: 'MISP', vendor: '', description: 'Open-source threat intelligence platform for sharing IOCs and threat data.', tags: [] },
        { icon: '🛠️', name: 'VirusTotal', vendor: '', description: 'Multi-scanner malware analysis and file/URL reputation lookup service.', tags: [] },
        { icon: '🛠️', name: 'Any.Run', vendor: '', description: 'Interactive malware sandbox for dynamic analysis and behavioral observation.', tags: [] },
        { icon: '🛠️', name: 'URLScan.io', vendor: '', description: 'Website scanning and analysis for phishing, malware, and suspicious content.', tags: [] },
        { icon: '🛠️', name: 'PagerDuty', vendor: '', description: 'Incident alerting, on-call scheduling, and escalation management for rapid response.', tags: [] },
        { icon: '🛠️', name: 'Slack/Teams', vendor: '', description: 'Real-time team communication with dedicated incident channels and integrations.', tags: [] },
        { icon: '🛠️', name: 'Zoom/Webex', vendor: '', description: 'Video conferencing for virtual war rooms and stakeholder briefings.', tags: [] },
        { icon: '🛠️', name: 'Confluence/Notion', vendor: '', description: 'Wiki and documentation platform for playbooks, runbooks, and incident notes.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Do\'s and Don\'ts for incident response',
      doItems: [
        'Prepare before incidents happen: Have tested playbooks, trained teams, established relationships with external resources, and documented contact information ready.',
        'Preserve evidence before remediation: Capture memory, disk images, and logs before taking any cleanup actions. Evidence may be crucial for legal, insurance, or future prevention.',
        'Establish clear command structure: One Incident Commander with decision authority prevents confusion and delays. Know who can make what decisions.',
        'Document everything in real-time: Assign a dedicated Scribe to maintain timeline, decisions, and rationale. Memory fades; documentation persists.',
        'Communicate regularly: Provide status updates even when there\'s no new information. Set expectations for update frequency. Silence breeds anxiety.',
        'Involve legal early: Engage counsel immediately for guidance on privilege, notifications, and evidence handling. Earlier is always better.',
        'Follow your playbooks: They exist for a reason. If you find gaps, note them for post-incident improvement.',
        'Contain before eradicating: Stop the bleeding first. Understand the scope before trying to remove the threat.',
        'Verify eradication completeness: Check for persistence mechanisms, additional compromised accounts, and lateral movement before declaring victory.',
        'Conduct blameless post-mortems: Focus on process and system improvements, not individual fault. Create psychological safety for honest discussion.',
        'Track and complete action items: Lessons learned are worthless if improvements aren\'t implemented. Hold people accountable for completion.',
        'Run regular exercises: Practice makes permanent. Tabletop exercises reveal gaps and build team confidence before real incidents.',
      ],
      dontItems: [
        'Don\'t panic or make hasty decisions: Take a breath, follow the playbook, think before acting. Rushed decisions often make things worse.',
        'Don\'t power off systems immediately: This destroys volatile evidence in memory including running processes, network connections, and potentially encryption keys.',
        'Don\'t alert attackers before containment is ready: Tipping off attackers may cause them to accelerate damage or destroy evidence.',
        'Don\'t communicate externally without legal review: Statements can create liability. All external communications should be reviewed by counsel.',
        'Don\'t work in silos: IR requires coordination across security, IT, legal, communications, and business. Share information appropriately.',
        'Don\'t assume the incident is over when immediate threat is contained: Attackers often have multiple persistence mechanisms. Verify thoroughly.',
        'Don\'t skip the post-mortem because everyone is exhausted: Schedule it now while memories are fresh, even if you do it in a week.',
        'Don\'t blame individuals in post-mortems: Blame shuts down honest discussion and prevents real learning. Focus on systemic improvements.',
        'Don\'t delete logs or evidence during remediation: Even accidental deletion can hamper investigation or create legal issues.',
        'Don\'t negotiate with ransomware attackers without expert guidance: Engage professional negotiators through legal counsel if considering payment.',
        'Don\'t let perfect be the enemy of good: Make progress, even if imperfect. You can refine as you go.',
        'Don\'t forget to take care of your team: IR is stressful. Ensure people take breaks, rotate on-call, and recover after major incidents.',
      ],
    },
    agent: {
      avatar: '🚨',
      name: 'IncidentCommander',
      role: 'IR Orchestration Agent',
      description: 'Automates incident triage, playbook execution, evidence collection, and stakeholder coordination. Integrates with SIEM, EDR, SOAR, and ticketing systems to accelerate response while maintaining comprehensive documentation. Provides real-time guidance based on incident type and severity.',
      capabilities: [
        'Automated alert triage and severity classification',
        'Intelligent playbook selection and guided execution',
        'Evidence collection orchestration across systems',
        'Automated stakeholder notification and escalation',
        'Real-time timeline and documentation generation',
        'IOC extraction and threat intelligence enrichment',
        'Containment action orchestration via SOAR',
        'Post-incident report compilation and metrics',
      ],
      codeFilename: 'Python\n                        Playbook\n                        incident_commander_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.tools import Tool
from datetime import datetime

# Initialize IR tools
siem_api = SIEMQueryTool("splunk")
edr_api = EDRTool("crowdstrike")
soar_api = SOARTool("xsoar")
ticket_api = TicketingTool("servicenow")
notify_api = NotificationTool("pagerduty")
ti_api = ThreatIntelTool("misp")

# Define the Incident Commander Agent
ir_commander = Agent(
    role="Incident Response Commander",
    goal="""Coordinate security incident response 
    by triaging alerts, executing playbooks, 
    orchestrating containment, and maintaining 
    comprehensive documentation.""",
    backstory="""Expert incident responder with 
    deep expertise in NIST IR framework, digital 
    forensics, threat hunting, and crisis 
    management. Certified GCIH and GCFA.""",
    tools=[
        siem_api, edr_api, soar_api,
        ticket_api, notify_api, ti_api
    ],
    verbose=True
)

# Incident Triage Task
triage_task = Task(
    description="""
    1. Analyze incoming alert from SIEM
    2. Query EDR for endpoint context
    3. Enrich IOCs with threat intelligence
    4. Correlate with recent related events
    5. Classify severity (SEV 1-4)
    6. Select appropriate response playbook
    7. Create incident ticket with findings
    8. Notify appropriate responders
    """,
    agent=ir_commander,
    expected_output="""Classified incident 
    with severity, playbook, and response 
    team activated"""
)

# Containment Orchestration Task
containment_task = Task(
    description="""
    1. Execute containment playbook via SOAR
    2. Isolate affected endpoints via EDR
    3. Block malicious IPs/domains at firewall
    4. Disable compromised accounts
    5. Preserve evidence before remediation
    6. Document all containment actions
    7. Verify containment effectiveness
    """,
    agent=ir_commander,
    expected_output="""Contained incident 
    with documented actions and evidence 
    preservation confirmed"""
)

# Documentation Task
doc_task = Task(
    description="""
    1. Maintain real-time incident timeline
    2. Document all decisions and rationale
    3. Track IOCs and affected systems
    4. Generate status updates for stakeholders
    5. Compile final incident report
    6. Calculate IR metrics (MTTD, MTTC)
    """,
    agent=ir_commander
)

# Execute IR workflow
ir_crew = Crew(
    agents=[ir_commander],
    tasks=[triage_task, containment_task, doc_task],
    process="sequential"
)

# Run on incoming alert
def handle_alert(alert_data):
    result = ir_crew.kickoff(
        inputs={"alert": alert_data}
    )
    return result`,
    },
    relatedPages: [
    ],
    prevPage: { title: '11.6 Audit & Logging', slug: 'audit-logging' },
    nextPage: undefined,
  },
]

export default pages
