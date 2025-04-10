import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Notre histoire</h1>
        <p>Faire-Events est né en 2024 de la passion pour l'artisanat local...</p>
      </section>

      <section className="team-section">
        <div className="team-grid">
          <div className="team-member">
            <div 
              className="avatar" 
              style={{ 
                backgroundImage: 'url(/assets/team/Justine.webp)',
                backgroundColor: '#d4a373' // Fallback si l'image ne charge pas
              }}
            ></div>
            <h3>Justine Pinto</h3>
            <p>Fondatrice</p>
          </div>
          {/* Autres membres... */}
        </div>
      </section>

      <section className="values-section">
        <h2>Nos valeurs</h2>
        <ul className="values-list">
          <li>Promouvoir les créateurs locaux</li>
          <li>Événements éco-responsables</li>
          <li>Accessibilité pour tous</li>
        </ul>
      </section>
    </div>
  );
};

export default About;