import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function EmotionalConnection() {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-gera-BdYELDgW.jpg"
          alt="Mãe e bebê em momento de carinho"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Heart size={16} className="text-[#FF8E63] fill-[#FF8E63]" />
            <span>Seu sonho é nossa missão</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Não é apenas sobre medicina.<br />
            <span className="text-[#FF8E63]">É sobre realizar o seu sonho de família.</span>
          </h2>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Sabemos que a jornada pode ser desafiadora, mas você não precisa caminhar sozinha. Nossa equipe está pronta para acolher sua história e transformar esperança em vida.
          </p>

          <Button
            onClick={handleTypebotRedirect}
            className="h-16 bg-[#FF8E63] hover:bg-[#E67A50] text-white rounded-full text-lg font-bold px-10 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            Quero começar minha jornada agora
          </Button>
        </div>
      </div>
    </section>
  );
}
