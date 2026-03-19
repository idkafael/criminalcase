import React from 'react';
import { Link } from 'react-router-dom';

export default function TestimonialCard({
  quote,
  avatarSrc,
  avatarAlt,
  name,
  gameHref,
  gameTitle,
}) {
  return (
    <article className="testimonial-card">
      <div className="quote-mark" aria-hidden="true">
        “
      </div>

      <div className="stars" aria-label="Avaliação 5 estrelas">
        <i className="fas fa-star star" aria-hidden="true" />
        <i className="fas fa-star star" aria-hidden="true" />
        <i className="fas fa-star star" aria-hidden="true" />
        <i className="fas fa-star star" aria-hidden="true" />
        <i className="fas fa-star star" aria-hidden="true" />
      </div>

      <p className="testimonial-quote">{quote}</p>

      <div className="testimonial-meta">
        <img className="testimonial-avatar" src={avatarSrc} alt={avatarAlt} />
        <div className="testimonial-names">
          <div className="testimonial-name">{name}</div>
          <Link className="testimonial-game" to={gameHref}>
            {gameTitle}
          </Link>
        </div>
      </div>
    </article>
  );
}

