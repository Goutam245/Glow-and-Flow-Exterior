import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { img: hero1, headline: "Permanent LED Lighting That Looks Amazing Year-Round", sub: "Transform your home or business with stunning permanent lighting and professional power washing." },
  { img: hero2, headline: "Millions of Colors. One Stunning Home.", sub: "Custom LED lighting with app-controlled scenes, holiday presets, and year-round beauty." },
  { img: hero3, headline: "Professional Power Washing Services", sub: "Restore the beauty of your property with our expert exterior cleaning solutions." },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={s.img} alt={s.headline} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        </div>
      ))}

      {/* Glow particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary-foreground leading-[1.05] mb-6 glow-text tracking-tight" key={current}>
              {slides[current].headline}
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-10 max-w-2xl">{slides[current].sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold px-8 py-6 text-lg rounded-full glow-cyan transition-all">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlie" className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:border-cyan hover:text-cyan font-bold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass text-secondary-foreground hover:text-cyan transition-colors" aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass text-secondary-foreground hover:text-cyan transition-colors" aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-cyan w-8" : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
