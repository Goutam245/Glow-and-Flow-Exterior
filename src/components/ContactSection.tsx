import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Serving the local area" },
  { icon: Phone, label: "Phone", value: "(603) 242-XXXX" },
  { icon: Mail, label: "Email", value: "info@glowandflowexterior.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 8AM – 6PM" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-light" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-bold tracking-[0.2em] text-cyan uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">Request a Free Quote</h2>
        </div>
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 space-y-5">
            <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="py-6 rounded-xl" />
            <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="py-6 rounded-xl" />
            <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="py-6 rounded-xl" />
            <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
              <SelectTrigger className="py-6 rounded-xl"><SelectValue placeholder="Select a Service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="led">Permanent LED Lighting</SelectItem>
                <SelectItem value="wash">Professional Power Washing</SelectItem>
                <SelectItem value="both">Both Services</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[120px] rounded-xl" />
            <Button type="submit" className="w-full bg-cyan hover:bg-cyan-glow text-primary-foreground font-bold py-6 rounded-full text-lg glow-cyan">
              Send Quote Request
            </Button>
          </form>

          <div className="space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-md border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <c.icon size={22} className="text-cyan" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">{c.label}</p>
                  <p className="text-foreground font-medium">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden h-64 bg-muted border border-border/50">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <MapPin size={32} className="mr-2" /> Google Map Embed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
