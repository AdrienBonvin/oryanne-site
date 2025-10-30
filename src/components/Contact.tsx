import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-moss mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Je serai ravie de vous accueillir dans mon cabinet pour un moment
            rien qu'à vous
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-moss mb-2">Adresse</h3>
                <p className="text-stone">
                  15 rue de la Paix
                  <br />
                  Clayes, France
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-moss mb-2">Téléphone</h3>
                <a
                  href="tel:+33612345678"
                  className="text-stone hover:text-moss transition-colors"
                >
                  06 12 34 56 78
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-moss mb-2">Email</h3>
                <a
                  href="mailto:contact@oryanne-massage.fr"
                  className="text-stone hover:text-moss transition-colors"
                >
                  contact@oryanne-massage.fr
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-moss mb-2">Horaires</h3>
                <div className="text-stone space-y-1">
                  <p>Lundi - Vendredi : 9h - 19h</p>
                  <p>Samedi : 10h - 16h</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <div className="bg-linen rounded-sm p-6">
              <h3 className="font-serif text-xl text-moss mb-3">Réservation</h3>
              <p className="text-stone mb-4">
                Pour réserver votre séance, contactez-moi par téléphone ou par
                email. Je vous répondrai dans les plus brefs délais.
              </p>
              <p className="text-stone text-sm">
                Politique d'annulation : merci de prévenir 24h à l'avance en cas
                d'empêchement.
              </p>
            </div>
          </div>

          <div className="bg-linen rounded-sm p-8">
            <h3 className="font-serif text-2xl text-moss mb-6">
              Formulaire de contact
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-stone mb-2 font-medium"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-sm border border-sand focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-stone mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-sm border border-sand focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-stone mb-2 font-medium"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-sm border border-sand focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className=" overflow-hidden">
                <label
                  htmlFor="service"
                  className="block text-stone mb-2 font-medium w-full"
                >
                  Type de massage
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-sm border border-sand focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all"
                >
                  <div className="w-8 overflow-hidden">
                    <option>Massage Suédois</option>
                    <option>Massage Deep Tissue</option>
                    <option>Soin des mains</option>
                    <option>Massage aux Pierres Chaudes</option>
                    <option>Massage Prénatal</option>
                    <option>Massage Shiatsu</option>
                  </div>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-stone mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-sand focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all resize-none"
                  placeholder="Parlez-moi de vos besoins, disponibilités..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sage hover:bg-moss text-white px-8 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
