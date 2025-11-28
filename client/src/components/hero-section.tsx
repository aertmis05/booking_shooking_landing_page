import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_maldives_beach_aerial.png";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Plan Your Dream Journey with Booking Shooking
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10 text-lg text-white/90 md:text-xl lg:text-2xl"
          >
            Personalized trips crafted by expert travel designers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#consultation">
              <Button
                size="lg"
                className="min-h-12 bg-primary text-primary-foreground backdrop-blur-sm hover:bg-primary/90"
                data-testid="button-book-consultation"
              >
                Book Free Consultation
              </Button>
            </a>
            <a href="#destinations">
              <Button
                size="lg"
                variant="outline"
                className="min-h-12 border-2 border-white/80 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                data-testid="button-explore-destinations"
              >
                Explore Destinations
              </Button>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
