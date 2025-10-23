# PM Quest - Product Manager Career Simulator

## 🎮 Game Overview

PM Quest is an idle roguelike game integrated into the terminal CV that simulates a Product Manager's career journey.

## 📦 Game Files

```
game/
├── game-state.js      # State management & save system ✅
├── game-engine.js     # Core game loop (to be added)
├── game-renderer.js   # Terminal rendering (to be added)
├── game-content.js    # Encounters & scenarios (placeholder)
└── pm-progression.js  # Skill trees & leveling ✅
```

## 🎯 Features

- **Career Progression**: Start as Junior PM, level up to Director
- **Skill System**: 8 skills (Prioritization, Stakeholder Mgmt, Data Analysis, etc.)
- **Encounters**: Daily standups, sprint planning, stakeholder meetings
- **Resources**: Team morale, velocity, tech debt
- **Decision Making**: Choose how to handle situations
- **Idle Mechanics**: Progress over time

## 🚀 Activation

To activate the game in terminal.js:

1. Add game mode flags to constructor
2. Implement `launchGame()` command
3. Load game scripts dynamically
4. Integrate game renderer with shell output

## 📝 Status

**Current**: Game files present, not integrated into terminal  
**Future**: Full game integration with `play` command

## 🎨 Design

Inspired by idle RPGs and career simulators, but focused on real PM challenges and decision-making scenarios.

---

**Note**: Game feature is optional and doesn't affect the core CV functionality.

