import React, { useEffect } from 'react';

export default function CasePageIframe({ slug }) {
  const src = `/${slug}/index.html`;

  useEffect(() => {
    // Redireciona para a página estática do caso em página cheia.
    // Isso evita bloqueios de checkout por navegação dentro de iframe.
    window.location.assign(src);
  }, [src]);

  return null;
}

