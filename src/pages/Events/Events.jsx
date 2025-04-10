import { useMemo } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/evenements.json';
import './Events.scss';

const Events = () => {
  const events = useMemo(() => {
    return eventsData.map(event => ({
      ...event,
      formattedDate: new Date(event.date).toLocaleDateString('fr-FR'),
      // Modification clé ici :
      imageUrl: `${import.meta.env.BASE_URL}${event.imageUrl.startsWith('/') 
        ? event.imageUrl.substring(1) 
        : 'assets/images/' + event.imageUrl}`
    }));
  }, []);

  return (
    <div className="events-page">
      <h1>Nos Événements à Venir</h1>
      
      {events.length === 0 ? (
        <p className="no-events">Aucun événement prévu pour le moment</p>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <EventCard 
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.formattedDate || event.date}
              location={event.location}
              imageUrl={event.imageUrl} // Utilisation du chemin corrigé
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;