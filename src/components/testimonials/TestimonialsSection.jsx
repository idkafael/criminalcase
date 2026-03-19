import React from 'react';
import TestimonialCard from './TestimonialCard.jsx';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-badge">Depoimentos</span>
          <h2 className="section-title section-title--sm">O Que Dizem Nossos Detetives</h2>
          <p className="section-subtitle">Experiências reais de quem já viveu nossos mistérios</p>
        </div>

        <div className="testimonials-grid" aria-label="Avaliações dos jogadores">
          <TestimonialCard
            quote="Perfeito para nossa noite de jogos! Passamos horas investigando o caso da Margot com vinho e petiscos. Foi melhor que qualquer programa tradicional!"
            avatarSrc="https://cacadoresdemisteriosbrasil.com/caso_margot/avatares/julia.jpg"
            avatarAlt="Avatar do jogador 1"
            name="Ana e Pedro"
            gameHref="/caso_margot"
            gameTitle="O Sequestro de Margot Kingslay"
          />
          <TestimonialCard
            quote="Os detalhes são impressionantes! Fizemos um quadro de investigação na sala e nos sentimos em um verdadeiro filme noir. O caso do Dr. Warren é genial!"
            avatarSrc="https://cacadoresdemisteriosbrasil.com/caso_philipwarren/avatares/samuel.jpg"
            avatarAlt="Avatar do jogador 2"
            name="Marcus Silva"
            gameHref="/caso_philipwarren"
            gameTitle="Espelho Quebrado"
          />
          <TestimonialCard
            quote="Joguei com meu grupo de amigas e foi uma noite inesquecível! O caso da Emma tem reviravoltas que ninguém esperava. Já queremos jogar os outros!"
            avatarSrc="https://cacadoresdemisteriosbrasil.com/caso_emma/avatares/julia.jpg"
            avatarAlt="Avatar do jogador 3"
            name="Renata Costa"
            gameHref="/caso_emma"
            gameTitle="O Caso Emma Collins"
          />
        </div>
      </div>
    </section>
  );
}

