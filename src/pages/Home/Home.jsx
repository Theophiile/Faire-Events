import { Link } from 'react-router-dom';
import EventCarousel from '../../components/EventCarousel/EventCarousel';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import './Home.scss';

// Import des données des événements (à déplacer vers un fichier séparé plus tard)
const events = [
  {
    id: 3,
    title: "Marché des Créateurs à Thônes",
    date: "Samedi 12 avril 2025 • 9h-18h\nSamedi 26 avril 2025 • 9h-18h",
    location: "Thônes",
    imageUrl: "/assets/images/thones.webp"
  },
  {
    id: 1,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 3 & dimanche 4 mai 2025 • 9h-18h",
    location: "Meythet",
    imageUrl: "/assets/images/maisongaia1.webp"
  },
  {
    id: 4,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 7 & dimanche 8 juin 2025 • 9h-18h",
    location: "Meythet",
    imageUrl: "/assets/images/maisongaia2.webp"
  },
  {
    id: 2,
    title: "Marché des Créateurs à Veyrier-du-Lac",
    date: "Samedi 22 juin 2025 • 9h-18h",
    location: "Veyrier-du-Lac",
    imageUrl: "/assets/images/veyrier-du-lac.webp"
  }
];

const partners = [
  {
    id: 1,
    name: 'Estelle Lagarde',
    logo: '/assets/images/estellelagarde.webp'
  },
  {
    id: 2,
    name: 'Marie Sévrier',
    logo: '/assets/images/mairiesevrier.webp'
  },
  {
    id: 3,
    name: 'Mairie de Veyrier',
    logo: '/assets/images/mairieveyrier.webp'
  },
  {
    id: 4,
    name: 'Mairie de Thônes',
    logo: '/assets/images/mairiethones.webp'
  },
  {
    id: 5,
    name: 'Maison Gaia',
    logo: '/assets/images/maisongaialogo.webp'
  }
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="visually-hidden">Faire Events - Marchés de créateurs en Haute-Savoie</h1>
      
      <section className="hero">
        <EventCarousel events={events} />
      </section>

      <section className="intro">
        <div className="container">
          <h2>Bienvenue chez Faire Events</h2>
          <p>
            Découvrez nos marchés de créateurs locaux dans la région d'Annecy.
            Des événements uniques qui mettent en valeur le talent des artisans
            et créateurs de notre région.
          </p>
          <Link to="/events" className="cta-button">
            Voir tous nos événements
          </Link>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2>Nos Partenaires</h2>
          <LogoSlider logos={partners} />
        </div>
      </section>
    </div>
  );
};

export default Home; 