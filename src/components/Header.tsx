import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "STOCK LIST", href: "#stock" },
  { label: "HOW TO BUY", href: "#how-to-buy" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 card-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-foreground">Neo</h1>
              <p className="text-xs text-muted-foreground">The Japanese Used Car Exporter</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
