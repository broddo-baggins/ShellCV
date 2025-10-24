// Shell CV - YSAP-style terminal with typing animation
class ShellCV {
    constructor() {
        this.shellOutput = document.getElementById('shellOutput');
        this.inputLine = document.getElementById('inputLine');
        this.commandInput = document.getElementById('commandInput');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.typingSpeed = 20; // Fast typing animation
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
        // Type the curl command with animation
        const curlCommand = document.createElement('div');
        curlCommand.innerHTML = '<span class="prompt-path">~/amityogev.com</span> <span class="prompt-symbol">$</span> ';
        this.shellOutput.appendChild(curlCommand);
        
        await this.typeText('curl amityogev.com', curlCommand);
        await this.sleep(300);
        
        // Add spacing
        this.shellOutput.appendChild(document.createElement('br'));
        
        // Create container for content
        const contentDiv = document.createElement('div');
        this.shellOutput.appendChild(contentDiv);
        
        // Animate content loading line-by-line like 90s shell
        const content = this.getHomeContent();
        await this.typeHTML(content, contentDiv);
        
        // Scroll to bottom
        this.scrollToBottom();
    }
    
    async typeHTML(html, container) {
        // 90s-style line-by-line rendering
        container.style.opacity = '0';
        
        // Split by major HTML elements to render in chunks
        const lines = html.split(/(?=<div|<pre)/);
        
        for (let i = 0; i < lines.length; i++) {
            const chunk = lines.slice(0, i + 1).join('');
            container.innerHTML = chunk;
            container.style.opacity = '1';
            await this.sleep(30); // 30ms per chunk
            this.scrollToBottom();
        }
    }
    
    scrollToBottom() {
        // Scroll terminal body AGGRESSIVELY
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
        
        // Scroll window
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
        
        // Force input line into view
        if (this.inputLine) {
            this.inputLine.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
    }

    getHomeContent() {
        // Using HTML for proper color coding
        return this.createColoredContent();
    }

    getColoredContentHTML() {
        return `<pre class="ascii-logo">   █████╗ ███╗   ███╗██╗████████╗    ██╗   ██╗ ██████╗  ██████╗ ███████╗██╗   ██╗
  ██╔══██╗████╗ ████║██║╚══██╔══╝    ╚██╗ ██╔╝██╔═══██╗██╔════╝ ██╔════╝██║   ██║
  ███████║██╔████╔██║██║   ██║        ╚████╔╝ ██║   ██║██║  ███╗█████╗  ██║   ██║
  ██╔══██║██║╚██╔╝██║██║   ██║         ╚██╔╝  ██║   ██║██║   ██║██╔══╝  ╚██╗ ██╔╝
  ██║  ██║██║ ╚═╝ ██║██║   ██║          ██║   ╚██████╔╝╚██████╔╝███████╗ ╚████╔╝ 
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝  ╚═══╝  </pre><div class="gradient-bar"></div>
<div style="text-align: center; color: #888; font-size: 11px; margin: 8px 0; padding: 0; line-height: 1.0;">Product Manager | QA Leader | Builder | Tech Enthusiast</div>
<div class="info-boxes-container"><div class="info-box"><div class="info-box-header">About This Terminal</div><div class="info-box-content">Interactive terminal-style CV. Navigate with commands or explore via browser. Built to showcase PM/QA skills through code. Type 'help' to start.</div></div><div class="info-box"><div class="info-box-header">Socials</div><div class="info-box-content">LinkedIn  <a href="https://linkedin.com/in/amit-yogev">linkedin.com/in/amit-yogev</a><br>GitHub    <a href="https://github.com/broddo-baggins">github.com/broddo-baggins</a><br>Email     <a href="mailto:amit.yogev@gmail.com">amit.yogev@gmail.com</a><br>Location  Tel Aviv, Israel</div></div></div><div class="legend-container"><div style="color: #ff9966; font-weight: bold; margin: 0; padding: 0; font-size: 11px; line-height: 1.0;">Legend</div><pre>$ curl amityogev.com           Get this page
$ curl amityogev.com/help      Get the full list of available endpoints

Type 'help' or 'start' to begin exploring →</pre></div>`;
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
            await this.printOutput('<span class="warning">⚠ Please wait a moment before running the same command again</span>');
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

        // AGGRESSIVE scroll to bottom
        this.scrollToBottom();
        setTimeout(() => this.scrollToBottom(), 100);
        setTimeout(() => this.scrollToBottom(), 300);
        this.commandInput.focus();
    }

    printCommand(command) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        commandLine.innerHTML = `<span class="prompt-path">~/amityogev.com</span> <span class="prompt-symbol">$</span> <span class="command-text">${this.escapeHtml(command)}</span>`;
        this.shellOutput.appendChild(commandLine);
    }

