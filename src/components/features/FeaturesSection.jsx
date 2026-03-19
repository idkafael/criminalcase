import React from 'react';
import FeatureCard from './FeatureCard.jsx';

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-badge">Como Funciona</span>
          <h2 className="section-title">Uma Experiência Imersiva</h2>
          <p className="section-subtitle">Tudo que você precisa para se tornar um verdadeiro detetive</p>
        </div>

        <div className="features-grid" aria-label="Passos do jogo">
          <FeatureCard
            iconClass="fas fa-download feature-icon"
            title="Baixe os Arquivos"
            description="Receba todos os documentos do caso: fotos, depoimentos, provas forenses e pistas cruciais para sua investigação."
          />
          <FeatureCard
            iconClass="fas fa-search feature-icon"
            title="Investigue as Pistas"
            description="Analise cada detalhe, conecte as evidências e construa sua teoria. Cada pista pode ser a chave para resolver o mistério."
          />
          <FeatureCard
            iconClass="fas fa-users feature-icon"
            title="Interrogue Suspeitos"
            description="Leia depoimentos contraditórios, identifique mentiras e descubra os segredos que cada personagem esconde."
          />
          <FeatureCard
            iconClass="fas fa-lightbulb feature-icon"
            title="Resolva o Caso"
            description="Use sua dedução para identificar o culpado e descobrir a verdade por trás do crime. A solução está em suas mãos."
          />
        </div>
      </div>
    </section>
  );
}

