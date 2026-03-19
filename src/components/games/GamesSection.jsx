import React from 'react';
import GameCard from './GameCard.jsx';

export default function GamesSection() {
  return (
    <section id="jogos" className="games-section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-badge">Catálogo Completo</span>
          <h2 className="section-title">Escolha Seu Mistério</h2>
          <p className="section-subtitle">Cada caso é uma experiência única de investigação</p>
        </div>

        <div className="games-grid" role="list" aria-label="Catálogo de jogos">
          <GameCard
            href="/caso_margot"
            badgeText="NOVO"
            coverSrc="https://cacadoresdemisteriosbrasil.com/casomargot.png"
            coverAlt="O Sequestro de Margot Kingslay"
            title="O Sequestro de Margot Kingslay"
            tagline="Romance e mistério se entrelaçam"
            description="Durante sua luxuosa festa de noivado, Margot Kingslay desaparece sem deixar rastros. Entre champagne e segredos, vocês devem descobrir o que aconteceu antes que seja tarde demais."
            stats={[
              { value: '3-4h', label: 'Duração' },
              { value: '1-8', label: 'Jogadores' },
              { value: '5.0', label: 'Avaliação' },
            ]}
          />

          <GameCard
            href="/caso_emma"
            badgeText="BESTSELLER"
            coverSrc="https://cacadoresdemisteriosbrasil.com/casoemma.png"
            coverAlt="O Caso Emma Collins"
            title="O Caso Emma Collins"
            tagline="O desaparecimento que chocou a universidade"
            description="Uma estudante brilhante some após uma festa no campus. À medida que investigam, segredos perturbadores emergem das sombras da vida universitária."
            stats={[
              { value: '2-4h', label: 'Duração' },
              { value: '1-8', label: 'Jogadores' },
              { value: '4.9', label: 'Avaliação' },
            ]}
          />

          <GameCard
            href="/caso_philipwarren"
            badgeText="COMPLEXO"
            coverSrc="https://cacadoresdemisteriosbrasil.com/casophilip.webp"
            coverAlt="Espelho Quebrado"
            title="Espelho Quebrado"
            tagline="O assassinato do Dr. Philip Warren"
            description="Um renomado psiquiatra é encontrado morto em seu consultório. Oito suspeitos, cada um com segredos obscuros. A verdade está fragmentada como o espelho ao seu lado."
            stats={[
              { value: '3-5h', label: 'Duração' },
              { value: '1-8', label: 'Jogadores' },
              { value: '5.0', label: 'Avaliação' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

