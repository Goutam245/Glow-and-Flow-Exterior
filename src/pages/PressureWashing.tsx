import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Droplets, Home, Building, SprayCanIcon } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import serviceWash from "@/assets/service-wash.jpg";
import hero3 from "@/assets/hero-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const services = [
  { icon: Home, title: "Residential", desc: "Siding, driveways, patios, decks, fences, and more." },
  { icon: Building, title: "Commercial", desc: "Storefronts, parking lots, walkways, and building exteriors." },
  { icon: Droplets, title: "Soft Washing", desc: "Gentle cleaning for delicate surfaces like roofs and stucco." },
  { icon: SprayCanIcon, title: "Surface Prep", desc: "Prep surfaces for painting, staining, or sealing." },
];

export default function PressureWashing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img src={hero3} alt="Power washing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Exterior Cleaning</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mt-4">Professional Power Washing</h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">Bring your property back to life with our professional exterior cleaning services.</p>
          <Link to="/contact" className="inline-block mt-8"><Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold px-8 py-6 rounded-full text-lg glow-cyan">Get a Free Quote</Button></Link>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Restore Your Property's Beauty</h2>
            <p className="text-muted-foreground text-lg mb-8">We safely and effectively remove dirt, grime, mold, and buildup from all exterior surfaces. Our team uses the right pressure and technique for every surface.</p>
            <ul className="space-y-3">
              {["Safe cleaning methods for all surfaces", "Removes mold, algae, stains, and buildup", "Driveways, siding, patios, decks", "Residential and commercial services", "Restore and protect your investment", "Eco-friendly cleaning solutions"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground"><Check size={18} className="text-cyan flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
          <img src={serviceWash} alt="Power washing results" className="rounded-2xl shadow-2xl" loading="lazy" />
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Results</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4">Our Transformations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: project1, label: "Brick Home Exterior Cleaning" },
              { img: project2, label: "Multi-Story Property Restoration" },
            ].map((item) => (
              <div key={item.label} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <img src={item.img} alt={item.label} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-cyan/20 backdrop-blur-sm text-secondary-foreground text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">Completed Project</span>
                  <h3 className="text-xl font-bold text-secondary-foreground">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-16">Our Washing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl border border-border/50 hover:border-cyan/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4"><s.icon size={24} className="text-cyan" /></div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
