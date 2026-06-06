type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_eur: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

const LOGO_MAP: Record<string, string> = {
  'bwin': '/logos/operators/bwin.jpg',
  'betclic': '/logos/operators/betclic.png',
  '888': '/logos/operators/888.png',
  'bacanaplay': '/logos/operators/bacanaplay.png',
  'solverde': '/logos/operators/solverde.png',
};

export default function OfferCard({ offer }: { offer: Offer }) {
  const logoSrc = offer.logo_url || LOGO_MAP[offer.slug] || '';

  return (
    <article className="as-card">
      <div className="as-card-logo">
        {logoSrc ? (
          <img src={logoSrc} alt={offer.display_name} loading="lazy" />
        ) : (
          <span className="as-card-logo-fallback">{offer.display_name}</span>
        )}
      </div>
      <div className="as-card-top">
        <h3 className="as-card-name">{offer.display_name}</h3>
        <span className="as-card-rating">{offer.rating.toFixed(1)}</span>
      </div>
      <p className="as-card-bonus">{offer.bonus_headline}</p>
      <ul className="as-card-features">
        {offer.feature_bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="as-card-pay">
        {offer.payment_methods.map(p => <span key={p}>{p}</span>)}
      </div>
      <p className="as-card-meta">Mín. {offer.min_deposit_eur}€ · {offer.min_wager_terms}</p>
      <a className="as-card-cta" href={offer.tracker_url} target="_blank" rel="nofollow sponsored noopener">Ver Oferta</a>
      <p className="as-card-tc">18+ · T&Cs Apply</p>
    </article>
  );
}
