import { motion } from "framer-motion";
import { FileText, Sparkles, Plane } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Share Your Travel Preferences",
    description: "Tell us about your dream destination, budget, and travel style through our simple consultation form.",
  },
  {
    icon: Sparkles,
    title: "Get a Free Custom Itinerary",
    description: "Our expert travel designers craft a personalized itinerary tailored to your unique preferences.",
  },
  {
    icon: Plane,
    title: "Book Your Perfect Trip",
    description: "Review your custom plan, make adjustments if needed, and book your unforgettable journey with confidence.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-16 md:py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Three simple steps to your personalized adventure
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-md bg-primary text-primary-foreground"
              >
                <step.icon className="h-10 w-10" />
              </motion.div>
              
              <div className="absolute -top-2 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {index + 1}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
