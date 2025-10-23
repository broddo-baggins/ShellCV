# PM Quest Design & Implementation Guide

## Game Heritage & Inspiration

### Base Game: **NetHack / Roguelike Tradition**

PM Quest is inspired by classic terminal roguelikes (NetHack, Angband, DCSS) combined with modern idle/incremental mechanics (Candy Box, A Dark Room). We've adapted the core roguelike formula:

**From NetHack:**
- Turn-based decision making
- Procedural encounter generation
- Save/load system
- ASCII art interface
- Permadeath consequences
- Item/equipment system
- Level progression

**From Idle Games:**
- Passive progression
- Resource management
- Meaningful choices at intervals
- Save hash codes for portability

**Divergence for PM Theme:**
- Combat → Strategic decisions
- Enemies → Corporate challenges
- Dungeons → Career stages
- Items → PM tools & frameworks
- XP → Career progression

---

## Character Story: The Perfect PM

### Protagonist: **Amit "The Executor" Yogev**

**Background:**
You are the world's most skilled Product Manager. A rare combination of:
- **Technical Savant**: Deep knowledge of SDK, API, networking, cybersecurity
- **Execution Master**: Ships consistently, on time, with quality
- **People Person**: Exceptional stakeholder management and communication
- **Data Wizard**: Makes every decision backed by metrics and research
- **Framework Expert**: RICE, ICE, AARRR, HEART - you know them all by heart

**The Daily Grind:**
Your day starts at 6 AM. Before you finish coffee:
- 47 unread emails (customers, support, executives)
- 12 Slack messages from engineering
- 3 "urgent" requests from sales
- CEO wants "quick sync" on strategy
- Support escalation: VIP customer blocked

By 9 AM, you've:
- Triaged 30 support tickets
- Unblocked 2 engineers
- Written 3 PRDs
- Analyzed yesterday's metrics
- Conducted 1 customer interview

**Your Superpowers:**
1. **Market Research Mastery**
   - Customer interviews that uncover true needs
   - Competitive analysis that finds opportunities
   - Market sizing with precision
   - Trend spotting before competitors

2. **Technical Excellence**
   - Read and understand backend code
   - Design system architecture
   - Debug API issues
   - Explain OAuth flows to executives

3. **Framework Fluency**
   - RICE/ICE prioritization (muscle memory)
   - AARRR funnel optimization
   - HEART metrics implementation
   - Jobs-to-be-Done interviews
   - Lean Canvas in 15 minutes

4. **Data-Driven Everything**
   - SQL queries for insights
   - A/B test design and analysis
   - Cohort retention analysis
   - Unit economics modeling
   - Dashboard creation

5. **Documentation Obsession**
   - PRDs that engineering loves
   - Technical specs that actually work
   - API documentation that's readable
   - User guides that reduce support tickets

6. **Marketing Savvy**
   - GTM strategy
   - Positioning & messaging
   - Growth loops
   - Conversion optimization

**The Challenge:**
Despite your skills, the corporate world is brutal. Every decision has trade-offs. Every stakeholder has conflicting priorities. Every quarter brings new crises. Can you navigate from Associate PM to CPO without burning out?

**Your Philosophy:**
"Ship fast, measure everything, iterate relentlessly."

---

## Project Structure & Organization

### Root Directory (Minimal Files)

```
AmitCV.sh/
├── index.html              # Entry point
├── terminal.js             # Shell interface
├── server.js               # Node server
├── styles.css              # Global styles
├── package.json            # Dependencies
├── vercel.json             # Deployment
├── favicon.svg             # Icon
│
├── resume.txt              # CV content
├── skills.txt              # Skills content
├── projects.txt            # Projects content
│
├── game/                   # Game module (all game code)
├── tests/                  # Test suite
├── docs/                   # Documentation
└── Career_Documents/       # Reference materials
```

### Game Module Structure

