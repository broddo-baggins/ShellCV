# ShellCV - Amit Yogev

**Product Manager × QA Leader × AI-Powered Builder**

An interactive terminal-style resume that works in **both browser and command line**!

**Live:** https://amityogev.com

---

## 🚀 Create Your Own ShellCV in 2 Minutes!

Want your own terminal-style CV? Our interactive setup script generates everything you need:

```bash
# Option 1: Node.js (Recommended - Cross-platform)
node setup-shellcv.js

# Option 2: Bash (macOS/Linux)
./setup-shellcv.sh
```

**What you get:**
- ✨ Interactive terminal-style CV
- 🎨 90s-style loading animations
- 📱 Mobile-optimized design
- 🔧 Full curl API support
- 💼 Complete portfolio showcase
- 🚀 Ready to deploy!

**Learn more:** [Onboarding Guide](docs/ONBOARDING_GUIDE.md)

---

## Features

### Dual Interface
- **Web Browser**: Beautiful interactive terminal UI
- **Command Line**: Traditional `curl` access

### Terminal Commands

```bash
help        # Show available commands
resume      # Display full resume/CV  
skills      # Show technical skills breakdown
projects    # View detailed project portfolio
ovenai      # Launch OvenAI CRM interactive demo
play        # Start PM Quest (idle roguelike game)

contact     # Get contact information
email       # Open email client
github      # Visit GitHub profile
linkedin    # Open LinkedIn profile

about       # Learn about this terminal
whoami      # Display user information
clear       # Clear terminal screen
```

### PM Quest: Interactive Game

An idle roguelike game built into the terminal! Play through a Product Manager's career journey from Associate PM to Chief Product Officer.

**Features:**
- 7 career levels with unique challenges
- Strategic decision-making gameplay
- Real PM scenarios and frameworks
- Save/load system with hash codes
- 50+ encounters across 7 corporate "dungeons"

**Play Now:**
```bash
# In browser terminal
play

# Or via curl (info only)
curl amityogev.com/play
```

### OvenAI CRM Demo

Experience a live demo of the AI-powered CRM that achieved 70% lead response rates. Try it from the terminal:

```bash
# In browser
Visit amityogev.com and type: ovenai

# Direct link
https://ovenai-demo.vercel.app
```

### Keyboard Shortcuts

- `↑/↓` - Navigate command history
- `Tab` - Auto-complete commands
- `Ctrl+L` - Clear screen
- Just start typing!

### Mobile Responsive

Works perfectly on phones, tablets, and desktops. Try it anywhere!

## Quick Start

### View in Browser
Simply visit: **https://amityogev.com**

### View in Terminal
```bash
# Full resume
curl amityogev.com/resume

# Skills breakdown
curl amityogev.com/skills

# Project portfolio
curl amityogev.com/projects
```

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js (minimalist server)
- **Deployment**: Vercel (serverless)
- **Size**: < 10KB total (no frameworks!)

## Inspired By

- [imjb.dev](https://www.imjb.dev) - Interactive shell concept
- Classic Unix terminals

## Project Structure

```
.
├── index.html       # Main HTML interface
├── styles.css       # Terminal styling
├── terminal.js      # Command handler & logic
├── favicon.svg      # Site favicon
├── resume.txt       # Resume content
├── skills.txt       # Skills breakdown
├── projects.txt     # Project portfolio
├── server.js        # Node.js server (optional)
├── package.json     # Node dependencies
├── vercel.json      # Vercel deployment config
├── .gitignore       # Git ignore rules
├── README.md        # This file
└── docs/            # Documentation
    ├── CHANGELOG.md
    ├── COMMANDS.md
    ├── DEPLOY-NOW.md
    ├── DEPLOYMENT-CHECKLIST.md
    ├── DNS-SETUP.md
    ├── DUAL-INTERFACE.md
    ├── PROJECT_STATUS.md
    ├── START-HERE.md
    └── UX-FEATURES.md
```

## Local Development

```bash
# Clone the repo
git clone https://github.com/broddo-baggins/ShellCV.git
cd ShellCV

# Start server
node server.js

# Test in browser
open http://localhost:3333

# Test in terminal
curl localhost:3333/resume
```

## Key Features

### Browser Interface
- Real terminal feel with green-on-black theme
- Command history (use up/down arrows)
- Tab autocomplete
- Clickable links (email, GitHub, LinkedIn)
- Smooth animations
- Mobile responsive
- Fast & lightweight

### Terminal/CLI Interface
- Plain text output (perfect for `curl`)
- Pipe-friendly (works with `less`, `grep`, etc.)
- Save locally: `curl amityogev.com/resume > resume.txt`
- Works everywhere (Windows, Mac, Linux)

## Usage Examples

```bash
# View resume in terminal
curl amityogev.com/resume

# Pipe to less for scrolling
curl amityogev.com/resume | less

# Save to file
curl amityogev.com/resume > amit-yogev-resume.txt

# Search in resume
curl amityogev.com/resume | grep -i "product manager"

# View specific sections
curl amityogev.com/skills
curl amityogev.com/projects
```

## Why This Is Cool

1. **Memorable**: Stand out from other candidates
2. **Technical**: Shows understanding of HTTP, servers, CLI
3. **Unique**: < 0.001% of candidates have this
4. **Accessible**: Works in restricted networks
5. **Fast**: No JavaScript frameworks, instant load
6. **Dual Interface**: Both beautiful UI and CLI access

## Contact & Links

- **Email**: amit.yogev@gmail.com
- **Phone**: +972-54-767-8761
- **LinkedIn**: https://www.linkedin.com/in/amit-yogev
- **GitHub**: https://github.com/broddo-baggins
- **Portfolio**: https://amityogev.com
- **Location**: Tel Aviv, Israel

## License

MIT License - Feel free to fork and build your own!

---

**Built by Amit Yogev**

*Ship fast, measure everything, iterate relentlessly.*
