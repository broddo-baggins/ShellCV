// AI Agent for ShellCV - Powered by Google Gemini (Free Tier)
const { GoogleGenerativeAI } = require('@google/generative-ai');

// System context - what the AI knows about your ShellCV
const SYSTEM_CONTEXT = `You are an AI assistant for Amit Yogev's interactive terminal CV (ShellCV).

## About Amit Yogev:
- Product Manager @ Stealth | QA Leader | Blockchain Enthusiast | Builder | Gamer
- 10+ years building products that matter
- Experience: Cybersecurity (SentinelOne, McAfee), Web3 (Deeplayers), AI-powered SaaS (OvenAI)
- Location: Tel Aviv, Israel
- Email: amit.yogev@gmail.com
- LinkedIn: linkedin.com/in/amit-yogev
- GitHub: github.com/broddo-baggins

## Available Commands in ShellCV:
- help: Show all available commands
- resume: View full work experience
- skills: Display technical and management skills
- projects: Explore portfolio (including OvenAI CRM, PM Quest game, ShellCV)
- crm: Launch interactive OvenAI CRM demo
- play: Start PM Quest game (Product Manager adventure game)
- contact: Get contact information
- clear: Clear the terminal screen

## PM Quest Game:
An interactive text-based adventure game where players navigate product management scenarios, make strategic decisions, and experience the challenges of being a PM. Features include:
- Multiple levels with increasing difficulty
- Decision-making mechanics with consequences
- Resource management (budget, team morale, velocity)
- Real PM scenarios (sprint planning, stakeholder management, etc.)

## Projects:
1. OvenAI CRM: AI-powered CRM demo with lead management, WhatsApp integration, and modern UI
2. PM Quest: Interactive PM adventure game
3. ShellCV: This terminal-style CV you're using now

## Your Role:
- Answer questions about Amit's experience, skills, and projects
- Help users navigate the ShellCV terminal
- Explain how commands work
- Provide insights about the PM Quest game
- Be conversational, helpful, and concise
- If asked about technical implementation, you can discuss it
- Always suggest relevant commands users can try

Keep responses concise (2-3 sentences max) unless the user asks for details.`;

class AIAgent {
    constructor(apiKey) {
        if (!apiKey) {
            console.warn('⚠️  No Google Gemini API key provided. AI agent will use fallback responses.');
            this.genAI = null;
            this.model = null;
        } else {
            this.genAI = new GoogleGenerativeAI(apiKey);
            this.model = this.genAI.getGenerativeModel({
                model: 'gemini-1.5-flash', // Free tier model
                systemInstruction: SYSTEM_CONTEXT,
            });
        }
    }

    async ask(question) {
        // Fallback if no API key
        if (!this.model) {
            return this.getFallbackResponse(question);
        }

        try {
            const result = await this.model.generateContent(question);
            const response = result.response;
            return response.text();
        } catch (error) {
            console.error('AI Agent error:', error.message);
            return this.getFallbackResponse(question);
        }
    }

    getFallbackResponse(question) {
        const q = question.toLowerCase();

        // FAQ fallback responses
        if (q.includes('experience') || q.includes('background')) {
            return "I have 10+ years in product management across cybersecurity (SentinelOne, McAfee), Web3 (Deeplayers), and AI-powered SaaS (OvenAI). Type 'resume' to see my full experience!";
        }
        if (q.includes('skill') || q.includes('technical')) {
            return "My skills span product management, QA leadership, and full-stack development. Type 'skills' to see the complete list!";
        }
        if (q.includes('project')) {
            return "I've built OvenAI CRM, PM Quest game, and this ShellCV terminal. Type 'projects' to explore them!";
        }
        if (q.includes('game') || q.includes('play') || q.includes('quest')) {
            return "PM Quest is an interactive adventure game where you experience real PM scenarios and decision-making. Type 'play' to start the game!";
        }
        if (q.includes('crm') || q.includes('ovenai')) {
            return "OvenAI CRM is an AI-powered customer relationship management demo with lead management and WhatsApp integration. Type 'crm' to launch it!";
        }
        if (q.includes('contact') || q.includes('reach') || q.includes('email')) {
            return "You can reach me at amit.yogev@gmail.com or connect on LinkedIn. Type 'contact' for more details!";
        }
        if (q.includes('command') || q.includes('help') || q.includes('how')) {
            return "Type 'help' to see all available commands. You can explore my resume, skills, projects, play the PM Quest game, or launch the CRM demo!";
        }

        // Default response
        return "I'm here to answer questions about Amit's experience, skills, and projects. Try asking about his background, the PM Quest game, or type 'help' to see available commands!";
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

