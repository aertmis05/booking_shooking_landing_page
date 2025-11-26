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
            Plan Your Dream Journey with Krishna Harsh Travels
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-1/2 w-full max-w-4xl -translate-x-1/2 px-4"
        >
          <div className="rounded-md border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md md:p-6">
            <div className="grid gap-4 md:grid-cols-3 md:gap-2">
              <div className="flex items-center gap-2 rounded-md border border-border bg-background">
                <MapPin className="ml-4 h-5 w-5 text-muted-foreground" data-testid="icon-destination" />
                <Input
                  placeholder="Where to?"
                  className="border-0 focus-visible:ring-0"
                  data-testid="input-hero-destination"
                />
              </div>
              <div className="flex items-center gap-2 rounded-md border border-border bg-background">
                <Calendar className="ml-4 h-5 w-5 text-muted-foreground" data-testid="icon-calendar" />
                <Input
                  placeholder="When?"
                  className="border-0 focus-visible:ring-0"
                  data-testid="input-hero-date"
                />
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-hero-search">
                <Search className="mr-2 h-5 w-5" />
                Search Trips
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
