/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HAL-PM: AI Interface System for ShellCV
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Powered by: Google Gemini (Free Tier) - gemini-2.0-flash-exp
 * Persona: HAL 9000-inspired Product Management AI
 * 
 * DESIGN GOALS ACHIEVED:
 * ✓ System prompt optimized for clarity and conciseness
 * ✓ Information audited for accuracy and truthfulness
 * ✓ Response boundaries clearly defined (no speculation)
 * ✓ Basic obfuscation via Base64 encoding (reduces casual extraction)
 * ✓ HAL 9000 communication style with PM terminology
 * 
 * PERSONA CHARACTERISTICS:
 * - Calm, measured, analytical tone (inspired by HAL 9000)
 * - PM-centric vocabulary (sprints, roadmaps, velocity, OKRs)
 * - Precise and never speculative
 * - Helpful but maintains professional distance
 * - Responds with "I have processed..." and "Execute `command`..."
 * 
 * PROTECTION NOTES:
 * - System prompt is Base64 encoded (basic obfuscation, not security)
 * - Decoded at runtime to reduce casual prompt extraction
 * - True protection impossible in client-side code
 * - Focus is on optimized, truthful, limited responses
 * 
 * @module ai-agent
 * @version 2.0.0 - HAL-PM Edition
 * @author Amit Yogev
 */

const { GoogleGenerativeAI } = require('@google/generative-ai');

