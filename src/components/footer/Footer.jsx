import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Caçadores de Mistérios</h3>
            <p>Transformando noites comuns em investigações extraordinárias. Cada caso é uma nova aventura esperando para ser desvendada.</p>

          <div className="footer-social" aria-label="Redes sociais">
            <a className="social-icon" href="#" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a className="social-icon" href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a className="social-icon" href="#" aria-label="TikTok">
              <i className="fab fa-tiktok" aria-hidden="true" />
            </a>
            <a className="social-icon" href="#" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>NOSSOS JOGOS</h4>
            <Link to="/caso_margot">O Sequestro de Margot Kingslay</Link>
            <Link to="/caso_emma">O Caso Emma Collins</Link>
            <Link to="/caso_philipwarren">Espelho Quebrado</Link>
          </div>

          <div className="footer-col">
            <h4>SUPORTE</h4>
            <a href="#">Como Jogar</a>
            <a href="#">FAQ</a>
            <a href="#">Contato</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>

      <div className="footer-copy container">© 2025 Caçadores de Mistérios. Todos os direitos reservados.</div>
    </footer>
  );
}

