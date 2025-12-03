import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground mt-12" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Neo</h3>
                <p className="text-xs text-primary-foreground/70">The Japanese Used Car Exporter</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Neo Trading Co., Ltd specializes in exporting high-quality Japanese used vehicles 
              to customers worldwide. With years of experience and a commitment to excellence, 
              we ensure every customer receives the best value and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Stock List</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">How to Buy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Tokyo, Japan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+81-3-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@neo-cars.jp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Neo Trading Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
