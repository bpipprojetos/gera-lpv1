import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  return (
    <>
      {/* Location Section */}
      <section id="unidades" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-green-50 text-[#008F7A] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Nossa Unidade
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Localização
            </h2>
            <p className="text-gray-600 text-lg">
              Atendemos em São Paulo com tecnologia de ponta e equipe altamente especializada
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12">
                <div className="inline-block bg-blue-50 text-[#4B73FF] px-3 py-1 rounded-md text-sm font-semibold mb-4">
                  São Paulo
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Fundada em 1993</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Centro de excelência e referência nacional em reprodução assistida desde 1993. Equipada com laboratório de última geração e equipe altamente especializada.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#FF8E63] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Rua Peixoto Gomide, 515 - 1º Andar</p>
                      <p className="text-gray-500">Jardim Paulista - São Paulo - SP, 01409-001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="text-[#FF8E63] flex-shrink-0" />
                    <p className="font-medium text-gray-900">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={handleTypebotRedirect}
                    className="w-full md:w-auto h-14 bg-[#4B73FF] hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all px-8"
                  >
                    Agendar minha avaliação
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 h-80 lg:h-auto bg-gray-200 relative">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Peixoto%20Gomide%2C%20515%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#4B73FF] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Clínica GERA?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Fundada em 1993, somos referência nacional em medicina reprodutiva, unindo experiência, tecnologia e cuidado humano
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "32 anos de experiência",
                  "Laboratório certificado",
                  "Equipe de mestres e doutores",
                  "Unidade completa em SP",
                  "Diagnóstico preciso",
                  "Pioneirismo em videoendoscopia",
                  "Atendimento humanizado",
                  "Domínio da legislação"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF8E63] rounded-full"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <p className="text-2xl font-serif italic mb-6 leading-relaxed">
                  "Transformar sonhos em realidade é o que nos move todos os dias"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/dr-joji-ueno-CAxQqgsy.jpg"
                    alt="Dr. Joji Ueno"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-lg">Prof. Dr. Joji Ueno</div>
                    <div className="text-blue-200 text-sm">Fundador</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-50 text-[#FF8E63] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Vamos realizar seu sonho juntos?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Nossa equipe está pronta para acolher você
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Dê o primeiro passo para realizar seu sonho com todo carinho e profissionalismo que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleTypebotRedirect}
                className="h-16 bg-[#4B73FF] hover:bg-blue-700 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all px-10"
              >
                Quero dar meu primeiro passo
              </Button>

              <Button
                onClick={handleTypebotRedirect}
                variant="outline"
                className="h-16 border-green-500 text-green-600 hover:bg-green-50 rounded-full text-lg font-semibold px-10 gap-2"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp Agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
