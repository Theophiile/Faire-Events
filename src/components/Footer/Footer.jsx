import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo-section">
          <img src="/assets/logos/faire-logo.webp" alt="Faire Events" className="footer-logo" />
          <div className="social-links">
            <a 
              href="https://www.facebook.com/people/Faire-Events/100092213289568/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link facebook"
              aria-label="Facebook"
            />
            <a 
              href="https://www.instagram.com/faire_events/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            />
          </div>
        </div>
        <div className="footer-text">
          <p className="copyright">
            © {new Date().getFullYear()} Faire Events - Tous droits réservés
          </p>
          <p className="credits">
            Site créé par <a href="#" className="portfolio-link">Théophile Pinto</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 