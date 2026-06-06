import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos e Condições — Aposta Segura',
  description: 'Consulte os termos e condições de utilização do site apostasegura.live, um portal de comparação de ofertas de casinos licenciados em Portugal.',
};

export default function Page() {
  return (
    <>
      <header className="as-legal-header">
        <a href="/" className="as-legal-back">Aposta<span style={{ color: '#10b981' }}>Segura</span></a>
      </header>
      <main className="as-legal-main">
        <h1>Termos e Condições</h1>
        <p className="as-legal-updated">Última atualização: junho de 2026</p>

        <h2>1. Aceitação dos Termos</h2>
        <p>Ao aceder e utilizar o site apostasegura.live, o utilizador declara que leu, compreendeu e aceita ficar vinculado aos presentes Termos e Condições. Caso não concorde com alguma disposição, deverá cessar imediatamente a utilização do site. A Aposta Segura Lda reserva-se o direito de modificar estes termos a qualquer momento, sendo as alterações eficazes a partir da sua publicação nesta página.</p>

        <h2>2. Natureza do Serviço</h2>
        <p>O site apostasegura.live é uma plataforma editorial e de comparação que apresenta informações sobre ofertas de boas-vindas de operadores de jogo online licenciados pelo Serviço de Regulação e Inspeção de Jogos (SRIJ) em Portugal. A Aposta Segura Lda não é um operador de jogo, não detém qualquer licença de exploração de jogo online e não aceita apostas, depósitos ou pagamentos de qualquer natureza. As informações apresentadas têm caráter meramente informativo e comparativo.</p>

        <h2>3. Links de Afiliado</h2>
        <p>O nosso site contém links de afiliado para operadores de jogo terceiros. Quando o utilizador clica nestes links e efetua um registo ou depósito junto do operador, a Aposta Segura Lda poderá receber uma comissão de referenciação. Esta relação comercial não influencia a independência da nossa análise editorial. Os operadores são avaliados com base em critérios objetivos, incluindo licenciamento, velocidade de levantamentos, qualidade do suporte ao cliente e transparência dos termos de bónus.</p>

        <h2>4. Elegibilidade</h2>
        <p>O acesso a este site é restrito a pessoas com idade igual ou superior a 18 anos. Ao utilizar o site, o utilizador confirma que tem idade legal para participar em atividades de jogo na sua jurisdição. Se for menor de idade, deve abandonar o site imediatamente. A Aposta Segura Lda não se responsabiliza pelo acesso de menores ao site ou aos sites de operadores referenciados.</p>

        <h2>5. Isenção de Responsabilidade sobre Conteúdo</h2>
        <p>Embora nos esforcemos por manter as informações atualizadas e rigorosas, a Aposta Segura Lda não garante a exatidão, integridade ou atualidade de todo o conteúdo publicado. As ofertas de bónus, termos de rollover, limites de depósito e outras condições apresentadas podem ser alteradas pelos operadores a qualquer momento sem aviso prévio. O utilizador deve sempre verificar os termos e condições diretamente no site do operador antes de efetuar qualquer registo ou depósito.</p>

        <h2>6. Propriedade Intelectual</h2>
        <p>Todo o conteúdo original do site apostasegura.live, incluindo textos, design gráfico, logótipos, ícones, estrutura de dados e código-fonte, é propriedade da Aposta Segura Lda e encontra-se protegido pela legislação portuguesa e europeia relativa a direitos de autor e propriedade intelectual. É proibida a reprodução, distribuição, modificação ou utilização comercial de qualquer conteúdo sem autorização prévia por escrito. Os logótipos e marcas dos operadores pertencem aos respetivos titulares e são utilizados exclusivamente para fins informativos.</p>

        <h2>7. Limitação de Responsabilidade</h2>
        <p>A Aposta Segura Lda não se responsabiliza por quaisquer perdas, danos diretos, indiretos, incidentais ou consequentes resultantes da utilização do nosso site ou da interação com operadores de jogo referenciados. O jogo online comporta riscos financeiros significativos e o utilizador é o único responsável pelas suas decisões de jogo. A utilização do site é feita por conta e risco do utilizador. Não garantimos ganhos nem a rentabilidade de qualquer oferta apresentada.</p>

        <h2>8. Disponibilidade do Serviço</h2>
        <p>Envidamos esforços razoáveis para manter o site acessível e funcional em permanência. Contudo, não garantimos que o serviço será ininterrupto, livre de erros ou seguro contra todas as ameaças. Reservamo-nos o direito de suspender ou descontinuar o site, total ou parcialmente, para manutenção, atualização ou por qualquer outro motivo, sem obrigação de aviso prévio.</p>

        <h2>9. Conduta do Utilizador</h2>
        <p>O utilizador compromete-se a utilizar o site de forma lícita e em conformidade com os presentes Termos. É proibido: utilizar o site para fins ilícitos ou fraudulentos; tentar aceder a áreas restritas do servidor ou da infraestrutura; transmitir vírus, malware ou qualquer código malicioso; recolher sistematicamente dados do site sem autorização; e praticar qualquer ato que possa prejudicar o funcionamento normal do site ou a experiência de outros utilizadores.</p>

        <h2>10. Privacidade</h2>
        <p>O tratamento dos dados pessoais dos utilizadores rege-se pela nossa <a href="/privacy-policy" style={{ color: '#10b981' }}>Política de Privacidade</a>, que constitui parte integrante destes Termos e Condições. Ao utilizar o site, o utilizador aceita igualmente as práticas descritas na Política de Privacidade.</p>

        <h2>11. Lei Aplicável e Jurisdição</h2>
        <p>Os presentes Termos e Condições regem-se e são interpretados de acordo com a legislação da República Portuguesa. Qualquer litígio emergente da utilização do site será submetido à competência exclusiva dos tribunais da comarca de Lisboa, Portugal, sem prejuízo das normas imperativas de proteção do consumidor aplicáveis na jurisdição do utilizador.</p>

        <h2>12. Contacto</h2>
        <p>Para questões, dúvidas ou reclamações relativas a estes Termos e Condições, o utilizador pode contactar-nos através do endereço eletrónico <strong>info@apostasegura.live</strong>. Comprometemo-nos a responder no mais curto prazo possível, não excedendo 30 dias úteis após receção da mensagem.</p>
      </main>
      <footer className="as-legal-footer">
        <p>&copy; 2026 Aposta Segura Lda. Todos os direitos reservados.</p>
      </footer>
      <style>{`
        .as-legal-header { max-width: 800px; margin: 0 auto; padding: 20px 20px 0; }
        .as-legal-back { color: #e2ebe6; font-family: var(--font-outfit); font-weight: 700; font-size: 15px; text-decoration: none; }
        .as-legal-main { max-width: 800px; margin: 0 auto; padding: 32px 20px 48px; }
        .as-legal-main h1 { font-family: var(--font-outfit); font-size: 28px; font-weight: 700; margin: 0 0 8px; }
        .as-legal-updated { font-size: 12px; color: #7a9488; margin: 0 0 32px; }
        .as-legal-main h2 { font-family: var(--font-outfit); font-size: 16px; font-weight: 600; margin: 32px 0 8px; }
        .as-legal-main p { font-size: 14px; color: #c0d4c8; line-height: 1.75; margin: 0 0 12px; }
        .as-legal-main a { color: #10b981; }
        .as-legal-footer { max-width: 800px; margin: 0 auto; padding: 20px; border-top: 1px solid rgba(255,255,255,0.07); }
        .as-legal-footer p { font-size: 11px; color: rgba(255,255,255,0.2); margin: 0; }
      `}</style>
    </>
  );
}
