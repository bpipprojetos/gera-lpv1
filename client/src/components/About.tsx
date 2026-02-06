import { Award, Heart, Microscope, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Excelência Médica",
      description: "Equipe altamente qualificada com reconhecimento nacional e internacional",
      color: "bg-[#4B73FF]"
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado e acolhedor em cada etapa da jornada",
      color: "bg-[#008F7A]" // Using a teal color for variety as seen in original design intent
    },
    {
      icon: <Microscope className="h-6 w-6 text-white" />,
      title: "Tecnologia de Ponta",
      description: "Laboratório equipado com o que há de mais moderno em reprodução assistida",
      color: "bg-[#4B73FF]"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Segurança e Confiança",
      description: "Protocolos rigorosos seguindo as melhores práticas internacionais",
      color: "bg-[#008F7A]"
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-block bg-orange-50 text-[#FF8E63] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Sobre a Clínica GERA
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Referência em Medicina Reprodutiva
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fundada em 1993 pelo renomado Prof. Dr. Joji Ueno, a Clínica GERA é referência nacional em medicina reprodutiva, dedicando-se a restaurar a fertilidade e realizar o sonho da maternidade e paternidade para famílias de todo o Brasil.
            </p>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Com mais de três décadas de experiência em São Paulo, oferecemos tratamentos com as mais avançadas tecnologias, laboratório certificado e uma equipe médica formada por mestres e doutores pela USP e UNIFESP. Nosso diferencial está no diagnóstico preciso e no atendimento individualizado, indicando sempre o melhor caminho para cada casal.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shadow-lg shadow-blue-100`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/consultation-gera-CFxiBuqP.jpg" 
                alt="Atendimento na Clínica GERA" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                  92%
                </div>
                <div>
                  <div className="font-bold text-gray-900">Taxa de Sucesso</div>
                  <div className="text-xs text-gray-500">Acima da média nacional</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
