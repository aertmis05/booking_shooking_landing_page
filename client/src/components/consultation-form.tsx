import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { MapPin, Calendar, Phone, Mail, User, Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const popularDestinations = [
  "Maldives",
  "Paris, France",
  "Kyoto, Japan",
  "Swiss Alps, Switzerland",
  "Dubai, UAE",
  "Bali, Indonesia",
  "Santorini, Greece",
  "Iceland",
  "New Zealand",
  "Other",
];

export function ConsultationForm() {
  const { toast } = useToast();
  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDates: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertConsultation) =>
      apiRequest("POST", "/api/consultations", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
      toast({
        title: "Consultation Request Received!",
        description: "Our travel expert will contact you within 24 hours to discuss your dream journey with Booking Shooking.",
        duration: 5000,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const onSubmit = (data: InsertConsultation) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Book Your Free Consultation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Share your travel dreams with us and let our experts craft the perfect itinerary
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Tell Us About Your Dream Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" data-testid="icon-user" />
                              <div className="pl-10">
                                <Input
                                  placeholder="John Doe"
                                  data-testid="input-name"
                                  {...field}
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage data-testid="error-name" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" data-testid="icon-mail" />
                              <div className="pl-10">
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage data-testid="error-email" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" data-testid="icon-phone-input" />
                              <div className="pl-10">
                                <Input
                                  type="tel"
                                  placeholder="+1 (555) 000-0000"
                                  data-testid="input-phone"
                                  {...field}
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage data-testid="error-phone" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Destination</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-destination">
                                <SelectValue placeholder="Select a destination" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {popularDestinations.map((dest) => (
                                <SelectItem key={dest} value={dest} data-testid={`option-${dest.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}`}>
                                  {dest}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage data-testid="error-destination" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="travelDates"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Travel Dates</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" data-testid="icon-calendar-input" />
                              <div className="pl-10">
                                <Input
                                  placeholder="e.g., June 2025"
                                  data-testid="input-travel-dates"
                                  {...field}
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage data-testid="error-travel-dates" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={mutation.isPending}
                      data-testid="button-submit-consultation"
                    >
                      {mutation.isPending ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Submitting...
                        </>
                      ) : mutation.isSuccess ? (
                        <>
                          <Check className="mr-2 h-5 w-5" />
                          Request Sent!
                        </>
                      ) : (
                        "Get My Free Consultation"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground" data-testid="text-next-steps-heading">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold" data-testid="badge-step-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid="text-consultation-call">Consultation Call</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-consultation-desc">
                      Our travel expert will reach out within 24 hours to discuss your preferences
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold" data-testid="badge-step-2">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid="text-custom-itinerary">Custom Itinerary</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-itinerary-desc">
                      Receive a personalized travel plan tailored to your budget and style
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold" data-testid="badge-step-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid="text-book-travel">Book & Travel</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-book-desc">
                      Review, adjust if needed, and confirm your perfect journey with confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground" data-testid="text-privacy-notice">
                <span className="font-semibold text-foreground">Free consultation with no obligations.</span> We respect your privacy and will never share your information with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
