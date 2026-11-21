export type ProjectCategory = 'Robotics' | 'Digital Media' | 'Leadership' | 'Literacy';

export interface SkillItem {
  id: string;
  name: string;
  shortLabel: string;
  category: string;
  bgColor: string;
  textColor?: string;
  summary: string;
  usedIn: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  highlight: string;
  details: string;
  teamSize?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  period: string;
  role: string;
  teamSize: string;
  shortDescription: string;
  fullDescription: string;
  outcome: string;
  tools: string[];
  deliverables: string[];
  tiltClass: string;
  tapeTiltClass: string;
  staggerOffset?: boolean;
}

export interface CompetencyItem {
  number: string;
  title: string;
  tools: string;
  description: string;
  tiltClass: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  institution: string;
  category: string;
}

export const IMAGES = {
  stickerPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuABFykRIAFYL669Tfgtm0NJWcdrHKIacrTIF98HvmqdjLXxbS-6qHk4PNuvbarp1QO-1NYlohCfL1UpKhGa91DHq5X6okV6jSLz7orjuVjTI6dLAQgt161LlsNfyufwbbFLKsgkNgwRkLxayTOb_UiiGChfeNwSEbXkNaQhHD4oz_xryRZHaeAFGDnuv2aDNOPcA0ecnXvSGbInNgGnEiE0H7-FsEonCHqBdxiyEmUiOgbdq1sNye67',
  fullBodyPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7UC1-IRcEg91v0rS-JDVHr37s3G_dniOyn-m1zuMwo-ZMlDVmOF9ejcqIHI0uo-eqb4OAz075bpqlmAm8gNGyME_ZmBYTsVS_HaAzty9XMYSjNubts6KRrhS95NDRHr3xOIppSkwVMlCAeZqHn_H52qpTHtWJvSmXpdyLbDGUMrGdzAFiBDcwO7ALpxyJu8uY5ol5TIjz-sr_MD29rp6vGC1HDT0af5ppEP0ERw4g6yChgLXyaK6G',
};

export const PROFILE = {
  name: 'Meisya Ramadhani',
  initials: 'MR.26',
  tagline: 'ROBOTICS / DIGITAL MEDIA / LEADERSHIP',
  year: '2026',
  location: 'Bangkinang Kota, Riau',
  email: 'meisya.ramadhani0808@gmail.com',
  whatsappUrl: 'https://wa.me/6281234567890',
  education: {
    school: 'SMA Negeri Plus Provinsi Riau',
    track: 'IPA Murni (Natural Sciences)',
    score: '90/100',
    period: '2023 – 2026',
    city: 'Pekanbaru, Riau',
  },
  introLead:
    "Hi, I'm Meisya Ramadhani — a graduate of SMA Negeri Plus Provinsi Riau with a strong passion for robotics, digital media production, and student leadership.",
  introBody:
    'Experienced in leading cross-functional student teams (8–10 members), building and programming autonomous line-tracking robots, producing institutional promotional videos, and championing school-wide literacy initiatives. Driven to contribute dedication, continuous learning, and impactful execution in technical and corporate environments such as PT PLN (Persero).',
};

