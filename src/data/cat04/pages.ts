import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'crisp-dm',
    badge: '🔄 Page 4.1',
    title: 'CRISP-DM Methodology',
    description: 'Master the industry-standard methodology for data science projects. CRISP-DM provides a structured, iterative approach to transform business problems into data-driven solutions across six well-defined phases.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '6', label: 'Core Phases' },
      { value: '70%', label: 'Industry Adoption' },
      { value: 'Iterative', label: 'Non-Linear Process' },
      { value: '1996', label: 'Established' },
    ],
    overview: {
      title: 'What is CRISP-DM?',
      subtitle: 'Cross Industry Standard Process for Data Mining',
      subsections: [
        {
          heading: 'The Standard Framework',
          paragraphs: [
            'CRISP-DM (Cross Industry Standard Process for Data Mining) is the most widely-used methodology for data science and machine learning projects. Developed in 1996, it provides a structured approach that guides teams from initial business understanding through deployment and maintenance.',
          ],
        },
        {
          heading: 'Why CRISP-DM Endures',
          paragraphs: [
            'Unlike rigid waterfall approaches, CRISP-DM is inherently iterative. Teams move between phases as they learn—discovering data quality issues might send you back to business understanding, or modeling results might require additional data preparation. This flexibility makes it practical for real-world projects.',
          ],
        },
        {
          heading: 'Beyond Just Modeling',
          paragraphs: [
            'CRISP-DM emphasizes that modeling is just one phase. Successful data science requires understanding the business problem (not just the data), extensive data preparation (often 80% of the effort), and proper deployment and monitoring. Skipping phases leads to models that don\'t deliver business value.',
          ],
        },
      ],
    },
    concepts: {
      title: 'The Six Phases',
      subtitle: 'Complete lifecycle coverage',
      columns: 2,
      cards: [
        {
          className: 'phase-0',
          borderColor: '#3B82F6',
          icon: '1',
          title: 'Business Understanding',
          description: 'Define the business problem and translate it into a data science question. Most projects fail here.',
          examples: ['Define business objectives', 'Assess the situation', 'Determine data mining goals', 'Produce project plan'],
        },
        {
          className: 'phase-1',
          borderColor: '#10B981',
          icon: '2',
          title: 'Data Understanding',
          description: 'Collect initial data, explore it, and identify quality issues before investing in preparation.',
          examples: ['Collect initial data', 'Describe data', 'Explore data (EDA)', 'Verify data quality'],
        },
        {
          className: 'phase-2',
          borderColor: '#8B5CF6',
          icon: '3',
          title: 'Data Preparation',
          description: 'Clean, transform, and engineer features. Typically 60-80% of project time.',
          examples: ['Select data', 'Clean data', 'Construct data (features)', 'Integrate data', 'Format data'],
        },
        {
          className: 'phase-3',
          borderColor: '#F59E0B',
          icon: '4',
          title: 'Modeling',
          description: 'Select algorithms, train models, and tune hyperparameters to optimize performance.',
          examples: ['Select modeling techniques', 'Generate test design', 'Build model', 'Assess model'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'What is CRISP-DM?', subtitle: '', description: 'Cross Industry Standard Process for Data Mining', tags: [] },
        { icon: '📌', title: 'The Six Phases', subtitle: '', description: 'Complete lifecycle coverage', tags: [] },
        { icon: '📌', title: 'Key Deliverables', subtitle: '', description: 'Artifacts at each phase', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for CRISP-DM success', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered project methodology', tags: [] },
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
      subtitle: 'Guidelines for CRISP-DM success',
      doItems: [
        'Start with business understanding—not data',
        'Define success criteria before modeling',
        'Iterate between phases as needed',
        'Document decisions and rationale',
        'Involve stakeholders throughout',
        'Plan for deployment from the start',
        'Track experiments systematically',
        'Allocate 60-80% time to data preparation',
      ],
      dontItems: [
        'Don\'t skip phases to "save time"',
        'Avoid jumping straight to modeling',
        'Never deploy without evaluation',
        'Don\'t ignore data quality issues',
        'Avoid solution-first thinking',
        'Never promise timelines without data assessment',
        'Don\'t treat CRISP-DM as strictly linear',
        'Avoid building models nobody will use',
      ],
    },
    agent: {
      avatar: '🔄',
      name: 'CRISPDMAgent',
      role: 'Data Science Project Manager',
      description: 'Expert in CRISP-DM methodology, project planning, and data science lifecycle management. Guides teams through each phase with appropriate deliverables and checkpoints.',
      capabilities: [
        'Create project plans',
        'Define success criteria',
        'Generate phase checklists',
        'Track deliverables',
        'Assess phase completion',
        'Recommend iterations',
      ],
      codeFilename: 'Agent Definition\n                        Project Task\n                        crisp_dm_agent.py',
      code: `# crisp_dm_agent.py - CRISP-DM Project Agent
from crewai import Agent, Task, Crew

crisp_dm_agent = Agent(
    role="Data Science Project Lead",
    goal="Guide projects through CRISP-DM phases",
    backstory="""Expert in CRISP-DM methodology with 
    deep experience managing data science projects. 
    Ensures proper phase completion, iteration, 
    and stakeholder alignment.""",
    tools=[
        ProjectPlanner(),
        PhaseChecker(),
        DeliverableTracker(),
        IterationAdvisor(),
        StakeholderReporter(),
    ]
)

project_task = Task(
    description="""
    1. Document business objectives
    2. Define success criteria and KPIs
    3. Assess data availability and quality
    4. Create project plan with milestones
    5. Generate phase-specific checklists
    6. Track deliverables completion
    7. Recommend next phase or iteration
    """,
    agent=crisp_dm_agent,
    expected_output="CRISP-DM project plan"
)

# Execute project planning
crew = Crew(agents=[crisp_dm_agent], tasks=[project_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 4.3', title: 'Feature Engineering', description: 'Data Preparation phase deep-dive', slug: 'feature-engineering' },
      { number: 'Page 4.6', title: 'Experiment Tracking', description: 'Track your Modeling iterations', slug: 'experiment-tracking' },
      { number: 'Page 4.7', title: 'Model Evaluation', description: 'Evaluation phase techniques', slug: 'model-evaluation' },
    ],
    prevPage: undefined,
    nextPage: { title: '4.2 Statistical Methods', slug: 'statistical-methods' },
  },
  {
    slug: 'statistical-methods',
    badge: '📊 Page 4.2',
    title: 'Statistical Methods',
    description: 'The mathematical foundation of data science. Master hypothesis testing, regression analysis, and classification to draw valid conclusions from data and build predictive models.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: 'p<0.05', label: 'Statistical Significance' },
      { value: 'R²', label: 'Explained Variance' },
      { value: 'CI', label: 'Confidence Intervals' },
      { value: 'Test', label: 'Hypothesis Validation' },
    ],
    overview: {
      title: 'Statistics in Data Science',
      subtitle: 'The language of uncertainty',
      subsections: [
        {
          heading: 'Why Statistics Matters',
          paragraphs: [
            'Statistics is the bridge between data and decisions. It helps us quantify uncertainty, test hypotheses, and make inferences from samples to populations. Without statistical rigor, data science becomes data guessing.',
          ],
        },
        {
          heading: 'Descriptive vs Inferential',
          paragraphs: [
            'Descriptive statistics summarize what we see: means, medians, distributions. Inferential statistics let us draw conclusions beyond our sample: testing if a difference is real, estimating population parameters, and predicting outcomes.',
          ],
        },
        {
          heading: 'The Modeling Foundation',
          paragraphs: [
            'Every machine learning model has statistical underpinnings. Linear regression is ordinary least squares. Logistic regression is maximum likelihood. Understanding these foundations helps you choose models, interpret results, and diagnose problems.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Statistical foundations',
      columns: 2,
      cards: [
        {
          className: 'concept-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'P-Value',
          description: 'The probability of observing your results (or more extreme) if the null hypothesis is true. p<0.05 is the conventional threshold for "statistical significance" but this is arbitrary—consider effect size too.',
          examples: [],
        },
        {
          className: 'concept-1',
          borderColor: '#10B981',
          icon: '📊',
          title: 'Confidence Interval',
          description: 'A range of values that likely contains the true population parameter. A 95% CI means if we repeated the experiment 100 times, about 95 intervals would contain the true value.',
          examples: [],
        },
        {
          className: 'concept-2',
          borderColor: '#8B5CF6',
          icon: '⚠️',
          title: 'Type I & II Errors',
          description: 'Type I (false positive): rejecting a true null hypothesis. Type II (false negative): failing to reject a false null. Trade-off between them controlled by significance level and sample size.',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💪',
          title: 'Statistical Power',
          description: 'The probability of detecting a true effect. Power = 1 - P(Type II error). Aim for 80%+ power. Depends on effect size, sample size, and significance level.',
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
        { icon: '📌', title: 'Statistics in Data Science', subtitle: '', description: 'The language of uncertainty', tags: [] },
        { icon: '📌', title: 'Core Statistical Methods', subtitle: '', description: 'Essential techniques', tags: [] },
        { icon: '📌', title: 'Statistical Tests', subtitle: '', description: 'Choose the right test', tags: [] },
        { icon: '📌', title: 'Key Concepts', subtitle: '', description: 'Statistical foundations', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Statistical rigor guidelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered statistical analysis', tags: [] },
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
      subtitle: 'Statistical rigor guidelines',
      doItems: [
        'Check assumptions before applying tests',
        'Report effect sizes, not just p-values',
        'Use confidence intervals for uncertainty',
        'Correct for multiple comparisons',
        'Calculate required sample size a priori',
        'Visualize distributions before modeling',
        'Validate regression assumptions',
        'Document your hypothesis before testing',
      ],
      dontItems: [
        'Don\'t p-hack by testing until significant',
        'Never confuse correlation with causation',
        'Avoid using parametric tests on non-normal data',
        'Don\'t ignore outliers without investigation',
        'Never cherry-pick results',
        'Avoid extrapolating beyond your data',
        'Don\'t report only significant findings',
        'Never ignore sample size limitations',
      ],
    },
    agent: {
      avatar: '📊',
      name: 'StatisticsAgent',
      role: 'Statistical Analysis Specialist',
      description: 'Expert in statistical methods, hypothesis testing, and regression analysis. Ensures rigorous, valid statistical inference in data science projects.',
      capabilities: [
        'Select appropriate tests',
        'Check assumptions',
        'Calculate sample sizes',
        'Interpret results',
        'Report effect sizes',
        'Validate models',
      ],
      codeFilename: 'Agent Definition\n                        Analysis Task\n                        statistics_agent.py',
      code: `# statistics_agent.py - Statistical Analysis Agent
from crewai import Agent, Task, Crew

stats_agent = Agent(
    role="Statistical Analyst",
    goal="Perform rigorous statistical analysis",
    backstory="""Expert in statistical methods including 
    hypothesis testing, regression, ANOVA, and 
    experimental design. Ensures valid inference 
    and proper interpretation of results.""",
    tools=[
        TestSelector(),
        AssumptionChecker(),
        SampleSizeCalculator(),
        RegressionAnalyzer(),
        ResultsInterpreter(),
    ]
)

analysis_task = Task(
    description="""
    1. Define research question and hypothesis
    2. Assess data distributions
    3. Check test assumptions
    4. Select appropriate statistical test
    5. Calculate required sample size
    6. Perform analysis
    7. Interpret results with effect sizes
    8. Report findings with confidence intervals
    """,
    agent=stats_agent,
    expected_output="Statistical analysis report"
)

# Execute statistical analysis
crew = Crew(agents=[stats_agent], tasks=[analysis_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 4.7', title: 'Model Evaluation', description: 'Metrics and validation', slug: 'model-evaluation' },
      { number: 'Page 4.3', title: 'Feature Engineering', description: 'Transform data for models', slug: 'feature-engineering' },
      { number: 'Page 3.8', title: 'Advanced Analytics', description: 'Predictive in BI', slug: 'advanced' },
    ],
    prevPage: { title: '4.1 CRISP-DM Methodology', slug: 'crisp-dm' },
    nextPage: { title: '4.3 Feature Engineering', slug: 'feature-engineering' },
  },
  {
    slug: 'feature-engineering',
    badge: '⚙️ Page 4.3',
    title: 'Feature Engineering',
    description: 'The art and science of creating predictive signals from raw data. Transform, encode, and select features that unlock model performance and business insights.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '80%', label: 'Time on Features' },
      { value: 'Transform', label: 'Raw → Predictive' },
      { value: 'Domain', label: 'Knowledge Matters' },
      { value: 'Select', label: 'Quality Over Quantity' },
    ],
    overview: {
      title: 'The Feature Engineering Advantage',
      subtitle: 'Where data science becomes art',
      subsections: [
        {
          heading: 'Why Features Matter',
          paragraphs: [
            'Data scientists spend 80% of their time on data preparation and feature engineering—for good reason. The best algorithm with poor features loses to a simple algorithm with great features. Features are how domain expertise enters the model.',
          ],
        },
        {
          heading: 'From Raw to Predictive',
          paragraphs: [
            'Raw data rarely has predictive power. A timestamp is useless until you extract day-of-week, hour, is-weekend, days-since-signup. Feature engineering transforms raw columns into signals that models can learn from.',
          ],
        },
        {
          heading: 'Domain Knowledge as Competitive Advantage',
          paragraphs: [
            'The best features come from understanding the business. A churn model improves when you know that "days since last login" matters more than "total logins." This domain-driven creativity is what separates good models from great ones.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Feature Selection',
      subtitle: 'Quality over quantity',
      columns: 2,
      cards: [
        {
          className: 'selection-0',
          borderColor: '#3B82F6',
          icon: '🔍',
          title: 'Filter Methods',
          description: '',
          examples: ['Correlation with target (Pearson, Spearman)', 'Mutual information', 'Chi-square for categoricals', 'Variance threshold'],
        },
        {
          className: 'selection-1',
          borderColor: '#10B981',
          icon: '🔄',
          title: 'Wrapper Methods',
          description: '',
          examples: ['Recursive Feature Elimination (RFE)', 'Forward selection', 'Backward elimination', 'Sequential feature selection'],
        },
        {
          className: 'selection-2',
          borderColor: '#8B5CF6',
          icon: '🌳',
          title: 'Embedded Methods',
          description: '',
          examples: ['L1 regularization (Lasso)', 'Tree-based importance', 'Gradient boosting importance', 'Permutation importance'],
        },
        {
          className: 'selection-3',
          borderColor: '#F59E0B',
          icon: '📉',
          title: 'Dimensionality Reduction',
          description: '',
          examples: ['PCA (linear projection)', 't-SNE (visualization)', 'UMAP (manifold learning)', 'Autoencoders (deep learning)'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'The Feature Engineering Advantage', subtitle: '', description: 'Where data science becomes art', tags: [] },
        { icon: '📌', title: 'Transformation Techniques', subtitle: '', description: 'Common feature transformations', tags: [] },
        { icon: '📌', title: 'Categorical Encoding', subtitle: '', description: 'Convert categories to numbers', tags: [] },
        { icon: '📌', title: 'Feature Selection', subtitle: '', description: 'Quality over quantity', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Feature engineering guidelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered feature engineering', tags: [] },
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
      subtitle: 'Feature engineering guidelines',
      doItems: [
        'Start with domain knowledge and hypotheses',
        'Create features from raw data before modeling',
        'Handle missing values explicitly',
        'Scale features for distance-based models',
        'Use target encoding carefully with validation',
        'Create temporal features from timestamps',
        'Document feature engineering pipelines',
        'Test feature importance with multiple methods',
      ],
      dontItems: [
        'Don\'t leak future information into features',
        'Avoid fitting transformers on test data',
        'Never use ID columns as features',
        'Don\'t create too many sparse one-hot features',
        'Avoid target encoding without proper CV',
        'Never ignore multicollinearity',
        'Don\'t engineer features without validation',
        'Avoid complex features you can\'t explain',
      ],
    },
    agent: {
      avatar: '⚙️',
      name: 'FeatureEngineerAgent',
      role: 'Feature Engineering Specialist',
      description: 'Expert in feature transformation, encoding, and selection. Combines domain knowledge with data-driven techniques to create predictive features.',
      capabilities: [
        'Generate feature hypotheses',
        'Transform raw data',
        'Encode categoricals',
        'Select important features',
        'Prevent data leakage',
        'Build feature pipelines',
      ],
      codeFilename: 'Agent Definition\n                        Feature Task\n                        feature_agent.py',
      code: `# feature_agent.py - Feature Engineering Agent
from crewai import Agent, Task, Crew

feature_agent = Agent(
    role="Feature Engineer",
    goal="Create predictive features from raw data",
    backstory="""Expert in feature engineering with 
    deep knowledge of transformations, encoding, 
    and selection methods. Combines domain 
    expertise with statistical techniques.""",
    tools=[
        FeatureGenerator(),
        TransformationPipeline(),
        EncodingSelector(),
        ImportanceAnalyzer(),
        LeakageDetector(),
    ]
)

feature_task = Task(
    description="""
    1. Analyze raw data and identify feature types
    2. Generate feature hypotheses from domain
    3. Apply appropriate transformations
    4. Encode categorical variables
    5. Create interaction features
    6. Detect and prevent data leakage
    7. Select features with multiple methods
    8. Build reproducible feature pipeline
    """,
    agent=feature_agent,
    expected_output="Feature engineering pipeline"
)

# Execute feature engineering
crew = Crew(agents=[feature_agent], tasks=[feature_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 4.4', title: 'Python Stack', description: 'pandas, scikit-learn tools', slug: 'python-stack' },
      { number: 'Page 4.2', title: 'Statistical Methods', description: 'Feature significance', slug: 'statistical-methods' },
      { number: 'Page 4.7', title: 'Model Evaluation', description: 'Validate feature impact', slug: 'model-evaluation' },
    ],
    prevPage: { title: '4.2 Statistical Methods', slug: 'statistical-methods' },
    nextPage: { title: '4.4 Python Data Science Stack', slug: 'python-stack' },
  },
  {
    slug: 'python-stack',
    badge: '🐍 Page 4.4',
    title: 'Python Data Science Stack',
    description: 'Master the essential Python libraries for data science: pandas for data manipulation, NumPy for numerical computing, scikit-learn for machine learning, and the visualization ecosystem.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'pandas', label: 'Data Manipulation' },
      { value: 'NumPy', label: 'Numerical Computing' },
      { value: 'sklearn', label: 'Machine Learning' },
      { value: 'matplotlib', label: 'Visualization' },
    ],
    overview: {
      title: 'Core Libraries',
      subtitle: 'The essential data science stack',
      subsections: [
        {
          heading: 'Core Libraries',
          paragraphs: [
            'The essential data science stack',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Libraries',
      subtitle: 'The essential data science stack',
      columns: 2,
      cards: [
        {
          className: 'lib-0',
          borderColor: '#3B82F6',
          icon: '🐼',
          title: '',
          description: 'DataFrame-based data manipulation. Read, clean, transform, aggregate, and export tabular data.',
          examples: ['DataFrame & Series', 'GroupBy aggregations', 'Merge, join, concat', 'IO: CSV, Excel, SQL, Parquet'],
        },
        {
          className: 'lib-1',
          borderColor: '#10B981',
          icon: '🔢',
          title: '',
          description: 'N-dimensional arrays with fast vectorized operations. Foundation for the entire scientific Python stack.',
          examples: ['ndarray (N-d arrays)', 'Broadcasting', 'Linear algebra', 'Random sampling'],
        },
        {
          className: 'lib-2',
          borderColor: '#8B5CF6',
          icon: '🤖',
          title: '',
          description: 'Comprehensive ML library with consistent API. Classification, regression, clustering, preprocessing.',
          examples: ['Estimator API (fit/predict)', 'Pipelines & transformers', 'Cross-validation', 'Model selection'],
        },
        {
          className: 'lib-3',
          borderColor: '#F59E0B',
          icon: '📊',
          title: '',
          description: 'Low-level plotting library. Full control over every aspect of your figures.',
          examples: ['Figure & Axes', 'Customizable everything', 'Publication quality', 'Many backends'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Core Libraries', subtitle: '', description: 'The essential data science stack', tags: [] },
        { icon: '📌', title: 'Quick Reference', subtitle: '', description: 'Common patterns', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Python data science guidelines', tags: [] },
        { icon: '📌', title: 'Python Data Science Stack', subtitle: '', description: 'Master the essential Python libraries for data science: pandas for data manipulation, NumPy for numerical computing, scikit-learn for machine learning', tags: [] },
        { icon: '📌', title: 'Python Data Science Stack', subtitle: '', description: 'Master the essential Python libraries for data science: pandas for data manipulation, NumPy for numerical computing, scikit-learn for machine learning', tags: [] },
        { icon: '📌', title: 'Python Data Science Stack', subtitle: '', description: 'Master the essential Python libraries for data science: pandas for data manipulation, NumPy for numerical computing, scikit-learn for machine learning', tags: [] },
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
      subtitle: 'Python data science guidelines',
      doItems: [
        'Use vectorized operations, not loops',
        'Chain pandas operations with method chaining',
        'Use sklearn Pipelines for reproducibility',
        'Profile memory with large datasets',
        'Use categorical dtype for strings',
        'Pin library versions in requirements.txt',
      ],
      dontItems: [
        'Don\'t iterate row-by-row with .iterrows()',
        'Avoid chained assignment warnings',
        'Never fit transformers on test data',
        'Don\'t load huge CSVs without chunking',
        'Avoid wildcard imports (from x import *)',
        'Don\'t ignore SettingWithCopyWarning',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '',
      role: '',
      description: '',
      capabilities: [
      ],
      codeFilename: 'pandas_essentials.py',
      code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load and explore
df = pd.read_csv('data.csv')
df.info()
df.describe()
df.head()

# Clean and transform
df['date'] = pd.to_datetime(df['date'])
df = df.dropna(subset=['target'])
df['category'] = df['category'].fillna('Unknown')

# Feature engineering
df['day_of_week'] = df['date'].dt.dayofweek
df['log_amount'] = np.log1p(df['amount'])

# Train model
X = df[['feature1', 'feature2', 'log_amount']]
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
print(f"Accuracy: {model.score(X_test, y_test):.3f}")`,
    },
    relatedPages: [
    ],
    prevPage: { title: '4.3 Feature Engineering', slug: 'feature-engineering' },
    nextPage: { title: '4.5 Notebooks & Collaboration', slug: 'notebooks' },
  },
  {
    slug: 'notebooks',
    badge: '📓 Page 4.5',
    title: 'Notebooks & Collaboration',
    description: 'Interactive computing environments for data science. Compare Jupyter, Databricks Notebooks, Google Colab, and learn best practices for reproducible, collaborative analysis.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: 'Jupyter', label: 'Industry Standard' },
      { value: 'Databricks', label: 'Enterprise Scale' },
      { value: 'Colab', label: 'Free GPU/TPU' },
      { value: 'Git', label: 'Version Control' },
    ],
    overview: {
      title: 'Notebook Platforms',
      subtitle: 'Interactive computing environments',
      subsections: [
        {
          heading: 'Notebook Platforms',
          paragraphs: [
            'Interactive computing environments',
          ],
        },
      ],
    },
    concepts: {
      title: 'Notebook Platforms',
      subtitle: 'Interactive computing environments',
      columns: 2,
      cards: [
        {
          className: 'platform-0',
          borderColor: '#3B82F6',
          icon: '📓',
          title: '',
          description: 'The original interactive notebook. Run locally or on servers. Language-agnostic with kernels for Python, R, Julia.',
          examples: ['JupyterLab modern interface', 'Extensions ecosystem', 'nbconvert export', 'JupyterHub for teams'],
        },
        {
          className: 'platform-1',
          borderColor: '#10B981',
          icon: '🔷',
          title: '',
          description: 'Collaborative notebooks on Spark clusters. Real-time co-editing, version control, job scheduling built-in.',
          examples: ['Real-time collaboration', 'Git integration', 'Spark cluster access', 'MLflow integration'],
        },
        {
          className: 'platform-2',
          borderColor: '#8B5CF6',
          icon: '☁️',
          title: '',
          description: 'Free Jupyter notebooks with GPU/TPU access. Great for learning, prototyping, and sharing demos.',
          examples: ['Free GPU/TPU runtime', 'Google Drive integration', 'Easy sharing', 'Pre-installed libraries'],
        },
        {
          className: 'platform-3',
          borderColor: '#F59E0B',
          icon: '🆚',
          title: '',
          description: 'Jupyter notebooks inside VS Code. Full IDE features: intellisense, debugging, Git, extensions.',
          examples: ['IDE integration', 'Variable explorer', 'Debug support', 'Copilot assistance'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Notebook Platforms', subtitle: '', description: 'Interactive computing environments', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Notebook guidelines', tags: [] },
        { icon: '📌', title: 'Notebooks & Collaboration', subtitle: '', description: 'Interactive computing environments for data science. Compare Jupyter, Databricks Notebooks, Google Colab, and learn best practices for reproducible, c', tags: [] },
        { icon: '📌', title: 'Notebooks & Collaboration', subtitle: '', description: 'Interactive computing environments for data science. Compare Jupyter, Databricks Notebooks, Google Colab, and learn best practices for reproducible, c', tags: [] },
        { icon: '📌', title: 'Notebooks & Collaboration', subtitle: '', description: 'Interactive computing environments for data science. Compare Jupyter, Databricks Notebooks, Google Colab, and learn best practices for reproducible, c', tags: [] },
        { icon: '📌', title: 'Notebooks & Collaboration', subtitle: '', description: 'Interactive computing environments for data science. Compare Jupyter, Databricks Notebooks, Google Colab, and learn best practices for reproducible, c', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools and platforms',
      items: [
        { icon: '🛠️', name: 'Jupyter', vendor: '', description: 'The original interactive notebook. Run locally or on servers. Language-agnostic with kernels for Python, R, Julia.', tags: ['Open Source Standard'] },
        { icon: '🛠️', name: 'Databricks Notebooks', vendor: '', description: 'Collaborative notebooks on Spark clusters. Real-time co-editing, version control, job scheduling built-in.', tags: ['Enterprise Collaboration'] },
        { icon: '🛠️', name: 'Google Colab', vendor: '', description: 'Free Jupyter notebooks with GPU/TPU access. Great for learning, prototyping, and sharing demos.', tags: ['Free Cloud Notebooks'] },
        { icon: '🛠️', name: 'VS Code Notebooks', vendor: '', description: 'Jupyter notebooks inside VS Code. Full IDE features: intellisense, debugging, Git, extensions.', tags: ['IDE Integration'] },
        { icon: '🛠️', name: 'SageMaker Studio', vendor: '', description: 'Fully managed notebooks on AWS. Integrated with SageMaker training, deployment, and MLOps tools.', tags: ['AWS ML Platform'] },
        { icon: '🛠️', name: 'Hex', vendor: '', description: 'Modern collaborative data workspace. SQL + Python, app publishing, and team collaboration features.', tags: ['Collaborative Analytics'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Notebook guidelines',
      doItems: [
        'Run cells top-to-bottom before sharing',
        'Use meaningful variable names',
        'Include markdown documentation',
        'Clear outputs before committing to Git',
        'Use %pip install for reproducibility',
        'Refactor repeated code into functions',
      ],
      dontItems: [
        'Don\'t run cells out of order',
        'Avoid hidden state from deleted cells',
        'Never commit credentials in notebooks',
        'Don\'t use notebooks for production code',
        'Avoid 1000+ line notebooks',
        'Don\'t skip kernel restart testing',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '',
      role: '',
      description: '',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '4.4 Python Data Science Stack', slug: 'python-stack' },
    nextPage: { title: '4.6 Experiment Tracking', slug: 'experiment-tracking' },
  },
  {
    slug: 'experiment-tracking',
    badge: '🧪 Page 4.6',
    title: 'Experiment Tracking',
    description: 'Track, compare, and reproduce ML experiments. Log parameters, metrics, and artifacts to understand what works, what doesn\'t, and why.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: 'Track', label: 'Parameters & Metrics' },
      { value: 'Compare', label: 'Across Experiments' },
      { value: 'Reproduce', label: 'Any Past Run' },
      { value: 'Collaborate', label: 'Team Visibility' },
    ],
    overview: {
      title: 'Tracking Platforms',
      subtitle: 'Compare experiment tracking tools',
      subsections: [
        {
          heading: 'Tracking Platforms',
          paragraphs: [
            'Compare experiment tracking tools',
          ],
        },
        {
          heading: 'MLflow Example',
          paragraphs: [
            'Tracking experiments with MLflow',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Concepts',
      subtitle: 'Core components and patterns',
      columns: 2,
      cards: [
        {
          className: 'section-0',
          borderColor: '#3B82F6',
          icon: '📌',
          title: 'Tracking Platforms',
          description: 'Compare experiment tracking tools',
          examples: ['Auto-logging for popular frameworks', 'Model registry with versioning', 'Self-hosted or managed', 'Native Databricks integration'],
        },
        {
          className: 'section-1',
          borderColor: '#10B981',
          icon: '📌',
          title: 'MLflow Example',
          description: 'Tracking experiments with MLflow',
          examples: [],
        },
        {
          className: 'section-2',
          borderColor: '#8B5CF6',
          icon: '📌',
          title: 'Best Practices',
          description: 'Experiment tracking guidelines',
          examples: ['Log everything: params, metrics, artifacts', 'Use meaningful run names and tags', 'Track data versions alongside code', 'Log environment and dependencies'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Experiment Tracking',
          description: 'Track, compare, and reproduce ML experiments. Log parameters, metrics, and artifacts to understand what works, what doesn\'t, and why.',
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
        { icon: '📌', title: 'Tracking Platforms', subtitle: '', description: 'Compare experiment tracking tools', tags: [] },
        { icon: '📌', title: 'MLflow Example', subtitle: '', description: 'Tracking experiments with MLflow', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Experiment tracking guidelines', tags: [] },
        { icon: '📌', title: 'Experiment Tracking', subtitle: '', description: 'Track, compare, and reproduce ML experiments. Log parameters, metrics, and artifacts to understand what works, what doesn\'t, and why.', tags: [] },
        { icon: '📌', title: 'Experiment Tracking', subtitle: '', description: 'Track, compare, and reproduce ML experiments. Log parameters, metrics, and artifacts to understand what works, what doesn\'t, and why.', tags: [] },
        { icon: '📌', title: 'Experiment Tracking', subtitle: '', description: 'Track, compare, and reproduce ML experiments. Log parameters, metrics, and artifacts to understand what works, what doesn\'t, and why.', tags: [] },
      ],
    },
    tools: {
      title: 'Tracking Platforms',
      subtitle: 'Compare experiment tracking tools',
      items: [
        { icon: '🛠️', name: 'MLflow', vendor: '', description: 'Open-source platform for the complete ML lifecycle. Tracking, projects, models, and model registry.', tags: ['Open Source • Databricks'] },
        { icon: '🛠️', name: 'Weights & Biases', vendor: '', description: 'Experiment tracking with beautiful dashboards, team collaboration, and sweep hyperparameter tuning.', tags: ['SaaS • Team Collaboration'] },
        { icon: '🛠️', name: 'Neptune.ai', vendor: '', description: 'Flexible metadata store for MLOps. Track experiments, models, and data. Powerful querying and comparison.', tags: ['SaaS • Metadata Store'] },
        { icon: '🛠️', name: 'Comet ML', vendor: '', description: 'Full-stack ML platform with experiment tracking, model registry, and production monitoring.', tags: ['SaaS • Enterprise'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Experiment tracking guidelines',
      doItems: [
        'Log everything: params, metrics, artifacts',
        'Use meaningful run names and tags',
        'Track data versions alongside code',
        'Log environment and dependencies',
        'Compare runs systematically',
        'Document insights in run notes',
      ],
      dontItems: [
        'Don\'t track experiments in spreadsheets',
        'Never overwrite previous runs',
        'Avoid hardcoded hyperparameters',
        'Don\'t skip logging failed experiments',
        'Never ignore reproducibility',
        'Don\'t track sensitive data in logs',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '',
      role: '',
      description: '',
      capabilities: [
      ],
      codeFilename: 'mlflow_tracking.py',
      code: `import mlflow
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score

# Set experiment
mlflow.set_experiment("churn-prediction")

# Start run
with mlflow.start_run(run_name="rf-baseline"):
    # Log parameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 10)
    
    # Train model
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)
    
    # Log metrics
    y_pred = model.predict(X_test)
    mlflow.log_metric("accuracy", accuracy_score(y_test, y_pred))
    mlflow.log_metric("f1", f1_score(y_test, y_pred))
    
    # Log model
    mlflow.sklearn.log_model(model, "model")`,
    },
    relatedPages: [
    ],
    prevPage: { title: '4.5 Notebooks & Collaboration', slug: 'notebooks' },
    nextPage: { title: '4.7 Model Evaluation', slug: 'model-evaluation' },
  },
  {
    slug: 'model-evaluation',
    badge: '🎯 Page 4.7',
    title: 'Model Evaluation',
    description: 'Choose the right metrics, validate properly, and detect bias. Ensure your models perform well not just on test data, but in the real world where it matters.',
    accentColor: '#EF4444',
    accentLight: '#F87171',
    metrics: [
      { value: 'Metrics', label: 'Right Measure' },
      { value: 'Validation', label: 'Proper Splits' },
      { value: 'Bias', label: 'Fairness Check' },
      { value: 'Production', label: 'Real Performance' },
    ],
    overview: {
      title: 'Classification Metrics',
      subtitle: 'Metrics for categorical predictions',
      subsections: [
        {
          heading: 'Classification Metrics',
          paragraphs: [
            'Metrics for categorical predictions',
          ],
        },
        {
          heading: 'Regression Metrics',
          paragraphs: [
            'Metrics for continuous predictions',
          ],
        },
        {
          heading: 'Bias Detection',
          paragraphs: [
            'Fairness and bias considerations',
          ],
        },
      ],
    },
    concepts: {
      title: 'Classification Metrics',
      subtitle: 'Metrics for categorical predictions',
      columns: 2,
      cards: [
        {
          className: 'metric-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: 'Proportion of correct predictions. Simple but misleading for imbalanced classes.',
          examples: [],
        },
        {
          className: 'metric-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: 'Of predicted positives, how many are actually positive? Minimize false positives.',
          examples: [],
        },
        {
          className: 'metric-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: 'Of actual positives, how many did we catch? Minimize false negatives.',
          examples: [],
        },
        {
          className: 'metric-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: 'Harmonic mean of precision and recall. Balances both concerns.',
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
        { icon: '📌', title: 'Classification Metrics', subtitle: '', description: 'Metrics for categorical predictions', tags: [] },
        { icon: '📌', title: 'Regression Metrics', subtitle: '', description: 'Metrics for continuous predictions', tags: [] },
        { icon: '📌', title: 'Validation Strategies', subtitle: '', description: 'Proper train/test splitting', tags: [] },
        { icon: '📌', title: 'Bias Detection', subtitle: '', description: 'Fairness and bias considerations', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Model evaluation guidelines', tags: [] },
        { icon: '📌', title: 'Model Evaluation', subtitle: '', description: 'Choose the right metrics, validate properly, and detect bias. Ensure your models perform well not just on test data, but in the real world where it ma', tags: [] },
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
      subtitle: 'Model evaluation guidelines',
      doItems: [
        'Choose metrics aligned with business goals',
        'Use cross-validation for robust estimates',
        'Report confidence intervals, not just point estimates',
        'Evaluate on multiple metrics',
        'Test for bias across protected groups',
        'Compare to meaningful baselines',
      ],
      dontItems: [
        'Don\'t use accuracy for imbalanced classes',
        'Never evaluate on training data',
        'Avoid data leakage in validation',
        'Don\'t ignore calibration for probabilities',
        'Never skip fairness evaluation',
        'Don\'t optimize for test set (use holdout)',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '',
      role: '',
      description: '',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '4.6 Experiment Tracking', slug: 'experiment-tracking' },
    nextPage: { title: '4.8 Data Science Use Cases', slug: 'use-cases' },
  },
  {
    slug: 'use-cases',
    badge: '💼 Page 4.8',
    title: 'Data Science Use Cases',
    description: 'Real-world applications that deliver business value. From churn prediction to demand forecasting, see how data science solves actual problems across industries.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'Churn', label: 'Retain Customers' },
      { value: 'Forecast', label: 'Predict Demand' },
      { value: 'Segment', label: 'Know Customers' },
      { value: 'Recommend', label: 'Personalize' },
    ],
    overview: {
      title: 'High-Impact Use Cases',
      subtitle: 'Proven data science applications',
      subsections: [
        {
          heading: 'High-Impact Use Cases',
          paragraphs: [
            'Proven data science applications',
          ],
        },
      ],
    },
    concepts: {
      title: 'High-Impact Use Cases',
      subtitle: 'Proven data science applications',
      columns: 2,
      cards: [
        {
          className: 'churn',
          borderColor: '#3B82F6',
          icon: '🚪',
          title: '',
          description: 'Identify customers likely to leave before they do. Enable proactive retention campaigns and reduce customer acquisition costs.',
          examples: [],
        },
        {
          className: 'forecast',
          borderColor: '#10B981',
          icon: '📈',
          title: '',
          description: 'Predict future demand for inventory planning, staffing, and capacity. Reduce stockouts and overstock costs.',
          examples: [],
        },
        {
          className: 'segment',
          borderColor: '#8B5CF6',
          icon: '👥',
          title: '',
          description: 'Group customers by behavior, value, and needs. Enable targeted marketing and personalized experiences.',
          examples: [],
        },
        {
          className: 'recommend',
          borderColor: '#F59E0B',
          icon: '🎁',
          title: '',
          description: 'Suggest products, content, or actions based on user behavior and preferences. Drive engagement and cross-sell.',
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
        { icon: '📌', title: 'High-Impact Use Cases', subtitle: '', description: 'Proven data science applications', tags: [] },
        { icon: '📌', title: 'Industry Applications', subtitle: '', description: 'Sector-specific use cases', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Use case implementation guidelines', tags: [] },
        { icon: '📌', title: 'Data Science Use Cases', subtitle: '', description: 'Real-world applications that deliver business value. From churn prediction to demand forecasting, see how data science solves actual problems across i', tags: [] },
        { icon: '📌', title: 'Data Science Use Cases', subtitle: '', description: 'Real-world applications that deliver business value. From churn prediction to demand forecasting, see how data science solves actual problems across i', tags: [] },
        { icon: '📌', title: 'Data Science Use Cases', subtitle: '', description: 'Real-world applications that deliver business value. From churn prediction to demand forecasting, see how data science solves actual problems across i', tags: [] },
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
      subtitle: 'Use case implementation guidelines',
      doItems: [
        'Start with clear business problem and success metrics',
        'Validate with stakeholders before building',
        'Establish baseline performance first',
        'Design for deployment from day one',
        'Monitor model performance in production',
        'Measure business impact, not just model accuracy',
      ],
      dontItems: [
        'Don\'t start with a solution looking for a problem',
        'Never skip the data understanding phase',
        'Avoid scope creep mid-project',
        'Don\'t over-engineer the first version',
        'Never deploy without stakeholder buy-in',
        'Don\'t ignore model maintenance needs',
      ],
    },
    agent: {
      avatar: '🤖',
      name: '',
      role: '',
      description: '',
      capabilities: [
      ],
      codeFilename: '',
      code: ``,
    },
    relatedPages: [
    ],
    prevPage: { title: '4.7 Model Evaluation', slug: 'model-evaluation' },
    nextPage: undefined,
  },
]

export default pages
