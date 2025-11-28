# Quick Deployment Checklist

## Before You Start
- [ ] Code is committed and pushed to GitHub
- [ ] All dependencies installed: `npm install`
- [ ] No uncommitted changes: `git status`

## Step 1: Test Build Locally (5 minutes)
```bash
npm run build
npm start
```
- [ ] Build completes without errors
- [ ] App loads at http://localhost:5000
- [ ] No console errors
- [ ] Stop server: Ctrl+C

## Step 2: Prepare Environment Variables (2 minutes)
```bash
cp .env.example .env
```
Edit `.env` and add:
- [ ] `NODE_ENV=production`
- [ ] `DATABASE_URL=your-database-url`
- [ ] `SESSION_SECRET=your-random-secret` (generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

## Step 3: Commit Changes (1 minute)
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```
- [ ] Changes pushed to GitHub

## Step 4: Deploy to Render.com (10 minutes)

### 4.1 Create Account
- [ ] Go to https://render.com
- [ ] Sign up with GitHub
- [ ] Authorize Render

### 4.2 Create Web Service
- [ ] Click "New +" → "Web Service"
- [ ] Select your GitHub repository
- [ ] Click "Connect"

### 4.3 Configure Service
- [ ] Name: `booking-shooking`
- [ ] Environment: `Node`
- [ ] Build Command: `npm run build`
- [ ] Start Command: `npm start`
- [ ] Node Version: `20`

### 4.4 Add Environment Variables
- [ ] `NODE_ENV` = `production`
- [ ] `DATABASE_URL` = your database URL
- [ ] `SESSION_SECRET` = your generated secret

### 4.5 Deploy
- [ ] Click "Create Web Service"
- [ ] Wait for deployment (5-10 minutes)
- [ ] Check deployment logs for errors

## Step 5: Verify Deployment (5 minutes)
- [ ] Visit your Render URL (e.g., https://booking-shooking.onrender.com)
- [ ] Homepage loads
- [ ] Navigation works
- [ ] API endpoints respond
- [ ] Database queries work
- [ ] No console errors in browser

## Step 6: Set Up Custom Domain (Optional)
- [ ] Go to Render Settings → Custom Domain
- [ ] Add your domain
- [ ] Update DNS records
- [ ] Wait for DNS propagation (up to 24 hours)

## Step 7: Monitor & Maintain
- [ ] Check logs regularly in Render dashboard
- [ ] Set up email alerts for failures
- [ ] Monitor performance
- [ ] Keep dependencies updated

---

## Total Time: ~25 minutes

## If Something Goes Wrong

### Build Fails
```bash
npm install
npm run build
```

### Runtime Errors
- Check Render logs for error messages
- Verify all environment variables are set
- Ensure database URL is correct

### Rollback
- Go to Render Deployments tab
- Click previous successful deployment
- Click "Redeploy"

---

## Alternative: Deploy to Railway.app

If you prefer Railway instead:

1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → Deploy from GitHub
4. Select your repository
5. Add environment variables
6. Railway auto-deploys
7. Done!

---

## Need Help?

- Render.com Docs: https://render.com/docs
- Railway.app Docs: https://docs.railway.app
- Check DEPLOY_STEPS.md for detailed instructions
