import { CalendarCheck, Laptop, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PatientJourney() {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Atendimento Nacional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Seu tratamento começa onde você estiver
          </h2>
          <p className="text-gray-600 text-lg">
            A distância não é uma barreira para realizar seu sonho. Com nossa estrutura de telemedicina, atendemos pacientes de todo o Brasil com a mesma excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#4B73FF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-200 ring-4 ring-white">
              1
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-[#4B73FF] mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Primeira Consulta Online</h3>
              <p className="text-gray-500 leading-relaxed">
                Converse com nossos especialistas por vídeo, no conforto da sua casa. Analisamos seu histórico e exames iniciais para traçar um plano personalizado.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FF8E63] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-orange-200 ring-4 ring-white">
              2
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-[#FF8E63] mb-4">
                <CalendarCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Planejamento & Preparo</h3>
              <p className="text-gray-500 leading-relaxed">
                Definimos o protocolo ideal. Você realiza o preparo e exames complementares na sua cidade, com nosso acompanhamento remoto contínuo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#008F7A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-200 ring-4 ring-white">
              3
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-[#008F7A] mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Vinda a São Paulo</h3>
              <p className="text-gray-500 leading-relaxed">
                Você vem à nossa clínica apenas para os procedimentos essenciais, otimizando seu tempo e custos. Nossa equipe acolhe você pessoalmente.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={handleTypebotRedirect}
            className="bg-[#4B73FF] hover:bg-blue-700 text-white h-14 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Agendar Consulta Online
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Disponível para pacientes de todo o Brasil e exterior.
          </p>
        </div>
      </div>
    </section>
  );
}
