const translations = {
  en: {
    sourceList: 'Source list',
    certificationLabel: 'Professional Certification',
    heroTitle: 'Google Cloud Professional Network Engineer',
    heroDescription: 'Learn faster with a structured study plan, curated references, and a built-in practice exam bank for VPC, hybrid connectivity, routing, security, and troubleshooting.',
    officialExamPage: 'Official exam page',
    prepSheet: '2026 prep sheet',
    examAtAGlance: 'Exam at a glance',
    officialPracticeTest: 'Official practice test',
    studyTracker: 'Study tracker',
    progress: 'Progress',
    topicsComplete: 'Topics complete',
    totalTopics: 'Total topics',
    questionBank: 'Question bank',
    totalQuestions: 'Total questions',
    simulationSize: 'Simulation size',
    generate30: 'Generate 30Q',
    generate50: 'Generate 50Q',
    whatToLearnFirst: 'What to learn first',
    studyPath: 'Study path',
    learningChecklist: 'Learning checklist',
    examFlow: 'Exam flow',
    studyFlowByStage: 'Study flow by stage',
    quickRecall: 'Quick recall',
    examChecklist: 'Exam checklist by topic',
    learnInsideThisRepo: 'Learn inside this repo',
    deepDiveTitle: 'High-value network topics',
    priorityResources: 'Priority resources',
    startHere: 'Start here',
    learningResources: 'Learning resources',
    curatedStudyLibrary: 'Curated study library',
    practiceExam: 'Practice exam',
    mockExam: 'Mock exam simulator',
    ready: 'Ready',
    startExam: 'Start exam',
    revealAnswer: 'Reveal answer',
    reset: 'Reset',
    previous: 'Previous',
    next: 'Next',
    all: 'All',
    posts: 'Posts',
    videos: 'Videos',
    books: 'Books',
    training: 'Training',
    backToDashboard: 'Back to dashboard',
    home: 'Home',
    openArticle: 'Open article',
    watch: 'Watch',
    viewBook: 'View book',
    viewLab: 'View lab',
    checklistTopics: [
      'VPC fundamentals',
      'CIDR and subnet design',
      'Routing and firewall rules',
      'Shared VPC and service networking',
      'Cloud NAT and private access',
      'Hybrid connectivity: VPN',
      'Cloud Interconnect',
      'Network Connectivity Center',
      'Load balancing',
      'DNS and traffic management',
      'Security and IAM for networking',
      'Monitoring and troubleshooting'
    ]
  },
  al: {
    sourceList: 'Lista e burimeve',
    certificationLabel: 'Certifikim Profesional',
    heroTitle: 'Inxhinier Rrjeti Profesionist i Google Cloud',
    heroDescription: 'Mësoni më shpejt me një plan studimi të strukturuar, referenca të kuratuara dhe një bank pyetjesh praktikash në VPC, lidhje hibride, routing, siguri dhe zgjidhje probleme.',
    officialExamPage: 'Faqja zyrtare e provimit',
    prepSheet: 'Fletë përgatitëse 2026',
    examAtAGlance: 'Provimi në një shikim',
    officialPracticeTest: 'Testi praktik zyrtar',
    studyTracker: 'Ndjekja e studimit',
    progress: 'Përparimi',
    topicsComplete: 'Tema të kompletuara',
    totalTopics: 'Totali i temave',
    questionBank: 'Banka e pyetjeve',
    totalQuestions: 'Pyetje totale',
    simulationSize: 'Madhësia e simulimit',
    generate30: 'Krijo 30Q',
    generate50: 'Krijo 50Q',
    whatToLearnFirst: 'Çfarë të mësohet së pari',
    studyPath: 'Rruga e studimit',
    learningChecklist: 'Lista e kontrollit',
    examFlow: 'Fluksi i provimit',
    studyFlowByStage: 'Fluksi i studimit sipas fazave',
    quickRecall: 'Memorizim i shpejtë',
    examChecklist: 'Lista e kontrollit të provimit sipas temave',
    learnInsideThisRepo: 'Mëso brenda këtij repo',
    deepDiveTitle: 'Tema të rëndësishme të rrjetit',
    priorityResources: 'Burimet me prioritet',
    startHere: 'Fillo këtu',
    learningResources: 'Burimet e të mësuarit',
    curatedStudyLibrary: 'Bibliotekë e kuratuar e studimit',
    practiceExam: 'Provim praktik',
    mockExam: 'Simuluesi i provimit praktik',
    ready: 'Gati',
    startExam: 'Fillo provimin',
    revealAnswer: 'Trego përgjigjen',
    reset: 'Rivendos',
    previous: 'I mëparshmi',
    next: 'Tjetër',
    all: 'Të gjitha',
    posts: 'Postime',
    videos: 'Video',
    books: 'Libra',
    training: 'Trajnim',
    backToDashboard: 'Kthehu te paneli',
    home: 'Kreu',
    openArticle: 'Hape artikullin',
    watch: 'Shiko',
    viewBook: 'Shiko librin',
    viewLab: 'Shiko laboratorin',
    checklistTopics: [
      'Themellet e VPC',
      'Dizajni i CIDR dhe nëndisave',
      'Rregullat e routing dhe firewall',
      'VPC e ndarë dhe rrjetëzimi i shërbimeve',
      'Cloud NAT dhe qasja private',
      'Lidhja hibride: VPN',
      'Cloud Interconnect',
      'Network Connectivity Center',
      'Balancimi i ngarkesës',
      'DNS dhe menaxhimi i trafikut',
      'Siguria dhe IAM për rrjetet',
      'Monitorimi dhe zgjidhja e problemeve'
    ]
  }
};

const pageSpecificTranslations = {
  'vpc-fundamentals.html': {
    title: { en: 'VPC Fundamentals', al: 'Themellet e VPC' },
    description: {
      en: 'A VPC is the foundation of Google Cloud networking. It is a global virtual network that lets you segment resources, define private IP space, control traffic with firewall rules, and connect services securely within a project or across projects.',
      al: 'Një VPC është themeli i rrjetit të Google Cloud. Është një rrjet virtual global që ju lejon të ndajnë burimet, të përcaktojnë hapësirë private IP, të kontrolloni trafikun me rregulla firewall dhe të lidhni shërbimet në mënyrë të sigurt brenda një projekti ose midis projekteve.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'cidr-subnet-design.html': { en: 'CIDR', al: 'CIDR' },
      'routing-firewall.html': { en: 'Routing', al: 'Routing' },
      'hybrid-connectivity.html': { en: 'Hybrid', al: 'Hibride' },
      'load-balancing-dns.html': { en: 'LB & DNS', al: 'LB & DNS' },
      'security-monitoring.html': { en: 'Security', al: 'Siguria' }
    }
  },
  'cidr-subnet-design.html': {
    title: { en: 'CIDR and Subnet Design', al: 'CIDR dhe Dizajni i Nënrrjeteve' },
    description: {
      en: 'CIDR is the way networks are named and sized. In real network design, the goal is to create clean, non-overlapping ranges that support scaling, segmentation, and hybrid connectivity without future conflicts.',
      al: 'CIDR është mënyra se si emërtohen dhe madhësohen rrjetet. Në dizajnin real të rrjetit, qëllimi është krijimi i gamave të pastra, pa mbivendosje që mbështesin shkallëzimin, segmentimin dhe lidhjen hibride pa konflikte në të ardhmen.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'vpc-fundamentals.html': { en: 'VPC', al: 'VPC' },
      'routing-firewall.html': { en: 'Routing', al: 'Routing' },
      'hybrid-connectivity.html': { en: 'Hybrid', al: 'Hibride' },
      'load-balancing-dns.html': { en: 'LB & DNS', al: 'LB & DNS' },
      'security-monitoring.html': { en: 'Security', al: 'Siguria' }
    }
  },
  'routing-firewall.html': {
    title: { en: 'Routing and Firewall', al: 'Routing dhe Firewall' },
    description: {
      en: 'Routes decide where packets go, and firewall rules decide whether they are allowed to flow. In Google Cloud, the correct network design depends on both being intentional and aligned with the security model.',
      al: 'Rrugët përcaktojnë ku shkojnë paketat, ndërsa rregullat e firewall përcaktojnë nëse ato lejohen të rrjedhin. Në Google Cloud, dizajni i duhur i rrjetit varet nga fakti që të dyja të jenë të përqendruara dhe të përputhura me modelin e sigurisë.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'vpc-fundamentals.html': { en: 'VPC', al: 'VPC' },
      'cidr-subnet-design.html': { en: 'CIDR', al: 'CIDR' },
      'hybrid-connectivity.html': { en: 'Hybrid', al: 'Hibride' },
      'load-balancing-dns.html': { en: 'LB & DNS', al: 'LB & DNS' },
      'security-monitoring.html': { en: 'Security', al: 'Siguria' }
    }
  },
  'hybrid-connectivity.html': {
    title: { en: 'Hybrid Connectivity', al: 'Lidhja Hibride' },
    description: {
      en: 'Hybrid connectivity is about extending private network reach between on-prem environments and Google Cloud. The choice depends on bandwidth, latency sensitivity, resilience, and operational complexity.',
      al: 'Lidhja hibride ka të bëjë me zgjerimin e arritshmërisë së rrjetit privat midis mjediseve lokale dhe Google Cloud. Zgjedhja varet nga kapaciteti i brezit, ndjeshmëria ndaj vonesës, resilienca dhe kompleksiteti operativ.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'vpc-fundamentals.html': { en: 'VPC', al: 'VPC' },
      'cidr-subnet-design.html': { en: 'CIDR', al: 'CIDR' },
      'routing-firewall.html': { en: 'Routing', al: 'Routing' },
      'load-balancing-dns.html': { en: 'LB & DNS', al: 'LB & DNS' },
      'security-monitoring.html': { en: 'Security', al: 'Siguria' }
    }
  },
  'load-balancing-dns.html': {
    title: { en: 'Load Balancing and DNS', al: 'Balancimi i Ngarkesës dhe DNS' },
    description: {
      en: 'Load balancing ensures traffic is distributed across healthy backends, while DNS routes users to the right service or region. Together, they help keep services available, fast, and resilient.',
      al: 'Balancimi i ngarkesës siguron që trafiku të shpërndahet në backend të shëndetshëm, ndërsa DNS i drejton përdoruesit te shërbimi ose rajoni i duhur. Së bashku, ata ndihmojnë të mbahen shërbimet të disponueshme, të shpejta dhe të qëndrueshme.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'vpc-fundamentals.html': { en: 'VPC', al: 'VPC' },
      'cidr-subnet-design.html': { en: 'CIDR', al: 'CIDR' },
      'routing-firewall.html': { en: 'Routing', al: 'Routing' },
      'hybrid-connectivity.html': { en: 'Hybrid', al: 'Hibride' },
      'security-monitoring.html': { en: 'Security', al: 'Siguria' }
    }
  },
  'security-monitoring.html': {
    title: { en: 'Security and Monitoring', al: 'Siguria dhe Monitorimi' },
    description: {
      en: 'Networking security is not only about firewall rules. It is also about least privilege, logging, visibility, segmentation, and being able to diagnose traffic problems quickly when a system behaves unexpectedly.',
      al: 'Siguria e rrjetit nuk është vetëm rregullat e firewall. Është gjithashtu e lidhur me privilegjin minimal, logging, dukshmërinë, segmentimin dhe aftësinë për të diagnostikuar shpejt problemet e trafikut kur një sistem sillet në mënyrë të paparashikueshme.'
    },
    nav: {
      '../index.html': { en: 'Home', al: 'Kreu' },
      'vpc-fundamentals.html': { en: 'VPC', al: 'VPC' },
      'cidr-subnet-design.html': { en: 'CIDR', al: 'CIDR' },
      'routing-firewall.html': { en: 'Routing', al: 'Routing' },
      'hybrid-connectivity.html': { en: 'Hybrid', al: 'Hibride' },
      'load-balancing-dns.html': { en: 'LB & DNS', al: 'LB & DNS' }
    }
  },
  'shared-vpc.html': {
    title: { en: 'Shared VPC', al: 'VPC e Ndarë' },
    description: {
      en: 'Shared VPC lets one host project share a VPC network with multiple service projects. It is a common design for enterprise teams that want centralized networking while keeping workloads isolated by project.',
      al: 'VPC e ndarë u lejon një projekti host të ndajë një rrjet VPC me projekte të shumta shërbimi. Është një dizajn i zakonshëm për ekipe të ndërmarrjeve që duan rrjetëzim të centralizuar ndërkohë që mbajnë workload-et të izoluara sipas projekti.'
    }
  },
  'private-connectivity.html': {
    title: { en: 'Private Connectivity', al: 'Lidhja Private' },
    description: {
      en: 'These technologies help workloads stay private by avoiding public exposure while still reaching managed Google services and internal applications.',
      al: 'Këto teknologji i ndihmojnë workload-et të mbeten private duke shmangur ekspozimin publik, ndërkohë që arrihen shërbime të menaxhuara të Google dhe aplikacione të brendshme.'
    }
  },
  'cloud-router.html': {
    title: { en: 'Cloud Router', al: 'Cloud Router' },
    description: {
      en: 'Cloud Router is the BGP-enabled routing component used for dynamic route exchange between Google Cloud and outside networks. It is central to resilient hybrid connectivity and traffic control.',
      al: 'Cloud Router është komponenti i routing me BGP i përdorur për shkëmbimin dinamik të rrugëve midis Google Cloud dhe rrjeteve të jashtme. Ai është thelbësor për lidhjen hibride të qëndrueshme dhe kontrollin e trafikut.'
    }
  },
  'dns-best-practices.html': {
    title: { en: 'DNS Best Practices', al: 'Praktikat më të mira të DNS' },
    description: {
      en: 'DNS is not just name resolution. In cloud networking, DNS design affects load balancing decisions, service discovery, private zone isolation, and cross-environment routing.',
      al: 'DNS nuk është vetëm zgjidhja e emrave. Në rrjetëzimin e cloud, dizajni i DNS ndikon në vendimet e balancimit të ngarkesës, zbulimin e shërbimeve, izolimin e zonave private dhe routing midis mjediseve.'
    }
  },
  'edge-security.html': {
    title: { en: 'Edge Security', al: 'Siguria në Edge' },
    description: {
      en: 'Edge security protects the entry points of your services, filtering malicious traffic before it reaches the origin and helping keep workloads resilient and reliable.',
      al: 'Siguria në edge mbron pikat e hyrjes të shërbimeve tuaja, duke filtruar trafikun e keqfilltë para se të arrijë në origjinë dhe duke ndihmuar që workload-et të mbeten të qëndrueshme dhe të besueshme.'
    }
  },
  'network-deep-dives.html': {
    title: { en: 'Network Deep Dives', al: 'Analiza të thelluara të rrjetit' },
    description: {
      en: 'These are the advanced networking topics most often tested in the Professional Cloud Network Engineer exam. Each one is a high-value area where architecture decisions matter.',
      al: 'Këto janë temat e avancuara të rrjetit që shpesh testohen në provimin Professional Cloud Network Engineer. Secila është një zonë me vlerë të lartë ku vendimet e arkitekturës kanë rëndësi.'
    }
  },
  'index.html': {
    title: { en: 'Google Cloud Network Engineer Study Hub', al: 'Google Cloud Network Engineer Study Hub' },
    description: {
      en: 'Learn faster with a structured study plan, curated references, and a built-in practice exam bank for VPC, hybrid connectivity, routing, security, and troubleshooting.',
      al: 'Mësoni më shpejt me një plan studimi të strukturuar, referenca të kuratuara dhe një bank pyetjesh praktikë të integruar për VPC, lidhje hibride, routing, siguri dhe zgjidhje probleme.'
    }
  },
  'whitepapers.html': {
    title: { en: 'Whitepaper Library', al: 'Biblioteka e Whitepapers' },
    description: {
      en: 'Download curated Google Cloud documents covering migration, security, architecture, AI, and operating model guidance.',
      al: 'Shkarkoni dokumente të kuratuara të Google Cloud që mbulojnë migrimin, sigurinë, arkitekturën, AI dhe udhëzimet e modelit operativ.'
    }
  },
  'sandbox-labs.html': {
    title: { en: 'Sandbox Lab Ideas', al: 'Ide për Lab në Sandbox' },
    description: {
      en: 'These labs are designed for a free-tier or sandbox Google Cloud setup. Each exercise gives you a realistic networking challenge, shows how to build it step by step, and explains the value after it is implemented.',
      al: 'Këto lab janë projektuar për një mjedis Google Cloud me free-tier ose sandbox. Secili ushtrim ju jep një sfidë realiste të rrjetit, tregon se si ta ndërtoni hap pas hapi dhe shpjegon vlerën pas zbatimit.'
    }
  },
  'whitepapers.html': {
    title: { en: 'Whitepaper Library', al: 'Biblioteka e Whitepapers' },
    description: {
      en: 'Curated technical whitepapers and design references for networking, security, cloud migration, and data strategy.',
      al: 'Whitepapers teknike dhe referenca dizajni të kuratuara për rrjetëzim, siguri, migrim cloud dhe strategji të të dhënave.'
    }
  }
};

