import { useState } from 'react';
import './ImageGallery.scss';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.url} 
              alt={image.description} 
              loading="lazy"
            />
            <div className="image-overlay">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              <span className="visually-hidden">Fermer</span>
              ×
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.description} 
            />
            <p className="image-description">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 