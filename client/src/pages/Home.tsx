import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import PatientJourney from "@/components/PatientJourney";
import WhoIsItFor from "@/components/WhoIsItFor";
import SuccessStory from "@/components/SuccessStory";
import RealStories from "@/components/RealStories";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import RichCTA from "@/components/RichCTA";
import EmotionalConnection from "@/components/EmotionalConnection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <RichCTA 
          variant="authority"
          title="Excelência comprovada em cada detalhe"
          description="Mais de 30 anos de história e milhares de sonhos realizados. Sua confiança é nossa maior conquista."
          buttonText="Falar com especialistas no WhatsApp"
        />
        <Philosophy />
        <WhoIsItFor />
        <RichCTA 
          variant="hope"
          title="Você não precisa caminhar sozinha"
          description="Seja qual for o seu diagnóstico, temos a tecnologia e o acolhimento que você precisa para seguir em frente."
          buttonText="Conversar com a equipe no WhatsApp"
        />
        <SuccessStory />
        <PatientJourney />
        <Services />
        <RichCTA 
          variant="solution"
          title="O tratamento ideal para o seu momento"
          description="Da fertilização in vitro à preservação da fertilidade. Tecnologia de ponta personalizada para o seu caso."
          buttonText="Agendar avaliação no WhatsApp"
        />
        <Team />
        <EmotionalConnection />
        <Contact />
        <RealStories />
      </main>
      <Footer />
    </div>
  );
}
