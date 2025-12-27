import React from 'react';
import { Mail, Phone } from 'lucide-react';
import StarBackground from '../components/StarBackground';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#030308] to-black pt-32 pb-24 relative">
      <StarBackground />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">
            Vamos trabalhar juntos<span className="text-brand-500">?</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Entre em contato para conversarmos sobre seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Card */}
          <a
            href="mailto:pedrofreitas@usp.br"
            className="group glass-panel p-10 rounded-2xl hover:bg-[#1a1a20]/70 hover:border-brand-500/30 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="p-5 bg-brand-600/20 rounded-xl mb-6 group-hover:bg-brand-600/30 transition-colors">
              <Mail size={40} className="text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 mb-2">pedrofreitas@usp.br</p>
            <p className="text-sm text-slate-500">Clique para enviar um email</p>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/5511989476691"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel p-10 rounded-2xl hover:bg-[#1a1a20]/70 hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="p-5 bg-emerald-600/20 rounded-xl mb-6 group-hover:bg-emerald-600/30 transition-colors">
              <Phone size={40} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-2">+55 (11) 98947-6691</p>
            <p className="text-sm text-slate-500">Clique para iniciar conversa</p>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center glass-panel p-8 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-3">Disponibilidade</h3>
          <p className="text-slate-400">
            Aberto para projetos freelance e oportunidades de trabalho full-time.
            <br />
            Tempo de resposta: geralmente dentro de 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
