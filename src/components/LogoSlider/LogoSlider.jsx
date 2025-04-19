import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import './LogoSlider.scss';

const LogoSlider = ({ logos }) => {
  const sliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const touchStartPos = useRef(0);
  const touchLastPos = useRef(0);
  const touchStartTime = useRef(0);
  const velocity = useRef(0);
  const animationFrameId = useRef(null);
  const autoScrollInterval = useRef(null);
  const totalWidth = useRef(0);
  
  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      
      // Nettoyage
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);
  
  // Calcul de la largeur totale
  useEffect(() => {
    const updateDimensions = () => {
      const slider = sliderRef.current;
      if (!slider) return;
      
      const content = slider.querySelector('.logo-slider-content');
      const firstItem = content.querySelector('.logo-item');
      
      if (firstItem) {
        totalWidth.current = firstItem.offsetWidth * logos.length;
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [logos.length]);
  
  // Assurer que la position est toujours dans la plage correcte pour une boucle infinie
  const loopPosition = (pos) => {
    if (!totalWidth.current) return 0;
    
    // Si on dépasse la limite droite, revenir au début
    if (pos < -totalWidth.current) {
      return pos + totalWidth.current;
    }
    
    // Si on dépasse la limite gauche, revenir à la fin
    if (pos > 0) {
      return pos - totalWidth.current;
    }
    
    return pos;
  };
  
  // Défilement automatique
  useEffect(() => {
    if (!isAutoScrolling) {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = null;
      }
      return;
    }
    
    const runAutoScroll = () => {
      setPosition(prev => {
        const newPosition = prev - 0.5;
        return loopPosition(newPosition);
      });
    };
    
    autoScrollInterval.current = setInterval(runAutoScroll, 30);
    
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = null;
      }
    };
  }, [isAutoScrolling]);
  
  // Application de la position
  useEffect(() => {
    const content = sliderRef.current?.querySelector('.logo-slider-content');
    if (content) {
      content.style.transform = `translateX(${position}px)`;
    }
  }, [position]);
  
  // Animation d'inertie
  const applyInertia = () => {
    if (Math.abs(velocity.current) < 0.5) {
      velocity.current = 0;
      setIsAutoScrolling(true);
      return;
    }
    
    setPosition(prev => {
      // Appliquer le mouvement selon la vélocité
      let newPosition = prev + velocity.current;
      
      // Appliquer la boucle infinie
      return loopPosition(newPosition);
    });
    
    // Réduction progressive de la vélocité
    velocity.current *= 0.95;
    
    animationFrameId.current = requestAnimationFrame(applyInertia);
  };
  
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    
    // Arrêter l'animation d'inertie et le défilement automatique
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    setIsAutoScrolling(false);
    
    touchStartPos.current = e.touches[0].clientX;
    touchLastPos.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    velocity.current = 0;
  };
  
  const handleTouchMove = (e) => {
    if (!isMobile) return;
    
    const currentTouch = e.touches[0].clientX;
    // Suivre naturellement le doigt
    const diff = currentTouch - touchLastPos.current;
    
    // Calculer la vélocité (dans la bonne direction)
    const now = Date.now();
    const elapsedTime = now - touchStartTime.current;
    
    if (elapsedTime > 0) {
      // Facteur ajusté pour une meilleure inertie
      velocity.current = diff * 0.8;
    }
    
    setPosition(prev => {
      // Le mouvement suit maintenant le doigt naturellement
      const newPosition = prev + diff;
      
      // Appliquer la boucle infinie
      return loopPosition(newPosition);
    });
    
    touchLastPos.current = currentTouch;
    touchStartTime.current = now;
  };
  
  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    // Appliquer l'inertie si la vélocité est suffisante
    if (Math.abs(velocity.current) > 0.5) {
      animationFrameId.current = requestAnimationFrame(applyInertia);
    } else {
      setIsAutoScrolling(true);
    }
  };
  
  const handleLogoClick = (e, logo) => {
    // Vérifier si c'était un glissement ou un clic
    if (Math.abs(velocity.current) > 2) return;
    
    e.preventDefault();
    setSelectedLogo(logo);
    setModalOpen(true);
  };
  
  const handleConfirm = () => {
    if (selectedLogo) {
      const url = selectedLogo.name === 'Estelle Lagarde' 
        ? 'https://www.lagardejewelrydrawing.fr/'
        : 'https://www.lamaisongaia.fr/';
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    setModalOpen(false);
  };
  
  const renderLogo = (logo, index, prefix) => {
    const content = logo.name === 'Estelle Lagarde' || logo.name === 'Maison Gaia' ? (
      <a 
        href="#"
        onClick={(e) => handleLogoClick(e, logo)}
        className="logo-link"
      >
        <img 
          src={logo.logo} 
          alt={logo.name} 
          className="partner-logo"
        />
      </a>
    ) : (
      <img 
        src={logo.logo} 
        alt={logo.name} 
        className="partner-logo"
      />
    );
    
    return (
      <div key={`${prefix}-${index}`} className="logo-item">
        {content}
      </div>
    );
  };
  
  return (
    <>
      <div 
        className="logo-slider" 
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="logo-slider-content">
          {/* Premier ensemble de logos */}
          {logos.map((logo, index) => renderLogo(logo, index, 'first'))}
          {/* Deuxième ensemble pour un défilement continu */}
          {logos.map((logo, index) => renderLogo(logo, index, 'second'))}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        message={`Souhaitez-vous consulter le site ${
          selectedLogo?.name === 'Estelle Lagarde' ? "d'Estelle Lagarde" : 'de la Maison Gaia'
        } ?`}
      />
    </>
  );
};

export default LogoSlider; 
