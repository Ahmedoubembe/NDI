export const VILLAGE_BUILDINGS = [
  {
    id: 'home',
    name: 'Place du Village',
    description: 'Le coeur du village NIRD',
    icon: '🏛️',
    route: '/',
    position: { x: 50, y: 50 },
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'bigtech',
    name: 'Tour des Géants',
    description: 'Comprendre la domination Big Tech',
    icon: '🏰',
    route: '/bigtech',
    position: { x: 20, y: 30 },
    color: 'from-red-500 to-rose-700'
  },
  {
    id: 'nird',
    name: 'Temple du Savoir',
    description: 'Découvrir NIRD et ses piliers',
    icon: '🏛️',
    route: '/nird',
    position: { x: 80, y: 35 },
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'actions',
    name: 'Forge des Actions',
    description: 'Actions concrètes pour résister',
    icon: '⚒️',
    route: '/actions',
    position: { x: 35, y: 70 },
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'community',
    name: 'Agora des Résistants',
    description: 'Rejoindre la communauté',
    icon: '🤝',
    route: '/community',
    position: { x: 65, y: 75 },
    color: 'from-purple-500 to-violet-600'
  }
];

export const NIRD_PILLARS = [
  {
    id: 'inclusion',
    name: 'Inclusion',
    description: 'Un numérique accessible à tous',
    icon: '🌐',
    color: 'from-blue-400 to-cyan-500',
    values: [
      'Accessibilité universelle',
      'Fracture numérique réduite',
      'Éducation pour tous',
      'Interfaces adaptées'
    ]
  },
  {
    id: 'responsabilite',
    name: 'Responsabilité',
    description: 'Éthique et respect des données',
    icon: '🛡️',
    color: 'from-green-400 to-emerald-500',
    values: [
      'Protection des données',
      'Souveraineté numérique',
      'Transparence algorithmique',
      'Logiciels libres'
    ]
  },
  {
    id: 'durabilite',
    name: 'Durabilité',
    description: 'Un numérique soutenable',
    icon: '♻️',
    color: 'from-amber-400 to-orange-500',
    values: [
      'Sobriété numérique',
      'Réemploi du matériel',
      'Économie circulaire',
      'Empreinte carbone réduite'
    ]
  }
];

export const BIG_TECH_ISSUES = [
  {
    id: 'monopole',
    title: 'Monopoles & Domination',
    description: 'Contrôle du marché par quelques géants',
    icon: '👑',
    impact: 'high'
  },
  {
    id: 'donnees',
    title: 'Exploitation des Données',
    description: 'Vos données = leur business model',
    icon: '🔍',
    impact: 'high'
  },
  {
    id: 'dependance',
    title: 'Dépendance Technologique',
    description: 'Enfermement propriétaire',
    icon: '🔒',
    impact: 'medium'
  },
  {
    id: 'environnement',
    title: 'Impact Environnemental',
    description: 'Datacenters et obsolescence programmée',
    icon: '🌍',
    impact: 'high'
  },
  {
    id: 'surveillance',
    title: 'Surveillance de Masse',
    description: 'Capitalisme de surveillance',
    icon: '👁️',
    impact: 'high'
  }
];

export const ACTIONS = [
  {
    category: 'Logiciels Libres',
    icon: '🐧',
    items: [
      { name: 'Adopter Linux', difficulty: 'medium', impact: 'high' },
      { name: 'Utiliser LibreOffice', difficulty: 'easy', impact: 'medium' },
      { name: 'Firefox au lieu de Chrome', difficulty: 'easy', impact: 'medium' }
    ]
  },
  {
    category: 'Sobriété Numérique',
    icon: '🌱',
    items: [
      { name: 'Nettoyer ses emails', difficulty: 'easy', impact: 'low' },
      { name: 'Limiter le streaming HD', difficulty: 'easy', impact: 'medium' },
      { name: 'Désactiver autoplay vidéo', difficulty: 'easy', impact: 'low' }
    ]
  },
  {
    category: 'Réemploi & Réparation',
    icon: '♻️',
    items: [
      { name: 'Acheter reconditionné', difficulty: 'easy', impact: 'high' },
      { name: 'Réparer au lieu de jeter', difficulty: 'medium', impact: 'high' },
      { name: 'Donner son ancien matériel', difficulty: 'easy', impact: 'medium' }
    ]
  },
  {
    category: 'Protection des Données',
    icon: '🔐',
    items: [
      { name: 'Utiliser un VPN', difficulty: 'easy', impact: 'medium' },
      { name: 'Chiffrer ses communications', difficulty: 'medium', impact: 'high' },
      { name: 'Moteurs de recherche respectueux', difficulty: 'easy', impact: 'low' }
    ]
  }
];

export const TIMELINE_EVENTS = [
  { year: '1990s', title: 'Web Ouvert', description: 'Espoir d\'un web décentralisé' },
  { year: '2000s', title: 'Rise des GAFAM', description: 'Centralisation progressive' },
  { year: '2010s', title: 'Surveillance', description: 'Révélations Snowden' },
  { year: '2020s', title: 'Résistance', description: 'Mouvement NIRD et alternatives' },
  { year: '2030s', title: 'Futur Souhaité', description: 'Numérique libre et durable' }
];
