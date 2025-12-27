const translations = {
  en: {
    // Header & Navigation
    about: "About",
    projects: "Projects",
    competitions: "Competitions",
    resume: "Resume",
    portfolio: "Camille's Portfolio",
    
    // Hero Section
    heroGreeting: "Hi, I'm Camille",
    bioText: "I am a recent Computer Engineering graduate from Concordia University with experience across a wide range of projects, competitions, and student associations. My skills span robotics, algorithms, electronics, and web development. I have led and been in teams that have designed and built eight robotic systems, both for competitive events and personal projects. Through diverse student leadership roles, I developed strong soft skills, including team leadership, budget management, and resolving logistical and interpersonal challenges. Many of the processes and solutions I implemented are still used within these organizations today.",
    bioText2: "I am looking for a role where I can design effective, reusable solutions to complex problems while continuously learning new skills, refining my techniques, and contributing knowledge to my team.",
    
    // Projects Section
    mainProjects: "Main Projects & Competitions",
    technologiesLabel: "Technologies:",
    newtonTitle: "Newton Robot Capstone Project",
    newtonSummary: "Open-source quadruped robot, with Machine Learning capabilites for walking algorithms, and a developed BLDC motor, driver and encoder system, designed to lower the barrier of entry for students, researchers, and hobbyists.",
    newtonTech: "BLDC Motors, Encoders, Drivers, Python, I2C, CANbus",
    newtonLink: "Newton Capstone Project",
    
    machineTitle: "Engineering Games Machine",
    machineSummary: "Yearly 4-month robotics competition, where teams of engineering students design, build and program a robot for in response to a challenge, with the final presentation and testing happening at the Quebec Engineering Games/ Jeux de Génie du Québec.",
    machineTech: "Python, C++, Sensors, Motors/Drivers/Servos, Microcontrollers (RaspberryPi, Arduino, ESP32/8266)",
    machine2024: "Machine 2024-2025",
    machine2023: "Machine 2023-2024",
    
    robowarsTitle: "Robowars",
    robowarsSummary: "Yearly robotics competition, where engineering student teams designed and built a autonomous sumo robot to compete against other robotic teams, hosted by IEEE Concordia. Competed for three years, achieving 3rd place in 2025.",
    robowarsTech: "Sensors (IR, US, LIDAR, Reflectance...), C++, Microcontrollers (Arduino, ESP32), Autonomous systems, Communication Protocols",
    robowarsLink: "Robowars",
    
    // Competitions Section
    otherCompetitions: "Other Competitions",
    cqiTitle: "Canadian/Quebec Engineering Competition",
    seniorDesignTitle: "Senior Design",
    seniorDesignDate: "CQI 2023,2026",
    seniorDesignDesc: "A 12 hour design competition in which teams of 4 produce a robotic prototype in response to a problem presented on the same day.",
    seniorDesignSkills: ["Firmware Development", "Robotics", "ESP32/8266", "I2C, SPI, UART"],
    
    programmingTitle: "Programming",
    programmingDate: "CQI/CEC 2024,2025",
    programmingDesc: "A 12-hour programming competition in which teams of four develop a software solution, product, or design, and present their work in competition with other teams.",
    programmingSkills: ["Team-Based Development", "Debugging", "Algorithm Design", "Python, C++, Register-Level"],
    
    concordiaLeadershipTitle: "Concordia 2022 Student Leadership Conference",
    concordiaLeadershipDesc: "CASAxECA Consulting Competition, acheived 2nd place after developing a solution to a business consulting problem.",
    concordiaLeadershipSkills: ["Oral Communication", "Critical Thinking", "Research", "Argumentation"],
    
    gnctrTitle: "GNCTR Volunteer/Organizing Committee",
    gnctrDate: "2025",
    gnctrDesc: "Participated in the organization of the largest engineering competition in Canada, including managing transportation, teams and activities.",
    gnctrSkills: ["Oral Communication", "Group Organization", "Leadership", "Problem Solving"],
    
    ieeeTitle: "IEEE Extreme Hackathon",
    ieeeDate: "2022-2024",
    ieeeDesc: "Overnight international algorithms and problem-solving competition, with questions getting harder over the course of the 24hrs. Achieved 1st QC, 2nd CA in 2022.",
    ieeeSkills: ["Algorithm Development", "Team Coding", "Problem Solving", "Efficient design"],
    
    englympicsTitle: "Concordia Englympics/Engweek",
    englympicsDate: "2021-2025",
    englympicsDesc: "Participated in a litany of different engineering competitions, ranging from debates, software, consulting and more",
    englympicsSkills: ["Oral Communication", "Adaptability", "Python, C++", "Hardware/Electronics"],
    
    engGamesTitle: "Engineering Games",
    caseTitle: "Case/Consulting Competition",
    caseDate: "2023, 2024",
    caseDesc: "Developped a product or a complex solution to a given problem, and presented it to a judging panel of professionals and sponsors, acheiving 1st place in 2024.",
    caseSkills: ["Oral Communication/Presentation", "Solution Making", "Team Communication", "Dynamic Research"],
    
    computerTitle: "Computer Academic Competition",
    computerDate: "2025",
    computerDesc: "Participated in a 6 hour academic computer engineering competition, with questions ranging from Python and Computer Science knowledge to register-level programming and Shakespeare programming language.",
    computerSkills: ["Software", "Register-Level", "Embedded Programming", "Python"],
    
    // Newton Page
    newtonCapstone: "Newton Robot Capstone Project",
    newtonOverview1: "The Newton Project was an interdisciplinary capstone project aimed at designing and developing an accessible, modular and cost-effective quadruped robotic platform. The primary objective was lowering the barrier of entry for students, hobbyists and researchers interested in the field of legged locomotion and more advanced robotics, beyond the level of Arduino and other entry-level platforms.",
    newtonOverview2: "In practical terms, the project aimed to deliver a fully functional quadruped robot with 12 degrees of freedom, 3D-printable parts, cheap and cost-effective electronics, and a high interchangeability of components, as well as a software platform for a reinforcement learning system. The project was done in a team of 7 engineering students from different backgrounds and majors.",
    newtonOverview3: "My role in the team was as the main designer for the electrical, hardware and firmware system, with iterative testing and integration of many motors, drivers and encoder systems, a large amount of wiring, assembly and soldering, as well as a wide use of communication protocols and low-level embedded software. This was also conducted in parallel with the rest of the team, from the mechanical design to the software and RL implementation.",
    
    newton1Title: "Hardware",
    newton1Desc: "Custom BLDC motor design optimized for quadruped locomotion. Integrated motor drivers and high-precision encoder systems enable accurate position feedback and coordinated leg movement. The frame is constructed using lightweight materials to maximize efficiency.",
    newton1Item1: "Cost-Effective BLDC Motors",
    newton1Item1Desc: "The Foxtech 5008/340KV motor was selected due to its balance of cost and torque capability, as well as its easy availability and ease of interchangeability.",
    newton1Item2: "Powerful Motor Drivers",
    newton1Item2Desc: "We iteratively tested 7 different motor drivers, weighing efficiency, cost, reliability, but especially suitability for our purposes, as we realized that most BLDC drivers are designed for high-speed such as for planes and drones, whereas we needed power and precision. We finally selected the O-Drive S1, visible on the right.",
    newton1Item3: "Rotary Encoders",
    newton1Item3Desc: "The SameSky AMT103-V incremental rotary encoder was chosen for being reasonably cost-effective for a high precision and reliable incremental rotary encoder, which was a key requirement for the RL team.",
    newton1Item4: "Power Systems",
    newton1Item4Desc: "The power system was initially a tabletop power supply, but as our needs evolved and current draw became a problem, we moved to a 6S Lipo battery, allowing for untethered systems and higher peak current.",
    
    newton2Title: "Control & Firmware",
    newton2Desc:  " As before, the main objective in the control and firmware system was to establish a simple and linear layout, allowing for easy learning and modifications.",
    newton2Item1: "Hierarchical control layers: 8 kHz motor loop, 50 Hz joint control, 30 Hz perception",
    newton2Item2: "ROS2-based middleware within the Jetson Orin Nano",
    newton2Item3: "Real-time logging, fault detection, and safety handling",
    
    newton3Title: "Simulation and RL",
    newton3Desc: "Multi-protocol support allows seamless integration with various microcontrollers and sensors. The system uses I2C for sensor communication and CANbus for motor control synchronization across all four legs.",
    newton3Item1: "RL training using Isaac Sim and later, with more success, Genesis",
    newton3Item2: "Domain randomization (friction, mass, terrain) for a smaller gap transfer",
    newton3Item3: "Modular simulation components (environment, task, agent)",
    
    wantMore: "Want to see more projects?",
    backPortfolio: "Back to Portfolio",
    
    // Machine Page
    comingSoon: "Come back later..."
  },
  fr: {
    // Header & Navigation
    about: "À Propos",
    projects: "Projets",
    competitions: "Compétitions",
    resume: "CV",
    
    // Hero Section
    heroGreeting: "Bonjour, je suis Camille",
    bioText: "Je suis un diplômé récent en génie informatique, à l'Université Concordia, avec une solide expérience acquise à travers de nombreux projets, compétitions et associations étudiantes dans divers domaines, incluant la robotique, les algorithmes, l’électronique et le développement web. J’ai dirigé et participé à des équipes ayant conçu et construit huit systèmes robotiques, autant pour des compétitions que pour des projets personnels. Au travers d'une multitude de rôles de leadership dans des associations étudiantes, j’ai développé de solides compétences interpersonnelles, notamment en leadership d’équipe, en gestion budgétaire et en résolution de défis logistiques et humains",
    bioText2: "Je recherche un rôle où je peux concevoir des solutions efficaces et réutilisables à des problèmes complexes tout en apprenant continuellement de nouvelles compétences, en affinant mes techniques et en contribuant mes connaissances à mon équipe.",
    
    // Projects Section
    mainProjects: "Projets et Compétitions Notables",
    technologiesLabel: "Technologies:",
    newtonTitle: "Project Capstone: Robot Newton",
    newtonSummary: "Robot quadrupède open-source avec des capacités de Machine Learning pour les algorithmes de marche, et equipe d'un système de moteurs BLDC, drivers et encodeurs développé, conçu pour réduire la barrière à l'entrée pour les étudiants, chercheurs et hobbyists.",
    newtonTech: "Moteurs BLDC, Encodeurs, Drivers, Python, I2C, CANbus",
    newtonLink: "Projet Capstone Newton",
    
    machineTitle: "Machine - Jeux de Génie",
    machineSummary: "Compétition annuelle de robotique durant quatre mois, pendant laquelle des équipes d’étudiants en génie conçoivent, construisent et programment un robot en réponse à un défi technique, avec une présentation finale aux Jeux de Génie du Québec.",
    machineTech: "Python, C++, Capteurs, Moteurs/Drivers/Servos, Microcontrôleurs (RaspberryPi, Arduino, ESP32/8266)",
    machine2024: "Machine 2024-2025",
    machine2023: "Machine 2023-2024",
    
    robowarsTitle: "Robowars",
    robowarsSummary: "Compétition annuelle de robotique où des équipes d’étudiants en génie conçoivent et construisent un robot sumo autonome pour affronter d’autres équipes, organisée par IEEE Concordia. J’y ai participé pendant trois ans, atteignant la 3e place en 2025.",
    robowarsTech: "Capteurs (IR, US, LIDAR, Réflectance...), C++, Microcontrôleurs (Arduino, ESP32), Systèmes autonomes, Protocoles de communication",
    robowarsLink: "Robowars",
    
    // Competitions Section
    otherCompetitions: "Autres Compétitions",
    cqiTitle: "Compétition Québécoise/Canadienne d’Ingénierie",
    seniorDesignTitle: "Conception senior",
    seniorDesignDate: "CQI 2023,2026",
    seniorDesignDesc: "Compétition de conception de 12 heures dans laquelle des équipes de 4 produisent un prototype robotique en réponse à un problème présenté le même jour.",
    seniorDesignSkills: ["Développement Embarqué", "Robotique", "ESP32/8266", "I2C, SPI, UART"],
    
    programmingTitle: "Programmation",
    programmingDate: "CQI/CEC 2024,2025",
    programmingDesc: "Compétition de programmation de 12 heures dans laquelle des équipes de quatre développent une solution logicielle, un produit ou un concept, et présentent leur travail.",
    programmingSkills: ["Développement en équipe", "Débogage", "Conception d'algorithmes", "Python, C++, Register-Level"],
    
    concordiaLeadershipTitle: "Concordia 2022 Student Leadership Conference",
    concordiaLeadershipDesc: "Compétition de genie conseil CASAxECA, 2e place après avoir développé une solution à un problème de business consulting.",
    concordiaLeadershipSkills: ["Communication orale", "Pensée critique", "Recherche", "Argumentation"],
    
    gnctrTitle: "GNCTR Bénévole/Comité organisateur",
    gnctrDate: "2025",
    gnctrDesc: "Participé à l'organisation et au deroulement de la plus grande compétition d'ingénierie au Canada, y compris la gestion des transports, des équipes et des activités.",
    gnctrSkills: ["Communication orale", "Organisation de groupe", "Leadership", "Résolution de problèmes"],
    
    ieeeTitle: "Hackathon IEEE Extreme",
    ieeeDate: "2022-2024",
    ieeeDesc: "Compétition internationale d'algorithmes et de résolution de problèmes pendant 24h. Attteint la 1ère place QC, 2e CA en 2022.",
    ieeeSkills: ["Développement d'algorithmes", "Programmation en équipe", "Résolution de problèmes"],
    
    englympicsTitle: "Concordia Englympics/Engweek",
    englympicsDate: "2021-2025",
    englympicsDesc: "Compétition regroupant une multitude de différentes compétitions d'ingénierie, allant des débats, a la programmation, au conseil et plus",
    englympicsSkills: ["Communication orale", "Adaptabilité", "Python, C++", "Hardware/Électronique"],
    
    engGamesTitle: "Jeux de Génie",
    caseTitle: "Compétition Genie Conseil",
    caseDate: "2023, 2024",
    caseDesc: "Developpement d'un produit ou d'une solution complexe à un problème donné, et presentation à un jury de professionnels et de commanditaires, atteignant la 1ère place en 2024.",
    caseSkills: ["Communication/Présentation orale", "Création de solutions", "Communication d'équipe"],
    
    computerTitle: "Compétition Académique: Informatique",
    computerDate: "2025",
    computerDesc: "Compétition académique en génie informatique de 6 heures, avec des questions allant des connaissances en Python et informatique à la programmation au niveau des registres et au langage ShakespearePL.",
    computerSkills: ["Logiciel", "Register-Level", "Programmation embarquée", "Python"],
    
    // Newton Page
    newtonCapstone: "Projet de fin d'études: Robot Newton",
    newtonOverview1: "Le projet Newton était un projet de fin d’études interdisciplinaire visant la création d’une plateforme robotique quadrupède accessible, modulaire et peu chère. Son objectif principal était de réduire la barrière à l’entrée pour les étudiants, les passionnés et les chercheurs intéressés par la locomotion quadrupède et la robotique avancée, au-delà des plateformes d’initiation telles que Arduino et autres solutions simples.",
    newtonOverview2: "En termes pratiques, le projet visait à livrer un robot quadrupède entièrement fonctionnel avec 12 degrés de liberté, des pièces imprimables en 3D, de l'électronique bon marché et rentable, et une interchangeabilité élevée des composants, ainsi qu'une plateforme logicielle pour un système d'apprentissage par renforcement. Le projet a été réalisé par une équipe de 7 étudiants en ingénierie de différents horizons et domaines.",
    newtonOverview3: "Mon rôle dans l'équipe était en tant que principal concepteur du système électrique, matériel et micrologiciel, avec des tests itératifs et l'intégration de nombreux moteurs, pilotes et systèmes d'encodeurs, une grande quantité de câblage, d'assemblage et de soudure, ainsi qu'une utilisation importante des protocoles de communication et des logiciels embarqués de bas niveau. Cela a également été mené en parallèle avec le reste de l'équipe, allant de la conception mécanique à la mise en œuvre du logiciel et de l'RL.",
    
    newton1Title: "Matériel",
    newton1Desc: "Conception de moteur BLDC personnalisée optimisée pour la locomotion quadrupède. Les pilotes moteurs intégrés et les systèmes d'encodeurs haute précision permettent une rétroaction de position précise et un mouvement des jambes coordonné. Le cadre est construit à partir de matériaux légers pour maximiser l'efficacité.",
    newton1Item1: "Moteurs BLDC rentables",
    newton1Item1Desc: "Le moteur Foxtech 5008/340KV a été sélectionné en raison de son équilibre entre le coût et la capacité de couple, ainsi que de sa disponibilité facile et de sa facilité d'interchangeabilité.",
    newton1Item2: "Pilotes moteurs puissants",
    newton1Item2Desc: "Nous avons testé de manière itérative 7 pilotes moteurs différents, en évaluant l'efficacité, le coût, la fiabilité, mais surtout l'adéquation à nos besoins, car nous avons réalisé que la plupart des pilotes BLDC sont conçus pour la haute vitesse, par exemple pour les avions et les drones, alors que nous avions besoin de puissance et de précision. Nous avons finalement sélectionné l'O-Drive S1, visible à droite.",
    newton1Item3: "Encodeurs rotatifs",
    newton1Item3Desc: "L'encodeur rotatif incrémental SameSky AMT103-V a été choisi pour être raisonnablement rentable pour un encodeur rotatif incrémental hautement précis et fiable, ce qui était une exigence clé pour l'équipe RL.",
    newton1Item4: "Systèmes d'alimentation",
    newton1Item4Desc: "Le système d'alimentation était initialement une alimentation de bureau, mais à mesure que nos besoins évoluaient et que la consommation de courant devenait un problème, nous avons opté pour une batterie Lipo 6S, permettant des systèmes sans fil et un courant de crête plus élevé.",
    
    newton2Title: "Contrôle et microprogrammation",
    newton2Desc: "Newton utilise des algorithmes d'apprentissage automatique basés sur Python pour optimiser les modèles de marche et s'adapter à différentes conditions de terrain. Le système apprend les paramètres de démarche efficaces par apprentissage par renforcement et simulation.",
    newton2Item1: "Frameworks ML Python",
    newton2Item2: "Optimisation de la démarche",
    newton2Item3: "Boucle de contrôle temps réel",
    newton2Item4: "Traitement des données de capteurs",
    
    newton3Title: "Protocoles de communication",
    newton3Desc: "Le support multi-protocoles permet une intégration transparente avec divers microcontrôleurs et capteurs. Le système utilise I2C pour la communication des capteurs et CANbus pour la synchronisation du contrôle moteur sur les quatre jambes.",
    newton3Item1: "Protocole I2C",
    newton3Item2: "CANbus",
    newton3Item3: "Communication série",
    newton3Item4: "Fusion de capteurs",
    
    wantMore: "Voulez-vous voir plus de projets?",
    backPortfolio: "Retour au portfolio",
    
    // Machine Page
    comingSoon: "Revenez plus tard..."
  }
};
