import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand-600/20 rounded-lg group-hover:bg-brand-600/40 transition-colors">
            <Terminal className="w-6 h-6 text-brand-400" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white">Portfólio Dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link to="/projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projetos</Link>
          <Link to="/contact" className="px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
            Contato
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-950 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
           <Link to="/" className="text-lg font-medium text-slate-300">Home</Link>
           <Link to="/projects" className="text-lg font-medium text-slate-300">Projetos</Link>
           <Link to="/contact" className="text-lg font-medium text-brand-400">Contato</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