```
game/
├── core/
│   ├── game-engine.js      # Core game loop
│   ├── state-manager.js    # State management
│   └── save-system.js      # Save/load logic
│
├── content/
│   ├── pm-career.js        # Career progression
│   ├── encounters.js       # Encounter definitions
│   ├── items.js            # Items & equipment
│   └── dialogue.js         # Text content
│
├── rendering/
│   ├── game-renderer.js    # Display logic
│   ├── ascii-art.js        # ASCII art
│   └── ui-components.js    # UI elements
│
├── utils/
│   ├── rng.js              # Random number generator
│   ├── validators.js       # Input validation
│   └── formatters.js       # Text formatting
│
└── index.js                # Game module entry
```

### Test Suite Structure

```
tests/
├── config/
│   ├── test-config.json    # Common test configuration
│   └── test-results.json   # Aggregated results
│
├── unit/
│   ├── game-engine.test.js
│   ├── pm-career.test.js
│   ├── save-system.test.js
│   └── encounters.test.js
│
├── integration/
│   ├── gameplay-flow.test.js
│   ├── save-load.test.js
│   └── terminal-integration.test.js
│
├── e2e/
│   └── full-game-session.test.js
│
├── helpers/
│   ├── test-helpers.js     # Common utilities
│   └── mock-data.js        # Test data
│
└── run-tests.js            # Test runner
```

### Documentation Structure

```
docs/
├── user-guides/
│   ├── GAME_GUIDE.md       # Player guide
│   ├── QUICK_START.md      # Getting started
│   └── STRATEGIES.md       # Gameplay tips
│
├── developer-guides/
│   ├── ARCHITECTURE.md     # System design
│   ├── CONTRIBUTING.md     # Contribution guide
│   ├── API_REFERENCE.md    # Code documentation
│   └── TESTING.md          # Testing guide
│
├── design/
│   ├── DESIGN_GUIDE.md     # This file
│   ├── PMIFICATION.md      # PM theme mapping
│   └── UI_SPECS.md         # Interface specs
│
└── implementation/
    ├── IMPLEMENTATION_SUMMARY.md
    ├── CHANGELOG.md
    └── ROADMAP.md
```

---

## Development Principles

### 1. Test-Driven Development (TDD)

**Red → Green → Refactor Cycle**

```javascript
// 1. RED: Write failing test first
describe('PMCareer.getLevelData', () => {
  it('should return correct stats for APM level', () => {
    const level = PMCareer.getLevelData(1);
    expect(level.title).toBe('Associate PM');
    expect(level.stats.maxEnergy).toBe(100);
  });
});

// 2. GREEN: Write minimal code to pass
const PMCareer = {
  getLevelData(level) {
    return {
      title: 'Associate PM',
      stats: { maxEnergy: 100 }
    };
  }
};

// 3. REFACTOR: Improve implementation
const PMCareer = {
  levels: [
    { title: 'Associate PM', stats: { maxEnergy: 100 } }
  ],
  getLevelData(level) {
    return this.levels[level - 1];
  }
};
```

**Test Coverage Requirements:**
- Unit tests: 90%+ coverage
- Integration tests: All user paths
- E2E tests: Critical flows

### 2. Documentation Always

**Every module must have:**

```javascript
/**
 * @module PMCareer
 * @description Manages PM career progression from APM to CPO
 * 
 * @example
 * const level = PMCareer.getLevelData(3);
 * console.log(level.title); // "Senior Product Manager"
 * 
 * @see docs/developer-guides/API_REFERENCE.md
 */
const PMCareer = {
  /**
   * Get level data for specified career level
   * @param {number} level - Career level (1-7)
   * @returns {Object} Level data with stats and skills
   * @throws {Error} If level out of range
   */
  getLevelData(level) {
    if (level < 1 || level > 7) {
      throw new Error(`Invalid level: ${level}`);
    }
    return this.levels[level - 1];
  }
};
```

**Documentation Types:**

1. **Code Comments**
   - JSDoc for all functions
   - Inline comments for complex logic
   - TODO/FIXME tags for improvements

