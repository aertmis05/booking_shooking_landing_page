import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import dubaiImage from "/palace/Dubai .jpg";
import baliImage from "/palace/Bali 1.jpg";
import goaImage from "/palace/Goa.jpg";
import himachalImage from "/palace/Himachal Pradesh.jpg";
import keralaImage from "/palace/Kerala.jpg";
import malaysiaImage from "/palace/Malaysia.jpg";
import meghalayaImage from "/palace/Megalaya.jpg";
import rajasthanImage from "/palace/Rajasthan it.jpg";
import thailandImage from "/palace/Thailand.jpg";
import vietnamImage from "/palace/Vietnam.jpg";
import kashmirImage from "/palace/kashmir.jpg";
import singaporeImage from "/palace/singapore.jpg";

const destinations = [
  {
    name: "Dubai",
    image: dubaiImage,
    description: "Modern luxury meets Arabian heritage in this futuristic desert oasis",
  },
  {
    name: "Bali",
    image: baliImage,
    description: "Tropical paradise with lush rice terraces, pristine beaches, and spiritual temples",
  },
  {
    name: "Thailand",
    image: thailandImage,
    description: "Exotic beaches, vibrant culture, and delicious cuisine await in this Southeast Asian gem",
  },
  {
    name: "Kerala",
    image: keralaImage,
    description: "Went for ‘peace’ came back with 500 pics of water and one accidental spiritual awakening.Backwaters be like: ‘Sit. Heal. Cry pretty.",
  },
  {
    name: "Himachal Pradesh",
    image: himachalImage,
    description: "Plan: 2-day trip.Reality: Adopted by a local dog, applied for mountain citizenship.Happiness unlocked: chai + view combo.",
  },
  {
    name: "Rajasthan",
    image: rajasthanImage,
    description: "You think you’re dramatic?These forts exist just to out-drama you.Warning: You will start walking like royalty.",
  },
  {
    name: "Meghalaya",
    image: meghalayaImage,
    description: "It rains emotions here. Waterfalls attacking you with beauty.You’ll suddenly believe in nature more than humans.",
  },
  {
    name: "Goa",
    image: goaImage,
    description: "Starts with: beach sunsets Ends with: WHO TOOK MY SLIPPERS?No regrets. Only memories you can’t explain to parents",
  },
  {
    name: "Singapore",
    image: singaporeImage,
    description: "Everything shiny. Everything expensive.Even the merlion statue is like: ‘Bro, dress better.’But damn… worth every penny of trauma.",
  },
  {
    name: "Malaysia",
    image: malaysiaImage,
    description: "One minute city skyscrapers, next minute deep jungle.Like if Netflix made a travel experience.",
  },
  {
    name: "Vietnam",
    image: vietnamImage,
    description: "Cross the road like your life is a stunt show. Photo cures trauma. Halong Bay cures existence.",
  },
  {
    name: "Kashmir",
    image: kashmirImage,
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
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    className="group overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2 cursor-pointer"
                    onClick={() => handleDestinationClick(destinations[currentIndex].name)}
                  >
                    <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden rounded-t-md">
                      <img
                        src={destinations[currentIndex].image}
                        alt={destinations[currentIndex].name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                        <h3 className="mb-2 text-xl font-bold text-white sm:text-xl md:text-2xl">
                          {destinations[currentIndex].name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
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
              <Card 
                className="group overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2 cursor-pointer" 
                data-testid={`card-destination-${index}`}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-md">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-destination-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl md:text-2xl" data-testid={`text-destination-name-${index}`}>
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
