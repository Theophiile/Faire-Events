import logo from '/assets/logos/faire-events.webp';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="Faire-Events" className="footer-logo" />
    <p className="copyright">© 2024 Faire Events - Tous droits réservés <br />Site créé par Théophile Pinto</p>
  </footer>
);

export default Footer; 