import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Star, Award, Users, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every project." },
  { icon: Target, title: "Precision", desc: "Every installation is measured, planned, and perfected." },
  { icon: Shield, title: "Trust", desc: "Fully insured with transparent pricing." },
  { icon: Star, title: "Excellence", desc: "We don't cut corners — ever." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mt-4">Our Story</h1>
        </div>
      </section>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Locally Operated. Professionally Delivered.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">We are a locally operated exterior services business specializing in Permanent LED Lighting and professional power washing. We take pride in helping homeowners and businesses improve the look, value, and cleanliness of their properties year-round.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">From the first phone call to the final walkthrough, our team delivers an exceptional experience. We treat every property like our own.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ icon: Users, label: "Locally Operated" }, { icon: Star, label: "5-Star Rated" }, { icon: Shield, label: "Fully Insured" }, { icon: Award, label: "Expert Installers" }].map((p) => (
                <div key={p.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center"><p.icon size={20} className="text-cyan" /></div>
                  <span className="text-sm font-semibold text-foreground">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={aboutImg} alt="Our team" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
        </div>
      </section>
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8 rounded-2xl shadow-md border border-border/50 hover:border-cyan/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4"><v.icon size={24} className="text-cyan" /></div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-block mt-12">
            <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold px-8 py-6 rounded-full text-lg">Get a Free Quote</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
