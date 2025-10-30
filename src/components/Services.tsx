import { Clock, Sparkles } from "lucide-react";

const services = [
  {
    name: "Massage Suédois",
    duration: "60 min",
    price: "75€",
    description:
      "Massage relaxant qui favorise la circulation et libère les tensions musculaires.",
    image:
      "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Massage Deep Tissue",
    duration: "75 min",
    price: "90€",
    description:
      "Massage en profondeur pour soulager les douleurs chroniques et les nœuds musculaires.",
    image:
      "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Réflexologie Plantaire",
    duration: "45 min",
    price: "60€",
    description:
      "Stimulation des points réflexes des pieds pour un bien-être global du corps.",
    image:
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Massage Prénatal",
    duration: "90 min",
    price: "110€",
    description:
      "Détente profonde grâce à la chaleur des pierres volcaniques et aux huiles essentielles.",
    image:
      "https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bien être des mains",
    duration: "60 min",
    price: "80€",
    description:
      "Massage doux et adapté pour soulager les tensions liées à la grossesse.",
    image:
      "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Massage Shiatsu",
    duration: "60 min",
    price: "75€",
    description:
      "Technique japonaise de pressions pour rétablir la circulation énergétique.",
    image:
      "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-moss mb-4">
            Mes massages
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Chaque massage est une invitation à ralentir, respirer et vous
            reconnecter à vous-même
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-moss mb-3">
                  {service.name}
                </h3>
                <p className="text-stone mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sand">
                  <div className="flex items-center gap-2 text-stone">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sage" />
                    <span className="font-serif text-xl text-moss">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-sage hover:bg-moss text-white px-10 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Réserver une séance
          </a>
        </div>
      </div>
    </section>
  );
}
