import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ href, badgeText, coverSrc, coverAlt, title, tagline, description, stats }) {
  const isComplex = badgeText === 'COMPLEXO';
  const badgeClass =
    badgeText === 'BESTSELLER' ? 'game-badge game-badge--best' : badgeText === 'COMPLEXO' ? 'game-badge game-badge--complex' : 'game-badge';

  return (
    <article className="game-card" role="listitem">
      <div className="game-card-media">
        <img className="game-cover" src={coverSrc} alt={coverAlt} />
        <span className={badgeClass}>{badgeText}</span>
      </div>

      <div className="game-card-body">
        <h3 className="game-title">{title}</h3>
        <p className="game-tagline">
          <em>{tagline}</em>
        </p>

        <p className="game-description">{description}</p>

        <div className="game-divider" aria-hidden="true" />

        <div className="game-stats" aria-label="Estatísticas do jogo">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <Link className="game-card-cta" to={href}>
          Investigar Caso
        </Link>
      </div>
    </article>
  );
}

