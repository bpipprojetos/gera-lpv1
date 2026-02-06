import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Microscope, Users } from "lucide-react";

export default function Hero() {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-block bg-[#E6F6F4] text-[#008F7A] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-[#008F7A]/10">
              Referência Nacional desde 1993
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
              Realizando o sonho da <span className="text-[#4B73FF]">maternidade</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Medicina reprodutiva de excelência em São Paulo. Mais de 30 anos transformando sonhos em realidade com tecnologia de ponta e equipe especializada.
            </p>
            

            
            <div className="grid grid-cols-3 gap-4 md:gap-12 border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#4B73FF] mb-1">32+</div>
                <div className="text-sm text-gray-500 font-medium">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#4B73FF] mb-1">2</div>
                <div className="text-sm text-gray-500 font-medium">Unidades completas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#4B73FF] mb-1">92%</div>
                <div className="text-sm text-gray-500 font-medium">Taxa de fertilização</div>
              </div>
            </div>
          </div>

          {/* Right Image & Floating Card */}
          <div className="lg:w-1/2 relative z-0 w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B73FF]/20 to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028241656/bctFeggPXChajOZl.jpg" 
                alt="Tecnologia de Reprodução Assistida - ICSI" 
                className="w-full h-auto object-cover min-h-[500px] lg:min-h-[600px]"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 z-20 animate-in slide-in-from-bottom-5 delay-500 duration-1000">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium text-gray-800">Mais de 30 anos de experiência</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <span className="font-medium text-gray-800">Equipe com formação internacional</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Microscope size={20} />
                    </div>
                    <span className="font-medium text-gray-800">Tecnologia de ponta e laboratório próprio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