2. **User Guides**
   - How to play
   - Strategy tips
   - Command reference

3. **Developer Guides**
   - Architecture overview
   - Module documentation
   - Testing guide
   - Contributing guide

4. **Design Documents**
   - PMification mapping
   - UI specifications
   - Game mechanics

### 3. Test Configuration System

**tests/config/test-config.json**
```json
{
  "version": "1.0.0",
  "testEnvironment": "node",
  "timeout": 5000,
  "gameDefaults": {
    "startLevel": 1,
    "startEnergy": 100,
    "startCredibility": 50
  },
  "mockData": {
    "testSaveHash": "eyJ0ZXN0IjoidHJ1ZSJ9",
    "testPlayerName": "Test PM"
  },
  "assertions": {
    "minEnergy": 0,
    "maxEnergy": 300,
    "minCredibility": 0,
    "maxCredibility": 100,
    "levelCount": 7
  }
}
```

**tests/config/test-results.json**
```json
{
  "lastRun": "2025-10-23T20:00:00Z",
  "summary": {
    "total": 45,
    "passed": 45,
    "failed": 0,
    "skipped": 0
  },
  "coverage": {
    "lines": 92.5,
    "functions": 95.0,
    "branches": 88.0
  },
  "suites": {
    "unit": { "passed": 25, "failed": 0 },
    "integration": { "passed": 15, "failed": 0 },
    "e2e": { "passed": 5, "failed": 0 }
  },
  "performance": {
    "avgTestDuration": "125ms",
    "slowestTest": "e2e/full-game-session: 2.3s"
  }
}
```

**Test Template with Config:**

```javascript
const testConfig = require('../config/test-config.json');
const testResults = require('../config/test-results.json');

describe('PMCareer', () => {
  let config;

  beforeAll(() => {
    config = testConfig.gameDefaults;
  });

  afterEach(() => {
    // Update test results
    updateTestResults('unit', testResults);
  });

  it('should start at correct level', () => {
    const state = initializeState();
    expect(state.level).toBe(config.startLevel);
    expect(state.energy).toBe(config.startEnergy);
  });
});
```

---

## Design Principles

### 1. Respect Shell Terminal Aesthetic

**Terminal First:**
- Green-on-black color scheme
- Monospace fonts
- ASCII art over images
- Text-based interface
- Keyboard navigation

**NetHack Inspiration:**
- `@` = Player character (you)
- `$` = Currency/budget
- `!` = Consumable items
- `[` = Armor/frameworks
- `/` = Weapons/tools
- Progress bars: `████░░░░░░`

**Example UI:**
```
╔════════════════════════════════════╗
║  @ AMIT - Senior PM (Level 3)      ║
╠════════════════════════════════════╣
║  HP: ████████░░  80/100            ║
║  $$: $45,000                       ║
║  Location: Stakeholder Maze        ║
╚════════════════════════════════════╝

You encounter: Scope Creep Serpent
The serpent breathes feature requests!

[A]ttack with RICE prioritization
[D]efend with stakeholder alignment
[U]se coffee consumable
[R]un away (lose credibility)
```

### 2. Maintain Game Mechanics Integrity

**NetHack Core Principles:**
- Procedural generation
- Permadeath (or severe consequences)
- Deep item interactions
- Complex systems
- Learning through failure

**Our Adaptation:**
- Encounters procedurally generated
- Game over on zero energy/credibility
- Items interact (frameworks + tools = better outcomes)
- Multiple systems (energy, cred, morale, velocity)
- Learn PM frameworks through gameplay

### 3. Code Quality Standards

**Clean Code:**
```javascript
// BAD
function x(a,b){let c=a+b;return c>100?100:c;}

// GOOD
/**
 * Safely add two values with max cap
 * @param {number} current - Current value
 * @param {number} delta - Change amount
 * @returns {number} New value capped at 100
 */
function addWithCap(current, delta) {
  const newValue = current + delta;
  const MAX_VALUE = 100;
  return Math.min(newValue, MAX_VALUE);
}
```

