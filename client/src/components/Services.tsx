import { Baby, Dna, Heart, TestTube2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Baby className="h-8 w-8 text-white" />,
      title: "Fertilização In Vitro (FIV)",
      description: "Técnica avançada que une óvulo e espermatozoide em laboratório, com altas taxas de sucesso e acompanhamento personalizado.",
      color: "bg-[#4B73FF]"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Inseminação Artificial",
      description: "Procedimento menos invasivo que aumenta as chances de gravidez através da introdução de espermatozoides selecionados.",
      color: "bg-[#4B73FF]"
    },
    {
      icon: <TestTube2 className="h-8 w-8 text-white" />,
      title: "Preservação da Fertilidade",
      description: "Congelamento de óvulos e espermatozoides para quem deseja adiar a maternidade/paternidade com segurança.",
      color: "bg-[#4B73FF]"
    },
    {
      icon: <Dna className="h-8 w-8 text-white" />,
      title: "Diagnóstico Genético",
      description: "Análise genética pré-implantacional para identificar possíveis alterações cromossômicas e garantir embriões saudáveis.",
      color: "bg-[#4B73FF]"
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-50 text-[#008F7A] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Tratamentos de Excelência
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma ampla gama de tratamentos em medicina reprodutiva, sempre com tecnologia de ponta, laboratório certificado e cuidado humanizado
          </p>
        </div>

        {/* Featured Lab Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 transform hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            {/* Image Mosaic */}
            <div className="lg:w-1/2 bg-[#1e3a8a] p-4 md:p-6 grid grid-cols-2 gap-4 content-center">
              {/* Top Left: Microscope (Technology focus) */}
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white/10 group">
                <img
                  src="/images/lab-microscope.png"
                  alt="Microscópio de alta precisão"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Top Right: Incubator (Portrait) */}
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white/10 group">
                <img
                  src="/images/lab-incubator.png"
                  alt="Incubadora Time-Lapse"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Bottom: Team Screen (Landscape) */}
              <div className="col-span-2 relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg border-2 border-white/10 group">
                <img
                  src="/images/lab-team-screen.png"
                  alt="Equipe analisando embriões"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Laboratório de Última Geração</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nosso laboratório conta com equipamentos de última geração e segue rigorosos padrões internacionais de qualidade. Certificado e licenciado, realiza cada procedimento com extrema precisão e cuidado, alcançando taxas de fertilização superiores à média nacional.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#4B73FF] mb-1">80%</div>
                  <div className="text-sm text-gray-600">Taxa de fertilização (acima da média nacional)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
