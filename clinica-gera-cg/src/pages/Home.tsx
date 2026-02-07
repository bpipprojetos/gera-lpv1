import { Footer } from "@cg/components/Footer";
import { Header } from "@cg/components/Header";

import { Button } from "@cg/components/ui/button";
import { Card, CardContent } from "@cg/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@cg/components/ui/accordion";
import {
  Baby,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Microscope,
  Stethoscope,
  TestTube2,
  Users,
  Video
} from "lucide-react";

export default function Home() {
  const whatsappUrl = "https://typebot.co/b2c-gera-campo-grande";

  const services = [
    {
      title: "Fertilização in Vitro (FIV)",
      description: "Técnica avançada onde a fecundação ocorre em laboratório, com posterior transferência do embrião.",
      icon: TestTube2
    },
    {
      title: "Inseminação Intrauterina",
      description: "Procedimento menos complexo que facilita o encontro dos gametas dentro do útero.",
      icon: Baby
    },
    {
      title: "Congelamento de Óvulos",
      description: "Preservação da fertilidade para mulheres que desejam adiar a maternidade.",
      icon: Clock
    },
    {
      title: "Teste Genético (PGT)",
      description: "Análise embrionária para identificar alterações cromossômicas antes da implantação.",
      icon: Microscope
    }
  ];

  const partnerDoctors = [
    {
      name: "Dr. José Eduardo Silveira dos Santos",
      location: "Campo Grande",
      crm: "CRM-MS 1645",
      image: "/images/dr-jose-eduardo.jpg"
    },
    {
      name: "Dr. Augusto Mitsukuni Suguimoto",
      location: "Dourados",
      crm: "CRM-MS 1308",
      image: "/images/dr-augusto-suguimoto.jpg"
    },
    {
      name: "Dra. Isabela Monteiro de Barros Siqueira",
      location: "Dourados",
      crm: "CRM-MS 8520",
      image: "/images/dra-isabela-monteiro.jpg"
    },
    {
      name: "Dra. Karine Pedroso Santos",
      location: "Dourados",
      crm: "CRM-MS 4482",
      image: "/images/dra-karine-pedroso.jpg"
    },
    {
      name: "Dr. Wankel Viola",
      location: "Três Lagoas",
      crm: "CRM-MS 6153",
      image: "/images/dr-wankel-viola.jpg"
    },
    {
      name: "Dra. Lilian Ottoni Viola",
      location: "Três Lagoas",
      crm: "CRM-MS 9656",
      image: "/images/dra-lilian-ottoni.jpg"
    },
    {
      name: "Dra. Sarah Sanches Franco",
      location: "Três Lagoas",
      crm: "CRM-MS 13439",
      image: "/images/dra-sarah-sanches.jpg"
    },
    {
      name: "Dra. Ana Beatriz Neves",
      location: "Rondonópolis",
      crm: "CRM-MT 14317",
      image: "/images/dra-ana-beatriz.jpg"
    }
  ];

  const doctors = [
    {
      name: "Dra. Klissia Pires",
      role: "Especialista em Reprodução Humana",
      crm: "CRM-MS 3830 | RQE 5743",
      image: "/images/dra-klissia-hq.png",
      miniBio: "Docente do curso de Pós-graduação em Reprodução Assistida do Instituto GERA"
    },
    {
      name: "Dr. Newton Ishikawa",
      role: "Especialista em Reprodução Humana",
      crm: "CRM-MS 2718 | RQE 398",
      image: "/images/dr-newton-hq.png",
      miniBio: "Referência em medicina reprodutiva, o Dr. Newton traz anos de experiência e atualização constante. Seu compromisso é oferecer as tecnologias mais avançadas com a segurança e ética que seu sonho merece."
    },
    {
      name: "Dr. Rui Malta",
      role: "Especialista em Reprodução Humana",
      crm: "CRM-MS 4132 | RQE 3171",
      image: "/images/dr-rui-hq.png",
      miniBio: "Graduação, residência e especialização em Reprodução Humana pela Faculdade de Medicina da USP de Ribeirão Preto"
    },
    {
      name: "Dra. Mariana Medina",
      role: "Especialista em Reprodução Humana",
      crm: "CRM-MS 8534 | RQE 6985",
      image: "/images/dra-mariana-hq.png",
      miniBio: "Ex-tentante e hoje mãe da Maria Luiza e da Lara, a Dra. Mariana entende profundamente a jornada de seus pacientes. Une sua experiência pessoal à expertise médica para acolher e realizar sonhos."
    },
    {
      name: "Dr. Oscar Medina",
      role: "Especialista em Reprodução Humana",
      crm: "CRM-MS 8649 | RQE 6083",
      image: "/images/dr-oscar-hq.png",
      miniBio: "Com vasta experiência em cirurgias ginecológicas e reprodução, o Dr. Oscar oferece um suporte completo. Sua atuação é fundamental para preparar e otimizar as condições de saúde para a gravidez."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-semibold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Clínica e Laboratório de Reprodução Humana
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-gray-900">
                  Tecnologia que acolhe sonhos. <br />
                  <span className="text-primary">Ciência que transforma vidas.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Talvez você esteja começando... ou já tenha tentado de tudo. Seja qual for o seu ponto da jornada, nossa equipe está aqui para caminhar ao seu lado, com acolhimento e ciência.
                </p>
                <p className="text-base font-semibold text-primary/90 bg-blue-50 inline-block px-4 py-2 rounded-lg border border-blue-100">
                  Clínica em Campo Grande - Atendimento Online e Presencial
                </p>


              </div>
              <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                <div className="absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl opacity-70"></div>
                <img
                  src="/images/labfiv-hero.png"
                  alt="Tecnologia de fertilização in vitro"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">Mais de 30 anos de experiência</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">Equipe com formação internacional</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Microscope className="h-5 w-5 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">Tecnologia de ponta e laboratório próprio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Quando Procurar Ajuda */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Quando Procurar Ajuda?
              </h2>
              <p className="text-lg text-gray-600">
                O tempo é um fator precioso na fertilidade. Entenda quando é o momento ideal para buscar uma avaliação especializada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg bg-blue-50/50 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Casais Jovens</h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    Se você tem menos de 35 anos, pode tentar engravidar por até <strong>1 ano</strong>. Mas se o positivo não chegar, não significa o fim — apenas que talvez seja o momento de uma avaliação especializada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-blue-50/50 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Mulheres 35+</h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    Depois dos 35, o tempo realmente importa. Se passaram <strong>6 meses</strong> de tentativas sem sucesso, estamos aqui para investigar com cuidado — e agir rápido, se necessário.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg font-medium">
                Quanto antes identificamos a causa, maiores as chances de sucesso. E você não precisa fazer esse caminho sozinha. Estamos aqui para orientar, acolher e buscar o melhor plano para sua fertilidade.
              </p>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-6 text-xl shadow-lg shadow-green-200/50 border-none transform hover:scale-105 transition-all duration-300">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar minha avaliação agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* História de Sucesso */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/images/success-story.png"
                  alt="História de sucesso"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-square md:aspect-[4/3]"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-2">
                  História Real
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  9 Anos de Tentativas e um Final Feliz
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  "Você já imaginou um casal que tenta engravidar por 9 anos e não desiste? Esse caso me marcou bastante. Eles tinham infertilidade por fator misto: baixa produção de espermatozoides nele e baixa reserva ovariana nela, com óvulos de má qualidade. Foi um casal que lutou muito, resiliente e querido. Após 6 tentativas de fertilização in vitro, eles finalmente alcançaram o tão sonhado positivo e hoje estão com a bebê em casa."
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 text-lg">
                  "Mantenham a persistência, mantenham a fé e não desistam dos seus sonhos. Nós do LabFIV estamos aqui para ajudá-los em todo esse processo."
                </blockquote>
                <p className="text-sm text-gray-500 font-medium">
                  — Dra. Klissia Pires
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços LABFIV */}
        <section id="servicos" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Tecnologia e Excelência LABFIV
              </h2>
              <p className="text-lg text-gray-600">
                Contamos com laboratório próprio em Campo Grande, trazendo a mesma tecnologia e protocolos de sucesso da nossa matriz em São Paulo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>



            <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                    Serviços Laboratoriais Completos
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-blue-200 flex items-center gap-2">
                        <TestTube2 className="h-5 w-5" />
                        Procedimentos de Fertilidade
                      </h4>
                      <ul className="space-y-3 text-sm md:text-base">
                        {[
                          "Fertilização in Vitro (FIV) e ICSI",
                          "Preparação do sêmen para inseminação",
                          "Filmagem dos embriões 24 horas/dia",
                          "Teste genético pré-implantacional",
                          "Criopreservação",
                          "Doação de óvulos e embriões",
                          "Uso de sêmen heterólogo",
                          "Espermograma com morfologia de Kruger",
                          "Fragmentação de DNA espermático"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-4 text-blue-200 flex items-center gap-2">
                        <Microscope className="h-5 w-5" />
                        Estrutura e Suporte
                      </h4>
                      <ul className="space-y-3 text-sm md:text-base mb-8">
                        {[
                          "Biópsia embrionária",
                          "Histeroscopia diagnóstica",
                          "Pequenos procedimentos cirúrgicos (vasectomia, postectomia, etc)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-blue-800/50 p-4 rounded-xl border border-blue-700/50">
                        <h5 className="font-semibold text-blue-200 mb-2 text-sm">
                          Suporte ao Corpo Médico:
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                            Suporte para casos clínicos (discussão)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                            Auxílio em captações e transferências
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/lab-microscope.png"
                    alt="Microscópio LABFIV"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <img
                    src="/images/lab-incubator.png"
                    alt="Incubadora LABFIV"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="col-span-2">
                    <img
                      src="/images/lab-analysis.png"
                      alt="Análise Laboratorial"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA de Alto Impacto 1 */}
        <section className="py-10 bg-white">
          <div className="container">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="/images/labfiv-hero.png"
                  alt="Background"
                  className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-800/80"></div>
              </div>

              <div className="relative z-10 p-12 md:p-20 text-center">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  Não deixe seu sonho para depois.
                </h3>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  A tecnologia avançada e o acolhimento humano que você procura estão mais perto do que imagina. Dê o primeiro passo hoje mesmo.
                </p>
                <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-12 py-8 text-xl font-bold shadow-xl shadow-green-900/20 border-none transform hover:scale-105 transition-all duration-300">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar com Especialista Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Congelamento de Óvulos */}
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white rounded-full blur-2xl opacity-60"></div>
                <img
                  src="/images/lab-team.png"
                  alt="Equipe LABFIV"
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Preserve Sua Fertilidade
                </h2>
                <p className="text-lg text-gray-600">
                  Se você tem 30 anos ou mais, o congelamento de óvulos é uma técnica essencial que permite preservar seus óvulos para uso futuro.
                </p>
                <p className="text-gray-600">
                  Ideal para mulheres que desejam adiar a maternidade por motivos pessoais, profissionais ou de saúde. A técnica de criopreservação mantém a qualidade dos óvulos da idade em que foram congelados.
                </p>
                <Button asChild className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 border-none">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Saiba Mais sobre Congelamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe Médica */}
        <section id="equipe" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Corpo Clínico Especializado
              </h2>
              <p className="text-lg text-gray-600">
                Uma equipe altamente qualificada, formada e atualizada constantemente, pronta para acolher você.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white">
                  <div className="aspect-[4/5] w-full overflow-hidden relative">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 text-center relative z-20 bg-white flex flex-col h-full">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-sm text-primary font-medium uppercase tracking-wide mb-2">{doctor.role}</p>

                    {doctor.miniBio && (
                      <p className="text-xs text-gray-500 font-mono mb-2 px-2 leading-tight min-h-[2.5em] flex items-center justify-center">
                        {doctor.miniBio}
                      </p>
                    )}

                    <p className="text-xs text-gray-500 font-mono mt-auto pt-2 border-t border-gray-100 w-full">{doctor.crm}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 pt-16 border-t border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
                Outros Médicos Parceiros
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerDoctors.map((doctor, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white shadow-md bg-white">
                      {doctor.image ? (
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center text-primary ${doctor.image ? 'hidden' : ''}`}>
                        <Stethoscope className="h-8 w-8" />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{doctor.name}</h4>
                    <p className="text-xs text-primary font-medium uppercase tracking-wide mb-2">{doctor.location}</p>
                    {doctor.crm && <p className="text-xs text-gray-500 font-mono">{doctor.crm}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Atendimento Online Disponível</h3>
                  <p className="text-gray-600">
                    Você também pode realizar sua primeira consulta online com nossos médicos especialistas de São Paulo.
                  </p>
                </div>
                <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-white">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Agendar Telemedicina
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA de Alto Impacto 2 - Novo Design */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/success-story.png"
              alt="Background Family"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                <Heart className="h-4 w-4 text-rose-400 fill-rose-400" />
                Seu sonho é nossa missão
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                Não é apenas sobre medicina. <br />
                <span className="text-rose-300">É sobre realizar o seu sonho de família.</span>
              </h2>

              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                Sabemos que a jornada pode ser desafiadora, mas você não precisa caminhar sozinha. Nossa equipe está pronta para acolher sua história e transformar esperança em vida.
              </p>

              <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-lg font-bold shadow-xl shadow-blue-900/20 border-none transform hover:scale-105 transition-all duration-300">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quero começar minha jornada agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Parcerias São Paulo & Pioneirismo */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Pioneirismo e Tradição
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  História que Inspira Confiança
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Responsável pela condução laboratorial do <strong>primeiro caso de fertilização in vitro em hospital público no Brasil</strong> (Hospital das Clínicas da Faculdade de Medicina da USP) em 1991.
                  </p>
                  <p>
                    Fundador do LabFIV Campo Grande (MR) em 2018, LabFIV São Paulo em 2000, LabFIV Sinop em 2019, ÁUREA em 2024.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-blue-100 p-1.5 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </span>
                    Conexão São Paulo
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Os médicos parceiros do LabFIV de Campo Grande contam com a parceria estratégica do <strong>Instituto de Ensino em Medicina Reprodutiva de São Paulo (GERA)</strong> e do <strong>ÁUREA - Centro de Fertilidade</strong>.
                  </p>
                  <p className="text-sm text-gray-500 italic border-l-2 border-primary/30 pl-3">
                    Essa conexão garante acesso aos protocolos mais avançados e troca constante de conhecimento com os maiores especialistas do país.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
                  <img
                    src="/images/dr-joji-ueno.png"
                    alt="Dr. Joji Ueno"
                    className="relative rounded-2xl shadow-xl w-full max-w-md object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 text-center">
                    <p className="font-bold text-gray-900">Dr. Joji Ueno</p>
                    <p className="text-xs text-primary font-medium uppercase tracking-wide">Fundador LabFIV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              Dúvidas Frequentes
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Quanto tempo demora um tratamento de FIV?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Um ciclo de FIV geralmente dura cerca de 15 a 20 dias, desde o início da estimulação ovariana até a transferência embrionária. No entanto, cada caso é único e pode variar conforme o protocolo médico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Atendem pacientes de outras cidades?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Recebemos pacientes de toda a região Centro-Oeste. Oferecemos suporte para agendamento e a possibilidade de realizar a primeira consulta online para sua comodidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Qual a idade limite para congelar óvulos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não existe uma idade limite rígida, mas a qualidade dos óvulos diminui com o tempo. O ideal é realizar o congelamento até os 35 anos para melhores resultados, mas mulheres com mais idade também podem se beneficiar após avaliação da reserva ovariana.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Aceitam convênios?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Para informações atualizadas sobre convênios e formas de pagamento, por favor entre em contato diretamente com nossa equipe pelo WhatsApp.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <Heart className="h-16 w-16 text-white/80 mx-auto animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Vamos realizar seu sonho juntos?
              </h2>
              <p className="text-xl text-blue-100">
                Nossa equipe está pronta para acolher você com todo carinho e profissionalismo que você merece.
              </p>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-10 py-6 shadow-xl border-none">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp Agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
