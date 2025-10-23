// PM Quest - Game State Management & Save System

const DEFAULT_STATE = {
  player: {
    name: "The Scrappy PM",
    level: 1,
    xp: 0,
    xpToNext: 100,
    title: "Junior Product Manager",
    energy: 100,
    maxEnergy: 100,
    credibility: 50,
    budget: 0
  },
  resources: {
    teamMorale: 75,
    velocity: 20,
    techDebt: 10
  },
  skills: {
    prioritization: 1,
    stakeholderMgmt: 1,
    dataAnalysis: 1,
    technical: 1,
    userEmpathy: 1,
    communication: 1,
    agile: 1,
    strategy: 1
  },
  inventory: [],
  progress: {
    currentAct: 1,
    encountersCompleted: 0,
    totalEncounters: 0,
    decisions: [],
    unlockedEncounters: ['dailyStandup', 'jiraTicketMountain']
  },
  stats: {
    totalPlayTime: 0,
    successfulDecisions: 0,
    failedDecisions: 0,
    itemsCollected: 0
  }
};

class GameState {
  constructor() {
    this.state = null;
  }

  // Initialize new game
  initNewGame() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.state.meta = {
      createdAt: Date.now(),
      lastSaved: Date.now(),
      version: '1.0.0'
    };
    return this.state;
  }

  // Get current state
  getState() {
    return this.state;
  }

  // Update state
  updateState(updates) {
    if (!this.state) return;
    
    // Deep merge updates into state
    this.state = this.deepMerge(this.state, updates);
    this.state.meta.lastSaved = Date.now();
  }

  // Deep merge helper
  deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  }

  // Add XP and check for level up
  addXP(amount) {
    if (!this.state) return null;
    
    this.state.player.xp += amount;
    
    // Check for level up
    if (this.state.player.xp >= this.state.player.xpToNext) {
      return this.levelUp();
    }
    
    return null;
  }

  // Level up logic
  levelUp() {
    this.state.player.level++;
    this.state.player.xp -= this.state.player.xpToNext;
    this.state.player.xpToNext = Math.floor(this.state.player.xpToNext * 1.5);
    
    // Update title based on level
    const newTitle = this.getTitleForLevel(this.state.player.level);
    this.state.player.title = newTitle;
    
    // Restore some resources on level up
    this.state.player.energy = Math.min(100, this.state.player.energy + 30);
    this.state.resources.teamMorale = Math.min(100, this.state.resources.teamMorale + 10);
    
    return {
      newLevel: this.state.player.level,
      newTitle: newTitle,
      skillPoint: true
    };
  }

  // Get title based on level
  getTitleForLevel(level) {
    if (level <= 5) return "Junior Product Manager";
    if (level <= 12) return "Product Manager";
    if (level <= 18) return "Senior Product Manager";
    if (level <= 24) return "Group PM / Lead PM";
    return "VP Product / CPO";
  }

  // Modify resources
  modifyResource(resource, amount) {
    if (!this.state) return;
    
    if (resource === 'energy') {
      this.state.player.energy = Math.max(0, Math.min(this.state.player.maxEnergy, this.state.player.energy + amount));
    } else if (resource === 'credibility') {
      this.state.player.credibility = Math.max(0, Math.min(100, this.state.player.credibility + amount));
    } else if (resource === 'budget') {
      this.state.player.budget = Math.max(0, this.state.player.budget + amount);
    } else if (this.state.resources[resource] !== undefined) {
      this.state.resources[resource] = Math.max(0, Math.min(100, this.state.resources[resource] + amount));
    }
  }

  // Add skill points
  addSkillPoint(skill, amount = 1) {
    if (!this.state || !this.state.skills[skill]) return;
    
    this.state.skills[skill] = Math.min(10, this.state.skills[skill] + amount);
  }

  // Check if skill requirement is met
  checkSkillRequirement(skill, requiredLevel) {
    if (!this.state) return false;
    return this.state.skills[skill] >= requiredLevel;
  }

  // Add item to inventory
  addItem(item) {
    if (!this.state) return;
    
    this.state.inventory.push(item);
    this.state.stats.itemsCollected++;
  }

  // Remove item from inventory
  removeItem(itemId) {
    if (!this.state) return;
    
    const index = this.state.inventory.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.state.inventory.splice(index, 1);
    }
  }

  // Record decision
  recordDecision(encounterId, choice, success) {
    if (!this.state) return;
    
    this.state.progress.decisions.push({
      encounterId,
      choice,
      success,
      timestamp: Date.now()
    });
    
    this.state.progress.encountersCompleted++;
    this.state.progress.totalEncounters++;
    
    if (success) {
      this.state.stats.successfulDecisions++;
    } else {
      this.state.stats.failedDecisions++;
    }
  }

  // Unlock new encounters
  unlockEncounter(encounterId) {
    if (!this.state) return;
    
    if (!this.state.progress.unlockedEncounters.includes(encounterId)) {
      this.state.progress.unlockedEncounters.push(encounterId);
    }
  }

  // Save game to hash
  saveToHash() {
    if (!this.state) return null;
    
    try {
      const saveData = {
        player: this.state.player,
        resources: this.state.resources,
        skills: this.state.skills,
        inventory: this.state.inventory,
        progress: this.state.progress,
        stats: this.state.stats,
        meta: this.state.meta
      };
      
      const jsonString = JSON.stringify(saveData);
      return btoa(jsonString);
    } catch (error) {
      console.error('Error saving game:', error);
      return null;
    }
  }

  // Load game from hash
  loadFromHash(hash) {
    try {
      const jsonString = atob(hash);
      const loadedState = JSON.parse(jsonString);
      
      // Validate loaded state
      if (!loadedState.player || !loadedState.skills) {
        throw new Error('Invalid save data');
      }
      
      this.state = loadedState;
      return true;
    } catch (error) {
      console.error('Error loading game:', error);
      return false;
    }
  }

  // Get success rate
  getSuccessRate() {
    if (!this.state) return 0;
    
    const total = this.state.stats.successfulDecisions + this.state.stats.failedDecisions;
    if (total === 0) return 0;
    
    return Math.round((this.state.stats.successfulDecisions / total) * 100);
  }

  // Check if game over
  isGameOver() {
    if (!this.state) return false;
    
    // Game over conditions
    return this.state.player.credibility <= 0 || 
           this.state.player.energy <= 0;
  }

  // Check if game won
  isGameWon() {
    if (!this.state) return false;
    
    // Win condition: Reach max level
    return this.state.player.level >= 30;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GameState, DEFAULT_STATE };
}

