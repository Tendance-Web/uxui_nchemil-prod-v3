import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollTexture } from './components/ScrollTexture';

const App: React.FC = () => {
  return (
    <Router>
      <SmoothScroll>
        {/* Utilisation de overflow-x-hidden sur le wrapper principal pour gérer le dépassement horizontal sans bloquer Lenis */}
        <div className="relative min-h-screen bg-background text-text-main selection:bg-primary/20 selection:text-white flex flex-col overflow-x-hidden">
          <ScrollTexture />
          <Navbar />         
          <main className="flex-1 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;