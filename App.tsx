
import React, { useState, useCallback } from 'react';
import { PlanCard } from './components/PlanCard';
import {
  BOOSTER_PLANS,
  INVITE_PLANS,
  BUDGET_PLANS,
  PREMIUM_PLANS_PAID,
  DISCORD_INVITE_LINK,
  LOGO_ORANGE_URL
} from './constants';
import { PlanType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanType>(PlanType.BUDGET);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    []
  );

  const getActivePlans = () => {
    switch (activeTab) {
      case PlanType.BOOSTER:
        return BOOSTER_PLANS;
      case PlanType.INVITE:
        return INVITE_PLANS;
      case PlanType.BUDGET:
        return BUDGET_PLANS;
      case PlanType.PREMIUM:
        return PREMIUM_PLANS_PAID;
      default:
        return BUDGET_PLANS;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange/30 bg-brand-dark">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80px] flex items-center justify-between">
          
          {/* NAV BRANDING - LOGO ON LEFT SIDE TOP CORNER */}
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_ORANGE_URL} 
              alt="HF Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]"
              loading="eager"
            />
            <span className="font-display font-bold text-xl tracking-tight uppercase text-white">
              HOST<span className="text-brand-orange">FORGE</span>
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-6">
            <a
              href="#plans"
              onClick={(e) => scrollToSection(e, 'plans')}
              className="text-sm font-semibold text-neutral-400 hover:text-brand-orange transition-colors"
            >
              Plans
            </a>
            <a
              href="#terms"
              onClick={(e) => scrollToSection(e, 'terms')}
              className="text-sm font-semibold text-neutral-400 hover:text-brand-orange transition-colors"
            >
              Terms
            </a>
            <a
              href={DISCORD_INVITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-white hover:text-brand-dark hover:scale-105 shadow-[0_0_20px_rgba(255,85,0,0.4)]"
            >
              Join Discord
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-48 pb-24 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold mb-8 animate-pulse uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            ENTERPRISE PROXMOX INFRASTRUCTURE
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-tight text-white uppercase">
            FORGE YOUR <br />
            <span className="orange-gradient-text uppercase">DIGITAL EMPIRE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-12 font-medium">
            Experience elite VPS performance starting at just ₹49/mo. 
            Stable, Affordable, and Built for Scale.
            <span className="block mt-4 font-bold text-white tracking-wide uppercase text-sm">
              99.9% Uptime • DDR4 RAM • NVMe Storage
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#plans"
              onClick={(e) => scrollToSection(e, 'plans')}
              className="px-14 py-5 bg-brand-orange text-white font-black rounded-full text-lg shadow-2xl hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105"
            >
              EXPLORE PLANS
            </a>
            <a
              href={DISCORD_INVITE_LINK}
              target="_blank"
              className="px-14 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full text-lg hover:bg-white/10 backdrop-blur-md transition-all"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section id="plans" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 uppercase text-white tracking-tight">
            Choose Your <span className="text-brand-orange">Power Level</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-16 bg-neutral-900/50 p-2 rounded-[2.5rem] border border-white/5 inline-flex shadow-inner">
            {[
              { type: PlanType.BUDGET, label: '💵 Budget (Paid)' },
              { type: PlanType.PREMIUM, label: '👑 Premium (Paid)' },
              { type: PlanType.BOOSTER, label: '💎 Boosters' },
              { type: PlanType.INVITE, label: '🤝 Invites' }
            ].map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`px-8 py-4 rounded-3xl font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.type
                    ? 'bg-brand-orange text-white shadow-xl scale-105'
                    : 'text-neutral-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getActivePlans().map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TERMS ================= */}
      <section id="terms" className="py-32 scroll-mt-20 relative">
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white tracking-tighter italic">TERMS OF <span className="text-brand-orange">SERVICE</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-12 rounded-[3rem] border-brand-orange/5">
              <h3 className="text-xl font-display font-bold text-brand-orange mb-8 uppercase tracking-widest">Usage Policy</h3>
              <ul className="space-y-6 text-neutral-400 font-medium">
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>No crypto mining, stress testing, or abusive network usage allowed.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>Fake invites or boost-and-leave will result in immediate plan termination.</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-12 rounded-[3rem] border-brand-orange/5">
              <h3 className="text-xl font-display font-bold text-white mb-8 uppercase tracking-widest">Payments</h3>
              <ul className="space-y-6 text-neutral-400 font-medium">
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>IPv4 addresses are premium add-ons unless explicitly included in the plan.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>Strict no-refund policy applies once the VPS has been deployed.</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-12 rounded-[3rem] border-brand-orange/5">
              <h3 className="text-xl font-display font-bold text-white mb-8 uppercase tracking-widest">Support</h3>
              <ul className="space-y-6 text-neutral-400 font-medium">
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>24/7 technical assistance available via our Discord community.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand-orange">»</span>
                  <span>Backups are the user's responsibility; we provide high-availability storage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-24 border-t border-white/5 text-center bg-brand-dark/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <span className="font-display font-bold text-3xl tracking-tighter uppercase text-white">
              HOST<span className="text-brand-orange">FORGE</span>
            </span>
          </div>
          <div className="flex justify-center gap-10 mb-12">
            <a href={DISCORD_INVITE_LINK} target="_blank" className="text-neutral-500 font-bold hover:text-brand-orange transition-colors text-xs uppercase tracking-widest">Support</a>
            <a href="#plans" onClick={(e) => scrollToSection(e, 'plans')} className="text-neutral-500 font-bold hover:text-brand-orange transition-colors text-xs uppercase tracking-widest">Pricing</a>
            <a href="#terms" onClick={(e) => scrollToSection(e, 'terms')} className="text-neutral-500 font-bold hover:text-brand-orange transition-colors text-xs uppercase tracking-widest">Terms</a>
          </div>
          <p className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} HostForge Global • Enterprise Hosting Solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