const pageTextTranslations = {
  'index.html': {
    'Professional Certification': 'Certifikim Profesional',
    'Google Cloud Professional Network Engineer': 'Google Cloud Professional Network Engineer',
    'Learn faster with a structured study plan, curated references, and a built-in practice exam bank for VPC, hybrid connectivity, routing, security, and troubleshooting.': 'Mësoni më shpejt me një plan studimi të strukturuar, referenca të kuratuara dhe një bank pyetjesh praktikë të integruar për VPC, lidhje hibride, routing, siguri dhe zgjidhje problemesh.',
    'Official exam page': 'Faqja zyrtare e provimit',
    '2026 prep sheet': 'Fletë përgatitore 2026',
    'Exam at a glance': 'Provimi në një shikim',
    'Length:': 'Gjatësia:',
    '2 hours': '2 orë',
    'Questions:': 'Pyetje:',
    '~50': '~50',
    'Level:': 'Niveli:',
    'Professional': 'Profesional',
    'Type:': 'Lloji:',
    'Specialization': 'Specializim',
    'Official practice test': 'Test praktik zyrtar',
    'Progress': 'Përparim',
    'Study tracker': 'Gjurmues studimi',
    'Topics complete': 'Tema të përfunduara',
    'Total topics': 'Totali i temave',
    'Question bank': 'Bankë pyetjesh',
    'Total questions': 'Totali i pyetjeve',
    'Simulation size': 'Madhësia e simulimit',
    'Generate 30Q': 'Krijo 30 pyetje',
    'Generate 50Q': 'Krijo 50 pyetje',
    'Study path': 'Rruga e studimit',
    'What to learn first': 'Çfarë të mësoni së pari',
    'Networking fundamentals': 'Themellet e rrjetëzimit',
    'IP addressing, CIDR, subnet design, routing, NAT, private/public access, and Google Cloud networking concepts.': 'Adresimi IP, CIDR, dizajni i nëndisjeve, routing, NAT, qasja private/public dhe konceptet e rrjetëzimit në Google Cloud.',
    'VPC and connectivity': 'VPC dhe lidhshmëria',
    'VPC design, shared VPC, firewall rules, service networking, peering, and interconnects.': 'Dizajni i VPC, VPC e ndarë, rregullat e firewall, rrjetëzimi i shërbimeve, peering dhe interconnects.',
    'Hybrid networking': 'Rrjetëzim hibrid',
    'VPN, Cloud Interconnect, NCC, private connectivity, and deciding when to use each pattern.': 'VPN, Cloud Interconnect, NCC, lidhshmëri private dhe vendimmarrja për përdorimin e secilit model.',
    'Load balancing and DNS': 'Balancimi i ngarkesës dhe DNS',
    'HTTP(S), TCP/UDP balancing, global vs regional, health checks, CDN, and DNS architecture.': 'Balancimi HTTP(S), TCP/UDP, global kundrejt rajonal, health checks, CDN dhe arkitektura DNS.',
    'Security and operations': 'Siguria dhe operacionet',
    'IAP, firewall best practices, identity boundaries, logging, monitoring, and incident troubleshooting.': 'IAP, praktikat më të mira të firewall, kufijtë e identitetit, logging, monitorim dhe zgjidhje e incidenteve.',
    'Hands-on practice': 'Praktikë praktike',
    'Use labs and timed simulation tests to validate traffic flow, architecture decisions, and resilience planning.': 'Përdorni lab-et dhe testet e simuluara me kohë për të validuar rrjedhën e trafikut, vendimet e arkitekturës dhe planifikimin e resiliencës.',
    'Checklist': 'Lista e kontrollit',
    'Learning checklist': 'Lista e kontrollit të mësimit',
    'Exam flow': 'Fluksi i provimit',
    'Study flow by stage': 'Fluksi i studimit sipas etapave',
    'Learn the pattern': 'Mësoni modelin',
    'Start with VPC, CIDR, routing, and firewall logic before moving to hybrid and edge topics.': 'Filloni me VPC, CIDR, routing dhe logjikën e firewall para se të kaloni te temat hibride dhe edge.',
    'Map the design': 'Hartoni dizajnin',
    'Compare VPN vs Interconnect, private vs public access, and regional vs global load balancing.': 'Krahasoni VPN me Interconnect, qasjen private me publike dhe balancimin e ngarkesës regional me global.',
    'Test under pressure': 'Testoni nën presion',
    'Use timed exams and topic checklists to confirm your route selection, policy decision, and troubleshooting instinct.': 'Përdorni provime me kohë dhe lista tematike për të verifikuar zgjedhjen e rrugës, vendimin e politikës dhe instinktin e zgjidhjes së problemeve.',
    'Quick recall': 'Kujtesë e shpejtë',
    'Exam checklist by topic': 'Lista e kontrollit të provimit sipas teme',
    'One global network; subnets are regional.': 'Një rrjet global; nëndisat janë rajonale.',
    'Keep ranges non-overlapping and deliberate.': 'Mbajini gamat pa mbivendosje dhe të qarta.',
    'Match route behavior to traffic source and destination.': 'Përputhni sjelljen e rrugës me burimin dhe destinacionin e trafikut.',
    'Ingress default deny; explicit allow rules control access.': 'Ingress default deny; rregullat e allow të shprehura kontrollojnë qasjen.',
    'VPN for flexibility, Interconnect for scale and performance.': 'VPN për fleksibilitet, Interconnect për shkallëzim dhe performancë.',
    'Dynamic route exchange via BGP.': 'Shkëmbim dinamik i rrugëve përmes BGP.',
    'Choose by protocol, exposure, and backend design.': 'Zgjidhni sipas protokolit, ekspozimit dhe dizajnit të backend.',
    'Private DNS for internal services; public DNS for internet reachability.': 'DNS private për shërbime të brendshme; DNS publik për arritshmëri në internet.',
    'Layer policy at edge, VPC boundary, and service perimeter.': 'Politika në shtresë në edge, kufirin e VPC dhe perimetrin e shërbimit.',
    'Validate routing, latency, reachability, and health before changing scope.': 'Verifikoni routing, vonesën, arritshmërinë dhe shëndetin para ndryshimit të ambit.',
    'Internal study guides': 'Udhëzues të brendshëm studimi',
    'Learn inside this repo': 'Mësoni brenda këtij repo',
    'Learn networks, subnets, firewall, and segmentation.': 'Mësoni rrjetëzimin, nëndisjet, firewall dhe segmentimin.',
    'Understand IP planning and private ranges.': 'Kuptoni planifikimin e IP-ve dhe gamat private.',
    'Route matching, policy, and traffic control.': 'Përputhja e rrugëve, politika dhe kontrolli i trafikut.',
    'VPN, Interconnect, and BGP decision patterns.': 'Modele vendimmarrjeje për VPN, Interconnect dhe BGP.',
    'Global traffic management and health checks.': 'Menaxhimi global i trafikut dhe health checks.',
    'IAP, least privilege, logging and troubleshooting.': 'IAP, privilegj minimal, logging dhe zgjidhje problemesh.',
    'Hands-on exercises with step-by-step setup and outcomes.': 'Ushtrime praktikore me konfigurim dhe rezultate hap pas hapi.',
    'High-value network topics': 'Temat me vlerë të lartë të rrjetit',
    'Shared VPC': 'VPC e ndarë',
    'Understand cross-project networking and centralized design.': 'Kuptoni rrjetëzimin ndër-projekt dhe dizajnin e centralizuar.',
    'Private connectivity': 'Lidhshmëria private',
    'Private Service Access and Private Google Access patterns.': 'Modelet e Private Service Access dhe Private Google Access.',
    'Cloud Router': 'Cloud Router',
    'Dynamic route exchange and hybrid connectivity design.': 'Shkëmbim dinamik i rrugëve dhe dizajn i lidhjes hibride.',
    'DNS best practices': 'Praktikat më të mira të DNS',
    'Private and public naming and routing design.': 'Emërtimi dhe dizajni i routing për DNS private dhe publik.',
    'Choosing a load balancer': 'Zgjedhja e një balanceri ngarkese',
    'Choose the right load balancer for protocol and exposure.': 'Zgjidhni balancerin e duhur sipas protokollit dhe ekspozimit.',
    'Edge security': 'Siguria në edge',
    'Protect public-facing services and control abuse.': 'Mbrojini shërbimet me ekspozim publik dhe kontrolloni abuzimin.'
  },
  'whitepapers.html': {
    'Resource library': 'Biblioteka e burimeve',
    'Whitepapers & reference guides': 'Whitepapers dhe udhëzues referimi',
    'Download curated Google Cloud documents covering migration, security, architecture, AI, and operating model guidance for your study and design work.': 'Shkarkoni dokumente të kuratuara të Google Cloud që mbulojnë migrimin, sigurinë, arkitekturën, AI dhe udhëzimet e modelit operativ për punën tuaj të studimit dhe dizajnit.',
    'Back to dashboard': 'Kthehu te paneli',
    'Browse all': 'Shfleto të gjitha',
    'Library snapshot': 'Përmbledhje e bibliotekës',
    'Documents:': 'Dokumente:',
    'Coverage:': 'Mbulesa:',
    'security, migration, AI, analytics': 'siguri, migrim, AI, analitika',
    'Format:': 'Formati:',
    'PDF and HTML': 'PDF dhe HTML',
    'Open source list': 'Lista e burimeve të hapura',
    'Downloads': 'Shkarkime',
    'Whitepaper library': 'Biblioteka e whitepapers',
    'All': 'Të gjitha',
    'Security': 'Siguria',
    'Migration': 'Migrimi',
    'Data & AI': 'Të dhëna & AI',
    'Architecture': 'Arkitektura',
    'Strategy': 'Strategjia',
    'Search whitepapers...': 'Kërkoni whitepapers...',
    'Google Cloud Network Engineer Study Hub': 'Google Cloud Network Engineer Study Hub',
    'Whitepapers & reference guides': 'Whitepapers dhe udhëzues referimi'
  },
  'vpc-fundamentals.html': {
    'What a VPC really is': 'Çfarë është në të vërtetë një VPC',
    'Core concepts': 'Konceptet kryesore',
    'Why this matters for the exam': 'Pse është e rëndësishme për provim',
    'Exam traps to avoid': 'Gabuese të provimit për t\'i shmangur',
    'In Google Cloud, a VPC network is a global resource, while subnets live in a specific region. This means you can create one VPC and then place regional subnets within it to support workloads in multiple locations without changing the design of the network itself.': 'Në Google Cloud, një rrjet VPC është një burim global, ndërsa nëndisjet jetojnë në një rajon të caktuar. Kjo do të thotë se mund të krijoni një VPC dhe pastaj të vendosni nëndisa rajonale brenda tij për të mbështetur workload-et në vende të shumta pa ndryshuar dizajnin e vetë rrjetit.',
    'Key idea': 'Ide kryesore',
    'Think of the VPC as the network boundary, and subnets as the regional building blocks inside that boundary. Firewalls and routes are what shape how traffic can move between those resources.': 'Mendoni për VPC-në si kufirin e rrjetit, dhe për nëndisjet si blloqet ndërtimore rajonale brenda atij kufiri. Firewall-et dhe rrugët janë ato që formësojnë mënyrën se si mund të lëvizë trafiku midis atyre burimeve.',
    'Global network:': 'Rrjeti global:',
    'One VPC can span multiple regions.': 'Një VPC mund të shtrihet në rajone të shumta.',
    'Regional subnets:': 'Nëndisat rajonale:',
    'Each subnet belongs to one region and has a CIDR block.': 'Secila nëndis i përket një rajoni dhe ka një bllok CIDR.',
    'Firewall controls:': 'Kontrolli i firewall:',
    'Ingress and egress rules determine which traffic is allowed.': 'Rregullat e ingress dhe egress përcaktojnë se cilin trafiku lejohet.',
    'Routes:': 'Rrugët:',
    'GCP automatically creates system routes, and custom routes can be added for special traffic patterns.': 'GCP krijon automatikisht rrugë sistemi, dhe rrugët e personalizuara mund të shtohen për modele të veçanta trafiku.',
    'Most networking questions are really about choosing the right architecture pattern: private-only access, isolation by segment, east-west traffic control, and hybrid connectivity. A good VPC design makes route tables, firewall policies, and service access predictable and secure.': 'Shumica e pyetjeve të rrjetëzimit në fakt kanë të bëjnë me zgjedhjen e modelit të duhur të arkitekturës: qasje private-only, izolim sipas segmentit, kontrolli i trafikut east-west dhe lidhja hibride. Një dizajn i mirë i VPC bën tabelat e rrugëve, politikat e firewall dhe qasjen në shërbime të parashikueshme dhe të sigurta.',
    'Confusing a VPC being global with a subnet being global. Subnets are regional.': 'Të ngatërrosh një VPC që është global me një subnet që është globale. Nëndisat janë rajonale.',
    'Assuming all traffic is allowed by default. Firewall rules are the main access control mechanism.': 'Të supozohet se të gjithë trafiku lejohet si parazgjedhje. Rregullat e firewall janë mekanizmi kryesor i kontrollit të qasjes.',
    'Forgetting that communication within a VPC may still require correct firewall and routing behavior.': 'Të harosh se komunikimi brenda një VPC ende mund të kërkojë sjellje të saktë të firewall dhe routing.'
  },
  'cidr-subnet-design.html': {
    'Why CIDR matters': 'Pse CIDR është e rëndësishme',
    'CIDR notation like 10.0.0.0/16 or 10.1.0.0/24 tells you how many bits are used for the network and how many bits remain for hosts. This determines the number of addresses available and how the network can be segmented.': 'Notacioni CIDR si 10.0.0.0/16 ose 10.1.0.0/24 ju tregon sa bit përdoren për rrjetin dhe sa mbeten për host-et. Kjo përcakton numrin e adresave të disponueshme dhe mënyrën se si mund të segmentohet rrjeti.',
    'Quick examples': 'Shembuj të shpejtë',
    '/16 gives a large block with many addresses; /24 is a smaller block usually used for a logical segment or subnet. In GCP, a subnet range should be planned carefully so it does not overlap with on-premises ranges or other VPC ranges.': '/16 jep një bllok të madh me shumë adresa; /24 është një bllok më i vogël që zakonisht përdoret për një segment logjik ose nëndis. Në GCP, një gamë nëndisi duhet të planifikohet me kujdes që të mos mbivendoset me gamat në mjediset lokale ose me gamat e tjera VPC.',
    'Subnet design principles': 'Parimet e dizajnit të subnet',
    'Use private RFC1918 ranges when possible: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.': 'Përdorni gama private RFC1918 kur është e mundur: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.',
    'Avoid overlapping ranges between VPCs, on-prem networks, and peered networks.': 'Shmangni gamat që mbivendosen midis VPC-ve, rrjeteve lokale dhe rrjeteve të lidhura.',
    'Group resources by function or environment: app tier, data tier, management, shared services.': 'Gruponi burimet sipas funksionit ose mjedisit: shtresa e aplikacioneve, shtresa e të dhënave, menaxhimi, shërbimet e ndara.',
    'Leave room for growth by reserving headroom rather than exhausting a subnet too early.': 'Lini hapësirë për rritje duke rezervuar hapësirë ekstra, në vend që të shterni një nëndis shumë herët.',
    'How this connects to Google Cloud': 'Si lidhet kjo me Google Cloud',
    'In GCP, subnets are regional and must be part of a VPC. A common pattern is one VPC per environment or trust boundary, with multiple regional subnets inside it. This keeps routing predictable and makes firewall strategy easier to reason about.': 'Në GCP, nëndisat janë rajonale dhe duhet të jenë pjesë e një VPC. Një model i zakonshëm është një VPC për çdo mjedis ose kufi besimi, me një ose më shumë nëndisa rajonale brenda tij. Kjo e bën routing-un të parashikueshëm dhe e bën strategjinë e firewall-it më të lehtë për tu kuptuar.',
    'Exam pitfalls': 'Betejat e provimit',
    'Thinking a subnet can be global. It cannot.': 'Të mendosh se një nëndis mund të jetë globale. Nuk mund të jetë.',
    'Forgetting that private IP ranges are usually preferred for internal traffic.': 'Të harosh se gamat private IP zakonisht preferohen për trafikun e brendshëm.',
    'Ignoring overlap between VPC CIDR and customer-premises ranges, which can break connectivity in hybrid designs.': 'Të injorosh mbivendosjen midis CIDR të VPC dhe gamave të mjediseve të klientit, gjë që mund të prishë lidhshmërinë në dizajne hibride.'
  },
  'routing-firewall.html': {
    'Routes': 'Rrugët',
    'Firewall rules': 'Rregullat e firewall',
    'Routing defines the path traffic takes in and out of a VPC. Google Cloud automatically creates routes for local traffic and default internet egress. Custom routes are often used when traffic needs to go through a NAT gateway, a firewall appliance, or a VPN tunnel.': 'Routing përcakton rrugën që ndjek trafiku brenda dhe jashtë një VPC. Google Cloud krijon automatikisht rrugë për trafikun lokal dhe egress-in e paracaktuar në internet. Rrugët e personalizuara përdoren shpesh kur trafiku duhet të kalojë përmes një NAT gateway, një appliance firewall ose një tunnel VPN.',
    'Firewall rules are stateful and evaluate based on direction, source/destination, protocol, and port.': 'Rregullat e firewall janë stateful dhe vlerësohen bazuar në drejtim, burim/destinacion, protokoll dhe port.',
    'Ingress is usually a common place to allow traffic from specific sources, such as load balancers or bastion hosts.': 'Ingress është zakonisht një vend i zakonshëm për leje të trafikut nga burime të caktuara, si balancerët e ngarkesës ose host-et bastion.',
    'Egress rules help control outbound access and are important when workloads need to reach specific destinations or be kept private.': 'Rregullat e egress ndihmojnë në kontrollin e qasjes dalëse dhe janë të rëndësishme kur workload-et duan të arrijnë destinacione të caktuara ose të mbahen private.',
    'Routing and firewall questions are common in the exam because they test how well you understand traffic flow and control boundaries.': 'Pyetjet e routing dhe firewall janë të zakonshme në provim sepse testojnë se sa mirë kuptoni rrjedhën e trafikut dhe kufijtë e kontrollit.',
    'The key skill is to reason through which path traffic should take and which services should be reachable.': 'Aftësia kryesore është të arsyetosh se cili rrugë duhet të ndjekë trafiku dhe cilat shërbime duhet të jenë të arritshme.'
  },
  'security-monitoring.html': {
    'Least privilege and segmentation': 'Privilegji minimal dhe segmentimi',
    'Monitoring and diagnostics': 'Monitorimi dhe diagnostikimi',
    'Networking security is not only about firewall rules. It is also about least privilege, logging, visibility, segmentation, and being able to diagnose traffic problems quickly when a system behaves unexpectedly.': 'Siguria e rrjetit nuk është vetëm rregullat e firewall. Është gjithashtu e lidhur me privilegjin minimal, logging, dukshmërinë, segmentimin dhe aftësinë për të diagnostikuar shpejt problemet e trafikut kur një sistem sillet në mënyrë të paparashikueshme.'
  },
  'shared-vpc.html': {
    'What it is': 'Çfarë është',
    'Why it matters': 'Pse është e rëndësishme',
    'What to remember': 'Çfarë duhet të mbani mend'
  },
  'private-connectivity.html': {
    'Private Google Access': 'Private Google Access',
    'Private Service Access': 'Private Service Access',
    'Design guidance': 'Udhëzime të dizajnit'
  },
  'cloud-router.html': {
    'Why Cloud Router matters': 'Pse Cloud Router ka rëndësi',
    'Exam focus': 'Fokus në provim',
    'Typical design patterns': 'Modelet tipike të dizajnit',
    'Best fit': 'Përshtatja më e mirë',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Cloud Router + BGP = dynamic cloud-to-on-prem routing.': 'Cloud Router + BGP = routing dinamik cloud-to-on-prem.',
    'Cloud Router is the BGP-enabled routing component that lets Google Cloud exchange routes with your on-premises networks, partner networks, and VPN or Interconnect attachments.': 'Cloud Router është komponenti i routing me BGP që lejon Google Cloud të shkëmbejë rrugë me rrjetet tuaja lokale, rrjetet e partnerëve dhe lidhjet VPN ose Interconnect.',
    'Static routes can work for simple topologies, but dynamic route exchange is the default pattern for resilient, scalable hybrid connections. Cloud Router enables BGP session management and route propagation between Google Cloud and outside networks.': 'Rrugët statike mund të funksionojnë për topologji të thjeshta, por shkëmbimi dinamik i rrugëve është modeli i parazgjedhur për lidhjet hibride të qëndrueshme dhe të shkallëzuara. Cloud Router aktivizon menaxhimin e sesioneve BGP dhe përhapjen e rrugëve midis Google Cloud dhe rrjeteve të jashtme.',
    'Cloud Router is usually paired with Cloud VPN or Interconnect.': 'Cloud Router zakonisht shoqërohet me Cloud VPN ose Interconnect.',
    'BGP is the protocol used to advertise and learn routes.': 'BGP është protokolli i përdorur për reklamimin dhe mësimin e rrugëve.',
    'It supports dynamic route exchange and is essential in hybrid connectivity designs.': 'Ai mbështet shkëmbimin dinamik të rrugëve dhe është thelbësor në dizajnet e lidhjes hibride.',
    'Choose Cloud Router when you need route propagation and redundancy for private connectivity between Google Cloud and external networks.': 'Zgjidhni Cloud Router kur keni nevojë për përhapje rrugësh dhe redundancë për lidhjen private midis Google Cloud dhe rrjeteve të jashtme.',
    'HA VPN with BGP for resilient site-to-cloud connectivity.': 'HA VPN me BGP për lidhshmëri të qëndrueshme site-to-cloud.',
    'Dedicated Interconnect for high-throughput, low-latency links.': 'Dedicated Interconnect për lidhje me kapacitet të lartë dhe vonesë të ulët.',
    'Multiple regions and edge paths require dynamic route management.': 'Rajone të shumta dhe rrugë në edge kërkojnë menaxhim dinamik të rrugëve.',
    'Use this for route advertisement and learning across hybrid connections.': 'Përdoreni për reklamimin dhe mësimin e rrugëve në lidhjet hibride.',
    'It complements VPN and Interconnect, not replace them.': 'Ai plotëson VPN dhe Interconnect, nuk i zëvendëson ata.',
    'In exam questions, route propagation is usually the clue.': 'Në pyetjet e provimit, përhapja e rrugëve është zakonisht pista.'
  },
  'dns-best-practices.html': {
    'Key principles': 'Parimet kryesore',
    'Why it matters': 'Pse është e rëndësishme',
    'Design checklist': 'Lista e kontrollit të dizajnit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Private DNS keeps internal apps private; public DNS informs the internet.': 'Private DNS e mban të fshehtë aplikacionet e brendshme; public DNS informon internetin.',
    'DNS is more than name resolution. In cloud architecture, DNS influences service discovery, private access, failover, and how traffic is routed among regions and applications.': 'DNS nuk është vetëm zgjidhja e emrave. Në arkitekturën e cloud, DNS ndikon në zbulimin e shërbimeve, qasjen private, failover dhe mënyrën se si drejtohet trafiku midis rajoneve dhe aplikacioneve.',
    'Use private DNS for internal-only workloads and service discovery.': 'Përdorni DNS private për workload-et dhe zbulimin e shërbimeve të brendshme.',
    'Keep public and private namespaces clearly separated to avoid confusion.': 'Mbani hapësirat e emrave publike dhe private të ndara qartë për të shmangur konfuzionin.',
    'Align DNS records with your load-balancer and failover design.': 'Përputhni regjistrat DNS me dizajnin tuaj të balancimit të ngarkesës dhe failover.',
    'Choosing the wrong DNS pattern can point clients to the wrong region, create split-horizon confusion, or break internal service communication.': 'Zgjedhja e modelit të gabuar të DNS mund të drejtojë klientët në rajon të gabuar, të krijojë konfuzion split-horizon ose të prishë komunikimin e shërbimeve të brendshme.',
    'Use health checks and weighted routing when designing resiliency.': 'Përdorni health checks dhe weighted routing kur dizajnoni resiliencën.',
    'Decide which domains are public vs private.': 'Vendosni cilat domenë janë publike dhe cilat private.',
    'Ensure internal apps do not depend on public DNS when private connectivity is required.': 'Sigurohuni që aplikacionet e brendshme të mos varen nga DNS publike kur kërkohet lidhshmëri private.'
  },
  'edge-security.html': {
    'Key services': 'Shërbimet kryesore',
    'Common design choices': 'Zgjedhje të zakonshme të dizajnit',
    'Exam cues': 'Kujtimet e provimit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Edge security solutions protect public-facing services from abuse, DDoS traffic, and unwanted access. They are often used in front of load balancers and internet-facing applications.': 'Zgjidhjet e sigurisë në edge mbrojnë shërbimet me ekspozim publik nga abuzimi, trafiku DDoS dhe qasja e padëshiruar. Ato përdoren shpesh para balancerëve të ngarkesës dhe aplikacioneve me ekspozim në internet.',
    'Cloud Armor provides policy-based traffic filtering and DDoS protection.': 'Cloud Armor ofron filtrim të trafikut bazuar në politika dhe mbrojtje DDoS.',
    'Cloud CDN improves latency by caching content closer to users.': 'Cloud CDN ul vonesën duke ruajtur përmbajtje më afër përdoruesve.',
    'Cloud NAT allows private resources to access the internet while avoiding public IP exposure.': 'Cloud NAT lejon burime private të qasen në internet ndërsa shmang ekspozimin me IP publike.',
    'Use Cloud Armor to enforce rate limits, geo restrictions, and allow/deny policies.': 'Përdorni Cloud Armor për të zbatuar rate limits, kufizime gjeografike dhe politika allow/deny.',
    'Use Cloud CDN for content-heavy front ends and better user experience.': 'Përdorni Cloud CDN për front-end-et e mbingarkuara me përmbajtje dhe përvojë më të mirë të përdoruesit.',
    'Use Cloud NAT when private instances need outbound internet access without fixed public IPs.': 'Përdorni Cloud NAT kur instancat private kanë nevojë për qasje dalëse në internet pa IP publike fikse.',
    '“The app has public traffic and needs DDoS protection.”': '“Aplikacioni ka trafikun publik dhe ka nevojë për mbrojtje DDoS.”',
    '“Private instances require outbound internet connectivity without public IPs.”': '“Instancat private kërkojnë lidhshmëri dalëse në internet pa IP publike.”',
    '“Traffic shaping and geo filtering must be applied before origin servers.”': '“Formimi i trafikut dhe filtrimi gjeografik duhet të zbatohen para serverëve origjinë.”',
    'Edge controls protect traffic before it reaches the app.': 'Kontrollet e edge mbrojnë trafikun para se të arrijë te aplikacioni.',
    'Cloud Armor secures the public edge; Cloud NAT keeps private workloads outbound without public IP assignment.': 'Cloud Armor e siguron edge publik; Cloud NAT e mban trafikun dalës të workload-ëve private pa caktim IP publik.'
  },
  'hybrid-connectivity.html': {
    'VPN': 'VPN',
    'Cloud Interconnect': 'Cloud Interconnect',
    'Network Connectivity Center': 'Network Connectivity Center',
    'Decision framework': 'Frameworki i vendimmarrjes',
    'Hybrid connectivity is about extending private network reach between on-prem environments and Google Cloud. The choice depends on bandwidth, latency sensitivity, resilience, and operational complexity.': 'Lidhja hibride ka të bëjë me zgjerimin e arritshmërisë së rrjetit privat midis mjediseve lokale dhe Google Cloud. Zgjedhja varet nga kapaciteti i brezit, ndjeshmëria ndaj vonesës, resilienca dhe kompleksiteti operativ.',
    'Cloud VPN is a secure and flexible option that connects an on-prem network to GCP over the public internet or through a managed tunnel path. It is a good fit when you need connectivity, but do not require the highest throughput or strict SLA profiles.': 'Cloud VPN është një opsion i sigurt dhe fleksibël që lidh një rrjet lokal me GCP përmes internetit publik ose një rruge të menaxhuar tunel. Është i përshtatshëm kur keni nevojë për lidhshmëri, por nuk kërkoni kapacitetin më të lartë ose profile stricte SLA.',
    'Cloud Interconnect provides private connectivity with better performance and predictable latency. It is often selected for enterprise workloads with large data transfer needs, stricter network performance needs, or higher availability requirements.': 'Cloud Interconnect ofron lidhshmëri private me performancë më të mirë dhe vonesë të parashikueshme. Zakonisht zgjidhet për workload-et e ndërmarrjeve me nevoja të mëdha transferimi të të dhënave, kërkesa stricte për performancën e rrjetit ose kërkesa më të larta për disponueshmëri.',
    'NCC centralizes routing and connectivity across multiple networks. It is useful for large organizations with several on-prem or cloud environments that need central management and policy control.': 'NCC centralizon routing dhe lidhshmërinë nëpër rrjete të shumta. Është i dobishëm për organizata të mëdha me disa mjedise lokale ose cloud që kanë nevojë për menaxhim qendror dhe kontroll politikash.',
    'Use VPN for simplicity and lower cost.': 'Përdorni VPN për thjeshtësi dhe kosto më të ulëta.',
    'Use Interconnect for high bandwidth and predictable performance.': 'Përdorni Interconnect për bandwith të lartë dhe performancë të parashikueshme.',
    'Use NCC when you need a hub-and-spoke or global network architecture model.': 'Përdorni NCC kur keni nevojë për një model arkitekturë rrjeti hub-and-spoke ose global.'
  },
  'load-balancing-dns.html': {
    'Load balancing in GCP': 'Balancimi i ngarkesës në GCP',
    'Why health checks matter': 'Pse health checks kanë rëndësi',
    'DNS and traffic management': 'DNS dhe menaxhimi i trafikut',
    'Exam perspective': 'Perspektiva e provimit',
    'Load balancing ensures traffic is distributed across healthy backends, while DNS routes users to the right service or region. Together, they help keep services available, fast, and resilient.': 'Balancimi i ngarkesës siguron që trafiku të shpërndahet në backend të shëndetshëm, ndërsa DNS i drejton përdoruesit te shërbimi ose rajoni i duhur. Së bashku, ata ndihmojnë të mbahen shërbimet të disponueshme, të shpejta dhe të qëndrueshme.',
    'Google Cloud offers several load balancer types for different traffic layers, such as HTTP(S), TCP/SSL, and UDP. The decision depends on whether the workload is internet-facing, internal-only, or needs global reach across regions.': 'Google Cloud ofron disa lloje balancerësh ngarkese për shtresa të ndryshme trafiku, si HTTP(S), TCP/SSL dhe UDP. Vendimi varet nga fakti nëse workload-i është i ekspozuar në internet, vetëm i brendshëm, ose ka nevojë për arritshmëri globale në rajone.',
    'Health checks determine whether a backend is healthy and can receive traffic.': 'Health checks përcaktojnë nëse një backend është i shëndetshëm dhe mund të marrë trafikun.',
    'Load balancers remove unhealthy backends automatically.': 'Balancerët largojnë backend-et e pasuksesshme automatikisht.',
    'Traffic can be distributed by region, session affinity, or traffic splitting for gradual deployment.': 'Trafiku mund të shpërndahet sipas rajonit, session affinity ose traffic splitting për deployim gradual.',
    'DNS allows you to map service names to IPs and often plays a role in global routing. For multi-region systems, you may combine DNS records with health checks and failover patterns to steer traffic to healthy endpoints.': 'DNS ju lejon të lidhni emrat e shërbimeve me IP-të dhe shpesh luan një rol në routing global. Për sistemet me shumë rajone, mund të kombinoni regjistrat DNS me health checks dhe modele failover për të drejtuar trafikun te endpoint-et e shëndetshme.',
    'Many architecture questions are really about choosing between global load balancing, regional load balancing, and direct service routing based on latency and resilience requirements.': 'Shumë pyetje arkitekturore në fakt kanë të bëjnë me zgjedhjen midis global load balancing, regional load balancing dhe direct service routing bazuar në kërkesat për vonesë dhe resiliencë.'
  },
  'security-monitoring.html': {
    'Least privilege and segmentation': 'Privilegji minimal dhe segmentimi',
    'Monitoring and diagnostics': 'Monitorimi dhe diagnostikimi',
    'What the exam tests': 'Çfarë teston provimi',
    'Good practice': 'Praktikë e mirë',
    'Segment workloads into trust zones so that only required traffic is allowed. VPC boundaries, firewall rules, and service access controls reduce lateral movement and keep an application easier to secure.': 'Segmentoni workload-et në zona besimi, kështu që të lejohet vetëm trafiku i kërkuar. Kufijtë VPC, rregullat e firewall dhe kontrollot e qasjes në shërbime reduktojnë lëvizjen anësore dhe e bëjnë një aplikacion më të lehtë për t’u siguruar.',
    'Use logs and flow data to validate whether traffic is reaching its destination.': 'Përdorni log dhe të dhëna flow për të validuar nëse trafiku arrin në destinacionin e tij.',
    'Check whether an issue is route-related, firewall-related, or health-check-related.': 'Kontrolloni nëse problemi lidhet me route, firewall ose health check.',
    'Look at packet and connection patterns before changing policies in production.': 'Shikoni modelet e packet dhe lidhjeve para se të ndryshoni politika në prodhim.',
    'Exam questions often focus on the correct security pattern, such as protecting a public frontend, restricting a private database tier, and using private service access or load balancer ingress paths appropriately.': 'Pyetjet e provimit shpesh fokusohen në modelin e duhur të sigurisë, si mbrojtja e një frontend publike, kufizimi i një shtrese private të bazës së të dhënave dhe përdorimi i private service access ose rrugëve ingress të balancerit në mënyrë të përshtatshme.'
  },
  'shared-vpc.html': {
    'What it is': 'Çfarë është',
    'Why it matters': 'Pse është e rëndësishme',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Exam mindset': 'Mendësia e provimit',
    'Typical exam cues': 'Kujtime tipike të provimit',
    'Key design decision': 'Vendim kyç i dizajnit',
    'Shared VPC = one network, many teams.': 'Shared VPC = një rrjet, shumë ekipe.',
    'A Shared VPC network is created in a host project and attached to service projects. The host project owns the shared network and its subnets, while service projects consume those networks for their instances, GKE clusters, and managed services.': 'Një rrjet Shared VPC krijohet në një host project dhe bashkëngjitet me service projects. Host project zotëron rrjetin e ndarë dhe nëndisat e tij, ndërsa service projects përdorin ato rrjete për instancat, cluster-et GKE dhe shërbimet e menaxhuara.',
    'Centralizes network design and firewall controls.': 'Centralizon dizajnin e rrjetit dhe kontrollin e firewall.',
    'Allows multiple teams to use the same network without duplicating VPCs.': 'Lejon ekipe të shumta të përdorin të njëjtin rrjet pa dyfishuar VPC-të.',
    'Supports common security boundaries and route control.': 'Mbështet kufij të përbashkët të sigurisë dhe kontroll të rrugëve.',
    'Host project = network owner and admin.': 'Host project = pronar dhe admin i rrjetit.',
    'Service project = workloads and resources using the shared network.': 'Service project = workload-et dhe burimet që përdorin rrjetin e ndarë.',
    'Firewall, routing, and connectivity rules usually live in the host project’s network design.': 'Rregullat e firewall, routing dhe lidhshmërisë zakonisht ndodhen në dizajnin e rrjetit të host project-it.'
  },
  'private-connectivity.html': {
    'Private Google Access': 'Private Google Access',
    'Private Service Access': 'Private Service Access',
    'Design guidance': 'Udhëzime të dizajnit',
    'Typical exam cues': 'Kujtime tipike të provimit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Private access = no public IP, still private connectivity.': 'Private access = pa IP publik, megjithatë lidhshmëri private.',
    'Private Google Access allows VM instances without external IPs to reach Google APIs and services over private network paths. This is critical for security and for keeping workloads out of public routing.': 'Private Google Access lejon instancat VM pa IP të jashtme të arrijnë API dhe shërbime të Google përmes rrugëve private të rrjetit. Kjo është kritike për sigurinë dhe për mbajtjen e workload-ëve jashtë routing publik.',
    'Private Service Access creates private connectivity between consumers and Google-managed or internal services, often using allocated private IP ranges. It helps services communicate without exposing them to the public internet.': 'Private Service Access krijon lidhshmëri private midis konsumatorëve dhe shërbimeve të menaxhuara nga Google ose të brendshme, shpesh duke përdorur gamat private IP të alokuara. Ai ndihmon shërbimet të komunikojnë pa i ekspozuar në internetin publik.',
    'Private Google Access is for reaching Google APIs and services from private VMs.': 'Private Google Access është për arritjen e API dhe shërbimeve të Google nga VMs private.',
    'Private Service Access is for private connectivity to managed services or internal endpoints.': 'Private Service Access është për lidhshmëri private me shërbime të menaxhuara ose endpoint-e të brendshme.',
    'Use these patterns when security policy requires private-only communication.': 'Përdorni këto modele kur politika e sigurisë kërkon komunikim vetëm private.',
    'Private Google Access keeps VMs private while reaching Google APIs.': 'Private Google Access e mban VMs private ndërsa arrin API të Google.',
    'Private Service Access supports private reachability to managed or internal services.': 'Private Service Access mbështet arritshmëri private ndaj shërbimeve të menaxhuara ose të brendshme.'
  },
  'network-deep-dives.html': {
    'High-value deep-dive topics': 'Tema me vlerë të lartë për analizë të thellë',
    'Organizational constraints': 'Kufizimet organizative',
    'Shared VPC': 'VPC e ndarë',
    'Private Service Access and Private Google Access': 'Private Service Access dhe Private Google Access',
    'Cloud Router': 'Cloud Router',
    'DNS best practices': 'Praktikat më të mira të DNS',
    'Choosing a load balancer': 'Zgjedhja e një balanceri të ngarkesës',
    'Internal LB and next hop with NVA': 'Internal LB dhe next hop me NVA',
    'Networking on GKE': 'Rrjetëzimi në GKE',
    'Hybrid connectivity options': 'Opsionet e lidhjes hibride',
    'Dedicated Interconnect and dual stack': 'Dedicated Interconnect dhe dual stack',
    'HA VPN': 'HA VPN',
    'Cross-Cloud Network for distributed applications': 'Cross-Cloud Network për aplikacione të shpërndara',
    'Cloud CDN': 'Cloud CDN',
    'Invalidations': 'Invalidations',
    'NGFW': 'NGFW',
    'Cloud Armor': 'Cloud Armor',
    'Cloud NAT': 'Cloud NAT',
    'VPC': 'VPC',
    'These are the advanced networking topics most often tested in the Professional Cloud Network Engineer exam. Each one is a high-value area where architecture decisions, route behavior, hybrid connectivity, and security design matter.': 'Këto janë temat e avancuara të rrjetit që shpesh testohen në provimin Professional Cloud Network Engineer. Secila është një zonë me vlerë të lartë ku vendimet e arkitekturës, sjellja e rrugëve, lidhja hibride dhe dizajni i sigurisë kanë rëndësi.',
    'Organization policies can limit networking design by preventing external IPs, restricting VPC peering, or forcing governance around how projects and services can be connected. For the exam, know that policy constraints can override default design choices.': 'Politikat e organizimit mund të kufizojnë dizajnin e rrjetit duke parandaluar IP-të e jashtme, duke kufizuar VPC peering ose duke imponuar governance rreth se si mund të lidhen projektet dhe shërbimet. Për provimin, dini që kufizimet e politikës mund të anulojnë zgjedhjet e paracaktuara të dizajnit.',
    'Shared VPC allows a host project to share a VPC network with other projects. This is important for centralized network administration, consistent firewall policies, and multi-project environments that need common network services.': 'Shared VPC lejon që një host project të ndajë një rrjet VPC me projekte të tjera. Kjo është e rëndësishme për administrimin e centralizuar të rrjetit, politikat e përputhshme të firewall dhe mjediset me shumë projekte që kanë nevojë për shërbime të përbashkëta të rrjetit.',
    'Private Service Access allows private, internal access to managed services such as Google APIs or internal services over private IP space. Private Google Access lets VMs without external IP addresses reach Google APIs and services over the VPC network.': 'Private Service Access lejon qasje private dhe të brendshme ndaj shërbimeve të menaxhuara si API të Google ose shërbime të brendshme përmes hapësirës private IP. Private Google Access i lejon VM-ve pa adresa IP të jashtme të arrijnë API dhe shërbime të Google përmes rrjetit VPC.',
    'Cloud Router is the BGP-enabled routing component used for dynamic route exchange with on-premises networks and partner networks. It is central to Hybrid Connectivity, Interconnect, and VPN design.': 'Cloud Router është komponenti i routing me BGP i përdorur për shkëmbimin dinamik të rrugëve me rrjetet në vend dhe rrjetet e partnerëve. Ai është qendror për dizajnin e Hybrid Connectivity, Interconnect dhe VPN.',
    'DNS is not just name resolution. In cloud networking, DNS design affects load balancing decisions, service discovery, private zone isolation, and cross-environment routing. Good DNS patterns improve resilience and reduce failed lookups.': 'DNS nuk është vetëm zgjidhja e emrave. Në rrjetëzimin e cloud, dizajni i DNS ndikon në vendimet e balancimit të ngarkesës, zbulimin e shërbimeve, izolimin e zonave private dhe routing-n e mjediseve të ndryshme. Modelet e mira të DNS rrisin resiliencën dhe reduktojnë kërkimet e dështuara.',
    'Network engineering questions often test whether you know when to use Global HTTP(S), Regional TCP/UDP, Internal Load Balancing, or Ingress for Kubernetes. The decision is driven by protocol, exposure model, and traffic characteristics.': 'Pyetjet e inxhinierisë së rrjetit shpesh testojnë nëse dini kur të përdorni Global HTTP(S), Regional TCP/UDP, Internal Load Balancing ose Ingress për Kubernetes. Vendimi varet nga protokolli, modeli i ekspozimit dhe karakteristikat e trafikut.',
    'Internal load balancers are frequently used to expose services only inside a VPC or between networks. When paired with a Next-Hop firewall or NVA, they can be used to steer traffic through security appliances or centralized inspection layers.': 'Balancerët e ngarkesës të brendshëm përdoren shpesh për të ekspozuar shërbime vetëm brenda një VPC ose midis rrjeteve. Kur kombinohen me një firewall Next-Hop ose NVA, mund të përdoren për të drejtuar trafikun nëpër appliance sigurie ose shtresa të centralizuara të inspektimit.',
    'Google Kubernetes Engine networking includes cluster IP ranges, pod networking, node networking, and service exposure. VPC-native clusters are usually the default pattern for modern, scalable Kubernetes networking on GCP.': 'Rrjetëzimi i Google Kubernetes Engine përfshin gamat e IP-ve të cluster-it, rrjetëzimin e pod-ve, rrjetëzimin e node-ve dhe ekspozimin e shërbimeve. Cluster-et VPC-native zakonisht janë modeli i parazgjedhur për rrjetëzimin modern dhe të shkallëzuar të Kubernetes në GCP.',
    'Hybrid connectivity is the set of ways to connect on-prem environments to Google Cloud. The main choices are VPN, Interconnect, and Network Connectivity Center, depending on bandwidth, latency, and operational needs.': 'Lidhja hibride është grupi i mënyrave për të lidhur mjediset lokale me Google Cloud. Zgjedhjet kryesore janë VPN, Interconnect dhe Network Connectivity Center, në varësi të bandwidth, vonesës dhe nevojave operative.',
    'Dedicated Interconnect provides private connectivity with predictable bandwidth and lower latency. Dual stack support matters for IPv4 + IPv6 workloads or mixed network environments that need both protocols.': 'Dedicated Interconnect ofron lidhshmëri private me bandwidth të parashikueshëm dhe vonesë më të ulët. Mbështetja dual stack është e rëndësishme për workload-et IPv4 + IPv6 ose mjediset e përziera të rrjetit që kërkojnë të dy protokollet.',
    'HA VPN provides highly available VPN connectivity between Google Cloud and on-premises sites. It is the common solution when you want redundancy and a simpler setup than a full private connectivity design.': 'HA VPN ofron lidhshmëri VPN me disponueshmëri të lartë midis Google Cloud dhe site-ve lokale. Është zgjidhja e zakonshme kur dëshironi redundancë dhe konfigurim më të thjeshtë se një dizajn i plotë i lidhshmërisë private.',
    'Cross-cloud patterns are used when applications span multiple public clouds or connect cloud environments with on-prem systems. The key design concerns are distributed routing, latency, and secure connectivity between domains.': 'Modelet cross-cloud përdoren kur aplikacionet shtrihen në shumë cloud publike ose lidhin mjediset cloud me sisteme lokale. Çështjet kryesore të dizajnit janë routing i shpërndarë, vonesa dhe lidhshmëria e sigurt midis domenëve.',
    'Cloud CDN accelerates content delivery by caching content at Google edge locations. It improves response time for static and some dynamic assets while reducing origin load.': 'Cloud CDN e përshpejton shpërndarjen e përmbajtjes duke ruajtur përmbajtje në vendet e edge të Google. Ai përmirëson kohën e përgjigjes për asset-et statike dhe disa dinamike ndërkohë që redukton ngarkesën në origjinë.',
    'Cache invalidation is the process of removing stale content from the edge cache so clients receive fresh data. For content-heavy and frequently updated services, this is a critical operational concept.': 'Cache invalidation është procesi i heqjes së përmbajtjes së vjetëruar nga cache i edge, kështu që klientët të marrin të dhëna të freskëta. Për shërbimet e mbingarkuara me përmbajtje dhe të përditësuara shpesh, kjo është një koncept kritik operativ.',
    'Next-generation firewalls are often used for centralized network inspection in cloud environments. They sit at strategic control points where traffic inspection, filtering, and threat analysis are required.': 'Firewall-et e brezit të ri përdoren shpesh për inspektim të centralizuar të rrjetit në mjediset cloud. Ato vendosen në pika strategjike kontrolli ku kërkohen inspektim i trafikut, filtrim dhe analizë e kërcënimeve.',
    'Cloud Armor is a managed DDoS and application defense product that protects services from common web attacks and abusive traffic patterns. It is especially useful when front ends are public-facing.': 'Cloud Armor është një produkt i menaxhuar për mbrojtje DDoS dhe aplikacioni që mbron shërbimet nga sulmet e zakonshme web dhe modelet e trafikut abuziv. Është veçanërisht i dobishëm kur front-end-et janë me ekspozim publik.',
    'Cloud NAT provides outbound internet access for private resources without assigning external IPs to each VM. It reduces public exposure and helps with egress design in private-only environments.': 'Cloud NAT ofron qasje dalëse në internet për burimet private pa caktuar IP të jashtme për çdo VM. Ai redukton ekspozimin publik dhe ndihmon në dizajnin e egress në mjedise private-only.',
    'VPC is the foundation of GCP network design. A well-built VPC uses segmentation, private IP planning, route control, and policy boundaries to support scalability, security, and service integration.': 'VPC është themeli i dizajnit të rrjetit në GCP. Një VPC i ndërtuar mirë përdor segmentim, planifikim IP private, kontroll rrugësh dhe kufij politikash për të mbështetur shkallëzimin, sigurinë dhe integrimin e shërbimeve.'
  },
  'sandbox-labs.html': {
    'Lab ideas': 'Ide për lab',
    'Recommended order to study': 'Rendi i rekomanduar për studim',
    '1. VPC segmentation and firewall lab': '1. Lab i segmentimit të VPC dhe firewall',
    '2. Private Google Access lab': '2. Lab i Private Google Access',
    '3. HA VPN and Cloud Router lab': '3. Lab i HA VPN dhe Cloud Router',
    '4. Load balancer failover lab': '4. Lab i failover të balancerit të ngarkesës',
    '5. Cloud NAT and edge protection lab': '5. Lab i Cloud NAT dhe mbrojtjes në edge',
    '6. Network troubleshooting lab': '6. Lab i zgjidhjes së problemeve të rrjetit',
    '7. Split-horizon DNS lab': '7. Lab i DNS split-horizon',
    '8. Shared VPC and project access lab': '8. Lab i VPC të ndarë dhe qasjes së projekteve',
    '9. Squid proxy lab for outbound filtering': '9. Lab i proxy Squid për filtrimin e trafikut dalës',
    'What to do': 'Çfarë të bëni',
    'What it does after implementation': 'Çfarë bën pas zbatimit',
    'These labs are designed for a free-tier or sandbox Google Cloud setup. Each exercise gives you a realistic networking challenge, shows how to build it step by step, and explains the value after it is implemented.': 'Këto lab janë projektuar për një mjedis Google Cloud me free-tier ose sandbox. Secili ushtrim ju jep një sfidë realiste të rrjetit, tregon se si ta ndërtoni hap pas hapi dhe shpjegon vlerën pas zbatimit.',
    'Each lab below is meant to be done in a sandbox account using a small number of resources. The focus is on understanding traffic flow, access control, connectivity, and troubleshooting rather than building a production-grade architecture.': 'Secili lab më poshtë synohet të bëhet në një llogari sandbox me një numër të vogël burimesh. Fokusimi është në kuptimin e rrjedhës së trafikut, kontrollin e qasjes, lidhshmërinë dhe zgjidhjen e problemeve, në vend të ndërtimit të një arkitekture prodhimi.',
    'Start with VPC segmentation, firewall, and private access labs to build the core networking foundations.': 'Filloni me lab-et e segmentimit të VPC, firewall dhe qasjes private për të ndërtuar themelin bazë të rrjetëzimit.',
    'Move to hybrid connectivity, routing, load balancing, and DNS so you understand traffic behavior across networks.': 'Kaloni te lidhja hibride, routing, balancimi i ngarkesës dhe DNS për të kuptuar sjelljen e trafikut në rrjete të ndryshme.',
    'Practice troubleshooting, NAT, flow logs, and shared VPC patterns to strengthen operational thinking.': 'Ushtrohuni në zgjidhjen e problemeve, NAT, flow logs dhe modele shared VPC për të forcuar mendimin operational.',
    'Finish with the advanced labs on Cloud Armor, CDN, and NCC to prepare for multi-service and enterprise scale designs.': 'Përfundoni me lab-et e avancuara në Cloud Armor, CDN dhe NCC për t’u përgatitur për dizajne multi-service dhe skala enterprise.',
    'Shows how a VPC isolates workloads by segment.': 'Tregon se si një VPC izolon workload-et sipas segmentit.',
    'Helps you learn why default deny and explicit allow patterns matter in exam design questions.': 'Ju ndihmon të kuptoni pse modelet default deny dhe explicit allow kanë rëndësi në pyetjet e dizajnit në provim.',
    'Create a private subnet without external IP addresses.': 'Krijoni një subnet private pa adresa IP të jashtme.',
    'Enable Private Google Access on the subnet.': 'Aktivizoni Private Google Access në subnet.',
    'Shows how workloads can communicate with Google services without internet exposure.': 'Tregon se si workload-et mund të komunikojnë me shërbimet e Google pa ekspozim në internet.',
    'Reinforces the difference between public access, private access, and NAT.': 'Forcon dallimin midis qasjes publike, qasjes private dhe NAT.',
    'Creates a strong mental model for private-only architectures.': 'Krijon një model të fortë mental për arkitektura private-only.',
    'Set up a Cloud Router and connect it to a VPN tunnel.': 'Konfigurojeni një Cloud Router dhe lidheni me një tunnel VPN.',
    'Configure BGP on both sides using a private ASN.': 'Konfiguro BGP në të dy anët duke përdorur një ASN private.',
    'Creates a working hybrid connection between a cloud network and an on-prem environment.': 'Krijon një lidhje hibride funksionale midis një rrjeti cloud dhe një mjedisi on-prem.',
    'Shows how dynamic routing works with BGP and Cloud Router.': 'Tregon se si funksionon routing dinamik me BGP dhe Cloud Router.',
    'Deploy an HTTP(S) load balancer in front of them.': 'Vendosni një HTTP(S) load balancer përpara tyre.',
    'Showcases the difference between regional and global load balancing patterns.': 'Tregon dallimin midis modeleve të regional dhe global load balancing.',
    'Builds confidence for questions about availability and resilience.': 'Ndihmon për të fituar besim për pyetjet mbi disponueshmërinë dhe resiliencën.',
    'Create a private VM without an external IP.': 'Krijoni një VM private pa IP të jashtme.',
    'If available, add a simple Cloud Armor rule or test policy in front of a load balancer.': 'Nëse është e disponueshme, shtoni një rregull të thjeshtë Cloud Armor ose një politikë testimi para një balanceri.',
    'Shows how private workloads can still use outbound internet access safely.': 'Tregon se si workload-et private mund të përdorin ende qasje dalëse në internet në mënyrë të sigurt.',
    'Introduces the idea of protecting public-facing services before traffic reaches origin workloads.': 'Prezanton idenë e mbrojtjes së shërbimeve me ekspozim publik para se trafiku të arrijë te workload-et origjinë.',
    'Helps explain why NAT and edge security are different design decisions.': 'Ndihmon të shpjegohet pse NAT dhe siguria në edge janë vendime të ndryshme dizajni.',
    'Validate routing, firewall, and health checks by testing traffic paths.': 'Validoni routing, firewall dhe health checks duke testuar rrugët e trafikut.',
    'Teaches how to find the real failure point in a broken network path.': 'Mëson se si të gjendet pika reale e dështimit në një rrugë rrjeti të thyer.',
    'Create a private DNS zone for an internal service name.': 'Krijoni një zonë private DNS për një emër shërbimi të brendshëm.',
    'Create a public DNS zone for the same service name or a public front end.': 'Krijoni një zonë publike DNS për të njëjtin emër shërbimi ose një frontend publik.',
    'Explains why split-horizon DNS is useful for enterprise environments.': 'Shpjegon pse DNS split-horizon është i dobishëm për mjediset enterprise.',
    'Improves understanding of public/private naming strategies in cloud networking.': 'Përmirëson kuptimin e strategjive të emërtimit publik/private në rrjetëzimin cloud.',
    'Create a host project with the shared VPC.': 'Krijoni një host project me VPC të ndarë.',
    'Assign IAM roles so each project can use shared subnets and services.': 'Caktoni role IAM që secili projekt të mund të përdorë subnets dhe shërbime të ndara.',
    'Builds a foundation for learning shared VPC and service networking patterns.': 'Ndërtimi bazën për të mësuar modelet e shared VPC dhe rrjetëzimit të shërbimeve.',
    'Create a VM instance in a private subnet with no external IP.': 'Krijoni një instancë VM në një subnet private pa IP të jashtme.',
    'Set up a Squid proxy to filter outbound traffic based on destination or content policy.': 'Konfigurojeni një proxy Squid për të filtruar trafikun dalës bazuar në destinacion ose politikë përmbajtjeje.',
    'Shows how outbound traffic can be controlled before reaching the internet.': 'Tregon se si trafiku dalës mund të kontrollohet para se të arrijë në internet.',
    'Reinforces security awareness around egress filtering and enterprise gateway patterns.': 'Forcon ndërgjegjësimin e sigurisë rreth filtrimit të egress dhe modeleve të gateway enterprise.'
  },
  'vpc-fundamentals.html': {
    'What a VPC really is': 'Çfarë është në të vërtetë një VPC',
    'Core concepts': 'Konceptet kryesore',
    'Why this matters for the exam': 'Pse është e rëndësishme për provim',
    'Exam traps to avoid': 'Gabuese të provimit për t\'i shmangur',
    'In Google Cloud, a VPC network is a global resource, while subnets live in a specific region. This means you can create one VPC and then place regional subnets within it to support workloads in multiple locations without changing the design of the network itself.': 'Në Google Cloud, një rrjet VPC është një burim global, ndërsa nëndisjet jetojnë në një rajon të caktuar. Kjo do të thotë se mund të krijoni një VPC dhe pastaj të vendosni nëndisa rajonale brenda tij për të mbështetur workload-et në vende të shumta pa ndryshuar dizajnin e vetë rrjetit.',
    'Key idea': 'Ide kryesore',
    'Think of the VPC as the network boundary, and subnets as the regional building blocks inside that boundary. Firewalls and routes are what shape how traffic can move between those resources.': 'Mendoni për VPC-në si kufirin e rrjetit, dhe për nëndisjet si blloqet ndërtimore rajonale brenda atij kufiri. Firewall-et dhe rrugët janë ato që formësojnë mënyrën se si mund të lëvizë trafiku midis atyre burimeve.',
    'Global network:': 'Rrjeti global:',
    'One VPC can span multiple regions.': 'Një VPC mund të shtrihet në rajone të shumta.',
    'Regional subnets:': 'Nëndisat rajonale:',
    'Each subnet belongs to one region and has a CIDR block.': 'Secila nëndis i përket një rajoni dhe ka një bllok CIDR.',
    'Firewall controls:': 'Kontrolli i firewall:',
    'Ingress and egress rules determine which traffic is allowed.': 'Rregullat e ingress dhe egress përcaktojnë se cilin trafiku lejohet.',
    'Routes:': 'Rrugët:',
    'GCP automatically creates system routes, and custom routes can be added for special traffic patterns.': 'GCP krijon automatikisht rrugë sistemi, dhe rrugët e personalizuara mund të shtohen për modele të veçanta trafiku.',
    'Most networking questions are really about choosing the right architecture pattern: private-only access, isolation by segment, east-west traffic control, and hybrid connectivity. A good VPC design makes route tables, firewall policies, and service access predictable and secure.': 'Shumica e pyetjeve të rrjetëzimit në fakt kanë të bëjnë me zgjedhjen e modelit të duhur të arkitekturës: qasje private-only, izolim sipas segmentit, kontrolli i trafikut east-west dhe lidhja hibride. Një dizajn i mirë i VPC bën tabelat e rrugëve, politikat e firewall dhe qasjen në shërbime të parashikueshme dhe të sigurta.',
    'Confusing a VPC being global with a subnet being global. Subnets are regional.': 'Të ngatërrosh një VPC që është global me një subnet që është globale. Nëndisat janë rajonale.',
    'Assuming all traffic is allowed by default. Firewall rules are the main access control mechanism.': 'Të supozohet se të gjithë trafiku lejohet si parazgjedhje. Rregullat e firewall janë mekanizmi kryesor i kontrollit të qasjes.',
    'Forgetting that communication within a VPC may still require correct firewall and routing behavior.': 'Të harosh se komunikimi brenda një VPC ende mund të kërkojë sjellje të saktë të firewall dhe routing.'
  },
  'dns-best-practices.html': {
    'Key principles': 'Parimet kryesore',
    'Why it matters': 'Pse është e rëndësishme',
    'Design checklist': 'Lista e kontrollit të dizajnit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Private DNS keeps internal apps private; public DNS informs the internet.': 'Private DNS e mban të fshehtë aplikacionet e brendshme; public DNS informon internetin.',
    'DNS is more than name resolution. In cloud architecture, DNS influences service discovery, private access, failover, and how traffic is routed among regions and applications.': 'DNS nuk është vetëm zgjidhja e emrave. Në arkitekturën e cloud, DNS ndikon në zbulimin e shërbimeve, qasjen private, failover dhe mënyrën se si drejtohet trafiku midis rajoneve dhe aplikacioneve.',
    'Use private DNS for internal-only workloads and service discovery.': 'Përdorni DNS private për workload-et dhe zbulimin e shërbimeve të brendshme.',
    'Keep public and private namespaces clearly separated to avoid confusion.': 'Mbani hapësirat e emrave publike dhe private të ndara qartë për të shmangur konfuzionin.',
    'Align DNS records with your load-balancer and failover design.': 'Përputhni regjistrat DNS me dizajnin tuaj të balancimit të ngarkesës dhe failover.',
    'Choosing the wrong DNS pattern can point clients to the wrong region, create split-horizon confusion, or break internal service communication.': 'Zgjedhja e modelit të gabuar të DNS mund të drejtojë klientët në rajon të gabuar, të krijojë konfuzion split-horizon ose të prishë komunikimin e shërbimeve të brendshme.',
    'Use health checks and weighted routing when designing resiliency.': 'Përdorni health checks dhe weighted routing kur dizajnoni resiliencën.',
    'Decide which domains are public vs private.': 'Vendosni cilat domenë janë publike dhe cilat private.',
    'Ensure internal apps do not depend on public DNS when private connectivity is required.': 'Sigurohuni që aplikacionet e brendshme të mos varen nga DNS publike kur kërkohet lidhshmëri private.',
    'Use split-horizon patterns when the same service name has different internal and external answers.': 'Përdorni modele split-horizon kur emri i njëjtë i shërbimit ka përgjigje të ndryshme brenda dhe jashtë.',
    'DNS and load balancing must align to avoid traffic being sent to a dead or wrong region.': 'DNS dhe balancimi i ngarkesës duhet të përputhen për të shmangur dërgimin e trafikut në një rajon të vdekur ose të gabuar.',
    'Remember: traffic direction and naming strategy are part of the design decision.': 'Mos harroni: drejtimi i trafikut dhe strategjia e emërtimit janë pjesë e vendimit të dizajnit.'
  },
  'edge-security.html': {
    'Key services': 'Shërbimet kryesore',
    'Common design choices': 'Zgjedhje të zakonshme të dizajnit',
    'Exam cues': 'Kujtimet e provimit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Edge security solutions protect public-facing services from abuse, DDoS traffic, and unwanted access. They are often used in front of load balancers and internet-facing applications.': 'Zgjidhjet e sigurisë në edge mbrojnë shërbimet me ekspozim publik nga abuzimi, trafiku DDoS dhe qasja e padëshiruar. Ato përdoren shpesh para balancerëve të ngarkesës dhe aplikacioneve me ekspozim në internet.',
    'Cloud Armor provides policy-based traffic filtering and DDoS protection.': 'Cloud Armor ofron filtrim të trafikut bazuar në politika dhe mbrojtje DDoS.',
    'Cloud CDN improves latency by caching content closer to users.': 'Cloud CDN ul vonesën duke ruajtur përmbajtje më afër përdoruesve.',
    'Cloud NAT allows private resources to access the internet while avoiding public IP exposure.': 'Cloud NAT lejon burime private të qasen në internet ndërsa shmang ekspozimin me IP publike.',
    'Use Cloud Armor to enforce rate limits, geo restrictions, and allow/deny policies.': 'Përdorni Cloud Armor për të zbatuar rate limits, kufizime gjeografike dhe politika allow/deny.',
    'Use Cloud CDN for content-heavy front ends and better user experience.': 'Përdorni Cloud CDN për front-end-et e mbingarkuara me përmbajtje dhe përvojë më të mirë të përdoruesit.',
    'Use Cloud NAT when private instances need outbound internet access without fixed public IPs.': 'Përdorni Cloud NAT kur instancat private kanë nevojë për qasje dalëse në internet pa IP publike fikse.',
    '“The app has public traffic and needs DDoS protection.”': '“Aplikacioni ka trafikun publik dhe ka nevojë për mbrojtje DDoS.”',
    '“Private instances require outbound internet connectivity without public IPs.”': '“Instancat private kërkojnë lidhshmëri dalëse në internet pa IP publike.”',
    '“Traffic shaping and geo filtering must be applied before origin servers.”': '“Formimi i trafikut dhe filtrimi gjeografik duhet të zbatohen para serverëve origjinë.”',
    'Edge controls protect traffic before it reaches the app.': 'Kontrollet e edge mbrojnë trafikun para se të arrijë te aplikacioni.',
    'Cloud Armor secures the public edge; Cloud NAT keeps private workloads outbound without public IP assignment.': 'Cloud Armor e siguron edge publik; Cloud NAT e mban trafikun dalës të workload-ëve private pa caktim IP publik.',
    'Security decisions are often about where the traffic should be filtered.': 'Vendimet e sigurisë shpesh kanë të bëjnë me vendin ku duhet filtruar trafiku.',
    'Cloud CDN and Cloud Armor are usually paired for performance and protection.': 'Cloud CDN dhe Cloud Armor zakonisht shoqërohen për performancë dhe mbrojtje.',
    'Cloud NAT is not for inbound access; it is for outbound internet egress from private resources.': 'Cloud NAT nuk është për qasje hyrëse; është për egress-in dalës në internet nga burimet private.'
  },
  'hybrid-connectivity.html': {
    'VPN': 'VPN',
    'Cloud Interconnect': 'Cloud Interconnect',
    'Network Connectivity Center': 'Network Connectivity Center',
    'Decision framework': 'Frameworki i vendimmarrjes',
    'Hybrid connectivity is about extending private network reach between on-prem environments and Google Cloud. The choice depends on bandwidth, latency sensitivity, resilience, and operational complexity.': 'Lidhja hibride ka të bëjë me zgjerimin e arritshmërisë së rrjetit privat midis mjediseve lokale dhe Google Cloud. Zgjedhja varet nga kapaciteti i brezit, ndjeshmëria ndaj vonesës, resilienca dhe kompleksiteti operativ.',
    'Cloud VPN is a secure and flexible option that connects an on-prem network to GCP over the public internet or through a managed tunnel path. It is a good fit when you need connectivity, but do not require the highest throughput or strict SLA profiles.': 'Cloud VPN është një opsion i sigurt dhe fleksibël që lidh një rrjet lokal me GCP përmes internetit publik ose një rruge të menaxhuar tunel. Është i përshtatshëm kur keni nevojë për lidhshmëri, por nuk kërkoni kapacitetin më të lartë ose profile stricte SLA.',
    'Cloud Interconnect provides private connectivity with better performance and predictable latency. It is often selected for enterprise workloads with large data transfer needs, stricter network performance needs, or higher availability requirements.': 'Cloud Interconnect ofron lidhshmëri private me performancë më të mirë dhe vonesë të parashikueshme. Zakonisht zgjidhet për workload-et e ndërmarrjeve me nevoja të mëdha transferimi të të dhënave, kërkesa stricte për performancën e rrjetit ose kërkesa më të larta për disponueshmëri.',
    'NCC centralizes routing and connectivity across multiple networks. It is useful for large organizations with several on-prem or cloud environments that need central management and policy control.': 'NCC centralizon routing dhe lidhshmërinë nëpër rrjete të shumta. Është i dobishëm për organizata të mëdha me disa mjedise lokale ose cloud që kanë nevojë për menaxhim qendror dhe kontroll politikash.',
    'Use VPN for simplicity and lower cost.': 'Përdorni VPN për thjeshtësi dhe kosto më të ulëta.',
    'Use Interconnect for high bandwidth and predictable performance.': 'Përdorni Interconnect për bandwith të lartë dhe performancë të parashikueshme.',
    'Use NCC when you need a hub-and-spoke or global network architecture model.': 'Përdorni NCC kur keni nevojë për një model arkitekturë rrjeti hub-and-spoke ose global.'
  },
  'load-balancing-dns.html': {
    'Load balancing in GCP': 'Balancimi i ngarkesës në GCP',
    'Why health checks matter': 'Pse health checks kanë rëndësi',
    'DNS and traffic management': 'DNS dhe menaxhimi i trafikut',
    'Exam perspective': 'Perspektiva e provimit',
    'Load balancing ensures traffic is distributed across healthy backends, while DNS routes users to the right service or region. Together, they help keep services available, fast, and resilient.': 'Balancimi i ngarkesës siguron që trafiku të shpërndahet në backend të shëndetshëm, ndërsa DNS i drejton përdoruesit te shërbimi ose rajoni i duhur. Së bashku, ata ndihmojnë të mbahen shërbimet të disponueshme, të shpejta dhe të qëndrueshme.',
    'Google Cloud offers several load balancer types for different traffic layers, such as HTTP(S), TCP/SSL, and UDP. The decision depends on whether the workload is internet-facing, internal-only, or needs global reach across regions.': 'Google Cloud ofron disa lloje balancerësh ngarkese për shtresa të ndryshme trafiku, si HTTP(S), TCP/SSL dhe UDP. Vendimi varet nga fakti nëse workload-i është i ekspozuar në internet, vetëm i brendshëm, ose ka nevojë për arritshmëri globale në rajone.',
    'Health checks determine whether a backend is healthy and can receive traffic.': 'Health checks përcaktojnë nëse një backend është i shëndetshëm dhe mund të marrë trafikun.',
    'Load balancers remove unhealthy backends automatically.': 'Balancerët largojnë backend-et e pasuksesshme automatikisht.',
    'Traffic can be distributed by region, session affinity, or traffic splitting for gradual deployment.': 'Trafiku mund të shpërndahet sipas rajonit, session affinity ose traffic splitting për deployim gradual.',
    'DNS allows you to map service names to IPs and often plays a role in global routing. For multi-region systems, you may combine DNS records with health checks and failover patterns to steer traffic to healthy endpoints.': 'DNS ju lejon të lidhni emrat e shërbimeve me IP-të dhe shpesh luan një rol në routing global. Për sistemet me shumë rajone, mund të kombinoni regjistrat DNS me health checks dhe modele failover për të drejtuar trafikun te endpoint-et e shëndetshme.',
    'Many architecture questions are really about choosing between global load balancing, regional load balancing, and direct service routing based on latency and resilience requirements.': 'Shumë pyetje arkitekturore në fakt kanë të bëjnë me zgjedhjen midis global load balancing, regional load balancing dhe direct service routing bazuar në kërkesat për vonesë dhe resiliencë.'
  },
  'security-monitoring.html': {
    'Least privilege and segmentation': 'Privilegji minimal dhe segmentimi',
    'Monitoring and diagnostics': 'Monitorimi dhe diagnostikimi',
    'What the exam tests': 'Çfarë teston provimi',
    'Good practice': 'Praktikë e mirë',
    'Segment workloads into trust zones so that only required traffic is allowed. VPC boundaries, firewall rules, and service access controls reduce lateral movement and keep an application easier to secure.': 'Segmentoni workload-et në zona besimi, kështu që të lejohet vetëm trafiku i kërkuar. Kufijtë VPC, rregullat e firewall dhe kontrollot e qasjes në shërbime reduktojnë lëvizjen anësore dhe e bëjnë një aplikacion më të lehtë për t’u siguruar.',
    'Use logs and flow data to validate whether traffic is reaching its destination.': 'Përdorni log dhe të dhëna flow për të validuar nëse trafiku arrin në destinacionin e tij.',
    'Check whether an issue is route-related, firewall-related, or health-check-related.': 'Kontrolloni nëse problemi lidhet me route, firewall ose health check.',
    'Look at packet and connection patterns before changing policies in production.': 'Shikoni modelet e packet dhe lidhjeve para se të ndryshoni politika në prodhim.',
    'Exam questions often focus on the correct security pattern, such as protecting a public frontend, restricting a private database tier, and using private service access or load balancer ingress paths appropriately.': 'Pyetjet e provimit shpesh fokusohen në modelin e duhur të sigurisë, si mbrojtja e një frontend publike, kufizimi i një shtrese private të bazës së të dhënave dhe përdorimi i private service access ose rrugëve ingress të balancerit në mënyrë të përshtatshme.',
    'Keep internet exposure minimal, enforce policy by service role, and verify that the network path matches the intended trust model. Logging and monitoring make troubleshooting much easier when traffic unexpectedly fails.': 'Mbani ekspozimin në internet minimal, zbato politikën sipas rolit të shërbimit dhe verifiko se rruga e rrjetit përputhet me modelin e synuar të besimit. Logging dhe monitorimi e bëjnë troubleshooting-in shumë më të lehtë kur trafiku dështon papritur.'
  },
  'shared-vpc.html': {
    'What it is': 'Çfarë është',
    'Why it matters': 'Pse është e rëndësishme',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Exam mindset': 'Mendësia e provimit',
    'Typical exam cues': 'Kujtime tipike të provimit',
    'Key design decision': 'Vendim kyç i dizajnit',
    'Shared VPC = one network, many teams.': 'Shared VPC = një rrjet, shumë ekipe.',
    'A Shared VPC network is created in a host project and attached to service projects. The host project owns the shared network and its subnets, while service projects consume those networks for their instances, GKE clusters, and managed services.': 'Një rrjet Shared VPC krijohet në një host project dhe bashkëngjitet me service projects. Host project zotëron rrjetin e ndarë dhe nëndisat e tij, ndërsa service projects përdorin ato rrjete për instancat, cluster-et GKE dhe shërbimet e menaxhuara.',
    'Centralizes network design and firewall controls.': 'Centralizon dizajnin e rrjetit dhe kontrollin e firewall.',
    'Allows multiple teams to use the same network without duplicating VPCs.': 'Lejon ekipe të shumta të përdorin të njëjtin rrjet pa dyfishuar VPC-të.',
    'Supports common security boundaries and route control.': 'Mbështet kufij të përbashkët të sigurisë dhe kontroll të rrugëve.',
    'Host project = network owner and admin.': 'Host project = pronar dhe admin i rrjetit.',
    'Service project = workloads and resources using the shared network.': 'Service project = workload-et dhe burimet që përdorin rrjetin e ndarë.',
    'Firewall, routing, and connectivity rules usually live in the host project’s network design.': 'Rregullat e firewall, routing dhe lidhshmërisë zakonisht ndodhen në dizajnin e rrjetit të host project-it.',
    'Common choice when many apps need the same internal network standards.': 'Zgjedhje e zakonshme kur shumë aplikacione kanë nevojë për të njëjtat standarde të rrjetit të brendshëm.',
    'Good for centralized policy, route control, and service segmentation.': 'E dobishme për politikë të centralizuar, kontroll rrugësh dhe segmentim të shërbimeve.',
    'Best when project boundaries matter but the network should remain common.': 'Më e mira kur kufijtë e projektit kanë rëndësi, por rrjeti duhet të mbetet i përbashkët.',
    'Use Shared VPC when you need a consistent internal network architecture across several projects, but you still want each project to remain logically separate for ownership and billing.': 'Përdorni Shared VPC kur keni nevojë për një arkitekturë të qëndrueshme të rrjetit të brendshëm në disa projekte, por dëshironi që secili projekt të mbetet logjikisht i ndarë për pronësi dhe faturim.',
    'Multiple teams need a common VPC without creating separate networks.': 'Ekipet e shumta kanë nevojë për një VPC të përbashkët pa krijuar rrjete të veçanta.',
    'We need centralized firewall and routing across many projects.': 'Na nevojitet firewall dhe routing i centralizuar në shumë projekte.',
    'The environment has lots of service projects but one common network design.': 'Mjedisi ka shumë service projects, por një dizajn të përbashkët rrjeti.'
  },
  'private-connectivity.html': {
    'Private Google Access': 'Private Google Access',
    'Private Service Access': 'Private Service Access',
    'Design guidance': 'Udhëzime të dizajnit',
    'Typical exam cues': 'Kujtime tipike të provimit',
    'What to remember': 'Çfarë duhet të mbani mend',
    'Memory hook': 'Kujtesë hook',
    'Private access = no public IP, still private connectivity.': 'Private access = pa IP publik, megjithatë lidhshmëri private.',
    'Private Google Access allows VM instances without external IPs to reach Google APIs and services over private network paths. This is critical for security and for keeping workloads out of public routing.': 'Private Google Access lejon instancat VM pa IP të jashtme të arrijnë API dhe shërbime të Google përmes rrugëve private të rrjetit. Kjo është kritike për sigurinë dhe për mbajtjen e workload-ëve jashtë routing publik.',
    'Private Service Access creates private connectivity between consumers and Google-managed or internal services, often using allocated private IP ranges. It helps services communicate without exposing them to the public internet.': 'Private Service Access krijon lidhshmëri private midis konsumatorëve dhe shërbimeve të menaxhuara nga Google ose të brendshme, shpesh duke përdorur gamat private IP të alokuara. Ai ndihmon shërbimet të komunikojnë pa i ekspozuar në internetin publik.',
    'Private Google Access is for reaching Google APIs and services from private VMs.': 'Private Google Access është për arritjen e API dhe shërbimeve të Google nga VMs private.',
    'Private Service Access is for private connectivity to managed services or internal endpoints.': 'Private Service Access është për lidhshmëri private me shërbime të menaxhuara ose endpoint-e të brendshme.',
    'Use these patterns when security policy requires private-only communication.': 'Përdorni këto modele kur politika e sigurisë kërkon komunikim vetëm private.',
    'Private Google Access keeps VMs private while reaching Google APIs.': 'Private Google Access e mban VMs private ndërsa arrin API të Google.',
    'Private Service Access supports private reachability to managed or internal services.': 'Private Service Access mbështet arritshmëri private ndaj shërbimeve të menaxhuara ose të brendshme.',
    'VMs do not have external IPs but must reach Google APIs.': 'VM-të nuk kanë IP të jashtme, por duhet të arrijnë API të Google.',
    'Workloads need private connectivity to a managed service over RFC1918 ranges.': 'Workload-et kanë nevojë për lidhshmëri private me një shërbim të menaxhuar përmes gamave RFC1918.',
    'The solution must avoid public internet exposure.': 'Zgjidhja duhet të shmangë ekspozimin në internet publik.',
    'If the workload lacks an external IP, use private pathing to Google services or managed internal endpoints.': 'Nëse workload-i nuk ka IP të jashtme, përdorni rrugëzimin private ndaj shërbimeve të Google ose endpoint-eve të brendshme të menaxhuara.'
  },
  'network-deep-dives.html': {
    'High-value deep-dive topics': 'Tema me vlerë të lartë për analizë të thellë',
    'Organizational constraints': 'Kufizimet organizative',
    'Shared VPC': 'VPC e ndarë',
    'Private Service Access and Private Google Access': 'Private Service Access dhe Private Google Access',
    'Cloud Router': 'Cloud Router',
    'DNS best practices': 'Praktikat më të mira të DNS',
    'Choosing a load balancer': 'Zgjedhja e një balanceri të ngarkesës',
    'Internal LB and next hop with NVA': 'Internal LB dhe next hop me NVA',
    'Networking on GKE': 'Rrjetëzimi në GKE',
    'Hybrid connectivity options': 'Opsionet e lidhjes hibride',
    'Dedicated Interconnect and dual stack': 'Dedicated Interconnect dhe dual stack',
    'HA VPN': 'HA VPN',
    'Cross-Cloud Network for distributed applications': 'Cross-Cloud Network për aplikacione të shpërndara',
    'Cloud CDN': 'Cloud CDN',
    'Invalidations': 'Invalidations',
    'NGFW': 'NGFW',
    'Cloud Armor': 'Cloud Armor',
    'Cloud NAT': 'Cloud NAT',
    'VPC': 'VPC',
    'These are the advanced networking topics most often tested in the Professional Cloud Network Engineer exam. Each one is a high-value area where architecture decisions, route behavior, hybrid connectivity, and security design matter.': 'Këto janë temat e avancuara të rrjetit që shpesh testohen në provimin Professional Cloud Network Engineer. Secila është një zonë me vlerë të lartë ku vendimet e arkitekturës, sjellja e rrugëve, lidhja hibride dhe dizajni i sigurisë kanë rëndësi.',
    'Organization policies can limit networking design by preventing external IPs, restricting VPC peering, or forcing governance around how projects and services can be connected. For the exam, know that policy constraints can override default design choices.': 'Politikat e organizimit mund të kufizojnë dizajnin e rrjetit duke parandaluar IP-të e jashtme, duke kufizuar VPC peering ose duke imponuar governance rreth se si mund të lidhen projektet dhe shërbimet. Për provimin, dini që kufizimet e politikës mund të anulojnë zgjedhjet e paracaktuara të dizajnit.',
    'Shared VPC allows a host project to share a VPC network with other projects. This is important for centralized network administration, consistent firewall policies, and multi-project environments that need common network services.': 'Shared VPC lejon që një host project të ndajë një rrjet VPC me projekte të tjera. Kjo është e rëndësishme për administrimin e centralizuar të rrjetit, politikat e përputhshme të firewall dhe mjediset me shumë projekte që kanë nevojë për shërbime të përbashkëta të rrjetit.',
    'Private Service Access allows private, internal access to managed services such as Google APIs or internal services over private IP space. Private Google Access lets VMs without external IP addresses reach Google APIs and services over the VPC network.': 'Private Service Access lejon qasje private dhe të brendshme ndaj shërbimeve të menaxhuara si API të Google ose shërbime të brendshme përmes hapësirës private IP. Private Google Access i lejon VM-ve pa adresa IP të jashtme të arrijnë API dhe shërbime të Google përmes rrjetit VPC.',
    'Cloud Router is the BGP-enabled routing component used for dynamic route exchange with on-premises networks and partner networks. It is central to Hybrid Connectivity, Interconnect, and VPN design.': 'Cloud Router është komponenti i routing me BGP i përdorur për shkëmbimin dinamik të rrugëve me rrjetet në vend dhe rrjetet e partnerëve. Ai është qendror për dizajnin e Hybrid Connectivity, Interconnect dhe VPN.',
    'DNS is not just name resolution. In cloud networking, DNS design affects load balancing decisions, service discovery, private zone isolation, and cross-environment routing. Good DNS patterns improve resilience and reduce failed lookups.': 'DNS nuk është vetëm zgjidhja e emrave. Në rrjetëzimin e cloud, dizajni i DNS ndikon në vendimet e balancimit të ngarkesës, zbulimin e shërbimeve, izolimin e zonave private dhe routing-n e mjediseve të ndryshme. Modelet e mira të DNS rrisin resiliencën dhe reduktojnë kërkimet e dështuara.',
    'Network engineering questions often test whether you know when to use Global HTTP(S), Regional TCP/UDP, Internal Load Balancing, or Ingress for Kubernetes. The decision is driven by protocol, exposure model, and traffic characteristics.': 'Pyetjet e inxhinierisë së rrjetit shpesh testojnë nëse dini kur të përdorni Global HTTP(S), Regional TCP/UDP, Internal Load Balancing ose Ingress për Kubernetes. Vendimi varet nga protokolli, modeli i ekspozimit dhe karakteristikat e trafikut.',
    'Internal load balancers are frequently used to expose services only inside a VPC or between networks. When paired with a Next-Hop firewall or NVA, they can be used to steer traffic through security appliances or centralized inspection layers.': 'Balancerët e ngarkesës të brendshëm përdoren shpesh për të ekspozuar shërbime vetëm brenda një VPC ose midis rrjeteve. Kur kombinohen me një firewall Next-Hop ose NVA, mund të përdoren për të drejtuar trafikun nëpër appliance sigurie ose shtresa të centralizuara të inspektimit.',
    'Google Kubernetes Engine networking includes cluster IP ranges, pod networking, node networking, and service exposure. VPC-native clusters are usually the default pattern for modern, scalable Kubernetes networking on GCP.': 'Rrjetëzimi i Google Kubernetes Engine përfshin gamat e IP-ve të cluster-it, rrjetëzimin e pod-ve, rrjetëzimin e node-ve dhe ekspozimin e shërbimeve. Cluster-et VPC-native zakonisht janë modeli i parazgjedhur për rrjetëzimin modern dhe të shkallëzuar të Kubernetes në GCP.',
    'Hybrid connectivity is the set of ways to connect on-prem environments to Google Cloud. The main choices are VPN, Interconnect, and Network Connectivity Center, depending on bandwidth, latency, and operational needs.': 'Lidhja hibride është grupi i mënyrave për të lidhur mjediset lokale me Google Cloud. Zgjedhjet kryesore janë VPN, Interconnect dhe Network Connectivity Center, në varësi të bandwidth, vonesës dhe nevojave operative.',
    'Dedicated Interconnect provides private connectivity with predictable bandwidth and lower latency. Dual stack support matters for IPv4 + IPv6 workloads or mixed network environments that need both protocols.': 'Dedicated Interconnect ofron lidhshmëri private me bandwidth të parashikueshëm dhe vonesë më të ulët. Mbështetja dual stack është e rëndësishme për workload-et IPv4 + IPv6 ose mjediset e përziera të rrjetit që kërkojnë të dy protokollet.',
    'HA VPN provides highly available VPN connectivity between Google Cloud and on-premises sites. It is the common solution when you want redundancy and a simpler setup than a full private connectivity design.': 'HA VPN ofron lidhshmëri VPN me disponueshmëri të lartë midis Google Cloud dhe site-ve lokale. Është zgjidhja e zakonshme kur dëshironi redundancë dhe konfigurim më të thjeshtë se një dizajn i plotë i lidhshmërisë private.',
    'Cross-cloud patterns are used when applications span multiple public clouds or connect cloud environments with on-prem systems. The key design concerns are distributed routing, latency, and secure connectivity between domains.': 'Modelet cross-cloud përdoren kur aplikacionet shtrihen në shumë cloud publike ose lidhin mjediset cloud me sisteme lokale. Çështjet kryesore të dizajnit janë routing i shpërndarë, vonesa dhe lidhshmëria e sigurt midis domenëve.',
    'Cloud CDN accelerates content delivery by caching content at Google edge locations. It improves response time for static and some dynamic assets while reducing origin load.': 'Cloud CDN e përshpejton shpërndarjen e përmbajtjes duke ruajtur përmbajtje në vendet e edge të Google. Ai përmirëson kohën e përgjigjes për asset-et statike dhe disa dinamike ndërkohë që redukton ngarkesën në origjinë.',
    'Cache invalidation is the process of removing stale content from the edge cache so clients receive fresh data. For content-heavy and frequently updated services, this is a critical operational concept.': 'Cache invalidation është procesi i heqjes së përmbajtjes së vjetëruar nga cache i edge, kështu që klientët të marrin të dhëna të freskëta. Për shërbimet e mbingarkuara me përmbajtje dhe të përditësuara shpesh, kjo është një koncept kritik operativ.',
    'Next-generation firewalls are often used for centralized network inspection in cloud environments. They sit at strategic control points where traffic inspection, filtering, and threat analysis are required.': 'Firewall-et e brezit të ri përdoren shpesh për inspektim të centralizuar të rrjetit në mjediset cloud. Ato vendosen në pika strategjike kontrolli ku kërkohen inspektim i trafikut, filtrim dhe analizë e kërcënimeve.',
    'Cloud Armor is a managed DDoS and application defense product that protects services from common web attacks and abusive traffic patterns. It is especially useful when front ends are public-facing.': 'Cloud Armor është një produkt i menaxhuar për mbrojtje DDoS dhe aplikacioni që mbron shërbimet nga sulmet e zakonshme web dhe modelet e trafikut abuziv. Është veçanërisht i dobishëm kur front-end-et janë me ekspozim publik.',
    'Cloud NAT provides outbound internet access for private resources without assigning external IPs to each VM. It reduces public exposure and helps with egress design in private-only environments.': 'Cloud NAT ofron qasje dalëse në internet për burimet private pa caktuar IP të jashtme për çdo VM. Ai redukton ekspozimin publik dhe ndihmon në dizajnin e egress në mjedise private-only.',
    'VPC is the foundation of GCP network design. A well-built VPC uses segmentation, private IP planning, route control, and policy boundaries to support scalability, security, and service integration.': 'VPC është themeli i dizajnit të rrjetit në GCP. Një VPC i ndërtuar mirë përdor segmentim, planifikim IP private, kontroll rrugësh dhe kufij politikash për të mbështetur shkallëzimin, sigurinë dhe integrimin e shërbimeve.'
  }
};

