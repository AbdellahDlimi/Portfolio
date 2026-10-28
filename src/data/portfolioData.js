export const personalInfo = {
  name: "Abdellah Dlimi",
  title: "Big Data, Data Science & Artificial Intelligence",
  subtitle: "Big Data • Data Science • Artificial Intelligence | 5ème Année ENSA Agadir",
  status: "Looking for Internship • Stage PFE",
  bio: "Élève-ingénieur en 5ème année (dernière année) à l'ENSA d'Agadir, spécialisé en Big Data, Data Science et Intelligence Artificielle. Actuellement à la recherche d'un stage de fin d'études (PFE / Looking for Internship) à partir de début 2027. Passionné par la transformation des données brutes en insights stratégiques, je possède une solide expérience pratique en Machine Learning, Deep Learning, architectures événementielles (Kafka), pipelines ETL, Business Intelligence et écosystèmes Big Data (Spark, Hadoop). Je m'investis pleinement dans chaque projet, de la modélisation à la mise en production.",
  email: "dlimi1abdellah@gmail.com",
  phone: "+212 631862896",
  location: "Agadir, Maroc",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdellah-dlimi-78a719330",
    github: "https://github.com/AbdellahDlimi",
  },
  stats: [
    { label: "Année d'Ingénierie", value: "5ème ENSA" },
    { label: "Stages Techniques", value: "2 Stages" }
  ]
};

export const experiences = [
  {
    id: "exp-tasmim",
    company: "Tasmim Web",
    role: "Stagiaire Développeur R&D & IA (en binôme avec Ilyass Aitaqmout)",
    period: "2025 — 2026 • Stage de 2 mois",
    badge: "Stage R&D (2 mois) • PFA",
    location: "Maroc (Pôle R&D et Dév Web/Mobile)",
    description: "Conception et réalisation de TrustPool, une plateforme SaaS d'assurance collaborative Peer-to-Peer (P2P) assistée par Intelligence Artificielle et architecture événementielle (Projet de Fin d'Année mené en binôme avec Ilyass Aitaqmout, encadré par M. El Mahjoub AIT MEDDAH).",
    achievements: [
      "Architecture Microservices Event-Driven : Modélisation et implémentation d'une architecture distribuée découplée par un bus d'événements Apache Kafka (10 topics applicatifs) et une passerelle API FastAPI centralisée.",
      "Détection de Fraude & Analyse Graph (Chien de Garde) : Pipeline d'analyse multi-niveaux associant extraction OCR de factures, détection de réseaux de collusion entre membres via base graphe Neo4j et calcul de score de risque par Isolation Forest.",
      "Moteur de Matchmaking IA & Copilote RAG : Algorithme vectoriel de recommandation de communautés (similarité cosinus, budget, profil de risque) et assistant conversationnel multilingue avec pgvector (PostgreSQL 16) et le LLM Google Gemini.",
      "Fintech, Double Trésorerie & Bonus-Malus : Modèle de mutualisation solidaire à double cagnotte (principale + Buffer Pool de sécurité), tarification dynamique Bonus-Malus (+0.20 par sinistre validé, max 2.00) et intégration Stripe Elements avec webhooks sécurisés.",
      "Sécurité & Zero-Knowledge KYC : Pseudonymisation stricte des membres (anti-discrimination), coffre-fort d'identité chiffré au repos (Fernet / AES / AWS KMS) et procédure auditable de levée d'anonymat en cas de litige.",
      "Frontend Réactif & Validation Pytest : Interface moderne avec React 18, Vite, Tailwind CSS, Framer Motion et couverture complète par tests unitaires et d'intégration asynchrones (Pytest, 100% de succès sur les flux critiques)."
    ]
  },
  {
    id: "exp-srm",
    company: "SRM Souss-Massa (SRM-SM)",
    role: "Stagiaire Développeur & Données",
    period: "Juillet 2025 — Août 2025",
    badge: "Stage Technique",
    location: "Agadir, Maroc",
    description: "Conception et développement d'une plateforme complète de gestion et de suivi des candidatures de stage pour la Société Régionale Multiservices Souss-Massa.",
    achievements: [
      "Développement d'une plateforme Web complète de gestion des candidatures de stages (dépôt, suivi temps réel, validation administrative) suivant l'architecture MVC avec MySQL.",
      "Authentification sécurisée avec chiffrement robuste (bcrypt) et gestion granulaire des rôles (candidats, encadrants, administration).",
      "Génération automatique des conventions et attestations de stage au format PDF.",
      "Intégration d'un système de notifications automatiques par email via protocole SMTP / Gmail selon l'avancement des candidatures.",
      "Tableau de bord administrateur avec filtres dynamiques multicritères basés sur le statut, la spécialité et la période."
    ]
  },
  {
    id: "exp-acad",
    company: "Projets d'Ingénierie & Recherche Académique",
    role: "Élève-Ingénieur Big Data, Data Science & AI",
    period: "2024 — 2026",
    badge: "ENSA Agadir",
    location: "Agadir, Maroc",
    description: "Réalisation de solutions complètes en Deep Learning vibratoire, Business Intelligence, modélisation de bases de données distribuées et Machine Learning appliqué.",
    achievements: [
      "VibAE-Monitor : Conception d'un système intelligent de maintenance prédictive par Autoencodeur CNN 2D et DenseNet121 pour la détection d'anomalies vibratoires sur roulements mécaniques.",
      "Architecture BDA : Modélisation Merise et développement sous Oracle DB de déclencheurs PL/SQL et procédures stockées pour un système transactionnel de bibliothèque.",
      "Data Warehouse : Conception d'un entrepôt de données en étoile sous AWS RDS avec flux ETL automatisés via Talend Open Studio (PDI) et 2 tableaux de bord décisionnels Power BI (24 mesures DAX).",
      "Machine Learning Suite : Entraînement et benchmarking d'algorithmes supervisés (régression, arbres de décision, Random Forest, KNN) et clustering non supervisé (K-Means sur Mall Customers)."
    ]
  }
];

