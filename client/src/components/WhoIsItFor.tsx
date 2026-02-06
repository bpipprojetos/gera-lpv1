import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function WhoIsItFor() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Para quem é a Clínica GERA?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Muitas clínicas oferecem tratamentos padrão. Nós oferecemos soluções para quem precisa de respostas mais profundas. Nosso foco é em casos onde a complexidade exige mais do que o básico.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#FF8E63] mb-8">
              <div className="flex gap-4">
                <AlertCircle className="text-[#FF8E63] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Você já tentou antes?</h4>
                  <p className="text-gray-600 text-sm">
                    Se você já passou por tratamentos que não deram certo e se pergunta "por que comigo não funcionou?", nós podemos investigar as causas ocultas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="grid gap-4">
              {[
                "Casais com histórico de falhas de implantação",
                "Mulheres com baixa reserva ovariana",
                "Diagnósticos de endometriose profunda",
                "Infertilidade masculina severa",
                "Tentantes com idade avançada",
                "Quem busca preservação oncológica da fertilidade"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                  <CheckCircle2 className="text-[#4B73FF] flex-shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
