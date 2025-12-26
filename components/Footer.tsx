import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-dark-900 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-display text-white mb-2">Pedro Freitas</h3>
          <p className="text-slate-400 text-sm">Engenharia de Dados & Oceanografia</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-600 hover:text-white transition-all transform hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-600 hover:text-white transition-all transform hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="mailto:pedro@example.com" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-600 hover:text-white transition-all transform hover:-translate-y-1">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} Pedro Freitas. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
