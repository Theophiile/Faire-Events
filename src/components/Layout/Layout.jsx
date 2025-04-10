import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; // Chemin vers ton Header
import Footer from '../Footer/Footer'; // Chemin vers ton Footer
import './Layout.scss'; // Import des styles

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">
        <Outlet /> {/* Ici s'affichent les pages */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;