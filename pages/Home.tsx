import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Code2, LineChart, FileText, GraduationCap, Clock } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import { TOOLS } from '../data';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-black via-[#030308] to-black">
        <StarBackground />

        {/* Decorative Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-900/10 backdrop-blur-sm">
             <span className="text-brand-300 text-xs font-semibold tracking-wider uppercase">Data Engineering & Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight tracking-tight">
            Portfólio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">projetos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light italic mb-10 max-w-2xl mx-auto">
            Dashboards, automações e soluções digitais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botão Azul para Projetos */}
            <Link 
              to="/projects"
              className="group relative px-8 py-4 bg-brand-600 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
              <span className="relative flex items-center gap-2">
                Ver Projetos <ArrowRight size={20} />
              </span>
            </Link>
            
            {/* Botão de Contato */}
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/10 rounded-lg font-bold text-white hover:bg-white/5 transition-all"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-12 gap-8 items-start">

            {/* Left: Content (Span 8 cols) */}
            <div className="md:col-span-8 order-2 md:order-1">
              <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                    Sobre Mim
                  </span>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Oceanógrafo pela Universidade de São Paulo (USP), com cerca de dois anos de experiência em análise e engenharia de dados.
                    Atuou em projetos de consultoria nas áreas de engenharia, meio ambiente e energia, com foco no desenvolvimento de pipelines de dados,
                    fluxos de automação e dashboards interativos em Power BI.
                  </p>
                  <p>
                    Possui experiência com <span className="text-brand-300 font-medium">Python, SQL, DAX, M, Power Automate e Microsoft Fabric</span>.
                    Interessado em inteligência artificial e em soluções tecnológicas voltadas à inovação e à eficiência de processos.
                  </p>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                   <div className="flex items-start gap-3">
                      <div className="p-2 bg-brand-900/30 rounded-lg text-brand-400 mt-1">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">Formação Sólida</h4>
                        <p className="text-slate-400 text-xs mt-1">Oceanografia USP</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400 mt-1">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">+2 Anos</h4>
                        <p className="text-slate-400 text-xs mt-1">Data Engineering</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a href="#contact" className="px-8 py-3 bg-white text-dark-950 font-bold rounded-lg hover:bg-slate-200 transition-colors text-center shadow-lg shadow-white/5">
                    Entrar em Contato
                  </a>
                  <Link to="/projects" className="px-8 py-3 bg-brand-600/10 border border-brand-500/20 text-brand-300 font-bold rounded-lg hover:bg-brand-600/20 transition-colors text-center flex items-center justify-center gap-2 group">
                    Ver Projetos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Image (Span 4 cols) - Circular Small */}
            <div className="md:col-span-4 order-1 md:order-2 flex flex-col items-center justify-start pt-0 md:pt-10">
               <div className="relative group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                 <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img
                     src="https://i.imgur.com/XUSFsuD.png"
                     alt="Pedro Freitas"
                     className="w-full h-full object-cover filter brightness-105"
                   />
                 </div>
               </div>

               <div className="text-center mt-6">
                 <h3 className="text-2xl font-bold font-display text-white">Pedro Freitas</h3>
                 <p className="text-sm font-mono text-brand-400 mt-1">Oceanógrafo & Data Engineer</p>
               </div>
            </div>
          </div>
        </div>

        {/* Full Width Tools Marquee */}
        <div className="w-full border-y border-white/5 bg-black/50 backdrop-blur-sm py-6 mt-12">
            <div className="relative flex overflow-hidden">
              <div className="animate-scroll flex gap-12 whitespace-nowrap min-w-full">
                {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, i) => (
                  <span key={i} className="text-lg font-semibold text-slate-500 flex items-center gap-3 hover:text-brand-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500/70"></span> {tool}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* 3. FUNDAMENTALS SECTION */}
      <section className="py-20 bg-gradient-to-b from-black via-[#020204] to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Abordagem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
              Fundamentos em Data Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FundamentalCard
              icon={<LineChart size={28} className="text-purple-400" />}
              title="Data-Driven"
              text="Transformo números brutos em insights estratégicos para tomada de decisão."
            />
            <FundamentalCard
              icon={<Code2 size={28} className="text-brand-400" />}
              title="Automação"
              text="Scripts e pipelines inteligentes que eliminam trabalho manual repetitivo."
            />
            <FundamentalCard
              icon={<FileText size={28} className="text-emerald-400" />}
              title="Escalabilidade"
              text="Soluções robustas com código limpo e documentação clara."
            />
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-24 bg-black border-t border-white/5">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-8">Vamos trabalhar juntos?</h2>
            <form className="space-y-4 text-left glass-panel p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Nome</label>
                  <input type="text" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Email</label>
                  <input type="email" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 outline-none" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Como posso ajudar?"></textarea>
              </div>
              <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-colors">
                Enviar Mensagem
              </button>
            </form>
         </div>
      </section>
    </div>
  );
};

const FundamentalCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-brand-500/30 transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 bg-dark-900/50 rounded-xl border border-white/5 group-hover:border-brand-500/20 group-hover:bg-dark-900/80 transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mt-2">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
  </div>
);

export default Home;