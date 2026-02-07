export default function SuccessStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/success-story-natural.jpg"
                alt="Casal feliz segurando ultrassom"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              História Real
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              9 Anos de Tentativas e um Final Feliz
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                "Você já imaginou um casal que tenta engravidar por 9 anos e não desiste? Esse caso me marcou bastante. Eles tinham infertilidade por fator misto: baixa produção de espermatozoides nele e baixa reserva ovariana nela, com óvulos de má qualidade. Foi um casal que lutou muito, resiliente e querido. Após 6 tentativas de fertilização in vitro, eles finalmente alcançaram o tão sonhado positivo e hoje estão com a bebê em casa."
              </p>

              <div className="border-l-4 border-[#4B73FF] pl-6 py-2 italic text-gray-800 font-medium">
                "Mantenham a persistência, mantenham a fé e não desistam dos seus sonhos. Nós da Clínica GERA estamos aqui para ajudá-los em todo esse processo."
              </div>

              <div className="pt-2 text-gray-500 font-medium">
                — Dra. Lorena Urbanetz
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
