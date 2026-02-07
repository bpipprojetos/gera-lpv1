import { Button } from "@cg/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const whatsappUrl = "https://typebot.co/b2c-gera-campo-grande";

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Equipe", href: "#equipe" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img
              src="/images/logo-clinica-gera-Cnp0HDOd.png"
              alt="Clínica GERA"
              className="h-16 w-auto cursor-pointer object-contain"
            />
          </Link>
          <div className="hidden sm:flex flex-col border-l pl-4 border-gray-200">
            <span className="text-sm font-bold text-gray-900 leading-tight">Clínica em Campo Grande</span>
            <span className="text-xs text-gray-500 font-medium">Atendimento Presencial e Online</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white py-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
