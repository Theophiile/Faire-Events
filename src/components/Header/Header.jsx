import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo-link">
          <img src="/assets/logos/faire-logo.webp" alt="Faire Events" className="logo" />
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={toggleMenu}>
            Accueil
          </NavLink>
          <NavLink to="/events" onClick={toggleMenu}>
            Événements
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            À propos
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header; 