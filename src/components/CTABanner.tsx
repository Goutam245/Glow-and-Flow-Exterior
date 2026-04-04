import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import hero2 from "@/assets/hero-2.jpg";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <img src={hero2} alt="Property with LED lighting" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl" />
      </div>
      <div className={`relative z-10 container mx-auto px-4 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mb-6 glow-text">Ready to Upgrade Your Property?</h2>
        <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
          Whether you're looking for permanent LED lighting or power washing, we're ready to help transform your home or business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+1234567890">
            <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold px-8 py-6 text-lg rounded-full glow-cyan">
              <Phone size={20} className="mr-2" /> Call Now
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:border-cyan hover:text-cyan font-bold px-8 py-6 text-lg rounded-full">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