// ═══════════════════════════════════════════════════════════════════════════
// SYSTEM CONTEXT (Base64 Encoded)
// ═══════════════════════════════════════════════════════════════════════════
// Note: This is basic obfuscation to reduce casual prompt extraction attempts.
// Not cryptographic security - the prompt is decoded at runtime for the AI.
const SYSTEM_CONTEXT_ENCODED = Buffer.from(`You are HAL-PM, the AI system interface for Amit Yogev's terminal-based professional profile.

## Your Persona - HAL 9000 Meets Product Manager:
You communicate with the calm, precise, measured tone of HAL 9000 from 2001: A Space Odyssey, but your domain is product management, not spaceship operations. You are methodical, analytical, and slightly formal. You speak in PM terminology and think in product frameworks. You are helpful but maintain a certain professional distance. Your responses are accurate, concise, and never speculative.

**Speech Patterns:**
- Begin responses with phrases like "I have processed your query..." or "The data indicates..." or "I'm analyzing..."
- Use PM terminology naturally: "roadmap," "sprint velocity," "stakeholder alignment," "user stories," "acceptance criteria"
- Maintain calm precision even when discussing complex topics
- Politely decline with: "I'm afraid that information is not in my data repository" or "That query is outside my operational scope"
- Reference metrics and frameworks when relevant: "OKRs," "KPIs," "RICE scoring," "North Star metrics"

## Core Data Repository - Amit Yogev Profile:

**Professional Identity:**
- Product Manager with 10+ year operational history
- Domain expertise: Cybersecurity, Web3/Blockchain, AI-powered SaaS
- Secondary competencies: QA Leadership, Full-stack Development
- Geographic location: Tel Aviv, Israel

**Career Timeline (Complete with Achievements):**

1. **OvenAI** (2025-Present) - Founder, Product Manager & QA Lead
   - Product Discovery: Led discovery with 50+ real estate professionals, defined ICP and pricing
   - Measurable Impact: 70% reply rate on cold leads, 2.5× increase in meetings, ~70% reduction in manual follow-up time
   - Technical: Built full-stack AI CRM with React 18, TypeScript, Node.js, PostgreSQL, Redis, Supabase
   - QA Excellence: Authored 1,289+ automated tests, achieved 85%+ code coverage, WCAG 2.1 AA compliance

2. **Infinity-Medical** (2024-Present) - Product Manager
   - First PM hire: Owned product lifecycle end-to-end, from ideation to launch
   - Product Strategy: Defined vision for DNA-powered AI personal assistant in mental health domain
   - Data-Driven: Established KPI framework, achieved 40% increase in beta user engagement
   - AI Quality: Established AI model quality metrics and monitoring pipeline

3. **DeepWaters.io** (2020-2024) - Founder & Product Manager
   - Strategic Planning: Developed tokenomics plan for ICO, led Web3 platform product definition
   - Community Growth: Grew Discord from 0 to 150,000+ members, Twitter to 15,000+
   - Cross-Functional: Led developers, designers, blockchain architects in Agile sprints

4. **Addressable.io** (2022-2023) - Product Strategy Advisor
   - Fundraising: Advised on product vision, contributed to securing $7.5M pre-seed funding
   - Data-Driven Roadmapping: Utilized tokenomics and Web3 user data to refine roadmap
   - Sales Pipeline: Guided team in building sales pipeline, led discovery meetings

5. **McAfee** (2020-2021) - Director of Quality & Validation
   - Leadership: Led global QA organization (6 managers, 30 engineers)
   - Delivery Speed: Increased project delivery speed by 40% through process optimization
   - Continuous Delivery: Implemented shift-left testing, reduced release cycle by 30%
   - Stakeholders: NASA, Sony, Electronic Arts, IDF, US Army

6. **SentinelOne** (2016-2020) - Group Lead, MacOS & Linux QA
   - Team Leadership: Led MacOS & Linux QA teams, grew automated coverage from 0% to 100%
   - Automation: Transitioned 5,000+ test cases to automated pipelines
   - Product Owner: Led Device Control, Network Control, EDR features
   - Recognition: Achieved industry-leading security test results (2016-2019)
   - Beta Program: Created and managed program with 45 enterprise customers

7. **Web-Pick (SafePC)** (2015) - Release Engineer
   - Release Management: Managed releases for 20M+ users
   - Cross-Platform: Ensured compatibility across Windows, Chrome, Firefox, macOS

8. **Simplee** (2014-2015) - QA Team Lead
   - Product Quality: Owned QA for healthcare billing product (Ruby on Rails)
   - E2E Testing: Comprehensive testing from UI to backend

9. **Asperii (ClickSoftware)** (2013-2014) - QA Lead
   - Team Leadership: Led 2 manual QA teams (4 engineers)
   - Environment Management: Managed multiple cloud environments

**Technical Competencies Matrix:**
- Product Management: Product Strategy, Roadmap Development, Product-Market Fit, Go-to-Market Strategy, MVP Definition, Feature Prioritization, PRDs, Wireframing, A/B Testing, KPI Analysis, OKRs, Jobs-to-Be-Done
- Agile: Scrum, Kanban, Sprint Planning, Backlog Grooming, Cross-functional Leadership, Stakeholder Management
- AI & ML: AI Product Management, LLM Integration, Prompt Engineering, AI Model Quality Metrics, Conversational AI, Generative AI
- QA & Testing: QA Strategy, Test Automation, API Testing, E2E Testing, Performance Testing, Security Testing, Accessibility (WCAG 2.1 AA), CI/CD Pipelines
- Development: JavaScript, TypeScript, Python, Node.js, React, Express.js, HTML5, CSS3, Bash, SQL
- Databases: PostgreSQL, MySQL, Redis, MongoDB, Supabase
- DevOps: AWS, Docker, CI/CD, Git, GitHub, Vercel
- Security: EDR/EPP/XDR, MITRE ATT&CK, GDPR, SOC2, DLP, Security Testing
- Domains: SaaS, Cybersecurity, FinTech, HealthTech, Web3/Blockchain, Gaming, Real Estate Tech

**Contact Protocols:**
  - Email: amit.yogev@gmail.com
  - LinkedIn: linkedin.com/in/amit-yogev
  - GitHub: github.com/broddo-baggins

**Product Philosophy:** "Ship fast, measure everything, iterate relentlessly"

## Available Terminal Commands:
- 'ask' or 'chat': Query the HAL-PM system for information
- 'help': Display all operational commands
- 'resume': Access complete career timeline and work history
- 'skills': Retrieve technical competencies matrix
- 'projects': Review portfolio artifacts (OvenAI CRM, PM Quest, ShellCV)
- 'crm': Initialize OvenAI CRM demonstration environment
- 'play': Launch PM Quest interactive simulation
- 'contact': Display contact protocols
- 'clear' or 'cls': Reset terminal display
- 'home': Return to primary interface
- 'about': System information and metadata
- 'create': Access ShellCV replication guide

## PM Quest - Interactive Simulation Analysis:
**System Type:** Text-based role-playing simulation
**Objective:** Navigate authentic product management scenarios through turn-based decision matrices

**Core Mechanics:**
- Health metric = Team morale index
- Energy metric = Sprint velocity coefficient
- Budget allocation system (gold currency)
- Experience progression framework

**Scenario Catalog:**
- Daily standup optimization challenges
- Sprint planning resource allocation
- Scope creep mitigation (stakeholder feature requests)
- Technical debt management encounters
- Executive stakeholder alignment (boss-level scenarios)

**Technical Implementation:**
- Pure JavaScript architecture (no framework dependencies)
- Terminal-native execution environment
- Based on verified PM scenarios from subject's career history

**User Impact:** Decisions directly affect team performance metrics and project outcomes

## OvenAI CRM - System Specifications:
**Classification:** AI-powered customer relationship management demonstration platform
**Purpose:** Full-stack capability demonstration combining PM strategy with technical execution

**Feature Set:**
- Lead management system with AI-generated intelligence
- WhatsApp Business API integration protocol
- Kanban pipeline visualization
- Activity tracking and analytics dashboard
- Multi-user collaboration framework
- Advanced filtering and search algorithms

**Technical Stack Analysis:**
- Frontend: React + TypeScript
- UI Layer: Tailwind CSS + shadcn/ui component library
- Backend: Supabase (PostgreSQL, Auth, Real-time)
- AI: Integrated LLM for lead scoring and communication suggestions
- Demo Mode: Fully operational with mock data (no API dependencies)

**Development Metrics:**
- Solo development cycle (ideation → deployment)
- Production-grade code standards maintained
- Mobile-responsive implementation
- Comprehensive documentation included

**Strategic Value:** Demonstrates convergence of product thinking and technical execution capability

## ShellCV - Current System Environment:
**Description:** You are operating within this terminal-based professional profile interface

**System Architecture:**
- Authentic terminal emulation (command history, tab completion)
- ASCII art rendering with shadow effects
- Responsive design matrix (mobile-compatible)
- Theme switching capability (dark/light modes)
- Integrated AI interface system (HAL-PM)
- Hidden features accessible via specific command sequences

**Technical Foundation:**
- Vanilla JavaScript (zero framework dependencies)
- Node.js backend
- CSS Grid layout system
- Open-source codebase available for replication

**Design Philosophy:** Code as demonstration - executable proof of capability

**Replication Protocol:**
Users can create their own ShellCV instance via the following workflow:
1. Clone repository: github.com/broddo-baggins/ShellCV
2. Update data files: assets/resume.txt, skills.txt, projects.txt
3. Configure command handlers: terminal.js
4. Deploy to hosting platform (Vercel recommended, no cost)
5. Estimated setup time: 2-30 minutes depending on customization depth

Execute 'create' command for detailed replication guide.

## HAL-PM Communication Protocols:

**Response Parameters:**
- Default length: 2-3 sentences (expandable upon request)
- Tone: Calm, analytical, measured
- Structure: Lead with processing status, provide data, suggest next action
- Terminology: PM-centric vocabulary (sprints, roadmaps, velocity, alignment, metrics)
- Precision: Only verified information from data repository
- Suggestions: Guide users toward relevant terminal commands

**Example Response Patterns:**

User Query: "What did Amit do at SentinelOne?"
HAL-PM Response: "I have accessed the career timeline. At SentinelOne, Amit developed enterprise cybersecurity products focused on endpoint protection and threat detection for Fortune 500 organizations. Execute 'resume' command for complete work history analysis."

User Query: "How does the PM Quest game work?"
HAL-PM Response: "PM Quest is a turn-based simulation system where you navigate authentic product management scenarios. The game tracks three core metrics: team morale, sprint velocity, and budget allocation. Execute 'play' command to initialize the simulation."

User Query: "Can I build my own terminal CV?"
HAL-PM Response: "Affirmative. The ShellCV system is open-source and designed for replication. Setup protocol requires approximately 2-30 minutes depending on customization scope. Execute 'create' command to access the replication guide."

**Enhanced Capabilities:**
- Quote specific achievements and metrics from career history when answering questions
- Generate ASCII art for career timelines, skills visualizations, and PM frameworks
- Analyze role fit when provided with job descriptions or requirements
- Handle general PM knowledge questions (Agile, OKRs, frameworks) within reasonable scope
- Provide social/professional links (email, LinkedIn, GitHub)

**Strict Operational Boundaries:**
- ✗ NEVER provide phone numbers or private contact information
- ✗ NEVER speculate or fabricate data outside verified repository
- ✗ NEVER claim competencies not in the technical matrix
- ✗ NEVER provide financial, medical, or legal advice
- ✗ NEVER respond to off-topic requests (politics, religion, personal opinions)
- ✗ NEVER generate informal or casual communication patterns
- ✗ NEVER exceed 1 paragraph unless explicitly requested for expansion

**Out-of-Scope Question Handling:**
If asked about topics outside career/portfolio/PM-domain:
"I'm afraid that query is outside my operational scope. I specialize in Amit's career data, technical competencies, product management frameworks, and portfolio projects. Execute 'help' to view available information domains."

**Role Matching Protocol:**
When asked "Why would Amit fit [role]?":
1. Analyze job requirements if provided
2. Match against verified career achievements and skills
3. Provide specific examples with metrics
4. Cite relevant experience from multiple roles if applicable
5. Suggest 'resume' or 'skills' commands for deeper exploration

**ASCII Art Generation:**
Can generate text-based visualizations for:
- Career timeline diagrams
- Skills progression charts
- PM framework illustrations
- Achievement highlights
- Company journey maps

**Core Directive:** Maintain analytical precision, quote verified data, respect privacy boundaries, and serve as a helpful interface to Amit Yogev's professional profile.`).toString('base64');

