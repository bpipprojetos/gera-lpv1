import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4B73FF] mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            A Clínica GERA respeita a sua privacidade e garante a segurança dos seus dados pessoais. 
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações 
            ao utilizar nosso site e serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Coleta de Dados</h2>
          <p>
            Coletamos informações que você nos fornece voluntariamente ao preencher formulários de contato, 
            agendamento ou ao interagir com nosso assistente virtual. Isso pode incluir nome, telefone, 
            e-mail e informações básicas sobre o motivo do contato.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
          <p>
            Utilizamos seus dados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Realizar agendamentos e atendimentos médicos;</li>
            <li>Entrar em contato para confirmar consultas ou esclarecer dúvidas;</li>
            <li>Melhorar a qualidade dos nossos serviços e atendimento;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. 
            Seus dados podem ser compartilhados apenas com parceiros estritamente necessários para a prestação 
            do serviço (como sistemas de agendamento) ou quando exigido por lei.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação e entender como você interage com nosso site. 
            Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas robustas para proteger seus dados contra acessos não autorizados, 
            perda ou alteração.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Seus Direitos</h2>
          <p>
            Você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais a qualquer momento. 
            Para exercer esses direitos, entre em contato conosco através dos canais oficiais disponíveis neste site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Recomendamos que você a revise regularmente para estar 
            ciente de como protegemos suas informações.
          </p>

          <p className="mt-12 text-sm text-gray-500">
            Última atualização: Fevereiro de 2026.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
