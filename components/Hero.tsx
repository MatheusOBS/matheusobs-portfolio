import React from 'react';
import { PROFILE } from '../constants';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-4">
              Disponível para Projetos Freelance
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Olá, eu sou <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">
                {PROFILE.name}
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {PROFILE.role}. {PROFILE.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group"
              >
                Ver Projetos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all border border-slate-700"
              >
                Entrar em Contato
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-slate-400">
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center animate-fade-in delay-200">
             <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                <img 
                  src="https://github.com/MatheusOBS.png" 
                  alt={PROFILE.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;