const commonTextTranslations = {
  'What to do': 'Çfarë të bëni',
  'What it does after implementation': 'Çfarë bën pas zbatimit',
  'Key principles': 'Parimet kryesore',
  'Why it matters': 'Pse është e rëndësishme',
  'Design checklist': 'Lista e kontrollit të dizajnit',
  'What to remember': 'Çfarë duhet të mbani mend',
  'Memory hook': 'Kujtesë hook',
  'Recommended order to study': 'Rendi i rekomanduar për studim',
  'Lab ideas': 'Ide për lab',
  'High-value deep-dive topics': 'Tema me vlerë të lartë për analizë të thellë',
  'Typical exam cues': 'Kujtime tipike të provimit',
  'Exam mindset': 'Mendësia e provimit',
  'Good practice': 'Praktikë e mirë',
  'Decision framework': 'Frameworki i vendimmarrjes',
  'Exam perspective': 'Perspektiva e provimit',
  'Key services': 'Shërbimet kryesore',
  'Common design choices': 'Zgjedhje të zakonshme të dizajnit',
  'Exam cues': 'Kujtimet e provimit',
  'What the exam tests': 'Çfarë teston provimi'
};

const applyPageTextTranslations = () => {
  const currentLanguage = getCurrentLanguage();
  const pageKey = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = pageTextTranslations[pageKey] || {};
  const fallbackMap = { ...commonTextTranslations, ...pageMap };
  if (!Object.keys(fallbackMap).length) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT;
      return node.textContent && node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    if (!node.__originalText) {
      node.__originalText = node.textContent;
    }

    const originalText = node.__originalText.trim();
    if (currentLanguage === 'en') {
      node.textContent = originalText;
      return;
    }

    if (fallbackMap[originalText]) {
      node.textContent = fallbackMap[originalText];
    }
  });
};

