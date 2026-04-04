import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSection from "@/components/ServicesSection";
import ProjectGallery from "@/components/ProjectGallery";
import TrustedBrands from "@/components/TrustedBrands";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <WhoWeAre />
      <ServicesSection />
      <ProjectGallery />
      <TrustedBrands />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
