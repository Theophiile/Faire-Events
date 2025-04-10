import Banner from '../../components/Banner/Banner';
import './Home.scss';

const Home = () => (
  <div className="home">
    <Banner />
    <section className="home-intro">
      <h2>Découvrez des créateurs d'exception</h2>
      <p>Faire-Events organise des marchés de créateurs locaux</p>
    </section>
  </div>
);

export default Home;