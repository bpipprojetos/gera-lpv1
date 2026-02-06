import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Heart, Stethoscope } from "lucide-react";

interface RichCTAProps {
  variant: "authority" | "hope" | "solution";
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function RichCTA({ 
  variant,
  title,
  description,
  buttonText,
  className = ""
}: RichCTAProps) {
  const handleTypebotRedirect = () => {
    window.location.href = "https://typebot.co/b2c-gera-sao-paulo";
  };

  const getVariantContent = () => {
    switch (variant) {
      case "authority":
        return {
          icon: <Award className="w-12 h-12 text-[#FF8E63]" />,
          bgClass: "bg-[#F8F9FA] border-y border-gray-100",
          buttonClass: "bg-[#4B73FF] hover:bg-blue-700 text-white"
        };
      case "hope":
        return {
          icon: <Heart className="w-12 h-12 text-[#FF8E63]" />,
          bgClass: "bg-orange-50/50 border-y border-orange-100",
          buttonClass: "bg-[#FF8E63] hover:bg-[#E67A50] text-white"
        };
      case "solution":
        return {
          icon: <Stethoscope className="w-12 h-12 text-[#FF8E63]" />,
          bgClass: "bg-white border-y border-gray-100",
          buttonClass: "bg-[#008F7A] hover:bg-[#007A68] text-white"
        };
    }
  };

  const { icon, bgClass, buttonClass } = getVariantContent();

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          
          <div className="flex items-start gap-6 md:max-w-2xl">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hidden sm:block">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Button 
              onClick={handleTypebotRedirect}
              className={`w-full md:w-auto h-14 rounded-full text-lg font-bold px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-2 ${buttonClass}`}
            >
              <MessageCircle size={20} className="mr-1" />
              {buttonText}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
