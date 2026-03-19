import React, { useMemo, useState } from 'react';

function clampIndex(i, len) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

export default function ImageCarousel({ images }) {
  const slides = useMemo(() => images || [], [images]);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((v) => clampIndex(v - 1, slides.length));
  const next = () => setIndex((v) => clampIndex(v + 1, slides.length));

  if (!slides.length) return null;

  return (
    <div className="detectives-carousel" role="region" aria-label="Carrossel de imagens">
      <div className="detectives-carousel-viewport">
        <div
          className="detectives-carousel-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((img, i) => (
            <div className="detectives-carousel-slide" key={`${img.src}-${i}`}>
              <img
                className={
                  `detectives-carousel-img ` +
                  (i === 0 ? 'detectives-carousel-img--zoom-out-0' : i === 1 ? 'detectives-carousel-img--zoom-out-1' : '')
                }
                src={img.src}
                alt={img.alt || 'Imagem dos detetives'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="detectives-carousel-controls" aria-label="Controles do carrossel">
        <button className="detectives-carousel-arrow" type="button" aria-label="Imagem anterior" onClick={prev}>
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </button>

        <div className="detectives-carousel-dots" aria-label="Seleção do carrossel">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`detectives-carousel-dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Ir para a imagem ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button className="detectives-carousel-arrow" type="button" aria-label="Próxima imagem" onClick={next}>
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

