import { User, Heart, Lightbulb } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Image Column (Left) */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <img
                src="/images/philosophy-real.jpg"
                alt="Dra. Lorena Urbanetz em consulta com paciente"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl md:text-2xl font-serif italic border-l-4 border-[#FF8E63] pl-4">
                  "Ciência sem empatia não cura"
                </p>
              </div>
            </div>
          </div>

          {/* Content Column (Right) */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-semibold tracking-wide mb-6">
              Nossa Filosofia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Mais do que respostas prontas, você precisa de um olhar personalizado
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Sabemos que cada história é única. Se você já passou por tentativas frustradas ou possui um diagnóstico complexo, o protocolo padrão pode não ser suficiente. Na Clínica GERA, unimos o rigor científico à sensibilidade humana.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8E63]/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-[#FF8E63] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Fuga do Protocolo Padrão</h3>
                  <p className="text-gray-600">Não tratamos apenas o diagnóstico, tratamos você. Investigamos a fundo para propor caminhos que outros podem não ter considerado.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#4B73FF] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Ciência com Empatia</h3>
                  <p className="text-gray-600">Entendemos que por trás de casos complexos existem pessoas com medos reais e muita esperança. O acolhimento é parte do tratamento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Alta Complexidade</h3>
                  <p className="text-gray-600">Especialistas em casos difíceis. Quando o caminho parece mais difícil, é onde nossa expertise faz a diferença.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
