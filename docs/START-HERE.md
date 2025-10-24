# AmitCV.sh - Your Shell-Based Resume

## 📍 Location
This is your ShellCV project, located at:
```
/Users/amity/projects/ShellCV
```

## 🛡️ Why This Location?

- ✅ **Isolated from OvenAI**: Changes here won't affect your main OvenAI project
- ✅ **Easy Reference**: OvenAI files are nearby for CV content inspiration
- ✅ **Safe to Experiment**: Break things here without worry!

## 🚀 Quick Start

### Start the Server
```bash
cd /Users/amity/projects/ShellCV
node server.js
```

### View in Browser
```
http://localhost:3333
```

### Test with curl
```bash
curl localhost:3333
curl localhost:3333/resume
curl localhost:3333/skills
curl localhost:3333/projects
```

## 📁 Project Structure

```
AmitCV.sh/
├── index.html          # Main HTML page
├── terminal.js         # Terminal logic & UX features
├── styles.css          # All styling
├── server.js           # Node.js server
├── resume.txt          # Your full resume
├── skills.txt          # Technical skills
├── projects.txt        # Project portfolio
├── favicon.svg         # Green $ terminal icon
└── Documentation/
    ├── README.md       # Full documentation
    ├── UX-FEATURES.md  # User experience features
    ├── DNS-SETUP.md    # Domain configuration
    └── DEPLOY-NOW.md   # Deployment guide
```

## ✨ What's Already Implemented

### UX Features
- ✅ Typing animation (3ms per character)
- ✅ Smart error handling with suggestions
- ✅ Spam prevention (1 sec cooldown)
- ✅ Text selection & copy
- ✅ Command history (↑/↓ arrows)
- ✅ Tab auto-completion

### Privacy
- ✅ Phone: "Available on request"
- ✅ No metrics/numbers on home page
- ✅ Clean, professional layout

### Design
- ✅ macOS terminal style
- ✅ ZSH color scheme
- ✅ Orange ASCII art
- ✅ Compact, fits in single window
- ✅ Mobile responsive

## 📝 Using OvenAI for CV Content

Your OvenAI project is at: `/Users/amity/projects/ovenai-crm-portfolio-demo/`

### Quick Reference Commands
```bash
# View your OvenAI career docs (stored in ShellCV)
ls /Users/amity/projects/ShellCV/Career_Documents/

# Read your CV
cat /Users/amity/projects/ShellCV/Career_Documents/Amit\ Yogev.txt

# Open side-by-side
code /Users/amity/projects/ShellCV/Career_Documents/Amit\ Yogev.txt
code /Users/amity/projects/ShellCV/resume.txt
```

### Tips for Writing About OvenAI

**What to highlight:**
- AI-powered CRM (70% engagement, 2.5× meetings)
- WhatsApp Business API integration
- Built 1,289+ automated tests
- 12-KPI analytics suite
- Multi-tenant SaaS MVP
- BANT scoring, lead heat tracking
- Tech stack: React, TypeScript, Node.js, PostgreSQL

**Where to add it:**
Edit: `resume.txt` - It's already in the "OvenAI" section!

## 🔧 Make Changes Safely

### Edit Resume
```bash
cd /Users/amity/projects/ShellCV
nano resume.txt
# or
code resume.txt
```

### Test Changes
1. Save your file
2. Refresh browser (http://localhost:3333)
3. Or test with curl

### Git Repository
This project has its own git repository. Changes are tracked independently from the OvenAI CRM project.

## 🚀 When You're Ready to Deploy

### Deploy to Vercel
```bash
cd /Users/amity/projects/ShellCV
vercel --prod
```

## 📚 Common Tasks

### Update Your OvenAI Description
```bash
code /Users/amity/projects/ShellCV/resume.txt
# Edit the "OvenAI" section
# Restart server to see changes
```

### Add New Projects
```bash
code /Users/amity/projects/ShellCV/projects.txt
```

### Update Skills
```bash
code /Users/amity/projects/ShellCV/skills.txt
```

### Change Home Page About
```bash
code /Users/amity/projects/ShellCV/terminal.js
# Look for "createColoredContent()" function
```

## 🎯 Your Workflow

1. **Reference OvenAI files** for content inspiration
2. **Edit resume.txt** with your latest achievements
3. **Test locally** at http://localhost:3333
4. **Iterate** until it's perfect
5. **Deploy** when ready

## 🛟 Need Help?

- **Server won't start?** `pkill -f "node server.js"` then restart
- **Port in use?** Change port in `server.js`: `const PORT = 3334;`
- **Changes not showing?** Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)

## 🎉 You're All Set!

Your CV project is ready to use!

**Server running at:** http://localhost:3333

**Career docs:** `/Users/amity/projects/ShellCV/Career_Documents/`

Happy CV building!

