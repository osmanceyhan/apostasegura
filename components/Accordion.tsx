'use client';

const ITEMS = [
  { q: 'O Aposta Segura é gratuito?', a: 'Sim. Comparamos ofertas de casino sem qualquer custo para o utilizador. Somos financiados por comissões de afiliados quando os leitores se registam num operador.' },
  { q: 'Os operadores listados são legais em Portugal?', a: 'Todos os operadores apresentados possuem licença SRIJ ativa. Verificamos cada licença no registo público antes de listar.' },
  { q: 'Como são selecionadas as ofertas?', a: 'Testamos cada operador pessoalmente: depósito, jogo e levantamento. Apenas operadores que pagam em 24 horas e têm termos transparentes ficam na lista.' },
  { q: 'O que fazer se o jogo se tornar um problema?', a: 'Contacte o SOS Jogo no 800 202 175 (gratuito, 24h) ou visite jogadoresseguros.pt para apoio confidencial.' },
];

export default function Accordion() {
  return (
    <section className="as-accordion">
      <h2 className="as-accordion-title">Perguntas Frequentes</h2>
      {ITEMS.map((item, i) => (
        <details key={i} className="as-accordion-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
