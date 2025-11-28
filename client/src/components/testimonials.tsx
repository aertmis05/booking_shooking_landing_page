import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Booking Shooking made our honeymoon in Bali absolutely magical. Every detail was perfect, from the luxurious accommodations to the personalized excursions. We couldn't have asked for a better experience!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The European tour was beyond our expectations. The travel designers listened to our preferences and created an itinerary that perfectly balanced culture, adventure, and relaxation. Highly recommended!",
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Outstanding service from start to finish! The team's attention to detail and 24/7 support made our family trip to Switzerland stress-free and memorable. We're already planning our next adventure with them.",
    initials: "PS",
  },
  {
    name: "David Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I've traveled with many agencies, but Booking Shooking stands out. Their expertise, competitive pricing, and genuine care for creating the perfect trip are unmatched. Five stars all the way!",
    initials: "DM",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What Our Travelers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real experiences from real travelers who trusted us with their dream journeys
          </p>
        </motion.div>

        <Carousel className="mx-auto w-full max-w-5xl" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-2"
                >
                  <Card className="hover-elevate active-elevate-2" data-testid={`card-testimonial-${index}`}>
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground" data-testid={`text-testimonial-${index}`}>
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground" data-testid={`text-name-${index}`}>
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-location-${index}`}>
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" data-testid="button-testimonial-prev" />
          <CarouselNext className="hidden md:flex" data-testid="button-testimonial-next" />
        </Carousel>
      </div>
    </section>
  );
}
