import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#030305]/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Nexus <span className="font-light text-slate-400">Partner AI OS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#agents" className="hover:text-white transition-colors">AI Intelligent Agents</a>
          <a href="#assets" className="hover:text-white transition-colors">Global Shelf</a>
          <a href="#infrastructure" className="hover:text-white transition-colors">Ecosystem</a>
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all">
            申请内测
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b0f17] border-b border-white/5 p-6 space-y-4">
          <a href="#agents" className="block text-slate-300 hover:text-white">AI Intelligent Agents</a>
          <a href="#assets" className="block text-slate-300 hover:text-white">Global Shelf</a>
          <a href="#infrastructure" className="block text-slate-300 hover:text-white">Ecosystem</a>
          <div className="pt-4 space-y-3">
             <button className="w-full px-5 py-3 rounded-lg bg-white/10 text-white border border-white/10">
              Login
            </button>
            <button className="w-full px-5 py-3 rounded-lg bg-blue-600 text-white">
              申请内测
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;