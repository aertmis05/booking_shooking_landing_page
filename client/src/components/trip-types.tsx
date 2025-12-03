import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Heart, Gem, Users2, DollarSign } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const tripTypes = [
  {
    name: "Honeymoon Trips",
    icon: Heart,
    image: "/trips/Honeymoon.jpg",
    description: "Celebrate your love with romantic getaways in breathtaking destinations",
    features: ["Romantic settings", "Private experiences", "Luxury accommodations", "Couple activities"],
  },
  {
    name: "Family Trips",
    icon: Users,
    image: "/trips/Family travel.jpg",
    description: "Create lasting memories with your loved ones through family-friendly adventures and activities",
    features: ["Kid-friendly activities", "Multi-generational fun", "Safe destinations", "Family accommodations"],
  },
  {
    name: "Solo Trips",
    icon: User,
    image: "/trips/Travel solo, find yourself 💚.jpg",
    description: "Embark on a journey of self-discovery and adventure at your own pace",
    features: ["Flexible itinerary", "Safe destinations", "Local experiences", "Personal growth"],
  },
  {
    name: "Group Trips",
    icon: Users2,
    image: "/trips/Group tour.jpg",
    description: "Share adventures with friends and meet like-minded travelers",
    features: ["Group discounts", "Shared experiences", "Team activities", "Social events"],
  },
  {
    name: "Friends Trips",
    icon: Users,
    image: "/trips/Friends travel.jpg",
    description: "Create unforgettable memories with your friends on exciting adventures",
    features: ["Group activities", "Shared experiences", "Fun destinations", "Budget-friendly options"],
  },
  {
    name: "Luxurious Trips",
    icon: Gem,
    image: "/trips/Luxury.jpg",
    description: "Indulge in premium experiences with exclusive services and world-class amenities",
    features: ["5-star accommodations", "Private transfers", "Fine dining", "VIP experiences"],
  },
  {
    name: "Budget Trips",
    icon: DollarSign,
    image: "/trips/Budget travel.jpg",
    description: "Explore amazing destinations without breaking the bank",
    features: ["Affordable accommodations", "Value deals", "Local experiences", "Cost-effective planning"],
  },
  {
    name: "Work/Business",
    icon: Gem,
    image: "/trips/Business travel.jpg",
    description: "Professional travel solutions for business meetings and corporate events",
    features: ["Business accommodations", "Meeting facilities", "Corporate services", "Efficient planning"],
  },
];

export function TripTypes() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section id="trip-types" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Types of Trips We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our carefully curated trip types designed to match your travel style and preferences
          </p>
        </motion.div>

        <Carousel
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {tripTypes.map((tripType, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2">
                    <div className="relative h-[450px] overflow-hidden">
                      <img
                        src={tripType.image}
                        alt={tripType.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                          <tripType.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {tripType.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12" />
          <CarouselNext className="hidden lg:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
