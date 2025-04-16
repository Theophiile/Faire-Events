import { Link } from 'react-router-dom';
import EventCarousel from '../../components/EventCarousel/EventCarousel';
import './Home.scss';

// Import des données des événements (à déplacer vers un fichier séparé plus tard)
const events = [
  {
    id: 3,
    title: "Marché des Créateurs à Thônes",
    date: "Samedi 12 avril 2025 • 9h-18h\nSamedi 26 avril 2025 • 9h-18h",
    location: "Thônes",
    imageUrl: "/assets/images/thones.jpeg"
  },
  {
    id: 1,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 3 & dimanche 4 mai 2025 • 9h-18h",
    location: "Meythet",
    imageUrl: "/assets/images/maisongaia1.jpeg"
  },
  {
    id: 4,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 7 & dimanche 8 juin 2025 • 9h-18h",
    location: "Meythet",
    imageUrl: "/assets/images/maisongaia2.jpeg"
  },
  {
    id: 2,
    title: "Marché des Créateurs à Veyrier-du-Lac",
    date: "Samedi 22 juin 2025 • 9h-18h",
    location: "Veyrier-du-Lac",
    imageUrl: "/assets/images/veyrier-du-lac.jpeg"
  }
];

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home; 