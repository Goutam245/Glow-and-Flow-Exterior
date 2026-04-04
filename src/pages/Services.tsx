import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl" /></div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mt-4">Our Services</h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">From permanent LED lighting to professional power washing, we deliver premium exterior services.</p>
        </div>
      </section>
      <ServicesSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
