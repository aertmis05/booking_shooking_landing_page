import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "The Patel Family", image: "/testimonial/The_Patel_family.png" },
  { name: "Dr. Chaitanya Soni", image: "/testimonial/Dr_Chaitanya%20soni.png" },
  { name: "Baburaj Family", image: "/testimonial/baburajfamily.png" },
  { name: "John and Priya", image: "/testimonial/John_and_Priya.png" },
  { name: "Manan and Kirna", image: "/testimonial/Manan_and_kirna.png" },
  { name: "Parvin Patel", image: "/testimonial/Parvin_patel.png" },
  { name: "The Sharma Family", image: "/testimonial/The_Patel_family.png" },
  { name: "Sarah and Mike", image: "/testimonial/Dr_Chaitanya%20soni.png" },
  { name: "The Wilsons", image: "/testimonial/baburajfamily.png" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleItems = () => {
    const items = [];
    const total = testimonials.length;
    
    // Responsive: Show fewer items on smaller screens
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) {
      // Mobile: Show 3 items (left, center, right)
      const index1 = (currentIndex - 1 + total) % total;
      const index2 = currentIndex;
      const index3 = (currentIndex + 1) % total;
      
      items.push({
        testimonial: testimonials[index1],
        position: 'left',
        index: index1
      });
      
      items.push({
        testimonial: testimonials[index2],
        position: 'center',
        index: index2
      });
      
      items.push({
        testimonial: testimonials[index3],
        position: 'right',
        index: index3
      });
    } else if (isTablet) {
      // Tablet: Show 4 items (left, center-left, center-right, right)
      const index1 = (currentIndex - 1 + total) % total;
      const index2 = currentIndex;
      const index3 = (currentIndex + 1) % total;
      const index4 = (currentIndex + 2) % total;
      
      items.push({
        testimonial: testimonials[index1],
        position: 'left',
        index: index1
      });
      
      items.push({
        testimonial: testimonials[index2],
        position: 'center-left',
        index: index2
      });
      
      items.push({
        testimonial: testimonials[index3],
        position: 'center-right',
        index: index3
      });
      
      items.push({
        testimonial: testimonials[index4],
        position: 'right',
        index: index4
      });
    } else {
      // Desktop: Show 5 items (far-left, left, center, right, far-right)
      const index1 = (currentIndex - 2 + total) % total;
      const index2 = (currentIndex - 1 + total) % total;
      const index3 = currentIndex;
      const index4 = (currentIndex + 1) % total;
      const index5 = (currentIndex + 2) % total;
      
      items.push({
        testimonial: testimonials[index1],
        position: 'far-left',
        index: index1
      });
      
      items.push({
        testimonial: testimonials[index2],
        position: 'left',
        index: index2
      });
      
      items.push({
        testimonial: testimonials[index3],
        position: 'center',
        index: index3
      });
      
      items.push({
        testimonial: testimonials[index4],
        position: 'right',
        index: index4
      });
      
      items.push({
        testimonial: testimonials[index5],
        position: 'far-right',
        index: index5
      });
    }
    
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative bg-white py-12 md:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Travel Memories</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Real moments from our travelers' journeys
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 z-30 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 z-30 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Carousel Items */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleItems.map((item) => {
                const isCenter = item.position === 'center';
                const isLeft = item.position === 'left';
                const isRight = item.position === 'right';
                const isFarLeft = item.position === 'far-left';
                const isFarRight = item.position === 'far-right';
                const isCenterLeft = item.position === 'center-left';
                const isCenterRight = item.position === 'center-right';
                
                // Responsive positioning and sizing
                const getResponsiveValues = () => {
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
                  
                  if (isMobile) {
                    // Mobile values
                    return {
                      width: isCenter ? '280px' : '180px',
                      height: isCenter ? '340px' : '220px',
                      x: isLeft ? -120 : isRight ? 120 : 0,
                      initialX: isLeft ? -180 : isRight ? 180 : 0,
                      opacity: isCenter ? 1 : 0.7,
                      scale: isCenter ? 1 : 0.8,
                      zIndex: isCenter ? 20 : 10
                    };
                  } else if (isTablet) {
                    // Tablet values
                    return {
                      width: isCenterLeft || isCenterRight ? '320px' : '240px',
                      height: isCenterLeft || isCenterRight ? '380px' : '280px',
                      x: isLeft ? -240 : isCenterLeft ? -80 : isCenterRight ? 80 : isRight ? 240 : 0,
                      initialX: isLeft ? -320 : isCenterLeft ? -120 : isCenterRight ? 120 : isRight ? 320 : 0,
                      opacity: isCenterLeft || isCenterRight ? 1 : 0.8,
                      scale: isCenterLeft || isCenterRight ? 1 : 0.8,
                      zIndex: isCenterLeft || isCenterRight ? 20 : 15
                    };
                  } else {
                    // Desktop values
                    return {
                      width: isCenter ? '480px' : isLeft || isRight ? '280px' : '220px',
                      height: isCenter ? '580px' : isLeft || isRight ? '340px' : '260px',
                      x: isFarLeft ? -420 : isLeft ? -210 : isRight ? 210 : isFarRight ? 420 : 0,
                      initialX: isFarLeft ? -500 : isLeft ? -300 : isRight ? 300 : isFarRight ? 500 : 0,
                      opacity: isFarLeft || isFarRight ? 0.6 : 1,
                      scale: isCenter ? 1 : isFarLeft || isFarRight ? 0.7 : 0.8,
                      zIndex: isCenter ? 20 : isLeft || isRight ? 15 : 10
                    };
                  }
                };
                
                const responsive = getResponsiveValues();
                
                return (
                  <motion.div
                    key={`${item.index}-${item.position}`}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.7,
                      x: responsive.initialX
                    }}
                    animate={{
                      opacity: responsive.opacity,
                      scale: responsive.scale,
                      x: responsive.x,
                      zIndex: responsive.zIndex,
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.7,
                      x: responsive.initialX,
                      transition: { duration: 0.3 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing curve
                    }}
                    className="absolute"
                    style={{
                      width: responsive.width,
                      height: responsive.height,
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                      <img
                        src={item.testimonial.image}
                        alt={item.testimonial.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay with testimonial info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                        <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                          {item.testimonial.name}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm">
                          Amazing travel experience!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
