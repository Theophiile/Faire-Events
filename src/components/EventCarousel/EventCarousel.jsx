import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './EventCarousel.scss';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const EventCarousel = ({ events }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);
  const isMobile = useIsMobile();

  // Minimum distance for swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isMobile) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((current) => 
          current === events.length - 1 ? 0 : current + 1
        );
      }, 5000);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [events.length, isMobile]);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === events.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? events.length - 1 : current - 1
    );
  };

  const getSlideStyle = (index) => {
    let distance = index - currentSlide;
    
    // Ajuster la distance pour créer une transition fluide entre la dernière et la première image
    if (distance > events.length / 2) {
      distance -= events.length;
    } else if (distance < -events.length / 2) {
      distance += events.length;
    }

    return {
      transform: `translateX(${100 * distance}%)`
    };
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!events || events.length === 0) return null;

  return (
    <div 
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-container">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={getSlideStyle(index)}
          >
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="carousel-image"
            />
            <div className="carousel-content">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <Link to={`/events`} className="cta-button">
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="carousel-control prev" 
        onClick={prevSlide}
        aria-label="Événement précédent"
      >
        ‹
      </button>
      <button 
        className="carousel-control next" 
        onClick={nextSlide}
        aria-label="Événement suivant"
      >
        ›
      </button>

      <div className="carousel-indicators">
        {events.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Aller à l'événement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel; 