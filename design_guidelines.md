# Krishna Harsh Travels - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by tourlane.com's premium travel aesthetic with custom luxury branding. Modern, clean, and emotionally driven travel storytelling.

## Color Palette
- **Royal Blue**: #0A3D62 (primary brand color)
- **Sand Brown**: #C49A6C (secondary accent)
- **White**: #FFFFFF (backgrounds, text)
- **Light Beige**: #F7F2EB (subtle backgrounds)

## Visual Style
- Premium, aesthetic, clean travel brand
- Soft shadows and rounded corners throughout
- Large whitespace for breathing room
- High-quality travel photography
- Smooth Framer Motion animations (subtle, not distracting)
- Minimalistic modern typography using Inter or DM Sans

## Typography
- **Font Families**: Inter or DM Sans from Google Fonts
- **Hierarchy**: Large headlines for hero, medium for section titles, body text for descriptions
- **Tone**: Premium, trustworthy, emotional storytelling with clear CTAs

## Layout & Spacing
- **Mobile-first responsive design**
- **Spacing units**: Use Tailwind's standard spacing (4, 6, 8, 12, 16, 20, 24, 32)
- **Container**: max-w-7xl for main content areas
- **Section padding**: py-16 md:py-24 for desktop, py-12 for mobile

## Component Specifications

### 1. Hero Section
- Full-screen image or video background
- Headline: "Plan Your Dream Journey with Krishna Harsh Travels"
- Subtext: "Personalized trips crafted by expert travel designers"
- Two CTA buttons: "Book Free Consultation" (primary blue) + "Explore Destinations" (brown accent)
- Floating search bar overlay
- Buttons on hero image should have blurred backgrounds

### 2. How It Works (3-Step Process)
- Icons with minimal animation
- Step 1: Share Your Travel Preferences
- Step 2: Get a Free Custom Itinerary  
- Step 3: Book Your Perfect Trip
- Horizontal layout on desktop, stacked on mobile

### 3. Popular Destinations Grid
- 6-9 destination cards in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: image, destination name, rating stars, short description
- Hover effects with subtle lift and shadow
- Blue and brown accent details

### 4. Recommended Travel Packages
- Card slider/carousel layout using shadcn components
- Each package card: image, title, pricing, duration, highlights list
- "Customize this trip" button (brown accent)
- Arrow navigation for slider

### 5. Why Choose Us
- 4-column grid on desktop (2 columns tablet, 1 mobile)
- Icon + title + description format
- Features: Expert Travel Designers, 100% Tailored Trips, Best Price Guarantee, 24/7 Support
- Blue icons with brown accents

### 6. Testimonials Slider
- User photo, name, location
- 5-star rating display
- Quote text
- Animated fade-in transitions
- Auto-play carousel with manual controls

### 7. Book Free Consultation Form
- Fields: Name, Email, Phone, Destination dropdown, Travel Dates
- Blue primary button for submit
- Form validation states
- Connected to Next.js API route
- 2-column layout on desktop (form + info/image)

### 8. Footer
- 3-4 column layout on desktop
- Company info, quick links, destinations, contact
- Social media icons (blue/brown themed)
- Copyright and legal links
- Brown background with white text

## Images
- **Hero**: Large full-screen background image of premium travel destination (mountains, beaches, or exotic location)
- **Destinations**: High-quality images for each destination card
- **Packages**: Featured images for each travel package
- **Testimonials**: User profile photos (circular)
- All images should be high-resolution, professionally shot travel photography

## Interactions
- Smooth scroll behavior
- Hover states: subtle lift (translateY) and shadow increase on cards
- Button hover: slight scale and brightness change
- Form focus states: blue border highlight
- Slider/carousel: smooth transitions with easing
- Keep animations minimal and premium-feeling

## Accessibility
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Focus states for interactive elements
- Color contrast meeting WCAG standards
- Semantic HTML throughout