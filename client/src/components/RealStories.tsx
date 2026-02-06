import { Quote } from "lucide-react";
import storiesData from "../data/stories.json";

export default function RealStories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-50 text-[#008F7A] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Histórias de Realizações
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Sonhos que Ajudamos a Realizar
          </h2>
          <p className="text-gray-600 text-lg">
            Cada positivo é uma vitória. Conheça algumas das famílias que confiaram na Clínica GERA para transformar o sonho em vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {storiesData.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={`Foto de ${story.names}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="absolute -bottom-4 right-6 bg-[#4B73FF] text-white p-3 rounded-full shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{story.names}</h3>
                    <p className="text-sm text-gray-500">{story.age} • {story.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{story.story}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Médico responsável:</p>
                <p className="text-[#008F7A] font-semibold">{story.doctor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://typebot.co/b2c-gera-sao-paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#4B73FF] rounded-full hover:bg-[#3a5bd9] hover:shadow-lg hover:-translate-y-1"
          >
            Quero viver essa história
          </a>
        </div>
      </div>
    </section>
  );
}
