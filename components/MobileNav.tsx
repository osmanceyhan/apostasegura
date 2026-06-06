'use client';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="as-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? 'as-burger-x' : ''} />
      </button>
      {open && (
        <>
          <div className="as-mobile-overlay" onClick={() => setOpen(false)} />
          <nav className="as-mobile-menu">
            <a href="#ofertas" onClick={() => setOpen(false)}>Ofertas</a>
            <a href="#seguranca" onClick={() => setOpen(false)}>Seguranca</a>
            <a href="/responsible-gambling" onClick={() => setOpen(false)}>Jogo Responsavel</a>
          </nav>
        </>
      )}
    </>
  );
}
