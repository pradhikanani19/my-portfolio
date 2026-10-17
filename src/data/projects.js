// Content is taken from the design brief. Anything still unverified is
// null and displayed as a placeholder / hidden. `stack` should be confirmed
// against each repository before publishing.
export const featured = [
  {
    id: 'moodflix',
    index: '01',
    title: 'MoodFlix',
    subtitle: 'Mood-Based Movie Discovery',
    status: 'Live',
    summary:
      'A movie discovery web application designed to help users explore films based on mood and interests, bringing movie information and recommendation functionality into a more personalized browsing experience.',
    problem:
      'Users can spend a long time browsing movies before finding one that suits their mood or preferences.',
    approach:
      'A focused discovery experience that combines movie data with recommendation logic.',
    features: [
  "Friend-Based Movie Discovery: Connect with friends and discover movies together.",
  "Personalized Recommendations: Explore movie suggestions based on individual moods, interests, and preferences.",
  "Interactive User Interface: Provides an intuitive browsing experience for discovering films."
],
    stack: ['Python', 'Web Development', 'API Integration'], // TODO: confirm exact framework / API / database
    contribution: "Designed and developed MoodFlix, a mood-based movie discovery web application. Contributed to the application's user interface, movie discovery workflow, and integration of movie data and recommendation functionality. Focused on making movie exploration intuitive and user-friendly.",
    learning: 'API integration, data handling, web application structure, recommendation logic, testing and deployment.',
    live: 'https://moodflixxx.onrender.com/',
    
  },
  {
    id: 'citylytics',
    index: '02',
    title: 'Citylytics',
    subtitle: 'Data-Driven City Comparison',
    status: 'Live',
    summary:
      'A data analysis application that compares cities across quality-of-life indicators such as affordability, salary, safety, pollution, climate, happiness, and job opportunities, helping users explore trade-offs through data.',
    problem:
      'Comparing cities requires weighing multiple indicators that can be difficult to interpret side by side.',
    approach:
      'Consolidate indicators, explore patterns and relationships through exploratory analysis and visualizations, and present a transparent weighted comparison.',
    features: [
  "Personalized City Recommendations: Recommends cities that best match users' lifestyles, preferences, and priorities.",
  "Lifestyle-Based Matching: Evaluates user preferences to identify cities suited to their desired way of living.",
  "Interactive User Questionnaire: Collects user preferences to generate more relevant city recommendations.",
  "City Suitability Insights: Helps users understand which cities align with their personal needs and lifestyle goals.",
  "Data-Driven Recommendations: Uses city-related data and user preferences to support informed decisions about where to live."
],
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Data Visualization'], // TODO: confirm each in the code
    contribution: "Designed and developed Citylytics, an interactive data analytics web application focused on exploring and visualizing city-related data. Worked on building the dashboard interface, presenting data through visualizations, and organizing analytical insights into an accessible user experience. Focused on making urban data easier to explore, interpret, and understand.",
    learning: 'Data cleaning, exploratory analysis, statistical reasoning, correlation, ranking logic and data visualization.',
    limitation:
      'Results depend on data quality, definitions, source dates and personal priorities. It is decision support, not an absolute ranking.',
    live: 'https://citylytics-efd6jkqpvmwk92bpfwaafy.streamlit.app/',
    source: null,
  },
  
{
  id: 'careervision',
  index: '03',
  title: 'CareerVision',
  subtitle: 'AI-Powered Career Exploration and Planning Platform',
  status: 'Developed',
  placeholder: false,

  summary:
    'CareerVision is a machine-learning-powered career exploration platform designed to help users explore career possibilities and make more informed decisions about their professional future.',

  problem:
    'Choosing a career path can be challenging when users have limited guidance on how to explore suitable opportunities and plan their next steps.',

  approach:
    'Developed a web application with a React-based frontend and a Python Flask backend, incorporating a machine-learning training pipeline and an API endpoint for career predictions.',

  features: [
    'Machine Learning-Based Predictions: Uses a trained machine-learning pipeline to generate career-related predictions.',
    'Career Exploration: Helps users explore career possibilities and consider potential professional pathways.',
    'Interactive Web Interface: Provides a React-based interface for interacting with the application.',
    'Prediction API: Connects the frontend to a Flask backend through a dedicated prediction endpoint.',
    'Authentication Verification: Includes an API endpoint for verifying authentication.'
  ],

  stack: [
    'React',
    'Vite',
    'Python',
    'Flask',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Tailwind CSS'
  ],

  contribution:
    'Worked on developing CareerVision as a full-stack, machine-learning-based application. Contributed to the React frontend, Python Flask backend, machine-learning training pipeline, and API integration to connect the user interface with prediction functionality.',

  live: null,
  source: null,
},
]

export const additional = [
  {
    title: 'AI-Powered Fabric Intelligence System',
    status: 'In progress',
    text: 'Exploring fabric material classification from images and texture/color features. PCA, LDA and a Probabilistic Neural Network are the proposed methods; none are presented here as completed or evaluated.',
  },
  {
    title: 'Short-Term Air Passenger Demand Forecasting',
    status: 'In progress',
    text: "Exploring short-term passenger demand forecasting with an adaptive Holt's linear trend method. Dataset, metrics and results will be added once validated.",
  },
]
