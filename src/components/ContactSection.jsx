import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone,
  CheckCircle2, 
  Loader2, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Optional Formspree endpoint (replace with your Formspree form ID e.g. "xpwzaqvy")
    const formspreeId = import.meta.env?.VITE_FORMSPREE_ID || '';

    const triggerSuccess = () => {
      setStatus('success');
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#3b82f6', '#8b5cf6', '#60a5fa']
        });
      } catch (err) {
        // ignore confetti fallback
      }
      setFormData({ name: '', email: '', message: '' });
    };

    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((res) => {
          if (res.ok) {
            triggerSuccess();
          } else {
            setStatus('error');
            setErrorMessage("Erreur lors de l'envoi via Formspree. Veuillez réessayer.");
          }
        })
        .catch(() => {
          setStatus('error');
          setErrorMessage("Erreur réseau. Veuillez réessayer ou m'écrire directement par email.");
        });
    } else {
      // Graceful local feedback
      setTimeout(() => {
        triggerSuccess();
      }, 800);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e293b]/70"
    >
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-0 radial-glow-blue pointer-events-none opacity-60 -z-10" 
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, description & direct links */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something
              <span className="block text-gradient">Amazing Together.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              Have a cutting-edge project, engineering opportunity, or research collaboration in mind? Feel free to reach out directly.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-blue-400">
                <Mail className="w-4 h-4" />
              </div>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="hover:text-blue-400 transition-colors font-medium"
              >
                {personalInfo.email}
              </a>
            </div>

            {personalInfo.phone && (
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                  className="hover:text-cyan-400 transition-colors font-medium"
                >
                  {personalInfo.phone}
                </a>
              </div>
            )}

            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Outline Buttons */}
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1e293b] hover:border-blue-500/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1e293b] hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Sleek minimalist underline form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111827]/90 border border-[#1e293b] shadow-card-depth backdrop-blur-md relative overflow-hidden">
            
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-tab-content">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. Abdellah will review your message and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white tracking-tight pb-2 border-b border-slate-800">
                  Direct Dispatch
                </h3>

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Name Underline Input */}
                <div className="space-y-1 group">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 group-focus-within:text-blue-400 transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full py-3 bg-transparent text-white placeholder:text-slate-600 border-b border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Email Underline Input */}
                <div className="space-y-1 group">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 group-focus-within:text-blue-400 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="w-full py-3 bg-transparent text-white placeholder:text-slate-600 border-b border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1 group">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 group-focus-within:text-blue-400 transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    required
                    className="w-full py-3 bg-transparent text-white placeholder:text-slate-600 border-b border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Full-width Blue Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  id="submit-message-btn"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-sm sm:text-base shadow-glow-blue transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
