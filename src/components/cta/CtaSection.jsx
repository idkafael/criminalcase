import React from 'react';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <i className="fas fa-magnifying-glass cta-icon" aria-hidden="true" />
        <h2 className="cta-title">Pronto para Uma Noite de Mistério?</h2>
        <p className="cta-subtitle">Surpreenda com uma experiência única e inesquecível</p>
        <a className="cta-button" href="#jogos">
          <i className="fas fa-play cta-play" aria-hidden="true" />
          Começar Investigação Agora
        </a>
      </div>
    </section>
  );
}

