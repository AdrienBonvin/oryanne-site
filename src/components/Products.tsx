import { ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Huile de Massage Relaxante",
    price: "28€",
    description:
      "Mélange d'huiles végétales bio et huiles essentielles de lavande et camomille.",
    image:
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "100ml",
  },
  {
    name: "Bougie Massage Apaisante",
    price: "32€",
    description:
      "Cire naturelle qui se transforme en huile tiède pour un massage cocooning.",
    image:
      "https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "150g",
  },
  {
    name: "Baume Musculaire",
    price: "24€",
    description:
      "À l'arnica et menthe poivrée, idéal après l'effort ou en cas de tensions.",
    image:
      "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "50ml",
  },
  {
    name: "Huile Corps Nourrissante",
    price: "35€",
    description:
      "Formule riche en huile de jojoba et vitamine E pour une peau douce et hydratée.",
    image:
      "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "100ml",
  },
  {
    name: "Sel de Bain Détox",
    price: "18€",
    description:
      "Sels de la Mer Morte enrichis aux huiles essentielles de cyprès et genévrier.",
    image:
      "https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "500g",
  },
  {
    name: "Coffret Découverte",
    price: "65€",
    description:
      "Sélection de 3 produits pour découvrir mes essentiels bien-être.",
    image:
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "Coffret",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-moss mb-4">
            Mes produits naturels
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Sélection artisanale de produits que j'utilise lors de mes massages
            et que je recommande pour vos soins à domicile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-linen rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-moss">
                    {product.name}
                  </h3>
                  <span className="text-sm text-stone bg-white px-3 py-1 rounded-full">
                    {product.volume}
                  </span>
                </div>
                <p className="text-stone mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sand">
                  <span className="font-serif text-2xl text-moss">
                    {product.price}
                  </span>
                  <button className="bg-sage hover:bg-moss text-white px-4 py-2 rounded-sm transition-all duration-300 flex items-center gap-2 text-sm">
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sand/30 rounded-sm p-8 text-center">
          <h3 className="font-serif text-2xl text-moss mb-4">
            Tous mes produits sont naturels et bio
          </h3>
          <p className="text-stone max-w-2xl mx-auto">
            Je privilégie les circuits courts et les artisans locaux pour vous
            proposer des produits de qualité, respectueux de votre peau et de
            l'environnement.
          </p>
        </div>
      </div>
    </section>
  );
}