    async printOutput(text) {
        const outputDiv = document.createElement('div');
        this.shellOutput.appendChild(outputDiv);
        
        // 90s-style line-by-line rendering
        await this.typeHTML(text, outputDiv);
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
                await this.printOutput('<span class="success">✓ Opening demo in new tab...</span>');
                await this.printOutput('<span class="comment">Tip: Return here to explore more commands (try "projects" or "play")</span>');
            } else {
                await this.printOutput('<span class="comment">Demo cancelled. Type "crm" to try again, or "help" for other commands.</span>');
            }
            this.waitingForOvenAIResponse = false;
            return;
        }

        const args = command.split(' ');
        const cmd = args[0];

        switch(cmd) {
            case 'help':
                await this.showHelp();
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
                await this.showContact();
                break;
            case 'about':
                await this.showAbout();
                break;
            case 'create':
            case 'generate':
            case 'build':
                await this.showCreate();
                break;
            case 'ovenai':
            case 'crm':
            case 'demo':
            case 'tour':
                await this.showCRMDemo();
                break;
            case 'play':
            case 'game':
                await this.launchGame();
                break;
            case 'clear':
            case 'cls':
                this.clear();
                break;
            case 'rain':
                await this.showRainAnimation();
                break;
            case 'home':
                this.clear();
                this.shellOutput.innerHTML = this.getHomeContent();
                break;
            default:
                await this.handleUnknownCommand(cmd);
        }
    }

    async showHelp() {
        const help = `
<span class="section-header">Available Commands:</span>

  <span class="success">resume</span>     Display full resume/CV
  <span class="success">skills</span>     Show technical skills breakdown
  <span class="success">projects</span>   View detailed project portfolio
  <span class="success">crm</span>       CRM Demo - showcasing my work with mock data
  <span class="success">contact</span>    Get contact information
  <span class="success">play</span>       Start PM Quest (idle roguelike game)
  <span class="success">about</span>      Learn about this shell
  <span class="success">home</span>       Return to home page
  <span class="success">clear</span>      Clear screen

<span class="section-header">🚀 Want Your Own Terminal CV?</span>

  <span class="success">create</span>     Learn how to build your own ShellCV in 2 minutes!

<span class="comment">Keyboard Shortcuts:</span>
  Up/Down     Navigate command history
  Tab         Auto-complete commands

<span class="comment">Easter Eggs:</span>
  rain        ASCII rain animation

<span class="comment">Pro tip: Try 'create' to make your own terminal CV!</span>
        `;
        await this.printOutput(help);
    }

    async showResume() {
        try {
            const response = await fetch('assets/resume.txt');
            const text = await response.text();
            await this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            await this.printOutput('<span class="error">Error loading resume. Please try again.</span>');
        }
    }

    async showSkills() {
        try {
            const response = await fetch('assets/skills.txt');
            const text = await response.text();
            await this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            await this.printOutput('<span class="error">Error loading skills. Please try again.</span>');
        }
    }

    async showProjects() {
        try {
            const response = await fetch('assets/projects.txt');
            const text = await response.text();
            await this.printOutput(`<pre>${this.escapeHtml(text)}</pre>`);
        } catch (error) {
            await this.printOutput('<span class="error">Error loading projects. Please try again.</span>');
        }
    }

    async showContact() {
        const contact = `
<span class="section-header">CONTACT INFORMATION</span>

Email:     <a href="mailto:amit.yogev@gmail.com">amit.yogev@gmail.com</a>
Phone:     +972-54-767-8761
Location:  Tel Aviv, Israel

LinkedIn:  <a href="https://linkedin.com/in/amit-yogev" target="_blank">linkedin.com/in/amit-yogev</a>
GitHub:    <a href="https://github.com/broddo-baggins" target="_blank">github.com/broddo-baggins</a>
        `;
        await this.printOutput(contact);
    }

    async showAbout() {
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
        await this.printOutput(about);
    }

    async showCreate() {
        const create = `
<span class="section-header">🚀 Create Your Own Terminal CV</span>

Want a terminal-style CV like this? Generate yours in 2 minutes!

<span class="success">Step 1: Clone the Repository</span>
  $ git clone https://github.com/broddo-baggins/ShellCV.git
  $ cd ShellCV

<span class="success">Step 2: Run the Generator</span>
  
  Option A (Recommended - Cross-platform):
  $ node setup-shellcv.js
  
  Option B (macOS/Linux):
  $ ./setup-shellcv.sh

<span class="success">Step 3: Answer Questions</span>
  The script will ask for:
  • Your name & professional title
  • Contact info (email, LinkedIn, GitHub)
  • Professional bio
  • Skills & projects (optional)

<span class="success">Step 4: You Get a Complete Project!</span>
  ✅ Interactive terminal interface
  ✅ 90s-style loading animation
  ✅ Mobile-optimized design
  ✅ Full curl API support
  ✅ Ready to deploy!

<span class="comment">What Happens:</span>
  1. Generator creates a personalized project folder
  2. All files pre-configured with your info
  3. assets folder with your CV content
  4. npm install && npm start → DONE!

<span class="comment">Learn More:</span>
  GitHub:   <a href="https://github.com/broddo-baggins/ShellCV" target="_blank">github.com/broddo-baggins/ShellCV</a>
  Guide:    <a href="https://github.com/broddo-baggins/ShellCV/blob/main/docs/ONBOARDING_GUIDE.md" target="_blank">Full Onboarding Guide</a>
  Quick Start: <a href="https://github.com/broddo-baggins/ShellCV/blob/main/QUICK_START_GENERATOR.md" target="_blank">Quick Start</a>

<span class="success">Deploy Options:</span>
  • Vercel (easiest - free)
  • Railway (auto-deploy from GitHub)
  • Render (free tier available)

<span class="comment">Total time: ~2 minutes setup + 5 minutes customization = Your own ShellCV! 🎉</span>
        `;
        await this.printOutput(create);
    }

    async showCRMDemo() {
        // ASCII Animation: Matrix-style loading
        await this.showMatrixAnimation();
        
        const tour = `
<span class="section-header">CRM DEMO - PORTFOLIO SHOWCASE</span>

<span class="success">Real Production Results:</span>
  • <strong>70% response rate</strong> on cold leads (vs 2% SMS baseline)
  • <strong>2.5× more meetings</strong> scheduled per agent
  • <strong>70% reduction</strong> in manual follow-up time
  • <strong>100+ leads handled</strong> per day per agent
  • <strong>Zero production defects</strong> during pilot phase

<span class="success">Technical Stack:</span>
  <strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS, Zustand, TanStack Query
  <strong>Backend:</strong> Node.js, Express, PostgreSQL, Redis, Prisma ORM
  <strong>Integrations:</strong> WhatsApp Business API, Calendly, OpenAI GPT-4
  <strong>Testing:</strong> 1,289+ automated tests, 85%+ code coverage
  <strong>DevOps:</strong> Docker, Vercel, GitHub Actions

<span class="success">Demo Features:</span>
  • AI-Powered BANT Scoring (82% accuracy)
  • Real-time WhatsApp Integration
  • Automated Meeting Scheduling
  • Live Analytics Dashboard
  • Mobile-Responsive Design

<span class="warning">Demo Notes:</span>
This is a portfolio demo with mock data. Due to legal constraints with
CEO/CTO, actual customer data has been removed. All features showcase
technical implementation with sanitized sample data.

<span class="success">Ready to explore the live demo?</span>
        `;
        await this.printOutput(tour);
        await this.sleep(500);
        
        // Prompt user
        await this.printOutput('\n<span class="success">Launch CRM demo in new tab? (Y/N):</span>');
        this.waitingForOvenAIResponse = true;
    }

    async showMatrixAnimation() {
        const frames = [
            '  . : . : . : . : . :  ',
            '  : . : . : . : . : .  ',
            '  . : . : . : . : . :  ',
        ];
        
        const outputDiv = document.createElement('div');
        outputDiv.style.color = '#0f0';
        outputDiv.style.fontFamily = 'monospace';
        this.shellOutput.appendChild(outputDiv);
        
        for (let i = 0; i < 8; i++) {
            outputDiv.textContent = frames[i % frames.length];
            await this.sleep(100);
        }
        
        outputDiv.textContent = '  [ LOADING CRM DEMO ]  ';
        await this.sleep(300);
        this.shellOutput.removeChild(outputDiv);
    }

    async showRainAnimation() {
        await this.printOutput('<span style="color: #5bc0de;">Starting rain animation... (Press Enter to stop)</span>');
        
        const rainDiv = document.createElement('pre');
        rainDiv.style.color = '#5bc0de';
        rainDiv.style.fontFamily = 'monospace';
        rainDiv.style.fontSize = '12px';
        rainDiv.style.lineHeight = '1.2';
        this.shellOutput.appendChild(rainDiv);
        
        const width = 60;
        const height = 15;
        let raindrops = [];
        
        // Initialize raindrops
        for (let i = 0; i < 20; i++) {
            raindrops.push({
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height),
                char: ['|', '/', '\\', ':', '.'][Math.floor(Math.random() * 5)]
            });
        }
        
        const stopRain = async () => {
            this.shellOutput.removeChild(rainDiv);
            await this.printOutput('<span class="comment">Rain stopped.</span>');
        };
        
        // Animation loop
        for (let frame = 0; frame < 100; frame++) {
            let display = [];
            for (let y = 0; y < height; y++) {
                display[y] = ' '.repeat(width);
            }
            
            // Update and draw raindrops
            raindrops.forEach(drop => {
                if (drop.y >= 0 && drop.y < height && drop.x >= 0 && drop.x < width) {
                    display[drop.y] = display[drop.y].substring(0, drop.x) + drop.char + display[drop.y].substring(drop.x + 1);
                }
                
                // Move raindrop down
                drop.y++;
                if (drop.y > height) {
                    drop.y = 0;
                    drop.x = Math.floor(Math.random() * width);
                    drop.char = ['|', '/', '\\', ':', '.'][Math.floor(Math.random() * 5)];
                }
            });
            
            rainDiv.textContent = display.join('\n');
            await this.sleep(100);
        }
        
        await stopRain();
    }

    async launchGame() {
        await this.printOutput('<span style="color: #56b6c2;">Loading PM Quest...</span>');
        
        try {
            // Load game scripts
            await this.loadGameScripts();
            
            // Initialize game instance
            this.gameInstance = new PMQuestEngine(this);
            this.gameActive = true;
            
            // Start game
            await this.gameInstance.start();
        } catch (error) {
            await this.printOutput('<span style="color: #e06c75;">Error loading game: ' + error.message + '</span>');
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

    async handleUnknownCommand(cmd) {
        // Find similar commands using Levenshtein-like similarity
        const commands = ['help', 'resume', 'cv', 'skills', 'projects', 'contact', 'create', 'generate', 'play', 'game', 'about', 'home', 'clear', 'cls'];
        const similar = this.findSimilarCommands(cmd, commands);
        
        let suggestion = '';
        if (similar.length > 0) {
            suggestion = `\n<span class="comment">Did you mean: ${similar.map(c => `<span class="success">${c}</span>`).join(', ')}?</span>`;
        } else {
            suggestion = '\n<span class="comment">Type <span class="success">help</span> to see available commands</span>';
        }
        
        await this.printOutput(`<span class="error">zsh: command not found: ${this.escapeHtml(cmd)}</span>${suggestion}`);
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
        const commands = ['help', 'resume', 'skills', 'projects', 'crm', 'demo', 'contact', 'create', 'generate', 'play', 'game', 'about', 'home', 'clear', 'rain'];
        
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
