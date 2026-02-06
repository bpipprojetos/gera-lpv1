import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  text?: string;
  className?: string;
  variant?: "blue" | "white";
}

export default function SectionCTA({ 
  text = "Quero agendar minha avaliação", 
  className = "",
  variant = "blue"
}: SectionCTAProps) {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  const bgClass = variant === "blue" 
    ? "bg-[#4B73FF] hover:bg-blue-700 text-white" 
    : "bg-white hover:bg-gray-50 text-[#4B73FF] border-2 border-[#4B73FF]";

  return (
    <div className={`w-full flex justify-center py-12 ${className}`}>
      <Button 
        onClick={handleTypebotRedirect}
        className={`h-14 rounded-full text-lg font-bold px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-2 ${bgClass}`}
      >
        {text}
        <ArrowRight size={20} />
      </Button>
    </div>
  );
}
