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
              Booking Shooking started with one realisation people don’t just want a trip they want a memory that feels like theirs. A moment that belongs to them.
What began as a passion for planning meaningful, stress-free holidays has grown into a boutique travel brand trusted by travellers who value honesty, comfort, and personalised experiences.
            </p>
            <p className="mb-4 text-muted-foreground">
              For us, travel isn’t about ticking off places. It’s about the way a sunrise feels in a new city, the joy of discovering hidden cafés, the peace of waking up in a beautiful room, and the thrill of exploring somewhere you’ve never been.
            </p>
            <p className="text-muted-foreground">
              From our first few trips to designing hundreds of experiences worldwide, one thing has remained the same, we treat every traveller like family, and every trip like a story we’re proud to help write.
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
                    To help people travel without stress.
We want you to enjoy the fun parts the excitement, the experiences, the memories while we take care of the research, the options, the bookings, and the tiny details in between solutions.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                  We want to be the travel partner people trust not just for prices or itineraries, but for comfort, clarity, and genuine care.
A company you feel safe messaging at any hour.
A team you rely on when things change last-minute.
A friend who always knows the right place to stay.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Our Values</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                     Honesty First
Clear guidance, transparent pricing, no drama.

                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                     Personal Touch
Every trip is crafted with care and attention.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />                     
Good Vibes Only
Smooth planning, zero stress, happy memories
                    </li>
                     <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />                     
Meaningful Moments
Experiences over checklists, always.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Why Choose Us */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
}
