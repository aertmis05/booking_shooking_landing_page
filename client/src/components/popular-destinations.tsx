import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import parisImage from "@assets/generated_images/paris_eiffel_tower_sunset.png";
import japanImage from "@assets/generated_images/japan_temple_cherry_blossoms.png";
import swissImage from "@assets/generated_images/swiss_alps_mountain_scenery.png";
import dubaiImage from "@assets/generated_images/dubai_skyline_night_view.png";
import baliImage from "@assets/generated_images/bali_rice_terraces_sunrise.png";
import santoriniImage from "@assets/generated_images/santorini_greece_sunset_view.png";

const destinations = [
  {
    name: "Paris, France",
    image: parisImage,
    rating: 4.9,
    reviews: 2847,
    description: "The city of love and lights awaits with iconic landmarks and charming boulevards",
  },
  {
    name: "Kyoto, Japan",
    image: japanImage,
    rating: 4.8,
    reviews: 1923,
    description: "Experience ancient temples, traditional culture, and stunning cherry blossoms",
  },
  {
    name: "Swiss Alps, Switzerland",
    image: swissImage,
    rating: 4.9,
    reviews: 1654,
    description: "Majestic mountains, pristine lakes, and charming alpine villages",
  },
  {
    name: "Dubai, UAE",
    image: dubaiImage,
    rating: 4.7,
    reviews: 2134,
    description: "Modern luxury meets Arabian heritage in this futuristic desert oasis",
  },
  {
    name: "Bali, Indonesia",
    image: baliImage,
    rating: 4.8,
    reviews: 3241,
    description: "Tropical paradise with lush rice terraces, pristine beaches, and spiritual temples",
  },
  {
    name: "Santorini, Greece",
    image: santoriniImage,
    rating: 4.9,
    reviews: 2567,
    description: "Stunning sunsets, white-washed buildings, and crystal blue waters",
  },
];

export function PopularDestinations() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Popular Destinations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover the world's most breathtaking locations curated by our travel experts
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2" data-testid={`card-destination-${index}`}>
                <div className="relative h-64 overflow-hidden rounded-t-md">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-destination-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="mb-2 text-xl font-bold text-white md:text-2xl" data-testid={`text-destination-name-${index}`}>
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(destination.rating)
                              ? "fill-accent text-accent"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-white" data-testid={`text-rating-${index}`}>
                        {destination.rating} ({destination.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground" data-testid={`text-description-${index}`}>
                    {destination.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
