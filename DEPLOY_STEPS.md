# Complete Deployment Steps for Booking Shooking

This guide walks you through deploying your full-stack Node.js + React application to production.

---

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Local Build Testing](#local-build-testing)
3. [Prepare for Deployment](#prepare-for-deployment)
4. [Deploy to Render.com (Recommended)](#deploy-to-rendercom-recommended)
5. [Deploy to Railway.app](#deploy-to-railwayapp)
6. [Deploy with Docker](#deploy-with-docker)
7. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] GitHub account (for connecting to deployment platforms)
- [ ] Code pushed to GitHub repository
- [ ] All dependencies installed locally (`npm install`)
- [ ] No uncommitted changes in Git
- [ ] Environment variables identified
- [ ] Database plan (PostgreSQL recommended)

### Check Git Status
```bash
git status
git log --oneline -5
```

---

## Local Build Testing

### Step 1: Build the Application Locally

```bash
npm run build
```

**Expected output:**
- React frontend built to `dist/public/`
- Express server bundled to `dist/index.js`
- No errors or warnings

### Step 2: Test Production Build Locally

```bash
npm start
```

**Expected output:**
```
3:54:00 PM [express] serving on port 5000
```

Visit `http://localhost:5000` in your browser. The app should load without errors.

### Step 3: Stop the Server

Press `Ctrl+C` to stop the server.

---

## Prepare for Deployment

### Step 1: Create Environment Variables File

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and fill in your values:

```
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/database
SESSION_SECRET=generate-a-random-string-here
```

**To generate a random SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 2: Update .gitignore

Ensure `.env` is in `.gitignore` (it should be):

```bash
cat .gitignore
```

Should contain:
```
.env
.env.local
node_modules
dist
```

### Step 3: Commit All Changes

```bash
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

---

## Deploy to Render.com (Recommended)

Render.com is the easiest option for this project. It handles Node.js apps seamlessly.

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Authorize Render to access your GitHub account

### Step 2: Create a New Web Service

1. Click **"New +"** button
2. Select **"Web Service"**
3. Select your GitHub repository
4. Click **"Connect"**

### Step 3: Configure the Service

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `booking-shooking` |
| **Environment** | `Node` |
| **Region** | Select closest to your users |
| **Branch** | `main` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `20` |

### Step 4: Add Environment Variables

1. Scroll down to **"Environment"** section
2. Click **"Add Environment Variable"**
3. Add each variable:

```
NODE_ENV = production
DATABASE_URL = postgresql://user:password@host:5432/database
SESSION_SECRET = your-generated-secret-key
```

**For DATABASE_URL:**
- If using Render's PostgreSQL: Get the connection string from Render dashboard
- If using external database: Use your database provider's connection string

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Run `npm run build`
   - Start the server with `npm start`
3. Wait for deployment to complete (usually 5-10 minutes)
4. Your app will be live at: `https://booking-shooking.onrender.com`

### Step 6: Verify Deployment

1. Visit your Render URL
2. Test all features:
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] API endpoints respond
   - [ ] Database queries work
3. Check logs in Render dashboard for errors

---

## Deploy to Railway.app

Railway.app is another excellent option with a free tier.

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Authorize Railway to access your GitHub account

### Step 2: Create a New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Search for and select your repository
4. Click **"Deploy Now"**

### Step 3: Configure Environment

1. Railway auto-detects Node.js
2. Go to **"Variables"** tab
3. Add environment variables:

```
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:5432/database
SESSION_SECRET=your-generated-secret-key
```

### Step 4: Add PostgreSQL Database (Optional)

If you need a database:

1. Click **"+ New"** in your project
2. Select **"PostgreSQL"**
3. Railway will create a database and auto-populate `DATABASE_URL`

### Step 5: Deploy

1. Railway automatically deploys when you push to GitHub
2. Watch the deployment progress in the dashboard
3. Your app will be live at: `https://your-project-name.up.railway.app`

### Step 6: Verify Deployment

Same as Render.com - test all features and check logs.

---

## Deploy with Docker

Use this method for any Docker-compatible host (AWS, DigitalOcean, etc.).

### Step 1: Build Docker Image

```bash
docker build -t booking-shooking:latest .
```

### Step 2: Test Locally

```bash
docker run -p 5000:5000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=postgresql://user:password@host:5432/database \
  -e SESSION_SECRET=your-secret \
  booking-shooking:latest
```

Visit `http://localhost:5000`

### Step 3: Push to Docker Registry

**Option A: Docker Hub**

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag booking-shooking:latest yourusername/booking-shooking:latest

# Push
docker push yourusername/booking-shooking:latest
```

**Option B: GitHub Container Registry**

```bash
# Login
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Tag
docker tag booking-shooking:latest ghcr.io/yourusername/booking-shooking:latest

# Push
docker push ghcr.io/yourusername/booking-shooking:latest
```

### Step 4: Deploy to Host

**AWS EC2:**
```bash
# SSH into instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Pull image
docker pull yourusername/booking-shooking:latest

# Run container
docker run -d -p 80:5000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=your-db-url \
  -e SESSION_SECRET=your-secret \
  yourusername/booking-shooking:latest
```

**DigitalOcean App Platform:**
1. Go to [digitalocean.com](https://digitalocean.com)
2. Create new App
3. Connect Docker image
4. Set environment variables
5. Deploy

---

## Post-Deployment

### Step 1: Verify Everything Works

- [ ] App loads at your domain
- [ ] All pages render correctly
- [ ] API endpoints work
- [ ] Database operations succeed
- [ ] Authentication/sessions work
- [ ] No console errors in browser

### Step 2: Set Up Monitoring

**For Render.com:**
- Check logs in Render dashboard
- Set up email alerts for failures

**For Railway.app:**
- Monitor in Railway dashboard
- Set up alerts

**For Docker:**
- Use `docker logs container-id` to view logs
- Set up monitoring with Prometheus/Grafana

### Step 3: Configure Custom Domain

**Render.com:**
1. Go to Settings → Custom Domain
2. Add your domain
3. Update DNS records as instructed

**Railway.app:**
1. Go to Settings → Custom Domain
2. Add your domain
3. Update DNS records

### Step 4: Enable HTTPS

Both Render and Railway provide free HTTPS automatically.

For Docker deployments, use Nginx with Let's Encrypt:

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --standalone -d yourdomain.com

# Configure Nginx as reverse proxy
```

### Step 5: Set Up Database Backups

**PostgreSQL:**
```bash
# Automated backups (ask your database provider)
# Most platforms (Render, Railway) include automatic backups
```

### Step 6: Monitor Performance

- Check response times
- Monitor database queries
- Watch error logs
- Monitor disk/memory usage

---

## Troubleshooting

### Build Fails

**Error: `Cannot find module`**
```bash
# Solution: Reinstall dependencies
npm install
npm run build
```

**Error: `TypeScript compilation failed`**
```bash
# Solution: Check for type errors
npm run check
```

### Runtime Errors

**Error: `DATABASE_URL not found`**
- Verify environment variable is set in deployment platform
- Check database connection string format

**Error: `Port already in use`**
- Change PORT environment variable
- Or kill process: `lsof -ti:5000 | xargs kill -9`

**Error: `Cannot find dist/index.js`**
- Ensure build completed successfully
- Check build logs in deployment platform

### App Loads but Features Don't Work

1. Check browser console for errors
2. Check server logs in deployment platform
3. Verify all environment variables are set
4. Test API endpoints with curl:
   ```bash
   curl https://your-domain.com/api/health
   ```

### Database Connection Issues

```bash
# Test connection locally
psql postgresql://user:password@host:5432/database

# Check DATABASE_URL format
# Should be: postgresql://user:password@host:5432/dbname
```

---

## Rollback (If Something Goes Wrong)

### Render.com
1. Go to Deployments tab
2. Click previous successful deployment
3. Click "Redeploy"

### Railway.app
1. Go to Deployments
2. Select previous deployment
3. Click "Redeploy"

### Docker
```bash
# Run previous image version
docker run -d -p 80:5000 yourusername/booking-shooking:previous-tag
```

---

## Useful Commands

```bash
# Local testing
npm run dev          # Development server
npm run build        # Build for production
npm start            # Run production build

# Git operations
git status           # Check uncommitted changes
git push origin main # Push to GitHub
git log --oneline    # View commit history

# Docker operations
docker build -t booking-shooking .
docker run -p 5000:5000 booking-shooking
docker logs container-id
docker ps            # List running containers
```

---

## Support & Resources

- **Render.com Docs**: https://render.com/docs
- **Railway.app Docs**: https://docs.railway.app
- **Node.js Best Practices**: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- **Express.js Production**: https://expressjs.com/en/advanced/best-practice-performance.html

---

## Summary

You now have multiple deployment options:

1. **Render.com** (Easiest, Recommended)
   - Free tier available
   - Auto-deploys on git push
   - Built-in PostgreSQL option
   - Time to deploy: 5-10 minutes

2. **Railway.app** (Also Easy)
   - Free tier available
   - Auto-deploys on git push
   - Built-in PostgreSQL option
   - Time to deploy: 5-10 minutes

3. **Docker** (Most Flexible)
   - Deploy anywhere
   - Full control
   - Requires more setup
   - Time to deploy: 15-30 minutes

**Recommended path for first-time deployment:**
1. Test build locally: `npm run build && npm start`
2. Push to GitHub
3. Deploy to Render.com (follow steps above)
4. Verify everything works
5. Done! 🎉

Good luck with your deployment!
