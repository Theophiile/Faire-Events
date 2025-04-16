import './Events.scss';

// Utilisation des mêmes données que dans Home pour l'instant
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

const Events = () => {
  return (
    <div className="events-page">
      <div className="container">
        <h1>Nos Événements à Venir</h1>
        
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
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
                <button className="cta-button">
                  Voir détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 