import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-title">{message}</div>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Oui
          </button>
          <button className="cancel-button" onClick={onClose}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal; 