# DNS Configuration Guide for amityogev.com

## Vercel Deployment
Your site is deployed on Vercel. Now you need to point your GoDaddy domain to Vercel.

## Step 1: Get DNS Values from Vercel
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Settings → Domains
4. Add domain: `amityogev.com`
5. **Copy the DNS values Vercel shows**

## Step 2: Update GoDaddy DNS
1. Go to: https://dcc.godaddy.com/control/portfolio/
2. Find `amityogev.com` → Click DNS
3. **Delete** any existing A or CNAME records for @ and www
4. **Add** the records Vercel gave you

Example (use YOUR values from Vercel):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

## Step 3: Verify
Wait 10-60 minutes, then test:
```bash
# Test DNS resolution
dig amityogev.com
dig www.amityogev.com

# Test curl
curl https://amityogev.com

# Test in browser
open https://amityogev.com
```

## Troubleshooting
- DNS not updating? Try `dig +trace amityogev.com` to see propagation
- SSL errors? Wait for Vercel to provision certificate (automatic)
- Still not working? Check Vercel dashboard for verification status

## Quick Test Commands
```bash
# Check if DNS is pointing to Vercel
nslookup amityogev.com

# Test curl functionality
curl https://amityogev.com
curl https://amityogev.com/resume

# Open in browser
open https://amityogev.com
```

