import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function WhoIsItFor() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Text & Alert */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                Para quem é a Clínica GERA?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Muitas clínicas oferecem tratamentos padrão. Nós oferecemos soluções para quem precisa de respostas mais profundas. Nosso foco é em casos onde a complexidade exige mais do que o básico.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#FF8E63]">
              <div className="flex gap-4 items-start">
                <AlertCircle className="text-[#FF8E63] w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Você já tentou antes?</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Se você já passou por tratamentos que não deram certo e se pergunta "por que comigo não funcionou?", nós podemos investigar as causas ocultas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checklist */}
          <div className="grid gap-4">
            {[
              "Casais com histórico de falhas de implantação",
              "Mulheres com baixa reserva ovariana",
              "Diagnósticos de endometriose profunda",
              "Infertilidade masculina severa",
              "Tentantes com idade avançada",
              "Quem busca preservação oncológica da fertilidade"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <CheckCircle2 className="text-[#4B73FF] h-6 w-6" />
                </div>
                <span className="font-medium text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
