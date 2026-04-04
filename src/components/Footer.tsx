import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "LED Lighting", to: "/led-lighting" },
  { label: "Pressure Washing", to: "/pressure-washing" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-secondary-foreground/70 pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <img src={logo} alt="Glow & Flow Exterior" className="h-16 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">Premium exterior services specializing in permanent LED lighting and professional power washing.</p>
          </div>
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-sm hover:text-cyan transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Serving the local area</li>
              <li>(603) 242-XXXX</li>
              <li>info@glowandflowexterior.com</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.23V9.4a8.16 8.16 0 0 0 3.85.96V7.04a4.85 4.85 0 0 1-1-.35z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm">
          © 2025 Glow and Flow Exterior. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
