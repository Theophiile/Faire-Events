import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import './LogoSlider.scss';

const LogoSlider = ({ logos }) => {
  const sliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const content = slider.querySelector('.logo-slider-content');
    const firstItem = content.querySelector('.logo-item');
    
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const totalWidth = itemWidth * logos.length;
    let position = 0;

    const animate = () => {
      position -= 0.6;
      
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      content.style.transform = `translateX(${position}px)`;
    };

    const interval = setInterval(animate, 30);

    return () => clearInterval(interval);
  }, [logos.length]);

  const handleLogoClick = (e, logo) => {
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
      <div className="logo-slider" ref={sliderRef}>
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