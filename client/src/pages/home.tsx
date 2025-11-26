import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { PopularDestinations } from "@/components/popular-destinations";
import { TravelPackages } from "@/components/travel-packages";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { ConsultationForm } from "@/components/consultation-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PopularDestinations />
      <TravelPackages />
      <WhyChooseUs />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
