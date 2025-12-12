import React from 'react';
import { PROFILE, SKILLS } from '../constants';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary-500">#</span> Sobre Mim
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed text-lg">
              <p>{PROFILE.longBio}</p>
              <p>
                Sempre acreditei que a tecnologia deve servir às pessoas. Quando não estou codando, estou explorando novas ferramentas de IA ou contribuindo para a comunidade open-source.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <Code2 className="text-primary-400 mb-2" size={32} />
                <h3 className="font-semibold text-white">Frontend</h3>
                <p className="text-sm text-slate-400">React, Next.js, Tailwind</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <Terminal className="text-purple-400 mb-2" size={32} />
                <h3 className="font-semibold text-white">Backend</h3>
                <p className="text-sm text-slate-400">Node, Python, SQL</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-200 font-medium group-hover:text-primary-400 transition-colors">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

             <div className="mt-12 p-6 glass-panel rounded-xl border border-primary-500/20">
                <div className="flex items-start gap-4">
                  <Cpu className="text-primary-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">AI-First Development</h4>
                    <p className="text-sm text-slate-400">
                      Integrando modelos como Gemini e GPT para criar experiências de usuário adaptativas e inteligentes.
                    </p>
                  </div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;