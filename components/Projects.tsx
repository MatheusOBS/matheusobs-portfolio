import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma seleção de trabalhos recentes que demonstram minhas habilidades em resolver problemas complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 text-sm flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-primary-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700/50 mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-sm text-white hover:text-primary-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Github size={16} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="px-6 py-3 border border-primary-500 text-primary-400 rounded-full hover:bg-primary-500/10 transition-colors text-sm font-medium">
                Ver todos os projetos no GitHub
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;