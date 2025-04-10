import { Link } from 'react-router-dom';
import logo from '/assets/logos/faire-events.webp';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} alt="Faire-Events" className="header-logo" />
    </Link>
    <nav className="header-nav">
      <Link to="/events">Événements</Link>
      <Link to="/about">À propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;