import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';

export default function DetectivesInActionSection() {
  const images = [
    {
      src: '/assets/detetives%20%281%29.png',
      alt: 'Detetives em ação (imagem 1)',
    },
    {
      src: '/assets/detetives%20%282%29.png',
      alt: 'Detetives em ação (imagem 2)',
    },
    {
      src: '/assets/detetives%20%283%29.png',
      alt: 'Detetives em ação (imagem 3)',
    },
    {
      src: '/assets/detetives%20%284%29.png',
      alt: 'Detetives em ação (imagem 4)',
    },
  ];

  return (
    <section id="detectives-in-action" className="detectives-action-section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-badge">Imagens dos nossos detetives</span>
          <p className="section-subtitle">Momentos do jogo para inspirar sua próxima investigação</p>
        </div>

        <div className="detectives-carousel-wrap">
          <ImageCarousel images={images} />
        </div>
      </div>
    </section>
  );
}

