import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl" /></div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mt-4">Get In Touch</h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">Ready to transform your property? Reach out for a free, no-obligation quote.</p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
