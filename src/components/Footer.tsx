import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-deep text-text-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-3xl font-bold mb-6">CHRONOS</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Swiss luxury timepieces crafted with precision and passion. 
              Where heritage meets innovation in every meticulously designed watch.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#collection" className="text-white/80 hover:text-gold transition-colors">Collection</a></li>
              <li><a href="#heritage" className="text-white/80 hover:text-gold transition-colors">Heritage</a></li>
              <li><a href="#journal" className="text-white/80 hover:text-gold transition-colors">Journal</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Private Consultation</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Watch Servicing</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Bespoke Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Authentication</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive exclusive updates and early access to new collections.
            </p>
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="gold" className="shrink-0">
                Subscribe
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-white/80">contact@chronos.swiss</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-white/80">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 CHRONOS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;