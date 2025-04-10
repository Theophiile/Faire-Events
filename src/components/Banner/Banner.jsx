import { Link } from 'react-router-dom';
import './Banner.scss';

const Banner = () => (
  <section className="banner" style={{ background: 'linear-gradient(rgba(240, 239, 235, 0.8), rgba(240, 239, 235, 0.8))' }}>
    <h1>Marchés de créateurs locaux</h1>
    <Link to="/events" className="cta-button">Voir les événements</Link>
  </section>
);

export default Banner;