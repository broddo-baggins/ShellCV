# 📚 Git Guide: Working with Two Repositories

**Your Projects:**
1. **AmitCV.sh** - Your terminal CV (main portfolio site)
2. **ovenai-crm-portfolio-demo** - OvenAI CRM demo project

---

## 🎯 The Golden Rule

**Each repository is completely independent!**
- They have separate git histories
- They have separate commits
- They have separate branches
- Changes in one DON'T affect the other

---

## 💡 Think of It Like Two Different Websites

```
AmitCV.sh/
├── .git/              ← Its own git history
├── terminal.js        ← Your CV code
├── README.md
└── ...

ovenai-crm-portfolio-demo/
├── .git/              ← Separate git history  
├── src/App.tsx        ← CRM demo code
├── README.md          ← Different README!
└── ...
```

**They're like two different projects on your computer!**

---

## 🔄 Two-Repo Workflow (Step by Step)

### **Scenario 1: Working on CV (AmitCV.sh)**

```bash
# 1. Go to CV repo
cv                    # Shortcut: jumps to AmitCV.sh

# 2. Check what changed
gs                    # = git status

# 3. See the changes
git diff terminal.js  # See what you changed

# 4. Add the files you want
git add terminal.js
# OR add everything:
git add .

# 5. Commit with a message
gc "Update terminal feature"     # = git commit -m "..."
# OR fast commit (skip hooks):
gcf "Update terminal feature"    # = git commit --no-verify -m "..."

# 6. Push to GitHub
gp                    # = git push
# OR fast push (skip hooks):
gpf                   # = git push --no-verify

# Done! CV repo updated
```

### **Scenario 2: Working on CRM Demo**

```bash
# 1. Go to CRM repo
crm                   # Shortcut: jumps to ovenai-crm-portfolio-demo

# 2. Check what changed
gs                    # = git status

# 3. Add files
git add src/components/Something.tsx

# 4. Commit
gcf "Fix component"   # Fast commit

# 5. Push
gpf                   # Fast push

# Done! CRM repo updated
```

---

## 🚨 Common Confusion: "I can't commit!"

### **Problem:** You're in the WRONG repository!

```bash
# You're here:
pwd
# Output: /Users/amity/projects/ovenai-crm-portfolio-demo

# But you want to commit CV changes!
# Solution: Go to CV repo first!
cv                    # Jump to CV repo
gs                    # Now git status shows CV files
```

### **Check Where You Are:**

```bash
# Show current directory
pwd

# Show which repo you're in
git remote -v

# AmitCV.sh shows:
# origin  https://github.com/broddo-baggins/ShellCV.git

# ovenai-crm-portfolio-demo shows:
# origin  https://github.com/broddo-baggins/ovenai-crm-portfolio-demo.git
```

---

## 📁 File Organization

```
/Users/amity/projects/
│
├── oven-ai/
│   └── AmitCV.sh/              ← Repo #1 (Your CV)
│       ├── .git/               ← Git history for CV
│       ├── terminal.js
│       └── ...
│
└── ovenai-crm-portfolio-demo/  ← Repo #2 (CRM Demo)
    ├── .git/                   ← Separate git history!
    ├── src/
    └── ...
```

**Important:** Each repo has its own `.git/` folder = separate git history!

---

## 🎮 Your New Shortcuts (Already Installed!)

### **Navigation**
```bash
cv       # Jump to CV repo
crm      # Jump to CRM repo
```

### **Git Status & Info**
```bash
gs       # git status
gl       # git log (last 10 commits)
gd       # git diff (see changes)
gb       # git branch (see branches)
```

### **Fast Workflow (Skips Slow Hooks)**
```bash
gcf "message"    # Fast commit
gpf              # Fast push
gacf "message"   # Add all + fast commit
```

### **Standard Git**
```bash
ga       # git add
gc "msg" # git commit -m "msg"
gp       # git push
```

### **Utilities**
```bash
killport 3333    # Kill port 3333
cvserver         # Start CV server automatically
```

---

## 🎯 Daily Workflow Examples

### **Example 1: Update CV Terminal**

```bash
# 1. Jump to CV
cv

# 2. Edit terminal.js (in VS Code or nano)
code terminal.js

# 3. Check changes
gs

# 4. Fast commit & push
gacf "Update terminal command"
gpf

# Done in 10 seconds!
```

### **Example 2: Fix CRM Component**

```bash
# 1. Jump to CRM
crm

# 2. Edit file
code src/components/Something.tsx

# 3. Fast commit & push
gacf "Fix auth component"
gpf

# Done!
```

### **Example 3: Work on Both Projects**

**In Terminal Tab 1:**
```bash
cv                    # CV repo
# Make CV changes...
gacf "Update CV"
gpf
```

