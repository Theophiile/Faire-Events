import './Contact.scss';

const Contact = () => {
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
            
            <h2 className="contact-subtitle">Nos coordonnées</h2>
            <div className="info-items">
              <div className="info-item">
                <h3>Email</h3>
                <p>
                  <a href="mailto:faireevents@outlook.com" className="email-link">
                    faireevents@outlook.com
                  </a>
                </p>
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
                    <a href="https://www.facebook.com/people/Faire-Events/100092213289568/" target="_blank" rel="noopener noreferrer" className="social-text-link">
                      <span className="social-icon facebook"></span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact; 