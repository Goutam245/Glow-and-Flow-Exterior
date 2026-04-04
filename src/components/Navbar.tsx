import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "LED Lighting", to: "/led-lighting" },
  { label: "Pressure Washing", to: "/pressure-washing" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy/95 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Glow & Flow Exterior" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-cyan"
                  : "text-secondary-foreground/70 hover:text-secondary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="bg-cyan hover:bg-cyan-glow text-primary-foreground font-semibold px-6 rounded-full transition-all hover:shadow-lg" style={{ boxShadow: "0 0 20px hsl(192 100% 50% / 0.3)" }}>
              Get a Free Quote
            </Button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-secondary-foreground">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-cyan/10">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={`px-4 py-3 rounded-lg text-sm font-medium ${location.pathname === l.to ? "text-cyan bg-cyan/10" : "text-secondary-foreground/70"}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="w-full mt-2 bg-cyan hover:bg-cyan-glow text-primary-foreground font-semibold rounded-full">Get a Free Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
