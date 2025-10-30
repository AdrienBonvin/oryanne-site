import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie",
    text: "Une parenthèse hors du temps. Oryanne a des mains en or et sait exactement où sont les tensions. Je ressors de chaque séance légère et apaisée.",
    rating: 5,
  },
  {
    name: "Marc",
    text: "Après des années de douleurs dorsales, j'ai enfin trouvé quelqu'un qui comprend mon corps. Les massages deep tissue d'Oryanne m'ont vraiment soulagé.",
    rating: 5,
  },
  {
    name: "Caroline",
    text: "J'ai découvert Oryanne pendant ma grossesse. Ses massages prénataux ont été un vrai soutien. Douce, à l'écoute, professionnelle. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Julien",
    text: "Un moment de pure détente dans un cadre chaleureux. Les produits qu'elle utilise sentent divinement bon et laissent la peau douce. Un vrai soin.",
    rating: 5,
  },
  {
    name: "Élise",
    text: "Je viens tous les mois depuis 2 ans. C'est mon rituel bien-être. Oryanne est une thérapeute exceptionnelle, attentive et bienveillante.",
    rating: 5,
  },
  {
    name: "Thomas",
    text: "J'étais sceptique au départ, mais le massage aux pierres chaudes m'a complètement conquis. Une expérience unique et profondément relaxante.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-moss mb-4">
            Ils ont vécu l'expérience
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Les mots de celles et ceux qui m'ont fait confiance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sage text-sage" />
                ))}
              </div>
              <p className="text-stone leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-serif text-moss font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
