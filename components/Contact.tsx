import React from 'react';
import { PROFILE } from '../constants';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-10 bg-primary-600 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  Estou sempre aberto a novas oportunidades, colaborações ou apenas para trocar uma ideia sobre tecnologia.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/50 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-200">Email</p>
                      <p className="font-medium">{PROFILE.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary-500/50 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-200">Localização</p>
                      <p className="font-medium">Brasil (Remoto)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <p className="text-sm text-primary-200 mb-4">Me encontre nas redes</p>
                 <div className="flex gap-4">
                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary-400 flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary-400 flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary-400 flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors">
                      <Instagram size={20} />
                    </a>
                 </div>
              </div>
            </div>

            <div className="p-10 bg-slate-900/50">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Seu Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="joao@exemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Olá, gostaria de falar sobre um projeto..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-white text-slate-900 font-bold py-4 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                  Enviar Mensagem <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;