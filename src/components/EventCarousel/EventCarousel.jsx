import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [loadedImages, setLoadedImages] = useState([0]); // Préchargement de la première image
  const autoPlayRef = useRef(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const minSwipeDistance = 50;

  useEffect(() => {
    // Précharger les images adjacentes au slide actuel
    const imagesToLoad = [
      currentSlide,
      (currentSlide + 1) % events.length,
      (currentSlide - 1 + events.length) % events.length
    ];
    
    setLoadedImages(prev => {
      const newLoadedImages = [...new Set([...prev, ...imagesToLoad])];
      return newLoadedImages;
    });

    // Précharger la première image dès le montage du composant
    if (events.length > 0 && !document.querySelector(`link[href="${events[0].imageUrl}"][rel="preload"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = events[0].imageUrl;
      document.head.appendChild(link);
    }

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
  }, [events.length, isMobile, currentSlide, events]);

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
      role="region"
      aria-label="Carrousel des événements"
    >
      <div className="carousel-container">
        {events.map((event, index) => {
          const isActive = index === currentSlide;
          const isPrev = (currentSlide === 0 && index === events.length - 1) || 
                        (index === currentSlide - 1);
          const isNext = (currentSlide === events.length - 1 && index === 0) || 
                        (index === currentSlide + 1);
          
          if (!isActive && !isPrev && !isNext) return null;
          
          // Déterminer si cette image doit être chargée
          const shouldLoad = loadedImages.includes(index);
          
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
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${events.length}`}
            >
              {shouldLoad && (
                <img 
                  src={event.imageUrl} 
                  alt=""
                  className="carousel-image"
                  role="presentation"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={index === 0 ? "800" : undefined}
                  height={index === 0 ? "350" : undefined}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              )}
              <div className="carousel-content">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <button 
                  onClick={() => navigate('/events')} 
                  className="cta-button"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button 
        className="carousel-control prev" 
        onClick={prevSlide}
        aria-label="Précédent"
      >
        ‹
      </button>
      <button 
        className="carousel-control next" 
        onClick={nextSlide}
        aria-label="Suivant"
      >
        ›
      </button>

      <div className="carousel-indicators" role="tablist">
        {events.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel; 