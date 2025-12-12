import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
             <a href="#" className="text-2xl font-bold text-white flex items-center gap-1 justify-center md:justify-start mb-2">
              <span className="text-primary-500">&lt;</span>
              matheusOBS
              <span className="text-primary-500">/&gt;</span>
            </a>
            <p className="text-slate-500 text-sm">
              Construindo o futuro da web, uma linha de código por vez.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          </div>

          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;