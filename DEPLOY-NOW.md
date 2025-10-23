# 🚀 Deploy to amityogev.com - Final Steps

## ✅ What's Already Done:

✓ Clean project created at: `/Users/amity/projects/amit-terminal-resume`  
✓ GitHub repo created: https://github.com/broddo-baggins/amit-terminal-resume  
✓ All files committed and pushed  
✓ Ready to deploy!

---

## 🎯 Deploy in 3 Commands (2 minutes):

### Step 1: Login to Vercel (one-time)
```bash
cd /Users/amity/projects/amit-terminal-resume
vercel login
```

**Choose:** "Continue with GitHub"  
→ Browser opens  
→ Click "Authorize Vercel"  
→ Done!

---

### Step 2: Deploy to Vercel
```bash
vercel --prod
```

**Answer the prompts:**
- ✓ Set up and deploy? → **Y** (yes)
- ✓ Which scope? → Your account (press Enter)
- ✓ Link to existing project? → **N** (no)
- ✓ What's your project's name? → `amit-terminal-resume` (or press Enter)
- ✓ In which directory is your code? → `./` (press Enter)
- ✓ Want to override settings? → **N** (no)

**Result:** Vercel gives you a URL like:
```
✅ Production: https://amit-terminal-resume.vercel.app
```

**Test it:**
```bash
curl https://amit-terminal-resume.vercel.app
```

---

### Step 3: Connect Your Domain (amityogev.com)

#### A. In Vercel Dashboard:
1. Go to: https://vercel.com/dashboard
2. Click your project: `amit-terminal-resume`
3. Click **Settings** (top right)
4. Click **Domains** (left sidebar)
5. Click **Add Domain**
6. Type: `amityogev.com`
7. Click **Add**

Vercel shows DNS records:
```
Type: A
Name: @
Value: 76.76.21.21 (example - Vercel shows exact value)
```

#### B. In GoDaddy:
1. Go to: https://account.godaddy.com/
2. Click **My Products**
3. Find `amityogev.com` → Click **DNS**
4. Click **Add** (bottom right)

**Add A Record:**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21 (paste from Vercel)
TTL: 600
```

**Add CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

5. Click **Save**

---

### Step 4: Wait & Test

**Wait:** 10-60 minutes for DNS to propagate

**Check status:**
```bash
# Check DNS propagation
nslookup amityogev.com

# Test when ready
curl amityogev.com
curl amityogev.com/skills
curl amityogev.com/projects
```

**Check propagation worldwide:**
https://dnschecker.org/#A/amityogev.com

---

## 🎉 You're Done!

Now anyone in the world can:
```bash
curl amityogev.com
```

---

## 🔄 Future Updates

Edit your resume files in this project:
```bash
cd /Users/amity/projects/amit-terminal-resume

# Edit files
nano resume.txt
nano skills.txt
nano projects.txt

# Commit and push
git add .
git commit -m "Update resume"
git push

# Deploy to Vercel
vercel --prod
```

**Or connect GitHub to Vercel** for auto-deploy:
- In Vercel dashboard → Settings → Git → Connect GitHub
- Every `git push` = automatic deployment!

---

## 📧 Where to Share

✅ **Email signature:**
```
Amit Yogev | Product Manager
curl amityogev.com
```

✅ **LinkedIn About:**
```
💻 Terminal resume: curl amityogev.com
```

✅ **Business card:**
```
AMIT YOGEV
💻 curl amityogev.com
```

✅ **Cover letters:**
```
P.S. You can view my full tech stack by running: curl amityogev.com
```

---

## 🆘 Troubleshooting

**Vercel login not working?**
```bash
vercel logout
vercel login
```

**DNS not updating after 2 hours?**
- Delete old DNS records in GoDaddy (any old A or CNAME for @)
- Re-add the Vercel records
- Wait another hour

**Want to test locally first?**
```bash
cd /Users/amity/projects/amit-terminal-resume
node server.js
# In another terminal:
curl localhost:3333
```

---

## 💡 Pro Tips

1. **Test before sharing:** Make sure `curl amityogev.com` works
2. **Add to GitHub README:** Makes your GitHub profile stand out
3. **Tweet about it:** Developers love this stuff
4. **Use in interviews:** Great conversation starter
5. **Keep it updated:** Takes 30 seconds with git push

---

Ready to deploy? Just run:
```bash
cd /Users/amity/projects/amit-terminal-resume
vercel login
vercel --prod
```

Then follow Step 3 to connect your domain! 🚀

