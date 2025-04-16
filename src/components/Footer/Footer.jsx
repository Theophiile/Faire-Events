import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <img src="/assets/logos/faire-logo.jpg" alt="Faire Events" className="footer-logo" />
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