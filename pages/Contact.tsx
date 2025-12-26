import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import StarBackground from '../components/StarBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Simula envio - você pode integrar com um backend real depois
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Aqui você pode integrar com:
      // - EmailJS (gratuito)
      // - Formspree
      // - Supabase Edge Functions
      // - Seu próprio backend

      console.log('Mensagem enviada:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-32 pb-24 relative">
      <StarBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">
            Vamos trabalhar <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">juntos?</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tenho interesse em ouvir sobre projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
            <div className="inline-flex p-4 bg-brand-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-brand-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <a href="mailto:contato@pedrofreitas.com" className="text-slate-400 hover:text-brand-400 transition-colors">
              contato@pedrofreitas.com
            </a>
          </div>

          {/* Phone */}
          <div className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
            <div className="inline-flex p-4 bg-purple-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Telefone</h3>
            <a href="tel:+5511999999999" className="text-slate-400 hover:text-purple-400 transition-colors">
              +55 (11) 99999-9999
            </a>
          </div>

          {/* Location */}
          <div className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
            <div className="inline-flex p-4 bg-emerald-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Localização</h3>
            <p className="text-slate-400">São Paulo, SP</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg flex items-center gap-3 text-emerald-400 animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 animate-fade-in">
                <p>Erro ao enviar mensagem. Tente novamente.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Ou me encontre nas redes</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
            >
              <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
            >
              <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
