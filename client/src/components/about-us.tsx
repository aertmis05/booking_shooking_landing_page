import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "50+",
    label: "Destinations Covered",
    description: "Across 6 continents",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Travelers",
    description: "Since 2010",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: Zap,
    value: "5,000+",
    label: "Custom Trips Planned",
    description: "Personalized journeys",
  },
];

export function AboutUs() {
  return (
    <section className="bg-background py-16 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            About Booking Shooking
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted partner in creating extraordinary travel experiences
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Our Story
            </h3>
            <p className="mb-4 text-muted-foreground">
              Founded with a simple vision: to transform how people experience the world. What started as a small team of passionate travel enthusiasts has grown into a leading travel agency, known for crafting personalized journeys that create lifelong memories.
            </p>
            <p className="mb-4 text-muted-foreground">
              We believe that travel is more than just visiting places—it's about connecting with cultures, discovering yourself, and creating stories worth sharing. Every trip we plan is a testament to our commitment to excellence and customer satisfaction.
            </p>
            <p className="text-muted-foreground">
              Today, with a team of 50+ travel experts and partnerships with premium hotels, airlines, and local guides worldwide, we continue to redefine luxury travel and personalized experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="relative rounded-lg border border-border/50 bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    To inspire wanderlust and create unforgettable travel experiences by combining expert knowledge, personalized service, and innovative solutions.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    To be the world's most trusted travel partner, known for transforming dreams into reality and exceeding expectations at every step.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Our Values</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      Integrity in every interaction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      Excellence in service delivery
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      Innovation in travel solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            By The Numbers
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate active-elevate-2">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary"
                    >
                      <stat.icon className="h-7 w-7" />
                    </motion.div>
                    <h4 className="mb-1 text-3xl font-bold text-foreground">
                      {stat.value}
                    </h4>
                    <p className="mb-2 font-semibold text-foreground">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-border/50 bg-muted/30 p-8 md:p-12"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            What Sets Us Apart
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Team",
                description: "50+ certified travel professionals with decades of combined experience",
              },
              {
                title: "Global Network",
                description: "Partnerships with 500+ hotels, airlines, and local guides worldwide",
              },
              {
                title: "Personalization",
                description: "Every itinerary is uniquely crafted to match your preferences",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance before, during, and after your trip",
              },
              {
                title: "Best Price Guarantee",
                description: "Competitive pricing with transparent costs and no hidden fees",
              },
              {
                title: "Sustainability",
                description: "Committed to responsible tourism and environmental conservation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="mb-2 font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
