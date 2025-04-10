import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <section className="contact-form">
          <h1>Contactez-nous</h1>
          <form>
            <div className="form-group">
              <label>Nom *</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Coordonnées</h2>
          <address>
            <p>12 Rue des Créateurs<br />75000 Paris</p>
            <p>contact@faire-events.fr</p>
            <p>01 23 45 67 89</p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default Contact;