import React from 'react';

export default function FeatureCard({ iconClass, title, description }) {
  return (
    <div className="feature-card">
      <i className={iconClass + ' feature-icon'} aria-hidden="true" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