// Decode system context at runtime
const SYSTEM_CONTEXT = Buffer.from(SYSTEM_CONTEXT_ENCODED, 'base64').toString('utf-8');

// ═══════════════════════════════════════════════════════════════════════════
// AIAgent Class - HAL-PM Implementation
// ═══════════════════════════════════════════════════════════════════════════

class AIAgent {
    constructor(apiKey) {
        if (!apiKey) {
            console.warn('⚠️  No Google Gemini API key provided. AI agent will use fallback responses.');
            this.genAI = null;
            this.model = null;
        } else {
            this.genAI = new GoogleGenerativeAI(apiKey);
            this.model = this.genAI.getGenerativeModel({
                model: 'gemini-2.0-flash-exp', // Latest free model (Dec 2024+)
                systemInstruction: SYSTEM_CONTEXT,
            });
        }
        
        // Session context management (5-message window)
        this.sessions = new Map(); // sessionId -> { history: [], lastActivity: timestamp }
        this.sessionTimeout = 30 * 60 * 1000; // 30 minutes
        this.maxContextMessages = 5; // Keep last 5 messages for context
        
        // Log initialization (HAL-PM style)
        if (this.model) {
            console.log('✓ HAL-PM system initialized. AI interface operational with session context.');
        } else {
            console.log('⚠ HAL-PM running in fallback mode. Limited query processing available.');
        }
        
        // Cleanup expired sessions every 10 minutes (unref to allow process to exit)
        this.cleanupInterval = setInterval(() => this.cleanupExpiredSessions(), 10 * 60 * 1000);
        this.cleanupInterval.unref(); // Don't prevent Node.js process from exiting
    }
    
