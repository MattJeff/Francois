# Francois - Claude Code Desktop

> Interface graphique moderne pour Claude Code CLI avec contrôle vocal, gestion multi-projets, système autopilot autonome et visualisation du raisonnement.

## Vue d'ensemble

| Propriété | Valeur |
|-----------|--------|
| **Nom** | Francois |
| **Version** | 0.1.0 |
| **Type** | Application Desktop |
| **Plateformes** | macOS, Linux, Windows |
| **Lignes de code** | ~57,000 |

---

## Stack Technologique

### Frontend

| Technologie | Version | Usage |
|-------------|---------|-------|
| **React** | 19.2.0 | Framework UI |
| **TypeScript** | 5.9.3 | Typage statique |
| **Vite** | 7.2.4 | Build tool & dev server |
| **Tailwind CSS** | 3.4.0 | Styling utility-first |
| **Zustand** | 5.0.0 | State management |
| **Framer Motion** | 11.0.0 | Animations |
| **Lucide React** | 0.460.0 | Icônes |
| **Immer** | 11.0.0 | Immutabilité |

### Backend / Desktop

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Tauri** | 2.9.2 | Framework desktop (Rust) |
| **Rust** | 1.77.2 | Logique backend |
| **Tokio** | 1.x | Runtime async |
| **Serde** | 1.0 | Sérialisation JSON |

### Plugins Tauri

- `@tauri-apps/plugin-shell` - Exécution de commandes shell
- `@tauri-apps/plugin-fs` - Accès système de fichiers
- `@tauri-apps/plugin-log` - Logging côté serveur
- `@tauri-apps/plugin-notification` - Notifications OS natives

---

## Fonctionnalités Principales

### 1. Intégration Claude Code

- Détection automatique du binaire Claude CLI
- Gestion de sessions (démarrage, arrêt, reprise)
- Streaming temps réel des réponses JSON
- Support multi-modèles (Opus, Sonnet, Haiku)
- Historique des messages persisté par projet
- Gestion des permissions pour opérations sensibles

### 2. Système Autopilot Multi-Agents

Le système autopilot permet le développement autonome via une orchestration d'agents spécialisés :

| Agent | Rôle |
|-------|------|
| **Analyst** | Analyse les requirements, pose des questions |
| **Architect** | Conçoit l'architecture, crée les listes de tâches |
| **Coder** | Implémente le code, corrige les bugs |
| **Tester** | Exécute les tests, valide les fonctionnalités |
| **Reviewer** | Review la qualité du code |
| **DevOps** | Configure le déploiement |
| **Orchestrator** | Coordonne tous les agents |
| **Fullstack** | Mode rapide : un seul agent pour tout |

**Fonctionnalités Autopilot :**
- Orchestration de tâches basée sur des missions
- Exécution multi-étapes avec checkpoints
- Système de scoring de confiance
- Rollback automatique en cas d'échec
- Mémoire QA pour le suivi des cas de test
- Apprentissage des tâches passées
- Exécution parallèle des agents
- Monitoring temps réel

### 3. Contrôle Vocal

- **Reconnaissance vocale** : Web Speech API
- **Langues** : Français, Anglais (US/UK), Espagnol, Allemand
- **Text-to-Speech** : Lecture des réponses à voix haute
- **Auto-speak** : Narration automatique optionnelle
- **Transcription temps réel** : Résultats partiels pendant la parole

### 4. Visualisation du Raisonnement (Thinking)

