import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import heroBackground from "../../../attached_assets/generated_images/background_2.jpeg.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden sm:h-screen md:h-screen lg:h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 flex min-h-screen h-full flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl w-full"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 w-full"
          >
            <a href="#destinations" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="min-h-12 w-full sm:w-auto border-2 border-white/80 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium"
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
