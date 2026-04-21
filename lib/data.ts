// Portfolio Data - Centralized data management

export const PERSONAL_INFO = {
  name: "Mooj Algoat",
  title: "AI Engineer",
  email: "moojalgoot@gmail.com",
  phone: "+966553227575",
  linkedin: "https://www.linkedin.com/in/mooj-algoat-5a84b52a7",
  whatsapp: "https://wa.me/966553227575",
} as const;

export const ROTATING_TITLES = [
  "AI Engineer",
  "Machine Learning Developer",
  "Data Analyst",
  "NLP Specialist"
] as const;

export const ABOUT_TEXT = `Artificial Intelligence graduate with First Class Honors and strong expertise in developing and applying AI/ML solutions. Skilled in Python, machine learning, natural language processing (NLP), and AI applications with hands-on project experience. Passionate about solving real-world problems using technology and continuously learning new tools and methods.`;

export const SKILLS_DATA = {
  "AI & ML": [
    "AI Application Programming",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Generative AI",
    "Feature Engineering",
    "OpenAI",
    "Langflow",
    "Model Evaluation",
  ],
  "Programming & Tools": [
    "Python",
    "scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "FastAPI",
    "Microsoft Excel",
    "Microsoft Word",
  ],
  "Data & Visualization": [
    "Data Cleaning",
    "Data Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization",
  ],
  "Soft Skills": [
    "Problem-Solving",
    "Critical Thinking",
    "Teamwork",
    "Adaptability",
    "Communication",
    "Time Management",
  ],
} as const;

export const PROJECTS = [
  {
    title: "Zameel",
    description: "A lightweight habit assistant inspired by ELIZA-style conversational approach. Helps college students reflect on their day and stay consistent with positive routines through calm, supportive dialogue.",
    tags: ["NLP", "Chatbot", "Python"],
    image: "/images/zameel.png",
  },
  {
    title: "Visualize",
    description: "An intelligent app supporting visually impaired individuals by combining AI, computer vision, and NLP for navigation, object recognition, and text reading. One app. One voice. Full independence.",
    tags: ["Computer Vision", "NLP", "Accessibility"],
    image: "/images/visualize.png",
  },
  {
    title: "AI Spam Filtering",
    description: "Email management system using AI to classify emails as spam/ham and categorize them by intent (Medicine, Education, etc.) with real-time latency tracking.",
    tags: ["Classification", "NLP", "Machine Learning"],
    image: "/images/ai-spam.png",
  },
  {
    title: "Medical NER",
    description: "Fine-tuned NER model to extract biomedical entities including age, sex, clinical events, diseases, biological structures, therapeutic procedures, and medications from medical text.",
    tags: ["NLP", "Transformers", "Healthcare"],
    image: "/images/medical-ner.png",
  },
  {
    title: "Cardiovascular Disease Classification",
    description: "ML model classifying patients by cardiovascular disease risk using health metrics like blood pressure, cholesterol, glucose, and lifestyle factors.",
    tags: ["Classification", "Healthcare", "Ensemble"],
    image: "/images/cardiovascular.jpg",
  },
  {
    title: "IMDB Sentiment Analysis",
    description: "ML pipeline classifying IMDB movie reviews as positive/negative with an interactive web interface for real-time sentiment prediction.",
    tags: ["NLP", "Sentiment Analysis", "Text Classification"],
    image: "/images/imdb.png",
  },
  {
    title: "Spider Robot (Quadruped)",
    description: "Four-legged spider robot built using 3D printing, servo motors, Arduino Nano, and autonomous movement programming for robotics exploration.",
    tags: ["Robotics", "Arduino", "Hardware"],
    image: "/images/spider-robot.png",
  },
  {
    title: "Car Detection",
    description: "Complete car detection pipeline using YOLO11n with 99.9% precision, 99.8% recall, and mAP50 of 99.5%. Trained and validated on custom dataset.",
    tags: ["Computer Vision", "YOLO", "Object Detection"],
    image: "/images/car-detection.png",
  },
] as const;

