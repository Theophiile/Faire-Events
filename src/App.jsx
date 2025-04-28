import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const Home = lazy(() => import('./pages/Home/Home'));
const Events = lazy(() => import('./pages/Events/Events'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ height: '100vh' }}>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <Suspense fallback={<div>Chargement…</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App; 