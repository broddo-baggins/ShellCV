# AmitCV.sh - Your Shell-Based Resume

## 📍 Location
This is your **safe copy** of the ShellCV project, located at:
```
/Users/amity/projects/oven-ai/AmitCV.sh
```

## 🛡️ Why This Location?

- ✅ **Isolated from OvenAI**: Changes here won't affect your main OvenAI project
- ✅ **Easy Reference**: OvenAI files are nearby for CV content inspiration
- ✅ **Safe to Experiment**: Break things here without worry!

## 🚀 Quick Start

### Start the Server
```bash
cd /Users/amity/projects/oven-ai/AmitCV.sh
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

Your OvenAI project is right here: `/Users/amity/projects/oven-ai/oven-ai/`

### Quick Reference Commands
```bash
# View your OvenAI career docs
ls /Users/amity/projects/oven-ai/oven-ai/Career_Documents/

# Read your CV
cat /Users/amity/projects/oven-ai/oven-ai/Career_Documents/Amit\ Yogev.txt

# Open side-by-side
code /Users/amity/projects/oven-ai/oven-ai/Career_Documents/Amit\ Yogev.txt
code /Users/amity/projects/oven-ai/AmitCV.sh/resume.txt
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
cd /Users/amity/projects/oven-ai/AmitCV.sh
nano resume.txt
# or
code resume.txt
```

### Test Changes
1. Save your file
2. Refresh browser (http://localhost:3333)
3. Or test with curl

### No Git Conflicts
This copy is independent! Changes here won't affect:
- Your original `/Users/amity/projects/amit-terminal-resume/`
- Your OvenAI project
- Your deployed Vercel site (until you push)

## 🚀 When You're Ready to Deploy

### Option 1: Deploy This Copy
```bash
cd /Users/amity/projects/oven-ai/AmitCV.sh
vercel --prod
```

### Option 2: Copy Back to Original
```bash
# Copy your changes back
cp /Users/amity/projects/oven-ai/AmitCV.sh/*.txt \
   /Users/amity/projects/amit-terminal-resume/

# Deploy from original location
cd /Users/amity/projects/amit-terminal-resume
vercel --prod
```

## 📚 Common Tasks

### Update Your OvenAI Description
```bash
code /Users/amity/projects/oven-ai/AmitCV.sh/resume.txt
# Edit the "OvenAI" section
# Restart server to see changes
```

### Add New Projects
```bash
code /Users/amity/projects/oven-ai/AmitCV.sh/projects.txt
```

### Update Skills
```bash
code /Users/amity/projects/oven-ai/AmitCV.sh/skills.txt
```

### Change Home Page About
```bash
code /Users/amity/projects/oven-ai/AmitCV.sh/terminal.js
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

Your CV project is now safely isolated. Work on it confidently without affecting OvenAI!

**Server running at:** http://localhost:3333

**OvenAI reference:** `/Users/amity/projects/oven-ai/oven-ai/Career_Documents/`

Happy CV building! 🚀

