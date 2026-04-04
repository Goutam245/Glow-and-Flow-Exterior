import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import goveeLogo from "@/assets/govee-logo.png";
import havenLogo from "@/assets/haven-logo.jpg";

export default function TrustedBrands() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-card" ref={ref}>
      <div className={`container mx-auto px-4 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Trusted Installer</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-4">We Install Trusted Brands</h2>
        <p className="text-muted-foreground mb-12">Professionally installed. Clean finish. Long-lasting results.</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <div className="px-8 py-4 rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
            <img src={havenLogo} alt="Haven Lighting" className="h-12 md:h-16 w-auto object-contain" />
          </div>
          <div className="px-8 py-4 rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
            <img src={goveeLogo} alt="Govee" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