const getCurrentLanguage = () => localStorage.getItem('gcp-language') || 'en';

const applyPageSpecificTranslations = () => {
  const currentLanguage = getCurrentLanguage();
  const pageKey = window.location.pathname.split('/').pop() || 'index.html';
  const pageData = pageSpecificTranslations[pageKey];

  if (!pageData) return;

  const titleValue = pageData.title ? pageData.title[currentLanguage] || pageData.title.en : null;
  if (titleValue) {
    const pageTitle = document.querySelector('.topic-header h1, .page-header h1, h1');
    if (pageTitle) pageTitle.textContent = titleValue;
    document.title = titleValue;
  }

  const descriptionValue = pageData.description ? pageData.description[currentLanguage] || pageData.description.en : null;
  const descriptionNode = document.querySelector('.topic-header > p, .page-intro, .hero-description');
  if (descriptionNode && descriptionValue) {
    descriptionNode.textContent = descriptionValue;
  }

  if (pageData.nav) {
    document.querySelectorAll('.topic-nav a, .nav-actions a, .topbar a').forEach((link) => {
      const href = link.getAttribute('href') || '';
      const translated = pageData.nav[href];
      if (translated) {
        link.textContent = translated[currentLanguage] || translated.en;
      }
    });
  }
};

const setupLanguage = () => {
  const languageToggle = document.getElementById('languageToggle');
  if (!languageToggle) return;

  const applyLanguage = () => {
    const currentLanguage = getCurrentLanguage();
    const bundle = translations[currentLanguage] || translations.en;
    document.documentElement.lang = currentLanguage === 'al' ? 'sq' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (bundle[key]) {
        element.textContent = bundle[key];
      }
    });

    applyPageSpecificTranslations();
    applyPageTextTranslations();

    languageToggle.textContent = currentLanguage === 'en' ? 'AL' : 'EN';
    languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Albanian' : 'Switch to English');
  };

  languageToggle.addEventListener('click', () => {
    const nextLanguage = getCurrentLanguage() === 'en' ? 'al' : 'en';
    localStorage.setItem('gcp-language', nextLanguage);
    applyLanguage();
    if (typeof setupChecklist === 'function') {
      const checklist = document.getElementById('topicChecklist');
      if (checklist && checklist.children.length) {
        checklist.innerHTML = '';
        setupChecklist();
      }
    }
  });

  applyLanguage();
};