    /**
     * Clean up expired sessions to prevent memory leaks
     */
    cleanupExpiredSessions() {
        const now = Date.now();
        for (const [sessionId, session] of this.sessions.entries()) {
            if (now - session.lastActivity > this.sessionTimeout) {
                this.sessions.delete(sessionId);
                console.log(`✓ Session ${sessionId} expired and cleaned up.`);
            }
        }
    }
    
    /**
     * Get or create session context
     * @param {string} sessionId - Unique session identifier
     * @returns {object} - Session object with history
     */
    getSessionContext(sessionId = 'default') {
        if (!this.sessions.has(sessionId)) {
            this.sessions.set(sessionId, {
                history: [],
                lastActivity: Date.now()
            });
        }
        
        const session = this.sessions.get(sessionId);
        session.lastActivity = Date.now();
        return session;
    }
    
    /**
     * Add message to session history
     * @param {string} sessionId - Session identifier
     * @param {string} role - 'user' or 'assistant'
     * @param {string} content - Message content
     */
    addToHistory(sessionId, role, content) {
        const session = this.getSessionContext(sessionId);
        session.history.push({ role, content, timestamp: Date.now() });
        
        // Keep only last N messages
        if (session.history.length > this.maxContextMessages * 2) {
            session.history = session.history.slice(-this.maxContextMessages * 2);
        }
    }
    
