import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <i className="fas fa-magnifying-glass cta-icon" aria-hidden="true" />
        <h2 className="cta-title">Pronto para Uma Noite de Mistério?</h2>
        <p className="cta-subtitle">Surpreenda com uma experiência única e inesquecível</p>
        <Link className="cta-button" to="/#jogos">
          <i className="fas fa-play cta-play" aria-hidden="true" />
          Começar Investigação Agora
        </Link>
      </div>
    </section>
  );
}

