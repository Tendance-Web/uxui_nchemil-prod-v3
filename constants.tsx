
import { Project, Experience, SkillCategory, Education } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nchemil/",
  behance: "https://www.behance.net/nassim_chemil",
  email: "mailto:nchemil@gmail.com",
  phone: "06 16 39 53 40"
};

export const HARD_SKILLS = [
  "Figma", "Figma Make", "Sketch", "Miro", "Notion", "Photoshop",
  "Html5/CSS3", "React (Bonnes notions)", "Vanilla JS", "ChatGPT", "Git", "CMS",
  "Webflow", "WordPress", "NodeJS", "Supabase", "Antigravity", "MCP Server", "AI Studio", "Terminal"
];

export const SOFT_SKILLS = [
  "Méthodes UX", "Travail en équipe", "Empathie", "Sens créatif",
  "Autonomie", "Esprit d’innovation", "Design centré utilisateur (UCD)",
  "Méthodes Agiles", "Design Sprint", "UCD"
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp0",
    role: "UX/UI designer - NoCode/IA",
    company: "Autodidacte / Freelance",
    period: "Juin 2025 - Aujourd'hui",
    description: [
      "Formation autodidacte et intensive sur les technologies IA et NoCode : AI Studio, Antigravity, Gemini, MCP Server, Figma Make.",
      "Conception et production de livrables UX/UI : Création de designs sous Figma, prototypage d'applications et développement de sites responsives modernes.",
      "Exploration de nouvelles méthodes de conception assistée par l'intelligence artificielle pour optimiser les workflows de design."
    ]
  },
  {
    id: "exp1",
    role: "UX UI Designer",
    company: "Total Energies",
    period: "Février 2022 - Juin 2025",
    description: [
      "Refonte Web/App mobile et création des parcours de recharge pour les véhicules électriques.",
      "Réduction de la friction pour charger des voitures électriques avec un téléphone, en créant des interfaces repensées et des flux d’utilisateurs plus directs. Travaux réalisés avec des PO, des PM et des développeurs (+200 écrans, UX Writing, ateliers d’Idéation) via Figma.",
      "Lancement d'un « design system » conforme aux normes WCAG - tokens, variables, auto-layout, grid.",
      "Réduction du temps de lancement de charge de 50 % grâce au développement de prototypes interactifs pour iOS, Android et site web.",
      "Écrans livrés en marque blanche, Belib Paris, Spot2Charge (UK), Source London et Total Energies."
    ]
  },
  {
    id: "exp2",
    role: "UX UI Designer",
    company: "HighCube, Audencia, Palo IT",
    period: "Décembre 2018 - Janvier 2022",
    description: [
      "Création et refonte de plateformes numériques - CMS, outil de gestion de projet, CRM, boutique en ligne.",
      "Augmentation des nouveaux contacts de +30 % grâce à la refonte d'un CRM pour intégrer de nouveaux clients. Analyse de produits, entretiens avec les utilisateurs, analyse concurrentielle, création de wireframes Figma pour JOOZY (PaloIt).",
      "Réduction des étapes pour créer un projet de -40% en centralisant les demandes de gestion de projet, en donnant la priorité aux informations utiles pour le parcours de création du projet et en prototypant un nouveau parcours (Audencia).",
      "Création et développement de maquettes d'interface utilisateur avec des composants Figma, React, Vscode, Html et Css pour un CMS et un site Web (HighCube, secteur de la construction écologique)."
    ]
  },
  {
    id: "exp3",
    role: "UX, UI Designer",
    company: "CDC, Greenfusion, Léa, Cognitis (GFI)",
    period: "Octobre 2018 - Novembre 2020",
    description: [
      "Création d'applications mobiles et refonte de plateformes numériques.",
      "Réduction du temps de traitement des questions RH de -45 %, réduction du temps d'attente téléphonique de 30 % grâce à la refonte du portail RH de la Caisse des Dépôts et Consignations (CDC), conception au sein d'une équipe de développement, organisation des ateliers d'Idéation (job de be done, tri des cartes), prototypage, en appliquant une méthodologie agile et en améliorant le système d'information.",
      "Rendre les actions écologiques amusantes en créant une application de jeu mobile, réalisation de Benchmarks, de cartes XP, d’ateliers d’Idéation et de tests utilisateur via prototypes (GreenFusion).",
      "Optimisation des réservations et réduction du « no-show » de -25 % grâce à la réalisation de benchmarks, d'entretiens, d’ateliers d’Idéation, de prototypes interactifs via Figma et de tests utilisateurs pour l’application mobile dans le secteur de la restauration (Léa).",
      "Cas d’usages détectés, création de personas et entretiens gérés avec les utilisateurs de la Blockchain (Cognitis GFI)."
    ]
  },
  {
    id: "exp4",
    role: "Web Designer, UI Designer",
    company: "Generali",
    period: "Janvier 2008 - Septembre 2018",
    description: [
      "Refonte d’espaces clients, amélioration de l’engagement et du taux de souscription.",
      "Simplification des transactions et consultations de produits d'assurance Generali par la création, la refonte et l'intégration de l'interface utilisateur Web (500 boutiques virtuels).",
      "Réduction du temps de transaction à 72 heures grâce à la diminution du nombre d'étapes et à la mise en œuvre d'un rachat partiel repensé ergonomiquement (UX writing, UI). Réalisations en équipe DSI, produits.",
      "Accélération du processus de validation par la mise en œuvre d’une solution partagée collaborative.",
      "Réduction du temps de chargement des pages de 50 % grâce à la refonte des pages web et aux audits ergonomiques des systèmes d’information existants.",
      "Sensibilisation des services au design émotionnel afin d’accélérer les modifications d’interface utilisateur et d’accompagner les changements d’affichage des contenus."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "UX",
    skills: [
      "Définition de problèmes liés à un produit ou à un service (définition du projet, \"benchmarking\", recherche utilisateur).",
      "Analyse des besoins utilisateurs (création de questionnaire qualitatif et quantitatif).",
      "Idéation (élaboration de personas, création de cartes d'expérience et organisation de brainstorming, tri de cartes, atelier idéation).",
      "Évaluation (test utilisateurs, analyse d'insights)."
    ]
  },
  {
    title: "UI",
    skills: [
      "Création de maquettes graphiques avec les logiciels du métier (Figma, Photoshop, Illustrator, Adobe XD).",
      "Maintenance et évolution de \"design system\" (base atomic design).",
      "Création de prototypes interactifs (Figma, Adobe XD, Framer).",
      "Bonne notion de code, Vanilla JS, React, Node.js, Git, SQL, MongoDb, CSS3, html5, Boostrap, Foundation.",
      "Design réactif (Responsive design)."
    ]
  },
  {
    title: "Gestion de Projet",
    skills: [
      "Stratégie de contenu pour le web.",
      "Analyse de données quantitatives (Google Analytics, cartes de chaleur, tests A/B, taux de conversion).",
      "Méthodes Agiles / Scrum.",
      "Aisance relationnelle et négociation."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  // TotalEnergies
  {
    id: "ev-charge",
    title: "EV Charge",
    client: "TotalEnergies",
    category: "UX/UI & Design System",
    description: "Unification de l'écosystème de recharge électrique. Lancement d'un Design System et refonte de l'expérience mobile et ordinateur.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/b0aed1079e7bd70902aa57ec09be155e1cb8a25a/images/TE/showEvCharge.png?raw=true",
    tags: ["Design System", "App Mobile", "Figma", "Systèmes complexes", "UX/UI"],
    fullDetails: {
      context: "Dans le cadre de la transition vers la mobilité électrique, TotalEnergies souhaitait repenser l’expérience de recharge des conducteurs, en harmonisant ses différents canaux (marque blanche, applications mobiles, web et bornes). Le projet visait à unifier l’expérience utilisateur autour d’un “design system” commun et à simplifier les parcours.",
      mission: "Concevoir une expérience fluide, cohérente et inclusive sur l’ensemble de l’écosystème digital TotalEnergies. Simplifier l'accès à la recharge, optimiser la recherche de bornes, repenser les parcours d'achat et initier un Design System unifié.",
      challenges: "Les parcours historiques présentaient une fragmentation importante entre les supports et les marques (TotalEnergies, partenaires, marque blanche). Cette multiplication des déclinaisons d’interfaces compliquait la maintenance interne et créait des frictions pour l'utilisateur (navigation, cohérence graphique et incompréhension des fonctionnalités).",
      role: "Alignement des contraintes techniques et objectifs produit. Cadrage des fonctionnalités et identification des leviers de mise en œuvre (ateliers de cadrage technique). Animation de la co-idéation fonctionnelle avec PO et développeurs. Réalisation de la phase de discovery (faisabilité/objectifs). Conception des variations de composants et choix des meilleurs composants pour le Design System.",
      solutionBlocks: [
        {
          type: 'text',
          content: "Réalisation d’un inventaire complet et refonte des écrans existants avec revue des parcours utilisateurs (users flow), afin d’identifier les points de friction à la fois graphiques, fonctionnels et structurels."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/TE-AppFlow.png?raw=true",
          caption: "Revue des différents flux utilisateurs de l'application.",
          preserveOriginal: true
        },
        {
          type: 'text',
          content: "Analyse comparative entre les différentes marques et déclinaisons en marque blanche. Belib, réseau de bornes électriques parisien, en faisait partie.\n Harmonisation de l’ensemble des écrans pour uniformiser les fonctionnalités avec l'intégration des composants du design system."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/redesignCoherence.png?raw=true",
          caption: "Exemple, sur l'application Belib, de la rubrique abonnement avec à gauche l'ancien design.",
          preserveOriginal: true
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/marqueBlanche.png?raw=true",
          caption: "Exemple d'écrans déclinés en marque blanche. Conservation de la même architecture d'information.",
          preserveOriginal: true
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/icoBornesPuissances.png?raw=true",
          caption: "Exemple de déclinaison colorimétrique des icônes pour les différentes marques partenaires de Total Energies"
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/Composants.png?raw=true",
          caption: "Extrait visuel des composants créés et utilisés pour les différents écrans de l'application",
          preserveOriginal: true
        },
        {
          type: 'text',
          content: "Création de nouvelles fonctionnalités dont l'une d'entre elles était de pouvoir ajouter en favoris une borne de recharge."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/solutionFavoris.png?raw=true",
          caption: "L'affichage prioritaire des favoris lors d'une recherche réduisait les temps de prise de décisions."
        },
        {
          type: 'text',
          content: "La recherche d’une borne disponible constituait un point de friction essentiel. Grâce à la création d’une librairie commune, regroupant les différents états et leurs couleurs, nous avons pu revoir durant nos ateliers d’alignement les principaux points de friction."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/uiLibraryDS.png?raw=true",
          caption: "Extrait d'une partie du design system, qui se focalise sur les couleurs servant à la prise de décision."
        },
        {
          type: 'text',
          content: "Sur cet exemple ci-dessous, on peut voir que la couleur du “design system” “State/Success” est réutilisée dans différents contextes mais avec pour objectif, côté utilisateur, de lui signaler le côté positif d’une action à venir ou déjà réalisée."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/stateSucessExample.png?raw=true",
          caption: "Illustration de comment le choix d'une couleur peut avoir un impact sur le retour visuel de l'interface."
        },
        {
          type: 'text',
          content: "Toujours dans un souci de cohérence, le site a également été revu. Toutes les fonctionnalités de l'application n'étaient pas présentes. Mais certaines parties et notamment la recherche d'une borne disponible étaient une adaptation du design présent dans l'application. L'objectif étant de pouvoir proposer la même expérience sur mobile et ordinateur. Un des autres objectifs était également de pouvoir créer une expérience continue entre plusieurs appareils.\n\n Sur l'écran de recherche ci-dessous, la proposition des bornes se fait directement sur la page affichant la carte."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/DesktopSearch.jpg?raw=true",
          caption: "Exemple d'affichage adaptatif de la partie recherche d'une borne de recharge"
        },
        {
          type: 'text',
          content: "C'est en partie l'ensemble de ces solutions qui ont amené aux résultats suivants."
        },
      ],
      kpi: [
        "Réduction de 50% du temps de lancement de charge",
        "+200 écrans livrés",
        "Design System conforme WCAG",
        "Augmentation du taux de conversion abonnement"
      ],
    }
  },
  // Portail RH
  {
    id: "portail-rh",
    title: "Portail RH",
    client: "Caisse des Dépôts",
    category: "SaaS & Tableau de bord",
    description: "Centralisation des données retraites et RH. Tableau de bord complexe et gestion des droits utilisateurs.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/coverPortailRH_CDC.png?raw=true",
    tags: ["Tableau de bord", "B2B", "Accessibilité", "Agile"],
    fullDetails: {
      context: "Dans le cadre de la réforme des retraites, la Caisse des Dépôts avait pour objectif de centraliser l'ensemble des données liées aux ressources humaines.",
      mission: "En tant qu'UX/UI Designer, j'avais pour mission de travailler en équipe AGILE avec les développeurs Front et Back ainsi qu'avec les Product Owners. J'ai également rencontré les futurs utilisateurs. Nous devions amener un point de vision central pour la gestion des différentes caisses de retraite.",
      challenges: "Multiplicité des systèmes de gestion existants. Nécessité de gagner du temps sur le traitement des données.",
      role: "Animation de Focus Groups et ateliers 'Job to be done' pour relever les points d'amélioration. Définition des cas d'usage et synthèse des données (API) avec les développeurs Back. Création du 'styleguide' et des prototypes fonctionnels respectant les normes d'accessibilité (RGAA).",
      solutionBlocks: [
        {
          type: 'text',
          content: "Durant les phases d'idéation des “focus group”, des ateliers 'Job to be done' organisés autour de différentes thématiques nous ont permis de relever des points d’améliorations."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/jobToBeDone.png?raw=true",
          caption: "Verbatim des participants lors des ateliers"
        },
        {
          type: 'text',
          content: "Exemples de points détectés :\n Adapter l’aspect visuel et l’ergonomie de la plateforme aux standards actuels (accès intuitif aux fonctionnalités, développement des icônes et images,...). \n Pour cela nous avons créé un “styleguide”, première pierre d’un futur design system. Cette étape a été cruciale pour la communication et le passage de témoin (handoff) avec les développeurs. Cela m’a également permis de travailler plus étroitement avec les équipes de développement lors des phases d’intégration."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/styleGuideCDC.png?raw=true",
          caption: "Extrait du styleguide qui nous a permis d'initier le transfert aux développeurs"
        },
        {
          type: 'text',
          content: "Un autre point qui est ressorti durant ces ateliers, allant dans le sens de la centralisation des données avec l'objectif d'un point de communication direct avec les utilisateurs, était le besoin d'avoir une page d’accueil sous forme de « tableau de bord » contenant des informations utiles et personnalisables."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/dashBoardRH.png?raw=true",
          caption: "Première version du tableau de bord"
        },
        {
          type: 'text',
          content: "Afin de répondre à la nécessité de gagner du temps sur le traitement des données, la création de l’interface de gestion des utilisateurs a permis aux RH de gagner en efficacité et en visibilité. Grâce à cette nouvelle interface, les données primordiales pour une bonne gestion ont été mises en avant."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/gestioUserCDC.png?raw=true",
          caption: "Extrait de la gestion des utilisateurs"
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/droitUserCDC.png?raw=true",
          caption: "Écran de visualisation des droits utilisateurs."
        },
        {
          type: 'text',
          content: "Un des points qui est également ressorti durant les ateliers était le besoin d'avoir plus de visibilité sur ses données. \n Pour cela il a également fallu améliorer et revoir le parcours utilisateur des administrés. \n Dans ce parcours l'écran de consultation de ses droits était le plus important car il allait permettre à l'administré d'avoir les mêmes informations qu'un administrateur. Ce qui a été le point de bascule pour une meilleure communication entre les différentes parties prenantes."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/mesDroitsCDC.png?raw=true",
          caption: "Écran de visualisation de ses droits en tant qu'administré."
        },
        {
          type: 'text',
          content: "En conclusion, ces nouveaux outils ont permis également de faire évoluer les “processus” en interne. Ce qui a donné les résultats qui vont suivre."
        },
      ],
      kpi: [
        "Centralisation réussie des données",
        "Réduction du temps d'attente téléphonique de 30 %",
        "Conformité RGAA",
        "Réduction du temps de traitement des questions RH de -45 %"
      ]
    }
  },
  // LEA Project
  {
    id: "lea-app",
    title: "LEA",
    client: "Agence Tabem",
    category: "Recherche UX & Design Produit",
    description: "Solution globale pour restaurateurs. Module de prise de réservation intelligent et gestion dynamique du plan de salle.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/coverLea.png?raw=true",
    tags: ["Recherche Utilisateur", "Carte d'expérience", "Figma"],
    fullDetails: {
      context: "Le projet Léa repose sur la conception d’une solution globale pensée et développée pour répondre aux problématiques critiques des restaurateurs, notamment l'inefficacité des systèmes de réservation manuels (papier/crayon) et l'impact financier des 'désistements sans prévenir' (no-shows).",
      mission: "Apporter sérénité et confort aux restaurateurs via un outil aussi simple qu'un stylo mais doté de l'intelligence du numérique pour optimiser le taux d'occupation en temps réel.",
      challenges: "Le 'no-show' représente une perte de 15% du chiffre d’affaire annuel. La gestion manuelle des tables est source d'erreurs et offre une visibilité réduite sur le taux d'occupation lors des pics d'affluence.",
      role: "UX Researcher & Product Designer. Responsable de la phase d'exploration (entretiens, benchmark), de l'idéation (personas, cartographie d'expérience) et de la conception des prototypes haute fidélité.",
      videoUrl: "https://player.vimeo.com/video/423941602?badge=0&autopause=0&player_id=0&app_id=58479",
      presentationUrl: "https://docs.google.com/presentation/d/1IiFeTHk7HJ6vFO5jyqy0Dqipe6xMLcghsG2Celz8r7Y/edit?usp=sharing",
      solutionBlocks: [
        {
          type: 'text',
          content: "La phase initiale a consisté en une étude comparative rigoureuse des acteurs du marché (Zenchef, GuestOnline, etc.) pour identifier les opportunités de différenciation, notamment sur l'ergonomie et la rapidité de prise en main."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/AnalyseComparative.png?raw=true",
          caption: "Analyse comparative des fonctionnalités et tarifs des principaux acteurs du marché."
        },
        {
          type: 'text',
          content: "Suite à des entretiens individuels, nous avons identifié 4 cibles prioritaires : des restaurants gastronomiques aux établissements tendance à forte affluence. Cette segmentation a permis de définir deux personas représentatifs."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/PaulinePersonae.png?raw=true",
          caption: "Pauline (Gérante d'un restaurant Bistronomique), une de nos cibles prioritaires."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/DanePersonae.png?raw=true",
          caption: "Dane (Gérant d'un restaurant Chinois), cherchant à maximiser son taux d'occupation."
        },
        {
          type: 'text',
          content: "La Carte d'expérience (Experience Map) a révélé des moments de stress intense lors du second service et des appels téléphoniques incessants. La solution devait donc automatiser les confirmations pour libérer du temps à l'équipe."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/xpMap.png?raw=true",
          caption: "Cartographie de l'expérience utilisateur mettant en évidence les points de friction émotionnelle de Pauline."
        },
        {
          type: 'text',
          content: "Le remue-méninges (brainstorming) a mené à une priorisation stricte dans un carnet de produit (Product Backlog). Les fonctionnalités clés retenues : Plan de salle dynamique, Calendrier intelligent et Système de notification automatique."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/ideationMatricePriorisation.png?raw=true",
          caption: "Atelier d'idéation et liste des fonctionnalités prioritaires pour le produit minimum viable (MVP)."
        },
        {
          type: 'text',
          content: "Enfin, j'ai conçu sur Figma les prototypes haute fidélité. L'interface mobile se veut épurée, avec des indicateurs de performance clairs (taux d'occupation, réservations à confirmer) accessibles en un clin d'œil."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/1-applicationVueTableauBord.png?raw=true",
          caption: "Tableau de bord de l'application LEA : Statistiques et flux en temps réel."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/2-applicationVueRéservation.png?raw=true",
          caption: "Vue de la liste des réservations et gestion du calendrier dynamique."
        }
      ],
      kpi: [
        "Réduction de 25% des rendez-vous manqués",
        "Optimisation de 20% du taux d'occupation",
        "Gain de temps administratif majeur",
        "Transition 100% numérique réussie"
      ]
    }
  },
  // Green Fusion
  // https://docs.google.com/presentation/d/1tJDh8SpPskwt0rS_Nwq38_WKp8QWiNur0gNFFUuJFYc/edit?usp=sharing
  {
    id: "green-fusion",
    title: "Green Fusion",
    client: "Green Fusion Games",
    category: "Gamification & Design Produit",
    description: "Application mobile de sensibilisation écologique par le jeu et le défi collectif.",
    image:
      "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/greenFusion/Greenfusion.png?raw=true"
    ,
    tags: ["Recherche UX", "Gamification", "App Mobile", "Design Produit"],
    fullDetails: {
      context: "Face à l'urgence environnementale, 1 Français sur 2 se sent concerné mais manque souvent de leviers d'action concrets. Avec l'avènement du 'Mobile Uniquement' (34 millions d'utilisateurs quotidiens), l'objectif était de transformer l'engagement écologique en une expérience quotidienne, collective et stimulante.",
      mission: "Concevoir une application capable d'encourager la coopération ou la compétition positive autour d'objectifs écologiques. Il fallait créer une communauté de joueurs engagés partageant conseils et réussites, tout en garantissant un équilibre entre défi et plaisir (Flow).",
      challenges: "Le principal risque identifié lors des tests était la perte de motivation rapide sans retour concret. Les points semblaient trop abstraits et les défis trop génériques. Il fallait donc 'donner corps' à l'impact écologique de chaque utilisateur via une ludification intelligente.",
      role: "UX Researcher & Product Designer. J'ai piloté l'ensemble de la chaîne de conception : de l'étude comparative aux tests utilisateurs finaux, en passant par l'idéation (Persona, Carte d'empathie) et le prototypage d'interface haute-fidélité.",
      presentationUrl: "https://docs.google.com/presentation/d/1tJDh8SpPskwt0rS_Nwq38_WKp8QWiNur0gNFFUuJFYc/edit?usp=sharing",
      solutionBlocks: [
        {
          type: 'text',
          content: "Phase de Planification : Benchmark et Stratégie\nL'analyse des solutions existantes (WAG, JouleBug, Zero Waste) a constitué la première étape de notre démarche. Cette exploration nous a permis de définir les axes stratégiques prioritaires pour se différencier :\n\n1. Ludification : Rendre l'écologie gratifiante.\n2. Communauté : Créer du lien social autour de l'impact.\n3. Simplicité : Une navigation fluide (max 5 items).\n4. Clarté : Une interface épurée pour l'action.\n5. Immédiateté : Réduire la friction entre l'intention et l'acte."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/Bench-desktop-view.png",
          mobileUrl: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/Bench-mobile-view.png",
          caption: "Analyse comparative des leviers d'engagement sur le marché.",
          preserveOriginal: true
        },
        {
          type: 'text',
          content: "L'enquête de terrain menée auprès de 10 utilisateurs cibles (26-55 ans, Île-de-France) a confirmé la prédominance du mobile (100%). Les résultats montrent que bien que 60% se disent informés, seuls 40% pratiquent des gestes éco-responsables réguliers. Le besoin : des informations fiables, brèves et une sensibilisation forte sans être moralisatrice."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/stat-desktop-view.png",
          mobileUrl: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/stat-mobile-view.png",
          caption: "Statistiques obtenues suite à nos différents interviews",
          preserveOriginal: true
        },
        // === PHASE 3 : IDÉATION - PERSONA ===
        {
          type: 'text',
          content: "Phase d'Idéation : Persona\nL'idéation a permis de modéliser Margaux (32 ans, active) comme persona principal. Elle représente notre cible : une personne sensible aux enjeux écologiques mais qui manque de leviers d'action concrets au quotidien."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/personae.png",
          caption: "Persona principal : Margaux, 32 ans, sensible à l'écologie.",
          preserveOriginal: true
        },

        // === PHASE 3 : IDÉATION - CARTE D'EMPATHIE ===
        {
          type: 'text',
          content: "Phase d'Idéation : Carte d'empathie\nAvec l'Empathy Map, j'ai pu vraiment comprendre ce que ressentait une personne sensible aux enjeux écologiques, ses motivations, ses frustrations et comment elle interagissait avec des contenus ou outils liés à l'écologie.\n\nJ'ai pu repérer des idées concrètes qui soient en phase avec ses valeurs. Notamment la partie 'Gain' qui nous a permis de dégager les points suivants :\n• Être accompagné dans mes gestes\n• Voir l'impact de mes efforts\n• Accompagnement des gestes écologiques"
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/empathyMap.png",
          caption: "Carte d'empathie : Comprendre les motivations et frustrations de l'utilisateur."
        },

        // === PHASE 3 : IDÉATION - XP MAP ===
        {
          type: 'text',
          content: "Phase d'Idéation : XP Map (Experience Map)\nLa conception d'une XP Map m'a permis de comprendre l'expérience utilisateur dans sa globalité, en visualisant ses actions, émotions et points de contact.\n\nElle m'a aidé à identifier les frictions et opportunités d'amélioration tout au long du parcours.\n\nEnfin, elle a alimenté ma stratégie UX et favorisé l'alignement des équipes autour d'une vision commune."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/xpMap.png",
          caption: "Experience Map : Visualisation du parcours utilisateur et des points de friction."
        },

        // === PHASE 4 : GÉNÉRATION - SIX-TO-ONE ===
        {
          type: 'text',
          content: "Phase de Génération : Six-to-One\nLe 'Six-to-One' nous a aidé à générer, comparer et combiner plusieurs pistes créatives. Sur la thématique d'un jeu à visée écologique et grâce aux insights des phases de conception UX précédentes (Interview, Empathy Map, Personas, XP Map), nous avons exploré des concepts variés de défis (défis par scan, géolocalisés, collectifs, etc.) avant de converger vers le produit minimal."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/sixToOne.png",
          caption: "Méthode Six-to-One : Exploration et convergence des pistes créatives.",
          preserveOriginal: true
        },

        // === PHASE 4 : GÉNÉRATION - TRI DE CARTES ===
        {
          type: 'text',
          content: "Phase de Génération : Tri de cartes et Architecture\nNous avons structuré l'information par un tri de cartes (OOUX) et stabilisé les parcours via un diagramme de flux pour définir l'architecture fonctionnelle de l'application."
        },
        {
          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/triCartes.png",
          caption: "Architecture fonctionnelle issue du tri de cartes.",
          preserveOriginal: true
        },

        // === PHASE 5 : PROTOTYPAGE ===
        {
          type: 'text',
          content: "Phase de Prototypage : Interface haute-fidélité\nLe prototype d'interface final propose une immersion directe dans les défis. L'écran principal regroupe les défis par catégories (Nature, Animaux, Recyclage). Chaque réussite est célébrée par un retour visuel fort, permettant de convertir les points en dons réels ou en actions locales pour maintenir la motivation sur le long terme."
        },
        {

          type: 'image',
          url: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/protoOne-desktop-view.png",
          mobileUrl: "https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/greenFusion/protoOne-mobile-view.png",
          caption: "Extrait d'interfaces de l'application Green Fusion.",
          preserveOriginal: true
        }
      ],
      kpi: [
        "Mise en place d'un tableau de bord d'impact individuel et collectif",
        "Conversion des points en dons, badges ou actions locales",
        "Filtrage intelligent des défis par lieu et saison",
        "Création de défis d'équipe pour favoriser la solidarité"
      ]
    }
  },
  // NoCode Project
  {
    id: "nocode",
    title: "NoCode & IA",
    isUpcoming: true,
    client: "Projets Personnels",
    category: "Construction Produit",
    description: "Création de flux automatisés et d'interfaces rapides via des outils NoCode et IA.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/NoCode/coverIANoCode.png?raw=true",
    tags: ["Automatisation IA", "Outils NoCode"],
    fullDetails: {
      context: "Exploration des capacités du NoCode pour accélérer le déploiement de prototypes (MVP) et automatiser des processus métiers répétitifs.",
      mission: "Démontrer l'efficacité des solutions NoCode couplées à l'IA.",
      challenges: "Intégration complexe de différentes interfaces de programmation (API) sans code, maintenance des flux à grande échelle.",
      role: "Product Builder. Architecture des données et design des automatisations."
    }
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "wild",
    school: "Wild Code School",
    degree: "Développement Web & Mobile",
    period: "Décembre 2020 - Avril 2021",
    description: "Introduction aux contraintes du développement web et mobile (design HTML, CSS, Vanilla JS, NODE JS, REACT JS, VUE, Webapp, API, JSON, Git, GitHub, Command Line)."
  },
  {
    id: "iesa",
    school: "IESA",
    degree: "UX Strategy & Innovation",
    period: "Avril 2019",
    description: "Lean UX, stratégie d’innovation, sciences cognitives et phénomènes de perception, psychologie cognitive, marketing sensoriel et émotionnel."
  },
  {
    id: "campus",
    school: "Campus Fonderie de l’image",
    degree: "UX Designer",
    period: "2018",
    description: "Méthodes UX, tests utilisateurs, analyse des usages, tri de cartes (card sorting)."
  },
  {
    id: "pyramyd",
    school: "Pyramyd",
    degree: "Datavisualisation & Ergonomie",
    period: "Janvier & Février 2015",
    description: "Datavisualisation (infographie statique, motion design), conception ergonomique de sites web."
  },
  {
    id: "paris13",
    school: "Paris 13",
    degree: "Licence Techniques de Communication",
    period: "Janvier 2006 - Janvier 2007",
    description: "Animation et gestion de site."
  }
];