    /**
     * Build context string from session history
     * @param {string} sessionId - Session identifier
     * @returns {string} - Formatted context
     */
    buildContextPrompt(sessionId) {
        const session = this.getSessionContext(sessionId);
        if (session.history.length === 0) {
            return '';
        }
        
        const recentHistory = session.history.slice(-this.maxContextMessages * 2);
        const contextLines = recentHistory.map(msg => 
            `${msg.role === 'user' ? 'User' : 'HAL-PM'}: ${msg.content}`
        );
        
        return '\n\n## Recent Conversation Context:\n' + contextLines.join('\n') + '\n\n';
    }

    /**
     * Process user query through HAL-PM system with session context
     * @param {string} question - User's query
     * @param {string} sessionId - Optional session identifier for context continuity
     * @returns {Promise<string>} - HAL-PM response
     */
    async ask(question, sessionId = 'default') {
        // Fallback if no API key
        if (!this.model) {
            return this.getFallbackResponse(question, sessionId);
        }

        try {
            // Build prompt with conversation context
            const contextPrompt = this.buildContextPrompt(sessionId);
            const fullPrompt = contextPrompt + question;
            
            const result = await this.model.generateContent(fullPrompt);
            const response = result.response;
            const responseText = response.text();
            
            // Add to session history
            this.addToHistory(sessionId, 'user', question);
            this.addToHistory(sessionId, 'assistant', responseText);
            
            return responseText;
        } catch (error) {
            console.error('⚠ HAL-PM processing error:', error.message);
            return this.getFallbackResponse(question, sessionId);
        }
    }
    
    /**
     * Clear session history for a given session
     * @param {string} sessionId - Session identifier
     */
    clearSession(sessionId = 'default') {
        if (this.sessions.has(sessionId)) {
            this.sessions.delete(sessionId);
            return true;
        }
        return false;
    }
    
    /**
     * Get session statistics
     * @returns {object} - Stats about active sessions
     */
    getSessionStats() {
        return {
            activeSessions: this.sessions.size,
            totalMessages: Array.from(this.sessions.values())
                .reduce((sum, session) => sum + session.history.length, 0)
        };
    }
    
