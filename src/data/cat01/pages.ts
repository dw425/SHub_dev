import { registerPages } from '../pageRegistry'
import type { PageData } from '../pageTypes'

const pages: PageData[] = [
  {
    slug: 'supervised-learning',
    badge: '🏷️ Page 1.1',
    title: 'Supervised Learning',
    description: 'The most widely used machine learning paradigm where models learn from labeled examples. Master classification and regression techniques to build predictive systems that power everything from spam filters to price forecasting.',
    accentColor: '#3B82F6',
    accentLight: '#60A5FA',
    metrics: [
      { value: '80%', label: 'Of Enterprise ML Use Cases' },
      { value: '99%+', label: 'Best Accuracy Achievable' },
      { value: '50+', label: 'Common Algorithms' },
      { value: '2', label: 'Main Problem Types' },
    ],
    overview: {
      title: 'What is Supervised Learning?',
      subtitle: 'Understanding the fundamentals of learning from labeled data',
      subsections: [
        {
          heading: 'Definition & Core Concept',
          paragraphs: [
            'Supervised learning is a machine learning approach where models are trained using labeled datasets—input-output pairs where the correct answer is already known. The algorithm learns to map inputs (features) to outputs (targets) by analyzing these examples and minimizing prediction errors during training.',
            'The term "supervised" comes from the concept of a teacher (the labeled data) guiding the learning process. Just as a student learns from corrected homework, the model adjusts its internal parameters based on feedback about how far its predictions were from the true values.',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'Supervised learning powers the vast majority of production ML systems today. From credit scoring and fraud detection to medical diagnosis and recommendation engines, these algorithms excel when you have historical data with known outcomes that you want to predict for new, unseen cases.',
          ],
        },
        {
          heading: 'Key Requirements',
          paragraphs: [
            'Success with supervised learning depends on having sufficient labeled training data, well-defined features that correlate with the target variable, and a clear understanding of the prediction task. The quality and quantity of labels directly impacts model performance—garbage in, garbage out.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Classification vs Regression',
      subtitle: 'The two fundamental problem types in supervised learning',
      columns: 2,
      cards: [
        {
          className: 'classification',
          borderColor: '#3B82F6',
          icon: '🏷️',
          title: 'Classification',
          description: 'Predict discrete categories or classes. The output is a label from a finite set of possibilities. Can be binary (two classes) or multi-class (three or more).',
          examples: ['Spam vs Not Spam (binary)', 'Image recognition (multi-class)', 'Customer churn prediction', 'Disease diagnosis', 'Sentiment analysis (positive/negative/neutral)'],
        },
        {
          className: 'regression',
          borderColor: '#10B981',
          icon: '📈',
          title: 'Regression',
          description: 'Predict continuous numerical values. The output is a real number that can take any value within a range. Used for forecasting and estimation.',
          examples: ['House price prediction', 'Sales forecasting', 'Stock price estimation', 'Temperature prediction', 'Customer lifetime value'],
        },
        {
          className: 'overview-2',
          borderColor: '#8B5CF6',
          icon: '📌',
          title: 'Key Requirements',
          description: 'Success with supervised learning depends on having sufficient labeled training data, well-defined features that correlate with the target variable, and a clear understanding of the prediction task. Th',
          examples: [],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Supervised Learning',
          description: 'The most widely used machine learning paradigm where models learn from labeled examples. Master classification and regression techniques to build predictive systems that power everything from spam fil',
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
        { icon: '📌', title: 'What is Supervised Learning?', subtitle: '', description: 'Understanding the fundamentals of learning from labeled data', tags: [] },
        { icon: '📌', title: 'Classification vs Regression', subtitle: '', description: 'The two fundamental problem types in supervised learning', tags: [] },
        { icon: '📌', title: 'Supervised Learning Workflow', subtitle: '', description: 'End-to-end process from data to predictions', tags: [] },
        { icon: '📌', title: 'Popular Supervised Learning Algorithms', subtitle: '', description: 'Comparison of commonly used algorithms', tags: [] },
        { icon: '📌', title: 'Tools & Frameworks', subtitle: '', description: 'Essential libraries for supervised learning', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for successful supervised learning projects', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for supervised learning', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential libraries for supervised learning',
      items: [
        { icon: '🔬', name: 'scikit-learn', vendor: 'Open Source', description: 'The gold standard for classical ML. Consistent API, excellent documentation, great for learning and production.', tags: ['Python', 'Classical ML', 'Free'] },
        { icon: '🚀', name: 'XGBoost', vendor: 'DMLC', description: 'Optimized gradient boosting library. Extremely fast, handles missing values, GPU support.', tags: ['Gradient Boosting', 'GPU', 'Competition Winner'] },
        { icon: '⚡', name: 'LightGBM', vendor: 'Microsoft', description: 'Fast gradient boosting framework. Leaf-wise tree growth, excellent for large datasets.', tags: ['Fast Training', 'Large Data', 'Microsoft'] },
        { icon: '🔥', name: 'PyTorch', vendor: 'Meta AI', description: 'Deep learning framework with dynamic graphs. Preferred for research and custom architectures.', tags: ['Deep Learning', 'Research', 'Dynamic'] },
        { icon: '🧠', name: 'TensorFlow', vendor: 'Google', description: 'Production-ready deep learning. TensorFlow Serving, TFX pipelines, mobile deployment.', tags: ['Production', 'Enterprise', 'Mobile'] },
        { icon: '🐱', name: 'CatBoost', vendor: 'Yandex', description: 'Handles categorical features natively. Great for datasets with many categorical variables.', tags: ['Categorical', 'Yandex', 'GPU'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for successful supervised learning projects',
      doItems: [
        'Start with a simple baseline model before complex ones',
        'Split data properly: train/validation/test (e.g., 70/15/15)',
        'Use cross-validation for robust performance estimates',
        'Handle class imbalance with stratification or resampling',
        'Perform thorough exploratory data analysis first',
        'Engineer features based on domain knowledge',
        'Track experiments and version your data',
        'Monitor for data drift in production',
      ],
      dontItems: [
        'Never train and test on the same data (data leakage)',
        'Don\'t ignore class imbalance—accuracy can be misleading',
        'Avoid feature engineering on the full dataset before splitting',
        'Don\'t tune hyperparameters on the test set',
        'Never assume more data always helps—quality matters',
        'Don\'t use complex models when simple ones suffice',
        'Avoid ignoring error analysis—understand failures',
        'Don\'t deploy without monitoring and alerting',
      ],
    },
    agent: {
      avatar: '🏷️',
      name: 'SupervisedMLAgent',
      role: 'Classification & Regression Specialist',
      description: 'Expert in building, training, and deploying supervised learning models. Automates feature selection, hyperparameter tuning, model evaluation, and provides interpretability insights.',
      capabilities: [
        'Automatic algorithm selection based on data characteristics',
        'Feature importance analysis and selection',
        'Hyperparameter optimization (grid, random, Bayesian)',
        'Cross-validation and robust evaluation',
        'Model explainability with SHAP/LIME',
        'Production deployment pipelines',
      ],
      codeFilename: 'Agent Definition\n                        Example Task\n                        supervised_agent.py',
      code: `# supervised_agent.py - Supervised Learning Agent
from crewai import Agent, Task, Crew
from sklearn.model_selection import cross_val_score
import xgboost as xgb

supervised_agent = Agent(
    role="Supervised Learning Specialist",
    goal="Build optimal classification/regression models",
    backstory="""Expert in supervised learning with deep 
    knowledge of tree-based models, neural networks, 
    and model interpretation techniques.""",
    tools=[
        DataProfiler(),
        FeatureSelector(),
        ModelTrainer(),
        HyperparamOptimizer(),
        ModelExplainer(),
    ]
)

classification_task = Task(
    description="""
    1. Analyze dataset characteristics and class distribution
    2. Perform feature engineering and selection
    3. Train multiple algorithms (baseline to complex)
    4. Optimize hyperparameters using Optuna
    5. Evaluate with stratified cross-validation
    6. Generate SHAP explanations for best model
    7. Export production-ready pipeline
    """,
    agent=supervised_agent,
    expected_output="Optimized model with F1 > 0.9"
)

# Execute the supervised learning pipeline
crew = Crew(agents=[supervised_agent], tasks=[classification_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.2', title: 'Unsupervised Learning', description: 'Clustering, dimensionality reduction, and pattern discovery', slug: 'unsupervised-learning' },
      { number: 'Page 1.6', title: 'Algorithm Selection', description: 'Decision framework for choosing the right algorithm', slug: 'algorithm-selection' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Accuracy, F1, ROC-AUC, and business metrics', slug: 'evaluation-metrics' },
    ],
    prevPage: undefined,
    nextPage: { title: '1.2 Unsupervised Learning', slug: 'unsupervised-learning' },
  },
  {
    slug: 'unsupervised-learning',
    badge: '🔍 Page 1.2',
    title: 'Unsupervised Learning',
    description: 'Discover hidden patterns and structures in unlabeled data. Master clustering for customer segmentation, dimensionality reduction for visualization, and anomaly detection for fraud prevention—all without explicit labels.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: 'No Labels', label: 'Required for Training' },
      { value: '∞', label: 'Pattern Discovery' },
      { value: '3', label: 'Main Technique Types' },
      { value: '85%', label: 'Data is Unlabeled' },
    ],
    overview: {
      title: 'What is Unsupervised Learning?',
      subtitle: 'Learning patterns from data without explicit labels',
      subsections: [
        {
          heading: 'Definition & Core Concept',
          paragraphs: [
            'Unsupervised learning is a machine learning paradigm where algorithms analyze and cluster unlabeled datasets to discover hidden patterns, groupings, or structures without human-provided labels. Unlike supervised learning, there\'s no "correct answer" to guide the learning process—the algorithm must find meaningful patterns on its own.',
            'The power of unsupervised learning lies in its ability to reveal insights that humans might never have thought to look for. It\'s exploratory by nature, making it ideal for understanding complex datasets, finding natural groupings, and reducing data complexity.',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'In the real world, most data is unlabeled—labeling is expensive and time-consuming. Unsupervised learning enables value extraction from vast amounts of raw data. Customer segmentation, recommendation systems, anomaly detection, and data preprocessing all rely heavily on unsupervised techniques.',
          ],
        },
        {
          heading: 'Key Challenges',
          paragraphs: [
            'Without labels, evaluation is inherently difficult. How do you know if your clusters are "good"? Choosing the right number of clusters, interpreting results, and validating findings requires domain expertise and multiple validation approaches.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Technique Categories',
      subtitle: 'The three main approaches to unsupervised learning',
      columns: 2,
      cards: [
        {
          className: 'clustering',
          borderColor: '#3B82F6',
          icon: '🎨',
          title: 'Clustering',
          description: 'Group similar data points together based on feature similarity. Discover natural segments in your data.',
          examples: ['Customer segmentation', 'Document categorization', 'Image grouping', 'Market basket analysis'],
        },
        {
          className: 'dimensionality',
          borderColor: '#10B981',
          icon: '📉',
          title: 'Dimensionality Reduction',
          description: 'Reduce features while preserving important information. Enable visualization and remove noise.',
          examples: ['Feature compression', 'Data visualization', 'Noise reduction', 'Preprocessing for ML'],
        },
        {
          className: 'anomaly',
          borderColor: '#8B5CF6',
          icon: '🚨',
          title: 'Anomaly Detection',
          description: 'Identify unusual patterns that don\'t conform to expected behavior. Find outliers and rare events.',
          examples: ['Fraud detection', 'System monitoring', 'Quality control', 'Intrusion detection'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Unsupervised Learning',
          description: 'Discover hidden patterns and structures in unlabeled data. Master clustering for customer segmentation, dimensionality reduction for visualization, and anomaly detection for fraud prevention—all witho',
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
        { icon: '📌', title: 'What is Unsupervised Learning?', subtitle: '', description: 'Learning patterns from data without explicit labels', tags: [] },
        { icon: '📌', title: 'Core Technique Categories', subtitle: '', description: 'The three main approaches to unsupervised learning', tags: [] },
        { icon: '📌', title: 'Clustering Algorithms Visualized', subtitle: '', description: 'How different algorithms partition data', tags: [] },
        { icon: '📌', title: 'Unsupervised Learning Algorithms', subtitle: '', description: 'Comparison of key algorithms by category', tags: [] },
        { icon: '📌', title: 'Tools & Libraries', subtitle: '', description: 'Essential tools for unsupervised learning', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective unsupervised learning', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for unsupervised learning', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Libraries',
      subtitle: 'Essential tools for unsupervised learning',
      items: [
        { icon: '🔬', name: 'scikit-learn', vendor: 'Open Source', description: 'Comprehensive clustering and dimensionality reduction. KMeans, DBSCAN, PCA, t-SNE all in one package.', tags: ['Python', 'Clustering', 'PCA'] },
        { icon: '🗺️', name: 'UMAP', vendor: 'Open Source', description: 'Uniform Manifold Approximation. Faster than t-SNE with better global structure preservation.', tags: ['Visualization', 'Fast', 'Non-linear'] },
        { icon: '🌊', name: 'HDBSCAN', vendor: 'Open Source', description: 'Hierarchical DBSCAN. Automatically selects epsilon, handles varying densities.', tags: ['Clustering', 'Auto-tune', 'Robust'] },
        { icon: '🔥', name: 'PyTorch', vendor: 'Meta AI', description: 'Deep learning autoencoders and VAEs for complex dimensionality reduction.', tags: ['Deep Learning', 'Autoencoders', 'VAE'] },
        { icon: '📊', name: 'PyOD', vendor: 'Open Source', description: 'Python Outlier Detection. 40+ algorithms for anomaly detection in one toolkit.', tags: ['Anomaly', '40+ Algos', 'Unified API'] },
        { icon: '🎯', name: 'KMeans (Spark)', vendor: 'Apache Spark', description: 'Distributed clustering for massive datasets. Billion-point scale clustering.', tags: ['Big Data', 'Distributed', 'Scalable'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective unsupervised learning',
      doItems: [
        'Standardize/normalize features before clustering',
        'Use multiple evaluation metrics (silhouette, Davies-Bouldin)',
        'Validate clusters with domain experts',
        'Try multiple algorithms—results can vary significantly',
        'Use elbow method and silhouette scores for K selection',
        'Visualize results in 2D/3D to sanity check',
        'Consider business interpretability of clusters',
        'Test stability by running multiple times with different seeds',
      ],
      dontItems: [
        'Don\'t assume clusters are always meaningful',
        'Avoid using K-means for non-spherical data',
        'Don\'t ignore outliers—they may be important signals',
        'Never skip feature scaling for distance-based methods',
        'Don\'t use t-SNE for anything except visualization',
        'Avoid over-interpreting small clusters',
        'Don\'t forget PCA reduces interpretability',
        'Never cluster without understanding your features',
      ],
    },
    agent: {
      avatar: '🔍',
      name: 'ClusteringAgent',
      role: 'Pattern Discovery Specialist',
      description: 'Expert in discovering hidden patterns in unlabeled data. Automates algorithm selection, cluster validation, dimensionality reduction, and provides actionable insights from discovered segments.',
      capabilities: [
        'Automatic algorithm selection (K-means vs DBSCAN vs GMM)',
        'Optimal K determination with elbow/silhouette analysis',
        'Cluster profiling and interpretation',
        'Dimensionality reduction pipeline (PCA → UMAP)',
        'Anomaly detection with Isolation Forest',
        'Cluster stability validation',
      ],
      codeFilename: 'Agent Definition\n                        Clustering Task\n                        clustering_agent.py',
      code: `# clustering_agent.py - Clustering & Pattern Discovery
from crewai import Agent, Task, Crew
from sklearn.cluster import KMeans, DBSCAN
from sklearn.decomposition import PCA
import umap

clustering_agent = Agent(
    role="Unsupervised Learning Specialist",
    goal="Discover meaningful patterns in unlabeled data",
    backstory="""Expert in clustering algorithms, 
    dimensionality reduction, and anomaly detection. 
    Specializes in customer segmentation and 
    pattern discovery.""",
    tools=[
        DataScaler(),
        ClusterOptimizer(),
        SilhouetteAnalyzer(),
        DimensionalityReducer(),
        ClusterProfiler(),
    ]
)

segmentation_task = Task(
    description="""
    1. Scale and preprocess features
    2. Determine optimal number of clusters (elbow + silhouette)
    3. Compare K-means, DBSCAN, and GMM performance
    4. Profile each cluster with feature distributions
    5. Reduce to 2D for visualization (UMAP)
    6. Generate actionable segment descriptions
    """,
    agent=clustering_agent,
    expected_output="Customer segments with profiles"
)

# Execute pattern discovery pipeline
crew = Crew(agents=[clustering_agent], tasks=[segmentation_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Classification and regression with labeled data', slug: 'supervised-learning' },
      { number: 'Page 1.4', title: 'Neural Networks', description: 'Autoencoders for unsupervised representation learning', slug: 'neural-networks' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Silhouette score, Davies-Bouldin, and cluster metrics', slug: 'evaluation-metrics' },
    ],
    prevPage: { title: '1.1 Supervised Learning', slug: 'supervised-learning' },
    nextPage: { title: '1.3 Reinforcement Learning', slug: 'reinforcement-learning' },
  },
  {
    slug: 'reinforcement-learning',
    badge: '🎮 Page 1.3',
    title: 'Reinforcement Learning',
    description: 'Train intelligent agents that learn optimal behavior through trial and error. From game-playing AI to robotics and autonomous systems, master the paradigm that powers decision-making in dynamic environments.',
    accentColor: '#F59E0B',
    accentLight: '#FBBF24',
    metrics: [
      { value: 'AlphaGo', label: 'Beat World Champion' },
      { value: '$1B+', label: 'Robotics RL Market' },
      { value: '10^170', label: 'Go Game States Mastered' },
      { value: 'RLHF', label: 'Powers ChatGPT' },
    ],
    overview: {
      title: 'What is Reinforcement Learning?',
      subtitle: 'Learning through interaction and feedback',
      subsections: [
        {
          heading: 'Definition & Core Concept',
          paragraphs: [
            'Reinforcement Learning (RL) is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. Unlike supervised learning with labeled examples, the agent discovers optimal behavior through trial and error, receiving rewards or penalties for its actions.',
            'The agent\'s goal is to learn a policy—a mapping from states to actions—that maximizes cumulative reward over time. This involves balancing exploration (trying new actions to discover their effects) with exploitation (using known good actions to maximize reward).',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'RL excels in sequential decision-making problems where the optimal action depends on the current state and future consequences. It powers game-playing AI (AlphaGo, OpenAI Five), robotic control, recommendation systems, and increasingly, fine-tuning large language models through RLHF (Reinforcement Learning from Human Feedback).',
          ],
        },
        {
          heading: 'Key Challenges',
          paragraphs: [
            'RL faces unique challenges: sparse rewards make learning slow, the credit assignment problem (which action caused the reward?), sample inefficiency requiring millions of interactions, and the difficulty of designing good reward functions that capture intended behavior without unintended shortcuts.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Core Components',
      subtitle: 'The fundamental building blocks of reinforcement learning',
      columns: 2,
      cards: [
        {
          className: 'agent',
          borderColor: '#3B82F6',
          icon: '🤖',
          title: 'Agent',
          description: 'The learner and decision-maker. Observes state, selects actions, and learns from rewards to improve its policy over time.',
          examples: ['Robot controller', 'Game-playing AI', 'Trading algorithm', 'Recommendation engine'],
        },
        {
          className: 'environment',
          borderColor: '#10B981',
          icon: '🌍',
          title: 'Environment',
          description: 'The world the agent interacts with. Receives actions, transitions between states, and provides observations and rewards.',
          examples: ['Game simulator', 'Physical robot world', 'Stock market', 'Network traffic system'],
        },
        {
          className: 'reward',
          borderColor: '#8B5CF6',
          icon: '🏆',
          title: 'Reward Signal',
          description: 'Numerical feedback indicating how good an action was. The agent\'s objective is to maximize cumulative reward over time.',
          examples: ['+1 for winning, -1 for losing', 'Score increase in games', 'Profit from trades', 'User engagement metrics'],
        },
        {
          className: 'concept-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Reinforcement Learning',
          description: 'Train intelligent agents that learn optimal behavior through trial and error. From game-playing AI to robotics and autonomous systems, master the paradigm that powers decision-making in dynamic enviro',
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
        { icon: '📌', title: 'What is Reinforcement Learning?', subtitle: '', description: 'Learning through interaction and feedback', tags: [] },
        { icon: '📌', title: 'Core Components', subtitle: '', description: 'The fundamental building blocks of reinforcement learning', tags: [] },
        { icon: '📌', title: 'The RL Loop', subtitle: '', description: 'Agent-environment interaction cycle', tags: [] },
        { icon: '📌', title: 'RL Algorithm Categories', subtitle: '', description: 'Major approaches to reinforcement learning', tags: [] },
        { icon: '📌', title: 'Tools & Frameworks', subtitle: '', description: 'Essential tools for reinforcement learning', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for successful RL projects', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for reinforcement learning', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools for reinforcement learning',
      items: [
        { icon: '🏋️', name: 'Gymnasium', vendor: 'Farama Foundation', description: 'The standard API for RL environments. Successor to OpenAI Gym with improved maintenance and features.', tags: ['Environments', 'Standard API', 'Atari/MuJoCo'] },
        { icon: '🚀', name: 'Stable Baselines3', vendor: 'DLR-RM', description: 'Reliable implementations of RL algorithms. PPO, A2C, SAC, TD3, DQN with consistent API and good defaults.', tags: ['PyTorch', 'Production-Ready', 'Well-Tested'] },
        { icon: '☁️', name: 'Ray RLlib', vendor: 'Anyscale', description: 'Scalable RL library for distributed training. Supports multi-agent RL and integrates with Ray ecosystem.', tags: ['Distributed', 'Multi-Agent', 'Scalable'] },
        { icon: '🎮', name: 'Unity ML-Agents', vendor: 'Unity Technologies', description: 'Train agents in Unity game engine. Great for robotics simulation, game AI, and 3D environments.', tags: ['Game Dev', '3D Simulation', 'Visual'] },
        { icon: '🤖', name: 'MuJoCo', vendor: 'DeepMind', description: 'Physics engine for robotics and biomechanics. Now free and open-source. Standard for continuous control.', tags: ['Physics', 'Robotics', 'Free'] },
        { icon: '🦾', name: 'TRL', vendor: 'Hugging Face', description: 'Transformer Reinforcement Learning. PPO for LLMs, RLHF training, reward modeling for fine-tuning.', tags: ['RLHF', 'LLM Training', 'HuggingFace'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for successful RL projects',
      doItems: [
        'Start with simple environments before complex ones',
        'Normalize observations and rewards',
        'Use frame stacking for visual inputs',
        'Monitor training with TensorBoard/W&B',
        'Test with multiple random seeds',
        'Use well-tested implementations (Stable Baselines3)',
        'Carefully design reward functions—they define behavior',
        'Consider curriculum learning for hard tasks',
      ],
      dontItems: [
        'Don\'t expect fast convergence—RL is sample-hungry',
        'Avoid sparse rewards when possible',
        'Don\'t ignore reward hacking and shortcuts',
        'Never deploy without extensive testing',
        'Don\'t tune hyperparameters on a single seed',
        'Avoid complex custom environments initially',
        'Don\'t underestimate the importance of exploration',
        'Never assume sim-to-real transfer is easy',
      ],
    },
    agent: {
      avatar: '🎮',
      name: 'RLTrainerAgent',
      role: 'Reinforcement Learning Specialist',
      description: 'Expert in designing, training, and deploying RL agents. Automates environment setup, algorithm selection, hyperparameter tuning, and reward shaping for optimal agent performance.',
      capabilities: [
        'Environment design and reward engineering',
        'Algorithm selection (DQN vs PPO vs SAC)',
        'Hyperparameter optimization for RL',
        'Training monitoring and early stopping',
        'Policy evaluation and A/B testing',
        'Sim-to-real transfer strategies',
      ],
      codeFilename: 'Agent Definition\n                        Training Task\n                        rl_trainer_agent.py',
      code: `# rl_trainer_agent.py - RL Training Agent
from crewai import Agent, Task, Crew
from stable_baselines3 import PPO, SAC
import gymnasium as gym

rl_trainer = Agent(
    role="Reinforcement Learning Trainer",
    goal="Train optimal agents for decision-making tasks",
    backstory="""Expert in RL algorithms with deep 
    knowledge of PPO, SAC, and model-based methods. 
    Specializes in reward shaping and hyperparameter 
    optimization for sample-efficient learning.""",
    tools=[
        EnvironmentBuilder(),
        RewardDesigner(),
        AlgorithmSelector(),
        HyperparamTuner(),
        PolicyEvaluator(),
    ]
)

training_task = Task(
    description="""
    1. Analyze task requirements and design environment
    2. Engineer reward function with shaping
    3. Select appropriate algorithm (PPO/SAC/DQN)
    4. Tune hyperparameters with Optuna
    5. Train with curriculum learning if needed
    6. Evaluate policy across multiple seeds
    7. Export trained model for deployment
    """,
    agent=rl_trainer,
    expected_output="Trained agent with >90% success rate"
)

# Execute RL training pipeline
crew = Crew(agents=[rl_trainer], tasks=[training_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.4', title: 'Neural Networks', description: 'Deep networks that power modern RL algorithms', slug: 'neural-networks' },
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Foundation for behavior cloning and imitation', slug: 'supervised-learning' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Cumulative reward and policy evaluation', slug: 'evaluation-metrics' },
    ],
    prevPage: { title: '1.2 Unsupervised Learning', slug: 'unsupervised-learning' },
    nextPage: { title: '1.4 Neural Network Architectures', slug: 'neural-networks' },
  },
  {
    slug: 'neural-networks',
    badge: '🔮 Page 1.4',
    title: 'Neural Network Architectures',
    description: 'Deep dive into the building blocks of modern AI. From CNNs for computer vision to Transformers powering LLMs, understand the architectures that have revolutionized artificial intelligence.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '175B', label: 'GPT-3 Parameters' },
      { value: '2017', label: 'Transformer Revolution' },
      { value: '98%+', label: 'ImageNet Accuracy' },
      { value: '4', label: 'Major Architecture Types' },
    ],
    overview: {
      title: 'Understanding Neural Networks',
      subtitle: 'The foundation of deep learning',
      subsections: [
        {
          heading: 'What Are Neural Networks?',
          paragraphs: [
            'Neural networks are computational models inspired by the human brain, consisting of interconnected layers of nodes (neurons) that process information. Each neuron applies a weighted sum of inputs followed by a non-linear activation function, enabling networks to learn complex patterns from data.',
            'Deep learning emerged when researchers discovered that stacking many layers ("deep" networks) with proper training techniques could learn hierarchical representations—from simple edges to complex objects in images, or from characters to semantic meaning in text.',
          ],
        },
        {
          heading: 'Why Architecture Matters',
          paragraphs: [
            'Different architectures excel at different tasks. CNNs exploit spatial structure in images through convolutions. RNNs model sequential dependencies through recurrence. Transformers use attention mechanisms to process all positions simultaneously, enabling massive parallelization and capturing long-range dependencies.',
          ],
        },
        {
          heading: 'The Modern Landscape',
          paragraphs: [
            'Today\'s AI is dominated by Transformers—the architecture behind GPT, BERT, and virtually all large language models. However, CNNs remain crucial for vision, and hybrid architectures like Vision Transformers (ViT) blur the boundaries between approaches.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Major Architecture Types',
      subtitle: 'The four foundational neural network architectures',
      columns: 2,
      cards: [
        {
          className: 'cnn',
          borderColor: '#3B82F6',
          icon: '🖼️',
          title: 'CNN - Convolutional Neural Network',
          description: 'Designed for grid-like data (images, time series). Uses convolution operations to detect local patterns, pooling to reduce dimensions, and builds hierarchical features from edges to objects.',
          examples: ['Image classification & object detection', 'Medical imaging analysis', 'Autonomous vehicle perception', 'Facial recognition systems'],
        },
        {
          className: 'rnn',
          borderColor: '#10B981',
          icon: '📝',
          title: 'RNN / LSTM / GRU',
          description: 'Process sequential data by maintaining hidden state across time steps. LSTMs and GRUs add gating mechanisms to handle long-term dependencies and avoid vanishing gradients.',
          examples: ['Time series forecasting', 'Speech recognition', 'Language modeling (pre-Transformer)', 'Music generation'],
        },
        {
          className: 'transformer',
          borderColor: '#8B5CF6',
          icon: '🔮',
          title: 'Transformer',
          description: 'Revolutionary architecture using self-attention to process all positions in parallel. Enables massive scaling and captures long-range dependencies. Powers GPT, BERT, and all modern LLMs.',
          examples: ['Large Language Models (GPT, Claude)', 'Machine translation', 'Vision Transformers (ViT)', 'Multi-modal models (CLIP, DALL-E)'],
        },
        {
          className: 'gan',
          borderColor: '#F59E0B',
          icon: '🎨',
          title: 'GAN / Diffusion',
          description: 'GANs use adversarial training (generator vs discriminator). Diffusion models learn to denoise, enabling high-quality image generation. Both revolutionized generative AI.',
          examples: ['Image generation (DALL-E, Midjourney)', 'Video synthesis', 'Style transfer', 'Data augmentation'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'Understanding Neural Networks', subtitle: '', description: 'The foundation of deep learning', tags: [] },
        { icon: '📌', title: 'Major Architecture Types', subtitle: '', description: 'The four foundational neural network architectures', tags: [] },
        { icon: '📌', title: 'Common Layer Types', subtitle: '', description: 'Building blocks of neural network architectures', tags: [] },
        { icon: '📌', title: 'Transformer Architecture', subtitle: '', description: 'The architecture powering modern AI', tags: [] },
        { icon: '📌', title: 'Tools & Frameworks', subtitle: '', description: 'Essential tools for building neural networks', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective neural network design', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for neural network architecture', tags: [] },
        { icon: '📌', title: 'Related Pages', subtitle: '', description: 'Continue learning with these related topics', tags: [] },
      ],
    },
    tools: {
      title: 'Tools & Frameworks',
      subtitle: 'Essential tools for building neural networks',
      items: [
        { icon: '🔥', name: 'PyTorch', vendor: 'Meta AI', description: 'Dynamic computation graphs, Pythonic API. Dominant in research, growing in production. Powers most LLM development.', tags: ['Research', 'Dynamic', 'LLMs'] },
        { icon: '🧠', name: 'TensorFlow', vendor: 'Google', description: 'Production-ready with TF Serving, TFLite for mobile, TPU support. Keras provides high-level API.', tags: ['Production', 'Mobile', 'TPU'] },
        { icon: '🤗', name: 'Transformers', vendor: 'Hugging Face', description: 'Pre-trained models hub. Easy fine-tuning, model cards, pipelines. The go-to for NLP and increasingly vision.', tags: ['Pre-trained', 'Fine-tuning', 'Hub'] },
        { icon: '⚡', name: 'JAX', vendor: 'Google', description: 'NumPy-like API with autodiff and XLA compilation. Powers Google\'s largest models (Gemini).', tags: ['XLA', 'Functional', 'Google Scale'] },
        { icon: '🚀', name: 'Lightning', vendor: 'Lightning AI', description: 'PyTorch wrapper for organized code. Handles distributed training, logging, checkpointing automatically.', tags: ['PyTorch', 'Organized', 'Distributed'] },
        { icon: '🔧', name: 'ONNX', vendor: 'Open Standard', description: 'Open format for ML models. Convert between frameworks, optimize for inference, deploy anywhere.', tags: ['Interop', 'Deployment', 'Standard'] },
      ],
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Guidelines for effective neural network design',
      doItems: [
        'Start with proven architectures (ResNet, BERT, GPT)',
        'Use pre-trained models and fine-tune when possible',
        'Apply proper normalization (BatchNorm, LayerNorm)',
        'Use learning rate scheduling (warmup, cosine decay)',
        'Monitor training with TensorBoard/W&B',
        'Implement gradient clipping for stability',
        'Use mixed precision training (fp16/bf16) for speed',
        'Validate architecture on small data first',
      ],
      dontItems: [
        'Don\'t design from scratch without good reason',
        'Avoid training without normalization layers',
        'Never use a constant learning rate for Transformers',
        'Don\'t ignore vanishing/exploding gradients',
        'Avoid overly deep networks without residuals',
        'Don\'t skip proper weight initialization',
        'Never train on full data without validation splits',
        'Don\'t use Sigmoid/Tanh hidden activations (use ReLU/GELU)',
      ],
    },
    agent: {
      avatar: '🔮',
      name: 'NeuralArchitect',
      role: 'Deep Learning Architecture Specialist',
      description: 'Expert in designing, implementing, and optimizing neural network architectures. Automates architecture search, hyperparameter tuning, and provides optimization recommendations for training and inference.',
      capabilities: [
        'Architecture selection (CNN vs Transformer vs hybrid)',
        'Layer configuration and sizing optimization',
        'Training hyperparameter tuning',
        'Memory and compute optimization',
        'Model compression (pruning, quantization)',
        'Deployment optimization (ONNX, TensorRT)',
      ],
      codeFilename: 'Agent Definition\n                        Architecture Task\n                        neural_architect.py',
      code: `# neural_architect.py - Neural Architecture Agent
from crewai import Agent, Task, Crew
import torch.nn as nn
from transformers import AutoModel

neural_architect = Agent(
    role="Neural Network Architect",
    goal="Design optimal architectures for ML tasks",
    backstory="""Expert in CNN, Transformer, and hybrid 
    architectures. Deep knowledge of attention mechanisms,
    normalization, and optimization techniques. Specializes
    in efficient model design and deployment.""",
    tools=[
        ArchitectureAnalyzer(),
        LayerOptimizer(),
        MemoryProfiler(),
        TrainingConfigurer(),
        ModelCompressor(),
    ]
)

design_task = Task(
    description="""
    1. Analyze task requirements and data characteristics
    2. Select base architecture (pretrained if available)
    3. Configure layers, attention, and normalization
    4. Optimize for target hardware constraints
    5. Set up training config (LR, batch size, scheduler)
    6. Profile memory and compute requirements
    7. Generate deployment-ready model code
    """,
    agent=neural_architect,
    expected_output="Optimized architecture with training config"
)

# Execute architecture design
crew = Crew(agents=[neural_architect], tasks=[design_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.7', title: 'ML Frameworks', description: 'PyTorch, TensorFlow, JAX comparison', slug: 'ml-frameworks' },
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Training neural networks with labels', slug: 'supervised-learning' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Measuring model performance', slug: 'evaluation-metrics' },
    ],
    prevPage: { title: '1.3 Reinforcement Learning', slug: 'reinforcement-learning' },
    nextPage: { title: '1.5 ML Pipeline & Workflow', slug: 'ml-pipeline' },
  },
  {
    slug: 'ml-pipeline',
    badge: '⚙️ Page 1.5',
    title: 'ML Pipeline & Workflow',
    description: 'Master the end-to-end machine learning lifecycle from data preparation to production deployment. Learn how to build reproducible, scalable, and maintainable ML systems that deliver value in real-world applications.',
    accentColor: '#10B981',
    accentLight: '#34D399',
    metrics: [
      { value: '87%', label: 'ML Projects Never Reach Production' },
      { value: '6', label: 'Core Pipeline Stages' },
      { value: '70%', label: 'Time Spent on Data Prep' },
      { value: '∞', label: 'Iterations Required' },
    ],
    overview: {
      title: 'What is an ML Pipeline?',
      subtitle: 'Understanding the end-to-end machine learning workflow',
      subsections: [
        {
          heading: 'Definition & Purpose',
          paragraphs: [
            'An ML pipeline is a series of automated steps that transform raw data into deployed models and predictions. It encompasses everything from data collection and preprocessing through model training, evaluation, deployment, and monitoring. A well-designed pipeline ensures reproducibility, scalability, and maintainability.',
            'Unlike ad-hoc experimentation, production ML requires systematic workflows that can be version-controlled, tested, and automated. Pipelines make it possible to iterate quickly, deploy reliably, and maintain models over time as data and requirements evolve.',
          ],
        },
        {
          heading: 'Why Pipelines Matter',
          paragraphs: [
            'Most ML projects fail to reach production—not because of algorithmic challenges, but due to engineering problems. Pipelines address common issues: unreproducible experiments, manual deployment processes, data quality degradation, and model performance decay. They bridge the gap between data science notebooks and production systems.',
          ],
        },
        {
          heading: 'The Reality of ML Work',
          paragraphs: [
            'Data scientists spend roughly 70% of their time on data preparation—not model building. This makes data pipelines and feature engineering crucial. Production systems also require continuous monitoring, retraining, and governance that far exceed initial model development effort.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Pipeline Stages in Detail',
      subtitle: 'What happens at each stage of the ML workflow',
      columns: 2,
      cards: [
        {
          className: 'stage-0',
          borderColor: '#3B82F6',
          icon: '1',
          title: 'Data Collection',
          description: 'Gather raw data from various sources into a centralized location.',
          examples: ['Connect to data sources (DBs, APIs, files)', 'Set up ingestion pipelines', 'Handle batch and streaming data', 'Validate data schemas', 'Implement data versioning'],
        },
        {
          className: 'stage-1',
          borderColor: '#10B981',
          icon: '2',
          title: 'Data Preparation',
          description: 'Clean, transform, and engineer features from raw data.',
          examples: ['Handle missing values', 'Remove duplicates and outliers', 'Feature engineering', 'Normalization/scaling', 'Train/validation/test split'],
        },
        {
          className: 'stage-2',
          borderColor: '#8B5CF6',
          icon: '3',
          title: 'Model Training',
          description: 'Select algorithms and train models on prepared data.',
          examples: ['Algorithm selection', 'Hyperparameter tuning', 'Cross-validation', 'Experiment tracking', 'Model versioning'],
        },
        {
          className: 'stage-3',
          borderColor: '#F59E0B',
          icon: '4',
          title: 'Model Evaluation',
          description: 'Assess model performance and readiness for production.',
          examples: ['Calculate performance metrics', 'Error analysis', 'Bias and fairness checks', 'Compare to baselines', 'Business metric alignment'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'What is an ML Pipeline?', subtitle: '', description: 'Understanding the end-to-end machine learning workflow', tags: [] },
        { icon: '📌', title: 'ML Pipeline Stages', subtitle: '', description: 'The complete machine learning workflow', tags: [] },
        { icon: '📌', title: 'Pipeline Stages in Detail', subtitle: '', description: 'What happens at each stage of the ML workflow', tags: [] },
        { icon: '📌', title: 'Pipeline Tools by Stage', subtitle: '', description: 'Popular tools for each pipeline stage', tags: [] },
        { icon: '📌', title: 'MLOps Practices', subtitle: '', description: 'Operationalizing machine learning at scale', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for production ML pipelines', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for ML pipelines', tags: [] },
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
      subtitle: 'Guidelines for production ML pipelines',
      doItems: [
        'Version everything: data, code, models, configs',
        'Automate pipelines—manual steps don\'t scale',
        'Test data quality as rigorously as code',
        'Use feature stores to prevent training-serving skew',
        'Implement comprehensive logging and monitoring',
        'Plan for model retraining from day one',
        'Document data lineage and model decisions',
        'Start simple and iterate—avoid over-engineering',
      ],
      dontItems: [
        'Don\'t skip data validation—bad data in = bad models out',
        'Avoid training-serving skew (different preprocessing)',
        'Never deploy without rollback capability',
        'Don\'t ignore model decay—performance degrades over time',
        'Avoid "notebook to production" without refactoring',
        'Don\'t hardcode paths, credentials, or configurations',
        'Never assume data distributions stay constant',
        'Don\'t neglect documentation and reproducibility',
      ],
    },
    agent: {
      avatar: '⚙️',
      name: 'MLOpsAgent',
      role: 'Pipeline & Operations Specialist',
      description: 'Expert in building and maintaining production ML systems. Automates pipeline creation, monitoring setup, and troubleshooting. Specializes in MLOps best practices and tool selection.',
      capabilities: [
        'Pipeline architecture design',
        'Tool selection and integration',
        'CI/CD pipeline setup',
        'Monitoring and alerting configuration',
        'Drift detection implementation',
        'Automated retraining workflows',
      ],
      codeFilename: 'Agent Definition\n                        Pipeline Task\n                        mlops_agent.py',
      code: `# mlops_agent.py - ML Pipeline Agent
from crewai import Agent, Task, Crew
import mlflow
from prefect import flow, task

mlops_agent = Agent(
    role="MLOps Engineer",
    goal="Build production-ready ML pipelines",
    backstory="""Expert in ML infrastructure, 
    pipeline orchestration, and production systems. 
    Specializes in reproducible, scalable workflows.""",
    tools=[
        PipelineBuilder(),
        DataValidator(),
        ModelRegistry(),
        MonitoringSetup(),
        DriftDetector(),
    ]
)

pipeline_task = Task(
    description="""
    1. Analyze existing workflow and data sources
    2. Design pipeline architecture (DAG)
    3. Implement data validation checks
    4. Set up experiment tracking (MLflow)
    5. Configure model registry with versioning
    6. Deploy monitoring and alerting
    7. Document pipeline and create runbooks
    """,
    agent=mlops_agent,
    expected_output="Production-ready ML pipeline"
)

# Execute pipeline creation
crew = Crew(agents=[mlops_agent], tasks=[pipeline_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.7', title: 'ML Frameworks', description: 'PyTorch, TensorFlow, and training tools', slug: 'ml-frameworks' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Measuring model performance', slug: 'evaluation-metrics' },
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Core ML training techniques', slug: 'supervised-learning' },
    ],
    prevPage: { title: '1.4 Neural Network Architectures', slug: 'neural-networks' },
    nextPage: { title: '1.6 Algorithm Selection Guide', slug: 'algorithm-selection' },
  },
  {
    slug: 'algorithm-selection',
    badge: '🎯 Page 1.6',
    title: 'Algorithm Selection Guide',
    description: 'Navigate the complex landscape of ML algorithms with confidence. Learn systematic approaches to choose the right algorithm based on your data characteristics, problem requirements, and operational constraints.',
    accentColor: '#EC4899',
    accentLight: '#F472B6',
    metrics: [
      { value: '50+', label: 'Common ML Algorithms' },
      { value: '5', label: 'Key Decision Factors' },
      { value: '80%', label: 'Problems Solved by 10 Algos' },
      { value: '∞', label: 'No Free Lunch Theorem' },
    ],
    overview: {
      title: 'The Algorithm Selection Problem',
      subtitle: 'Why choosing the right algorithm matters',
      subsections: [
        {
          heading: 'No Free Lunch Theorem',
          paragraphs: [
            'The "No Free Lunch" theorem states that no single algorithm works best for every problem. An algorithm that excels on one type of data may perform poorly on another. This means algorithm selection is not about finding the "best" algorithm—it\'s about finding the best algorithm for YOUR specific problem.',
            'Algorithm selection depends on multiple factors: your data characteristics (size, dimensionality, quality), problem type (classification, regression, clustering), performance requirements (accuracy vs speed), and operational constraints (interpretability, deployment environment).',
          ],
        },
        {
          heading: 'The 80/20 Rule of Algorithms',
          paragraphs: [
            'While there are hundreds of ML algorithms, roughly 10-15 core algorithms solve 80% of real-world problems. Mastering these "workhorse" algorithms—linear models, tree ensembles, neural networks, and key clustering methods—provides a solid foundation for most ML challenges.',
          ],
        },
        {
          heading: 'Start Simple, Then Iterate',
          paragraphs: [
            'Always start with simple baselines (logistic regression, decision tree) before trying complex models. Simple models train faster, are easier to debug, and often perform surprisingly well. Only move to complex models when simple ones demonstrably fail.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Key Decision Factors',
      subtitle: 'Questions to guide your algorithm selection',
      columns: 2,
      cards: [
        {
          className: 'decision-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: '',
          description: '',
          examples: ['< 1,000 samples\n                            → Simple models, avoid deep learning', '1K - 100K samples\n                            → Tree ensembles, SVM, small NNs', '100K - 1M samples\n                            → Gradient boosting, neural networks', '> 1M samples\n                            → Deep learning shines here'],
        },
        {
          className: 'decision-1',
          borderColor: '#10B981',
          icon: '💡',
          title: '',
          description: '',
          examples: ['< 10 features\n                            → Any algorithm works', '10 - 100 features\n                            → Tree models, linear + regularization', '100 - 10K features\n                            → Regularization critical, consider PCA', '> 10K features (sparse)\n                            → Linear models, naive bayes'],
        },
        {
          className: 'decision-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: '',
          description: '',
          examples: ['Maximum accuracy\n                            → Ensembles, neural networks', 'Interpretability\n                            → Linear models, decision trees', 'Fast training\n                            → Linear models, naive bayes', 'Fast inference\n                            → Linear models, small trees'],
        },
        {
          className: 'decision-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: '',
          description: '',
          examples: ['Tabular/structured\n                            → XGBoost, Random Forest, linear', 'Images\n                            → CNNs, Vision Transformers', 'Text\n                            → Transformers, BERT, LLMs', 'Time series\n                            → LSTM, Prophet, XGBoost'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Comparison & Analysis',
      subtitle: 'Evaluating approaches and tools',
      cards: [
        { icon: '📌', title: 'The Algorithm Selection Problem', subtitle: '', description: 'Why choosing the right algorithm matters', tags: [] },
        { icon: '📌', title: 'Algorithm Selection Flowchart', subtitle: '', description: 'Navigate to the right algorithm for your problem', tags: [] },
        { icon: '📌', title: 'Key Decision Factors', subtitle: '', description: 'Questions to guide your algorithm selection', tags: [] },
        { icon: '📌', title: 'Key Trade-offs', subtitle: '', description: 'Understanding the fundamental tensions in algorithm selection', tags: [] },
        { icon: '📌', title: 'Algorithm Comparison Matrix', subtitle: '', description: 'Side-by-side comparison of popular algorithms', tags: [] },
        { icon: '📌', title: 'Common Scenarios', subtitle: '', description: 'Algorithm recommendations for typical use cases', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective algorithm selection', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for algorithm selection', tags: [] },
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
      subtitle: 'Guidelines for effective algorithm selection',
      doItems: [
        'Always start with a simple baseline (logistic regression, decision tree)',
        'Try multiple algorithms and compare systematically',
        'Use cross-validation to get reliable performance estimates',
        'Consider the full context: accuracy, speed, interpretability, maintenance',
        'Match algorithm to data type (XGBoost for tabular, CNNs for images)',
        'Factor in production constraints early (latency, memory, scaling)',
        'Use ensemble methods when accuracy is paramount',
        'Document why you chose each algorithm for future reference',
      ],
      dontItems: [
        'Don\'t jump straight to deep learning for small tabular datasets',
        'Avoid choosing algorithms based on hype rather than fit',
        'Don\'t ignore the "No Free Lunch" theorem—test, don\'t assume',
        'Never skip feature engineering for fancy algorithms',
        'Don\'t optimize prematurely—get something working first',
        'Avoid using interpretable models when black-box is fine',
        'Don\'t forget that simpler models are easier to maintain',
        'Never deploy without understanding failure modes',
      ],
    },
    agent: {
      avatar: '🎯',
      name: 'AlgorithmAdvisor',
      role: 'ML Algorithm Selection Specialist',
      description: 'Expert in analyzing problem requirements and recommending optimal algorithms. Evaluates data characteristics, performance constraints, and operational needs to suggest the best approach.',
      capabilities: [
        'Data profiling and characterization',
        'Algorithm recommendation based on constraints',
        'Automated baseline model generation',
        'Multi-algorithm comparison experiments',
        'Trade-off analysis and visualization',
        'Production readiness assessment',
      ],
      codeFilename: 'Agent Definition\n                        Selection Task\n                        algo_advisor.py',
      code: `# algo_advisor.py - Algorithm Selection Agent
from crewai import Agent, Task, Crew
from sklearn.model_selection import cross_val_score
import lazypredict

algo_advisor = Agent(
    role="Algorithm Selection Specialist",
    goal="Recommend optimal ML algorithms for the problem",
    backstory="""Expert in ML algorithm selection with 
    deep knowledge of trade-offs between accuracy, 
    speed, interpretability, and maintainability.""",
    tools=[
        DataProfiler(),
        AlgorithmBenchmarker(),
        TradeoffAnalyzer(),
        BaselineGenerator(),
        ComparisonVisualizer(),
    ]
)

selection_task = Task(
    description="""
    1. Profile dataset (size, features, types, quality)
    2. Identify problem type and constraints
    3. Generate baseline model performance
    4. Benchmark top 5 candidate algorithms
    5. Analyze trade-offs (accuracy vs speed vs interpretability)
    6. Recommend top 2 algorithms with justification
    7. Provide hyperparameter starting points
    """,
    agent=algo_advisor,
    expected_output="Ranked algorithm recommendations"
)

# Execute algorithm selection
crew = Crew(agents=[algo_advisor], tasks=[selection_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Deep dive into classification and regression', slug: 'supervised-learning' },
      { number: 'Page 1.7', title: 'ML Frameworks', description: 'Tools to implement your chosen algorithms', slug: 'ml-frameworks' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'How to compare algorithm performance', slug: 'evaluation-metrics' },
    ],
    prevPage: { title: '1.5 ML Pipeline & Workflow', slug: 'ml-pipeline' },
    nextPage: { title: '1.7 ML Frameworks & Tools', slug: 'ml-frameworks' },
  },
  {
    slug: 'ml-frameworks',
    badge: '🛠️ Page 1.7',
    title: 'ML Frameworks & Tools',
    description: 'Master the essential tools that power modern machine learning. From deep learning frameworks like PyTorch and TensorFlow to classical ML with scikit-learn, learn when and how to use each tool effectively.',
    accentColor: '#06B6D4',
    accentLight: '#22D3EE',
    metrics: [
      { value: 'PyTorch', label: '#1 Research Framework' },
      { value: 'TensorFlow', label: '#1 Production Framework' },
      { value: 'sklearn', label: 'Classical ML Standard' },
      { value: 'HF 🤗', label: 'LLM Ecosystem Leader' },
    ],
    overview: {
      title: 'The ML Framework Landscape',
      subtitle: 'Understanding your tool options',
      subsections: [
        {
          heading: 'Why Framework Choice Matters',
          paragraphs: [
            'Your choice of ML framework affects development speed, model performance, deployment options, and team productivity. Different frameworks excel at different tasks: PyTorch dominates research with its flexibility, TensorFlow powers production systems at scale, scikit-learn remains the go-to for classical ML, and Hugging Face has become essential for NLP and LLMs.',
          ],
        },
        {
          heading: 'The Great Convergence',
          paragraphs: [
            'PyTorch and TensorFlow have converged significantly. Both now support eager execution, both have production deployment options, and both integrate with the broader ecosystem. The "PyTorch vs TensorFlow" debate matters less than it used to—choose based on your team\'s expertise and specific requirements.',
          ],
        },
        {
          heading: 'Beyond the Big Frameworks',
          paragraphs: [
            'While PyTorch and TensorFlow get the headlines, specialized tools often matter more for specific tasks. XGBoost/LightGBM dominate tabular data competitions. JAX enables cutting-edge research with composable transformations. Hugging Face has become the de facto standard for working with pre-trained models.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Deep Learning Frameworks',
      subtitle: 'The core tools for neural network development',
      columns: 2,
      cards: [
        {
          className: 'framework-0',
          borderColor: '#3B82F6',
          icon: '💡',
          title: 'PyTorch',
          description: 'The dominant framework for ML research. Pythonic, flexible, and intuitive with dynamic computation graphs. Excellent debugging experience and growing production capabilities.',
          examples: ['Dynamic computation graphs (define-by-run)', 'Excellent debugging with standard Python tools', 'TorchScript for production deployment', 'Native distributed training support', 'Strong ecosystem (Lightning, torchvision)'],
        },
        {
          className: 'framework-1',
          borderColor: '#10B981',
          icon: '💡',
          title: 'TensorFlow',
          description: 'Google\'s end-to-end ML platform. Mature production deployment with TF Serving, TF Lite for mobile/edge, and TensorFlow.js for browsers. Keras provides high-level API.',
          examples: ['TF Serving for scalable model serving', 'TF Lite for mobile and edge devices', 'TensorFlow.js for browser deployment', 'Keras high-level API built-in', 'TensorBoard for visualization'],
        },
        {
          className: 'framework-2',
          borderColor: '#8B5CF6',
          icon: '💡',
          title: 'JAX',
          description: 'NumPy on steroids with automatic differentiation and XLA compilation. Composable function transformations (grad, jit, vmap, pmap) enable elegant, high-performance code.',
          examples: ['Composable transformations (grad, jit, vmap)', 'XLA compilation for performance', 'Functional programming paradigm', 'Excellent for TPU training', 'Powers cutting-edge research (AlphaFold)'],
        },
        {
          className: 'framework-3',
          borderColor: '#F59E0B',
          icon: '💡',
          title: 'Hugging Face',
          description: 'The GitHub of ML models. Transformers library provides unified API for 200K+ pre-trained models. Essential for NLP, LLMs, and increasingly multimodal AI.',
          examples: ['Transformers library with unified API', 'Model Hub with 500K+ pre-trained models', 'Datasets library for easy data loading', 'Accelerate for distributed training', 'PEFT for efficient fine-tuning (LoRA)'],
        },
      ],
    },
    hasSvgViz: true,
    algorithms: {
      type: 'card-grid',
      title: 'Framework Comparison',
      subtitle: 'Side-by-side feature comparison',
      cards: [
        { icon: '📌', title: 'The ML Framework Landscape', subtitle: '', description: 'Understanding your tool options', tags: [] },
        { icon: '📌', title: 'Deep Learning Frameworks', subtitle: '', description: 'The core tools for neural network development', tags: [] },
        { icon: '📌', title: 'Classical ML & Gradient Boosting', subtitle: '', description: 'Workhorses for tabular data and traditional ML', tags: [] },
        { icon: '📌', title: 'Framework Comparison', subtitle: '', description: 'Side-by-side feature comparison', tags: [] },
        { icon: '📌', title: 'Supporting Ecosystem', subtitle: '', description: 'Essential tools that complement the core frameworks', tags: [] },
        { icon: '📌', title: 'Framework Recommendations by Use Case', subtitle: '', description: 'Which framework for which task?', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for framework selection and usage', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for ML framework guidance', tags: [] },
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
      subtitle: 'Guidelines for framework selection and usage',
      doItems: [
        'Choose based on team expertise first—productivity trumps features',
        'Use scikit-learn for classical ML and baselines',
        'Leverage pre-trained models from Hugging Face when possible',
        'Consider deployment requirements early (mobile? edge? cloud?)',
        'Use experiment tracking from day one (MLflow, W&B)',
        'Learn PyTorch OR TensorFlow deeply before both',
        'Use high-level APIs (Lightning, Keras) to reduce boilerplate',
        'Profile and optimize only after correctness is verified',
      ],
      dontItems: [
        'Don\'t use deep learning frameworks for simple tabular problems',
        'Avoid framework switching mid-project without good reason',
        'Don\'t ignore the ecosystem—tools like W&B save huge amounts of time',
        'Never skip version pinning in requirements.txt',
        'Don\'t train from scratch when fine-tuning works',
        'Avoid premature optimization of training code',
        'Don\'t dismiss simpler tools—sklearn solves most problems',
        'Never deploy without testing inference in target environment',
      ],
    },
    agent: {
      avatar: '🛠️',
      name: 'MLToolsAdvisor',
      role: 'Framework & Tooling Specialist',
      description: 'Expert in ML frameworks, libraries, and tooling. Helps select the right tools for your project, debug framework-specific issues, and optimize training workflows.',
      capabilities: [
        'Framework selection based on requirements',
        'Code migration between frameworks',
        'Training optimization and debugging',
        'Deployment strategy recommendations',
        'Ecosystem tool integration',
        'Performance profiling guidance',
      ],
      codeFilename: 'Agent Definition\n                        Framework Task\n                        tools_advisor.py',
      code: `# tools_advisor.py - ML Framework Advisor Agent
from crewai import Agent, Task, Crew

ml_tools_advisor = Agent(
    role="ML Framework & Tools Specialist",
    goal="Recommend optimal ML tools and frameworks",
    backstory="""Expert in PyTorch, TensorFlow, JAX, 
    sklearn, and the broader ML ecosystem. Deep 
    knowledge of trade-offs and best practices.""",
    tools=[
        RequirementsAnalyzer(),
        FrameworkComparator(),
        CodeMigrator(),
        PerformanceProfiler(),
        DeploymentPlanner(),
    ]
)

framework_task = Task(
    description="""
    1. Analyze project requirements and constraints
    2. Evaluate team expertise and learning curve
    3. Consider deployment targets (cloud/edge/mobile)
    4. Assess ecosystem needs (tracking, serving, etc.)
    5. Recommend primary framework with justification
    6. Suggest complementary tools (tracking, tuning)
    7. Provide starter code template
    """,
    agent=ml_tools_advisor,
    expected_output="Framework recommendation with rationale"
)

# Execute framework recommendation
crew = Crew(agents=[ml_tools_advisor], tasks=[framework_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.4', title: 'Neural Networks', description: 'Deep dive into architectures these frameworks implement', slug: 'neural-networks' },
      { number: 'Page 1.5', title: 'ML Pipeline', description: 'How frameworks fit into the broader workflow', slug: 'ml-pipeline' },
      { number: 'Page 1.8', title: 'Evaluation Metrics', description: 'Measuring model performance across frameworks', slug: 'evaluation-metrics' },
    ],
    prevPage: { title: '1.6 Algorithm Selection Guide', slug: 'algorithm-selection' },
    nextPage: { title: '1.8 Evaluation Metrics', slug: 'evaluation-metrics' },
  },
  {
    slug: 'evaluation-metrics',
    badge: '📈 Page 1.8',
    title: 'Evaluation Metrics',
    description: 'Master the art of measuring model performance. Learn when to use accuracy vs F1-score, why RMSE isn\'t always the answer, and how to choose metrics that align with business objectives. The right metric can mean the difference between success and failure.',
    accentColor: '#8B5CF6',
    accentLight: '#A78BFA',
    metrics: [
      { value: '20+', label: 'Common ML Metrics' },
      { value: '≠', label: 'Accuracy ≠ Success' },
      { value: 'F1', label: 'Balances Precision/Recall' },
      { value: 'AUC', label: 'Threshold-Independent' },
    ],
    overview: {
      title: 'Why Metrics Matter',
      subtitle: 'Choosing the right measure of success',
      subsections: [
        {
          heading: 'The Metric Selection Problem',
          paragraphs: [
            'Your choice of evaluation metric fundamentally shapes what your model learns to optimize. A spam filter optimized for accuracy might let spam through; optimized for recall, it might block legitimate emails. The "best" metric depends entirely on your business context and the relative costs of different errors.',
          ],
        },
        {
          heading: 'The Accuracy Trap',
          paragraphs: [
            'Accuracy is the most intuitive metric but often the most misleading. In a fraud detection system where 99.9% of transactions are legitimate, a model that always predicts "not fraud" achieves 99.9% accuracy while being completely useless. This is why understanding class imbalance and alternative metrics is crucial.',
          ],
        },
        {
          heading: 'Business Alignment',
          paragraphs: [
            'Technical metrics (F1, AUC-ROC) must ultimately connect to business outcomes (revenue, user satisfaction, cost savings). A 2% improvement in precision might save millions in fraud losses or mean nothing at all—context determines value. Always translate ML metrics into business impact.',
          ],
        },
      ],
    },
    concepts: {
      title: 'Classification Metrics',
      subtitle: 'Measuring categorical prediction performance',
      columns: 2,
      cards: [
        {
          className: 'metric-0',
          borderColor: '#3B82F6',
          icon: '🎯',
          title: 'Accuracy',
          description: 'Percentage of correct predictions. Simple and intuitive but misleading for imbalanced datasets. A 99% accurate fraud detector might catch zero fraud.',
          examples: [],
        },
        {
          className: 'metric-1',
          borderColor: '#10B981',
          icon: '🔵',
          title: 'Precision',
          description: 'Of all positive predictions, how many were correct? High precision means few false alarms. Critical when false positives are costly (spam filter blocking important emails).',
          examples: [],
        },
        {
          className: 'metric-2',
          borderColor: '#8B5CF6',
          icon: '🟠',
          title: 'Recall (Sensitivity)',
          description: 'Of all actual positives, how many did we catch? High recall means few missed cases. Critical when false negatives are dangerous (disease screening, fraud detection).',
          examples: [],
        },
        {
          className: 'metric-3',
          borderColor: '#F59E0B',
          icon: '⚖️',
          title: 'F1-Score',
          description: 'Balances precision and recall into a single metric. Penalizes extreme values—you can\'t get a high F1 by sacrificing one for the other. The go-to metric for imbalanced datasets.',
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
        { icon: '📌', title: 'Why Metrics Matter', subtitle: '', description: 'Choosing the right measure of success', tags: [] },
        { icon: '📌', title: 'The Confusion Matrix', subtitle: '', description: 'Foundation of classification metrics', tags: [] },
        { icon: '📌', title: 'Classification Metrics', subtitle: '', description: 'Measuring categorical prediction performance', tags: [] },
        { icon: '📌', title: 'Regression Metrics', subtitle: '', description: 'Measuring continuous prediction performance', tags: [] },
        { icon: '📌', title: 'Other Important Metrics', subtitle: '', description: 'Clustering, ranking, and specialized metrics', tags: [] },
        { icon: '📌', title: 'When to Use What', subtitle: '', description: 'Metric selection by business scenario', tags: [] },
        { icon: '📌', title: 'Best Practices', subtitle: '', description: 'Guidelines for effective model evaluation', tags: [] },
        { icon: '📌', title: 'Agent This', subtitle: '', description: 'AI-powered assistant for model evaluation', tags: [] },
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
      subtitle: 'Guidelines for effective model evaluation',
      doItems: [
        'Choose metrics that align with business objectives',
        'Use multiple metrics—no single metric tells the whole story',
        'Always establish a baseline (random, majority class, simple model)',
        'Report confidence intervals, not just point estimates',
        'Use stratified splits for imbalanced datasets',
        'Consider the cost matrix—weight errors by business impact',
        'Validate on truly held-out data (time-based for time series)',
        'Document your choice of metrics and thresholds',
      ],
      dontItems: [
        'Don\'t use accuracy for imbalanced datasets',
        'Never evaluate on training data',
        'Avoid optimizing for a metric that doesn\'t match business goals',
        'Don\'t ignore calibration when probabilities matter',
        'Never compare models using different train/test splits',
        'Don\'t report metrics without context (baseline, variance)',
        'Avoid "metric hacking"—gaming the metric without real improvement',
        'Never deploy without testing on realistic, recent data',
      ],
    },
    agent: {
      avatar: '📈',
      name: 'EvaluationAgent',
      role: 'Model Performance Specialist',
      description: 'Expert in model evaluation, metric selection, and performance analysis. Helps choose the right metrics for your business context, interprets results, and identifies model weaknesses.',
      capabilities: [
        'Metric selection based on business context',
        'Comprehensive evaluation report generation',
        'Error analysis and failure mode identification',
        'Threshold optimization for classification',
        'Cross-validation strategy design',
        'Statistical significance testing',
      ],
      codeFilename: 'Agent Definition\n                        Evaluation Task\n                        eval_agent.py',
      code: `# eval_agent.py - Model Evaluation Agent
from crewai import Agent, Task, Crew
from sklearn.metrics import classification_report
import numpy as np

evaluation_agent = Agent(
    role="Model Evaluation Specialist",
    goal="Provide comprehensive model performance analysis",
    backstory="""Expert in ML metrics, statistical 
    testing, and translating model performance into 
    business impact. Deep knowledge of evaluation 
    pitfalls and best practices.""",
    tools=[
        MetricCalculator(),
        ConfusionMatrixAnalyzer(),
        ThresholdOptimizer(),
        ErrorAnalyzer(),
        StatisticalTester(),
    ]
)

evaluation_task = Task(
    description="""
    1. Calculate all relevant metrics for the problem type
    2. Generate confusion matrix and error analysis
    3. Identify optimal threshold (if classification)
    4. Analyze errors by segment/feature
    5. Compare to baseline and previous models
    6. Test for statistical significance
    7. Translate metrics to business impact
    8. Generate actionable recommendations
    """,
    agent=evaluation_agent,
    expected_output="Comprehensive evaluation report"
)

# Execute model evaluation
crew = Crew(agents=[evaluation_agent], tasks=[evaluation_task])
result = crew.kickoff()`,
    },
    relatedPages: [
      { number: 'Page 1.1', title: 'Supervised Learning', description: 'Where most of these metrics apply', slug: 'supervised-learning' },
      { number: 'Page 1.6', title: 'Algorithm Selection', description: 'Use metrics to compare algorithms', slug: 'algorithm-selection' },
      { number: 'Page 1.5', title: 'ML Pipeline', description: 'Where evaluation fits in the workflow', slug: 'ml-pipeline' },
    ],
    prevPage: { title: '1.7 ML Frameworks & Tools', slug: 'ml-frameworks' },
    nextPage: undefined,
  },
]

registerPages('aiml-foundations', pages)
export default pages
