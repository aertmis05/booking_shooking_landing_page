import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { PopularDestinations } from "@/components/popular-destinations";
import { TripTypes } from "@/components/trip-types";
import { TravelPackages } from "@/components/travel-packages";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { AboutUs } from "@/components/about-us";
import { BlogSection } from "@/components/blog-section";
import { ContactSupport } from "@/components/contact-support";
import { ConsultationForm } from "@/components/consultation-form";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { InstagramButton } from "@/components/instagram-button";
import { CallButton } from "@/components/call-button";

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
      {/* <BlogSection /> */}
      <Testimonials />
      <ContactSupport />
      {/* <ConsultationForm /> */}
      <Footer/>
      <WhatsAppButton />
      <InstagramButton />
      <CallButton />
    </div>
  );
}