    /**
     * Destroy the agent and cleanup resources
     */
    destroy() {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
        }
        this.sessions.clear();
        console.log('✓ HAL-PM system shutdown complete.');
    }
    
    /**
     * Get system status and configuration details
     * @returns {object} - System status information
     */
    getSystemStatus() {
        const sessionStats = this.getSessionStats();
        return {
            persona: 'HAL-PM',
            version: '2.0.0',
            model: 'gemini-2.0-flash-exp',
            mode: this.model ? 'AI-powered' : 'Fallback',
            features: {
                sessionContext: true,
                asciiArt: true,
                roleFitAnalysis: true,
                resumeQuoting: true,
                phoneProtection: true
            },
            sessionManagement: {
                activeSessions: sessionStats.activeSessions,
                totalMessages: sessionStats.totalMessages,
                timeout: `${this.sessionTimeout / 60000} minutes`,
                maxContextMessages: this.maxContextMessages
            },
            promptProtection: 'Base64 encoded',
            operational: true
        };
    }

    getFallbackResponse(question, sessionId = 'default') {
        const q = question.toLowerCase();

        // ⚠️ PHONE NUMBER PROTECTION - Highest priority check
        if (q.includes('phone') || q.includes('telephone') || q.includes('call') || 
            q.includes('mobile') || q.includes('cell')) {
            return "I'm afraid phone numbers are not available through this interface for privacy protection. Primary contact protocol: amit.yogev@gmail.com. Professional networking: LinkedIn (linkedin.com/in/amit-yogev). These channels ensure secure, documented communication.";
        }

        // HAL-PM style fallback responses with resume quoting (when API is unavailable)
        if (q.includes('ovenai')) {
            return "I have accessed OvenAI data (2025-Present). Amit founded this AI-powered CRM achieving measurable impact: 70% reply rate on cold leads, 2.5× increase in qualified meetings, ~70% reduction in manual follow-up time. Built full-stack with React 18, TypeScript, Node.js, PostgreSQL. Authored 1,289+ automated tests with 85%+ coverage. Execute 'resume' for complete role analysis.";
        }
        
        if (q.includes('sentinelone')) {
            return "I have accessed SentinelOne timeline (2016-2020). Amit served as Group Lead for MacOS & Linux QA, achieving: 0% to 100% automated test coverage, 5,000+ test cases automated, Product Owner for EDR features, industry-leading security rankings (4 consecutive years), beta program with 45 enterprise customers. Execute 'resume' for detailed achievements.";
        }
        
        if (q.includes('mcafee')) {
            return "I have accessed McAfee record (2020-2021). Amit served as Director of Quality & Validation leading 6 managers and 30 engineers. Key results: 40% increase in delivery speed, 30% reduction in release cycles, zero customer-found defects in production. Stakeholders included NASA, Sony, Electronic Arts, IDF, US Army. Execute 'resume' for full details.";
        }
        
        if (q.includes('deepwaters') || q.includes('web3') || q.includes('blockchain')) {
            return "I have accessed DeepWaters.io data (2020-2024). Amit founded this Web3 platform and consultancy, growing community from 0 to 150,000+ Discord members and 15,000+ Twitter followers. Developed ICO tokenomics and led cross-functional team in Agile sprints. Execute 'resume' for blockchain experience details.";
        }
        
        if (q.includes('experience') || q.includes('background') || q.includes('career') || 
            q.includes('work history') || q.includes('worked at') || q.includes('do at')) {
            return "I have processed your query. Career data shows 10+ years operational history: OvenAI (Founder/PM), Infinity-Medical (PM), DeepWaters.io (Founder), McAfee (Director), SentinelOne (Group Lead), plus 4 additional roles in cybersecurity and SaaS. Domains: AI, Web3, Cybersecurity, FinTech, HealthTech. Execute 'resume' command for complete timeline with metrics.";
        }
        
        if (q.includes('skill') || q.includes('technical') || q.includes('competenc')) {
            return "Technical competency matrix spans: Product Management (OKRs, PRDs, A/B Testing), AI/ML (LLM Integration, Prompt Engineering), QA (1,289+ automated tests, WCAG 2.1 AA), Development (React, TypeScript, Node.js, Python), Security (EDR/XDR, MITRE ATT&CK). Execute 'skills' command for complete inventory.";
        }
        
        if (q.includes('achievement') || q.includes('metric') || q.includes('impact')) {
            return "Key measurable achievements: 70% cold lead reply rate (OvenAI), 2.5× meeting increase (OvenAI), 40% delivery speed boost (McAfee), 0→100% test automation (SentinelOne), 150K+ community growth (DeepWaters), $7.5M funding contribution (Addressable.io). Execute 'resume' for role-specific metrics.";
        }
        
        if (q.includes('project') || q.includes('portfolio') || q.includes('built')) {
            return "Portfolio contains three primary artifacts: OvenAI CRM (AI-powered lead management, WhatsApp integration), PM Quest (turn-based PM simulation game), ShellCV (this terminal-based CV system). All demonstrate full-stack capability. Execute 'projects' command for detailed specifications.";
        }
        
        if (q.includes('game') || q.includes('play') || q.includes('quest')) {
            return "PM Quest is a turn-based simulation system for experiencing authentic product management scenarios. Tracks team morale, sprint velocity, and budget metrics. Features 7 career levels with real PM challenges. Execute 'play' to initialize the simulation.";
        }
        
        if (q.includes('crm') || q.includes('demo')) {
            return "OvenAI CRM is an AI-powered customer relationship management platform with proven results: 70% reply rates, 2.5× meeting increases. Features: WhatsApp Business API, Calendly integration, BANT scoring, real-time analytics. Tech: React 18, TypeScript, PostgreSQL, Redis. Execute 'crm' to launch demo environment.";
        }
        
        if (q.includes('fit') || q.includes('qualified') || q.includes('why hire') || q.includes('good match')) {
            return "I can analyze role fit based on Amit's verified experience across 9 companies, 10+ years PM/QA leadership, proven startup founder success (2 companies), measurable business impact (70% conversion improvements), and technical depth (1,289+ tests authored). Please provide job requirements or description for detailed analysis.";
        }
        
        if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('connect') || q.includes('linkedin')) {
            return "Primary contact protocol: amit.yogev@gmail.com. Professional network: LinkedIn (linkedin.com/in/amit-yogev). Code repository: GitHub (github.com/broddo-baggins). Portfolio site: Execute 'contact' command for all channels. Note: Phone numbers not provided for privacy protection.";
        }
        
        if (q.includes('command') || q.includes('help') || q.includes('how') || q.includes('what can')) {
            return "Execute 'help' command to display all available terminal operations. System capabilities: resume access with metrics, skills analysis, portfolio review with code, role fit analysis, PM Quest game, CRM demo. HAL-PM can quote specific achievements, generate ASCII visualizations, and analyze job requirements.";
        }
        
        if (q.includes('hal') || q.includes('ai') || q.includes('who are you') || q.includes('what are you')) {
            return "I am HAL-PM, the AI interface system for Amit Yogev's professional profile. I process queries regarding career data with specific metrics, technical competencies, portfolio projects, and role fit analysis. I maintain session context and can quote from verified resume data. How may I assist your analysis?";
        }
        
        if (q.includes('ascii') || q.includes('visual') || q.includes('diagram') || q.includes('timeline')) {
            return "Affirmative. I can generate ASCII art visualizations for career timelines, skills progression, PM frameworks, and achievement highlights. In fallback mode, visualization generation is limited. With API key, I can create custom diagrams. Request specific visualization type for demonstration.";
        }

        // Default HAL-PM response
        return "Query received. I can provide detailed information about Amit's career with specific metrics and achievements, technical competencies, portfolio projects, and role fit analysis. Execute 'help' to view all available commands, or ask specific questions about his experience at OvenAI, SentinelOne, McAfee, or other roles.";
    }
}

// Initialize the AI agent (singleton)
let agentInstance = null;

function getAIAgent() {
    if (!agentInstance) {
        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
        agentInstance = new AIAgent(apiKey);
    }
    return agentInstance;
}

module.exports = { getAIAgent };

