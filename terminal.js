// Shell CV - YSAP-style terminal with typing animation
class ShellCV {
    constructor() {
        this.shellOutput = document.getElementById('shellOutput');
        this.inputLine = document.getElementById('inputLine');
        this.commandInput = document.getElementById('commandInput');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.typingSpeed = 3; // milliseconds per character (faster animation)
        this.lastCommand = '';
        this.lastCommandTime = 0;
        
        // Game mode
        this.gameMode = false;
        this.game = null;
        
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
    }

    async showInitialLoad() {
        // Type the curl command with ZSH-style prompt
        const curlCommand = document.createElement('div');
        curlCommand.innerHTML = '<span class="prompt-path">~/amityogev.com</span> <span class="prompt-symbol">$</span> ';
        this.shellOutput.appendChild(curlCommand);
        
        await this.typeText('curl amityogev.com', curlCommand);
        await this.sleep(400);
        
        // Add extra newlines for proper ASCII spacing
        this.shellOutput.appendChild(document.createElement('br'));
        
        // Animate the content appearance
        const content = this.getHomeContent();
        await this.animateContent(content);
        
        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
    }
    
    async animateContent(htmlContent) {
        // Create a temporary container
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        tempDiv.style.opacity = '0';
        this.shellOutput.appendChild(tempDiv);
        
        // Fade in effect
        for (let i = 0; i <= 10; i++) {
            tempDiv.style.opacity = (i / 10).toString();
            await this.sleep(30);
        }
    }

    getHomeContent() {
        // Using HTML for proper color coding
        return this.createColoredContent();
    }

