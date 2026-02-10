import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'microservices',
    badge: '🔲 Page 9.1',
    title: 'Microservices Architecture',
    description: 'Decompose monolithic applications into independently deployable services. Each service owns its data, scales independently, and communicates through well-defined APIs—enabling teams to move fast without breaking things.',
    accentColor: '#6366F1',
    accentLight: '#818CF8',
    metrics: [
      { value: '85%', label: 'Enterprise Adoption' },
      { value: '10x', label: 'Deploy Frequency' },
      { value: '200+', label: 'Services @ Netflix' },
      { value: '50%', label: 'Faster Time-to-Market' },
    ],
    overview: {
      title: 'Understanding Microservices',
      subtitle: 'The architectural style that powers modern cloud-native applications',
      subsections: [
        {
          heading: 'What Are Microservices?',
          paragraphs: [
            'Microservices architecture structures an application as a collection of loosely coupled, independently deployable services. Each service is organized around a business capability, owns its data, and communicates with other services through lightweight protocols.',
            'The key insight: instead of one big application that does everything, you have many small applications that each do one thing well.',
          ],
        },
        {
          heading: 'Why Microservices Matter',
          paragraphs: [
            'Independent Deployment: Deploy one service without deploying the whole system. Teams can ship features faster with less coordination.',
            'Technology Freedom: Use the right tool for each job. One service in Python for ML, another in Go for performance, another in Node for real-time.',
            'Organizational Alignment: Small teams own small services. Conway\'s Law works for you instead of against you.',
          ],
        },
        {
          heading: 'Key Characteristics',
          paragraphs: [
          ],
        },
      ],
    },
    concepts: {
      title: 'Decomposition Strategies',
      subtitle: 'How to break apart a monolith into microservices',
      columns: 2,
      cards: [
        {
          className: 'decomp-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'By Business Capability',
          description: 'Decompose around what the business does. Each capability becomes a service that encapsulates related business logic.',
          examples: [],
        },
        {
          className: 'decomp-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'By Subdomain (DDD)',
          description: 'Use Domain-Driven Design to identify bounded contexts. Each subdomain maps to a service with its own ubiquitous language.',
          examples: [],
        },
        {
          className: 'decomp-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Strangler Fig Pattern',
          description: 'Gradually migrate functionality from monolith to services. Route traffic to new services while legacy still runs.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Microservices Architecture',
          description: 'Decompose monolithic applications into independently deployable services. Each service owns its data, scales independently, and communicates through well-defined APIs—enabling teams to move fast witho',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Platform & Tools',
      subtitle: 'Container orchestration and service mesh platforms',
      cards: [
        { icon: '🛠️', title: 'Complexity', subtitle: 'High', description: 'Medium', tags: ['High'] },
        { icon: '🛠️', title: 'Ecosystem', subtitle: '✓ Largest', description: 'Growing', tags: ['✓ Largest'] },
        { icon: '🛠️', title: 'Multi-cloud', subtitle: '✓ Native', description: '✓ Yes', tags: ['✓ Native'] },
        { icon: '🛠️', title: 'Serverless', subtitle: 'Via add-ons', description: 'Via drivers', tags: ['Via add-ons'] },
        { icon: '🛠️', title: 'Learning Curve', subtitle: 'Steep', description: 'Moderate', tags: ['Steep'] },
        { icon: '🛠️', title: 'Production Ready', subtitle: '✓ Proven', description: '✓ Proven', tags: ['✓ Proven'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Kubernetes', vendor: '', description: 'The de facto standard for container orchestration. Handles deployment, scaling, load balancing, service discovery, and self-healing.', tags: [] },
        { icon: '🛠️', name: 'Istio', vendor: '', description: 'Full-featured service mesh providing traffic management, security (mTLS), observability, and policy enforcement without code changes.', tags: [] },
        { icon: '🛠️', name: 'Linkerd', vendor: '', description: 'Lightweight, security-focused service mesh. Simpler than Istio with automatic mTLS and golden metrics out of the box.', tags: [] },
        { icon: '🛠️', name: 'AWS ECS/Fargate', vendor: '', description: 'AWS-native container orchestration. ECS for control, Fargate for serverless containers. Deep AWS integration.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidance for successful microservices',
      doItems: [
        'Start with a monolith—understand your domain before decomposing',
        'Design for failure with circuit breakers, retries, and timeouts',
        'Embrace eventual consistency across service boundaries',
        'Invest in observability—tracing, logging, and metrics',
        'Automate everything—CI/CD, infrastructure as code, testing',
        'Own your APIs as products with versioning and documentation',
        'Size services around business capabilities, not technical layers',
        'Use async messaging for inter-service communication',
        'Implement consumer-driven contract testing',
      ],
      dontItems: [
        'Share databases between services—it creates hidden coupling',
        'Use distributed transactions—two-phase commit doesn\'t scale',
        'Ignore network latency—function calls are now network calls',
        'Skip contract testing—breaking changes will reach production',
        'Create services per database table—encapsulate capabilities',
        'Go all-in immediately—use strangler pattern for migration',
        'Build a distributed monolith—services must deploy independently',
        'Create nano-services—every function doesn\'t need a service',
        'Synchronously chain calls—latency multiplies, failures cascade',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'MicroservicesArchitect',
      role: 'Microservices Architect',
      description: 'An AI agent that helps design microservices architectures, decompose monoliths, define service boundaries, and plan migration strategies.',
      capabilities: [
        'Domain analysis and service boundary identification',
        'Communication pattern recommendations',
        'Data ownership and API design',
        'Migration planning with strangler pattern',
        'Anti-pattern detection and remediation',
        'Platform selection guidance',
      ],
      codeFilename: 'microservices_architect.py',
      code: `from crewai import Agent, Task, Crew

microservices_architect = Agent(
    role="Microservices Architect",
    goal="Design scalable microservices architectures",
    backstory="""Expert in decomposing monoliths,
    defining service boundaries using DDD principles,
    and designing resilient distributed systems.""",
    tools=[domain_analyzer, api_designer,
           dependency_mapper, migration_planner]
)

decomposition_task = Task(
    description="""Analyze this monolith and propose
    microservices decomposition:
    - Identify bounded contexts
    - Define service boundaries
    - Map data ownership
    - Design APIs between services
    - Create migration roadmap""",
    agent=microservices_architect
)`,
    },
    relatedPages: [
      { number: '', title: 'Event-Driven Architecture', description: 'Async communication patterns that complement microservices', slug: 'event-driven' },
      { number: '', title: 'Domain-Driven Design', description: 'The methodology for identifying service boundaries', slug: 'domain-driven' },
      { number: '', title: 'API Design Patterns', description: 'Designing the contracts between microservices', slug: 'api-patterns' },
    ],
    prevPage: undefined,
    nextPage: { title: '9.2 Event-Driven Architecture', slug: 'event-driven' },
  },
  {
    slug: 'event-driven',
    badge: '⚡ Page 9.2 • Reactive Systems',
    title: 'Event-Driven Architecture',
    description: 'An architectural paradigm where the flow of the program is determined by events—significant changes in state that are published, detected, and consumed by loosely coupled services. The foundation of reactive, real-time systems.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '2', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case for Event-Driven',
      subtitle: 'Why leading companies are adopting EDA',
      subsections: [
        {
          heading: 'The Business Case for Event-Driven',
          paragraphs: [
            'Why leading companies are adopting EDA',
          ],
        },
        {
          heading: 'Real-World Architecture: E-Commerce Order Flow',
          paragraphs: [
            'How events flow through a modern order processing system',
          ],
        },
        {
          heading: 'Common Tech Stack Patterns',
          paragraphs: [
            'Real-world implementations with popular technologies',
          ],
        },
      ],
    },
    concepts: {
      title: 'Messaging Patterns',
      subtitle: 'Common patterns in event-driven systems',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📡',
          title: '',
          description: 'Producer publishes to a topic, all subscribers receive a copy. One-to-many broadcast. Great for notifications, updates, and fan-out scenarios.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📬',
          title: '',
          description: 'Messages sent to a queue, only one consumer processes each message. Load balancing built-in. Good for work distribution and task processing.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: '',
          description: 'Events stored in an ordered, immutable log. Consumers read from any position. Enables replay, reprocessing, and multiple consumption patterns.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: '',
          description: 'Request via message, reply on separate channel with correlation ID. Decouples while preserving request/reply semantics.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Platform Comparison',
      subtitle: 'Choosing the right event infrastructure',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Model', tagText: 'Log-based streaming', tagClass: 'tag-blue', bestFor: 'Varies by service', complexity: 'medium', rating: 'Message broker' },
        { icon: '🛠️', name: 'Throughput', tagText: 'Millions/sec', tagClass: 'tag-green', bestFor: 'High (managed scaling)', complexity: 'medium', rating: 'Tens of thousands/sec' },
        { icon: '🛠️', name: 'Message retention', tagText: 'Configurable (days/forever)', tagClass: 'tag-purple', bestFor: 'Configurable', complexity: 'medium', rating: 'Until consumed' },
        { icon: '🛠️', name: 'Replay capability', tagText: 'Yes (core feature)', tagClass: 'tag-orange', bestFor: 'Varies', complexity: 'medium', rating: 'No (once consumed)' },
        { icon: '🛠️', name: 'Ordering', tagText: 'Per partition', tagClass: 'tag-pink', bestFor: 'Varies', complexity: 'medium', rating: 'Per queue' },
        { icon: '🛠️', name: 'Routing', tagText: 'Topic-based', tagClass: 'tag-blue', bestFor: 'Topic-based typically', complexity: 'medium', rating: 'Rich (exchanges, bindings)' },
        { icon: '🛠️', name: 'Exactly-once', tagText: 'Yes (with config)', tagClass: 'tag-green', bestFor: 'Some support', complexity: 'medium', rating: 'No (at-least-once)' },
        { icon: '🛠️', name: 'Operations', tagText: 'Complex (ZooKeeper/KRaft)', tagClass: 'tag-purple', bestFor: 'Managed', complexity: 'medium', rating: 'Moderate' },
        { icon: '🛠️', name: 'Best for', tagText: 'High-volume streaming', tagClass: 'tag-orange', bestFor: 'Quick start, less ops', complexity: 'medium', rating: 'Complex routing, RPC' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Apache Kafka', vendor: '', description: 'Distributed streaming platform. High throughput, durable storage, replay capability. De facto standard for event streaming.', tags: [] },
        { icon: '🛠️', name: 'RabbitMQ', vendor: '', description: 'Traditional message broker. Rich routing, multiple protocols (AMQP, MQTT). Great for complex routing patterns.', tags: [] },
        { icon: '🛠️', name: 'AWS Kinesis', vendor: '', description: 'Managed streaming service. Integrates with AWS ecosystem. Good for real-time analytics and data pipelines.', tags: [] },
        { icon: '🛠️', name: 'Azure Event Hubs', vendor: '', description: 'Big data streaming platform. Kafka-compatible API. Native Azure integration.', tags: [] },
        { icon: '🛠️', name: 'Google Pub/Sub', vendor: '', description: 'Fully managed messaging. Global scale, exactly-once delivery. Integrates with GCP services.', tags: [] },
        { icon: '🛠️', name: 'Apache Pulsar', vendor: '', description: 'Multi-tenant, geo-replicated. Unified queuing and streaming. Growing Kafka alternative.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Design idempotent consumers—handle duplicate events gracefully',
        'Use schemas (Avro, Protobuf) and schema registry for contracts',
        'Include correlation IDs for distributed tracing',
        'Plan for out-of-order events with timestamps and versions',
        'Implement dead letter queues for failed processing',
        'Monitor consumer lag and processing times',
        'Version your schemas for backward compatibility',
        'Use event sourcing for audit trails and replay',
      ],
      dontItems: [
        'Put large payloads in events—use references instead',
        'Create tight coupling via event contents',
        'Ignore backpressure—consumers must handle load spikes',
        'Assume ordered delivery across partitions',
        'Make breaking schema changes without versioning',
        'Use events when sync request/response is better',
        'Forget to handle poison messages gracefully',
        'Skip schema validation on producers and consumers',
      ],
    },
    agent: {
      avatar: '⚡',
      name: 'EventArchitect',
      role: 'Event-Driven Systems Designer',
      description: 'Designs event-driven architectures, defines event schemas, and recommends messaging patterns. Analyzes domain events, plans event flows, and selects appropriate platforms.',
      capabilities: [
      ],
      codeFilename: 'Event Designer\n                        event_architect.py',
      code: `# event_architect.py
from dataclasses import dataclass
from datetime import datetime
import uuid

@dataclass
class DomainEvent:
    """Base class for domain events."""
    event_id: str = field(default_factory=
        lambda: str(uuid.uuid4()))
    timestamp: datetime = field(default_factory=
        datetime.utcnow)
    correlation_id: str = None
    
@dataclass
class OrderPlaced(DomainEvent):
    """Event: Customer placed an order."""
    order_id: str
    customer_id: str
    total_amount: float
    items: list

class EventArchitect:
    def recommend_pattern(self, req: dict):
        if req["needs_replay"]:
            return "event_streaming"
        if req["complex_routing"]:
            return "message_broker"
        return "pub_sub"`,
    },
    relatedPages: [
      { number: 'Page 9.1', title: 'Microservices Architecture', description: 'Service decomposition and communication', slug: 'microservices' },
      { number: 'Page 9.6', title: 'CQRS & Event Sourcing', description: 'Events as the source of truth', slug: 'cqrs-eventsourcing' },
      { number: 'Page 9.3', title: 'Data Mesh', description: 'Domain-oriented data architecture', slug: 'data-mesh' },
    ],
    prevPage: { title: '9.1 Microservices Architecture', slug: 'microservices' },
    nextPage: { title: '9.3 Data Mesh', slug: 'data-mesh' },
  },
  {
    slug: 'data-mesh',
    badge: '🕸️ Page 9.3 • Decentralized Data Architecture',
    title: 'Data Mesh',
    description: 'A paradigm shift from centralized data lakes and warehouses to a distributed, domain-oriented architecture where data is treated as a product owned by domain teams. Federated governance, self-serve infrastructure, and product thinking for data.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '3', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case for Data Mesh',
      subtitle: 'Why enterprises are decentralizing data ownership',
      subsections: [
        {
          heading: 'The Business Case for Data Mesh',
          paragraphs: [
            'Why enterprises are decentralizing data ownership',
          ],
        },
        {
          heading: 'Data Mesh Architecture',
          paragraphs: [
            'How domains publish and consume data products',
          ],
        },
        {
          heading: 'Data Mesh Implementation Stacks',
          paragraphs: [
            'Platform choices for self-serve data infrastructure',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Four Principles of Data Mesh',
      subtitle: 'Foundational concepts from Zhamak Dehghani',
      columns: 2,
      cards: [
        {
          className: 'principle-0',
          borderColor: '#3B82F6',
          icon: '🏢',
          title: '',
          description: 'Data owned by domain teams who understand the business context, not centralized data teams.',
          examples: [],
        },
        {
          className: 'principle-1',
          borderColor: '#10B981',
          icon: '📦',
          title: '',
          description: 'Treat data like a product with consumers, SLAs, discoverability, and quality guarantees.',
          examples: [],
        },
        {
          className: 'principle-2',
          borderColor: '#8B5CF6',
          icon: '🛠️',
          title: '',
          description: 'Infrastructure that enables domain teams to publish and consume data without central team dependency.',
          examples: [],
        },
        {
          className: 'principle-3',
          borderColor: '#F59E0B',
          icon: '⚖️',
          title: '',
          description: 'Global standards with local autonomy—compliance enforced centrally, decisions made in domains.',
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
        { icon: '📌', title: 'The Business Case for Data Mesh', subtitle: '', description: 'Why enterprises are decentralizing data ownership', tags: [] },
        { icon: '📌', title: 'Data Mesh Architecture', subtitle: '', description: 'How domains publish and consume data products', tags: [] },
        { icon: '📌', title: 'Data Mesh Implementation Stacks', subtitle: '', description: 'Platform choices for self-serve data infrastructure', tags: [] },
        { icon: '📌', title: 'Common Data Mesh Approaches', subtitle: '', description: 'Implementation patterns and organizational models', tags: [] },
        { icon: '📌', title: 'Ecosystem vs. Data Mesh Scorecard', subtitle: '', description: 'Comparing traditional centralized vs mesh architectures', tags: [] },
        { icon: '📌', title: 'What the Industry Says About Data Mesh', subtitle: '', description: 'Perspectives from practitioners and analysts', tags: [] },
        { icon: '📌', title: 'Data Science & AI with Data Mesh', subtitle: '', description: 'Leveraging mesh architecture for ML and AI workloads', tags: [] },
        { icon: '📌', title: 'The Four Principles of Data Mesh', subtitle: '', description: 'Foundational concepts from Zhamak Dehghani', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Data Mesh Wins', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Centralized Wins', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Start with high-value, well-understood domains first',
        'Define clear data product contracts with SLAs',
        'Invest heavily in self-serve platform capabilities',
        'Establish federated governance model early',
        'Embed data engineers in domain teams',
        'Use standard formats and protocols across domains',
        'Build data product thinking into culture',
        'Measure and publish data quality metrics',
      ],
      dontItems: [
        'Try to mesh everything at once—start small',
        'Underinvest in the platform—it enables everything',
        'Expect domain teams to build from scratch',
        'Create data products without clear consumers',
        'Ignore organizational change management',
        'Skip governance—chaos ensues without standards',
        'Forget about cross-domain data products',
        'Treat data mesh as purely technical transformation',
      ],
    },
    agent: {
      avatar: '🕸️',
      name: 'DataMeshArchitect',
      role: 'Domain & Data Product Designer',
      description: 'Designs data mesh architectures, identifies domain boundaries, defines data products, and plans federated governance models.',
      capabilities: [
      ],
      codeFilename: 'Data Mesh Designer\n                        data_mesh_architect.py',
      code: `# data_mesh_architect.py
from crewai import Agent, Task, Crew

data_mesh_architect = Agent(
    role="Data Mesh Architect",
    goal="Design domain-oriented data architecture",
    backstory="""Expert in data mesh principles,
    domain-driven design for data, and building
    self-serve data platforms with Unity Catalog.""",
    tools=[domain_analyzer, product_definer,
           governance_designer, platform_planner]
)

design_task = Task(
    description="""Analyze this organization:
    {org_context}
    
    Identify data domains, define data products,
    and design governance model.""",
    agent=data_mesh_architect
)`,
    },
    relatedPages: [
      { number: 'Page 9.4', title: 'Data Lakehouse', description: 'Modern unified data architecture', slug: 'lakehouse' },
      { number: 'Page 9.7', title: 'Domain-Driven Design', description: 'Bounded contexts and domains', slug: 'domain-driven' },
      { number: 'Page 9.1', title: 'Microservices', description: 'Distributed service architecture', slug: 'microservices' },
    ],
    prevPage: { title: '9.2 Event-Driven Architecture', slug: 'event-driven' },
    nextPage: { title: '9.4 Data Lakehouse', slug: 'lakehouse' },
  },
  {
    slug: 'lakehouse',
    badge: '🏠 Page 9.4 • Modern Data Architecture',
    title: 'Data Lakehouse',
    description: 'A modern data architecture that combines the flexibility and low-cost storage of data lakes with the data management and ACID transaction capabilities of data warehouses. Powered by open table formats like Delta Lake, Apache Iceberg, and Apache Hudi.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '4', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case for Lakehouse',
      subtitle: 'Why enterprises are consolidating on lakehouse architecture',
      subsections: [
        {
          heading: 'The Business Case for Lakehouse',
          paragraphs: [
            'Why enterprises are consolidating on lakehouse architecture',
          ],
        },
        {
          heading: 'Lakehouse Architecture',
          paragraphs: [
            'Unified platform for all data workloads',
          ],
        },
        {
          heading: 'Lakehouse Implementation Stacks',
          paragraphs: [
            'Platform choices for building a lakehouse',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Business Case for Lakehouse',
      subtitle: 'Why enterprises are consolidating on lakehouse architecture',
      columns: 2,
      cards: [
        {
          className: 'business-0',
          borderColor: '#3B82F6',
          icon: '💰',
          title: '',
          description: 'Eliminate duplicate storage across lake and warehouse',
          examples: [],
        },
        {
          className: 'business-1',
          borderColor: '#10B981',
          icon: '🚀',
          title: '',
          description: 'Z-ordering, data skipping, and caching acceleration',
          examples: [],
        },
        {
          className: 'business-2',
          borderColor: '#8B5CF6',
          icon: '🔄',
          title: '',
          description: 'Single source of truth—no data movement between systems',
          examples: [],
        },
        {
          className: 'business-3',
          borderColor: '#F59E0B',
          icon: '🤖',
          title: '',
          description: 'Train models directly on production data, no exports',
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
        { icon: '📌', title: 'The Business Case for Lakehouse', subtitle: '', description: 'Why enterprises are consolidating on lakehouse architecture', tags: [] },
        { icon: '📌', title: 'Lakehouse Architecture', subtitle: '', description: 'Unified platform for all data workloads', tags: [] },
        { icon: '📌', title: 'Lakehouse Implementation Stacks', subtitle: '', description: 'Platform choices for building a lakehouse', tags: [] },
        { icon: '📌', title: 'Data Lake vs Warehouse vs Lakehouse', subtitle: '', description: 'Understanding the evolution of data architectures', tags: [] },
        { icon: '📌', title: 'Understanding Data Architectures', subtitle: '', description: 'Deep dive into each approach', tags: [] },
        { icon: '📌', title: 'The Evolution of Data Architecture', subtitle: '', description: 'How we got from warehouses to lakehouses', tags: [] },
        { icon: '📌', title: 'When to Use Each Architecture', subtitle: '', description: 'Decision framework for your use case', tags: [] },
        { icon: '📌', title: 'What the Industry Says', subtitle: '', description: 'Lakehouse adoption and perspectives', tags: [] },
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
        'Use medallion architecture (Bronze → Silver → Gold)',
        'Implement Z-ordering on high-cardinality filter columns',
        'Enable time travel for audit and recovery',
        'Use Unity Catalog for governance from day one',
        'Automate VACUUM and OPTIMIZE operations',
        'Design partitions based on query patterns',
        'Use Delta Live Tables for declarative pipelines',
        'Monitor data quality with expectations',
      ],
      dontItems: [
        'Skip the Silver layer—it catches quality issues',
        'Over-partition small tables (file fragmentation)',
        'Forget to run OPTIMIZE regularly',
        'Use SELECT * in production queries',
        'Store secrets in notebooks or code',
        'Ignore small file problem (1000s of tiny files)',
        'Mix batch and streaming without clear patterns',
        'Skip testing on representative data volumes',
      ],
    },
    agent: {
      avatar: '🏠',
      name: 'LakehouseOptimizer',
      role: 'Performance & Cost Tuning Agent',
      description: 'Analyzes lakehouse tables, recommends optimizations, identifies performance bottlenecks, and automates maintenance operations.',
      capabilities: [
      ],
      codeFilename: 'Lakehouse Optimizer\n                        lakehouse_agent.py',
      code: `# lakehouse_agent.py
from crewai import Agent, Task, Crew

lakehouse_optimizer = Agent(
    role="Lakehouse Optimizer",
    goal="Maximize query performance, minimize cost",
    backstory="""Expert in Delta Lake optimization,
    Z-ordering strategies, partition design, and
    Unity Catalog governance implementation.""",
    tools=[table_analyzer, query_profiler,
           optimization_recommender, cost_calculator]
)

optimize_task = Task(
    description="""Analyze these tables:
    {table_list}
    
    Recommend Z-order columns, partition changes,
    and estimate performance improvements.""",
    agent=lakehouse_optimizer
)`,
    },
    relatedPages: [
      { number: 'Page 9.3', title: 'Data Mesh', description: 'Domain-oriented data architecture', slug: 'data-mesh' },
      { number: 'Page 9.2', title: 'Event-Driven', description: 'Streaming and event architectures', slug: 'event-driven' },
      { number: 'Page 9.6', title: 'CQRS & Event Sourcing', description: 'Command query responsibility separation', slug: 'cqrs-eventsourcing' },
    ],
    prevPage: { title: '9.3 Data Mesh', slug: 'data-mesh' },
    nextPage: { title: '9.5 API Design Patterns', slug: 'api-patterns' },
  },
  {
    slug: 'api-patterns',
    badge: '🔌 Page 9.5 • Service Communication',
    title: 'API Design Patterns',
    description: 'The backbone of modern distributed systems. APIs define how services communicate—REST for resources, GraphQL for flexibility, gRPC for performance, WebSockets for real-time. Choosing the right pattern determines scalability, developer experience, and system evolution.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '5', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case for API Strategy',
      subtitle: 'Why API design matters for business outcomes',
      subsections: [
        {
          heading: 'The Business Case for API Strategy',
          paragraphs: [
            'Why API design matters for business outcomes',
          ],
        },
        {
          heading: 'API Gateway Architecture',
          paragraphs: [
            'How APIs connect clients to services',
          ],
        },
        {
          heading: 'When to Use Each API Style',
          paragraphs: [
            'Decision framework for your use case',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Business Case for API Strategy',
      subtitle: 'Why API design matters for business outcomes',
      columns: 2,
      cards: [
        {
          className: 'business-0',
          borderColor: '#3B82F6',
          icon: '🚀',
          title: '',
          description: 'Well-designed APIs reduce partner integration time',
          examples: [],
        },
        {
          className: 'business-1',
          borderColor: '#10B981',
          icon: '👨‍💻',
          title: '',
          description: 'Good DX means less time debugging, more building',
          examples: [],
        },
        {
          className: 'business-2',
          borderColor: '#8B5CF6',
          icon: '📈',
          title: '',
          description: 'APIs as products—Stripe, Twilio, AWS built empires',
          examples: [],
        },
        {
          className: 'business-3',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: '',
          description: 'Versioned APIs allow systems to evolve independently',
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
        { icon: '📌', title: 'The Business Case for API Strategy', subtitle: '', description: 'Why API design matters for business outcomes', tags: [] },
        { icon: '📌', title: 'API Gateway Architecture', subtitle: '', description: 'How APIs connect clients to services', tags: [] },
        { icon: '📌', title: 'API Pattern Comparison', subtitle: '', description: 'Choosing the right protocol for your use case', tags: [] },
        { icon: '📌', title: 'When to Use Each API Style', subtitle: '', description: 'Decision framework for your use case', tags: [] },
        { icon: '📌', title: 'The Evolution of APIs', subtitle: '', description: 'From RPC to modern API patterns', tags: [] },
        { icon: '📌', title: 'REST APIs', subtitle: '', description: 'Representational State Transfer', tags: [] },
        { icon: '📌', title: 'GraphQL', subtitle: '', description: 'Query language for your API', tags: [] },
        { icon: '📌', title: 'gRPC', subtitle: '', description: 'High-performance RPC framework', tags: [] },
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
        'Version your APIs from day one (/v1/, /v2/)',
        'Use consistent naming conventions',
        'Return meaningful HTTP status codes',
        'Implement rate limiting and throttling',
        'Document everything with OpenAPI/Swagger',
        'Use pagination for list endpoints',
        'Implement proper authentication (OAuth2, JWT)',
        'Design for backward compatibility',
      ],
      dontItems: [
        'Use verbs in REST URLs (/getUser, /deleteItem)',
        'Return 200 OK for errors with error body',
        'Expose internal implementation details',
        'Skip input validation and sanitization',
        'Break existing clients without deprecation',
        'Return unbounded result sets',
        'Use cookies for API authentication',
        'Ignore idempotency for write operations',
      ],
    },
    agent: {
      avatar: '🔌',
      name: 'APIArchitect',
      role: 'API Design & Optimization Agent',
      description: 'Designs APIs, generates OpenAPI specs, reviews existing APIs for best practices, and recommends protocol selection based on requirements.',
      capabilities: [
      ],
      codeFilename: 'API Architect\n                        api_architect.py',
      code: `# api_architect.py
from crewai import Agent, Task, Crew

api_architect = Agent(
    role="API Architect",
    goal="Design clean, scalable, secure APIs",
    backstory="""Expert in REST, GraphQL, gRPC,
    WebSocket patterns. Deep knowledge of API
    security, versioning, and documentation.""",
    tools=[openapi_generator, schema_validator,
           security_scanner, protocol_advisor]
)

design_task = Task(
    description="""Design an API for:
    {requirements}
    
    Generate OpenAPI spec, recommend protocol,
    and identify security considerations.""",
    agent=api_architect
)`,
    },
    relatedPages: [
      { number: 'Page 9.1', title: 'Microservices', description: 'Service-oriented architecture patterns', slug: 'microservices' },
      { number: 'Page 9.2', title: 'Event-Driven', description: 'Asynchronous messaging patterns', slug: 'event-driven' },
      { number: 'Page 9.6', title: 'CQRS & Event Sourcing', description: 'Command query separation patterns', slug: 'cqrs-eventsourcing' },
    ],
    prevPage: { title: '9.4 Data Lakehouse', slug: 'lakehouse' },
    nextPage: { title: '9.6 CQRS & Event Sourcing', slug: 'cqrs-eventsourcing' },
  },
  {
    slug: 'cqrs-eventsourcing',
    badge: '📚 Page 9.6 • Advanced Data Patterns',
    title: 'CQRS & Event Sourcing',
    description: 'Command Query Responsibility Segregation (CQRS) separates reads from writes for independent scaling. Event Sourcing stores all changes as immutable events, providing complete audit trails and the ability to reconstruct state at any point in time. Together, they enable powerful temporal queries and complex domain modeling.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '6', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case',
      subtitle: 'Why CQRS and Event Sourcing matter for enterprises',
      subsections: [
        {
          heading: 'The Business Case',
          paragraphs: [
            'Why CQRS and Event Sourcing matter for enterprises',
          ],
        },
        {
          heading: 'CQRS + Event Sourcing Architecture',
          paragraphs: [
            'How commands, events, and queries flow',
          ],
        },
        {
          heading: 'Understanding the Patterns',
          paragraphs: [
            'CQRS and Event Sourcing explained',
            'CQRS and Event Sourcing are often used together but are independent patterns. You can use CQRS without Event Sourcing (different read/write DBs) or Event Sourcing without CQRS (single model, events as storage).',
            'Together they shine when: You need complete audit trails, temporal queries ("what was the state on Jan 1?"), complex domains with many integrations, or high read/write ratio imbalance.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Understanding the Patterns',
      subtitle: 'CQRS and Event Sourcing explained',
      columns: 2,
      cards: [
        {
          className: 'cqrs',
          borderColor: '#3B82F6',
          icon: '✏️📖',
          title: 'CQRS\n                            Command Query Responsibility Segregation',
          description: 'Separate models for reading and writing data. Commands mutate state through one model, queries read through another. Each can be optimized independently—writes for consistency, reads for performance.',
          examples: [],
        },
        {
          className: 'es',
          borderColor: '#10B981',
          icon: '📜',
          title: 'Event Sourcing\n                            State as a sequence of events',
          description: 'Instead of storing current state, store all events that led to the current state. Current state is derived by replaying events. Provides complete audit trail and ability to rebuild state at any point in time.',
          examples: [],
        },
        {
          className: 'overview-2',
          borderColor: '#8B5CF6',
          icon: '📌',
          title: 'Understanding the Patterns',
          description: 'CQRS and Event Sourcing explained',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'CQRS & Event Sourcing',
          description: 'Command Query Responsibility Segregation (CQRS) separates reads from writes for independent scaling. Event Sourcing stores all changes as immutable events, providing complete audit trails and the abil',
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
        { icon: '📌', title: 'The Business Case', subtitle: '', description: 'Why CQRS and Event Sourcing matter for enterprises', tags: [] },
        { icon: '📌', title: 'CQRS + Event Sourcing Architecture', subtitle: '', description: 'How commands, events, and queries flow', tags: [] },
        { icon: '📌', title: 'Understanding the Patterns', subtitle: '', description: 'CQRS and Event Sourcing explained', tags: [] },
        { icon: '📌', title: 'Pattern Comparison', subtitle: '', description: 'Traditional CRUD vs CQRS vs CQRS+ES', tags: [] },
        { icon: '📌', title: 'When to Use Each Pattern', subtitle: '', description: 'Decision framework for your architecture', tags: [] },
        { icon: '📌', title: 'Evolution of Data Persistence', subtitle: '', description: 'From CRUD to Event Sourcing', tags: [] },
        { icon: '📌', title: 'Ideal Use Cases', subtitle: '', description: 'Where CQRS and Event Sourcing excel', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for successful implementation', tags: [] },
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
        'Design events as immutable facts that happened',
        'Version your events for schema evolution',
        'Use event store snapshots for long-running aggregates',
        'Keep aggregates small and focused',
        'Build multiple read models for different query patterns',
        'Test by replaying known event sequences',
        'Monitor projection lag (read model staleness)',
        'Design for idempotent event handlers',
      ],
      dontItems: [
        'Store derived data in events (calculate it)',
        'Mutate or delete events (ever!)',
        'Query the event store directly for reads',
        'Create "UpdatedEverything" events (be specific)',
        'Forget about event ordering guarantees',
        'Skip the "what if we need to delete data" discussion',
        'Use ES for the entire system (bounded contexts)',
        'Assume eventual consistency is always fine for UX',
      ],
    },
    agent: {
      avatar: '📜',
      name: 'EventModeler',
      role: 'Event Sourcing Design Agent',
      description: 'Designs event schemas, models aggregates, identifies bounded contexts, and helps migrate from CRUD to event-sourced systems.',
      capabilities: [
      ],
      codeFilename: 'Event Modeler\n                        event_modeler.py',
      code: `# event_modeler.py
from crewai import Agent, Task, Crew

event_modeler = Agent(
    role="Event Sourcing Architect",
    goal="Design clean event-sourced systems",
    backstory="""Expert in CQRS, Event Sourcing,
    DDD aggregates, and event schema design.
    Deep knowledge of EventStoreDB, Marten.""",
    tools=[event_designer, aggregate_analyzer,
           projection_builder, migration_planner]
)

design_task = Task(
    description="""Model events for:
    {domain_description}
    
    Design aggregates, events, and projections
    for an event-sourced implementation.""",
    agent=event_modeler
)`,
    },
    relatedPages: [
      { number: 'Page 9.2', title: 'Event-Driven Architecture', description: 'Asynchronous messaging patterns', slug: 'event-driven' },
      { number: 'Page 9.7', title: 'Domain-Driven Design', description: 'Strategic and tactical DDD patterns', slug: 'domain-driven' },
      { number: 'Page 9.1', title: 'Microservices', description: 'Service decomposition patterns', slug: 'microservices' },
    ],
    prevPage: { title: '9.5 API Design Patterns', slug: 'api-patterns' },
    nextPage: { title: '9.7 Domain-Driven Design', slug: 'domain-driven' },
  },
  {
    slug: 'domain-driven',
    badge: '🎯 Page 9.7 • Software Modeling',
    title: 'Domain-Driven Design',
    description: 'An approach to software development that centers on programming a domain model with rich understanding of processes and rules. DDD tackles complexity through ubiquitous language and bounded contexts.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '7', label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' },
    ],
    overview: {
      title: 'The Business Case for DDD',
      subtitle: 'Why domain modeling matters',
      subsections: [
        {
          heading: 'Two Levels of DDD',
          paragraphs: [
            'Strategic and tactical patterns',
          ],
        },
        {
          heading: 'Tactical DDD',
          paragraphs: [
            'Building blocks for domain modeling',
          ],
        },
        {
          heading: 'Understanding Domain-Driven Design',
          paragraphs: [
            'Deep dive into the philosophy and patterns',
            'What it is: DDD is an approach to software development that centers the design around the core business domain. It\'s not a framework or technology—it\'s a way of thinking that aligns software models with business reality. The goal is to create software that domain experts can understand and validate, reducing the gap between business concepts and code.',
            'What it is: A bounded context is a boundary within which a particular domain model applies. The same concept (like "Customer") can mean different things in different contexts—and that\'s okay. In Sales, a Customer has a sales rep and pipeline stage. In Shipping, a Customer has an address and delivery preferences. These are different models for the same real-world entity.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Strategic DDD',
      subtitle: 'Organizing the problem space',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'A boundary within which a domain model is defined. Different contexts can have different models for the same concept.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Shared vocabulary between developers and domain experts used consistently in code and conversation.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Visual representation of how bounded contexts relate. Shows integration patterns and team dynamics.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'The part providing competitive advantage. Invest your best talent here.',
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
        { icon: '📌', title: 'The Business Case for DDD', subtitle: '', description: 'Why domain modeling matters', tags: [] },
        { icon: '📌', title: 'Two Levels of DDD', subtitle: '', description: 'Strategic and tactical patterns', tags: [] },
        { icon: '📌', title: 'Strategic DDD', subtitle: '', description: 'Organizing the problem space', tags: [] },
        { icon: '📌', title: 'Tactical DDD', subtitle: '', description: 'Building blocks for domain modeling', tags: [] },
        { icon: '📌', title: 'Understanding Domain-Driven Design', subtitle: '', description: 'Deep dive into the philosophy and patterns', tags: [] },
        { icon: '📌', title: 'DDD vs Other Approaches', subtitle: '', description: 'Understanding when DDD adds value', tags: [] },
        { icon: '📌', title: 'When to Use DDD', subtitle: '', description: 'Decision framework for your project', tags: [] },
        { icon: '📌', title: 'Evolution of Software Design', subtitle: '', description: 'From data-centric to domain-centric', tags: [] },
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
        'Start with strategic DDD—understand bounded contexts first',
        'Invest in ubiquitous language—it\'s the foundation',
        'Focus tactical DDD on the core domain',
        'Keep aggregates small (1-3 entities typical)',
        'Use value objects liberally',
        'Pair with domain experts regularly',
      ],
      dontItems: [
        'Apply tactical patterns to every bounded context',
        'Create anemic domain models (getters/setters only)',
        'Make aggregates too large',
        'Reference aggregates directly (use IDs)',
        'Skip the shared language work',
        'Treat DDD as just a folder structure',
      ],
    },
    agent: {
      avatar: '🎯',
      name: 'DomainModeler',
      role: 'DDD Modeling Agent',
      description: 'Analyzes requirements, identifies bounded contexts, designs aggregates, and develops ubiquitous language.',
      capabilities: [
      ],
      codeFilename: 'Domain Modelerdomain_modeler.py',
      code: `# domain_modeler.py
from crewai import Agent, Task

domain_modeler = Agent(
    role="DDD Expert",
    goal="Model complex domains effectively",
    backstory="""Expert in Domain-Driven Design,
    strategic and tactical patterns.""",
    tools=[context_mapper, aggregate_designer]
)`,
    },
    relatedPages: [
      { number: 'Page 9.6', title: 'CQRS & Event Sourcing', description: 'Patterns that complement DDD', slug: 'cqrs-eventsourcing' },
      { number: 'Page 9.1', title: 'Microservices', description: 'Bounded contexts as services', slug: 'microservices' },
      { number: 'Page 9.2', title: 'Event-Driven Architecture', description: 'Domain events in practice', slug: 'event-driven' },
    ],
    prevPage: { title: '9.6 CQRS & Event Sourcing', slug: 'cqrs-eventsourcing' },
    nextPage: undefined,
  },
]

registerPages('sdlc-devops', pages)
export default pages
