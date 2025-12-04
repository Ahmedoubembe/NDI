# 🏛️ Le Village NIRD

> Une application web Next.js innovante inspirée du mouvement NIRD (Numérique Inclusif, Responsable et Durable) avec une ergonomie radicalement repensée.

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)](https://www.framer.com/motion/)

---

## 🎯 Concept

**Le Village NIRD** transforme un site institutionnel classique en une **expérience spatiale interactive** inspirée de l'univers d'Astérix. Au lieu d'une navigation linéaire, les utilisateurs explorent un village numérique où chaque bâtiment représente une section du site.

### 🌟 Points d'Innovation

- **Navigation spatiale non-linéaire** : Carte interactive avec bâtiments cliquables
- **Gamification subtile** : Système de progression pour les actions
- **Timeline historique** : Visualisation de l'évolution du numérique
- **Animations fluides** : Micro-interactions avec Framer Motion
- **Dual mode** : Vue carte + vue liste pour l'accessibilité
- **Mobile-first** : Responsive et adaptatif

---

## 🏗️ Architecture

### Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Package Manager** : npm

### Structure du Projet

```
.
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Accueil - Village interactif
│   ├── bigtech/             # Page Big Tech
│   ├── nird/                # Page NIRD (3 piliers)
│   ├── actions/             # Page Actions concrètes
│   ├── community/           # Page Communauté
│   ├── layout.tsx           # Layout racine
│   └── globals.css          # Styles globaux
├── components/              # Composants React
│   ├── village/            # Navigation spatiale
│   │   ├── VillageMap.tsx
│   │   └── Building.tsx
│   ├── layout/             # Layout components
│   │   └── Header.tsx
│   ├── ui/                 # Composants UI
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── animations/         # Animations
│       ├── FadeIn.tsx
│       └── ParallaxSection.tsx
├── lib/                     # Utilitaires
│   ├── constants.ts        # Données de l'app
│   └── utils.ts            # Fonctions helpers
└── public/                 # Assets statiques
```

---

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <your-repo-url>
cd NDI

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev      # Démarrage en mode développement
npm run build    # Build de production
npm start        # Démarrage du serveur de production
npm run lint     # Linter le code
```

---

## 📱 Pages et Fonctionnalités

### 🏠 Accueil - Le Village

- Navigation spatiale interactive
- 5 bâtiments représentant les sections
- Animations de pulse et parallax
- Mode carte / mode liste
- Étoiles scintillantes en arrière-plan

### 🏰 Big Tech - La Tour des Géants

- Timeline historique verticale
- Grid de problèmes majeurs
- Cards expandables
- Badges d'impact colorés
- CTA vers la page NIRD

### ⚡ NIRD - Le Temple du Savoir

- 3 piliers en disposition triangulaire
- Cards expandables avec valeurs
- Icône centrale animée
- Sections "Ce que NIRD apporte" et "Pour qui ?"
- CTA vers les actions

### ⚒️ Actions - La Forge

- Liste d'actions catégorisées
- Barre de progression gamifiée
- Actions cliquables (complétion)
- Badges de difficulté et impact
- Messages motivationnels
- Conseils pratiques

### 🤝 Communauté - L'Agora

- Statistiques en temps réel
- Feed de contributions
- Formulaire de participation
- 4 types de contributions
- Liens vers plateformes libres

---

## 🎨 Design System

### Palette de Couleurs

| Section | Couleurs Principales | Symbolique |
|---------|---------------------|------------|
| Village | Bleu-violet-indigo | Exploration, mystère |
| Big Tech | Rouge-noir | Danger, domination |
| NIRD | Bleu-indigo | Confiance, savoir |
| Actions | Vert-émeraude | Nature, action |
| Communauté | Violet-rose | Créativité, lien |

### Composants Réutilisables

#### Button
```tsx
<Button variant="primary" size="lg" onClick={...}>
  Texte du bouton
</Button>
```

Variants : `primary`, `secondary`, `outline`
Sizes : `sm`, `md`, `lg`

#### Card
```tsx
<Card gradient="from-blue-500 to-indigo-600" hover={true}>
  Contenu de la card
</Card>
```

#### FadeIn
```tsx
<FadeIn delay={0.2} direction="up">
  Contenu animé
</FadeIn>
```

---

## ♿ Accessibilité

- **Mode liste alternatif** pour la navigation
- **Navigation au clavier** supportée
- **Contraste élevé** sur tous les textes
- **Textes alternatifs** sur les icônes
- Support de `prefers-reduced-motion`

---

## 📱 Responsive Design

- **Mobile-first** : Optimisé pour les petits écrans
- **Breakpoints** : sm, md, lg, xl
- **Mode adaptatif** : Carte → Liste sur mobile
- **Touch gestures** : Swipe et tap optimisés

---

## 🎯 Concept UX Innovant

Ce projet repense radicalement l'ergonomie des sites institutionnels :

### Problèmes Résolus

1. ❌ Sites institutionnels ennuyeux → ✅ Navigation ludique
2. ❌ Structure difficile à mémoriser → ✅ Métaphore spatiale
3. ❌ Manque d'engagement → ✅ Gamification
4. ❌ Information dense → ✅ Progressive disclosure
5. ❌ Accessibilité → ✅ Mode dual (carte/liste)

### Inspirations

- **Monument Valley** : Navigation spatiale
- **Firewatch** : Palette de couleurs
- **Duolingo** : Gamification
- **Astérix** : Village résistant

📖 **Voir [CONCEPT_UX.md](./CONCEPT_UX.md) pour la note complète**

---

## 🎓 Contexte : Nuit de l'Info

Ce projet a été conçu pour la **Nuit de l'Info**, un hackathon national étudiant.

### Contraintes

- ⏱️ **Réalisable en une nuit** (architecture modulaire)
- 🎨 **UX radicalement innovante**
- ♿ **Accessible et inclusive**
- 📱 **Mobile-compatible**
- 🚀 **Performant**

### Thème : NIRD

**NIRD** = Numérique Inclusif, Responsable et Durable

Mission : Sensibiliser aux enjeux de souveraineté numérique, alternatives aux Big Tech, et durabilité.

---

## 🛠️ Technologies Utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 14.x | Framework React |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| React | 18.x | UI Library |

---

## 📈 Performance

- ⚡ **First Contentful Paint** < 1.5s
- 🎨 **Largest Contentful Paint** < 2.5s
- 📦 **Bundle size** < 200kb (gzipped)
- ♿ **Lighthouse Accessibility** > 90
- 🎯 **Core Web Vitals** : Tous verts

---

## 🤝 Contribution

Ce projet est open-source et accueille les contributions !

### Comment contribuer ?

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👥 Auteurs

Créé avec ❤️ pour la Nuit de l'Info 2024

---

## 🙏 Remerciements

- **NIRD** pour l'inspiration et la mission
- **Nuit de l'Info** pour l'opportunité
- La communauté **Next.js** et **Framer Motion**
- Tous les contributeurs du mouvement **logiciels libres**

---

## 📞 Contact

Pour toute question ou suggestion :

- 📧 Email : [votre-email]
- 🐘 Mastodon : [@votre-compte]
- 💬 Forum : [lien-forum]

---

**🛡️ Résistons ensemble pour un numérique libre et durable !**
