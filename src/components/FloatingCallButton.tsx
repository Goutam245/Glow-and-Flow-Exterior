import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+1603242XXXX"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cyan flex items-center justify-center shadow-lg hover:bg-cyan-glow transition-all duration-300 group"
      style={{ boxShadow: "0 0 24px hsl(192 100% 50% / 0.4)" }}
      aria-label="Call us"
    >
      <Phone size={24} className="text-primary-foreground group-hover:scale-110 transition-transform" />
    </a>
  );
}
