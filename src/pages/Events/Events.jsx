import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import './Events.scss';

// Utilisation des mêmes données que dans Home pour l'instant
const events = [
  {
    id: 3,
    title: "Marché des Créateurs à Thônes",
    date: "Samedi 12 avril 2025 • 9h-18h\nSamedi 26 avril 2025 • 9h-18h",
    location: "Thônes - Place Avet",
    imageUrl: "/assets/images/thones.webp",
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
    imageUrl: "/assets/images/maisongaia1.webp",
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
    imageUrl: "/assets/images/maisongaia2.webp",
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
    imageUrl: "/assets/images/veyrier-du-lac.webp",
    description: `Faire Events

Célébrez l'Artisanat Local : Marché de Créateurs sur la Promenade du Quai Général Doyen à Veyrier-Du-Lac !

Cet été, Faire Events vous invite à vivre une expérience unique à travers quatre marchés de créateurs, nichés dans un cadre naturel exceptionnel.
Promenez-vous le long du lac et découvrez les talents d'artisans passionnés qui vous présenteront leurs œuvres : céramique, illustration, mode, maroquinerie, décoration d'intérieur, bijoux et douceurs gourmandes.

Ces événements estivaux sont une véritable vitrine de l'artisanat local, mettant en lumière la richesse et la diversité créative de notre région. Venez à la rencontre de créateurs inspirants et immergez-vous dans un monde d'authenticité et de savoir-faire !`
  },
  {
    id: 5,
    title: "Marché des Créateurs à Sévrier",
    date: "Dates à venir été 2025",
    location: "Sévrier",
    imageUrl: "/assets/images/panneausevrier.webp",
    description: `Faire Events

Nouveau ! Le Marché des Créateurs s'installe à Sévrier !

Faire Events est ravi d'annoncer l'arrivée prochaine d'un nouveau marché de créateurs dans le cadre enchanteur de Sévrier, au bord du lac d'Annecy.

Préparez-vous à découvrir une sélection d'artisans talentueux qui vous présenteront leurs créations uniques dans un cadre exceptionnel. Bijoux, céramiques, textiles, art, et bien d'autres créations vous attendent pour une expérience artistique inoubliable.

Les dates seront annoncées prochainement. Restez connectés pour ne pas manquer cet événement qui promet d'être une belle célébration de l'artisanat local !`
  },
  {
    id: 6,
    title: "Marché de Noël des Créateurs à Veyrier-du-Lac",
    date: "Dates à venir Noël 2025",
    location: "Veyrier-du-Lac",
    imageUrl: "/assets/images/veyriernoel.webp",
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

  return (
    <div className="events-page">
      <div className="container">
        <h1>Nos Événements</h1>
        <div className="events-grid">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`event-card ${event.id === 5 || event.id === 6 ? 'short-description' : ''}`}
            >
              <div className="event-image-container">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
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