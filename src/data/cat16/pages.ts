import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'metrics-monitoring',
    badge: '📈 Page 16.1',
    title: 'Metrics & Monitoring',
    description: 'Collect, store, and query time-series data to understand system behavior. Build dashboards, set thresholds, and gain real-time visibility into performance and reliability.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '15s', label: 'Scrape Interval' },
      { value: '4', label: 'Metric Types' },
      { value: '10M+', label: 'Time Series at Scale' },
      { value: 'PromQL', label: 'Query Language' },
    ],
    overview: {
      title: 'Metrics Architecture',
      subtitle: 'How metrics flow from applications to dashboards',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Metrics are numeric measurements collected at regular intervals over time. Unlike logs which capture discrete events, metrics provide a continuous view of system state—CPU usage, request rates, error counts, and latency percentiles. This time-series data is the backbone of dashboards, alerting, and capacity planning.',
            'A well-designed metrics architecture ensures you can answer questions about system health within seconds. The typical flow involves instrumentation at the application layer, collection by a time-series database, and visualization through dashboards with alerting on anomalies.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Pull vs Push Models',
      subtitle: 'Two approaches to metrics collection',
      columns: 2,
      cards: [
        {
          className: 'pull',
          borderColor: '#3B82F6',
          icon: '📥',
          title: 'Pull-Based Model',
          description: 'The monitoring system actively scrapes metrics from targets at regular intervals. Targets expose an HTTP endpoint (typically /metrics) that returns current metric values.',
          examples: ['Monitoring system controls scrape schedule', 'Easy to detect when targets are down', 'Simpler firewall rules (outbound only)', 'Native service discovery integration', 'Dominant in cloud-native ecosystems'],
        },
        {
          className: 'push',
          borderColor: '#10B981',
          icon: '📤',
          title: 'Push-Based Model',
          description: 'Applications actively send metrics to a central collector. The application is responsible for batching and transmitting data at appropriate intervals.',
          examples: ['Works behind firewalls and NAT', 'Better for short-lived batch jobs', 'Application controls timing', 'Easier initial setup', 'Traditional datacenter approach'],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Metrics & Monitoring',
          description: 'Collect, store, and query time-series data to understand system behavior. Build dashboards, set thresholds, and gain real-time visibility into performance and reliability.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Metrics & Monitoring',
          description: 'Collect, store, and query time-series data to understand system behavior. Build dashboards, set thresholds, and gain real-time visibility into performance and reliability.',
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
        { icon: '📌', title: 'Metrics Architecture', subtitle: '', description: 'How metrics flow from applications to dashboards', tags: [] },
        { icon: '📌', title: 'Pull vs Push Models', subtitle: '', description: 'Two approaches to metrics collection', tags: [] },
        { icon: '📌', title: 'Prometheus Metric Types', subtitle: '', description: 'The four fundamental metric types', tags: [] },
        { icon: '📌', title: 'Prometheus Exporters', subtitle: '', description: 'Expose metrics from third-party systems', tags: [] },
        { icon: '📌', title: 'Cardinality Management', subtitle: '', description: 'The #1 cause of metrics system issues', tags: [] },
        { icon: '📌', title: 'SLIs, SLOs & Error Budgets', subtitle: '', description: 'Metrics-driven reliability targets', tags: [] },
        { icon: '📌', title: 'Metrics Platforms', subtitle: '', description: 'Leading tools for metrics collection and visualization', tags: [] },
        { icon: '📌', title: 'PromQL Query Library', subtitle: '', description: 'Essential queries for monitoring', tags: [] },
      ],
    },
    tools: {
      title: 'Metrics Platforms',
      subtitle: 'Leading tools for metrics collection and visualization',
      items: [
        { icon: 'Pr', name: 'Pr\n                        \n                            Prometheus\n                            CNCF Graduated • Open Source', vendor: '', description: 'The de facto standard for cloud-native metrics. Pull-based scraping, powerful PromQL, native K8s integration.\n                        \n                            Pull Model\n                            PromQL\n                            AlertManager\n                            Service Discovery', tags: [] },
        { icon: 'Gr', name: 'Gr\n                        \n                            Grafana\n                            Open Source • Visualization', vendor: '', description: 'Industry-leading dashboards supporting 80+ data sources. Powerful templating and alerting.\n                        \n                            Multi-Datasource\n                            Templating\n                            Alerting\n                            Plugins', tags: [] },
        { icon: 'Dd', name: 'Dd\n                        \n                            Datadog\n                            SaaS • Full Stack', vendor: '', description: 'Unified platform with metrics, logs, traces, APM. 600+ integrations, AI-powered detection.\n                        \n                            Unified Platform\n                            600+ Integrations\n                            Watchdog AI\n                            APM', tags: [] },
        { icon: 'VM', name: 'VM\n                        \n                            VictoriaMetrics\n                            Open Source • Time Series', vendor: '', description: 'High-performance Prometheus alternative. 10x better compression, MetricsQL, native clustering.\n                        \n                            High Compression\n                            MetricsQL\n                            Clustering\n                            PromQL Compatible', tags: [] },
        { icon: 'Th', name: 'Th\n                        \n                            Thanos\n                            CNCF Incubating • Long-Term', vendor: '', description: 'HA Prometheus with unlimited retention. Global query view, object storage, downsampling.\n                        \n                            HA Prometheus\n                            Object Storage\n                            Global Query\n                            Downsampling', tags: [] },
        { icon: 'Mi', name: 'Mi\n                        \n                            Grafana Mimir\n                            Open Source • Scalable TSDB', vendor: '', description: 'Horizontally scalable, multi-tenant TSDB. Successor to Cortex for massive scale.\n                        \n                            Multi-Tenant\n                            Horizontal Scale\n                            Object Storage\n                            PromQL', tags: [] },
        { icon: 'In', name: 'In\n                        \n                            InfluxDB\n                            Open Source • Time Series', vendor: '', description: 'Purpose-built TSDB with high-performance writes. Flux query language, great for IoT.\n                        \n                            Push Model\n                            Flux Query\n                            High Cardinality\n                            IoT', tags: [] },
        { icon: 'NR', name: 'NR\n                        \n                            New Relic\n                            SaaS • Full Stack', vendor: '', description: 'All-in-one observability with NRQL query language. AI-powered insights, 400+ integrations.\n                        \n                            NRQL\n                            APM\n                            Infrastructure\n                            Synthetics', tags: [] },
        { icon: 'OT', name: 'OT\n                        \n                            OpenTelemetry\n                            CNCF Incubating • Standard', vendor: '', description: 'Vendor-neutral telemetry standard. Unified APIs for metrics, logs, traces. OTLP protocol.\n                        \n                            Vendor Neutral\n                            OTLP\n                            Auto-Instrument\n                            Collector', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Design patterns for effective metrics',
      doItems: [
        'Use Consistent Naming — Follow namespace_subsystem_name_unit. Include units: _seconds, _bytes, _total.',
        'Control Cardinality — Avoid unbounded labels (user IDs, request IDs). Keep per-metric cardinality under 10K.',
        'Prefer Histograms for Latency — Histograms allow aggregation across instances. Choose buckets based on SLO thresholds.',
        'Instrument Golden Signals — Every service should expose latency, traffic, errors, saturation as minimum baseline.',
        'Use Recording Rules — Pre-compute expensive queries. Improves dashboard performance and enables consistent alerting.',
        'Add Metadata Labels — Include useful context: team, env, version for filtering and aggregation.',
        'Document Metrics — Use HELP text and TYPE declarations. Maintain a metrics catalog for discoverability.',
        'Monitor the Monitoring — Track Prometheus memory, scrape duration, failed scrapes. Alert on monitoring system health.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '📈',
      name: 'MetricsEngineer',
      role: 'Observability & Optimization',
      description: 'Analyzes metric schemas, calculates query efficiency scores, and recommends optimal instrumentation patterns. Continuously monitors cardinality growth and suggests aggregation strategies when thresholds are exceeded. Integrates with Prometheus for data-driven optimization and provides real-time SLO burn rate analysis.',
      capabilities: [
        'Metric naming & schema design',
        'PromQL query optimization',
        'Grafana dashboard generation',
        'Alert rule configuration',
        'Recording rule design',
        'SLO/SLI implementation',
        'Cardinality management',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        metrics_engineer_agent.py',
      code: `# Metrics Engineering Optimization Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Cardinality analyzer tool
cardinality_analyzer = Tool(
    name="cardinality_analyzer",
    description="""Analyzes label combinations to
    identify high-cardinality metrics and
    recommends aggregation strategies""",
    func=analyze_cardinality
)

# PromQL optimizer tool
promql_optimizer = Tool(
    name="promql_optimizer",
    description="""Rewrites PromQL queries for
    better performance, suggests recording
    rules for expensive computations""",
    func=optimize_promql
)

# SLO calculator tool
slo_calculator = Tool(
    name="slo_calculator",
    description="""Computes error budgets, burn rates,
    and generates multi-window alerting
    rules based on SLO targets""",
    func=calculate_slo
)

# Dashboard generator tool
dashboard_generator = Tool(
    name="dashboard_generator",
    description="""Creates Grafana dashboard JSON
    with golden signals, appropriate
    visualizations, and templating""",
    func=generate_dashboard
)

metrics_engineer_agent = Agent(
    role="Metrics Engineering Specialist",
    goal="""Design efficient metric schemas and
    optimize observability infrastructure""",
    backstory="""Expert SRE with deep experience in
    Prometheus, Grafana, and large-scale
    metrics systems handling millions of
    time series.""",
    llm=llm,
    tools=[cardinality_analyzer, promql_optimizer,
           slo_calculator, dashboard_generator],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '16.2', title: 'Logging', description: 'Centralized logging, ELK Stack, Loki, structured logs', slug: 'logging' },
      { number: '16.3', title: 'Distributed Tracing', description: 'OpenTelemetry, Jaeger, Zipkin, trace propagation', slug: 'distributed-tracing' },
      { number: '16.4', title: 'Alerting & Incidents', description: 'Alert design, on-call rotations, incident management', slug: 'alerting-incidents' },
    ],
    prevPage: undefined,
    nextPage: { title: '16.2 Logging', slug: 'logging' },
  },
  {
    slug: 'logging',
    badge: '📝 Page 16.2',
    title: 'Logging',
    description: 'Capture, aggregate, and analyze discrete events from applications and infrastructure. Search through logs to debug issues, audit activity, and understand system behavior.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: 'TB/day', label: 'Enterprise Scale' },
      { value: '5', label: 'Log Levels' },
      { value: '<1s', label: 'Search Latency' },
      { value: 'JSON', label: 'Structured Format' },
    ],
    overview: {
      title: 'Logging Architecture',
      subtitle: 'How logs flow from sources to analysis',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Logs are discrete, timestamped records of events. Unlike metrics which are numeric samples, logs capture contextual information—error messages, stack traces, user actions, API requests. Centralized logging aggregates these events from distributed systems into a searchable repository.',
            'A modern logging pipeline involves collection agents, processing/enrichment, storage, and visualization. The goal: make it possible to search billions of log lines in seconds to answer questions during incident response.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Logging Patterns',
      subtitle: 'Common approaches for effective logging',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🏷️',
          title: '',
          description: 'Include request_id, user_id, trace_id in every log for correlation across services.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📦',
          title: '',
          description: 'Centralize logs from all services into one searchable store. Don\'t log locally.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎭',
          title: '',
          description: 'Redact PII, passwords, tokens before shipping. Compliance is mandatory.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: '',
          description: 'Derive metrics from logs: error counts, latency distributions, business KPIs.',
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
        { icon: '📌', title: 'Logging Architecture', subtitle: '', description: 'How logs flow from sources to analysis', tags: [] },
        { icon: '📌', title: 'Structured vs Unstructured Logs', subtitle: '', description: 'Why format matters for searchability', tags: [] },
        { icon: '📌', title: 'Log Levels', subtitle: '', description: 'Severity classification for filtering', tags: [] },
        { icon: '📌', title: 'Logging Platforms', subtitle: '', description: 'Leading tools for log aggregation and analysis', tags: [] },
        { icon: '📌', title: 'Query Languages', subtitle: '', description: 'Searching and analyzing logs', tags: [] },
        { icon: '📌', title: 'Logging Patterns', subtitle: '', description: 'Common approaches for effective logging', tags: [] },
        { icon: '📌', title: 'Retention Strategies', subtitle: '', description: 'Balancing cost, compliance, and searchability', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective logging', tags: [] },
      ],
    },
    tools: {
      title: 'Logging Platforms',
      subtitle: 'Leading tools for log aggregation and analysis',
      items: [
        { icon: 'ELK', name: 'ELK\n                        \n                            Elastic Stack (ELK)\n                            Open Source • Self-Hosted', vendor: '', description: 'Industry standard stack: Elasticsearch for storage/search, Logstash for processing, Kibana for visualization. Powerful but complex.\n                        \n                            Full-Text Search\n                            KQL/Lucene\n                            Dashboards\n                            Alerts\n                            ML', tags: [] },
        { icon: 'Lo', name: 'Lo\n                        \n                            Grafana Loki\n                            Open Source • Cloud-Native', vendor: '', description: 'Like Prometheus but for logs. Indexes labels only, stores compressed logs in object storage. Cost-effective at scale.\n                        \n                            Label-Based\n                            LogQL\n                            Object Storage\n                            Grafana Native', tags: [] },
        { icon: 'Sp', name: 'Sp\n                        \n                            Splunk\n                            Enterprise • SaaS', vendor: '', description: 'Enterprise leader with powerful SPL query language, SIEM capabilities, and extensive app ecosystem. Premium pricing.\n                        \n                            SPL\n                            SIEM\n                            Apps/Add-ons\n                            ML Toolkit', tags: [] },
        { icon: 'Dd', name: 'Dd\n                        \n                            Datadog Logs\n                            SaaS • Unified Platform', vendor: '', description: 'Part of unified observability platform. Seamless correlation with metrics and traces. Live tail and pattern detection.\n                        \n                            Unified View\n                            Patterns\n                            Live Tail\n                            Archives', tags: [] },
        { icon: 'Fl', name: 'Fl\n                        \n                            Fluentd / Fluent Bit\n                            CNCF • Collection', vendor: '', description: 'Unified logging layer. Fluent Bit is lightweight for edge/containers. 500+ output plugins for any destination.\n                        \n                            500+ Plugins\n                            Lightweight\n                            K8s Native\n                            Buffering', tags: [] },
        { icon: 'Be', name: 'Be\n                        \n                            Elastic Beats\n                            Open Source • Shippers', vendor: '', description: 'Lightweight data shippers. Filebeat for logs, Metricbeat for metrics, Packetbeat for network. Edge collection agents.\n                        \n                            Filebeat\n                            Metricbeat\n                            Modules\n                            Processors', tags: [] },
        { icon: 'Su', name: 'Su\n                        \n                            Sumo Logic\n                            SaaS • Analytics', vendor: '', description: 'Cloud-native machine data analytics. Real-time dashboards, anomaly detection, and security analytics built-in.\n                        \n                            Real-time\n                            Anomaly ML\n                            Cloud SIEM\n                            CSE', tags: [] },
        { icon: 'CW', name: 'CW\n                        \n                            CloudWatch Logs\n                            AWS Native • Managed', vendor: '', description: 'Native AWS logging service. Deep integration with Lambda, ECS, EKS. Logs Insights for ad-hoc queries.\n                        \n                            AWS Native\n                            Insights\n                            Metric Filters\n                            Subscriptions', tags: [] },
        { icon: 'Ve', name: 'Ve\n                        \n                            Vector\n                            Open Source • Pipeline', vendor: '', description: 'High-performance observability data pipeline. Written in Rust. Drop-in Logstash replacement with better efficiency.\n                        \n                            Rust\n                            VRL\n                            Multi-Source\n                            Efficient', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective logging',
      doItems: [
        'Use Structured Logging — Always emit JSON logs. Include consistent fields: timestamp, level, service, trace_id, message.',
        'Include Context — Add request_id, user_id, tenant_id to every log. Enables filtering and correlation.',
        'Log at Appropriate Level — DEBUG for development, INFO for operations, ERROR for failures. Don\'t log sensitive data.',
        'Centralize Everything — Ship all logs to central store. Local files are useless in distributed systems.',
        'Use UTC Timestamps — Always log in UTC with ISO 8601 format. Avoid timezone confusion across regions.',
        'Set Up Retention Policies — Automate log lifecycle: hot → warm → cold → archive. Balance cost and compliance.',
        'Monitor Log Pipeline — Alert on dropped logs, parsing failures, ingestion delays. Logs about logs.',
        'Create Saved Searches — Pre-build common queries: errors by service, failed logins, slow requests. Ready for incidents.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'LoggingEngineer',
      role: '',
      description: 'Expert agent for designing log schemas, configuring collection pipelines, writing search queries, and optimizing log aggregation infrastructure for reliability and cost.',
      capabilities: [
        'Structured log schema design',
        'Pipeline configuration',
        'Query optimization',
        'Log parsing patterns',
        'PII masking rules',
        'Dashboard creation',
        'Retention policies',
        'Cost optimization',
      ],
      codeFilename: 'fluent-bit.conf',
      code: ``,
    },
    relatedPages: [
      { number: '16.1', title: 'Metrics & Monitoring', description: 'Prometheus, time-series data, PromQL queries', slug: 'metrics-monitoring' },
      { number: '16.3', title: 'Distributed Tracing', description: 'OpenTelemetry, Jaeger, Zipkin, trace propagation', slug: 'distributed-tracing' },
      { number: '16.4', title: 'Alerting & Incidents', description: 'Alert design, on-call rotations, incident management', slug: 'alerting-incidents' },
    ],
    prevPage: { title: '16.1 Metrics & Monitoring', slug: 'metrics-monitoring' },
    nextPage: { title: '16.3 Distributed Tracing', slug: 'distributed-tracing' },
  },
  {
    slug: 'distributed-tracing',
    badge: '🔗 Page 16.3',
    title: 'Distributed Tracing',
    description: 'Follow requests as they flow through microservices. Understand latency, identify bottlenecks, and debug failures across service boundaries with end-to-end visibility.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'E2E', label: 'End-to-End Visibility' },
      { value: 'W3C', label: 'Standard Headers' },
      { value: '<1ms', label: 'Overhead Target' },
      { value: 'OTel', label: 'OpenTelemetry' },
    ],
    overview: {
      title: 'Tracing Architecture',
      subtitle: 'How traces flow through distributed systems',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Distributed tracing captures the journey of a request across service boundaries. Each service creates a "span" recording its work, and these spans are linked by a shared trace ID. Together, spans form a tree showing the complete request path, timing, and relationships.',
            'Context propagation is the mechanism that passes trace identifiers between services via HTTP headers, message queues, or RPC metadata. This enables correlation of work done by different services into a single, unified trace.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'Fundamental building blocks of distributed tracing',
      columns: 2,
      cards: [
        {
          className: 'trace',
          borderColor: '#3B82F6',
          icon: '🔗',
          title: 'Trace',
          description: 'A trace represents the entire journey of a request through all services. It\'s identified by a unique trace ID that\'s propagated across service boundaries.',
          examples: ['🆔 Unique 128-bit trace ID', '🌳 Tree structure of spans', '⏱️ End-to-end latency', '🔍 Cross-service correlation'],
        },
        {
          className: 'span',
          borderColor: '#10B981',
          icon: '📦',
          title: 'Span',
          description: 'A span represents a single unit of work within a trace. It has a name, start time, duration, and can contain attributes, events, and links to other spans.',
          examples: ['🆔 Unique span ID', '👆 Parent span reference', '🏷️ Attributes (key-value)', '📝 Events (timestamped logs)'],
        },
        {
          className: 'context',
          borderColor: '#8B5CF6',
          icon: '🔄',
          title: 'Context',
          description: 'Context carries trace identifiers across service boundaries. It\'s propagated via HTTP headers, message metadata, or RPC frameworks.',
          examples: ['📨 HTTP headers (W3C)', '📬 Message queue metadata', '🔌 gRPC metadata', '🧳 Baggage items'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Distributed Tracing',
          description: 'Follow requests as they flow through microservices. Understand latency, identify bottlenecks, and debug failures across service boundaries with end-to-end visibility.',
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
        { icon: '📌', title: 'Tracing Architecture', subtitle: '', description: 'How traces flow through distributed systems', tags: [] },
        { icon: '📌', title: 'Core Concepts', subtitle: '', description: 'Fundamental building blocks of distributed tracing', tags: [] },
        { icon: '📌', title: 'Span Anatomy', subtitle: '', description: 'Structure and fields of a span', tags: [] },
        { icon: '📌', title: 'Context Propagation', subtitle: '', description: 'How trace context flows between services', tags: [] },
        { icon: '📌', title: 'OpenTelemetry', subtitle: '', description: 'The unified observability framework', tags: [] },
        { icon: '📌', title: 'Tracing Platforms', subtitle: '', description: 'Leading distributed tracing tools', tags: [] },
        { icon: '📌', title: 'Sampling Strategies', subtitle: '', description: 'Managing trace volume and cost', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective distributed tracing', tags: [] },
      ],
    },
    tools: {
      title: 'Tracing Platforms',
      subtitle: 'Leading distributed tracing tools',
      items: [
        { icon: 'Ja', name: 'Ja\n                        \n                            Jaeger\n                            CNCF Graduated • Open Source', vendor: '', description: 'End-to-end distributed tracing from Uber. Native Kubernetes support, service dependency graphs, and root cause analysis.\n                        \n                            OpenTelemetry\n                            Adaptive Sampling\n                            Service Graph\n                            K8s Operator', tags: [] },
        { icon: 'Zi', name: 'Zi\n                        \n                            Zipkin\n                            Open Source • Pioneer', vendor: '', description: 'Twitter\'s original distributed tracer. Lightweight, battle-tested, wide language support. Inspired many others.\n                        \n                            B3 Headers\n                            Lightweight\n                            Multiple Storage\n                            Simple UI', tags: [] },
        { icon: 'Te', name: 'Te\n                        \n                            Grafana Tempo\n                            Open Source • Cloud-Native', vendor: '', description: 'High-scale trace storage using object storage. No indexing required. Cost-effective, integrates with Grafana.\n                        \n                            Object Storage\n                            TraceQL\n                            Grafana Native\n                            No Index', tags: [] },
        { icon: 'Dd', name: 'Dd\n                        \n                            Datadog APM\n                            SaaS • Full Platform', vendor: '', description: 'Full APM with tracing, profiling, and error tracking. Automatic instrumentation, service maps, and ML insights.\n                        \n                            Auto Instrument\n                            Continuous Profiling\n                            Service Map\n                            Watchdog AI', tags: [] },
        { icon: 'NR', name: 'NR\n                        \n                            New Relic\n                            SaaS • Full Stack', vendor: '', description: 'Full-stack observability with distributed tracing, APM, and infrastructure. Deep integration across telemetry types.\n                        \n                            Infinite Tracing\n                            NRQL\n                            Auto-map\n                            Errors Inbox', tags: [] },
        { icon: 'GC', name: 'GC\n                        \n                            Google Cloud Trace\n                            GCP Native • Managed', vendor: '', description: 'Native GCP tracing service. Deep integration with Cloud Run, GKE, App Engine. Automatic latency insights.\n                        \n                            GCP Native\n                            Auto Insights\n                            OpenTelemetry\n                            Analysis', tags: [] },
        { icon: 'XR', name: 'XR\n                        \n                            AWS X-Ray\n                            AWS Native • Managed', vendor: '', description: 'Native AWS tracing. Deep integration with Lambda, ECS, API Gateway. Service maps and annotations.\n                        \n                            AWS Native\n                            Lambda Layers\n                            Service Map\n                            Insights', tags: [] },
        { icon: 'AM', name: 'AM\n                        \n                            Azure Monitor\n                            Azure Native • Managed', vendor: '', description: 'Application Insights distributed tracing. Deep Azure integration, smart detection, and application map.\n                        \n                            Azure Native\n                            App Map\n                            Smart Detection\n                            Live Metrics', tags: [] },
        { icon: 'Si', name: 'Si\n                        \n                            SigNoz\n                            Open Source • Full Stack', vendor: '', description: 'Open-source Datadog alternative. Traces, metrics, logs in one platform. OpenTelemetry native.\n                        \n                            OTel Native\n                            ClickHouse\n                            Unified UI\n                            Alerts', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective distributed tracing',
      doItems: [
        'Use OpenTelemetry — Instrument once with OTel, export anywhere. Vendor-neutral, future-proof, industry standard.',
        'Propagate W3C Trace Context — Use W3C traceparent/tracestate headers. Ensures interoperability between all services and vendors.',
        'Add Meaningful Attributes — Include user.id, order.id, tenant.id. Makes traces searchable and useful for debugging.',
        'Name Spans Descriptively — Use operation names like "HTTP GET /api/orders" or "SELECT users". Avoid generic names.',
        'Record Errors Properly — Set span status to ERROR, add exception events with stack traces. Essential for debugging.',
        'Use Tail-Based Sampling — Sample based on outcomes (errors, high latency). Never miss important traces.',
        'Correlate with Logs — Include trace_id in all log messages. Click from trace to logs and vice versa.',
        'Monitor Trace Pipeline — Track dropped spans, collector lag, storage costs. Ensure tracing itself is healthy.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'TracingEngineer',
      role: '',
      description: 'Expert agent for designing tracing architectures, implementing OpenTelemetry instrumentation, configuring collectors, and optimizing sampling strategies for production systems.',
      capabilities: [
        'OpenTelemetry setup & config',
        'Manual instrumentation code',
        'Context propagation patterns',
        'Sampling strategy design',
        'Collector pipeline config',
        'Trace query optimization',
        'Log-trace correlation',
        'Cost optimization',
      ],
      codeFilename: 'otel-collector-config.yaml',
      code: ``,
    },
    relatedPages: [
      { number: '16.2', title: 'Logging', description: 'Log aggregation, structured logging, ELK stack', slug: 'logging' },
      { number: '16.4', title: 'Alerting & Incidents', description: 'Alert design, on-call rotations, incident management', slug: 'alerting-incidents' },
      { number: '16.5', title: 'APM', description: 'Application Performance Monitoring, profiling', slug: 'apm' },
    ],
    prevPage: { title: '16.2 Logging', slug: 'logging' },
    nextPage: { title: '16.4 Alerting & Incident Management', slug: 'alerting-incidents' },
  },
  {
    slug: 'alerting-incidents',
    badge: '🚨 Page 16.4',
    title: 'Alerting & Incident Management',
    description: 'Detect issues before users do, route alerts to the right people, and manage incidents from detection to resolution with structured processes and clear communication.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '<5min', label: 'Detection Target' },
      { value: 'MTTA', label: 'Mean Time to Ack' },
      { value: 'MTTR', label: 'Mean Time to Resolve' },
      { value: 'SLO', label: 'Error Budget Based' },
    ],
    overview: {
      title: 'Alerting Architecture',
      subtitle: 'How alerts flow from detection to resolution',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Modern alerting systems separate concerns: monitoring tools detect conditions, alert managers deduplicate and route, incident platforms manage response, and communication tools keep stakeholders informed. This separation enables flexibility and prevents vendor lock-in.',
          ],
        },
      ],
    },
    concepts: {
      title: 'SLO-Based Alerting',
      subtitle: 'Alert on what matters to users',
      columns: 2,
      cards: [
        {
          className: 'slo-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '43.8 minutes of downtime allowed per month. Alert when burn rate exceeds 14.4x (1h window).',
          examples: [],
        },
        {
          className: 'slo-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: '99% of requests must complete in 200ms. Alert when burn rate exceeds budget consumption.',
          examples: [],
        },
        {
          className: 'slo-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Monthly budget for failures. When exhausted, freeze deployments and focus on reliability.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Alerting & Incident Management',
          description: 'Detect issues before users do, route alerts to the right people, and manage incidents from detection to resolution with structured processes and clear communication.',
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
        { icon: '📌', title: 'Alerting Architecture', subtitle: '', description: 'How alerts flow from detection to resolution', tags: [] },
        { icon: '📌', title: 'Alert Severity Levels', subtitle: '', description: 'Standardized priority classification', tags: [] },
        { icon: '📌', title: 'Alert Anatomy', subtitle: '', description: 'Components of a well-designed alert', tags: [] },
        { icon: '📌', title: 'Alerting & Incident Platforms', subtitle: '', description: 'Tools for the complete incident lifecycle', tags: [] },
        { icon: '📌', title: 'Incident Lifecycle', subtitle: '', description: 'From detection to resolution', tags: [] },
        { icon: '📌', title: 'On-Call Practices', subtitle: '', description: 'Sustainable and effective on-call rotations', tags: [] },
        { icon: '📌', title: 'Runbooks', subtitle: '', description: 'Actionable documentation for incident response', tags: [] },
        { icon: '📌', title: 'SLO-Based Alerting', subtitle: '', description: 'Alert on what matters to users', tags: [] },
      ],
    },
    tools: {
      title: 'Alerting & Incident Platforms',
      subtitle: 'Tools for the complete incident lifecycle',
      items: [
        { icon: 'PD', name: 'PD\n                        \n                            PagerDuty\n                            Incident Management • Leader', vendor: '', description: 'Industry-leading incident management. On-call scheduling, intelligent routing, AIOps, and full incident lifecycle.\n                        \n                            Event Intelligence\n                            On-Call\n                            Status Page\n                            Analytics', tags: [] },
        { icon: 'OG', name: 'OG\n                        \n                            Opsgenie\n                            Atlassian • Incident Management', vendor: '', description: 'Alert management with deep Atlassian integration. Flexible on-call, routing rules, and Jira integration.\n                        \n                            Jira Integration\n                            On-Call\n                            Heartbeats\n                            Teams', tags: [] },
        { icon: '🔔', name: '🔔\n                        \n                            Alertmanager\n                            Prometheus • Open Source', vendor: '', description: 'Prometheus ecosystem alert handling. Deduplication, grouping, routing, and silencing for metric alerts.\n                        \n                            Deduplication\n                            Grouping\n                            Routing\n                            Silencing', tags: [] },
        { icon: 'VT', name: 'VT\n                        \n                            VictorOps (Splunk)\n                            Splunk On-Call • Enterprise', vendor: '', description: 'Now Splunk On-Call. Incident management with timeline, war rooms, and post-incident reviews.\n                        \n                            War Room\n                            Timeline\n                            Splunk Integration\n                            Mobile', tags: [] },
        { icon: 'GF', name: 'GF\n                        \n                            Grafana Alerting\n                            Unified Alerting • Open Source', vendor: '', description: 'Unified alerting across all Grafana data sources. Alert rules, notification policies, and contact points.\n                        \n                            Multi-Source\n                            Unified Rules\n                            Silences\n                            Contact Points', tags: [] },
        { icon: 'DD', name: 'DD\n                        \n                            Datadog Monitors\n                            SaaS • Full Platform', vendor: '', description: 'Comprehensive monitoring with anomaly detection, forecasting, and composite monitors across all telemetry.\n                        \n                            Anomaly Detection\n                            Forecasts\n                            Composite\n                            SLOs', tags: [] },
        { icon: '🔥', name: '🔥\n                        \n                            FireHydrant\n                            Incident Management • Modern', vendor: '', description: 'Modern incident management. Automated runbooks, Slack-native workflows, and retrospectives.\n                        \n                            Runbooks\n                            Slack-Native\n                            Retros\n                            Status Page', tags: [] },
        { icon: 'IN', name: 'IN\n                        \n                            incident.io\n                            Slack-First • Modern', vendor: '', description: 'Slack-first incident management. Declare incidents from Slack, automated workflows, beautiful UI.\n                        \n                            Slack-First\n                            Workflows\n                            Insights\n                            Postmortems', tags: [] },
        { icon: 'SP', name: 'SP\n                        \n                            Statuspage\n                            Atlassian • Status Communication', vendor: '', description: 'Public and private status pages for incident communication. Component status, incident updates, metrics.\n                        \n                            Public Pages\n                            Components\n                            Subscribers\n                            Metrics', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective alerting',
      doItems: [
        'Every Alert Must Be Actionable — If there\'s nothing to do, it shouldn\'t page. Convert to dashboard or remove entirely.',
        'Every Alert Needs a Runbook — Link to troubleshooting steps. Enable any on-call engineer to resolve, not just experts.',
        'Alert on Symptoms, Not Causes — Users care about errors and latency, not CPU. High CPU alone doesn\'t mean broken.',
        'Use Appropriate Thresholds — Add duration (for: 5m) to prevent flapping. Set thresholds based on real impact, not arbitrary numbers.',
        'Implement Alert Deduplication — Group related alerts. Don\'t page 50 times for one incident. Use alert manager grouping.',
        'Review Alerts Regularly — Quarterly alert review. Delete unused alerts. Fix noisy ones. Track alert volume trends.',
        'Blameless Postmortems — Focus on systems, not individuals. Ask "how did the system allow this?" not "who caused this?"',
        'Track Incident Metrics — MTTD, MTTA, MTTR. Track trends over time. Set targets and celebrate improvements.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'IncidentEngineer',
      role: '',
      description: 'Expert agent for designing alerting strategies, configuring on-call rotations, writing runbooks, and improving incident response processes based on SRE best practices.',
      capabilities: [
        'Alert rule design & optimization',
        'On-call rotation setup',
        'Runbook authoring',
        'SLO-based alerting',
        'Escalation policy design',
        'Postmortem facilitation',
        'Incident metrics analysis',
        'Alert fatigue reduction',
      ],
      codeFilename: 'alertmanager-config.yaml',
      code: ``,
    },
    relatedPages: [
      { number: '16.3', title: 'Distributed Tracing', description: 'Follow requests across services, identify bottlenecks', slug: 'distributed-tracing' },
      { number: '16.5', title: 'APM', description: 'Application Performance Monitoring and profiling', slug: 'apm' },
      { number: '16.1', title: 'Metrics & Monitoring', description: 'Prometheus, Grafana, time series fundamentals', slug: 'metrics-monitoring' },
    ],
    prevPage: { title: '16.3 Distributed Tracing', slug: 'distributed-tracing' },
    nextPage: { title: '16.5 Application Performance Monitoring', slug: 'apm' },
  },
  {
    slug: 'apm',
    badge: '⚡ Page 16.5',
    title: 'Application Performance Monitoring',
    description: 'APM provides deep visibility into application behavior by instrumenting code to capture every transaction, from user click to database query. Unlike infrastructure monitoring that watches servers, APM follows requests through your application stack.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: 'P99', label: 'Latency Percentiles' },
      { value: '<1%', label: 'Agent Overhead' },
      { value: 'E2E', label: 'Full Stack Traces' },
      { value: 'RUM', label: 'Real User Data' },
    ],
    overview: {
      title: 'Transaction Flow Visibility',
      subtitle: 'How APM captures the complete request lifecycle',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'APM instruments your application at multiple layers. When a user clicks a button, the APM agent captures browser timing (RUM), follows the request through your API gateway and microservices (distributed tracing), records database queries, and profiles code execution—all correlated by a single trace ID.',
            'This end-to-end visibility reveals where time is spent: is latency from slow database queries, inefficient code, network hops, or third-party APIs? Without APM, you\'re guessing. With APM, you see exactly which component caused the slowdown.',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Four Pillars of APM',
      subtitle: 'Complete application visibility requires multiple data types working together',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔗',
          title: 'Distributed Tracing',
          description: 'Follow individual requests across service boundaries. Each trace contains spans representing operations. See exactly where latency accumulates: is it the auth service, database queries, or a third-party API?',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📊',
          title: 'Metrics & RED',
          description: 'Aggregate performance data using RED methodology: Request rate (throughput), Error rate (failures), Duration (latency percentiles). Provides high-level health signals and powers SLO dashboards.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🔬',
          title: 'Code Profiling',
          description: 'Continuous CPU, memory, and lock profiling in production with <1% overhead. Flame graphs visualize where code spends time. Find hot paths, memory leaks, and inefficient algorithms.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '👤',
          title: 'Real User Monitoring',
          description: 'Capture actual user experience from browsers and mobile apps. Core Web Vitals (LCP, FID, CLS), JavaScript errors, session replay. See performance as users experience it, segmented by geography.',
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
        { icon: '📌', title: 'Transaction Flow Visibility', subtitle: '', description: 'How APM captures the complete request lifecycle', tags: [] },
        { icon: '📌', title: 'The Four Pillars of APM', subtitle: '', description: 'Complete application visibility requires multiple data types working together', tags: [] },
        { icon: '📌', title: 'RED Metrics', subtitle: '', description: 'The essential metrics for every service', tags: [] },
        { icon: '📌', title: 'Core Web Vitals (RUM)', subtitle: '', description: 'Google\'s metrics for user experience', tags: [] },
        { icon: '📌', title: 'Continuous Profiling', subtitle: '', description: 'Code-level performance analysis in production', tags: [] },
        { icon: '📌', title: 'APM Platforms', subtitle: '', description: 'Leading application performance monitoring solutions', tags: [] },
        { icon: '📌', title: 'Instrumentation', subtitle: '', description: 'Auto and manual approaches with OpenTelemetry', tags: [] },
        { icon: '📌', title: 'Sampling Strategies', subtitle: '', description: 'Balance visibility with cost', tags: [] },
      ],
    },
    tools: {
      title: 'APM Platforms',
      subtitle: 'Leading application performance monitoring solutions',
      items: [
        { icon: 'Dd', name: 'Dd\n                        \n                            Datadog APM\n                            SaaS • Full Platform • $$$$', vendor: '', description: 'Industry leader with comprehensive APM, continuous profiling, and RUM. Single-line auto-instrumentation for most languages. Watchdog AI detects anomalies automatically. Expensive at scale—pricing per host plus ingestion.\n                        \n                            Continuous Profiler\n                            Watchdog AI\n                            Service Map\n                            RUM + Session Replay\n                            Database Monitoring', tags: [] },
        { icon: 'Dy', name: 'Dy\n                        \n                            Dynatrace\n                            Enterprise • AI-Powered • $$$$', vendor: '', description: 'Enterprise APM with Davis AI for automatic root cause analysis. OneAgent provides zero-config instrumentation. PurePath technology captures every transaction. Best for large enterprises with complex environments.\n                        \n                            Davis AI RCA\n                            OneAgent Auto-Deploy\n                            PurePath Tracing\n                            Smartscape Topology\n                            Code-Level Insights', tags: [] },
        { icon: 'NR', name: 'NR\n                        \n                            New Relic\n                            SaaS • Full Stack • $$$', vendor: '', description: 'Full-stack observability with user-based pricing (unusual in APM). Infinite Tracing samples intelligently at ingest. NRQL query language enables powerful analysis. Good balance of features and cost for mid-market.\n                        \n                            Infinite Tracing\n                            NRQL Query Language\n                            Errors Inbox\n                            Logs in Context\n                            User-Based Pricing', tags: [] },
        { icon: 'AD', name: 'AD\n                        \n                            AppDynamics\n                            Cisco • Enterprise • $$$$', vendor: '', description: 'Business-centric APM that correlates performance with business outcomes. Deep .NET and Java support. Transaction snapshots capture code-level details. Now part of Cisco\'s Full-Stack Observability platform.\n                        \n                            Business iQ\n                            Transaction Snapshots\n                            Code Rollup\n                            Dynamic Baselines\n                            .NET/Java Deep Dive', tags: [] },
        { icon: 'Gr', name: 'Gr\n                        \n                            Grafana Stack\n                            Open Source • Cloud-Native • $', vendor: '', description: 'Open source observability: Tempo for traces, Mimir for metrics, Loki for logs, Pyroscope for profiling. TraceQL enables powerful trace queries. Object storage backend scales infinitely. Requires operational expertise.\n                        \n                            TraceQL\n                            Pyroscope Profiling\n                            Object Storage\n                            OTel Native\n                            Self-Host or Cloud', tags: [] },
        { icon: 'Si', name: 'Si\n                        \n                            SigNoz\n                            Open Source • Unified • $', vendor: '', description: 'Open-source Datadog alternative with traces, metrics, and logs in one UI. OpenTelemetry native—no proprietary agents. ClickHouse backend for fast queries. Self-host or use their cloud. Great for OTel-first teams.\n                        \n                            OTel Native\n                            ClickHouse Backend\n                            Unified UI\n                            Trace-Log Correlation\n                            Exception Tracking', tags: [] },
        { icon: 'XR', name: 'XR\n                        \n                            AWS X-Ray\n                            AWS Native • Managed • $$', vendor: '', description: 'Native AWS tracing with deep Lambda and ECS integration. X-Ray SDK or OpenTelemetry for instrumentation. Service maps show AWS resource dependencies. Best for AWS-native workloads. Limited outside AWS ecosystem.\n                        \n                            Lambda Native\n                            Service Map\n                            Insights (Anomalies)\n                            CloudWatch Integration\n                            X-Ray Groups', tags: [] },
        { icon: 'Sp', name: 'Sp\n                        \n                            Splunk APM\n                            Enterprise • Full-Fidelity • $$$$', vendor: '', description: 'SignalFx-powered APM with NoSample full-fidelity tracing—captures every trace, not samples. AlwaysOn Profiler for production profiling. Tag Spotlight for quick RCA. Strong for teams already using Splunk for logs.\n                        \n                            NoSample Tracing\n                            Tag Spotlight\n                            AlwaysOn Profiler\n                            Splunk Log Integration\n                            Real-time Streaming', tags: [] },
        { icon: 'El', name: 'El\n                        \n                            Elastic APM\n                            Open Source • ELK Stack • $$', vendor: '', description: 'Part of Elastic Stack—APM with full-text log search in one platform. RUM and Synthetics included. ML-powered anomaly detection. Best for teams already invested in Elasticsearch. Open source with commercial features.\n                        \n                            ELK Integration\n                            RUM Agent\n                            Synthetics\n                            ML Anomalies\n                            Service Maps', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Maximize value from your APM investment',
      doItems: [
        'Start with Auto-Instrumentation — Get immediate value with zero code changes. Covers HTTP, databases, and common frameworks. Add manual spans incrementally for business-critical paths that need custom context.',
        'Add Business Context to Spans — Include user_id, order_id, tenant_id, customer_tier as span attributes. Makes traces searchable by business entity. Essential for debugging "why was this user\'s request slow?"',
        'Enable Continuous Profiling — Modern profilers have <1% overhead. Capture CPU, memory, and lock profiles in production where real workloads reveal real problems. Compare before/after deployments.',
        'Implement Real User Monitoring — Backend metrics miss 50-80% of user-perceived latency. Track Core Web Vitals, JavaScript errors, and session replay. Correlate frontend RUM with backend traces.',
        'Use Tail-Based Sampling — Never miss errors or slow requests. Sample 100% of errors and traces exceeding latency threshold. Use probabilistic sampling (1-10%) for successful fast requests.',
        'Correlate Traces with Logs — Inject trace_id and span_id into all log messages. One-click navigation from trace to related logs. Use baggage to propagate context like request_id across services.',
        'Define SLOs from APM Data — Use P99 latency and error rates to define Service Level Objectives. Alert on error budget burn rate, not arbitrary thresholds. Track SLO compliance over time.',
        'Monitor and Optimize APM Costs — Track spans per service, profiles per host. Set budgets and cost alerts. Tune sampling before scaling up. High-cardinality attributes explode storage costs.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '⚡',
      name: 'APMEngineer',
      role: 'Performance & Instrumentation',
      description: 'Configures OpenTelemetry auto-instrumentation, designs custom spans for business logic, and implements tail-based sampling strategies. Analyzes flame graphs for optimization opportunities and sets up RUM with Core Web Vitals tracking. Integrates with Datadog, New Relic, Dynatrace, and Grafana Tempo.',
      capabilities: [
        'OpenTelemetry setup & configuration',
        'Custom instrumentation code',
        'Sampling strategy design',
        'Flame graph analysis',
        'RUM & Core Web Vitals',
        'Service map architecture',
        'Cost optimization',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        apm_engineer_agent.py',
      code: `# APM Engineering Optimization Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Instrumentation analyzer tool
instrumentation_analyzer = Tool(
    name="instrumentation_analyzer",
    description="""Analyzes application stack to
    recommend auto vs manual instrumentation
    and identify coverage gaps""",
    func=analyze_instrumentation
)

# Sampling strategy designer
sampling_designer = Tool(
    name="sampling_designer",
    description="""Designs tail-based sampling rules
    to capture errors and slow traces while
    controlling ingestion costs""",
    func=design_sampling_strategy
)

# Profiling analyzer tool
profiling_analyzer = Tool(
    name="profiling_analyzer",
    description="""Analyzes CPU and memory profiles
    to identify hot paths, memory leaks,
    and optimization opportunities""",
    func=analyze_profiles
)

# RUM implementation tool
rum_implementer = Tool(
    name="rum_implementer",
    description="""Configures Real User Monitoring
    with Core Web Vitals, session replay,
    and error tracking""",
    func=implement_rum
)

apm_engineer_agent = Agent(
    role="APM Strategy Engineer",
    goal="""Design comprehensive application
    performance monitoring solutions""",
    backstory="""Expert in distributed tracing and
    APM with experience optimizing high-
    throughput microservices systems.""",
    llm=llm,
    tools=[instrumentation_analyzer, sampling_designer,
           profiling_analyzer, rum_implementer],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '16.3', title: 'Distributed Tracing', description: 'Deep dive into trace propagation, context, and OpenTelemetry', slug: 'distributed-tracing' },
      { number: '16.6', title: 'AIOps', description: 'ML-powered anomaly detection and auto-remediation', slug: 'aiops' },
      { number: '16.1', title: 'Metrics & Monitoring', description: 'Prometheus, Grafana, and time series fundamentals', slug: 'metrics-monitoring' },
    ],
    prevPage: { title: '16.4 Alerting & Incident Management', slug: 'alerting-incidents' },
    nextPage: { title: '16.6 AIOps & Intelligent Operations', slug: 'aiops' },
  },
  {
    slug: 'aiops',
    badge: '🤖 Page 16.6',
    title: 'AIOps & Intelligent Operations',
    description: 'AIOps applies machine learning to IT operations data—logs, metrics, traces, events—to detect anomalies humans would miss, correlate related alerts into incidents, predict failures before they occur, and automate remediation.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '90%', label: 'Alert Noise Reduction' },
      { value: 'MTTR', label: 'Faster Resolution' },
      { value: 'ML', label: 'Dynamic Baselines' },
      { value: 'Auto', label: 'Self-Healing Systems' },
    ],
    overview: {
      title: 'The AIOps Pipeline',
      subtitle: 'From raw telemetry to intelligent action',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'AIOps platforms ingest massive volumes of operational data—millions of metrics, billions of log lines, thousands of traces per minute. Traditional monitoring can\'t scale to this volume. Machine learning models process this data to surface what matters: anomalies that deviate from learned baselines, clusters of related alerts that form a single incident, and patterns that predict future failures.',
            'The goal is to shift from reactive firefighting to proactive operations: detect issues before users notice, understand root cause faster, and automate routine remediation so engineers focus on high-value work.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core AIOps Capabilities',
      subtitle: 'What machine learning enables in IT operations',
      columns: 2,
      cards: [
        {
          className: 'capability-0',
          borderColor: '#3B82F6',
          icon: '📉',
          title: 'Anomaly Detection',
          description: 'ML models learn normal behavior patterns and flag deviations. Unlike static thresholds, dynamic baselines adapt to time-of-day, day-of-week, seasonal patterns, and gradual drift.',
          examples: [],
        },
        {
          className: 'capability-1',
          borderColor: '#10B981',
          icon: '🎯',
          title: 'Alert Correlation',
          description: 'Groups related alerts into single incidents. Uses topology awareness, temporal proximity, and semantic similarity. Reduces hundreds of symptoms to one actionable incident.',
          examples: [],
        },
        {
          className: 'capability-2',
          borderColor: '#8B5CF6',
          icon: '🔍',
          title: 'Root Cause Analysis',
          description: 'Identifies probable root cause by correlating incidents with changes (deployments, config updates, infrastructure events). Causal inference models rank likely causes.',
          examples: [],
        },
        {
          className: 'capability-3',
          borderColor: '#F59E0B',
          icon: '🔮',
          title: 'Predictive Analytics',
          description: 'Forecasts future issues before they occur. Time-series models predict resource exhaustion, capacity needs, and failure probability based on historical patterns.',
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
        { icon: '📌', title: 'The AIOps Pipeline', subtitle: '', description: 'From raw telemetry to intelligent action', tags: [] },
        { icon: '📌', title: 'Core AIOps Capabilities', subtitle: '', description: 'What machine learning enables in IT operations', tags: [] },
        { icon: '📌', title: 'Types of Anomalies', subtitle: '', description: 'Understanding what ML models detect', tags: [] },
        { icon: '📌', title: 'ML Techniques in AIOps', subtitle: '', description: 'The algorithms powering intelligent operations', tags: [] },
        { icon: '📌', title: 'AIOps Maturity Model', subtitle: '', description: 'The journey from reactive to autonomous operations', tags: [] },
        { icon: '📌', title: 'AIOps Platforms', subtitle: '', description: 'Leading solutions for intelligent operations', tags: [] },
        { icon: '📌', title: 'Auto-Remediation Patterns', subtitle: '', description: 'Common automated responses to detected issues', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Implementing AIOps effectively', tags: [] },
      ],
    },
    tools: {
      title: 'AIOps Platforms',
      subtitle: 'Leading solutions for intelligent operations',
      items: [
        { icon: 'Dy', name: 'Dy\n                        \n                            Dynatrace Davis AI\n                            Enterprise • Full Platform', vendor: '', description: 'Causation-based AI engine. Automatic root cause analysis across full stack. Topology-aware correlation. Problem detection without configuration. Industry leader for enterprise AIOps.\n                        \n                            Automatic RCA\n                            Smartscape Topology\n                            Davis Score\n                            Auto-Remediation\n                            Hypermodal AI', tags: [] },
        { icon: 'Dd', name: 'Dd\n                        \n                            Datadog Watchdog\n                            SaaS • Integrated AIOps', vendor: '', description: 'ML-powered anomaly detection across all Datadog data. Automatic root cause analysis linking APM, logs, and infrastructure. Watchdog Insights surface issues proactively.\n                        \n                            Watchdog Alerts\n                            RCA Insights\n                            Anomaly Detection\n                            Forecast Monitors\n                            Log Patterns', tags: [] },
        { icon: 'NR', name: 'NR\n                        \n                            New Relic AI\n                            SaaS • Full Stack', vendor: '', description: 'Applied Intelligence for alert correlation and incident management. Proactive detection with anomaly NRQL queries. Errors Inbox groups errors intelligently. New NRAI natural language interface.\n                        \n                            Applied Intelligence\n                            Incident Intelligence\n                            NRAI Chat\n                            Anomaly Detection\n                            Errors Inbox', tags: [] },
        { icon: 'Sp', name: 'Sp\n                        \n                            Splunk IT Service Intelligence\n                            Enterprise • ITSI', vendor: '', description: 'Service-centric AIOps with ML-powered event analytics. Predictive analytics for IT services. Episode reviews correlate events. Deep integration with Splunk platform for log-based AI.\n                        \n                            Service Analyzer\n                            Episode Review\n                            Predictive Analytics\n                            Adaptive Thresholds\n                            Glass Tables', tags: [] },
        { icon: 'MQ', name: 'MQ\n                        \n                            Moogsoft\n                            Standalone AIOps', vendor: '', description: 'Purpose-built AIOps platform. Situation correlation using patented algorithms. Integrates with existing monitoring stack. Strong focus on noise reduction and alert correlation.\n                        \n                            Situation Room\n                            Alert Clustering\n                            Probable Root Cause\n                            Workflow Automation\n                            Integrations Hub', tags: [] },
        { icon: 'BM', name: 'BM\n                        \n                            BigPanda\n                            Event Correlation', vendor: '', description: 'Event correlation and automation platform. Open Integration Hub connects 150+ tools. Change correlation links incidents to deployments. Strong ServiceNow and PagerDuty integration.\n                        \n                            Open Box ML\n                            Unified Console\n                            Change Intelligence\n                            Auto-Share\n                            ServiceNow Sync', tags: [] },
        { icon: 'PD', name: 'PD\n                        \n                            PagerDuty AIOps\n                            Incident Management', vendor: '', description: 'AIOps integrated into incident management workflow. Event Intelligence reduces noise. Past Incidents surface similar issues. Runbook automation for remediation.\n                        \n                            Event Intelligence\n                            Past Incidents\n                            Intelligent Triage\n                            Runbook Automation\n                            Auto-Pause', tags: [] },
        { icon: 'OC', name: 'OC\n                        \n                            OpsClarity (Lightbend)\n                            Open Source Focused', vendor: '', description: 'Intelligent monitoring for microservices. Deep Akka and reactive systems support. Automatic discovery and topology mapping. Good for cloud-native JVM workloads.\n                        \n                            Auto Discovery\n                            Akka Support\n                            Health Rules\n                            Anomaly Detection\n                            Topology Maps', tags: [] },
        { icon: 'El', name: 'El\n                        \n                            Elastic ML\n                            Open Source • ELK Stack', vendor: '', description: 'Unsupervised ML built into Elastic Stack. Anomaly detection on any indexed data. Log categorization groups similar messages. Good for organizations with existing ELK investment.\n                        \n                            Anomaly Detection Jobs\n                            Log Categorization\n                            Data Frame Analytics\n                            Inference API\n                            Alerting Integration', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Implementing AIOps effectively',
      doItems: [
        'Start with Data Quality — ML is only as good as input data. Ensure consistent metric collection, structured logging, and accurate topology mapping before enabling AIOps features. Garbage in, garbage out.',
        'Begin with Detection, Not Action — Start with anomaly detection and correlation before auto-remediation. Build trust in ML accuracy. Review false positives and negatives. Add automation gradually.',
        'Provide Feedback Loops — Mark alerts as true/false positives. Close incidents with root cause tags. This feedback trains models and improves accuracy over time. Invest in labeling during early adoption.',
        'Integrate with Change Management — Feed deployment events, config changes, and infrastructure updates into AIOps. Change correlation is the key to fast RCA. No change data = limited root cause insight.',
        'Define Clear Escalation Paths — Automation should know when to stop. Define thresholds for human escalation: repeated failures, unknown scenarios, critical systems. Keep humans in the loop for novel situations.',
        'Start with Low-Risk Remediations — Begin auto-remediation with reversible, low-impact actions: horizontal scaling, cache clearing, pod restarts. Build confidence before enabling rollbacks or failovers.',
        'Measure AIOps Effectiveness — Track metrics: alert noise reduction %, MTTD improvement, MTTR improvement, false positive rate, auto-remediation success rate. Demonstrate ROI to justify investment.',
        'Maintain Model Transparency — Understand why models flag anomalies. Black-box ML erodes trust. Choose platforms that explain decisions. Engineers need to understand and validate AI recommendations.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🧠',
      name: 'AIOpsEngineer',
      role: 'Intelligent Operations & ML',
      description: 'Designs anomaly detection baselines, creates alert correlation rules, and builds auto-remediation workflows. Evaluates ML models for time-series forecasting and provides ROI analysis for AIOps investments. Integrates with Datadog, Dynatrace, Moogsoft, and PagerDuty for platform-specific configuration.',
      capabilities: [
        'Anomaly detection configuration',
        'Alert correlation rule design',
        'Auto-remediation workflows',
        'ML model selection guidance',
        'Maturity assessment & roadmap',
        'Integration architecture',
        'ROI & KPI measurement',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        aiops_engineer_agent.py',
      code: `# AIOps Engineering Automation Agent
from crewai import Agent, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Anomaly detection tuner tool
anomaly_tuner = Tool(
    name="anomaly_tuner",
    description="""Analyzes metric patterns to
    configure dynamic baselines and tune
    detection sensitivity thresholds""",
    func=tune_anomaly_detection
)

# Correlation rule designer tool
correlation_designer = Tool(
    name="correlation_designer",
    description="""Creates topology-aware rules
    to group related alerts into single
    actionable incidents""",
    func=design_correlation_rules
)

# Remediation workflow builder
remediation_builder = Tool(
    name="remediation_builder",
    description="""Designs auto-remediation with
    guardrails, rollback procedures, and
    human escalation triggers""",
    func=build_remediation_workflow
)

# Maturity assessor tool
maturity_assessor = Tool(
    name="maturity_assessor",
    description="""Evaluates AIOps maturity level
    and provides roadmap to advance from
    reactive to autonomous operations""",
    func=assess_maturity
)

aiops_engineer_agent = Agent(
    role="AIOps Strategy Engineer",
    goal="""Design intelligent automation for
    IT operations using ML techniques""",
    backstory="""Expert in ML-powered operations
    with experience implementing AIOps at
    scale across enterprise environments.""",
    llm=llm,
    tools=[anomaly_tuner, correlation_designer,
           remediation_builder, maturity_assessor],
    verbose=True
)`,
    },
    relatedPages: [
      { number: '16.4', title: 'Alerting & Incident Management', description: 'SLO-based alerting, on-call, and incident workflows', slug: 'alerting-incidents' },
      { number: '16.5', title: 'Application Performance Monitoring', description: 'Deep application visibility with traces and profiling', slug: 'apm' },
      { number: '16.1', title: 'Metrics & Monitoring', description: 'Prometheus, Grafana, and time series fundamentals', slug: 'metrics-monitoring' },
    ],
    prevPage: { title: '16.5 Application Performance Monitoring', slug: 'apm' },
    nextPage: undefined,
  },
]

registerPages('monitoring-observability', pages)
export default pages
