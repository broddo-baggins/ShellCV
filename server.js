const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3333;

// Read resume files from assets folder
const resume = fs.readFileSync(path.join(__dirname, 'assets', 'resume.txt'), 'utf8');
const skills = fs.readFileSync(path.join(__dirname, 'assets', 'skills.txt'), 'utf8');
const projects = fs.readFileSync(path.join(__dirname, 'assets', 'projects.txt'), 'utf8');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.ico': 'image/x-icon'
};

// Helper function to check if request is from curl/terminal
function isCurlRequest(req) {
  const userAgent = (req.headers['user-agent'] || '').toLowerCase();
  return userAgent.includes('curl') || 
         userAgent.includes('wget') || 
         userAgent.includes('httpie') ||
         req.headers['accept'] === 'text/plain';
}

// Generate curl-friendly home page
function getCurlHomePage() {
  return `   █████╗ ███╗   ███╗██╗████████╗    ██╗   ██╗ ██████╗  ██████╗ ███████╗██╗   ██╗
  ██╔══██╗████╗ ████║██║╚══██╔══╝    ╚██╗ ██╔╝██╔═══██╗██╔════╝ ██╔════╝██║   ██║
  ███████║██╔████╔██║██║   ██║        ╚████╔╝ ██║   ██║██║  ███╗█████╗  ██║   ██║
  ██╔══██║██║╚██╔╝██║██║   ██║         ╚██╔╝  ██║   ██║██║   ██║██╔══╝  ╚██╗ ██╔╝
  ██║  ██║██║ ╚═╝ ██║██║   ██║          ██║   ╚██████╔╝╚██████╔╝███████╗ ╚████╔╝ 
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝  ╚═══╝  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

       Product Manager @ Stealth | QA Leader | Blockchain Enthusiast | Builder | Gamer

  ┌─────────────────────────────────About┐ ┌───────────────────────────────Socials─┐
  │ Technical Product Manager, QA bg.    │ │ LinkedIn  linkedin.com/in/amit-yogev │
  │ Solo ideation to POC 100%.           │ │ GitHub    github.com/broddo-baggins  │
  └──────────────────────────────────────┘ │ Email     amit.yogev@gmail.com       │
                                            │ Location  Tel Aviv, Israel           │
                                            └──────────────────────────────────────┘

                                                                        Commands
  
  $ curl amityogev.com/help       Full command list
  
  Quick: resume | skills | projects | help
  Browser: https://amityogev.com (type 'help' for interactive mode)

`;
}

// Request handler (works for both local and Vercel)
function handleRequest(req, res) {
  const url = req.url;
  
  // Handle root - detect curl vs browser
  if (url === '/' || url === '/index.html') {
    if (isCurlRequest(req)) {
      // Serve plain text for curl
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(getCurlHomePage());
    } else {
      // Serve HTML for browsers
      const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
    return;
  }

  // Handle CSS
  if (url === '/styles.css') {
    const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(css);
    return;
  }

  // Handle JavaScript
  if (url === '/terminal.js') {
    const js = fs.readFileSync(path.join(__dirname, 'terminal.js'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(js);
    return;
  }

  // Handle favicon
  if (url === '/favicon.svg') {
    const svg = fs.readFileSync(path.join(__dirname, 'favicon.svg'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.end(svg);
    return;
  }

  // Handle game directory
  if (url.startsWith('/game/')) {
    const filename = url.substring(6);
    const filepath = path.join(__dirname, 'game', filename);
    
    try {
      if (fs.existsSync(filepath)) {
        const content = fs.readFileSync(filepath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
        res.end(content);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Game file not found');
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading game file');
    }
    return;
  }

  // Handle text file routes (for both curl and HTML fetch)
  if (url === '/resume' || url === '/resume.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(resume);
  } else if (url === '/skills' || url === '/skills.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(skills);
  } else if (url === '/projects' || url === '/projects.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(projects);
  } else if (url === '/play') {
    // Curl-friendly game info
    const playInfo = `
PM QUEST: CORPORATE CLIMBER
============================

An idle roguelike game where you climb from Associate PM to CPO.
Make strategic decisions, manage stakeholders, and ship products.

This game is best played in the browser at:
https://amityogev.com

Type 'play' in the browser terminal to start!

Or return to resume with: curl amityogev.com/resume
`;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(playInfo);
  } else if (url === '/help') {
    const help = `
Available Commands:

  CURL Endpoints:
  curl amityogev.com              Home page with info
  curl amityogev.com/resume       Full resume/CV
  curl amityogev.com/skills       Technical skills
  curl amityogev.com/projects     Project portfolio
  curl amityogev.com/play         PM Quest game info
  curl amityogev.com/help         This help message

  Browser Interactive Mode: https://amityogev.com
  
  Browser Commands (type in terminal):
  help        Full command list & documentation
  resume      Full resume with metrics
  skills      Technical skills breakdown
  projects    Project portfolio
  ovenai      View AI CRM demo (70% engagement, 2.5× meetings)
  play        PM Quest idle roguelike game
  create      Learn how to build your own ShellCV in 2 minutes!
  clear       Clear terminal
  contact     Contact information
  about       About this shell

  Want Your Own Terminal CV?
  Type 'create' in browser or visit:
  → GitHub: https://github.com/broddo-baggins/ShellCV
`;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(help);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found\n\nTry:\n  Browser: https://amityogev.com\n  Terminal: curl amityogev.com/resume\n');
  }
}

// Export for Vercel serverless
module.exports = handleRequest;

// Local development server
if (require.main === module) {
  const server = http.createServer(handleRequest);
  
  server.listen(PORT, () => {
    console.log(`Terminal resume server running on port ${PORT}`);
    console.log(`\nTest locally:`);
    console.log(`   Browser:  http://localhost:${PORT}`);
    console.log(`   Terminal: curl localhost:${PORT}`);
    console.log(`             curl localhost:${PORT}/resume`);
  });
}