**Module Pattern:**
```javascript
// game/core/state-manager.js
class StateManager {
  constructor() {
    this.state = null;
  }

  initialize() {
    // Clear initialization logic
  }

  update(changes) {
    // Validated updates only
  }

  validate(state) {
    // Ensure state integrity
  }
}

module.exports = StateManager;
```

---

## Testing Guide

### Unit Test Example

```javascript
// tests/unit/pm-career.test.js
const PMCareer = require('../../game/content/pm-career');
const testConfig = require('../config/test-config.json');

describe('PMCareer Module', () => {
  describe('getLevelData', () => {
    it('should return APM data for level 1', () => {
      const level = PMCareer.getLevelData(1);
      
      expect(level.title).toBe('Associate PM');
      expect(level.xpRequired).toBe(100);
      expect(level.stats.maxEnergy).toBe(
        testConfig.assertions.minEnergy + 100
      );
    });

    it('should return CPO data for level 7', () => {
      const level = PMCareer.getLevelData(7);
      
      expect(level.title).toBe('Chief Product Officer');
      expect(level.stats.maxEnergy).toBe(300);
    });

    it('should throw error for invalid level', () => {
      expect(() => {
        PMCareer.getLevelData(0);
      }).toThrow('Invalid level');
    });
  });

  describe('calculateXPForLevel', () => {
    it('should return correct XP thresholds', () => {
      expect(PMCareer.calculateXPForLevel(1)).toBe(100);
      expect(PMCareer.calculateXPForLevel(2)).toBe(300);
      expect(PMCareer.calculateXPForLevel(7)).toBe(999999);
    });
  });
});
```

### Integration Test Example

```javascript
// tests/integration/gameplay-flow.test.js
const GameEngine = require('../../game/core/game-engine');
const testConfig = require('../config/test-config.json');

describe('Gameplay Flow Integration', () => {
  let engine;

  beforeEach(() => {
    engine = new GameEngine(null); // No shell for tests
    engine.state = engine.initializeState();
  });

  it('should complete full encounter flow', async () => {
    // Generate encounter
    await engine.nextEncounter();
    
    expect(engine.currentEncounter).toBeDefined();
    expect(engine.currentEncounter.choices).toBeInstanceOf(Array);
    
    // Make decision
    const initialXP = engine.state.xp;
    await engine.makeDecision(0); // Choose first option
    
    // Verify state updated
    expect(engine.state.xp).toBeGreaterThan(initialXP);
  });

  it('should handle level up correctly', async () => {
    // Set XP near threshold
    engine.state.xp = 95;
    engine.state.level = 1;
    
    // Make decision that gives 10 XP
    engine.state.xp += 10;
    engine.checkLevelUp();
    
    // Should level up
    expect(engine.state.level).toBe(2);
  });
});
```

### E2E Test Example

```javascript
// tests/e2e/full-game-session.test.js
describe('Full Game Session E2E', () => {
  it('should play from APM to PM level', async () => {
    const engine = new GameEngine(null);
    engine.state = engine.initializeState();
    
    // Play until level up
    while (engine.state.level === 1) {
      await engine.nextEncounter();
      
      // Always choose optimal option (index 1 usually)
      const optimalChoice = engine.currentEncounter.choices.find(
        c => c.optimal
      );
      const choiceIndex = engine.currentEncounter.choices.indexOf(
        optimalChoice || engine.currentEncounter.choices[0]
      );
      
      await engine.makeDecision(choiceIndex);
      
      // Safety: break if too many encounters
      if (engine.state.encounterCount > 50) break;
    }
    
    expect(engine.state.level).toBe(2);
    expect(engine.state.xp).toBeGreaterThanOrEqual(100);
  });
});
```

---

## Documentation Standards

### User Guide Template

