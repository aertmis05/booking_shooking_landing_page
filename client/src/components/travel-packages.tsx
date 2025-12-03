import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Clock, Users, MapPin } from "lucide-react";
// Using existing public assets; Vite serves from /client/public

const packages = [
  {
    title: "Tropical Paradise Escape",
    image: "/palace/Bali 1.jpg",
    price: "$3,299",
    duration: "7 Days, 6 Nights",
    groupSize: "2-6 People",
    location: "Maldives",
    highlights: [
      "Luxury overwater villa accommodation",
      "Private island excursions",
      "Sunset cruise with dolphin watching",
      "Spa treatments and water sports",
    ],
  },
  {
    title: "Alpine Adventure Experience",
    image: "/palace/Himachal Pradesh.jpg",
    price: "$2,899",
    duration: "5 Days, 4 Nights",
    groupSize: "4-8 People",
    location: "Swiss Alps",
    highlights: [
      "Guided mountain trekking",
      "Traditional Swiss chalet stay",
      "Cable car rides and scenic viewpoints",
      "Local cuisine and cultural experiences",
    ],
  },
  {
    title: "European Cultural Journey",
    image: "/services/Customized trip planning.jpg",
    price: "$4,599",
    duration: "10 Days, 9 Nights",
    groupSize: "2-10 People",
    location: "Paris, Rome, Barcelona",
    highlights: [
      "Guided tours of iconic landmarks",
      "4-star hotel accommodations",
      "Traditional local dining experiences",
      "Museum and art gallery access",
    ],
  },
];

export function TravelPackages() {
  return (
    <section className="bg-background py-16 md:py-24" id="packages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Recommended Travel Packages
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Handcrafted experiences designed for unforgettable memories
          </p>
        </motion.div>

        <Carousel className="mx-auto w-full max-w-5xl" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {packages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-2"
                >
                  <Card className="overflow-visible hover-elevate active-elevate-2" data-testid={`card-package-${index}`}>
                    <div className="relative h-56 overflow-hidden rounded-t-md">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        data-testid={`img-package-${index}`}
                      />
                      <Badge className="absolute right-4 top-4 bg-accent text-accent-foreground" data-testid={`badge-location-${index}`}>
                        {pkg.location}
                      </Badge>
                    </div>
                    <CardHeader className="gap-2 space-y-0 pb-4">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl" data-testid={`text-package-title-${index}`}>
                        {pkg.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" data-testid={`icon-duration-${index}`} />
                          <span data-testid={`text-duration-${index}`}>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" data-testid={`icon-group-${index}`} />
                          <span data-testid={`text-group-size-${index}`}>{pkg.groupSize}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary" data-testid={`text-price-${index}`}>{pkg.price}</span>
                        <span className="text-sm text-muted-foreground" data-testid={`text-per-person-${index}`}>per person</span>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground" data-testid={`text-highlights-heading-${index}`}>Highlights</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {pkg.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2" data-testid={`text-highlight-${index}-${idx}`}>
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" data-testid={`button-customize-${index}`}>
                        Customize This Trip
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" data-testid="button-carousel-prev" />
          <CarouselNext className="hidden md:flex" data-testid="button-carousel-next" />
        </Carousel>
      </div>
    </section>
  );
}
