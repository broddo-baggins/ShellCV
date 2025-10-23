const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3333;

// Read resume files
const resume = fs.readFileSync(path.join(__dirname, 'resume.txt'), 'utf8');
const skills = fs.readFileSync(path.join(__dirname, 'skills.txt'), 'utf8');
const projects = fs.readFileSync(path.join(__dirname, 'projects.txt'), 'utf8');

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
  return ` 
 █████╗ ███╗   ███╗██╗████████╗    ██╗   ██╗ ██████╗  ██████╗ ███████╗██╗   ██╗
██╔══██╗████╗ ████║██║╚══██╔══╝    ╚██╗ ██╔╝██╔═══██╗██╔════╝ ██╔════╝██║   ██║
███████║██╔████╔██║██║   ██║        ╚████╔╝ ██║   ██║██║  ███╗█████╗  ██║   ██║
██╔══██║██║╚██╔╝██║██║   ██║         ╚██╔╝  ██║   ██║██║   ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║██║ ╚═╝ ██║██║   ██║          ██║   ╚██████╔╝╚██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝  ╚═══╝  
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

    Built AI CRM w/ 70% engagement & 2.5× meetings | Ex-SentinelOne, McAfee | Full-Stack → PM
    https://amityogev.com | https://github.com/broddo-baggins

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Source: https://github.com/broddo-baggins/ShellCV


About

Yo what's up everyone my name's
Amit and you suck at product management.
Connect with my socials or use this
site to easily find my content!


Socials

LinkedIn    https://linkedin.com/in/amit-yogev
GitHub      https://github.com/broddo-baggins
Email       amit.yogev@gmail.com
Location    Tel Aviv, Israel
Phone       +972-54-767-8761


Legend

$ curl amityogev.com               Get this page
$ curl amityogev.com/resume        Full resume + impact metrics
$ curl amityogev.com/skills        Technical skills breakdown
$ curl amityogev.com/projects      Project portfolio
$ curl amityogev.com/help          Full list of available commands

`;
}

const server = http.createServer((req, res) => {
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

  // Handle game files
  if (url.startsWith('/game/')) {
    const filename = url.replace('/game/', '');
    const filepath = path.join(__dirname, 'game', filename);
    
    if (fs.existsSync(filepath)) {
      const content = fs.readFileSync(filepath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(content);
      return;
    }
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
  } else if (url === '/help') {
    const help = `
Available Endpoints:

  curl amityogev.com              Home page with info
  curl amityogev.com/resume       Full resume/CV
  curl amityogev.com/skills       Technical skills
  curl amityogev.com/projects     Project portfolio
  curl amityogev.com/help         This help message

Or visit in your browser: https://amityogev.com
Type 'play' in the browser to launch PM Quest game!
`;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(help);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found\n\nTry:\n  Browser: https://amityogev.com\n  Terminal: curl amityogev.com/resume\n');
  }
});

server.listen(PORT, () => {
  console.log(`Terminal resume server running on port ${PORT}`);
  console.log(`\nTest locally:`);
  console.log(`   Browser:  http://localhost:${PORT}`);
  console.log(`   Terminal: curl localhost:${PORT}`);
  console.log(`             curl localhost:${PORT}/resume`);
});
