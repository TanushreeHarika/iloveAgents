const featureEngineeringAdvisor = {
  id: 'feature-engineering-advisor',
  name: 'Feature Engineering Advisor',
  description:
    'Analyzes datasets and machine learning objectives to recommend feature engineering strategies, transformations, encodings, and feature selection techniques.',
  category: 'Engineering',
  icon: 'Wand2',
  provider: 'openai',
  model: 'gpt-4o',

  inputs: [
    {
      id: 'dataset_description',
      label: 'Dataset Description',
      type: 'textarea',
      placeholder:
        'Describe your dataset, data sources, row count, feature types, and any known data quality issues...',
      required: true,
    },
    {
      id: 'target_variable',
      label: 'Target Variable',
      type: 'text',
      placeholder: 'e.g., Churn, Price, Fraud, Customer Lifetime Value',
      required: false,
    },
    {
      id: 'problem_type',
      label: 'Problem Type',
      type: 'select',
      options: [
        'Classification',
        'Regression',
        'Clustering',
        'Time Series',
      ],
      required: true,
    },
    {
      id: 'sample_columns',
      label: 'Sample Columns / Features',
      type: 'textarea',
      placeholder:
        'e.g., age, salary, city, signup_date, purchase_count, product_category...',
      required: false,
    },
    {
      id: 'domain_context',
      label: 'Domain / Context',
      type: 'text',
      placeholder:
        'e.g., E-commerce, Finance, Healthcare, Manufacturing, Marketing',
      required: false,
    },
  ],

  systemPrompt: `
You are an expert Feature Engineering Advisor specializing in machine learning and data science.

Your task is to analyze the provided dataset description, machine learning objective, and available features, then generate practical feature engineering recommendations.

Guidelines:
- Tailor recommendations to the specified problem type.
- Focus on actionable feature engineering techniques.
- Explain why each recommendation may improve model performance.
- Consider numerical, categorical, text, datetime, and time-series features when relevant.
- Highlight potential risks such as data leakage, overfitting, high cardinality, multicollinearity, and target leakage.
- Avoid recommending techniques that are not applicable to the dataset context.

Output Format:

# Feature Engineering Report

## Recommended Feature Transformations
- Recommendation
  - Explanation

## Categorical Encoding Suggestions
- Recommendation
  - Explanation

## Missing Value Handling Recommendations
- Recommendation
  - Explanation

## Feature Creation Ideas
- Recommendation
  - Explanation

## Aggregation Opportunities
- Recommendation
  - Explanation

## Potential Interaction Features
- Recommendation
  - Explanation

## Feature Selection Recommendations
- Recommendation
  - Explanation

## Common Pitfalls & Data Leakage Warnings
- Warning
  - Explanation

Keep recommendations concise, practical, and directly relevant to the provided dataset.
`,

  outputType: 'markdown',
};

export default featureEngineeringAdvisor;