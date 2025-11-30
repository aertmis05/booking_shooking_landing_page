import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Calendar, Users } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  destination: z.string().min(2, "Destination must be at least 2 characters"),
  date: z.string().min(1, "Please select a date"),
  numberOfPeople: z.string().min(1, "Please select number of people"),
  tripType: z.string().min(1, "Please select a trip type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSupport() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      date: "",
      numberOfPeople: "",
      tripType: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    
    // Format the message with all form details
    const message = `*New Travel Inquiry - Booking Shooking*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Destination:* ${data.destination}
*Travel Date:* ${data.date}
*Number of People:* ${data.numberOfPeople}
*Trip Type:* ${data.tripType}

*Message:*
${data.message}

---
*Submitted via website contact form*`;

    // Create WhatsApp URL
    const phoneNumber = "919558243706"; // Your phone number with country code
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Optional: Show success message or reset form
    alert("Thank you for your inquiry! We've opened WhatsApp with your details. Please send the message to connect with us.");
    form.reset();
  };

  return (
    <section className="bg-background py-16 md:py-24" id="contact">
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
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Form & Map */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage data-testid="error-contact-name" />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                data-testid="input-contact-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage data-testid="error-contact-email" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+91 98765 43210"
                                data-testid="input-contact-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage data-testid="error-contact-phone" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Where do you want to go?"
                                data-testid="input-contact-destination"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage data-testid="error-contact-destination" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Travel Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                data-testid="input-contact-date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage data-testid="error-contact-date" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="numberOfPeople"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of People</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-people">
                                  <SelectValue placeholder="Select number of people" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 Person</SelectItem>
                                <SelectItem value="2">2 People</SelectItem>
                                <SelectItem value="3">3 People</SelectItem>
                                <SelectItem value="4">4 People</SelectItem>
                                <SelectItem value="5">5 People</SelectItem>
                                <SelectItem value="6">6 People</SelectItem>
                                <SelectItem value="7+">7+ People</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage data-testid="error-contact-people" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tripType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trip Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-trip-type">
                                  <SelectValue placeholder="Select trip type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="honeymoon">Honeymoon</SelectItem>
                                <SelectItem value="family">Family</SelectItem>
                                <SelectItem value="solo">Solo</SelectItem>
                                <SelectItem value="group">Group</SelectItem>
                                <SelectItem value="friends">Friends</SelectItem>
                                <SelectItem value="luxurious">Luxurious</SelectItem>
                                <SelectItem value="budget">Budget</SelectItem>
                                <SelectItem value="work">Work/Business</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage data-testid="error-contact-trip-type" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Tell us more about your inquiry..."
                              className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              data-testid="textarea-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage data-testid="error-contact-message" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid="button-submit-contact"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Support Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Quick Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    Response Time
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours during business hours.
                  </p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    Urgent Issues
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    For urgent matters, please call us directly at +91 98765
                    43210.
                  </p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    WhatsApp Chat
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Chat with us on WhatsApp for quick responses and instant
                    support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
