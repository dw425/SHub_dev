import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'foundation-models',
    badge: '🧠 Page 19.1',
    title: 'Foundation Models',
    description: 'Comprehensive guide to frontier and open-source large language models. Compare capabilities, benchmarks, pricing, and learn how to select the right model for your use case.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '7+', label: 'Major AI Labs' },
      { value: '2M', label: 'Max Context' },
      { value: '-90%', label: 'Cost Since 2023' },
      { value: 'o3', label: 'Latest Frontier' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding the foundation model landscape',
      subsections: [
        {
          heading: 'What are Foundation Models?',
          paragraphs: [
            'Foundation models are large-scale AI models trained on broad data that can be adapted to a wide range of downstream tasks. The term encompasses Large Language Models (LLMs), multimodal models, and specialized models for code, images, and other domains.',
            'These models serve as the foundation upon which applications are built—from chatbots and coding assistants to complex agentic systems and enterprise automation.',
          ],
        },
        {
          heading: 'Key Characteristics',
          paragraphs: [
          ],
        },
        {
          heading: 'The Current Landscape',
          paragraphs: [
            'The foundation model space has evolved rapidly. OpenAI leads in consumer reach and reasoning with GPT-4o and o1/o3. Anthropic focuses on safety and long context with Claude. Google pushes multimodal boundaries with Gemini. Meta drives open-source with Llama. Meanwhile, Mistral, DeepSeek, and others challenge incumbents on cost and efficiency. The emergence of reasoning models (o1, o3) represents a paradigm shift, using extended inference-time compute for complex problem-solving.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Why Foundation Models Are Critical',
      subtitle: 'The paradigm shift reshaping technology and business',
      columns: 2,
      cards: [
        {
          className: 'selection-0',
          borderColor: '#3B82F6',
          icon: '🧱',
          title: 'They Are the New Platform Layer',
          description: 'Just as operating systems became the platform for desktop software, and cloud became the platform for web apps, foundation models are becoming the platform layer for intelligent applications. Every AI-powered product—from Copilots to autonomous agents—is built on top of these models. Control the foundation, control the ecosystem.',
          examples: [],
        },
        {
          className: 'selection-1',
          borderColor: '#10B981',
          icon: '🎯',
          title: 'General Intelligence vs. Narrow AI',
          description: 'Previous AI required building specialized models for each task—separate models for translation, summarization, classification. Foundation models are general-purpose: one model handles thousands of tasks. This collapses the cost and complexity of AI development by orders of magnitude.',
          examples: [],
        },
        {
          className: 'selection-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'Emergent Capabilities',
          description: 'At sufficient scale, foundation models develop capabilities that weren\'t explicitly trained. They learn to reason, plan, use tools, write code, and even exhibit theory of mind. These emergent abilities make them surprisingly versatile—and their full potential is still being discovered.',
          examples: [],
        },
        {
          className: 'selection-3',
          borderColor: '#F59E0B',
          icon: '🌊',
          title: 'The Knowledge Compression Effect',
          description: 'A single foundation model compresses trillions of tokens of human knowledge into queryable form. It\'s like having instant access to millions of books, papers, and codebases—but with the ability to synthesize and apply that knowledge, not just retrieve it.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding the foundation model landscape', tags: [] },
        { icon: '📌', title: 'Why Foundation Models Are Critical', subtitle: '', description: 'The paradigm shift reshaping technology and business', tags: [] },
        { icon: '📌', title: 'The Foundation Model Stack', subtitle: '', description: 'How foundation models fit into the AI ecosystem', tags: [] },
        { icon: '📌', title: 'The Paradigm Shift', subtitle: '', description: 'How foundation models change everything about software', tags: [] },
        { icon: '📌', title: 'How Foundation Models Work', subtitle: '', description: 'The technology behind the capabilities', tags: [] },
        { icon: '📌', title: 'Industry Transformation', subtitle: '', description: 'How foundation models are reshaping every sector', tags: [] },
        { icon: '📌', title: 'Strategic Implications', subtitle: '', description: 'What foundation models mean for business strategy', tags: [] },
        { icon: '📌', title: 'Core Capabilities Explained', subtitle: '', description: 'What foundation models can actually do—and how well', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
      ],
    },
    bestPractices: {
      title: 'The Foundation Model Stack',
      subtitle: 'How foundation models fit into the AI ecosystem',
      doItems: [
        'Model Layer = Strategic Choice — Your choice of foundation model affects everything downstream—capabilities, costs, latency, and vendor lock-in. This is the most consequential architectural decision.',
        'Abstraction Enables Flexibility — Build abstraction layers between your application and specific models. This lets you switch providers, A/B test models, and optimize costs without rewriting code.',
        'Differentiation Moves Up — As foundation models commoditize, differentiation shifts to orchestration, data, and applications. Your proprietary data and workflows become the moat, not the base model.',
        'Multi-Model is the Future — No single model excels at everything. Production systems increasingly route to different models based on task, cost, and latency requirements. Design for multi-model from day one.',
        'Everything Flows Through Models — Every AI feature, every intelligent automation, every copilot runs on a foundation model. They are the source of the intelligence that powers the entire ecosystem.',
        'Model Quality = Product Quality — If the model is good, your product can be good. If the model is bad, no amount of product work can fix it. The model is your quality ceiling.',
        'Model Improvements Flow Downstream — When your model provider ships an upgrade, every product built on that model improves instantly—for free. This is the leverage of building on strong foundations.',
        'Dependency Creates Strategic Risk — Your business depends on model providers\' continued operation, pricing, and policies. Multi-provider strategies and open-source options hedge this risk.',
        'Start with the Right Model Size — Don\'t default to the largest model. Test smaller models first—they\'re often sufficient and much cheaper. Use tiered routing for production.',
        'Implement Model Fallbacks — Never rely on a single provider. Implement fallback chains (e.g., Claude → GPT-4o → Gemini) for resilience and cost optimization.',
        'Use Structured Outputs — Leverage JSON mode and structured output features. Reduces parsing errors and improves reliability for production systems.',
        'Monitor and Evaluate Continuously — Track quality metrics, latency, and costs. Set up automated evals to detect model degradation or behavior changes.',
        'Optimize Prompts Before Scaling — Invest time in prompt engineering. A well-crafted prompt can outperform a larger model with a poor prompt.',
        'Consider Total Cost of Ownership — API costs are just part of the equation. Factor in development time, maintenance, latency requirements, and scaling needs.',
        'Stay Current but Don\'t Chase Every Release — New models launch constantly. Evaluate thoughtfully—switching costs are real. Upgrade when benefits clearly outweigh migration effort.',
        'Build Model-Agnostic Architectures — Abstract model calls behind interfaces. Makes switching providers and A/B testing straightforward without code changes.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🧠 ModelAnalyst',
      role: 'Foundation Model Analyst',
      description: 'An AI agent specialized in analyzing foundation models, comparing benchmarks, evaluating pricing, and recommending optimal model choices based on use case requirements. Tracks releases across all major providers and generates cost projections.',
      capabilities: [
        'Compare benchmark performance (MMLU, HumanEval, MATH)',
        'Calculate cost projections for production workloads',
        'Recommend models based on use case requirements',
        'Track model releases and capability updates',
        'Evaluate latency, throughput, and rate limits',
        'Design multi-provider fallback strategies',
        'Analyze capability gaps for specific tasks',
        'Generate model comparison reports',
      ],
      codeFilename: 'model_analyst_agent.py',
      code: `# Foundation Model Analyst Agent
from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from model_tools import (
    BenchmarkLookup, PricingCalculator,
    LatencyTester, CapabilityMatrix,
    ReleaseTracker, CostProjector
)

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Initialize specialized tools
benchmark_lookup = BenchmarkLookup(sources=["mmlu", "humaneval", "math"])
pricing_calc = PricingCalculator(providers=["openai", "anthropic", "google"])
latency_tester = LatencyTester(regions=["us-east", "eu-west"])
capability_matrix = CapabilityMatrix()
release_tracker = ReleaseTracker()
cost_projector = CostProjector()

model_analyst = Agent(
    role="Foundation Model Analyst",
    goal="""Evaluate and recommend optimal foundation 
    models based on use case requirements, benchmarks, 
    and total cost of ownership""",
    backstory="""Expert in LLM evaluation with deep 
    knowledge of model capabilities across OpenAI, 
    Anthropic, Google, Meta, and emerging providers. 
    Specializes in benchmark interpretation and 
    production deployment patterns.""",
    llm=llm,
    tools=[
        benchmark_lookup, pricing_calc, latency_tester,
        capability_matrix, release_tracker, cost_projector
    ],
    verbose=True
)

async def evaluate_models(requirements: dict) -> dict:
    """Evaluate models for a specific use case."""
    
    task = Task(
        description=f"""
        Analyze requirements and recommend models:
        
        1. REQUIREMENTS ANALYSIS
           - Parse use case: {requirements['use_case']}
           - Volume: {requirements['monthly_requests']}
           - Latency needs: {requirements['max_latency_ms']}ms
           - Quality bar: {requirements['quality_tier']}
        
        2. BENCHMARK COMPARISON
           - Pull relevant benchmarks for task type
           - Rank models by capability match
           - Note capability gaps
        
        3. COST PROJECTION
           - Calculate monthly cost per model
           - Include input/output token ratios
           - Factor in caching opportunities
        
        4. RECOMMENDATIONS
           - Primary model selection
           - Fallback chain (3 providers)
           - Cost optimization strategies
           - Implementation considerations
        """,
        agent=model_analyst,
        expected_output="Model recommendation report"
    )
    
    crew = Crew(agents=[model_analyst], tasks=[task])
    result = await crew.kickoff_async()
    
    return {
        "primary_model": result.primary,
        "fallback_chain": result.fallbacks,
        "monthly_cost_est": result.cost,
        "benchmark_scores": result.benchmarks,
        "recommendations": result.recommendations
    }`,
    },
    relatedPages: [
      { number: '', title: 'Agentic AI', description: 'Build autonomous agents with tool use and multi-step reasoning', slug: 'agentic-ai' },
      { number: '', title: 'Multimodal AI', description: 'Vision, audio, and video understanding and generation', slug: 'multimodal-ai' },
      { number: '', title: 'AI Infrastructure', description: 'GPUs, inference optimization, and deployment platforms', slug: 'ai-infrastructure' },
    ],
    prevPage: undefined,
    nextPage: { title: '19.2 Agentic AI', slug: 'agentic-ai' },
  },
  {
    slug: 'agentic-ai',
    badge: '🤖 Page 19.2',
    title: 'Agentic AI',
    description: 'Build AI systems that can plan, reason, use tools, and accomplish complex goals autonomously. From copilots to fully autonomous agents—the frontier of AI application development.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '2025', label: 'Year of Agents' },
      { value: 'MCP', label: 'Protocol Standard' },
      { value: '10x', label: 'Task Complexity' },
      { value: 'Multi', label: 'Agent Systems' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding agentic AI systems',
      subsections: [
        {
          heading: 'What is Agentic AI?',
          paragraphs: [
            'Agentic AI refers to AI systems that can autonomously plan, make decisions, use tools, and take actions to accomplish goals—going beyond simple question-answering to actually doing things in the world.',
            'Unlike traditional chatbots that respond to queries, agents can: break down complex tasks into steps, decide which tools to use, execute actions, observe results, and iterate until the goal is achieved.',
          ],
        },
        {
          heading: 'Key Characteristics',
          paragraphs: [
          ],
        },
        {
          heading: 'The Agent Paradigm Shift',
          paragraphs: [
            'We\'re moving from AI as oracle (ask questions, get answers) to AI as worker (assign tasks, get results). This is a fundamental shift in how we interact with AI systems. Instead of being tools we operate, agents become colleagues we delegate to. The implications for automation, productivity, and work itself are profound—agents can handle multi-step workflows that previously required human judgment and action at every step.',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Agentic Revolution',
      subtitle: 'Why 2024-2025 is the inflection point for agents',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '💬',
          title: '2022: ChatGPT Era',
          description: 'Conversational AI. Question in, answer out. No memory, no tools, no actions. Revolutionary for access to knowledge, but fundamentally passive.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔧',
          title: '2023: Tool Use Era',
          description: 'Function calling, plugins, code interpreter. Models can take actions, but single-turn. AutoGPT demos exciting but unreliable loops.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🤖',
          title: '2024: Agentic Era',
          description: 'Reliable multi-step workflows. Production-grade frameworks. Computer use, browser automation. Agents ship in real products.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🌐',
          title: '2025+: Autonomous Era',
          description: 'Fully autonomous agents handling complex workflows. Multi-agent collaboration. Background operation. Minimal human oversight needed.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding agentic AI systems', tags: [] },
        { icon: '📌', title: 'The Agentic Revolution', subtitle: '', description: 'Why 2024-2025 is the inflection point for agents', tags: [] },
        { icon: '📌', title: 'Why Agentic AI Matters', subtitle: '', description: 'The capabilities that make agents transformative', tags: [] },
        { icon: '📌', title: 'The Autonomy Spectrum', subtitle: '', description: 'From human-in-the-loop to full autonomy', tags: [] },
        { icon: '📌', title: 'Agent Architecture', subtitle: '', description: 'The core components of an agentic system', tags: [] },
        { icon: '📌', title: 'Model Context Protocol (MCP)', subtitle: '', description: 'Anthropic\'s open standard for agent-tool communication', tags: [] },
        { icon: '📌', title: 'Computer Use', subtitle: '', description: 'AI that can see and control screens like humans', tags: [] },
        { icon: '📌', title: 'Tool Use & Function Calling', subtitle: '', description: 'The foundation of agent capabilities', tags: [] },
      ],
    },
    tools: {
      title: 'Tool Use & Function Calling',
      subtitle: 'The foundation of agent capabilities',
      items: [
        { icon: '🛠️', name: 'Search', vendor: '', description: 'Web search, knowledge base, vector similarity', tags: [] },
        { icon: '🛠️', name: 'Database', vendor: '', description: 'Query, insert, update structured data', tags: [] },
        { icon: '🛠️', name: 'Files', vendor: '', description: 'Read, write, list filesystem operations', tags: [] },
        { icon: '🛠️', name: 'HTTP/API', vendor: '', description: 'Call external services and APIs', tags: [] },
        { icon: '🛠️', name: 'Code Exec', vendor: '', description: 'Run Python, JavaScript, shell commands', tags: [] },
        { icon: '🛠️', name: 'Email/Comms', vendor: '', description: 'Send messages, notifications, alerts', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Security Considerations',
      subtitle: 'Protecting against agent vulnerabilities',
      doItems: [
        'Principle of Least Privilege — Give agents only the permissions they need. Read-only database access if writes aren\'t required. Scoped API keys. No admin credentials.',
        'Sandbox Code Execution — Run agent code in isolated containers (Docker, E2B, Modal). No access to host filesystem, network restrictions, resource limits.',
        'Input/Output Filtering — Validate all inputs. Filter outputs for PII, credentials, sensitive data. Don\'t let agents leak information in responses.',
        'Prompt Injection Defense — Separate system prompts from user input. Use delimiters. Instruct models to ignore override attempts. Monitor for manipulation patterns.',
        'Action Allowlists — Define explicitly what actions agents CAN take, not what they can\'t. Deny by default. Whitelist approved operations.',
        'Audit Logging — Log every tool call, decision, and action. Maintain immutable audit trail. Enable forensic analysis of agent behavior.',
        'Observability is Non-Negotiable — Log every tool call, every decision, every state transition. Use LangSmith, Langfuse, or similar. Without observability, debugging agent failures is impossible.',
        'Guardrails at Every Level — Input validation, output filtering, tool call limits, cost caps, time limits. Defense in depth—assume each layer will fail and have the next layer catch it.',
        'Graceful Degradation — When agents fail, fail safely. Return partial results, escalate to humans, or fall back to simpler approaches. Never fail silently or catastrophically.',
        'Sandboxing & Permissions — Run agents with minimal permissions. Sandbox code execution. Use separate credentials. Treat agents as untrusted—because they can be manipulated.',
        'Cost Controls — Set hard limits on token usage, tool calls, and execution time. Agents can enter expensive loops. Monitor spend in real-time with alerts.',
        'Evaluation & Testing — Build evaluation datasets for your agent tasks. Test edge cases explicitly. Regression test when changing prompts or tools. Agents are notoriously sensitive to small changes.',
        'Human Handoff — Design clear escalation paths. When should the agent ask for help? When should it stop? Make it easy for humans to take over mid-task.',
        'Retry & Recovery — Tools fail. APIs timeout. Implement exponential backoff, circuit breakers, and checkpointing so agents can recover from transient failures.',
        'Right-Size Your Models — Use smaller models for simple tasks (routing, classification). Reserve expensive models (o1, Claude Opus) for complex reasoning. Tiered approach can cut costs 60%+.',
        'Aggressive Context Pruning — Don\'t keep everything in context. Summarize tool results. Drop irrelevant conversation history. Keep only what\'s needed for the current step.',
        'Caching Everywhere — Cache tool results, model responses, intermediate computations. Same search query twice? Return cached result. Prompt caching for repeated system prompts.',
        'Early Termination — Detect when task is complete and stop. Don\'t let agents over-iterate. Set max iteration limits based on task complexity.',
        'Batch Similar Tasks — Process similar requests together. Share context across batch. One search for 10 queries is cheaper than 10 separate searches.',
        'Monitor & Alert — Track cost per agent run. Alert on anomalies. Identify expensive patterns. You can\'t optimize what you don\'t measure.',
        'Start Simple, Add Complexity — Begin with a single-agent, few-tool setup. Add multi-agent, more tools, and autonomy incrementally. Complexity is the enemy of reliability.',
        'Invest in Tool Quality — Agents are only as good as their tools. Well-designed tools with clear descriptions, constrained inputs, and informative outputs dramatically improve agent performance.',
        'Make Reasoning Visible — Agents should "think out loud." This helps with debugging, builds user trust, and often improves decision quality. ReAct pattern is your friend.',
        'Test with Real-World Chaos — Test tool failures, malformed inputs, adversarial prompts, edge cases. Agents fail in unexpected ways—find them before users do.',
        'Design for Human Oversight — Even autonomous agents need supervision. Build approval workflows, intervention points, and clear audit trails. Humans should always be able to take over.',
        'Manage Context Carefully — Context window is precious. Summarize conversation history, prune irrelevant tool results, and keep the agent focused on the current task.',
        'Use the Right Model for the Job — Not every agent task needs o1. Use smaller/cheaper models for simple routing, larger models for complex reasoning. Cost optimization matters at scale.',
        'Version Everything — Prompts, tools, workflows—version control all of it. Agent behavior can change dramatically with small changes. You need to know what changed when things break.',
        'Implement Structured Outputs — Use JSON schemas for all tool inputs and agent outputs. Structured outputs eliminate parsing errors and make agent behavior more predictable.',
        'Build in Observability — Log every decision, tool call, and state transition. Use LangSmith, Langfuse, or custom logging. Without observability, debugging is impossible.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🏗️ AgentArchitect',
      role: 'Senior Research Analyst',
      description: 'A meta-agent that designs, builds, and optimizes agentic systems. Given a task description, it selects appropriate patterns, defines tools, creates prompts, and generates implementation code.',
      capabilities: [
        'Analyze task and recommend agent architecture',
        'Design tool schemas and implementations',
        'Generate agent prompts and personas',
        'Scaffold LangGraph/CrewAI code',
        'Design multi-agent orchestration',
        'Create evaluation datasets',
        'Add guardrails and error handling',
        'Optimize for cost and latency',
      ],
      codeFilename: 'crewai_example.py - Complete CrewAI Setup',
      code: `# CrewAI Multi-Agent Research Team Example
from crewai import Agent, Task, Crew, Process
from crewai_tools import (
    SerperDevTool, ScrapeWebsiteTool, FileReadTool,
    DirectoryReadTool, PDFSearchTool
)
from langchain_anthropic import ChatAnthropic

# Initialize LLM
llm = ChatAnthropic(model="claude-sonnet-4-20250514", temperature=0)

# Initialize Tools
search_tool = SerperDevTool()
scrape_tool = ScrapeWebsiteTool()
file_tool = FileReadTool()
pdf_tool = PDFSearchTool()

# Define Agents with Roles
researcher = Agent(
    role="Senior Research Analyst",
    goal="Find comprehensive, accurate information on any topic",
    backstory="""You are an expert researcher with 15 years 
    experience in market research and competitive intelligence. 
    You excel at finding primary sources and validating information 
    across multiple channels.""",
    tools=[search_tool, scrape_tool],
    llm=llm,
    verbose=True,
    allow_delegation=True
)

analyst = Agent(
    role="Data Analyst",
    goal="Synthesize research into actionable insights",
    backstory="""You are a quantitative analyst who excels at 
    finding patterns in data and presenting complex information 
    in clear, structured formats. You always cite sources.""",
    tools=[file_tool, pdf_tool],
    llm=llm,
    verbose=True
)

writer = Agent(
    role="Technical Writer",
    goal="Create compelling, well-structured reports",
    backstory="""You are an award-winning writer who transforms 
    complex research into readable, actionable documents. 
    You focus on clarity, structure, and practical recommendations.""",
    tools=[file_tool],
    llm=llm,
    verbose=True
)

# Define Tasks
research_task = Task(
    description="""Research the current state of {topic}.
    Find: market size, key players, recent developments, trends.
    Use multiple sources and validate key claims.""",
    expected_output="Detailed research notes with sources",
    agent=researcher
)

analysis_task = Task(
    description="""Analyze the research on {topic}.
    Identify: key insights, patterns, opportunities, risks.
    Create a structured analysis with supporting data.""",
    expected_output="Structured analysis document",
    agent=analyst,
    context=[research_task]  # Uses output from research
)

report_task = Task(
    description="""Write a comprehensive report on {topic}.
    Include: executive summary, key findings, recommendations.
    Format: professional, scannable, action-oriented.""",
    expected_output="Final research report (markdown)",
    agent=writer,
    context=[research_task, analysis_task],
    output_file="report.md"  # Auto-save to file
)

# Create and Run Crew
research_crew = Crew(
    agents=[researcher, analyst, writer],
    tasks=[research_task, analysis_task, report_task],
    process=Process.sequential,  # or Process.hierarchical
    verbose=True
)

# Execute
result = research_crew.kickoff(inputs={"topic": "AI agents in enterprise"})`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The LLM brains that power agentic systems', slug: 'foundation-models' },
      { number: '', title: 'RAG & Knowledge', description: 'Give agents access to your data', slug: 'rag-knowledge' },
      { number: '', title: 'Observability & Evals', description: 'Monitor and improve agent performance', slug: 'observability' },
    ],
    prevPage: { title: '19.1 Foundation Models', slug: 'foundation-models' },
    nextPage: { title: '19.3 Multimodal AI', slug: 'multimodal-ai' },
  },
  {
    slug: 'multimodal-ai',
    badge: '🎨 Page 19.3',
    title: 'Multimodal AI',
    description: 'AI systems that understand and generate across text, images, audio, and video. From vision-language models to native multimodal systems—the convergence of all AI modalities.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '6+', label: 'Modalities' },
      { value: '2M', label: 'Max Context' },
      { value: 'Native', label: 'Integration' },
      { value: 'Realtime', label: 'Voice/Video' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding multimodal AI systems',
      subsections: [
        {
          heading: 'What is Multimodal AI?',
          paragraphs: [
            'Multimodal AI refers to systems that can process, understand, and generate content across multiple types of data—text, images, audio, video, and more. Unlike single-modality models that only work with text, multimodal models can see, hear, and create across formats.',
            'The goal is AI that interacts with the world the way humans do—through all senses simultaneously, understanding the connections between what we see, hear, and read.',
          ],
        },
        {
          heading: 'Key Capabilities',
          paragraphs: [
          ],
        },
        {
          heading: 'The Convergence',
          paragraphs: [
            'We\'re witnessing a convergence: models that started as text-only (GPT, Claude) are gaining vision, audio, and video capabilities. Models that started as image generators (DALL-E, Midjourney) are gaining text understanding. The end state is unified multimodal models that handle all modalities natively—understanding and generating any combination of text, image, audio, and video in a single coherent system.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Vision-Language Models',
      subtitle: 'LLMs that can see and understand images',
      columns: 2,
      cards: [
        {
          className: 'model-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Native multimodal model trained on text, images, and audio together. Excellent vision understanding with fast response times. Powers ChatGPT vision features.',
          examples: [],
        },
        {
          className: 'model-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Excellent vision capabilities with strong chart/diagram understanding. Powers computer use and document analysis. Best-in-class for structured data extraction.',
          examples: [],
        },
        {
          className: 'model-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Native multimodal with massive 1M+ token context. Process hours of video, hundreds of images. Best for long-context multimodal tasks.',
          examples: [],
        },
        {
          className: 'model-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Open-source vision-language models in 11B and 90B sizes. Commercially usable. Strong baseline for on-premise vision deployments.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'Understanding multimodal AI systems', tags: [] },
        { icon: '📌', title: 'Why Multimodal Matters', subtitle: '', description: 'The case for multi-sensory AI', tags: [] },
        { icon: '📌', title: 'The Modalities', subtitle: '', description: 'Types of data multimodal AI can handle', tags: [] },
        { icon: '📌', title: 'Multimodal Architectures', subtitle: '', description: 'How multimodal systems are built', tags: [] },
        { icon: '📌', title: 'The Evolution of Multimodal AI', subtitle: '', description: 'From separate models to unified systems', tags: [] },
        { icon: '📌', title: 'Vision-Language Models', subtitle: '', description: 'LLMs that can see and understand images', tags: [] },
        { icon: '📌', title: 'Vision Capabilities Deep Dive', subtitle: '', description: 'What vision-language models can actually do', tags: [] },
        { icon: '📌', title: 'Audio & Speech', subtitle: '', description: 'Understanding and generating spoken content', tags: [] },
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
      subtitle: 'Guidelines for multimodal AI implementation',
      doItems: [
        'Optimize Image Resolution — Higher resolution = more tokens = higher cost. Resize images to the minimum needed for your task. 1024px is often sufficient.',
        'Use Appropriate Models — Don\'t use vision for text-only tasks. Don\'t use expensive models for simple image descriptions. Match capability to requirement.',
        'Validate Visual Extractions — Vision models hallucinate. For critical data (financial, legal), always validate extracted information against source.',
        'Handle Multiple Modalities Gracefully — Build systems that work when images fail to load, audio is unavailable, or only text is present. Graceful degradation.',
        'Consider Privacy — Images and audio may contain PII. Ensure you have rights to process. Consider on-premise models for sensitive content.',
        'Cache Generated Assets — Image/video generation is expensive. Cache outputs, use deterministic seeds when possible, avoid regenerating identical content.',
        'Prompt Engineering for Vision — Be specific about what to look for. "Extract the total amount" beats "What\'s in this image?" for invoices.',
        'Test Across Variations — Test with different image qualities, lighting, orientations. Vision models are sensitive to visual variations.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🎨 MultimodalProcessor',
      role: '',
      description: 'An agent that processes any combination of text, images, audio, and video. Automatically routes to appropriate models, handles format conversion, and synthesizes results across modalities.',
      capabilities: [
        'Process images and extract structured data',
        'Transcribe and analyze audio content',
        'Summarize and query video content',
        'Generate images from descriptions',
        'Convert text to natural speech',
        'Cross-modal reasoning and synthesis',
        'Format detection and optimization',
        'Output in requested modalities',
      ],
      codeFilename: 'multimodal_examples.py - Working with Multimodal APIs',
      code: `# Example: Vision with Claude
import anthropic
import base64

client = anthropic.Anthropic()

# Encode image to base64
with open("document.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {
                "type": "base64",
                "media_type": "image/png",
                "data": image_data
            }},
            {"type": "text", "text": "Extract all data from this invoice"}
        ]
    }]
)

# Example: Vision with GPT-4o
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this image?"},
            {"type": "image_url", "image_url": {
                "url": "https://example.com/image.jpg"
            }}
        ]
    }]
)

# Example: Audio transcription with Whisper
audio_file = open("recording.mp3", "rb")
transcript = client.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file
)

# Example: Text-to-Speech
speech = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello! This is AI-generated speech."
)
speech.stream_to_file("output.mp3")`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The base models powering multimodal AI', slug: 'foundation-models' },
      { number: '', title: 'Agentic AI', description: 'Agents that use multimodal capabilities', slug: 'agentic-ai' },
      { number: '', title: 'Edge & On-Device AI', description: 'Multimodal processing on local devices', slug: 'edge-ai' },
    ],
    prevPage: { title: '19.2 Agentic AI', slug: 'agentic-ai' },
    nextPage: { title: '19.4 AI Coding Tools', slug: 'ai-coding' },
  },
  {
    slug: 'ai-coding',
    badge: '💻 Page 19.4',
    title: 'AI Coding Tools',
    description: 'From autocomplete to autonomous agents—AI is transforming how software is built. IDE assistants, CLI tools, and coding agents that write, debug, and deploy code.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '55%', label: 'Faster Coding' },
      { value: '$9B', label: 'Cursor Valuation' },
      { value: '1M+', label: 'Copilot Users' },
      { value: 'Agentic', label: 'The New Paradigm' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'The AI-assisted development landscape',
      subsections: [
        {
          heading: 'What Are AI Coding Tools?',
          paragraphs: [
            'AI coding tools are software that uses large language models to assist with programming tasks—from simple autocomplete to autonomous code generation. They understand code, natural language, and the relationship between them.',
            'The goal: augment developer productivity by handling routine tasks, suggesting solutions, and enabling developers to work at higher levels of abstraction.',
          ],
        },
        {
          heading: 'Tool Categories',
          paragraphs: [
          ],
        },
        {
          heading: 'The Paradigm Shift',
          paragraphs: [
            'We\'re moving through distinct phases: autocomplete (predict the next line), chat-assisted (ask questions about code), agentic (delegate multi-step tasks). The end state is AI that can take a feature request and deliver working, tested code—with humans providing guidance and review. The fastest developers are already 2-3x more productive with AI tools. The gap between AI-augmented and traditional development is widening rapidly.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Cursor Deep Dive',
      subtitle: 'The breakout AI coding tool of 2024',
      columns: 2,
      cards: [
        {
          className: 'capability-0',
          borderColor: '#3B82F6',
          icon: '✨',
          title: 'Tab Completion',
          description: 'Predictive autocomplete that understands your codebase. Multi-line suggestions. Learns your patterns.',
          examples: [],
        },
        {
          className: 'capability-1',
          borderColor: '#10B981',
          icon: '💬',
          title: 'Cmd+K Inline',
          description: 'Edit code inline with natural language. Select code, describe change, apply. Fast iteration loop.',
          examples: [],
        },
        {
          className: 'capability-2',
          borderColor: '#8B5CF6',
          icon: '🎼',
          title: 'Composer',
          description: 'Multi-file editing with AI. Create features spanning multiple files. Plan and execute together.',
          examples: [],
        },
        {
          className: 'capability-3',
          borderColor: '#F59E0B',
          icon: '🤖',
          title: 'Agent Mode',
          description: 'Autonomous coding agent. Runs commands, writes tests, iterates on errors. Human approves each step.',
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
        { icon: '📌', title: 'Overview', subtitle: '', description: 'The AI-assisted development landscape', tags: [] },
        { icon: '📌', title: 'The AI Coding Revolution', subtitle: '', description: 'How we got here and where we\'re going', tags: [] },
        { icon: '📌', title: 'The Assistance Spectrum', subtitle: '', description: 'From autocomplete to autonomous agents', tags: [] },
        { icon: '📌', title: 'AI-Native IDEs', subtitle: '', description: 'Editors built from the ground up for AI', tags: [] },
        { icon: '📌', title: 'Cursor Deep Dive', subtitle: '', description: 'The breakout AI coding tool of 2024', tags: [] },
        { icon: '📌', title: 'GitHub Copilot', subtitle: '', description: 'The incumbent with the largest user base', tags: [] },
        { icon: '📌', title: 'CLI Coding Tools', subtitle: '', description: 'AI coding from the command line', tags: [] },
        { icon: '📌', title: 'Claude Code Deep Dive', subtitle: '', description: 'Anthropic\'s agentic coding tool', tags: [] },
      ],
    },
    tools: {
      title: 'AI-Native IDEs',
      subtitle: 'Editors built from the ground up for AI',
      items: [
        { icon: '🛠️', name: 'Cursor', vendor: '', description: 'AI-native code editor built on VS Code. Composer for multi-file generation. Agent mode for autonomous coding. Best-in-class UX for AI-assisted development.', tags: [] },
        { icon: '🛠️', name: 'Windsurf', vendor: '', description: 'AI-native IDE from Codeium. Cascade for agentic workflows. Flow mode for continuous AI assistance. Strong free tier. Growing fast.', tags: [] },
        { icon: '🛠️', name: 'Zed', vendor: '', description: 'High-performance editor with AI integration. Built in Rust for speed. Collaborative features. Growing AI capabilities with assistant panel.', tags: [] },
        { icon: '🛠️', name: 'Void', vendor: '', description: 'Open-source Cursor alternative. Privacy-focused. Bring your own API keys. Local-first with cloud options. Early stage but promising.', tags: [] },
        { icon: '🛠️', name: 'Copilot Individual', vendor: '', description: 'Core autocomplete experience. Works in VS Code, JetBrains, Neovim. Chat integration. The original AI coding assistant.', tags: [] },
        { icon: '🛠️', name: 'Copilot Workspace', vendor: '', description: 'Agent that turns GitHub issues into pull requests. Plans implementation, makes changes across files, runs tests. GitHub\'s answer to Devin.', tags: [] },
        { icon: '🛠️', name: 'Claude Code', vendor: '', description: 'Anthropic\'s agentic coding tool. Terminal-based with deep codebase understanding. MCP integration for extensibility. Designed for complex, multi-file tasks.', tags: [] },
        { icon: '🛠️', name: 'Aider', vendor: '', description: 'Popular open-source CLI for AI coding. Works with any LLM. Excellent at multi-file edits. Strong community. Very scriptable.', tags: [] },
        { icon: '🛠️', name: 'GPT-Engineer', vendor: '', description: 'Generate entire codebases from specifications. CLI-based project scaffolding. Good for greenfield projects and prototyping.', tags: [] },
        { icon: '🛠️', name: 'Continue', vendor: '', description: 'Open-source AI coding extension. Works in VS Code and JetBrains. Bring your own model. Highly customizable. MCP support.', tags: [] },
        { icon: '🛠️', name: 'Devin', vendor: '', description: 'The first "AI software engineer." Operates in a full development environment. Plans, codes, debugs, deploys. $2B valuation. Limited access.', tags: [] },
        { icon: '🛠️', name: 'Factory', vendor: '', description: 'Enterprise coding agents. Droids that work on tickets in the background. CI/CD integration. Focus on maintenance and bug fixes.', tags: [] },
        { icon: '🛠️', name: 'Cosine Genie', vendor: '', description: 'AI agent that understands your codebase deeply. Handles feature requests end-to-end. Strong on understanding existing patterns.', tags: [] },
        { icon: '🛠️', name: 'Replit Agent', vendor: '', description: 'Build apps from descriptions in Replit. Full-stack generation. Deploys automatically. Great for prototypes and simple apps.', tags: [] },
        { icon: '🛠️', name: 'Cody', vendor: '', description: 'Deep codebase understanding from Sourcegraph. Best-in-class context awareness. Works across massive codebases. Strong enterprise features.', tags: [] },
        { icon: '🛠️', name: 'Tabnine', vendor: '', description: 'Privacy-focused AI completion. On-premise deployment option. Trained on permissively licensed code. Enterprise-ready.', tags: [] },
        { icon: '🛠️', name: 'Amazon Q Developer', vendor: '', description: 'AWS\'s AI coding assistant. Deep AWS integration. Security scanning built-in. Strong for AWS-centric development.', tags: [] },
        { icon: '🛠️', name: 'Supermaven', vendor: '', description: 'Fastest AI completions. 1M token context. Built by ex-Tabnine founder. Focus on speed and accuracy.', tags: [] },
        { icon: '🛠️', name: 'CodeRabbit', vendor: '', description: 'AI-powered code review for GitHub/GitLab PRs. Line-by-line feedback. Security checks. Learns your patterns over time.', tags: [] },
        { icon: '🛠️', name: 'PR-Agent', vendor: '', description: 'Open-source PR review agent. Auto-describe PRs. Review, improve, ask questions. Self-hostable.', tags: [] },
        { icon: '🛠️', name: 'Graphite', vendor: '', description: 'AI-assisted code review with stacking workflows. Merge queue. Review suggestions. Popular with fast-moving teams.', tags: [] },
        { icon: '🛠️', name: 'What The Diff', vendor: '', description: 'AI-generated PR summaries. Explains changes in plain English. Slack integration. Helps reviewers understand context.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Adoption Strategies',
      subtitle: 'Rolling out AI coding tools',
      doItems: [
        'Start with Champions — Identify enthusiastic early adopters. Let them pilot tools and become internal advocates. Their success stories drive broader adoption.',
        'Measure Impact — Track metrics before and after: PRs merged, cycle time, developer satisfaction. Data convinces skeptics better than anecdotes.',
        'Create Guidelines — Establish policies: what code needs extra review, what\'s off-limits, how to handle IP concerns. Clarity reduces friction.',
        'Invest in Training — Run workshops on effective prompting, tool features, common pitfalls. The gap between good and bad AI users is huge.',
        'Share Best Practices — Create shared prompt libraries, .cursorrules templates, and tips channels. Collective learning accelerates everyone.',
        'Iterate on Tools — The landscape changes fast. Reevaluate tools quarterly. What was best 6 months ago may not be now.',
        'Write Clear Prompts — Be specific about requirements. Include context. Mention constraints. The quality of output mirrors the quality of input.',
        'Review Everything — AI makes mistakes. Security issues, subtle bugs, poor patterns. Treat AI code like code from a junior developer—review carefully.',
        'Use Project Context Files — .cursorrules, CLAUDE.md, AGENTS.md—give AI context about your project\'s patterns, conventions, and architecture.',
        'Iterate in Small Steps — Don\'t ask for complete features at once. Build incrementally. Review each step. Correct course early.',
        'Leverage Codebase Context — Use @codebase, @file references. Help AI understand your patterns. More context = better output.',
        'Know When Not to Use AI — Novel architectures, security-critical code, performance-sensitive paths—sometimes manual is better.',
        'Keep Tests Running — AI can introduce bugs. Continuous test execution catches issues early. AI + TDD = powerful combination.',
        'Learn the Shortcuts — Cmd+K, Cmd+L, tab, reject. Speed comes from muscle memory. Invest time in learning your tool\'s UX.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🔧 CodeAssistant',
      role: '',
      description: 'An agent that orchestrates AI coding tools based on the task at hand. Routes to the right tool, provides context, and manages the development workflow.',
      capabilities: [
        'Analyze task requirements',
        'Select appropriate AI tool',
        'Gather codebase context',
        'Generate implementation plan',
        'Review generated code',
        'Run tests and validate',
        'Document changes',
        'Iterate on feedback',
      ],
      codeFilename: 'Claude Code Usage Examples',
      code: `# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Start in a project directory
cd my-project
claude-code

# Natural language requests
> Add user authentication with JWT tokens

> Fix the bug where users can't upload files larger than 5MB

> Refactor the database module to use connection pooling

> Write tests for the payment processing service

# Reference specific files
> Look at src/api/users.ts and add rate limiting

# Use MCP for external context
> Check Jira for the latest tickets and fix PROJ-1234

# Safe mode - requires approval for each action
claude-code --safe-mode`,
    },
    relatedPages: [
      { number: '', title: 'Agentic AI', description: 'The agent patterns powering coding tools', slug: 'agentic-ai' },
      { number: '', title: 'Foundation Models', description: 'The models behind code generation', slug: 'foundation-models' },
      { number: '', title: 'Observability & Evals', description: 'Measuring AI code quality', slug: 'observability' },
    ],
    prevPage: { title: '19.3 Multimodal AI', slug: 'multimodal-ai' },
    nextPage: { title: '19.5 Edge & On-Device AI', slug: 'edge-ai' },
  },
  {
    slug: 'edge-ai',
    badge: '📱 Page 19.5',
    title: 'Edge & On-Device AI',
    description: 'AI that runs locally on phones, laptops, and edge devices rather than in cloud data centers. Enables real-time inference, privacy-preserving computation, and offline functionality—capabilities cloud AI cannot provide.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '~10ms', label: 'Local Inference Latency' },
      { value: '100%', label: 'Data Privacy (No Transmission)' },
      { value: '3B+', label: 'Devices with NPUs (2024)' },
      { value: '50%', label: 'AI Workloads Moving to Edge' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding edge and on-device AI',
      subsections: [
        {
          heading: 'What is Edge AI?',
          paragraphs: [
            'Edge AI refers to running machine learning models directly on end-user devices—smartphones, laptops, IoT devices, vehicles—rather than sending data to cloud servers for processing. Computation happens where data is generated, eliminating network round-trips.',
            'This paradigm shift enables applications that were previously impossible: real-time video processing at 60fps, privacy-preserving health monitoring, offline voice assistants, and instant language translation without internet connectivity.',
          ],
        },
        {
          heading: 'Why Edge AI Now?',
          paragraphs: [
            'Three converging trends are driving edge AI adoption:',
            'Every major platform—Apple, Google, Microsoft, Meta—now ships devices with dedicated AI acceleration hardware.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Edge-Optimized Models',
      subtitle: 'Small models designed for local deployment',
      columns: 2,
      cards: [
        {
          className: 'model-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Meta\'s smallest Llama models, optimized for mobile deployment. Multilingual support, instruction-tuned. Open weights under Llama license.',
          examples: [],
        },
        {
          className: 'model-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Exceptional reasoning for size. Trained on high-quality data. Optimized for ONNX Runtime and Windows. MIT license.',
          examples: [],
        },
        {
          className: 'model-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Derived from Gemini architecture. Excellent for classification and simple generation. Apache 2.0 license.',
          examples: [],
        },
        {
          className: 'model-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Best quality-to-size ratio in open source. Strong instruction following. Fits on laptops with Q4. Apache 2.0 license.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'NPU Hardware',
      subtitle: 'The silicon powering edge AI',
      cards: [
        { icon: '🛠️', title: 'NVIDIA', subtitle: 'Jetson Thor', description: 'Transformer engine, 100GB memory', tags: ['Jetson Thor'] },
        { icon: '🛠️', title: 'AMD', subtitle: 'Strix Point (Ryzen AI)', description: 'XDNA 2 architecture, Copilot+ ready', tags: ['Strix Point (Ryzen AI)'] },
        { icon: '🛠️', title: 'Intel', subtitle: 'Lunar Lake', description: 'NPU 4, low power design', tags: ['Lunar Lake'] },
        { icon: '🛠️', title: 'Qualcomm', subtitle: 'Snapdragon X Elite', description: 'Hexagon NPU, Windows on ARM', tags: ['Snapdragon X Elite'] },
        { icon: '🛠️', title: 'Apple', subtitle: 'M3 Pro/Max', description: 'Neural Engine, unified memory', tags: ['M3 Pro/Max'] },
        { icon: '🛠️', title: 'Apple', subtitle: 'A17 Pro', description: 'Apple Intelligence capable', tags: ['A17 Pro'] },
        { icon: '🔍', title: 'Google', subtitle: 'Tensor G4', description: 'Custom for Gemini Nano', tags: ['Tensor G4'] },
        { icon: '🛠️', title: 'Qualcomm', subtitle: 'Snapdragon 8 Gen 3', description: 'Hexagon, multimodal AI', tags: ['Snapdragon 8 Gen 3'] },
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
      subtitle: 'Guidelines for successful edge AI deployment',
      doItems: [
        'Zero latency for user interactions (~10ms vs ~500ms cloud)',
        'Complete privacy—data never leaves the device',
        'Works offline without internet connectivity',
        'No per-inference API costs at scale',
        'Regulatory compliance simplified (GDPR, HIPAA)',
        'Always available—no cloud outage dependency',
      ],
      dontItems: [
        'Limited model size (1-13B vs 400B+ cloud models)',
        'Less reasoning capability than frontier models',
        'No access to real-time information (web search)',
        'Battery and thermal constraints on mobile',
        'Model updates require app updates',
        'Hardware fragmentation across devices',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '📱 EdgeDeployer',
      role: 'Edge AI Deployment Specialist',
      description: 'An agent that helps optimize and deploy models for edge devices. It analyzes model requirements, recommends quantization strategies, generates deployment configurations, and benchmarks performance across device targets.',
      capabilities: [
        'Analyze model size and memory requirements',
        'Recommend target devices based on constraints',
        'Select optimal quantization level',
        'Generate runtime configuration files',
        'Benchmark inference performance',
        'Estimate battery/thermal impact',
      ],
      codeFilename: 'edge_deployer.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

edge_deployer = Agent(
    role="Edge AI Deployment Specialist",
    goal="Optimize models for edge devices",
    backstory="""Expert in model quantization, NPU 
    optimization, and mobile deployment. Deep knowledge
    of llama.cpp, ONNX, Core ML, and platform APIs.""",
    tools=[
        ModelAnalyzer(),
        QuantizationTool(),
        BenchmarkRunner(),
        ConfigGenerator()
    ],
    llm=llm
)

async def deploy_to_edge(model_path, target_device, constraints):
    task = Task(
        description=f"""Deploy {model_path} to {target_device}.
        Constraints: {constraints}
        Output: Quantized model + runtime config + benchmarks""",
        agent=edge_deployer,
        expected_output="Deployment package with benchmarks"
    )
    crew = Crew(agents=[edge_deployer], tasks=[task])
    return await crew.kickoff_async()`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The models being optimized for edge deployment', slug: 'foundation-models' },
      { number: '', title: 'AI Infrastructure', description: 'Cloud infrastructure for hybrid edge/cloud deployments', slug: 'ai-infrastructure' },
      { number: '', title: 'AI Safety & Governance', description: 'Privacy, security, and compliance considerations', slug: 'ai-safety' },
    ],
    prevPage: { title: '19.4 AI Coding Tools', slug: 'ai-coding' },
    nextPage: { title: '19.6 AI Infrastructure', slug: 'ai-infrastructure' },
  },
  {
    slug: 'ai-infrastructure',
    badge: '🖥️ Page 19.6',
    title: 'AI Infrastructure',
    description: 'The compute, storage, and orchestration systems that power AI workloads. From GPU clusters and model serving to distributed training and MLOps—everything needed to run AI at scale in production.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '$2-4/hr', label: 'H100 GPU Cloud Cost' },
      { value: '10,000+', label: 'GPUs for Frontier Training' },
      { value: '~$100M', label: 'Cost to Train GPT-4 Class' },
      { value: '70%', label: 'Inference vs Training Spend' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding AI infrastructure landscape',
      subsections: [
        {
          heading: 'What is AI Infrastructure?',
          paragraphs: [
            'AI Infrastructure encompasses all the hardware, software, and services required to develop, train, and deploy machine learning models. This includes GPU clusters for compute, high-bandwidth networking for distributed training, storage systems for massive datasets, and orchestration platforms for managing the full ML lifecycle.',
            'Unlike traditional computing, AI workloads are extremely compute-intensive and memory-bound. Training large models requires coordinating thousands of GPUs, while inference demands low-latency response times and efficient resource utilization.',
          ],
        },
        {
          heading: 'The AI Compute Crisis',
          paragraphs: [
            'Demand for AI compute is outpacing supply:',
            'This scarcity has spawned a new ecosystem of GPU clouds, inference optimization, and efficient training techniques.',
          ],
        },
      ],
    },
    concepts: {
      title: 'MLOps Platforms',
      subtitle: 'Managing the ML lifecycle',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '📊',
          title: 'Experiment Tracking',
          description: 'Log parameters, metrics, and artifacts from training runs. Compare experiments, reproduce results, and collaborate with team.',
          examples: [],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '🔀',
          title: 'Pipeline Orchestration',
          description: 'Define and schedule multi-step ML workflows. Handle dependencies, retries, and parallelization. Version pipelines as code.',
          examples: [],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '📦',
          title: 'Model Registry',
          description: 'Central repository for trained models. Track lineage, manage versions, handle approvals and deployments.',
          examples: [],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '🎛️',
          title: 'Feature Stores',
          description: 'Centralized feature management for training and serving. Ensure consistency between training and production features.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Cloud GPU Providers',
      subtitle: 'Where to rent AI compute',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '📦', name: 'AWS (EC2)', tagText: '$3.50-4.50/hr', tagClass: 'tag-blue', bestFor: 'Enterprise, MLOps integration', complexity: 'medium', rating: '$3.00-4.00/hr' },
        { icon: '🔷', name: 'Azure', tagText: '$3.40-4.30/hr', tagClass: 'tag-green', bestFor: 'Microsoft shops, Azure ML', complexity: 'medium', rating: '$3.20-3.80/hr' },
        { icon: '🔍', name: 'GCP', tagText: '$3.30-4.20/hr', tagClass: 'tag-purple', bestFor: 'Research, TPU workloads', complexity: 'medium', rating: '$2.90-3.50/hr' },
        { icon: '🛠️', name: 'CoreWeave', tagText: '$2.00-2.80/hr', tagClass: 'tag-orange', bestFor: 'Training at scale, startups', complexity: 'medium', rating: '$1.80-2.20/hr' },
        { icon: '🛠️', name: 'Lambda Labs', tagText: '$2.00-2.50/hr', tagClass: 'tag-pink', bestFor: 'Research, prototyping', complexity: 'medium', rating: '$1.50-2.00/hr' },
        { icon: '🛠️', name: 'RunPod', tagText: '$2.50-3.00/hr', tagClass: 'tag-blue', bestFor: 'Hobbyists, variable workloads', complexity: 'medium', rating: '$1.50-2.00/hr' },
        { icon: '🛠️', name: 'Together AI', tagText: 'Per-token pricing', tagClass: 'tag-green', bestFor: 'Open source model inference', complexity: 'medium', rating: 'Per-token' },
        { icon: '🛠️', name: 'vLLM', tagText: 'LLM Serving', tagClass: 'tag-purple', bestFor: 'High-throughput LLM inference', complexity: 'medium', rating: 'PagedAttention, continuous batching' },
        { icon: '🛠️', name: 'TensorRT-LLM', tagText: 'LLM Serving', tagClass: 'tag-orange', bestFor: 'Maximum NVIDIA GPU performance', complexity: 'medium', rating: 'NVIDIA optimized, FP8 support' },
        { icon: '🛠️', name: 'llama.cpp', tagText: 'LLM Serving', tagClass: 'tag-pink', bestFor: 'Edge deployment, local inference', complexity: 'medium', rating: 'CPU inference, quantization' },
        { icon: '🛠️', name: 'Triton Inference Server', tagText: 'General ML', tagClass: 'tag-blue', bestFor: 'Enterprise multi-model serving', complexity: 'medium', rating: 'Multi-model, multi-framework' },
        { icon: '🛠️', name: 'Text Generation Inference', tagText: 'LLM Serving', tagClass: 'tag-green', bestFor: 'HF model deployment', complexity: 'medium', rating: 'Hugging Face native, easy setup' },
        { icon: '🛠️', name: 'Ray Serve', tagText: 'General ML', tagClass: 'tag-purple', bestFor: 'Complex ML pipelines', complexity: 'medium', rating: 'Distributed, Python-native' },
        { icon: '🛠️', name: 'DeepSpeed', tagText: 'Microsoft', tagClass: 'tag-orange', bestFor: 'Large model training with PyTorch', complexity: 'medium', rating: 'ZeRO optimizer, easy integration' },
        { icon: '🛠️', name: 'FSDP', tagText: 'PyTorch', tagClass: 'tag-pink', bestFor: 'PyTorch-native distributed training', complexity: 'medium', rating: 'Native PyTorch, simpler API' },
        { icon: '🛠️', name: 'Megatron-LM', tagText: 'NVIDIA', tagClass: 'tag-blue', bestFor: 'Frontier model training', complexity: 'medium', rating: 'Maximum efficiency, complex setup' },
        { icon: '🛠️', name: 'Ray Train', tagText: 'Anyscale', tagClass: 'tag-green', bestFor: 'Heterogeneous clusters', complexity: 'medium', rating: 'Framework-agnostic, fault tolerant' },
        { icon: '🛠️', name: 'JAX + pjit', tagText: 'Google', tagClass: 'tag-purple', bestFor: 'Google TPU training', complexity: 'medium', rating: 'XLA compilation, TPU optimized' },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Experiment Tracking', vendor: '', description: 'Log parameters, metrics, and artifacts from training runs. Compare experiments, reproduce results, and collaborate with team.', tags: [] },
        { icon: '🛠️', name: 'Pipeline Orchestration', vendor: '', description: 'Define and schedule multi-step ML workflows. Handle dependencies, retries, and parallelization. Version pipelines as code.', tags: [] },
        { icon: '🛠️', name: 'Model Registry', vendor: '', description: 'Central repository for trained models. Track lineage, manage versions, handle approvals and deployments.', tags: [] },
        { icon: '🛠️', name: 'Feature Stores', vendor: '', description: 'Centralized feature management for training and serving. Ensure consistency between training and production features.', tags: [] },
        { icon: '🛠️', name: 'Model Monitoring', vendor: '', description: 'Track model performance in production. Detect drift, latency issues, and data quality problems. Trigger retraining when needed.', tags: [] },
        { icon: '🛠️', name: 'End-to-End Platforms', vendor: '', description: 'Integrated platforms combining multiple MLOps capabilities. Trade-off: convenience vs flexibility and vendor lock-in.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for AI infrastructure success',
      doItems: [
        'Training: Run once (or periodically), extremely compute-intensive',
        'Inference: Run continuously, latency-sensitive, cost per query',
        '70% of AI infrastructure spend goes to inference',
        'Training optimizes for throughput; inference for latency',
        'Different hardware optimal for each (H100 vs L4/A10)',
        'Inference costs compound with scale—optimization critical',
      ],
      dontItems: [
        'GPU scarcity and long lead times',
        'High capital expenditure for on-prem',
        'Complex distributed systems engineering',
        'Rapidly evolving hardware generations',
        'Power and cooling constraints at scale',
        'Talent shortage for ML infrastructure',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🖥️ InfraOptimizer',
      role: 'AI Infrastructure Optimization Specialist',
      description: 'An agent that analyzes AI infrastructure costs and performance, recommends optimizations, generates infrastructure-as-code configurations, and monitors for cost anomalies and performance degradation.',
      capabilities: [
        'Analyze GPU utilization and costs',
        'Recommend right-sized instance types',
        'Identify batching opportunities',
        'Generate Terraform/Kubernetes configs',
        'Alert on cost anomalies',
        'Forecast capacity needs',
      ],
      codeFilename: 'infra_optimizer.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

infra_optimizer = Agent(
    role="AI Infrastructure Optimization Specialist",
    goal="Minimize costs while maximizing performance",
    backstory="""Expert in GPU infrastructure, Kubernetes,
    and cloud cost optimization. Deep knowledge of vLLM,
    TensorRT, and distributed training frameworks.""",
    tools=[
        CloudCostAnalyzer(),
        GPUUtilizationMonitor(),
        TerraformGenerator(),
        CapacityForecaster()
    ],
    llm=llm
)

async def optimize_infrastructure(cluster_config, metrics):
    task = Task(
        description=f"""Analyze infrastructure:
        Config: {cluster_config}
        Metrics: {metrics}
        Provide: Cost savings opportunities, 
        right-sizing recommendations, IaC changes""",
        agent=infra_optimizer,
        expected_output="Optimization report with IaC"
    )
    crew = Crew(agents=[infra_optimizer], tasks=[task])
    return await crew.kickoff_async()`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The models this infrastructure powers', slug: 'foundation-models' },
      { number: '', title: 'Edge & On-Device AI', description: 'Alternative to cloud infrastructure', slug: 'edge-ai' },
      { number: '', title: 'Observability & Evals', description: 'Monitoring AI infrastructure', slug: 'observability' },
    ],
    prevPage: { title: '19.5 Edge & On-Device AI', slug: 'edge-ai' },
    nextPage: { title: '19.7 AI Safety & Governance', slug: 'ai-safety' },
  },
  {
    slug: 'ai-safety',
    badge: '🛡️ Page 19.7',
    title: 'AI Safety & Governance',
    description: 'Ensuring AI systems are safe, fair, transparent, and accountable. From technical alignment techniques to regulatory compliance frameworks—everything enterprises need to deploy AI responsibly, securely, and in compliance with emerging regulations.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: 'EU AI Act', label: 'First Major AI Law (2024)' },
      { value: '€35M', label: 'Max EU AI Act Fine' },
      { value: '78%', label: 'Orgs Concerned About AI Risk' },
      { value: '~200', label: 'AI Policy Initiatives Globally' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding AI safety and governance',
      subsections: [
        {
          heading: 'What is AI Safety?',
          paragraphs: [
            'AI Safety encompasses technical and organizational measures to ensure AI systems behave as intended without causing harm. This includes alignment research (making AI do what we want), robustness (handling edge cases gracefully), and security (preventing misuse and attacks).',
            'As AI systems become more capable, safety becomes more critical. A chatbot that occasionally hallucinates is manageable; an autonomous agent that makes financial decisions or controls infrastructure requires much higher reliability standards. Safety isn\'t just about preventing harm—it\'s about building systems users can trust and that organizations can deploy with confidence.',
          ],
        },
        {
          heading: 'What is AI Governance?',
          paragraphs: [
            'AI Governance refers to policies, processes, and structures that ensure responsible AI development and deployment. This includes internal policies (acceptable use, review processes), external compliance (regulations, standards), and accountability mechanisms (audit trails, oversight boards).',
            'Effective governance balances innovation speed with risk management—enabling AI adoption while maintaining control, transparency, and ethical standards. Without governance, AI becomes a liability; with excessive governance, innovation stalls. The key is right-sizing governance to risk level.',
          ],
        },
      ],
    },
    concepts: {
      title: 'AI Governance Framework',
      subtitle: 'Organizational structures and processes',
      columns: 2,
      cards: [
        {
          className: 'framework-0',
          borderColor: '#3B82F6',
          icon: '👥',
          title: 'AI Ethics Board / Committee',
          description: 'Cross-functional committee reviewing high-risk AI use cases before deployment. Includes representatives from legal, ethics, technical, business, and affected stakeholder groups. Provides guidance on acceptable applications.',
          examples: [],
        },
        {
          className: 'framework-1',
          borderColor: '#10B981',
          icon: '📋',
          title: 'AI Risk Assessment Process',
          description: 'Structured evaluation of AI systems before deployment. Assesses potential harms, regulatory requirements, technical risks, and mitigation measures. Required review for high-risk applications.',
          examples: [],
        },
        {
          className: 'framework-2',
          borderColor: '#8B5CF6',
          icon: '📜',
          title: 'AI Acceptable Use Policy',
          description: 'Clear guidelines on acceptable and prohibited AI uses across the organization. Defines approved tools and providers, data handling requirements, human oversight requirements, and escalation procedures.',
          examples: [],
        },
        {
          className: 'framework-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: 'AI System Inventory',
          description: 'Comprehensive catalog of all AI systems in use across the organization. Tracks models, use cases, data sources, owners, risk levels, and review dates. Foundation for governance and compliance.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Model Safety Techniques',
      subtitle: 'How AI labs make models safer',
      cards: [
        { icon: '🛠️', title: 'RLHF', subtitle: 'Human raters rank outputs; model trained to maximize preference via reward model', description: 'Expensive ($1M+), human bias, reward hacking', tags: ['Human raters rank outputs; model trained to maximize preference via reward model'] },
        { icon: '🛠️', title: 'Constitutional AI', subtitle: 'Model critiques and revises own outputs against explicit principles', description: 'Principles must be well-specified, can be gamed', tags: ['Model critiques and revises own outputs against explicit principles'] },
        { icon: '🛠️', title: 'DPO', subtitle: 'Direct preference optimization without separate reward model', description: 'Less flexible than RLHF for complex preferences', tags: ['Direct preference optimization without separate reward model'] },
        { icon: '🛠️', title: 'Red Teaming', subtitle: 'Adversarial testing by humans/AI to find harmful behaviors', description: 'Incomplete coverage, cat-and-mouse dynamic', tags: ['Adversarial testing by humans/AI to find harmful behaviors'] },
        { icon: '🛠️', title: 'Safety Fine-Tuning', subtitle: 'Train on curated dataset of safe responses', description: 'Can reduce model capability, data intensive', tags: ['Train on curated dataset of safe responses'] },
        { icon: '🛠️', title: 'System Prompts', subtitle: 'Instructions prepended to every conversation', description: 'Can be jailbroken, uses context window', tags: ['Instructions prepended to every conversation'] },
      ],
    },
    tools: {
      title: 'AI Security Tools',
      subtitle: 'Scanning, validation, and security for AI systems',
      items: [
        { icon: '🛠️', name: 'Snyk', vendor: 'Snyk', description: 'Developer-first security platform that scans AI-generated code for vulnerabilities, license issues, and security flaws. Integrates directly with IDEs (VS Code, JetBrains), CI/CD pipelines, and git repos. Essential for validating Copilot, Cursor, and Claude Code output. Real-time scanning as you code.', tags: [] },
        { icon: '🛠️', name: 'SonarQube', vendor: 'SonarSource', description: 'Continuous code quality and security analysis platform. Catches bugs, vulnerabilities, code smells, and security hotspots in AI-generated code. Self-hosted (SonarQube) or cloud (SonarCloud). Supports 30+ languages with deep analysis rules.', tags: [] },
        { icon: '🛠️', name: 'Semgrep', vendor: 'Semgrep', description: 'Fast, lightweight static analysis with powerful custom rules. Write patterns to catch AI-specific anti-patterns and enforce security policies. Open source core with enterprise features. Excellent for creating custom rules for your codebase.', tags: [] },
        { icon: '🛠️', name: 'CodeQL', vendor: 'GitHub', description: 'GitHub\'s code analysis engine using semantic queries for deep vulnerability detection. Tracks data flow through your application to find injection vulnerabilities, taint issues, and complex bugs. Free for open source.', tags: [] },
        { icon: '🛠️', name: 'GitGuardian', vendor: 'GitGuardian', description: 'Detects secrets and credentials in code—critical for AI-generated code which may inadvertently include API keys, passwords, or tokens from training data patterns. Real-time scanning of all commits.', tags: [] },
        { icon: '🛠️', name: 'FOSSA', vendor: 'FOSSA', description: 'Open source license compliance and vulnerability scanning. Essential for AI-generated code that may reproduce copyrighted or GPL-licensed code from training data. Protects against license contamination.', tags: [] },
        { icon: '🛠️', name: 'Garak', vendor: 'NVIDIA', description: 'LLM vulnerability scanner that probes for jailbreaks, prompt injection, data leakage, and other AI-specific vulnerabilities. Open source, extensible. Run against your deployed models to find weaknesses.', tags: [] },
        { icon: '🛠️', name: 'Robust Intelligence', vendor: 'Robust Intelligence', description: 'End-to-end AI security platform providing automated red teaming, continuous model validation, and real-time protection. Enterprise-focused with comprehensive AI risk management.', tags: [] },
        { icon: '🛠️', name: 'Checkmarx', vendor: 'Checkmarx', description: 'Enterprise application security testing platform with comprehensive SAST, SCA, DAST, and API security. AI-assisted remediation suggestions help developers fix issues faster.', tags: [] },
        { icon: '🛠️', name: 'Trivy', vendor: 'Aqua Security', description: 'Comprehensive open source security scanner for containers, filesystems, git repos, and Kubernetes. Fast, accurate, and widely adopted. Excellent for CI/CD integration.', tags: [] },
        { icon: '🛠️', name: 'Dependabot', vendor: 'GitHub', description: 'Automated dependency updates and security alerts. Creates PRs to update vulnerable dependencies. Free for all GitHub repos. Essential baseline for any project.', tags: [] },
        { icon: '🛠️', name: 'Veracode', vendor: 'Veracode', description: 'Enterprise AppSec platform with static, dynamic, and SCA scanning. Strong compliance focus with detailed reporting for auditors. Pipeline integration and developer IDE plugins.', tags: [] },
        { icon: '🛠️', name: 'NVIDIA NeMo Guardrails', vendor: 'NVIDIA', description: 'Programmable guardrails using Colang DSL. Define conversational flows, topic restrictions, fact-checking, and safety rules. Integrates with any LLM. Production-ready and actively maintained.', tags: [] },
        { icon: '🛠️', name: 'Guardrails AI', vendor: 'Guardrails AI', description: 'Pydantic-style validators for LLM outputs. Define expected schemas, run validation, auto-correct failures. Growing hub of community validators for common use cases.', tags: [] },
        { icon: '🛠️', name: 'LlamaGuard', vendor: 'Meta', description: 'Fine-tuned Llama model for content safety classification. Detects unsafe content in both prompts and responses. Customizable safety taxonomy. Open weights.', tags: [] },
        { icon: '🛠️', name: 'Azure AI Content Safety', vendor: 'Microsoft', description: 'Managed content moderation service detecting hate, violence, sexual content, and self-harm. Multi-modal support for text and images. Configurable severity thresholds.', tags: [] },
        { icon: '🛠️', name: 'OpenAI Moderation', vendor: 'OpenAI', description: 'Free moderation endpoint for content classification. Detects multiple harm categories (hate, harassment, self-harm, sexual, violence) with confidence scores. Use with any model.', tags: [] },
        { icon: '🛠️', name: 'Rebuff', vendor: 'Open Source', description: 'Specialized prompt injection detection with multi-layer defense. Heuristics, ML detection, and canary tokens. Self-hosted or API. Essential for user-facing apps.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Actionable guidance for responsible AI',
      doItems: [
        'Regulatory compliance: EU AI Act, state laws coming into force with significant fines',
        'Reputational protection: AI failures make headlines and damage brand trust',
        'Legal liability: Decisions made by AI may be legally contested in court',
        'Customer trust: Users expect responsible AI practices as table stakes',
        'Operational reliability: Safe AI is more predictable and maintainable',
        'Competitive advantage: Responsible AI is becoming a market differentiator',
        'Employee confidence: Teams need to trust the AI they\'re building',
        'Insurance & contracts: Increasingly required for coverage and partnerships',
      ],
      dontItems: [
        'Rapidly evolving landscape: Regulations and best practices changing constantly',
        'Technical difficulty: Ensuring AI alignment is an unsolved research problem',
        'Speed vs safety: Pressure to ship can compromise thorough review',
        'Measurement gaps: Hard to audit AI behavior comprehensively at scale',
        'Global inconsistency: Different standards and laws across jurisdictions',
        'Talent shortage: Few experienced AI ethics and safety professionals',
        'Cost of compliance: Governance programs require investment',
        'Organizational resistance: Governance can feel like bureaucracy',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '🛡️ SafetyGuard',
      role: 'AI Safety & Security Specialist',
      description: 'An agent that helps organizations assess AI risks, scan AI-generated code for vulnerabilities, evaluate model outputs for safety issues, generate compliance documentation, conduct bias audits, and maintain AI governance records. Automates routine safety checks while escalating complex decisions to humans.',
      capabilities: [
        'Scan AI-generated code for vulnerabilities (Snyk, SonarQube integration)',
        'Conduct structured AI risk assessments',
        'Generate compliance documentation (model cards, risk assessments)',
        'Evaluate model outputs for bias and safety issues',
        'Track AI inventory and risk levels across organization',
        'Alert on governance violations and policy breaches',
      ],
      codeFilename: 'safety_guard.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

safety_guard = Agent(
    role="AI Safety & Security Specialist",
    goal="Ensure AI systems are safe, secure, compliant",
    backstory="""Expert in AI safety, security scanning,
    regulations (EU AI Act, NIST RMF), and security tools
    (Snyk, SonarQube, Semgrep). Deep knowledge of
    guardrails, bias testing, and incident response.""",
    tools=[
        SnykScanner(),
        SonarQubeAnalyzer(),
        BiasEvaluator(),
        RiskAssessmentTool(),
        ComplianceChecker(),
        GuardrailValidator()
    ],
    llm=llm
)

async def safety_review(code, system_desc, use_case):
    task = Task(
        description=f"""Comprehensive safety review:
        Code: {code}
        System: {system_desc}
        Use case: {use_case}
        
        Provide: Security scan results, risk assessment,
        compliance gaps, recommended guardrails,
        remediation priorities""",
        agent=safety_guard,
        expected_output="Safety review with action items"
    )
    crew = Crew(agents=[safety_guard], tasks=[task])
    return await crew.kickoff_async()`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The models these safety measures apply to', slug: 'foundation-models' },
      { number: '', title: 'Agentic AI', description: 'Safety considerations for autonomous agents', slug: 'agentic-ai' },
      { number: '', title: 'Observability & Evals', description: 'Monitoring AI safety in production', slug: 'observability' },
    ],
    prevPage: { title: '19.6 AI Infrastructure', slug: 'ai-infrastructure' },
    nextPage: { title: '19.8 RAG & Knowledge Systems', slug: 'rag-knowledge' },
  },
  {
    slug: 'rag-knowledge',
    badge: '📚 Page 19.8',
    title: 'RAG & Knowledge Systems',
    description: 'Retrieval-Augmented Generation connects LLMs to your data. Ground AI responses in facts, reduce hallucinations, and build intelligent systems that know your business—without expensive fine-tuning or retraining models.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '~50%', label: 'Hallucination Reduction' },
      { value: 'No Training', label: 'Update Knowledge Instantly' },
      { value: '$0.0001', label: 'Cost per Embedding' },
      { value: '~100ms', label: 'Vector Search Latency' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding RAG and knowledge systems',
      subsections: [
        {
          heading: 'What is RAG?',
          paragraphs: [
            'Retrieval-Augmented Generation (RAG) is a technique that enhances LLM responses by retrieving relevant information from external knowledge sources before generating an answer. Instead of relying solely on training data, RAG systems search your documents, databases, or APIs to find relevant context, then include that context in the prompt sent to the LLM.',
            'This approach combines the reasoning and language capabilities of LLMs with the accuracy and currency of retrieval systems—giving you AI that knows your specific data without the cost and complexity of fine-tuning.',
          ],
        },
        {
          heading: 'Why RAG Matters',
          paragraphs: [
            'LLMs have fundamental limitations that RAG addresses:',
          ],
        },
      ],
    },
    concepts: {
      title: 'Chunking Strategies',
      subtitle: 'Splitting documents for optimal retrieval',
      columns: 2,
      cards: [
        {
          className: 'strategy-0',
          borderColor: '#3B82F6',
          icon: '📏',
          title: 'Fixed-Size Chunking',
          description: 'Split text at fixed token intervals. Simple but may split mid-sentence, losing semantic coherence.',
          examples: [],
        },
        {
          className: 'strategy-1',
          borderColor: '#10B981',
          icon: '📝',
          title: 'Recursive Splitting',
          description: 'Try to split on paragraphs, then sentences, then words. Preserves semantic units.',
          examples: [],
        },
        {
          className: 'strategy-2',
          borderColor: '#8B5CF6',
          icon: '🏷️',
          title: 'Semantic Chunking',
          description: 'Use embeddings to detect topic boundaries. Split where similarity drops significantly.',
          examples: [],
        },
        {
          className: 'strategy-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: 'Document Structure',
          description: 'Use headers, sections, HTML tags as boundaries. Preserves author\'s organization.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Embedding Models',
      subtitle: 'Converting text to vectors',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'text-embedding-3-large', tagText: 'OpenAI', tagClass: 'tag-blue', bestFor: '$0.13', complexity: 'medium', rating: '3072' },
        { icon: '🛠️', name: 'text-embedding-3-small', tagText: 'OpenAI', tagClass: 'tag-green', bestFor: '$0.02', complexity: 'medium', rating: '1536' },
        { icon: '🛠️', name: 'voyage-3', tagText: 'Voyage AI', tagClass: 'tag-purple', bestFor: '$0.06', complexity: 'medium', rating: '1024' },
        { icon: '🛠️', name: 'embed-v3', tagText: 'Cohere', tagClass: 'tag-orange', bestFor: '$0.10', complexity: 'medium', rating: '1024' },
        { icon: '🛠️', name: 'BGE-large-en-v1.5', tagText: 'BAAI (Open)', tagClass: 'tag-pink', bestFor: 'Free (self-host)', complexity: 'medium', rating: '1024' },
        { icon: '🛠️', name: 'GTE-Qwen2-7B-instruct', tagText: 'Alibaba (Open)', tagClass: 'tag-blue', bestFor: 'Free (self-host)', complexity: 'medium', rating: '3584' },
        { icon: '🛠️', name: 'Pinecone', tagText: 'Managed SaaS', tagClass: 'tag-green', bestFor: 'Production apps, minimal ops', complexity: 'medium', rating: 'Fully managed, fast, scalable, filtering' },
        { icon: '🛠️', name: 'Weaviate', tagText: 'Open Source', tagClass: 'tag-purple', bestFor: 'Flexible enterprise deployments', complexity: 'medium', rating: 'Hybrid search, GraphQL, modules' },
        { icon: '🛠️', name: 'Qdrant', tagText: 'Open Source', tagClass: 'tag-orange', bestFor: 'High performance self-hosted', complexity: 'medium', rating: 'Fast (Rust), filtering, payloads' },
        { icon: '🛠️', name: 'Chroma', tagText: 'Open Source', tagClass: 'tag-pink', bestFor: 'Prototyping, local dev', complexity: 'medium', rating: 'Simple, embedded, Python-native' },
        { icon: '🛠️', name: 'pgvector', tagText: 'Extension', tagClass: 'tag-blue', bestFor: 'Existing Postgres infrastructure', complexity: 'medium', rating: 'PostgreSQL native, familiar, ACID' },
        { icon: '🛠️', name: 'Dense Retrieval', tagText: 'Semantic similarity via embedding vectors', tagClass: 'tag-green', bestFor: 'Can miss exact matches', complexity: 'medium', rating: 'Understands meaning, handles synonyms' },
        { icon: '🛠️', name: 'Sparse (BM25)', tagText: 'Keyword matching with TF-IDF weighting', tagClass: 'tag-purple', bestFor: 'Misses synonyms, paraphrases', complexity: 'medium', rating: 'Fast, good for exact terms, jargon' },
        { icon: '🛠️', name: 'Hybrid Search', tagText: 'Combine dense + sparse via RRF', tagClass: 'tag-orange', bestFor: 'More complex, requires tuning', complexity: 'medium', rating: 'Best of both approaches' },
        { icon: '🛠️', name: 'Reranking', tagText: 'Cross-encoder re-scores top-k results', tagClass: 'tag-pink', bestFor: 'Adds 50-200ms latency', complexity: 'medium', rating: 'Higher quality final ranking' },
      ],
    },
    tools: {
      title: 'RAG Frameworks & Tools',
      subtitle: 'Building RAG systems efficiently',
      items: [
        { icon: '🛠️', name: 'LangChain', vendor: 'LangChain', description: 'Comprehensive framework for LLM applications. Extensive integrations (100+ loaders, 50+ vector stores), retrieval patterns, and chains.', tags: [] },
        { icon: '🛠️', name: 'LlamaIndex', vendor: 'LlamaIndex', description: 'Purpose-built for RAG and data indexing. Excellent document handling, advanced retrieval patterns (RAPTOR, auto-merging).', tags: [] },
        { icon: '🛠️', name: 'Unstructured', vendor: 'Unstructured', description: 'Pre-processing toolkit for documents. Handles PDFs (including scanned), images, HTML, Word, PowerPoint.', tags: [] },
        { icon: '🛠️', name: 'DocumentAnalyzer', vendor: 'Analysis Tool', description: 'Scans document corpus to understand structure, content types, average lengths, and complexity. Identifies tables, code blocks, headers, and other structural elements that affect chunking.', tags: [] },
        { icon: '🛠️', name: 'ChunkingTester', vendor: 'Optimization Tool', description: 'Tests multiple chunking strategies (fixed, recursive, semantic, document-structure) against sample documents. Measures chunk coherence, boundary quality, and metadata preservation.', tags: [] },
        { icon: '🛠️', name: 'EmbeddingBenchmark', vendor: 'Evaluation Tool', description: 'Benchmarks embedding models on your actual data. Tests OpenAI, Cohere, Voyage, and open-source models. Measures semantic similarity accuracy and retrieval performance.', tags: [] },
        { icon: '🛠️', name: 'RetrievalEvaluator', vendor: 'Quality Tool', description: 'Runs test queries against your RAG system. Measures recall, precision, MRR, and identifies queries with poor retrieval. Compares dense, sparse, and hybrid approaches.', tags: [] },
        { icon: '🛠️', name: 'QueryAnalyzer', vendor: 'Pattern Tool', description: 'Analyzes production query logs to understand user intent patterns, common question types, and query complexity. Identifies gaps between queries and indexed content.', tags: [] },
        { icon: '🛠️', name: 'ConfigGenerator', vendor: 'Build Tool', description: 'Generates optimal RAG configuration based on analysis. Outputs chunking params, embedding model selection, vector DB settings, and retrieval pipeline code.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Building effective RAG systems',
      doItems: [
        'No model training: Add knowledge without fine-tuning—just index documents',
        'Instant updates: New docs available immediately after indexing',
        'Transparency: Can show exact sources for every answer',
        'Cost-effective: 10-100x cheaper than fine-tuning for most use cases',
        'Access control: Retrieve only documents user is permitted to see',
        'Reduced hallucination: 30-50% fewer fabricated facts with good retrieval',
      ],
      dontItems: [
        'Retrieval quality: Garbage in, garbage out—bad retrieval = bad answers',
        'Latency overhead: Search adds 100-500ms to response time',
        'Context limits: Can\'t stuff entire knowledge base into prompt',
        'Chunking complexity: Bad splits lose information, hurt relevance',
        'Maintenance burden: Keep embeddings in sync as sources change',
        'Complex queries: Multi-hop reasoning across documents is hard',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'rag_architect',
      role: 'RAG System Architect',
      description: 'You are an expert in retrieval-augmented \n    generation systems with deep knowledge of embeddings, \n    vector databases, chunking strategies, and LLM \n    integration. You analyze document corpora,',
      capabilities: [
      ],
      codeFilename: 'rag_architect_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from rag_tools import (
    DocumentAnalyzer, ChunkingTester,
    EmbeddingBenchmark, RetrievalEvaluator,
    QueryAnalyzer, ConfigGenerator
)

# Initialize the RAG Architect agent
rag_architect = Agent(
    role="RAG System Architect",
    goal="""Design and optimize RAG systems for 
    maximum retrieval quality and efficiency""",
    backstory="""You are an expert in retrieval-augmented 
    generation systems with deep knowledge of embeddings, 
    vector databases, chunking strategies, and LLM 
    integration. You analyze document corpora, benchmark 
    configurations, and recommend optimal architectures.""",
    tools=[
        DocumentAnalyzer(),
        ChunkingTester(),
        EmbeddingBenchmark(),
        RetrievalEvaluator(),
        QueryAnalyzer(),
        ConfigGenerator()
    ],
    llm=ChatAnthropic(model="claude-sonnet-4-20250514"),
    verbose=True
)

# Define optimization task
optimize_task = Task(
    description="""
    Analyze the document corpus at {corpus_path} and 
    optimize the RAG system:
    
    1. Profile documents for structure and content types
    2. Test chunking strategies and recommend optimal approach
    3. Benchmark embedding models for this domain
    4. Evaluate retrieval quality with test queries
    5. Generate production configuration
    
    Target metrics:
    - Retrieval recall@5 > 85%
    - Answer faithfulness > 90%
    - P95 latency < 2 seconds
    """,
    agent=rag_architect,
    expected_output="RAG optimization report with configs"
)

# Run the optimization
async def optimize_rag(corpus_path: str):
    crew = Crew(
        agents=[rag_architect],
        tasks=[optimize_task],
        verbose=True
    )
    result = await crew.kickoff_async(
        inputs={"corpus_path": corpus_path}
    )
    return result`,
    },
    relatedPages: [
      { number: '', title: 'Foundation Models', description: 'The LLMs that power RAG generation', slug: 'foundation-models' },
      { number: '', title: 'Agentic AI', description: 'Agents using RAG for knowledge access', slug: 'agentic-ai' },
      { number: '', title: 'Observability & Evals', description: 'Monitoring RAG system quality', slug: 'observability' },
    ],
    prevPage: { title: '19.7 AI Safety & Governance', slug: 'ai-safety' },
    nextPage: { title: '19.9 Observability & Evals', slug: 'observability' },
  },
  {
    slug: 'observability',
    badge: '📊 Page 19.9',
    title: 'Observability & Evals',
    description: 'You can\'t improve what you can\'t measure. LLM observability gives you visibility into model behavior, latency, costs, and quality. Evaluations systematically test your AI systems to catch regressions, measure improvements, and build confidence before deployment.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '~40%', label: 'Issues Caught Pre-Deploy' },
      { value: '3-5x', label: 'Faster Debugging' },
      { value: '~25%', label: 'Cost Reduction' },
      { value: '<1 min', label: 'Issue Detection' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'Understanding LLM observability and evaluation',
      subsections: [
        {
          heading: 'What is LLM Observability?',
          paragraphs: [
            'LLM Observability is the practice of collecting, analyzing, and acting on data about your AI system\'s behavior in production. Unlike traditional software where you monitor uptime and error rates, LLM systems require monitoring output quality, hallucination rates, latency distributions, token usage, and cost per query.',
            'Observability answers: What did the model actually do? Why did it fail? How much did it cost? Is quality degrading over time?',
          ],
        },
        {
          heading: 'What are Evals?',
          paragraphs: [
            'Evaluations (Evals) are systematic tests that measure AI system quality. Unlike unit tests with binary pass/fail, evals often measure quality on a spectrum—relevance scores, factual accuracy, tone appropriateness. They run on test datasets before deployment and continuously in production.',
            'Evals answer: Is this change an improvement? Will this prompt work in production? Is the model still performing as expected?',
          ],
        },
      ],
    },
    concepts: {
      title: 'Evaluations (Evals)',
      subtitle: 'Systematically testing AI quality',
      columns: 2,
      cards: [
        {
          className: 'strategy-0',
          borderColor: '#3B82F6',
          icon: '🤖',
          title: 'LLM-as-Judge',
          description: 'Use a powerful LLM (GPT-4, Claude) to evaluate outputs. Provide rubrics and criteria. Fast and scalable but has biases—tends to prefer verbose responses.',
          examples: [],
        },
        {
          className: 'strategy-1',
          borderColor: '#10B981',
          icon: '👥',
          title: 'Human Evaluation',
          description: 'Domain experts rate outputs. Gold standard for quality but expensive and slow. Use for high-stakes decisions and calibrating automated metrics.',
          examples: [],
        },
        {
          className: 'strategy-2',
          borderColor: '#8B5CF6',
          icon: '📐',
          title: 'Heuristic Metrics',
          description: 'Rule-based checks: response length, format validation, keyword presence, regex patterns. Fast and deterministic. Good for basic quality gates.',
          examples: [],
        },
        {
          className: 'strategy-3',
          borderColor: '#F59E0B',
          icon: '🔬',
          title: 'Retrieval Metrics',
          description: 'Measure RAG retrieval quality: recall@k, precision@k, MRR. Requires labeled "relevant documents" for each test query.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Tools & Platforms',
      subtitle: 'Observability and evaluation solutions',
      cards: [
        { icon: '🛠️', title: 'LangSmith', subtitle: '✓ Excellent', description: 'LangChain users', tags: ['✓ Excellent'] },
        { icon: '🛠️', title: 'Phoenix', subtitle: '✓ Good', description: 'Open source needs', tags: ['✓ Good'] },
        { icon: '🛠️', title: 'Weights & Biases', subtitle: '✓ Good', description: 'ML teams', tags: ['✓ Good'] },
        { icon: '🛠️', title: 'Braintrust', subtitle: '✓ Basic', description: 'Eval-first teams', tags: ['✓ Basic'] },
        { icon: '🛠️', title: 'Langfuse', subtitle: '✓ Good', description: 'Self-hosting', tags: ['✓ Good'] },
        { icon: '📌', title: 'Observability & Evals', subtitle: '', description: 'You can\'t improve what you can\'t measure. LLM observability gives you visibility into model behavior, latency, costs, and quality. Evaluations systema', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Platforms',
      subtitle: 'Observability and evaluation solutions',
      items: [
        { icon: '🛠️', name: 'LangSmith', vendor: 'LangChain', description: 'Full observability platform for LangChain apps. Tracing, evals, prompt hub, playground. Deep integration with LangChain ecosystem.', tags: [] },
        { icon: '🛠️', name: 'Phoenix', vendor: 'Arize AI', description: 'Open-source observability for LLMs. Tracing, evals, embeddings analysis. Works with any framework. Self-host or cloud.', tags: [] },
        { icon: '🛠️', name: 'Weights & Biases', vendor: 'W&B', description: 'ML experiment tracking extended to LLMs. Traces, prompts, evals with powerful comparison tools. Great for ML teams.', tags: [] },
        { icon: '🛠️', name: 'Braintrust', vendor: 'Braintrust', description: 'Evals-focused platform. Strong on prompt management, scoring, and CI/CD integration. Built for eval-driven development.', tags: [] },
        { icon: '🛠️', name: 'Langfuse', vendor: 'Langfuse', description: 'Open-source LLM engineering platform. Tracing, analytics, evals. Self-host or cloud. Growing community.', tags: [] },
        { icon: '🛠️', name: 'Helicone', vendor: 'Helicone', description: 'Proxy-based observability. Add one line to log all LLM calls. Simple setup, cost tracking, caching.', tags: [] },
        { icon: '🛠️', name: 'TraceFetcher', vendor: 'Monitoring Tool', description: 'Retrieves traces from your observability platform. Filters by time, error status, latency thresholds, or custom attributes.', tags: [] },
        { icon: '🛠️', name: 'EvalRunner', vendor: 'Quality Tool', description: 'Executes eval suites against model outputs. Supports LLM-as-judge, heuristic checks, and retrieval metrics.', tags: [] },
        { icon: '🛠️', name: 'FailureAnalyzer', vendor: 'Diagnosis Tool', description: 'Analyzes failed evals and production errors to identify root causes—bad retrieval, prompt issues, or model limitations.', tags: [] },
        { icon: '🛠️', name: 'CostAnalyzer', vendor: 'Optimization Tool', description: 'Analyzes token usage patterns and identifies optimization opportunities—caching candidates, prompt compression, model tiering.', tags: [] },
        { icon: '🛠️', name: 'DatasetExpander', vendor: 'Curation Tool', description: 'Converts production failures and edge cases into eval dataset entries. Generates golden answers for human review.', tags: [] },
        { icon: '🛠️', name: 'AlertManager', vendor: 'Notification Tool', description: 'Sends alerts via Slack, PagerDuty, or email when quality metrics breach thresholds or anomalies are detected.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Effective observability and evaluation',
      doItems: [
        'Catch issues early: Detect quality regressions before users complain',
        'Debug faster: Trace exactly what happened on any request',
        'Control costs: Track token usage and optimize expensive calls',
        'Build confidence: Know your system works before deploying changes',
        'Comply with audits: Log all inputs/outputs for regulated industries',
        'Improve continuously: Data-driven optimization of prompts and retrieval',
      ],
      dontItems: [
        'Non-determinism: Same input can produce different outputs',
        'Subjective quality: "Good" responses are hard to define automatically',
        'Scale of data: Logging every token is expensive at high volume',
        'Privacy concerns: User inputs may contain sensitive data',
        'Eval maintenance: Test sets drift as product evolves',
        'LLM-as-judge bias: Using LLMs to evaluate LLMs has limitations',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'obs_agent',
      role: 'LLM Observability Engineer',
      description: 'You are an expert in LLM \n    observability, evaluation frameworks, and \n    production monitoring. You analyze traces,\n    run evals, diagnose failures, and optimize\n    cost and quality.',
      capabilities: [
      ],
      codeFilename: 'observability_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from obs_tools import (
    TraceFetcher, EvalRunner, FailureAnalyzer,
    CostAnalyzer, DatasetExpander, AlertManager
)

# Initialize the Observability Agent
obs_agent = Agent(
    role="LLM Observability Engineer",
    goal="""Monitor LLM systems, run evaluations,
    identify quality issues, and recommend fixes""",
    backstory="""You are an expert in LLM 
    observability, evaluation frameworks, and 
    production monitoring. You analyze traces,
    run evals, diagnose failures, and optimize
    cost and quality.""",
    tools=[
        TraceFetcher(),
        EvalRunner(),
        FailureAnalyzer(),
        CostAnalyzer(),
        DatasetExpander(),
        AlertManager()
    ],
    llm=ChatAnthropic(model="claude-sonnet-4-20250514"),
    verbose=True
)

# Daily monitoring task
daily_monitor = Task(
    description="""
    Run daily observability checks:
    
    1. Fetch traces from last 24 hours
    2. Run eval suite on sample of requests
    3. Identify any quality regressions
    4. Analyze cost trends and anomalies
    5. Generate report with recommendations
    
    Alert if:
    - Eval pass rate < 85%
    - P95 latency > 3 seconds
    - Error rate > 2%
    - Cost up > 20% week-over-week
    """,
    agent=obs_agent,
    expected_output="Daily observability report"
)`,
    },
    relatedPages: [
      { number: '', title: 'RAG & Knowledge', description: 'Systems that need observability most', slug: 'rag-knowledge' },
      { number: '', title: 'AI Safety & Governance', description: 'Monitoring for safety compliance', slug: 'ai-safety' },
      { number: '', title: 'Enterprise Adoption', description: 'Production-ready AI deployment', slug: 'enterprise-adoption' },
    ],
    prevPage: { title: '19.8 RAG & Knowledge Systems', slug: 'rag-knowledge' },
    nextPage: { title: '19.10 Enterprise Adoption', slug: 'enterprise-adoption' },
  },
  {
    slug: 'enterprise-adoption',
    badge: '🏢 Page 19.10',
    title: 'Enterprise Adoption',
    description: 'Moving AI from pilots to production requires more than technology. Success depends on organizational readiness, stakeholder alignment, governance frameworks, and sustained change management.',
    accentColor: '#6366F1',
    accentLight: '#818CF8',
    metrics: [
      { value: '~70%', label: 'AI Pilots Fail to Scale' },
      { value: '3-5x', label: 'ROI with Proper Adoption' },
      { value: '12-18mo', label: 'Typical Enterprise Timeline' },
      { value: '~40%', label: 'Productivity Gains Possible' },
    ],
    overview: {
      title: 'Overview',
      subtitle: 'The enterprise AI adoption challenge',
      subsections: [
        {
          heading: 'The Adoption Gap',
          paragraphs: [
            'Most enterprises struggle to move AI from successful pilots to scaled production. Technology is rarely the blocker—organizational factors are. Companies report that 70% of AI pilots never reach production, not due to technical failure but because of unclear ownership, governance concerns, skill gaps, and change resistance.',
            'The gap between "AI works in a demo" and "AI creates business value at scale" is where most initiatives fail.',
          ],
        },
        {
          heading: 'What Makes Enterprise Different',
          paragraphs: [
          ],
        },
      ],
    },
    concepts: {
      title: 'Change Management',
      subtitle: 'Driving adoption and managing resistance',
      columns: 2,
      cards: [
        {
          className: 'strategy-0',
          borderColor: '#3B82F6',
          icon: '📢',
          title: 'Communication',
          description: 'Transparent, consistent messaging about AI strategy and what\'s changing. Address job concerns directly. Celebrate wins publicly. Create two-way feedback channels.',
          examples: [],
        },
        {
          className: 'strategy-1',
          borderColor: '#10B981',
          icon: '🎓',
          title: 'Training & Enablement',
          description: 'Role-specific training from basics to advanced. Prompt engineering for power users. Self-service learning resources. Hands-on workshops. Ongoing support.',
          examples: [],
        },
        {
          className: 'strategy-2',
          borderColor: '#8B5CF6',
          icon: '🏆',
          title: 'Champions Network',
          description: 'Identify early adopters in each business unit. Empower them to evangelize, train peers, and provide feedback. Give them early access. Recognize contributions.',
          examples: [],
        },
        {
          className: 'strategy-3',
          borderColor: '#F59E0B',
          icon: '🎯',
          title: 'Quick Wins',
          description: 'Prioritize high-visibility, low-risk use cases that deliver obvious value fast. Build momentum before tackling complex transformations. Share success stories.',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'AI Maturity Model',
      subtitle: 'Assessing organizational readiness',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Strategy', tagText: 'None', tagClass: 'tag-blue', bestFor: 'Core to business', complexity: 'medium', rating: 'Emerging' },
        { icon: '🛠️', name: 'Data', tagText: 'Siloed', tagClass: 'tag-green', bestFor: 'Strategic asset', complexity: 'medium', rating: 'Accessible' },
        { icon: '🛠️', name: 'Technology', tagText: 'Ad-hoc', tagClass: 'tag-purple', bestFor: 'Self-service', complexity: 'medium', rating: 'POC infra' },
        { icon: '🛠️', name: 'Talent', tagText: 'None', tagClass: 'tag-orange', bestFor: 'Org-wide skills', complexity: 'medium', rating: '1-2 specialists' },
        { icon: '🛠️', name: 'Culture', tagText: 'Skeptical', tagClass: 'tag-pink', bestFor: 'AI-first', complexity: 'medium', rating: 'Curious' },
        { icon: '🛠️', name: 'Data Privacy', tagText: 'PII in prompts, training data leakage', tagClass: 'tag-blue', bestFor: 'Privacy/Legal', complexity: 'medium', rating: 'Classification, masking, DLP' },
        { icon: '🛠️', name: 'Output Quality', tagText: 'Hallucinations, incorrect information', tagClass: 'tag-green', bestFor: 'Product/QA', complexity: 'medium', rating: 'Human review, evals, guardrails' },
        { icon: '🛠️', name: 'Security', tagText: 'Prompt injection, data exfiltration', tagClass: 'tag-purple', bestFor: 'Security', complexity: 'medium', rating: 'Input validation, monitoring' },
        { icon: '🛠️', name: 'Compliance', tagText: 'Regulatory violations, audit failures', tagClass: 'tag-orange', bestFor: 'Compliance', complexity: 'medium', rating: 'Logging, documentation, reviews' },
        { icon: '🛠️', name: 'Ethical', tagText: 'Bias, unfair outcomes, misuse', tagClass: 'tag-pink', bestFor: 'Ethics/HR', complexity: 'medium', rating: 'Ethics review, bias testing' },
        { icon: '🛠️', name: 'Operational', tagText: 'Downtime, cost overruns, vendor lock-in', tagClass: 'tag-blue', bestFor: 'IT/Finance', complexity: 'medium', rating: 'SLAs, budgets, multi-vendor' },
        { icon: '🛠️', name: 'Platform & Tools', tagText: '$150,000', tagClass: 'tag-green', bestFor: '$350,000', complexity: 'medium', rating: '$100,000' },
        { icon: '🛠️', name: 'LLM API Costs', tagText: '$120,000', tagClass: 'tag-purple', bestFor: '$540,000', complexity: 'medium', rating: '$180,000' },
        { icon: '🛠️', name: 'Team (2→3→4 FTE)', tagText: '$350,000', tagClass: 'tag-orange', bestFor: '$1,575,000', complexity: 'medium', rating: '$525,000' },
        { icon: '🛠️', name: 'Integration & Data', tagText: '$200,000', tagClass: 'tag-pink', bestFor: '$300,000', complexity: 'medium', rating: '$50,000' },
        { icon: '🛠️', name: 'Training & Change', tagText: '$80,000', tagClass: 'tag-blue', bestFor: '$160,000', complexity: 'medium', rating: '$40,000' },
        { icon: '🛠️', name: 'Total Investment', tagText: '$900,000', tagClass: 'tag-green', bestFor: '$2,925,000', complexity: 'medium', rating: '$895,000' },
        { icon: '🛠️', name: 'Foundation Model Providers', tagText: 'Best models, latest capabilities', tagClass: 'tag-purple', bestFor: 'Direct API access, cutting-edge needs', complexity: 'medium', rating: 'Data privacy, vendor lock-in' },
        { icon: '🛠️', name: 'Cloud Platforms', tagText: 'Integration, security, scale', tagClass: 'tag-orange', bestFor: 'Existing cloud customers, enterprise scale', complexity: 'medium', rating: 'Model selection, multi-cloud' },
        { icon: '🛠️', name: 'Enterprise Platforms', tagText: 'Full stack, governance, MLOps', tagClass: 'tag-pink', bestFor: 'Large organizations, multiple use cases', complexity: 'medium', rating: 'Complexity, cost' },
        { icon: '🛠️', name: 'Specialized Tools', tagText: 'Best-in-class for specific needs', tagClass: 'tag-blue', bestFor: 'Specific capabilities, technical teams', complexity: 'medium', rating: 'Integration overhead' },
        { icon: '🛠️', name: 'System Integrators', tagText: 'Implementation expertise', tagClass: 'tag-green', bestFor: 'Accelerating adoption, complex projects', complexity: 'medium', rating: 'Cost, knowledge transfer' },
        { icon: '🛠️', name: 'AI Foundations', tagText: '2 hours', tagClass: 'tag-purple', bestFor: 'Annual', complexity: 'medium', rating: 'E-learning' },
        { icon: '🛠️', name: 'Effective Prompting', tagText: '4 hours', tagClass: 'tag-orange', bestFor: 'Semi-annual', complexity: 'medium', rating: 'Workshop + practice' },
        { icon: '🛠️', name: 'AI for Leaders', tagText: '1 day', tagClass: 'tag-pink', bestFor: 'Annual', complexity: 'medium', rating: 'Executive workshop' },
        { icon: '🛠️', name: 'Technical Integration', tagText: '3 days', tagClass: 'tag-blue', bestFor: 'As needed', complexity: 'medium', rating: 'Hands-on lab' },
        { icon: '🛠️', name: 'Champion Certification', tagText: '2 days', tagClass: 'tag-green', bestFor: 'Annual', complexity: 'medium', rating: 'Workshop + assessment' },
        { icon: '🛠️', name: 'PII exposure in prompts', tagText: 'Privacy', tagClass: 'tag-purple', bestFor: 'Privacy', complexity: 'medium', rating: 'Medium' },
        { icon: '🛠️', name: 'Hallucinated information', tagText: 'Quality', tagClass: 'tag-orange', bestFor: 'Product', complexity: 'medium', rating: 'High' },
        { icon: '🛠️', name: 'Prompt injection attacks', tagText: 'Security', tagClass: 'tag-pink', bestFor: 'Security', complexity: 'medium', rating: 'Medium' },
        { icon: '🛠️', name: 'Cost overruns', tagText: 'Financial', tagClass: 'tag-blue', bestFor: 'Finance', complexity: 'medium', rating: 'Medium' },
        { icon: '🛠️', name: 'User resistance', tagText: 'Adoption', tagClass: 'tag-green', bestFor: 'HR', complexity: 'medium', rating: 'High' },
        { icon: '🛠️', name: 'Regulatory non-compliance', tagText: 'Compliance', tagClass: 'tag-purple', bestFor: 'Legal', complexity: 'medium', rating: 'Low' },
        { icon: '🛠️', name: 'Vendor dependency', tagText: 'Strategic', tagClass: 'tag-orange', bestFor: 'IT', complexity: 'medium', rating: 'Medium' },
        { icon: '🛠️', name: 'Skills gap', tagText: 'Talent', tagClass: 'tag-pink', bestFor: 'HR', complexity: 'medium', rating: 'High' },
        { icon: '🛠️', name: 'Authentication', tagText: 'User identity verification', tagClass: 'tag-blue', bestFor: 'Login audit, MFA status', complexity: 'medium', rating: 'SAML/OIDC with enterprise IdP' },
        { icon: '🛠️', name: 'Authorization', tagText: 'Access control to features/data', tagClass: 'tag-green', bestFor: 'Access reviews, entitlement audit', complexity: 'medium', rating: 'Role-based with attribute policies' },
        { icon: '🛠️', name: 'Data Classification', tagText: 'Categorize data sensitivity', tagClass: 'tag-purple', bestFor: 'Classification accuracy checks', complexity: 'medium', rating: 'Automated tagging, manual review' },
        { icon: '🛠️', name: 'DLP', tagText: 'Prevent data leakage', tagClass: 'tag-orange', bestFor: 'DLP alert review, false positive rate', complexity: 'medium', rating: 'Content scanning, blocking rules' },
        { icon: '🛠️', name: 'Encryption', tagText: 'Protect data confidentiality', tagClass: 'tag-pink', bestFor: 'Encryption status checks, key rotation', complexity: 'medium', rating: 'TLS 1.3, AES-256, key management' },
        { icon: '🛠️', name: 'Monitoring', tagText: 'Detect security events', tagClass: 'tag-blue', bestFor: 'Alert response time, coverage', complexity: 'medium', rating: 'SIEM integration, alerting rules' },
        { icon: '🛠️', name: 'Business Value', tagText: 'Is ROI being realized?', tagClass: 'tag-green', bestFor: 'Value not materializing, unclear attribution', complexity: 'medium', rating: 'Metrics meeting or exceeding targets' },
        { icon: '🛠️', name: 'User Adoption', tagText: 'Are users engaged?', tagClass: 'tag-purple', bestFor: 'Declining usage, complaints, workarounds', complexity: 'medium', rating: 'Growing active users, positive feedback' },
        { icon: '🛠️', name: 'Quality', tagText: 'Is output accurate?', tagClass: 'tag-orange', bestFor: 'Frequent errors, trust issues', complexity: 'medium', rating: 'High accuracy, few escalations' },
        { icon: '🛠️', name: 'Operations', tagText: 'Is it running smoothly?', tagClass: 'tag-pink', bestFor: 'Outages, performance issues, high support', complexity: 'medium', rating: 'High uptime, fast response' },
        { icon: '🛠️', name: 'Cost', tagText: 'Is it cost-effective?', tagClass: 'tag-blue', bestFor: 'Cost overruns, unpredictable spend', complexity: 'medium', rating: 'Within budget, clear unit economics' },
        { icon: '🛠️', name: 'Risk', tagText: 'Are risks managed?', tagClass: 'tag-green', bestFor: 'Security events, compliance gaps', complexity: 'medium', rating: 'No incidents, audits passing' },
        { icon: '🛠️', name: 'Pilot Purgatory', tagText: 'Endless iterations, no production path', tagClass: 'tag-purple', bestFor: 'Force go/no-go decision', complexity: 'medium', rating: 'Define exit criteria upfront' },
        { icon: '🛠️', name: 'Adoption Failure', tagText: 'Low usage after launch', tagClass: 'tag-orange', bestFor: 'Intensive change management', complexity: 'medium', rating: 'Involve users from start' },
        { icon: '🛠️', name: 'Quality Collapse', tagText: 'User complaints, escalations', tagClass: 'tag-pink', bestFor: 'Rollback and fix', complexity: 'medium', rating: 'Robust eval before launch' },
        { icon: '🛠️', name: 'Cost Overrun', tagText: 'Spend exceeding projections', tagClass: 'tag-blue', bestFor: 'Optimize or scale back', complexity: 'medium', rating: 'Budget alerts, rate limiting' },
        { icon: '🛠️', name: 'Security Incident', tagText: 'Data leakage, compliance issue', tagClass: 'tag-green', bestFor: 'Incident response, fixes', complexity: 'medium', rating: 'Security review, DLP' },
        { icon: '🛠️', name: 'Stakeholder Loss', tagText: 'Sponsor departure, priority shift', tagClass: 'tag-purple', bestFor: 'Find new sponsor, show value', complexity: 'medium', rating: 'Multiple champions, clear ROI' },
      ],
    },
    tools: {
      title: 'Agent This',
      subtitle: 'Enterprise AI adoption advisor agent',
      items: [
        { icon: '🛠️', name: 'MaturityAssessor', vendor: 'Assessment Tool', description: 'Evaluates organizational AI maturity across strategy, data, technology, talent, process, and culture dimensions.', tags: [] },
        { icon: '🛠️', name: 'UseCasePrioritizer', vendor: 'Selection Tool', description: 'Scores potential AI use cases on value, feasibility, risk, and strategic alignment. Generates prioritized roadmap.', tags: [] },
        { icon: '🛠️', name: 'BusinessCaseBuilder', vendor: 'ROI Tool', description: 'Generates business case documents with cost estimates, benefit projections, ROI calculations, and risk analysis.', tags: [] },
        { icon: '🛠️', name: 'GovernanceGenerator', vendor: 'Policy Tool', description: 'Creates governance frameworks, policies, and processes tailored to industry and regulatory requirements.', tags: [] },
        { icon: '🛠️', name: 'StakeholderMapper', vendor: 'Analysis Tool', description: 'Identifies key stakeholders, maps their concerns and needs, and generates engagement strategies.', tags: [] },
        { icon: '🛠️', name: 'ChangePlanner', vendor: 'Change Mgmt Tool', description: 'Creates change management plans including communication strategies, training curricula, and adoption metrics.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Lessons from successful enterprise adoption',
      doItems: [
        'Executive sponsorship: C-level champion driving priority and funding',
        'Clear use cases: Specific, measurable business problems to solve',
        'Cross-functional teams: Business, tech, legal, and operations aligned',
        'Governance framework: Clear policies for data, ethics, and oversight',
        'Iterative approach: Start small, learn fast, scale what works',
        'Change management: Training, communication, and user adoption focus',
      ],
      dontItems: [
        'No clear owner: AI initiatives orphaned between IT and business',
        'Data problems: Can\'t access, integrate, or trust required data',
        'Talent gaps: Lack ML engineers, prompt engineers, AI product managers',
        'Security concerns: Unclear how to handle sensitive data with LLMs',
        'Pilot purgatory: Successful POCs that never get production funding',
        'Shadow AI: Ungoverned usage creating risk and redundancy',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'adoption_advisor',
      role: 'Enterprise AI Adoption Advisor',
      description: 'You are an expert in enterprise \n    digital transformation with deep experience in \n    AI strategy, governance, and change management.\n    You have helped Fortune 500 companies navigate\n    AI adopt',
      capabilities: [
      ],
      codeFilename: 'adoption_advisor.py',
      code: `from crewai import Agent, Task, Crew
from langchain_anthropic import ChatAnthropic
from adoption_tools import (
    MaturityAssessor, UseCasePrioritizer,
    BusinessCaseBuilder, GovernanceGenerator,
    StakeholderMapper, ChangePlanner
)

# Initialize the Adoption Advisor agent
adoption_advisor = Agent(
    role="Enterprise AI Adoption Advisor",
    goal="""Help enterprises successfully adopt AI 
    by assessing readiness, identifying use cases,
    building business cases, and planning change""",
    backstory="""You are an expert in enterprise 
    digital transformation with deep experience in 
    AI strategy, governance, and change management.
    You have helped Fortune 500 companies navigate
    AI adoption successfully across all industries.""",
    tools=[
        MaturityAssessor(),
        UseCasePrioritizer(),
        BusinessCaseBuilder(),
        GovernanceGenerator(),
        StakeholderMapper(),
        ChangePlanner()
    ],
    llm=ChatAnthropic(model="claude-sonnet-4-20250514"),
    verbose=True
)

# Comprehensive adoption assessment
assessment_task = Task(
    description="""
    Conduct enterprise AI adoption assessment:
    
    1. Assess current AI maturity level (1-5)
    2. Identify top 10 potential use cases
    3. Prioritize by value, feasibility, risk
    4. Build business case for top 3
    5. Map key stakeholders and concerns
    6. Generate governance framework outline
    7. Create change management plan
    
    Context:
    - Industry: {industry}
    - Company size: {size}
    - Current AI usage: {current_state}
    - Key constraints: {constraints}
    """,
    agent=adoption_advisor,
    expected_output="AI adoption strategy document"
)`,
    },
    relatedPages: [
      { number: '', title: 'AI Safety & Governance', description: 'Responsible AI deployment frameworks', slug: 'ai-safety' },
      { number: '', title: 'Observability & Evals', description: 'Monitoring production AI systems', slug: 'observability' },
    ],
    prevPage: { title: '19.9 Observability & Evals', slug: 'observability' },
    nextPage: undefined,
  },
]

registerPages('emerging-technologies', pages)
export default pages
