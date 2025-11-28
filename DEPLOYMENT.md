# Deployment Guide

This is a full-stack Node.js + Express + React application. Follow the steps below to deploy.

## Prerequisites

- Node.js 20+
- npm or yarn
- Git
- Database (PostgreSQL recommended for production)

## Build for Production

```bash
npm run build
```

This will:
1. Build the React frontend with Vite
2. Bundle the Express server with esbuild
3. Output to `dist/` directory

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/database
SESSION_SECRET=your-random-secret-key
```

See `.env.example` for all available variables.

## Deployment Options

### Option 1: Render.com (Recommended)

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Use the following settings:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 20
6. Add environment variables in the Render dashboard
7. Deploy!

### Option 2: Railway.app

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Create a new project
4. Connect your GitHub repository
5. Railway will auto-detect Node.js
6. Add environment variables
7. Deploy!

### Option 3: Docker (Any Host)

Build the Docker image:
```bash
docker build -t booking-shooking .
```

Run locally:
```bash
docker run -p 5000:5000 -e DATABASE_URL=your_db_url booking-shooking
```

Deploy to any Docker-compatible host (AWS, DigitalOcean, etc.)

### Option 4: Traditional VPS

1. SSH into your server
2. Clone the repository
3. Install Node.js 20+
4. Run `npm install`
5. Run `npm run build`
6. Set up environment variables
7. Use PM2 or systemd to run `npm start`
8. Set up Nginx as reverse proxy

## Production Checklist

- [ ] Build completes without errors: `npm run build`
- [ ] Environment variables are set correctly
- [ ] Database is configured and accessible
- [ ] SESSION_SECRET is a strong random string
- [ ] NODE_ENV is set to `production`
- [ ] PORT is accessible (usually 5000 or 80)
- [ ] HTTPS/SSL is configured
- [ ] Logs are being monitored
- [ ] Database backups are configured

## Troubleshooting

**Build fails**: Check that all dependencies are installed and TypeScript compiles without errors.

**Runtime errors**: Check logs and ensure all environment variables are set.

**Database connection fails**: Verify DATABASE_URL is correct and the database is accessible from your deployment host.

**Port already in use**: Change the PORT environment variable or kill the process using the port.

## Local Testing

Test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:5000` in your browser.