- Affichage temps réel des étapes de réflexion
- Vue arborescente hiérarchique
- Timeline du processus de réflexion
- Suivi de navigation fichiers (lecture/écriture)
- Indicateurs de statut (actif/terminé/erreur)
- Métadonnées inline (noms d'outils, chemins, commandes)

### 5. Interface Chat

- Affichage riche avec rendu Markdown
- Support des pièces jointes (drag-and-drop)
- Preview multi-format :
  - Images (affichage inline)
  - PDFs (aperçu de page)
  - Fichiers code (syntax highlighting)
  - Vidéo/Audio (lecteur média)
  - Archives (listing du contenu)
- Recherche de messages full-text
- Export historique (JSON, Markdown, HTML)

### 6. Explorateur de Fichiers

- Arborescence interactive expand/collapse
- Highlighting temps réel :
  - 🔵 Bleu : lectures
  - 🟠 Orange : écritures/modifications
  - 🟢 Vert : créations
  - 🔴 Rouge : suppressions
- Preview du contenu des fichiers
- Suivi des changements de répertoire

### 7. Timeline d'Activité

- Timeline temps réel des activités
- Types : file_read, file_write, file_create, file_delete, bash, search, navigate, permission, error
- Indicateurs de statut : pending, success, error
- Rétention des 100 dernières activités
- Détails extensibles

### 8. Gestion de Projets

- Support multi-projets
- Accès rapide aux projets récents
- Projets favoris
- Persistance des sessions par projet
- Restauration de l'historique des messages
- Tracking d'utilisation (tokens, coûts estimés)

### 9. Model Context Protocol (MCP)

- Interface de gestion des serveurs MCP
- Import depuis la config Claude Desktop
- Logs serveur temps réel
- Health check et monitoring
- Auto-reconnexion en cas d'échec
- Visualisation du registre d'outils

### 10. Agents Personnalisés

- Création d'agents avec prompts système custom
- Agents prédéfinis (Code Reviewer, Documentation Writer, etc.)
- Capabilities et restrictions d'outils par agent
- Changement d'agent dans la session

### 11. Sécurité & Sandboxing

- **macOS** : Sandbox Seatbelt natif avec profils dynamiques
- **Linux** : Filtre seccomp pour restriction syscalls
- Isolation par répertoire de projet
- Dialogues modaux de demande de permission
- Gestion des données sensibles

### 12. Analytics & Usage

- Utilisation de tokens par modèle
- Calcul des coûts estimés
- Durée de session
- Comptage de messages par session
- Statistiques de fréquence d'actions

---

## Architecture

### Structure du Projet

```
claude-code-desktop/
├── src/                          # Frontend React
│   ├── components/               # 36 composants React
│   │   ├── autopilot/            # Système autonome (8 composants)
│   │   ├── chat/                 # Interface chat (7 composants)
│   │   ├── thinking/             # Visualisation thinking
│   │   ├── voice/                # Contrôle vocal
│   │   └── ...
│   ├── hooks/                    # 8 hooks personnalisés
│   │   ├── useClaude.ts          # Gestion session Claude
│   │   ├── useAutopilot.ts       # Orchestration autopilot
│   │   ├── useVoice.ts           # Reconnaissance vocale
│   │   └── ...
│   ├── stores/                   # State Management Zustand
│   │   ├── app-store.ts          # État principal
│   │   ├── autopilot-store.ts    # État missions
│   │   └── ...
│   ├── services/                 # Logique métier
│   │   └── autopilot/            # 30+ services autonomes
│   └── types/                    # Définitions TypeScript
│
├── src-tauri/                    # Backend Rust
│   ├── src/
│   │   ├── lib.rs                # Gestion processus Claude
│   │   ├── autopilot.rs          # Backend autopilot
│   │   ├── mcp.rs                # Gestion serveurs MCP
│   │   └── sandbox.rs            # Sandboxing OS
│   ├── Cargo.toml                # Dépendances Rust
│   └── tauri.conf.json           # Config Tauri
│
├── Configuration
│   ├── package.json              # NPM
│   ├── vite.config.ts            # Vite
│   ├── tsconfig.json             # TypeScript
│   └── tailwind.config.js        # Tailwind
```

### Flux de Données

```
Input Utilisateur (Chat/Voice)
        ↓
Composant React (hook useClaude)
        ↓
useAppStore (mise à jour état)
        ↓
Tauri invoke('start_claude')
        ↓
Backend Rust (lib.rs)
├── Spawn processus Claude
├── Stream output JSON
└── Émet événements Tauri
        ↓
ClaudeProvider (listener)
        ↓
Parse événements Claude
        ↓
Mise à jour Stores
        ↓
Re-render composants
        ↓
Affichage réponse + thinking tree
```

### Patterns Architecturaux

1. **State Management** : Zustand avec middleware de persistance localStorage
2. **Provider Pattern** : ClaudeProvider pour écoute d'événements Tauri
3. **Service Layer** : Séparation logique métier / UI
4. **Event-Driven** : Communication backend-frontend via événements Tauri
5. **Multi-Agent Orchestrator** : Pattern orchestrateur pour coordination agents

---

## Métriques du Code

| Métrique | Valeur |
|----------|--------|
| Fichiers TypeScript/React | 107 |
| Lignes TypeScript | 52,842 |
| Lignes Rust | 4,277 |
| Composants React | 36 |
| Hooks personnalisés | 8 |
| Stores Zustand | 5 |
| Services Autopilot | 30+ |
| Dépendances NPM | 33 |
| Plugins Tauri | 4 |
| Agents supportés | 8 |

---

## Scripts NPM

```bash
# Développement
npm run dev           # Serveur dev Vite
npm run tauri dev     # App Tauri en mode dev

# Build
npm run build         # Build frontend
npm run tauri build   # Build app desktop

# Preview
npm run preview       # Preview du build
```

---

## Configuration

### Variables d'environnement

Le projet détecte automatiquement le binaire Claude CLI dans :
- `/opt/homebrew/bin/claude` (Homebrew macOS)
- `~/.nvm/versions/node/*/bin/claude` (NVM)
- `~/.npm-global/bin/claude` (npm global)
- PATH système

### Paramètres Utilisateur

- **Thème** : Clair, Sombre, Système
- **Taille police** : Petite, Moyenne, Grande
- **Mode permission** : Demander, Auto-accepter, Auto-refuser
- **Chemin Claude** : Personnalisable
- **Raccourcis clavier** : Configurables
- **Slash commands** : /help, /clear, /settings

---

## Intégrations

### Providers IA

- **Anthropic Claude** - Moteur IA principal via CLI
- **Google Gemini** - Alternative optionnelle

### Protocols

- **Model Context Protocol (MCP)** - Standard d'intégration d'outils
- **Anthropic Tools API** - Utilisation et exécution d'outils
- **Web Speech API** - Reconnaissance vocale navigateur
- **Web Audio API** - Synthèse TTS

---

## Documentation Complémentaire

- `PROJECT.md` - Matrice des fonctionnalités et statut d'implémentation
- `ARCHITECTURE_AUTOPILOT.md` - Architecture détaillée du système autopilot
- `FRANCOIS_AUTOPILOT.md` - Guide du système autopilot

---

## Licence

Propriétaire - Tous droits réservés

---

*Documentation générée automatiquement - Dernière mise à jour : Novembre 2025*
