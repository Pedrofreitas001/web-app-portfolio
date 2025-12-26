import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, Database, Wrench, X, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../data';
import StarBackground from '../components/StarBackground';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.slug === slug);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0f0f14] to-[#1a1a22] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Projeto não encontrado</h2>
          <Link to="/projects" className="text-brand-400 hover:underline">Voltar para projetos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f14] to-[#1a1a22] pb-24 relative">
      <div className="fixed inset-0 z-0">
         <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-brand-900/10 to-transparent"></div>
         <StarBackground />
      </div>

      <div className="relative z-10 pt-32 max-w-6xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
           <div className="flex flex-wrap gap-3 mb-6">
             <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-semibold border border-brand-500/30">
               {project.category}
             </span>
             {project.company && (
               <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold border border-white/10">
                 {project.company}
               </span>
             )}
           </div>

           <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
             {project.title}
           </h1>

           <div className="flex flex-wrap gap-4">
             {project.liveLink && (
               <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/20">
                 Ver Projeto Online <ExternalLink size={18} />
               </a>
             )}
             {project.repoLink && (
               <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-dark-900 border border-white/10 hover:bg-dark-800 text-white font-bold rounded-lg transition-all">
                 <Github size={18} /> Repositório GitHub
               </a>
             )}
           </div>
        </header>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
           {/* Main Column */}
           <div className="lg:col-span-3 space-y-12">
              {/* Context */}
              <section className="glass-panel p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                 <div className="flex items-center gap-3 mb-4 text-brand-400">
                    <Layers size={24} />
                    <h2 className="text-2xl font-bold font-display text-white">Contexto</h2>
                 </div>
                 <p className="text-slate-300 leading-relaxed text-lg">
                   {project.context}
                 </p>
              </section>

              {/* Dataset */}
              {project.dataset && (
                <section className="glass-panel p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                   <div className="flex items-center gap-3 mb-4 text-emerald-400">
                      <Database size={24} />
                      <h2 className="text-2xl font-bold font-display text-white">Sobre os Dados</h2>
                   </div>
                   <p className="text-slate-300 leading-relaxed text-lg">
                     {project.dataset}
                   </p>
                </section>
              )}

              {/* Gallery - Now in main column for larger images */}
              <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold font-display text-white border-l-4 border-brand-500 pl-4">Galeria do Projeto</h2>
                <div className="grid gap-8">
                   {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                        onClick={() => setLightboxImage(img)}
                      >
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                           <div className="flex items-center gap-2 text-white font-semibold bg-brand-600 px-4 py-2 rounded-lg">
                             <ZoomIn size={20} />
                             Ampliar
                           </div>
                         </div>
                         <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto object-cover" />
                      </div>
                   ))}
                </div>
              </section>
           </div>

           {/* Sidebar - Fixed Tools */}
           <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-dark-900/80 backdrop-blur border border-white/10 p-6 rounded-2xl sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                 <div className="flex items-center gap-2 mb-6 text-purple-400">
                    <Wrench size={24} />
                    <h3 className="text-xl font-bold text-white">Ferramentas</h3>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {project.tools.map(tool => (
                     <span key={tool} className="px-3 py-1.5 bg-dark-950 border border-white/10 rounded-md text-sm text-slate-300">
                       {tool}
                     </span>
                   ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">Voltar para lista de projetos</Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-400 transition-colors p-2 bg-dark-900/50 rounded-lg"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
