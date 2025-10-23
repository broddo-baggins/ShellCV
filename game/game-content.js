// PM Quest Game Content - All encounters, items, enemies, and dialogue

const PMContent = {
  // PM Equipment and Items
  items: {
    weapons: [
      { id: 'jira_sword', name: 'Jira Sword of Prioritization', level: 1, bonus: { prioritization: 5 }, cost: 0 },
      { id: 'figma_wand', name: 'Figma Wand', level: 2, bonus: { design: 10 }, cost: 5000 },
      { id: 'analytics_blade', name: 'Analytics Blade', level: 3, bonus: { dataDecisions: 15 }, cost: 15000 },
      { id: 'okr_hammer', name: 'OKR Hammer', level: 4, bonus: { alignment: 20 }, cost: 30000 },
      { id: 'vision_bow', name: 'Vision Bow', level: 5, bonus: { strategy: 25 }, cost: 50000 }
    ],
    
    armor: [
      { id: 'agile_robes', name: 'Agile Robes', effect: 'Reduce scope creep damage by 20%', cost: 10000 },
      { id: 'lean_armor', name: 'Lean Armor', effect: '+10% velocity, -15% waste', cost: 20000 },
      { id: 'rice_shield', name: 'RICE Shield', effect: 'Better prioritization decisions', cost: 15000 },
      { id: 'jtbd_cloak', name: 'Jobs-to-be-Done Cloak', effect: '+25% customer insight', cost: 25000 }
    ],
    
    consumables: [
      { id: 'coffee', name: 'Coffee', effect: '+10 Energy', cost: 0, uses: 1 },
      { id: 'slack_dnd', name: 'Slack DND', effect: 'Skip 3 meetings', cost: 0, uses: 3 },
      { id: 'one_on_one', name: '1-on-1 Scroll', effect: '+20 Team Morale', cost: 0, uses: 1 },
      { id: 'all_hands', name: 'All-Hands Potion', effect: '+30 Credibility', cost: 0, uses: 1 }
    ],
    
    artifacts: [
      { id: 'first_principles', name: '"First Principles" Amulet', effect: 'See root causes clearly', permanent: true },
      { id: 'north_star', name: '"North Star" Compass', effect: 'Never lose direction', permanent: true },
      { id: 'disagree_commit', name: '"Disagree & Commit" Ring', effect: 'Resolve conflicts 50% faster', permanent: true },
      { id: 'ship_it', name: '"Ship It" Badge', effect: '+50% velocity', permanent: true }
    ]
  },

  // Enemy/Challenge definitions
  enemies: [
    { id: 'meeting_marathon', name: 'Meeting Marathon Monster', drains: 'energy', difficulty: 1 },
    { id: 'scope_creep', name: 'Scope Creep Serpent', adds: 'features', difficulty: 2 },
    { id: 'tech_debt', name: 'Technical Debt Dragon', blocks: 'velocity', difficulty: 3 },
    { id: 'micromanager', name: 'Micromanager Wraith', removes: 'autonomy', difficulty: 2 },
    { id: 'budget_cut', name: 'Budget Cut Goblin', steals: 'resources', difficulty: 2 },
    { id: 'deadline_demon', name: 'Deadline Demon', pressure: 'time', difficulty: 3 },
    { id: 'politics_troll', name: 'Politics Troll', requires: 'navigation', difficulty: 3 },
    { id: 'analysis_paralysis', name: 'Analysis Paralysis Phantom', prevents: 'decisions', difficulty: 2 },
    { id: 'stakeholder_hydra', name: 'Stakeholder Hydra', multiplier: 'opinions', difficulty: 4 }
  ],

  // Encounter templates by type
  encounters: {
    // Daily standup encounters (easy, frequent)
    daily: [
      {
        id: 'blocked_engineer',
        title: 'Daily Standup',
        description: 'Engineer: "I\'m blocked on the API specs."',
        choices: [
          { text: 'Unblock immediately', energy: -5, morale: +5, xp: 5, success: 0.9 },
          { text: '"Sync after standup"', velocity: +5, xp: 8, success: 0.95, optimal: true },
          { text: '"Figure it out"', morale: -10, xp: 2, success: 0.6 },
          { text: 'Skip standup today', energy: +5, credibility: -3, success: 1.0 }
        ]
      },
      {
        id: 'unclear_story',
        title: 'Daily Standup',
        description: 'Designer: "This user story is unclear. What exactly do we want?"',
        choices: [
          { text: 'Clarify immediately', energy: -10, morale: +10, velocity: +5, xp: 10, success: 0.95, optimal: true },
          { text: '"Let\'s workshop it later"', energy: -5, velocity: -2, xp: 5, success: 0.7 },
          { text: '"Use your best judgment"', morale: -5, xp: 3, success: 0.5 },
          { text: 'Defer to PM II', credibility: -5, xp: 2, success: 0.8 }
        ]
      },
      {
        id: 'demo_prep',
        title: 'Sprint Demo Prep',
        description: 'Team: "Demo is in 1 hour. Feature X isn\'t quite ready."',
        choices: [
          { text: 'Demo what we have', credibility: -5, morale: +5, xp: 8, success: 0.7 },
          { text: 'Cut the unfinished part', credibility: +5, xp: 10, success: 0.9, optimal: true },
          { text: 'Delay the demo', energy: -10, credibility: -10, xp: 5, success: 0.8 },
          { text: 'All-hands polish sprint', energy: -20, morale: -15, credibility: +10, xp: 12, success: 0.6 }
        ]
      }
    ],

    // Stakeholder management (medium difficulty)
    stakeholder: [
      {
        id: 'sales_urgent',
        title: 'Incoming Email',
        description: 'Sales VP: "Customer X needs feature Y by Friday. This is a deal-breaker."',
        choices: [
          { text: 'Commit to Friday', energy: -15, velocity: -20, credibility: +15, xp: 20, success: 0.5 },
          { text: 'Negotiate timeline', energy: -10, credibility: +5, xp: 15, success: 0.7, optimal: true },
          { text: 'Decline politely', credibility: -5, xp: 10, success: 1.0 },
          { text: 'Build quick prototype', budget: -5000, energy: -10, credibility: +10, xp: 18, success: 0.8 }
        ]
      },
      {
        id: 'exec_feature_request',
        title: 'Executive Corridor Conversation',
        description: 'CTO: "I saw competitor X has feature Z. Why don\'t we?"',
        choices: [
          { text: '"Adding to roadmap now!"', credibility: -5, velocity: -10, xp: 5, success: 0.6 },
          { text: 'Explain our strategy', energy: -10, credibility: +10, xp: 15, success: 0.8, optimal: true },
          { text: '"Let me research it"', energy: -5, xp: 10, success: 0.9 },
          { text: 'Schedule strategy review', energy: -15, credibility: +15, xp: 20, success: 0.85 }
        ]
      },
      {
        id: 'customer_escalation',
        title: 'Customer Escalation',
        description: 'Support: "VIP customer is furious about bug in production. CEO is CC\'d."',
        choices: [
          { text: 'Drop everything, fix now', energy: -30, budget: -10000, credibility: +20, xp: 25, success: 0.9, optimal: true },
          { text: 'Assign to engineer', energy: -10, morale: -5, credibility: +10, xp: 15, success: 0.7 },
          { text: 'Provide workaround', energy: -15, credibility: +5, xp: 12, success: 0.8 },
          { text: 'Escalate to engineering manager', credibility: -10, xp: 5, success: 0.6 }
        ]
      },
      {
        id: 'conflicting_stakeholders',
        title: 'Stakeholder Conflict',
        description: 'Sales wants feature A. Marketing wants feature B. Both say "critical".',
        choices: [
          { text: 'Build both (parallel tracks)', energy: -25, velocity: -15, budget: -15000, credibility: +10, xp: 20, success: 0.6 },
          { text: 'Use RICE to prioritize', energy: -15, credibility: +15, xp: 25, success: 0.85, optimal: true },
          { text: 'Ship A then B', credibility: -5, xp: 15, success: 0.7 },
          { text: 'Escalate to CEO', energy: -10, credibility: -5, xp: 10, success: 0.8 }
        ]
      }
    ],

    // Crisis situations (high difficulty)
    crisis: [
      {
        id: 'production_down',
        title: 'PRODUCTION DOWN',
        description: 'Login service crashed. 500+ users affected. SLA at risk.',
        pressure: 80,
        timeLimit: '45 minutes',
        choices: [
          { text: 'All hands on deck!', energy: -50, budget: -10000, credibility: +25, xp: 30, success: 1.0, optimal: true },
          { text: 'Call senior engineer', budget: -5000, energy: -20, credibility: +15, xp: 20, success: 0.8 },
          { text: 'Implement workaround', energy: -25, credibility: +10, xp: 18, success: 0.6 },
          { text: 'Comms strategy first', energy: -15, credibility: -5, xp: 12, success: 0.7 }
        ]
      },
      {
        id: 'security_breach',
        title: 'SECURITY INCIDENT',
        description: 'Potential data breach detected. Customer data may be exposed.',
        pressure: 95,
        choices: [
          { text: 'Activate incident response', energy: -40, budget: -25000, credibility: +30, xp: 40, success: 0.95, optimal: true },
          { text: 'Investigate first', energy: -20, credibility: +10, xp: 20, success: 0.7 },
          { text: 'Notify customers immediately', energy: -30, credibility: +15, morale: -10, xp: 25, success: 0.85 },
          { text: 'Consult legal team', energy: -25, credibility: +5, xp: 15, success: 0.8 }
        ]
      },
      {
        id: 'team_quit',
        title: 'Mass Resignation',
        description: '3 senior engineers just gave notice. Team morale is crashing.',
        choices: [
          { text: 'Emergency retention plan', energy: -35, budget: -50000, morale: +30, xp: 35, success: 0.7, optimal: true },
          { text: 'Hire replacements ASAP', budget: -75000, velocity: -20, xp: 25, success: 0.6 },
          { text: 'Restructure team', energy: -25, morale: -10, velocity: -15, xp: 20, success: 0.8 },
          { text: 'Accept and adapt', morale: -15, credibility: -10, xp: 10, success: 0.9 }
        ]
      }
    ],

    // Boss battles (major milestones)
    boss: [
      {
        id: 'first_demo',
        title: 'First Sprint Demo',
        dungeon: 1,
        description: 'Present your first shipped feature to the team and stakeholders.',
        choices: [
          { text: 'Professional presentation', energy: -20, credibility: +20, xp: 50, success: 0.85, optimal: true },
          { text: 'Live product demo', energy: -25, credibility: +25, xp: 60, success: 0.7 },
          { text: 'Quick walkthrough', energy: -10, credibility: +10, xp: 30, success: 0.95 },
          { text: 'Delegate to engineer', credibility: -10, xp: 20, success: 0.8 }
        ],
        reward: { item: 'jira_sword', xp: 100, credibility: +20 }
      },
      {
        id: 'release_crisis',
        title: 'Release Day Crisis',
        dungeon: 2,
        description: 'Critical bug found in production 1 hour after launch. Press is watching.',
        choices: [
          { text: 'Immediate rollback', energy: -30, credibility: +15, morale: -10, xp: 40, success: 0.95, optimal: true },
          { text: 'Hot fix deployment', energy: -40, budget: -15000, credibility: +25, xp: 50, success: 0.75 },
          { text: 'Feature flag disable', energy: -20, credibility: +20, xp: 45, success: 0.9 },
          { text: 'Monitor and patch', energy: -25, credibility: -15, xp: 30, success: 0.6 }
        ],
        reward: { item: 'analytics_blade', xp: 150, budget: +25000 }
      },
      {
        id: 'the_pivot',
        title: 'The Pivot',
        dungeon: 3,
        description: 'CEO announces major direction change. Your roadmap is now irrelevant.',
        choices: [
          { text: 'Embrace the pivot', energy: -35, morale: -20, credibility: +30, xp: 60, success: 0.8, optimal: true },
          { text: 'Negotiate hybrid approach', energy: -40, credibility: +20, xp: 55, success: 0.7 },
          { text: 'Defend current strategy', energy: -30, credibility: -10, xp: 40, success: 0.6 },
          { text: 'Request transition time', energy: -25, morale: +10, xp: 50, success: 0.85 }
        ],
        reward: { item: 'okr_hammer', xp: 200, credibility: +30 }
      },
      {
        id: 'hypergrowth',
        title: 'Hypergrowth Hurricane',
        dungeon: 4,
        description: 'Team doubles overnight. Chaos ensues. Process breaks down.',
        choices: [
          { text: 'Build process immediately', energy: -50, velocity: -20, morale: +20, xp: 70, success: 0.75, optimal: true },
          { text: 'Hire process lead', budget: -100000, velocity: +10, xp: 60, success: 0.85 },
          { text: 'Let team self-organize', energy: -20, morale: +10, velocity: -30, xp: 40, success: 0.5 },
          { text: 'Slow hiring temporarily', credibility: -20, morale: -10, xp: 35, success: 0.9 }
        ],
        reward: { item: 'vision_bow', xp: 300, budget: +100000 }
      },
      {
        id: 'board_meeting',
        title: 'The Board Meeting',
        dungeon: 5,
        description: 'Present product strategy to board. They\'re skeptical about your vision.',
        choices: [
          { text: 'Data-driven presentation', energy: -45, credibility: +40, xp: 80, success: 0.85, optimal: true },
          { text: 'Vision storytelling', energy: -50, credibility: +50, xp: 90, success: 0.7 },
          { text: 'Competitive analysis focus', energy: -40, credibility: +30, xp: 70, success: 0.8 },
          { text: 'Financial projections', energy: -35, credibility: +25, xp: 65, success: 0.75 }
        ],
        reward: { item: 'first_principles', xp: 400, budget: +250000 }
      },
      {
        id: 'quarterly_miss',
        title: 'Quarterly Miss Meltdown',
        dungeon: 6,
        description: 'Revenue miss. Investors panic. CEO under pressure. Your products blamed.',
        choices: [
          { text: 'Take accountability', energy: -60, credibility: +45, morale: +20, xp: 100, success: 0.8, optimal: true },
          { text: 'Present recovery plan', energy: -55, credibility: +40, xp: 95, success: 0.85 },
          { text: 'Shift focus to next quarter', energy: -45, credibility: +25, xp: 75, success: 0.7 },
          { text: 'Blame market conditions', credibility: -30, xp: 40, success: 0.5 }
        ],
        reward: { item: 'north_star', xp: 500, credibility: +50 }
      },
      {
        id: 'ipo_acquisition',
        title: 'IPO/Acquisition Decision',
        dungeon: 7,
        description: 'Company at crossroads. Go public or sell? Board wants your recommendation.',
        choices: [
          { text: 'Recommend IPO', energy: -70, credibility: +60, xp: 150, success: 0.75 },
          { text: 'Recommend acquisition', energy: -70, credibility: +55, xp: 145, success: 0.8 },
          { text: 'Present both options', energy: -80, credibility: +70, xp: 160, success: 0.85, optimal: true },
          { text: 'Recommend staying private', energy: -60, credibility: +40, xp: 120, success: 0.65 }
        ],
        reward: { xp: 1000, credibility: +100, victory: true }
      }
    ]
  },

  // Dialogue and flavor text
  dialogue: {
    success: [
      'Perfect execution! Shipped on time.',
      'Stakeholder satisfied! Credibility increased.',
      'Team morale boosted! Velocity up.',
      'Smart decision! Data backs you up.',
      'Well navigated! Political capital gained.',
      'Excellent prioritization! Focused on what matters.',
      'Ship it! Users are happy.'
    ],
    
    failure: [
      'Scope creep! Deadline missed.',
      'Stakeholder disappointed. Credibility decreased.',
      'Team burnout! Morale down.',
      'Missed the mark. Users confused.',
      'Political misstep. Lost influence.',
      'Poor prioritization. Wasted effort.',
      'Bug in production. Customer impact.'
    ],
    
    funny: [
      'You\'ve been CC\'d on 47 emails. Lose 2 Energy.',
      'Another meeting that could\'ve been a Slack message.',
      'Engineering says "just one more sprint."',
      'CEO: "Can we add AI to this?" You: "Sure..." *nervous laughter*',
      'Product-market fit found! (Just kidding, keep iterating.)',
      'Your roadmap is a beautiful fiction.',
      'Stakeholder used JARGON BLAST! It\'s super effective!',
      'You gained the power of "I\'ll circle back on that."',
      'Sprint velocity: Fast. Technical debt: Faster.',
      'Congratulations! You\'ve unlocked: Imposter Syndrome.'
    ]
  },

  // Random events for idle progression
  randomEvents: [
    { message: 'User loves the new feature! +5 Credibility', credibility: +5, xp: +10 },
    { message: 'Bug reported. -3 Credibility', credibility: -3 },
    { message: 'Team shipped ahead of schedule! +10 XP', xp: +10, morale: +5 },
    { message: 'Unexpected meeting. -10 Energy', energy: -10 },
    { message: 'Customer interview insights gained! +15 XP', xp: +15 },
    { message: 'Competitor launched similar feature. Pressure mounting.', credibility: -2 },
    { message: 'Engineering found elegant solution! +5 Velocity', velocity: +5, xp: +8 },
    { message: 'Sales closed big deal using your product! +$25k Budget', budget: +25000, credibility: +5 }
  ],

  // Helper to get random encounter
  getRandomEncounter(type, level) {
    const encounters = this.encounters[type] || [];
    if (encounters.length === 0) return null;
    
    // Filter by appropriate difficulty for level
    let filtered = encounters;
    if (level <= 2) {
      filtered = encounters.slice(0, Math.ceil(encounters.length / 2));
    }
    
    const index = Math.floor(Math.random() * filtered.length);
    return { ...encounters[index] };
  },

  // Helper to get random event
  getRandomEvent() {
    const index = Math.floor(Math.random() * this.randomEvents.length);
    return { ...this.randomEvents[index] };
  },

  // Get boss encounter for dungeon level
  getBossEncounter(dungeonLevel) {
    return this.encounters.boss.find(boss => boss.dungeon === dungeonLevel) || this.encounters.boss[0];
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PMContent;
}