const setupTheme = () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const applyTheme = () => {
    const currentTheme = localStorage.getItem('gcp-theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  };

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('gcp-theme', nextTheme);
    applyTheme();
  });

  applyTheme();
};

const setupChecklist = () => {
  const checklist = document.getElementById('topicChecklist');
  if (!checklist) return;

  const currentLanguage = getCurrentLanguage();
  const topics = translations[currentLanguage].checklistTopics;

  const totalTopicsEl = document.getElementById('totalTopics');
  const checkedCountEl = document.getElementById('checkedCount');
  const progressPercentEl = document.getElementById('progressPercent');
  const progressRing = document.querySelector('.progress-ring');

  const savedState = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');

  topics.forEach((topic) => {
    const item = document.createElement('div');
    item.className = 'checklist-item';
    if (savedState[topic]) item.classList.add('checked');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(savedState[topic]);
    checkbox.setAttribute('aria-label', topic);

    checkbox.addEventListener('change', () => {
      const nextState = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');
      nextState[topic] = checkbox.checked;
      localStorage.setItem('gcp-network-checklist', JSON.stringify(nextState));
      item.classList.toggle('checked', checkbox.checked);
      updateProgress();
    });

    const label = document.createElement('label');
    label.textContent = topic;
    label.htmlFor = topic;

    item.appendChild(checkbox);
    item.appendChild(label);
    checklist.appendChild(item);
  });

  const updateProgress = () => {
    const state = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');
    const completed = topics.filter((topic) => state[topic]).length;
    const percent = Math.round((completed / topics.length) * 100);

    checkedCountEl.textContent = completed;
    progressPercentEl.textContent = `${percent}%`;
    if (progressRing) {
      progressRing.style.background = `conic-gradient(var(--primary) ${percent * 3.6}deg, rgba(148, 163, 184, 0.18) 0deg)`;
    }
  };

  totalTopicsEl.textContent = topics.length;
  updateProgress();
};