```markdown
# Feature Name

## Overview
Brief description of what this feature does.

## How to Use
Step-by-step instructions.

## Examples
Code or command examples.

## Tips & Tricks
Advanced usage patterns.

## Troubleshooting
Common issues and solutions.
```

### Developer Guide Template

```markdown
# Module Name

## Purpose
What this module does and why it exists.

## Architecture
How it fits into the system.

## API Reference
Functions, parameters, return values.

## Usage Examples
Code samples for common use cases.

## Testing
How to test this module.

## Performance Considerations
Optimization notes.
```

---

## Git Workflow

### Branch Strategy

```
main
├── develop
│   ├── feature/encounter-system
│   ├── feature/save-load
│   └── bugfix/energy-calculation
└── release/v1.0
```

### Commit Messages

```bash
# Format: <type>(<scope>): <subject>

feat(encounters): Add stakeholder encounter types
fix(save): Correct Base64 encoding for special chars
docs(readme): Update game installation instructions
test(career): Add unit tests for level progression
refactor(renderer): Extract ASCII art to separate module
```

### Code Review Checklist

- [ ] Tests pass (npm test)
- [ ] Code coverage maintained
- [ ] Documentation updated
- [ ] No console.errors
- [ ] Follows coding standards
- [ ] Performance acceptable
- [ ] Security concerns addressed

---

## Performance Guidelines

### Optimization Rules

1. **Lazy Loading**
   - Load game scripts only when 'play' command used
   - Don't impact resume load time

2. **Efficient Rendering**
   - Update only changed elements
   - Debounce input handlers
   - Minimize DOM manipulation

3. **State Management**
   - Immutable state updates
   - Validate before updating
   - Use efficient data structures

4. **Memory Management**
   - Clean up event listeners
   - No memory leaks
   - Dispose of game instance on quit

---

## Security Considerations

### Input Validation

```javascript
function loadGameFromHash(hash) {
  // Validate input
  if (typeof hash !== 'string') {
    throw new Error('Invalid save hash type');
  }
  
  if (hash.length > 10000) {
    throw new Error('Save hash too large');
  }
  
  try {
    const decoded = atob(hash);
    const state = JSON.parse(decoded);
    
    // Validate state structure
    if (!validateGameState(state)) {
      throw new Error('Invalid game state');
    }
    
    return state;
  } catch (error) {
    throw new Error('Failed to load game: ' + error.message);
  }
}
```

### XSS Prevention

```javascript
// ALWAYS escape user input
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Use it
renderer.printOutput(escapeHtml(userInput));
```

---

## Maintenance & Updates

### Version Numbering

```
MAJOR.MINOR.PATCH

1.0.0 - Initial release
1.1.0 - New encounters added
1.1.1 - Bug fix
2.0.0 - Breaking change (new save format)
```

### Update Checklist

- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Run full test suite
- [ ] Update documentation
- [ ] Test save/load compatibility
- [ ] Deploy to staging
- [ ] Deploy to production

---

## Success Metrics

### Code Quality Metrics

- Test Coverage: > 90%
- Code Complexity: < 10 (cyclomatic)
- Documentation: 100% of public APIs
- Lint Errors: 0

### Game Metrics

- Load Time: < 2 seconds
- Average Play Session: 15-30 minutes
- Completion Rate: > 10%
- Save/Load Success: > 99%

---

## Appendix

### Recommended Tools

- **Testing**: Jest or Mocha
- **Linting**: ESLint
- **Formatting**: Prettier
- **Documentation**: JSDoc
- **Version Control**: Git
- **CI/CD**: GitHub Actions or Vercel

### Useful Resources

- NetHack DevTeam Documentation
- Roguelike Development Tutorial
- JavaScript Testing Best Practices
- Terminal UI Design Patterns

---

**Philosophy:**

> "Test what you build. Document what you test. Refactor what you document."

**Remember:**

Every line of code is:
- Tested before merging
- Documented for others
- Organized for maintainability
- Designed for the user

Ship with confidence. Iterate with data. Build with quality.

