import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { DestinationCard } from "@/components/destination-card";
import DubaiImage from "/palace/Dubai .jpg";
import BaliImage from "/palace/Bali 1.jpg";
import GoaImage from "/palace/Goa.jpg";
import HimachalImage from "/palace/Himachal Pradesh.jpg";
import KeralaImage from "/palace/Kerala.jpg";
import MalaysiaImage from "/palace/Malaysia.jpg";
import MeghalayaImage from "/palace/Megalaya.jpg";
import RajasthanImage from "/palace/Rajasthan it.jpg";
import ThailandImage from "/palace/Thailand.jpg";
import VietnamImage from "/palace/Vietnam.jpg";
import KashmirImage from "/palace/kashmir.jpg";
import SingaporeImage from "/palace/singapore.jpg";

const destinations = [
  {
    name: "Dubai",
    image: DubaiImage,
    description: "Modern luxury meets Arabian heritage in this futuristic desert oasis",
  },
  {
    name: "Bali",
    image: BaliImage,
    description: "Tropical paradise with lush rice terraces, pristine beaches, and spiritual temples",
  },
  {
    name: "Thailand",
    image: ThailandImage,
    description: "Exotic beaches, vibrant culture, and delicious cuisine await in this Southeast Asian gem",
  },
  {
    name: "Kerala",
    image: KeralaImage,
    description: "Went for ‘peace’ came back with 500 pics of water and one accidental spiritual awakening.Backwaters be like: ‘Sit. Heal. Cry pretty.",
  },
  {
    name: "Himachal Pradesh",
    image: HimachalImage,
    description: "Plan: 2-day trip.Reality: Adopted by a local dog, applied for mountain citizenship.Happiness unlocked: chai + view combo.",
  },
  {
    name: "Rajasthan",
    image: RajasthanImage,
    description: "You think you’re dramatic?These forts exist just to out-drama you.Warning: You will start walking like royalty.",
  },
  {
    name: "Meghalaya",
    image: MeghalayaImage,
    description: "It rains emotions here. Waterfalls attacking you with beauty.You’ll suddenly believe in nature more than humans.",
  },
  {
    name: "Goa",
    image: GoaImage,
    description: "Starts with: beach sunsets Ends with: WHO TOOK MY SLIPPERS?No regrets. Only memories you can’t explain to parents",
  },
  {
    name: "Singapore",
    image: SingaporeImage,
    description: "Everything shiny. Everything expensive.Even the merlion statue is like: ‘Bro, dress better.’But damn… worth every penny of trauma.",
  },
  {
    name: "Malaysia",
    image: MalaysiaImage,
    description: "One minute city skyscrapers, next minute deep jungle.Like if Netflix made a travel experience.",
  },
  {
    name: "Vietnam",
    image: VietnamImage,
    description: "Cross the road like your life is a stunt show. Photo cures trauma. Halong Bay cures existence.",
  },
  {
    name: "Kashmir",
    image: KashmirImage,
    description: "Views so beautiful your ex’s toxicity gets erased.You will cry because of the cold & the scenery. Both.",
  },
];

export function PopularDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setLocation] = useLocation();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const handleDestinationClick = (destinationName: string) => {
    // For now, only Dubai has an itinerary page
    if (destinationName.toLowerCase() === "dubai") {
      setLocation("/dubai-itinerary");
    }
    // Other destinations can be added later
  };

  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            OUR BESTSELLING DESTINATIONS
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Discover the world's most breathtaking locations curated by our travel experts
          </p>
        </motion.div>

        {/* Mobile Carousel - Only visible on small screens */}
        <div className="block sm:hidden">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous destination"
            >
              <ChevronLeft className="h-5 w-5 text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Next destination"
            >
              <ChevronRight className="h-5 w-5 text-gray-800" />
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden px-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <DestinationCard
                    name={destinations[currentIndex].name}
                    image={destinations[currentIndex].image}
                    description={destinations[currentIndex].description}
                    index={currentIndex}
                    onClick={() => handleDestinationClick(destinations[currentIndex].name)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to destination ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid Layout - Hidden on small screens, visible on sm and up */}
        <div className="hidden sm:grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard
                name={destination.name}
                image={destination.image}
                description={destination.description}
                index={index}
                onClick={() => handleDestinationClick(destination.name)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
