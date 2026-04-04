import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Star, Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImg from "@/assets/about-team.jpg";

const points = [
  { icon: Users, label: "Locally Operated" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Award, label: "Expert Installers" },
];

export default function WhoWeAre() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-6">Locally Operated. Professionally Delivered.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are a locally operated exterior services business specializing in Permanent LED Lighting and professional power washing. We take pride in helping homeowners and businesses improve the look, value, and cleanliness of their properties year-round.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {points.map((p) => (
                <div key={p.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <p.icon size={20} className="text-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{p.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-semibold px-8 rounded-full">Learn More About Us</Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 to-gold/10 rounded-3xl blur-2xl" />
            <img src={aboutImg} alt="Glow and Flow team" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
