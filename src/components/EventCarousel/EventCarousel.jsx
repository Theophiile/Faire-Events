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
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const autoPlayRef = useRef(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isMobile) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide(current => (current + 1) % events.length);
      }, 5000);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [events.length, isMobile]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(current => (current + 1) % events.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(current => (current - 1 + events.length) % events.length);
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

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
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
        {events.map((event, index) => {
          const isActive = index === currentSlide;
          const isPrev = (currentSlide === 0 && index === events.length - 1) || 
                        (index === currentSlide - 1);
          const isNext = (currentSlide === events.length - 1 && index === 0) || 
                        (index === currentSlide + 1);
          
          if (!isActive && !isPrev && !isNext) return null;
          
          return (
            <div
              key={event.id}
              className={`carousel-slide ${isActive ? 'active' : ''} ${
                direction > 0 ? 'slide-next' : 'slide-prev'
              }`}
              style={{
                display: 'block',
                transform: isActive ? 'translateX(0)' : 
                         (direction > 0 && isNext) ? 'translateX(100%)' :
                         (direction < 0 && isPrev) ? 'translateX(-100%)' : 'none'
              }}
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
          );
        })}
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
            onClick={() => goToSlide(index)}
            aria-label={`Aller à l'événement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel; 