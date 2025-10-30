import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/Logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Massages", href: "#services" },
    { label: "Produits", href: "#products" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-white shadow-lg py-1"
          : "bg-linen/75 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Oryanne Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <div>
              <span
                className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                  isScrolled ? "text-moss" : "text-moss"
                }`}
              >
                Oryanne
              </span>
              <p className="text-xs text-stone font-light tracking-wide hidden sm:block">
                Massage & Bien-être
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-stone hover:text-moss transition-colors duration-300 font-medium text-sm uppercase tracking-wider group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="tel:+33679398015"
              className="flex items-center gap-2 bg-sage hover:bg-moss text-white px-6 py-3 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Réserver</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-stone hover:text-moss transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-1 border-t border-sand/30 pt-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-stone hover:text-moss hover:bg-sand/20 transition-all duration-300 font-medium py-3 px-4 rounded-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+33612345678"
              className="flex items-center justify-center gap-2 bg-sage hover:bg-moss text-white px-6 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg font-medium mt-4"
            >
              <Phone className="w-4 h-4" />
              Réserver maintenant
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