**In Terminal Tab 2 (simultaneously):**
```bash
crm                   # CRM repo
# Make CRM changes...
gacf "Fix CRM"
gpf
```

**Both repos updated independently!**

---

## 🔍 Understanding Git Status

When you run `gs` (git status), you see:

### **Modified Files (M)**
```
M  terminal.js        ← File changed, not staged
```
**Action:** `git add terminal.js` to stage it

### **Staged Files (M with space before)**
```
M  terminal.js        ← File ready to commit (green)
```
**Action:** `git commit -m "message"` to commit

### **Untracked Files (??)**
```
?? NewFile.jsx        ← New file, git doesn't know about it
```
**Action:** `git add NewFile.jsx` to track it

### **No Changes**
```
nothing to commit, working tree clean
```
**Meaning:** Everything is committed! ✅

---

## 🚫 What NOT to Do

### **❌ DON'T try to commit CRM files from CV repo**
```bash
cv                              # In CV repo
git add /path/to/crm/file.tsx   # ❌ WRONG! Different repo!
```

**✅ DO THIS instead:**
```bash
crm                             # Go to CRM repo first!
git add src/file.tsx            # ✅ Now it works!
```

### **❌ DON'T mix changes from both repos in one commit**
```bash
# ❌ WRONG - these are different repos!
git add ~/AmitCV.sh/terminal.js
git add ~/ovenai-crm-portfolio-demo/src/App.tsx
```

**✅ DO THIS instead:**
```bash
# Commit CV changes
cv
git add terminal.js
git commit -m "Update CV"
git push

# Then commit CRM changes (separate commit!)
crm
git add src/App.tsx
git commit -m "Update CRM"
git push
```

---

## 🎓 Key Concepts

### **1. One Commit = One Repo**
- Each commit belongs to ONE repository
- You can't commit files from both repos together

### **2. Always Know Where You Are**
```bash
pwd              # Show current directory
git remote -v    # Show which repo you're in
```

### **3. Use Shortcuts**
```bash
cv    # Always starts you in CV repo
crm   # Always starts you in CRM repo
```

### **4. Terminal Tabs = Clarity**
- **Tab 1:** Always in CV repo
- **Tab 2:** Always in CRM repo
- Never get confused!

---

## 📊 Visual Workflow

```
YOUR COMPUTER
├── Terminal Tab 1 (CV)          Terminal Tab 2 (CRM)
│   ├── cv                        ├── crm
│   ├── Edit terminal.js          ├── Edit App.tsx
│   ├── gacf "Update CV"          ├── gacf "Fix CRM"
│   ├── gpf                       ├── gpf
│   └── ✅ CV Updated             └── ✅ CRM Updated
│
├── GitHub (CV)                   GitHub (CRM)
│   └── ShellCV repo              └── ovenai-crm-portfolio-demo repo
│
└── Vercel
    ├── CV deploys from            CRM deploys from
    └── ShellCV repo              └── ovenai-crm-portfolio-demo repo
```

---

## 🎯 Quick Reference Card

| Task | Command |
|------|---------|
| **Go to CV** | `cv` |
| **Go to CRM** | `crm` |
| **See changes** | `gs` |
| **Add file** | `ga filename` |
| **Add all** | `ga .` |
| **Commit** | `gc "message"` |
| **Fast commit** | `gcf "message"` |
| **Push** | `gp` |
| **Fast push** | `gpf` |
| **All-in-one fast** | `gacf "message"` then `gpf` |
| **Where am I?** | `pwd` |
| **Which repo?** | `git remote -v` |
| **Kill port** | `killport 3333` |

---

## 💡 Pro Tips

### **Tip 1: Use Terminal Tabs**
- **Tab 1:** Always `cv` - never leave this repo
- **Tab 2:** Always `crm` - never leave this repo
- Clear mental separation!

### **Tip 2: Fast Workflow**
```bash
# Instead of:
git add .
git commit -m "message"    # ← Slow hooks run here
git push                   # ← Slow hooks run again

# Do this:
gacf "message"             # Add + commit (no hooks)
gpf                        # Push (no hooks)
# 10× faster!
```

### **Tip 3: Check Before Committing**
```bash
pwd              # Where am I?
gs               # What changed?
gd               # See exact changes
```

---

## 🎉 You're All Set!

**You now have:**
- ✅ Two repos working independently
- ✅ Fast shortcuts installed (`cv`, `crm`, `gacf`, etc.)
- ✅ Crystal-clear understanding of git workflow
- ✅ Terminal tabs for clarity

**Your workflow is now:**
1. `cv` or `crm` (jump to repo)
2. Make changes
3. `gacf "message"` (fast commit)
4. `gpf` (fast push)
5. Done! ✅

**No more confusion! 🚀**

