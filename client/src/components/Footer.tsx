import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="/images/logo-clinica-gera-Cnp0HDOd.png" 
              alt="Clínica GERA" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Referência nacional em medicina reprodutiva desde 1993. Transformando sonhos em realidade com ética, ciência e humanização.
            </p>

          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#sobre" className="hover:text-[#4B73FF] transition-colors">Sobre a Clínica</a></li>
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Tratamentos</a></li>
              <li><a href="#equipe" className="hover:text-[#4B73FF] transition-colors">Corpo Clínico</a></li>
              <li><a href="#unidades" className="hover:text-[#4B73FF] transition-colors">Localização</a></li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Tratamentos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Fertilização In Vitro</a></li>
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Inseminação Artificial</a></li>
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Congelamento de Óvulos</a></li>
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Ovodoação</a></li>
              <li><a href="#servicos" className="hover:text-[#4B73FF] transition-colors">Diagnóstico Genético</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-[#4B73FF]">SP:</span> 
                <div>
                  Rua Peixoto Gomide, 515 - 1º Andar<br/>
                  Jardim Paulista - São Paulo - SP, 01409-001
                </div>
              </li>
              <li><a href="https://typebot.co/b2c-gera-sao-paulo" className="hover:text-[#4B73FF] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} Clínica GERA. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
