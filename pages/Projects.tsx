import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data';
import StarBackground from '../components/StarBackground';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const filteredProjects = selectedFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(project => {
        if (selectedFilter === 'Power BI') {
          return project.category.includes('Power BI');
        }
        if (selectedFilter === 'Web App') {
          return project.category === 'Web App';
        }
        if (selectedFilter === 'Python') {
          return project.tools.includes('Python');
        }
        if (selectedFilter === 'Site') {
          return project.category === 'Site';
        }
        return true;
      });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#030308] to-black pt-32 pb-24 relative">
      <StarBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">
            Projetos<span className="text-brand-500">.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
             Explore uma coleção de dashboards, automações e sistemas web desenvolvidos para resolver problemas reais.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
            {['Todos', 'Power BI', 'Web App', 'Python', 'Site'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-brand-600 text-white'
                    : 'bg-dark-900 border border-white/10 text-slate-300 hover:bg-dark-800'
                }`}
              >
                {filter}
              </button>
            ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.slug}`}
              className="group bg-dark-900 border border-white/5 rounded-xl overflow-hidden hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4 z-20 bg-dark-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{project.company}</span>
                    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">{project.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tools.slice(0, 3).map(tool => (
                     <span key={tool} className="text-xs text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5">
                       {tool}
                     </span>
                   ))}
                   {project.tools.length > 3 && (
                      <span className="text-xs text-slate-500 px-1 py-1">+ {project.tools.length - 3}</span>
                   )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
