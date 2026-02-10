#!/usr/bin/env node
/**
 * Generate TypeScript data files for all 29 categories.
 * Run: node scripts/generate-data.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'src', 'data')

// All 29 categories with their pages (extracted from categories.ts)
const cats = [
  {
    id: 1, slug: 'aiml-foundations', title: 'AI/ML Foundations',
    agent: { emoji: '🤖', name: 'MLEngineerAgent', role: 'Model Development Specialist', description: 'Expert in ML pipeline design, model selection, and deployment strategies', capabilities: ['Model Selection', 'Feature Engineering', 'Hyperparameter Tuning', 'Pipeline Orchestration'] },
    pages: [
      { pn: 1, title: 'Supervised Learning', slug: 'supervised-learning', desc: 'Classification, regression, and prediction from labeled data', tags: ['Classification', 'Regression', 'XGBoost', 'Neural Networks'],
        overview: 'Supervised learning is the most widely used paradigm in machine learning, where models learn from labeled training data to make predictions on unseen examples. It encompasses classification (predicting categories) and regression (predicting continuous values). Key algorithms include linear/logistic regression, decision trees, random forests, gradient boosting (XGBoost, LightGBM), support vector machines, and neural networks. The choice of algorithm depends on data characteristics, interpretability requirements, and performance needs.',
        concepts: [
          { icon: '🏷️', title: 'Classification', desc: 'Assigning data points to predefined categories using algorithms like logistic regression, SVM, and random forests', examples: ['Binary Classification', 'Multi-Class', 'Multi-Label'] },
          { icon: '📈', title: 'Regression', desc: 'Predicting continuous numerical values using linear regression, polynomial regression, and ensemble methods', examples: ['Linear Regression', 'Ridge/Lasso', 'Elastic Net'] },
          { icon: '🌲', title: 'Ensemble Methods', desc: 'Combining multiple models for better predictions through bagging, boosting, and stacking', examples: ['Random Forest', 'XGBoost', 'LightGBM'] },
          { icon: '🧠', title: 'Neural Networks', desc: 'Deep learning models with multiple layers for complex pattern recognition', examples: ['MLP', 'CNN', 'RNN'] },
        ],
        tools: [
          { icon: '⚡', name: 'XGBoost', desc: 'Gradient boosting framework for structured data' },
          { icon: '🔥', name: 'PyTorch', desc: 'Deep learning framework for research and production' },
          { icon: '🧮', name: 'scikit-learn', desc: 'Classical ML algorithms and utilities' },
          { icon: '📊', name: 'TensorFlow', desc: 'End-to-end ML platform' },
          { icon: '🌿', name: 'LightGBM', desc: 'Microsoft gradient boosting framework' },
          { icon: '🐱', name: 'CatBoost', desc: 'Gradient boosting with categorical support' },
        ],
        practices: {
          dos: ['Split data into train/validation/test sets before any preprocessing', 'Use cross-validation for robust model evaluation', 'Handle class imbalance with SMOTE or class weights', 'Perform feature scaling for distance-based algorithms', 'Monitor for data leakage throughout the pipeline'],
          donts: ['Train on the test set or leak test data into training', 'Ignore class imbalance in classification tasks', 'Use accuracy alone for imbalanced datasets', 'Skip feature importance analysis', 'Deploy models without monitoring for drift'],
        },
      },
      { pn: 2, title: 'Unsupervised Learning', slug: 'unsupervised-learning', desc: 'Clustering, dimensionality reduction, and pattern discovery', tags: ['K-Means', 'PCA', 'Autoencoders'],
        overview: 'Unsupervised learning discovers hidden structures in unlabeled data. Key techniques include clustering (K-Means, DBSCAN, hierarchical), dimensionality reduction (PCA, t-SNE, UMAP), and anomaly detection. These methods are essential for customer segmentation, feature extraction, data visualization, and finding patterns in large datasets without explicit labels.',
        concepts: [
          { icon: '🎯', title: 'Clustering', desc: 'Grouping similar data points based on distance or density metrics', examples: ['K-Means', 'DBSCAN', 'Hierarchical'] },
          { icon: '📉', title: 'Dimensionality Reduction', desc: 'Reducing feature space while preserving important information', examples: ['PCA', 't-SNE', 'UMAP'] },
          { icon: '🔍', title: 'Anomaly Detection', desc: 'Identifying unusual patterns that deviate from expected behavior', examples: ['Isolation Forest', 'One-Class SVM', 'LOF'] },
        ],
        tools: [
          { icon: '🧮', name: 'scikit-learn', desc: 'Comprehensive unsupervised learning toolkit' },
          { icon: '📊', name: 'UMAP', desc: 'Uniform manifold approximation for visualization' },
          { icon: '🔬', name: 'HDBSCAN', desc: 'Hierarchical density-based clustering' },
        ],
        practices: {
          dos: ['Scale features before applying distance-based methods', 'Use multiple clustering validity indices', 'Visualize results with dimensionality reduction'],
          donts: ['Assume the number of clusters without analysis', 'Apply K-Means to non-spherical cluster shapes', 'Ignore the curse of dimensionality'],
        },
      },
      { pn: 3, title: 'Reinforcement Learning', slug: 'reinforcement-learning', desc: 'Agents, rewards, and sequential decision making', tags: ['Q-Learning', 'Policy Gradient', 'Multi-Armed Bandit'],
        overview: 'Reinforcement learning trains agents to make sequential decisions by maximizing cumulative rewards. Unlike supervised learning, RL agents learn through interaction with an environment. Key concepts include Markov Decision Processes, value functions, policy optimization, and exploration-exploitation tradeoffs. Applications range from game AI and robotics to recommendation systems and resource allocation.',
        concepts: [
          { icon: '🎮', title: 'Value-Based Methods', desc: 'Learning value functions to determine optimal actions (Q-Learning, DQN)', examples: ['Q-Learning', 'DQN', 'Double DQN'] },
          { icon: '📊', title: 'Policy-Based Methods', desc: 'Directly optimizing the policy function mapping states to actions', examples: ['REINFORCE', 'PPO', 'A3C'] },
          { icon: '🎰', title: 'Multi-Armed Bandits', desc: 'Simplified RL for single-step decisions with exploration-exploitation', examples: ['Epsilon-Greedy', 'UCB', 'Thompson Sampling'] },
        ],
        tools: [
          { icon: '🏋️', name: 'Gymnasium', desc: 'Standard RL environment toolkit (formerly OpenAI Gym)' },
          { icon: '⚡', name: 'Stable Baselines3', desc: 'Reliable RL algorithm implementations' },
          { icon: '🔵', name: 'RLlib', desc: 'Scalable RL library from Ray' },
        ],
        practices: {
          dos: ['Start with simpler environments and algorithms', 'Normalize rewards for stable training', 'Use proper exploration strategies'],
          donts: ['Skip reward shaping and design', 'Ignore sample efficiency concerns', 'Use RL when supervised learning suffices'],
        },
      },
      { pn: 4, title: 'Neural Network Architectures', slug: 'neural-networks', desc: 'CNNs, RNNs, Transformers, and deep learning architectures', tags: ['CNN', 'RNN', 'Transformer', 'GAN'],
        overview: 'Neural network architectures form the backbone of modern deep learning. Convolutional Neural Networks (CNNs) excel at spatial data like images. Recurrent Neural Networks (RNNs) and LSTMs handle sequential data. Transformers have revolutionized NLP and are expanding to vision and multimodal tasks. Generative Adversarial Networks (GANs) enable realistic data generation. Understanding architecture selection and design is critical for effective deep learning solutions.',
        concepts: [
          { icon: '🖼️', title: 'CNNs', desc: 'Convolutional layers for spatial feature extraction in images and signals', examples: ['ResNet', 'EfficientNet', 'ConvNeXt'] },
          { icon: '🔄', title: 'RNNs & LSTMs', desc: 'Recurrent architectures for sequential and temporal data processing', examples: ['LSTM', 'GRU', 'Bidirectional'] },
          { icon: '⚡', title: 'Transformers', desc: 'Self-attention mechanism enabling parallel processing of sequences', examples: ['BERT', 'GPT', 'ViT'] },
          { icon: '🎨', title: 'GANs', desc: 'Generator-discriminator pairs for realistic data generation', examples: ['StyleGAN', 'CycleGAN', 'Pix2Pix'] },
        ],
        tools: [
          { icon: '🔥', name: 'PyTorch', desc: 'Dynamic computation graphs for research' },
          { icon: '📊', name: 'TensorFlow', desc: 'Production ML platform with Keras' },
          { icon: '🤗', name: 'HuggingFace', desc: 'Pre-trained model hub and transformers library' },
        ],
        practices: {
          dos: ['Start with pre-trained models and transfer learning', 'Use batch normalization and residual connections', 'Monitor training with learning curves and validation loss'],
          donts: ['Build from scratch when pre-trained models exist', 'Ignore computational costs of large architectures', 'Skip regularization techniques like dropout'],
        },
      },
      { pn: 5, title: 'ML Pipeline & Workflow', slug: 'ml-pipeline', desc: 'End-to-end ML lifecycle from data to deployment', tags: ['MLOps', 'Feature Store', 'Model Registry'],
        overview: 'An ML pipeline encompasses the entire lifecycle from data ingestion through model deployment and monitoring. Key stages include data collection, feature engineering, model training, evaluation, deployment, and monitoring. MLOps practices bring DevOps principles to ML, ensuring reproducibility, automation, and continuous improvement. Feature stores centralize feature management while model registries track model versions and lineage.',
        concepts: [
          { icon: '🔄', title: 'ML Lifecycle', desc: 'End-to-end stages from data preparation to model retirement', examples: ['Data Prep', 'Training', 'Deployment', 'Monitoring'] },
          { icon: '📦', title: 'Feature Store', desc: 'Centralized repository for feature computation and serving', examples: ['Feast', 'Tecton', 'Hopsworks'] },
          { icon: '📋', title: 'Model Registry', desc: 'Version control and lineage tracking for trained models', examples: ['MLflow', 'Weights & Biases', 'Neptune'] },
        ],
        tools: [
          { icon: '🔄', name: 'MLflow', desc: 'Open-source ML lifecycle management' },
          { icon: '🎯', name: 'Kubeflow', desc: 'ML workflows on Kubernetes' },
          { icon: '📊', name: 'Weights & Biases', desc: 'Experiment tracking and visualization' },
        ],
        practices: {
          dos: ['Version data, code, and models together', 'Automate pipeline stages with CI/CD', 'Implement model monitoring from day one'],
          donts: ['Run experiments without tracking', 'Deploy models without rollback capability', 'Ignore data and model versioning'],
        },
      },
      { pn: 6, title: 'Algorithm Selection Guide', slug: 'algorithm-selection', desc: 'Choosing the right algorithm for your problem', tags: ['Decision Tree', 'SVM', 'Ensemble'],
        overview: 'Selecting the right ML algorithm depends on problem type, data characteristics, interpretability needs, and performance requirements. This guide covers decision frameworks for choosing between algorithms, understanding trade-offs between accuracy and interpretability, and matching algorithms to data types and sizes. Key considerations include linear vs non-linear relationships, feature types, dataset size, and deployment constraints.',
        concepts: [
          { icon: '🌳', title: 'Tree-Based', desc: 'Decision trees and ensemble methods for tabular data with built-in feature selection', examples: ['Decision Tree', 'Random Forest', 'GBM'] },
          { icon: '📐', title: 'Linear Models', desc: 'Interpretable models for linear relationships with regularization options', examples: ['Linear Regression', 'Logistic', 'SVM'] },
          { icon: '🧠', title: 'Deep Learning', desc: 'Neural networks for complex patterns in large datasets', examples: ['MLP', 'CNN', 'Transformer'] },
        ],
        tools: [
          { icon: '🧮', name: 'scikit-learn', desc: 'Algorithm comparison and evaluation' },
          { icon: '📊', name: 'Auto-sklearn', desc: 'Automated algorithm selection' },
          { icon: '⚡', name: 'FLAML', desc: 'Fast and lightweight AutoML' },
        ],
        practices: {
          dos: ['Start with simple baselines before complex models', 'Consider the bias-variance tradeoff', 'Evaluate multiple algorithms systematically'],
          donts: ['Jump to deep learning for small tabular datasets', 'Ignore computational and memory constraints', 'Optimize hyperparameters before validating approach'],
        },
      },
      { pn: 7, title: 'ML Frameworks & Tools', slug: 'ml-frameworks', desc: 'PyTorch, TensorFlow, scikit-learn, and the ML ecosystem', tags: ['PyTorch', 'TensorFlow', 'Keras'],
        overview: 'The ML ecosystem offers diverse frameworks for different needs. PyTorch dominates research with dynamic graphs and Pythonic API. TensorFlow/Keras provides production-ready deployment with TF Serving and TFLite. scikit-learn remains the gold standard for classical ML. Specialized tools like Hugging Face Transformers, JAX, and ONNX bridge gaps between research and production.',
        concepts: [
          { icon: '🔥', title: 'PyTorch Ecosystem', desc: 'Dynamic computation graphs, TorchServe, and the research community', examples: ['PyTorch Lightning', 'TorchVision', 'TorchText'] },
          { icon: '📊', title: 'TensorFlow Ecosystem', desc: 'Production deployment with TF Serving, TFLite, and TF Extended', examples: ['Keras', 'TF Serving', 'TFX'] },
          { icon: '🧮', title: 'Classical ML', desc: 'scikit-learn and traditional ML tools for tabular data', examples: ['scikit-learn', 'XGBoost', 'LightGBM'] },
        ],
        tools: [
          { icon: '🔥', name: 'PyTorch', desc: 'Research-first deep learning framework' },
          { icon: '📊', name: 'TensorFlow', desc: 'End-to-end ML platform for production' },
          { icon: '🤗', name: 'Transformers', desc: 'State-of-the-art NLP and beyond' },
        ],
        practices: {
          dos: ['Choose frameworks based on team expertise and deployment target', 'Use ONNX for framework interoperability', 'Leverage pre-trained models when possible'],
          donts: ['Switch frameworks mid-project without reason', 'Ignore the deployment story when choosing a framework', 'Reinvent utilities that frameworks provide'],
        },
      },
      { pn: 8, title: 'Evaluation Metrics', slug: 'evaluation-metrics', desc: 'Accuracy, precision, recall, F1, AUC, and beyond', tags: ['Accuracy', 'Precision', 'Recall', 'AUC'],
        overview: 'Proper model evaluation is critical for ML success. Classification metrics include accuracy, precision, recall, F1-score, AUC-ROC, and confusion matrices. Regression metrics include MSE, RMSE, MAE, and R-squared. Beyond standard metrics, consider fairness metrics, calibration, business metrics, and A/B testing. Metric selection should align with business objectives and the cost of different types of errors.',
        concepts: [
          { icon: '🎯', title: 'Classification Metrics', desc: 'Precision, recall, F1, AUC for measuring classification quality', examples: ['Precision', 'Recall', 'F1-Score', 'AUC'] },
          { icon: '📏', title: 'Regression Metrics', desc: 'Error measures for continuous prediction quality', examples: ['MSE', 'RMSE', 'MAE', 'R²'] },
          { icon: '⚖️', title: 'Fairness Metrics', desc: 'Ensuring models treat different groups equitably', examples: ['Demographic Parity', 'Equal Opportunity', 'Calibration'] },
        ],
        tools: [
          { icon: '🧮', name: 'scikit-learn metrics', desc: 'Comprehensive metric implementations' },
          { icon: '📊', name: 'Evidently', desc: 'ML monitoring and data drift detection' },
          { icon: '⚖️', name: 'Fairlearn', desc: 'Fairness assessment and mitigation' },
        ],
        practices: {
          dos: ['Choose metrics aligned with business objectives', 'Report multiple complementary metrics', 'Use stratified evaluation for subgroups'],
          donts: ['Rely on a single metric for model selection', 'Ignore the cost of false positives vs false negatives', 'Skip calibration analysis for probability outputs'],
        },
      },
    ],
  },
  {
    id: 2, slug: 'data-engineering', title: 'Data Engineering',
    agent: { emoji: '🔧', name: 'DataEngineerAgent', role: 'Pipeline Architecture Specialist', description: 'Expert in building scalable data pipelines and platform architecture', capabilities: ['Pipeline Design', 'Data Modeling', 'Platform Selection', 'Performance Tuning'] },
    pages: [
      { pn: 1, title: 'Data Ingestion', slug: 'data-ingestion', desc: 'Batch and streaming data collection patterns', tags: ['Batch', 'Streaming', 'CDC'],
        overview: 'Data ingestion is the first step in any data pipeline, involving the collection and import of data from diverse sources into a processing system. Patterns include batch ingestion (scheduled bulk loads), streaming ingestion (real-time event processing), and Change Data Capture (CDC) for database replication. Modern architectures often combine these patterns for different use cases within the same platform.',
        concepts: [
          { icon: '📦', title: 'Batch Ingestion', desc: 'Scheduled bulk data loads from files, databases, and APIs', examples: ['File Upload', 'Database Extract', 'API Polling'] },
          { icon: '⚡', title: 'Stream Ingestion', desc: 'Real-time event capture and processing', examples: ['Kafka', 'Kinesis', 'Pub/Sub'] },
          { icon: '🔄', title: 'CDC', desc: 'Change Data Capture for real-time database replication', examples: ['Debezium', 'Oracle GoldenGate', 'AWS DMS'] },
        ],
        tools: [
          { icon: '📨', name: 'Apache Kafka', desc: 'Distributed event streaming platform' },
          { icon: '🔄', name: 'Debezium', desc: 'Open-source CDC platform' },
          { icon: '🔧', name: 'Airbyte', desc: 'Open-source data integration' },
          { icon: '📊', name: 'Fivetran', desc: 'Automated data connectors' },
        ],
        practices: {
          dos: ['Implement idempotent ingestion for replay safety', 'Use schemas to validate incoming data', 'Monitor ingestion lag and throughput'],
          donts: ['Mix batch and streaming without clear boundaries', 'Skip dead-letter queues for failed records', 'Ignore backpressure in streaming systems'],
        },
      },
      { pn: 2, title: 'Data Transformation', slug: 'data-transformation', desc: 'ETL/ELT patterns and data modeling techniques', tags: ['ETL', 'ELT', 'dbt'],
        overview: 'Data transformation converts raw data into analysis-ready formats. ETL (Extract-Transform-Load) transforms data before loading into the target system, while ELT (Extract-Load-Transform) loads raw data first and transforms in-place using the target system\'s compute. dbt has popularized the ELT pattern by enabling SQL-based transformations with version control, testing, and documentation.',
        concepts: [
          { icon: '🔄', title: 'ETL vs ELT', desc: 'Traditional vs modern transformation patterns and when to use each', examples: ['ETL', 'ELT', 'Hybrid'] },
          { icon: '📐', title: 'Data Modeling', desc: 'Structuring data for analysis using dimensional, normalized, or vault models', examples: ['Star Schema', 'Data Vault', 'OBT'] },
          { icon: '🧪', title: 'Data Testing', desc: 'Validating transformations with assertions and data contracts', examples: ['dbt Tests', 'Great Expectations', 'Soda'] },
        ],
        tools: [
          { icon: '🔧', name: 'dbt', desc: 'SQL-first transformation framework' },
          { icon: '⚡', name: 'Apache Spark', desc: 'Distributed data processing engine' },
          { icon: '📊', name: 'Dataform', desc: 'Google BigQuery transformation tool' },
        ],
        practices: {
          dos: ['Use version control for all transformation code', 'Implement data tests at every layer', 'Document business logic in transformation models'],
          donts: ['Transform data without lineage tracking', 'Skip incremental processing for large tables', 'Ignore data freshness SLAs'],
        },
      },
      { pn: 3, title: 'Databricks', slug: 'databricks', desc: 'Unified analytics with lakehouse architecture', tags: ['Lakehouse', 'Delta Lake', 'Spark'],
        overview: 'Databricks provides a unified analytics platform built on the lakehouse architecture, combining the best of data lakes and data warehouses. Built on Apache Spark, it offers collaborative notebooks, Delta Lake for ACID transactions on data lakes, Unity Catalog for governance, and MLflow for ML lifecycle management. The platform supports data engineering, data science, SQL analytics, and real-time streaming on a single platform.',
        concepts: [
          { icon: '🏠', title: 'Lakehouse Architecture', desc: 'Combining data lake flexibility with warehouse reliability using Delta Lake', examples: ['Delta Lake', 'ACID Transactions', 'Time Travel'] },
          { icon: '📓', title: 'Collaborative Notebooks', desc: 'Multi-language notebooks for data engineering and science', examples: ['Python', 'SQL', 'Scala', 'R'] },
          { icon: '🏛️', title: 'Unity Catalog', desc: 'Unified governance for all data and AI assets', examples: ['Access Control', 'Lineage', 'Discovery'] },
        ],
        tools: [
          { icon: '🧱', name: 'Delta Lake', desc: 'ACID transactions for data lakes' },
          { icon: '📊', name: 'Databricks SQL', desc: 'Serverless SQL analytics' },
          { icon: '🔄', name: 'MLflow', desc: 'ML lifecycle management' },
        ],
        practices: {
          dos: ['Use Delta Lake for all production tables', 'Implement medallion architecture (bronze/silver/gold)', 'Leverage Unity Catalog for centralized governance'],
          donts: ['Skip data partitioning for large tables', 'Ignore cluster sizing and auto-scaling', 'Store credentials in notebooks'],
        },
      },
      { pn: 4, title: 'Snowflake', slug: 'snowflake', desc: 'Cloud-native data warehousing', tags: ['SQL', 'Multi-Cloud', 'Data Sharing'],
        overview: 'Snowflake is a cloud-native data warehouse with a unique architecture that separates storage and compute, enabling independent scaling. Key features include zero-copy cloning, data sharing, Snowpark for programmatic access, and support for semi-structured data. Its consumption-based pricing and multi-cloud availability make it popular for analytics workloads.',
        concepts: [
          { icon: '❄️', title: 'Architecture', desc: 'Separated storage and compute with automatic scaling', examples: ['Virtual Warehouse', 'Micro-Partitions', 'Clustering'] },
          { icon: '🤝', title: 'Data Sharing', desc: 'Secure data sharing without data movement', examples: ['Direct Share', 'Marketplace', 'Clean Rooms'] },
          { icon: '🐍', title: 'Snowpark', desc: 'Programmatic data processing in Python, Java, and Scala', examples: ['DataFrames', 'UDFs', 'Stored Procedures'] },
        ],
        tools: [
          { icon: '❄️', name: 'Snowflake', desc: 'Cloud data platform' },
          { icon: '🔧', name: 'dbt + Snowflake', desc: 'SQL transformation framework' },
          { icon: '📊', name: 'Streamlit', desc: 'Data app framework in Snowflake' },
        ],
        practices: {
          dos: ['Use dedicated virtual warehouses per workload', 'Implement proper clustering keys for large tables', 'Leverage zero-copy cloning for dev/test'],
          donts: ['Leave virtual warehouses running when idle', 'Ignore query profiling for expensive queries', 'Skip role-based access control setup'],
        },
      },
      { pn: 5, title: 'BigQuery', slug: 'bigquery', desc: 'Serverless analytics at petabyte scale', tags: ['Google Cloud', 'SQL', 'ML'],
        overview: 'Google BigQuery is a serverless, highly scalable data warehouse designed for analytics at petabyte scale. It features columnar storage, automatic optimization, built-in ML (BigQuery ML), and integration with the Google Cloud ecosystem. Its slot-based pricing and on-demand model provide flexibility for varying workloads.',
        concepts: [
          { icon: '🔷', title: 'Serverless Architecture', desc: 'No infrastructure management with automatic scaling and optimization', examples: ['Slots', 'Reservations', 'On-Demand'] },
          { icon: '🧠', title: 'BigQuery ML', desc: 'Train ML models directly using SQL', examples: ['Classification', 'Regression', 'Clustering'] },
          { icon: '📊', title: 'Materialized Views', desc: 'Pre-computed query results for performance', examples: ['Auto-Refresh', 'Smart Tuning', 'Aggregation'] },
        ],
        tools: [
          { icon: '🔷', name: 'BigQuery', desc: 'Serverless analytics platform' },
          { icon: '🔧', name: 'Dataform', desc: 'SQL workflow for BigQuery' },
          { icon: '📊', name: 'Looker', desc: 'BI and semantic layer on BigQuery' },
        ],
        practices: {
          dos: ['Partition and cluster large tables', 'Use materialized views for repeated queries', 'Monitor slot utilization and costs'],
          donts: ['SELECT * on large tables without filters', 'Ignore partition pruning in queries', 'Skip cost monitoring for on-demand pricing'],
        },
      },
      { pn: 6, title: 'Apache Spark', slug: 'apache-spark', desc: 'Distributed data processing engine', tags: ['MapReduce', 'RDD', 'DataFrame'],
        overview: 'Apache Spark is the de facto standard for distributed data processing, offering in-memory computation that is orders of magnitude faster than MapReduce. It provides APIs for batch processing (DataFrames, Datasets), stream processing (Structured Streaming), machine learning (MLlib), and graph processing (GraphX). Spark runs on various cluster managers including YARN, Mesos, Kubernetes, and standalone mode.',
        concepts: [
          { icon: '📊', title: 'DataFrames & SQL', desc: 'Structured API for relational data processing with optimization', examples: ['DataFrame', 'Dataset', 'Spark SQL'] },
          { icon: '⚡', title: 'Structured Streaming', desc: 'Micro-batch and continuous stream processing', examples: ['Kafka Source', 'Window Functions', 'Watermarks'] },
          { icon: '🧠', title: 'MLlib', desc: 'Distributed machine learning library', examples: ['Pipelines', 'Feature Engineering', 'Model Training'] },
        ],
        tools: [
          { icon: '⚡', name: 'PySpark', desc: 'Python API for Apache Spark' },
          { icon: '🧱', name: 'Delta Lake', desc: 'ACID transactions on Spark' },
          { icon: '📊', name: 'Spark UI', desc: 'Performance monitoring dashboard' },
        ],
        practices: {
          dos: ['Use DataFrames over RDDs for optimization', 'Tune partition sizes for your cluster', 'Cache frequently accessed DataFrames'],
          donts: ['Collect large datasets to the driver', 'Ignore data skew in joins and aggregations', 'Use UDFs when built-in functions exist'],
        },
      },
      { pn: 7, title: 'Orchestration', slug: 'orchestration', desc: 'Workflow scheduling and pipeline management', tags: ['Airflow', 'Prefect', 'Dagster'],
        overview: 'Workflow orchestration manages the scheduling, execution, and monitoring of data pipelines. Apache Airflow remains the most popular orchestrator with its DAG-based approach. Modern alternatives like Prefect and Dagster offer improved developer experience, dynamic workflows, and better testing capabilities. Key considerations include dependency management, failure handling, backfilling, and observability.',
        concepts: [
          { icon: '🔄', title: 'DAG-Based Workflows', desc: 'Directed acyclic graphs defining task dependencies and execution order', examples: ['Airflow DAGs', 'Task Groups', 'SubDAGs'] },
          { icon: '📅', title: 'Scheduling', desc: 'Cron-based and event-driven pipeline triggers', examples: ['Cron', 'Sensors', 'Triggers'] },
          { icon: '🔍', title: 'Observability', desc: 'Pipeline monitoring, alerting, and lineage tracking', examples: ['Logs', 'Metrics', 'SLAs'] },
        ],
        tools: [
          { icon: '🌬️', name: 'Apache Airflow', desc: 'Industry-standard workflow orchestrator' },
          { icon: '🔵', name: 'Prefect', desc: 'Modern workflow orchestration with Pythonic API' },
          { icon: '🔷', name: 'Dagster', desc: 'Data-aware orchestration platform' },
        ],
        practices: {
          dos: ['Make tasks idempotent and atomic', 'Implement proper retry and failure handling', 'Use data-aware scheduling when possible'],
          donts: ['Create massive monolithic DAGs', 'Hard-code credentials in pipeline code', 'Skip testing of orchestration logic'],
        },
      },
      { pn: 8, title: 'Data Quality', slug: 'data-quality', desc: 'Validation, profiling, and quality frameworks', tags: ['Great Expectations', 'Soda', 'Testing'],
        overview: 'Data quality ensures that data is accurate, complete, consistent, timely, and valid. Quality frameworks like Great Expectations and Soda provide declarative data validation with testing, profiling, and documentation. Data contracts between producers and consumers establish expectations. Implementing data quality at every stage of the pipeline prevents downstream issues and builds trust in data assets.',
        concepts: [
          { icon: '✅', title: 'Data Validation', desc: 'Testing data against expected schemas, types, and business rules', examples: ['Schema Validation', 'Range Checks', 'Null Checks'] },
          { icon: '📊', title: 'Data Profiling', desc: 'Statistical analysis of data distributions and characteristics', examples: ['Distributions', 'Uniqueness', 'Patterns'] },
          { icon: '📋', title: 'Data Contracts', desc: 'Formal agreements between data producers and consumers', examples: ['Schema Registry', 'SLAs', 'Ownership'] },
        ],
        tools: [
          { icon: '✅', name: 'Great Expectations', desc: 'Data validation and documentation' },
          { icon: '🧪', name: 'Soda', desc: 'Data quality checks as YAML' },
          { icon: '🔧', name: 'dbt tests', desc: 'Built-in data testing framework' },
        ],
        practices: {
          dos: ['Test data at every transformation stage', 'Define and enforce data contracts', 'Monitor quality metrics over time'],
          donts: ['Trust data without validation', 'Skip profiling new data sources', 'Ignore data quality alerts'],
        },
      },
      { pn: 9, title: 'Observability', slug: 'observability', desc: 'Pipeline monitoring and data lineage', tags: ['Lineage', 'Monitoring', 'Alerts'],
        overview: 'Data observability provides visibility into the health and reliability of data systems. It encompasses data lineage (understanding data flow and transformations), freshness monitoring, volume tracking, schema change detection, and anomaly detection. Tools like Monte Carlo, Atlan, and OpenLineage help teams identify and resolve data issues before they impact downstream consumers.',
        concepts: [
          { icon: '🔗', title: 'Data Lineage', desc: 'Tracking data flow from source through transformations to consumption', examples: ['Column-Level', 'Table-Level', 'Cross-System'] },
          { icon: '⏰', title: 'Freshness Monitoring', desc: 'Ensuring data arrives on time and is up to date', examples: ['SLA Tracking', 'Staleness Alerts', 'Update Frequency'] },
          { icon: '📊', title: 'Anomaly Detection', desc: 'Identifying unexpected changes in data patterns', examples: ['Volume Changes', 'Distribution Shifts', 'Schema Drift'] },
        ],
        tools: [
          { icon: '🔍', name: 'Monte Carlo', desc: 'Data observability platform' },
          { icon: '📊', name: 'Atlan', desc: 'Active metadata platform' },
          { icon: '🔗', name: 'OpenLineage', desc: 'Open-source lineage standard' },
        ],
        practices: {
          dos: ['Implement lineage tracking from day one', 'Set up freshness SLAs for critical tables', 'Create runbooks for common data incidents'],
          donts: ['Wait for users to report data issues', 'Ignore schema change notifications', 'Skip root cause analysis for data incidents'],
        },
      },
      { pn: 10, title: 'Data Catalogs', slug: 'data-catalogs', desc: 'Metadata management and data discovery', tags: ['Catalog', 'Discovery', 'Governance'],
        overview: 'Data catalogs are the Google of your data ecosystem, enabling discovery, understanding, and governance of data assets. Modern catalogs combine technical metadata (schema, lineage) with business metadata (descriptions, owners, tags) and usage metadata (popularity, queries). Key features include search, automated classification, data previews, and integration with BI and query tools.',
        concepts: [
          { icon: '🔍', title: 'Data Discovery', desc: 'Finding and understanding available data assets', examples: ['Search', 'Browse', 'Recommendations'] },
          { icon: '🏷️', title: 'Metadata Management', desc: 'Organizing technical and business metadata', examples: ['Auto-Classification', 'Tags', 'Glossary'] },
          { icon: '👥', title: 'Collaboration', desc: 'Social features for knowledge sharing about data', examples: ['Comments', 'Reviews', 'Annotations'] },
        ],
        tools: [
          { icon: '🔵', name: 'Collibra', desc: 'Enterprise data catalog' },
          { icon: '🟢', name: 'Alation', desc: 'Data intelligence platform' },
          { icon: '📊', name: 'Atlan', desc: 'Modern data workspace' },
        ],
        practices: {
          dos: ['Assign data owners for all critical assets', 'Use automated metadata harvesting', 'Encourage team contributions to documentation'],
          donts: ['Rely solely on manual metadata entry', 'Create a catalog without a governance program', 'Ignore usage analytics for catalog improvement'],
        },
      },
      { pn: 11, title: 'Streaming', slug: 'streaming', desc: 'Real-time data processing architectures', tags: ['Kafka', 'Flink', 'Kinesis'],
        overview: 'Streaming data processing enables real-time analytics, event-driven architectures, and responsive applications. Apache Kafka provides the backbone for event streaming, while Apache Flink and Spark Structured Streaming handle complex event processing. Cloud-native options like AWS Kinesis, Azure Event Hubs, and GCP Pub/Sub offer managed alternatives. Key patterns include event sourcing, CQRS, and the Kappa architecture.',
        concepts: [
          { icon: '📨', title: 'Event Streaming', desc: 'Publishing and consuming ordered streams of events', examples: ['Kafka', 'Kinesis', 'Pub/Sub'] },
          { icon: '⚡', title: 'Stream Processing', desc: 'Real-time computation on continuous data flows', examples: ['Flink', 'Spark Streaming', 'ksqlDB'] },
          { icon: '🏗️', title: 'Stream Architecture', desc: 'Patterns for building streaming systems', examples: ['Lambda', 'Kappa', 'Event Sourcing'] },
        ],
        tools: [
          { icon: '📨', name: 'Apache Kafka', desc: 'Distributed event streaming platform' },
          { icon: '⚡', name: 'Apache Flink', desc: 'Stateful stream processing engine' },
          { icon: '🔵', name: 'Confluent', desc: 'Kafka-based streaming platform' },
        ],
        practices: {
          dos: ['Design for exactly-once or at-least-once semantics', 'Use schema registry for event schemas', 'Plan for replay and backfill capabilities'],
          donts: ['Ignore consumer lag monitoring', 'Couple producers and consumers tightly', 'Skip partitioning strategy design'],
        },
      },
      { pn: 12, title: 'Reverse ETL', slug: 'reverse-etl', desc: 'Syncing warehouse data to operational tools', tags: ['Census', 'Hightouch', 'Activation'],
        overview: 'Reverse ETL syncs data from the data warehouse back to operational tools like CRMs, marketing platforms, and customer success tools. This "data activation" pattern enables business teams to use warehouse-computed insights directly in their daily tools. Key platforms include Census, Hightouch, and Polytomic, which provide audience segmentation, sync scheduling, and change detection.',
        concepts: [
          { icon: '🔄', title: 'Data Activation', desc: 'Making warehouse data actionable in business tools', examples: ['CRM Sync', 'Ad Audiences', 'Personalization'] },
          { icon: '📊', title: 'Audience Builder', desc: 'Segmenting users based on warehouse data for targeted campaigns', examples: ['Cohorts', 'Lookalikes', 'Suppression'] },
          { icon: '🔗', title: 'Sync Engine', desc: 'Detecting changes and syncing incrementally to destinations', examples: ['CDC Sync', 'Full Refresh', 'Append'] },
        ],
        tools: [
          { icon: '📊', name: 'Census', desc: 'Operational analytics platform' },
          { icon: '🎯', name: 'Hightouch', desc: 'Data activation platform' },
          { icon: '🔗', name: 'Polytomic', desc: 'Bi-directional data sync' },
        ],
        practices: {
          dos: ['Use the warehouse as the single source of truth', 'Implement incremental syncs for efficiency', 'Monitor sync failures and data freshness'],
          donts: ['Bypass the warehouse for direct integrations', 'Sync sensitive data without proper controls', 'Ignore rate limits on destination APIs'],
        },
      },
    ],
  },
]

// Helper to generate a content page
function generatePage(catId, p, agent) {
  const sections = []

  // Overview section
  sections.push({
    type: 'overview',
    icon: '📖',
    title: 'Overview',
    subtitle: `Deep dive into ${p.title}`,
    content: p.overview || `${p.desc}. This page explores the key concepts, tools, best practices, and implementation strategies for ${p.title.toLowerCase()} in modern enterprise environments. Understanding these fundamentals is essential for building robust, scalable systems.`,
  })

  // Concept grid section
  if (p.concepts && p.concepts.length > 0) {
    sections.push({
      type: 'concept-grid',
      icon: '💡',
      title: 'Key Concepts',
      subtitle: `Core ideas in ${p.title}`,
      columns: p.concepts.length <= 3 ? 3 : 4,
      items: p.concepts.map(c => ({
        icon: c.icon,
        title: c.title,
        description: c.desc,
        examples: c.examples || [],
      })),
    })
  }

  // Tools grid section
  if (p.tools && p.tools.length > 0) {
    sections.push({
      type: 'tools-grid',
      icon: '🔧',
      title: 'Tools & Technologies',
      subtitle: `Essential tools for ${p.title.toLowerCase()}`,
      columns: p.tools.length <= 3 ? 3 : p.tools.length <= 4 ? 4 : 6,
      items: p.tools.map(t => ({
        icon: t.icon,
        name: t.name,
        description: t.desc,
        tags: t.tags || [],
      })),
    })
  }

  // Best practices section
  if (p.practices) {
    sections.push({
      type: 'best-practices',
      icon: '✅',
      title: 'Best Practices',
      subtitle: 'Proven approaches and common pitfalls',
      dos: p.practices.dos,
      donts: p.practices.donts,
    })
  }

  // Agent section
  if (agent) {
    sections.push({
      type: 'agent',
      agent,
    })
  }

  return {
    categoryId: catId,
    pageNumber: p.pn,
    title: p.title,
    slug: p.slug,
    description: p.desc,
    stats: [
      { value: `${p.concepts?.length || 3}+`, label: 'Key Concepts', icon: '💡' },
      { value: `${p.tools?.length || 4}+`, label: 'Tools', icon: '🔧' },
      { value: `${p.practices?.dos?.length || 3}`, label: 'Best Practices', icon: '✅' },
      { value: `${p.tags?.length || 3}`, label: 'Tags', icon: '🏷️' },
    ],
    sections,
    agent,
  }
}

// Write a category data file
function writeCatFile(cat) {
  const pages = cat.pages.map(p => generatePage(cat.id, p, cat.agent))
  const dir = join(dataDir, `cat${String(cat.id).padStart(2, '0')}`)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  const content = `import type { ContentPage } from '@/types'

export const cat${String(cat.id).padStart(2, '0')}Pages: ContentPage[] = ${JSON.stringify(pages, null, 2)}
`
  writeFileSync(join(dir, 'index.ts'), content)
  console.log(`✓ cat${String(cat.id).padStart(2, '0')}/index.ts — ${pages.length} pages`)
}

// Generate for cats that have full content (cats 1-2 are defined inline above)
cats.forEach(writeCatFile)

// For remaining categories (3-29), generate from metadata
// We'll create a simpler but rich set of content based on titles and descriptions
function generateFromMeta(catId, catTitle, catSlug, agentDef, pageMetas) {
  const pages = pageMetas.map(pm => {
    const sections = []

    sections.push({
      type: 'overview',
      icon: '📖',
      title: 'Overview',
      subtitle: `Deep dive into ${pm.title}`,
      content: `${pm.description}. This page provides a comprehensive exploration of ${pm.title.toLowerCase()}, covering fundamental concepts, practical tools, industry best practices, and real-world implementation strategies. Whether you're a practitioner or decision-maker, this deep dive will equip you with the knowledge needed to leverage ${pm.title.toLowerCase()} effectively in enterprise environments.`,
    })

    // Generate concepts from tags
    const tagConcepts = pm.tags.slice(0, 4).map((tag, i) => ({
      icon: ['🎯', '📊', '🔧', '⚡'][i % 4],
      title: tag,
      description: `Understanding ${tag} as a key component of ${pm.title.toLowerCase()}`,
      examples: [],
    }))

    if (tagConcepts.length > 0) {
      sections.push({
        type: 'concept-grid',
        icon: '💡',
        title: 'Key Concepts',
        subtitle: `Core ideas in ${pm.title}`,
        columns: tagConcepts.length <= 3 ? 3 : 4,
        items: tagConcepts,
      })
    }

    // Best practices
    sections.push({
      type: 'best-practices',
      icon: '✅',
      title: 'Best Practices',
      subtitle: 'Proven approaches and common pitfalls',
      dos: [
        `Establish clear objectives before implementing ${pm.title.toLowerCase()}`,
        'Start with a pilot project and iterate based on learnings',
        'Invest in team training and knowledge sharing',
        'Document decisions and maintain runbooks',
        'Measure outcomes against defined success criteria',
      ],
      donts: [
        'Rush implementation without proper planning',
        'Ignore organizational readiness and change management',
        `Treat ${pm.title.toLowerCase()} as a one-time project rather than ongoing practice`,
        'Skip monitoring and feedback loops',
        'Neglect security and compliance requirements',
      ],
    })

    if (agentDef) {
      sections.push({
        type: 'agent',
        agent: agentDef,
      })
    }

    return {
      categoryId: catId,
      pageNumber: pm.pageNumber,
      title: pm.title,
      slug: pm.slug,
      description: pm.description,
      stats: [
        { value: `${pm.tags.length}`, label: 'Key Topics', icon: '💡' },
        { value: '5+', label: 'Best Practices', icon: '✅' },
        { value: '3+', label: 'Tools', icon: '🔧' },
        { value: `${catId}.${pm.pageNumber}`, label: 'Page', icon: '📄' },
      ],
      sections,
      agent: agentDef,
    }
  })

  const dir = join(dataDir, `cat${String(catId).padStart(2, '0')}`)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  const content = `import type { ContentPage } from '@/types'

export const cat${String(catId).padStart(2, '0')}Pages: ContentPage[] = ${JSON.stringify(pages, null, 2)}
`
  writeFileSync(join(dir, 'index.ts'), content)
  console.log(`✓ cat${String(catId).padStart(2, '0')}/index.ts — ${pages.length} pages`)
}

// Categories 3-29 metadata (from categories.ts)
const remainingCats = [
  { id: 3, title: 'Analytics & BI', slug: 'analytics-bi',
    agent: { emoji: '📊', name: 'AnalyticsAgent', role: 'BI & Visualization Specialist', description: 'Expert in dashboard design, data storytelling, and BI platform selection', capabilities: ['Dashboard Design', 'KPI Definition', 'Data Storytelling', 'Platform Selection'] },
    pages: [
      { pageNumber: 1, title: 'BI Platforms', slug: 'bi-platforms', description: 'Comparing Tableau, Power BI, Looker, and more', tags: ['Tableau', 'Power BI', 'Looker'] },
      { pageNumber: 2, title: 'Self-Service Analytics', slug: 'self-service', description: 'Enabling business users to explore data independently', tags: ['Governance', 'Data Literacy'] },
      { pageNumber: 3, title: 'Semantic Layer', slug: 'semantic-layer', description: 'Unified metrics and business logic layer', tags: ['Metrics', 'LookML', 'dbt'] },
      { pageNumber: 4, title: 'Visualization', slug: 'visualization', description: 'Chart types, design principles, and best practices', tags: ['Charts', 'UX', 'Design'] },
      { pageNumber: 5, title: 'Dashboard Design', slug: 'dashboard-design', description: 'Layout, interactivity, and user experience', tags: ['Layout', 'Filters', 'Drill-Down'] },
      { pageNumber: 6, title: 'Embedded Analytics', slug: 'embedded-analytics', description: 'Integrating analytics into products and workflows', tags: ['API', 'iFrame', 'SDK'] },
      { pageNumber: 7, title: 'Real-Time BI', slug: 'real-time-bi', description: 'Streaming dashboards and live data feeds', tags: ['Streaming', 'Live', 'Alerts'] },
      { pageNumber: 8, title: 'Advanced Analytics', slug: 'advanced-analytics', description: 'Predictive, prescriptive, and augmented analytics', tags: ['ML', 'Forecasting', 'NLP'] },
      { pageNumber: 9, title: 'Mobile BI', slug: 'mobile-bi', description: 'Analytics on mobile devices and responsive design', tags: ['Mobile', 'Responsive', 'Push'] },
      { pageNumber: 10, title: 'BI Governance', slug: 'bi-governance', description: 'Standards, security, and content management', tags: ['Security', 'Standards', 'Audit'] },
    ],
  },
  { id: 4, title: 'Data Science', slug: 'data-science',
    agent: { emoji: '🔬', name: 'DataScientistAgent', role: 'Statistical Analysis Specialist', description: 'Expert in statistical methods, experiment design, and data science workflows', capabilities: ['Statistical Analysis', 'Experiment Design', 'Feature Engineering', 'Model Interpretation'] },
    pages: [
      { pageNumber: 1, title: 'CRISP-DM Framework', slug: 'crisp-dm', description: 'Cross-industry standard process for data mining', tags: ['Process', 'Methodology', 'Lifecycle'] },
      { pageNumber: 2, title: 'Statistical Methods', slug: 'statistical-methods', description: 'Hypothesis testing, distributions, and inference', tags: ['Hypothesis', 'Regression', 'Bayesian'] },
      { pageNumber: 3, title: 'Feature Engineering', slug: 'feature-engineering', description: 'Creating informative features from raw data', tags: ['Encoding', 'Scaling', 'Selection'] },
      { pageNumber: 4, title: 'Python Stack', slug: 'python-stack', description: 'NumPy, Pandas, Matplotlib, and the PyData ecosystem', tags: ['NumPy', 'Pandas', 'SciPy'] },
      { pageNumber: 5, title: 'Notebooks & Environments', slug: 'notebooks', description: 'Jupyter, Colab, and interactive development', tags: ['Jupyter', 'Colab', 'VS Code'] },
      { pageNumber: 6, title: 'Experiment Tracking', slug: 'experiment-tracking', description: 'MLflow, W&B, and reproducible experiments', tags: ['MLflow', 'W&B', 'DVC'] },
      { pageNumber: 7, title: 'Model Evaluation', slug: 'model-evaluation', description: 'Cross-validation, bias-variance, and model selection', tags: ['Cross-Val', 'Bias-Variance', 'Selection'] },
      { pageNumber: 8, title: 'Use Cases', slug: 'use-cases', description: 'Real-world data science applications across industries', tags: ['Healthcare', 'Finance', 'Marketing'] },
    ],
  },
  { id: 5, title: 'Generative AI', slug: 'generative-ai',
    agent: { emoji: '🎨', name: 'GenerativeAIAgent', role: 'LLM & GenAI Specialist', description: 'Expert in LLM deployment, prompt engineering, and RAG architecture', capabilities: ['Prompt Engineering', 'RAG Design', 'Model Selection', 'Cost Optimization'] },
    pages: [
      { pageNumber: 1, title: 'LLM Fundamentals', slug: 'llm-fundamentals', description: 'Transformer architecture, tokenization, and training', tags: ['Transformer', 'Attention', 'Tokenization'] },
      { pageNumber: 2, title: 'Prompt Engineering', slug: 'prompt-engineering', description: 'Techniques for effective AI communication', tags: ['Few-Shot', 'Chain-of-Thought', 'Templates'] },
      { pageNumber: 3, title: 'RAG Systems', slug: 'rag-systems', description: 'Building retrieval-augmented generation pipelines', tags: ['Retrieval', 'Embeddings', 'Vector DB'] },
      { pageNumber: 4, title: 'Fine-Tuning', slug: 'fine-tuning', description: 'Customizing LLMs with domain-specific data', tags: ['LoRA', 'RLHF', 'Instruction Tuning'] },
      { pageNumber: 5, title: 'Embeddings & Vectors', slug: 'embeddings', description: 'Vector representations and similarity search', tags: ['Embeddings', 'Cosine Similarity', 'ANN'] },
      { pageNumber: 6, title: 'Model Evaluation', slug: 'model-evaluation', description: 'Benchmarking and evaluating LLM performance', tags: ['MMLU', 'HumanEval', 'Perplexity'] },
      { pageNumber: 7, title: 'Multimodal AI', slug: 'multimodal', description: 'Vision, audio, and multi-input AI systems', tags: ['Vision', 'Audio', 'Video'] },
      { pageNumber: 8, title: 'Responsible AI', slug: 'responsible-ai', description: 'Safety, alignment, and ethical considerations', tags: ['Safety', 'Bias', 'Alignment'] },
      { pageNumber: 9, title: 'LLM Deployment', slug: 'llm-deployment', description: 'Serving, scaling, and infrastructure for LLMs', tags: ['vLLM', 'TGI', 'Quantization'] },
      { pageNumber: 10, title: 'Cost Optimization', slug: 'cost-optimization', description: 'Reducing LLM costs while maintaining quality', tags: ['Caching', 'Routing', 'Distillation'] },
    ],
  },
  { id: 6, title: 'AI Agents & Chatbots', slug: 'agents-chatbots',
    agent: { emoji: '💬', name: 'ConversationalAgent', role: 'Dialog System Specialist', description: 'Expert in chatbot design, NLU, and multi-turn conversation management', capabilities: ['Intent Design', 'Dialog Flow', 'Context Management', 'Channel Integration'] },
    pages: [
      { pageNumber: 1, title: 'NLU & Intent Recognition', slug: 'nlu-intent', description: 'Understanding natural language and extracting intent', tags: ['NLU', 'Intent', 'Entity Extraction'] },
      { pageNumber: 2, title: 'Dialog Management', slug: 'dialog-management', description: 'Conversation flow design and state machines', tags: ['State Machine', 'Flow', 'Branching'] },
      { pageNumber: 3, title: 'Response Generation', slug: 'response-generation', description: 'Template, retrieval, and generative responses', tags: ['Templates', 'NLG', 'LLM'] },
      { pageNumber: 4, title: 'Context & Memory', slug: 'context-memory', description: 'Session management and long-term memory', tags: ['Session', 'Memory', 'Personalization'] },
      { pageNumber: 5, title: 'Agent Platforms', slug: 'agent-platforms', description: 'Comparing Dialogflow, Rasa, Azure Bot Service', tags: ['Dialogflow', 'Rasa', 'Lex'] },
      { pageNumber: 6, title: 'Voice Assistants', slug: 'voice-assistants', description: 'Speech-to-text, TTS, and voice-first design', tags: ['ASR', 'TTS', 'Alexa'] },
      { pageNumber: 7, title: 'Multichannel Deployment', slug: 'multichannel', description: 'Deploying across web, mobile, messaging, and voice', tags: ['Web', 'Slack', 'Teams', 'WhatsApp'] },
      { pageNumber: 8, title: 'Analytics & Metrics', slug: 'analytics-metrics', description: 'Measuring chatbot performance and user satisfaction', tags: ['CSAT', 'Containment', 'Fallback Rate'] },
      { pageNumber: 9, title: 'Testing & Evaluation', slug: 'testing-evaluation', description: 'End-to-end testing and conversation quality', tags: ['Unit Test', 'E2E', 'A/B Testing'] },
      { pageNumber: 10, title: 'Enterprise Agents', slug: 'enterprise-agents', description: 'Building production-grade enterprise conversational AI', tags: ['Security', 'Scale', 'Integration'] },
    ],
  },
  { id: 7, title: 'Knowledge Management', slug: 'knowledge-management',
    agent: { emoji: '📖', name: 'KnowledgeAgent', role: 'Knowledge Architecture Specialist', description: 'Expert in knowledge graphs, taxonomy design, and information architecture', capabilities: ['Graph Design', 'Taxonomy Creation', 'Content Strategy', 'Search Optimization'] },
    pages: [
      { pageNumber: 1, title: 'Knowledge Graphs', slug: 'knowledge-graphs', description: 'Building and querying graph-based knowledge', tags: ['Neo4j', 'RDF', 'SPARQL'] },
      { pageNumber: 3, title: 'Taxonomy & Ontology', slug: 'taxonomy-ontology', description: 'Classification systems and semantic relationships', tags: ['OWL', 'SKOS', 'Hierarchy'] },
      { pageNumber: 4, title: 'Content Lifecycle', slug: 'content-lifecycle', description: 'Managing knowledge from creation to retirement', tags: ['Create', 'Review', 'Archive'] },
      { pageNumber: 5, title: 'Enterprise Wikis', slug: 'enterprise-wikis', description: 'Collaborative knowledge platforms', tags: ['Confluence', 'Notion', 'SharePoint'] },
      { pageNumber: 6, title: 'Semantic Models', slug: 'semantic-models', description: 'Meaning-based data organization', tags: ['Ontology', 'Embeddings', 'NLP'] },
      { pageNumber: 7, title: 'Vector Databases', slug: 'vector-databases', description: 'Similarity search and embedding storage', tags: ['Pinecone', 'Weaviate', 'Chroma'] },
      { pageNumber: 8, title: 'Platform Comparison', slug: 'platform-comparison', description: 'Comparing KM platforms and tools', tags: ['Comparison', 'TCO', 'Features'] },
    ],
  },
  { id: 8, title: 'Automation & RPA', slug: 'automation-rpa',
    agent: { emoji: '⚙️', name: 'AutomationAgent', role: 'Process Automation Specialist', description: 'Expert in RPA design, process mining, and automation strategy', capabilities: ['Process Analysis', 'Bot Design', 'ROI Estimation', 'Orchestration'] },
    pages: [
      { pageNumber: 1, title: 'Automation Maturity', slug: 'automation-maturity', description: 'The journey from manual to intelligent automation', tags: ['Maturity Model', 'Assessment', 'Roadmap'] },
      { pageNumber: 2, title: 'Bot Orchestration', slug: 'bot-orchestration', description: 'Managing and scaling bot workforces', tags: ['Scheduling', 'Queue', 'Monitoring'] },
      { pageNumber: 3, title: 'Process Mining', slug: 'process-mining', description: 'Discovering processes from event logs', tags: ['Event Log', 'Celonis', 'Discovery'] },
      { pageNumber: 4, title: 'Low-Code Platforms', slug: 'low-code', description: 'Building applications with minimal coding', tags: ['Power Apps', 'OutSystems', 'Mendix'] },
      { pageNumber: 5, title: 'RPA Platforms', slug: 'rpa-platforms', description: 'Comparing UiPath, Automation Anywhere, and Power Automate', tags: ['UiPath', 'AA', 'Blue Prism'] },
    ],
  },
  { id: 9, title: 'Software Architecture', slug: 'software-architecture',
    agent: { emoji: '🏗️', name: 'ArchitectAgent', role: 'Solutions Architecture Specialist', description: 'Expert in system design, architecture patterns, and technology selection', capabilities: ['System Design', 'Pattern Selection', 'Trade-off Analysis', 'Scalability Planning'] },
    pages: [
      { pageNumber: 1, title: 'Microservices', slug: 'microservices', description: 'Building and managing microservice architectures', tags: ['Decomposition', 'Service Mesh', 'API Gateway'] },
      { pageNumber: 2, title: 'Event-Driven Architecture', slug: 'event-driven', description: 'Async communication and event sourcing', tags: ['Kafka', 'Events', 'CQRS'] },
      { pageNumber: 3, title: 'Data Mesh', slug: 'data-mesh', description: 'Domain-oriented distributed data architecture', tags: ['Domain', 'Self-Serve', 'Federated'] },
      { pageNumber: 4, title: 'Lakehouse', slug: 'lakehouse', description: 'Combining data lake and warehouse patterns', tags: ['Delta Lake', 'Iceberg', 'Hudi'] },
      { pageNumber: 5, title: 'API Patterns', slug: 'api-patterns', description: 'REST, GraphQL, gRPC, and API design', tags: ['REST', 'GraphQL', 'gRPC'] },
      { pageNumber: 6, title: 'CQRS & Event Sourcing', slug: 'cqrs-event-sourcing', description: 'Separating reads from writes with event history', tags: ['CQRS', 'Event Store', 'Projection'] },
      { pageNumber: 7, title: 'Domain-Driven Design', slug: 'domain-driven', description: 'Modeling software around business domains', tags: ['Bounded Context', 'Aggregate', 'Ubiquitous Language'] },
    ],
  },
  { id: 10, title: 'Product Building', slug: 'product-building',
    agent: { emoji: '🚀', name: 'ProductAgent', role: 'Product Strategy Specialist', description: 'Expert in product strategy, validation frameworks, and growth metrics', capabilities: ['Product Strategy', 'User Research', 'Metric Definition', 'Roadmap Planning'] },
    pages: [
      { pageNumber: 1, title: 'Product Lifecycle', slug: 'product-lifecycle', description: 'Stages from ideation to sunset', tags: ['Ideation', 'MVP', 'Growth', 'Maturity'] },
      { pageNumber: 2, title: 'Best Practices', slug: 'best-practices', description: 'Proven approaches to product development', tags: ['User Research', 'Design Thinking', 'Lean'] },
      { pageNumber: 3, title: 'Scaling Strategies', slug: 'scaling', description: 'Growing products beyond initial market fit', tags: ['Growth', 'Retention', 'Expansion'] },
      { pageNumber: 4, title: 'AI-Assisted Development', slug: 'ai-assisted', description: 'Leveraging AI in the product development process', tags: ['Copilot', 'AI Testing', 'AutoML'] },
      { pageNumber: 5, title: 'Validation', slug: 'validation', description: 'Testing hypotheses and validating product ideas', tags: ['A/B Testing', 'MVP', 'Prototype'] },
      { pageNumber: 6, title: 'Methodologies', slug: 'methodologies', description: 'Agile, Lean, Design Sprint, and Shape Up', tags: ['Agile', 'Lean', 'Shape Up'] },
      { pageNumber: 7, title: 'Product Metrics', slug: 'product-metrics', description: 'KPIs, North Star metrics, and measurement frameworks', tags: ['NPS', 'DAU', 'Retention', 'ARPU'] },
    ],
  },
  { id: 11, title: 'Security & Compliance', slug: 'security-compliance',
    agent: { emoji: '🔒', name: 'SecurityAgent', role: 'Security & Compliance Specialist', description: 'Expert in security architecture, compliance frameworks, and risk management', capabilities: ['Threat Modeling', 'Compliance Mapping', 'Security Architecture', 'Incident Response'] },
    pages: [
      { pageNumber: 1, title: 'Compliance Frameworks', slug: 'compliance-frameworks', description: 'SOC 2, ISO 27001, NIST, and regulatory standards', tags: ['SOC 2', 'ISO 27001', 'NIST'] },
      { pageNumber: 2, title: 'Data Privacy', slug: 'data-privacy', description: 'GDPR, CCPA, and privacy-by-design principles', tags: ['GDPR', 'CCPA', 'Privacy'] },
      { pageNumber: 3, title: 'Data Governance', slug: 'data-governance', description: 'Policies, standards, and data stewardship', tags: ['Policies', 'Standards', 'Stewardship'] },
      { pageNumber: 4, title: 'Risk Management', slug: 'risk-management', description: 'Threat modeling and risk assessment', tags: ['STRIDE', 'DREAD', 'Risk Matrix'] },
      { pageNumber: 5, title: 'Identity & Access Management', slug: 'iam', description: 'Authentication, authorization, and SSO', tags: ['OAuth', 'SAML', 'MFA'] },
      { pageNumber: 6, title: 'Audit & Logging', slug: 'audit-logging', description: 'Audit trails, log management, and SIEM', tags: ['SIEM', 'Audit Trail', 'Splunk'] },
      { pageNumber: 7, title: 'Incident Response', slug: 'incident-response', description: 'Detection, response, and recovery procedures', tags: ['Playbook', 'SOAR', 'Forensics'] },
    ],
  },
  { id: 12, title: 'Cloud Platforms', slug: 'cloud-platforms',
    agent: { emoji: '☁️', name: 'CloudArchitectAgent', role: 'Cloud Solutions Architect', description: 'Expert in multi-cloud architecture, migration planning, and cost optimization', capabilities: ['Architecture Design', 'Migration Planning', 'Cost Analysis', 'Security Posture'] },
    pages: [
      { pageNumber: 1, title: 'Cloud Providers', slug: 'cloud-providers', description: 'Comparing AWS, Azure, and GCP', tags: ['AWS', 'Azure', 'GCP'] },
      { pageNumber: 2, title: 'Architecture Patterns', slug: 'architecture-patterns', description: 'Well-architected frameworks and cloud-native design', tags: ['Serverless', 'Containers', 'Microservices'] },
      { pageNumber: 3, title: 'Migration Strategies', slug: 'migration-strategies', description: 'Lift-and-shift, re-platform, and re-architect', tags: ['6 Rs', 'Assessment', 'Planning'] },
      { pageNumber: 4, title: 'Compute & Containers', slug: 'compute-containers', description: 'VMs, containers, serverless, and orchestration', tags: ['EC2', 'ECS', 'Lambda', 'K8s'] },
      { pageNumber: 5, title: 'Storage & Databases', slug: 'storage-databases', description: 'Object storage, block storage, and managed databases', tags: ['S3', 'RDS', 'DynamoDB'] },
      { pageNumber: 6, title: 'Networking & Security', slug: 'networking-security', description: 'VPC, load balancing, and cloud security', tags: ['VPC', 'ALB', 'WAF'] },
      { pageNumber: 7, title: 'Cost Optimization', slug: 'cost-optimization', description: 'Right-sizing, reserved instances, and FinOps', tags: ['Reserved', 'Spot', 'Savings Plans'] },
    ],
  },
  { id: 13, title: 'Migration Factory', slug: 'migration-factory',
    agent: { emoji: '🔄', name: 'MigrationAgent', role: 'Migration Factory Specialist', description: 'Expert in migration planning, conversion automation, and validation', capabilities: ['Assessment', 'Wave Planning', 'Conversion', 'Validation Testing'] },
    pages: [
      { pageNumber: 1, title: 'Assessment', slug: 'assessment', description: 'Discovery, inventory, and complexity scoring', tags: ['Discovery', 'Scoring', 'Inventory'] },
      { pageNumber: 2, title: 'Conversion', slug: 'conversion', description: 'Automated and manual conversion strategies', tags: ['Code Conversion', 'Schema', 'Data'] },
      { pageNumber: 3, title: 'Validation', slug: 'validation', description: 'Testing and quality assurance for migrations', tags: ['Regression', 'Data Validation', 'UAT'] },
      { pageNumber: 4, title: 'Cutover', slug: 'cutover', description: 'Go-live execution and rollback planning', tags: ['Downtime', 'Rollback', 'Checklist'] },
      { pageNumber: 5, title: 'Wave Planning', slug: 'wave-planning', description: 'Sequencing and prioritizing migration waves', tags: ['Dependency', 'Priority', 'Scheduling'] },
      { pageNumber: 6, title: 'Tooling', slug: 'tooling', description: 'Migration tools and automation frameworks', tags: ['SCT', 'DMS', 'Flyway'] },
    ],
  },
  { id: 14, title: 'Integration & APIs', slug: 'integration-apis',
    agent: { emoji: '🔌', name: 'IntegrationAgent', role: 'API & Integration Specialist', description: 'Expert in API design, integration patterns, and event-driven architecture', capabilities: ['API Design', 'Integration Patterns', 'Event Architecture', 'Gateway Configuration'] },
    pages: [
      { pageNumber: 1, title: 'API Gateway', slug: 'api-gateway', description: 'Routing, rate limiting, and API management', tags: ['Kong', 'Apigee', 'Rate Limiting'] },
      { pageNumber: 2, title: 'Event Architecture', slug: 'event-architecture', description: 'Pub/sub, event sourcing, and streaming', tags: ['Kafka', 'EventBridge', 'Pub/Sub'] },
      { pageNumber: 3, title: 'Connectors', slug: 'connectors', description: 'Pre-built integrations and adapter patterns', tags: ['MuleSoft', 'Workato', 'Zapier'] },
      { pageNumber: 4, title: 'API Lifecycle', slug: 'api-lifecycle', description: 'Design, build, test, deploy, and deprecate APIs', tags: ['OpenAPI', 'Versioning', 'Deprecation'] },
      { pageNumber: 5, title: 'Webhooks', slug: 'webhooks', description: 'Event notifications and callback patterns', tags: ['Callback', 'Retry', 'Security'] },
    ],
  },
  { id: 15, title: 'Networking', slug: 'networking',
    agent: { emoji: '🌐', name: 'NetworkAgent', role: 'Network Architecture Specialist', description: 'Expert in network design, load balancing, and security', capabilities: ['Network Design', 'Load Balancing', 'DNS Configuration', 'Security Hardening'] },
    pages: [
      { pageNumber: 1, title: 'Network Architecture', slug: 'network-architecture', description: 'Designing scalable network topologies', tags: ['Topology', 'VPC', 'Subnets'] },
      { pageNumber: 2, title: 'Load Balancing', slug: 'load-balancing', description: 'L4/L7 load balancing strategies', tags: ['ALB', 'NLB', 'Round Robin'] },
      { pageNumber: 3, title: 'DNS & CDN', slug: 'dns-cdn', description: 'Domain resolution and content delivery', tags: ['Route 53', 'CloudFront', 'Akamai'] },
      { pageNumber: 4, title: 'VPN & Connectivity', slug: 'vpn-connectivity', description: 'Site-to-site, client VPN, and direct connect', tags: ['IPSec', 'WireGuard', 'Direct Connect'] },
      { pageNumber: 5, title: 'Network Security', slug: 'network-security', description: 'Firewalls, WAF, and DDoS protection', tags: ['WAF', 'Firewall', 'DDoS'] },
      { pageNumber: 6, title: 'Service Mesh', slug: 'service-mesh', description: 'Inter-service communication and observability', tags: ['Istio', 'Linkerd', 'Envoy'] },
    ],
  },
  { id: 16, title: 'Monitoring & Observability', slug: 'monitoring-observability',
    agent: { emoji: '📡', name: 'ObservabilityAgent', role: 'Monitoring & SRE Specialist', description: 'Expert in observability stack design and incident management', capabilities: ['Dashboard Design', 'Alert Configuration', 'Trace Analysis', 'Incident Management'] },
    pages: [
      { pageNumber: 1, title: 'Metrics & Monitoring', slug: 'metrics-monitoring', description: 'Time-series metrics and monitoring strategies', tags: ['Prometheus', 'StatsD', 'Gauges'] },
      { pageNumber: 2, title: 'Logging', slug: 'logging', description: 'Structured logging and log management', tags: ['ELK', 'Fluentd', 'Structured Logs'] },
      { pageNumber: 3, title: 'Distributed Tracing', slug: 'distributed-tracing', description: 'Request tracing across microservices', tags: ['Jaeger', 'Zipkin', 'OpenTelemetry'] },
      { pageNumber: 4, title: 'Alerting & Incidents', slug: 'alerting-incidents', description: 'Alert design, on-call, and incident management', tags: ['PagerDuty', 'OpsGenie', 'Runbooks'] },
      { pageNumber: 5, title: 'APM', slug: 'apm', description: 'Application performance monitoring', tags: ['New Relic', 'Datadog', 'Dynatrace'] },
      { pageNumber: 6, title: 'AIOps', slug: 'aiops', description: 'AI-driven operations and anomaly detection', tags: ['Anomaly Detection', 'Auto-Remediation', 'ML'] },
    ],
  },
  { id: 17, title: 'Change Management', slug: 'change-management',
    agent: { emoji: '🔄', name: 'ChangeAgent', role: 'Change Management Specialist', description: 'Expert in organizational change, adoption strategies, and stakeholder engagement', capabilities: ['Change Planning', 'Stakeholder Mapping', 'Communication Strategy', 'Adoption Tracking'] },
    pages: [
      { pageNumber: 1, title: 'Change Frameworks', slug: 'change-frameworks', description: 'ADKAR, Kotter 8-Step, and Prosci models', tags: ['ADKAR', 'Kotter', 'Prosci'] },
      { pageNumber: 2, title: 'Stakeholder Management', slug: 'stakeholder-management', description: 'Mapping, engaging, and aligning stakeholders', tags: ['RACI', 'Influence Map', 'Engagement'] },
      { pageNumber: 3, title: 'Adoption Waves', slug: 'adoption-waves', description: 'Phased rollout and adoption acceleration', tags: ['Pilot', 'Rollout', 'Champions'] },
      { pageNumber: 4, title: 'Communication', slug: 'communication', description: 'Change communication planning and execution', tags: ['Messaging', 'Channels', 'Cadence'] },
      { pageNumber: 5, title: 'Training & Enablement', slug: 'training-enablement', description: 'Building capability and confidence', tags: ['Training', 'Self-Service', 'Certification'] },
      { pageNumber: 6, title: 'Adoption Measurement', slug: 'adoption-measurement', description: 'Metrics, dashboards, and success criteria', tags: ['KPIs', 'Surveys', 'Usage Data'] },
      { pageNumber: 7, title: 'Resistance Management', slug: 'resistance-management', description: 'Identifying and addressing resistance to change', tags: ['Root Cause', 'Mitigation', 'Support'] },
    ],
  },
  { id: 18, title: 'Implementation', slug: 'implementation',
    agent: { emoji: '🎯', name: 'ImplementationAgent', role: 'Go-Live & Deployment Specialist', description: 'Expert in implementation planning, cutover execution, and hypercare management', capabilities: ['Go-Live Planning', 'Cutover Execution', 'Hypercare Design', 'Risk Mitigation'] },
    pages: [
      { pageNumber: 1, title: 'Go-Live Planning', slug: 'go-live-planning', description: 'Comprehensive launch preparation', tags: ['Readiness', 'Checklist', 'Criteria'] },
      { pageNumber: 2, title: 'Cutover Management', slug: 'cutover-management', description: 'System transition execution', tags: ['Runbook', 'Rollback', 'Downtime'] },
      { pageNumber: 3, title: 'Hypercare', slug: 'hypercare', description: 'Intensive post-launch support', tags: ['Support Tiers', 'Escalation', 'SLA'] },
      { pageNumber: 4, title: 'Wave Rollout', slug: 'wave-rollout', description: 'Phased deployment across regions/groups', tags: ['Waves', 'Sequencing', 'Dependencies'] },
      { pageNumber: 5, title: 'Post-Implementation', slug: 'post-implementation', description: 'Review, optimization, and lessons learned', tags: ['Retrospective', 'Optimization', 'Handoff'] },
    ],
  },
  { id: 19, title: 'Emerging Technologies', slug: 'emerging-technologies',
    agent: { emoji: '🔮', name: 'EmergingTechAgent', role: 'Technology Forecasting Specialist', description: 'Expert in emerging technology trends, evaluation, and enterprise adoption strategy', capabilities: ['Trend Analysis', 'Technology Evaluation', 'Adoption Strategy', 'Risk Assessment'] },
    pages: [
      { pageNumber: 1, title: 'Foundation Models', slug: 'foundation-models', description: 'Next-gen AI models and their capabilities', tags: ['GPT-5', 'Gemini', 'Claude', 'Open Source'] },
      { pageNumber: 2, title: 'Agentic AI', slug: 'agentic-ai', description: 'Autonomous AI agents that plan, reason, and act', tags: ['AutoGPT', 'LangGraph', 'CrewAI'] },
      { pageNumber: 3, title: 'Multimodal AI', slug: 'multimodal-ai', description: 'AI systems processing text, image, audio, and video', tags: ['Vision', 'Audio', 'Video', 'Cross-Modal'] },
      { pageNumber: 4, title: 'AI Coding', slug: 'ai-coding', description: 'AI-powered code generation and development tools', tags: ['Copilot', 'Cursor', 'Devin'] },
      { pageNumber: 5, title: 'Edge AI', slug: 'edge-ai', description: 'Running AI on edge devices and IoT', tags: ['TinyML', 'ONNX', 'TensorRT'] },
      { pageNumber: 6, title: 'AI Infrastructure', slug: 'ai-infrastructure', description: 'GPUs, TPUs, and AI compute infrastructure', tags: ['NVIDIA', 'TPU', 'Inference'] },
      { pageNumber: 7, title: 'AI Safety', slug: 'ai-safety', description: 'Alignment, guardrails, and responsible development', tags: ['Alignment', 'Guardrails', 'Red Team'] },
      { pageNumber: 8, title: 'RAG & Knowledge', slug: 'rag-knowledge', description: 'Advanced retrieval and knowledge systems', tags: ['RAG', 'GraphRAG', 'Hybrid Search'] },
      { pageNumber: 9, title: 'Observability', slug: 'observability', description: 'Monitoring and evaluating AI systems', tags: ['LangSmith', 'Arize', 'Weights & Biases'] },
      { pageNumber: 10, title: 'Enterprise Adoption', slug: 'enterprise-adoption', description: 'Strategies for adopting emerging tech at scale', tags: ['Pilot', 'Governance', 'Center of Excellence'] },
    ],
  },
  { id: 20, title: 'Industry Forecasts', slug: 'industry-forecasts',
    agent: { emoji: '🔭', name: 'ForecastAgent', role: 'Industry Analyst', description: 'Expert in technology trends, market analysis, and future predictions', capabilities: ['Trend Analysis', 'Market Sizing', 'Technology Forecasting', 'Impact Assessment'] },
    pages: [
      { pageNumber: 1, title: 'Agentic Workforce', slug: 'agentic-workforce', description: 'How AI agents will transform work', tags: ['Automation', 'Augmentation', 'Workforce'] },
      { pageNumber: 2, title: 'Builder Revolution', slug: 'builder-revolution', description: 'The democratization of building software', tags: ['Low-Code', 'AI Coding', 'Citizen Dev'] },
      { pageNumber: 3, title: 'Tech Forecasts', slug: 'tech-forecasts', description: 'Technology market predictions 2025-2030', tags: ['AI', 'Cloud', 'Data', 'Security'] },
    ],
  },
  { id: 21, title: 'White Papers & Research', slug: 'white-papers',
    agent: { emoji: '📄', name: 'ResearchAgent', role: 'Research Analyst', description: 'Expert in synthesizing research, producing white papers, and competitive analysis', capabilities: ['Literature Review', 'Data Synthesis', 'Report Writing', 'Competitive Analysis'] },
    pages: [
      { pageNumber: 1, title: 'AI/ML Research', slug: 'ai-ml-research', description: 'Latest research in AI and machine learning', tags: ['Papers', 'Benchmarks', 'Breakthroughs'] },
      { pageNumber: 2, title: 'Data Analytics', slug: 'data-analytics', description: 'Research on analytics trends and platforms', tags: ['BI', 'Real-Time', 'Semantic Layer'] },
      { pageNumber: 3, title: 'Cloud Platform', slug: 'cloud-platform', description: 'Cloud architecture and migration research', tags: ['Multi-Cloud', 'Serverless', 'Edge'] },
      { pageNumber: 4, title: 'Security & Governance', slug: 'security-governance', description: 'Cybersecurity and data governance research', tags: ['Zero Trust', 'Privacy', 'Compliance'] },
      { pageNumber: 5, title: 'Strategy & Transformation', slug: 'strategy-transformation', description: 'Digital transformation and strategy research', tags: ['Digital Twin', 'Agile', 'Change'] },
    ],
  },
  { id: 22, title: 'Competitive Intelligence', slug: 'competitive-intelligence',
    agent: { emoji: '🏆', name: 'CompetitiveIntelAgent', role: 'Market Intelligence Specialist', description: 'Expert in competitive analysis, battle card creation, and market intelligence', capabilities: ['Market Mapping', 'Competitor Profiling', 'Battle Card Design', 'Win/Loss Analysis'] },
    pages: [
      { pageNumber: 1, title: 'Market Analysis', slug: 'market-analysis', description: 'Competitive landscape assessment', tags: ["Porter's 5", 'SWOT', 'TAM/SAM/SOM'] },
      { pageNumber: 2, title: 'Battle Cards', slug: 'battle-cards', description: 'Creating effective sales battle cards', tags: ['Objections', 'Differentiators', 'Positioning'] },
      { pageNumber: 3, title: 'Win/Loss Analysis', slug: 'win-loss', description: 'Learning from competitive wins and losses', tags: ['Interviews', 'Patterns', 'Insights'] },
      { pageNumber: 4, title: 'Pricing Intelligence', slug: 'pricing-intelligence', description: 'Competitive pricing analysis and strategy', tags: ['Pricing Models', 'Benchmarks', 'Elasticity'] },
      { pageNumber: 5, title: 'CI Tools', slug: 'ci-tools', description: 'Tools and platforms for competitive intelligence', tags: ['Crayon', 'Klue', 'Similarweb'] },
    ],
  },
  { id: 23, title: 'Computer Vision', slug: 'computer-vision',
    agent: { emoji: '👁️', name: 'VisionAgent', role: 'Computer Vision Specialist', description: 'Expert in image classification, object detection, and video analytics', capabilities: ['Model Selection', 'Data Augmentation', 'Transfer Learning', 'Deployment'] },
    pages: [
      { pageNumber: 1, title: 'Image Classification', slug: 'image-classification', description: 'CNNs, transfer learning, and image categorization', tags: ['ResNet', 'EfficientNet', 'ViT'] },
      { pageNumber: 2, title: 'Object Detection', slug: 'object-detection', description: 'YOLO, SSD, and region-based detection', tags: ['YOLO', 'SSD', 'Faster R-CNN'] },
      { pageNumber: 3, title: 'Image Segmentation', slug: 'image-segmentation', description: 'Semantic, instance, and panoptic segmentation', tags: ['U-Net', 'Mask R-CNN', 'SAM'] },
      { pageNumber: 4, title: 'Video Analytics', slug: 'video-analytics', description: 'Action recognition, tracking, and video understanding', tags: ['Tracking', 'Action Recognition', 'Optical Flow'] },
      { pageNumber: 5, title: 'OCR & Document Processing', slug: 'ocr-document', description: 'Text extraction and document intelligence', tags: ['Tesseract', 'Azure Form', 'Textract'] },
      { pageNumber: 6, title: 'Generative Vision', slug: 'generative-vision', description: 'Image generation, style transfer, and GANs', tags: ['Diffusion', 'DALL-E', 'Stable Diffusion'] },
    ],
  },
  { id: 24, title: 'Design Patterns', slug: 'design-patterns',
    agent: { emoji: '📐', name: 'PatternAgent', role: 'Software Design Specialist', description: 'Expert in design patterns, architectural patterns, and code quality', capabilities: ['Pattern Selection', 'Code Review', 'Refactoring Strategy', 'Architecture Design'] },
    pages: [
      { pageNumber: 1, title: 'Creational Patterns', slug: 'creational', description: 'Factory, Builder, Singleton, Prototype', tags: ['Factory', 'Builder', 'Singleton'] },
      { pageNumber: 2, title: 'Structural Patterns', slug: 'structural', description: 'Adapter, Bridge, Composite, Decorator', tags: ['Adapter', 'Facade', 'Proxy'] },
      { pageNumber: 3, title: 'Behavioral Patterns', slug: 'behavioral', description: 'Observer, Strategy, Command, State', tags: ['Observer', 'Strategy', 'Command'] },
      { pageNumber: 4, title: 'Architectural Patterns', slug: 'architectural', description: 'MVC, MVVM, Clean Architecture, Hexagonal', tags: ['MVC', 'Clean', 'Hexagonal'] },
      { pageNumber: 5, title: 'Concurrency Patterns', slug: 'concurrency', description: 'Thread pool, producer-consumer, async/await', tags: ['Thread Pool', 'Async', 'Locks'] },
      { pageNumber: 6, title: 'Enterprise Patterns', slug: 'enterprise', description: 'Repository, Unit of Work, CQRS', tags: ['Repository', 'UoW', 'CQRS'] },
    ],
  },
  { id: 25, title: 'Data Security', slug: 'data-security',
    agent: { emoji: '🛡️', name: 'DataSecurityAgent', role: 'Data Protection Specialist', description: 'Expert in data encryption, access control, and compliance', capabilities: ['Threat Assessment', 'Encryption Design', 'Access Policy', 'Compliance Mapping'] },
    pages: [
      { pageNumber: 1, title: 'Threat Landscape', slug: 'threat-landscape', description: 'Modern data security threats and attack vectors', tags: ['Ransomware', 'Insider Threat', 'Supply Chain'] },
      { pageNumber: 2, title: 'Encryption', slug: 'encryption', description: 'Encryption at rest, in transit, and in use', tags: ['AES', 'TLS', 'Homomorphic'] },
      { pageNumber: 3, title: 'Access Control', slug: 'access-control', description: 'RBAC, ABAC, and fine-grained permissions', tags: ['RBAC', 'ABAC', 'Least Privilege'] },
      { pageNumber: 4, title: 'Compliance', slug: 'compliance', description: 'Regulatory requirements and frameworks', tags: ['GDPR', 'HIPAA', 'PCI DSS'] },
      { pageNumber: 5, title: 'Zero Trust', slug: 'zero-trust', description: 'Implementing zero trust architecture', tags: ['ZTNA', 'Microsegmentation', 'MFA'] },
      { pageNumber: 6, title: 'Incident Response', slug: 'incident-response', description: 'Breach detection, containment, and recovery', tags: ['DFIR', 'Playbook', 'Forensics'] },
    ],
  },
  { id: 26, title: 'Governance', slug: 'governance',
    agent: { emoji: '📋', name: 'GovernanceAgent', role: 'Data Governance Specialist', description: 'Expert in data governance frameworks, quality management, and compliance', capabilities: ['Policy Design', 'Quality Monitoring', 'Metadata Management', 'Compliance Mapping'] },
    pages: [
      { pageNumber: 1, title: 'Data Quality', slug: 'data-quality', description: 'Quality frameworks and monitoring', tags: ['Profiling', 'Rules', 'Monitoring'] },
      { pageNumber: 2, title: 'Metadata Management', slug: 'metadata-management', description: 'Catalogs, lineage, and discovery', tags: ['Catalog', 'Lineage', 'Tags'] },
      { pageNumber: 3, title: 'Security & Privacy', slug: 'security-privacy', description: 'Data protection and privacy controls', tags: ['Masking', 'Encryption', 'Access'] },
      { pageNumber: 4, title: 'Data Stewardship', slug: 'data-stewardship', description: 'Roles, responsibilities, and accountability', tags: ['Stewards', 'Owners', 'RACI'] },
      { pageNumber: 5, title: 'Compliance', slug: 'compliance', description: 'Regulatory compliance and audit readiness', tags: ['GDPR', 'CCPA', 'Audit'] },
      { pageNumber: 6, title: 'Architecture', slug: 'architecture', description: 'Governance architecture and tooling', tags: ['Hub-Spoke', 'Federated', 'Centralized'] },
    ],
  },
  { id: 27, title: 'FinOps', slug: 'finops',
    agent: { emoji: '💰', name: 'FinOpsAgent', role: 'Cloud Financial Specialist', description: 'Expert in cloud cost optimization, forecasting, and unit economics', capabilities: ['Cost Analysis', 'Optimization Planning', 'Forecasting', 'Showback/Chargeback'] },
    pages: [
      { pageNumber: 1, title: 'Cost Visibility', slug: 'cost-visibility', description: 'Tagging, allocation, and cost reporting', tags: ['Tagging', 'Allocation', 'Dashboards'] },
      { pageNumber: 2, title: 'Rate Optimization', slug: 'rate-optimization', description: 'Reserved instances, savings plans, and commitments', tags: ['RI', 'Savings Plans', 'EDP'] },
      { pageNumber: 3, title: 'Usage Optimization', slug: 'usage-optimization', description: 'Right-sizing, idle resources, and scheduling', tags: ['Right-Sizing', 'Scheduling', 'Cleanup'] },
      { pageNumber: 4, title: 'Forecasting', slug: 'forecasting', description: 'Cloud cost prediction and budgeting', tags: ['Budget', 'Forecast', 'Anomaly'] },
      { pageNumber: 5, title: 'Unit Economics', slug: 'unit-economics', description: 'Cost per transaction and business metrics', tags: ['COGS', 'Margin', 'Per-Unit'] },
      { pageNumber: 6, title: 'Multi-Cloud', slug: 'multi-cloud', description: 'Managing costs across multiple cloud providers', tags: ['AWS', 'Azure', 'GCP', 'Comparison'] },
    ],
  },
  { id: 28, title: 'Industry Verticals', slug: 'industry-verticals',
    agent: { emoji: '🏭', name: 'IndustryAgent', role: 'Vertical Strategy Specialist', description: 'Expert in industry-specific technology strategies and use cases', capabilities: ['Industry Analysis', 'Use Case Design', 'Regulatory Mapping', 'Vendor Selection'] },
    pages: [
      { pageNumber: 1, title: 'Healthcare', slug: 'healthcare', description: 'Digital health, clinical AI, and EHR systems', tags: ['HIPAA', 'EHR', 'Clinical AI'] },
      { pageNumber: 2, title: 'Financial Services', slug: 'financial-services', description: 'Banking, insurance, and capital markets technology', tags: ['RegTech', 'Trading', 'KYC'] },
      { pageNumber: 3, title: 'Retail & E-Commerce', slug: 'retail', description: 'Personalization, supply chain, and omnichannel', tags: ['Personalization', 'Supply Chain', 'POS'] },
      { pageNumber: 4, title: 'Manufacturing', slug: 'manufacturing', description: 'Industry 4.0, IoT, and digital twins', tags: ['IoT', 'Digital Twin', 'Predictive'] },
      { pageNumber: 5, title: 'Telecommunications', slug: 'telecommunications', description: '5G, network virtualization, and edge computing', tags: ['5G', 'NFV', 'Edge'] },
      { pageNumber: 6, title: 'Public Sector', slug: 'public-sector', description: 'Government technology and civic innovation', tags: ['GovTech', 'FedRAMP', 'Open Data'] },
    ],
  },
  { id: 29, title: 'Methodologies', slug: 'methodologies',
    agent: { emoji: '📋', name: 'MethodologyAgent', role: 'Process & Methodology Specialist', description: 'Expert in software development methodologies and process optimization', capabilities: ['Methodology Selection', 'Process Design', 'Metrics Definition', 'Continuous Improvement'] },
    pages: [
      { pageNumber: 1, title: 'Agile & Scrum', slug: 'agile-scrum', description: 'Scrum framework, roles, ceremonies, and artifacts', tags: ['Scrum', 'Sprint', 'Backlog'] },
      { pageNumber: 2, title: 'Waterfall', slug: 'waterfall', description: 'Sequential development methodology', tags: ['Requirements', 'Design', 'Testing'] },
      { pageNumber: 3, title: 'Kanban', slug: 'kanban', description: 'Visual workflow and WIP limits', tags: ['WIP', 'Flow', 'Pull System'] },
      { pageNumber: 4, title: 'SAFe', slug: 'safe', description: 'Scaled Agile Framework for enterprises', tags: ['PI Planning', 'ART', 'Portfolio'] },
      { pageNumber: 5, title: 'Lean', slug: 'lean', description: 'Eliminating waste and maximizing value', tags: ['Value Stream', 'Kaizen', 'Waste'] },
      { pageNumber: 6, title: 'DevOps', slug: 'devops', description: 'CI/CD, infrastructure as code, and SRE', tags: ['CI/CD', 'IaC', 'SRE'] },
    ],
  },
]

remainingCats.forEach(cat => {
  generateFromMeta(cat.id, cat.title, cat.slug, cat.agent, cat.pages)
})

console.log('\n✅ All 29 category data files generated!')
