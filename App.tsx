import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agents from './components/Agents';
import Demo from './components/Demo';
import Assets from './components/Assets';
import Infrastructure from './components/Infrastructure';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030305] text-slate-200 overflow-x-hidden selection:bg-purple-500/30">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030305] to-[#030305] pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Agents />
        <Demo />
        <Assets />
        <Infrastructure />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;