import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../components/Modal/Modal';
import './Events.scss';

// Utilisation des mêmes données que dans Home pour l'instant
const events = [
  {
    id: 3,
    title: "Marché des Créateurs à Thônes",
    date: "Samedi 12 avril 2025 • 9h-18h\nSamedi 26 avril 2025 • 9h-18h",
    location: "Thônes - Place Avet",
    imageUrl: "assets/images/thones.webp",
    description: `Faire Events

Découvrez l'authenticité de l'artisanat local au cœur de Thônes !

Rejoignez-nous sur la Place Avet pour deux journées exceptionnelles dédiées à la création artisanale. Dans ce cadre historique, venez à la rencontre d'artisans passionnés qui vous feront découvrir leurs créations uniques : bijoux, céramiques, textiles, art, et bien plus encore.

Ces marchés sont l'occasion parfaite de soutenir les créateurs locaux tout en profitant de l'ambiance chaleureuse de Thônes. Une expérience authentique qui célèbre le savoir-faire et la créativité de notre région !`
  },
  {
    id: 1,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 3 & dimanche 4 mai 2025 • 9h-18h",
    location: "Meythet - 31 route de Frangy",
    imageUrl: "assets/images/maisongaia1.webp",
    description: `Faire Events

Week-end Créatif à la Maison Gaia !

La Maison Gaia ouvre ses portes pour un week-end dédié à l'artisanat local. Dans ce lieu unique et inspirant, venez découvrir une sélection soignée de créateurs qui partagent notre passion pour l'authenticité et le fait-main.

Au programme : bijoux, accessoires, décoration, art, et de nombreuses autres créations originales. Une occasion unique de rencontrer les artisans, d'échanger sur leur savoir-faire et de trouver des pièces uniques qui racontent une histoire.`
  },
  {
    id: 4,
    title: "Marché des Créateurs à la Maison Gaia",
    date: "Samedi 7 & dimanche 8 juin 2025 • 9h-18h",
    location: "Meythet - 31 route de Frangy",
    imageUrl: "assets/images/maisongaia2.webp",
    description: `Faire Events

L'Art et l'Artisanat s'invitent à la Maison Gaia !

Pour cette nouvelle édition, nous vous proposons une expérience immersive dans l'univers de la création artisanale. La Maison Gaia accueille une sélection d'artisans talentueux qui vous présenteront leurs dernières créations.

Venez découvrir des pièces uniques, échanger avec les créateurs et vous laisser inspirer par leur passion. Un rendez-vous incontournable pour les amateurs d'artisanat authentique et de créations originales.`
  },
  {
    id: 2,
    title: "Marché des Créateurs à Veyrier-du-Lac",
    date: "Dimanche 22 juin 2025 • 10h-19h\nDimanche 20 juillet 2025 • 10h-19h\nDimanche 24 août 2025 • 10h-19h\nDimanche 14 septembre 2025 • 10h-19h",
    location: "Veyrier-du-Lac - Quai Général Doyen",
    imageUrl: "assets/images/veyrier-du-lac.webp",
    description: `Faire Events

Célébrez l'Artisanat Local : Marché de Créateurs sur la Promenade du Quai Général Doyen à Veyrier-Du-Lac !

Cet été, Faire Events vous invite à vivre une expérience unique à travers quatre marchés de créateurs, nichés dans un cadre naturel exceptionnel.
Promenez-vous le long du lac et découvrez les talents d'artisans passionnés qui vous présenteront leurs œuvres : céramique, illustration, mode, maroquinerie, décoration d'intérieur, bijoux et douceurs gourmandes.

Ces événements estivaux sont une véritable vitrine de l'artisanat local, mettant en lumière la richesse et la diversité créative de notre région. Venez à la rencontre de créateurs inspirants et immergez-vous dans un monde d'authenticité et de savoir-faire !`
  },
  {
    id: 5,
    title: "Marché des Créateurs à Sévrier",
    date: "Mardi 08 juillet 2025 • 16h-22h\nMardi 22 juillet 2025 • 16h-22h\nMardi 05 août 2025 • 16h-22h\nMardi 19 août 2025 • 16h-22h",
    location: "Sévrier - Place de la mairie",
    imageUrl: "assets/images/marchesevrier.webp",
    description: `Faire Events

Marché Nocturne des Créateurs à Sévrier !

Faire Events est ravi de vous présenter son nouveau marché nocturne des créateurs dans le cadre enchanteur de Sévrier, au bord du lac d'Annecy. Quatre soirées estivales exceptionnelles vous attendent pour découvrir l'artisanat local dans une ambiance unique.

Profitez des douces soirées d'été pour venir à la rencontre d'artisans passionnés qui vous présenteront leurs créations uniques : bijoux, céramiques, textiles, art, et bien d'autres créations originales. Un moment privilégié pour soutenir les talents locaux tout en profitant de la fraîcheur du soir.

Rejoignez-nous les mardis soirs de juillet et août pour une expérience artistique inoubliable au cœur de Sévrier !`
  },
  {
    id: 6,
    title: "Marché de Noël des Créateurs à Veyrier-du-Lac",
    date: "Dates à venir Noël 2025",
    location: "Veyrier-du-Lac",
    imageUrl: "assets/images/veyriernoel.webp",
    description: `Faire Events

La Magie de Noël s'invite au Marché des Créateurs de Veyrier-du-Lac !

Pour célébrer la période des fêtes, Faire Events vous convie à un marché de Noël exceptionnel sur les rives du lac d'Annecy. Dans une ambiance féérique et chaleureuse, venez découvrir les créations uniques de nos artisans locaux.

Au programme : créations artisanales, décorations de Noël faites main, bijoux, accessoires, art et bien d'autres trésors qui feront des cadeaux parfaits pour les fêtes. Laissez-vous porter par la magie de Noël tout en soutenant les créateurs de notre région.

Les dates exactes seront annoncées prochainement. Un rendez-vous hivernal à ne pas manquer pour trouver des cadeaux originaux et authentiques !`
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  // Fonction pour générer des textes alternatifs descriptifs
  const getImageAltText = (event) => {
    if (event.id === 1) return "Espace verdoyant de la Maison Gaia à Meythet, région d'Annecy pour l'événement de mai 2025";
    if (event.id === 4) return "Vue extérieure de la Maison Gaia à Meythet près d'Annecy pour le marché des créateurs de juin 2025";
    if (event.id === 2) return "Vue du quai Général Doyen à Veyrier-du-Lac sur les bords du lac d'Annecy";
    if (event.id === 3) return "Marché des créateurs, Place Avet au centre de Thônes en Haute-Savoie près d'Annecy";
    if (event.id === 5) return "Vue du marché des créateurs à Sévrier au bord du lac d'Annecy";
    if (event.id === 6) return "Ambiance de Noël pour un marché des créateurs à Veyrier-du-Lac sur les rives du lac d'Annecy";
    
    return `Illustration pour ${event.title} dans la région d'Annecy`; // Fallback
  };

  return (
    <div className="events-page">
      <Helmet>
        <title>Événements et Marchés de Créateurs à Annecy | Faire Events</title>
        <meta name="description" content="Découvrez tous les marchés de créateurs et événements artistiques organisés par Faire Events à Annecy et dans toute la Haute-Savoie. Dates, lieux et informations pratiques." />
        <meta property="og:title" content="Événements et Marchés de Créateurs | Faire Events" />
        <meta property="og:description" content="Découvrez tous les marchés de créateurs et événements artistiques organisés par Faire Events à Annecy et dans toute la Haute-Savoie. Dates, lieux et informations pratiques." />
        <meta property="og:image" content="https://faire-events.fr/assets/images/thones.webp" />
        <meta property="og:url" content="https://faire-events.fr/events" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container">
        <h1>Nos Événements</h1>
        <h2 className="events-subtitle">Calendrier 2025 des marchés de créateurs</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`event-card ${event.id === 5 || event.id === 6 ? 'short-description' : ''} ${event.id === 3 ? 'event-ended' : ''}`}
            >
              <div className="event-image-container">
                <img 
                  src={event.imageUrl} 
                  alt={getImageAltText(event)}
                  className="event-image"
                />
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-info">
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                </div>
                <button 
                  className="cta-button"
                  onClick={() => handleEventClick(event)}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedEvent !== null}
        onClose={handleCloseModal}
        onConfirm={handleCloseModal}
        title={selectedEvent?.title}
        message={selectedEvent?.description}
        showConfirmButton={false}
        showCloseButton={true}
      />
    </div>
  );
};

export default Events; 