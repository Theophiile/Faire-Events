import React from 'react';
import './Modal.scss';

const Modal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title,
  message, 
  showConfirmButton = true,
  showCloseButton = true,
  imageUrl = null
}) => {
  if (!isOpen) return null;

  const formattedMessage = message?.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {title && <h2 className="modal-title">{title}</h2>}
        {imageUrl && (
          <div className="modal-image-container">
            <img src={imageUrl} alt={title || 'Image en détail'} className="modal-image" />
          </div>
        )}
        <div className="modal-message">
          {formattedMessage}
        </div>
        <div className="modal-buttons">
          {showConfirmButton && (
            <button className="confirm-button" onClick={onConfirm}>
              Oui
            </button>
          )}
          {showCloseButton && (
            <button className="close-button" onClick={onClose}>
              Fermer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal; 