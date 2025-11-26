# Krishna Harsh Travels - Premium Landing Page

## Project Overview
A fully-responsive, luxury travel agency landing page built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a modern design inspired by Tourlane with a custom blue and brown luxury color scheme.

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, TypeScript
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui
- **Routing**: Wouter

## Completed Features

### MVP Features (Fully Implemented)
1. **Hero Section** - Full-screen background with headline, subtext, and dual CTAs
2. **How It Works** - 3-step animated process section
3. **Popular Destinations** - 9-destination grid with ratings and hover effects
4. **Travel Packages** - Carousel slider with pricing and highlights
5. **Why Choose Us** - 4 key features with icons
6. **Testimonials** - Auto-carousel with user reviews and ratings
7. **Consultation Form** - Multi-field form with validation and API integration
8. **Footer** - Comprehensive navigation and social links
9. **Responsive Design** - Mobile-first, fully responsive across all devices
10. **Premium Styling** - Blue (#0A3D62) and brown (#C49A6C) luxury theme
11. **Animations** - Smooth Framer Motion transitions throughout
12. **SEO Optimized** - Proper meta tags and semantic HTML

## API Endpoints
- `POST /api/consultations` - Submit consultation request
- `GET /api/consultations` - Retrieve all consultation requests

## Form Validation
- Name: 2+ characters
- Email: Valid email format
- Phone: 10+ digits
- Destination: Required selection
- Travel Dates: Required field

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── hero-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── popular-destinations.tsx
│   │   ├── travel-packages.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── testimonials.tsx
│   │   ├── consultation-form.tsx
│   │   ├── footer.tsx
│   │   └── ui/ (shadcn components)
│   ├── pages/
│   │   └── home.tsx
│   ├── App.tsx
│   └── index.css
server/
├── routes.ts (API endpoints)
├── storage.ts (In-memory storage)
└── app.ts
shared/
└── schema.ts (Zod schemas & TypeScript types)
```

## How to Use

### Run Locally
```bash
npm run dev
```
The app will be available at http://localhost:5000

### Download the Project
1. Click the three-dot menu (⋯) in top right
2. Select "Download as zip"
3. Extract and use locally

### Deploy/Publish
1. Click the "Publish" button in Replit
2. Your site gets a free `.replit.app` domain
3. Share the live link anywhere

## Color Scheme
- **Primary (Royal Blue)**: #0A3D62 - Main buttons, headings
- **Secondary (Sand Brown)**: #C49A6C - Accents, footer, highlight elements
- **Background**: #FFFFFF (light), #1A1A1A (dark)
- **Text**: Professional typography with Inter/DM Sans fonts

## Future Enhancements
- Integrate real travel API for live destination data
- Email service integration for consultation notifications
- User authentication and saved favorites
- Advanced search and filtering
- Admin dashboard for content management
- Database persistence (PostgreSQL)

## Notes
- All images are high-quality AI-generated travel photography
- Fully accessible with proper ARIA labels and semantic HTML
- Touch-friendly buttons and interactive elements
- Smooth scroll behavior and animations
- Form validation with user-friendly error messages
- Toast notifications for user feedback
