import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'market-analysis',
    badge: '🗺️ Page 22.1',
    title: 'Market Analysis & Landscape',
    description: 'Build comprehensive market understanding through systematic analysis of competitive dynamics, market positioning, and strategic opportunities. Transform scattered intelligence into actionable insights that drive winning strategies.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '360°', label: 'Market View' },
      { value: '4', label: 'Quadrants' },
      { value: 'Weekly', label: 'Refresh Cycle' },
      { value: '+35%', label: 'Strategy Clarity' },
    ],
    overview: {
      title: 'Market Landscape Quadrant',
      subtitle: 'Position competitors by execution capability and vision completeness',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The market landscape quadrant is a visual framework for positioning competitors based on two key dimensions: their ability to execute (operational excellence, market presence, financial strength, sales effectiveness) and their completeness of vision (product roadmap, innovation pipeline, market understanding, strategic direction). This creates four distinct quadrants that inform competitive strategy and resource allocation.',
            'Unlike static industry reports that are outdated upon publication, effective market landscapes require continuous updates as competitors evolve, new entrants emerge, and market dynamics shift. The best CI teams refresh their quadrant analysis quarterly at minimum, with real-time tracking of significant moves like funding rounds, major customer wins, leadership changes, and product launches.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Analysis Frameworks',
      subtitle: 'Structured approaches to market sizing and competitive assessment',
      columns: 2,
      cards: [
        {
          className: 'framework-0',
          borderColor: '#3B82F6',
          icon: '📈',
          title: 'TAM/SAM/SOM Analysis',
          description: 'Structure market opportunity from total addressable down to obtainable. Essential for understanding market potential, setting realistic targets, and communicating opportunity to stakeholders and investors.',
          examples: ['1 TAM - Total Addressable Market: Everyone who could buy', '2 SAM - Serviceable Addressable: Markets you can reach', '3 SOM - Serviceable Obtainable: Realistic capture', '4 Calculate current market share vs. SOM percentage'],
        },
        {
          className: 'framework-1',
          borderColor: '#10B981',
          icon: '⚔️',
          title: 'Porter\'s Five Forces',
          description: 'Analyze industry structure to understand competitive intensity and profitability potential. Classic framework that remains highly relevant for understanding the forces that shape competitive dynamics.',
          examples: ['1 Rivalry - Competitive intensity among existing players', '2 New Entrants - Barriers to entry and threat level', '3 Substitutes - Alternative solutions and switching costs', '4 Buyer Power - Customer concentration and leverage', '5 Supplier Power - Dependency on key suppliers'],
        },
        {
          className: 'framework-2',
          borderColor: '#8B5CF6',
          icon: '📉',
          title: 'Share of Voice',
          description: 'Measure competitive visibility across channels to understand mindshare and marketing effectiveness. Share of voice often correlates with share of market over time.',
          examples: ['1 Search - Organic rankings for key terms', '2 Paid - Ad spend estimates and presence', '3 Social - Engagement and follower metrics', '4 Earned - Analyst and media mentions'],
        },
        {
          className: 'framework-3',
          borderColor: '#F59E0B',
          icon: '💰',
          title: 'Revenue Attribution',
          description: 'Estimate competitor revenue and growth when public data isn\'t available. Multiple methods enable triangulation for private companies.',
          examples: ['1 Public filings - SEC, international equivalents', '2 Headcount method - Employees × revenue/employee', '3 Customer method - Customer count × est. ACV', '4 Valuation method - Funding × revenue multiples'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Market Landscape Quadrant', subtitle: '', description: 'Position competitors by execution capability and vision completeness', tags: [] },
        { icon: '📌', title: 'Competitor Classification', subtitle: '', description: 'Categorize competitors by relationship to your market position', tags: [] },
        { icon: '📌', title: 'Competitive Signal Sources', subtitle: '', description: 'Where to find actionable competitive intelligence', tags: [] },
        { icon: '📌', title: 'Analysis Frameworks', subtitle: '', description: 'Structured approaches to market sizing and competitive assessment', tags: [] },
        { icon: '📌', title: 'Monitoring Cadence', subtitle: '', description: 'Systematic schedule for competitive tracking', tags: [] },
        { icon: '📌', title: 'Competitive Comparison', subtitle: '', description: 'Systematic evaluation across key dimensions', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'ROI assessment for market analysis capabilities', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Advantages and challenges of systematic market analysis', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'TAM/SAM/SOM Analysis', vendor: '', description: 'Structure market opportunity from total addressable down to obtainable. Essential for understanding market potential, setting realistic targets, and communicating opportunity to stakeholders and investors.', tags: [] },
        { icon: '🛠️', name: 'Porter\'s Five Forces', vendor: '', description: 'Analyze industry structure to understand competitive intensity and profitability potential. Classic framework that remains highly relevant for understanding the forces that shape competitive dynamics.', tags: [] },
        { icon: '🛠️', name: 'Share of Voice', vendor: '', description: 'Measure competitive visibility across channels to understand mindshare and marketing effectiveness. Share of voice often correlates with share of market over time.', tags: [] },
        { icon: '🛠️', name: 'Revenue Attribution', vendor: '', description: 'Estimate competitor revenue and growth when public data isn\'t available. Multiple methods enable triangulation for private companies.', tags: [] },
        { icon: '🛠️', name: 'SWOT Analysis', vendor: '', description: 'Map competitor strengths, weaknesses, opportunities, and threats. Simple but effective for synthesizing diverse intelligence into actionable insights.', tags: [] },
        { icon: '🛠️', name: 'Value Chain Analysis', vendor: '', description: 'Map competitor capabilities across the value chain to identify differentiation opportunities and strategic gaps. Reveals where competitors invest and where they\'re thin.', tags: [] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective market analysis',
      doItems: [
        'Update Regularly — Markets change constantly. Set quarterly review cycles with continuous signal monitoring for significant competitive moves. Stale analysis is worse than no analysis.',
        'Triangulate Sources — Don\'t rely on single data sources. Combine analyst reports, customer feedback, public filings, and direct observation. Multiple sources increase confidence.',
        'Challenge Assumptions — Confirmation bias is real. Include diverse perspectives and actively seek contradictory evidence. Red team your own analysis before distributing.',
        'Focus on Action — Analysis without action is wasted effort. Every insight should connect to a decision or recommended action. "So what?" is the key question.',
        'Know Your Blind Spots — Acknowledge what you don\'t know. Private company data, future plans, and internal dynamics remain uncertain. State confidence levels explicitly.',
        'Track Movements — Direction matters more than position. A competitor moving up quickly is more threatening than one already at top. Monitor velocity, not just location.',
        'Distribute Widely — Intelligence locked in reports has no value. Push insights to people who can act on them through channels they already use—Slack, CRM, sales meetings.',
        'Measure Impact — Track whether CI influenced decisions and outcomes. Win rate changes, positioning shifts adopted, opportunities identified. Prove value to maintain investment.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🎯',
      name: 'MarketLandscape',
      role: 'Market Intelligence Analyst',
      description: 'Continuously monitors competitive landscape, scores competitor positions on execution and vision dimensions, detects significant movements, and generates strategic positioning recommendations. Integrates with multiple data sources for comprehensive market intelligence.',
      capabilities: [
        'Multi-source signal collection',
        'Competitor position scoring',
        'Quadrant movement detection',
        'Market sizing estimation',
        'Porter\'s Five Forces analysis',
        'Trend identification',
        'Strategic recommendations',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        market_landscape_agent.py',
      code: `# Market Landscape Intelligence Agent
from crewai import Agent, Task, Crew, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Signal collector tool - gathers from multiple sources
signal_collector = Tool(
    name="signal_collector",
    description="""Gathers competitive signals from
    news APIs, job postings, product updates,
    social media, and financial events for
    specified competitors. Returns structured
    signal data with source and confidence.""",
    func=collect_competitive_signals
)

# Position scorer - evaluates execution and vision
position_scorer = Tool(
    name="position_scorer",
    description="""Analyzes collected signals to score
    competitors on two dimensions:
    - Ability to Execute (1-10)
    - Completeness of Vision (1-10)
    Uses weighted factors including financial
    strength, market presence, innovation rate.""",
    func=score_competitive_position
)

# Movement detector - identifies quadrant changes
movement_detector = Tool(
    name="movement_detector",
    description="""Compares current vs historical
    positions to identify significant quadrant
    movements. Detects: funding rounds, major
    hires, product launches, customer wins.
    Returns movement vectors with drivers.""",
    func=detect_position_movements
)

# Market size estimator - calculates TAM/SAM/SOM
market_sizer = Tool(
    name="market_sizer",
    description="""Calculates market size using multiple
    methods: top-down from analyst reports,
    bottom-up from customer counts, and
    triangulation from competitor revenues.
    Returns TAM/SAM/SOM with confidence.""",
    func=estimate_market_size
)

# Strategy recommender - generates actions
strategy_recommender = Tool(
    name="strategy_recommender",
    description="""Based on landscape analysis, generates
    strategic recommendations for positioning,
    competitive response, and opportunity
    capture. Prioritizes by impact/effort.""",
    func=recommend_strategy
)

market_landscape_agent = Agent(
    role="Market Intelligence Analyst",
    goal="""Continuously monitor competitive
    landscape, detect significant movements,
    and generate actionable strategic
    positioning recommendations""",
    backstory="""Former strategy consultant with
    deep experience in competitive analysis
    for enterprise software markets. Expert
    at synthesizing disparate signals into
    actionable market insights. Known for
    catching competitive moves early.""",
    llm=llm,
    tools=[signal_collector, position_scorer,
           movement_detector, market_sizer,
           strategy_recommender],
    verbose=True
)

# Define analysis task
landscape_analysis = Task(
    description="""Perform comprehensive landscape
    analysis for our market:
    1. Collect signals for top 10 competitors
    2. Score execution and vision for each
    3. Place on quadrant matrix with movement
    4. Identify significant changes vs last
    5. Estimate market size and share
    6. Generate strategic recommendations""",
    agent=market_landscape_agent,
    expected_output="""Landscape report with:
    - Updated quadrant visualization
    - Movement alerts with drivers
    - Market size estimates
    - Top 3 strategic recommendations"""
)

# Run weekly analysis
crew = Crew(
    agents=[market_landscape_agent],
    tasks=[landscape_analysis]
)

result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '22.2', title: 'Battle Cards', description: 'Competitor profiles and sales enablement cards', slug: 'competitor-profiling' },
      { number: '22.3', title: 'Win/Loss Analysis', description: 'Systematic analysis of competitive deal outcomes', slug: 'win-loss-analysis' },
      { number: '22.4', title: 'Pricing Intel', description: 'Competitive pricing analysis and positioning', slug: 'pricing-intel' },
    ],
    prevPage: undefined,
    nextPage: { title: '22.2 Battle Cards & Competitor Profiles', slug: 'battle-cards' },
  },
  {
    slug: 'battle-cards',
    badge: '🃏 Page 22.2',
    title: 'Battle Cards & Competitor Profiles',
    description: 'Equip sales teams with actionable competitive intelligence through structured battle cards that highlight strengths, weaknesses, objection handlers, and winning strategies against each competitor.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '+23%', label: 'Win Rate Lift' },
      { value: '< 2min', label: 'Time to Insight' },
      { value: 'Weekly', label: 'Update Cadence' },
      { value: '85%', label: 'Sales Adoption' },
    ],
    overview: {
      title: 'Battle Card Anatomy',
      subtitle: 'Structure of an effective competitive battle card',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Battle cards are single-page competitive summaries designed for rapid consumption during sales conversations. Unlike comprehensive competitor profiles, battle cards distill intelligence into immediately actionable talking points, objection handlers, and competitive positioning guidance.',
            'The most effective battle cards follow a consistent structure that sales reps learn to navigate quickly. They answer the key questions: Why do we win? Why do we lose? What landmines should we plant? and How do we handle their objections?',
          ],
        },
      ],
    },
    concepts: {
      title: 'Anti-Patterns',
      subtitle: 'Common mistakes to avoid',
      columns: 2,
      cards: [
        {
          className: 'antipattern-0',
          borderColor: '#3B82F6',
          icon: '⚠️',
          title: 'FUD Over Facts',
          description: 'Resorting to fear, uncertainty, and doubt rather than factual competitive advantages. Damages credibility with buyers and your own sales team.',
          examples: [],
        },
        {
          className: 'antipattern-1',
          borderColor: '#10B981',
          icon: '⚠️',
          title: 'Stale Cards',
          description: 'Cards that haven\'t been updated in months actively harm sales. Outdated pricing, old product info, or resolved weaknesses undermine trust.',
          examples: [],
        },
        {
          className: 'antipattern-2',
          borderColor: '#8B5CF6',
          icon: '⚠️',
          title: 'Marketing Speak',
          description: 'Filling cards with buzzwords and positioning statements that don\'t translate to conversations. "Best-in-class" means nothing.',
          examples: [],
        },
        {
          className: 'antipattern-3',
          borderColor: '#F59E0B',
          icon: '⚠️',
          title: 'Feature Dumps',
          description: 'Listing every feature difference rather than focusing on what matters to buyers. Information overload prevents action.',
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
        { icon: '📌', title: 'Battle Card Anatomy', subtitle: '', description: 'Structure of an effective competitive battle card', tags: [] },
        { icon: '📌', title: 'Battle Card Types', subtitle: '', description: 'Different formats for different use cases', tags: [] },
        { icon: '📌', title: 'Profile Components', subtitle: '', description: 'Building blocks of effective competitor profiles', tags: [] },
        { icon: '📌', title: 'Distribution Channels', subtitle: '', description: 'Getting battle cards into the hands that need them', tags: [] },
        { icon: '📌', title: 'Update Triggers', subtitle: '', description: 'When to refresh competitive intelligence', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Competitive comparison across key dimensions', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Benefits and challenges of battle card programs', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective battle cards', tags: [] },
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
      subtitle: 'Guidelines for effective battle cards',
      doItems: [
        'Keep Cards Scannable — Sales needs answers in seconds, not minutes. Use bullet points, bold key phrases, and clear section headers. One page for quick reference.',
        'Be Honest About Weaknesses — Acknowledge where competitors are genuinely strong. Credibility with sales depends on accuracy. They\'ll discover the truth anyway.',
        'Test Objection Handlers — Involve top reps in developing and validating responses. What sounds good in marketing may not work in actual conversations.',
        'Assign Clear Ownership — Every card needs an owner responsible for accuracy. Distribute ownership across product marketing to scale.',
        'Date Everything — Visible "last updated" timestamps help users assess currency. Stale-dated cards get flagged for review.',
        'Integrate Into Workflow — Push cards to where reps work—CRM, Slack, email. Don\'t expect them to visit a separate system.',
        'Include Win Stories — Concrete examples of beating this competitor build confidence. "We won XYZ Corp from them because..." is powerful.',
        'Collect Feedback Loops — Make it easy for reps to report what\'s working, what\'s not, and what\'s missing. Cards should evolve based on field experience.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🃏',
      name: 'BattleCardBuilder',
      role: 'Competitive Enablement Specialist',
      description: 'Automates battle card creation and maintenance by synthesizing competitive intelligence from multiple sources. Monitors for update triggers, generates draft content, and personalizes cards for specific deal contexts.',
      capabilities: [
        'Multi-source intelligence synthesis',
        'Automated card generation',
        'Update trigger monitoring',
        'Staleness detection',
        'Deal-specific personalization',
        'Objection handler refinement',
        'Win story matching',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        battle_card_agent.py',
      code: `# Battle Card Builder Agent
from crewai import Agent, Task, Crew, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Intelligence synthesizer - gathers from all sources
intel_synthesizer = Tool(
    name="intel_synthesizer",
    description="""Collects and synthesizes competitive
    intelligence from news, reviews, product
    updates, job postings, and financial data.
    Returns structured competitor profile.""",
    func=synthesize_competitor_intel
)

# Strength/weakness analyzer
swot_analyzer = Tool(
    name="swot_analyzer",
    description="""Analyzes competitor data to identify
    key strengths and weaknesses. Compares
    against our capabilities to find true
    differentiators and vulnerabilities.""",
    func=analyze_swot
)

# Objection handler generator
objection_generator = Tool(
    name="objection_generator",
    description="""Generates objection handlers based on
    win/loss data, sales call transcripts,
    and competitor positioning. Tests against
    known buyer concerns.""",
    func=generate_objection_handlers
)

# Landmine designer
landmine_designer = Tool(
    name="landmine_designer",
    description="""Creates strategic questions to plant
    that expose competitor weaknesses without
    being overtly negative. Validated against
    field effectiveness data.""",
    func=design_landmines
)

# Win story matcher
win_story_matcher = Tool(
    name="win_story_matcher",
    description="""Finds relevant win stories against
    this competitor. Matches by industry,
    company size, use case, and competitive
    displacement scenario.""",
    func=match_win_stories
)

battle_card_agent = Agent(
    role="Competitive Enablement Specialist",
    goal="""Create and maintain accurate, actionable
    battle cards that improve sales win rates
    against key competitors""",
    backstory="""Former sales engineer turned product
    marketer with deep experience creating
    competitive content. Known for battle
    cards that sales actually uses and that
    measurably impact win rates.""",
    llm=llm,
    tools=[intel_synthesizer, swot_analyzer,
           objection_generator, landmine_designer,
           win_story_matcher],
    verbose=True
)

# Card creation task
create_card = Task(
    description="""Create battle card for {competitor}:
    1. Synthesize latest competitive intel
    2. Identify top strengths and weaknesses
    3. Generate 5 objection handlers
    4. Design 3 strategic landmines
    5. Match relevant win stories
    6. Format as scannable one-pager""",
    agent=battle_card_agent,
    expected_output="""Complete battle card with:
    - Company overview
    - Strengths/weaknesses grid
    - Landmines section
    - Objection handlers (Q&A format)
    - Win story references"""
)

crew = Crew(
    agents=[battle_card_agent],
    tasks=[create_card]
)

result = crew.kickoff(inputs={"competitor": "Acme Corp"})`,
    },
    relatedPages: [
      { number: '22.1', title: 'Market Analysis', description: 'Competitive landscape and positioning frameworks', slug: 'market-analysis' },
      { number: '22.3', title: 'Win/Loss Analysis', description: 'Systematic analysis of competitive deal outcomes', slug: 'win-loss-analysis' },
      { number: '22.4', title: 'Pricing Intel', description: 'Competitive pricing analysis and positioning', slug: 'pricing-intel' },
    ],
    prevPage: { title: '22.1 Market Analysis & Landscape', slug: 'market-analysis' },
    nextPage: { title: '22.3 Win/Loss Analysis', slug: 'win-loss-analysis' },
  },
  {
    slug: 'win-loss-analysis',
    badge: '📈 Page 22.3',
    title: 'Win/Loss Analysis',
    description: 'Systematic analysis of competitive deal outcomes to understand why you win, why you lose, and how to improve win rates against specific competitors.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '47%', label: 'Current Win Rate' },
      { value: '+12%', label: 'YoY Improvement' },
      { value: '156', label: 'Deals Analyzed' },
      { value: '72hrs', label: 'Avg Interview Time' },
    ],
    overview: {
      title: 'Competitive Deal Funnel',
      subtitle: 'Win/loss breakdown by sales stage',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Understanding where deals are won and lost is as important as understanding why. Competitive deals that fail early often indicate positioning problems; those lost late typically reveal product gaps or pricing issues. Track outcomes by stage to identify the highest-leverage improvement opportunities.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Anti-Patterns',
      subtitle: 'Common mistakes to avoid',
      columns: 2,
      cards: [
        {
          className: 'antipattern-0',
          borderColor: '#3B82F6',
          icon: '⚠️',
          title: 'Blame Game',
          description: 'Using win/loss data to assign blame rather than identify systemic improvements. Creates defensive culture and undermines honest feedback.',
          examples: [],
        },
        {
          className: 'antipattern-1',
          borderColor: '#10B981',
          icon: '⚠️',
          title: 'Cherry Picking',
          description: 'Only interviewing wins or selectively citing data that supports existing beliefs. Confirmation bias undermines program credibility.',
          examples: [],
        },
        {
          className: 'antipattern-2',
          borderColor: '#8B5CF6',
          icon: '⚠️',
          title: 'Surface Explanations',
          description: 'Accepting "price" or "features" without probing deeper. First-order explanations miss root causes and actionable insights.',
          examples: [],
        },
        {
          className: 'antipattern-3',
          borderColor: '#F59E0B',
          icon: '⚠️',
          title: 'Shelf Ware',
          description: 'Creating reports that no one reads or acts upon. Insights without action are wasted investment.',
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
        { icon: '📌', title: 'Competitive Deal Funnel', subtitle: '', description: 'Win/loss breakdown by sales stage', tags: [] },
        { icon: '📌', title: 'Win/Loss Reasons', subtitle: '', description: 'Primary factors in competitive outcomes', tags: [] },
        { icon: '📌', title: 'Interview Process', subtitle: '', description: 'Structured approach to gathering win/loss insights', tags: [] },
        { icon: '📌', title: 'Interview Question Categories', subtitle: '', description: 'Structured question framework for win/loss interviews', tags: [] },
        { icon: '📌', title: 'After Action Analysis', subtitle: '', description: 'Structured post-deal review methodology', tags: [] },
        { icon: '📌', title: 'Competitive Retrospectives', subtitle: '', description: 'Periodic review of competitive performance patterns', tags: [] },
        { icon: '📌', title: 'Win Rate by Competitor', subtitle: '', description: 'Performance breakdown by competitive matchup', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Win factors vs loss factors comparison', tags: [] },
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
      subtitle: 'Guidelines for effective win/loss programs',
      doItems: [
        'Interview Within 30 Days — Memory fades quickly. Target interviews within 2-4 weeks of decision for accurate recall of evaluation details.',
        'Use Third Parties — Buyers are more candid with neutral interviewers. Third-party interviews yield 40% more actionable insights.',
        'Balance Wins and Losses — Don\'t just study failures. Wins reveal what\'s working and what to protect. Aim for 60/40 loss/win ratio.',
        'Standardize Methodology — Use consistent questions and coding framework. Enables trend analysis and statistical significance over time.',
        'Involve Decision Makers — Interview the actual decision maker, not just your champion. Different perspectives reveal different truths.',
        'Close the Loop — Share insights back to sales reps on their deals. Creates buy-in and encourages participation in future interviews.',
        'Track Actions Taken — Log which insights drove product changes or sales process updates. Demonstrates ROI and maintains program support.',
        'Segment Analysis — Cut data by competitor, segment, deal size, and sales rep. Aggregate insights mask important variation.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '📈',
      name: 'WinLossAnalyzer',
      role: 'Deal Outcome Intelligence Specialist',
      description: 'Automates win/loss analysis by transcribing interviews, coding responses, identifying patterns across deals, and generating actionable recommendations for product and sales teams.',
      capabilities: [
        'Interview transcription and coding',
        'Theme extraction across interviews',
        'Statistical pattern detection',
        'Competitor-specific analysis',
        'Automated insight routing',
        'Trend analysis over time',
        'Interview guide generation',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        win_loss_agent.py',
      code: `# Win/Loss Analyzer Agent
from crewai import Agent, Task, Crew, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Interview transcriber and coder
transcript_analyzer = Tool(
    name="transcript_analyzer",
    description="""Transcribes interview recordings and
    codes responses against standard framework.
    Extracts key quotes, decision factors, and
    competitive mentions.""",
    func=analyze_transcript
)

# Pattern detector across interviews
pattern_detector = Tool(
    name="pattern_detector",
    description="""Analyzes coded interviews to identify
    statistically significant patterns. Segments
    by competitor, deal size, industry, and
    outcome to reveal actionable trends.""",
    func=detect_patterns
)

# Recommendation generator
recommendation_engine = Tool(
    name="recommendation_engine",
    description="""Generates prioritized recommendations
    from win/loss patterns. Routes to product,
    sales, or marketing based on insight type.
    Includes confidence scores and evidence.""",
    func=generate_recommendations
)

# Win rate calculator by segment
winrate_calculator = Tool(
    name="winrate_calculator",
    description="""Calculates win rates by competitor,
    segment, rep, and time period. Identifies
    statistically significant changes and
    forecasts trajectory.""",
    func=calculate_winrates
)

# Interview guide builder
guide_builder = Tool(
    name="guide_builder",
    description="""Creates customized interview guides
    based on deal context, competitor involved,
    and gaps in existing data. Prioritizes
    questions that fill knowledge gaps.""",
    func=build_interview_guide
)

win_loss_agent = Agent(
    role="Deal Outcome Intelligence Specialist",
    goal="""Transform win/loss interview data into
    actionable insights that improve competitive
    win rates and inform product strategy""",
    backstory="""Former sales ops leader with deep
    experience in competitive intelligence.
    Known for rigorous analysis that connects
    buyer feedback to measurable business
    outcomes.""",
    llm=llm,
    tools=[transcript_analyzer, pattern_detector,
           recommendation_engine, winrate_calculator,
           guide_builder],
    verbose=True
)

# Analysis task
analyze_interviews = Task(
    description="""Analyze Q4 win/loss interviews:
    1. Code all new interview transcripts
    2. Detect patterns across 50+ interviews
    3. Calculate win rates by competitor
    4. Generate product recommendations
    5. Create executive summary""",
    agent=win_loss_agent,
    expected_output="""Quarterly win/loss report with:
    - Win rate trends by competitor
    - Top 5 win factors, top 5 loss factors
    - Product recommendations with evidence
    - Sales coaching opportunities"""
)

crew = Crew(
    agents=[win_loss_agent],
    tasks=[analyze_interviews]
)

result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '22.2', title: 'Battle Cards', description: 'Competitive battle cards and profiles', slug: 'battle-cards' },
      { number: '22.4', title: 'Pricing Intel', description: 'Competitive pricing analysis and positioning', slug: 'pricing-intel' },
      { number: '22.5', title: 'CI Tools', description: 'Tools and platforms for competitive intelligence', slug: 'ci-tools' },
    ],
    prevPage: { title: '22.2 Battle Cards & Competitor Profiles', slug: 'battle-cards' },
    nextPage: { title: '22.4 Pricing Intelligence', slug: 'pricing-intel' },
  },
  {
    slug: 'pricing-intel',
    badge: '💰 Page 22.4',
    title: 'Pricing Intelligence',
    description: 'Monitor, analyze, and respond to competitive pricing strategies. Understand pricing models, discount patterns, and total cost positioning to win on value, not just price.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: '-15%', label: 'vs Market Average' },
      { value: '$42K', label: 'Avg Deal Size' },
      { value: '23%', label: 'Avg Discount Given' },
      { value: 'Weekly', label: 'Price Monitoring' },
    ],
    overview: {
      title: 'Competitive Price Comparison',
      subtitle: 'Side-by-side pricing analysis across tiers',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Price comparison requires apples-to-apples analysis. Different vendors package differently—some include support in base price, others charge separately. Some price per user, others per data volume. Normalize pricing to comparable units before drawing conclusions.',
            'Remember that list price rarely equals street price. Discounting patterns, negotiation leverage, and deal-specific factors can swing actual prices 20-40% from published rates. Always gather street price data from win/loss interviews and sales feedback to understand what buyers actually pay.',
            'Build comparison matrices for each major competitor and update quarterly. Include all pricing tiers (starter, professional, enterprise) and note which features are included at each level. Track packaging changes over time—competitors often restructure tiers to obscure direct comparisons or capture more value.',
            'When presenting to sales, highlight where you win and where you don\'t. Honest assessment builds trust. If a competitor is genuinely cheaper, equip sales with value arguments rather than pretending the gap doesn\'t exist.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Pricing Model Analysis',
      subtitle: 'How competitors structure their pricing',
      columns: 2,
      cards: [
        {
          className: 'model-0',
          borderColor: '#3B82F6',
          icon: '👤',
          title: '',
          description: 'Charges per named user or concurrent seat. Predictable for buyers, scales with adoption. Can penalize companies with many occasional users.',
          examples: ['Salesforce, HubSpot, Slack', 'Your Company (primary model)', 'Competitor A, Competitor C'],
        },
        {
          className: 'model-1',
          borderColor: '#10B981',
          icon: '📊',
          title: '',
          description: 'Charges based on consumption—API calls, data volume, compute time. Aligns cost with value. Can create unpredictable bills and budget anxiety.',
          examples: ['AWS, Snowflake, Twilio', 'Competitor B (primary model)', 'Emerging for AI products'],
        },
        {
          className: 'model-2',
          borderColor: '#8B5CF6',
          icon: '🎚️',
          title: '',
          description: 'Bundles features into tiers (Starter, Pro, Enterprise). Creates clear upgrade paths. Can frustrate buyers when needed feature is in higher tier.',
          examples: ['Zoom, Notion, Monday', 'Your Company (secondary)', 'Most PLG companies'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Pricing Intelligence',
          description: 'Monitor, analyze, and respond to competitive pricing strategies. Understand pricing models, discount patterns, and total cost positioning to win on value, not just price.',
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
        { icon: '📌', title: 'Competitive Price Comparison', subtitle: '', description: 'Side-by-side pricing analysis across tiers', tags: [] },
        { icon: '📌', title: 'Pricing Model Analysis', subtitle: '', description: 'How competitors structure their pricing', tags: [] },
        { icon: '📌', title: 'Discount Pattern Analysis', subtitle: '', description: 'How competitors negotiate and discount', tags: [] },
        { icon: '📌', title: 'Total Cost of Ownership', subtitle: '', description: 'Full cost comparison beyond license price', tags: [] },
        { icon: '📌', title: 'Pricing Intel Sources', subtitle: '', description: 'Where to gather competitive pricing data', tags: [] },
        { icon: '📌', title: 'Competitive Pricing Tactics', subtitle: '', description: 'Strategies for winning on value', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Pricing position vs market comparison', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Benefits and challenges of pricing intelligence', tags: [] },
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
      subtitle: 'Guidelines for effective pricing intelligence',
      doItems: [
        'Normalize Before Comparing — Convert all pricing to common units (per user/month, annual cost) before comparison. Account for different packaging approaches.',
        'Track Street Price, Not List — Published pricing is often fiction. Track actual deal prices from win/loss interviews and sales feedback.',
        'Include Full TCO — License is just the start. Include implementation, training, support, integrations, and internal admin costs.',
        'Triangulate Sources — No single source is reliable. Combine win/loss, partner intel, public data, and sales feedback for accuracy.',
        'Date Your Data — Pricing changes frequently. Always note when intel was gathered. Stale data can mislead.',
        'Equip Sales with Tools — Build TCO calculators and ROI models. Give sales the tools to shift conversations from price to value.',
        'Monitor Continuously — Set up alerts for competitor pricing page changes. Check periodically for packaging updates.',
        'Stay Ethical — Use legitimate sources. Don\'t misrepresent yourself to gather intel. Avoid anti-competitive information sharing.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '💰',
      name: 'PricingIntelAgent',
      role: 'Competitive Pricing Analyst',
      description: 'Automates pricing intelligence collection, analysis, and deal guidance. Monitors competitor pricing changes, synthesizes win/loss pricing data, and provides real-time competitive pricing recommendations.',
      capabilities: [
        'Pricing page change detection',
        'Win/loss pricing synthesis',
        'TCO model generation',
        'Discount pattern analysis',
        'Deal-specific pricing guidance',
        'Quarter-end discount prediction',
        'ROI calculator customization',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        pricing_intel_agent.py',
      code: `# Pricing Intelligence Agent
from crewai import Agent, Task, Crew, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Pricing page monitor
price_monitor = Tool(
    name="price_monitor",
    description="""Monitors competitor pricing pages for
    changes. Detects tier restructuring, price
    increases/decreases, packaging changes, and
    new promotional offers.""",
    func=monitor_pricing_pages
)

# Win/loss pricing extractor
winloss_extractor = Tool(
    name="winloss_extractor",
    description="""Extracts pricing data from win/loss
    interview transcripts. Identifies competitor
    quotes, discount levels, and pricing
    objections mentioned by buyers.""",
    func=extract_pricing_from_interviews
)

# TCO calculator builder
tco_builder = Tool(
    name="tco_builder",
    description="""Builds total cost of ownership models
    for competitive comparisons. Includes
    implementation, training, support, and
    ongoing administration costs.""",
    func=build_tco_model
)

# Discount pattern analyzer
discount_analyzer = Tool(
    name="discount_analyzer",
    description="""Analyzes discount patterns by
    competitor, deal size, quarter timing,
    and competitive pressure. Predicts
    likely discount ranges for scenarios.""",
    func=analyze_discount_patterns
)

# Deal pricing advisor
deal_advisor = Tool(
    name="deal_advisor",
    description="""Provides pricing guidance for specific
    deals. Recommends positioning, discount
    limits, and value messaging based on
    competitive context.""",
    func=advise_deal_pricing
)

pricing_agent = Agent(
    role="Competitive Pricing Analyst",
    goal="""Provide accurate, timely competitive
    pricing intelligence that enables sales
    to win deals on value while protecting
    margins""",
    backstory="""Former pricing strategist with deep
    experience in competitive markets. Known
    for data-driven pricing recommendations
    that balance win rates with profitability.
    Expert at shifting price conversations
    to value discussions.""",
    llm=llm,
    tools=[price_monitor, winloss_extractor,
           tco_builder, discount_analyzer,
           deal_advisor],
    verbose=True
)

# Pricing analysis task
analyze_pricing = Task(
    description="""Analyze competitive pricing for Q1:
    1. Check all competitor pricing pages
    2. Extract pricing from recent interviews
    3. Update TCO models with latest data
    4. Identify discount pattern changes
    5. Generate updated guidance document""",
    agent=pricing_agent,
    expected_output="""Quarterly pricing report with:
    - Competitor price change summary
    - Updated TCO comparisons
    - Discount pattern analysis
    - Deal guidance recommendations"""
)

crew = Crew(
    agents=[pricing_agent],
    tasks=[analyze_pricing]
)

result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '22.3', title: 'Win/Loss Analysis', description: 'Systematic analysis of competitive deal outcomes', slug: 'win-loss-analysis' },
      { number: '22.2', title: 'Battle Cards', description: 'Competitive battle cards and profiles', slug: 'battle-cards' },
      { number: '22.5', title: 'CI Tools', description: 'Tools and platforms for competitive intelligence', slug: 'ci-tools' },
    ],
    prevPage: { title: '22.3 Win/Loss Analysis', slug: 'win-loss-analysis' },
    nextPage: { title: '22.5 CI Tools & Platforms', slug: 'ci-tools' },
  },
  {
    slug: 'ci-tools',
    badge: '🛠️ Page 22.5',
    title: 'CI Tools & Platforms',
    description: 'Evaluate, select, and implement competitive intelligence tools that scale your CI capabilities. From monitoring to analysis to distribution, the right toolstack multiplies team effectiveness.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '4', label: 'Tools in Stack' },
      { value: '$48K', label: 'Annual Investment' },
      { value: '3.2x', label: 'Productivity Gain' },
      { value: '85%', label: 'Team Adoption' },
    ],
    overview: {
      title: 'CI Tool Landscape',
      subtitle: 'Overview of the competitive intelligence tooling ecosystem',
      subsections: [
        {
          heading: 'Overview',
          paragraphs: [
            'The CI tools market has matured significantly over the past five years. Specialized point solutions have given way to integrated platforms that handle multiple CI functions. Understanding the landscape helps you build a coherent stack rather than a collection of overlapping tools.',
            'Tools fall into four primary categories: monitoring (tracking competitor signals), analysis (synthesizing data into insights), enablement (distributing intel to stakeholders), and workflow (automating CI processes). Most organizations need capabilities in all four areas.',
            'The build-vs-buy decision is critical. Specialized CI platforms offer faster time-to-value and dedicated support. General-purpose tools (CRM, content management) can be adapted for CI but require significant configuration and maintenance. AI tools are increasingly blurring these lines by enabling custom CI workflows without traditional software.',
            'Consider your team size and maturity when selecting tools. A one-person CI function needs different tools than a 10-person team. Start with high-impact, low-complexity tools and expand as your program matures and proves value.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Tool Categories Deep Dive',
      subtitle: 'Understanding each category\'s role in CI operations',
      columns: 2,
      cards: [
        {
          className: 'category-0',
          borderColor: '#3B82F6',
          icon: '📡',
          title: '',
          description: 'Automated tracking of competitor websites, news, social media, job postings, and product changes. Reduces manual research time and catches signals you\'d otherwise miss.',
          examples: ['Website change detection', 'News & press monitoring', 'Social listening', 'Job posting analysis', 'Product update tracking'],
        },
        {
          className: 'category-1',
          borderColor: '#10B981',
          icon: '🔬',
          title: '',
          description: 'Tools for analyzing market data, web traffic, SEO positioning, and financial information. Enables quantitative competitive analysis beyond surface-level monitoring.',
          examples: ['Traffic & engagement data', 'SEO/SEM analysis', 'Financial intelligence', 'Market sizing', 'Trend analysis'],
        },
        {
          className: 'category-2',
          borderColor: '#8B5CF6',
          icon: '📢',
          title: '',
          description: 'Platforms for creating, organizing, and distributing battle cards, competitive decks, and deal support content. Makes CI actionable in sales conversations.',
          examples: ['Battle card management', 'Content organization', 'CRM integration', 'Usage analytics', 'Real-time updates'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'CI Tools & Platforms',
          description: 'Evaluate, select, and implement competitive intelligence tools that scale your CI capabilities. From monitoring to analysis to distribution, the right toolstack multiplies team effectiveness.',
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
        { icon: '📌', title: 'CI Tool Landscape', subtitle: '', description: 'Overview of the competitive intelligence tooling ecosystem', tags: [] },
        { icon: '📌', title: 'Tool Categories Deep Dive', subtitle: '', description: 'Understanding each category\'s role in CI operations', tags: [] },
        { icon: '📌', title: 'Tool Evaluation Matrix', subtitle: '', description: 'Comparative analysis of leading CI platforms', tags: [] },
        { icon: '📌', title: 'Integration Architecture', subtitle: '', description: 'How CI tools connect in a modern stack', tags: [] },
        { icon: '📌', title: 'Selection Criteria', subtitle: '', description: 'How to evaluate CI tools for your needs', tags: [] },
        { icon: '📌', title: 'Implementation Roadmap', subtitle: '', description: 'Phased approach to CI tool deployment', tags: [] },
        { icon: '📌', title: 'Value Analysis', subtitle: '', description: 'Impact of CI tooling on program effectiveness', tags: [] },
        { icon: '📌', title: 'Pros & Cons', subtitle: '', description: 'Benefits and challenges of CI tooling investment', tags: [] },
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
      subtitle: 'Guidelines for successful CI tool deployment',
      doItems: [
        'Start with Use Cases — Define specific CI workflows before selecting tools. Let requirements drive selection, not feature lists or vendor demos.',
        'Pilot Before Rollout — Test with a small group of enthusiastic early adopters. Iterate based on feedback before broad deployment.',
        'Invest in Training — Budget for comprehensive initial training and ongoing enablement. Undertrained users underutilize tools.',
        'Integrate Into Workflow — Embed CI tools into existing processes (CRM, Slack) rather than creating standalone destinations.',
        'Assign Ownership — Designate a tool owner responsible for configuration, content, and adoption. Orphan tools die.',
        'Measure Adoption — Track usage metrics and act on them. Low adoption signals need intervention, not acceptance.',
        'Maintain Content — Stale content kills credibility. Establish refresh cadences and stick to them religiously.',
        'Gather Feedback — Regularly solicit user feedback and act on it. Users who feel heard become advocates.',
      ],
      dontItems: [
      ],
    },
    agent: {
      avatar: '🛠️',
      name: 'CIStackOrchestrator',
      role: 'CI Tooling & Integration Specialist',
      description: 'Automates CI tool evaluation, integration, and optimization. Monitors data flows, identifies gaps, recommends improvements, and ensures your CI stack operates at peak effectiveness.',
      capabilities: [
        'Tool evaluation and comparison',
        'Integration architecture design',
        'Data flow monitoring',
        'Adoption analytics',
        'Configuration optimization',
        'Custom connector development',
        'Vendor management support',
      ],
      codeFilename: 'Python\n                            Config\n                        \n                        ci_stack_agent.py',
      code: `# CI Stack Orchestrator Agent
from crewai import Agent, Task, Crew, Tool
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-20250514")

# Tool evaluator
tool_evaluator = Tool(
    name="tool_evaluator",
    description="""Evaluates CI tools against specific
    requirements. Analyzes features, pricing,
    reviews, and integration capabilities.
    Generates comparison matrices.""",
    func=evaluate_tools
)

# Integration monitor
integration_monitor = Tool(
    name="integration_monitor",
    description="""Monitors data flows between CI tools.
    Detects failures, latency issues, and data
    quality problems. Alerts on anomalies and
    suggests remediation.""",
    func=monitor_integrations
)

# Adoption analyzer
adoption_analyzer = Tool(
    name="adoption_analyzer",
    description="""Analyzes tool adoption metrics across
    users and teams. Identifies underutilized
    features, power users, and at-risk
    deployments needing intervention.""",
    func=analyze_adoption
)

# Config optimizer
config_optimizer = Tool(
    name="config_optimizer",
    description="""Reviews tool configurations and
    recommends optimizations. Identifies
    unused features, suboptimal settings,
    and efficiency improvements.""",
    func=optimize_config
)

# Connector builder
connector_builder = Tool(
    name="connector_builder",
    description="""Designs and prototypes custom
    integrations between tools lacking
    native connectors. Generates API
    specifications and code scaffolding.""",
    func=build_connector
)

ci_stack_agent = Agent(
    role="CI Tooling & Integration Specialist",
    goal="""Ensure the CI tool stack operates at
    peak effectiveness through smart selection,
    tight integration, and continuous
    optimization""",
    backstory="""Former enterprise architect with deep
    experience in CI tool ecosystems. Known
    for building integrated stacks that
    maximize value while minimizing complexity.
    Expert at matching tools to use cases.""",
    llm=llm,
    tools=[tool_evaluator, integration_monitor,
           adoption_analyzer, config_optimizer,
           connector_builder],
    verbose=True
)

# Stack optimization task
optimize_stack = Task(
    description="""Quarterly CI stack review:
    1. Audit current tool integrations
    2. Analyze adoption across all tools
    3. Identify optimization opportunities
    4. Evaluate emerging tool options
    5. Generate improvement roadmap""",
    agent=ci_stack_agent,
    expected_output="""Quarterly stack report with:
    - Integration health status
    - Adoption metrics by tool
    - Configuration recommendations
    - New tool evaluation summaries
    - Prioritized improvement plan"""
)

crew = Crew(
    agents=[ci_stack_agent],
    tasks=[optimize_stack]
)

result = crew.kickoff()`,
    },
    relatedPages: [
      { number: '22.1', title: 'Market Analysis', description: 'Frameworks for competitive market mapping', slug: 'market-analysis' },
      { number: '22.2', title: 'Battle Cards', description: 'Competitive battle cards and profiles', slug: 'battle-cards' },
      { number: '22.3', title: 'Win/Loss Analysis', description: 'Systematic analysis of deal outcomes', slug: 'win-loss-analysis' },
    ],
    prevPage: { title: '22.4 Pricing Intelligence', slug: 'pricing-intel' },
    nextPage: undefined,
  },
]

export default pages
