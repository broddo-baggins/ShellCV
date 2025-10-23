# PM Quest - Project Standards Summary

**Created:** October 23, 2025  
**Game Inspiration:** Reigns + Slay the Spire  
**Development Model:** Test-Driven Development  
**Documentation:** Always Complete

---

## 🎮 Game Design Foundation

### Famous Games We Diverged From:

#### 1. **Reigns** (Primary Inspiration)
**What We Took:**
- ✅ Multiple-choice decision making (binary → 4 choices)
- ✅ Resource balancing (4 resources → 5 resources)
- ✅ Every choice has consequences
- ✅ Loss conditions (any resource = 0)
- ✅ Event-driven narrative

**What We Adapted:**
- More choices per encounter (2 → 4)
- PM-specific resources (Energy, Credibility, Budget, Morale, Velocity)
- Career progression instead of infinite play
- Terminal interface instead of swipe cards

#### 2. **Slay the Spire** (Secondary Inspiration)
**What We Took:**
- ✅ Encounter-based progression (hallway → daily)
- ✅ Elite encounters (elite → stakeholder)
- ✅ Boss battles at milestones
- ✅ Probability-based outcomes (success rates)
- ✅ Level-up rewards

**What We Adapted:**
- PM-themed encounters instead of combat
- Text-based instead of card battles
- Career levels instead of ascension
- Terminal interface instead of GUI

#### 3. **Unix Terminal** (Interface Inspiration)
**What We Took:**
- ✅ Command-based input
- ✅ ASCII art rendering
- ✅ Built-in help system
- ✅ Save codes (like hash strings)
- ✅ Monospace formatting

---

## 📐 Project Standards

### 1. Test-Driven Development (TDD)

**Mandatory Order:**
```
1. Write documentation
2. Write failing test
3. Implement code
4. Pass test
5. Refactor
6. Update docs
```

**No exceptions. This is law.**

### 2. Documentation Always

**Required for Every Feature:**
- User guide (how to use)
- Technical docs (how it works)
- Code comments (why it exists)
- Tests (executable docs)
- Examples (real usage)

**If not documented, it doesn't exist.**

### 3. Testing Infrastructure

**Common Config:** `/tests/test-config.json`
- All test standards
- Game configuration values
- Coverage thresholds
- Timeout settings

**Common Results:** `/tests/test-results.json`
- Latest test run
- Coverage metrics
- Failed tests
- Historical data

**Each test:**
- Reads config
- Runs tests
- Updates results

### 4. Organization Rules

**Root Directory - MINIMAL FILES ONLY:**
```
✅ index.html
✅ terminal.js
✅ styles.css
✅ server.js
✅ package.json
✅ vercel.json
✅ README.md
✅ LICENSE
✅ favicon.svg
```

**Everything else goes in folders:**
```
/game/      → All game code
/docs/      → All documentation
/tests/     → All tests
/Career_Documents/ → CV files
```

### 5. Design Consistency

**Must Respect:**
- Reigns-style decision making
- Slay the Spire encounter structure
- Terminal/shell aesthetic
- ASCII art only (no graphics)
- Fast, responsive, native feel

---

## 📚 Documentation Suite

### Created Files:

#### 1. **DESIGN_AND_IMPLEMENTATION_GUIDE.md** ✅
**Purpose:** Complete development reference  
**For:** Developers & AI agents  
**Contains:**
- Game design principles (Reigns + Slay the Spire)
- TDD standards
- Testing infrastructure
- Organization rules
- Architecture patterns
- Implementation workflows
- Success criteria

#### 2. **AGENT_GUIDE.md** ✅
**Purpose:** Quick reference for AI assistants  
**For:** Code agents (like me!)  
**Contains:**
- Core principles (TDD, docs, organization)
- Project structure rules
- Testing requirements
- Common tasks
- Quality metrics
- Quick reference

#### 3. **TESTING_GUIDE.md** → **tests/README.md** ✅
**Purpose:** Testing infrastructure guide  
**For:** Developers writing tests  
**Contains:**
- Quick start commands
- Test structure
- Configuration usage
- Writing tests
- Coverage requirements
- Debugging tips

#### 4. **test-config.json** ✅
**Purpose:** Common test configuration  
**For:** All test files  
**Contains:**
- Test framework settings
- Coverage thresholds (80%)
- Game config values
- Test data samples
- Validation rules

#### 5. **test-results.json** ✅
**Purpose:** Common test results  
**For:** Tracking test runs  
**Contains:**
- Latest run summary
- Per-suite breakdowns
- Failed tests
- Coverage metrics
- Historical data

#### 6. **pm-idle-roguelike-game.plan.md** ✅
**Purpose:** Implementation plan & checklist  
**For:** Tracking progress  
**Contains:**
- Complete implementation checklist
- Architecture overview
- Design decisions
- Future enhancements
- Testing checklist

#### 7. **PROJECT_STANDARDS.md** ✅ (This file)
**Purpose:** Quick standards summary  
**For:** Quick reference  
**Contains:**
- Game inspirations
- Core standards
- Documentation list
- Quick rules

---

## 🎯 Quick Rules Reference

### Test-Driven Development
```
✅ Write tests before code
✅ Read test-config.json
✅ Update test-results.json
✅ 80%+ coverage
✅ All tests pass
```