export const SKILLS: SkillItem[] = [
  {
    id: 'cpp',
    name: 'C++',
    shortLabel: 'C++',
    category: 'Embedded & Logic',
    bgColor: '#00599C',
    summary: 'Sensor calibration, PID tuning, and microcontroller control loops for competition robotics.',
    usedIn: 'Autonomous Line Tracking Robot (Juara 2 PCR)',
  },
  {
    id: 'python',
    name: 'Python',
    shortLabel: 'PY',
    category: 'Scripting & Automation',
    bgColor: '#1E293B',
    summary: 'Algorithmic problem solving, automation prototyping, and data utilities.',
    usedIn: 'Automation Essay & Robotics Prototyping',
  },
  {
    id: 'js',
    name: 'JavaScript / HTML',
    shortLabel: 'JS',
    category: 'Web & Publication',
    bgColor: '#F7DF1E',
    textColor: '#111111',
    summary: 'Interactive web pages, digital publication hubs, and student admission portals.',
    usedIn: 'PPDB & School Digital Information Hub',
  },
  {
    id: 'figma',
    name: 'Figma',
    shortLabel: 'FIG',
    category: 'UI & Visual Layout',
    bgColor: '#1E1E1E',
    summary: 'Editorial layout systems, digital posters, and UI wireframing for school media.',
    usedIn: 'OSIS TIK Publications & Portfolio Design',
  },
  {
    id: 'm365',
    name: 'Microsoft 365',
    shortLabel: 'M365',
    category: 'Operations & Cloud',
    bgColor: '#EA3E23',
    summary: 'Collaborative documentation, team schedules, and project tracking across student boards.',
    usedIn: 'PPDB & Bahana Team Coordination',
  },
  {
    id: 'ae',
    name: 'Adobe After Effects',
    shortLabel: 'Ae',
    category: 'Motion & Compositing',
    bgColor: '#00005B',
    textColor: '#9999FF',
    summary: 'Motion graphics, kinetic typography, title sequences, and visual polish.',
    usedIn: 'School Library Profile Video',
  },
  {
    id: 'office',
    name: 'Microsoft Office',
    shortLabel: 'OFF',
    category: 'Reporting & Proposals',
    bgColor: '#D83B01',
    summary: 'Structured competition essays, event proposals, and executive slide decks.',
    usedIn: 'Lomba Esai Otomasi & Student Governance',
  },
  {
    id: 'arduino',
    name: 'Arduino IDE',
    shortLabel: 'ARD',
    category: 'Hardware Integration',
    bgColor: '#00979D',
    summary: 'Firmware flashing, motor driver control, IR sensor arrays, and serial debugging.',
    usedIn: 'Organisasi Robotik SMAN Plus Riau',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'robotik-club',
    period: '2025–2026',
    role: 'Ketua Robotik Club',
    organization: 'Organisasi Robotik SMAN Plus Provinsi Riau',
    highlight: 'Led 10 members, C++/Arduino, Juara 2 PCR',
    teamSize: '10 members',
    details:
      'Directed weekly hardware workshops, sensor calibration sprints, and competition readiness, culminating in 2nd Place at the Politeknik Caltex Riau Line Tracking Robot Competition.',
  },
  {
    id: 'video-profil',
    period: '2025–2026',
    role: 'Ketua Panitia Video Profil Perpustakaan',
    organization: 'SMAN Plus Provinsi Riau',
    highlight: 'Led 8 members, After Effects & CapCut',
    teamSize: '8 members',
    details:
      'Managed concepting, scriptwriting, on-campus cinematography, and post-production motion graphics to showcase library facilities and student literacy programs.',
  },
  {
    id: 'osis-tik',
    period: '2024–2025',
    role: 'Ketua Seksi Bidang TIK',
    organization: 'OSIS SMAN Plus Provinsi Riau',
    highlight: 'Led 8 members, digital publication & school tech',
    teamSize: '8 members',
    details:
      'Oversaw official student council visual media, event documentation, and digital announcement pipelines across major school programs.',
  },
  {
    id: 'bahana',
    period: '2024–2025',
    role: 'Ketua Umum',
    organization: 'Organisasi Bahana (Buah Pena Anak Plus)',
    highlight: 'Led 8 members, literacy & writing programs',
    teamSize: '8 members',
    details:
      'Guided editorial curation, student writing workshops, and creative anthology publishing to strengthen campus reading and writing culture.',
  },
  {
    id: 'ppdb-tik',
    period: '2024–2025',
    role: 'Ketua Bidang TIK',
    organization: 'Panitia Penerimaan Murid Baru (PPDB)',
    highlight: 'Led 10 members',
    teamSize: '10 members',
    details:
      'Coordinated admission information hubs, applicant support channels, and real-time registration media assets for incoming student cohorts.',
  },
  {
    id: 'duta-literasi',
    period: '2024–2025',
    role: 'Duta Literasi',
    organization: 'SMAN Plus Provinsi Riau',
    highlight: 'School literacy ambassador & public speaker',
    details:
      'Represented the school in literacy advocacy, curated reading challenges, and promoted cross-disciplinary communication skills.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'line-tracking-robot',
    title: 'Autonomous Line Tracking Robot',
    category: 'Robotics',
    period: '2025–2026',
    role: 'Ketua Robotik Club',
    teamSize: '10 Members',
    shortDescription:
      'Designed, assembled, and programmed an autonomous line-tracking robot with a 10-member team, securing 2nd Place (Juara 2) at Politeknik Caltex Riau.',
    fullDescription:
      'Led end-to-end engineering of a high-speed autonomous line-tracking robot built for competitive track navigation. Coordinated chassis fabrication, IR array calibration, motor driver tuning, and C++ control algorithms under competition time constraints.',
    outcome: 'Secured 2nd Place (Juara 2) at Line Tracking Robot Competition — Politeknik Caltex Riau (2026).',
    tools: ['C++', 'Arduino IDE', 'PID Control', 'Hardware Assembly'],
    deliverables: [
      'Custom IR sensor array & calibration routine',
      'Embedded C++ navigation & speed tuning firmware',
      '10-member team training & competition runbook',
    ],
    tiltClass: '-rotate-[1.8deg]',
    tapeTiltClass: 'rotate-1',
    staggerOffset: false,
  },
  {
    id: 'library-profile-video',
    title: 'School Library Profile Video',
    category: 'Digital Media',
    period: '2025–2026',
    role: 'Ketua Panitia',
    teamSize: '8 Members',
    shortDescription:
      "Directed an 8-member production crew from storyboarding to post-production to showcase the school library's facilities and literacy culture.",
    fullDescription:
      'Produced an institutional profile film highlighting the architectural spaces, archival collections, and student study culture of SMA Negeri Plus Provinsi Riau Library. Managed shooting schedules, camera framing, voiceover pacing, and kinetic title cards.',
    outcome: 'Delivered official library showcase film adopted for school orientation and accreditation reviews.',
    tools: ['After Effects', 'CapCut', 'Storyboarding', 'Motion Graphics'],
    deliverables: [
      'Full production storyboard & shot list',
      'Multi-scene campus video capture & audio mixing',
      'After Effects title animations & final color grade',
    ],
    tiltClass: 'rotate-[1.5deg]',
    tapeTiltClass: '-rotate-2',
    staggerOffset: true,
  },
  {
    id: 'ppdb-digital-hub',
    title: 'PPDB & School Digital Information Hub',
    category: 'Leadership',
    period: '2024–2025',
    role: 'Ketua Bidang TIK OSIS & PPDB',
    teamSize: '10 Members',
    shortDescription:
      'Coordinated digital publications, student admission information systems, and cross-division tech support for school-wide events.',
    fullDescription:
      'Spearheaded the technical communication unit for both OSIS and the New Student Admissions Committee (PPDB). Standardized publication templates, streamlined applicant FAQ broadcasts, and orchestrated live technical operations during school assemblies.',
    outcome: 'Zero-bottleneck digital rollout supporting hundreds of prospective students and school events.',
    tools: ['Digital Publication', 'Figma', 'HTML/JS', 'Team Coordination'],
    deliverables: [
      'Unified digital admission guide & visual campaign',
      'Cross-division task delegation matrix for 10 staff',
      'Live event media & AV technical checklist',
    ],
    tiltClass: 'rotate-[1.2deg]',
    tapeTiltClass: 'rotate-2',
    staggerOffset: false,
  },
  {
    id: 'bahana-literacy',
    title: 'Bahana Literacy & Publishing Movement',
    category: 'Literacy',
    period: '2024–2025',
    role: 'Ketua Umum & Duta Literasi',
    teamSize: '8 Members',
    shortDescription:
      'Led Organisasi Bahana (Buah Pena Anak Plus) to cultivate student writing, editorial curation, and school-wide literacy campaigns.',
    fullDescription:
      'Revitalized student publishing initiatives through structured writing clinics, peer editorial reviews, and public speaking showcases. Bridged creative writing with technical essay preparation, culminating in national-level cultural representation.',
    outcome: 'Represented Riau Province at Jambore Budaya Bahasa Nasional (Malang) & won Juara 2 Lomba Esai Otomasi.',
    tools: ['Technical Writing', 'Editorial Curation', 'Public Speaking', 'MS Office'],
    deliverables: [
      'Student writing curriculum & anthology curation',
      'School-wide literacy advocacy & reading events',
      'Automation essay research & competitive drafting',
    ],
    tiltClass: '-rotate-[1.5deg]',
    tapeTiltClass: '-rotate-1',
    staggerOffset: true,
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    number: '01.',
    title: 'ROBOTICS & PROGRAMMING',
    tools: 'C++, Arduino IDE, Python, HTML/JS',
    description: 'Hardware-software integration, microcontroller logic, and structured scripting.',
    tiltClass: '-rotate-1',
  },
  {
    number: '02.',
    title: 'MULTIMEDIA PRODUCTION',
    tools: 'After Effects, CapCut, Figma, Canva',
    description: 'Motion storytelling, editorial poster layout, and institutional video direction.',
    tiltClass: 'rotate-1',
  },
  {
    number: '03.',
    title: 'TEAM & PROJECT LEADERSHIP',
    tools: 'Scheduling, Task Delegation, Evaluation',
    description: 'Directing 8–10 member student teams from blueprint planning to live delivery.',
    tiltClass: '-rotate-1',
  },
  {
    number: '04.',
    title: 'COMMUNICATION & LITERACY',
    tools: 'Technical Writing, Public Speaking, MS Office',
    description: 'Award-winning essay composition, bilingual presentation, and structured reporting.',
    tiltClass: 'rotate-1',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2026',
    title: 'Semifinalis — Industrial Case Nasional',
    institution: 'Institut Teknologi Bandung (ITB)',
    category: 'Case Competition',
  },
  {
    year: '2026',
    title: 'Juara 2 — Line Tracking Robot Competition',
    institution: 'Politeknik Caltex Riau',
    category: 'Robotics',
  },
  {
    year: '2025',
    title: 'Juara 2 — Lomba Esai Otomasi',
    institution: 'Politeknik Caltex Riau',
    category: 'Technical Writing',
  },
  {
    year: '2024',
    title: 'Delegasi Provinsi Riau — Jambore Budaya Bahasa Nasional',
    institution: 'Malang, Jawa Timur',
    category: 'Literacy & Culture',
  },
  {
    year: '2024–2025',
    title: 'Duta Literasi SMA Negeri Plus Provinsi Riau',
    institution: 'Pekanbaru, Riau',
    category: 'Leadership',
  },
];
