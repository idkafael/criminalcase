import React, { useEffect, useRef, useState } from 'react';

export default function CasePageIframe({ slug }) {
  // Colocamos o HTML em `public/${slug}/index.html` para que os `src` relativos do HTML
  // continuem resolvendo como no site original.
  const src = `/${slug}/index.html`;

  const iframeRef = useRef(null);
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const recompute = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;
        const newHeight = Math.max(doc.documentElement.scrollHeight, doc.body?.scrollHeight || 0);
        if (newHeight && Number.isFinite(newHeight)) setHeight(`${newHeight}px`);
      } catch {
        // Se não for possível acessar o DOM do iframe (ex.: cross-origin), mantém 100vh.
      }
    };

    const onLoad = () => {
      recompute();
      // Atualiza de novo após layout/recursos
      setTimeout(recompute, 500);
    };

    iframe.addEventListener('load', onLoad);
    return () => iframe.removeEventListener('load', onLoad);
  }, [src]);

  return (
    <div style={{ width: '100%' }}>
      <iframe
        ref={iframeRef}
        title={`Página do caso: ${slug}`}
        src={src}
        style={{
          width: '100%',
          height,
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}

