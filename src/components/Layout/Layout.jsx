import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <div className="layout">
      <Helmet>
        <html lang="fr" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Faire Events organise des marchés de créateurs à Annecy et sur toute la Haute-Savoie pour promouvoir l'artisanat local et les produits faits main." />
        <meta name="keywords" content="marché créateurs, événement artisanal, artisanat local, salon créateurs, exposition artisanale, produits faits main, marché local, événements Haute-Savoie, Annecy, faire-events" />
        <meta name="author" content="Faire Events" />
        <link rel="canonical" href={`https://faire-events.fr${location.pathname}`} />
      </Helmet>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 