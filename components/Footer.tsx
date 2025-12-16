import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <div className="mb-4 md:mb-0">
          <span className="text-slate-300 font-semibold">Nexus Partner AI OS</span> © 2024
        </div>
        <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-xs text-slate-600 text-center md:text-left">
        Nexus AI OS is a technology provider, not a registered investment advisor. Past performance is not indicative of future results.
      </div>
    </footer>
  );
};

export default Footer;