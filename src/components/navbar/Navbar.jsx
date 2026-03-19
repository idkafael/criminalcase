import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Navegação principal">
      <div className="navbar-container container">
        <a className="logo" href="#top" aria-label="Caçadores de Mistérios">
          <span className="logo-text">Caçadores de Mistérios</span>
        </a>

        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className="fas fa-bars" aria-hidden="true" />
        </button>

        <ul className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`} aria-label="Links do menu">
          <li>
            <a className="nav-link" href="#jogos" onClick={() => setMenuOpen(false)}>
              Nossos Jogos
            </a>
          </li>
          <li>
            <a className="nav-link" href="#features" onClick={() => setMenuOpen(false)}>
              Como Funciona
            </a>
          </li>
          <li>
            <a className="nav-link" href="#testimonials" onClick={() => setMenuOpen(false)}>
              Depoimentos
            </a>
          </li>
          <li>
            <a className="nav-cta" href="/caso_margot" onClick={() => setMenuOpen(false)}>
              Jogar Agora
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