export const educations = [
  {
    id: "edu-1",
    institution: "École Nationale des Sciences Appliquées (ENSA), Agadir",
    degree: "Cycle Ingénieur d'État — Big Data, Data Science & Artificial Intelligence",
    period: "2022 — Présent",
    honors: "5ème Année (Dernière Année) en cours",
    image: "/certificates/images/ensa_agadir.png",
    imageCaption: "Campus ENSA Agadir",
    details: [
      "Modules de spécialisation : Machine Learning, Deep Learning, Architectures Big Data (Hadoop, HDFS, MapReduce, Spark, PySpark), Bases de Données (Oracle DB, PL/SQL, NoSQL), Business Intelligence & Cloud.",
      "Gestion de projets d'ingénierie appliquée de bout en bout : de la collecte et prétraitement de données jusqu'au déploiement et monitoring de modèles."
    ]
  },
  {
    id: "edu-2",
    institution: "Lycée Al Nahda, Oued Teima",
    degree: "Baccalauréat en Sciences Physiques",
    period: "2019 — 2022",
    honors: "Mention Très Bien (Highest Honors)",
    details: [
      "Formation scientifique d'excellence axée sur les mathématiques appliquées, la physique et la méthodologie de résolution analytique."
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "Tous les Projets" },
  { id: "ai-dl", label: "Deep Learning & AI", color: "violet" },
  { id: "bigdata-bi", label: "Big Data & Business Intelligence", color: "indigo" },
  { id: "rdbms-app", label: "SGBD, BDA & Systèmes Web", color: "blue" },
  { id: "academic-ml", label: "Travaux Académiques ML", color: "emerald" }
];

export const projects = [
  {
    id: "proj-trustpool",
    title: "TrustPool — SaaS d'Assurance P2P",
    subtitle: "Assurance Collaborative assistée par IA (avec Ilyass Aitaqmout)",
    category: "ai-dl",
    categoryName: "Deep Learning & AI",
    badge: "Stage R&D Tasmim Web • 2 Mois (2025–2026)",
    description: "Plateforme SaaS Cloud-Native d'assurance collaborative Peer-to-Peer réinventant le modèle mutualiste grâce aux microservices événementiels (Kafka) et à l'IA explicable (détection de fraude documentaire et graphe Neo4j, moteur de recommandation et copilote RAG).",
    highlights: [
      "Chien de Garde : Pipeline d'analyse multi-niveaux associant extraction OCR, détection de réseaux de collusion via Neo4j et scoring par Isolation Forest.",
      "Copilote RAG multilingue (Google Gemini + pgvector) et moteur Matchmaker multicritère (similarité cosinus, profil de risque, budget).",
      "Double trésorerie (cagnotte + Buffer Pool de réserve), tarification dynamique Bonus-Malus et paiement sécurisé via Stripe Elements.",
      "Sécurité Zero-Knowledge KYC, chiffrement AES/Fernet avec AWS KMS et procédure de levée d'anonymat en cas de litige."
    ],
    tags: ["FastAPI", "React 18", "Apache Kafka", "Neo4j", "pgvector", "RAG (Gemini)", "Stripe", "Docker", "Pytest"],
    github: "https://github.com/AbdellahDlimi/insurance-platform",
    demo: "https://github.com/AbdellahDlimi/insurance-platform",
    featured: true,
    stats: "Architecture Event-Driven • 100% Tests"
  },
  {
    id: "proj-1",
    title: "VibAE-Monitor",
    subtitle: "Predictive Maintenance using Autoencoders",
    category: "ai-dl",
    categoryName: "Deep Learning & AI",
    badge: "Projet d'équipe — 5 membres • Juin 2026",
    description: "Autoencodeur CNN 2D (spectrogrammes STFT) pour la détection d'anomalies vibratoires sur roulements mécaniques (dataset CWRU), couplé à un classifieur DenseNet121 fine-tuné identifiant 10 classes de défauts avec évaluation rigoureuse sur jeu de test.",
    highlights: [
      "Calcul du score de sévérité multi-zone et dashboard de monitoring temps réel (FastAPI + Plotly).",
      "Module d'analyse batch, export automatique de rapports PDF d'inspection et traçabilité rigoureuse des modèles avec MLflow."
    ],
    tags: ["PyTorch", "FastAPI", "MLflow", "CWRU Dataset", "DenseNet121", "CNN 2D", "STFT", "Plotly"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: true,
    stats: "CNN 2D & STFT"
  },
  {
    id: "proj-2",
    title: "Transportation Data Warehouse",
    subtitle: "Projet Data Mining & Business Intelligence",
    category: "bigdata-bi",
    categoryName: "Big Data & BI",
    badge: "Projet Data Mining • 2025 – 2026",
    description: "Conception et déploiement d'un entrepôt de données en étoile (modèle dimensionnel couvrant plus de 2 000 trajets) hébergé sur AWS RDS avec pipeline d'intégration ETL Talend PDI.",
    highlights: [
      "Analyses statistiques inférentielles approfondies (ANOVA, matrices de corrélation, régressions linéaires).",
      "Conception de 2 tableaux de bord Power BI décisionnels interactifs avec 24 mesures DAX calculées pour le pilotage des indicateurs clés (KPIs)."
    ],
    tags: ["Talend PDI", "AWS RDS", "Power BI", "ETL", "DAX", "Data Mining", "ANOVA", "Star Schema"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: true,
    stats: "24 Mesures DAX • 2k Trajets"
  },
  {
    id: "proj-3",
    title: "Library Management System",
    subtitle: "Projet BDA (Base de Données Avancée)",
    category: "rdbms-app",
    categoryName: "SGBD & BDA",
    badge: "Projet BDA • 2025 – 2026",
    description: "Modélisation Merise (MCD, MLD, MPD) et implémentation sous Oracle DB d'un système transactionnel complet pour la gestion de bibliothèques avec logique métier en PL/SQL.",
    highlights: [
      "Implémentation de packages et procédures stockées modulaires en PL/SQL pour les transactions de prêt, retour et gestion des adhérents.",
      "Développement de déclencheurs (triggers) et procédures stockées pour la logique métier (gestion des prêts, détection des retards et mise à jour des statuts)."
    ],
    tags: ["Oracle DB", "PL/SQL", "Merise", "SQL", "Triggers", "Procédures Stockées", "SGBD"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: true,
    stats: "Modélisation & PL/SQL"
  },
  {
    id: "proj-4",
    title: "Internship Management Platform",
    subtitle: "Plateforme SRM Souss-Massa (SRM-SM)",
    category: "rdbms-app",
    categoryName: "Full-Stack & Web",
    badge: "Stage SRM-SM • Juillet – Août 2025",
    description: "Plateforme web complète de gestion des candidatures de stages de la Société Régionale Multiservices Souss-Massa (dépôt, suivi temps réel, validation administrative).",
    highlights: [
      "Architecture MVC robuste avec base de données relationnelle MySQL et chiffrement bcrypt pour la sécurité des comptes.",
      "Génération automatique des attestations et conventions de stage au format PDF.",
      "Système de notifications automatiques par email via SMTP / Gmail et dashboard administrateur avec filtres multicritères."
    ],
    tags: ["Python", "MySQL", "SMTP", "Bcrypt", "MVC", "ReportLab PDF"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: true,
    stats: "Automatisation 100% RH"
  },
  {
    id: "proj-5",
    title: "Academic Machine Learning Suite",
    subtitle: "Supervised Learning : Régression & Classification",
    category: "academic-ml",
    categoryName: "Travaux Académiques ML",
    badge: "Projets & Labos ENSA",
    description: "Étude théorique et implémentation pratique d'un large éventail d'algorithmes de Machine Learning supervisé sur des jeux de données réels (Salary_Data, etc.).",
    highlights: [
      "Benchmarking d'algorithmes : Régression Linéaire, Régression Logistique, Arbres de Décision (Decision Trees), K-NN, Random Forest et Ensemble Learning.",
      "Pipeline complet de Data Science : normalisation & standardisation des features, split train/test et validation croisée rigoureuse (K-Fold Cross Validation)."
    ],
    tags: ["Scikit-learn", "Python", "Random Forest", "Decision Trees", "KNN", "Cross-Validation", "Pandas", "NumPy"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: false,
    stats: "Multi-Modèles Supervisés"
  },
  {
    id: "proj-6",
    title: "Customer Segmentation via K-Means",
    subtitle: "Unsupervised Clustering sur Mall Customers",
    category: "academic-ml",
    categoryName: "Travaux Académiques ML",
    badge: "Projet Académique ENSA",
    description: "Analyse exploratoire et segmentation comportementale de clients à partir de données multidimensionnelles à l'aide de l'algorithme K-Means.",
    highlights: [
      "Détermination du nombre optimal de grappes à l'aide de la méthode du coude (Elbow Method) et du score de silhouette.",
      "Visualisation graphique détaillée avec Matplotlib et Seaborn pour identifier les segments à forte valeur ajoutée."
    ],
    tags: ["K-Means", "Clustering", "Mall Customers", "Matplotlib", "Seaborn", "Scikit-learn", "Pandas"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: false,
    stats: "Segmentation Non-Supervisée"
  },
  {
    id: "proj-7",
    title: "Deep Learning Neural Architectures",
    subtitle: "Travaux Dirigés & Modélisation Réseaux Profonds",
    category: "ai-dl",
    categoryName: "Deep Learning & AI",
    badge: "Labos & R&D Académique",
    description: "Conception, apprentissage et optimisation de réseaux de neurones profonds (Perceptron Multicouche, Réseaux Convolutifs CNN) pour la reconnaissance de motifs et l'analyse de signaux.",
    highlights: [
      "Entraînement avec PyTorch et TensorFlow / Keras, fonctions de coût adaptées et optimiseurs (Adam, SGD).",
      "Maîtrise des techniques de régularisation : Dropout, Batch Normalization, data augmentation et suivi des métriques d'apprentissage."
    ],
    tags: ["PyTorch", "TensorFlow", "Keras", "CNN", "Deep Learning", "Optimisation", "Vision"],
    github: "https://github.com/AbdellahDlimi",
    demo: "https://github.com/AbdellahDlimi",
    featured: false,
    stats: "Réseaux CNN & MLP"
  }
];

export const skillCategories = [
  {
    category: "ML & Data Science",
    icon: "Brain",
    skills: [
      { name: "Scikit-learn", level: "Opérationnel", highlight: true },
      { name: "PyTorch", level: "Pratique", highlight: true },
      { name: "TensorFlow & Keras", level: "Pratique", highlight: true },
      { name: "RAG & LLMs (Gemini)", level: "Pratique", highlight: true },
      { name: "NumPy & Pandas", level: "Opérationnel", highlight: true },
      { name: "Matplotlib & Seaborn", level: "Pratique" },
      { name: "OpenCV & OCR", level: "Pratique" },
      { name: "FastAPI", level: "Opérationnel", highlight: true },
      { name: "Traitement du Signal (STFT)", level: "Académique" }
    ]
  },
  {
    category: "Big Data & Écosystème Distribué",
    icon: "Cpu",
    skills: [
      { name: "Apache Kafka", level: "Pratique", highlight: true },
      { name: "Apache Spark", level: "Pratique", highlight: true },
      { name: "PySpark", level: "Pratique", highlight: true },
      { name: "Hadoop & HDFS", level: "Académique", highlight: true },
      { name: "MapReduce", level: "Académique" },
      { name: "Docker & Compose", level: "Pratique", highlight: true }
    ]
  },
  {
    category: "BI, Bases de Données & Outils",
    icon: "Layers",
    skills: [
      { name: "Neo4j (Graphes)", level: "Pratique", highlight: true },
      { name: "PostgreSQL & pgvector", level: "Opérationnel", highlight: true },
      { name: "Power BI (DAX)", level: "Pratique", highlight: true },
      { name: "Talend PDI", level: "Pratique", highlight: true },
      { name: "Oracle DB & PL/SQL", level: "Pratique", highlight: true },
      { name: "Procédures Stockées PL/SQL", level: "Pratique" },
      { name: "MySQL", level: "Opérationnel" },
      { name: "MinIO / S3", level: "Pratique" },
      { name: "Git & MLflow", level: "Pratique", highlight: true }
    ]
  },
  {
    category: "Langages & Frameworks",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Opérationnel", highlight: true },
      { name: "SQL & PL/SQL", level: "Opérationnel", highlight: true },
      { name: "React 18 & Vite", level: "Pratique", highlight: true },
      { name: "Tailwind CSS", level: "Pratique" },
      { name: "R", level: "Intermédiaire" },
      { name: "Java", level: "Intermédiaire" },
      { name: "JavaScript", level: "Intermédiaire" },
      { name: "C", level: "Académique" },
      { name: "Merise & UML", level: "Pratique" }
    ]
  },
  {
    category: "Cloud, Sécurité & Architecture",
    icon: "Wrench",
    skills: [
      { name: "Architecture Event-Driven", level: "Pratique", highlight: true },
      { name: "Microservices Cloud-Native", level: "Pratique", highlight: true },
      { name: "Chiffrement KMS / Fernet (AES)", level: "Pratique", highlight: true },
      { name: "Sécurité KYC & RBAC", level: "Pratique", highlight: true },
      { name: "Intégration Stripe Elements", level: "Pratique", highlight: true },
      { name: "Tests Pytest Asynchrones", level: "Pratique" }
    ]
  }
];

export const certifications = [
  {
    id: "cert-udemy-python",
    title: "Learn to Code in Python 3: Programming beginner to advanced",
    issuer: "Udemy",
    instructor: "Ivan Lourenço Gomes, Andrii Piatakha",
    date: "Février 2025",
    duration: "5.5 heures",
    credentialId: "UC-a435fac9-5faa-48f0-a14f-20875abc7858",
    url: "https://ude.my/UC-a435fac9-5faa-48f0-a14f-20875abc7858",
    pdf: "/certificates/udemy-python-advanced.pdf",
    image: "/certificates/images/udemy-python-advanced.jpg",
    category: "python",
    categoryLabel: "Python & Dev",
    skills: ["Python 3", "POO", "Algorithmes", "Structures de Données"],
    highlight: true
  },
  {
    id: "cert-dc-efficient-python",
    title: "Writing Efficient Python Code",
    issuer: "DataCamp",
    date: "Août 2025",
    duration: "4 heures",
    credentialId: "#42,087,432",
    pdf: "/certificates/datacamp-writing-efficient-python.pdf",
    image: "/certificates/images/datacamp-writing-efficient-python.jpg",
    category: "python",
    categoryLabel: "Python & Dev",
    skills: ["Code Profiling", "Optimisation Mémoire & Temps", "Built-ins", "Itertools"],
    highlight: true
  },
  {
    id: "cert-dc-pandas-ingestion",
    title: "Streamlined Data Ingestion with pandas",
    issuer: "DataCamp",
    date: "Septembre 2025",
    duration: "4 heures",
    credentialId: "#42,514,288",
    pdf: "/certificates/datacamp-data-ingestion-pandas.pdf",
    image: "/certificates/images/datacamp-data-ingestion-pandas.jpg",
    category: "data",
    categoryLabel: "Data Engineering",
    skills: ["Pipelines Pandas", "Fichiers Plats & Excel", "APIs & JSON", "Import SQL"],
    highlight: true
  },
  {
    id: "cert-dc-cloud",
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "Juin 2025",
    duration: "2 heures",
    credentialId: "#41,498,421",
    pdf: "/certificates/datacamp-cloud-computing.pdf",
    image: "/certificates/images/datacamp-cloud-computing.jpg",
    category: "cloud-db",
    categoryLabel: "Cloud & Systèmes",
    skills: ["Architecture Cloud", "IaaS / PaaS / SaaS", "Scalabilité", "Sécurité Cloud"],
    highlight: true
  },
  {
    id: "cert-dc-python-dev",
    title: "Intermediate Python for Developers",
    issuer: "DataCamp",
    date: "Juin 2025",
    duration: "2 heures",
    credentialId: "#41,520,784",
    pdf: "/certificates/datacamp-intermediate-python-dev.pdf",
    image: "/certificates/images/datacamp-intermediate-python-dev.jpg",
    category: "python",
    categoryLabel: "Python & Dev",
    skills: ["POO Python", "Modularité", "Tests & Packaging", "Environnements Virtuels"],
    highlight: false
  },
  {
    id: "cert-dc-importing-data",
    title: "Intermediate Importing Data in Python",
    issuer: "DataCamp",
    date: "Juillet 2025",
    duration: "2 heures",
    credentialId: "#41,664,289",
    pdf: "/certificates/datacamp-importing-data-python.pdf",
    image: "/certificates/images/datacamp-importing-data-python.jpg",
    category: "data",
    categoryLabel: "Data Engineering",
    skills: ["APIs REST", "Extraction JSON", "Authentification OAuth", "Pipelines Web"],
    highlight: false
  },
  {
    id: "cert-dc-sql",
    title: "Introduction to SQL",
    issuer: "DataCamp",
    date: "Juin 2025",
    duration: "2 heures",
    credentialId: "#40,913,918",
    pdf: "/certificates/datacamp-sql-intro.pdf",
    image: "/certificates/images/datacamp-sql-intro.jpg",
    category: "cloud-db",
    categoryLabel: "Bases de données",
    skills: ["Requêtes SQL", "Filtrage & Agrégations", "Sous-requêtes", "Jointures"],
    highlight: false
  },
  {
    id: "cert-365ds-python",
    title: "Introduction to Python",
    issuer: "365 Data Science",
    date: "Novembre 2024",
    duration: "Certificat de Réussite",
    credentialId: "CC-73127F8EE1",
    pdf: "/certificates/365ds-python-intro.pdf",
    image: "/certificates/images/365ds-python-intro.jpg",
    category: "data",
    categoryLabel: "Data Science",
    skills: ["Structures de Données", "Structures de Contrôle", "Fonctions", "Bases NumPy"],
    highlight: false
  },
  {
    id: "cert-365ds-jupyter",
    title: "Introduction to Jupyter",
    issuer: "365 Data Science",
    date: "Novembre 2024",
    duration: "Certificat de Réussite",
    credentialId: "CC-AFFDF63D23",
    pdf: "/certificates/365ds-jupyter-intro.pdf",
    image: "/certificates/images/365ds-jupyter-intro.jpg",
    category: "data",
    categoryLabel: "Data Science",
    skills: ["Jupyter Notebooks", "Analyse Exploratoire (EDA)", "Reproductibilité"],
    highlight: false
  },
  {
    id: "cert-dc-r-intermed",
    title: "Intermediate R",
    issuer: "DataCamp",
    date: "Janvier 2025",
    duration: "6 heures",
    credentialId: "#37,481,308",
    pdf: "/certificates/datacamp-intermediate-r.pdf",
    image: "/certificates/images/datacamp-intermediate-r.jpg",
    category: "analytics-ai",
    categoryLabel: "Data Science & R",
    skills: ["Conditions & Boucles", "Fonctions & Famille Apply", "Expressions Régulières"],
    highlight: false
  },
  {
    id: "cert-dc-java-oop",
    title: "Introduction to OOP in Java",
    issuer: "DataCamp",
    date: "Décembre 2024",
    duration: "4 heures",
    credentialId: "#37,538,096",
    pdf: "/certificates/datacamp-java-oop.pdf",
    image: "/certificates/images/datacamp-java-oop.jpg",
    category: "python",
    categoryLabel: "Programmation",
    skills: ["POO Java", "Classes & Objets", "Encapsulation", "Héritage"],
    highlight: false
  },
  {
    id: "cert-dc-chatgpt",
    title: "Introduction to ChatGPT & Prompt Engineering",
    issuer: "DataCamp",
    date: "Janvier 2025",
    duration: "1 heure",
    credentialId: "#37,559,138",
    pdf: "/certificates/datacamp-chatgpt-intro.pdf",
    image: "/certificates/images/datacamp-chatgpt-intro.jpg",
    category: "analytics-ai",
    categoryLabel: "IA Générative",
    skills: ["Prompt Engineering", "Flux LLM", "Automatisation", "Meilleures Pratiques"],
    highlight: false
  },
  {
    id: "cert-dc-excel",
    title: "Introduction to Excel",
    issuer: "DataCamp",
    date: "Janvier 2025",
    duration: "4 heures",
    credentialId: "#38,374,226",
    pdf: "/certificates/datacamp-excel-intro.pdf",
    image: "/certificates/images/datacamp-excel-intro.jpg",
    category: "analytics-ai",
    categoryLabel: "Data Analytics",
    skills: ["Formules & Fonctions", "Nettoyage de Données", "Tableaux Croisés", "Visualisation"],
    highlight: false
  }
];

export const certificateCategories = [
  { id: "all", label: "Toutes les Certifications" },
  { id: "python", label: "Python & Dev" },
  { id: "data", label: "Data Engineering" },
  { id: "cloud-db", label: "Cloud & SQL" },
  { id: "analytics-ai", label: "Data Science, R & IA" }
];

export const achievements = {
  certifications
};

export const languages = [
  {
    name: "Arabe",
    code: "AR",
    flag: "🇲🇦",
    status: "Langue Maternelle",
    level: "Pratique Native",
    description: "Langue maternelle, communication fluide et aisance rédactionnelle bilingue.",
    percentage: 100,
    certificate: null
  },
  {
    name: "Français",
    code: "FR",
    flag: "🇫🇷",
    status: "Langue d'Enseignement & Projets",
    level: "Certifié CEFR B2",
    scoreBadge: "264 / 400",
    description: "Cursus d'ingénieur d'État, rédaction de rapports techniques et soutenances de projets.",
    percentage: 85,
    certificate: {
      image: "/french.jpeg",
      title: "Rosetta Stone Proficiency Test — French",
      issuer: "Rosetta Stone",
      cefrLevel: "CEFR Level B2",
      score: "Score : 264 / 400"
    }
  },
  {
    name: "Anglais",
    code: "EN",
    flag: "🇬🇧",
    status: "Pratique Technique & Veille",
    level: "Certifié CEFR B2",
    scoreBadge: "230 / 400",
    description: "Veille scientifique continue, documentation technique et communication internationale.",
    percentage: 85,
    certificate: {
      image: "/english.jpeg",
      title: "Rosetta Stone Proficiency Test — English (British)",
      issuer: "Rosetta Stone",
      cefrLevel: "CEFR Level B2",
      score: "Score : 230 / 400"
    }
  }
];

export const softSkills = [
  "Esprit d'analyse & Synthèse",
  "Travail en équipe & Agilité",
  "Communication & Présentation",
  "Prise d'initiative & Créativité",
  "Leadership & Rigueur technique"
];


