import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-moss text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-sage" />
              <span className="font-serif text-2xl">Oryanne</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Massages authentiques et produits naturels pour votre bien-être au
              quotidien.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Massages
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Produits
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>15 rue de la Paix</li>
              <li>35000 Clayes, France</li>
              <li className="pt-2">
                <a
                  href="tel:+33612345678"
                  className="hover:text-white transition-colors"
                >
                  06 12 34 56 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@oryanne-massage.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@oryanne-massage.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Oryanne Massage. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>à Rennes</span>
          </div>
          <div className="flex gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