export const EXPERIENCES = [
  {
    role: "AI Bootcamp Trainee",
    company: "Tuwaiq Academy",
    location: "Riyadh, KSA",
    period: "Feb 2026 - Apr 2026",
    bullets: [
      "Built end-to-end AI solutions covering data preprocessing, feature engineering, model training, and deployment.",
      "Developed and optimized ML/DL models using scikit-learn, TensorFlow, and PyTorch.",
      "Implemented classification, regression, clustering, and anomaly detection algorithms.",
      "Applied model evaluation techniques including Cross-Validation, ROC-AUC, and F1-score.",
      "Deployed AI prototypes using Streamlit for interactive business applications.",
    ],
  },
  {
    role: "AI Intern - Mobility B2B",
    company: "ELM Company",
    location: "Riyadh, KSA",
    period: "Jan 2025 - May 2025",
    bullets: [
      "Developed and tested ML/DL models using scikit-learn, PyTorch, TensorFlow, and YOLO.",
      "Conducted data preprocessing, feature engineering, and exploratory analysis on large-scale datasets.",
      "Built predictive models for engine health and vehicle maintenance.",
      "Designed data visualizations with Seaborn, Plotly, and ggplot.",
    ],
  },
  {
    role: "Website Content Manager",
    company: "WED Social Association",
    location: "Riyadh, KSA",
    period: "Aug 2025 - Nov 2025",
    bullets: [
      "Created, restructured, and managed website pages using MarkazTech platform.",
      "Updated and uploaded files including annual reports and policy documents.",
      "Optimized web content for clarity and accessibility.",
      "Managed live updates ensuring accuracy and minimal downtime.",
    ],
  },
] as const;

export const CERTIFICATES = [
  {
    title: "Certified Associate — Generative AI and LLMs",
    issuer: "NVIDIA",
    year: "Jan 2026 – Jan 2028",
    image: "/images/certificate.png",
    featured: true,
  },
  {
    title: "Machine Learning with Python (ML0101EN)",
    issuer: "IBM",
    year: "May 2023",
    image: "/images/ibm-ml.png",
    featured: false,
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "SDAIA",
    year: "Sep 2025",
    image: "/images/sdaia.png",
    featured: false,
  },
  {
    title: "Professional Training in Generative AI (NVIDIA)",
    issuer: "SDAIA × NVIDIA",
    year: "Jan 2026",
    image: "/images/sdaia-nvidia.png",
    featured: false,
  },
  {
    title: "Guided Learning — Generative AI to Derive Insights from Data",
    issuer: "IBM SkillsBuild",
    year: "Mar 2025",
    image: "/images/ibm-skillsbuild.png",
    featured: false,
  },
] as const;

export const NVIDIA_LEARNING = [
  { title: "Getting Started with Deep Learning", image: "/images/nvidia-deep-learning.png", year: "Jan 2026" },
  { title: "Accelerating End-to-End Data Science Workflows", image: "/images/nvidia-data-science.png", year: "Jan 2026" },
  { title: "Building LLM Applications with Prompt Engineering", image: "/images/nvidia-llm-prompt.png", year: "Jan 2026" },
  { title: "Rapid Application Development with LLMs", image: "/images/nvidia-rapid-llm.png", year: "Jan 2026" },
  { title: "Introduction to Transformer-Based NLP", image: "/images/nvidia-nlp-transformer.png", year: "Jan 2026" },
] as const;

export const LEARNING_BADGES = [
  "AI Concepts & Advanced Applications — SDAIA",
  "Deep Learning with TensorFlow — LinkedIn",
  "Advanced Python: Working With Data — LinkedIn",
  "OpenAI API: Vision — LinkedIn",
  "Data Science Foundations — LinkedIn",
  "Generative AI: Intro to LLMs — LinkedIn",
  "Database Foundations — Oracle",
  "SQL Schema Script",
  "JNCIA-MistAI — HPE",
  "AI Aware — Intel",
  "AI Appreciate — Intel",
  "AI Adapt — Intel",
  "JavaScript 101 — سطر",
  "Python 103 — سطر",
  "Doroob CS Certificate",
] as const;

export const FOOTER_BG = "/images/footer-bg.png";

export const HEADER_IMAGE = "/header-img.svg";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
] as const;
