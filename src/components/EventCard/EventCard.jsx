import './EventCard.scss';

const EventCard = ({ id, title, date, location, imageUrl }) => {
    return (
      <div className="event-card">
        <div className="event-image-container">
          <img 
            src={imageUrl} 
            alt={`Événement: ${title}`}
            className="event-image"
          />
        </div>
        
        <div className="event-details">
          <h3 className="event-title">{title}</h3>
          
          <div className="event-meta">
            <p className="event-date">{date}</p>
            <p className="event-location">{location}</p>
          </div>
          
          <button className="cta-button" style={{ border: 'none' }}>
            Voir détails
          </button>
        </div>
      </div>
    );
  };

export default EventCard;