### Documentation
```
✅ Update user guides
✅ Update technical docs
✅ Comment complex code
✅ Provide examples
✅ Keep accurate
```

### Organization
```
✅ Game code → /game/
✅ Tests → /tests/
✅ Docs → /docs/
✅ Root → minimal
✅ No temp files
```

### Design
```
✅ Reigns decision-making
✅ Slay the Spire encounters
✅ Terminal aesthetic
✅ ASCII art only
✅ Command-based
```

---

## 📊 Project Structure

```
AmitCV.sh/
│
├── [ROOT - MINIMAL]
│   ├── index.html
│   ├── terminal.js
│   ├── styles.css
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── game/                          [ALL GAME CODE]
│   ├── game-engine.js
│   ├── game-renderer.js
│   ├── game-content.js
│   ├── pm-career.js
│   └── encounters/
│       ├── daily-encounters.js
│       ├── stakeholder-encounters.js
│       ├── crisis-encounters.js
│       └── boss-encounters.js
│
├── docs/                          [ALL DOCUMENTATION]
│   ├── DESIGN_AND_IMPLEMENTATION_GUIDE.md  ← Complete reference
│   ├── AGENT_GUIDE.md                      ← AI assistant guide
│   ├── PROJECT_STANDARDS.md                ← This file
│   ├── pm-idle-roguelike-game.plan.md      ← Project plan
│   ├── GAME_GUIDE.md                       ← User manual
│   └── GAME-README.md                      ← Tech overview
│
├── tests/                         [ALL TESTS]
│   ├── test-config.json           ← Common config
│   ├── test-results.json          ← Common results
│   ├── README.md                  ← Testing guide
│   ├── game-engine.test.js        ← To be created
│   ├── encounter-logic.test.js    ← To be created
│   ├── save-load.test.js          ← To be created
│   └── integration.test.js        ← To be created
│
└── Career_Documents/              [CV/RESUME]
```

---

## ✅ Success Criteria

### Code Quality
- ✅ Test coverage ≥ 80%
- ✅ All tests pass
- ✅ No linter errors
- ✅ Documentation complete
- ✅ Organization clean

### Game Quality
- ✅ Decisions feel meaningful (Reigns)
- ✅ Progression feels rewarding (Slay the Spire)
- ✅ Interface feels native (Terminal)
- ✅ Encounters are varied
- ✅ Balance is fair

### User Experience
- ✅ Easy to learn (< 5 min)
- ✅ Help accessible ([h] key)
- ✅ Performance fast (< 100ms)
- ✅ Save/load simple (copy/paste)
- ✅ Feedback clear

---

## 🚀 Getting Started

### For New Developers:
1. Read DESIGN_AND_IMPLEMENTATION_GUIDE.md
2. Read test-config.json
3. Review existing code
4. Follow TDD workflow

### For AI Agents:
1. Read AGENT_GUIDE.md
2. Check test-config.json
3. Follow TDD strictly
4. Update docs always

### For Users:
1. Read GAME_GUIDE.md
2. Type `play` in terminal
3. Press `[h]` for help
4. Enjoy!

---

## 📖 Document Purposes

| Document | Purpose | Audience |
|----------|---------|----------|
| DESIGN_AND_IMPLEMENTATION_GUIDE.md | Complete reference | Developers & AI |
| AGENT_GUIDE.md | Quick AI reference | AI assistants |
| PROJECT_STANDARDS.md | Standards summary | Everyone |
| GAME_GUIDE.md | How to play | Users |
| GAME-README.md | Technical overview | Developers |
| pm-idle-roguelike-game.plan.md | Project plan | Team |
| tests/README.md | Testing guide | Developers |
| test-config.json | Test settings | Tests |
| test-results.json | Test tracking | CI/CD |

---

## 🎮 Game Design Checklist

### Reigns Elements
- [x] Multiple-choice decisions
- [x] Resource balancing
- [x] Consequence system
- [x] Loss conditions
- [x] Event-driven narrative

### Slay the Spire Elements
- [x] Encounter types (daily/elite/boss)
- [x] Boss battles
- [x] Probability outcomes
- [x] Level progression
- [x] Reward system

### Terminal Design
- [x] ASCII art
- [x] Command-based
- [x] Help system
- [x] Monospace format
- [x] Fast performance

---

## 🔄 Development Workflow

```
User requests feature
    ↓
Write user documentation
    ↓
Write failing test (reads test-config.json)
    ↓
Implement code
    ↓
Pass test
    ↓
Refactor
    ↓
Update technical docs
    ↓
Update test-results.json
    ↓
Commit with clear message
    ↓
Deploy
```

---

## 🆘 Quick Help

**Where do I put X?**
- Game code → `/game/`
- Tests → `/tests/`
- Docs → `/docs/`
- Nothing → root (keep minimal)

**How do I test?**
- Read `/tests/test-config.json`
- Write test first
- Update `/tests/test-results.json`

**What game am I copying?**
- Decision-making → Reigns
- Encounters → Slay the Spire
- Interface → Unix Terminal

**What's required?**
- TDD (always)
- Documentation (always)
- Organization (strict)
- Design consistency (always)

---

**Summary:**
- Game: Reigns + Slay the Spire + Terminal
- Development: Test-Driven, Always
- Documentation: Complete, Always
- Organization: Clean, Strict
- Quality: High, Non-negotiable

**This is the way.**

