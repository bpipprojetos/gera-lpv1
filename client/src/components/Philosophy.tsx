import { HeartHandshake, Lightbulb, UserCheck } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028241656/bpZzGXMBZruhtkBK.jpg" 
                alt="Dra. Lorena Urbanetz em consulta humanizada na Clínica GERA" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <p className="text-white text-xl font-medium italic">"Ciência sem empatia não cura"</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-50 text-[#4B73FF] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Nossa Filosofia
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Mais do que respostas prontas, você precisa de um <span className="text-gradient">olhar personalizado</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Sabemos que cada história é única. Se você já passou por tentativas frustradas ou possui um diagnóstico complexo, o protocolo padrão pode não ser suficiente. Na Clínica GERA, unimos o rigor científico à sensibilidade humana.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF8E63]">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">Fuga do Protocolo Padrão</h3>
                  <p className="text-gray-500">Não tratamos apenas o diagnóstico, tratamos você. Investigamos a fundo para propor caminhos que outros podem não ter considerado.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#4B73FF]">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">Ciência com Empatia</h3>
                  <p className="text-gray-500">Entendemos que por trás de casos complexos existem pessoas com medos reais e muita esperança. O acolhimento é parte do tratamento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#008F7A]">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">Alta Complexidade</h3>
                  <p className="text-gray-500">Especialistas em casos difíceis. Quando o caminho parece mais difícil, é onde nossa expertise faz a diferença.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
