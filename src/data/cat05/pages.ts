import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'llm-fundamentals',
    badge: '🧠 Page 5.1',
    title: 'LLM Fundamentals',
    description: 'Understand how large language models work under the hood. From transformer architecture and attention mechanisms to tokenization and the mathematics that power modern AI systems.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '2017', label: 'Transformers Paper' },
      { value: '1.8T', label: 'GPT-4 Parameters' },
      { value: '128K', label: 'Context Windows' },
      { value: 'BPE', label: 'Tokenization' },
    ],
    overview: {
      title: 'What Are LLMs?',
      subtitle: 'The foundation of modern AI',
      subsections: [
        {
          heading: 'Large Language Models Explained',
          paragraphs: [
            'Large Language Models (LLMs) are neural networks trained on massive text datasets to predict the next token in a sequence. They use the transformer architecture, which revolutionized NLP in 2017 with its attention mechanism that allows the model to consider all parts of the input simultaneously, rather than processing sequentially like previous RNN-based models.',
            'Modern LLMs like GPT-4, Claude, Gemini, and Llama contain billions to trillions of parameters and can perform a wide range of tasks from text generation to reasoning, translation, coding, and more—all from a single model without task-specific training. This emergent capability comes from scale: as models grow larger and train on more data, they develop increasingly sophisticated language understanding.',
            'The key insight behind LLMs is that predicting the next word requires understanding context, grammar, facts, reasoning, and even common sense. By training on trillions of tokens from the internet, books, and code, these models implicitly learn a compressed representation of human knowledge.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Building blocks of language models',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔤',
          title: 'Tokens',
          description: 'Text split into subword units. "Hello" might be one token, "unhappiness" might be 3 tokens.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📊',
          title: 'Embeddings',
          description: 'Tokens converted to dense vectors capturing semantic meaning in high-dimensional space.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: 'Attention',
          description: 'Mechanism to weigh relevance between all token pairs, enabling context understanding.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📐',
          title: 'Parameters',
          description: 'Learned weights in the model. GPT-4 has ~1.8T parameters across 120 layers.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Architecture Comparison',
      subtitle: 'Technical differences between model families',
      cards: [
        { icon: '🛠️', title: 'GPT-4', subtitle: '~1.8T (MoE)', description: 'Excellent', tags: ['Excellent'] },
        { icon: '🛠️', title: 'Claude 3 Opus', subtitle: 'Undisclosed', description: 'Excellent', tags: ['Excellent'] },
        { icon: '🛠️', title: 'Gemini Ultra', subtitle: '~1T+ (MoE)', description: 'Excellent', tags: ['Excellent'] },
        { icon: '🛠️', title: 'Llama 3.1 405B', subtitle: '405B (dense)', description: 'Very Good', tags: ['Very Good'] },
        { icon: '🛠️', title: 'Mistral Large', subtitle: '~123B', description: 'Very Good', tags: ['Very Good'] },
        { icon: '📌', title: 'LLM Fundamentals', subtitle: '', description: 'Understand how large language models work under the hood. From transformer architecture and attention mechanisms to tokenization and the mathematics t', tags: [] },
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
      avatar: '🧠',
      name: 'LLMExpertAgent',
      role: 'LLM Architecture Specialist',
      description: 'Expert in LLM architecture, transformer internals, and model capabilities. Helps you understand how models work, compare architectures, and select the right model for your specific use case and constraints.',
      capabilities: [
        'Explain attention mechanisms in depth',
        'Compare model architectures and tradeoffs',
        'Analyze tokenization strategies',
        'Recommend models for specific use cases',
        'Debug unexpected model behaviors',
        'Optimize inference configurations',
        'Estimate costs and performance',
      ],
      codeFilename: 'Agent Definition\n                        Analysis Task\n                        llm_expert_agent.py',
      code: `# llm_expert_agent.py - LLM Expert Agent
from crewai import Agent, Task, Crew

llm_expert = Agent(
    role="LLM Architecture Expert",
    goal="Help understand LLM internals and selection",
    backstory="""Deep expertise in transformer architecture, 
    attention mechanisms, tokenization strategies, and 
    model capabilities. Trained on research papers from 
    'Attention Is All You Need' through GPT-4, Claude, 
    and latest open-source models. Can explain complex 
    concepts simply and recommend optimal models.""",
    tools=[
        ModelAnalyzer(),
        TokenizerInspector(),
        AttentionVisualizer(),
        BenchmarkComparer(),
        CostEstimator(),
    ]
)

analysis_task = Task(
    description="""
    1. Understand user's LLM requirements and constraints
    2. Analyze relevant model architectures
    3. Compare capabilities, context, and pricing
    4. Explain key technical differences
    5. Recommend optimal model selection
    6. Provide implementation guidance
    7. Estimate costs for expected usage
    """,
    agent=llm_expert,
    expected_output="Model recommendation with rationale"
)

# Execute analysis
crew = Crew(agents=[llm_expert], tasks=[analysis_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.2', title: 'Prompt Engineering', description: 'Master prompting techniques for optimal LLM outputs', slug: 'prompt-engineering' },
      { number: 'Page 5.5', title: 'Embeddings & Vectors', description: 'Understand vector representations for semantic search', slug: 'embeddings' },
      { number: 'Page 5.6', title: 'Model Evaluation', description: 'Benchmark and compare LLM performance objectively', slug: 'model-evaluation' },
    ],
    prevPage: undefined,
    nextPage: { title: '5.2 Prompt Engineering', slug: 'prompt-engineering' },
  },
  {
    slug: 'prompt-engineering',
    badge: '✍️ Page 5.2',
    title: 'Prompt Engineering',
    description: 'Master the art of crafting effective prompts. From zero-shot to chain-of-thought, learn techniques that dramatically improve LLM output quality.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '10x', label: 'Better Results' },
      { value: 'CoT', label: 'Chain of Thought' },
      { value: 'Few', label: 'Shot Learning' },
      { value: '$0', label: 'No Training Cost' },
    ],
    overview: {
      title: 'What is Prompt Engineering?',
      subtitle: 'The art of communicating with LLMs',
      subsections: [
        {
          heading: 'Prompt Engineering Fundamentals',
          paragraphs: [
            'Prompt engineering is the practice of designing and refining inputs to language models to achieve desired outputs. Unlike traditional programming, you\'re communicating intent through natural language rather than code.',
            'A well-crafted prompt can be the difference between a useless response and a highly valuable one. The best prompts are specific, provide context, include examples when needed, and clearly define the expected output format.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Techniques',
      subtitle: 'Foundation prompting strategies',
      columns: 2,
      cards: [
        {
          className: 'technique-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Zero-Shot',
          description: 'Ask the model directly without examples. Works well for straightforward tasks the model has seen during training.',
          examples: [],
        },
        {
          className: 'technique-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Few-Shot',
          description: 'Provide 2-5 examples of input/output pairs. Model learns the pattern and applies it to new inputs.',
          examples: [],
        },
        {
          className: 'technique-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Chain-of-Thought',
          description: 'Prompt the model to explain its reasoning step by step. Dramatically improves complex reasoning tasks.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Prompt Engineering',
          description: 'Master the art of crafting effective prompts. From zero-shot to chain-of-thought, learn techniques that dramatically improve LLM output quality.',
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
        { icon: '📌', title: 'What is Prompt Engineering?', subtitle: '', description: 'The art of communicating with LLMs', tags: [] },
        { icon: '📌', title: 'Core Techniques', subtitle: '', description: 'Foundation prompting strategies', tags: [] },
        { icon: '📌', title: 'Prompt Template Structure', subtitle: '', description: 'Anatomy of an effective prompt', tags: [] },
        { icon: '📌', title: 'Good vs Bad Prompts', subtitle: '', description: 'Learn from examples', tags: [] },
        { icon: '📌', title: 'Advanced Techniques', subtitle: '', description: 'Level up your prompting', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Do\'s and don\'ts of prompt engineering', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered prompt optimization', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning', tags: [] },
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
      subtitle: 'Do\'s and don\'ts of prompt engineering',
      doItems: [
        'Be specific about format and length',
        'Provide relevant context upfront',
        'Use clear, unambiguous language',
        'Include examples for complex tasks',
        'Define the output structure explicitly',
        'Iterate and refine based on outputs',
      ],
      dontItems: [
        'Vague instructions like "make it good"',
        'Overloading with too many requirements',
        'Assuming model knows your context',
        'Conflicting or contradictory instructions',
        'Using ambiguous pronouns',
        'Skipping format specification',
      ],
    },
    agent: {
      avatar: '✍️',
      name: 'PromptEngineerAgent',
      role: 'Prompt Optimization Specialist',
      description: 'Expert in crafting and optimizing prompts for any LLM task. Analyzes your requirements and generates high-quality prompts that maximize output quality.',
      capabilities: [
        'Analyze task requirements',
        'Generate optimized prompts',
        'Select best technique (CoT, few-shot)',
        'Create prompt templates',
        'Debug underperforming prompts',
        'A/B test prompt variations',
      ],
      codeFilename: 'Agent Definition\n                        Optimization Task\n                        prompt_engineer_agent.py',
      code: `# prompt_engineer_agent.py - Prompt Optimization Agent
from crewai import Agent, Task, Crew

prompt_agent = Agent(
    role="Prompt Engineering Expert",
    goal="Craft optimal prompts for any task",
    backstory="""Master of prompt engineering with deep 
    knowledge of zero-shot, few-shot, CoT, and 
    advanced techniques. Expert at turning vague
    requirements into precise, effective prompts.""",
    tools=[
        PromptAnalyzer(),
        TechniqueSelector(),
        TemplateGenerator(),
        PromptTester(),
    ]
)

optimize_task = Task(
    description="""
    1. Analyze the user's task and requirements
    2. Select the optimal prompting technique
    3. Draft initial prompt with best practices
    4. Add structure (role, context, format)
    5. Test and refine for quality
    6. Deliver final optimized prompt
    """,
    agent=prompt_agent,
    expected_output="Production-ready prompt template"
)

# Execute prompt optimization
crew = Crew(agents=[prompt_agent], tasks=[optimize_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.1', title: 'LLM Fundamentals', description: 'Understand how LLMs process prompts', slug: 'llm-fundamentals' },
      { number: 'Page 5.3', title: 'RAG Systems', description: 'Combine prompting with retrieval', slug: 'rag-systems' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'When prompting isn\'t enough', slug: 'fine-tuning' },
    ],
    prevPage: { title: '5.1 LLM Fundamentals', slug: 'llm-fundamentals' },
    nextPage: { title: '5.3 RAG Systems', slug: 'rag-systems' },
  },
  {
    slug: 'rag-systems',
    badge: '🔍 Page 5.3',
    title: 'RAG Systems',
    description: 'Build retrieval-augmented generation pipelines that ground LLM responses in your own data. Master chunking strategies, embedding models, vector databases, and retrieval optimization.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '95%', label: 'Hallucination Reduction' },
      { value: 'Top-K', label: 'Retrieval Strategy' },
      { value: 'Vector', label: 'Semantic Search' },
      { value: 'Real-time', label: 'Knowledge Updates' },
    ],
    overview: {
      title: 'What is RAG?',
      subtitle: 'Retrieval-Augmented Generation explained',
      subsections: [
        {
          heading: 'RAG Architecture Overview',
          paragraphs: [
            'Retrieval-Augmented Generation (RAG) is an architecture that enhances LLM outputs by retrieving relevant information from external knowledge bases before generating responses. Instead of relying solely on knowledge encoded during training, RAG systems dynamically fetch context from your documents, databases, or APIs.',
            'The key insight is that LLMs have a knowledge cutoff and can hallucinate facts. RAG solves both problems: it provides access to current information and grounds responses in actual source documents that can be cited. This is essential for enterprise applications where accuracy and traceability are critical.',
            'RAG pipelines have two phases: indexing (preparing documents) and querying (retrieving and generating). The indexing phase runs once per document update, while querying happens in real-time for each user request. Optimizing both phases is key to building production RAG systems.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Chunking Strategies',
      subtitle: 'How to split documents for optimal retrieval',
      columns: 2,
      cards: [
        {
          className: 'chunk-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Fixed-Size Chunking',
          description: 'Split by character or token count with configurable overlap. Fast and predictable but may break mid-sentence, losing semantic coherence.',
          examples: ['Fast processing, simple implementation', 'Predictable chunk sizes for batching', 'Works with any document type'],
        },
        {
          className: 'chunk-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Semantic Chunking',
          description: 'Use sentence embeddings to identify natural breakpoints where topic changes. Keeps related content together but requires more compute.',
          examples: ['Preserves semantic coherence', 'Better retrieval relevance', 'Natural topic boundaries'],
        },
        {
          className: 'chunk-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Recursive Chunking',
          description: 'Try separators in priority order: paragraphs → sentences → words. Best balance of quality and speed, recommended for most use cases.',
          examples: ['Respects document structure', 'Good balance of speed/quality', 'LangChain default strategy'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'RAG Systems',
          description: 'Build retrieval-augmented generation pipelines that ground LLM responses in your own data. Master chunking strategies, embedding models, vector databases, and retrieval optimization.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Vector Database Comparison',
      subtitle: 'Where to store your embeddings',
      cards: [
        { icon: '🛠️', title: '🌲 Pinecone', subtitle: 'Managed SaaS', description: 'Production, zero-ops', tags: ['BillionsYes'] },
        { icon: '🛠️', title: '🎨 Chroma', subtitle: 'Open Source', description: 'Prototyping, local dev', tags: ['MillionsBasic'] },
        { icon: '🛠️', title: '🔷 Weaviate', subtitle: 'Open Source', description: 'Hybrid search, GraphQL', tags: ['BillionsYes'] },
        { icon: '🛠️', title: '📍 Qdrant', subtitle: 'Open Source', description: 'Filtering, payload search', tags: ['BillionsYes'] },
        { icon: '🛠️', title: '🐘 pgvector', subtitle: 'Postgres Extension', description: 'Existing Postgres stack', tags: ['MillionsYes'] },
        { icon: '🛠️', title: '🔍 Elasticsearch', subtitle: 'Self-hosted', description: 'Enterprise, existing ES', tags: ['BillionsNative'] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'RAG Best Practices',
      subtitle: 'Production-ready implementation tips',
      doItems: [
        'Use hybrid search (dense + sparse) for best results',
        'Add reranking for high-stakes applications',
        'Preserve document metadata for filtering and citations',
        'Implement query expansion/transformation',
        'Test with diverse query types (factual, conceptual, multi-hop)',
        'Monitor retrieval quality with human evaluation',
        'Use contextual compression to fit more in context window',
      ],
      dontItems: [
        'Don\'t use fixed chunk sizes without testing alternatives',
        'Don\'t skip overlap—boundary information gets lost',
        'Don\'t retrieve too many chunks (context gets diluted)',
        'Don\'t ignore retrieval failures—have fallback strategies',
        'Don\'t use the same embedding model for all content types',
        'Don\'t forget to update indices when documents change',
        'Don\'t assume RAG alone prevents all hallucinations',
      ],
    },
    agent: {
      avatar: '🔍',
      name: 'RAGArchitectAgent',
      role: 'RAG System Designer',
      description: 'Expert in designing and optimizing RAG pipelines for production. Helps select chunking strategies, embedding models, vector databases, retrieval methods, and reranking approaches based on your specific requirements and constraints.',
      capabilities: [
        'Design end-to-end RAG architecture',
        'Select optimal chunking strategy',
        'Choose embedding models for your domain',
        'Configure vector database and indexing',
        'Implement hybrid retrieval with reranking',
        'Optimize retrieval quality metrics',
        'Debug poor retrieval performance',
      ],
      codeFilename: 'Agent Definition\n                        RAG Pipeline\n                        rag_architect_agent.py',
      code: `# rag_architect_agent.py - RAG Architecture Agent
from crewai import Agent, Task, Crew

rag_agent = Agent(
    role="RAG System Architect",
    goal="Design optimal RAG pipelines",
    backstory="""Expert in retrieval-augmented generation
    with deep knowledge of chunking strategies, embedding
    models, vector databases, and retrieval optimization.
    Has built production RAG systems handling millions of
    documents with sub-second latency. Optimizes for both
    retrieval quality and system efficiency.""",
    tools=[
        ChunkingAnalyzer(),
        EmbeddingBenchmark(),
        VectorDBConfigurator(),
        RetrievalOptimizer(),
        QualityEvaluator(),
    ]
)

rag_task = Task(
    description="""
    1. Analyze document corpus characteristics
    2. Design optimal chunking strategy
    3. Select embedding model for domain
    4. Configure vector database and indices
    5. Implement retrieval pipeline with reranking
    6. Optimize for latency and quality
    7. Set up monitoring and evaluation
    """,
    agent=rag_agent,
    expected_output="Production RAG system design"
)

# Execute RAG design
crew = Crew(agents=[rag_agent], tasks=[rag_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.5', title: 'Embeddings & Vectors', description: 'Deep dive into embedding models and vector search', slug: 'embeddings' },
      { number: 'Page 5.2', title: 'Prompt Engineering', description: 'Optimize prompts with retrieved context', slug: 'prompt-engineering' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'When RAG isn\'t enough for your use case', slug: 'fine-tuning' },
    ],
    prevPage: { title: '5.2 Prompt Engineering', slug: 'prompt-engineering' },
    nextPage: { title: '5.4 Fine-Tuning LLMs', slug: 'fine-tuning' },
  },
  {
    slug: 'fine-tuning',
    badge: '🎯 Page 5.4',
    title: 'Fine-Tuning LLMs',
    description: 'Customize language models for your specific domain and tasks. Master LoRA, QLoRA, and full fine-tuning techniques to create specialized AI models.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'LoRA', label: '0.1% Parameters' },
      { value: '4-bit', label: 'QLoRA Quantization' },
      { value: '1K+', label: 'Training Examples' },
      { value: 'Hours', label: 'Training Time' },
    ],
    overview: {
      title: 'When to Fine-Tune?',
      subtitle: 'Understanding when fine-tuning is the right choice',
      subsections: [
        {
          heading: 'Fine-Tuning vs. Alternatives',
          paragraphs: [
            'Fine-tuning adapts a pre-trained model to your specific domain or task by continuing training on your data. Unlike prompting or RAG, fine-tuning modifies the model weights themselves, allowing it to learn new patterns, terminology, and behaviors that can\'t be achieved through context alone.',
            'Fine-tune when: You need consistent style/format, domain-specific knowledge baked into the model, lower latency (no retrieval step), proprietary terminology or jargon, or tasks that prompting fails to achieve. Fine-tuning is particularly valuable for structured output generation, code completion in proprietary frameworks, and specialized classification tasks.',
            'Don\'t fine-tune when: You just need access to current information (use RAG), have less than 1,000 high-quality examples, need to frequently update knowledge, or when good prompting achieves acceptable results. Fine-tuning is expensive and creates maintenance burden—make sure it\'s worth it.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Fine-Tuning Methods',
      subtitle: 'Compare approaches for your constraints',
      columns: 2,
      cards: [
        {
          className: 'method-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Full Fine-Tuning',
          description: 'Train all model parameters. Maximum flexibility but requires significant compute and risks catastrophic forgetting.',
          examples: ['Best possible performance ceiling', 'Full model adaptation', 'No architectural constraints'],
        },
        {
          className: 'method-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'LoRA',
          description: 'Train small adapter matrices while freezing base model. Excellent performance with dramatically reduced compute needs.',
          examples: ['Near full fine-tune performance', 'Swap adapters at runtime', 'No catastrophic forgetting'],
        },
        {
          className: 'method-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'QLoRA',
          description: 'LoRA on 4-bit quantized models. Fine-tune 65B models on a single 48GB GPU with minimal quality loss.',
          examples: ['Fine-tune huge models cheaply', 'Consumer hardware viable', '~95% of full LoRA quality'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Fine-Tuning LLMs',
          description: 'Customize language models for your specific domain and tasks. Master LoRA, QLoRA, and full fine-tuning techniques to create specialized AI models.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Platform Comparison',
      subtitle: 'Where to run your fine-tuning jobs',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'OpenAI Fine-tuning', tagText: 'Fully managed', tagClass: 'tag-blue', bestFor: 'Simplest setup, production', complexity: 'medium', rating: '$$$' },
        { icon: '🛠️', name: 'Together AI', tagText: 'Managed', tagClass: 'tag-green', bestFor: 'Open models, good pricing', complexity: 'medium', rating: '$$' },
        { icon: '🛠️', name: 'Hugging Face AutoTrain', tagText: 'Semi-managed', tagClass: 'tag-purple', bestFor: 'Flexibility + convenience', complexity: 'medium', rating: '$$' },
        { icon: '🛠️', name: 'Axolotl (Self-host)', tagText: 'DIY', tagClass: 'tag-orange', bestFor: 'Full control, cost optimization', complexity: 'medium', rating: '$' },
        { icon: '🛠️', name: 'Unsloth', tagText: 'DIY', tagClass: 'tag-pink', bestFor: '2x faster training', complexity: 'medium', rating: '$' },
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
      avatar: '🎯',
      name: 'FineTuningAgent',
      role: 'Model Customization Expert',
      description: 'Expert in fine-tuning strategies, dataset preparation, and training optimization. Helps you decide when to fine-tune, prepare high-quality datasets, select hyperparameters, and deploy custom models.',
      capabilities: [
        'Evaluate fine-tuning necessity',
        'Design dataset collection strategy',
        'Select optimal method (LoRA/QLoRA/Full)',
        'Configure hyperparameters',
        'Monitor training and prevent overfitting',
        'Evaluate and deploy fine-tuned models',
        'Debug training issues',
      ],
      codeFilename: 'Agent Definition\n                        Training Task\n                        finetuning_agent.py',
      code: `# finetuning_agent.py - Fine-Tuning Agent
from crewai import Agent, Task, Crew

ft_agent = Agent(
    role="Fine-Tuning Specialist",
    goal="Create optimized custom LLMs",
    backstory="""Expert in LLM fine-tuning with deep 
    knowledge of LoRA, QLoRA, and full fine-tuning.
    Has trained hundreds of custom models across 
    domains. Specializes in data quality, efficient
    training, and evaluation. Knows when to fine-tune
    vs. use prompting or RAG.""",
    tools=[
        DatasetAnalyzer(),
        HyperparameterSelector(),
        TrainingMonitor(),
        ModelEvaluator(),
        DeploymentHelper(),
    ]
)

ft_task = Task(
    description="""
    1. Analyze use case and determine if fine-tuning needed
    2. Design dataset collection and curation strategy
    3. Select base model and fine-tuning method
    4. Configure optimal hyperparameters
    5. Set up training pipeline with monitoring
    6. Evaluate model quality on held-out data
    7. Package for deployment
    """,
    agent=ft_agent,
    expected_output="Deployed fine-tuned model"
)

# Execute fine-tuning
crew = Crew(agents=[ft_agent], tasks=[ft_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.2', title: 'Prompt Engineering', description: 'Try prompting before fine-tuning', slug: 'prompt-engineering' },
      { number: 'Page 5.3', title: 'RAG Systems', description: 'Alternative for knowledge injection', slug: 'rag-systems' },
      { number: 'Page 5.6', title: 'Model Evaluation', description: 'Evaluate your fine-tuned models', slug: 'model-evaluation' },
    ],
    prevPage: { title: '5.3 RAG Systems', slug: 'rag-systems' },
    nextPage: { title: '5.5 Embeddings & Vectors', slug: 'embeddings' },
  },
  {
    slug: 'embeddings',
    badge: '📊 Page 5.5',
    title: 'Embeddings & Vectors',
    description: 'Transform text into numerical representations for semantic search, clustering, and similarity analysis. Master embedding models and vector databases.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '1536', label: 'Dimensions (ada-002)' },
      { value: 'Cosine', label: 'Similarity Metric' },
      { value: '8191', label: 'Max Tokens' },
      { value: 'MTEB', label: 'Benchmark' },
    ],
    overview: {
      title: 'What Are Embeddings?',
      subtitle: 'Understanding vector representations of text',
      subsections: [
        {
          heading: 'Embeddings Explained',
          paragraphs: [
            'Embeddings are dense numerical vectors that capture the semantic meaning of text. Unlike keyword matching, embeddings understand that "automobile" and "car" are similar, even though they share no letters. This enables semantic search, where you find content by meaning rather than exact word overlap.',
            'Embedding models are trained on massive text corpora to learn relationships between concepts. When you embed a sentence, the model outputs a fixed-size vector (e.g., 1536 dimensions) where each dimension represents some learned semantic feature. Similar texts produce vectors that are close together in this high-dimensional space.',
            'Key insight: Embeddings encode relationships. Vector arithmetic works: embedding("king") - embedding("man") + embedding("woman") ≈ embedding("queen"). This emergent property enables powerful applications like analogy completion, clustering, and recommendation systems.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Embedding Models',
      subtitle: 'Popular models for generating embeddings',
      columns: 2,
      cards: [
        {
          className: 'model-0',
          borderColor: '#3B82F6',
          icon: '🤖',
          title: 'text-embedding-3-large',
          description: 'OpenAI\'s best embedding model with excellent performance across retrieval, classification, and clustering tasks. Supports dimension reduction for efficiency.',
          examples: [],
        },
        {
          className: 'model-1',
          borderColor: '#10B981',
          icon: '🤗',
          title: 'BGE-large-en-v1.5',
          description: 'Top open-source embedding model on MTEB benchmark. Self-hostable, no API costs. Excellent for production RAG with Hugging Face integration.',
          examples: [],
        },
        {
          className: 'model-2',
          borderColor: '#8B5CF6',
          icon: '🚀',
          title: 'Cohere embed-v3',
          description: 'Excellent multilingual support with 100+ languages. Built-in search/document type optimization. Great for international applications.',
          examples: [],
        },
        {
          className: 'model-3',
          borderColor: '#F59E0B',
          icon: '⚡',
          title: 'all-MiniLM-L6-v2',
          description: 'Extremely fast and lightweight. 5x faster than larger models with good quality. Perfect for prototyping and resource-constrained environments.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Model Comparison',
      subtitle: 'Choosing the right embedding model',
      cards: [
        { icon: '🛠️', title: 'text-embedding-3-large', subtitle: '3072', description: '$0.13/1M', tags: ['64.6'] },
        { icon: '🛠️', title: 'BGE-large-en-v1.5', subtitle: '1024', description: 'Free (self-host)', tags: ['64.2'] },
        { icon: '🛠️', title: 'Cohere embed-v3', subtitle: '1024', description: '$0.10/1M', tags: ['64.5'] },
        { icon: '🛠️', title: 'text-embedding-ada-002', subtitle: '1536', description: '$0.10/1M', tags: ['61.0'] },
        { icon: '🛠️', title: 'all-MiniLM-L6-v2', subtitle: '384', description: 'Free (self-host)', tags: ['56.3'] },
        { icon: '📌', title: 'Embeddings & Vectors', subtitle: '', description: 'Transform text into numerical representations for semantic search, clustering, and similarity analysis. Master embedding models and vector databases.', tags: [] },
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
      name: 'EmbeddingExpertAgent',
      role: 'Vector & Similarity Specialist',
      description: 'Expert in embedding models, vector databases, and similarity search. Helps select the right embedding model, configure vector indices, and optimize retrieval quality for your specific use case.',
      capabilities: [
        'Select optimal embedding model',
        'Configure vector database indices',
        'Optimize similarity search',
        'Benchmark embedding quality',
        'Design clustering pipelines',
        'Implement semantic search',
        'Debug retrieval issues',
      ],
      codeFilename: 'Agent Definition\n                        Embedding Task\n                        embedding_expert_agent.py',
      code: `# embedding_expert_agent.py - Embedding Expert Agent
from crewai import Agent, Task, Crew

embed_agent = Agent(
    role="Embedding & Vector Expert",
    goal="Optimize semantic search and similarity",
    backstory="""Expert in embedding models and vector 
    databases with deep knowledge of MTEB benchmarks,
    similarity metrics, and retrieval optimization.
    Has built production semantic search systems
    handling billions of vectors with sub-100ms latency.
    Knows trade-offs between models and metrics.""",
    tools=[
        EmbeddingBenchmark(),
        SimilarityAnalyzer(),
        VectorIndexOptimizer(),
        ClusteringVisualizer(),
        RetrievalTester(),
    ]
)

embed_task = Task(
    description="""
    1. Analyze use case requirements
    2. Select optimal embedding model
    3. Configure distance metric
    4. Design vector index strategy
    5. Benchmark retrieval quality
    6. Optimize for latency and accuracy
    7. Document best practices
    """,
    agent=embed_agent,
    expected_output="Optimized embedding pipeline"
)

# Execute embedding optimization
crew = Crew(agents=[embed_agent], tasks=[embed_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.3', title: 'RAG Systems', description: 'Use embeddings for retrieval-augmented generation', slug: 'rag-systems' },
      { number: 'Page 5.1', title: 'LLM Fundamentals', description: 'How embeddings fit into LLM architecture', slug: 'llm-fundamentals' },
      { number: 'Page 5.6', title: 'Model Evaluation', description: 'Benchmark embedding model quality', slug: 'model-evaluation' },
    ],
    prevPage: { title: '5.4 Fine-Tuning LLMs', slug: 'fine-tuning' },
    nextPage: { title: '5.6 Model Evaluation', slug: 'model-evaluation' },
  },
  {
    slug: 'model-evaluation',
    badge: '📈 Page 5.6',
    title: 'Model Evaluation',
    description: 'Measure LLM performance objectively with benchmarks, metrics, and evaluation frameworks. Compare models, track quality, and make data-driven decisions.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: 'MMLU', label: 'Knowledge Benchmark' },
      { value: 'HumanEval', label: 'Coding Benchmark' },
      { value: 'LLM', label: 'As-a-Judge' },
      { value: 'A/B', label: 'Testing' },
    ],
    overview: {
      title: 'Why Evaluate LLMs?',
      subtitle: 'The importance of rigorous model evaluation',
      subsections: [
        {
          heading: 'Evaluation Fundamentals',
          paragraphs: [
            'LLM evaluation is challenging because outputs are open-ended text, not simple classifications. Unlike traditional ML where accuracy is straightforward, evaluating whether "The capital of France is Paris" is better than "Paris is the capital of France" requires nuanced judgment. This complexity demands multiple evaluation approaches.',
            'Proper evaluation serves three critical purposes: model selection (choosing between GPT-4, Claude, Gemini), quality assurance (ensuring your fine-tuned model works), and regression detection (catching when prompt changes degrade performance). Without evaluation, you\'re flying blind.',
            'The key insight is that no single metric captures everything. Combine automated benchmarks for efficiency, human evaluation for nuance, and LLM-as-judge for scalable quality assessment. Different use cases emphasize different metrics—coding tasks need correctness, creative writing needs style, and QA needs factuality.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Evaluation Metrics',
      subtitle: 'Common metrics for different task types',
      columns: 2,
      cards: [
        {
          className: 'metric-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: '',
          description: 'Does the output exactly match the expected answer? Best for factual QA with definitive answers.',
          examples: [],
        },
        {
          className: 'metric-1',
          borderColor: '#10B981',
          icon: '📝',
          title: '',
          description: 'N-gram overlap between generated and reference text. Standard for translation and summarization.',
          examples: [],
        },
        {
          className: 'metric-2',
          borderColor: '#8B5CF6',
          icon: '🔴',
          title: '',
          description: 'Recall-oriented overlap. ROUGE-L measures longest common subsequence. Good for summarization.',
          examples: [],
        },
        {
          className: 'metric-3',
          borderColor: '#F59E0B',
          icon: '✅',
          title: '',
          description: 'Probability that at least one of k code samples passes all tests. Standard for code generation.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Popular Benchmarks',
      subtitle: 'Standard benchmarks for LLM evaluation',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'MMLU', tagText: 'Broad knowledge across 57 subjects', tagClass: 'tag-blue', bestFor: '', complexity: 'medium', rating: 'Multiple choice QA' },
        { icon: '🛠️', name: 'HumanEval', tagText: 'Code generation accuracy', tagClass: 'tag-green', bestFor: '', complexity: 'medium', rating: 'Function completion' },
        { icon: '🛠️', name: 'GSM8K', tagText: 'Grade school math reasoning', tagClass: 'tag-purple', bestFor: '', complexity: 'medium', rating: 'Word problems' },
        { icon: '🛠️', name: 'MATH', tagText: 'Competition-level math', tagClass: 'tag-orange', bestFor: '', complexity: 'medium', rating: 'Proof-style problems' },
        { icon: '🛠️', name: 'MT-Bench', tagText: 'Multi-turn conversation quality', tagClass: 'tag-pink', bestFor: '', complexity: 'medium', rating: 'Dialogue scoring' },
        { icon: '🛠️', name: 'TruthfulQA', tagText: 'Factual accuracy, avoiding hallucination', tagClass: 'tag-blue', bestFor: '', complexity: 'medium', rating: 'QA with traps' },
      ],
    },
    tools: {
      title: 'Evaluation Tools',
      subtitle: 'Platforms and frameworks for LLM evaluation',
      items: [
        { icon: '🛠️', name: 'LangSmith', vendor: '', description: 'End-to-end LLM observability and evaluation platform. Track prompts, runs, and quality metrics in production.', tags: [] },
        { icon: '🛠️', name: 'Weights & Biases', vendor: '', description: 'ML experiment tracking with LLM-specific features. Great for fine-tuning experiments and model comparison.', tags: [] },
        { icon: '🛠️', name: 'DeepEval', vendor: '', description: 'Open-source LLM evaluation framework. Pytest-like interface with 14+ built-in metrics including LLM-as-judge.', tags: [] },
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
      avatar: '📈',
      name: 'EvalExpertAgent',
      role: 'LLM Evaluation Specialist',
      description: 'Expert in LLM benchmarking, evaluation frameworks, and quality metrics. Helps design evaluation strategies, select appropriate benchmarks, implement LLM-as-judge systems, and interpret results for decision-making.',
      capabilities: [
        'Design evaluation frameworks',
        'Select appropriate benchmarks',
        'Implement LLM-as-judge',
        'Build custom evaluation datasets',
        'Analyze and interpret results',
        'Set up regression testing',
        'Compare model performance',
      ],
      codeFilename: 'Agent Definition\n                        Evaluation Task\n                        eval_expert_agent.py',
      code: `# eval_expert_agent.py - Evaluation Expert Agent
from crewai import Agent, Task, Crew

eval_agent = Agent(
    role="LLM Evaluation Expert",
    goal="Ensure rigorous model quality assessment",
    backstory="""Expert in LLM evaluation with deep 
    knowledge of benchmarks (MMLU, HumanEval, GSM8K),
    metrics (BLEU, ROUGE, Pass@k), and evaluation
    frameworks. Has designed evaluation systems for
    production LLM applications. Expert in LLM-as-judge
    and human evaluation methodologies.""",
    tools=[
        BenchmarkRunner(),
        MetricsCalculator(),
        LLMJudge(),
        DatasetBuilder(),
        ResultsAnalyzer(),
    ]
)

eval_task = Task(
    description="""
    1. Understand evaluation requirements
    2. Select appropriate benchmarks and metrics
    3. Build or curate evaluation dataset
    4. Run automated evaluations
    5. Implement LLM-as-judge for nuanced tasks
    6. Analyze results and identify patterns
    7. Generate actionable recommendations
    """,
    agent=eval_agent,
    expected_output="Comprehensive evaluation report"
)

# Execute evaluation
crew = Crew(agents=[eval_agent], tasks=[eval_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.1', title: 'LLM Fundamentals', description: 'Understand what you\'re evaluating', slug: 'llm-fundamentals' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'Evaluate your fine-tuned models', slug: 'fine-tuning' },
      { number: 'Page 5.8', title: 'Responsible AI', description: 'Safety and bias evaluation', slug: 'responsible-ai' },
    ],
    prevPage: { title: '5.5 Embeddings & Vectors', slug: 'embeddings' },
    nextPage: { title: '5.7 Multimodal AI', slug: 'multimodal' },
  },
  {
    slug: 'multimodal',
    badge: '🖼️ Page 5.7',
    title: 'Multimodal AI',
    description: 'Explore AI systems that understand and generate multiple modalities: text, images, audio, and video. Build applications that see, hear, and communicate across formats.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'Vision', label: 'Image Understanding' },
      { value: 'Audio', label: 'Speech & Sound' },
      { value: 'Video', label: 'Temporal Analysis' },
      { value: 'Gen', label: 'Image Creation' },
    ],
    overview: {
      title: 'What is Multimodal AI?',
      subtitle: 'Understanding AI across multiple data types',
      subsections: [
        {
          heading: 'Beyond Text: The Multimodal Revolution',
          paragraphs: [
            'Multimodal AI systems can process and generate multiple types of data: text, images, audio, and video. Unlike text-only LLMs, these models understand the visual world, can describe images, answer questions about photos, and generate new images from text descriptions.',
            'The breakthrough came from training models on paired data—images with captions, videos with transcripts, audio with text. Models like GPT-4V, Claude 3, and Gemini learn to align representations across modalities, enabling them to "see" an image and reason about it in natural language.',
            'Key capabilities: Visual question answering, image captioning, document understanding (OCR + reasoning), image generation from text, video summarization, speech-to-text and text-to-speech, and real-time multimodal conversation. These enable entirely new application categories.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Multimodal Models',
      subtitle: 'Leading vision-language models',
      columns: 2,
      cards: [
        {
          className: 'model-0',
          borderColor: '#3B82F6',
          icon: '🤖',
          title: 'GPT-4o',
          description: 'Native multimodal model processing text, images, and audio in real-time. Powers ChatGPT voice mode with natural conversation.',
          examples: [],
        },
        {
          className: 'model-1',
          borderColor: '#10B981',
          icon: '🧠',
          title: 'Claude 3.5 Sonnet',
          description: 'Excellent image understanding with strong reasoning. Best-in-class for document analysis, charts, and complex visual reasoning.',
          examples: [],
        },
        {
          className: 'model-2',
          borderColor: '#8B5CF6',
          icon: '💎',
          title: 'Gemini 1.5 Pro',
          description: 'Process up to 1 hour of video or 11 hours of audio natively. Massive context window enables entire document analysis.',
          examples: [],
        },
        {
          className: 'model-3',
          borderColor: '#F59E0B',
          icon: '🦙',
          title: 'LLaVA 1.6',
          description: 'Leading open-source vision-language model. Self-hostable with competitive performance on visual reasoning tasks.',
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
        { icon: '📌', title: 'What is Multimodal AI?', subtitle: '', description: 'Understanding AI across multiple data types', tags: [] },
        { icon: '📌', title: 'Multimodal Architecture', subtitle: '', description: 'How models process multiple input/output types', tags: [] },
        { icon: '📌', title: 'Vision-Language Tasks', subtitle: '', description: 'What multimodal models can do with images', tags: [] },
        { icon: '📌', title: 'Multimodal Models', subtitle: '', description: 'Leading vision-language models', tags: [] },
        { icon: '📌', title: 'Image Generation', subtitle: '', description: 'Create images from text descriptions', tags: [] },
        { icon: '📌', title: 'Multimodal Use Cases', subtitle: '', description: 'Real-world applications', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered multimodal specialist', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning', tags: [] },
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
      avatar: '🖼️',
      name: 'MultimodalAgent',
      role: 'Vision-Language Specialist',
      description: 'Expert in multimodal AI applications, vision-language models, and image generation. Helps design systems that process images, video, and audio alongside text for comprehensive understanding.',
      capabilities: [
        'Analyze images and documents',
        'Select multimodal models',
        'Design vision pipelines',
        'Generate images from descriptions',
        'Build video analysis systems',
        'Implement visual search',
        'Optimize multimodal prompts',
      ],
      codeFilename: 'Agent Definition\n                        Vision Task\n                        multimodal_agent.py',
      code: `# multimodal_agent.py - Multimodal Agent
from crewai import Agent, Task, Crew

mm_agent = Agent(
    role="Multimodal AI Expert",
    goal="Build systems that see and understand",
    backstory="""Expert in vision-language models, image 
    generation, and multimodal applications. Deep 
    knowledge of GPT-4V, Claude Vision, Gemini, and 
    open-source alternatives like LLaVA. Has built
    document processing, visual search, and video
    analysis systems at scale.""",
    tools=[
        VisionAnalyzer(),
        ImageGenerator(),
        DocumentProcessor(),
        VideoSummarizer(),
        MultimodalOptimizer(),
    ]
)

mm_task = Task(
    description="""
    1. Analyze multimodal requirements
    2. Select appropriate vision-language model
    3. Design input processing pipeline
    4. Implement visual understanding features
    5. Add image generation if needed
    6. Optimize for latency and accuracy
    7. Deploy and monitor performance
    """,
    agent=mm_agent,
    expected_output="Multimodal AI system"
)

# Execute multimodal task
crew = Crew(agents=[mm_agent], tasks=[mm_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.1', title: 'LLM Fundamentals', description: 'Foundation for multimodal models', slug: 'llm-fundamentals' },
      { number: 'Page 5.5', title: 'Embeddings & Vectors', description: 'Visual embeddings and CLIP', slug: 'embeddings' },
      { number: 'Page 5.9', title: 'LLM Deployment', description: 'Deploy multimodal models', slug: 'deployment' },
    ],
    prevPage: { title: '5.6 Model Evaluation', slug: 'model-evaluation' },
    nextPage: { title: '5.8 Responsible AI', slug: 'responsible-ai' },
  },
  {
    slug: 'responsible-ai',
    badge: '⚖️ Page 5.8',
    title: 'Responsible AI',
    description: 'Build AI systems that are safe, fair, and trustworthy. Learn about safety frameworks, bias mitigation, guardrails, and ethical deployment practices.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: 'Safety', label: 'Harm Prevention' },
      { value: 'Fairness', label: 'Bias Mitigation' },
      { value: 'Trust', label: 'Transparency' },
      { value: 'Guard', label: 'Content Filters' },
    ],
    overview: {
      title: 'Why Responsible AI?',
      subtitle: 'Building trustworthy AI systems',
      subsections: [
        {
          heading: 'The Stakes Are High',
          paragraphs: [
            'Large language models can generate harmful content, perpetuate biases, leak private information, and be misused for malicious purposes. Responsible AI practices aren\'t just ethical imperatives—they\'re business necessities. One viral incident of harmful AI output can destroy brand reputation and invite regulatory scrutiny.',
            'Responsible AI encompasses several dimensions: safety (preventing harmful outputs), fairness (avoiding discriminatory behavior), privacy (protecting user data), transparency (explainability and disclosure), and accountability (clear ownership and oversight).',
            'The good news: robust frameworks, tools, and best practices exist. From Constitutional AI and RLHF for alignment, to guardrails for content filtering, to bias audits for fairness—you can build AI systems that are both powerful and responsible. The key is building safety in from the start, not bolting it on later.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Risk Categories',
      subtitle: 'Understanding what can go wrong',
      columns: 2,
      cards: [
        {
          className: 'risk-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'Harmful Content',
          description: 'Model generates content that could cause harm to users or society.',
          examples: ['Violence or self-harm instructions', 'Illegal activity guidance', 'Explicit or CSAM content', 'Dangerous misinformation'],
        },
        {
          className: 'risk-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Bias & Discrimination',
          description: 'Model exhibits unfair treatment based on protected characteristics.',
          examples: ['Racial or gender stereotypes', 'Discriminatory recommendations', 'Unequal performance across groups', 'Exclusionary language'],
        },
        {
          className: 'risk-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Privacy & Security',
          description: 'Model leaks sensitive information or is exploited by attackers.',
          examples: ['PII in training data leaked', 'Prompt injection attacks', 'Jailbreaking system prompts', 'Data exfiltration'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Responsible AI',
          description: 'Build AI systems that are safe, fair, and trustworthy. Learn about safety frameworks, bias mitigation, guardrails, and ethical deployment practices.',
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
        { icon: '📌', title: 'Why Responsible AI?', subtitle: '', description: 'Building trustworthy AI systems', tags: [] },
        { icon: '📌', title: 'Defense in Depth', subtitle: '', description: 'Multi-layer safety architecture', tags: [] },
        { icon: '📌', title: 'Risk Categories', subtitle: '', description: 'Understanding what can go wrong', tags: [] },
        { icon: '📌', title: 'Bias Detection & Mitigation', subtitle: '', description: 'Building fair AI systems', tags: [] },
        { icon: '📌', title: 'Guardrails & Content Filtering', subtitle: '', description: 'Runtime safety mechanisms', tags: [] },
        { icon: '📌', title: 'Responsible AI Checklist', subtitle: '', description: 'Pre-deployment verification', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered safety specialist', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning', tags: [] },
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
      avatar: '⚖️',
      name: 'ResponsibleAIAgent',
      role: 'AI Safety & Ethics Specialist',
      description: 'Expert in AI safety, fairness, and responsible deployment. Helps audit systems for bias, implement guardrails, ensure regulatory compliance, and build trustworthy AI applications.',
      capabilities: [
        'Conduct bias audits',
        'Design guardrail systems',
        'Red-team for vulnerabilities',
        'Ensure regulatory compliance',
        'Create safety documentation',
        'Set up monitoring systems',
        'Design human oversight workflows',
      ],
      codeFilename: 'Agent Definition\n                        Safety Audit\n                        responsible_ai_agent.py',
      code: `# responsible_ai_agent.py - Responsible AI Agent
from crewai import Agent, Task, Crew

rai_agent = Agent(
    role="Responsible AI Specialist",
    goal="Ensure AI systems are safe and fair",
    backstory="""Expert in AI ethics, safety, and 
    responsible deployment. Deep knowledge of bias 
    detection, guardrail systems, Constitutional AI,
    and regulatory frameworks (EU AI Act, GDPR).
    Has audited dozens of production AI systems and
    implemented safety measures that prevented major
    incidents.""",
    tools=[
        BiasAuditor(),
        GuardrailTester(),
        RedTeamSimulator(),
        ComplianceChecker(),
        SafetyMonitor(),
    ]
)

rai_task = Task(
    description="""
    1. Audit system for bias across demographics
    2. Test guardrails against adversarial inputs
    3. Red-team for jailbreaks and exploits
    4. Check regulatory compliance requirements
    5. Set up safety monitoring and alerting
    6. Create incident response procedures
    7. Document safety measures and limitations
    """,
    agent=rai_agent,
    expected_output="Safety certification report"
)

# Execute safety audit
crew = Crew(agents=[rai_agent], tasks=[rai_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.6', title: 'Model Evaluation', description: 'Evaluate fairness and safety metrics', slug: 'model-evaluation' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'Safety-aware model customization', slug: 'fine-tuning' },
      { number: 'Page 5.9', title: 'LLM Deployment', description: 'Deploy with safety guardrails', slug: 'deployment' },
    ],
    prevPage: { title: '5.7 Multimodal AI', slug: 'multimodal' },
    nextPage: { title: '5.9 LLM Deployment', slug: 'deployment' },
  },
  {
    slug: 'deployment',
    badge: '🚀 Page 5.9',
    title: 'LLM Deployment',
    description: 'Deploy language models to production with optimal performance. Master inference optimization, hosting options, scaling strategies, and monitoring best practices.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '<100ms', label: 'Target Latency' },
      { value: 'vLLM', label: 'Inference Engine' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: 'Scale', label: 'Auto-scaling' },
    ],
    overview: {
      title: 'Deployment Fundamentals',
      subtitle: 'Getting LLMs into production',
      subsections: [
        {
          heading: 'The Production Challenge',
          paragraphs: [
            'Deploying LLMs is fundamentally different from traditional ML models. Models with billions of parameters require significant GPU memory, inference is computationally expensive, and latency requirements are strict for real-time applications. A single 70B model needs ~140GB of GPU memory in FP16!',
            'You have three main options: API providers (OpenAI, Anthropic) for simplicity, managed inference (Together, Anyscale, Replicate) for balance, or self-hosting (vLLM, TensorRT-LLM) for maximum control. Each has trade-offs in cost, latency, flexibility, and operational complexity.',
            'Key considerations: latency requirements, throughput needs, cost constraints, data privacy requirements, model customization needs, and operational expertise. Many organizations use a hybrid approach: APIs for general tasks, self-hosted for sensitive data or custom models.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Hosting Options',
      subtitle: 'Where to run your LLM inference',
      columns: 2,
      cards: [
        {
          className: 'hosting-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'API Providers',
          description: 'Simplest option—just call an API. No infrastructure to manage, but data leaves your environment and costs scale linearly with usage.',
          examples: ['Zero infrastructure management', 'Always latest models', 'Instant scaling', 'Built-in safety features'],
        },
        {
          className: 'hosting-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'Managed Inference',
          description: 'Run open-source models on managed infrastructure. Better economics than APIs, with model flexibility and some customization options.',
          examples: ['Open-source model access', 'Custom fine-tuned models', 'Lower costs than APIs', 'Managed scaling'],
        },
        {
          className: 'hosting-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Self-Hosted',
          description: 'Full control over infrastructure. Best economics at scale, data stays on-premises, but requires significant operational expertise.',
          examples: ['Complete data control', 'Maximum customization', 'Lowest cost at scale', 'No vendor lock-in'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'LLM Deployment',
          description: 'Deploy language models to production with optimal performance. Master inference optimization, hosting options, scaling strategies, and monitoring best practices.',
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
        { icon: '📌', title: 'Deployment Fundamentals', subtitle: '', description: 'Getting LLMs into production', tags: [] },
        { icon: '📌', title: 'Production Architecture', subtitle: '', description: 'Typical LLM deployment stack', tags: [] },
        { icon: '📌', title: 'Hosting Options', subtitle: '', description: 'Where to run your LLM inference', tags: [] },
        { icon: '📌', title: 'Inference Optimization', subtitle: '', description: 'Speed up LLM inference', tags: [] },
        { icon: '📌', title: 'Inference Engines', subtitle: '', description: 'Software for serving LLMs', tags: [] },
        { icon: '📌', title: 'Monitoring & Observability', subtitle: '', description: 'Track production health', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered deployment specialist', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning', tags: [] },
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
      name: 'DeploymentAgent',
      role: 'LLM Infrastructure Specialist',
      description: 'Expert in LLM deployment, inference optimization, and production infrastructure. Helps select hosting options, configure inference engines, optimize latency, and set up monitoring.',
      capabilities: [
        'Design deployment architecture',
        'Select optimal hosting strategy',
        'Configure inference engines',
        'Implement quantization',
        'Set up auto-scaling',
        'Configure monitoring and alerting',
        'Optimize latency and throughput',
      ],
      codeFilename: 'Agent Definition\n                        Deploy Task\n                        deployment_agent.py',
      code: `# deployment_agent.py - Deployment Agent
from crewai import Agent, Task, Crew

deploy_agent = Agent(
    role="LLM Deployment Specialist",
    goal="Deploy LLMs with optimal performance",
    backstory="""Expert in LLM deployment and inference 
    optimization. Deep knowledge of vLLM, TensorRT-LLM,
    quantization techniques, and cloud GPU infrastructure.
    Has deployed systems handling millions of requests
    with sub-100ms latency. Knows trade-offs between
    APIs, managed services, and self-hosting.""",
    tools=[
        InfraPlanner(),
        InferenceOptimizer(),
        ScalingConfigurator(),
        MonitoringSetup(),
        CostCalculator(),
    ]
)

deploy_task = Task(
    description="""
    1. Analyze latency/throughput requirements
    2. Select optimal hosting strategy
    3. Choose and configure inference engine
    4. Implement optimization techniques
    5. Set up auto-scaling and load balancing
    6. Configure monitoring and alerting
    7. Document runbooks and procedures
    """,
    agent=deploy_agent,
    expected_output="Production deployment plan"
)

# Execute deployment
crew = Crew(agents=[deploy_agent], tasks=[deploy_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.10', title: 'Cost Optimization', description: 'Reduce deployment and inference costs', slug: 'cost-optimization' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'Deploy custom fine-tuned models', slug: 'fine-tuning' },
      { number: 'Page 5.8', title: 'Responsible AI', description: 'Deploy with safety guardrails', slug: 'responsible-ai' },
    ],
    prevPage: { title: '5.8 Responsible AI', slug: 'responsible-ai' },
    nextPage: { title: '5.10 Cost Optimization', slug: 'cost-optimization' },
  },
  {
    slug: 'cost-optimization',
    badge: '💰 Page 5.10',
    title: 'Cost Optimization',
    description: 'Reduce LLM costs without sacrificing quality. Master token optimization, model selection, caching strategies, and infrastructure economics.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '70%', label: 'Potential Savings' },
      { value: 'Cache', label: 'Prompt Caching' },
      { value: 'Route', label: 'Model Routing' },
      { value: 'Batch', label: 'Request Batching' },
    ],
    overview: {
      title: 'Understanding LLM Costs',
      subtitle: 'Where your money goes',
      subsections: [
        {
          heading: 'The Cost Challenge',
          paragraphs: [
            'LLM costs can spiral quickly. A simple chatbot at 10K users might cost $500/month—but scale to 1M users and you\'re looking at $50K/month. Understanding cost drivers is the first step to optimization: you pay per token for API calls, per GPU-hour for self-hosting, and hidden costs in engineering time.',
            'The good news: most organizations can cut LLM costs by 50-70% with smart optimization. The key levers are model selection (right-size for the task), prompt engineering (shorter prompts = lower costs), caching (don\'t pay twice for the same query), and routing (send easy queries to cheap models).',
            'Cost formula: Total Cost = (Input Tokens × Input Price) + (Output Tokens × Output Price). Since output tokens cost 3-4x more than input tokens for most providers, reducing output length has outsized impact. System prompts count as input tokens on every request—keep them concise.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Optimization Strategies',
      subtitle: 'Techniques to reduce costs',
      columns: 2,
      cards: [
        {
          className: 'strategy-0',
          borderColor: '#3B82F6',
          icon: '🔀',
          title: 'Model Routing',
          description: 'Route simple queries to cheap models (GPT-4o-mini), complex ones to powerful models (GPT-4o). Use a classifier or heuristics to decide.',
          examples: ['Start with task complexity classification', 'Route by query length, domain, or user tier', 'Fallback to better model on low confidence'],
        },
        {
          className: 'strategy-1',
          borderColor: '#10B981',
          icon: '💾',
          title: 'Semantic Caching',
          description: 'Cache responses for similar queries. Use embedding similarity to find cache hits even when queries aren\'t identical.',
          examples: ['Set similarity threshold (e.g., 0.95)', 'Cache at different granularities', 'Invalidate cache on context changes'],
        },
        {
          className: 'strategy-2',
          borderColor: '#8B5CF6',
          icon: '✂️',
          title: 'Prompt Optimization',
          description: 'Shorter prompts = lower costs. Compress system prompts, remove redundancy, use abbreviations the model understands.',
          examples: ['Audit system prompts for redundancy', 'Use structured formats (JSON schema)', 'Limit output length explicitly'],
        },
        {
          className: 'strategy-3',
          borderColor: '#F59E0B',
          icon: '📦',
          title: 'Batch Processing',
          description: 'OpenAI\'s batch API offers 50% discount for non-urgent requests with 24h turnaround. Perfect for analytics, classification, embeddings.',
          examples: ['Queue non-urgent requests', 'Batch similar operations together', 'Use for nightly data processing'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Provider Pricing Details',
      subtitle: 'Detailed cost comparison',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'GPT-4o', tagText: '$5.00$15.00', tagClass: 'tag-blue', bestFor: 'Complex reasoning', complexity: 'medium', rating: '$15.00' },
        { icon: '🛠️', name: 'GPT-4o-mini', tagText: '$0.15$0.60', tagClass: 'tag-green', bestFor: 'Simple tasks, volume', complexity: 'medium', rating: '$0.60' },
        { icon: '🛠️', name: 'Claude 3.5 Sonnet', tagText: '$3.00$15.00', tagClass: 'tag-purple', bestFor: 'Long context, coding', complexity: 'medium', rating: '$15.00' },
        { icon: '🛠️', name: 'Claude 3 Haiku', tagText: '$0.25$1.25', tagClass: 'tag-orange', bestFor: 'Fast, cheap tasks', complexity: 'medium', rating: '$1.25' },
        { icon: '🛠️', name: 'Gemini 1.5 Pro', tagText: '$1.25$5.00', tagClass: 'tag-pink', bestFor: 'Very long context', complexity: 'medium', rating: '$5.00' },
        { icon: '🛠️', name: 'text-embedding-3-large', tagText: '$0.13', tagClass: 'tag-blue', bestFor: 'Embeddings', complexity: 'medium', rating: 'N/A' },
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
      avatar: '💰',
      name: 'CostOptimizerAgent',
      role: 'LLM Economics Specialist',
      description: 'Expert in LLM cost optimization, pricing analysis, and infrastructure economics. Helps analyze spending patterns, identify optimization opportunities, implement cost-saving strategies, and forecast budgets.',
      capabilities: [
        'Analyze current LLM spend',
        'Identify optimization opportunities',
        'Implement model routing',
        'Set up semantic caching',
        'Optimize prompts for cost',
        'Evaluate self-hosting ROI',
        'Forecast future costs',
      ],
      codeFilename: 'Agent Definition\n                        Cost Analysis\n                        cost_optimizer_agent.py',
      code: `# cost_optimizer_agent.py - Cost Optimizer Agent
from crewai import Agent, Task, Crew

cost_agent = Agent(
    role="LLM Cost Optimizer",
    goal="Minimize LLM costs without quality loss",
    backstory="""Expert in LLM economics and cost 
    optimization. Deep knowledge of pricing models,
    caching strategies, model routing, and when to
    self-host vs. use APIs. Has helped companies
    reduce LLM spend by 50-80% while maintaining
    output quality through smart optimization.""",
    tools=[
        CostAnalyzer(),
        RoutingOptimizer(),
        CacheConfigurator(),
        PromptCompressor(),
        ROICalculator(),
    ]
)

cost_task = Task(
    description="""
    1. Analyze current LLM spending patterns
    2. Identify high-cost, low-complexity queries
    3. Design model routing strategy
    4. Implement semantic caching layer
    5. Optimize prompts for token efficiency
    6. Evaluate self-hosting economics
    7. Create cost monitoring dashboard
    """,
    agent=cost_agent,
    expected_output="Cost optimization plan with projections"
)

# Execute cost optimization
crew = Crew(agents=[cost_agent], tasks=[cost_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 5.9', title: 'LLM Deployment', description: 'Self-hosting for cost reduction', slug: 'deployment' },
      { number: 'Page 5.2', title: 'Prompt Engineering', description: 'Optimize prompts for efficiency', slug: 'prompt-engineering' },
      { number: 'Page 5.4', title: 'Fine-Tuning', description: 'Train smaller, cheaper models', slug: 'fine-tuning' },
    ],
    prevPage: { title: '5.9 LLM Deployment', slug: 'deployment' },
    nextPage: undefined,
  },
]

registerPages('generative-ai', pages)
export default pages
