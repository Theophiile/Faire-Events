import { Helmet } from 'react-helmet';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>À propos de Faire Events | Organisateur de marchés de créateurs</title>
        <meta name="description" content="Découvrez qui nous sommes et notre mission de valoriser l'artisanat local en Haute-Savoie à travers des marchés de créateurs uniques." />
        <meta property="og:title" content="À propos de Faire Events | Organisateur de marchés de créateurs" />
        <meta property="og:description" content="Découvrez qui nous sommes et notre mission de valoriser l'artisanat local en Haute-Savoie." />
        <meta property="og:image" content="https://faire-events.fr/assets/images/photorecap/portraitiste.webp" />
        <meta property="og:url" content="https://faire-events.fr/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container">
        <section className="hero-section">
          <img src="/assets/logos/faire-logo.webp" alt="Faire Events Logo" className="logo" />
          <h1>Notre Histoire</h1>
          <p>
            Faire Events est né d'une passion pour l'artisanat et d'une volonté de créer des connexions 
            authentiques entre créateurs et amateurs d'art. Notre mission est de mettre en lumière le 
            talent des artisans locaux à travers des événements uniques et mémorables.
          </p>
        </section>

        <section className="team-section">
          <h2>Fondatrice</h2>
          <div className="team-member">
            <div className="member-photo">
              <img src="/assets/images/justine.webp" alt="Justine Pinto - Fondatrice" />
            </div>
            <div className="member-info">
              <h3>Justine Pinto</h3>
              <p className="role">Fondatrice</p>
              <p className="bio">
                Passionnée par l'artisanat et l'événementiel, Justine a créé Faire Events avec la vision 
                de construire des ponts entre les créateurs talentueux et le public. Son expertise en 
                gestion d'événements et sa sensibilité artistique permettent de créer des expériences 
                uniques qui célèbrent le savoir-faire artisanal.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Authenticité</h3>
              <p>
                Nous privilégions les relations authentiques et transparentes avec nos artisans et 
                notre public, créant un environnement de confiance et de partage.
              </p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                Chaque événement est soigneusement conçu pour mettre en valeur le meilleur de 
                l'artisanat local, avec une attention particulière aux détails.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                Nous cherchons constamment à innover dans notre approche de l'événementiel, 
                en créant des expériences uniques qui inspirent et connectent.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 