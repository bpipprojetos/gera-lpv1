import { GraduationCap, Stethoscope } from "lucide-react";

export default function Team() {
  const doctors = [
    {
      name: "Prof. Dr. Joji Ueno",
      crm: "CRM 48.486",
      role: "Fundador da Clínica GERA",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Doutor pela Faculdade de Medicina da USP, onde atuou como orientador na pós-graduação stricto sensu na mesma instituição. Realizou fellow no The Jones Institute for Reproductive Medicine (Norfolk, VA, EUA). Autor do primeiro livro de histeroscopia e Laparoscopia ginecológica do Brasil, tendo como foco o médico ginecologista.",
      image: "/images/dr-joji-avental.jpg",
      featured: true
    },
    {
      name: "Prof. Dr. Fábio Ikeda",
      crm: "CRM 81.567",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Mestre pela USP e especialista em Reprodução Humana Assistida pela FMUSP. Professor e supervisor clínico do Instituto GERA.",
      image: "/images/dr-fabio-ikeda-Cu1hwMG6.jpg"
    },
    {
      name: "Profª. Dra. Marise Samama",
      crm: "CRM 73.050",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Mestre e doutora pela EPM-UNIFESP e pela Universidade de Paris (França). Pós-doutoranda no Departamento de Ginecologia da EPM-UNIFESP.",
      image: "/images/dra-marise-samama-DkGX-xfB.jpg"
    },
    {
      name: "Dra. Lorena Urbanetz",
      crm: "CRM 165.069",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Mestre pela USP e especialista em Reprodução Humana Assistida pela UNIFESP. Atua também no HC-FMUSP e possui experiência internacional.",
      image: "/images/dra-lorena-urbanetz-ChSeAesK.jpg"
    },
    {
      name: "Profª. Dra. Flávia Fairbanks",
      crm: "CRM 93.879",
      specialty: "Ginecologia e Menopausa",
      description: "Mestre e doutora pela Faculdade de Medicina da USP, professora associada da Universidade de Miami (EUA). Especialista em saúde sexual feminina.",
      image: "/images/dra-flavia-fairbanks-aoX7Q4Z6.jpg"
    },
    {
      name: "Dra. Ana Carolina Lazaro",
      crm: "CRM 25.638",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Mestranda pela UNIFESP e especialista pela FEBRASGO. Pós-graduada em Reprodução Humana pelo Instituto GERA.",
      image: "/images/dra-ana-carolina-lazaro-DnZ7gssV.jpg"
    },
    {
      name: "Dra. Rita Piscopo",
      crm: "CRM 66.957",
      specialty: "Ginecologia e Reprodução Assistida",
      description: "Título de Especialista em Reprodução Humana pela FEBRASGO e pós-graduada em Reprodução Assistida pelo Instituto GERA.",
      image: "/images/dra-rita-piscopo-BAHsQBd0.jpg"
    },
    {
      name: "Prof. Dr. José Maria Soares",
      crm: "CRM 82.551",
      specialty: "Ginecologia Endócrina",
      description: "Professor Associado Livre-Docente da Faculdade de Medicina da USP e chefe do Departamento de Obstetrícia e Ginecologia da FMUSP.",
      image: "/images/dr-jose-maria-soares-CfrMWqWv.jpg"
    },
    {
      name: "Prof. Dr. Fábio Tanno",
      crm: "CRM 120.266",
      specialty: "Urologia e Infertilidade Masculina",
      description: "Doutor em Urologia pela Faculdade de Medicina da USP. Desde 2017, dedica-se à infertilidade masculina e às técnicas cirúrgicas.",
      image: "/images/dr-fabio-tanno-Bi1bpFHY.jpg"
    }
  ];

  return (
    <section id="equipe" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-50 text-[#FF8E63] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Corpo Clínico
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Equipe de Especialistas
          </h2>
          <p className="text-gray-600 text-lg">
            Médicos altamente qualificados com formação nas melhores instituições do Brasil e do mundo
          </p>
        </div>

        {/* Featured Doctor - Dr. Joji */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 p-6 md:p-10 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <img 
                  src={doctors[0].image} 
                  alt={doctors[0].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#4B73FF] p-2 rounded-full text-white">
                  <Stethoscope size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">{doctors[0].name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-[#4B73FF] font-semibold bg-blue-100 px-3 py-1 rounded-full text-sm">{doctors[0].crm}</span>
                <span className="text-[#FF8E63] font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">{doctors[0].role}</span>
              </div>
              
              <div className="text-[#008F7A] font-medium mb-4 flex items-center gap-2">
                <GraduationCap size={18} />
                {doctors[0].specialty}
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {doctors[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Other Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.slice(1).map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Saiba mais</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#4B73FF] p-1.5 rounded-full text-white flex-shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] line-clamp-1">{doctor.name}</h3>
                </div>
                
                <div className="text-[#4B73FF] text-sm font-semibold mb-2">{doctor.crm}</div>
                
                <div className="bg-green-50 text-[#008F7A] text-xs font-medium px-2 py-1 rounded-md inline-block mb-3">
                  {doctor.specialty}
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#F8F9FA] rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Colaboração com Profissionais de Todo o Brasil</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Além do nosso corpo clínico próprio, contamos com a colaboração de diversos profissionais especializados de São Paulo e outros estados, que utilizam nossas instalações de última geração para realizar tratamentos de reprodução assistida.
          </p>
        </div>
      </div>
    </section>
  );
}
