import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'data-ingestion',
    badge: '📥 Page 2.1',
    title: 'Data Ingestion',
    description: 'Master the art of moving data from source systems to your data platform. Learn batch processing, real-time streaming, change data capture (CDC), and the connector ecosystems that power modern data pipelines.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '3', label: 'Core Patterns' },
      { value: '500+', label: 'Source Connectors' },
      { value: '< 1s', label: 'Real-time Latency' },
      { value: 'ELT', label: 'Modern Approach' },
    ],
    overview: {
      title: 'What is Data Ingestion?',
      subtitle: 'Getting data from point A to point B reliably',
      subsections: [
        {
          heading: 'Definition & Purpose',
          paragraphs: [
            'Data ingestion is the process of extracting data from source systems and loading it into a target data platform (data warehouse, data lake, or lakehouse). It\'s the first and often most critical step in any data pipeline—if data doesn\'t make it in correctly, everything downstream suffers.',
          ],
        },
        {
          heading: 'ETL vs ELT',
          paragraphs: [
            'Traditional ETL (Extract-Transform-Load) transformed data before loading it. Modern ELT (Extract-Load-Transform) loads raw data first, then transforms it using the processing power of cloud data warehouses. ELT is now the dominant pattern because it preserves raw data, enables flexible transformations, and leverages cheap cloud compute.',
          ],
        },
        {
          heading: 'The Connector Revolution',
          paragraphs: [
            'Modern ingestion tools like Fivetran and Airbyte offer 500+ pre-built connectors to SaaS applications, databases, files, and APIs. This has dramatically reduced the time to build data pipelines from weeks to minutes, shifting focus from building connectors to managing data quality and governance.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Ingestion Patterns',
      subtitle: 'The three fundamental approaches to moving data',
      columns: 2,
      cards: [
        {
          className: 'batch',
          borderColor: '#3B82F6',
          icon: '📦',
          title: 'Batch Ingestion',
          description: 'Process data in scheduled intervals—hourly, daily, or weekly. Best for large volumes where real-time isn\'t critical.',
          examples: ['Scheduled extraction (cron, orchestrator)', 'Full load or incremental (watermark)', 'Higher latency (minutes to hours)', 'Lower cost, simpler to manage', 'Best for: Analytics, reporting, ML training'],
        },
        {
          className: 'streaming',
          borderColor: '#10B981',
          icon: '🌊',
          title: 'Streaming Ingestion',
          description: 'Process data continuously as it arrives. Essential for real-time analytics, monitoring, and event-driven architectures.',
          examples: ['Continuous data flow (Kafka, Kinesis)', 'Sub-second latency possible', 'Event-driven processing', 'Higher complexity and cost', 'Best for: Real-time dashboards, alerts, fraud'],
        },
        {
          className: 'cdc',
          borderColor: '#8B5CF6',
          icon: '📡',
          title: 'Change Data Capture',
          description: 'Capture only changed records from databases using transaction logs. The gold standard for database replication.',
          examples: ['Log-based (Debezium, Fivetran)', 'Captures inserts, updates, deletes', 'Low impact on source systems', 'Near real-time with batch economics', 'Best for: Database sync, data warehouse'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Data Ingestion',
          description: 'Master the art of moving data from source systems to your data platform. Learn batch processing, real-time streaming, change data capture (CDC), and the connector ecosystems that power modern data pip',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Tool Comparison',
      subtitle: 'Choosing the right ingestion platform',
      cards: [
        { icon: '🛠️', title: 'Fivetran', subtitle: 'Managed SaaS', description: 'Enterprise, zero-maintenance', tags: ['$$$'] },
        { icon: '🛠️', title: 'Airbyte', subtitle: 'Open Source / Cloud', description: 'Cost-conscious, customization', tags: ['$-$$'] },
        { icon: '🛠️', title: 'Stitch', subtitle: 'Managed SaaS', description: 'SMBs, simple needs', tags: ['$$'] },
        { icon: '🛠️', title: 'Debezium', subtitle: 'Open Source', description: 'CDC, database replication', tags: ['Free'] },
        { icon: '🛠️', title: 'NiFi', subtitle: 'Open Source', description: 'Complex routing, enterprise', tags: ['Free'] },
        { icon: '🛠️', title: 'Matillion', subtitle: 'Cloud SaaS', description: 'Snowflake users, visual ETL', tags: ['$$'] },
      ],
    },
    tools: {
      title: 'Ingestion Tools',
      subtitle: 'Popular platforms for data ingestion',
      items: [
        { icon: '🔗', name: 'Fivetran', vendor: 'Fivetran Inc.', description: 'Fully managed ELT with 300+ connectors. Zero maintenance, automatic schema migrations. Premium pricing.', tags: ['Managed', '300+ Connectors', 'Enterprise'] },
        { icon: '🔄', name: 'Airbyte', vendor: 'Airbyte Inc.', description: 'Open-source ELT platform with 350+ connectors. Self-hosted or cloud. Growing community.', tags: ['Open Source', '350+ Connectors', 'Self-host'] },
        { icon: '🧵', name: 'Stitch', vendor: 'Talend', description: 'Simple, affordable managed ELT. Good for smaller teams. Part of Talend ecosystem.', tags: ['Managed', 'Affordable', 'Simple'] },
        { icon: '📡', name: 'Debezium', vendor: 'Red Hat', description: 'Open-source CDC platform. Log-based capture for databases. Kafka integration.', tags: ['Open Source', 'CDC', 'Kafka'] },
        { icon: '🌊', name: 'Apache NiFi', vendor: 'Apache', description: 'Visual data flow automation. Powerful but complex. Great for enterprise data routing.', tags: ['Open Source', 'Visual', 'Enterprise'] },
        { icon: '⚡', name: 'Matillion', vendor: 'Matillion Ltd.', description: 'Cloud-native ETL/ELT. Visual interface, pushdown processing. Strong Snowflake integration.', tags: ['Cloud-native', 'Visual', 'Snowflake'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for reliable data ingestion',
      doItems: [
        'Use CDC for database sources—it\'s the most efficient and reliable method',
        'Implement incremental loading with watermarks (updated_at, sequence IDs)',
        'Land data in raw format first—transform in the warehouse',
        'Set up monitoring and alerting for pipeline failures and delays',
        'Version control your pipeline configurations',
        'Plan for schema evolution—sources will change',
        'Implement idempotent pipelines that can safely re-run',
        'Document data lineage from source to destination',
      ],
      dontItems: [
        'Don\'t transform data during ingestion—preserve the raw source',
        'Avoid full table scans when incremental is possible',
        'Never hardcode credentials—use secrets management',
        'Don\'t ignore source system rate limits—you can get blocked',
        'Avoid tight coupling to source schemas—buffer with raw layer',
        'Don\'t skip data quality checks at ingestion time',
        'Never delete source data after ingestion without retention policy',
        'Don\'t underestimate connector maintenance—updates break things',
      ],
    },
    agent: {
      avatar: '📥',
      name: 'IngestionAgent',
      role: 'Data Ingestion Specialist',
      description: 'Expert in designing and implementing data ingestion pipelines. Specializes in connector selection, CDC implementation, incremental loading strategies, and troubleshooting data pipeline issues.',
      capabilities: [
        'Connector selection and configuration',
        'CDC implementation (Debezium, Fivetran)',
        'Incremental loading strategy design',
        'Pipeline monitoring and alerting setup',
        'Schema evolution handling',
        'Performance optimization',
      ],
      codeFilename: 'Agent Definition\n                        Ingestion Task\n                        ingestion_agent.py',
      code: `# ingestion_agent.py - Data Ingestion Agent
from crewai import Agent, Task, Crew

ingestion_agent = Agent(
    role="Data Ingestion Engineer",
    goal="Design reliable, efficient data pipelines",
    backstory="""Expert in data ingestion patterns, 
    CDC implementation, and connector ecosystems. 
    Deep knowledge of Fivetran, Airbyte, Debezium, 
    and custom ingestion solutions.""",
    tools=[
        ConnectorAnalyzer(),
        CDCConfigurator(),
        IncrementalStrategy(),
        SchemaEvolutionHandler(),
        PipelineMonitor(),
    ]
)

ingestion_task = Task(
    description="""
    1. Analyze source systems and data volumes
    2. Select optimal ingestion pattern (batch/CDC/stream)
    3. Choose appropriate connector tool
    4. Design incremental loading strategy
    5. Configure schema evolution handling
    6. Set up monitoring and alerting
    7. Document pipeline and create runbook
    """,
    agent=ingestion_agent,
    expected_output="Production-ready ingestion pipeline"
)

# Execute ingestion design
crew = Crew(agents=[ingestion_agent], tasks=[ingestion_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.2', title: 'Data Transformation', description: 'Transform ingested data with dbt', slug: 'data-transformation' },
      { number: 'Page 2.11', title: 'Streaming Platforms', description: 'Real-time ingestion with Kafka, Flink', slug: 'streaming' },
      { number: 'Page 2.8', title: 'Data Quality', description: 'Validate data at ingestion time', slug: 'data-quality' },
    ],
    prevPage: undefined,
    nextPage: { title: '2.2 Data Transformation (dbt)', slug: 'data-transformation' },
  },
  {
    slug: 'data-transformation',
    badge: '🔄 Page 2.2',
    title: 'Data Transformation (dbt)',
    description: 'Master modern data transformation with dbt (data build tool). Learn to build modular, tested, documented SQL transformations that turn raw data into analytics-ready datasets using software engineering best practices.',
    accentColor: '#F97316',
    accentLight: '#FB923C',
    metrics: [
      { value: '40K+', label: 'Companies Using dbt' },
      { value: 'SQL', label: 'Primary Language' },
      { value: 'Jinja', label: 'Templating Engine' },
      { value: 'Git', label: 'Version Control' },
    ],
    overview: {
      title: 'What is dbt?',
      subtitle: 'The T in ELT done right',
      subsections: [
        {
          heading: 'Definition & Purpose',
          paragraphs: [
            'dbt (data build tool) is an open-source transformation framework that enables analytics engineers to transform data in their warehouse using SQL. It brings software engineering practices—version control, testing, documentation, modularity—to data transformation, making analytics pipelines more reliable and maintainable.',
          ],
        },
        {
          heading: 'The Analytics Engineering Movement',
          paragraphs: [
            'dbt pioneered the "analytics engineering" discipline—a hybrid of data engineering and analytics. Instead of writing one-off scripts or using drag-and-drop ETL tools, analytics engineers write modular SQL models that are version-controlled, tested, and documented. This approach has become the industry standard for modern data teams.',
          ],
        },
        {
          heading: 'How dbt Works',
          paragraphs: [
            'dbt compiles SQL models with Jinja templating, then executes them against your data warehouse (Snowflake, BigQuery, Databricks, Redshift). It manages dependencies between models, runs tests, generates documentation, and tracks data lineage—all from simple SELECT statements that define what you want, not how to build it.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'The building blocks of dbt',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📄',
          title: 'Models',
          description: 'SQL SELECT statements that define transformations. Each model = one table or view.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📦',
          title: 'Sources',
          description: 'Raw data tables from your ingestion layer. Defined in YAML for lineage tracking.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🧪',
          title: 'Tests',
          description: 'Assertions about your data: unique, not null, accepted values, relationships.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📚',
          title: 'Documentation',
          description: 'Auto-generated docs with descriptions, lineage graphs, and column definitions.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Testing in dbt',
      subtitle: 'Ensuring data quality at every step',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'unique', tagText: 'No duplicate values in column', tagClass: 'tag-blue', bestFor: '- unique on customer_id', complexity: 'medium', rating: '- unique on customer_id' },
        { icon: '🛠️', name: 'not_null', tagText: 'No NULL values in column', tagClass: 'tag-green', bestFor: '- not_null on order_id', complexity: 'medium', rating: '- not_null on order_id' },
        { icon: '🛠️', name: 'accepted_values', tagText: 'Only specific values allowed', tagClass: 'tag-purple', bestFor: 'values: [\'pending\', \'shipped\', \'delivered\']', complexity: 'medium', rating: 'values: [\'pending\', \'shipped\', \'delivered\']' },
        { icon: '🛠️', name: 'relationships', tagText: 'Foreign key integrity', tagClass: 'tag-orange', bestFor: 'to: ref(\'dim_customers\')', complexity: 'medium', rating: 'to: ref(\'dim_customers\')' },
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
      subtitle: 'Guidelines for maintainable dbt projects',
      doItems: [
        'Use consistent naming conventions (stg_, int_, fct_, dim_)',
        'One model per file, one transformation purpose per model',
        'Add tests to every model, especially primary keys',
        'Document models and columns in schema.yml',
        'Use ref() and source() functions exclusively',
        'Leverage incremental models for large tables',
        'Create reusable macros for repeated logic',
        'Use packages (dbt_utils, dbt_expectations) for common patterns',
      ],
      dontItems: [
        'Don\'t hardcode database/schema names—use variables',
        'Avoid complex logic in staging models—keep them simple',
        'Never reference raw tables directly—always use source()',
        'Don\'t skip the intermediate layer for complex transformations',
        'Avoid circular dependencies between models',
        'Don\'t materialize everything as tables—use views for simple models',
        'Never commit sensitive data in seed files',
        'Don\'t ignore failing tests—fix data quality issues immediately',
      ],
    },
    agent: {
      avatar: '🔄',
      name: 'dbtModelAgent',
      role: 'Analytics Engineering Specialist',
      description: 'Expert in dbt development, data modeling, and analytics engineering best practices. Specializes in writing efficient SQL, designing model layers, implementing tests, and optimizing dbt projects.',
      capabilities: [
        'Generate dbt models from requirements',
        'Design staging/intermediate/marts layers',
        'Write comprehensive tests and docs',
        'Optimize incremental models',
        'Debug compilation and runtime errors',
        'Refactor legacy SQL to dbt patterns',
      ],
      codeFilename: 'Agent Definition\n                        Model Task\n                        dbt_agent.py',
      code: `# dbt_agent.py - dbt Development Agent
from crewai import Agent, Task, Crew

dbt_agent = Agent(
    role="Analytics Engineer",
    goal="Build maintainable dbt transformations",
    backstory="""Expert in dbt, SQL optimization, and 
    data modeling. Deep knowledge of staging/marts 
    patterns, Jinja templating, incremental models, 
    and testing strategies.""",
    tools=[
        SQLGenerator(),
        ModelDesigner(),
        TestWriter(),
        DocGenerator(),
        PerformanceAnalyzer(),
    ]
)

dbt_task = Task(
    description="""
    1. Analyze source data and requirements
    2. Design model layer structure (stg/int/marts)
    3. Write SQL models with proper refs
    4. Add comprehensive tests (unique, not_null, etc)
    5. Generate documentation in schema.yml
    6. Optimize materialization strategy
    7. Create lineage diagram
    """,
    agent=dbt_agent,
    expected_output="Production-ready dbt models with tests"
)

# Execute dbt development
crew = Crew(agents=[dbt_agent], tasks=[dbt_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.1', title: 'Data Ingestion', description: 'Get data into your warehouse for dbt to transform', slug: 'data-ingestion' },
      { number: 'Page 2.8', title: 'Data Quality', description: 'Advanced testing with Great Expectations', slug: 'data-quality' },
      { number: 'Page 2.7', title: 'Orchestration', description: 'Schedule and orchestrate dbt runs', slug: 'orchestration' },
    ],
    prevPage: { title: '2.1 Data Ingestion', slug: 'data-ingestion' },
    nextPage: { title: '2.3 Databricks Platform', slug: 'databricks' },
  },
  {
    slug: 'databricks',
    badge: '🧱 Page 2.3',
    title: 'Databricks Platform',
    description: 'Master the unified data analytics platform. Learn lakehouse architecture, Delta Lake for reliable data lakes, Unity Catalog for governance, and Databricks Workflows for orchestration—all powered by Apache Spark.',
    accentColor: '#FF3621',
    accentLight: '#FF6B5B',
    metrics: [
      { value: '$62B', label: 'Valuation (2023)' },
      { value: '10K+', label: 'Enterprise Customers' },
      { value: 'Delta', label: 'Lake Format' },
      { value: 'Unity', label: 'Catalog Governance' },
    ],
    overview: {
      title: 'What is Databricks?',
      subtitle: 'The lakehouse company',
      subsections: [
        {
          heading: 'The Lakehouse Platform',
          paragraphs: [
            'Databricks pioneered the "lakehouse" architecture—combining the best of data lakes (cheap storage, schema flexibility, diverse data types) with the best of data warehouses (ACID transactions, governance, performance). Built on Apache Spark, Databricks provides a unified platform for data engineering, data science, machine learning, and analytics.',
          ],
        },
        {
          heading: 'Founded by Spark Creators',
          paragraphs: [
            'Databricks was founded in 2013 by the original creators of Apache Spark at UC Berkeley. They went on to create Delta Lake (reliable data lake storage), MLflow (ML lifecycle), and Koalas (pandas on Spark). Today, Databricks is one of the most valuable private companies in tech, serving over 10,000 enterprise customers.',
          ],
        },
        {
          heading: 'Multi-Cloud Native',
          paragraphs: [
            'Databricks runs on AWS, Azure, and GCP, with deep integrations into each cloud ecosystem. Compute runs in your cloud account, data stays in your storage (S3, ADLS, GCS), and Databricks provides the management plane. This separation enables cost efficiency and data residency compliance.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Lakehouse Architecture',
      subtitle: 'The best of lakes and warehouses',
      columns: 2,
      cards: [
        {
          className: 'delta',
          borderColor: '#3B82F6',
          icon: '🔺',
          title: 'Delta Lake',
          description: 'Open-source storage layer that brings ACID transactions to data lakes',
          examples: [],
        },
        {
          className: 'unity',
          borderColor: '#10B981',
          icon: '🔐',
          title: 'Unity Catalog',
          description: 'Unified governance for data, ML models, and AI assets',
          examples: [],
        },
        {
          className: 'workflows',
          borderColor: '#8B5CF6',
          icon: '⚙️',
          title: 'Workflows',
          description: 'Orchestrate jobs, notebooks, and pipelines with dependencies',
          examples: [],
        },
        {
          className: 'mlflow',
          borderColor: '#F59E0B',
          icon: '🧪',
          title: 'MLflow',
          description: 'End-to-end ML lifecycle: tracking, registry, deployment',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Databricks Workflows',
      subtitle: 'Orchestration for the lakehouse',
      cards: [
        { icon: '🛠️', title: 'Jobs', subtitle: 'Scheduled or triggered execution of tasks', description: 'Production pipelines, scheduled reports', tags: ['Scheduled or triggered execution of tasks'] },
        { icon: '🛠️', title: 'Tasks', subtitle: 'Individual units of work (notebook, JAR, SQL, dbt)', description: 'ETL steps, model training, data validation', tags: ['Individual units of work (notebook, JAR, SQL, dbt)'] },
        { icon: '🛠️', title: 'Delta Live Tables', subtitle: 'Declarative ETL framework with quality checks', description: 'Streaming + batch pipelines, data quality', tags: ['Declarative ETL framework with quality checks'] },
        { icon: '🛠️', title: 'Job Clusters', subtitle: 'Ephemeral clusters created for job execution', description: 'Cost optimization, isolation', tags: ['Ephemeral clusters created for job execution'] },
        { icon: '🛠️', title: 'Triggers', subtitle: 'Scheduled (cron), file arrival, continuous', description: 'Event-driven pipelines, SLA compliance', tags: ['Scheduled (cron), file arrival, continuous'] },
        { icon: '📌', title: 'Databricks Platform', subtitle: '', description: 'Master the unified data analytics platform. Learn lakehouse architecture, Delta Lake for reliable data lakes, Unity Catalog for governance, and Databr', tags: [] },
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
      subtitle: 'Guidelines for Databricks success',
      doItems: [
        'Use Unity Catalog for all new projects—it\'s the future of governance',
        'Leverage Delta Lake everywhere—tables, streaming, ML feature stores',
        'Use job clusters for production—ephemeral, isolated, cost-effective',
        'Implement medallion architecture (bronze/silver/gold)',
        'Enable Photon for SQL-heavy workloads (2-8x speedup)',
        'Use OPTIMIZE and Z-ORDER for frequently queried columns',
        'Implement DLT for streaming pipelines with quality expectations',
        'Set up proper cluster policies to control costs',
      ],
      dontItems: [
        'Don\'t use all-purpose clusters for production jobs',
        'Avoid small files—use Auto Loader and OPTIMIZE regularly',
        'Never skip VACUUM—old files accumulate and cost money',
        'Don\'t over-partition—too many partitions hurt performance',
        'Avoid legacy Hive metastore for new projects',
        'Don\'t ignore cluster auto-termination settings',
        'Never hardcode secrets—use Databricks secrets or external vaults',
        'Don\'t skip data quality checks—use DLT expectations or Great Expectations',
      ],
    },
    agent: {
      avatar: '🧱',
      name: 'DatabricksAgent',
      role: 'Lakehouse Platform Specialist',
      description: 'Expert in Databricks platform, Delta Lake, Unity Catalog, and lakehouse architecture. Specializes in pipeline development, performance optimization, governance setup, and migration from legacy systems.',
      capabilities: [
        'Design medallion architecture pipelines',
        'Configure Unity Catalog governance',
        'Optimize Delta Lake performance',
        'Build DLT streaming pipelines',
        'Migrate from Hadoop/legacy platforms',
        'Implement cluster policies and cost controls',
      ],
      codeFilename: 'Agent Definition\n                        Migration Task\n                        databricks_agent.py',
      code: `# databricks_agent.py - Databricks Platform Agent
from crewai import Agent, Task, Crew

databricks_agent = Agent(
    role="Databricks Solutions Architect",
    goal="Design optimal lakehouse solutions",
    backstory="""Expert in Databricks, Delta Lake, 
    Unity Catalog, and Apache Spark. Deep knowledge 
    of medallion architecture, DLT pipelines, 
    performance tuning, and enterprise governance.""",
    tools=[
        DeltaLakeOptimizer(),
        UnityCatalogConfigurator(),
        DLTPipelineBuilder(),
        ClusterPolicyManager(),
        MigrationPlanner(),
    ]
)

lakehouse_task = Task(
    description="""
    1. Assess current data architecture
    2. Design medallion layer structure
    3. Configure Unity Catalog governance
    4. Build DLT pipelines with quality checks
    5. Optimize Delta tables (Z-ORDER, OPTIMIZE)
    6. Set up cluster policies for cost control
    7. Implement monitoring and alerting
    """,
    agent=databricks_agent,
    expected_output="Production-ready lakehouse architecture"
)

# Execute Databricks implementation
crew = Crew(agents=[databricks_agent], tasks=[lakehouse_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.6', title: 'Apache Spark', description: 'The engine powering Databricks', slug: 'apache-spark' },
      { number: 'Page 2.4', title: 'Snowflake Platform', description: 'Compare with data warehouse approach', slug: 'snowflake' },
      { number: 'Page 2.8', title: 'Data Quality', description: 'DLT expectations and quality frameworks', slug: 'data-quality' },
    ],
    prevPage: { title: '2.2 Data Transformation (dbt)', slug: 'data-transformation' },
    nextPage: { title: '2.4 Snowflake Platform', slug: 'snowflake' },
  },
  {
    slug: 'snowflake',
    badge: '❄️ Page 2.4',
    title: 'Snowflake Platform',
    description: 'Master the cloud data platform. Learn Snowflake\'s unique multi-cluster architecture, virtual warehouses for elastic compute, data sharing capabilities, and Snowpark for programmatic data engineering.',
    accentColor: '#29B5E8',
    accentLight: '#56C4EF',
    metrics: [
      { value: '$2.8B', label: 'FY24 Revenue' },
      { value: '9,800+', label: 'Enterprise Customers' },
      { value: 'Zero', label: 'Copy Data Sharing' },
      { value: 'Snowpark', label: 'Developer Experience' },
    ],
    overview: {
      title: 'What is Snowflake?',
      subtitle: 'The data cloud',
      subsections: [
        {
          heading: 'Cloud-Native Data Platform',
          paragraphs: [
            'Snowflake is a cloud-native data platform built from the ground up for the cloud. Unlike traditional data warehouses that were retrofitted for cloud deployment, Snowflake was designed to take full advantage of cloud infrastructure—elastic compute, virtually unlimited storage, and pay-per-use pricing. This architecture enables true separation of storage and compute.',
          ],
        },
        {
          heading: 'Multi-Cloud Strategy',
          paragraphs: [
            'Snowflake runs natively on AWS, Azure, and GCP, with the ability to replicate and share data across clouds and regions. This multi-cloud capability is unique in the industry and enables true data mobility without vendor lock-in. Organizations can choose their cloud provider(s) based on business needs while maintaining a single platform experience.',
          ],
        },
        {
          heading: 'Beyond Data Warehousing',
          paragraphs: [
            'While Snowflake started as a cloud data warehouse, it has evolved into a comprehensive data platform. Today, Snowflake supports data engineering, data science, data applications, and data sharing—all within a governed, secure environment. The Snowflake Marketplace enables organizations to discover and share data products.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Multi-Cluster Architecture',
      subtitle: 'Separation of storage and compute',
      columns: 2,
      cards: [
        {
          className: 'storage',
          borderColor: '#3B82F6',
          icon: '💾',
          title: 'Storage Layer',
          description: 'Centralized, compressed columnar storage on cloud object storage. Data is automatically encrypted, organized into micro-partitions, and optimized for queries.',
          examples: [],
        },
        {
          className: 'compute',
          borderColor: '#10B981',
          icon: '⚡',
          title: 'Compute Layer',
          description: 'Virtual warehouses that can be created, resized, and destroyed on demand. Multiple warehouses access the same data without contention.',
          examples: [],
        },
        {
          className: 'services',
          borderColor: '#8B5CF6',
          icon: '☁️',
          title: 'Cloud Services',
          description: 'Brain of the system: authentication, access control, query optimization, metadata management, and transaction coordination.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Snowflake Platform',
          description: 'Master the cloud data platform. Learn Snowflake\'s unique multi-cluster architecture, virtual warehouses for elastic compute, data sharing capabilities, and Snowpark for programmatic data engineering.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Snowpark',
      subtitle: 'Developer experience for data engineering',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'DataFrames', tagText: 'Pandas/Spark-like API for transformations', tagClass: 'tag-blue', bestFor: 'Data engineering, ETL pipelines', complexity: 'medium', rating: 'Data engineering, ETL pipelines' },
        { icon: '🛠️', name: 'UDFs', tagText: 'User-defined functions in Python/Java/Scala', tagClass: 'tag-green', bestFor: 'Custom logic, ML inference', complexity: 'medium', rating: 'Custom logic, ML inference' },
        { icon: '🛠️', name: 'Stored Procedures', tagText: 'Procedural logic running in Snowflake', tagClass: 'tag-purple', bestFor: 'Complex workflows, migrations', complexity: 'medium', rating: 'Complex workflows, migrations' },
        { icon: '🛠️', name: 'Snowpark ML', tagText: 'ML training and inference in Snowflake', tagClass: 'tag-orange', bestFor: 'Feature engineering, model training', complexity: 'medium', rating: 'Feature engineering, model training' },
        { icon: '🛠️', name: 'Streamlit', tagText: 'Build data apps directly in Snowflake', tagClass: 'tag-pink', bestFor: 'Dashboards, internal tools', complexity: 'medium', rating: 'Dashboards, internal tools' },
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
      subtitle: 'Guidelines for Snowflake success',
      doItems: [
        'Use separate warehouses for different workloads (ETL, BI, Ad-hoc)',
        'Enable auto-suspend (5 min) and auto-resume for cost savings',
        'Leverage clustering keys on large tables (>1TB) for performance',
        'Use transient tables for staging/temp data (no Time Travel cost)',
        'Implement resource monitors to control credit consumption',
        'Use zero-copy cloning for dev/test environments',
        'Enable query acceleration for variable workloads',
        'Use Snowpipe for continuous, serverless data loading',
      ],
      dontItems: [
        'Don\'t over-size warehouses—start small and scale up',
        'Avoid running ETL and BI on the same warehouse',
        'Never leave warehouses running overnight without auto-suspend',
        'Don\'t use ACCOUNTADMIN for daily operations',
        'Avoid SELECT * on large tables—specify columns',
        'Don\'t skip resource monitors—costs can spike quickly',
        'Never store secrets in Snowflake—use external secret managers',
        'Don\'t ignore query profile—it reveals optimization opportunities',
      ],
    },
    agent: {
      avatar: '❄️',
      name: 'SnowflakeAgent',
      role: 'Data Cloud Specialist',
      description: 'Expert in Snowflake architecture, performance optimization, cost management, and data sharing. Specializes in warehouse sizing, clustering strategies, Snowpark development, and migration from legacy systems.',
      capabilities: [
        'Optimize warehouse sizing and scaling',
        'Design cost-effective architectures',
        'Implement data sharing and clean rooms',
        'Build Snowpark pipelines',
        'Analyze query performance profiles',
        'Migrate from Teradata/Redshift/Oracle',
      ],
      codeFilename: 'Agent Definition\n                        Optimization Task\n                        snowflake_agent.py',
      code: `# snowflake_agent.py - Snowflake Platform Agent
from crewai import Agent, Task, Crew

snowflake_agent = Agent(
    role="Snowflake Solutions Architect",
    goal="Design optimal Snowflake solutions",
    backstory="""Expert in Snowflake architecture, 
    performance tuning, cost optimization, and 
    data sharing. Deep knowledge of virtual 
    warehouses, clustering, Snowpark, and 
    enterprise migrations.""",
    tools=[
        WarehouseSizer(),
        QueryProfileAnalyzer(),
        CostOptimizer(),
        ClusteringAdvisor(),
        MigrationPlanner(),
    ]
)

optimization_task = Task(
    description="""
    1. Analyze current warehouse utilization
    2. Review query performance profiles
    3. Identify clustering opportunities
    4. Recommend warehouse sizing changes
    5. Set up resource monitors
    6. Implement cost allocation tags
    7. Create optimization report
    """,
    agent=snowflake_agent,
    expected_output="Cost and performance optimization plan"
)

# Execute Snowflake optimization
crew = Crew(agents=[snowflake_agent], tasks=[optimization_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.3', title: 'Databricks Platform', description: 'Compare lakehouse vs warehouse approaches', slug: 'databricks' },
      { number: 'Page 2.5', title: 'Google BigQuery', description: 'Another serverless data warehouse', slug: 'bigquery' },
      { number: 'Page 2.2', title: 'Data Transformation', description: 'dbt on Snowflake for transformations', slug: 'data-transformation' },
    ],
    prevPage: { title: '2.3 Databricks Platform', slug: 'databricks' },
    nextPage: { title: '2.5 Google BigQuery', slug: 'bigquery' },
  },
  {
    slug: 'bigquery',
    badge: '🔍 Page 2.5',
    title: 'Google BigQuery',
    description: 'Master Google\'s serverless data warehouse. Learn BigQuery\'s unique architecture, slot-based compute, native ML capabilities with BigQuery ML, and seamless integration with the Google Cloud ecosystem.',
    accentColor: '#4285F4',
    accentLight: '#669DF6',
    metrics: [
      { value: 'Serverless', label: 'Zero Infrastructure' },
      { value: 'Petabyte', label: 'Scale Analytics' },
      { value: 'BQML', label: 'Built-in ML' },
      { value: '$5/TB', label: 'On-Demand Query' },
    ],
    overview: {
      title: 'What is BigQuery?',
      subtitle: 'Google\'s serverless data warehouse',
      subsections: [
        {
          heading: 'Truly Serverless Analytics',
          paragraphs: [
            'BigQuery is Google Cloud\'s fully managed, serverless data warehouse. Unlike Snowflake or Databricks where you manage virtual warehouses or clusters, BigQuery abstracts away all infrastructure. You simply run queries and pay for what you use—no provisioning, scaling, or maintenance required. This serverless model enables teams to focus entirely on analytics rather than infrastructure.',
          ],
        },
        {
          heading: 'Dremel Heritage',
          paragraphs: [
            'BigQuery is built on Dremel, Google\'s internal query engine that has powered Google\'s analytics for over 15 years. Dremel pioneered the columnar storage format and tree-based distributed execution that enables BigQuery to scan petabytes of data in seconds. This battle-tested foundation gives BigQuery exceptional reliability and performance at scale.',
          ],
        },
        {
          heading: 'GCP Integration',
          paragraphs: [
            'BigQuery is deeply integrated with Google Cloud Platform. It connects natively with Cloud Storage, Dataflow, Pub/Sub, Vertex AI, and Looker. BigQuery also supports federated queries to Cloud SQL, Spanner, and external data sources without moving data. For organizations on GCP, BigQuery is the natural choice for analytics.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Features',
      subtitle: 'What makes BigQuery unique',
      columns: 2,
      cards: [
        {
          className: 'feature-0',
          borderColor: '#3B82F6',
          icon: '🎰',
          title: 'Slot-Based Compute',
          description: 'BigQuery uses "slots" as units of compute. On-demand pricing auto-allocates slots per query. Flat-rate pricing reserves dedicated slots for predictable costs and guaranteed capacity.',
          examples: ['On-demand: 2,000 slots per project (default)', 'Flat-rate: 100+ slot commitments', 'Autoscaling: Flex slots for burst'],
        },
        {
          className: 'feature-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'Streaming Inserts',
          description: 'Insert data row-by-row for real-time analytics. Data is available for queries within seconds. Alternatively, use Storage Write API for high-throughput streaming.',
          examples: ['Streaming inserts: Instant availability', 'Storage Write API: Higher throughput', 'Pub/Sub integration for event streams'],
        },
        {
          className: 'feature-2',
          borderColor: '#8B5CF6',
          icon: '🌐',
          title: 'Federated Queries',
          description: 'Query data in Cloud Storage, Cloud SQL, Spanner, or Bigtable without loading it into BigQuery. Join external data with native tables in a single query.',
          examples: ['Cloud Storage: Parquet, Avro, CSV, JSON', 'Cloud SQL and Spanner via federation', 'Google Sheets as external tables'],
        },
        {
          className: 'feature-3',
          borderColor: '#F59E0B',
          icon: '⏱️',
          title: 'Time Travel',
          description: 'Query data as it existed at any point within the past 7 days (configurable up to 7 days). Restore accidentally deleted or modified data without backups.',
          examples: ['FOR SYSTEM_TIME AS OF queries', '7-day default retention', 'Fail-safe: 7 additional days (Google access)'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'What is BigQuery?', subtitle: '', description: 'Google\'s serverless data warehouse', tags: [] },
        { icon: '📌', title: 'BigQuery Architecture', subtitle: '', description: 'Separation of storage and compute', tags: [] },
        { icon: '📌', title: 'Key Features', subtitle: '', description: 'What makes BigQuery unique', tags: [] },
        { icon: '📌', title: 'Pricing Models', subtitle: '', description: 'Choose what works for your workload', tags: [] },
        { icon: '📌', title: 'BigQuery ML', subtitle: '', description: 'Machine learning with SQL', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for BigQuery success', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for BigQuery', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
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
      subtitle: 'Guidelines for BigQuery success',
      doItems: [
        'Use partitioning on date/timestamp columns for time-based queries',
        'Cluster tables on frequently filtered columns',
        'Always use dry-run to estimate query costs before execution',
        'Set up billing alerts and query quotas',
        'Use materialized views for repeated aggregations',
        'Leverage BI Engine for sub-second dashboard queries',
        'Use INFORMATION_SCHEMA for monitoring and optimization',
        'Prefer batch loading over streaming for cost (when latency allows)',
      ],
      dontItems: [
        'Don\'t use SELECT *—specify only needed columns',
        'Avoid over-partitioning (creates too many small files)',
        'Never run unbounded queries on large tables',
        'Don\'t use streaming inserts for batch data (10x more expensive)',
        'Avoid cross-region queries—they\'re slower and costlier',
        'Don\'t skip table expiration for temp tables',
        'Never store sensitive data without column-level security',
        'Avoid LIMIT without ORDER BY—still scans full table',
      ],
    },
    agent: {
      avatar: '🔍',
      name: 'BigQueryAgent',
      role: 'GCP Analytics Specialist',
      description: 'Expert in BigQuery architecture, cost optimization, performance tuning, and BigQuery ML. Specializes in query optimization, partitioning strategies, slot management, and GCP data pipeline integration.',
      capabilities: [
        'Optimize query performance and costs',
        'Design partitioning and clustering strategies',
        'Build BigQuery ML models',
        'Configure slot reservations',
        'Set up streaming pipelines',
        'Migrate from Redshift/Teradata',
      ],
      codeFilename: 'Agent Definition\n                        Query Task\n                        bigquery_agent.py',
      code: `# bigquery_agent.py - BigQuery Platform Agent
from crewai import Agent, Task, Crew

bigquery_agent = Agent(
    role="BigQuery Solutions Architect",
    goal="Optimize BigQuery for cost and performance",
    backstory="""Expert in BigQuery, serverless 
    architecture, and GCP analytics. Deep knowledge 
    of partitioning, clustering, slot management, 
    BigQuery ML, and cost optimization.""",
    tools=[
        QueryOptimizer(),
        CostEstimator(),
        PartitionAdvisor(),
        BQMLBuilder(),
        SlotManager(),
    ]
)

optimization_task = Task(
    description="""
    1. Analyze query patterns and costs
    2. Identify partitioning opportunities
    3. Recommend clustering keys
    4. Optimize expensive queries
    5. Set up cost controls and quotas
    6. Create materialized views where beneficial
    7. Generate optimization report
    """,
    agent=bigquery_agent,
    expected_output="BigQuery optimization recommendations"
)

# Execute BigQuery optimization
crew = Crew(agents=[bigquery_agent], tasks=[optimization_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.4', title: 'Snowflake Platform', description: 'Compare with Snowflake\'s approach', slug: 'snowflake' },
      { number: 'Page 2.3', title: 'Databricks Platform', description: 'Lakehouse alternative on GCP', slug: 'databricks' },
      { number: 'Page 2.11', title: 'Streaming Platforms', description: 'Pub/Sub and Dataflow integration', slug: 'streaming' },
    ],
    prevPage: { title: '2.4 Snowflake Platform', slug: 'snowflake' },
    nextPage: { title: '2.6 Apache Spark', slug: 'apache-spark' },
  },
  {
    slug: 'apache-spark',
    badge: '⚡ Page 2.6',
    title: 'Apache Spark',
    description: 'Master the unified analytics engine for large-scale data processing. Learn Spark\'s distributed architecture, DataFrames API, Spark SQL, Structured Streaming, and MLlib for machine learning at scale.',
    accentColor: '#E25A1C',
    accentLight: '#FF7A45',
    metrics: [
      { value: '100x', label: 'Faster than MapReduce' },
      { value: '80%', label: 'Big Data Market Share' },
      { value: 'Python', label: 'Most Popular API' },
      { value: 'Open', label: 'Source (Apache 2.0)' },
    ],
    overview: {
      title: 'What is Apache Spark?',
      subtitle: 'The engine behind modern data platforms',
      subsections: [
        {
          heading: 'Unified Analytics Engine',
          paragraphs: [
            'Apache Spark is an open-source, distributed computing system designed for fast, general-purpose data processing. It provides high-level APIs in Python (PySpark), Scala, Java, and R, along with an optimized engine that supports general execution graphs. Spark powers batch processing, streaming, machine learning, and graph processing—all with a single, unified engine.',
          ],
        },
        {
          heading: 'From MapReduce to Spark',
          paragraphs: [
            'Spark was created at UC Berkeley in 2009 to address the limitations of Hadoop MapReduce. While MapReduce required writing data to disk after each operation, Spark keeps data in memory (when possible), enabling iterative algorithms to run up to 100x faster. Spark became an Apache project in 2013 and has since become the de facto standard for big data processing.',
          ],
        },
        {
          heading: 'The Engine Behind Everything',
          paragraphs: [
            'Today, Spark powers Databricks, runs on Amazon EMR, Google Dataproc, and Azure HDInsight, and is the compute engine for Delta Lake, Iceberg, and Hudi. Understanding Spark is essential for any data engineer working at scale—it\'s the foundation on which modern data platforms are built.',
          ],
        },
      ],
    },
    concepts: {
      title: 'DataFrames & Spark SQL',
      subtitle: 'The modern way to use Spark',
      columns: 2,
      cards: [
        {
          className: 'feature-0',
          borderColor: '#3B82F6',
          icon: '🔄',
          title: 'Lazy Evaluation',
          description: 'Transformations (filter, select, groupBy) are lazy—they build a DAG but don\'t execute. Actions (count, collect, write) trigger execution.',
          examples: ['Transformations: filter, select, join, groupBy', 'Actions: count, collect, show, write', 'Catalyst optimizer plans before execution'],
        },
        {
          className: 'feature-1',
          borderColor: '#10B981',
          icon: '💾',
          title: 'Caching & Persistence',
          description: 'Cache DataFrames that are reused multiple times. Choose storage level based on memory availability and fault tolerance needs.',
          examples: ['df.cache() — MEMORY_AND_DISK', 'df.persist(StorageLevel.MEMORY_ONLY)', 'df.unpersist() to free memory'],
        },
        {
          className: 'overview-2',
          borderColor: '#8B5CF6',
          icon: '📌',
          title: 'The Engine Behind Everything',
          description: 'Today, Spark powers Databricks, runs on Amazon EMR, Google Dataproc, and Azure HDInsight, and is the compute engine for Delta Lake, Iceberg, and Hudi. Understanding Spark is essential for any data eng',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Apache Spark',
          description: 'Master the unified analytics engine for large-scale data processing. Learn Spark\'s distributed architecture, DataFrames API, Spark SQL, Structured Streaming, and MLlib for machine learning at scale.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Spark APIs',
      subtitle: 'Unified libraries for every workload',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Abstraction', tagText: 'Low-level, functional transformations', tagClass: 'tag-blue', bestFor: 'Type-safe DataFrame', complexity: 'medium', rating: 'Table-like, columnar' },
        { icon: '🛠️', name: 'Optimization', tagText: 'None (manual)', tagClass: 'tag-green', bestFor: 'Catalyst optimizer', complexity: 'medium', rating: 'Catalyst optimizer' },
        { icon: '🛠️', name: 'Type Safety', tagText: 'Compile-time', tagClass: 'tag-purple', bestFor: 'Compile-time', complexity: 'medium', rating: 'Runtime only' },
        { icon: '🛠️', name: 'Use Case', tagText: 'Unstructured data, fine control', tagClass: 'tag-orange', bestFor: 'Type-safe applications', complexity: 'medium', rating: 'Structured/semi-structured' },
        { icon: '🛠️', name: 'Recommendation', tagText: 'Avoid (legacy)', tagClass: 'tag-pink', bestFor: 'When type safety needed', complexity: 'medium', rating: '✅ Default choice' },
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
      subtitle: 'Guidelines for Spark success',
      doItems: [
        'Use DataFrames/Spark SQL over RDDs for optimization',
        'Partition data appropriately (128MB-1GB per partition)',
        'Use broadcast joins for small tables (<10MB)',
        'Cache DataFrames that are reused multiple times',
        'Use columnar formats (Parquet, ORC) for storage',
        'Leverage predicate pushdown and partition pruning',
        'Monitor Spark UI for skew and spill',
        'Use adaptive query execution (AQE) in Spark 3.x',
      ],
      dontItems: [
        'Don\'t collect() large datasets to the driver',
        'Avoid UDFs when built-in functions exist (slower)',
        'Never use groupByKey—use reduceByKey or aggregations',
        'Don\'t over-partition (too many small files)',
        'Avoid cartesian joins (cross joins without conditions)',
        'Don\'t cache everything—only reused DataFrames',
        'Never ignore data skew—it kills performance',
        'Avoid nested data types when possible',
      ],
    },
    agent: {
      avatar: '⚡',
      name: 'SparkAgent',
      role: 'Distributed Computing Specialist',
      description: 'Expert in Apache Spark, distributed computing, and big data optimization. Specializes in query optimization, cluster tuning, data skew resolution, and migration from legacy big data systems.',
      capabilities: [
        'Optimize Spark jobs for performance',
        'Debug data skew and shuffle issues',
        'Design partitioning strategies',
        'Convert SQL to optimized DataFrames',
        'Tune cluster configuration',
        'Migrate from Hadoop MapReduce',
      ],
      codeFilename: 'Agent Definition\n                        Optimization Task\n                        spark_agent.py',
      code: `# spark_agent.py - Apache Spark Agent
from crewai import Agent, Task, Crew

spark_agent = Agent(
    role="Spark Performance Engineer",
    goal="Optimize Spark jobs for speed and cost",
    backstory="""Expert in Apache Spark internals, 
    distributed computing, and performance tuning. 
    Deep knowledge of Catalyst optimizer, tungsten 
    execution, shuffle operations, and cluster 
    resource management.""",
    tools=[
        SparkUIAnalyzer(),
        QueryPlanExplainer(),
        SkewDetector(),
        PartitionOptimizer(),
        ClusterTuner(),
    ]
)

optimization_task = Task(
    description="""
    1. Analyze Spark job execution plan
    2. Identify bottlenecks (skew, shuffle, spill)
    3. Recommend partitioning changes
    4. Optimize join strategies
    5. Tune executor/memory configuration
    6. Implement caching strategy
    7. Generate performance report
    """,
    agent=spark_agent,
    expected_output="Optimized Spark job configuration"
)

# Execute Spark optimization
crew = Crew(agents=[spark_agent], tasks=[optimization_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.3', title: 'Databricks Platform', description: 'Managed Spark with optimizations', slug: 'databricks' },
      { number: 'Page 2.11', title: 'Streaming Platforms', description: 'Spark Structured Streaming deep-dive', slug: 'streaming' },
      { number: 'Page 2.7', title: 'Orchestration', description: 'Schedule and manage Spark jobs', slug: 'orchestration' },
    ],
    prevPage: { title: '2.5 Google BigQuery', slug: 'bigquery' },
    nextPage: { title: '2.7 Orchestration Tools', slug: 'orchestration' },
  },
  {
    slug: 'orchestration',
    badge: '🎼 Page 2.7',
    title: 'Orchestration Tools',
    description: 'Master workflow orchestration for data pipelines. Learn Apache Airflow, Prefect, and Dagster—the tools that schedule, coordinate, and monitor your data workflows from ingestion to serving.',
    accentColor: '#017CEE',
    accentLight: '#4BA3F5',
    metrics: [
      { value: 'DAGs', label: 'Directed Acyclic Graphs' },
      { value: 'Airflow', label: 'Industry Standard' },
      { value: 'Python', label: 'Native Definitions' },
      { value: '24/7', label: 'Pipeline Monitoring' },
    ],
    overview: {
      title: 'What is Orchestration?',
      subtitle: 'Coordinating complex data workflows',
      subsections: [
        {
          heading: 'Beyond Cron Jobs',
          paragraphs: [
            'Data orchestration goes far beyond simple scheduling. Modern orchestrators manage complex dependencies between tasks, handle retries and failures gracefully, provide observability into pipeline health, and enable teams to build reliable, maintainable data workflows. They\'re the control plane for your entire data platform.',
          ],
        },
        {
          heading: 'The Orchestration Problem',
          paragraphs: [
            'As data pipelines grow, coordinating them becomes exponentially harder. Task A must complete before Task B starts. Task C depends on both A and B. Task D should only run on weekdays. Task E needs to retry 3 times before alerting. Orchestrators solve this complexity by defining workflows as code—typically as Directed Acyclic Graphs (DAGs).',
          ],
        },
        {
          heading: 'Modern Orchestration',
          paragraphs: [
            'Today\'s orchestrators are Python-native, cloud-aware, and designed for data teams. They integrate with dbt, Spark, Snowflake, and every major data tool. Whether you choose Airflow (the industry standard), Prefect (modern and flexible), or Dagster (software-defined assets), understanding orchestration is essential for production data engineering.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'Universal orchestration patterns',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📊',
          title: 'DAG',
          description: 'Directed Acyclic Graph. Tasks with dependencies, no cycles allowed.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📦',
          title: 'Task / Operator',
          description: 'A single unit of work: run SQL, call API, execute Python.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🔗',
          title: 'Dependencies',
          description: 'Task A >> Task B means B waits for A to complete.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📅',
          title: 'Schedule',
          description: 'When to run: cron expressions, intervals, or triggers.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Tool Comparison',
      subtitle: 'Choosing the right orchestrator',
      cards: [
        { icon: '🛠️', title: 'Paradigm', subtitle: 'Task-centric DAGs', description: 'Asset-centric', tags: ['Task-centric DAGs'] },
        { icon: '🛠️', title: 'Learning Curve', subtitle: 'Medium-High', description: 'Medium', tags: ['Medium-HighLowMedium'] },
        { icon: '🛠️', title: 'Dynamic Workflows', subtitle: 'Limited (TaskFlow API)', description: 'Good support', tags: ['Limited (TaskFlow API)'] },
        { icon: '🛠️', title: 'Testing', subtitle: 'Possible but complex', description: 'Excellent, built-in', tags: ['Possible but complex'] },
        { icon: '🛠️', title: 'Managed Options', subtitle: 'MWAA, Composer, Astronomer', description: 'Dagster Cloud', tags: ['MWAA, Composer, Astronomer'] },
        { icon: '🛠️', title: 'Best For', subtitle: 'Enterprise, complex DAGs', description: 'Data-centric orgs', tags: ['Enterprise, complex DAGs'] },
      ],
    },
    tools: {
      title: 'Major Orchestration Tools',
      subtitle: 'The leading platforms',
      items: [
        { icon: '🌪️', name: 'Apache Airflow', vendor: '', description: 'The industry-standard orchestrator. Battle-tested at thousands of companies. Massive ecosystem of operators and integrations.', tags: ['Open Source', 'Production Ready', 'Enterprise'] },
        { icon: '🔷', name: 'Prefect', vendor: '', description: 'Modern, Pythonic orchestration. Simpler than Airflow with native async support and dynamic workflows.', tags: ['Open Source', 'Cloud Native', 'Developer Friendly'] },
        { icon: '🔶', name: 'Dagster', vendor: '', description: 'Asset-centric orchestration. Define what you want to produce, not just how to run tasks.', tags: ['Open Source', 'Asset-Centric', 'Type-Safe'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for orchestration success',
      doItems: [
        'Keep tasks atomic and idempotent (safe to re-run)',
        'Use templating for dates and parameters',
        'Implement proper error handling and retries',
        'Set up alerting for failed tasks',
        'Version control your DAGs alongside code',
        'Use connection/secret management (not hardcoded)',
        'Document your DAGs with descriptions and tags',
        'Test DAGs before deploying to production',
      ],
      dontItems: [
        'Don\'t put heavy processing in the orchestrator itself',
        'Avoid passing large data between tasks (use external storage)',
        'Never hardcode credentials in DAG files',
        'Don\'t create overly complex single DAGs—break them up',
        'Avoid catchup=True without understanding implications',
        'Don\'t ignore task SLAs and monitoring',
        'Never skip backfill testing for time-sensitive pipelines',
        'Avoid circular dependencies (impossible in DAGs anyway)',
      ],
    },
    agent: {
      avatar: '🎼',
      name: 'OrchestrationAgent',
      role: 'Workflow Automation Specialist',
      description: 'Expert in data pipeline orchestration, workflow design, and operational excellence. Specializes in Airflow, Prefect, Dagster, and best practices for reliable, maintainable data workflows.',
      capabilities: [
        'Design DAG architectures',
        'Debug failing pipelines',
        'Optimize task dependencies',
        'Set up monitoring and alerting',
        'Migrate between orchestrators',
        'Implement CI/CD for DAGs',
      ],
      codeFilename: 'Agent Definition\n                        Pipeline Task\n                        orchestration_agent.py',
      code: `# orchestration_agent.py - Orchestration Agent
from crewai import Agent, Task, Crew

orchestration_agent = Agent(
    role="Data Pipeline Architect",
    goal="Design reliable, maintainable pipelines",
    backstory="""Expert in workflow orchestration, 
    specializing in Airflow, Prefect, and Dagster. 
    Deep knowledge of DAG design, dependency 
    management, error handling, and operational 
    best practices for data pipelines.""",
    tools=[
        DAGDesigner(),
        DependencyAnalyzer(),
        FailureDebugger(),
        ScheduleOptimizer(),
        AlertConfigurer(),
    ]
)

pipeline_task = Task(
    description="""
    1. Analyze pipeline requirements
    2. Design DAG structure and dependencies
    3. Implement error handling and retries
    4. Configure monitoring and alerts
    5. Set up SLAs and notifications
    6. Document the pipeline
    7. Create deployment plan
    """,
    agent=orchestration_agent,
    expected_output="Production-ready pipeline design"
)

# Execute pipeline design
crew = Crew(agents=[orchestration_agent], tasks=[pipeline_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.2', title: 'Data Transformation', description: 'Orchestrate dbt with Airflow', slug: 'data-transformation' },
      { number: 'Page 2.9', title: 'Data Observability', description: 'Monitor your orchestrated pipelines', slug: 'observability' },
      { number: 'Page 2.8', title: 'Data Quality', description: 'Quality checks in pipelines', slug: 'data-quality' },
    ],
    prevPage: { title: '2.6 Apache Spark', slug: 'apache-spark' },
    nextPage: { title: '2.8 Data Quality', slug: 'data-quality' },
  },
  {
    slug: 'data-quality',
    badge: '✅ Page 2.8',
    title: 'Data Quality',
    description: 'Master data quality testing and validation. Learn Great Expectations, Soda, and dbt tests—the tools and frameworks that ensure your data is accurate, complete, consistent, and trustworthy.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '6', label: 'Quality Dimensions' },
      { value: 'GX', label: 'Great Expectations' },
      { value: 'Shift', label: 'Left Testing' },
      { value: 'Trust', label: 'Data Contracts' },
    ],
    overview: {
      title: 'What is Data Quality?',
      subtitle: 'The foundation of data trust',
      subsections: [
        {
          heading: 'Beyond "Garbage In, Garbage Out"',
          paragraphs: [
            'Data quality is the degree to which data meets the requirements of its intended use. Poor quality data leads to incorrect insights, flawed ML models, compliance violations, and eroded trust. In a world of AI and analytics, data quality isn\'t optional—it\'s the foundation everything else depends on.',
          ],
        },
        {
          heading: 'Shift Left: Test Early, Test Often',
          paragraphs: [
            'Modern data quality embraces "shift left" testing—catching issues as early as possible in the pipeline rather than discovering them in dashboards or ML predictions. Just as software engineering adopted unit testing, data engineering now embeds quality checks throughout the data lifecycle.',
          ],
        },
        {
          heading: 'Data Contracts & Trust',
          paragraphs: [
            'Data contracts define expectations between data producers and consumers. They specify what quality guarantees a dataset provides—schema, freshness, completeness, and more. When combined with automated testing, contracts create accountability and trust across the data ecosystem.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Quality Dimensions',
      subtitle: 'The six pillars of data quality',
      columns: 2,
      cards: [
        {
          className: 'dimension-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'Accuracy',
          description: 'Data correctly represents the real-world entity or event it describes',
          examples: [],
        },
        {
          className: 'dimension-1',
          borderColor: '#10B981',
          icon: '📦',
          title: 'Completeness',
          description: 'All required data is present with no missing values or records',
          examples: [],
        },
        {
          className: 'dimension-2',
          borderColor: '#8B5CF6',
          icon: '🔄',
          title: 'Consistency',
          description: 'Data is uniform across systems and doesn\'t contradict itself',
          examples: [],
        },
        {
          className: 'dimension-3',
          borderColor: '#F59E0B',
          icon: '⏰',
          title: 'Timeliness',
          description: 'Data is available when needed and reflects current state',
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
        { icon: '📌', title: 'What is Data Quality?', subtitle: '', description: 'The foundation of data trust', tags: [] },
        { icon: '📌', title: 'Quality Dimensions', subtitle: '', description: 'The six pillars of data quality', tags: [] },
        { icon: '📌', title: 'Data Quality Tools', subtitle: '', description: 'The leading platforms', tags: [] },
        { icon: '📌', title: 'Testing Types', subtitle: '', description: 'Different tests for different needs', tags: [] },
        { icon: '📌', title: 'Great Expectations', subtitle: '', description: 'Python-based data validation', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for data quality success', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for data quality', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
      ],
    },
    tools: {
      title: 'Data Quality Tools',
      subtitle: 'The leading platforms',
      items: [
        { icon: '📊', name: 'Great Expectations', vendor: '', description: 'Python-based data validation framework. Define expectations as code, generate docs, integrate with pipelines.', tags: [] },
        { icon: '🧪', name: 'Soda', vendor: '', description: 'YAML-based data quality with SodaCL. Simple syntax, powerful checks, Soda Cloud for visibility.', tags: [] },
        { icon: '🔶', name: 'dbt Tests', vendor: '', description: 'Native testing in dbt. Schema tests, data tests, and custom tests as part of transformation.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for data quality success',
      doItems: [
        'Test at every stage: ingestion, transformation, serving',
        'Start with critical tables and expand coverage over time',
        'Use data contracts between producers and consumers',
        'Alert on failures but avoid alert fatigue',
        'Document expectations and share quality reports',
        'Version control your test suites alongside code',
        'Monitor quality metrics over time for trends',
        'Automate quality checks in CI/CD pipelines',
      ],
      dontItems: [
        'Don\'t test everything—focus on business-critical data',
        'Avoid hardcoded thresholds without business context',
        'Never ignore failing tests—fix or adjust expectations',
        'Don\'t skip freshness checks on time-sensitive data',
        'Avoid running quality checks only in production',
        'Don\'t treat data quality as a one-time project',
        'Never blame data producers—collaborate on solutions',
        'Avoid quality checks that can\'t be explained to stakeholders',
      ],
    },
    agent: {
      avatar: '✅',
      name: 'DataQualityAgent',
      role: 'Quality Engineering Specialist',
      description: 'Expert in data quality frameworks, testing strategies, and validation tooling. Specializes in Great Expectations, Soda, dbt tests, and building comprehensive quality programs.',
      capabilities: [
        'Design quality test suites',
        'Implement Great Expectations',
        'Set up quality monitoring',
        'Create data contracts',
        'Debug quality failures',
        'Build quality dashboards',
      ],
      codeFilename: 'Agent Definition\n                        Quality Task\n                        quality_agent.py',
      code: `# quality_agent.py - Data Quality Agent
from crewai import Agent, Task, Crew

quality_agent = Agent(
    role="Data Quality Engineer",
    goal="Ensure data is accurate and trustworthy",
    backstory="""Expert in data quality frameworks 
    including Great Expectations, Soda, and dbt 
    tests. Deep knowledge of quality dimensions, 
    testing strategies, data contracts, and 
    building trust in data systems.""",
    tools=[
        ExpectationBuilder(),
        QualityAnalyzer(),
        ContractGenerator(),
        AnomalyDetector(),
        ReportBuilder(),
    ]
)

quality_task = Task(
    description="""
    1. Profile data to understand distributions
    2. Identify critical quality dimensions
    3. Design comprehensive test suite
    4. Implement expectations in GX/Soda
    5. Set up alerting and monitoring
    6. Create quality documentation
    7. Build stakeholder dashboard
    """,
    agent=quality_agent,
    expected_output="Complete data quality program"
)

# Execute quality implementation
crew = Crew(agents=[quality_agent], tasks=[quality_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.9', title: 'Data Observability', description: 'Monitor quality continuously', slug: 'observability' },
      { number: 'Page 2.2', title: 'Data Transformation', description: 'dbt tests and quality', slug: 'data-transformation' },
      { number: 'Page 2.7', title: 'Orchestration', description: 'Quality checks in pipelines', slug: 'orchestration' },
    ],
    prevPage: { title: '2.7 Orchestration Tools', slug: 'orchestration' },
    nextPage: { title: '2.9 Data Observability', slug: 'observability' },
  },
  {
    slug: 'observability',
    badge: '👁️ Page 2.9',
    title: 'Data Observability',
    description: 'Master continuous monitoring for data health. Learn the five pillars of data observability, implement lineage tracking, anomaly detection, and build trust through transparency in your data systems.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '5', label: 'Pillars of Observability' },
      { value: 'MTTD', label: 'Mean Time to Detect' },
      { value: 'Lineage', label: 'End-to-End Tracking' },
      { value: 'ML', label: 'Anomaly Detection' },
    ],
    overview: {
      title: 'What is Data Observability?',
      subtitle: 'Understanding your data health at all times',
      subsections: [
        {
          heading: 'From Application to Data Observability',
          paragraphs: [
            'Just as application observability (logs, metrics, traces) revolutionized DevOps, data observability brings the same visibility to data systems. It\'s the ability to understand, diagnose, and manage data health across your entire data stack—from ingestion through transformation to consumption.',
          ],
        },
        {
          heading: 'Proactive vs Reactive',
          paragraphs: [
            'Without observability, data teams discover issues when stakeholders complain: "The dashboard numbers look wrong." With observability, you detect anomalies before they impact downstream systems. The goal is to minimize Mean Time to Detect (MTTD) and Mean Time to Resolution (MTTR) for data incidents.',
          ],
        },
        {
          heading: 'Trust Through Transparency',
          paragraphs: [
            'Data observability builds trust. When stakeholders can see data lineage, freshness indicators, and quality scores, they understand what they\'re working with. When issues occur, root cause analysis becomes straightforward—you can trace problems back through the pipeline to their source.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Five Pillars of Data Observability',
      subtitle: 'The complete picture of data health',
      columns: 2,
      cards: [
        {
          className: 'pillar-0',
          borderColor: '#3B82F6',
          icon: '⏰',
          title: 'Freshness',
          description: 'Is my data up to date? How old is the most recent record?',
          examples: [],
        },
        {
          className: 'pillar-1',
          borderColor: '#10B981',
          icon: '📊',
          title: 'Volume',
          description: 'Did the expected amount of data arrive? Any unexpected spikes or drops?',
          examples: [],
        },
        {
          className: 'pillar-2',
          borderColor: '#8B5CF6',
          icon: '📋',
          title: 'Schema',
          description: 'Has the structure changed? New columns, type changes, or removals?',
          examples: [],
        },
        {
          className: 'pillar-3',
          borderColor: '#F59E0B',
          icon: '📈',
          title: 'Distribution',
          description: 'Are values within expected ranges? Any unusual patterns?',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Observability Platforms',
      subtitle: 'The leading tools in the space',
      cards: [
        { icon: '🛠️', title: 'Approach', subtitle: 'ML-first, automatic', description: 'Multi-layer platform', tags: ['ML-first, automatic'] },
        { icon: '🛠️', title: 'Setup', subtitle: 'No-code', description: 'Configuration', tags: ['No-codeLow-codeConfiguration'] },
        { icon: '🛠️', title: 'Lineage', subtitle: 'Automatic', description: 'Comprehensive', tags: ['AutomaticBasicComprehensive'] },
        { icon: '🛠️', title: 'Best For', subtitle: 'Modern data stacks', description: 'Enterprise/Hadoop', tags: ['Modern data stacks'] },
        { icon: '📌', title: 'Data Observability', subtitle: '', description: 'Master continuous monitoring for data health. Learn the five pillars of data observability, implement lineage tracking, anomaly detection, and build t', tags: [] },
        { icon: '📌', title: 'Data Observability', subtitle: '', description: 'Master continuous monitoring for data health. Learn the five pillars of data observability, implement lineage tracking, anomaly detection, and build t', tags: [] },
      ],
    },
    tools: {
      title: 'Observability Platforms',
      subtitle: 'The leading tools in the space',
      items: [
        { icon: '🔮', name: 'Monte Carlo', vendor: '', description: 'Pioneered the data observability category. ML-powered anomaly detection with no-code setup and automatic lineage.', tags: [] },
        { icon: '🔷', name: 'Bigeye', vendor: '', description: 'Automated data quality monitoring with smart thresholds. Strong focus on metrics and SLAs.', tags: [] },
        { icon: '⚡', name: 'Acceldata', vendor: '', description: 'Enterprise-focused observability covering data, compute, and pipeline health together.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for observability success',
      doItems: [
        'Start with your most critical tables and expand coverage',
        'Set up lineage tracking early—it\'s harder to add later',
        'Define SLAs for data freshness and communicate them',
        'Route alerts to owners who can take action',
        'Create runbooks for common incident types',
        'Track MTTD and MTTR metrics to improve over time',
        'Integrate observability with your incident management process',
        'Use observability data to inform data contracts',
      ],
      dontItems: [
        'Don\'t alert on everything—focus on business-critical data',
        'Avoid static thresholds that don\'t account for patterns',
        'Never ignore alerts—triage or tune them',
        'Don\'t skip root cause analysis after incidents',
        'Avoid siloed observability—connect data and pipeline health',
        'Don\'t treat observability as set-and-forget',
        'Never expose sensitive lineage without access controls',
        'Avoid manual monitoring that doesn\'t scale',
      ],
    },
    agent: {
      avatar: '👁️',
      name: 'ObservabilityAgent',
      role: 'Data Reliability Specialist',
      description: 'Expert in data observability platforms, anomaly detection, lineage tracking, and incident management. Specializes in building proactive monitoring systems that catch issues before they impact stakeholders.',
      capabilities: [
        'Design observability strategy',
        'Configure anomaly detection',
        'Build lineage tracking',
        'Set up alerting workflows',
        'Create incident runbooks',
        'Optimize MTTD/MTTR',
      ],
      codeFilename: 'Agent Definition\n                        Monitoring Task\n                        observability_agent.py',
      code: `# observability_agent.py - Data Observability Agent
from crewai import Agent, Task, Crew

observability_agent = Agent(
    role="Data Reliability Engineer",
    goal="Proactive monitoring of data health",
    backstory="""Expert in data observability platforms 
    including Monte Carlo, Bigeye, and custom 
    solutions. Deep knowledge of anomaly detection, 
    lineage tracking, incident management, and 
    building reliable data systems.""",
    tools=[
        AnomalyDetector(),
        LineageMapper(),
        AlertConfigurer(),
        IncidentManager(),
        SLATracker(),
    ]
)

monitoring_task = Task(
    description="""
    1. Inventory critical data assets
    2. Map end-to-end lineage
    3. Configure freshness monitors
    4. Set up volume anomaly detection
    5. Create schema change alerts
    6. Define escalation paths
    7. Build observability dashboard
    """,
    agent=observability_agent,
    expected_output="Complete observability implementation"
)

# Execute observability setup
crew = Crew(agents=[observability_agent], tasks=[monitoring_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.8', title: 'Data Quality', description: 'Testing complements monitoring', slug: 'data-quality' },
      { number: 'Page 2.10', title: 'Data Catalogs', description: 'Discovery and governance', slug: 'data-catalogs' },
      { number: 'Page 2.7', title: 'Orchestration', description: 'Pipeline monitoring', slug: 'orchestration' },
    ],
    prevPage: { title: '2.8 Data Quality', slug: 'data-quality' },
    nextPage: { title: '2.10 Data Catalogs', slug: 'data-catalogs' },
  },
  {
    slug: 'data-catalogs',
    badge: '📚 Page 2.10',
    title: 'Data Catalogs',
    description: 'Master metadata management and data discovery. Learn how data catalogs enable discoverability, governance, and collaboration through centralized metadata, lineage tracking, and business glossaries.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'Discovery', label: 'Find Data Quickly' },
      { value: 'Lineage', label: 'Track Data Flow' },
      { value: 'Governance', label: 'Control Access' },
      { value: 'Trust', label: 'Document Quality' },
    ],
    overview: {
      title: 'What is a Data Catalog?',
      subtitle: 'The searchable inventory of your data assets',
      subsections: [
        {
          heading: 'The Problem of Data Discovery',
          paragraphs: [
            'As organizations grow, finding the right data becomes increasingly difficult. Teams waste hours searching for datasets, recreating analyses that already exist, or using the wrong data for decisions. A data catalog solves this by creating a searchable inventory of all data assets with metadata, documentation, and usage patterns.',
          ],
        },
        {
          heading: 'More Than a Search Engine',
          paragraphs: [
            'Modern data catalogs do much more than enable search. They track data lineage (where data comes from and where it goes), manage business glossaries (what terms mean), enforce governance policies (who can access what), and surface data quality information. They\'re the single source of truth about your data.',
          ],
        },
        {
          heading: 'Enabling Self-Service',
          paragraphs: [
            'A well-implemented catalog enables true self-service analytics. Business users can discover relevant datasets without asking the data team, understand what data means through business context, and trust data through quality metrics—all without filing tickets or waiting for responses.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Features',
      subtitle: 'What catalogs provide',
      columns: 2,
      cards: [
        {
          className: 'feature-0',
          borderColor: '#3B82F6',
          icon: '🔍',
          title: 'Discovery',
          description: 'Search across all data assets by name, description, or metadata',
          examples: [],
        },
        {
          className: 'feature-1',
          borderColor: '#10B981',
          icon: '🔗',
          title: 'Lineage',
          description: 'Visualize upstream sources and downstream dependencies',
          examples: [],
        },
        {
          className: 'feature-2',
          borderColor: '#8B5CF6',
          icon: '📋',
          title: 'Documentation',
          description: 'Descriptions, owners, and business context for assets',
          examples: [],
        },
        {
          className: 'feature-3',
          borderColor: '#F59E0B',
          icon: '📖',
          title: 'Glossary',
          description: 'Business terms and definitions linked to data',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Catalog Tools',
      subtitle: 'Leading platforms',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Databricks Unity Catalog', tagText: 'Yes', tagClass: 'tag-blue', bestFor: 'Native governance, lineage, fine-grained access control', complexity: 'medium', rating: 'Native governance, lineage, fine-grained access control' },
        { icon: '🛠️', name: 'Snowflake Horizon', tagText: 'Yes', tagClass: 'tag-green', bestFor: 'Data sharing, marketplace, built-in classification', complexity: 'medium', rating: 'Data sharing, marketplace, built-in classification' },
        { icon: '🔍', name: 'Google Data Catalog', tagText: 'Yes', tagClass: 'tag-purple', bestFor: 'GCP native, automatic discovery, tag templates', complexity: 'medium', rating: 'GCP native, automatic discovery, tag templates' },
        { icon: '📦', name: 'AWS Glue Data Catalog', tagText: 'Yes', tagClass: 'tag-orange', bestFor: 'Hive-compatible, Athena/Redshift integration', complexity: 'medium', rating: 'Hive-compatible, Athena/Redshift integration' },
      ],
    },
    tools: {
      title: 'Catalog Tools',
      subtitle: 'Leading platforms',
      items: [
        { icon: '🔵', name: 'Atlan', vendor: '', description: 'Active metadata platform with strong collaboration features. Modern UI, automated lineage, and deep integrations with the modern data stack.', tags: [] },
        { icon: '🟣', name: 'Alation', vendor: '', description: 'Enterprise-grade catalog with strong governance capabilities. ML-powered recommendations and wide data source support.', tags: [] },
        { icon: '🔷', name: 'Collibra', vendor: '', description: 'Enterprise data intelligence platform. Strong in data governance, stewardship workflows, and regulatory compliance.', tags: [] },
        { icon: '🟢', name: 'DataHub', vendor: '', description: 'Open-source metadata platform from LinkedIn. Extensible architecture, active community, and growing ecosystem.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for catalog success',
      doItems: [
        'Start with high-value, high-use datasets',
        'Automate metadata extraction where possible',
        'Assign clear data owners and stewards',
        'Create and maintain a business glossary',
        'Integrate lineage from dbt, orchestration tools',
        'Link quality scores to catalog entries',
        'Enable user contributions (ratings, comments)',
        'Track and promote catalog adoption metrics',
      ],
      dontItems: [
        'Don\'t try to catalog everything at once',
        'Avoid relying solely on manual documentation',
        'Never let documentation become stale',
        'Don\'t skip ownership assignment',
        'Avoid catalogs that live separately from workflows',
        'Don\'t ignore user adoption and feedback',
        'Never treat cataloging as a one-time project',
        'Don\'t forget to measure ROI of catalog investment',
      ],
    },
    agent: {
      avatar: '📚',
      name: 'CatalogAgent',
      role: 'Metadata Management Specialist',
      description: 'Expert in data catalogs, metadata management, and data governance. Specializes in catalog implementation, lineage mapping, and building self-service data discovery programs.',
      capabilities: [
        'Design catalog architecture',
        'Create business glossaries',
        'Map data lineage',
        'Set up ownership frameworks',
        'Integrate with data quality tools',
        'Drive catalog adoption',
      ],
      codeFilename: 'Agent Definition\n                        Catalog Task\n                        catalog_agent.py',
      code: `# catalog_agent.py - Data Catalog Agent
from crewai import Agent, Task, Crew

catalog_agent = Agent(
    role="Data Catalog Architect",
    goal="Enable data discovery and governance",
    backstory="""Expert in data catalogs including 
    Atlan, Alation, and DataHub. Deep knowledge 
    of metadata management, lineage tracking, 
    business glossaries, and driving catalog 
    adoption across organizations.""",
    tools=[
        MetadataExtractor(),
        LineageMapper(),
        GlossaryBuilder(),
        OwnershipAssigner(),
        QualityIntegrator(),
        AdoptionTracker(),
    ]
)

catalog_task = Task(
    description="""
    1. Inventory high-value data assets
    2. Extract technical metadata
    3. Document business context
    4. Map data lineage
    5. Create business glossary
    6. Assign data owners
    7. Integrate quality scores
    8. Launch discovery portal
    """,
    agent=catalog_agent,
    expected_output="Comprehensive data catalog setup"
)

# Execute catalog implementation
crew = Crew(agents=[catalog_agent], tasks=[catalog_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.9', title: 'Data Observability', description: 'Lineage complements monitoring', slug: 'observability' },
      { number: 'Page 2.8', title: 'Data Quality', description: 'Surface quality in catalog', slug: 'data-quality' },
      { number: 'Page 2.3', title: 'Databricks', description: 'Unity Catalog governance', slug: 'databricks' },
    ],
    prevPage: { title: '2.9 Data Observability', slug: 'observability' },
    nextPage: { title: '2.11 Streaming Platforms', slug: 'streaming' },
  },
  {
    slug: 'streaming',
    badge: '🌊 Page 2.11',
    title: 'Streaming Platforms',
    description: 'Master real-time data processing. Learn Apache Kafka, event streaming architectures, and stream processing engines like Spark Streaming and Flink for building low-latency data pipelines.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: 'Kafka', label: 'Industry Standard' },
      { value: 'ms', label: 'Latency Target' },
      { value: 'Events', label: 'Not Batches' },
      { value: '24/7', label: 'Continuous Processing' },
    ],
    overview: {
      title: 'What is Streaming?',
      subtitle: 'Processing data as it arrives',
      subsections: [
        {
          heading: 'From Batch to Real-Time',
          paragraphs: [
            'Traditional data processing works in batches—collect data, then process it later. Streaming inverts this: process data continuously as it arrives. This enables real-time analytics, instant alerts, live dashboards, and event-driven architectures that respond to business events in milliseconds, not hours.',
          ],
        },
        {
          heading: 'Event-Driven Architecture',
          paragraphs: [
            'Streaming platforms are the backbone of event-driven systems. Instead of systems polling databases for changes, events flow through a central stream (like Kafka). Producers publish events, consumers subscribe to streams they care about. This decouples systems, enables scalability, and creates a real-time nervous system for your organization.',
          ],
        },
        {
          heading: 'Stream vs Batch',
          paragraphs: [
            'Streaming isn\'t a replacement for batch processing—it\'s complementary. Many architectures use both: streaming for real-time needs (fraud detection, live metrics) and batch for heavy analytics (ML training, historical reports). The Lambda and Kappa architectures formalize these patterns.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'Streaming fundamentals',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📝',
          title: 'Topics & Partitions',
          description: 'Topics are named streams. Partitions enable parallelism and ordering within a key. Messages with same key go to same partition.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📤',
          title: 'Producers',
          description: 'Applications that publish messages to topics. Choose partition by key or round-robin. Batching improves throughput.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📥',
          title: 'Consumers',
          description: 'Applications that read from topics. Consumer groups enable parallel processing with each partition assigned to one consumer.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: 'Offsets',
          description: 'Position markers for consumers. Enable exactly-once processing when committed correctly. Can replay by resetting offset.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Stream Processing',
      subtitle: 'Processing engines for streams',
      cards: [
        { icon: '⚡', title: 'Spark Structured Streaming', subtitle: 'Unified batch + stream', description: 'Same DataFrame API as batch', tags: ['~100ms'] },
        { icon: '🛠️', title: 'Apache Flink', subtitle: 'True real-time, complex events', description: 'Event time processing, CEP', tags: ['<10ms'] },
        { icon: '🛠️', title: 'ksqlDB', subtitle: 'SQL on Kafka', description: 'Pure SQL, no code required', tags: ['<10ms'] },
        { icon: '🔍', title: 'Google Dataflow', subtitle: 'GCP streaming', description: 'Apache Beam, serverless', tags: ['~100ms'] },
        { icon: '📌', title: 'Streaming Platforms', subtitle: '', description: 'Master real-time data processing. Learn Apache Kafka, event streaming architectures, and stream processing engines like Spark Streaming and Flink for', tags: [] },
        { icon: '📌', title: 'Streaming Platforms', subtitle: '', description: 'Master real-time data processing. Learn Apache Kafka, event streaming architectures, and stream processing engines like Spark Streaming and Flink for', tags: [] },
      ],
    },
    tools: {
      title: 'Streaming Platforms',
      subtitle: 'Message brokers and event systems',
      items: [
        { icon: '📨', name: 'Apache Kafka', vendor: '', description: 'The industry standard for event streaming. Distributed, fault-tolerant, high-throughput. Powers LinkedIn, Netflix, Uber, and thousands of organizations.', tags: [] },
        { icon: '🌐', name: 'Confluent Cloud', vendor: '', description: 'Fully managed Kafka by the creators of Kafka. Includes Schema Registry, ksqlDB, and Kafka Connect in a serverless package.', tags: [] },
        { icon: '☁️', name: 'Amazon Kinesis', vendor: '', description: 'AWS\'s managed streaming service. Deeply integrated with the AWS ecosystem. Kinesis Data Streams, Firehose, and Analytics.', tags: [] },
        { icon: '🔔', name: 'Google Pub/Sub', vendor: '', description: 'Google\'s serverless messaging service. Global scale, at-least-once delivery, native Dataflow integration for processing.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for streaming success',
      doItems: [
        'Use schemas (Avro/Protobuf) for message structure',
        'Design for idempotency—messages may be redelivered',
        'Partition by key for ordering and parallelism',
        'Set appropriate retention based on replay needs',
        'Monitor consumer lag closely',
        'Use exactly-once semantics where supported',
        'Implement dead letter queues for failed messages',
        'Size partitions for expected throughput',
      ],
      dontItems: [
        'Don\'t send large messages (keep under 1MB)',
        'Avoid too many partitions (management overhead)',
        'Never rely on message ordering across partitions',
        'Don\'t ignore backpressure signals',
        'Avoid synchronous processing in hot paths',
        'Never commit offsets before processing completes',
        'Don\'t use streaming for everything—batch is simpler',
        'Avoid tight coupling between producers and consumers',
      ],
    },
    agent: {
      avatar: '🌊',
      name: 'StreamingAgent',
      role: 'Real-Time Data Specialist',
      description: 'Expert in event streaming platforms, real-time architectures, and stream processing. Specializes in Kafka, Flink, Spark Streaming, and building low-latency data pipelines.',
      capabilities: [
        'Design streaming architectures',
        'Configure Kafka clusters',
        'Build stream processing jobs',
        'Optimize throughput and latency',
        'Debug consumer lag issues',
        'Implement exactly-once semantics',
      ],
      codeFilename: 'Agent Definition\n                        Streaming Task\n                        streaming_agent.py',
      code: `# streaming_agent.py - Streaming Platform Agent
from crewai import Agent, Task, Crew

streaming_agent = Agent(
    role="Streaming Platform Architect",
    goal="Build reliable real-time data systems",
    backstory="""Expert in event streaming platforms 
    including Kafka, Kinesis, and Pub/Sub. Deep 
    knowledge of stream processing with Flink, 
    Spark Streaming, and ksqlDB. Experienced in 
    building low-latency, high-throughput systems.""",
    tools=[
        KafkaConfigurator(),
        PartitionPlanner(),
        StreamProcessor(),
        LagMonitor(),
        SchemaDesigner(),
    ]
)

streaming_task = Task(
    description="""
    1. Design topic and partition structure
    2. Configure producer/consumer settings
    3. Set up Schema Registry
    4. Build stream processing logic
    5. Configure checkpointing
    6. Set up monitoring and alerts
    7. Implement dead letter handling
    """,
    agent=streaming_agent,
    expected_output="Production streaming pipeline"
)

# Execute streaming setup
crew = Crew(agents=[streaming_agent], tasks=[streaming_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.6', title: 'Apache Spark', description: 'Structured Streaming deep-dive', slug: 'apache-spark' },
      { number: 'Page 2.1', title: 'Data Ingestion', description: 'Streaming ingestion patterns', slug: 'data-ingestion' },
      { number: 'Page 2.3', title: 'Databricks', description: 'Delta Live Tables streaming', slug: 'databricks' },
    ],
    prevPage: { title: '2.10 Data Catalogs', slug: 'data-catalogs' },
    nextPage: { title: '2.12 Reverse ETL', slug: 'reverse-etl' },
  },
  {
    slug: 'reverse-etl',
    badge: '↩️ Page 2.12',
    title: 'Reverse ETL',
    description: 'Operationalize your data warehouse. Learn how Reverse ETL activates analytics by syncing transformed data from your warehouse to operational tools like Salesforce, HubSpot, and advertising platforms.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: 'Activate', label: 'Warehouse Data' },
      { value: 'Sync', label: 'To Business Tools' },
      { value: 'No Code', label: 'Configuration' },
      { value: '360°', label: 'Customer View' },
    ],
    overview: {
      title: 'What is Reverse ETL?',
      subtitle: 'Completing the data loop',
      subsections: [
        {
          heading: 'The Last Mile of Data',
          paragraphs: [
            'Traditional ETL moves data from operational systems into the warehouse for analysis. Reverse ETL completes the loop—it takes transformed, enriched data from your warehouse and syncs it back to the operational tools where business users work. Your warehouse becomes not just a place for reports, but the source of truth that powers your entire business.',
          ],
        },
        {
          heading: 'Why Reverse ETL Emerged',
          paragraphs: [
            'As data warehouses became powerful and affordable (thanks to Snowflake, BigQuery, Databricks), companies started centralizing all their data there. But business users don\'t work in the warehouse—they work in Salesforce, HubSpot, Zendesk. Reverse ETL bridges this gap, putting rich analytics data directly into the tools where decisions happen.',
          ],
        },
        {
          heading: 'Data Activation',
          paragraphs: [
            'Reverse ETL is often called "data activation" because it transforms passive analytics into active business processes. Lead scores appear in Salesforce. Churn predictions show up in customer success tools. Audience segments sync to ad platforms. The insights that used to live in dashboards now drive action.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Use Cases',
      subtitle: 'How teams use Reverse ETL',
      columns: 2,
      cards: [
        {
          className: 'usecase-0',
          borderColor: '#3B82F6',
          icon: '💰',
          title: 'Sales Enrichment',
          description: 'Sync lead scores, product usage data, and customer health metrics directly to Salesforce records.',
          examples: [],
        },
        {
          className: 'usecase-1',
          borderColor: '#10B981',
          icon: '📣',
          title: 'Audience Sync',
          description: 'Push audience segments from your warehouse to advertising platforms for targeted campaigns.',
          examples: [],
        },
        {
          className: 'usecase-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: 'Marketing Personalization',
          description: 'Sync customer attributes and segments to email/marketing platforms for personalized campaigns.',
          examples: [],
        },
        {
          className: 'usecase-3',
          borderColor: '#F59E0B',
          icon: '🛎️',
          title: 'Customer Success',
          description: 'Surface health scores, usage trends, and churn predictions in CS tools.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Common Destinations',
      subtitle: 'Where data gets activated',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Upsert', tagText: 'Most common', tagClass: 'tag-blue', bestFor: 'Most common', complexity: 'medium', rating: 'Most common' },
        { icon: '🛠️', name: 'Mirror', tagText: 'Audience sync', tagClass: 'tag-green', bestFor: 'Audience sync', complexity: 'medium', rating: 'Audience sync' },
        { icon: '🛠️', name: 'Append', tagText: 'Event logs', tagClass: 'tag-purple', bestFor: 'Event logs', complexity: 'medium', rating: 'Event logs' },
        { icon: '🛠️', name: 'Update Only', tagText: 'Enrichment', tagClass: 'tag-orange', bestFor: 'Enrichment', complexity: 'medium', rating: 'Enrichment' },
      ],
    },
    tools: {
      title: 'Reverse ETL Tools',
      subtitle: 'Leading platforms',
      items: [
        { icon: '📊', name: 'Census', vendor: '', description: 'Leading Reverse ETL platform. Strong dbt integration, live syncs, and comprehensive destination catalog.', tags: [] },
        { icon: '⚡', name: 'Hightouch', vendor: '', description: 'Comprehensive Reverse ETL with strong Customer Studio for non-technical users to build audiences.', tags: [] },
        { icon: '🔷', name: 'Rudderstack', vendor: '', description: 'Full CDP with Reverse ETL capabilities. Open-source option available. Strong event streaming.', tags: [] },
        { icon: '🔄', name: 'Polytomic', vendor: '', description: 'Bi-directional sync platform. Strong for complex sync scenarios and multi-destination workflows.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for Reverse ETL success',
      doItems: [
        'Start with high-impact, simple syncs first',
        'Use dbt models as sync sources for consistency',
        'Test syncs in sandbox/staging first',
        'Set up monitoring and alerting for sync failures',
        'Document which warehouse tables map to which destinations',
        'Use incremental syncs where possible',
        'Coordinate with destination system owners',
        'Track sync impact on business metrics',
      ],
      dontItems: [
        'Don\'t sync PII without proper governance review',
        'Avoid syncing raw data—transform and clean first',
        'Never skip testing in production destinations',
        'Don\'t ignore API rate limits of destinations',
        'Avoid circular data flows without clear ownership',
        'Don\'t sync everything—focus on actionable data',
        'Never sync without stakeholder alignment',
        'Don\'t forget about data freshness requirements',
      ],
    },
    agent: {
      avatar: '↩️',
      name: 'ReverseETLAgent',
      role: 'Data Activation Specialist',
      description: 'Expert in Reverse ETL platforms, data activation strategies, and operationalizing warehouse data. Specializes in Census, Hightouch, and building effective sync workflows.',
      capabilities: [
        'Design sync architectures',
        'Configure destination mappings',
        'Build audience segments',
        'Set up sync monitoring',
        'Optimize sync performance',
        'Debug sync failures',
      ],
      codeFilename: 'Agent Definition\n                        Activation Task\n                        reverse_etl_agent.py',
      code: `# reverse_etl_agent.py - Reverse ETL Agent
from crewai import Agent, Task, Crew

reverse_etl_agent = Agent(
    role="Data Activation Engineer",
    goal="Operationalize warehouse data",
    backstory="""Expert in Reverse ETL platforms 
    including Census, Hightouch, and Rudderstack. 
    Deep knowledge of data activation patterns, 
    destination APIs, and building effective 
    sync workflows that drive business value.""",
    tools=[
        SyncDesigner(),
        MappingBuilder(),
        AudienceCreator(),
        SyncMonitor(),
        DestinationConnector(),
    ]
)

activation_task = Task(
    description="""
    1. Identify high-value activation use cases
    2. Design warehouse source models
    3. Configure destination connections
    4. Build field mappings
    5. Set up sync schedules
    6. Configure monitoring and alerts
    7. Document sync ownership
    8. Measure business impact
    """,
    agent=reverse_etl_agent,
    expected_output="Production Reverse ETL pipeline"
)

# Execute data activation
crew = Crew(agents=[reverse_etl_agent], tasks=[activation_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 2.1', title: 'Data Ingestion', description: 'The other direction: into warehouse', slug: 'data-ingestion' },
      { number: 'Page 2.2', title: 'Data Transformation', description: 'dbt models as sync sources', slug: 'data-transformation' },
      { number: 'Page 2.4', title: 'Snowflake', description: 'Common Reverse ETL source', slug: 'snowflake' },
    ],
    prevPage: { title: '2.11 Streaming Platforms', slug: 'streaming' },
    nextPage: undefined,
  },
]

registerPages('data-engineering', pages)
export default pages
