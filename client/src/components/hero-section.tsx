import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Compass } from "lucide-react";
import heroBackground from "../../../attached_assets/generated_images/hero-desktop-optimized.webp";
import { GradientBackground } from "./gradient-background";
import { AnimatedMobileBackground } from "./particle-flow";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Booking Shooking — pack your bags, no looking!";
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // 80ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Smooth scroll to contact section
  const handleExploreClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll to destinations section
  const handleDestinationsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {/* === MOBILE: Hybrid Background (Gradient + Particles) === */}
      <div className="absolute inset-0 md:hidden">
        {/* Layer 1: Animated sky-to-ocean gradient */}
        <GradientBackground />
        
        {/* Layer 2: Particle airflow with direction lines */}
        <AnimatedMobileBackground />
        
        {/* Layer 3: Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
      </div>

      {/* === DESKTOP: Image Background === */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-md md:max-w-4xl w-full space-y-6">
          
          {/* Brand logo with travel icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 mb-2 md:hidden"
          >
            <Plane className="w-7 h-7 text-white drop-shadow-lg" />
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">
              Booking
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold leading-tight md:hidden"
            style={{
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)"
            }}
          >
            <span className="text-white">
              Discover Your
            </span>
            <br />
            <span className="text-white">
              Next Journey
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/95 max-w-lg mx-auto leading-relaxed md:hidden"
            style={{
              textShadow: "0 1px 10px rgba(0, 0, 0, 0.3)"
            }}
          >
            Book adventures, flights and stays worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 pt-6 w-full max-w-sm mx-auto"
          >
            {/* Primary CTA - Full width button */}
            <Button
              size="lg"
              onClick={handleExploreClick}
              className="w-full h-14 text-lg font-semibold bg-white text-gray-900 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white shadow-2xl hover:shadow-cyan-500/50 border-0 transition-all duration-500 hover:scale-[1.05] active:scale-[0.98]"
            >
              Start Exploring
              <Plane className="ml-2 w-5 h-5" />
            </Button>

            {/* Secondary CTA - Text link */}
            <a
              href="#destinations"
              onClick={handleDestinationsClick}
              className="group flex items-center justify-center gap-2 text-white/90 hover:text-white text-base font-medium transition-colors py-2 cursor-pointer"
              style={{
                textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)"
              }}
            >
              <Compass className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Top Destinations
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6"
          >
            <p 
              className="text-sm md:text-base text-white/90 font-medium tracking-wide"
              style={{
                textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)"
              }}
            >
              {typedText}
              <span className="animate-pulse ml-0.5">|</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (mobile only) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
      >
        <div className="flex flex-col items-center gap-2">
          <span 
            className="text-xs text-white/70 font-light tracking-wider uppercase"
            style={{
              textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)"
            }}
          >
            Scroll to explore
          </span>
          <svg 
            className="w-5 h-5 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
