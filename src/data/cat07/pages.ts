import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'knowledge-graphs',
    badge: '🕸️ Page 7.1 • Connected Knowledge',
    title: 'Knowledge Graphs',
    description: 'Transform information into connected networks of entities and relationships for powerful discovery, reasoning, and AI-grounded responses.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'Nodes', label: 'Entities' },
      { value: 'Edges', label: 'Relationships' },
      { value: 'Neo4j', label: 'Leading DB' },
      { value: 'GraphRAG', label: 'AI Integration' },
    ],
    overview: {
      title: 'Understanding Knowledge Graphs',
      subtitle: 'Connected data for AI and discovery',
      subsections: [
        {
          heading: 'What is a Knowledge Graph?',
          paragraphs: [
            'Knowledge graphs represent information as a network of entities (nodes) connected by relationships (edges). Unlike tabular data, graphs capture context and meaning—a "Customer" node connected to "Product" via "PURCHASED" tells a richer story than rows in a table.',
            'In enterprise settings, knowledge graphs unify siloed data: people, documents, projects, and concepts become interconnected. This enables semantic search ("find experts who worked on similar projects"), impact analysis ("what depends on this system?"), and recommendation ("suggest relevant documents").',
            'GraphRAG combines knowledge graphs with LLMs—using graph structure to provide grounded, contextual answers. Instead of retrieving isolated text chunks, GraphRAG traverses relationships to build coherent context for generation, dramatically reducing hallucinations and improving factual accuracy.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'Building blocks of knowledge graphs',
      columns: 2,
      cards: [
        {
          className: 'nodes',
          borderColor: '#3B82F6',
          icon: '🔵',
          title: 'Nodes (Entities)',
          description: 'Things in your domain with properties. Each node has a label (type) and attributes that describe it. Nodes are the "nouns" of your knowledge graph.',
          examples: ['Person {name: "Alice", role: "Engineer"}', 'Document {title: "Q3 Report", date: "2024-10"}', 'Project {name: "Migration", status: "Active"}', 'Concept {name: "Machine Learning"}', 'System {name: "Data Warehouse", tier: "Critical"}'],
        },
        {
          className: 'edges',
          borderColor: '#10B981',
          icon: '↔️',
          title: 'Edges (Relationships)',
          description: 'Connections between entities with types and properties. Relationships are directional and form the "verbs" of your graph, describing how entities interact.',
          examples: ['Person -[AUTHORED]→ Document', 'Person -[WORKS_ON]→ Project', 'Document -[REFERENCES]→ Concept', 'System -[DEPENDS_ON]→ System', 'Project -[USES]→ Technology'],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Knowledge Graphs',
          description: 'Transform information into connected networks of entities and relationships for powerful discovery, reasoning, and AI-grounded responses.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Knowledge Graphs',
          description: 'Transform information into connected networks of entities and relationships for powerful discovery, reasoning, and AI-grounded responses.',
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
        { icon: '📌', title: 'Understanding Knowledge Graphs', subtitle: '', description: 'Connected data for AI and discovery', tags: [] },
        { icon: '📌', title: 'Core Concepts', subtitle: '', description: 'Building blocks of knowledge graphs', tags: [] },
        { icon: '📌', title: 'Graph Explorer', subtitle: '', description: 'Interactive knowledge graph visualization', tags: [] },
        { icon: '📌', title: 'Graph Algorithms', subtitle: '', description: 'Essential algorithms for knowledge graph analysis', tags: [] },
        { icon: '📌', title: 'Graph Databases', subtitle: '', description: 'Platform comparison for knowledge graphs', tags: [] },
        { icon: '📌', title: 'Tools & Libraries', subtitle: '', description: 'Essential tools for building knowledge graphs', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective knowledge graph design', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for knowledge graphs', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Libraries',
      subtitle: 'Essential tools for building knowledge graphs',
      items: [
        { icon: '🔗', name: 'LangChain', vendor: '', description: 'GraphQA chains', tags: [] },
        { icon: '🦜', name: 'LlamaIndex', vendor: '', description: 'Graph RAG pipelines', tags: [] },
        { icon: '🐍', name: 'NetworkX', vendor: '', description: 'Python graph analysis', tags: [] },
        { icon: '📊', name: 'PyVis', vendor: '', description: 'Graph visualization', tags: [] },
        { icon: '🧠', name: 'spaCy', vendor: '', description: 'Entity extraction', tags: [] },
        { icon: '🔍', name: 'Rebel', vendor: '', description: 'Relation extraction', tags: [] },
        { icon: '🌐', name: 'RDFLib', vendor: '', description: 'RDF/OWL handling', tags: [] },
        { icon: '📦', name: 'Grapher', vendor: '', description: 'Graph embeddings', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective knowledge graph design',
      doItems: [
        'Design your ontology before building—define node types, relationships, and constraints upfront',
        'Use descriptive relationship names that read naturally: Person-[AUTHORED]→Document',
        'Create indexes on frequently queried properties for performance',
        'Combine with vector embeddings for GraphRAG semantic search',
        'Version your schema and maintain backward compatibility',
        'Use parameterized queries to prevent injection attacks',
      ],
      dontItems: [
        'Use generic relationship names like "RELATED" or "CONNECTED"—be specific',
        'Store large blobs (documents, images) in node properties—use references',
        'Create super-nodes with millions of relationships—partition or aggregate',
        'Skip testing with realistic data volumes—graphs behave differently at scale',
        'Ignore relationship direction—it affects query semantics',
        'Embed business logic in queries—keep graphs as pure data models',
      ],
    },
    agent: {
      avatar: '🕸️',
      name: 'KnowledgeGraphAgent',
      role: 'Graph Builder & Query Specialist',
      description: 'Expert in knowledge graph construction, entity extraction, relationship inference, and natural language to Cypher translation. Automates graph building from unstructured data and optimizes query performance.',
      capabilities: [
        'Extract entities and relationships from documents',
        'Translate natural language to Cypher queries',
        'Identify missing connections and data gaps',
        'Run and interpret graph algorithms',
        'Generate interactive graph visualizations',
        'Optimize graph schema and indexes',
      ],
      codeFilename: 'Agent Definition\n                        Graph Builder\n                        knowledge_graph_agent.py',
      code: `# knowledge_graph_agent.py - Knowledge Graph Agent
from crewai import Agent, Task, Crew
from langchain_community.graphs import Neo4jGraph

graph = Neo4jGraph(url="bolt://localhost:7687")

kg_agent = Agent(
    role="Knowledge Graph Specialist",
    goal="Build and query enterprise knowledge graphs",
    backstory="""Expert in graph databases, entity extraction,
    and semantic modeling. Deep knowledge of Cypher and
    graph algorithms.""",
    tools=[
        EntityExtractor(),
        CypherTranslator(),
        GraphQueryTool(graph),
        OntologyValidator(),
    ]
)

class KnowledgeGraphBuilder:
    def extract_entities(self, text: str) -> list:
        """Extract entities using NER + LLM."""
        prompt = f"Extract entities: {text}"
        return llm.invoke(prompt)
    
    def infer_relationships(self, entities: list) -> list:
        """Infer relationships between entities."""
        prompt = f"Infer relations: {entities}"
        return llm.invoke(prompt)
    
    def to_cypher(self, entities, rels) -> str:
        """Generate Cypher MERGE statements."""
        stmts = []
        for e in entities:
            stmts.append(f"MERGE (:{e['type']} {{name: '{e['name']}'}})")
        return "\\n".join(stmts)

# Execute
builder = KnowledgeGraphBuilder()
entities = builder.extract_entities(document)
cypher = builder.to_cypher(entities, rels)
graph.query(cypher)`,
    },
    relatedPages: [
      { number: 'Page 7.2', title: 'RAG & Semantic Search', description: 'Graph-powered retrieval for LLM responses', slug: 'rag-search' },
      { number: 'Page 7.3', title: 'Taxonomy & Ontology', description: 'Schema design patterns for graphs', slug: 'taxonomy' },
      { number: 'Page 7.7', title: 'Vector Databases', description: 'Combine graphs with embeddings', slug: 'vector-databases' },
    ],
    prevPage: undefined,
    nextPage: { title: '7.2 Taxonomy & Ontology', slug: 'taxonomy' },
  },
  {
    slug: 'taxonomy',
    badge: '🏷️ Page 7.3 • Structured Classification',
    title: 'Taxonomy & Ontology',
    description: 'Build structured vocabularies and semantic models that organize knowledge, enable consistent tagging, and power intelligent search and discovery.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: 'SKOS', label: 'Taxonomy Standard' },
      { value: 'OWL', label: 'Ontology Lang' },
      { value: 'RDF', label: 'Data Model' },
      { value: 'SPARQL', label: 'Query Language' },
    ],
    overview: {
      title: 'Understanding Knowledge Organization',
      subtitle: 'Why structured vocabularies matter for enterprise knowledge',
      subsections: [
        {
          heading: 'The Problem of Unstructured Knowledge',
          paragraphs: [
            'Enterprise knowledge without structure becomes an unsearchable swamp. Documents tagged inconsistently ("ML" vs "Machine Learning" vs "machine-learning"), search returning irrelevant results, and users unable to discover related information. The cost is massive: knowledge workers spend 20-30% of their time searching for information, and 50% of that search time is wasted on failed searches.',
            'Taxonomies and ontologies provide the conceptual scaffolding that makes knowledge findable, consistent, and machine-interpretable. A taxonomy organizes concepts hierarchically: "Technology → Cloud → AWS → Lambda." An ontology goes further, defining properties and relationships: "Lambda is-a Serverless Service, runs-on AWS, supports Python, triggered-by APIGateway."',
            'The business value is concrete: 40% improvement in search relevance with properly applied taxonomies, 60% reduction in tagging inconsistency with controlled vocabularies, and the foundation for AI-powered features like automatic classification, intelligent recommendations, and knowledge graph construction.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Taxonomy Design Patterns',
      subtitle: 'Proven approaches for common scenarios',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: '',
          description: 'One tree structure where each concept has exactly one parent. Clean and simple but may force awkward placements.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔷',
          title: '',
          description: 'Multiple independent dimensions (facets) that can be combined. Content tagged on each facet separately.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🕸️',
          title: '',
          description: 'Concepts can have multiple parents. "Lambda" appears under both "Serverless" and "AWS Services."',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🏷️',
          title: '',
          description: 'Core taxonomy plus free-form tags. Structured categories for navigation, tags for emerging concepts.',
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
        { icon: '📌', title: 'Understanding Knowledge Organization', subtitle: '', description: 'Why structured vocabularies matter for enterprise knowledge', tags: [] },
        { icon: '📌', title: 'The Vocabulary Spectrum', subtitle: '', description: 'From simple lists to formal ontologies', tags: [] },
        { icon: '📌', title: 'Taxonomy vs Ontology', subtitle: '', description: 'Understanding when to use each approach', tags: [] },
        { icon: '📌', title: 'Relationship Types', subtitle: '', description: 'How concepts connect to each other', tags: [] },
        { icon: '📌', title: 'Taxonomy Hierarchy Design', subtitle: '', description: 'Example enterprise taxonomy structure', tags: [] },
        { icon: '📌', title: 'Taxonomy Design Patterns', subtitle: '', description: 'Proven approaches for common scenarios', tags: [] },
        { icon: '📌', title: 'Standards & Formats', subtitle: '', description: 'Industry standards for taxonomies and ontologies', tags: [] },
        { icon: '📌', title: 'Industry Standards', subtitle: '', description: 'Domain-specific vocabularies and schemas', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Platforms',
      subtitle: 'Software for building and managing taxonomies',
      items: [
        { icon: '🦉', name: 'Protégé', vendor: '', description: 'OWL ontology editor', tags: [] },
        { icon: '📊', name: 'TopBraid', vendor: '', description: 'Enterprise taxonomy', tags: [] },
        { icon: '🏷️', name: 'PoolParty', vendor: '', description: 'SKOS management', tags: [] },
        { icon: '🔷', name: 'Synaptica', vendor: '', description: 'Taxonomy software', tags: [] },
        { icon: '📝', name: 'VocBench', vendor: '', description: 'Open-source SKOS', tags: [] },
        { icon: '🌐', name: 'Semaphore', vendor: '', description: 'Smart data platform', tags: [] },
        { icon: '🐍', name: 'RDFLib', vendor: '', description: 'Python RDF library', tags: [] },
        { icon: '☕', name: 'Apache Jena', vendor: '', description: 'Java RDF framework', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective taxonomy design',
      doItems: [
        'Start with user needs: how do people actually search and browse?',
        'Use clear, unambiguous term names (avoid jargon and acronyms)',
        'Provide synonyms and alternative labels for discovery',
        'Limit hierarchy depth to 3-5 levels maximum',
        'Include scope notes explaining when to use each term',
        'Plan for governance: who can add/modify terms?',
        'Test with real users through card sorting exercises',
        'Version control and track all changes',
      ],
      dontItems: [
        'Create overlapping categories with unclear boundaries',
        'Design in isolation from actual content and users',
        'Let the taxonomy grow without periodic review and pruning',
        'Use compound terms when simpler facets would work',
        'Neglect maintenance—stale taxonomies lose trust',
        'Over-engineer: start simple, evolve based on needs',
        'Mix classification logic within a single facet',
        'Ignore orphaned terms that accumulate over time',
      ],
    },
    agent: {
      avatar: '🏷️',
      name: 'TaxonomyAgent',
      role: 'Classification & Ontology Specialist',
      description: 'Expert in taxonomy design, automatic classification, and ontology construction. Analyzes content to suggest categories, identifies gaps, and maintains vocabulary consistency.',
      capabilities: [
        'Auto-classify documents into taxonomy categories',
        'Suggest new terms based on content analysis',
        'Identify taxonomy gaps and overlaps',
        'Generate SKOS/OWL from natural language',
        'Map between different taxonomies',
        'Validate ontology consistency with reasoners',
        'Recommend term deprecation based on usage',
        'Extract entities and relationships for ontology',
      ],
      codeFilename: 'Auto-Classifier\n                        SKOS Generator\n                        taxonomy_agent.py',
      code: `# taxonomy_agent.py - Taxonomy Management Agent
from crewai import Agent, Task
from rdflib import Graph, Namespace, Literal
from rdflib.namespace import SKOS, RDF

class TaxonomyClassifier:
    def __init__(self, taxonomy_path: str):
        self.graph = Graph()
        self.graph.parse(taxonomy_path, format="turtle")
        self.concepts = self._load_concepts()
    
    def classify(self, document: str) -> list:
        """Auto-classify document into taxonomy."""
        prompt = f"""Classify this document:

Taxonomy concepts: {self.concepts}
Document: {document[:2000]}

Return top 3 matching concepts with confidence:
[{{"uri": "...", "label": "...", "confidence": 0.0-1.0}}]"""
        
        result = llm.invoke(prompt)
        return self._parse_classifications(result)
    
    def suggest_terms(self, documents: list) -> list:
        """Analyze content for taxonomy gaps."""
        # Extract key concepts from documents
        # Compare against existing taxonomy
        # Return suggested new terms with placement
        pass
    
    def generate_skos(self, description: str) -> str:
        """Generate SKOS from natural language."""
        prompt = f"""Convert to SKOS Turtle:
{description}

Include prefLabel, altLabel, broader, definition."""
        return llm.invoke(prompt)

# Agent definition
taxonomy_agent = Agent(
    role="Taxonomy Specialist",
    goal="Maintain consistent classification",
    tools=[ClassifierTool(), SKOSGeneratorTool(), 
           GapAnalyzerTool(), OntologyValidatorTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.1', title: 'Knowledge Graphs', description: 'Ontologies power graph schemas', slug: 'knowledge-graphs' },
      { number: 'Page 7.6', title: 'Semantic Models', description: 'Data meaning layers', slug: 'semantic-models' },
      { number: 'Page 7.4', title: 'Content Lifecycle', description: 'Taxonomy-driven organization', slug: 'content-lifecycle' },
    ],
    prevPage: { title: '7.1 Knowledge Graphs', slug: 'knowledge-graphs' },
    nextPage: { title: '7.3 Content Lifecycle', slug: 'content-lifecycle' },
  },
  {
    slug: 'content-lifecycle',
    badge: '📄 Page 7.4 • Document Management',
    title: 'Content Lifecycle',
    description: 'Manage knowledge from creation through retirement with structured workflows, retention policies, and automated governance.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '6', label: 'Lifecycle Stages' },
      { value: '90%', label: 'Fresh Content' },
      { value: '7yr', label: 'Max Retention' },
      { value: 'Auto', label: 'Archive Trigger' },
    ],
    overview: {
      title: 'Content Lifecycle',
      subtitle: 'Why managed content beats document chaos',
      subsections: [
        {
          heading: 'The Cost of Unmanaged Content',
          paragraphs: [
            'Enterprise content without lifecycle management becomes a liability. Documents proliferate without review, outdated information misleads decisions, and storage costs spiral. Research shows 30% of enterprise content is ROT (Redundant, Outdated, Trivial)—costing organizations $2-5 per gigabyte annually in storage, backup, and compliance risk.',
            'Content lifecycle management (CLM) treats documents as assets with defined stages: creation, review, publication, maintenance, archive, and disposal. Each stage has owners, triggers, and actions. The result is content that stays accurate, compliant, and discoverable—while stale content is systematically retired.',
            'Modern CLM integrates with knowledge management: taxonomy-based classification routes content to appropriate review workflows, freshness scoring identifies stale documents for update or retirement, and retention policies ensure compliance with legal and regulatory requirements. AI now automates much of this—detecting staleness, suggesting updates, and flagging compliance risks.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Stage Details',
      subtitle: 'What happens at each lifecycle stage',
      columns: 2,
      cards: [
        {
          className: 'stage-detail-0',
          borderColor: '#3B82F6',
          icon: '✏️',
          title: '',
          description: 'Authors draft content with required metadata, taxonomy tags, and ownership assignment.',
          examples: ['Assign content owner', 'Apply taxonomy tags', 'Set review cadence', 'Define audience scope', 'Link related content'],
        },
        {
          className: 'stage-detail-1',
          borderColor: '#10B981',
          icon: '👁️',
          title: '',
          description: 'Subject matter experts validate accuracy; editors check quality and style compliance.',
          examples: ['Technical accuracy check', 'Editorial/style review', 'Legal/compliance sign-off', 'Accessibility validation', 'Metadata verification'],
        },
        {
          className: 'stage-detail-2',
          borderColor: '#8B5CF6',
          icon: '🚀',
          title: '',
          description: 'Approved content is released to target audience with full discoverability.',
          examples: ['Set publication date', 'Configure visibility/permissions', 'Index for search', 'Notify subscribers', 'Update related pages'],
        },
        {
          className: 'stage-detail-3',
          borderColor: '#F59E0B',
          icon: '🔧',
          title: '',
          description: 'Periodic reviews ensure content stays accurate, relevant, and useful.',
          examples: ['Scheduled review reminders', 'Staleness detection', 'Broken link checks', 'Analytics review', 'Update or confirm current'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Lifecycle Stages', subtitle: '', description: 'The six-stage content journey', tags: [] },
        { icon: '📌', title: 'Stage Details', subtitle: '', description: 'What happens at each lifecycle stage', tags: [] },
        { icon: '📌', title: 'Content Types & Review Cadence', subtitle: '', description: 'Different content needs different treatment', tags: [] },
        { icon: '📌', title: 'Retention Policies', subtitle: '', description: 'How long to keep different content', tags: [] },
        { icon: '📌', title: 'Workflow Automation', subtitle: '', description: 'Automating lifecycle transitions', tags: [] },
        { icon: '📌', title: 'Content Freshness', subtitle: '', description: 'Measuring and maintaining content health', tags: [] },
        { icon: '📌', title: 'Version Control', subtitle: '', description: 'Tracking changes and managing history', tags: [] },
        { icon: '📌', title: 'Tools & Platforms', subtitle: '', description: 'Software for content lifecycle management', tags: [] },
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
      subtitle: 'Guidelines for effective lifecycle management',
      doItems: [
        'Assign an owner to every piece of content at creation time',
        'Set review cadence based on content type and volatility',
        'Automate reminders, escalations, and archival triggers',
        'Use taxonomy to route content to appropriate workflows',
        'Track freshness metrics and make them visible',
        'Define clear retention policies with Legal input',
        'Archive gracefully with banners and redirects',
        'Audit compliance regularly and remediate gaps',
      ],
      dontItems: [
        'Create content without metadata and classification',
        'Let content accumulate indefinitely without review',
        'Delete content without checking legal holds',
        'Make workflows so complex that authors bypass them',
        'Archive content without notification to stakeholders',
        'Ignore orphan content hoping someone will claim it',
        'Treat all content types with identical lifecycle rules',
        'Rely on manual processes for compliance-critical actions',
      ],
    },
    agent: {
      avatar: '📄',
      name: 'LifecycleAgent',
      role: 'Content Governance Specialist',
      description: 'Automates content lifecycle management with AI-powered staleness detection, smart archival recommendations, and compliance monitoring.',
      capabilities: [
        'Detect stale content using semantic analysis',
        'Identify outdated references (products, people, links)',
        'Recommend archive vs. update vs. delete',
        'Flag retention policy violations',
        'Generate freshness reports by owner/team',
        'Suggest content consolidation opportunities',
        'Monitor compliance with legal holds',
        'Auto-draft update suggestions for stale docs',
      ],
      codeFilename: 'Staleness Detector\n                        Compliance Monitor\n                        lifecycle_agent.py',
      code: `# lifecycle_agent.py - Content Lifecycle Agent
from crewai import Agent, Task
from datetime import datetime, timedelta

class StalenessDetector:
    def __init__(self, content_store):
        self.store = content_store
        self.stale_indicators = [
            "deprecated", "legacy", "old version",
            "no longer supported", "outdated"
        ]
    
    def analyze(self, doc_id: str) -> dict:
        """Compute staleness score for document."""
        doc = self.store.get(doc_id)
        
        # Time-based signals
        days_since_update = (datetime.now() - doc.updated).days
        days_until_review = (doc.next_review - datetime.now()).days
        
        # Content-based signals
        broken_links = self._check_links(doc.content)
        stale_refs = self._find_stale_references(doc.content)
        
        # Engagement signals
        view_trend = self._calculate_view_trend(doc_id)
        
        score = self._compute_score(
            days_since_update, days_until_review,
            broken_links, stale_refs, view_trend
        )
        
        return {
            "doc_id": doc_id,
            "staleness_score": score,
            "recommendation": self._recommend(score),
            "issues": stale_refs + broken_links
        }
    
    def _recommend(self, score: float) -> str:
        if score > 0.8: return "ARCHIVE"
        if score > 0.5: return "UPDATE_URGENT"
        if score > 0.3: return "REVIEW"
        return "HEALTHY"

# Agent definition
lifecycle_agent = Agent(
    role="Content Lifecycle Manager",
    goal="Maintain content freshness and compliance",
    tools=[StalenessDetectorTool(), ComplianceCheckerTool(),
           ArchiveRecommenderTool(), FreshnessReporterTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.3', title: 'Taxonomy & Ontology', description: 'Classification drives workflows', slug: 'taxonomy' },
      { number: 'Page 7.5', title: 'Enterprise Wikis', description: 'Where content lives', slug: 'enterprise-wikis' },
      { number: 'Page 7.2', title: 'RAG & Semantic Search', description: 'Fresh content powers AI', slug: 'rag-search' },
    ],
    prevPage: { title: '7.2 Taxonomy & Ontology', slug: 'taxonomy' },
    nextPage: { title: '7.4 Enterprise Wikis', slug: 'enterprise-wikis' },
  },
  {
    slug: 'enterprise-wikis',
    badge: '📖 Page 7.5 • Collaborative Knowledge',
    title: 'Enterprise Wikis',
    description: 'Build and scale collaborative knowledge bases that capture institutional expertise, enable self-service discovery, and reduce knowledge silos across your organization.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '70%', label: 'Reduced Repeat Questions' },
      { value: '4.5x', label: 'Onboarding Speed' },
      { value: '85%', label: 'Self-Service Rate' },
      { value: '$2.5M', label: 'Annual Savings (1000 emp)' },
    ],
    overview: {
      title: 'Understanding Enterprise Wikis',
      subtitle: 'Why collaborative knowledge bases drive organizational efficiency',
      subsections: [
        {
          heading: 'The Knowledge Bottleneck Problem',
          paragraphs: [
            'In most organizations, critical knowledge lives in people\'s heads, scattered documents, and tribal communication channels. New hires take months to become productive because they can\'t find answers. Experts spend 20% of their time answering the same questions repeatedly. When key employees leave, institutional knowledge walks out the door.',
            'Enterprise wikis solve this by creating a single source of truth where knowledge is documented, discoverable, and collaboratively maintained. Unlike static documentation, wikis are living systems—content evolves through collective contribution and continuous refinement. The best wikis become the first place people look for answers.',
            'The ROI is substantial: organizations with mature wiki implementations report 70% reduction in repeat questions, 4.5x faster onboarding, and $2,500/employee/year in productivity savings from reduced knowledge searching time. But success requires more than deploying software—it demands thoughtful information architecture, governance, and cultural change.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Content Patterns',
      subtitle: 'Standardized templates for consistent documentation',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📋',
          title: '',
          description: 'Step-by-step instructions for completing a specific task. Goal-oriented and action-focused.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📖',
          title: '',
          description: 'Comprehensive information about a topic for lookup, not learning. Organized for scanning.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Background and context for understanding concepts. Answers "why" not just "how."',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📝',
          title: '',
          description: 'Documents architectural or process decisions with context and rationale.',
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
        { icon: '📌', title: 'Understanding Enterprise Wikis', subtitle: '', description: 'Why collaborative knowledge bases drive organizational efficiency', tags: [] },
        { icon: '📌', title: 'Types of Enterprise Wikis', subtitle: '', description: 'Different wiki models for different needs', tags: [] },
        { icon: '📌', title: 'Platform Comparison', subtitle: '', description: 'Evaluating wiki platforms across 12 essential capabilities', tags: [] },
        { icon: '📌', title: 'Information Architecture', subtitle: '', description: 'Structuring your wiki for discoverability', tags: [] },
        { icon: '📌', title: 'Content Patterns', subtitle: '', description: 'Standardized templates for consistent documentation', tags: [] },
        { icon: '📌', title: 'Adoption Metrics', subtitle: '', description: 'Measuring wiki health and engagement', tags: [] },
        { icon: '📌', title: 'Wiki Governance', subtitle: '', description: 'Maintaining quality at scale', tags: [] },
        { icon: '📌', title: 'Wiki Migration', subtitle: '', description: 'Moving from legacy systems or consolidating wikis', tags: [] },
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
      subtitle: 'Guidelines for successful enterprise wikis',
      doItems: [
        'Start with search: ensure content is findable before adding more',
        'Use templates for consistency across all content types',
        'Assign owners to every page at creation time',
        'Link liberally: connect related content for discovery',
        'Write for scanning: headers, bullets, TL;DR summaries',
        'Review and update content on a regular cadence',
        'Make contributing easy: low friction, clear guidelines',
        'Celebrate contributors to build knowledge-sharing culture',
      ],
      dontItems: [
        'Create pages without clear ownership and review dates',
        'Duplicate content across multiple locations',
        'Let the wiki become a document graveyard',
        'Require approval for every edit (kills contribution)',
        'Ignore search analytics and failed search queries',
        'Assume "if you build it, they will come"',
        'Mix different content types on the same page',
        'Neglect mobile experience for field teams',
      ],
    },
    agent: {
      avatar: '📖',
      name: 'WikiAgent',
      role: 'Knowledge Base Curator',
      description: 'Automates wiki maintenance, identifies content gaps, suggests improvements, and answers questions from wiki content using RAG.',
      capabilities: [
        'Answer questions from wiki content (RAG)',
        'Identify stale pages needing review',
        'Detect duplicate or conflicting content',
        'Suggest missing documentation from Slack questions',
        'Auto-generate page summaries and TL;DRs',
        'Fix broken links and update references',
        'Generate content from templates',
        'Surface trending and underutilized content',
      ],
      codeFilename: 'Wiki Q&A\n                        Stale Detector\n                        wiki_agent.py',
      code: `# wiki_agent.py - Wiki Management Agent
from crewai import Agent, Task
from langchain.vectorstores import Pinecone
from confluence_api import ConfluenceClient

class WikiQAAgent:
    def __init__(self, wiki_client, vector_store):
        self.wiki = wiki_client
        self.vectors = vector_store
    
    def answer_question(self, question: str) -> dict:
        """Answer question using wiki content."""
        # Retrieve relevant wiki pages
        docs = self.vectors.similarity_search(
            question, k=5, filter={"status": "published"}
        )
        
        # Generate answer with citations
        context = "\\n".join([d.page_content for d in docs])
        
        answer = llm.invoke(f"""Answer based on wiki:
Context: {context}
Question: {question}

Provide answer with [Page Title](url) citations.""")
        
        return {
            "answer": answer,
            "sources": [d.metadata["url"] for d in docs],
            "confidence": self._calc_confidence(docs)
        }
    
    def find_content_gaps(self, slack_questions: list):
        """Identify wiki gaps from unanswered Slack Qs."""
        gaps = []
        for q in slack_questions:
            result = self.answer_question(q)
            if result["confidence"] < 0.5:
                gaps.append({"question": q, "suggested_page": ...})
        return gaps

# Agent definition
wiki_agent = Agent(
    role="Wiki Curator",
    goal="Keep wiki healthy and useful",
    tools=[WikiQATool(), StaleDetectorTool(), 
           GapFinderTool(), DuplicateCheckerTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.4', title: 'Content Lifecycle', description: 'Managing wiki content over time', slug: 'content-lifecycle' },
      { number: 'Page 7.2', title: 'RAG & Semantic Search', description: 'AI-powered wiki search', slug: 'rag-search' },
      { number: 'Page 7.3', title: 'Taxonomy & Ontology', description: 'Organizing wiki structure', slug: 'taxonomy' },
    ],
    prevPage: { title: '7.3 Content Lifecycle', slug: 'content-lifecycle' },
    nextPage: { title: '7.5 Semantic Models', slug: 'semantic-models' },
  },
  {
    slug: 'semantic-models',
    badge: '🧊 Page 7.6 • Business Intelligence Layer',
    title: 'Semantic Models',
    description: 'Create a unified business language layer that translates raw data into meaningful metrics, dimensions, and KPIs—enabling consistent analytics across all tools and users.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '1', label: 'Single Source of Truth' },
      { value: '60%', label: 'Reduced Metric Conflicts' },
      { value: '3x', label: 'Faster Dashboard Dev' },
      { value: 'SQL', label: 'Universal Interface' },
    ],
    overview: {
      title: 'Understanding Semantic Models',
      subtitle: 'The abstraction layer between data and business meaning',
      subsections: [
        {
          heading: 'The Metric Chaos Problem',
          paragraphs: [
            'In most organizations, the same metric is calculated differently by different teams. Finance says revenue is $10M, Sales says $12M, and the CEO\'s dashboard shows $11M. Everyone is "right" based on their definitions, but the organization lacks a single source of truth. This metric chaos erodes trust in data and wastes countless hours reconciling numbers.',
            'Semantic models solve this by creating a centralized definition layer. Instead of each dashboard defining "revenue" independently, all tools query the semantic layer which provides one authoritative calculation. Changes propagate everywhere instantly. Business users speak the same language because they\'re accessing the same definitions.',
            'The semantic layer sits between raw data and consumption tools (BI, applications, AI). It translates physical schemas (tables, columns) into business concepts (customers, revenue, churn rate). This abstraction enables self-service analytics—users explore business concepts without needing to understand complex joins, data models, or SQL. Modern semantic layers also power AI assistants that answer natural language questions about your data.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Concepts',
      subtitle: 'The building blocks of semantic models',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📏',
          title: '',
          description: 'Categorical attributes used for grouping, filtering, and slicing data. The "by what" of analysis.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📊',
          title: '',
          description: 'Aggregatable numeric values. The raw building blocks of metrics with defined aggregation rules.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: '',
          description: 'Business KPIs composed from measures with specific calculations and time grains.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🌳',
          title: '',
          description: 'Dimensional roll-up paths enabling drill-down analysis from high to low level.',
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
        { icon: '📌', title: 'Understanding Semantic Models', subtitle: '', description: 'The abstraction layer between data and business meaning', tags: [] },
        { icon: '📌', title: 'Semantic Layer Architecture', subtitle: '', description: 'The modern data stack with semantic modeling', tags: [] },
        { icon: '📌', title: 'Core Concepts', subtitle: '', description: 'The building blocks of semantic models', tags: [] },
        { icon: '📌', title: 'Modeling Patterns', subtitle: '', description: 'Common schema designs for semantic models', tags: [] },
        { icon: '📌', title: 'Metrics Layer', subtitle: '', description: 'Defining business metrics programmatically', tags: [] },
        { icon: '📌', title: 'Implementation Roadmap', subtitle: '', description: 'Building your semantic layer step by step', tags: [] },
        { icon: '📌', title: 'Semantic Layer Governance', subtitle: '', description: 'Maintaining quality and trust at scale', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective semantic modeling', tags: [] },
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
      subtitle: 'Guidelines for effective semantic modeling',
      doItems: [
        'Start with business requirements, not technical capabilities',
        'Use business-friendly names (Revenue, not sum_order_amt)',
        'Document calculation logic and business context',
        'Version control all semantic model definitions',
        'Test metrics against known values and edge cases',
        'Create a glossary of canonical dimension values',
        'Implement row-level security at the semantic layer',
        'Plan for performance with caching and pre-aggregation',
      ],
      dontItems: [
        'Allow multiple definitions of the same metric to coexist',
        'Skip stakeholder alignment on metric definitions',
        'Expose raw database column names to business users',
        'Create metrics without clear ownership',
        'Forget to handle NULL values and edge cases',
        'Ignore performance until dashboards are slow',
        'Assume users understand metric limitations',
        'Deploy without automated testing and monitoring',
      ],
    },
    agent: {
      avatar: '🧊',
      name: 'SemanticAgent',
      role: 'Metrics & Modeling Specialist',
      description: 'Automates semantic layer tasks including metric discovery, definition generation, conflict detection, and natural language query translation.',
      capabilities: [
        'Generate metric definitions from SQL queries',
        'Detect conflicting metric definitions',
        'Translate natural language to semantic queries',
        'Suggest missing dimensions and hierarchies',
        'Auto-document metrics from code comments',
        'Validate metric calculations against test data',
        'Identify unused or duplicate metrics',
        'Generate dbt/Cube/LookML from specs',
      ],
      codeFilename: 'Metric Generator\n                        NL to SQL\n                        semantic_agent.py',
      code: `# semantic_agent.py - Semantic Layer Agent
from crewai import Agent, Task
from cube_api import CubeClient

class MetricGenerator:
    def __init__(self, semantic_layer):
        self.layer = semantic_layer
        self.existing_metrics = self._load_metrics()
    
    def from_sql(self, sql: str) -> dict:
        """Generate metric definition from SQL query."""
        prompt = f"""Analyze this SQL and extract metric:
{sql}

Return YAML with:
- name (business friendly)
- type (simple/derived/cumulative)
- sql (calculation)
- dimensions (valid slice-by)
- description"""
        
        metric_def = llm.invoke(prompt)
        
        # Check for conflicts
        conflicts = self._find_conflicts(metric_def)
        if conflicts:
            metric_def["warnings"] = conflicts
        
        return metric_def
    
    def nl_to_query(self, question: str) -> str:
        """Translate natural language to semantic query."""
        context = self._get_schema_context()
        
        prompt = f"""Given semantic model:
{context}

Question: {question}

Generate Cube/SQL query using only defined metrics."""
        
        return llm.invoke(prompt)

# Agent definition
semantic_agent = Agent(
    role="Semantic Layer Architect",
    goal="Maintain consistent business metrics",
    tools=[MetricGeneratorTool(), ConflictDetectorTool(),
           NLQueryTool(), SchemaValidatorTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.3', title: 'Taxonomy & Ontology', description: 'Organizing business concepts', slug: 'taxonomy' },
      { number: 'Page 7.7', title: 'Vector Databases', description: 'AI-powered semantic search', slug: 'vector-databases' },
      { number: 'Page 7.1', title: 'Knowledge Graphs', description: 'Entity relationships', slug: 'knowledge-graphs' },
    ],
    prevPage: { title: '7.4 Enterprise Wikis', slug: 'enterprise-wikis' },
    nextPage: { title: '7.6 Vector Databases', slug: 'vector-databases' },
  },
  {
    slug: 'vector-databases',
    badge: '🗄️ Page 7.7 • RAG Infrastructure',
    title: 'Vector Databases',
    description: 'Purpose-built databases for storing and querying high-dimensional embeddings—the foundation of semantic search, RAG systems, and AI-powered applications.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '<10ms', label: 'Query Latency' },
      { value: 'Billions', label: 'Vector Scale' },
      { value: '99%', label: 'Recall Accuracy' },
      { value: 'ANN', label: 'Search Algorithm' },
    ],
    overview: {
      title: 'Understanding Vector Databases',
      subtitle: 'Specialized storage for semantic similarity search',
      subsections: [
        {
          heading: 'Why Vector Databases?',
          paragraphs: [
            'Vector databases are purpose-built to store and query high-dimensional vectors (embeddings). Unlike traditional databases optimized for exact matches on structured data, vector databases use approximate nearest neighbor (ANN) algorithms to find semantically similar content in milliseconds—even across billions of vectors.',
            'At their core, vector databases solve the similarity search problem: given a query vector (like an embedded question), find the K most similar vectors (like document chunks). This enables RAG systems to retrieve relevant context, recommendation engines to find similar items, and search systems to understand user intent beyond keywords.',
            'Key capabilities include metadata filtering (narrow results by attributes before vector search), hybrid search (combining dense vectors with sparse keyword matching), and namespaces/collections (multi-tenancy for different use cases or customers). Modern vector databases also support real-time updates, allowing you to add, update, or delete vectors without full re-indexing.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Platform Deep Dives',
      subtitle: 'Leading vector database solutions',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'The market leader in managed vector databases. Serverless pricing means you pay per query, not for idle infrastructure. Excellent developer experience with comprehensive SDKs and documentation.',
          examples: [],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Feature-rich open-source vector database with built-in vectorization modules. Unique GraphQL API enables complex queries. Strong multi-modal support for text, images, and more.',
          examples: [],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'High-performance vector database written in Rust. Industry-leading query latency with advanced filtering capabilities. Rich payload storage with complex query support.',
          examples: [],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Cloud-native distributed vector database built for massive scale. Kubernetes-native architecture with separation of storage and compute. Powers production systems at trillion-vector scale.',
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
        { icon: '📌', title: 'Understanding Vector Databases', subtitle: '', description: 'Specialized storage for semantic similarity search', tags: [] },
        { icon: '📌', title: 'How Embeddings Work', subtitle: '', description: 'From text to vectors to similarity', tags: [] },
        { icon: '📌', title: 'Index Algorithms', subtitle: '', description: 'How vector databases find similar vectors fast', tags: [] },
        { icon: '📌', title: 'Platform Deep Dives', subtitle: '', description: 'Leading vector database solutions', tags: [] },
        { icon: '📌', title: 'Feature Comparison', subtitle: '', description: 'Capabilities across 8 platforms and 14 features', tags: [] },
        { icon: '📌', title: 'Architecture Patterns', subtitle: '', description: 'Deployment and scaling strategies', tags: [] },
        { icon: '📌', title: 'Performance Optimization', subtitle: '', description: 'Tuning for latency, throughput, and cost', tags: [] },
        { icon: '📌', title: 'Use Cases', subtitle: '', description: 'Applications powered by vector databases', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Pinecone', vendor: '', description: 'The market leader in managed vector databases. Serverless pricing means you pay per query, not for idle infrastructure. Excellent developer experience with comprehensive SDKs and documentation.', tags: [] },
        { icon: '🛠️', name: 'Pinecone', vendor: '', description: 'The market leader in managed vector databases. Serverless pricing means you pay per query, not for idle infrastructure. Excellent developer experience with comprehensive SDKs and documentation.', tags: [] },
        { icon: '🛠️', name: 'Weaviate', vendor: '', description: 'Feature-rich open-source vector database with built-in vectorization modules. Unique GraphQL API enables complex queries. Strong multi-modal support for text, images, and more.', tags: [] },
        { icon: '🛠️', name: 'Qdrant', vendor: '', description: 'High-performance vector database written in Rust. Industry-leading query latency with advanced filtering capabilities. Rich payload storage with complex query support.', tags: [] },
        { icon: '🛠️', name: 'Milvus', vendor: '', description: 'Cloud-native distributed vector database built for massive scale. Kubernetes-native architecture with separation of storage and compute. Powers production systems at trillion-vector scale.', tags: [] },
        { icon: '🛠️', name: 'Chroma', vendor: '', description: 'Lightweight, Python-native vector store designed for AI applications. Perfect for prototyping, local development, and small-to-medium workloads. Zero-config embedded mode.', tags: [] },
        { icon: '🛠️', name: 'pgvector', vendor: '', description: 'Vector similarity search as a PostgreSQL extension. Add vectors to your existing Postgres database without new infrastructure. ACID transactions with your relational data.', tags: [] },
        { icon: '🛠️', name: 'Elasticsearch', vendor: '', description: 'The classic search engine now with dense vector support. Best choice when you already use Elasticsearch and need to add semantic search alongside existing keyword capabilities.', tags: [] },
        { icon: '🛠️', name: 'Vespa', vendor: '', description: 'Battle-tested search platform from Yahoo. Excels at combining vectors with complex business logic, ranking, and filtering. Powers production systems at extreme scale.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for production vector databases',
      doItems: [
        'Test embedding models on your specific domain data',
        'Use hybrid search (vectors + keywords) for best results',
        'Store useful metadata alongside vectors for filtering',
        'Implement proper chunking strategy for documents',
        'Monitor recall and latency in production',
        'Use namespaces/collections for multi-tenancy',
        'Benchmark quantization impact on your queries',
        'Plan for index rebuilds when changing parameters',
      ],
      dontItems: [
        'Assume all embedding models perform equally',
        'Use flat/brute-force search in production at scale',
        'Ignore the cost of high-dimensional embeddings',
        'Skip metadata filtering when you have structured attributes',
        'Embed entire documents—use smart chunking',
        'Forget to handle embedding model version changes',
        'Mix embeddings from different models in one index',
        'Assume managed service costs scale linearly',
      ],
    },
    agent: {
      avatar: '🗄️',
      name: 'VectorOps Agent',
      role: 'Embedding & Search Specialist',
      description: 'Automates vector database operations including embedding generation, index optimization, query analysis, and performance tuning.',
      capabilities: [
        'Generate and upsert embeddings from documents',
        'Optimize index parameters for recall/latency',
        'Analyze query patterns and suggest improvements',
        'Monitor and alert on search quality metrics',
        'Auto-chunk documents with overlap strategies',
        'Compare embedding models on your data',
        'Manage namespace/collection lifecycle',
        'Generate hybrid search queries',
      ],
      codeFilename: 'RAG Pipeline\n                        Index Optimizer\n                        vector_agent.py',
      code: `# vector_agent.py - Vector Database Agent
from crewai import Agent, Task
import openai
from pinecone import Pinecone

class VectorOpsAgent:
    def __init__(self, index_name: str):
        self.pc = Pinecone()
        self.index = self.pc.Index(index_name)
        self.embed_model = "text-embedding-3-small"
    
    def embed_and_upsert(self, docs: list, namespace: str):
        """Embed documents and upsert to vector DB."""
        chunks = self._chunk_documents(docs)
        
        for batch in self._batches(chunks, size=100):
            embeddings = openai.embeddings.create(
                model=self.embed_model,
                input=[c["text"] for c in batch]
            )
            
            vectors = [{
                "id": c["id"],
                "values": e.embedding,
                "metadata": c["metadata"]
            } for c, e in zip(batch, embeddings.data)]
            
            self.index.upsert(vectors, namespace=namespace)
    
    def hybrid_search(self, query: str, filter: dict, k: int = 10):
        """Hybrid search with vector + metadata filtering."""
        query_vec = self._embed(query)
        
        results = self.index.query(
            vector=query_vec,
            filter=filter,
            top_k=k,
            include_metadata=True
        )
        return results.matches

# Agent definition
vector_agent = Agent(
    role="Vector Database Specialist",
    goal="Optimize semantic search and retrieval",
    tools=[EmbedTool(), UpsertTool(), SearchTool(), OptimizeTool()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.2', title: 'RAG & Semantic Search', description: 'Build retrieval-augmented systems', slug: 'rag-search' },
      { number: 'Page 7.8', title: 'Platform Comparison', description: 'Compare all KM platforms', slug: 'platform-comparison' },
      { number: 'Page 7.1', title: 'Knowledge Graphs', description: 'Graph + vector hybrid approaches', slug: 'knowledge-graphs' },
    ],
    prevPage: { title: '7.5 Semantic Models', slug: 'semantic-models' },
    nextPage: { title: '7.7 Platform Comparison', slug: 'platform-comparison' },
  },
  {
    slug: 'platform-comparison',
    badge: '⚖️ Page 7.8 • Tool Selection Guide',
    title: 'Platform Comparison',
    description: 'Comprehensive comparison of knowledge management platforms across six categories—from wikis to vector databases to semantic layers. Build your optimal KM stack.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: '50+', label: 'Tools Compared' },
      { value: '6', label: 'Categories' },
      { value: '4', label: 'Reference Stacks' },
      { value: '10+', label: 'Features Per Tool' },
    ],
    overview: {
      title: 'Knowledge Management Stack',
      subtitle: 'Understanding the platform landscape',
      subsections: [
        {
          heading: 'The Integration Challenge',
          paragraphs: [
            'A complete enterprise knowledge management system spans multiple layers—from content creation (wikis, documentation) to semantic understanding (graphs, embeddings) to AI-powered access (RAG, agents). No single platform does everything well, so organizations must assemble a stack of best-of-breed tools.',
            'The key is integration: your wiki content feeds into your vector database, which powers your RAG pipeline, which is grounded by your knowledge graph. Semantic layers provide consistent metric definitions, while data catalogs enable discovery across all sources. This page provides detailed comparisons across six categories to help you select the right tools for each layer.',
            'We evaluate each platform on 10+ features specific to its category, including AI capabilities, scalability, pricing model, and integration options. Use the decision framework at the end to match your requirements to the optimal stack.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Reference Stacks',
      subtitle: 'Recommended tool combinations by use case',
      columns: 2,
      cards: [
        {
          className: 'stack-0',
          borderColor: '#3B82F6',
          icon: '🚀',
          title: 'Startup / SMB Stack',
          description: '',
          examples: [],
        },
        {
          className: 'stack-1',
          borderColor: '#10B981',
          icon: '🏢',
          title: 'Enterprise Stack',
          description: '',
          examples: [],
        },
        {
          className: 'stack-2',
          borderColor: '#8B5CF6',
          icon: '🔵',
          title: 'Microsoft Stack',
          description: '',
          examples: [],
        },
        {
          className: 'stack-3',
          borderColor: '#F59E0B',
          icon: '🆓',
          title: 'Open Source Stack',
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
        { icon: '📌', title: 'Knowledge Management Stack', subtitle: '', description: 'Understanding the platform landscape', tags: [] },
        { icon: '📌', title: 'Reference Stacks', subtitle: '', description: 'Recommended tool combinations by use case', tags: [] },
        { icon: '📌', title: 'Decision Framework', subtitle: '', description: 'Match your requirements to the right tools', tags: [] },
        { icon: '📌', title: 'Platform Selection Best Practices', subtitle: '', description: 'Guidelines for making the right choices', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered platform selection', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Deep dives on specific platform categories', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Team Size', vendor: '', description: 'How many users will access the system?', tags: [] },
        { icon: '🛠️', name: 'Budget', vendor: '', description: 'What\'s your annual KM tool budget?', tags: [] },
        { icon: '🛠️', name: 'Technical Depth', vendor: '', description: 'What\'s your team\'s technical capability?', tags: [] },
        { icon: '🛠️', name: 'Integration', vendor: '', description: 'What\'s your existing ecosystem?', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Platform Selection Best Practices',
      subtitle: 'Guidelines for making the right choices',
      doItems: [
        'Start with requirements, not features',
        'Run POCs with your actual data',
        'Evaluate total cost of ownership (TCO)',
        'Check integration with existing stack',
        'Assess vendor stability and roadmap',
        'Talk to reference customers',
        'Plan for migration and lock-in risks',
        'Consider operational complexity',
      ],
      dontItems: [
        'Choose based on feature count alone',
        'Ignore the hidden costs (training, ops)',
        'Over-engineer for future scale',
        'Underestimate data migration effort',
        'Skip security and compliance review',
        'Assume all "enterprise" tools work',
        'Forget about user adoption',
        'Lock into single-vendor ecosystems blindly',
      ],
    },
    agent: {
      avatar: '⚖️',
      name: 'PlatformAdvisor',
      role: 'Tool Selection Specialist',
      description: 'Analyzes your requirements, constraints, and existing stack to recommend optimal platform combinations with migration paths and TCO estimates.',
      capabilities: [
        'Gather requirements through conversation',
        'Score platforms against your criteria',
        'Generate comparison matrices',
        'Estimate total cost of ownership',
        'Identify integration requirements',
        'Create migration roadmaps',
        'Draft RFP evaluation criteria',
        'Monitor vendor news and updates',
      ],
      codeFilename: 'Requirements Analyzer\n                        Scoring Engine\n                        platform_advisor.py',
      code: `# platform_advisor.py - Tool Selection Agent
from crewai import Agent, Task

class PlatformAdvisor:
    def __init__(self):
        self.platforms = self._load_platform_db()
        self.criteria_weights = {}
    
    def analyze_requirements(self, answers: dict) -> dict:
        """Convert user answers to weighted criteria."""
        criteria = {
            "scale": self._scale_from_team_size(answers["team_size"]),
            "budget": self._budget_tier(answers["annual_budget"]),
            "technical": answers["team_expertise"],
            "ecosystem": answers["existing_stack"],
            "compliance": answers.get("regulations", []),
        }
        return criteria
    
    def score_platforms(self, category: str, criteria: dict):
        """Score all platforms in category against criteria."""
        scores = []
        for platform in self.platforms[category]:
            score = self._calculate_fit_score(platform, criteria)
            scores.append({
                "name": platform["name"],
                "score": score,
                "strengths": self._identify_strengths(platform, criteria),
                "gaps": self._identify_gaps(platform, criteria),
                "tco": self._estimate_tco(platform, criteria)
            })
        return sorted(scores, key=lambda x: x["score"], reverse=True)

# Agent definition
advisor_agent = Agent(
    role="Platform Selection Advisor",
    goal="Match requirements to optimal tools",
    tools=[RequirementsGatherer(), PlatformScorer(),
           TCOCalculator(), MigrationPlanner()]
)`,
    },
    relatedPages: [
      { number: 'Page 7.5', title: 'Enterprise Wikis', description: 'Wiki platform deep dive', slug: 'enterprise-wikis' },
      { number: 'Page 7.7', title: 'Vector Databases', description: 'Embedding storage details', slug: 'vector-databases' },
      { number: 'Page 7.6', title: 'Semantic Models', description: 'Metrics layer platforms', slug: 'semantic-models' },
    ],
    prevPage: { title: '7.6 Vector Databases', slug: 'vector-databases' },
    nextPage: undefined,
  },
]

export default pages
