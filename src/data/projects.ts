export type Project = {
  slug: string
  title: string
  stack: string
  description: string
  role?: string
  period?: string
  highlights?: string[]
  links?: { label: string; url: string }[]
}

const projects: Project[] = [
  // Website Arabic Morphology
  { 
    slug: 'arabic-morphology', 
    title: 'Website Arabic Morphology', 
    stack: 'Web', 
    description: 'Morphological parsing and educational interface for Arabic language analysis with interactive visualization and comprehensive rule sets.', 
    role: 'Full-Stack', 
    highlights: [
      'Morphological parsing engine with rule-based system',
      'Interactive UI for word structure visualization',
      'Educational interface with detailed explanations',
      'Comprehensive database for root words and patterns',
      'Real-time analysis and parsing',
      'Export analysis results to various formats'
    ], 
    links: [] 
  },
  // Website Arabic Analyzer
  { 
    slug: 'arabic-analyzer', 
    title: 'Website Arabic Analyzer', 
    stack: 'Web', 
    description: 'Arabic text analysis tooling with morphology rules, tokenization, and advanced linguistic features.', 
    role: 'Full-Stack', 
    highlights: [
      'Advanced tokenizer for Arabic text',
      'Comprehensive morphological rules engine',
      'POS tagging and syntactic analysis',
      'Search and filter by category',
      'User-friendly interface with responsive design',
      'API integration for external tools'
    ], 
    links: [] 
  },
  // Website & App NOSA and Near Miss Report
  { 
    slug: 'nosa-near-miss', 
    title: 'Website & App NOSA and Near Miss Report', 
    stack: 'Web + Mobile', 
    description: 'Safety reporting solutions across web and mobile platforms for incident management and analytics.', 
    role: 'Full-Stack', 
    highlights: [
      'Incident submission system with photo and location',
      'Real-time analytics dashboard with charts',
      'Notification system for status updates',
      'Role-based access control (Admin, User, Manager)',
      'Mobile app with offline capability',
      'Report generation and export to PDF/Excel',
      'Timeline tracking for each incident'
    ], 
    links: [] 
  },
  // Web Service Administration App RND
  { 
    slug: 'web-admin-rnd', 
    title: 'Web Service Administration App RND', 
    stack: 'ASP.NET', 
    description: 'Admin web portal exploration for service management with comprehensive features and role management.', 
    role: 'Frontend', 
    highlights: [
      'Advanced data table with sorting and filtering',
      'Pagination and search functionality',
      'Role-based authentication (mock)',
      'Dashboard with statistics and charts',
      'Bulk operations for data management',
      'Export data to CSV/Excel',
      'Responsive design for mobile and desktop'
    ], 
    links: [] 
  },
  // Mobile Administration App RND
  { 
    slug: 'mobile-admin-rnd', 
    title: 'Mobile Administration App RND', 
    stack: 'Kotlin', 
    description: 'Research and prototyping of admin features on mobile platform with API integration.', 
    role: 'Full-Stack', 
    highlights: [
      'R&D features for mobile admin functionality',
      'RESTful API integration with authentication',
      'Offline data synchronization',
      'Push notifications for updates',
      'Biometric authentication support',
      'Dark mode and theme customization',
      'Local database with Room persistence'
    ], 
    links: [] 
  },
  // Walmart Stock Price Prediction
  { 
    slug: 'walmart-forecast', 
    title: 'Walmart Stock Price Prediction', 
    stack: 'Python', 
    description: 'Time-series forecasting experiments for stock price trends using machine learning models.', 
    role: 'Data Scientist', 
    highlights: [
      'Feature engineering from historical data',
      'Multiple forecasting models (LSTM, ARIMA, Prophet)',
      'Model evaluation with metrics (MAE, RMSE, MAPE)',
      'Data visualization with interactive charts',
      'Automated pipeline for data preprocessing',
      'Backtesting and validation techniques',
      'Performance comparison dashboard'
    ], 
    links: [] 
  },
  // Deep Learning Face Mask Detector
  { 
    slug: 'mask-detector', 
    title: 'Deep Learning Face Mask Detector', 
    stack: 'TensorFlow', 
    description: 'Computer vision model to detect mask usage with real-time inference capabilities.', 
    role: 'CV Engineer', 
    highlights: [
      'Dataset collection and preprocessing (5000+ images)',
      'Data augmentation techniques (rotation, flip, brightness)',
      'CNN model training with transfer learning',
      'Real-time inference with webcam integration',
      'Accuracy metrics and confusion matrix',
      'Model optimization for mobile deployment',
      'Batch processing for multiple detections'
    ], 
    links: [] 
  },
  // Sentiment Analysis Presiden 2024
  { 
    slug: 'sentiment-presiden-2024', 
    title: 'Sentiment Analysis Presiden 2024', 
    stack: 'Deep Learning', 
    description: 'NLP pipeline and sentiment model for social media data analysis with comprehensive preprocessing.', 
    role: 'ML Engineer', 
    highlights: [
      'Web scraping from multiple social media platforms',
      'Data preprocessing and text cleaning',
      'Sentiment classification model (Positive, Negative, Neutral)',
      'Model evaluation with accuracy and F1-score',
      'Visualization dashboard with sentiment distribution',
      'Time-series analysis for trend tracking',
      'Export results to CSV for further analysis'
    ], 
    links: [] 
  },
  // Kaizen Coffee App
  { 
    slug: 'kaizen-coffee', 
    title: 'Kaizen Coffee App', 
    stack: 'Kotlin', 
    description: 'Mobile app for coffee ordering and loyalty program with modern UI/UX design.', 
    role: 'Mobile Dev', 
    highlights: [
      'User authentication with email and phone',
      'Menu browsing with category and search',
      'Shopping cart with add/remove items',
      'Order placement with multiple payment methods',
      'Loyalty points system with rewards',
      'Order history and tracking status',
      'Push notifications for promotions'
    ], 
    links: [] 
  },
  // SIG Barbershop Pekanbaru
  { 
    slug: 'sig-barbershop', 
    title: 'SIG Barbershop Pekanbaru', 
    stack: 'PHP + JS', 
    description: 'GIS-powered barbershop locator with interactive map and location-based search features.', 
    role: 'Full-Stack', 
    highlights: [
      'Interactive map with markers for each barbershop',
      'Location-based search with radius filter',
      'Route calculation and directions',
      'Barbershop details with rating and reviews',
      'Photo gallery for each location',
      'Booking system with calendar integration',
      'Admin panel to manage locations'
    ], 
    links: [] 
  },
  // War Front Heroes Game
  { 
    slug: 'war-front-heroes', 
    title: 'War Front Heroes Game', 
    stack: 'C# Unity', 
    description: 'Action game prototype with character controls, levels, and enemy AI system.', 
    role: 'Developer', 
    highlights: [
      'Character controller with smooth movement',
      'Multiple levels with different difficulty',
      'Basic enemy AI with patrol and chase behavior',
      'Weapon system with shooting mechanics',
      'Health system and damage calculation',
      'UI for score, health, and ammo',
      'Particle effects for explosions and impacts'
    ], 
    links: [] 
  },
  // Sistem Pengaduan Masyarakat Pekanbaru
  { 
    slug: 'pengaduan-pekanbaru', 
    title: 'Public Complaint System Pekanbaru', 
    stack: 'PHP', 
    description: 'Public complaint system for reporting and tracking cases with comprehensive management features.', 
    role: 'Full-Stack', 
    highlights: [
      'Report submission with photo and document upload',
      'Tracking system with status updates',
      'Role-based access (Admin, Staff, Public)',
      'Category-based complaint classification',
      'Notification system via email and SMS',
      'Analytics dashboard for admin',
      'Report generation with filtering options'
    ], 
    links: [] 
  },
  // UI/UX Aplikasi Layanan Kesehatan
  { 
    slug: 'health-ux', 
    title: 'Health Services App UI/UX', 
    stack: 'Figma', 
    description: 'Design system and prototype for health services app with comprehensive user flows.', 
    role: 'Designer', 
    highlights: [
      'Complete design system with color palette',
      'Component library for reusable elements',
      'Prototype user flow for main features',
      'User research and persona development',
      'Wireframing and low-fidelity mockups',
      'High-fidelity designs with animations',
      'Design handoff documentation for developers'
    ], 
    links: [] 
  },
  // Dashboard Safety Report New York
  { 
    slug: 'safety-report-ny', 
    title: 'Dashboard Safety Report New York', 
    stack: 'PHP', 
    description: 'Insights dashboard for safety reporting data with interactive visualizations and filters.', 
    role: 'Developer', 
    highlights: [
      'Interactive charts with Chart.js integration',
      'Multiple chart types (line, bar, pie, map)',
      'Dynamic filtering by date range and category',
      'Real-time data updates from database',
      'Export charts to PNG and PDF',
      'Drill-down functionality for detail analysis',
      'Responsive design for all screen sizes'
    ], 
    links: [] 
  },
  // Sistem Lomba PCR
  { 
    slug: 'sistem-lomba-pcr', 
    title: 'PCR Competition System', 
    stack: 'PHP', 
    description: 'Competition management system for registration and scoring with automated ranking.', 
    role: 'Full-Stack', 
    highlights: [
      'Online registration system with form validation',
      'Participant management with CRUD operations',
      'Automated scoring system with multiple criteria',
      'Real-time ranking calculation',
      'Certificate generation for winners',
      'Email notifications for registration confirmation',
      'Admin panel to manage competitions'
    ], 
    links: [] 
  },
  // Selva-Craft-Ecommerce
  { 
    slug: 'selva-craft', 
    title: 'Selva-Craft-Ecommerce', 
    stack: 'PHP', 
    description: 'E-commerce platform for craft products with shopping cart and checkout process.', 
    role: 'Frontend', 
    highlights: [
      'Product catalog with category and search',
      'Shopping cart with add/remove/update items',
      'User authentication and profile management',
      'Order placement with checkout flow',
      'Payment integration (mock) with multiple methods',
      'Order history and tracking',
      'Admin panel to manage products and orders'
    ], 
    links: [] 
  },
  // Aplikasi Kasir Sederhana
  { 
    slug: 'kasir-sederhana', 
    title: 'Simple Cashier Application', 
    stack: 'Java', 
    description: 'Point-of-sale desktop application with basic inventory management and sales reporting.', 
    role: 'Developer', 
    highlights: [
      'CRUD operations for inventory management',
      'Transaction processing with receipt generation',
      'Sales report with daily/monthly summaries',
      'Product search and barcode scanning support',
      'Cashier interface with keyboard shortcuts',
      'Data backup and restore functionality',
      'Print receipt with thermal printer support'
    ], 
    links: [] 
  },
]

export const allProjects: Project[] = projects
