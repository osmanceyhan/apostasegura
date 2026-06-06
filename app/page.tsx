import { headers } from 'next/headers';
import OfferCard from '@/components/OfferCard';
import Accordion from '@/components/Accordion';
import offersData from '@/data/offers.json';

type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_eur: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

async function loadDeals(): Promise<{ deals: Offer[]; isBlack: boolean }> {
  try {
    const h = await headers();
    const sp = h.get('x-search-params') || '';
    if (sp.includes('_t=black')) {
      const host = h.get('host') || '';
      const domain = process.env.SITE_DOMAIN || host.split(':')[0];
      const res = await fetch(`https://cassatrack.live/api/v1/deals?domain=${encodeURIComponent(domain)}&type=black`, { headers: { Accept: 'application/json' }, cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        const raw = json?.data?.deals || json?.deals || [];
        if (Array.isArray(raw) && raw.length > 0) {
          return { deals: raw.map((d: any) => {
            const b = d.brand || {};
            const pm = Array.isArray(d.payment_methods) ? d.payment_methods.map((p: any) => typeof p === 'string' ? p : p.name || '') : [];
            return { slug: b.slug || d.slug || String(d.id), display_name: d.name || b.name || '', brand_color: b.brand_color || '#10b981', rating: Math.min(5, Number(d.rate) || 0), bonus_headline: `${d.bonus || ''} ${d.bonus_value || ''}`.trim() || 'Oferta de boas-vindas', feature_bullets: pm.length > 0 ? [`Aceita ${pm.slice(0, 2).join(' e ')}`, 'Revisão editorial', 'Levantamentos rápidos'] : ['Operador licenciado', 'Revisão editorial', 'Levantamentos rápidos'], payment_methods: pm.length > 0 ? pm.slice(0, 5) : ['Visa', 'Mastercard'], min_deposit_eur: Number(d.min_deposit) || 10, min_wager_terms: d.terms || '18+ T&Cs', tracker_url: d.link || '', logo_url: d.img || '' };
          }), isBlack: true };
        }
      }
    }
  } catch {}
  return { deals: offersData.offers as Offer[], isBlack: false };
}

export default async function HomePage() {
  const { deals } = await loadDeals();

  return (
    <>
      <header className="as-nav">
        <div className="as-nav-inner">
          <a href="/" className="as-nav-brand">Aposta<span>Segura</span></a>
          <nav className="as-nav-links">
            <a href="#ofertas">Ofertas</a>
            <a href="#seguranca">Segurança</a>
            <a href="/responsible-gambling">Jogo Responsável</a>
          </nav>
        </div>
      </header>

      <section className="as-hero">
        <div className="as-hero-inner">
          <h1>Ofertas de casino verificadas para Portugal.</h1>
          <p className="as-hero-sub">Cinco operadores SRIJ comparados com termos transparentes. Apenas para adultos 18+.</p>
        </div>
      </section>

      <main className="as-section">
        <section className="as-offers" id="ofertas">
          <div className="as-offers-head">
            <h2 className="as-offers-title">Ofertas da Semana</h2>
            <span className="as-offers-date">Atualizado junho 2026</span>
          </div>
          <div className="as-grid">
            {deals.map((o, i) => <OfferCard key={o.slug} offer={o} />)}
          </div>
          <p className="as-note">Aposta Segura é um site de comparação afiliado, não um operador de jogo. 18+, jogue com responsabilidade.</p>
        </section>

        <section className="as-steps">
          <h2 className="as-steps-title">Como escolhemos</h2>
          <div className="as-steps-grid">
            <div className="as-step">
              <div className="as-step-num">01</div>
              <h3>Licença SRIJ</h3>
              <p>Verificamos cada operador no registo público do SRIJ antes de listar.</p>
            </div>
            <div className="as-step">
              <div className="as-step-num">02</div>
              <h3>Teste real</h3>
              <p>Depositamos, jogamos e levantamos. Apenas operadores que pagam em 24h ficam.</p>
            </div>
            <div className="as-step">
              <div className="as-step-num">03</div>
              <h3>Termos claros</h3>
              <p>Rollover, limites e prazos traduzidos para linguagem simples.</p>
            </div>
          </div>
        </section>

        <section className="as-safety" id="seguranca">
          <h2 className="as-safety-title">Licenciamento e Segurança</h2>
          <div className="as-safety-grid">
            <div className="as-safety-block">
              <h3>Regulação SRIJ</h3>
              <p>O SRIJ supervisiona todos os operadores de jogo online em Portugal, garantindo proteção do jogador, fundos segregados e software RNG certificado.</p>
            </div>
            <div className="as-safety-block">
              <h3>Divulgação</h3>
              <p>Este site destina-se a adultos 18+. O jogo comporta riscos. Alguns links são de afiliados. Se o jogo se tornar problemático, ligue <strong>800 202 175</strong> (SOS Jogo, gratuito).</p>
            </div>
          </div>
          <div className="as-partners">
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener"><img src="/logos/safety/gambleaware.svg" alt="GambleAware" width="100" height="24" /></a>
            <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener"><img src="/logos/safety/srij.png" alt="SRIJ" width="80" height="24" /></a>
          </div>
        </section>

        <Accordion />
      </main>

      <footer className="as-footer">
        <div className="as-footer-inner">
          <div>
            <div className="as-footer-brand">Aposta<span>Segura</span></div>
            <p className="as-footer-text">Comparação independente de ofertas de casino para adultos portugueses 18+.</p>
            <p className="as-footer-text"><span className="as-footer-badge">18+</span> Jogue com responsabilidade. SOS Jogo: 800 202 175</p>
            <p className="as-footer-copy">&copy; 2026 Aposta Segura Lda.</p>
          </div>
          <div>
            <h4 className="as-footer-heading">Páginas</h4>
            <nav className="as-footer-links">
              <a href="/privacy-policy">Privacidade</a>
              <a href="/terms-and-conditions">Termos</a>
              <a href="/responsible-gambling">Jogo Responsável</a>
              <a href="/cookie-policy">Cookies</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
