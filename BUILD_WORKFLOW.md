# 🔧 Build & Deploy Workflow

**ALWAYS TEST BUILDS LOCALLY BEFORE PUSHING TO VERCEL!**

This prevents failed deployments and wasted time.

---

## 🎯 The Golden Rule

```
Test Locally → Build Passes → Push to GitHub → Vercel Deploys ✅
```

**NEVER:**
```
Push to GitHub → Vercel Fails → Fix → Push Again → Fails Again → ... ❌
```

---

## 🧪 How to Test Builds Locally

### **For CRM Demo (ovenai-crm-portfolio-demo):**

```bash
# Method 1: Use the test script (recommended)
crm
./test-build.sh

# Method 2: Manual test
crm
npm run build

# If it passes:
#   ✓ built in X seconds
# Safe to push!

# If it fails:
#   ❌ error during build:
#   Could not load /path/to/file
# DO NOT PUSH! Fix the error first.
```

### **For CV (AmitCV.sh):**

The CV is static HTML/JS, but you can still test:

```bash
cv
node server.js
# Open http://localhost:3333
# Test all commands work
# If good, push!
```

---

## ✅ Complete Workflow: Making Changes

### **CRM Demo Changes:**

```bash
# 1. Go to CRM repo
crm

# 2. Make your changes
code src/components/Something.tsx

# 3. TEST BUILD LOCALLY!
./test-build.sh

# 4. If build passes:
git add .
gcf "Fix component"
gpf

# 5. Check Vercel dashboard
# Should deploy successfully!
```

### **CV Changes:**

```bash
# 1. Go to CV repo
cv

# 2. Make your changes
code terminal.js

# 3. Test locally
node server.js
# Test in browser

# 4. If good:
gacf "Update terminal"
gpf

# Done!
```

---

## 🚨 Common Build Errors & Solutions

### **Error: "Could not load /path/to/file"**

**Cause:** File exists but is ignored by git

**Solution:**
```bash
# Find the file
ls -la src/path/to/file

# If it exists, force add it
git add -f src/path/to/file

# Test build again
./test-build.sh

# If passes, commit & push
gcf "Add missing file"
gpf
```

### **Error: "Module not found"**

**Cause:** Missing npm package or typo in import

**Solution:**
```bash
# Check package.json
cat package.json | grep "package-name"

# If missing, install
npm install package-name

# Test build
./test-build.sh
```

### **Error: TypeScript errors**

**Cause:** Type mismatch or missing types

**Solution:**
```bash
# Run type check
npm run type-check

# Fix the errors shown
# Then test build
./test-build.sh
```

---

## 📋 Pre-Push Checklist

Before pushing to GitHub:

- [ ] **Tested build locally** (`./test-build.sh` passed)
- [ ] **No TypeScript errors** (`npm run type-check` passed)
- [ ] **No linting errors** (optional: `npm run lint`)
- [ ] **Tested in browser** (for UI changes)
- [ ] **Commit message is clear**

**Only then:** Push to GitHub!

---

## 🔄 New Workflow (Prevents Failures)

### **OLD WAY (BAD):**
```bash
# Make changes
git add .
git commit -m "Fix"
git push
# Wait 2 minutes...
# ❌ Vercel build fails
# Fix error
git commit -m "Fix again"
git push
# Wait 2 minutes...
# ❌ Still fails
# Repeat 5 times... 😫
```

### **NEW WAY (GOOD):**
```bash
# Make changes
./test-build.sh
# ✅ Passes in 10 seconds

git add .
gcf "Fix"
gpf

# Vercel deploys successfully! ✅
```

**Time saved:** 10-30 minutes per deployment!

---

## 🎮 Quick Commands Added to Your Shell

```bash
# Navigation
crm              # Jump to CRM repo
cv               # Jump to CV repo

# Fast git
gacf "message"   # Add all + commit fast
gpf              # Push fast

# Testing (use in CRM repo)
./test-build.sh  # Test build locally

# Utilities
killport 3333    # Kill port if busy
```

---

## 📊 Typical Development Session

### **Making CRM Changes:**

```bash
# 1. Navigate
crm

# 2. Edit
code src/components/Auth.tsx

# 3. Test (THE MOST IMPORTANT STEP!)
./test-build.sh
# If fails: fix errors, test again
# If passes: continue

# 4. Commit & push
gacf "Fix auth component"
gpf

# 5. Verify (optional)
# Check https://vercel.com/dashboard
# Should deploy successfully

# Total time: 1-2 minutes
```

### **Making CV Changes:**

```bash
# 1. Navigate
cv

# 2. Edit
code terminal.js

# 3. Test
node server.js
# Test in browser

# 4. Commit & push
gacf "Update command"
gpf

# Total time: 1 minute
```

---

## 🎯 Summary

### **Do:**
✅ Test builds locally BEFORE pushing
✅ Use `./test-build.sh` in CRM repo
✅ Fix errors locally (fast feedback)
✅ Only push when build passes

### **Don't:**
❌ Push without testing
❌ Hope Vercel will catch errors
❌ Waste time with failed deployments
❌ Debug on Vercel (slow, expensive)

---

## 💡 Pro Tips

### **Tip 1: Build Test Shortcut**
Add to `~/.zshrc`:
```bash
alias testbuild='./test-build.sh'
```

Usage:
```bash
crm
testbuild  # Quick build test!
```

### **Tip 2: Always Test After Adding Files**
```bash
git add -f src/new-file.tsx
./test-build.sh  # Make sure it builds!
```

### **Tip 3: Check Before Bed**
If you push at night:
```bash
./test-build.sh && gacf "Evening updates" && gpf
# Only pushes if build passes
# Wake up to successful deployment!
```

### **Tip 4: Clean Builds**
If build acting weird:
```bash
rm -rf dist node_modules
npm install
./test-build.sh
```

---

## 📈 Results

### **Before (Without Testing):**
- ❌ 5-8 failed deployments per session
- ❌ 2-5 minutes per failed build
- ❌ 30+ minutes wasted per session
- 😫 Frustration level: HIGH

### **After (With Local Testing):**
- ✅ 0-1 failed deployments per session
- ✅ 10 seconds to test locally
- ✅ 2-3 minutes total deployment time
- 😊 Frustration level: LOW

---

## 🎉 You're Set!

**Remember:**
1. **Always test locally first** (`./test-build.sh`)
2. **Only push when build passes**
3. **Vercel deploys will succeed every time**

**Your new mantra:**
> "If it builds locally, it builds on Vercel!"

---

**Questions? Check:**
- `GIT_GUIDE_TWO_REPOS.md` - Git workflow
- `NEXT_STEPS.md` - Integration steps
- This file - Build workflow

**Happy building! 🚀**

