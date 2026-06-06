import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies — Aposta Segura',
  description: 'Conheça os tipos de cookies utilizados pelo site apostasegura.live, como funcionam e como pode geri-los nas definições do seu navegador.',
};

export default function Page() {
  return (
    <>
      <header className="as-legal-header">
        <a href="/" className="as-legal-back">Aposta<span style={{ color: '#10b981' }}>Segura</span></a>
      </header>
      <main className="as-legal-main">
        <h1>Política de Cookies</h1>
        <p className="as-legal-updated">Última atualização: junho de 2026</p>

        <h2>1. O Que São Cookies</h2>
        <p>Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet ou telemóvel) quando visita um site. Estes ficheiros permitem que o site reconheça o seu dispositivo em visitas subsequentes, memorize as suas preferências e recolha informações sobre a sua utilização. Os cookies são amplamente utilizados na internet para garantir o funcionamento eficiente dos sites e para fornecer informações aos proprietários. Não contêm vírus nem acedem a outros dados no seu dispositivo.</p>

        <h2>2. Cookies Essenciais</h2>
        <p>Os cookies essenciais são indispensáveis para o funcionamento básico do site apostasegura.live. Sem estes cookies, funcionalidades fundamentais como a navegação entre páginas, a memorização da sua preferência de consentimento de cookies e a manutenção de sessões seguras não funcionariam corretamente. Estes cookies não recolhem informações pessoais identificáveis e são eliminados automaticamente quando fecha o navegador ou após um período definido. Por serem estritamente necessários, não requerem o seu consentimento prévio, conforme previsto na legislação aplicável.</p>

        <h2>3. Cookies Analíticos</h2>
        <p>Utilizamos cookies analíticos para compreender como os visitantes interagem com o nosso site. Estes cookies recolhem informações de forma agregada e anónima, incluindo o número de visitantes, as páginas mais consultadas, o tempo médio de permanência e a origem do tráfego. Estas informações ajudam-nos a identificar áreas de melhoria e a otimizar a experiência de navegação. Os cookies analíticos só são ativados após o seu consentimento expresso. Se optar por não os aceitar, continuará a poder navegar no site normalmente, embora não possamos recolher dados estatísticos sobre a sua visita.</p>

        <h2>4. Cookies de Marketing</h2>
        <p>Os cookies de marketing podem ser utilizados para acompanhar a sua atividade de navegação entre diferentes sites, permitindo apresentar conteúdo e publicidade mais relevantes para os seus interesses. No site apostasegura.live, estes cookies podem ser colocados por parceiros publicitários terceiros quando clica em links de afiliado. Estes cookies de terceiros estão sujeitos às políticas de privacidade dos respetivos parceiros. Tal como os cookies analíticos, os cookies de marketing só são ativados com o seu consentimento prévio. A recusa não afeta a funcionalidade do site.</p>

        <h2>5. Cookies de Terceiros</h2>
        <p>Ao navegar no nosso site, poderá encontrar cookies colocados por serviços de terceiros que utilizamos. Estes incluem, por exemplo, ferramentas de análise de tráfego e plataformas de rastreamento de afiliados. Cada um destes serviços possui a sua própria política de cookies e de privacidade. A Aposta Segura Lda não controla a emissão nem a gestão dos cookies de terceiros. Para mais informações, recomendamos que consulte as políticas dos respetivos fornecedores diretamente nos seus sites.</p>

        <h2>6. Como Gerir os Cookies</h2>
        <p>O utilizador pode gerir as suas preferências de cookies de diversas formas. A maioria dos navegadores permite visualizar, eliminar e bloquear cookies nas respetivas definições. As instruções variam consoante o navegador: no Chrome, aceda a Definições &gt; Privacidade e segurança &gt; Cookies; no Firefox, aceda a Definições &gt; Privacidade &amp; Segurança; no Safari, aceda a Preferências &gt; Privacidade. Pode também configurar o seu navegador para o notificar sempre que um cookie for enviado. Tenha em conta que a desativação de cookies essenciais poderá afetar o funcionamento correto de determinadas funcionalidades do site.</p>

        <h2>7. Consentimento e Revogação</h2>
        <p>Na sua primeira visita ao site, é-lhe apresentado um aviso de cookies onde pode aceitar ou rejeitar a utilização de cookies não essenciais. O seu consentimento é registado através de um cookie essencial que memoriza a sua escolha por um período de 12 meses. Pode revogar o seu consentimento a qualquer momento limpando os cookies do seu navegador ou contactando-nos diretamente. Após a revogação, o aviso de cookies será apresentado novamente na sua próxima visita.</p>

        <h2>8. Contacto</h2>
        <p>Se tiver dúvidas sobre a utilização de cookies no nosso site, ou se pretender exercer os seus direitos relativos ao tratamento de dados pessoais associados a cookies, pode contactar-nos através do endereço eletrónico <strong>info@apostasegura.live</strong>. Para informações mais abrangentes sobre como tratamos os seus dados pessoais, consulte a nossa <a href="/privacy-policy" style={{ color: '#10b981' }}>Política de Privacidade</a>.</p>
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
