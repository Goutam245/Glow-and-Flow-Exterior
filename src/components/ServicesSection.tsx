import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Droplets, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceLed from "@/assets/service-led.jpg";
import serviceWash from "@/assets/service-wash.jpg";

const services = [
  {
    title: "Permanent LED Lighting",
    icon: Lightbulb,
    img: serviceLed,
    desc: "Upgrade your property with permanent LED lighting designed for convenience, style, and year-round use. Complete control with millions of color options and scheduling right from your device.",
    features: ["Millions of color options", "Custom scenes and holiday presets", "App-controlled scheduling", "Discreet, durable installation", "Built for all seasons"],
    link: "/led-lighting",
    cta: "Explore LED Lighting →",
  },
  {
    title: "Professional Power Washing",
    icon: Droplets,
    img: serviceWash,
    desc: "Bring your property back to life. We safely and effectively remove dirt, grime, mold, and buildup from all exterior surfaces.",
    features: ["Safe cleaning methods for all surfaces", "Removes mold, algae, stains, and buildup", "Driveways, siding, patios, decks", "Residential and commercial services", "Restore and protect your investment"],
    link: "/pressure-washing",
    cta: "Explore Power Washing →",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-surface-light" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">Our Services</h2>
        </div>
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-cyan/30" style={{ boxShadow: "0 10px 40px hsl(228 60% 8% / 0.08)" }}>
              <div className="relative overflow-hidden h-64">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 backdrop-blur-sm flex items-center justify-center">
                    <s.icon size={20} className="text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-foreground">{s.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <Check size={16} className="text-cyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={s.link}>
                  <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-semibold rounded-full px-6">{s.cta}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
