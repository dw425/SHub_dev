import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'nlu-intent',
    badge: '🧠 Page 6.1 • Understanding Language',
    title: 'NLU & Intent Recognition',
    description: 'Transform unstructured natural language into actionable structured data. Master intent classification, entity extraction, sentiment analysis, and confidence scoring to build chatbots that truly understand users.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '95%+', label: 'Target Accuracy' },
      { value: 'BERT', label: 'Transformer Models' },
      { value: 'F1', label: 'Evaluation Metric' },
      { value: '<100ms', label: 'Inference Target' },
    ],
    overview: {
      title: 'Understanding NLU',
      subtitle: 'The foundation of conversational AI',
      subsections: [
        {
          heading: 'What is Natural Language Understanding?',
          paragraphs: [
            'Natural Language Understanding (NLU) is the critical first step in any conversational AI pipeline. It bridges the gap between human communication—ambiguous, varied, and context-dependent—and machine-processable data structures. When a user says "Book me a flight to New York next Friday," NLU extracts the intent (book_flight), entities (destination: New York, date: next Friday), and confidence scores that tell the system how certain it is about its interpretation.',
            'Modern NLU has evolved dramatically from rule-based pattern matching to sophisticated neural networks. Today\'s transformer-based models like BERT, RoBERTa, and domain-specific variants can understand semantic meaning, handle synonyms and typos, and disambiguate context—achieving human-level accuracy on well-defined domains. This evolution has made conversational AI practical for enterprise deployment.',
            'The business impact of good NLU is significant: a 5% improvement in intent recognition can translate to 20%+ reduction in escalations to human agents. Conversely, poor NLU creates frustrated users who abandon self-service channels. Every misunderstood intent is a potential lost customer or an expensive human handoff.',
            'NLU pipelines include several key stages: tokenization (breaking text into tokens), intent classification (predicting what the user wants), entity extraction (identifying key parameters), and confidence scoring (measuring certainty). Advanced systems also incorporate sentiment analysis, coreference resolution, and multi-turn context understanding.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Essential NLU terminology and definitions',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🏷️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📝',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Model Comparison',
      subtitle: 'Choosing the right model for your use case',
      cards: [
        { icon: '🛠️', title: 'BERT-base', subtitle: '110M', description: 'General purpose baseline', tags: ['High'] },
        { icon: '🛠️', title: 'DistilBERT', subtitle: '66M', description: 'Production w/ latency needs', tags: ['Good'] },
        { icon: '🛠️', title: 'RoBERTa', subtitle: '125M', description: 'When accuracy is paramount', tags: ['Excellent'] },
        { icon: '🛠️', title: 'GPT-4 (few-shot)', subtitle: '—', description: 'Zero-shot, flexible', tags: ['Excellent'] },
        { icon: '📌', title: 'NLU & Intent Recognition', subtitle: '', description: 'Transform unstructured natural language into actionable structured data. Master intent classification, entity extraction, sentiment analysis, and conf', tags: [] },
        { icon: '📌', title: 'NLU & Intent Recognition', subtitle: '', description: 'Transform unstructured natural language into actionable structured data. Master intent classification, entity extraction, sentiment analysis, and conf', tags: [] },
      ],
    },
    tools: {
      title: 'NLU Tools & Frameworks',
      subtitle: 'Libraries for building production NLU',
      items: [
        { icon: '🛠️', name: 'Transformers', vendor: '', description: 'State-of-the-art models, fine-tuning', tags: [] },
        { icon: '🛠️', name: 'spaCy', vendor: '', description: 'Industrial NLP, custom NER', tags: [] },
        { icon: '🛠️', name: 'Rasa NLU', vendor: '', description: 'DIET classifier, forms', tags: [] },
        { icon: '🛠️', name: 'Dialogflow', vendor: '', description: 'Managed NLU, 30+ languages', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Building production-ready NLU',
      doItems: [
        'Collect 50-100+ real utterances per intent from logs or user research',
        'Include typos, abbreviations, slang—real users don\'t speak perfectly',
        'Use data augmentation (paraphrasing) to expand training data',
        'Implement confidence thresholds with appropriate fallbacks',
        'Monitor intent confusion matrices weekly',
        'Retrain regularly with production data',
      ],
      dontItems: [
        'Creating too many overlapping intents',
        'Training only on synthetic "happy path" examples',
        'Ignoring the fallback intent—it\'s your safety net',
        'Deploying without measuring accuracy on held-out test set',
        'Hard-coding entity patterns when ML would generalize better',
        'Skipping A/B testing when rolling out model updates',
      ],
    },
    agent: {
      avatar: '🧠',
      name: 'NLUArchitectAgent',
      role: 'NLU Systems Specialist',
      description: 'Expert in building production NLU systems. Designs intent taxonomies, creates entity schemas, fine-tunes transformer models.',
      capabilities: [
        'Design intent taxonomy',
        'Create entity schemas',
        'Generate training data',
        'Fine-tune BERT models',
        'Optimize inference latency',
        'Analyze confusion matrices',
      ],
      codeFilename: 'nlu_architect_agent.py',
      code: `from crewai import Agent, Task, Crew
from transformers import pipeline, AutoModelForSequenceClassification
from transformers import AutoTokenizer
import torch

nlu_agent = Agent(
    role="NLU Architect",
    goal="Build high-accuracy intent classification",
    backstory="""Expert in transformer-based NLU with
    deep knowledge of BERT fine-tuning and NER.""",
    tools=[IntentDesigner(), EntityBuilder()]
)

class IntentClassifier:
    def __init__(self, model_path: str):
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.model.eval()
        self.labels = ["book_flight", "cancel", "check_status", "fallback"]
    
    def predict(self, text: str) -> dict:
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True)
        with torch.no_grad():
            outputs = self.model(**inputs)
            probs = torch.softmax(outputs.logits, dim=-1)
        
        top_idx = probs.argmax().item()
        return {
            "intent": self.labels[top_idx],
            "confidence": round(probs[0][top_idx].item(), 3)
        }

task = Task(
    description="Optimize NLU for booking domain",
    agent=nlu_agent,
    expected_output="Trained NLU model"
)

crew = Crew(agents=[nlu_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.2', title: 'Dialog Management', description: 'Use NLU output to drive conversation', slug: 'dialog-management' },
      { number: 'Page 6.4', title: 'Context & Memory', description: 'Multi-turn context for better NLU', slug: 'context-memory' },
      { number: 'Page 6.9', title: 'Testing & QA', description: 'Evaluate NLU accuracy', slug: 'testing' },
    ],
    prevPage: undefined,
    nextPage: { title: '6.2 Dialog Management', slug: 'dialog-management' },
  },
  {
    slug: 'dialog-management',
    badge: '🔀 Page 6.2 • Conversation Control',
    title: 'Dialog Management',
    description: 'Control conversation flow with finite state machines, slot filling strategies, and policy-based decision making. Build chatbots that guide users through complex multi-turn interactions while gracefully handling interruptions, corrections, and unexpected inputs.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'FSM', label: 'State Machines' },
      { value: 'Slots', label: 'Form Filling' },
      { value: 'Policy', label: 'RL Learning' },
      { value: 'LLM', label: 'Hybrid' },
    ],
    overview: {
      title: 'Understanding Dialog Management',
      subtitle: 'The brain that orchestrates conversation flow',
      subsections: [
        {
          heading: 'What is Dialog Management?',
          paragraphs: [
            'Dialog Management (DM) is the central component that decides what to do next in a conversation. Given the current state—user\'s intent, extracted entities, conversation history, and application context—the dialog manager selects the next action: ask a follow-up question, call an API, provide information, or hand off to a human agent. It\'s the "brain" that connects understanding to action, transforming raw NLU output into coherent conversational experiences.',
            'Good dialog management creates the illusion of intelligence. When a user says "Actually, make that two adults and one child," a well-designed dialog manager recognizes this as a modification to a previous request, updates the relevant slots, confirms the change, and continues the booking flow seamlessly. Poor dialog management forces users to start over or repeat information constantly, creating frustrating experiences.',
            'The evolution of dialog management mirrors the broader AI evolution: from rigid rule-based systems with hand-coded decision trees, to statistical approaches that learn from data, to modern hybrid systems that combine structured flows with LLM flexibility. Each approach offers different trade-offs in terms of control, flexibility, predictability, and development effort.',
            'Key challenges include handling interruptions (user changes topic), corrections (user fixes previous info), disambiguation (clarifying ambiguous requests), context switching (returning to previous topic), and graceful degradation (handling edge cases). The best dialog managers handle these gracefully without exposing complexity to users.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Essential dialog management terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔄',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📝',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔀',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'table',
      title: 'Framework Comparison',
      subtitle: 'Dialog management across platforms',
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: [
        { icon: '🛠️', name: 'Dialogflow CX', tagText: 'ExcellentMedium', tagClass: 'tag-blue', bestFor: 'Enterprise', complexity: 'medium', rating: 'Excellent' },
        { icon: '🛠️', name: 'Rasa', tagText: 'ExcellentHigh', tagClass: 'tag-green', bestFor: 'Custom, self-hosted', complexity: 'medium', rating: 'Excellent' },
        { icon: '📦', name: 'Amazon Lex', tagText: 'GoodMedium', tagClass: 'tag-purple', bestFor: 'AWS ecosystem', complexity: 'medium', rating: 'Good' },
        { icon: '🛠️', name: 'LangGraph', tagText: 'ExcellentVery High', tagClass: 'tag-orange', bestFor: 'LLM-native apps', complexity: 'medium', rating: 'Excellent' },
      ],
    },
    tools: {
      title: 'Dialog Management Tools',
      subtitle: 'Libraries and frameworks',
      items: [
        { icon: '🛠️', name: 'Rasa', vendor: '', description: 'Full-stack with stories, rules, forms', tags: [] },
        { icon: '🛠️', name: 'LangGraph', vendor: '', description: 'Stateful multi-actor LLM apps', tags: [] },
        { icon: '🛠️', name: 'Dialogflow CX', vendor: '', description: 'Visual flow builder', tags: [] },
        { icon: '🛠️', name: 'Amazon Lex', vendor: '', description: 'Intent + Lambda fulfillment', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Building robust dialog systems',
      doItems: [
        'Design happy path first, then add edge case handlers systematically',
        'Allow corrections at any point—"actually, make that Chicago"',
        'Confirm before irreversible actions (payments, bookings)',
        'Provide escape hatches—restart, go back, reach human',
        'Use progressive disclosure—don\'t overwhelm with options',
        'Log all state transitions for debugging and analytics',
      ],
      dontItems: [
        'Creating dead-end states with no way forward or back',
        'Asking many slots without acknowledging previous answers',
        'Ignoring context—if user said NYC don\'t ask "which city?"',
        'Over-confirming every detail—breaks conversation flow',
        'Designing only for perfect users following exact script',
        'Failing silently—always provide feedback and recovery',
      ],
    },
    agent: {
      avatar: '🔀',
      name: 'DialogArchitectAgent',
      role: 'Conversation Flow Designer',
      description: 'Expert in dialog systems, state machines, slot filling, and flow optimization. Builds chatbots that guide users through complex interactions while handling edge cases.',
      capabilities: [
        'Design conversation flow diagrams',
        'Define slot schemas with validation',
        'Create dialog policy specifications',
        'Handle interruptions and corrections',
        'Implement fallback strategies',
        'Optimize task completion rate',
      ],
      codeFilename: 'dialog_architect_agent.py',
      code: `from crewai import Agent, Task, Crew
from enum import Enum
from dataclasses import dataclass

dialog_agent = Agent(
    role="Dialog Architect",
    goal="Design optimal conversation flows",
    backstory="""Expert in state machines, slot filling,
    and conversational UX. Built dialog systems for
    millions of conversations.""",
    tools=[FlowDesigner(), PolicyOptimizer()]
)

class DialogState(Enum):
    GREETING = "greeting"
    COLLECT_ORIGIN = "collect_origin"
    COLLECT_DEST = "collect_destination"
    COLLECT_DATE = "collect_date"
    CONFIRM = "confirm"
    COMPLETE = "complete"

@dataclass
class ConversationContext:
    state: DialogState = DialogState.GREETING
    origin: str = None
    destination: str = None
    date: str = None

class DialogManager:
    def __init__(self):
        self.context = ConversationContext()
    
    def process_turn(self, nlu_output):
        # Update slots from entities
        for entity in nlu_output.get("entities", []):
            if entity["type"] == "city":
                if not self.context.origin:
                    self.context.origin = entity["value"]
                else:
                    self.context.destination = entity["value"]
        
        return self._apply_policy()
    
    def _apply_policy(self):
        if not self.context.origin:
            return {"action": "ask", "slot": "origin"}
        elif not self.context.destination:
            return {"action": "ask", "slot": "destination"}
        elif not self.context.date:
            return {"action": "ask", "slot": "date"}
        else:
            return {"action": "confirm", "data": self.context}`,
    },
    relatedPages: [
      { number: 'Page 6.1', title: 'NLU & Intent', description: 'Understanding input that drives dialog', slug: 'nlu-intent' },
      { number: 'Page 6.3', title: 'Response Generation', description: 'Generate responses from actions', slug: 'response-generation' },
      { number: 'Page 6.4', title: 'Context & Memory', description: 'Maintain state across turns', slug: 'context-memory' },
    ],
    prevPage: { title: '6.1 NLU & Intent Recognition', slug: 'nlu-intent' },
    nextPage: { title: '6.3 Response Generation', slug: 'response-generation' },
  },
  {
    slug: 'response-generation',
    badge: '💬 Page 6.3 • Crafting Responses',
    title: 'Response Generation',
    description: 'Transform dialog actions into natural, engaging responses. Master template-based generation, LLM-powered NLG, hybrid approaches, and personalization techniques to create chatbots that communicate naturally.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: 'NLG', label: 'Natural Language Gen' },
      { value: 'LLM', label: 'GPT-4 / Claude' },
      { value: 'RAG', label: 'Retrieval Augmented' },
      { value: 'A/B', label: 'Response Testing' },
    ],
    overview: {
      title: 'Understanding Response Generation',
      subtitle: 'From dialog action to natural language',
      subsections: [
        {
          heading: 'What is Response Generation?',
          paragraphs: [
            'Response Generation (also called Natural Language Generation or NLG) is the final step in the conversational AI pipeline—transforming structured dialog actions into human-readable text. When the dialog manager decides to "confirm flight booking for NYC on Dec 20", the response generator crafts the actual message the user sees: "Great! I\'ve found flights to New York City on December 20th. Would you prefer morning or evening departure?"',
            'The response generation landscape has been revolutionized by Large Language Models. Traditional template-based systems offered control and predictability but felt robotic. Modern LLM-powered generation produces remarkably natural, contextual responses but requires careful guardrails. The sweet spot for most production systems is a hybrid approach: templates for critical paths (payments, confirmations, errors) and LLMs for flexible, conversational elements.',
            'Response quality directly impacts user experience metrics. Studies show that natural, conversational responses increase task completion rates by 15-25% compared to robotic template responses. However, overly creative responses can confuse users or introduce errors. The art is balancing naturalness with accuracy, personality with professionalism, and flexibility with control.',
            'Key considerations include tone consistency (maintaining brand voice), personalization (adapting to user preferences and context), localization (supporting multiple languages and cultural norms), and safety (preventing harmful or off-brand outputs). A well-designed response generation system feels effortlessly natural while remaining firmly under your control.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Essential response generation terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '📝',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🤖',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🔀',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🎭',
          title: '',
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
        { icon: '📌', title: 'Understanding Response Generation', subtitle: '', description: 'From dialog action to natural language', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Essential response generation terminology', tags: [] },
        { icon: '📌', title: 'How It Works', subtitle: '', description: 'The response generation pipeline step by step', tags: [] },
        { icon: '📌', title: 'The Generation Spectrum', subtitle: '', description: 'From rigid templates to free-form LLM', tags: [] },
        { icon: '📌', title: 'Template vs LLM Generation', subtitle: '', description: 'Choosing the right approach for each use case', tags: [] },
        { icon: '📌', title: 'Response Quality Metrics', subtitle: '', description: 'Measuring what makes a good response', tags: [] },
        { icon: '📌', title: 'Response Generation Tools', subtitle: '', description: 'Platforms and libraries for NLG', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Crafting effective chatbot responses', tags: [] },
      ],
    },
    tools: {
      title: 'Response Generation Tools',
      subtitle: 'Platforms and libraries for NLG',
      items: [
        { icon: '🛠️', name: 'OpenAI GPT-4', vendor: '', description: 'State-of-art generation with function calling', tags: [] },
        { icon: '🛠️', name: 'Anthropic Claude', vendor: '', description: 'Constitutional AI, 100K context', tags: [] },
        { icon: '🛠️', name: 'LangChain', vendor: '', description: 'Chains, prompts, RAG orchestration', tags: [] },
        { icon: '🛠️', name: 'Jinja2', vendor: '', description: 'Python template engine for responses', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Crafting effective chatbot responses',
      doItems: [
        'Use templates for critical paths: payments, confirmations, legal disclosures',
        'Define a clear persona document that guides all response generation',
        'Implement post-generation validation for factual accuracy (prices, dates)',
        'A/B test response variations to optimize engagement and completion',
        'Add response variation pools to avoid repetitive, robotic conversations',
        'Include conversation context in LLM prompts for coherent multi-turn',
      ],
      dontItems: [
        'Using unfiltered LLM output for anything involving money or legal terms',
        'Letting the bot claim capabilities it doesn\'t have ("I\'ll remember that")',
        'Overly verbose responses—users want answers, not essays',
        'Inconsistent persona—switching between formal and casual randomly',
        'Ignoring channel constraints (SMS length limits, voice pacing)',
        'Generating without safety filters—always check before sending',
      ],
    },
    agent: {
      avatar: '💬',
      name: 'ResponseCraftAgent',
      role: 'NLG Specialist',
      description: 'Expert in natural language generation, persona design, and response optimization. Creates engaging, on-brand responses that drive user satisfaction.',
      capabilities: [
        'Design chatbot personas',
        'Create template libraries',
        'Craft LLM system prompts',
        'Optimize for engagement',
        'Implement safety filters',
        'A/B test variations',
      ],
      codeFilename: 'response_craft_agent.py',
      code: `from crewai import Agent, Task, Crew
from langchain.prompts import ChatPromptTemplate

response_agent = Agent(
    role="Response Craft Specialist",
    goal="Generate natural, engaging chatbot responses",
    backstory="""Expert in NLG with deep experience in
    persona design, template systems, and LLM prompting.
    Has optimized response quality for millions of
    conversations across enterprise chatbots.""",
    tools=[PersonaDesigner(), TemplateBuilder(), LLMOptimizer()]
)

class HybridResponseGenerator:
    def __init__(self, persona: str, templates: dict, llm):
        self.persona = persona
        self.templates = templates
        self.llm = llm
        
    def generate(self, action: dict, context: dict) -> str:
        """Generate response using hybrid approach."""
        action_type = action["type"]
        
        # Critical paths use templates
        if action_type in ["payment", "confirm", "error"]:
            template = random.choice(self.templates[action_type])
            response = template.format(**action["entities"])
        
        # Flexible paths use LLM
        else:
            prompt = ChatPromptTemplate.from_messages([
                ("system", f"You are {self.persona}. Be helpful and concise."),
                ("human", f"Context: {context}\\nAction: {action}\\nRespond naturally.")
            ])
            response = self.llm.invoke(prompt)
        
        # Always validate before returning
        return self.validate(response, action)
    
    def validate(self, response: str, action: dict) -> str:
        """Validate response for safety and accuracy."""
        # Check factual accuracy
        for key, value in action.get("entities", {}).items():
            if key in ["price", "date", "confirmation"]:
                assert str(value) in response, f"Missing {key}"
        
        # Safety filter
        assert not contains_pii(response)
        assert not contains_harmful(response)
        
        return response

# Create optimization task
task = Task(
    description="Optimize response engagement for travel bot",
    agent=response_agent,
    expected_output="Improved response templates and prompts"
)

crew = Crew(agents=[response_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.2', title: 'Dialog Management', description: 'Actions that trigger response generation', slug: 'dialog-management' },
      { number: 'Page 6.4', title: 'Context & Memory', description: 'Context that shapes responses', slug: 'context-memory' },
      { number: 'Page 6.6', title: 'Voice Assistants', description: 'Voice-specific response design', slug: 'voice-assistants' },
    ],
    prevPage: { title: '6.2 Dialog Management', slug: 'dialog-management' },
    nextPage: { title: '6.4 Context & Memory', slug: 'context-memory' },
  },
  {
    slug: 'context-memory',
    badge: '🧩 Page 6.4 • Remembering Context',
    title: 'Context & Memory',
    description: 'Enable chatbots to remember user information, maintain conversation history, and leverage contextual data for personalized, coherent multi-turn interactions.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '128K', label: 'Context Window' },
      { value: 'Redis', label: 'Session Store' },
      { value: 'RAG', label: 'Long-term Memory' },
      { value: 'TTL', label: 'Memory Lifecycle' },
    ],
    overview: {
      title: 'Understanding Context & Memory',
      subtitle: 'How chatbots remember and reason about information',
      subsections: [
        {
          heading: 'Why Memory Matters',
          paragraphs: [
            'Context and memory transform chatbots from stateless question-answering systems into intelligent conversational partners. Without memory, every message would start from scratch—users would have to repeat their name, preferences, and the topic of discussion with every turn. Memory enables continuity, allowing the bot to reference "the flight you mentioned earlier" or "your usual order."',
            'Modern conversational AI operates with multiple layers of memory, each serving different purposes. Immediate context holds the current conversation turn. Session memory persists throughout a single conversation (30 minutes to hours). User memory stores preferences and history across sessions (days to months). Knowledge memory provides access to domain information via RAG systems.',
            'The challenge lies in efficiently managing these memory layers within the constraints of LLM context windows. A 128K token context window sounds large, but a customer service bot handling 50 daily conversations with 20 turns each quickly exceeds capacity. Smart memory management—summarization, selective retrieval, and tiered storage—becomes essential.',
            'Memory also raises important considerations around privacy and data retention. Users expect personalization but also privacy controls. Best practices include clear data policies, opt-out mechanisms, automatic expiration (TTL), and GDPR-compliant deletion capabilities. The goal is memory that feels helpful, not creepy.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Essential memory terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '💭',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📦',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🗄️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔍',
          title: '',
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
        { icon: '📌', title: 'Understanding Context & Memory', subtitle: '', description: 'How chatbots remember and reason about information', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Essential memory terminology', tags: [] },
        { icon: '📌', title: 'How It Works', subtitle: '', description: 'The memory management pipeline', tags: [] },
        { icon: '📌', title: 'Memory Architecture', subtitle: '', description: 'Layered memory system visualization', tags: [] },
        { icon: '📌', title: 'Context Window Management', subtitle: '', description: 'Fitting everything into limited space', tags: [] },
        { icon: '📌', title: 'Short-term vs Long-term Memory', subtitle: '', description: 'Different storage strategies for different needs', tags: [] },
        { icon: '📌', title: 'Memory Tools & Technologies', subtitle: '', description: 'Infrastructure for conversational memory', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Memory management guidelines', tags: [] },
      ],
    },
    tools: {
      title: 'Memory Tools & Technologies',
      subtitle: 'Infrastructure for conversational memory',
      items: [
        { icon: '🛠️', name: 'Redis', vendor: '', description: 'In-memory key-value store with TTL support', tags: [] },
        { icon: '🛠️', name: 'Pinecone', vendor: '', description: 'Managed vector database for RAG retrieval', tags: [] },
        { icon: '🛠️', name: 'PostgreSQL', vendor: '', description: 'Relational DB for user profiles & history', tags: [] },
        { icon: '🛠️', name: 'LangChain', vendor: '', description: 'Memory abstractions & conversation buffers', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Memory management guidelines',
      doItems: [
        'Summarize long conversations to fit context windows efficiently',
        'Use tiered storage: Redis for session, DB for persistent, vector for knowledge',
        'Set appropriate TTLs—session data should expire, not accumulate forever',
        'Provide users with memory controls: view, edit, delete their data',
        'Load user context early in the prompt for better personalization',
        'Cache frequently accessed knowledge chunks to reduce latency',
      ],
      dontItems: [
        'Storing sensitive data (passwords, full credit cards) in memory',
        'Keeping unlimited conversation history—it bloats context and costs',
        'Ignoring memory consent requirements (GDPR, CCPA compliance)',
        'Over-personalizing in creepy ways ("I see you were sad last Tuesday")',
        'Relying solely on LLM memory—it hallucinates, use structured storage',
        'Forgetting to handle session expiration gracefully for users',
      ],
    },
    agent: {
      avatar: '🧩',
      name: 'MemoryArchitectAgent',
      role: 'Context & Memory Specialist',
      description: 'Expert in designing memory systems for conversational AI. Optimizes context window usage, implements RAG pipelines, and ensures privacy compliance.',
      capabilities: [
        'Design memory architectures',
        'Implement session management',
        'Build RAG retrieval pipelines',
        'Optimize context windows',
        'Ensure GDPR compliance',
        'Create summarization strategies',
      ],
      codeFilename: 'memory_manager.py',
      code: `from crewai import Agent, Task, Crew
import redis
from langchain.memory import ConversationSummaryBufferMemory

memory_agent = Agent(
    role="Memory Architecture Specialist",
    goal="Design efficient context and memory systems",
    backstory="""Expert in conversational memory with deep
    knowledge of Redis, vector databases, and LLM context
    optimization. Has built memory systems handling millions
    of daily conversations.""",
    tools=[RedisManager(), VectorDBClient(), Summarizer()]
)

class ConversationMemory:
    def __init__(self, session_id: str, user_id: str):
        self.redis = redis.Redis()
        self.session_id = session_id
        self.user_id = user_id
        self.session_ttl = 1800  # 30 minutes
        
    def load_context(self) -> dict:
        """Load all memory layers for current turn."""
        # Layer 1: Session memory (fast)
        session = self.redis.get(f"session:{self.session_id}")
        session = json.loads(session) if session else {"history": [], "slots": {}}
        
        # Layer 2: User memory (persistent)
        user_mem = db.query(
            "SELECT preferences, history_summary FROM users WHERE id = %s",
            [self.user_id]
        )
        
        # Layer 3: RAG knowledge (if query provided)
        # Handled separately in retrieve_knowledge()
        
        return {
            "session": session,
            "user": user_mem,
            "history": session.get("history", [])[-10:]  # Last 10 turns
        }
    
    def retrieve_knowledge(self, query: str, top_k: int = 5) -> list:
        """RAG: Fetch relevant knowledge chunks."""
        embedding = embed_model.encode(query)
        chunks = vector_db.search(embedding, top_k=top_k)
        return [c.text for c in chunks]
    
    def update_session(self, user_msg: str, bot_msg: str, new_slots: dict):
        """Append turn and update session in Redis."""
        session = self.load_context()["session"]
        session["history"].append({"user": user_msg, "assistant": bot_msg})
        session["slots"].update(new_slots)
        
        # Summarize if history too long
        if len(session["history"]) > 20:
            session["summary"] = summarize(session["history"][:-10])
            session["history"] = session["history"][-10:]
        
        self.redis.setex(
            f"session:{self.session_id}",
            self.session_ttl,
            json.dumps(session)
        )
    
    def save_user_preference(self, key: str, value: str):
        """Persist user preference to long-term storage."""
        db.execute(
            "UPDATE users SET preferences = jsonb_set(preferences, %s, %s) WHERE id = %s",
            [f'{{{key}}}', f'"{value}"', self.user_id]
        )

# Create memory optimization task
task = Task(
    description="Optimize memory usage for high-volume travel chatbot",
    agent=memory_agent,
    expected_output="Memory architecture with Redis session, PostgreSQL user store, Pinecone RAG"
)

crew = Crew(agents=[memory_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.2', title: 'Dialog Management', description: 'State tracking that uses memory', slug: 'dialog-management' },
      { number: 'Page 6.3', title: 'Response Generation', description: 'Context-aware response crafting', slug: 'response-generation' },
      { number: 'Page 6.10', title: 'Enterprise Integration', description: 'CRM and knowledge base connections', slug: 'enterprise' },
    ],
    prevPage: { title: '6.3 Response Generation', slug: 'response-generation' },
    nextPage: { title: '6.5 Chatbot Platforms', slug: 'platforms' },
  },
  {
    slug: 'platforms',
    badge: '🤖 Page 6.5 • Build or Buy',
    title: 'Chatbot Platforms',
    description: 'Navigate the landscape of conversational AI platforms. Compare managed services like Dialogflow and Lex with open-source options like Rasa to find the right fit for your requirements.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '6+', label: 'Major Platforms' },
      { value: 'SaaS', label: 'vs Open Source' },
      { value: 'NLU', label: 'Built-in Models' },
      { value: 'SDK', label: 'Multi-language' },
    ],
    overview: {
      title: 'Understanding Chatbot Platforms',
      subtitle: 'The foundation for building conversational experiences',
      subsections: [
        {
          heading: 'Choosing Your Platform',
          paragraphs: [
            'Chatbot platforms provide the infrastructure for building, training, and deploying conversational AI. They range from fully-managed cloud services with visual builders to open-source frameworks offering complete control. The right choice depends on your technical resources, scale requirements, data privacy needs, and budget.',
            'Managed platforms like Google Dialogflow CX, Amazon Lex, and Microsoft Azure Bot Service offer quick starts with pre-built NLU, visual flow designers, and native cloud integrations. They\'re ideal for teams that want to focus on conversation design rather than infrastructure. The tradeoff: vendor lock-in, per-request pricing, and limited customization.',
            'Open-source alternatives like Rasa provide full control over your NLU models, dialog management, and data. You can run on-premise for sensitive data, customize every component, and avoid per-message costs at scale. The tradeoff: you manage infrastructure, model training, and updates yourself—requiring ML engineering expertise.',
            'A third category, low-code platforms like Voiceflow and Botpress, bridge the gap with visual builders for non-technical users while supporting custom code when needed. They\'re popular for rapid prototyping and business-led chatbot development, though may lack the sophistication of enterprise platforms for complex use cases.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Platform evaluation terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '☁️',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔓',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎨',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🧠',
          title: '',
          description: '',
          examples: [],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Platform Comparison',
      subtitle: 'Side-by-side feature matrix',
      cards: [
        { icon: '🛠️', title: 'Dialogflow CX', subtitle: 'Excellent', description: 'Enterprise, Multi-language', tags: ['ExcellentYesNo'] },
        { icon: '📦', title: 'Amazon Lex', subtitle: 'Very Good', description: 'AWS shops, Voice + Text', tags: ['Very GoodYesNo'] },
        { icon: '🔷', title: 'Azure Bot', subtitle: 'Very Good', description: 'Microsoft ecosystem', tags: ['Very GoodYesNo'] },
        { icon: '🛠️', title: 'Rasa', subtitle: 'Customizable', description: 'Data privacy, High volume', tags: ['CustomizableLimitedYes'] },
        { icon: '🛠️', title: 'Botpress', subtitle: 'Good', description: 'Prototyping, SMB', tags: ['GoodYesYes'] },
        { icon: '📌', title: 'Chatbot Platforms', subtitle: '', description: 'Navigate the landscape of conversational AI platforms. Compare managed services like Dialogflow and Lex with open-source options like Rasa to find the', tags: [] },
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
      subtitle: 'Platform selection guidelines',
      doItems: [
        'Start with a managed platform for MVPs, migrate to self-hosted if scale justifies',
        'Evaluate total cost of ownership (TCO), not just per-request price',
        'Test NLU quality with YOUR actual user utterances, not demos',
        'Confirm channel integrations exist for your deployment targets',
        'Check enterprise features: SSO, audit logs, SLAs, support tiers',
        'Plan for multi-region deployment if serving global users',
      ],
      dontItems: [
        'Choosing a platform just because it\'s from your cloud provider',
        'Underestimating the ML expertise needed for open-source',
        'Ignoring vendor lock-in—export your training data regularly',
        'Assuming visual builders can handle complex business logic',
        'Skipping load testing before production launch',
        'Building custom integrations when pre-built connectors exist',
      ],
    },
    agent: {
      avatar: '🤖',
      name: 'PlatformAdvisorAgent',
      role: 'Chatbot Platform Specialist',
      description: 'Expert in evaluating and recommending chatbot platforms based on technical requirements, budget, and organizational constraints.',
      capabilities: [
        'Assess platform fit for requirements',
        'Calculate total cost of ownership',
        'Evaluate NLU accuracy benchmarks',
        'Design migration strategies',
        'Architect multi-platform solutions',
        'Negotiate enterprise contracts',
      ],
      codeFilename: 'platform_advisor.py',
      code: `from crewai import Agent, Task, Crew
from dataclasses import dataclass

platform_agent = Agent(
    role="Platform Selection Advisor",
    goal="Recommend optimal chatbot platform based on requirements",
    backstory="""Expert consultant who has evaluated and deployed
    chatbots across all major platforms. Deep knowledge of pricing,
    capabilities, and hidden gotchas for Dialogflow, Lex, Azure,
    Rasa, and low-code alternatives.""",
    tools=[PlatformDatabase(), CostCalculator(), NLUBenchmark()]
)

@dataclass
class PlatformRequirements:
    monthly_messages: int
    languages: list[str]
    channels: list[str]
    data_residency: str  # "cloud", "on-premise", "eu-only"
    team_ml_expertise: str  # "none", "basic", "advanced"
    time_to_launch: str  # "weeks", "months", "flexible"
    
def evaluate_platforms(reqs: PlatformRequirements) -> dict:
    """Score platforms against requirements."""
    platforms = {
        "dialogflow_cx": {
            "managed": True, "self_host": False,
            "cost_per_req": 0.007, "nlu_quality": 9,
            "visual_builder": True, "languages": 40
        },
        "amazon_lex": {
            "managed": True, "self_host": False,
            "cost_per_req": 0.004, "nlu_quality": 8,
            "visual_builder": True, "languages": 15
        },
        "rasa": {
            "managed": False, "self_host": True,
            "cost_per_req": 0, "nlu_quality": 8,  # When well-trained
            "visual_builder": False, "languages": "unlimited"
        }
    }
    
    scores = {}
    for name, p in platforms.items():
        score = 0
        
        # Data residency check
        if reqs.data_residency == "on-premise" and not p["self_host"]:
            score -= 100  # Disqualify
        
        # Cost calculation
        monthly_cost = reqs.monthly_messages * p["cost_per_req"]
        if monthly_cost < 1000:
            score += 20
        elif monthly_cost > 10000:
            score -= 10
            
        # ML expertise match
        if reqs.team_ml_expertise == "none" and not p["visual_builder"]:
            score -= 30
        if reqs.team_ml_expertise == "advanced" and p["self_host"]:
            score += 20
            
        # Time to launch
        if reqs.time_to_launch == "weeks" and p["managed"]:
            score += 25
            
        scores[name] = score
    
    return dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))

# Example evaluation
reqs = PlatformRequirements(
    monthly_messages=500000,
    languages=["en", "es", "fr"],
    channels=["web", "whatsapp"],
    data_residency="cloud",
    team_ml_expertise="basic",
    time_to_launch="weeks"
)

task = Task(
    description=f"Evaluate platforms for: {reqs}",
    agent=platform_agent,
    expected_output="Ranked platform recommendations with rationale"
)

crew = Crew(agents=[platform_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.1', title: 'NLU & Intent', description: 'Understanding platform NLU capabilities', slug: 'nlu-intent' },
      { number: 'Page 6.7', title: 'Multi-Channel', description: 'Deploying across platforms', slug: 'multichannel' },
      { number: 'Page 6.10', title: 'Enterprise Integration', description: 'Platform integration patterns', slug: 'enterprise' },
    ],
    prevPage: { title: '6.4 Context & Memory', slug: 'context-memory' },
    nextPage: { title: '6.6 Voice Assistants', slug: 'voice-assistants' },
  },
  {
    slug: 'voice-assistants',
    badge: '🎙️ Page 6.6 • Voice-First UX',
    title: 'Voice Assistants',
    description: 'Design and build voice-first conversational experiences. Master ASR, TTS, wake words, and the unique UX challenges of audio-only interfaces.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: 'ASR', label: 'Speech to Text' },
      { value: 'TTS', label: 'Text to Speech' },
      { value: '<500ms', label: 'Target Latency' },
      { value: 'WER', label: 'Accuracy Metric' },
    ],
    overview: {
      title: 'Understanding Voice Assistants',
      subtitle: 'From sound waves to spoken responses',
      subsections: [
        {
          heading: 'Voice Changes Everything',
          paragraphs: [
            'Voice assistants add two critical layers to conversational AI: Automatic Speech Recognition (ASR) to convert audio to text, and Text-to-Speech (TTS) to vocalize responses. These aren\'t just feature additions—they fundamentally change user expectations. Voice users expect sub-second responses, natural prosody, and graceful handling of ambient noise, accents, and interruptions.',
            'The voice pipeline introduces unique latency challenges. Each stage—wake word detection, ASR, NLU, dialog, TTS—adds milliseconds. Users perceive delays over 500ms as "slow," and over 1 second as broken. Streaming ASR and TTS help by beginning processing before the full utterance completes, but optimizing end-to-end latency requires careful architecture.',
            'Voice UX differs dramatically from text. Users can\'t "scroll up" to review history. They can\'t see options—you must speak them. Long responses cause cognitive overload. Successful voice design means brevity, confirmation, and progressive disclosure: say only what\'s needed, confirm understanding, and offer more detail only when requested.',
            'Privacy considerations are heightened with voice. Always-on listening for wake words raises concerns. Many voice systems now offer on-device processing for wake word detection and even full ASR, keeping audio local until explicitly triggered. Transparency about when audio is transmitted and stored is essential for user trust.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Voice technology terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎤',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔊',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '👂',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: '',
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
        { icon: '📌', title: 'Understanding Voice Assistants', subtitle: '', description: 'From sound waves to spoken responses', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Voice technology terminology', tags: [] },
        { icon: '📌', title: 'Voice Pipeline', subtitle: '', description: 'End-to-end audio processing flow', tags: [] },
        { icon: '📌', title: 'Latency Budget', subtitle: '', description: 'Where time goes in voice processing', tags: [] },
        { icon: '📌', title: 'Voice Platforms', subtitle: '', description: 'Major voice assistant ecosystems', tags: [] },
        { icon: '📌', title: 'Wake Word Detection', subtitle: '', description: 'Always-on trigger phrases', tags: [] },
        { icon: '📌', title: 'Voice UX Best Practices', subtitle: '', description: 'Designing for audio-only interfaces', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered voice development', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Amazon Alexa', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Google Assistant', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Apple Siri', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines and recommendations',
      doItems: [
        'Keep responses under 3 sentences—users can\'t scroll back',
        'Confirm understanding: "Booking flight to NYC. Is that correct?"',
        'Offer escape hatches: "Say \'help\' or \'start over\' anytime"',
        'Use earcons (audio cues) to indicate listening, processing, done',
        'Support barge-in—let users interrupt long responses',
        'Vary responses to avoid robotic repetition',
      ],
      dontItems: [
        'Don\'t list more than 3 options—users forget the first ones',
        'Don\'t require precise phrasing—allow natural variations',
        'Don\'t play long audio without pause points',
        'Don\'t assume quiet environment—design for noise',
        'Don\'t ignore errors—acknowledge and recover gracefully',
        'Don\'t store audio without explicit consent and transparency',
        'Don\'t list more than 3 options—users forget the first ones',
        'Don\'t require precise phrasing—allow natural variations',
        'Don\'t play long audio without pause points',
        'Don\'t assume quiet environment—design for noise',
        'Don\'t ignore errors—acknowledge and recover gracefully',
        'Don\'t store audio without explicit consent and transparency',
      ],
    },
    agent: {
      avatar: '🎙️',
      name: 'VoiceArchitectAgent',
      role: 'Voice Assistant Specialist',
      description: 'Expert in designing and optimizing voice-first experiences. Deep knowledge of ASR, TTS, wake word systems, and voice UX patterns.',
      capabilities: [
        'Design voice interaction flows',
        'Optimize ASR/TTS latency',
        'Configure wake word detection',
        'Implement barge-in handling',
        'Build Alexa Skills & Actions',
        'Voice UX testing & iteration',
      ],
      codeFilename: 'voice_assistant.py',
      code: `from crewai import Agent, Task, Crew
import azure.cognitiveservices.speech as speechsdk
from google.cloud import texttospeech

voice_agent = Agent(
    role="Voice Experience Architect",
    goal="Design low-latency, natural voice interactions",
    backstory="""Expert voice developer who has shipped Alexa
    Skills and Google Actions with millions of users. Deep 
    knowledge of ASR optimization, TTS voice selection, and
    voice-first UX patterns.""",
    tools=[ASRBenchmark(), TTSComparator(), LatencyProfiler()]
)

class VoicePipeline:
    def __init__(self):
        # Azure Speech for ASR (streaming)
        self.speech_config = speechsdk.SpeechConfig(
            subscription="key", region="westus2"
        )
        self.speech_config.speech_recognition_language = "en-US"
        
        # Google TTS for natural voices
        self.tts_client = texttospeech.TextToSpeechClient()
        self.voice = texttospeech.VoiceSelectionParams(
            language_code="en-US",
            name="en-US-Neural2-J"  # Natural male voice
        )
        
    async def process_audio(self, audio_stream) -> bytes:
        """Full pipeline: audio in → audio out."""
        import time
        start = time.time()
        
        # Stage 1: ASR (streaming)
        transcript = await self.streaming_asr(audio_stream)
        asr_time = time.time() - start
        
        # Stage 2: NLU
        intent, entities = self.nlu.parse(transcript)
        nlu_time = time.time() - start - asr_time
        
        # Stage 3: Dialog
        response_text = self.dialog.get_response(intent, entities)
        dialog_time = time.time() - start - asr_time - nlu_time
        
        # Stage 4: TTS (streaming)
        audio_out = await self.streaming_tts(response_text)
        tts_time = time.time() - start - asr_time - nlu_time - dialog_time
        
        total = time.time() - start
        print(f"Latency: ASR={asr_time:.0f}ms NLU={nlu_time:.0f}ms "
              f"Dialog={dialog_time:.0f}ms TTS={tts_time:.0f}ms "
              f"Total={total:.0f}ms")
        
        return audio_out
    
    async def streaming_asr(self, audio_stream) -> str:
        """Stream audio chunks, get partial + final results."""
        recognizer = speechsdk.SpeechRecognizer(
            speech_config=self.speech_config,
            audio_config=speechsdk.AudioConfig(stream=audio_stream)
        )
        
        result = recognizer.recognize_once_async().get()
        return result.text
    
    async def streaming_tts(self, text: str) -> bytes:
        """Stream TTS audio as it's generated."""
        synthesis_input = texttospeech.SynthesisInput(text=text)
        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.LINEAR16,
            sample_rate_hertz=24000
        )
        
        response = self.tts_client.synthesize_speech(
            input=synthesis_input,
            voice=self.voice,
            audio_config=audio_config
        )
        return response.audio_content

# Latency optimization task
task = Task(
    description="Optimize voice pipeline to achieve <400ms latency",
    agent=voice_agent,
    expected_output="Pipeline config with streaming ASR/TTS"
)

crew = Crew(agents=[voice_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.5', title: 'Platforms', description: 'Alexa, Google, Siri SDKs', slug: 'platforms' },
      { number: 'Page 6.7', title: 'Multi-Channel', description: 'Voice + text unified experience', slug: 'multichannel' },
      { number: 'Page 6.1', title: 'NLU & Intent', description: 'Understanding spoken language', slug: 'nlu-intent' },
    ],
    prevPage: { title: '6.5 Chatbot Platforms', slug: 'platforms' },
    nextPage: { title: '6.7 Multi-Channel Deployment', slug: 'multichannel' },
  },
  {
    slug: 'multichannel',
    badge: '📱 Page 6.7 • Omnichannel Experience',
    title: 'Multi-Channel Deployment',
    description: 'Deploy your chatbot across web, mobile, messaging platforms, and voice assistants with a unified architecture that maintains consistent experiences.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: '8+', label: 'Channel Types' },
      { value: '1', label: 'Core Bot Logic' },
      { value: 'API', label: 'Adapter Pattern' },
      { value: '24/7', label: 'Availability' },
    ],
    overview: {
      title: 'Understanding Multi-Channel',
      subtitle: 'One bot, many touchpoints',
      subsections: [
        {
          heading: 'The Omnichannel Imperative',
          paragraphs: [
            'Modern users expect to interact with your brand wherever they are—on your website, in WhatsApp, through Alexa, or in Slack. Building separate bots for each channel is expensive, inconsistent, and unmaintainable. The solution is a unified multi-channel architecture: one core bot with channel-specific adapters that translate messages to and from each platform\'s format.',
            'The key insight is separating conversation logic from channel mechanics. Your NLU, dialog management, and business logic remain constant. Only the input/output transformation varies: WhatsApp sends webhook payloads, Slack uses Block Kit for rich messages, voice requires ASR/TTS integration. A well-designed adapter layer handles these differences cleanly.',
            'Multi-channel also enables seamless handoffs. A customer starts on web chat during the day, continues the conversation in WhatsApp on their commute, and picks up on a smart speaker at home. With shared session storage and user memory, the bot maintains context across all touchpoints—no repetition required.',
            'Each channel has unique constraints and capabilities. SMS limits message length. Voice can\'t show buttons. Messenger supports carousels. Designing for multi-channel means creating adaptive responses that gracefully degrade or enhance based on channel capabilities, while maintaining a consistent brand voice throughout.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Multi-channel architecture terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔌',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📦',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🎯',
          title: '',
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
        { icon: '📌', title: 'Understanding Multi-Channel', subtitle: '', description: 'One bot, many touchpoints', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Multi-channel architecture terminology', tags: [] },
        { icon: '📌', title: 'Channel Hub Architecture', subtitle: '', description: 'Centralized bot, distributed channels', tags: [] },
        { icon: '📌', title: 'Channel Capabilities', subtitle: '', description: 'What each channel supports', tags: [] },
        { icon: '📌', title: 'Message Transformation', subtitle: '', description: 'Watch data flow through the adapter pipeline', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Multi-channel guidelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered multi-channel orchestration', tags: [] },
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
      subtitle: 'Multi-channel guidelines',
      doItems: [
        'Design for the lowest common denominator, enhance for rich channels',
        'Use a unified message schema internally—adapt only at edges',
        'Share session state across channels via user identity linking',
        'Implement graceful degradation: carousel → list → numbered text',
        'Queue webhook responses and ACK immediately to avoid timeouts',
        'Log channel-specific errors separately for debugging',
      ],
      dontItems: [
        'Building separate bots for each channel—leads to inconsistency',
        'Hard-coding channel logic in your dialog manager',
        'Ignoring character limits (SMS 160, WhatsApp 4096)',
        'Sending rich messages to channels that don\'t support them',
        'Forcing users to re-authenticate on each channel switch',
        'Neglecting channel-specific policies (WhatsApp 24h window)',
      ],
    },
    agent: {
      avatar: '📱',
      name: 'ChannelOrchestratorAgent',
      role: 'Multi-Channel Specialist',
      description: 'Expert in deploying chatbots across web, mobile, messaging platforms, and voice assistants with unified architecture.',
      capabilities: [
        'Design adapter architectures',
        'Implement webhook handlers',
        'Build rich message mappers',
        'Configure channel integrations',
        'Link user identities cross-channel',
        'Optimize for channel constraints',
      ],
      codeFilename: 'channel_adapter.py',
      code: `from crewai import Agent, Task, Crew
from abc import ABC, abstractmethod
from dataclasses import dataclass

orchestrator_agent = Agent(
    role="Multi-Channel Orchestrator",
    goal="Deploy unified chatbot across all channels",
    backstory="""Expert in omnichannel architecture with deep
    knowledge of WhatsApp Business API, Slack Block Kit, 
    Messenger webhooks, and voice integrations.""",
    tools=[WebhookManager(), MessageFormatter(), ChannelRouter()]
)

@dataclass
class UnifiedMessage:
    """Channel-agnostic message format."""
    user_id: str
    channel: str
    text: str
    intent: str = None
    entities: dict = None
    attachments: list = None
    quick_replies: list = None

class ChannelAdapter(ABC):
    """Base class for channel adapters."""
    
    @abstractmethod
    def parse_inbound(self, payload: dict) -> UnifiedMessage:
        """Convert channel payload to unified format."""
        pass
    
    @abstractmethod
    def format_outbound(self, message: UnifiedMessage) -> dict:
        """Convert unified message to channel format."""
        pass

class WhatsAppAdapter(ChannelAdapter):
    def parse_inbound(self, payload: dict) -> UnifiedMessage:
        msg = payload["entry"][0]["changes"][0]["value"]["messages"][0]
        return UnifiedMessage(
            user_id=msg["from"],
            channel="whatsapp",
            text=msg.get("text", {}).get("body", ""),
            attachments=self._parse_media(msg)
        )
    
    def format_outbound(self, message: UnifiedMessage) -> dict:
        response = {"messaging_product": "whatsapp", "to": message.user_id}
        
        if message.quick_replies:
            # WhatsApp interactive buttons
            response["type"] = "interactive"
            response["interactive"] = {
                "type": "button",
                "body": {"text": message.text},
                "action": {"buttons": [
                    {"type": "reply", "reply": {"id": r, "title": r}}
                    for r in message.quick_replies[:3]  # Max 3 buttons
                ]}
            }
        else:
            response["type"] = "text"
            response["text"] = {"body": message.text}
        
        return response

class SlackAdapter(ChannelAdapter):
    def format_outbound(self, message: UnifiedMessage) -> dict:
        blocks = [{"type": "section", "text": {"type": "mrkdwn", "text": message.text}}]
        
        if message.quick_replies:
            blocks.append({
                "type": "actions",
                "elements": [
                    {"type": "button", "text": {"type": "plain_text", "text": r}, "action_id": r}
                    for r in message.quick_replies
                ]
            })
        
        return {"channel": message.user_id, "blocks": blocks}

class MultiChannelBot:
    def __init__(self):
        self.adapters = {
            "whatsapp": WhatsAppAdapter(),
            "slack": SlackAdapter(),
            # Add more adapters...
        }
    
    def handle_message(self, channel: str, payload: dict) -> dict:
        # Parse inbound
        adapter = self.adapters[channel]
        message = adapter.parse_inbound(payload)
        
        # Process through core bot (channel-agnostic)
        response = self.core_bot.process(message)
        
        # Format outbound for channel
        return adapter.format_outbound(response)

# Task to add new channel
task = Task(
    description="Add Microsoft Teams adapter to multi-channel bot",
    agent=orchestrator_agent,
    expected_output="Teams adapter with Block Kit equivalent formatting"
)

crew = Crew(agents=[orchestrator_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.5', title: 'Platforms', description: 'Platform channel integrations', slug: 'platforms' },
      { number: 'Page 6.6', title: 'Voice Assistants', description: 'Voice as a channel', slug: 'voice-assistants' },
      { number: 'Page 6.10', title: 'Enterprise Integration', description: 'Backend system connections', slug: 'enterprise' },
    ],
    prevPage: { title: '6.6 Voice Assistants', slug: 'voice-assistants' },
    nextPage: { title: '6.8 Analytics & Metrics', slug: 'analytics' },
  },
  {
    slug: 'analytics',
    badge: '📊 Page 6.8 • Data-Driven Optimization',
    title: 'Analytics & Metrics',
    description: 'Measure what matters. Track conversation funnels, satisfaction scores, and NLU accuracy to continuously improve your chatbot\'s performance.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'CSAT', label: 'Satisfaction Score' },
      { value: 'CTR', label: 'Task Completion' },
      { value: 'NLU', label: 'Accuracy Rate' },
      { value: 'ROI', label: 'Cost Savings' },
    ],
    overview: {
      title: 'Understanding Chatbot Analytics',
      subtitle: 'From conversations to insights',
      subsections: [
        {
          heading: 'What Gets Measured Gets Improved',
          paragraphs: [
            'Chatbot analytics goes beyond simple message counts. Effective measurement tracks the entire user journey: from initial engagement through goal completion or escalation. The key is identifying leading indicators (NLU confidence, fallback rates) that predict lagging outcomes (CSAT scores, containment rates).',
            'Conversation funnels reveal where users succeed and where they drop off. A user who starts a booking flow but abandons at date selection signals a UX problem. Segmenting funnels by intent, channel, and user type exposes specific improvement opportunities. Cohort analysis shows whether changes actually improve outcomes over time.',
            'Quality metrics measure how well your bot understands and responds. Intent accuracy tracks correct classifications; entity extraction rate measures slot filling success; fallback rate indicates coverage gaps. These technical metrics directly impact user satisfaction—every misunderstood query is a frustrated customer.',
            'Business metrics tie chatbot performance to organizational goals. Containment rate measures issues resolved without human handoff. Cost per conversation quantifies efficiency gains. Revenue attribution tracks sales influenced by bot interactions. These metrics justify investment and guide resource allocation.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Essential analytics terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '✅',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '😊',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '🎯',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🚫',
          title: '',
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
        { icon: '📌', title: 'Understanding Chatbot Analytics', subtitle: '', description: 'From conversations to insights', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Essential analytics terminology', tags: [] },
        { icon: '📌', title: 'Conversation Funnel', subtitle: '', description: 'Track user journey and drop-off points', tags: [] },
        { icon: '📌', title: 'Live Metrics Dashboard', subtitle: '', description: 'Real-time performance indicators', tags: [] },
        { icon: '📌', title: 'KPI Framework', subtitle: '', description: 'Metrics organized by category', tags: [] },
        { icon: '📌', title: 'Analytics Tools', subtitle: '', description: 'Popular platforms for chatbot analytics', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Analytics guidelines', tags: [] },
        { icon: '📌', title: 'Industry Metrics Standards', subtitle: '', description: 'How leading platforms measure success', tags: [] },
      ],
    },
    tools: {
      title: 'Analytics Tools',
      subtitle: 'Popular platforms for chatbot analytics',
      items: [
        { icon: '🛠️', name: 'Dashbot', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Botanalytics', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Chatbase', vendor: '', description: '', tags: [] },
        { icon: '🛠️', name: 'Mixpanel', vendor: '', description: '', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Analytics guidelines',
      doItems: [
        'Define success metrics BEFORE launch—align with business goals',
        'Track leading indicators (NLU confidence) that predict outcomes',
        'Segment metrics by intent, channel, and user cohort',
        'Set up real-time alerts for anomalies (sudden fallback spike)',
        'Review conversation transcripts regularly—numbers miss nuance',
        'A/B test changes and measure impact on key metrics',
      ],
      dontItems: [
        'Optimizing for vanity metrics (total messages) over outcomes',
        'Ignoring qualitative feedback in favor of pure numbers',
        'Setting targets without baseline measurement first',
        'Measuring too many metrics—focus on 5-7 key indicators',
        'Forgetting to track user effort and frustration signals',
        'Treating all fallbacks equally—some are recoverable',
      ],
    },
    agent: {
      avatar: '📊',
      name: 'AnalyticsInsightAgent',
      role: 'Chatbot Analytics Specialist',
      description: 'Expert in measuring chatbot performance, identifying optimization opportunities, and translating metrics into actionable improvements.',
      capabilities: [
        'Design KPI frameworks and dashboards',
        'Analyze conversation funnels',
        'Identify drop-off root causes',
        'Generate automated insights reports',
        'Recommend A/B test hypotheses',
        'Calculate ROI and cost savings',
      ],
      codeFilename: 'analytics_agent.py',
      code: `from crewai import Agent, Task, Crew
from dataclasses import dataclass
from datetime import datetime, timedelta

analytics_agent = Agent(
    role="Chatbot Analytics Expert",
    goal="Extract actionable insights from conversation data",
    backstory="""Senior data analyst specializing in conversational AI.
    Expert at funnel analysis, cohort studies, and identifying
    optimization opportunities from chatbot metrics.""",
    tools=[MetricsDB(), FunnelAnalyzer(), InsightGenerator()]
)

@dataclass
class ConversationMetrics:
    conversation_id: str
    started_at: datetime
    ended_at: datetime
    channel: str
    intent: str
    nlu_confidence: float
    slots_filled: int
    slots_required: int
    task_completed: bool
    escalated: bool
    csat_score: int = None

class FunnelAnalysis:
    def __init__(self, conversations: list[ConversationMetrics]):
        self.conversations = conversations
    
    def calculate_funnel(self, intent: str) -> dict:
        """Calculate conversion at each funnel stage."""
        filtered = [c for c in self.conversations if c.intent == intent]
        
        stages = {
            "started": len(filtered),
            "intent_recognized": len([c for c in filtered 
                if c.nlu_confidence > 0.7]),
            "slots_filled": len([c for c in filtered 
                if c.slots_filled == c.slots_required]),
            "task_completed": len([c for c in filtered 
                if c.task_completed]),
        }
        
        # Calculate conversion rates
        rates = {}
        prev_count = stages["started"]
        for stage, count in stages.items():
            rates[stage] = {
                "count": count,
                "rate": count / stages["started"] * 100 if stages["started"] > 0 else 0,
                "dropoff": (prev_count - count) / prev_count * 100 if prev_count > 0 else 0
            }
            prev_count = count
        
        return rates
    
    def find_dropoff_reasons(self, stage: str) -> list[str]:
        """Analyze why users drop off at a specific stage."""
        # Analyze conversation transcripts at dropoff point
        dropoffs = [c for c in self.conversations 
            if not c.task_completed and c.nlu_confidence > 0.7]
        
        reasons = []
        for conv in dropoffs[:100]:  # Sample
            if conv.slots_filled < conv.slots_required:
                reasons.append(f"Incomplete slots: {conv.slots_filled}/{conv.slots_required}")
            if conv.escalated:
                reasons.append("User requested human agent")
        
        return reasons

def generate_weekly_report(conversations: list[ConversationMetrics]) -> str:
    """Generate automated weekly insights report."""
    funnel = FunnelAnalysis(conversations)
    
    report = {
        "period": "Last 7 days",
        "total_conversations": len(conversations),
        "containment_rate": len([c for c in conversations if not c.escalated]) / len(conversations) * 100,
        "avg_csat": sum(c.csat_score for c in conversations if c.csat_score) / len([c for c in conversations if c.csat_score]),
        "top_intents": {},  # Aggregate by intent
        "recommendations": []
    }
    
    # Generate recommendations based on metrics
    if report["containment_rate"] < 80:
        report["recommendations"].append(
            "Containment below 80% - review top escalation reasons"
        )
    
    return report

# Weekly analysis task
task = Task(
    description="Analyze last week's conversations and generate insights",
    agent=analytics_agent,
    expected_output="Weekly report with KPIs, funnel analysis, and recommendations"
)

crew = Crew(agents=[analytics_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.9', title: 'Testing & QA', description: 'Test what you measure', slug: 'testing' },
      { number: 'Page 6.1', title: 'NLU & Intent', description: 'Intent accuracy fundamentals', slug: 'nlu-intent' },
      { number: 'Page 6.2', title: 'Dialog Management', description: 'Funnel stage design', slug: 'dialog-management' },
    ],
    prevPage: { title: '6.7 Multi-Channel Deployment', slug: 'multichannel' },
    nextPage: { title: '6.9 Testing & QA', slug: 'testing' },
  },
  {
    slug: 'testing',
    badge: '🧪 Page 6.9 • Quality Assurance',
    title: 'Testing & QA',
    description: 'Ensure your chatbot performs reliably with comprehensive testing across NLU accuracy, conversation flows, and regression detection.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '95%', label: 'Intent Accuracy Target' },
      { value: 'CI/CD', label: 'Automated Testing' },
      { value: '<1%', label: 'Regression Tolerance' },
      { value: '100%', label: 'Critical Path Coverage' },
    ],
    overview: {
      title: 'Understanding Chatbot Testing',
      subtitle: 'Beyond traditional software QA',
      subsections: [
        {
          heading: 'The Testing Challenge',
          paragraphs: [
            'Chatbots present unique testing challenges. Unlike traditional software with deterministic inputs and outputs, conversational AI must handle infinite input variations for the same intent. "Book a flight," "I need to fly somewhere," and "can u help me get plane tickets" should all work. Testing must validate not just correctness, but naturalness and robustness.',
            'The testing pyramid still applies, but with conversational twists. Unit tests validate individual NLU components—does this regex extract dates correctly? Integration tests verify the dialog manager transitions between states properly. End-to-end tests simulate full conversations, checking that users can complete real tasks.',
            'Regression testing is critical for NLU systems. Model updates can inadvertently break previously working intents. A golden test set of known-good utterances catches these regressions before deployment. Track accuracy metrics over time to detect gradual drift that individual test failures might miss.',
            'Testing must cover both happy paths and edge cases. What happens when users provide unexpected input? When they change their mind mid-flow? When the backend API times out? Chaos testing and adversarial inputs reveal weaknesses that polite test cases miss. The goal is confidence that your bot handles the messy reality of human conversation.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Testing terminology for chatbots',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📊',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🎭',
          title: '',
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
        { icon: '📌', title: 'Understanding Chatbot Testing', subtitle: '', description: 'Beyond traditional software QA', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Testing terminology for chatbots', tags: [] },
        { icon: '📌', title: 'Chatbot Test Pyramid', subtitle: '', description: 'Click each level for details', tags: [] },
        { icon: '📌', title: 'Intent Test Coverage', subtitle: '', description: 'Track testing completeness by intent', tags: [] },
        { icon: '📌', title: 'Regression Tracking', subtitle: '', description: 'Monitor test stability over time', tags: [] },
        { icon: '📌', title: 'Test Case Structure', subtitle: '', description: 'Anatomy of a chatbot test', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Testing guidelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered test generation', tags: [] },
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
      subtitle: 'Testing guidelines',
      doItems: [
        'Maintain a golden test set that runs on every commit',
        'Test edge cases: typos, incomplete sentences, code-switching',
        'Include adversarial inputs to test safety guardrails',
        'Track NLU accuracy metrics over time—detect drift early',
        'Test on production-like data (anonymized real conversations)',
        'Automate visual regression for rich message templates',
      ],
      dontItems: [
        'Testing only happy paths—real users are unpredictable',
        'Hardcoding expected responses (they change frequently)',
        'Skipping integration tests between NLU and dialog manager',
        'Ignoring flaky tests—they indicate real instability',
        'Testing only in English if you support multiple languages',
        'Manual testing before every deploy—automate everything',
      ],
    },
    agent: {
      avatar: '🧪',
      name: 'QualityAssuranceAgent',
      role: 'Chatbot Testing Specialist',
      description: 'Expert in designing comprehensive test suites, generating test cases from conversation logs, and identifying coverage gaps.',
      capabilities: [
        'Generate test cases from production logs',
        'Identify intent confusion patterns',
        'Create adversarial test inputs',
        'Build regression test suites',
        'Analyze test coverage gaps',
        'Automate conversation replay tests',
      ],
      codeFilename: 'test_agent.py',
      code: `from crewai import Agent, Task, Crew
from dataclasses import dataclass
import pytest

qa_agent = Agent(
    role="Chatbot QA Engineer",
    goal="Ensure comprehensive test coverage and catch regressions",
    backstory="""Senior QA engineer specializing in conversational AI.
    Expert at generating test cases, identifying edge cases, and
    building robust CI/CD pipelines for chatbot deployments.""",
    tools=[TestGenerator(), CoverageAnalyzer(), RegressionDetector()]
)

@dataclass
class TestCase:
    utterance: str
    expected_intent: str
    expected_entities: dict
    min_confidence: float = 0.85
    tags: list = None

class ChatbotTestSuite:
    def __init__(self, nlu_client, dialog_client):
        self.nlu = nlu_client
        self.dialog = dialog_client
        self.golden_tests: list[TestCase] = []
    
    def load_golden_tests(self, filepath: str):
        """Load golden test set from YAML/JSON file."""
        # Load curated test cases
        pass
    
    def generate_tests_from_logs(self, logs: list[dict]) -> list[TestCase]:
        """Auto-generate test cases from production conversation logs."""
        tests = []
        for log in logs:
            if log.get("nlu_confidence", 0) > 0.95:  # High confidence = ground truth
                tests.append(TestCase(
                    utterance=log["user_message"],
                    expected_intent=log["detected_intent"],
                    expected_entities=log["extracted_entities"],
                    tags=["auto-generated", "production"]
                ))
        return tests
    
    def run_nlu_tests(self) -> dict:
        """Execute all NLU unit tests."""
        results = {"passed": 0, "failed": 0, "errors": []}
        
        for test in self.golden_tests:
            result = self.nlu.classify(test.utterance)
            
            if result.intent != test.expected_intent:
                results["failed"] += 1
                results["errors"].append({
                    "utterance": test.utterance,
                    "expected": test.expected_intent,
                    "actual": result.intent,
                    "confidence": result.confidence
                })
            elif result.confidence < test.min_confidence:
                results["failed"] += 1
                results["errors"].append({
                    "utterance": test.utterance,
                    "issue": "Low confidence",
                    "confidence": result.confidence
                })
            else:
                results["passed"] += 1
        
        return results
    
    def run_conversation_test(self, turns: list[dict]) -> bool:
        """Execute multi-turn conversation test."""
        session = self.dialog.create_session()
        
        for turn in turns:
            response = session.send(turn["user"])
            
            if turn.get("assert_intent"):
                assert response.intent == turn["assert_intent"]
            if turn.get("assert_contains"):
                assert turn["assert_contains"] in response.text
            if turn.get("assert_state"):
                assert session.current_state == turn["assert_state"]
        
        return True

# Pytest integration
@pytest.fixture
def test_suite():
    return ChatbotTestSuite(nlu_client, dialog_client)

def test_golden_set(test_suite):
    test_suite.load_golden_tests("tests/golden_tests.yaml")
    results = test_suite.run_nlu_tests()
    assert results["failed"] == 0, f"Failed tests: {results['errors']}"

# Task for generating new tests
task = Task(
    description="Analyze last week's low-confidence conversations and generate test cases",
    agent=qa_agent,
    expected_output="New test cases for intents with <90% accuracy"
)

crew = Crew(agents=[qa_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.8', title: 'Analytics & Metrics', description: 'Measure what you test', slug: 'analytics' },
      { number: 'Page 6.1', title: 'NLU & Intent', description: 'What to test first', slug: 'nlu-intent' },
      { number: 'Page 6.10', title: 'Enterprise Integration', description: 'Testing integrations', slug: 'enterprise' },
    ],
    prevPage: { title: '6.8 Analytics & Metrics', slug: 'analytics' },
    nextPage: { title: '6.10 Enterprise Integration', slug: 'enterprise' },
  },
  {
    slug: 'enterprise',
    badge: '🏢 Page 6.10 • Backend Connectivity',
    title: 'Enterprise Integration',
    description: 'Connect your chatbot to CRM, ticketing, knowledge bases, and authentication systems to deliver personalized, secure, and context-aware experiences.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: 'CRM', label: 'Customer Data' },
      { value: 'SSO', label: 'Authentication' },
      { value: 'API', label: 'Backend Systems' },
      { value: 'KB', label: 'Knowledge Base' },
    ],
    overview: {
      title: 'Understanding Enterprise Integration',
      subtitle: 'Connecting conversations to systems of record',
      subsections: [
        {
          heading: 'Beyond Standalone Chatbots',
          paragraphs: [
            'A chatbot that can\'t access your business systems is just a fancy FAQ. Real value comes from deep integration with your enterprise stack: pulling customer history from Salesforce, creating tickets in ServiceNow, authenticating users via Okta, searching documentation in Confluence. These integrations transform a chatbot from a novelty into a productivity multiplier.',
            'CRM integration enables personalization at scale. When a customer says "What\'s my order status?", the bot can look up their account, find recent orders, and provide specific tracking information—no agent handoff required. This requires secure API connections, proper authentication, and thoughtful data mapping between conversational context and CRM objects.',
            'Knowledge base integration powers accurate, up-to-date responses. Rather than hardcoding answers that quickly become stale, the bot searches your documentation in real-time. RAG (Retrieval-Augmented Generation) architectures combine semantic search with LLM generation to synthesize accurate answers from your own content.',
            'Security and compliance are non-negotiable in enterprise contexts. SSO ensures users are authenticated before accessing sensitive data. Audit logs track every data access. PII handling follows your data governance policies. The bot must be a trusted participant in your security architecture, not a backdoor around it.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Enterprise integration terminology',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🔗',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '🔐',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '📚',
          title: '',
          description: '',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '🔄',
          title: '',
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
        { icon: '📌', title: 'Understanding Enterprise Integration', subtitle: '', description: 'Connecting conversations to systems of record', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Enterprise integration terminology', tags: [] },
        { icon: '📌', title: 'Integration Architecture', subtitle: '', description: 'Click each system for details', tags: [] },
        { icon: '📌', title: 'SSO Authentication Flow', subtitle: '', description: 'Secure user verification', tags: [] },
        { icon: '📌', title: 'Data Flow Patterns', subtitle: '', description: 'How data moves between systems', tags: [] },
        { icon: '📌', title: 'Security & Compliance', subtitle: '', description: 'Enterprise-grade protection', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Enterprise integration guidelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered integration orchestration', tags: [] },
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
      subtitle: 'Enterprise integration guidelines',
      doItems: [
        'Use OAuth 2.0 with short-lived tokens and automatic refresh',
        'Implement circuit breakers for external API calls',
        'Cache frequently accessed data with appropriate TTLs',
        'Log all data access with correlation IDs for tracing',
        'Design for graceful degradation when integrations fail',
        'Encrypt PII and mask sensitive data in logs',
      ],
      dontItems: [
        'Storing credentials in code or environment variables',
        'Making synchronous calls to slow external APIs',
        'Exposing internal error messages to users',
        'Skipping retry logic for transient failures',
        'Granting broad permissions when specific ones suffice',
        'Logging full PII without masking or encryption',
      ],
    },
    agent: {
      avatar: '🏢',
      name: 'EnterpriseIntegrationAgent',
      role: 'Backend Connectivity Specialist',
      description: 'Expert in connecting chatbots to enterprise systems including CRM, ticketing, knowledge bases, and authentication providers.',
      capabilities: [
        'Design integration architectures',
        'Implement OAuth/SSO flows',
        'Build webhook handlers',
        'Configure RAG pipelines',
        'Set up audit logging',
        'Optimize API performance',
      ],
      codeFilename: 'enterprise_integration.py',
      code: `from crewai import Agent, Task, Crew
from dataclasses import dataclass
import httpx
from functools import lru_cache

integration_agent = Agent(
    role="Enterprise Integration Architect",
    goal="Connect chatbot to enterprise systems securely",
    backstory="""Senior integration engineer with expertise in
    CRM, ticketing, SSO, and knowledge base integrations.
    Specializes in secure, scalable API architectures.""",
    tools=[APIConnector(), OAuthManager(), CacheManager()]
)

@dataclass
class IntegrationConfig:
    name: str
    base_url: str
    auth_type: str  # oauth2, api_key, basic
    timeout: int = 30
    retry_count: int = 3
    cache_ttl: int = 300

class EnterpriseConnector:
    """Base class for enterprise system integrations."""
    
    def __init__(self, config: IntegrationConfig, token_manager):
        self.config = config
        self.token_manager = token_manager
        self.client = httpx.AsyncClient(timeout=config.timeout)
    
    async def _get_headers(self, user_id: str) -> dict:
        """Get auth headers with user's access token."""
        token = await self.token_manager.get_token(user_id)
        return {"Authorization": f"Bearer {token}"}
    
    async def _request(self, method: str, path: str, user_id: str, **kwargs):
        """Make authenticated request with retry logic."""
        headers = await self._get_headers(user_id)
        url = f"{self.config.base_url}{path}"
        
        for attempt in range(self.config.retry_count):
            try:
                response = await self.client.request(
                    method, url, headers=headers, **kwargs
                )
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                if e.response.status_code == 401:
                    # Token expired, refresh and retry
                    await self.token_manager.refresh_token(user_id)
                    headers = await self._get_headers(user_id)
                elif attempt == self.config.retry_count - 1:
                    raise
        
        return None

class SalesforceConnector(EnterpriseConnector):
    """Salesforce CRM integration."""
    
    async def get_contact(self, user_id: str, email: str) -> dict:
        """Look up contact by email."""
        query = f"SELECT Id, Name, Account.Name FROM Contact WHERE Email = '{email}'"
        return await self._request("GET", f"/query?q={query}", user_id)
    
    async def create_case(self, user_id: str, case_data: dict) -> dict:
        """Create a new support case."""
        return await self._request("POST", "/sobjects/Case", user_id, json=case_data)
    
    async def log_conversation(self, user_id: str, contact_id: str, transcript: str):
        """Log conversation to contact timeline."""
        activity = {
            "WhoId": contact_id,
            "Subject": "Chatbot Conversation",
            "Description": transcript,
            "Status": "Completed"
        }
        return await self._request("POST", "/sobjects/Task", user_id, json=activity)

class KnowledgeBaseConnector:
    """RAG-enabled knowledge base search."""
    
    def __init__(self, vector_db, llm_client):
        self.vector_db = vector_db
        self.llm = llm_client
    
    async def search_and_answer(self, query: str, top_k: int = 5) -> dict:
        """RAG pipeline: retrieve relevant docs, generate answer."""
        # 1. Embed query
        query_embedding = await self.llm.embed(query)
        
        # 2. Vector search
        docs = await self.vector_db.search(query_embedding, top_k=top_k)
        
        # 3. Build context
        context = "\\n\\n".join([d["content"] for d in docs])
        
        # 4. Generate answer
        prompt = f"Based on the following documentation:\\n{context}\\n\\nAnswer: {query}"
        answer = await self.llm.generate(prompt)
        
        return {
            "answer": answer,
            "sources": [{"title": d["title"], "url": d["url"]} for d in docs]
        }

# Webhook handler for chatbot fulfillment
async def handle_webhook(intent: str, params: dict, user_id: str):
    """Route intents to appropriate integrations."""
    
    if intent == "check_order_status":
        connector = SalesforceConnector(sf_config, token_manager)
        return await connector.get_contact(user_id, params["email"])
    
    elif intent == "search_docs":
        kb = KnowledgeBaseConnector(vector_db, llm_client)
        return await kb.search_and_answer(params["query"])
    
    elif intent == "create_ticket":
        connector = ServiceNowConnector(sn_config, token_manager)
        return await connector.create_incident(user_id, params)

# Task for integration setup
task = Task(
    description="Set up Salesforce integration with OAuth and case creation",
    agent=integration_agent,
    expected_output="Working Salesforce connector with SSO"
)

crew = Crew(agents=[integration_agent], tasks=[task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 6.7', title: 'Multi-Channel', description: 'Channel integrations', slug: 'multichannel' },
      { number: 'Page 6.4', title: 'Context & Memory', description: 'Session management', slug: 'context-memory' },
      { number: 'Page 6.8', title: 'Analytics', description: 'Data warehouse integration', slug: 'analytics' },
    ],
    prevPage: { title: '6.9 Testing & QA', slug: 'testing' },
    nextPage: undefined,
  },
]

registerPages('chatbots-agents', pages)
export default pages
