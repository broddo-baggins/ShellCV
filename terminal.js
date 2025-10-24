// Shell CV - YSAP-style terminal with typing animation
class ShellCV {
    constructor() {
        this.shellOutput = document.getElementById('shellOutput');
        this.inputLine = document.getElementById('inputLine');
        this.commandInput = document.getElementById('commandInput');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.typingSpeed = 2; // milliseconds per character for visible typing
        this.lastCommand = '';
        this.lastCommandTime = 0;
        this.gameActive = false;
        this.gameInstance = null;
        this.loadGameMode = false;
        this.waitingForOvenAIResponse = false;
        
        this.init();
    }

    async init() {
        // Show the initial curl command and animate the response
        await this.showInitialLoad();
        
        // Setup command input
        this.setupCommandInput();
        
        // Show input line
        this.inputLine.style.display = 'flex';
        this.commandInput.focus();
        
        // Ensure scroll to bottom after everything loads (especially for mobile)
        setTimeout(() => {
            this.scrollToBottom();
        }, 300);
    }

    async showInitialLoad() {
        // Type the curl command with ZSH-style prompt
        const curlCommand = document.createElement('div');
        curlCommand.innerHTML = '<span class="prompt-path">~/amityogev.com</span> <span class="prompt-symbol">$</span> ';
        this.shellOutput.appendChild(curlCommand);
        
        await this.typeText('curl amityogev.com', curlCommand);
        await this.sleep(300);
        
        // Add extra newlines for proper ASCII spacing
        this.shellOutput.appendChild(document.createElement('br'));
        this.shellOutput.appendChild(document.createElement('br'));
        
        // Create container for animated content
        const contentDiv = document.createElement('div');
        this.shellOutput.appendChild(contentDiv);
        
        // Animate the content loading
        const content = this.getHomeContent();
        await this.typeHTML(content, contentDiv);
        
        // Scroll to bottom - works for both desktop and mobile
        this.scrollToBottom();
    }
    
