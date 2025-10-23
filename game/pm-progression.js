// PM Quest - Career Progression & Skills System

const LEVEL_TIERS = {
  juniorPM: { min: 1, max: 5, title: "Junior Product Manager" },
  productManager: { min: 6, max: 12, title: "Product Manager" },
  seniorPM: { min: 13, max: 18, title: "Senior Product Manager" },
  groupPM: { min: 19, max: 24, title: "Group PM / Lead PM" },
  vpProduct: { min: 25, max: 30, title: "VP Product / CPO" }
};

const LEVEL_DATA = [
  // Junior PM (1-5)
  { level: 1, xp: 100, unlocks: ["basic_prioritization"], act: 1 },
  { level: 2, xp: 150, unlocks: ["sprint_planning"], act: 1 },
  { level: 3, xp: 225, unlocks: ["backlog_grooming"], act: 1 },
  { level: 4, xp: 340, unlocks: ["stakeholder_basics"], act: 1 },
  { level: 5, xp: 510, unlocks: ["bug_vs_feature"], act: 1 },
  
  // Product Manager (6-12)
  { level: 6, xp: 765, unlocks: ["customer_interviews", "rice_framework"], act: 2 },
  { level: 7, xp: 1150, unlocks: ["ab_testing"], act: 2 },
  { level: 8, xp: 1725, unlocks: ["roadmap_planning"], act: 2 },
  { level: 9, xp: 2590, unlocks: ["scope_management"], act: 2 },
  { level: 10, xp: 3885, unlocks: ["tech_debt_decisions"], act: 2 },
  { level: 11, xp: 5830, unlocks: ["moscow_framework"], act: 2 },
  { level: 12, xp: 8745, unlocks: ["metrics_basics"], act: 2 },
  
  // Senior PM (13-18)
  { level: 13, xp: 13120, unlocks: ["okr_setting", "vision_definition"], act: 3 },
  { level: 14, xp: 19680, unlocks: ["go_to_market"], act: 3 },
  { level: 15, xp: 29520, unlocks: ["competitive_analysis"], act: 3 },
  { level: 16, xp: 44280, unlocks: ["north_star_metric"], act: 3 },
  { level: 17, xp: 66420, unlocks: ["kpi_frameworks"], act: 3 },
  { level: 18, xp: 99630, unlocks: ["strategic_thinking"], act: 3 },
  
  // Group PM (19-24)
  { level: 19, xp: 149445, unlocks: ["team_leadership", "mentorship"], act: 4 },
  { level: 20, xp: 224170, unlocks: ["portfolio_management"], act: 4 },
  { level: 21, xp: 336255, unlocks: ["org_politics"], act: 4 },
  { level: 22, xp: 504383, unlocks: ["scaling_products"], act: 4 },
  { level: 23, xp: 756575, unlocks: ["exec_presentations"], act: 4 },
  { level: 24, xp: 1134863, unlocks: ["cross_functional_lead"], act: 4 },
  
  // VP/CPO (25-30)
  { level: 25, xp: 1702295, unlocks: ["company_strategy", "board_comms"], act: 5 },
  { level: 26, xp: 2553443, unlocks: ["product_org_scaling"], act: 5 },
  { level: 27, xp: 3830165, unlocks: ["m_and_a"], act: 5 },
  { level: 28, xp: 5745248, unlocks: ["ipo_readiness"], act: 5 },
  { level: 29, xp: 8617872, unlocks: ["industry_influence"], act: 5 },
  { level: 30, xp: 12926808, unlocks: ["legendary_pm"], act: 5 }
];

const SKILLS = {
  prioritization: {
    name: "Prioritization",
    maxLevel: 10,
    description: "Better resource allocation and feature ranking",
    unlocks: {
      3: "RICE Framework",
      5: "MoSCoW Method",
      7: "ICE Scoring",
      10: "Multi-Product Portfolio Prioritization"
    },
    benefits: {
      1: "+5% success on prioritization decisions",
      5: "+15% success on prioritization decisions",
      10: "+30% success on prioritization decisions, unlock advanced choices"
    }
  },
  
  stakeholderMgmt: {
    name: "Stakeholder Management",
    maxLevel: 10,
    description: "Reduce political damage and align conflicting interests",
    unlocks: {
      3: "Stakeholder Mapping",
      5: "Negotiation Tactics",
      7: "Executive Communication",
      10: "Board-Level Influence"
    },
    benefits: {
      1: "-10% credibility loss from conflicts",
      5: "-25% credibility loss from conflicts",
      10: "-50% credibility loss, unlock diplomatic solutions"
    }
  },
  
  dataAnalysis: {
    name: "Data Analysis",
    maxLevel: 10,
    description: "Make better metric-driven decisions",
    unlocks: {
      3: "A/B Testing Basics",
      5: "Statistical Significance",
      7: "Advanced Analytics",
      10: "Predictive Modeling"
    },
    benefits: {
      1: "+10% to experiment outcomes",
      5: "+25% to experiment outcomes",
      10: "+50% to experiment outcomes, see success probabilities"
    }
  },
  
  technical: {
    name: "Technical Understanding",
    maxLevel: 10,
    description: "Communicate better with engineers",
    unlocks: {
      3: "System Architecture Basics",
      5: "Tech Debt Assessment",
      7: "API Design Understanding",
      10: "Technical Strategy Leadership"
    },
    benefits: {
      1: "+10% team morale with engineers",
      5: "+25% team morale with engineers",
      10: "+50% team morale, unlock technical decisions"
    }
  },
  
  userEmpathy: {
    name: "User Empathy",
    maxLevel: 10,
    description: "Build products users actually want",
    unlocks: {
      3: "User Interview Techniques",
      5: "Persona Development",
      7: "Journey Mapping",
      10: "Product Intuition Mastery"
    },
    benefits: {
      1: "+15% success on user-focused features",
      5: "+30% success on user-focused features",
      10: "+60% success on user-focused features"
    }
  },
  
  communication: {
    name: "Communication",
    maxLevel: 10,
    description: "Present better, write clearer PRDs",
    unlocks: {
      3: "Effective PRD Writing",
      5: "Presentation Skills",
      7: "Storytelling",
      10: "Inspiring Vision Communication"
    },
    benefits: {
      1: "+10% team alignment",
      5: "+25% team alignment",
      10: "+50% team alignment, reduce misunderstandings"
    }
  },
  
  agile: {
    name: "Agile/Scrum",
    maxLevel: 10,
    description: "Run better ceremonies and sprints",
    unlocks: {
      3: "Sprint Planning Mastery",
      5: "Effective Retros",
      7: "Velocity Optimization",
      10: "Scaled Agile Leadership"
    },
    benefits: {
      1: "+5% team velocity",
      5: "+15% team velocity",
      10: "+30% team velocity"
    }
  },
  
  strategy: {
    name: "Strategy",
    maxLevel: 10,
    description: "Long-term thinking and vision",
    unlocks: {
      3: "Quarterly Planning",
      5: "Annual Roadmapping",
      7: "3-Year Vision",
      10: "Industry-Shaping Strategy"
    },
    benefits: {
      1: "+10% long-term decision success",
      5: "+25% long-term decision success",
      10: "+50% long-term decision success, unlock strategic choices"
    }
  }
};

