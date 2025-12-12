import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Clock, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Últimas do Blog
                </h2>
                <p className="text-slate-400">
                    Compartilhando conhecimento sobre web development e carreira.
                </p>
            </div>
            <a href="#" className="hidden md:block text-primary-400 hover:text-primary-300 transition-colors">
                Ler todos os artigos &rarr;
            </a>
        </div>

        <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
                <article key={post.id} className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 rounded-2xl hover:bg-slate-800/40 transition-colors border border-transparent hover:border-slate-800">
                    <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden shrink-0">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1">
                                <Calendar size={12} /> {post.date}
                            </span>
                             <span className="flex items-center gap-1">
                                <Clock size={12} /> {post.readTime}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-900/30 text-primary-400 border border-primary-500/20">
                                {post.category}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                            <a href="#">{post.title}</a>
                        </h3>
                        
                        <p className="text-slate-400 mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>
                        
                        <a href="#" className="inline-flex items-center text-sm font-medium text-white group-hover:underline decoration-primary-500 underline-offset-4">
                            Ler artigo completo
                        </a>
                    </div>
                </article>
            ))}
        </div>
        
         <div className="mt-8 md:hidden text-center">
             <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                Ler todos os artigos &rarr;
            </a>
         </div>
      </div>
    </section>
  );
};

export default Blog;