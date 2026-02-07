import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@cg/components/ui/button";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <img 
              src="/images/logo-labfiv-marca.png" 
              alt="LabFIV Reprodução Assistida" 
              className="h-14 w-auto object-contain self-start" 
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Excelência em reprodução assistida em Campo Grande. Realizando sonhos e construindo famílias com tecnologia e acolhimento.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-gray-900">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  R. da Várzea, 63 - Chácara Cachoeira<br />
                  Campo Grande - MS, 79040-453
                </span>
              </div>
              <div className="mt-2">
                <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 border-none w-full sm:w-auto">
                  <a href="https://typebot.co/b2c-gera-campo-grande" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Clique aqui para chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-gray-900">Links Úteis</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a href="https://clinicagera.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Site Oficial Clínica GERA
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-primary transition-colors">
                  Corpo Clínico
                </a>
              </li>
              <li>
                <a href="#labfiv" className="hover:text-primary transition-colors">
                  Laboratório LABFIV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p>&copy; {currentYear} LABFIV Campo Grande. Todos os direitos reservados.</p>
            <Link href="/politica-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
          <p>Responsável Técnico: Dr. Rui Malta | CRM-MS 4132 | RQE 3171</p>
        </div>
      </div>
    </footer>
  );
}