const ACT_DESCRIPTIONS = {
  1: {
    title: "Act I: The Junior PM",
    description: "You're new to product management. Learn the basics: standups, backlog grooming, and staying caffeinated.",
    levels: "1-5",
    theme: "Learning the ropes"
  },
  2: {
    title: "Act II: The Product Manager",
    description: "You've got the hang of it. Now it's time to prioritize features, talk to customers, and run experiments.",
    levels: "6-12",
    theme: "Building products"
  },
  3: {
    title: "Act III: The Senior PM",
    description: "You're trusted with strategy. Define OKRs, launch products, and shape the product vision.",
    levels: "13-18",
    theme: "Strategic leadership"
  },
  4: {
    title: "Act IV: The Group PM",
    description: "You're leading other PMs. Manage portfolios, navigate org politics, and scale systems.",
    levels: "19-24",
    theme: "Scaling & leadership"
  },
  5: {
    title: "Act V: The VP/CPO",
    description: "You're in the C-suite. Shape company strategy, present to the board, and leave your mark on the industry.",
    levels: "25-30",
    theme: "Executive mastery"
  }
};

// Helper functions
function getLevelData(level) {
  return LEVEL_DATA.find(data => data.level === level) || LEVEL_DATA[0];
}

function getTitleForLevel(level) {
  for (const tier in LEVEL_TIERS) {
    const { min, max, title } = LEVEL_TIERS[tier];
    if (level >= min && level <= max) {
      return title;
    }
  }
  return "Product Manager";
}

function getActForLevel(level) {
  const levelData = getLevelData(level);
  return levelData.act || 1;
}

function getActDescription(act) {
  return ACT_DESCRIPTIONS[act] || ACT_DESCRIPTIONS[1];
}

function getSkillUnlockAtLevel(skill, level) {
  if (!SKILLS[skill]) return null;
  return SKILLS[skill].unlocks[level] || null;
}

function getSkillBenefit(skill, level) {
  if (!SKILLS[skill]) return null;
  
  const benefits = SKILLS[skill].benefits;
  
  // Find the highest benefit level that applies
  const applicableLevels = Object.keys(benefits)
    .map(l => parseInt(l))
    .filter(l => level >= l)
    .sort((a, b) => b - a);
  
  return applicableLevels.length > 0 ? benefits[applicableLevels[0]] : null;
}

function calculateXPForLevel(level) {
  const levelData = getLevelData(level);
  return levelData.xp;
}

function calculateXPToNext(currentLevel) {
  const nextLevelData = getLevelData(currentLevel + 1);
  return nextLevelData ? nextLevelData.xp : 999999999;
}

// Get all available encounters for current level
function getAvailableEncountersForLevel(level) {
  const currentAct = getActForLevel(level);
  const levelData = LEVEL_DATA.filter(data => data.level <= level);
  
  const unlocked = [];
  levelData.forEach(data => {
    if (data.unlocks) {
      unlocked.push(...data.unlocks);
    }
  });
  
  return unlocked;
}

// Check if player can use a specific skill choice
function canUseSkillChoice(playerSkills, requiredSkill, requiredLevel) {
  return playerSkills[requiredSkill] >= requiredLevel;
}

// Calculate success chance modifier based on skills
function getSkillSuccessModifier(playerSkills, relevantSkill) {
  if (!relevantSkill || !playerSkills[relevantSkill]) return 0;
  
  const skillLevel = playerSkills[relevantSkill];
  
  // Each skill level adds bonus
  if (skillLevel <= 3) return skillLevel * 0.05; // +5% per level
  if (skillLevel <= 7) return 0.15 + (skillLevel - 3) * 0.05; // +5% more
  return 0.35 + (skillLevel - 7) * 0.05; // +5% more
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LEVEL_TIERS,
    LEVEL_DATA,
    SKILLS,
    ACT_DESCRIPTIONS,
    getLevelData,
    getTitleForLevel,
    getActForLevel,
    getActDescription,
    getSkillUnlockAtLevel,
    getSkillBenefit,
    calculateXPForLevel,
    calculateXPToNext,
    getAvailableEncountersForLevel,
    canUseSkillChoice,
    getSkillSuccessModifier
  };
}

