
import React, { useState, useCallback } from 'react';
import { PlanCard } from './components/PlanCard';
import { BOOSTER_PLANS, INVITE_PLANS, DISCORD_INVITE_LINK, LOGO_YELLOW_URL } from './constants';
import { PlanType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanType>(PlanType.BOOSTER);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-yellow/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_YELLOW_URL} 
              alt="HostForge Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
            />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block uppercase">HOST<span className="text-brand-yellow">FORGE</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#plans" 
              onClick={(e) => scrollToSection(e, 'plans')}
              className="text-sm font-semibold text-neutral-400 hover:text-brand-yellow transition-colors cursor-pointer"
            >
              Plans
            </a>
            <a 
              href="#terms" 
              onClick={(e) => scrollToSection(e, 'terms')}
              className="text-sm font-semibold text-neutral-400 hover:text-brand-yellow transition-colors cursor-pointer"
            >
              Terms
            </a>
            <a 
              href={DISCORD_INVITE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Join Discord
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold mb-8 animate-pulse tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
            PROXMOX CLOUD INFRASTRUCTURE
          </div>
          <div className="flex justify-center mb-8">
            <img 
              src={LOGO_YELLOW_URL} 
              alt="HostForge" 
              className="w-24 h-24 object-contain animate-bounce drop-shadow-[0_0_25px_rgba(250,204,21,0.3)]"
            />
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-tight">
            FORGE YOUR <br />
            <span className="gold-gradient-text uppercase">DIGITAL EMPIRE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-12">
            Experience next-level virtualization. Earn your high-performance VPS through community boosting or growing our network.
            <span className="block mt-4 font-bold text-white tracking-wide uppercase text-sm">Stable • Affordable • Scalable</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#plans" 
              onClick={(e) => scrollToSection(e, 'plans')}
              className="group px-10 py-5 bg-brand-yellow text-brand-dark font-black rounded-full text-lg shadow-2xl shadow-brand-yellow/20 hover:bg-white transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
            >
              EXPLORE PLANS
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a 
              href={DISCORD_INVITE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              BUY VIA DISCORD
            </a>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-brand-dark relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase tracking-tighter">Choose Your <span className="text-brand-yellow">Plan</span></h2>
            <p className="text-neutral-500 font-medium mb-12">Select the hosting environment that fits your project needs</p>
            
            <div className="flex justify-center mt-8">
              <div className="inline-flex p-1.5 bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl">
                <button
                  onClick={() => setActiveTab(PlanType.BOOSTER)}
                  className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-3 ${activeTab === PlanType.BOOSTER ? 'bg-brand-yellow text-brand-dark shadow-lg scale-105' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                >
                  <span className="text-xl">💎</span>
                  BOOSTER VPS
                </button>
                <button
                  onClick={() => setActiveTab(PlanType.INVITE)}
                  className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-3 ${activeTab === PlanType.INVITE ? 'bg-brand-yellow text-brand-dark shadow-lg scale-105' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                >
                  <span className="text-xl">🤝</span>
                  INVITE VPS
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === PlanType.BOOSTER ? BOOSTER_PLANS : INVITE_PLANS).map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="py-32 border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Booster Terms */}
            <div className="glass-card p-10 rounded-[2.5rem] border-brand-yellow/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="text-8xl font-display font-black">01</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-yellow uppercase tracking-widest">Booster Terms</h3>
              </div>
              <ul className="space-y-6 text-neutral-300 text-lg">
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">01.</span>
                  <span>Boosts must be renewed every month to keep your VPS active.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">02.</span>
                  <span>Removing boosts leads to immediate service suspension.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">03.</span>
                  <span>Strictly no refunds on any booster or premium tiers.</span>
                </li>
                <li className="flex gap-4 text-red-400">
                  <span className="font-bold">04.</span>
                  <span>VPS abuse or misuse will lead to instant termination.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">05.</span>
                  <span>Staff reserves full right to enforce TOS regulations.</span>
                </li>
              </ul>
            </div>

            {/* Invite Terms */}
            <div className="glass-card p-10 rounded-[2.5rem] border-brand-yellow/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="text-8xl font-display font-black">02</span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-widest">Usage Policy</h3>
              </div>
              <ul className="space-y-6 text-neutral-300 text-lg">
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">•</span>
                  <span>Free plans are shared-resource environments (Fair Use).</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">•</span>
                  <span>Initial free plan duration is 1 month per cycle.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">•</span>
                  <span>IPv4 dedicated addresses: ₹50/monthly (if not in plan).</span>
                </li>
                <li className="flex gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
                  <span className="font-bold">⚠️</span>
                  <span>Crypto mining, VPNs, or network abuse = Instant BAN.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-yellow font-bold">•</span>
                  <span>Invites are audited; fake invites result in account wipe.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-brand-yellow py-16 px-12 text-brand-dark text-center shadow-2xl shadow-brand-yellow/20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.4),transparent)]" />
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter">Ready to Deploy?</h2>
               <p className="text-xl font-bold opacity-80 mb-10 max-w-2xl mx-auto">
                 Join our high-performance cloud ecosystem. The Forge is waiting for your next big project.
               </p>
               <a 
                href={DISCORD_INVITE_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-dark text-white font-black rounded-3xl text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
               >
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" /></svg>
                 JOIN DISCORD NOW
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={LOGO_YELLOW_URL} 
                  alt="HostForge Footer Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-display font-bold text-2xl uppercase">HOST<span className="text-brand-yellow">FORGE</span></span>
              </div>
              <p className="text-neutral-500 text-sm max-w-xs text-center md:text-left">
                High-performance VPS solutions powered by Proxmox. Scalable, stable, and community-driven.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Resources</h4>
                <a href="#plans" onClick={(e) => scrollToSection(e, 'plans')} className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Pricing</a>
                <a href="#terms" onClick={(e) => scrollToSection(e, 'terms')} className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Terms of Service</a>
                <a href={DISCORD_INVITE_LINK} target="_blank" className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Support</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Community</h4>
                <a href={DISCORD_INVITE_LINK} target="_blank" className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Discord Server</a>
                <a href="#" className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Knowledge Base</a>
                <a href="#" className="text-neutral-500 hover:text-brand-yellow text-sm transition-colors">Announcements</a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-600 text-xs">
              © {new Date().getFullYear()} HostForge Infrastructure. Not affiliated with Discord Inc. or Proxmox Server Solutions GmbH.
            </p>
            <div className="flex gap-6">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-yellow transition-colors group cursor-pointer">
                 <svg className="w-4 h-4 text-neutral-400 group-hover:text-brand-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