    getColoredContentHTML() {
        return `
<pre style="color: #98c379; font-size: 9px; line-height: 1.0; margin: 10px 0 5px 30px; font-family: monospace;">
 █████╗ ███╗   ███╗██╗████████╗    ██╗   ██╗ ██████╗  ██████╗ ███████╗██╗   ██╗
██╔══██╗████╗ ████║██║╚══██╔══╝    ╚██╗ ██╔╝██╔═══██╗██╔════╝ ██╔════╝██║   ██║
███████║██╔████╔██║██║   ██║        ╚████╔╝ ██║   ██║██║  ███╗█████╗  ██║   ██║
██╔══██║██║╚██╔╝██║██║   ██║         ╚██╔╝  ██║   ██║██║   ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║██║ ╚═╝ ██║██║   ██║          ██║   ╚██████╔╝╚██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝  ╚═══╝  </pre>
<pre style="margin: 0 0 0 30px; padding: 0; line-height: 0.8;"><span style="color: #3b82f6;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span></pre>

<div style="margin: 15px 0 5px 30px; color: #e5c07b; font-size: 11px; font-weight: normal;">
    Built AI CRM w/ 70% engagement & 2.5× meetings | Ex-SentinelOne, McAfee | Full-Stack → PM
</div>
<div style="margin: 3px 0 15px 30px; color: #61afef; font-size: 10px;">
    <a href="https://amityogev.com" style="color: #61afef; text-decoration: none;">https://amityogev.com</a> | <a href="https://github.com/broddo-baggins" style="color: #61afef; text-decoration: none;">https://github.com/broddo-baggins</a>
</div>

<div style="margin: 10px 0 5px 30px; padding: 8px 0; border-top: 1px solid #444; border-bottom: 1px solid #444;">
    <span style="color: #5c6370; font-size: 9px;">Source: <a href="https://github.com/broddo-baggins/ShellCV" style="color: #61afef; text-decoration: none;">https://github.com/broddo-baggins/ShellCV</a></span>
</div>

<div style="margin: 20px 0 10px 30px;">
    <div style="color: #56b6c2; font-size: 10px; font-weight: bold; margin-bottom: 10px;">About</div>
    <pre style="color: #98c379; font-size: 10px; line-height: 1.4; margin: 0; font-family: monospace;">
Yo what's up everyone my name's
Amit and you suck at product management.
Connect with my socials or use this
site to easily find my content!</pre>
</div>

<div style="margin: 20px 0 10px 30px;">
    <div style="color: #56b6c2; font-size: 10px; font-weight: bold; margin-bottom: 10px;">Socials</div>
    <pre style="color: #d4d4d4; font-size: 10px; line-height: 1.5; margin: 0; font-family: monospace;">
Instagram   <a href="https://linkedin.com/in/amit-yogev" style="color: #61afef; text-decoration: none;">https://linkedin.com/in/amit-yogev</a>
YouTube     <a href="https://github.com/broddo-baggins" style="color: #61afef; text-decoration: none;">https://github.com/broddo-baggins</a>
Patreon     <a href="mailto:amit.yogev@gmail.com" style="color: #61afef; text-decoration: none;">amit.yogev@gmail.com</a>
Discord     <span style="color: #888;">Tel Aviv, Israel</span>
Twitch      <span style="color: #888;">+972-54-767-8761</span></pre>
</div>

<div style="margin: 20px 0 10px 30px;">
    <div style="color: #56b6c2; font-size: 10px; font-weight: bold; margin-bottom: 8px;">Legend</div>
    <pre style="color: #5c6370; font-size: 10px; line-height: 1.6; margin: 0; font-family: monospace;">
<span style="color: #98c379;">$</span> curl amityogev.com               <span style="color: #61afef;">Get this page</span>
<span style="color: #98c379;">$</span> curl amityogev.com/episodes      <span style="color: #61afef;">Get the list of episodes in the YSAP series</span>
<span style="color: #98c379;">$</span> curl amityogev.com/json          <span style="color: #61afef;">Get the above in JSON format</span>
<span style="color: #98c379;">$</span> curl amityogev.com/help          <span style="color: #61afef;">Get the full list of available endpoints</span></pre>
</div>
`;
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

        // If in game mode, route to game
        if (this.gameMode && this.game) {
            // Display command
            this.printCommand(command);
            
            // Clear input
            this.commandInput.value = '';
            
            // Process game input
            const result = this.game.processInput(command);
            if (result === 'quit') {
                this.exitGame();
            }
            
            // Scroll to bottom
            window.scrollTo(0, document.body.scrollHeight);
            this.commandInput.focus();
            return;
        }

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
            case 'clear':
            case 'cls':
                this.clear();
                break;
            case 'home':
                this.clear();
                this.shellOutput.textContent = this.getHomeContent();
                break;
            case 'play':
                await this.launchGame();
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
  <span class="success">play</span>       Launch PM Quest (idle roguelike game)
  <span class="success">contact</span>    Get contact information
  <span class="success">about</span>      Learn about this shell
  <span class="success">home</span>       Return to home page
  <span class="success">clear</span>      Clear screen

<span class="comment">Keyboard Shortcuts:</span>
  Up/Down     Navigate command history
  Tab         Auto-complete commands

<span class="comment">Pro tip: Try 'play' to experience a PM's career journey!</span>
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

    handleUnknownCommand(cmd) {
        // Find similar commands using Levenshtein-like similarity
        const commands = ['help', 'resume', 'cv', 'skills', 'projects', 'play', 'contact', 'about', 'home', 'clear', 'cls'];
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
        const commands = ['help', 'resume', 'skills', 'projects', 'play', 'contact', 'about', 'home', 'clear'];
        
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

    // Game methods
    async launchGame() {
        this.printOutput('<span style="color: #98c379;">Loading PM Quest...</span>');
        
        try {
            // Load game scripts if not already loaded
            if (typeof GameState === 'undefined') {
                await this.loadScript('/game/game-state.js');
            }
            if (typeof ENCOUNTERS === 'undefined') {
                await this.loadScript('/game/game-content.js');
            }
            if (typeof GameRenderer === 'undefined') {
                await this.loadScript('/game/game-renderer.js');
            }
            if (typeof getSkillSuccessModifier === 'undefined') {
                await this.loadScript('/game/pm-progression.js');
            }
            if (typeof PMQuestEngine === 'undefined') {
                await this.loadScript('/game/game-engine.js');
            }
            
            // Initialize game
            this.gameMode = true;
            this.game = new PMQuestEngine(this);
            
            // Show title screen
            this.printOutput(this.game.renderer.renderTitleScreen());
            this.game.isWaitingForInput = true;
            
        } catch (error) {
            console.error('Error loading game:', error);
            this.printOutput('<span style="color: #e06c75;">Error loading game. Please try again.</span>');
            this.gameMode = false;
            this.game = null;
        }
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    exitGame() {
        this.gameMode = false;
        this.game = null;
        this.printOutput('<span style="color: #98c379;">Exited PM Quest. Welcome back to the resume!</span>');
        this.printOutput('<span style="color: #5c6370;">Type <span style="color: #61afef;">help</span> to see available commands.</span>');
    }
}

// Initialize shell when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ShellCV();
});
