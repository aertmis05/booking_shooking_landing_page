import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const features = [
  {
    title: "Tourist VISA Application",
    image: "/services/Visa application .jpg",
    description: "Professional visa application assistance with expert guidance and documentation support.",
  },
  {
    title: "Transit Visa",
    image: "/services/Transit visa.jpg",
    description: "Hassle-free transit visa arrangements for smooth connections during your journey.",
  },
  {
    title: "Tour Packages",
    image: "/services/Tour packages.jpg",
    description: "Curated tour packages with exclusive experiences and guided sightseeing.",
  },
  {
    title: "Flight Booking",
    image: "/services/Flight booking.jpg",
    description: "Best flight deals with convenient schedules and comfortable travel options.",
  },
   {
    title: "Hotel Booking",
    image: "/services/Flight booking.jpg",
    description: "Best rooms deals with convenient schedules and comfortable travel options.",
  },
];

export function WhyChooseUs() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Services We provide 
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted partner in creating extraordinary travel experiences
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2">
                      <div className="relative h-[400px] overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
