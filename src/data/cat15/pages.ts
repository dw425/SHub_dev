import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'network-architecture',
    badge: '🏗️ Page 15.1',
    title: 'Network Architecture',
    description: 'Design patterns for VPCs, subnets, routing tables, and network segmentation across multi-cloud environments. Build resilient, scalable network foundations.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '3-Tier', label: 'Standard Pattern' },
      { value: 'Multi-AZ', label: 'Availability' },
      { value: '/16', label: 'Typical VPC CIDR' },
      { value: 'Zero Trust', label: 'Security Model' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Foundational concepts for cloud network design',
      subsections: [
        {
          heading: 'What is Network Architecture?',
          paragraphs: [
            'Network architecture defines the structure, components, and connectivity patterns of your cloud infrastructure. It encompasses Virtual Private Clouds (VPCs), subnets, routing tables, gateways, and the relationships between them.',
            'Good network architecture enables scalability (grow without redesign), security (defense in depth), performance (low latency paths), and cost efficiency (optimized data transfer).',
          ],
        },
        {
          heading: 'Key Components',
          paragraphs: [
          ],
        },
        {
          heading: 'Why This Matters',
          paragraphs: [
            'Network architecture decisions made early are difficult and expensive to change later. IP address conflicts prevent VPC peering. Poor segmentation creates security vulnerabilities. Inadequate capacity planning leads to costly redesigns. Investing time in proper network design pays dividends throughout the infrastructure lifecycle—enabling faster deployments, simpler troubleshooting, and more secure operations.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Design Patterns',
      subtitle: 'Common network architecture approaches',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🏢',
          title: 'Hub-and-Spoke',
          description: 'Central hub VPC connects to multiple spoke VPCs. Hub contains shared services (DNS, AD, firewalls). Spokes contain workloads. Transit Gateway enables connectivity.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔗',
          title: 'Full Mesh',
          description: 'Every VPC peers directly with every other VPC. Simple but doesn\'t scale—n VPCs need n(n-1)/2 peering connections. Use only for small deployments.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🌐',
          title: 'Multi-Region',
          description: 'Replicate VPC architecture across regions for DR and latency. Use inter-region peering or Transit Gateway inter-region attachments. Global Accelerator for routing.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔒',
          title: 'Isolated Environments',
          description: 'Separate VPCs per environment (dev/staging/prod) with no connectivity between them. Maximum isolation for compliance. Use separate accounts per environment.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Foundational concepts for cloud network design', tags: [] },
        { icon: '📌', title: 'VPC Architecture', subtitle: '', description: 'Reference design for production workloads', tags: [] },
        { icon: '📌', title: 'Subnet Strategies', subtitle: '', description: 'Organizing network segments for security and scale', tags: [] },
        { icon: '📌', title: 'CIDR Planning', subtitle: '', description: 'IP address allocation strategies', tags: [] },
        { icon: '📌', title: 'Routing Tables', subtitle: '', description: 'Directing traffic between networks', tags: [] },
        { icon: '📌', title: 'Cloud Provider Comparison', subtitle: '', description: 'Network architecture across AWS, Azure, and GCP', tags: [] },
        { icon: '📌', title: 'Design Patterns', subtitle: '', description: 'Common network architecture approaches', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for robust network architecture', tags: [] },
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
      subtitle: 'Guidelines for robust network architecture',
      doItems: [
        'Plan CIDR Ranges Carefully — Document allocations, avoid overlaps with on-prem and partners. Leave room for 3x growth. Use /16 for production VPCs.',
        'Use Multiple Availability Zones — Deploy subnets across at least 2 AZs (3 recommended). Single-AZ deployments are single points of failure.',
        'Implement 3-Tier Segmentation — Separate public, private, and data tiers. Each tier has different routing and security requirements.',
        'Use VPC Flow Logs — Enable flow logs for visibility into traffic patterns, troubleshooting, and security analysis. Send to CloudWatch or S3.',
        'Deploy NAT Gateway Per AZ — Avoid cross-AZ NAT traffic and single points of failure. Each AZ should have its own NAT Gateway.',
        'Use Transit Gateway for Scale — Replace mesh peering with Transit Gateway when connecting more than 3-4 VPCs. Simpler management, transitive routing.',
        'Tag Everything — Consistent tagging enables cost allocation, automation, and compliance. Include environment, owner, and project tags.',
        'Use Infrastructure as Code — Define networks in Terraform or CloudFormation. Version control, peer review, and repeatable deployments.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🏗️ NetworkArchitect',
      role: 'Network Architect',
      description: 'Analyzes workload requirements, compliance needs, and growth projections to generate optimal VPC designs. Produces Terraform code, CIDR allocation plans, and architecture diagrams.',
      capabilities: [
        'VPC design generation',
        'CIDR allocation planning',
        'Route table configuration',
        'Multi-cloud translation',
        'Terraform code generation',
      ],
      codeFilename: 'network_architect_agent.py',
      code: `from crewai import Agent, Task, Crew

# Initialize network design tools
cidr_calculator = CIDRCalculatorTool()
terraform_gen = TerraformGeneratorTool()
diagram_gen = DiagramGeneratorTool()

# Network Architect Agent
network_architect = Agent(
    role="Network Architect",
    goal="""Design optimal VPC architecture 
    based on workload requirements.""",
    tools=[cidr_calculator, terraform_gen, diagram_gen],
    verbose=True
)

# Architecture Design Task
design_task = Task(
    description="""
    1. Analyze workload requirements
    2. Calculate CIDR allocations
    3. Design subnet strategy (3-tier)
    4. Configure routing tables
    5. Generate Terraform code
    6. Create architecture diagram
    """,
    agent=network_architect
)

crew = Crew(agents=[network_architect], tasks=[design_task])`,
    },
    relatedPages: [
      { number: '', title: 'Load Balancing', description: 'L4/L7 load balancers, algorithms, and health checks', slug: 'load-balancing' },
      { number: '', title: 'VPN & Connectivity', description: 'Site-to-site VPN, Direct Connect, and hybrid architectures', slug: 'vpn-connectivity' },
      { number: '', title: 'Network Security', description: 'Firewalls, WAF, and zero-trust architecture', slug: 'network-security' },
    ],
    prevPage: undefined,
    nextPage: { title: '15.2 Load Balancing', slug: 'load-balancing' },
  },
  {
    slug: 'load-balancing',
    badge: '⚖️ Page 15.2',
    title: 'Load Balancing',
    description: 'Distribute traffic across healthy servers to ensure high availability, scalability, and optimal performance. Master L4/L7 balancing, algorithms, and health checks.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '99.99%', label: 'Availability SLA' },
      { value: '<1ms', label: 'Added Latency' },
      { value: '1M+', label: 'Requests/sec' },
      { value: 'Auto', label: 'Scaling' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Fundamentals of traffic distribution',
      subsections: [
        {
          heading: 'What is Load Balancing?',
          paragraphs: [
            'Load balancing distributes incoming network traffic across multiple servers to ensure no single server bears too much load. This improves responsiveness, increases availability, and enables horizontal scaling.',
            'Modern load balancers do more than traffic distribution—they provide SSL termination, health monitoring, session persistence, and content-based routing.',
          ],
        },
        {
          heading: 'Key Benefits',
          paragraphs: [
          ],
        },
        {
          heading: 'Types of Load Balancers',
          paragraphs: [
            'Hardware Load Balancers: Physical appliances (F5, Citrix) with dedicated ASICs. High performance but expensive and inflexible. Legacy in most cloud environments.',
            'Software Load Balancers: Run on commodity hardware or VMs (NGINX, HAProxy, Envoy). Flexible, scriptable, and cost-effective. Dominant in modern architectures.',
            'Cloud Load Balancers: Managed services (AWS ALB/NLB, Azure Load Balancer, GCP Load Balancer). Auto-scaling, integrated with cloud services, pay-per-use pricing.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Load Balancing Algorithms',
      subtitle: 'How traffic gets distributed',
      columns: 2,
      cards: [
        {
          className: 'algo-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Requests distributed sequentially to each server in rotation. Simple and effective when servers have equal capacity.',
          examples: [],
        },
        {
          className: 'algo-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Like round robin but servers get traffic proportional to assigned weights. Use when servers have different capacities.',
          examples: [],
        },
        {
          className: 'algo-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Routes to the server with fewest active connections. Great for long-lived connections or varying request complexity.',
          examples: [],
        },
        {
          className: 'algo-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Hash of client IP determines server. Same client always goes to same server—provides session affinity without cookies.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Fundamentals of traffic distribution', tags: [] },
        { icon: '📌', title: 'How Load Balancing Works', subtitle: '', description: 'Traffic distribution in action', tags: [] },
        { icon: '📌', title: 'Layer 4 vs Layer 7', subtitle: '', description: 'Network vs Application load balancing', tags: [] },
        { icon: '📌', title: 'Load Balancing Algorithms', subtitle: '', description: 'How traffic gets distributed', tags: [] },
        { icon: '📌', title: 'Health Checks', subtitle: '', description: 'Monitoring target availability', tags: [] },
        { icon: '📌', title: 'SSL/TLS Termination', subtitle: '', description: 'Offloading encryption at the load balancer', tags: [] },
        { icon: '📌', title: 'Cloud Load Balancers', subtitle: '', description: 'Comparing AWS, Azure, and GCP offerings', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective load balancing', tags: [] },
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
      subtitle: 'Guidelines for effective load balancing',
      doItems: [
        'Use Multiple Availability Zones — Deploy targets across at least 2-3 AZs for fault tolerance. Enable cross-zone load balancing to distribute traffic evenly. A single-AZ failure should not take down your application. Test failover scenarios regularly.',
        'Implement Proper Health Checks — Use deep health checks that verify application functionality, database connectivity, and downstream dependencies—not just TCP port availability. Return 503 if the app can\'t serve traffic. Set intervals (30s) and thresholds (2-3 failures) appropriately.',
        'Enable Connection Draining — Allow in-flight requests to complete before removing targets during deployments or scale-in. Set drain timeout (default 300s) based on your longest request duration. Prevents 5xx errors during rolling updates and auto-scaling events.',
        'Configure Appropriate Timeouts — Set idle timeout based on application needs (default 60s). For long-polling or WebSockets, increase to 3600s. Configure backend response timeout shorter than client timeout. Use keep-alive for HTTP/1.1 connection reuse.',
        'Use Sticky Sessions Sparingly — Prefer stateless backends with external session stores (Redis, DynamoDB). If stickiness is required, use application-controlled cookies over LB-generated ones. Duration-based stickiness can cause uneven load distribution and complicate scaling.',
        'Monitor and Alert Proactively — Track key metrics: 5xx error rate (<0.1%), latency p99 (<500ms), healthy host count, request count, and connection count. Set up alerts for anomalies. Use access logs for debugging. Create dashboards for real-time visibility.',
        'Pre-warm for Traffic Spikes — Cloud LBs scale automatically but need time. Contact AWS/GCP/Azure support 48hrs before expected traffic surges (product launches, marketing events, sales). Provide expected RPS, duration, and traffic pattern for optimal pre-warming.',
        'Use TLS 1.3 and Strong Ciphers — Enable TLS 1.3 for faster handshakes and better security. Disable TLS 1.0/1.1 and weak ciphers. Use managed certificates (ACM, Let\'s Encrypt) with auto-renewal. Enable HSTS headers. Consider OCSP stapling for faster validation.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '⚖️ LoadBalancerAdvisor',
      role: 'Load Balancer Specialist',
      description: 'Analyzes traffic patterns, latency requirements, and application architecture to recommend optimal load balancer configuration. Generates Terraform code and monitoring dashboards.',
      capabilities: [
        'Traffic pattern analysis',
        'Algorithm recommendation',
        'Health check configuration',
        'SSL/TLS optimization',
        'Terraform code generation',
      ],
      codeFilename: 'lb_advisor_agent.py',
      code: `from crewai import Agent, Task, Crew

# Initialize load balancer tools
traffic_analyzer = TrafficAnalyzerTool()
lb_recommender = LBRecommenderTool()
terraform_gen = TerraformGeneratorTool()

# Load Balancer Advisor Agent
lb_advisor = Agent(
    role="Load Balancer Specialist",
    goal="""Recommend optimal load balancer 
    configuration for the workload.""",
    tools=[traffic_analyzer, lb_recommender, terraform_gen],
    verbose=True
)

# Configuration Task
config_task = Task(
    description="""
    1. Analyze traffic patterns and requirements
    2. Recommend L4 vs L7 load balancer
    3. Select optimal algorithm
    4. Configure health checks
    5. Set up SSL/TLS termination
    6. Generate Terraform configuration
    """,
    agent=lb_advisor
)

crew = Crew(agents=[lb_advisor], tasks=[config_task])`,
    },
    relatedPages: [
      { number: '', title: 'Network Architecture', description: 'VPC design, subnets, and routing tables', slug: 'network-architecture' },
      { number: '', title: 'DNS & CDN', description: 'Global traffic routing and content delivery', slug: 'dns-cdn' },
      { number: '', title: 'Service Mesh', description: 'Istio, Linkerd, and microservices routing', slug: 'service-mesh' },
    ],
    prevPage: { title: '15.1 Network Architecture', slug: 'network-architecture' },
    nextPage: { title: '15.3 DNS & CDN', slug: 'dns-cdn' },
  },
  {
    slug: 'dns-cdn',
    badge: '🌍 Page 15.3',
    title: 'DNS & CDN',
    description: 'Global traffic routing with DNS and content delivery at the edge. Reduce latency, improve availability, and scale globally with intelligent name resolution and caching strategies.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '<50ms', label: 'DNS Lookup' },
      { value: '300+', label: 'Edge POPs' },
      { value: '99.99%', label: 'Availability' },
      { value: '~70%', label: 'Origin Offload' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding DNS and content delivery networks',
      subsections: [
        {
          heading: 'What is DNS?',
          paragraphs: [
            'The Domain Name System (DNS) translates human-readable domain names (example.com) into IP addresses (93.184.216.34) that computers use to route traffic. It\'s the internet\'s phonebook—critical infrastructure that every request depends on.',
            'Modern DNS does more than simple lookups: geographic routing sends users to nearby servers, health checks route around failures, and weighted policies enable gradual deployments and A/B testing.',
          ],
        },
        {
          heading: 'What is a CDN?',
          paragraphs: [
            'A Content Delivery Network (CDN) caches and serves content from edge locations close to users. Instead of every request traveling to your origin server, static assets (images, CSS, JS) are served from the nearest edge point of presence (POP).',
            'Benefits include: lower latency (content served closer to users), reduced origin load (70%+ requests served from cache), DDoS protection (attacks absorbed at edge), and global scale without infrastructure in every region.',
          ],
        },
        {
          heading: 'How DNS and CDN Work Together',
          paragraphs: [
            'DNS and CDN are complementary technologies that work together for optimal content delivery. When a user requests your site, DNS resolves your domain to the nearest CDN edge location using anycast or geographic routing. The edge POP then serves cached content directly or fetches from origin if needed. This combination—intelligent DNS routing plus edge caching—is the foundation of modern global content delivery. Major CDN providers (CloudFront, Cloudflare, Akamai, Fastly) integrate DNS and CDN into unified platforms for seamless global distribution.',
          ],
        },
      ],
    },
    concepts: {
      title: 'CDN Features',
      subtitle: 'Beyond simple caching',
      columns: 2,
      cards: [
        {
          className: 'feature-0',
          borderColor: '#3B82F6',
          icon: '💾',
          title: '',
          description: 'Store content at 300+ edge locations. Serve static assets without origin requests. 70%+ cache hit ratio.',
          examples: [],
        },
        {
          className: 'feature-1',
          borderColor: '#10B981',
          icon: '🔒',
          title: '',
          description: 'Handle HTTPS at edge. Free managed certificates. TLS 1.3 support. Reduce origin CPU load.',
          examples: [],
        },
        {
          className: 'feature-2',
          borderColor: '#8B5CF6',
          icon: '🛡️',
          title: '',
          description: 'Absorb attacks at edge. Layer 3/4/7 protection. No additional cost. Always-on mitigation.',
          examples: [],
        },
        {
          className: 'feature-3',
          borderColor: '#F59E0B',
          icon: '🔥',
          title: '',
          description: 'Web Application Firewall at edge. Block SQLi, XSS, bots. Managed rule sets. Custom rules.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding DNS and content delivery networks', tags: [] },
        { icon: '📌', title: 'DNS Resolution Process', subtitle: '', description: 'How domain names become IP addresses', tags: [] },
        { icon: '📌', title: 'DNS Record Types', subtitle: '', description: 'Common record types and their purposes', tags: [] },
        { icon: '📌', title: 'DNS Routing Policies', subtitle: '', description: 'Intelligent traffic distribution strategies', tags: [] },
        { icon: '📌', title: 'CDN Edge Network', subtitle: '', description: 'Global distribution of content at the edge', tags: [] },
        { icon: '📌', title: 'CDN Features', subtitle: '', description: 'Beyond simple caching', tags: [] },
        { icon: '📌', title: 'Caching Strategies', subtitle: '', description: 'Optimize cache behavior for your content', tags: [] },
        { icon: '📌', title: 'Provider Comparison', subtitle: '', description: 'DNS and CDN offerings across providers', tags: [] },
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
      subtitle: 'Guidelines for DNS and CDN optimization',
      doItems: [
        'Use Appropriate TTLs — Match TTL to content change frequency. Static assets: 1 year with cache-busting URLs. Dynamic content: 5-15 minutes. Lower TTL before planned changes, raise after. Default 300s is a good starting point for most records.',
        'Implement Health Checks — Configure DNS health checks to route around failures automatically. Check application endpoints (/health), not just TCP. Set appropriate intervals (30s) and thresholds (2-3 failures). Test failover regularly.',
        'Maximize Cache Hit Ratio — Target 90%+ cache hit ratio for static content. Use consistent URLs, remove unnecessary query strings from cache key. Analyze cache misses to identify optimization opportunities. Enable Origin Shield for popular content.',
        'Use Cache-Busting for Deploys — Include content hash in filenames (app.a1b2c3.js) rather than query strings. Enables long TTLs while ensuring users get new versions. Works with all CDNs and proxies. Most build tools support this automatically.',
        'Enable Compression — Enable Brotli (preferred) and Gzip at the CDN edge. Reduces bandwidth 60-80% for text content. Most CDNs handle this automatically based on Accept-Encoding header. Don\'t compress already-compressed formats (JPEG, PNG).',
        'Implement DNSSEC — Enable DNSSEC to cryptographically sign DNS records, preventing spoofing and cache poisoning attacks. Most managed DNS providers support one-click enablement. Also configure CAA records to restrict certificate issuance.',
        'Use Multiple DNS Providers — For critical applications, use multiple DNS providers (e.g., Route 53 + Cloudflare) for redundancy. Requires careful NS record management and synchronization. Consider DNS failover services for automatic switching.',
        'Monitor and Alert — Set up monitoring for DNS resolution time, cache hit ratio, origin errors, and bandwidth. Alert on anomalies like sudden cache hit drops or increased origin load. Use real user monitoring (RUM) for actual user experience data.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🌍 GlobalDeliveryOptimizer',
      role: 'CDN & DNS Specialist',
      description: 'Analyzes traffic patterns, user locations, and content types to recommend optimal DNS routing policies and CDN caching strategies. Generates Terraform configurations and cache policies.',
      capabilities: [
        'DNS routing policy recommendation',
        'Cache-Control header optimization',
        'Edge location analysis',
        'Cache hit ratio improvement',
        'Terraform/CloudFormation generation',
      ],
      codeFilename: 'cdn_optimizer_agent.py',
      code: `from crewai import Agent, Task, Crew

# Initialize CDN optimization tools
traffic_analyzer = TrafficAnalyzerTool()
cache_optimizer = CacheOptimizerTool()
dns_config_gen = DNSConfigGeneratorTool()

# Global Delivery Optimizer Agent
cdn_optimizer = Agent(
    role="CDN & DNS Specialist",
    goal="""Optimize global content delivery 
    through DNS routing and edge caching.""",
    tools=[traffic_analyzer, cache_optimizer, dns_config_gen],
    verbose=True
)

# Optimization Task
optimize_task = Task(
    description="""
    1. Analyze traffic patterns by region
    2. Recommend DNS routing policy
    3. Optimize Cache-Control headers
    4. Configure edge caching rules
    5. Generate Terraform configuration
    6. Create monitoring dashboards
    """,
    agent=cdn_optimizer
)

crew = Crew(agents=[cdn_optimizer], tasks=[optimize_task])`,
    },
    relatedPages: [
      { number: '', title: 'Load Balancing', description: 'L4/L7 load balancers and traffic distribution', slug: 'load-balancing' },
      { number: '', title: 'VPN & Connectivity', description: 'Site-to-site VPN and hybrid connectivity', slug: 'vpn-connectivity' },
      { number: '', title: 'Network Security', description: 'Firewalls, WAF, and zero-trust architecture', slug: 'network-security' },
    ],
    prevPage: { title: '15.2 Load Balancing', slug: 'load-balancing' },
    nextPage: { title: '15.4 VPN & Connectivity', slug: 'vpn-connectivity' },
  },
  {
    slug: 'vpn-connectivity',
    badge: '🔒 Page 15.4',
    title: 'VPN & Connectivity',
    description: 'Secure encrypted tunnels connecting on-premises infrastructure, cloud environments, and remote users. From consumer VPNs to enterprise Direct Connect lines for hybrid architectures.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'AES-256', label: 'Encryption' },
      { value: '99.95%', label: 'Uptime SLA' },
      { value: '<10ms', label: 'Direct Connect' },
      { value: '100 Gbps', label: 'Max Bandwidth' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding VPN types and connectivity options',
      subsections: [
        {
          heading: 'Why VPN & Connectivity Matters',
          paragraphs: [
            'Modern enterprises require secure, reliable connectivity between distributed resources. VPNs create encrypted tunnels over public networks, while dedicated connections like AWS Direct Connect provide private, low-latency paths to cloud resources.',
            'The right connectivity strategy balances security requirements, performance needs, cost considerations, and operational complexity to enable hybrid and multi-cloud architectures.',
          ],
        },
        {
          heading: 'Key Connectivity Patterns',
          paragraphs: [
            'Site-to-Site VPN: Connects entire networks over IPsec tunnels. Ideal for linking data centers to cloud VPCs or connecting multiple office locations securely.',
            'Client VPN: Provides secure remote access for individual users to corporate resources from any location with certificate or SAML authentication.',
            'Direct Connect: Dedicated physical connections bypassing the public internet for consistent performance and reduced data transfer costs.',
          ],
        },
        {
          heading: 'Hybrid Connectivity Architecture',
          paragraphs: [
            'Most enterprises use a combination of connectivity options. Direct Connect or ExpressRoute provides the primary high-bandwidth, low-latency path for production traffic, while site-to-site VPN serves as a backup or for lower-priority traffic. Client VPN enables remote workers to securely access both on-premises and cloud resources. Transit Gateway or Virtual WAN acts as a central hub connecting multiple VPCs, on-premises networks, and VPN connections through a single point—simplifying network topology and routing management.',
          ],
        },
      ],
    },
    concepts: {
      title: 'VPN Types',
      subtitle: 'Different VPN configurations for various use cases',
      columns: 2,
      cards: [
        {
          className: 'vpn-type-0',
          borderColor: '#3B82F6',
          icon: '🏢',
          title: 'Site-to-Site VPN',
          description: 'Connects entire networks over IPsec tunnels. Ideal for data center to cloud VPC or linking multiple office locations securely.',
          examples: [],
        },
        {
          className: 'vpn-type-1',
          borderColor: '#10B981',
          icon: '👤',
          title: 'Client VPN',
          description: 'Enables remote users to securely access cloud resources from anywhere. Supports certificate and SAML authentication with split-tunnel.',
          examples: [],
        },
        {
          className: 'vpn-type-2',
          borderColor: '#8B5CF6',
          icon: '🌐',
          title: 'Transit Gateway',
          description: 'Centralized hub connecting multiple VPCs and on-premises networks. Simplifies topology with single gateway for all connections.',
          examples: [],
        },
        {
          className: 'vpn-type-3',
          borderColor: '#F59E0B',
          icon: '🔗',
          title: 'VPC Peering',
          description: 'Direct private connectivity between VPCs without traversing internet. Traffic stays on cloud provider\'s private backbone.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding VPN types and connectivity options', tags: [] },
        { icon: '📌', title: 'VPN Architecture', subtitle: '', description: 'How encrypted tunnels connect distributed networks', tags: [] },
        { icon: '📌', title: 'VPN Types', subtitle: '', description: 'Different VPN configurations for various use cases', tags: [] },
        { icon: '📌', title: 'VPN Tools & Services', subtitle: '', description: 'Popular consumer, enterprise, and open-source VPN solutions', tags: [] },
        { icon: '📌', title: 'VPN Scorecard', subtitle: '', description: 'Comparative ratings across key metrics', tags: [] },
        { icon: '📌', title: 'Encryption & Protocols', subtitle: '', description: 'Security standards protecting VPN traffic', tags: [] },
        { icon: '📌', title: 'Direct Connect Architecture', subtitle: '', description: 'Dedicated physical connectivity to cloud providers', tags: [] },
        { icon: '📌', title: 'Provider Comparison', subtitle: '', description: 'VPN and connectivity options across major cloud providers', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'NordVPN', vendor: '', description: 'Industry-leading consumer VPN with Double VPN, Onion over VPN, and threat protection. NordLayer offers enterprise solutions.', tags: [] },
        { icon: '🛠️', name: 'ExpressVPN', vendor: '', description: 'Premium VPN known for speed and reliability. Lightway protocol offers fast connections. TrustedServer runs entirely in RAM.', tags: [] },
        { icon: '🛠️', name: 'Surfshark', vendor: '', description: 'Budget-friendly VPN with unlimited simultaneous connections. CleanWeb blocks ads and malware. Nexus optimizes server routing.', tags: [] },
        { icon: '🛠️', name: 'ProtonVPN', vendor: '', description: 'Swiss-based privacy VPN from Proton Mail team. Secure Core routes through multiple countries. NetShield blocks malware and trackers.', tags: [] },
        { icon: '🛠️', name: 'Mullvad VPN', vendor: '', description: 'Anonymous VPN requiring no email or personal info. Fixed €5/month pricing. Account numbers instead of usernames. Cash payment accepted.', tags: [] },
        { icon: '🛠️', name: 'Tailscale', vendor: '', description: 'Zero-config mesh VPN built on WireGuard. Creates secure networks between devices without complex configuration. SSO integration.', tags: [] },
        { icon: '🛠️', name: 'WireGuard', vendor: '', description: 'Modern VPN protocol with ~4,000 lines of code vs 100,000+ for OpenVPN. Built into Linux kernel. Basis for many commercial VPNs.', tags: [] },
        { icon: '🛠️', name: 'CyberGhost', vendor: '', description: 'Large server network optimized for streaming. Dedicated IPs available. NoSpy servers in Romania. 45-day money-back guarantee.', tags: [] },
        { icon: '🛠️', name: 'Private Internet Access', vendor: '', description: 'Long-established VPN with proven no-logs policy (court-verified). Open-source apps. MACE blocks ads, trackers, and malware.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Recommendations for secure, reliable connectivity',
      doItems: [
        'Redundant Tunnels — Always configure dual tunnels to separate availability zones. Use BGP with ECMP for automatic failover. Test failover scenarios quarterly.',
        'Strong Encryption — Use AES-256-GCM with SHA-384+ for integrity. Enable Perfect Forward Secrecy with DH Group 20+. Rotate keys every 90 days.',
        'Monitor Everything — Track tunnel state, throughput, latency, and packet loss. Alert on tunnel flaps (>3/hour), latency spikes (>100ms), throughput drops.',
        'BGP Best Practices — Use BGP for dynamic routing instead of static routes. Configure AS path prepending for traffic engineering. Set keepalive to 10/30s.',
        'Cost Optimization — Use Direct Connect for high-volume traffic (break-even ~1-5 TB/month). Keep VPN as backup. Consider hosted connections.',
        'Zero Trust Integration — Don\'t rely solely on VPN for security. Implement identity-aware proxies, micro-segmentation, and MFA for all connections.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🔐 SecureConnectAdvisor',
      role: '',
      description: 'Specialized agent for designing and optimizing VPN and hybrid connectivity architectures. Analyzes traffic patterns, recommends encryption settings, and generates infrastructure-as-code for multi-cloud connectivity.',
      capabilities: [
        'VPN configuration optimization',
        'Bandwidth and latency analysis',
        'Direct Connect cost modeling',
        'Encryption best practices',
        'Multi-cloud connectivity design',
        'Terraform/CloudFormation generation',
      ],
      codeFilename: 'vpn-config.tf',
      code: `resource "aws_vpn_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags = { Name = "prod-vpn-gateway" }
}

resource "aws_customer_gateway" "dc" {
  bgp_asn    = 65000
  ip_address = "203.0.113.1"
  type       = "ipsec.1"
}

resource "aws_vpn_connection" "main" {
  vpn_gateway_id      = aws_vpn_gateway.main.id
  customer_gateway_id = aws_customer_gateway.dc.id
  type                = "ipsec.1"
  static_routes_only  = false
}`,
    },
    relatedPages: [
      { number: '', title: 'DNS & CDN', description: 'Global traffic routing and content delivery', slug: 'dns-cdn' },
      { number: '', title: 'Network Security', description: 'Firewalls, WAF, and zero-trust architecture', slug: 'network-security' },
      { number: '', title: 'Service Mesh', description: 'Microservices networking and observability', slug: 'service-mesh' },
    ],
    prevPage: { title: '15.3 DNS & CDN', slug: 'dns-cdn' },
    nextPage: { title: '15.5 Network Security', slug: 'network-security' },
  },
  {
    slug: 'network-security',
    badge: '🛡️ Page 15.5',
    title: 'Network Security',
    description: 'Comprehensive protection for cloud infrastructure with firewalls, WAF, DDoS mitigation, and zero-trust architecture. Defense in depth from edge to workload.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: '100 Tbps', label: 'DDoS Capacity' },
      { value: '<1ms', label: 'WAF Latency' },
      { value: '99.999%', label: 'Threat Detection' },
      { value: '7 Layers', label: 'OSI Protection' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding cloud network security',
      subsections: [
        {
          heading: 'Why Network Security Matters',
          paragraphs: [
            'Network security protects your infrastructure, applications, and data from unauthorized access, attacks, and data breaches. In cloud environments, the attack surface expands with distributed resources, APIs, and multiple entry points.',
            'Modern threats include: DDoS attacks overwhelming infrastructure, injection attacks exploiting application vulnerabilities, lateral movement after initial breach, and data exfiltration stealing sensitive information.',
          ],
        },
        {
          heading: 'Defense in Depth Strategy',
          paragraphs: [
            'Perimeter Security: DDoS protection, WAF, and edge firewalls filter malicious traffic before it reaches your infrastructure.',
            'Network Segmentation: VPCs, subnets, and security groups isolate workloads and limit blast radius of breaches.',
            'Zero Trust: Never trust, always verify. Authenticate and authorize every request regardless of network location.',
          ],
        },
        {
          heading: 'Shared Responsibility Model',
          paragraphs: [
            'In cloud environments, security is a shared responsibility. Cloud providers secure the infrastructure (physical security, hypervisor, network fabric), while customers secure their workloads (OS patches, application security, data encryption, IAM policies). Understanding this boundary is critical—misconfigured security groups, overly permissive IAM roles, and exposed S3 buckets are common causes of cloud breaches. Use cloud-native security tools alongside third-party solutions for comprehensive protection.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Defense in Depth Architecture',
      subtitle: 'Multiple layers of security controls',
      columns: 2,
      cards: [
        {
          className: 'layer-0',
          borderColor: '#3B82F6',
          icon: 'LAYER 1',
          title: 'Edge Protection',
          description: 'First line of defense at the network edge. Absorbs volumetric attacks and filters malicious requests before reaching infrastructure.',
          examples: [],
        },
        {
          className: 'layer-1',
          borderColor: '#10B981',
          icon: 'LAYER 2',
          title: 'Network Controls',
          description: 'Network-level filtering and segmentation. Controls traffic flow between subnets and enforces isolation between workloads.',
          examples: [],
        },
        {
          className: 'layer-2',
          borderColor: '#8B5CF6',
          icon: 'LAYER 3',
          title: 'Host Security',
          description: 'Instance-level protection with stateful firewalls and endpoint detection. Monitors for malicious activity on individual hosts.',
          examples: [],
        },
        {
          className: 'layer-3',
          borderColor: '#F59E0B',
          icon: 'LAYER 4',
          title: 'Application Security',
          description: 'Identity-based access control and secrets management. Ensures only authenticated and authorized requests reach applications.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding cloud network security', tags: [] },
        { icon: '📌', title: 'Defense in Depth Architecture', subtitle: '', description: 'Multiple layers of security controls', tags: [] },
        { icon: '📌', title: 'Firewall Types', subtitle: '', description: 'Network traffic filtering at different layers', tags: [] },
        { icon: '📌', title: 'WAF & DDoS Protection', subtitle: '', description: 'Application-layer security and volumetric attack mitigation', tags: [] },
        { icon: '📌', title: 'Security Tools & Platforms', subtitle: '', description: 'Leading network security solutions', tags: [] },
        { icon: '📌', title: 'Security Tools Scorecard', subtitle: '', description: 'Comparative ratings across key capabilities', tags: [] },
        { icon: '📌', title: 'Zero Trust Architecture', subtitle: '', description: 'Never trust, always verify', tags: [] },
        { icon: '📌', title: 'Cloud Provider Security Services', subtitle: '', description: 'Native security offerings comparison', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Cloudflare', vendor: '', description: 'Global edge network with integrated WAF, DDoS protection, and CDN. Zero Trust access, bot management, and API security.', tags: [] },
        { icon: '🛠️', name: 'Palo Alto Networks', vendor: '', description: 'Enterprise next-gen firewall with Prisma Cloud for cloud security. App-ID, User-ID, Content-ID for deep visibility and control.', tags: [] },
        { icon: '🛠️', name: 'Fortinet', vendor: '', description: 'FortiGate NGFW with Security Fabric for unified visibility. FortiGuard threat intelligence, SD-WAN integration, OT security.', tags: [] },
        { icon: '🛠️', name: 'CrowdStrike', vendor: '', description: 'Cloud-native endpoint protection with Falcon platform. AI-powered threat detection, threat hunting, and incident response.', tags: [] },
        { icon: '🛠️', name: 'Zscaler', vendor: '', description: 'Cloud-native SASE platform. Zero Trust Exchange connects users to apps without network access. Inline inspection of all traffic.', tags: [] },
        { icon: '🛠️', name: 'Okta', vendor: '', description: 'Identity-first security with SSO, MFA, and lifecycle management. Universal Directory integrates all identity sources.', tags: [] },
        { icon: '🛠️', name: 'Akamai', vendor: '', description: 'Massive edge network with App & API Protector. Prolexic DDoS protection, Bot Manager, and micro-segmentation with Guardicore.', tags: [] },
        { icon: '🛠️', name: 'Imperva', vendor: '', description: 'Application and data security platform. Cloud WAF, DDoS protection, API security, and database activity monitoring.', tags: [] },
        { icon: '🛠️', name: 'AWS Security Suite', vendor: '', description: 'Native AWS security services including WAF, Shield, GuardDuty, Security Hub, and Network Firewall. Deep AWS integration.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Security recommendations for cloud networks',
      doItems: [
        'Defense in Depth — Layer multiple security controls. Don\'t rely on any single control. Combine edge protection, network segmentation, host security, and application controls.',
        'Least Privilege Access — Grant minimum permissions required. Use IAM roles instead of long-term credentials. Implement just-in-time access for privileged operations.',
        'Encrypt Everything — Encrypt data at rest and in transit. Use TLS 1.3 for all connections. Implement mTLS for service-to-service communication in sensitive environments.',
        'Monitor and Alert — Enable VPC Flow Logs, CloudTrail, and GuardDuty. Set up alerts for security events. Maintain audit logs for compliance and forensics.',
        'Segment Networks — Use separate VPCs/VNets for prod, dev, and sensitive workloads. Implement micro-segmentation within environments. Control east-west traffic.',
        'Automate Security — Use Infrastructure as Code for security configurations. Implement automated compliance checks. Deploy security controls via CI/CD pipelines.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🛡️ SecurityArchitect',
      role: '',
      description: 'Specialized agent for designing and implementing cloud network security architectures. Analyzes threat models, recommends security controls, and generates security configurations.',
      capabilities: [
        'Threat modeling and risk assessment',
        'Security architecture design',
        'Compliance mapping (SOC2, HIPAA, PCI)',
        'WAF rule configuration',
        'Zero Trust implementation',
        'Security policy generation',
      ],
      codeFilename: 'security-group.tf',
      code: `resource "aws_security_group" "web" {
  name        = "web-sg"
  vpc_id      = aws_vpc.main.id
  description = "Web tier security group"

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTPS from internet"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`,
    },
    relatedPages: [
      { number: '', title: 'VPN & Connectivity', description: 'Secure tunnels and hybrid connectivity', slug: 'vpn-connectivity' },
      { number: '', title: 'Service Mesh', description: 'Microservices networking and mTLS', slug: 'service-mesh' },
      { number: '', title: 'Network Architecture', description: 'VPC design and network topology', slug: 'network-architecture' },
    ],
    prevPage: { title: '15.4 VPN & Connectivity', slug: 'vpn-connectivity' },
    nextPage: { title: '15.6 Service Mesh', slug: 'service-mesh' },
  },
  {
    slug: 'service-mesh',
    badge: '🕸️ Page 15.6',
    title: 'Service Mesh',
    description: 'Infrastructure layer for microservices communication with traffic management, security, and observability built into the network fabric.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'mTLS', label: 'Zero Trust Security' },
      { value: '<1ms', label: 'Proxy Latency' },
      { value: 'L7', label: 'Traffic Control' },
      { value: '100%', label: 'Observability' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding service mesh architecture',
      subsections: [
        {
          heading: 'What is a Service Mesh?',
          paragraphs: [
            'A service mesh is a dedicated infrastructure layer that handles service-to-service communication. It abstracts the network from application code, providing traffic management, security, and observability as platform capabilities.',
            'Instead of embedding communication logic in each service, the mesh uses sidecar proxies deployed alongside each workload to intercept and manage all network traffic transparently.',
          ],
        },
        {
          heading: 'Why Use a Service Mesh?',
          paragraphs: [
            'Complexity: Microservices architectures create exponential service-to-service connections that are difficult to secure and observe.',
            'Consistency: Apply uniform policies for retries, timeouts, circuit breaking, and security across all services without code changes.',
            'Visibility: Gain deep insights into traffic patterns, latencies, and errors across the entire service topology.',
          ],
        },
        {
          heading: 'Data Plane vs Control Plane',
          paragraphs: [
            'Service meshes have two distinct components. The data plane consists of lightweight proxies (typically Envoy) deployed as sidecars that intercept all inbound and outbound traffic. These proxies handle load balancing, authentication, authorization, and telemetry collection. The control plane manages and configures the proxies, distributing policies, certificates, and service discovery information. This separation allows for centralized management with distributed enforcement, enabling teams to update routing rules, security policies, and observability configurations without modifying application code.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Features',
      subtitle: 'Key capabilities of service mesh platforms',
      columns: 2,
      cards: [
        {
          className: 'feature-0',
          borderColor: '#3B82F6',
          icon: '🔐',
          title: 'Security (mTLS)',
          description: 'Automatic mutual TLS encryption for all service-to-service communication with certificate rotation.',
          examples: ['🔒 Automatic certificate provisioning and rotation', '🔒 Identity-based authentication (SPIFFE)', '🔒 Fine-grained authorization policies', '🔒 End-to-end encryption without code changes'],
        },
        {
          className: 'feature-1',
          borderColor: '#10B981',
          icon: '🚦',
          title: 'Traffic Management',
          description: 'Advanced routing, load balancing, and traffic shaping capabilities at the application layer.',
          examples: ['🔀 Canary deployments and A/B testing', '🔀 Traffic splitting and mirroring', '🔀 Retries, timeouts, circuit breaking', '🔀 Rate limiting and fault injection'],
        },
        {
          className: 'feature-2',
          borderColor: '#8B5CF6',
          icon: '📈',
          title: 'Observability',
          description: 'Deep visibility into service behavior with metrics, traces, and logs collected automatically.',
          examples: ['📊 Golden signals (latency, traffic, errors, saturation)', '📊 Distributed tracing across services', '📊 Service topology visualization', '📊 Real-time dashboards and alerting'],
        },
        {
          className: 'feature-3',
          borderColor: '#F59E0B',
          icon: '🛡️',
          title: 'Resilience',
          description: 'Built-in patterns for handling failures gracefully and maintaining system stability.',
          examples: ['⚡ Circuit breakers prevent cascade failures', '⚡ Automatic retries with exponential backoff', '⚡ Outlier detection and ejection', '⚡ Health checking and load balancing'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding service mesh architecture', tags: [] },
        { icon: '📌', title: 'Service Mesh Architecture', subtitle: '', description: 'Data plane and control plane components', tags: [] },
        { icon: '📌', title: 'Core Features', subtitle: '', description: 'Key capabilities of service mesh platforms', tags: [] },
        { icon: '📌', title: 'Service Mesh Platforms', subtitle: '', description: 'Leading service mesh solutions', tags: [] },
        { icon: '📌', title: 'Service Mesh Scorecard', subtitle: '', description: 'Comparative ratings across key capabilities', tags: [] },
        { icon: '📌', title: 'Platform Comparison', subtitle: '', description: 'Detailed feature comparison of top service meshes', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Recommendations for service mesh adoption', tags: [] },
        { icon: '📌', title: 'Home Mesh Networks (WiFi)', subtitle: '', description: 'Consumer mesh networking for whole-home coverage', tags: [] },
      ],
    },
    tools: {
      title: 'Service Mesh Platforms',
      subtitle: 'Leading service mesh solutions',
      items: [
        { icon: 'Is', name: 'Istio', vendor: '', description: 'Most popular service mesh with comprehensive feature set. Envoy-based with powerful traffic management, security, and observability.', tags: [] },
        { icon: 'Ld', name: 'Linkerd', vendor: '', description: 'Lightweight, security-focused mesh built for simplicity. Rust-based proxy with minimal resource overhead and fast performance.', tags: [] },
        { icon: 'Co', name: 'Consul Connect', vendor: '', description: 'Service mesh built on Consul\'s service discovery. Works across Kubernetes, VMs, and multi-cloud with built-in service catalog.', tags: [] },
        { icon: 'Ci', name: 'Cilium', vendor: '', description: 'eBPF-powered networking and service mesh. Kernel-level efficiency without sidecars, providing networking, security, and observability.', tags: [] },
        { icon: 'AM', name: 'AWS App Mesh', vendor: '', description: 'AWS-managed service mesh for ECS, EKS, and EC2. Deep AWS integration with CloudWatch, X-Ray, and IAM for observability and security.', tags: [] },
        { icon: 'Tr', name: 'Traefik Mesh', vendor: '', description: 'Lightweight, easy-to-use service mesh built on Traefik proxy. Simple installation with SMI compliance and intuitive configuration.', tags: [] },
        { icon: 'Ku', name: 'Kuma', vendor: '', description: 'Universal service mesh by Kong. Runs on Kubernetes and VMs with multi-zone support and built-in policies for enterprise use.', tags: [] },
        { icon: 'OS', name: 'Open Service Mesh', vendor: '', description: 'Lightweight SMI-compliant mesh from Microsoft. Simple Envoy-based implementation focused on ease of use (now archived).', tags: [] },
        { icon: 'Nx', name: 'NGINX Service Mesh', vendor: '', description: 'Enterprise service mesh powered by NGINX Plus. Familiar NGINX configuration with advanced traffic management and security features.', tags: [] },
        { icon: 'Er', name: 'Eero (Amazon)', vendor: '', description: 'Pioneer of home mesh WiFi. Simple setup, excellent app, integrates with Alexa. Eero Pro 6E offers tri-band WiFi 6E coverage.', tags: [] },
        { icon: 'GN', name: 'Google Nest WiFi Pro', vendor: '', description: 'Google\'s mesh system with WiFi 6E and Matter/Thread support. Google Assistant built into nodes, seamless Google Home integration.', tags: [] },
        { icon: 'Nt', name: 'Netgear Orbi', vendor: '', description: 'High-performance tri-band mesh with dedicated backhaul channel. Orbi 970 offers WiFi 7 with 27 Gbps speeds for power users.', tags: [] },
        { icon: 'Tp', name: 'TP-Link Deco', vendor: '', description: 'Affordable mesh solution with excellent coverage. Deco XE75 offers WiFi 6E at competitive prices with built-in IoT protection.', tags: [] },
        { icon: 'Li', name: 'Linksys Velop', vendor: '', description: 'Modular mesh system with Intelligent Mesh technology. MX6200 offers WiFi 6 with tri-band coverage and easy node expansion.', tags: [] },
        { icon: 'Ub', name: 'Ubiquiti UniFi', vendor: '', description: 'Enterprise-grade mesh for home power users. UniFi Dream Machine with access points offers advanced features and granular control.', tags: [] },
        { icon: 'vL', name: 'vLLM', vendor: '', description: 'High-throughput LLM serving with PagedAttention. Continuous batching, tensor parallelism, and OpenAI-compatible API.', tags: [] },
        { icon: 'Tr', name: 'Triton Inference Server', vendor: '', description: 'NVIDIA\'s production inference server. Multi-framework support, dynamic batching, model ensemble, and GPU optimization.', tags: [] },
        { icon: 'KS', name: 'KServe', vendor: '', description: 'Kubernetes-native model serving with autoscaling. Supports TensorFlow, PyTorch, XGBoost with canary rollouts and explainability.', tags: [] },
        { icon: 'Ry', name: 'Ray Serve', vendor: '', description: 'Scalable model serving on Ray. Composable ML pipelines, fractional GPU allocation, and seamless Python integration.', tags: [] },
        { icon: 'Sl', name: 'Seldon Core', vendor: '', description: 'Enterprise ML deployment platform. Inference graphs, A/B testing, drift detection, and model explanations at scale.', tags: [] },
        { icon: 'Ts', name: 'TorchServe', vendor: '', description: 'Official PyTorch model serving. Easy deployment, model versioning, metrics, and integration with TorchScript.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Recommendations for service mesh adoption',
      doItems: [
        'Start Simple — Begin with observability and mTLS before advanced traffic management. Get visibility into your services before making routing changes.',
        'Incremental Adoption — Roll out mesh to non-critical services first. Use namespace-level injection and gradually expand coverage as you gain confidence.',
        'Monitor Resource Usage — Sidecar proxies add CPU and memory overhead. Set appropriate resource limits and monitor proxy performance in production.',
        'Implement Gradually — Start with permissive mode for mTLS, then progressively tighten security policies. Avoid breaking existing services during migration.',
        'Standardize Configurations — Use GitOps for mesh configuration management. Version control all VirtualServices, DestinationRules, and AuthorizationPolicies.',
        'Plan for Multi-cluster — Design mesh architecture with multi-cluster in mind from the start. Consider trust domain boundaries and cross-cluster service discovery.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🕸️ MeshArchitect',
      role: '',
      description: 'Specialized agent for designing, deploying, and managing service mesh architectures. Provides configuration generation, troubleshooting, and optimization recommendations.',
      capabilities: [
        'Mesh architecture design',
        'Configuration generation (Istio, Linkerd)',
        'mTLS and security policy setup',
        'Traffic management rules',
        'Troubleshooting and debugging',
        'Observability configuration',
      ],
      codeFilename: 'virtual-service.yaml',
      code: `apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: reviews-routing
spec:
  hosts:
    - reviews
  http:
    - match:
        - headers:
            end-user:
              exact: jason
      route:
        - destination:
            host: reviews
            subset: v2
    - route:
        - destination:
            host: reviews
            subset: v1
          weight: 90
        - destination:
            host: reviews
            subset: v3
          weight: 10`,
    },
    relatedPages: [
      { number: '', title: 'Network Security', description: 'Firewalls, WAF, and zero trust', slug: 'network-security' },
      { number: '', title: 'Load Balancing', description: 'Traffic distribution strategies', slug: 'load-balancing' },
      { number: '', title: 'Network Architecture', description: 'VPC design and topology', slug: 'network-architecture' },
    ],
    prevPage: { title: '15.5 Network Security', slug: 'network-security' },
    nextPage: undefined,
  },
]

registerPages('networking', pages)
export default pages
