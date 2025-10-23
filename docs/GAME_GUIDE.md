# PM Quest Game Guide

## Overview

PM Quest is an idle roguelike game integrated into the terminal resume. Players navigate a Product Manager's career from Associate PM to Chief Product Officer, making strategic decisions that mirror real PM challenges.

## Quick Start

### From Browser Terminal
```
$ play
```

### From curl (info only)
```bash
curl amityogev.com/play
```

## Game Mechanics

### Career Ladder (7 Levels)

1. **Associate PM (APM)** - Learn the basics
2. **Product Manager (PM)** - Own your first product
3. **Senior PM (PM II)** - Drive strategy with data
4. **Lead PM** - Lead multiple products
5. **Director** - Build and manage PM teams
6. **VP of Product** - Shape company strategy
7. **CPO** - Victory! You've reached the top

### Resources

**Energy (100-300)**
- Depleted by meetings, decisions, crises
- Restored by coffee, delegation
- Zero energy = Game over (burnout)

**Credibility (0-100)**
- Your influence currency
- Gained by shipping, hitting metrics, stakeholder wins
- Lost by missed deadlines, bad decisions
- Zero credibility = Game over

**Budget ($0-$1M+)**
- Spend on hiring, tools, contractors
- Earned through successful launches
- Unlocks bigger bets and faster execution

**Team Morale (0-100)**
- Affects velocity and quality
- Influenced by work-life balance, clarity, wins

**Velocity (20-100 pts/sprint)**
- How fast you ship features
- Scales with team size and morale

### Encounter Types

**Daily Encounters** (Common, 30s)
- Standups, blockers, team questions
- Low risk, moderate XP

**Stakeholder Encounters** (Medium, 1min)
- Sales requests, executive asks, customer escalations
- Medium risk, good XP and credibility

**Crisis Encounters** (Rare, 3min)
- Production down, security breaches, mass resignations
- High risk, high reward

**Boss Encounters** (Milestone)
- Major career milestones
- Highest difficulty, best rewards
- Required to advance dungeons

## Commands

### In Menu
- `[n]` - New Game
- `[l]` - Load Game (enter save hash)
- `[h]` - How to Play
- `[q]` - Quit to Resume

### During Gameplay
- `[1-4]` - Make decision choices
- `[s]` - Save game (get hash code)
- `[i]` - View inventory
- `[stats]` - Check full stats
- `[q]` - Quit to menu

## Strategy Tips

### Early Game (APM/PM)
- Focus on building credibility
- Choose learning opportunities
- Don't overcommit energy
- Ship often, even if imperfect

### Mid Game (Senior PM/Lead PM)
- Balance stakeholder demands
- Invest in data and analytics
- Build process for scale
- Mentor others for morale

### Late Game (Director/VP/CPO)
- Strategic vision over tactics
- Delegate to preserve energy
- Political navigation critical
- Org design matters

## PM Frameworks in Game

The game teaches real PM concepts:

**Prioritization**
- RICE (Reach, Impact, Confidence, Effort)
- ICE (Impact, Confidence, Ease)
- Value vs Effort Matrix

**Strategy**
- OKRs (Objectives & Key Results)
- North Star Metrics
- Jobs-to-be-Done

**Execution**
- Agile/Scrum methodology
- Sprint planning
- Velocity management
- Technical debt tradeoffs

**Stakeholder Management**
- Negotiation tactics
- Influence without authority
- Expectation setting

**Leadership**
- Team building
- 1-on-1s
- Conflict resolution
- Hiring

## Save/Load System

### Saving
Type `s` during gameplay to generate a save hash:
```
═══ GAME SAVED ═══
Your save code:

eyJsZXZlbCI6MywiZW5lcmd5Ijo3NSwiY3JlZGliaWxpdHkiOjY4fQ==

Copy this code. Use 'play' then 'l' to load your progress.
```

### Loading
1. Type `play` to launch game
2. Select `[l]` for Load Game
3. Paste your save hash
4. Press Enter

**Note:** Save hash is Base64-encoded JSON. Keep it safe!

## Encounter Examples

### Example 1: Daily Standup
```
═══ DAILY STANDUP ═══
Engineer: "I'm blocked on the API specs."

[1] Unblock immediately (-5 Energy, +5 Morale)
[2] "Sync after" (+5 Velocity, optimal)
[3] "Figure it out" (-10 Morale, risky)
```

**Best Choice:** [2] - Efficient and respectful

### Example 2: Sales Pressure
```
═══ INCOMING EMAIL ═══
Sales VP: "Customer needs feature Y by Friday. Deal-breaker."

[1] Commit to Friday (High risk, +10 Credibility if win)
[2] Negotiate timeline (Diplomacy check, 70% success)
[3] Decline politely (-5 Credibility, protect roadmap)
[4] Quick prototype (-$5k, validation play)
```

**Best Choice:** [2] or [4] depending on budget

### Example 3: Production Crisis
```
⚠️  PRODUCTION DOWN ⚠️
Login service crashed. 500+ users affected. SLA at risk.

PRESSURE: ████████░░ 80%
TIME TO BREACH: 45 minutes

[1] All hands! (-50 Energy, -$10k, fast fix guaranteed)
[2] Senior engineer (-$5k, 80% success rate)
[3] Workaround (Slower, cheaper, 60% success)
[4] Comms strategy (Manage expectations, buy time)
```

**Best Choice:** [1] - Don't gamble with SLAs

## Advanced Tips

### Energy Management
- Save energy for crises
- Use coffee strategically
- Delegate when possible
- WFH days to recover

### Credibility Building
- Ship consistently
- Data-driven decisions
- Manage expectations
- Take accountability

### Budget Allocation
- Invest in tools early
- Hire for scale
- Prototypes for validation
- Marketing for launches

### Team Morale
- Regular 1-on-1s
- Clear priorities
- Celebrate wins
- Work-life balance

## Win Conditions

**CPO Achievement:**
- Reach Level 7
- Complete all 7 dungeons
- Navigate final IPO/Acquisition decision
- Conquer the corporate ladder!

**Game Over:**
- Energy reaches 0 (Burnout)
- Credibility reaches 0 (Lost influence)

## Easter Eggs

Look for funny dialogue and corporate satire throughout:
- "Another meeting that could've been a Slack message"
- "CEO: 'Can we add AI to this?'"
- "Your roadmap is a beautiful fiction"
- "Stakeholder used JARGON BLAST!"

## Technical Details

**Built with:**
- Pure JavaScript (no frameworks)
- 4 core modules (~1500 lines)
- Base64 save system
- Procedural encounter generation

**Performance:**
- Lightweight (~50KB total)
- No external dependencies
- Works offline after initial load

## Feedback & Issues

This game is part of Amit Yogev's interactive terminal resume.

**Contact:**
- Email: amit.yogev@gmail.com
- LinkedIn: linkedin.com/in/amit-yogev
- GitHub: github.com/broddo-baggins

---

*"Ship fast, measure everything, iterate relentlessly."*

