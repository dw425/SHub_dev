import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'ai-ml-research',
    badge: '🤖 Page 21.1',
    title: 'AI & ML Research',
    description: 'Comprehensive research coverage of artificial intelligence and machine learning—from foundation models and agentic AI to MLOps, responsible AI, and enterprise adoption patterns. This curated collection synthesizes insights from leading AI labs, academic institutions, and industry analysts to inform your AI strategy.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '1', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'AI & ML Research',
      subtitle: '',
      subsections: [
        {
          heading: 'Research Topics',
          paragraphs: [
            'Six core areas of AI & ML research coverage',
            'Large language models, multimodal systems, and the architectures powering modern AI. Research on scaling laws, emergent capabilities, and training methodologies.',
            'Autonomous AI systems that can plan, reason, and execute complex tasks. Research on agent architectures, tool use, and multi-agent collaboration.',
          ],
        },
        {
          heading: 'Enterprise AI Landscape',
          paragraphs: [
            'The three layers of enterprise AI implementation',
          ],
        },
        {
          heading: 'Featured Research',
          paragraphs: [
            'Essential papers for AI & ML practitioners',
            'Introduces RLHF alternatives using AI feedback to train helpful, harmless, and honest assistants. Foundational research on AI alignment techniques.',
            'Framework for safe deployment of AI agents including capability boundaries, monitoring requirements, and human oversight mechanisms.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Research Topics',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'topic-0',
          borderColor: '#3B82F6',
          icon: '🧠',
          title: 'Foundation Models',
          description: 'Large language models, multimodal systems, and the architectures powering modern AI. Research on scaling laws, emergent capabilities, and training methodologies.',
          examples: [],
        },
        {
          className: 'topic-1',
          borderColor: '#10B981',
          icon: '🦾',
          title: 'Agentic AI',
          description: 'Autonomous AI systems that can plan, reason, and execute complex tasks. Research on agent architectures, tool use, and multi-agent collaboration.',
          examples: [],
        },
        {
          className: 'topic-2',
          borderColor: '#8B5CF6',
          icon: '⚙️',
          title: 'MLOps & Infrastructure',
          description: 'Operationalizing ML at scale—model serving, monitoring, feature stores, and ML platforms. Research on MLOps maturity and best practices.',
          examples: [],
        },
        {
          className: 'topic-3',
          borderColor: '#F59E0B',
          icon: '🛡️',
          title: 'Responsible AI',
          description: 'AI safety, alignment, fairness, and governance. Research on building trustworthy AI systems and mitigating risks of advanced AI.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Foundation Model Comparison',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '🛠️', title: 'GPT-4 Turbo', subtitle: 'OpenAI', description: '', tags: ['OpenAI'] },
        { icon: '🛠️', title: 'Claude 3.5 Sonnet', subtitle: 'Anthropic', description: '', tags: ['Anthropic'] },
        { icon: '🛠️', title: 'Gemini 1.5 Pro', subtitle: 'Google', description: '', tags: ['Google'] },
        { icon: '🛠️', title: 'Llama 3.1 405B', subtitle: 'Meta', description: '', tags: ['Meta'] },
        { icon: '🛠️', title: 'Mixtral 8x22B', subtitle: 'Mistral', description: '', tags: ['Mistral'] },
        { icon: '📌', title: 'AI & ML Research', subtitle: '', description: 'Comprehensive research coverage of artificial intelligence and machine learning—from foundation models and agentic AI to MLOps, responsible AI, and en', tags: [] },
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
      name: '',
      role: '',
      description: 'Deploy an AI agent to continuously monitor arXiv, major AI labs, and industry analysts for new AI research. The agent summarizes papers, identifies key findings, assesses enterprise relevance, and delivers weekly briefings to your team.',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: undefined,
    nextPage: { title: '21.2 Data & Analytics Research', slug: 'data-analytics' },
  },
  {
    slug: 'data-analytics',
    badge: '📊 Page 21.2',
    title: 'Data & Analytics Research',
    description: 'Modern data architecture research covering lakehouse patterns, data mesh principles, streaming systems, and data quality frameworks. This collection synthesizes insights from platform vendors, industry analysts, and practitioners building production data systems at scale.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '2', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Data & Analytics Research',
      subtitle: '',
      subsections: [
        {
          heading: 'Data Mesh Principles',
          paragraphs: [
            'The four pillars of decentralized data architecture',
            'Data mesh, introduced by Zhamak Dehghani at ThoughtWorks, is a sociotechnical approach to scaling data architecture. It\'s not a technology—it\'s an organizational model that treats data as a product and distributes ownership to domain teams. The central insight: centralized data teams become bottlenecks as companies scale, and the people closest to the data (domain experts) should own it.',
            'Data mesh is controversial because it requires organizational change, not just new tools. Most "data mesh implementations" fail because they focus on technology while ignoring the harder problems: incentive structures, team topology, and cultural shifts. Before adopting data mesh, be honest about whether your organization can handle decentralized accountability.',
          ],
        },
        {
          heading: 'Open Table Formats',
          paragraphs: [
            'Comparing the three leading lakehouse table formats',
            'Open table formats solve a fundamental problem: how do you get warehouse-like reliability (ACID transactions, schema enforcement, time travel) on top of cheap object storage? Before these formats existed, data lakes were the "wild west"—no transactions, no schema management, and corrupt data was common after failed writes.',
            'The three dominant formats—Delta Lake, Apache Iceberg, and Apache Hudi—all solve this problem but with different design priorities. Your choice depends on your primary use case, existing tooling, and whether you\'re optimizing for Databricks integration, multi-engine flexibility, or real-time CDC workloads.',
          ],
        },
        {
          heading: 'Data Observability',
          paragraphs: [
            'The five pillars of data quality monitoring',
            'The five dimensions of data quality monitoring - what to track and how to detect issues',
          ],
        },
      ],
    },
    concepts: {
      title: 'Open Table Formats',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'format-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'format-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'format-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Data & Analytics Research',
          description: 'Modern data architecture research covering lakehouse patterns, data mesh principles, streaming systems, and data quality frameworks. This collection synthesizes insights from platform vendors, industr',
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
        { icon: '📌', title: 'Data Mesh Principles', subtitle: '', description: 'The four pillars of decentralized data architecture', tags: [] },
        { icon: '📌', title: 'Open Table Formats', subtitle: '', description: 'Comparing the three leading lakehouse table formats', tags: [] },
        { icon: '📌', title: 'Data Observability', subtitle: '', description: 'The five pillars of data quality monitoring', tags: [] },
        { icon: '📌', title: 'Architecture Decision Guide', subtitle: '', description: 'Choosing between lakehouse and warehouse', tags: [] },
        { icon: '📌', title: 'Vendor Landscape', subtitle: '', description: 'Key players across the modern data stack', tags: [] },
        { icon: '📌', title: 'Essential Research', subtitle: '', description: 'Must-read papers for data practitioners', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Impact of research-informed data decisions', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Benefits and challenges of modern data architecture', tags: [] },
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
      name: '',
      role: '',
      description: 'Deploy an AI agent to analyze your current data environment, recommend target architectures based on research, and generate migration plans. The agent synthesizes benchmark data, case studies, and best practices to deliver actionable recommendations.',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '21.1 AI & ML Research', slug: 'ai-ml-research' },
    nextPage: { title: '21.3 Cloud & Platform Research', slug: 'cloud-platform' },
  },
  {
    slug: 'cloud-platform',
    badge: '☁️ Page 21.3',
    title: 'Cloud & Platform Research',
    description: 'Research on cloud infrastructure, platform engineering, and modern deployment patterns. This collection covers hyperscaler strategies, Kubernetes adoption, FinOps practices, and platform team models from AWS, Azure, GCP, CNCF, and industry analysts.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '3', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Cloud & Platform Research',
      subtitle: '',
      subsections: [
        {
          heading: 'Hyperscaler Landscape',
          paragraphs: [
            'Comparing AWS, Azure, and GCP strategic positioning',
            'The "Big Three" cloud providers control roughly 65% of the global cloud infrastructure market, but each has carved out distinct positioning. Understanding these differences matters for architecture decisions, pricing negotiations, and long-term vendor strategy. The short version: AWS has breadth and market leadership, Azure wins on enterprise integration, and GCP leads in data/ML services.',
            'Multi-cloud is increasingly common—Flexera\'s 2024 survey shows 87% of enterprises have a multi-cloud strategy—but "multi-cloud" often means different things. Some run production across clouds for resilience; others use GCP for ML and AWS for everything else; many just inherited Azure from an acquisition. Be intentional about why you\'re multi-cloud, because the complexity cost is real.',
          ],
        },
        {
          heading: 'Kubernetes & Container Orchestration',
          paragraphs: [
            'The de facto standard for container workloads',
            'Kubernetes won the container orchestration war. With 96% adoption among organizations using containers (CNCF 2024 survey), the question is no longer "if" but "how." The managed Kubernetes services (EKS, AKS, GKE) have reduced operational burden significantly, but Kubernetes is still complex—and that complexity has real costs in engineering time, incident response, and cognitive load.',
            'The honest assessment: Kubernetes is right for teams running many microservices that need independent scaling and deployment. It\'s overkill for monoliths, small teams, or applications that could run on simpler platforms (ECS, Cloud Run, App Engine). The trendiest architecture isn\'t always the right one.',
          ],
        },
        {
          heading: 'Cloud Cost Analysis',
          paragraphs: [
            'FinOps practices and pricing intelligence',
            'Cloud cost management has become a C-level concern. Flexera\'s 2024 report shows organizations waste an average of 28% of cloud spend—that\'s real money at scale. FinOps (cloud financial management) has emerged as a discipline combining engineering, finance, and procurement to optimize cloud costs without sacrificing performance.',
            'The uncomfortable truth: most cost savings come from basics, not fancy tools. Right-sizing instances, buying reserved capacity, and deleting unused resources typically yield 30-40% savings before you need sophisticated optimization. Start there.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Hyperscaler Landscape',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'aws',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Key Strengths',
          description: 'The market leader with the broadest service catalog (200+ services). Best for organizations that need depth of options, mature services, and the largest partner ecosystem.',
          examples: [],
        },
        {
          className: 'azure',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Key Strengths',
          description: 'The enterprise favorite with deep Microsoft integration. Best for organizations with significant Microsoft investments (Office 365, Active Directory, .NET).',
          examples: [],
        },
        {
          className: 'gcp',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Key Strengths',
          description: 'The data and ML leader with Google-scale infrastructure. Best for data-intensive workloads, ML/AI projects, and organizations prioritizing open source.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Cloud & Platform Research',
          description: 'Research on cloud infrastructure, platform engineering, and modern deployment patterns. This collection covers hyperscaler strategies, Kubernetes adoption, FinOps practices, and platform team models f',
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
        { icon: '📌', title: 'Hyperscaler Landscape', subtitle: '', description: 'Comparing AWS, Azure, and GCP strategic positioning', tags: [] },
        { icon: '📌', title: 'Kubernetes & Container Orchestration', subtitle: '', description: 'The de facto standard for container workloads', tags: [] },
        { icon: '📌', title: 'Cloud Cost Analysis', subtitle: '', description: 'FinOps practices and pricing intelligence', tags: [] },
        { icon: '📌', title: 'Well-Architected Framework', subtitle: '', description: 'Best practices for cloud architecture', tags: [] },
        { icon: '📌', title: 'Essential Research', subtitle: '', description: 'Must-read papers for cloud and platform practitioners', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Impact of research-informed cloud decisions', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Benefits and challenges of cloud and platform adoption', tags: [] },
        { icon: '📌', title: 'Cloud Migration Readiness', subtitle: '', description: 'Assessing organizational preparedness for cloud adoption', tags: [] },
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
      name: '',
      role: '',
      description: 'Deploy an AI agent to analyze your cloud spend, identify optimization opportunities, and generate actionable recommendations. The agent pulls billing data, compares against pricing research, and suggests reserved capacity purchases, right-sizing opportunities, and unused resource cleanup.',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '21.2 Data & Analytics Research', slug: 'data-analytics' },
    nextPage: { title: '21.4 Security & Governance Research', slug: 'security-governance' },
  },
  {
    slug: 'security-governance',
    badge: '🔒 Page 21.4',
    title: 'Security & Governance Research',
    description: 'Research on cybersecurity threats, zero trust architecture, compliance frameworks, and security operations. This collection synthesizes threat intelligence from CISA, NIST, and industry security leaders to inform your security strategy and risk management approach. Security is no longer just an IT problem—it\'s a board-level business risk that intersects with every aspect of digital transformation.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Security & Governance Research',
      subtitle: '',
      subsections: [
        {
          heading: 'Threat Landscape',
          paragraphs: [
            'Current attack vectors and emerging risks',
            'The threat landscape evolves faster than defenses. Ransomware has become a mature criminal industry with customer support hotlines and affiliate programs. Supply chain attacks (SolarWinds, Log4j, MOVEit) demonstrated that your security is only as strong as your weakest vendor. And AI is now being weaponized—deepfakes for social engineering, LLMs for phishing at scale, and automated vulnerability discovery that compresses attack timelines from weeks to hours.',
            'The uncomfortable truth: most breaches still exploit basic failures—unpatched systems, weak credentials, phishing clicks, and misconfigured cloud resources. Before investing in advanced threat detection, ensure the fundamentals are solid. The research consistently shows that basic hygiene prevents 80% of attacks. Verizon\'s DBIR finds that 74% of breaches involve human error, privilege misuse, stolen credentials, or social engineering. This isn\'t a technology problem—it\'s an organizational discipline problem.',
          ],
        },
        {
          heading: 'Recent Security Events & Research',
          paragraphs: [
            'Latest developments shaping security strategy',
            'Security is a fast-moving field where yesterday\'s best practices become tomorrow\'s vulnerabilities. Staying current with threat intelligence, regulatory changes, and emerging attack techniques is essential. The pace of change has accelerated—new vulnerabilities are weaponized within days of disclosure, and attackers share techniques faster than defenders can patch.',
            'These recent developments illustrate trends that should inform your 2025 security planning. The intersection of AI capabilities, regulatory pressure, and evolving attack techniques creates both new risks and new defensive opportunities.',
          ],
        },
        {
          heading: 'Zero Trust Architecture',
          paragraphs: [
            'Zero Trust isn\'t a product you buy—it\'s an architectural philosophy that assumes breach. Traditional security drew a perimeter around the corporate network and trusted everything inside. Zero Trust recognizes that perimeters are meaningless when employees work from anywhere, applications run in multiple clouds, and attackers already have valid credentials from the last phishing campaign.',
            'The core principle: every access request is fully authenticated, authorized, and encrypted, regardless of where it originates. Identity becomes the new perimeter. This is a journey, not a destination—most organizations take 3-5 years to mature their Zero Trust implementation. CISA\'s Zero Trust Maturity Model provides a roadmap with progressive stages across five pillars.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Threat Landscape',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'critical',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '🎯 Ransomware-as-a-Service',
          description: 'Criminal groups now operate like SaaS businesses, providing ransomware tools to affiliates for a revenue share. Double extortion (encrypt + exfiltrate) is standard. Triple extortion adds DDoS threats and customer notification. Average ransom demands exceeded $1.5M in 2024, with 80% of victims experiencing repeat attacks within 12 months.',
          examples: [],
        },
        {
          className: 'critical',
          borderColor: '#10B981',
          icon: '💡',
          title: '🔗 Supply Chain Attacks',
          description: 'Attackers compromise software vendors, open source libraries, or managed service providers to gain access to thousands of downstream targets. One compromised npm package or code signing certificate can affect millions of systems simultaneously. The MOVEit breach in 2023 affected 2,500+ organizations and exposed data on 60+ million individuals.',
          examples: [],
        },
        {
          className: 'high',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '☁️ Cloud Misconfiguration',
          description: 'The #1 cause of cloud breaches isn\'t sophisticated hacking—it\'s S3 buckets left public, overly permissive IAM roles, unencrypted databases, and exposed management ports. Cloud providers secure infrastructure; you\'re responsible for configuration. Gartner predicts through 2025, 99% of cloud security failures will be the customer\'s fault.',
          examples: [],
        },
        {
          className: 'high',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '🤖 AI-Powered Attacks',
          description: 'Generative AI enables phishing at unprecedented scale and quality—personalized, grammatically perfect, contextually aware. Deepfakes are being used for CEO fraud and identity verification bypass. A Hong Kong firm lost $25M when employees were fooled by a deepfake video call. Automated vulnerability scanning and exploit generation accelerate attack timelines.',
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
        { icon: '📌', title: 'Threat Landscape', subtitle: '', description: 'Current attack vectors and emerging risks', tags: [] },
        { icon: '📌', title: 'Recent Security Events & Research', subtitle: '', description: 'Latest developments shaping security strategy', tags: [] },
        { icon: '📌', title: 'Zero Trust Architecture', subtitle: '', description: 'Never trust, always verify', tags: [] },
        { icon: '📌', title: 'Compliance Frameworks', subtitle: '', description: 'Regulatory requirements and industry standards', tags: [] },
        { icon: '📌', title: 'Security Maturity Model', subtitle: '', description: 'Assessing and advancing security capabilities', tags: [] },
        { icon: '📌', title: 'Incident Response', subtitle: '', description: 'When (not if) a breach occurs', tags: [] },
        { icon: '📌', title: 'AI Security Considerations', subtitle: '', description: 'Securing AI systems and defending against AI-powered attacks', tags: [] },
        { icon: '📌', title: 'Essential Research', subtitle: '', description: 'Must-read papers for security practitioners', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Service Org Controls', vendor: '', description: '', tags: ['Tech', 'SaaS', 'B2B'] },
        { icon: '🛠️', name: 'General Data Protection', vendor: '', description: '', tags: ['EU', 'Privacy', 'Global'] },
        { icon: '🛠️', name: 'Health Insurance Portability', vendor: '', description: '', tags: ['Healthcare', 'US'] },
        { icon: '🛠️', name: 'Payment Card Industry', vendor: '', description: '', tags: ['Finance', 'Retail'] },
        { icon: '🛠️', name: 'Info Security Mgmt', vendor: '', description: '', tags: ['Global', 'Enterprise'] },
        { icon: '🛠️', name: 'Cybersecurity Framework', vendor: '', description: '', tags: ['US', 'Critical Infra'] },
        { icon: '🛠️', name: 'Cybersecurity Maturity Model', vendor: '', description: '', tags: ['Defense', 'Supply Chain'] },
        { icon: '🛠️', name: 'Federal Risk Auth', vendor: '', description: '', tags: ['US Gov', 'Cloud'] },
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
      name: '',
      role: '',
      description: 'Deploy an AI agent to continuously assess your security posture against frameworks like NIST CSF and CIS Controls. The agent analyzes configurations across cloud, identity, and endpoints, identifies gaps, prioritizes remediation based on threat intelligence, and generates executive-ready reports with actionable recommendations.',
      capabilities: [
        'Multi-Source Collection',
        'Framework Mapping',
        'Risk Prioritization',
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '21.3 Cloud & Platform Research', slug: 'cloud-platform' },
    nextPage: { title: '21.5 Strategy & Transformation Research', slug: 'strategy-transformation' },
  },
  {
    slug: 'strategy-transformation',
    badge: '🎯 Page 21.5',
    title: 'Strategy & Transformation Research',
    description: 'Research on digital transformation, organizational change, leadership models, and strategic execution. This collection synthesizes insights from McKinsey, BCG, HBR, and leading business schools on why transformations fail and what separates successful change efforts from expensive failures. In an era where AI is reshaping every industry, understanding how to lead organizational change has never been more critical.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '5', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'Strategy & Transformation Research',
      subtitle: '',
      subsections: [
        {
          heading: 'Why Transformations Fail',
          paragraphs: [
            'The uncomfortable statistics on change initiatives',
            'The research on transformation success rates is sobering. Depending on which study you cite, 60-80% of digital transformation initiatives fail to deliver expected value. This isn\'t because organizations lack technology or budget—it\'s because they underestimate the human and organizational dimensions of change. The pattern is remarkably consistent across industries and geographies.',
            'McKinsey\'s research consistently identifies the same failure patterns: lack of executive alignment, insufficient change management, poor communication, and declaring victory too early. Technology is rarely the problem. Resistance to change, unclear ownership, and competing priorities sink most transformation efforts before they can deliver results. The graveyard of failed ERP implementations, cloud migrations, and "digital transformations" all share common root causes.',
          ],
        },
        {
          heading: 'Recent Transformation Trends',
          paragraphs: [
            'Developments reshaping strategy and leadership',
            'The transformation landscape is shifting rapidly. AI is rewriting the rules of competitive advantage. Remote and hybrid work has fundamentally changed organizational dynamics. Economic uncertainty forces leaders to balance transformation investment against short-term performance. These trends demand new approaches to strategy and change leadership.',
            'AI is no longer a technology trend—it\'s a transformation imperative. The AI Research section covers the technical landscape, while this section addresses the organizational change required to capture AI value. Both perspectives are essential for AI transformation success.',
          ],
        },
        {
          heading: 'Leadership Models',
          paragraphs: [
            'Frameworks for leading through change',
            'Effective transformation leadership differs from steady-state management. The skills that made someone successful running operations—optimization, consistency, predictability—can become liabilities during transformation when the goal is disruption and change. Research from IMD and Harvard shows that adaptive leadership capacity is the top predictor of transformation success.',
            'The research is clear: different situations require different leadership approaches. Knowing when to direct versus coach, when to push versus support, and when to lead from the front versus empower others distinguishes successful transformation leaders from those who struggle.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Strategy Frameworks',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'framework-0',
          borderColor: '#3B82F6',
          icon: '⚔️',
          title: '',
          description: 'Analyzes industry attractiveness through: supplier power, buyer power, competitive rivalry, threat of substitutes, and threat of new entrants. Useful for understanding structural profitability and competitive dynamics.',
          examples: [],
        },
        {
          className: 'framework-1',
          borderColor: '#10B981',
          icon: '📊',
          title: '',
          description: 'Maps internal Strengths/Weaknesses against external Opportunities/Threats. Simple but effective for strategic conversations. Best when specific and evidence-based, not generic platitudes.',
          examples: [],
        },
        {
          className: 'framework-2',
          borderColor: '#8B5CF6',
          icon: '🎨',
          title: '',
          description: 'Nine building blocks: value proposition, customer segments, channels, relationships, revenue streams, key resources, activities, partnerships, and cost structure. Visual strategy on one page.',
          examples: [],
        },
        {
          className: 'framework-3',
          borderColor: '#F59E0B',
          icon: '🎯',
          title: '',
          description: 'Connects ambitious objectives to measurable key results. Quarterly cycles drive focus and accountability. Made famous by Intel and Google. Works best with 3-5 objectives per team.',
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
        { icon: '📌', title: 'Why Transformations Fail', subtitle: '', description: 'The uncomfortable statistics on change initiatives', tags: [] },
        { icon: '📌', title: 'Recent Transformation Trends', subtitle: '', description: 'Developments reshaping strategy and leadership', tags: [] },
        { icon: '📌', title: 'Leadership Models', subtitle: '', description: 'Frameworks for leading through change', tags: [] },
        { icon: '📌', title: 'Change Management', subtitle: '', description: 'Structured approaches to organizational change', tags: [] },
        { icon: '📌', title: 'Transformation Measurement', subtitle: '', description: 'Metrics that matter for tracking progress', tags: [] },
        { icon: '📌', title: 'Transformation Governance', subtitle: '', description: 'Structures that enable decision-making and accountability', tags: [] },
        { icon: '📌', title: 'Communication Strategy', subtitle: '', description: 'Creating understanding and building support for change', tags: [] },
        { icon: '📌', title: 'Talent & Capability Building', subtitle: '', description: 'Developing the skills transformation requires', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Porter\'s Five Forces', vendor: '', description: 'Analyzes industry attractiveness through: supplier power, buyer power, competitive rivalry, threat of substitutes, and threat of new entrants. Useful for understanding structural profitability and competitive dynamics.', tags: [] },
        { icon: '🛠️', name: 'Porter\'s Five Forces', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'SWOT Analysis', vendor: '', description: 'Maps internal Strengths/Weaknesses against external Opportunities/Threats. Simple but effective for strategic conversations. Best when specific and evidence-based, not generic platitudes.', tags: [] },
        { icon: '🛠️', name: 'SWOT Analysis', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Business Model Canvas', vendor: '', description: 'Nine building blocks: value proposition, customer segments, channels, relationships, revenue streams, key resources, activities, partnerships, and cost structure. Visual strategy on one page.', tags: [] },
        { icon: '🛠️', name: 'Business Model Canvas', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'OKRs (Objectives & Key Results)', vendor: '', description: 'Connects ambitious objectives to measurable key results. Quarterly cycles drive focus and accountability. Made famous by Intel and Google. Works best with 3-5 objectives per team.', tags: [] },
        { icon: '🛠️', name: 'OKRs (Objectives & Key Results)', vendor: '', description: '', tags: [] },
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
      name: '',
      role: '',
      description: 'Deploy an AI agent to continuously monitor transformation health across multiple dimensions: executive engagement, change adoption, milestone progress, risk indicators, and team sentiment. The agent synthesizes data from project management tools, surveys, communications, and stakeholder feedback to provide early warning of transformation stall patterns.',
      capabilities: [
        'Multi-Signal Analysis',
        'Early Warning Detection',
        'Intervention Recommendations',
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '21.4 Security & Governance Research', slug: 'security-governance' },
    nextPage: undefined,
  },
]

export default pages
