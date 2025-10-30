import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-stone/20"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
          Le massage
          <br />
          langage du bien être
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow">
          Massages authentiques & produits naturels
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-sage hover:bg-moss text-white px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Réserver un massage
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="bg-white/90 hover:bg-white text-stone px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir mes produits
          </a>
        </div>
      </div>
    </section>
  );
}
