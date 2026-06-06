'use client';
import { useState, useEffect } from 'react';

export default function CookieBar() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem('as_cookie_v1')) setShow(true); }, []);
  if (!show) return null;
  return (
    <div className="as-cookie">
      <p>Este site utiliza cookies essenciais. <a href="/cookie-policy" style={{ color: '#10b981' }}>Saber mais</a></p>
      <button onClick={() => { localStorage.setItem('as_cookie_v1', '1'); setShow(false); }}>OK</button>
    </div>
  );
}
