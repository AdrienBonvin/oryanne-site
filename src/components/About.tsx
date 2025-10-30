import { Heart, Award, Leaf } from "lucide-react";
import oryanne from "../assets/Oryanne.png";
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={oryanne}
              alt="Oryanne"
              className="rounded-sm shadow-xl w-full h-[600px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-moss mb-6">
              Bonjour, je suis Oryanne
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-6">
              Passionnée par le bien-être et les approches naturelles,
              j'accompagne mes clients dans leur quête de détente et d'équilibre
              depuis plus de 8 ans.
            </p>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Mon approche est simple : offrir un moment de pause authentique,
              dans un cadre chaleureux, avec des techniques de massage éprouvées
              et des produits que je sélectionne avec soin.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-sage" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-moss mb-2">
                    Authenticité
                  </h3>
                  <p className="text-stone">
                    Chaque séance est unique, adaptée à vos besoins du moment
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-sage" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-moss mb-2">
                    Savoir-faire
                  </h3>
                  <p className="text-stone">
                    Certifiée en massage suédois, shiatsu et réflexologie
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Leaf className="w-8 h-8 text-sage" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-moss mb-2">Naturel</h3>
                  <p className="text-stone">
                    Produits bio, huiles végétales et essentielles de qualité
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