    async typeHTML(html, container) {
        // Show content with visible typing animation
        container.innerHTML = '';
        container.style.opacity = '1';
        
        // Split by major sections for smoother animation
        const lines = html.split('\n');
        const chunks = [];
        let currentChunk = '';
        
        // Group lines into chunks
        for (let line of lines) {
            currentChunk += line + '\n';
            if (line.includes('</div>') || line.includes('</pre>')) {
                chunks.push(currentChunk);
                currentChunk = '';
            }
        }
        if (currentChunk) chunks.push(currentChunk);
        
        // Type out each chunk with visible delay
        for (let chunk of chunks) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = chunk;
            container.appendChild(tempDiv);
            
            // Scroll to show new content
            window.scrollTo(0, document.body.scrollHeight);
            
            // Visible pause between chunks
            await this.sleep(20);
        }
    }
    
    scrollToBottom() {
        // Scroll both window and terminal body
        window.scrollTo(0, document.body.scrollHeight);
        
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
        
        // For mobile - ensure input line is visible
        if (this.inputLine) {
            this.inputLine.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    getHomeContent() {
        // Using HTML for proper color coding
        return this.createColoredContent();
    }

    getColoredContentHTML() {
        return `<pre style="color: #e5c07b; font-size: 10px; line-height: 1.2; margin: 6px 0; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">   █████╗ ███╗   ███╗██╗████████╗    ██╗   ██╗ ██████╗  ██████╗ ███████╗██╗   ██╗
  ██╔══██╗████╗ ████║██║╚══██╔══╝    ╚██╗ ██╔╝██╔═══██╗██╔════╝ ██╔════╝██║   ██║
  ███████║██╔████╔██║██║   ██║        ╚████╔╝ ██║   ██║██║  ███╗█████╗  ██║   ██║
  ██╔══██║██║╚██╔╝██║██║   ██║         ╚██╔╝  ██║   ██║██║   ██║██╔══╝  ╚██╗ ██╔╝
  ██║  ██║██║ ╚═╝ ██║██║   ██║          ██║   ╚██████╔╝╚██████╔╝███████╗ ╚████╔╝ 
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝  ╚═══╝  
  <span style="color: #e5c07b;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></pre>

<div style="text-align: center; color: #e0e0e0; font-size: 11px; margin: 8px 0;">Product Manager @ Stealth | QA Leader | Blockchain Enthusiast | Builder | Gamer</div>

<div class="info-boxes-container">
  <div class="info-box">
    <div class="info-box-header">About</div>
    <div class="info-box-content">Technical Product Manager, QA background.<br>Solo ideation to POC 100%.</div>
  </div>
  
  <div class="info-box">
    <div class="info-box-header">Socials</div>
    <div class="info-box-content">
<span style="color: #888;">LinkedIn</span>   <a href="https://linkedin.com/in/amit-yogev" style="color: #61c9d2; text-decoration: none;">linkedin.com/in/amit-yogev</a><br>
<span style="color: #888;">GitHub</span>     <a href="https://github.com/broddo-baggins" style="color: #61c9d2; text-decoration: none;">github.com/broddo-baggins</a><br>
<span style="color: #888;">Email</span>      <a href="mailto:amit.yogev@gmail.com" style="color: #61c9d2; text-decoration: none;">amit.yogev@gmail.com</a><br>
<span style="color: #888;">Location</span>   Tel Aviv, Israel
    </div>
  </div>
</div>

<div class="legend-container">
  <div style="color: #e5c07b; font-size: 11px; margin-bottom: 8px; font-weight: bold;">Commands</div>
  <pre style="color: #6c7380; font-size: 10px; line-height: 1.7; margin: 0;">Type 'help' for full command list

Quick commands: resume | skills | projects | ovenai | help</pre>
</div>`;
    }

    createColoredContent() {
        return this.getColoredContentHTML();
    }

    async typeText(text, container) {
        // Type character by character for command text only
        if (typeof text === 'string') {
            const tempSpan = document.createElement('span');
            container.appendChild(tempSpan);
            
            for (let i = 0; i < text.length; i++) {
                tempSpan.textContent += text[i];
                window.scrollTo(0, document.body.scrollHeight);
                await this.sleep(this.typingSpeed);
            }
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    setupCommandInput() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autoComplete();
            }
        });

        // Keep input focused
        document.addEventListener('click', () => {
            this.commandInput.focus();
        });
    }

    async handleCommand() {
        const command = this.commandInput.value.trim();
        if (!command) return;

        // Spam prevention: Check if same command was run in last second
        const now = Date.now();
        if (this.lastCommand === command && now - this.lastCommandTime < 1000) {
            this.printOutput('<span class="warning">⚠ Please wait a moment before running the same command again</span>');
            return;
        }
        this.lastCommand = command;
        this.lastCommandTime = now;

        // Add to history
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;

        // Display command
        this.printCommand(command);

        // Clear input
        this.commandInput.value = '';

        // Execute command
        await this.executeCommand(command.toLowerCase());

        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
        this.commandInput.focus();
    }

    printCommand(command) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        commandLine.innerHTML = `<span class="prompt-path">~/amityogev.com</span> <span class="prompt-symbol">$</span> <span class="command-text">${this.escapeHtml(command)}</span>`;
        this.shellOutput.appendChild(commandLine);
    }

    printOutput(text) {
        const outputDiv = document.createElement('div');
        outputDiv.innerHTML = text;
        this.shellOutput.appendChild(outputDiv);
    }

    async executeCommand(command) {
        // Check if game is active
        if (this.gameActive && this.gameInstance) {
            // Handle load game mode
            if (this.loadGameMode) {
                this.loadGameMode = false;
                this.gameInstance.loadGameFromHash(command.trim());
                return;
            }
            
            // Route input to game
            if (this.gameInstance.gameMode === 'menu') {
                await this.gameInstance.handleMenuInput(command);
            } else if (this.gameInstance.gameMode === 'playing') {
                await this.gameInstance.handleGameInput(command);
            } else if (this.gameInstance.gameMode === 'gameover' || this.gameInstance.gameMode === 'victory') {
                const cmd = command.trim().toLowerCase();
                if (cmd === 'n' || cmd === 'new') {
                    await this.gameInstance.newGame();
                } else if (cmd === 'q' || cmd === 'quit') {
                    this.gameInstance.exitGame();
                    this.gameActive = false;
                    this.gameInstance = null;
                }
            } else if (this.gameInstance.gameMode === 'exited') {
                this.gameActive = false;
                this.gameInstance = null;
                // Execute command normally
                await this.executeNormalCommand(command);
            }
            return;
        }

        await this.executeNormalCommand(command);
    }

    async executeNormalCommand(command) {
        // Handle Y/N response for OvenAI demo
        if (this.waitingForOvenAIResponse) {
            const response = command.toLowerCase();
            if (response === 'y' || response === 'yes') {
                // Vercel deployment URL (auto-generated from repo name)
                // Check https://vercel.com/dashboard for actual URL
                const OVENAI_DEMO_URL = 'https://ovenai-crm-portfolio-demo.vercel.app';
                
                window.open(OVENAI_DEMO_URL, '_blank');
                this.printOutput('<span class="success">✓ Opening demo in new tab...</span>');
                this.printOutput('<span class="comment">Tip: Return here to explore more commands (try "projects" or "play")</span>');
            } else {
                this.printOutput('<span class="comment">Demo cancelled. Type "ovenai" to try again, or "help" for other commands.</span>');
            }
            this.waitingForOvenAIResponse = false;
            return;
        }

        const args = command.split(' ');
        const cmd = args[0];

        switch(cmd) {
            case 'help':
                this.showHelp();
                break;
            case 'resume':
            case 'cv':
                await this.showResume();
                break;
            case 'skills':
                await this.showSkills();
                break;
            case 'projects':
                await this.showProjects();
                break;
            case 'contact':
                this.showContact();
                break;
            case 'about':
                this.showAbout();
                break;
            case 'ovenai':
            case 'tour':
                await this.showOvenAITour();
                break;
            case 'play':
            case 'game':
                await this.launchGame();
                break;
            case 'clear':
            case 'cls':
                this.clear();
                break;
            case 'home':
                this.clear();
                this.shellOutput.innerHTML = this.getHomeContent();
                break;
            default:
                this.handleUnknownCommand(cmd);
        }
    }

    showHelp() {
        const help = `
<span class="section-header">Available Commands:</span>

  <span class="success">resume</span>     Display full resume/CV
  <span class="success">skills</span>     Show technical skills breakdown
  <span class="success">projects</span>   View detailed project portfolio
  <span class="success">ovenai</span>    OvenAI CRM project tour & demo
  <span class="success">contact</span>    Get contact information
  <span class="success">play</span>       Start PM Quest (idle roguelike game)
  <span class="success">about</span>      Learn about this shell
  <span class="success">home</span>       Return to home page
  <span class="success">clear</span>      Clear screen

<span class="comment">Keyboard Shortcuts:</span>
  Up/Down     Navigate command history
  Tab         Auto-complete commands

<span class="comment">Pro tip: Try 'play' for an interactive PM adventure!</span>
        `;
        this.printOutput(help);
    }

    async showResume() {
        try {
            const response = await fetch('resume.txt');
            const text = await response.text();
                this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            this.printOutput('<span class="error">Error loading resume. Please try again.</span>');
        }
    }

    async showSkills() {
        try {
            const response = await fetch('skills.txt');
            const text = await response.text();
            this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            this.printOutput('<span class="error">Error loading skills. Please try again.</span>');
        }
    }

    async showProjects() {
        try {
            const response = await fetch('projects.txt');
            const text = await response.text();
            this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            this.printOutput('<span class="error">Error loading projects. Please try again.</span>');
        }
    }

    showContact() {
        const contact = `
<span class="section-header">CONTACT INFORMATION</span>

Email:     <a href="mailto:amit.yogev@gmail.com">amit.yogev@gmail.com</a>
Phone:     +972-54-767-8761
Location:  Tel Aviv, Israel

LinkedIn:  <a href="https://linkedin.com/in/amit-yogev" target="_blank">linkedin.com/in/amit-yogev</a>
GitHub:    <a href="https://github.com/broddo-baggins" target="_blank">github.com/broddo-baggins</a>
        `;
        this.printOutput(contact);
    }

    showAbout() {
        const about = `
<span class="section-header">About This Shell</span>

This is a shell-based interactive resume inspired by ysap.sh.
Built with vanilla JavaScript - no frameworks, no dependencies.

<span class="success">Features:</span>
  - Command history (up/down arrows)
  - Tab auto-completion
  - Mobile-responsive design
  - Fast & lightweight
  - Works with curl

<span class="comment">Built by Amit Yogev</span>
        `;
        this.printOutput(about);
    }

    async showOvenAITour() {
        const tour = `
<span class="section-header">OVENAI CRM - PORTFOLIO DEMO</span>

<span class="success">🎯 Real Production Results:</span>
  • <strong>70% response rate</strong> on cold leads (vs 2% SMS baseline)
  • <strong>2.5× more meetings</strong> scheduled per agent
  • <strong>~70% reduction</strong> in manual follow-up time
  • <strong>100+ leads handled</strong> per day per agent
  • <strong>Zero production defects</strong> during pilot phase

<span class="success">🛠 Technical Stack:</span>
  <strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS, Zustand, TanStack Query
  <strong>Backend:</strong> Node.js, Express, PostgreSQL, Redis, Prisma ORM
  <strong>Integrations:</strong> WhatsApp Business API, Calendly, OpenAI GPT-4
  <strong>Testing:</strong> 1,289+ automated tests, 85%+ code coverage
  <strong>DevOps:</strong> Docker, Vercel, GitHub Actions

<span class="success">📊 Demo Features:</span>
  • AI-Powered BANT Scoring (82% accuracy)
  • Real-time WhatsApp Integration
  • Automated Meeting Scheduling
  • Live Analytics Dashboard
  • Mobile-Responsive Design

<span class="warning">⚠️ Demo Notes:</span>
This is a portfolio demo with mock data. Due to legal constraints with
CEO/CTO, actual customer data has been removed. All features showcase
technical implementation with sanitized sample data.

<span class="success">🚀 Ready to explore the live demo?</span>
        `;
        this.printOutput(tour);
        await this.sleep(500);
        
        // Prompt user
        this.printOutput('\n<span class="success">Launch OvenAI CRM demo in new tab? (Y/N):</span>');
        this.waitingForOvenAIResponse = true;
    }

    async launchGame() {
        this.printOutput('<span style="color: #56b6c2;">Loading PM Quest...</span>');
        
        try {
            // Load game scripts
            await this.loadGameScripts();
            
            // Initialize game instance
            this.gameInstance = new PMQuestEngine(this);
            this.gameActive = true;
            
            // Start game
            await this.gameInstance.start();
        } catch (error) {
            this.printOutput('<span style="color: #e06c75;">Error loading game: ' + error.message + '</span>');
            console.error('Game load error:', error);
        }
    }

    async loadGameScripts() {
        // Load game scripts dynamically
        const scripts = [
            '/game/pm-career.js',
            '/game/game-renderer.js',
            '/game/encounters/daily-encounters.js',
            '/game/encounters/stakeholder-encounters.js',
            '/game/encounters/crisis-encounters.js',
            '/game/encounters/boss-encounters.js',
            '/game/game-content.js',
            '/game/game-engine.js'
        ];

        for (const scriptPath of scripts) {
            if (!document.querySelector(`script[src="${scriptPath}"]`)) {
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = scriptPath;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            }
        }
    }

    handleUnknownCommand(cmd) {
        // Find similar commands using Levenshtein-like similarity
        const commands = ['help', 'resume', 'cv', 'skills', 'projects', 'contact', 'play', 'game', 'about', 'home', 'clear', 'cls'];
        const similar = this.findSimilarCommands(cmd, commands);
        
        let suggestion = '';
        if (similar.length > 0) {
            suggestion = `\n<span class="comment">Did you mean: ${similar.map(c => `<span class="success">${c}</span>`).join(', ')}?</span>`;
        } else {
            suggestion = '\n<span class="comment">Type <span class="success">help</span> to see available commands</span>';
        }
        
        this.printOutput(`<span class="error">zsh: command not found: ${this.escapeHtml(cmd)}</span>${suggestion}`);
    }
    
    findSimilarCommands(input, commands) {
        const similar = [];
        for (const cmd of commands) {
            if (cmd.startsWith(input.toLowerCase()) || input.toLowerCase().startsWith(cmd)) {
                similar.push(cmd);
            } else if (this.levenshteinDistance(input.toLowerCase(), cmd) <= 2) {
                similar.push(cmd);
            }
        }
        return similar.slice(0, 3); // Return max 3 suggestions
    }
    
    levenshteinDistance(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    clear() {
        this.shellOutput.innerHTML = '';
    }

    navigateHistory(direction) {
        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.commandInput.value = this.commandHistory[this.historyIndex];
            }
        } else if (direction === 'down') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.commandInput.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.commandInput.value = '';
            }
        }
    }

    autoComplete() {
        const partial = this.commandInput.value.toLowerCase();
        const commands = ['help', 'resume', 'skills', 'projects', 'ovenai', 'tour', 'contact', 'play', 'game', 'about', 'home', 'clear'];
        
        const matches = commands.filter(cmd => cmd.startsWith(partial));
        
        if (matches.length === 1) {
            this.commandInput.value = matches[0];
        } else if (matches.length > 1) {
            this.printCommand(partial);
            this.printOutput('<span style="color: #888;">' + matches.join('  ') + '</span>');
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize shell when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ShellCV();
});
