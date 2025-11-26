# Krishna Harsh Travels - Travel Agency Landing Page

## Overview

Krishna Harsh Travels is a premium luxury travel agency landing page application. The platform provides a modern, aesthetically-driven user experience for travelers to explore destinations, view travel packages, and book free consultations with expert travel designers. The application emphasizes emotional storytelling through high-quality imagery, smooth animations, and a clean, minimalist design inspired by tourlane.com with a custom blue and brown luxury theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application)
- **React Query (@tanstack/react-query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for smooth, subtle animations throughout the user experience
- **Class Variance Authority (CVA)** for managing component variants

**Design System**
- Custom color palette: Royal Blue (#0A3D62), Sand Brown (#C49A6C), White, Light Beige (#F7F2EB)
- Typography: Inter and DM Sans font families from Google Fonts
- Mobile-first responsive design with standard Tailwind spacing units
- Consistent use of shadows, rounded corners, and large whitespace for premium aesthetic

**Page Structure**
The application uses a single-page layout with modular sections:
- Hero Section (full-screen with image background)
- How It Works (3-step process)
- Popular Destinations (responsive grid)
- Travel Packages (carousel display)
- Why Choose Us (feature highlights)
- Testimonials (carousel with user reviews)
- Consultation Form (lead capture)
- Footer (navigation and social links)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Separate development (`index-dev.ts`) and production (`index-prod.ts`) entry points
- Development mode integrates Vite middleware for seamless frontend/backend development
- Production mode serves static files from the build directory

**API Design**
- RESTful API endpoints under `/api` prefix
- POST `/api/consultations` - Create new consultation requests
- GET `/api/consultations` - Retrieve all consultations
- JSON request/response format with proper HTTP status codes
- Validation using Zod schemas with error formatting via `zod-validation-error`

**State Management**
- In-memory storage implementation (`MemStorage`) for development/prototyping
- Interface-based storage layer (`IStorage`) allows easy swapping to database implementations
- UUID generation for entity IDs using Node's built-in `crypto` module

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL dialect
- **Neon Database** serverless driver (`@neondatabase/serverless`)
- Schema-first approach with type-safe database operations
- Database schema defined in `shared/schema.ts` for shared types between client and server
- Migration directory configured at `./migrations`

**Schema Design**
Two primary tables:
1. **users**: Basic user authentication (id, username, password)
2. **consultations**: Customer inquiry forms (id, name, email, phone, destination, travelDates, createdAt)

**Validation Strategy**
- Zod schemas generated from Drizzle table definitions using `drizzle-zod`
- Client-side and server-side validation using the same schema definitions
- Custom validation rules (email format, phone number length, required fields)

### External Dependencies

**UI & Component Libraries**
- Radix UI primitives (accordion, dialog, dropdown, popover, select, toast, etc.)
- Embla Carousel for touch-friendly image carousels
- Lucide React for consistent icon system
- React Hook Form with Zod resolver for form management

**Development Tools**
- Replit-specific plugins for development environment integration
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing

**Session & Security**
- `connect-pg-simple` for PostgreSQL-backed session storage (configured but not yet implemented in routes)

**Utility Libraries**
- `date-fns` for date manipulation
- `clsx` and `tailwind-merge` for conditional className management
- `nanoid` for unique ID generation

**Styling & Animation**
- Tailwind CSS with custom configuration for design system
- Framer Motion for declarative animations
- Custom CSS variables for theming (light mode defined, dark mode prepared)