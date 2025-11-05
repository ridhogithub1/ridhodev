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
  // Website Arabic Morphology - Paling Atas
  { 
    slug: 'arabic-morphology', 
    title: 'Website Arabic Morphology', 
    stack: 'Web', 
    description: 'Morphological parsing and educational interface for Arabic language analysis with interactive visualization and comprehensive rule sets.', 
    role: 'Full-Stack', 
    highlights: [
      'Morphological parsing engine dengan rule-based system',
      'Interactive UI untuk visualisasi struktur kata',
      'Educational interface dengan penjelasan detail',
      'Database komprehensif untuk root words dan patterns',
      'Real-time analysis dan parsing',
      'Export hasil analisis ke berbagai format'
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
      'Advanced tokenizer untuk teks bahasa Arab',
      'Morphological rules engine yang komprehensif',
      'POS tagging dan syntactic analysis',
      'Search dan filter berdasarkan kategori',
      'User-friendly interface dengan responsive design',
      'API integration untuk eksternal tools'
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
      'Incident submission system dengan foto dan lokasi',
      'Real-time analytics dashboard dengan charts',
      'Notification system untuk update status',
      'Role-based access control (Admin, User, Manager)',
      'Mobile app dengan offline capability',
      'Report generation dan export ke PDF/Excel',
      'Timeline tracking untuk setiap incident'
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
      'Advanced data table dengan sorting dan filtering',
      'Pagination dan search functionality',
      'Role-based authentication (mock)',
      'Dashboard dengan statistics dan charts',
      'Bulk operations untuk data management',
      'Export data ke CSV/Excel',
      'Responsive design untuk mobile dan desktop'
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
      'R&D features untuk mobile admin functionality',
      'RESTful API integration dengan authentication',
      'Offline data synchronization',
      'Push notifications untuk updates',
      'Biometric authentication support',
      'Dark mode dan theme customization',
      'Local database dengan Room persistence'
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
      'Feature engineering dari historical data',
      'Multiple forecasting models (LSTM, ARIMA, Prophet)',
      'Model evaluation dengan metrics (MAE, RMSE, MAPE)',
      'Data visualization dengan interactive charts',
      'Automated pipeline untuk data preprocessing',
      'Backtesting dan validation techniques',
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
      'Dataset collection dan preprocessing (5000+ images)',
      'Data augmentation techniques (rotation, flip, brightness)',
      'CNN model training dengan transfer learning',
      'Real-time inference dengan webcam integration',
      'Accuracy metrics dan confusion matrix',
      'Model optimization untuk mobile deployment',
      'Batch processing untuk multiple detections'
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
      'Web scraping dari multiple social media platforms',
      'Data preprocessing dan text cleaning',
      'Sentiment classification model (Positive, Negative, Neutral)',
      'Model evaluation dengan accuracy dan F1-score',
      'Visualization dashboard dengan sentiment distribution',
      'Time-series analysis untuk trend tracking',
      'Export results ke CSV untuk further analysis'
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
      'User authentication dengan email dan phone',
      'Menu browsing dengan kategori dan search',
      'Shopping cart dengan add/remove items',
      'Order placement dengan multiple payment methods',
      'Loyalty points system dengan rewards',
      'Order history dan tracking status',
      'Push notifications untuk promotions'
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
      'Interactive map dengan marker untuk setiap barbershop',
      'Location-based search dengan radius filter',
      'Route calculation dan directions',
      'Barbershop details dengan rating dan reviews',
      'Photo gallery untuk setiap location',
      'Booking system dengan calendar integration',
      'Admin panel untuk manage locations'
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
      'Character controller dengan smooth movement',
      'Multiple levels dengan different difficulty',
      'Basic enemy AI dengan patrol dan chase behavior',
      'Weapon system dengan shooting mechanics',
      'Health system dan damage calculation',
      'UI untuk score, health, dan ammo',
      'Particle effects untuk explosions dan impacts'
    ], 
    links: [] 
  },
  // Sistem Pengaduan Masyarakat Pekanbaru
  { 
    slug: 'pengaduan-pekanbaru', 
    title: 'Sistem Pengaduan Masyarakat Pekanbaru', 
    stack: 'PHP', 
    description: 'Public complaint system for reporting and tracking cases with comprehensive management features.', 
    role: 'Full-Stack', 
    highlights: [
      'Pelaporan dengan upload foto dan dokumen',
      'Tracking system dengan status updates',
      'Role-based access (Admin, Staff, Public)',
      'Category-based complaint classification',
      'Notification system via email dan SMS',
      'Analytics dashboard untuk admin',
      'Report generation dengan filtering options'
    ], 
    links: [] 
  },
  // UI/UX Aplikasi Layanan Kesehatan
  { 
    slug: 'health-ux', 
    title: 'UI/UX Aplikasi Layanan Kesehatan', 
    stack: 'Figma', 
    description: 'Design system and prototype for health services app with comprehensive user flows.', 
    role: 'Designer', 
    highlights: [
      'Complete design system dengan color palette',
      'Component library untuk reusable elements',
      'Prototype user flow untuk main features',
      'User research dan persona development',
      'Wireframing dan low-fidelity mockups',
      'High-fidelity designs dengan animations',
      'Design handoff documentation untuk developers'
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
      'Interactive charts dengan Chart.js integration',
      'Multiple chart types (line, bar, pie, map)',
      'Dynamic filtering berdasarkan date range dan category',
      'Real-time data updates dari database',
      'Export charts ke PNG dan PDF',
      'Drill-down functionality untuk detail analysis',
      'Responsive design untuk all screen sizes'
    ], 
    links: [] 
  },
  // Sistem Lomba PCR
  { 
    slug: 'sistem-lomba-pcr', 
    title: 'Sistem Lomba PCR', 
    stack: 'PHP', 
    description: 'Competition management system for registration and scoring with automated ranking.', 
    role: 'Full-Stack', 
    highlights: [
      'Online registration system dengan form validation',
      'Participant management dengan CRUD operations',
      'Automated scoring system dengan multiple criteria',
      'Real-time ranking calculation',
      'Certificate generation untuk winners',
      'Email notifications untuk registration confirmation',
      'Admin panel untuk manage competitions'
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
      'Product catalog dengan kategori dan search',
      'Shopping cart dengan add/remove/update items',
      'User authentication dan profile management',
      'Order placement dengan checkout flow',
      'Payment integration (mock) dengan multiple methods',
      'Order history dan tracking',
      'Admin panel untuk manage products dan orders'
    ], 
    links: [] 
  },
  // Aplikasi Kasir Sederhana - Paling Bawah
  { 
    slug: 'kasir-sederhana', 
    title: 'Aplikasi Kasir Sederhana', 
    stack: 'Java', 
    description: 'Point-of-sale desktop application with basic inventory management and sales reporting.', 
    role: 'Developer', 
    highlights: [
      'CRUD operations untuk inventory management',
      'Transaction processing dengan receipt generation',
      'Sales report dengan daily/monthly summaries',
      'Product search dan barcode scanning support',
      'Cashier interface dengan keyboard shortcuts',
      'Data backup dan restore functionality',
      'Print receipt dengan thermal printer support'
    ], 
    links: [] 
  },
]

export const allProjects: Project[] = projects


