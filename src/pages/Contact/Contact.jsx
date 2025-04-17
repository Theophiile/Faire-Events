import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <section className="contact-info">
            <h1>Contactez-nous</h1>
            <p className="intro-text">
              Une question sur nos événements ? Envie de participer en tant que créateur ?
              N'hésitez pas à nous contacter !
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <h3>Email</h3>
                <p>faireevents@outlook.com</p>
              </div>
              
              <div className="info-item">
                <h3>Téléphone</h3>
                <p>
                  <a href="tel:0660178959" className="phone-link">
                    06 60 17 89 59
                  </a>
                </p>
              </div>
              
              <div className="info-item">
                <h3>Suivez-nous</h3>
                <div className="social-links">
                  <div className="social-text-links">
                    <a href="https://www.instagram.com/faire_events/" target="_blank" rel="noopener noreferrer" className="social-text-link">
                      <span className="social-icon instagram"></span>
                      Instagram
                    </a>
                    <span className="separator">•</span>
                    <a href="https://www.facebook.com/faire.events" target="_blank" rel="noopener noreferrer" className="social-text-link">
                      <span className="social-icon facebook"></span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Envoyer
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact; 