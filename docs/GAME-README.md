# PM Quest - Product Manager Career Simulator

## 🎮 Game Overview

PM Quest is a **fully functional** roguelike game integrated into the terminal CV that simulates a Product Manager's career journey from Associate PM to Chief Product Officer.

## 📦 Game Files

```
game/
├── game-engine.js             # Core game loop & state management ✅
├── game-renderer.js           # Terminal rendering & ASCII art ✅
├── game-content.js            # Items, enemies, dialogue system ✅
├── pm-career.js              # 7-level career progression ✅
└── encounters/               # Modular encounter files ✅
    ├── daily-encounters.js        # 8 daily PM challenges
    ├── stakeholder-encounters.js  # 8 stakeholder scenarios
    ├── crisis-encounters.js       # 8 high-pressure crises
    └── boss-encounters.js         # 7 career milestone bosses
```

**Total:** ~2,000 lines of game code, 39 unique encounters

## 🎯 Features

- **Career Progression**: 7 levels (APM → PM → Senior PM → Lead PM → Director → VP → CPO)
- **Resource Management**: Energy, Credibility, Budget, Team Morale, Velocity
- **Encounter Types**: Daily tasks, stakeholder meetings, crisis situations, boss battles
- **Decision Making**: 4 choices per encounter with probability-based outcomes
- **Save/Load System**: Base64-encoded save codes for session persistence
- **Level-Up System**: Stat increases, new skills, budget unlocks

## 🚀 How to Play

### Starting the Game
```bash
$ play
```

### Game Commands
- `[n]` - New Game
- `[l]` - Load Game (enter save code)
- `[1-4]` - Make decisions
- `[s]` - Save game
- `[stats]` - View full stats
- `[i]` - View inventory
- `[q]` - Quit to menu

## 📝 Implementation Status

✅ **COMPLETE** - Fully integrated and playable

### Completed Components:
- [x] Core game engine with state management
- [x] 7-level career progression system
- [x] 39 unique encounters (8 daily, 8 stakeholder, 8 crisis, 7 boss)
- [x] Terminal rendering with ASCII art
- [x] Save/load system (Base64 hash)
- [x] Resource management (5 stats)
- [x] Items and equipment system
- [x] Win/loss conditions
- [x] Terminal integration (`play` command)
- [x] Server routing for game files
- [x] Modular encounter architecture

## 🎨 Design Philosophy

Inspired by idle RPGs and career simulators, but grounded in **real PM challenges**:
- Stakeholder management
- Technical debt tradeoffs
- Crisis response
- Resource allocation
- Team morale vs velocity
- Scope creep battles

## 🧪 Testing

Game is **production-ready** and accessible at:
- Local: `http://localhost:8080` → type `play`
- Live: `https://amityogev.com` → type `play`

---

**Status**: ✅ Fully functional, integrated, and deployed.

