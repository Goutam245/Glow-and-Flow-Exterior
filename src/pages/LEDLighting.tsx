import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Lightbulb, Smartphone, Palette, Sun, Snowflake } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import serviceLed from "@/assets/service-led.jpg";
import hero2 from "@/assets/hero-2.jpg";

const features = [
  { icon: Palette, title: "Millions of Colors", desc: "Choose from an unlimited palette to match any mood, season, or event." },
  { icon: Smartphone, title: "App Controlled", desc: "Adjust colors, brightness, schedules, and scenes from your phone." },
  { icon: Sun, title: "Year-Round Beauty", desc: "One installation that works for holidays, parties, everyday elegance." },
  { icon: Snowflake, title: "All-Weather Durable", desc: "Engineered to withstand rain, snow, heat, and cold." },
];

export default function LEDLighting() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img src={hero2} alt="LED lighting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Our Specialty</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mt-4 glow-text">Permanent LED Lighting</h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">Upgrade your property with permanent LED lighting designed for convenience, style, and year-round use.</p>
          <Link to="/contact" className="inline-block mt-8"><Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold px-8 py-6 rounded-full text-lg glow-cyan">Get a Free Quote</Button></Link>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <img src={serviceLed} alt="LED installation" className="rounded-2xl shadow-2xl" loading="lazy" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">One Installation. Endless Possibilities.</h2>
            <p className="text-muted-foreground text-lg mb-8">Complete control with millions of color options and scheduling right from your device. No more climbing ladders to hang lights — set it and forget it.</p>
            <ul className="space-y-3">
              {["Millions of color options", "Custom scenes and holiday presets", "App-controlled scheduling", "Discreet, durable installation", "Built for all seasons", "Energy efficient LED technology"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground"><Check size={18} className="text-cyan flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-16">Why Choose Permanent LEDs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-8 rounded-2xl shadow-md border border-border/50 hover:border-cyan/30 transition-all text-center">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4"><f.icon size={24} className="text-cyan" /></div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />
      <Footer />
    </div>
  );
}
