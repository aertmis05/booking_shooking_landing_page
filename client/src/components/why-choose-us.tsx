import { motion } from "framer-motion";
import { Users, Sparkles, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Travel Designers",
    description: "Our certified travel experts have over 15 years of experience creating unforgettable journeys worldwide.",
  },
  {
    icon: Sparkles,
    title: "100% Tailored Trips",
    description: "Every itinerary is uniquely crafted to match your preferences, budget, and travel style perfectly.",
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We ensure competitive pricing and transparent costs with no hidden fees or surprise charges.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
];

export function WhyChooseUs() {
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
            Why Choose Krishna Harsh Travels
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted partner in creating extraordinary travel experiences
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-primary-foreground"
              >
                <feature.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold text-foreground" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-feature-desc-${index}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
