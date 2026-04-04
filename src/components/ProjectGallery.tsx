import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import serviceLed from "@/assets/service-led.jpg";
import hero3 from "@/assets/hero-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const images = [
  { src: hero2, alt: "Colorful LED lighting on luxury home" },
  { src: project1, alt: "Luxury brick home exterior" },
  { src: gallery2, alt: "White permanent LED lighting on home exterior" },
  { src: project2, alt: "Multi-story coastal home" },
  { src: gallery1, alt: "Holiday LED lighting display" },
  { src: project3, alt: "Stone archway luxury property" },
  { src: hero1, alt: "LED storefront lighting" },
  { src: project4, alt: "Estate home with copper turrets" },
  { src: serviceLed, alt: "Modern home with exterior lighting" },
];

export default function ProjectGallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">Project Gallery</h2>
        </div>
        <div className={`columns-1 md:columns-2 lg:columns-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {images.map((img, i) => (
            <div key={i} className="relative group mb-6 break-inside-avoid overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-secondary-foreground font-semibold text-sm bg-cyan/20 backdrop-blur-sm px-4 py-2 rounded-full">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
