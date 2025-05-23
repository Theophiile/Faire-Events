import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import EventCarousel from '../../components/EventCarousel/EventCarousel';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Modal from '../../components/Modal/Modal';
import './Home.scss';

// Import des données des événements (à déplacer vers un fichier séparé plus tard)
const events = [
  {
    id: 2,
    title: "Marché des Créateurs à Veyrier-du-Lac",
    date: "Samedi 22 juin 2025 • 9h-18h",
    location: "Veyrier-du-Lac - Quai Général Doyen",
    imageUrl: "assets/images/veyrier-du-lac.webp"
  },
  {
    id: 5,
    title: "Marché Nocturne des Créateurs à Sévrier",
    date: "Mardi 08 juillet 2025 • 16h-22h",
    location: "Sévrier - Place de la mairie",
    imageUrl: "assets/images/marchesevrier.webp"
  }
];

const galleryImages = [
  {
    url: '/assets/images/photorecap/plasticienne.webp',
    description: 'Artiste plasticienne d\'Annecy présentant ses créations.'
  },
  {
    url: '/assets/images/photorecap/portraitiste.webp',
    description: 'Portraitiste en pleine création lors d\'un événement à Thônes.'
  },
  {
    url: '/assets/images/photorecap/Estelle Lagarde.webp',
    description: 'Estelle Lagarde, créatrice de bijoux et fondatrice de la marque Lagarde, présente ses créations lors d\'un événement à Thônes.'
  },
  {
    url: '/assets/images/photorecap/Estelle cours.webp',
    description: 'Atelier d\'initiation au gouaché de haute joaillerie animé par Estelle Lagarde.'
  },
  {
    url: '/assets/images/photorecap/eco-responsable.webp',
    description: 'Stand de décorations éco-responsables réalisé par une créatrice d\'Annecy.'
  },
  {
    url: '/assets/images/photorecap/linogravure.webp',
    description: 'Exposition de linogravure par une artiste plasticienne de Chambéry.'
  },
  {
    url: '/assets/images/photorecap/gemmologue.webp',
    description: 'Démonstration de taille de pierres précieuses par une lapidaire/gemmologue.'
  },
  {
    url: '/assets/images/photorecap/estellebijoux.webp',
    description: 'Pièce unique de haute joaillerie de la marque Lagarde, présentée lors d\'un événement à Thônes.'
  },
  {
    url: '/assets/images/photorecap/ateliercreatif.webp',
    description: 'Atelier créatif ouvert aux enfants lors d\'un événement à Veyrier-du-Lac.'
  },
  {
    url: '/assets/images/photorecap/affichethones.webp',
    description: 'Salon des créateurs de Thônes, près d\'Annecy.'
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
  }
];

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6);

  return (
    <div className="home">
      <Helmet>
        <title>Faire Events - Marchés de créateurs à Annecy</title>
        <meta name="description" content="Découvrez les marchés de créateurs Faire Events à Annecy et dans toute la Haute-Savoie. Des événements uniques qui célèbrent l'artisanat local et mettent en valeur le talent des artisans de notre région." />
        <meta property="og:title" content="Faire Events - Marchés de créateurs à Annecy" />
        <meta property="og:description" content="Découvrez les marchés de créateurs Faire Events à Annecy et dans toute la Haute-Savoie. Des événements uniques qui célèbrent l'artisanat local." />
        <meta property="og:image" content="https://faire-events.fr/assets/logos/faire-logo.webp" />
        <meta property="og:url" content="https://faire-events.fr" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <h1 className="visually-hidden">Faire Events - Marchés de créateurs à Annecy</h1>
      
      <section className="hero">
        <EventCarousel events={events} />
      </section>

      <section className="intro">
        <div className="container">
          <h2>Bienvenue chez Faire Events</h2>
          <p>
            Découvrez nos marchés de créateurs à Annecy et dans toute la Haute-Savoie.
            Des événements uniques qui mettent en valeur le talent des artisans
            et créateurs de notre région.
          </p>
          <Link to="/events" className="cta-button">
            Voir tous nos événements
          </Link>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Nos événements en images</h2>
          <p className="gallery-intro">
            Découvrez nos marchés de créateurs à travers ces moments capturés lors de nos précédents événements.
          </p>
          <div className="events-preview-grid">
            {displayedImages.map((image, index) => (
              <div 
                key={index} 
                className="event-card-preview"
                onClick={() => handleEventClick({
                  title: "",
                  description: image.description,
                  imageUrl: image.url
                })}
              >
                <div className="event-image-container">
                  <img 
                    src={image.url} 
                    alt={image.description}
                    className="event-image"
                  />
                </div>
              </div>
            ))}
          </div>
          {!showAllImages && galleryImages.length > 6 && (
            <button 
              className="voir-plus-button" 
              onClick={() => setShowAllImages(true)}
            >
              Voir plus d'images
            </button>
          )}
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2>Nos Partenaires</h2>
          <LogoSlider logos={partners} />
        </div>
      </section>

      <Modal
        isOpen={selectedEvent !== null}
        onClose={handleCloseModal}
        onConfirm={handleCloseModal}
        title={selectedEvent?.title}
        message={selectedEvent?.description}
        showConfirmButton={false}
        showCloseButton={true}
        imageUrl={selectedEvent?.imageUrl}
      />
    </div>
  );
};

export default Home; 