const setupResourceFilters = () => {
  const filterButtons = document.querySelectorAll('.filter');
  const resourceCards = document.querySelectorAll('.resource-card');

  if (!filterButtons.length || !resourceCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      resourceCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
};

const setupExam = () => {
  const practiceStatusEl = document.getElementById('practiceStatus');
  const practiceTimerEl = document.getElementById('practiceTimer');
  const examSummaryEl = document.getElementById('examSummary');
  const questionCardEl = document.getElementById('questionCard');
  const practiceExamEl = document.getElementById('practiceExam');
  const progressBarEl = document.getElementById('progressBar');
  const startExamBtn = document.getElementById('startExamBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const showAnswerBtn = document.getElementById('showAnswerBtn');
  const resetExamBtn = document.getElementById('resetExamBtn');
  const generate30Btn = document.getElementById('generate30Btn');
  const generate50Btn = document.getElementById('generate50Btn');
  const examDomainSelect = document.getElementById('examDomainSelect');
  const hardModeBtn = document.getElementById('hardModeBtn');

  if (!practiceStatusEl || !practiceTimerEl || !examSummaryEl || !questionCardEl || !practiceExamEl || !progressBarEl || !startExamBtn || !nextBtn || !prevBtn || !showAnswerBtn || !resetExamBtn || !generate30Btn || !generate50Btn || !examDomainSelect || !hardModeBtn) {
    return;
  }

  const questionBank = (() => {
    const templates = [
      {
        topic: 'VPC design',
        question: 'A company deploys a three-tier application in one VPC. Which design best supports least-privilege networking and easier troubleshooting?',
        options: ['One subnet for all tiers with broad firewall rules', 'Three subnets with independent firewall and routing policies', 'One subnet per VM', 'No subnet segmentation'],
        answer: 1,
        explanation: 'Tiered subnet segmentation plus explicit firewall rules reduces exposure, improves isolation, and makes troubleshooting easier.'
      },
      {
        topic: 'VPC design',
        question: 'Two workloads in different subnets of the same VPC cannot communicate. Which layer is the most likely problem?',
        options: ['Route table or firewall policy', 'Billing account', 'Cloud Storage labels', 'Machine image family'],
        answer: 0,
        explanation: 'A subnet-to-subnet connectivity issue usually involves route selection, firewall policy, or path reachability.'
      },
      {
        topic: 'CIDR',
        question: 'Which range provides the largest address pool for future network growth within a practical design?',
        options: ['10.0.0.0/24', '10.0.0.0/16', '10.0.0.0/8', '10.0.0.0/28'],
        answer: 2,
        explanation: 'A /8 range provides the largest available address pool, but it should be planned carefully for administrative practicality and scale.'
      },
      {
        topic: 'CIDR',
        question: 'What is the equivalent mask for 10.0.0.0/24?',
        options: ['255.255.0.0', '255.255.255.0', '255.255.255.255', '255.0.0.0'],
        answer: 1,
        explanation: 'A /24 prefix corresponds to 255.255.255.0.'
      },
      {
        topic: 'CIDR',
        question: 'Two sites both use 10.0.0.0/16 and connect through a VPN. What is the main risk?',
        options: ['Overlapping address spaces causing ambiguous routing', 'VPN performance improvements', 'Firewall rules are automatically disabled', 'Private DNS is blocked'],
        answer: 0,
        explanation: 'Overlapping RFC1918 ranges can create ambiguous paths and route confusion between the two networks.'
      },
      {
        topic: 'Routing',
        question: 'A workload must send traffic to a specific on-premises destination through a VPN rather than the default internet path. Which design element is relevant?',
        options: ['Custom static route', 'Cloud CDN cache policy', 'Private DNS zone', 'Project quota'],
        answer: 0,
        explanation: 'Custom routes let you steer traffic to a VPN tunnel or specific next hop.'
      },
      {
        topic: 'Routing',
        question: 'A VM cannot reach a private destination despite being in the same region. What is the most likely root cause?',
        options: ['Missing or incorrect route', 'Disk size issue', 'Auto-generated tags', 'Billing export delay'],
        answer: 0,
        explanation: 'Traffic black-holing is commonly caused by missing or incorrect routes.'
      },
      {
        topic: 'Firewall',
        question: 'The security team wants SSH access only from a jump host subnet. Which rule is correct?',
        options: ['Allow all TCP 22 from 0.0.0.0/0', 'Allow from the jump host CIDR to tcp:22 on target VMs', 'Deny port 22 and allow all else', 'Allow egress only'],
        answer: 1,
        explanation: 'Least-privilege access should be limited to a trusted management source range and required destination port.'
      },
      {
        topic: 'Firewall',
        question: 'If a packet arrives and no firewall rule matches, what is the result?',
        options: ['It is allowed by default', 'It is denied by default', 'It is balanced to a backend', 'It is routed through Cloud NAT'],
        answer: 1,
        explanation: 'Google Cloud firewall policy is deny by default unless a matching allow rule exists.'
      },
      {
        topic: 'Private access',
        question: 'A private VM with no external IP needs to reach Google APIs without internet exposure. Which feature should be used?',
        options: ['Private Google Access', 'Cloud NAT', 'Cloud Armor', 'External IP assignment'],
        answer: 0,
        explanation: 'Private Google Access allows private workloads to reach Google APIs using a private path.'
      },
      {
        topic: 'Private access',
        question: 'A team wants private access to a managed Google service without public exposure. Which feature is most appropriate?',
        options: ['Private Service Connect', 'Cloud Router', 'Cloud CDN', 'Cloud DNS'],
        answer: 0,
        explanation: 'Private Service Connect gives private access to Google-managed services over internal IPs.'
      },
      {
        topic: 'Shared VPC',
        question: 'Which design is best when central networking control must be retained while multiple app teams use one common network?',
        options: ['Shared VPC', 'Dedicated per-project VPCs', 'Cloud NAT gateway only', 'Single subnet for all projects'],
        answer: 0,
        explanation: 'Shared VPC centralizes network administration while allowing multiple service projects to consume the same network.'
      },
      {
        topic: 'Shared VPC',
        question: 'In a Shared VPC model, which project usually owns the network resources?',
        options: ['Host project', 'Service project', 'Billing project', 'Customer project'],
        answer: 0,
        explanation: 'The host project owns the shared VPC and subnet resources, while service projects consume them.'
      },
      {
        topic: 'BGP',
        question: 'A production environment needs dynamic route exchange between on-prem and GCP. Which component is required?',
        options: ['Cloud Router with BGP', 'Cloud CDN', 'BigQuery dataset', 'Cloud NAT only'],
        answer: 0,
        explanation: 'Cloud Router with BGP is the mechanism for dynamic route exchange in hybrid connectivity.'
      },
      {
        topic: 'BGP',
        question: 'Which protocol is used to exchange dynamic routes between Cloud Router and an external router?',
        options: ['BGP', 'ICMP', 'DHCP', 'HTTP'],
        answer: 0,
        explanation: 'BGP is the standard protocol for route advertisement and selection in external connectivity.'
      },
      {
        topic: 'Hybrid connectivity',
        question: 'A regulated company needs a dedicated private connection with reliable low latency and high throughput. Which option is best?',
        options: ['Dedicated Interconnect', 'Cloud NAT', 'Cloud CDN', 'On-demand VPN'],
        answer: 0,
        explanation: 'Dedicated Interconnect delivers private, predictable, high-capacity connectivity suitable for critical hybrid workloads.'
      },
      {
        topic: 'Hybrid connectivity',
        question: 'A business wants resilient hybrid connectivity with simpler deployment but no dedicated circuit. Which option is usually chosen?',
        options: ['HA VPN', 'Cloud Armor', 'Cloud CDN', 'Private Google Access'],
        answer: 0,
        explanation: 'HA VPN provides redundant VPN tunnels and simpler deployment than a dedicated private circuit.'
      },
      {
        topic: 'Load balancing',
        question: 'Which load balancer is best for a regional public web app that must distribute traffic with health checks and global reach?',
        options: ['Global external HTTP(S) Load Balancer', 'Internal TCP/UDP Load Balancer', 'Cloud Router', 'Private DNS zone'],
        answer: 0,
        explanation: 'The external HTTP(S) load balancer is designed for internet-facing web traffic with global distribution and health-aware routing.'
      },
      {
        topic: 'Load balancing',
        question: 'Which load balancer is intended for services that must remain private and reachable only via internal IPs?',
        options: ['Internal TCP/UDP Load Balancer', 'Cloud CDN', 'Cloud Armor', 'Cloud NAT'],
        answer: 0,
        explanation: 'Internal TCP/UDP load balancing is intended for private-only application exposure.'
      },
      {
        topic: 'Load balancing',
        question: 'A company wants an external frontend with private backends. What pattern best fits?',
        options: ['External load balancer in front of private backends', 'Expose all backends to the internet', 'Use Cloud NAT for every backend', 'Place everything in one large subnet'],
        answer: 0,
        explanation: 'An external frontend load balancer reduces direct exposure of backends while still supporting client access.'
      },
      {
        topic: 'DNS',
        question: 'An internal app should resolve to internal IPs, while the public site resolves to the public IP. Which DNS pattern is best?',
        options: ['Split-horizon DNS', 'Cloud NAT DNS', 'Single public zone', 'Anycast-only DNS'],
        answer: 0,
        explanation: 'Split-horizon DNS gives different answers to internal and external users for the same name.'
      },
      {
        topic: 'DNS',
        question: 'Which DNS object is best suited for private service discovery inside a VPC?',
        options: ['Private DNS zone', 'Public DNS zone', 'Cloud NAT IP mapping', 'Cloud Router peer'],
        answer: 0,
        explanation: 'Private DNS zones are designed for internal-only name resolution inside a VPC or connected private networks.'
      },
      {
        topic: 'Security',
        question: 'A public API is under DDoS-like abuse and needs geo filtering, bot protections, and rate limiting. Which service is the best fit?',
        options: ['Cloud Armor', 'Cloud NAT', 'Cloud Router', 'Private Google Access'],
        answer: 0,
        explanation: 'Cloud Armor provides protections such as rate limiting, geography-based controls, and bot mitigation.'
      },
      {
        topic: 'Security',
        question: 'A private VM needs outbound internet access but should not receive a public IP. Which service should be enabled?',
        options: ['Cloud NAT', 'Cloud CDN', 'Cloud Router', 'Cloud DNS'],
        answer: 0,
        explanation: 'Cloud NAT allows egress without requiring a public IP address on the VM.'
      },
      {
        topic: 'Perimeter security',
        question: 'A company wants to protect sensitive Google Cloud services from data exfiltration and enforce a service boundary. Which feature is most relevant?',
        options: ['VPC Service Controls', 'Cloud NAT', 'Cloud Router', 'Load balancing policies'],
        answer: 0,
        explanation: 'VPC Service Controls establish service perimeters around sensitive data and services to reduce exfiltration risk.'
      },
      {
        topic: 'Monitoring',
        question: 'An on-prem network and GCP environment show intermittent latency. What should be investigated first?',
        options: ['Firewall policy, route tables, and BGP status', 'Billing account credits', 'Storage class settings', 'Project labels'],
        answer: 0,
        explanation: 'Route integrity, firewall policy, and BGP adjacency are primary issues in hybrid connectivity troubleshooting.'
      },
      {
        topic: 'Monitoring',
        question: 'A subnet can reach the internet but cannot reach another internal range. What is the most likely cause?',
        options: ['Missing or incorrect custom route', 'Egress quota exceeded', 'Cloud CDN invalidation', 'Wrong machine type'],
        answer: 0,
        explanation: 'If internet access works but the internal range does not, route selection or policy problems are usually the issue.'
      },
      {
        topic: 'Monitoring',
        question: 'An app tier cannot reach a database VM but can reach the internet. Which issue is most likely?',
        options: ['Ingress firewall rule mismatch between tiers', 'Cloud NAT outage', 'Bucket lifecycle policy', 'Private DNS TTL'],
        answer: 0,
        explanation: 'A firewall policy mismatch between tiers is a common cause when public access works but private path access fails.'
      },
      {
        topic: 'Cloud CDN',
        question: 'A platform needs to reduce user latency and lower origin load. Which service is best?',
        options: ['Cloud CDN', 'Cloud NAT', 'Cloud Router', 'Private Service Connect'],
        answer: 0,
        explanation: 'Cloud CDN pushes content closer to users and reduces the origin load.'
      },
      {
        topic: 'Cloud CDN',
        question: 'After updating a static web object, some users still see stale content. What is the best corrective measure?',
        options: ['Invalidate stale cache entries', 'Reset the project number', 'Disable Cloud NAT', 'Delete the load balancer'],
        answer: 0,
        explanation: 'Cache invalidation forces refreshed copies to be served instead of stale cached objects.'
      },
      {
        topic: 'GKE networking',
        question: 'Why is a VPC-native GKE cluster typically preferred over legacy cluster networking?',
        options: ['It integrates directly with VPC networking and pod IP allocation', 'It disables all firewall rules', 'It removes the need for subnets', 'It eliminates all cloud routers'],
        answer: 0,
        explanation: 'VPC-native clusters integrate more closely with the VPC and allocate pod IPs from network ranges.'
      },
      {
        topic: 'GKE networking',
        question: 'Which Kubernetes object is the usual entry point for routing HTTP and HTTPS traffic to your service?',
        options: ['Ingress', 'PersistentVolume', 'Service account', 'DaemonSet'],
        answer: 0,
        explanation: 'Ingress is the standard way to route HTTP/HTTPS traffic into workloads.'
      },
      {
        topic: 'Hybrid architecture',
        question: 'An enterprise wants dynamic route learning from on-prem to GCP instead of static route entries only. Which technology should be used?',
        options: ['Cloud Router with BGP', 'Cloud NAT', 'Private DNS', 'Cloud CDN'],
        answer: 0,
        explanation: 'Cloud Router with BGP supports dynamic route advertisement and learning for hybrid networking.'
      },
      {
        topic: 'Hybrid architecture',
        question: 'Why would a private connectivity product be preferred over a public connection for production traffic?',
        options: ['Better security, predictability, and lower exposure', 'It automatically disables firewall rules', 'It removes all need for IAM', 'It reduces the need for subnets'],
        answer: 0,
        explanation: 'Private connectivity reduces public exposure and improves predictability and performance for business-critical traffic.'
      },
      {
        topic: 'Design trade-offs',
        question: 'A business needs to expose a public web app while keeping the database private. Which is the best high-level design?',
        options: ['Public frontend or load balancer with private backends and database', 'Public database with public firewall rules', 'All tiers in a single public subnet', 'No firewall segmentation'],
        answer: 0,
        explanation: 'Public-facing frontends with private backends and database tiers are a common and secure network design.'
      },
      {
        topic: 'Design trade-offs',
        question: 'A network engineer wants to reduce attack surface while allowing controlled outbound internet access. Which pattern is preferred?',
        options: ['Private IPs with Cloud NAT for egress', 'External IPs on every workload', 'No firewall rules', 'Public database tier'],
        answer: 0,
        explanation: 'Private IPs + Cloud NAT allows controlled outbound internet access while limiting exposure.'
      },
      {
        topic: 'Security',
        question: 'Which control best preserves private connectivity to managed services while preventing public internet exposure?',
        options: ['Private Service Connect', 'Cloud NAT', 'Cloud CDN', 'Dynamic DNS'],
        answer: 0,
        explanation: 'Private Service Connect provides private access to Google-managed services without public internet exposure.'
      },
      {
        topic: 'Network review',
        question: 'A remote branch office must confirm whether it can reach a target VPC service and whether the route is valid. Which diagnostic is most relevant?',
        options: ['Connectivity diagnostics and route validation', 'Billing export review', 'Project ownership check', 'Storage class review'],
        answer: 0,
        explanation: 'Route validation and connectivity diagnostics directly answer whether the path is valid and reachable.'
      },
      {
        topic: 'Network review',
        question: 'Which combination is most useful when diagnosing hybrid connectivity issues?',
        options: ['Firewall policy, route tables, and BGP peer state', 'Disk capacity and VM family', 'Bucket labels only', 'Cloud CDN headers'],
        answer: 0,
        explanation: 'Hybrid issues often come from firewall policy, path routing, and BGP peer health.'
      },
      {
        topic: 'Interconnect',
        question: 'A workload needs predictable latency and a private, high-bandwidth path between data centers and GCP. Which product is preferable?',
        options: ['Dedicated Interconnect', 'Cloud NAT', 'Cloud Armor', 'Cloud CDN'],
        answer: 0,
        explanation: 'Dedicated Interconnect is designed for predictable, private, high-bandwidth network paths.'
      },
      {
        topic: 'Interconnect',
        question: 'A company wants maximum resilience for its hybrid connectivity without a dedicated circuit. Which choice is typically used?',
        options: ['HA VPN', 'Cloud CDN', 'Cloud NAT', 'Public DNS'],
        answer: 0,
        explanation: 'HA VPN is a resilient pattern using redundant tunnels and is well-suited when dedicated circuits are not needed.'
      },
      {
        topic: 'Private Google access',
        question: 'A VM without external IP needs to reach Google APIs over private networking. Which design is correct?',
        options: ['Enable Private Google Access on subnet', 'Assign an external IP to the VM', 'Use a public load balancer', 'Disable firewall rules'],
        answer: 0,
        explanation: 'Private Google Access is the correct design for private API connectivity without public IPs.'
      },
      {
        topic: 'Firewall policy',
        question: 'The application team wants to block all inbound traffic except SSH from a bastion subnet. Which configuration is correct?',
        options: ['Deny all ingress, then allow only bastion subnet to tcp:22', 'Allow all ingress to tcp:22', 'Allow egress only', 'Create no firewall rules'],
        answer: 0,
        explanation: 'A deny-all default and a narrow allow rule is the standard secure configuration for bastion access.'
      },
      {
        topic: 'Cloud Router',
        question: 'A customer has multiple external peers and needs route learning for dynamic failover. What should be configured?',
        options: ['Cloud Router with BGP and multiple peers', 'Private DNS only', 'Firewall allow all', 'Cloud NAT on all peers'],
        answer: 0,
        explanation: 'Cloud Router with BGP allows dynamic route exchange and failover across multiple peers.'
      },
      {
        topic: 'Shared VPC',
        question: 'What is the primary benefit of Shared VPC to a large organization?',
        options: ['Centralized administration and standard network policy', 'Automatic encryption of all traffic', 'Internet access for every subnet by default', 'No need for firewall rules'],
        answer: 0,
        explanation: 'Shared VPC provides centralized control and consistent network policy across multiple projects.'
      }
    ];

    const domainNames = [
      'VPC & Subnetting',
      'Routing & BGP',
      'Hybrid Connectivity',
      'Security & Firewall',
      'DNS & Load Balancing',
      'Monitoring & Troubleshooting',
      'Private Access & Service Controls'
    ];

    const bank = [];
    for (let i = 0; i < 200; i += 1) {
      const base = templates[i % templates.length];
      const domain = domainNames[i % domainNames.length];
      const difficulty = (i + 1) % 5 === 0 ? 'hard' : 'standard';
      bank.push({
        ...base,
        domain,
        difficulty,
        explanation: `${base.explanation} This is an official-style exam review item.`
      });
    }
    return bank;
  })();

  const bankCountEl = document.getElementById('bankCount');
  if (bankCountEl) bankCountEl.textContent = questionBank.length;

  let currentExam = [];
  let currentIndex = 0;
  let selectedAnswers = [];
  let examFinished = false;
  let showCorrectAnswer = false;
  let examSize = 30;
  let examTimerId = null;
  let examTimeLeft = 0;
  let hardModeEnabled = false;

  const shuffleArray = (array) => {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  const formatTime = (seconds) => {
    const mins = Math.max(0, Math.floor(seconds / 60));
    const secs = Math.max(0, seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const updateTimerDisplay = () => {
    const base = currentExam.length ? `${currentIndex + 1} / ${currentExam.length}` : '0 / 0';
    practiceTimerEl.textContent = `${base} • ${formatTime(examTimeLeft)}`;
  };

  const stopExamTimer = () => {
    if (examTimerId) {
      clearInterval(examTimerId);
      examTimerId = null;
    }
  };

  const getExamPool = (domainName = examDomainSelect.value) => {
    const selectedDomain = domainName || 'all';
    let pool = selectedDomain === 'all'
      ? questionBank
      : questionBank.filter((question) => question.domain === selectedDomain);

    if (hardModeEnabled) {
      const hardPool = pool.filter((question) => question.difficulty === 'hard');
      pool = hardPool.length ? hardPool : pool;
    }

    return pool;
  };

  const generatePracticeExam = (size) => {
    examSize = size;
    const selectedDomain = examDomainSelect.value;
    const pool = getExamPool(selectedDomain);
    const shuffled = shuffleArray(pool);
    const questionLimit = Math.min(size, shuffled.length || size);
    currentExam = shuffled.slice(0, questionLimit);
    selectedAnswers = Array(questionLimit).fill(null);
    currentIndex = 0;
    examFinished = false;
    showCorrectAnswer = false;

    const examDurationMinutes = size >= 50 ? 120 : 60;
    examTimeLeft = examDurationMinutes * 60;

    stopExamTimer();
    practiceStatusEl.textContent = 'In progress';
    examSummaryEl.classList.add('hidden');
    practiceExamEl.classList.remove('hidden');
    updateTimerDisplay();

    const examModeLabel = document.getElementById('examModeLabel');
    if (examModeLabel) examModeLabel.textContent = `${selectedDomain === 'all' ? size : `${selectedDomain.substring(0, 10)}...`} Q`;

    examTimerId = setInterval(() => {
      if (examFinished) {
        stopExamTimer();
        return;
      }

      examTimeLeft -= 1;
      if (examTimeLeft <= 0) {
        examTimeLeft = 0;
        updateTimerDisplay();
        stopExamTimer();
        finishExam('Time expired');
        return;
      }

      updateTimerDisplay();
    }, 1000);

    renderQuestion();
  };

  const renderQuestion = () => {
    if (!currentExam.length) return;

    const q = currentExam[currentIndex];
    updateTimerDisplay();
    const percent = ((currentIndex + 1) / currentExam.length) * 100;
    progressBarEl.style.width = `${percent}%`;

    const selected = selectedAnswers[currentIndex];

    questionCardEl.innerHTML = `
      <div class="question-meta">
        <span>Topic: ${q.topic}</span>
        <span>Question ${currentIndex + 1}</span>
      </div>
      <h3>${q.question}</h3>
      <div class="answers">
        ${q.options
          .map((option, index) => {
            const optionClasses = [
              'answer-option',
              selected === index ? 'selected' : '',
              showCorrectAnswer && index === q.answer ? 'correct' : '',
              showCorrectAnswer && selected === index && selected !== q.answer ? 'wrong' : ''
            ].filter(Boolean).join(' ');

            return `
              <button class="${optionClasses}" type="button" data-index="${index}">
                <span class="answer-label">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
              </button>
            `;
          })
          .join('')}
      </div>
      ${showCorrectAnswer ? `<div class="explanation"><strong>Correct answer:</strong> ${q.options[q.answer]}<br>${q.explanation}</div>` : ''}
    `;

    questionCardEl.querySelectorAll('.answer-option').forEach((button) => {
      button.addEventListener('click', () => {
        const choice = Number(button.dataset.index);
        selectedAnswers[currentIndex] = choice;
        renderQuestion();
      });
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent = currentIndex === currentExam.length - 1 ? 'Finish' : 'Next';
  };

  const calculateScore = () => {
    const answered = selectedAnswers.filter((value) => value !== null && value !== undefined).length;
    const correct = currentExam.reduce((count, question, index) => count + (selectedAnswers[index] === question.answer ? 1 : 0), 0);

    return { answered, correct, total: currentExam.length, percent: Math.round((correct / currentExam.length) * 100) };
  };

  const getDomainBreakdown = () => {
    const summary = {};

    currentExam.forEach((question, index) => {
      const domain = question.domain;
      const isCorrect = selectedAnswers[index] === question.answer;

      if (!summary[domain]) {
        summary[domain] = { total: 0, correct: 0 };
      }

      summary[domain].total += 1;
      if (isCorrect) summary[domain].correct += 1;
    });

    return Object.entries(summary).map(([domain, stats]) => ({
      domain,
      total: stats.total,
      correct: stats.correct,
      percent: Math.round((stats.correct / stats.total) * 100)
    }));
  };

  const getPerformanceBand = (percent) => {
    if (percent >= 85) return 'Excellent';
    if (percent >= 70) return 'Strong';
    if (percent >= 55) return 'Borderline';
    return 'Needs improvement';
  };

  const getWeakDomains = (breakdown) => {
    return breakdown
      .filter((item) => item.percent < 70)
      .sort((a, b) => a.percent - b.percent)
      .slice(0, 3)
      .map((item) => item.domain);
  };

  const finishExam = (statusMessage = 'Completed') => {
    examFinished = true;
    const result = calculateScore();
    const domainBreakdown = getDomainBreakdown();
    const performanceBand = getPerformanceBand(result.percent);
    const weakDomains = getWeakDomains(domainBreakdown);
    const reviewRows = currentExam.map((question, index) => {
      const selected = selectedAnswers[index];
      const selectedText = selected === null || selected === undefined ? 'No answer' : question.options[selected];
      const correctText = question.options[question.answer];
      const isCorrect = selected === question.answer;

      return `
        <li class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
          <div class="review-header">
            <strong>Q${index + 1}</strong>
            <span>${question.domain}</span>
          </div>
          <p>${question.question}</p>
          <div class="review-answer-line">Selected: ${selectedText}</div>
          <div class="review-answer-line">Correct: ${correctText}</div>
        </li>
      `;
    }).join('');

    practiceStatusEl.textContent = statusMessage;
    practiceExamEl.classList.add('hidden');
    examSummaryEl.classList.remove('hidden');
    examSummaryEl.innerHTML = `
      <h3>Exam summary</h3>
      <div class="score">${result.correct}/${result.total}</div>
      <div class="performance-band ${performanceBand.toLowerCase().replace(/\s+/g, '-')}">${performanceBand}</div>
      <p>${statusMessage === 'Completed' ? 'You answered' : 'Time expired after'} ${result.correct} out of ${result.total} questions correctly.</p>
      <p>Accuracy: ${result.percent}%</p>
      <p>Questions answered: ${result.answered}/${result.total}</p>

      <div class="weak-domains">
        <strong>Priority review:</strong>
        ${weakDomains.length ? weakDomains.join(', ') : 'No major weak domains detected'}
      </div>

      <div class="domain-breakdown">
        ${domainBreakdown.map((item) => `
          <div class="domain-score">
            <div class="domain-score-top">
              <span>${item.domain}</span>
              <strong>${item.correct}/${item.total}</strong>
            </div>
            <div class="domain-score-bar"><span style="width:${item.percent}%"></span></div>
          </div>
        `).join('')}
      </div>

      <div class="review-panel">
        <h4>Final review</h4>
        <ul class="review-list">${reviewRows}</ul>
      </div>

      <button class="button primary small" id="retakeExamBtn" type="button">Retake exam</button>
    `;

    document.getElementById('retakeExamBtn').addEventListener('click', () => generatePracticeExam(examSize));
  };

  startExamBtn.addEventListener('click', () => generatePracticeExam(examSize));
  showAnswerBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    showCorrectAnswer = !showCorrectAnswer;
    renderQuestion();
  });

  nextBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    if (currentIndex < currentExam.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      finishExam();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  resetExamBtn.addEventListener('click', () => {
    stopExamTimer();
    currentExam = [];
    currentIndex = 0;
    selectedAnswers = [];
    examFinished = false;
    showCorrectAnswer = false;
    practiceExamEl.classList.add('hidden');
    examSummaryEl.classList.add('hidden');
    practiceStatusEl.textContent = 'Ready';
    practiceTimerEl.textContent = '0 / 0 • 00:00';
    progressBarEl.style.width = '0%';
  });

  generate30Btn.addEventListener('click', () => generatePracticeExam(30));
  generate50Btn.addEventListener('click', () => generatePracticeExam(50));

  hardModeBtn.addEventListener('click', () => {
    hardModeEnabled = !hardModeEnabled;
    hardModeBtn.classList.toggle('is-active', hardModeEnabled);
    hardModeBtn.setAttribute('aria-pressed', String(hardModeEnabled));
    hardModeBtn.textContent = hardModeEnabled ? 'Hard mode on' : 'Hard mode';

    if (currentExam.length) {
      generatePracticeExam(examSize);
    }
  });

  examDomainSelect.addEventListener('change', () => {
    if (currentExam.length) {
      generatePracticeExam(examSize);
    }
  });
};

setupLanguage();
setupTheme();
setupChecklist();
setupResourceFilters();
setupExam();
