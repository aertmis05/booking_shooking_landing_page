import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PopularDestinations } from "@/components/popular-destinations";
import { TripTypes } from "@/components/trip-types";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { AboutUs } from "@/components/about-us";
import { ContactSupport } from "@/components/contact-support";
import { Footer } from "@/components/footer";
import { FloatingActionGroup } from "@/components/floating-action-group";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      {/* <HowItWorks /> */}
      <PopularDestinations />
      <TripTypes />
      {/* <TravelPackages /> */}

      <AboutUs />
      <Testimonials />
      {/* <BlogSection /> */}
      <ContactSupport />
      {/* <ConsultationForm /> */}
      <Footer />
      <FloatingActionGroup />
    </div>
  );
}
