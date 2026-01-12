
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen font-sans bg-brand-blue-darkest">
      {/* ================= NAVBAR ================= */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 w-full z-50 bg-brand-blue-darkest/40 backdrop-blur-2xl border-b border-white/[0.03]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80px] flex items-center justify-between">
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.img 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              src={LOGO_ORANGE_URL} 
              alt="HF Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(255,85,0,0.5)]"
              loading="eager"
            />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">
              HOST<span className="text-brand-orange">FORGE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['plans', 'terms'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className="text-xs font-black text-slate-400 hover:text-brand-orange transition-all uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={DISCORD_INVITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-xs font-black transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,85,0,0.25)] hover:shadow-brand-orange/40"
            >
              Join Discord
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-52 pb-40 overflow-hidden text-center">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-brand-orange/[0.02] rounded-full blur-[160px] -z-10 animate-pulse-slow" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-brand-orange/[0.05] rounded-full blur-[120px] -z-10" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-[10px] font-black mb-12 tracking-[0.3em] uppercase backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_#FF5500]"></span>
            PREMIUM PROXMOX NODES
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none text-white uppercase"
          >
            FORGE YOUR <br />
            <span className="orange-gradient-text italic">LEGACY</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 mb-16 font-medium leading-relaxed"
          >
            The pinnacle of VPS hosting. High speed, low latency, and 
            unrivaled hardware stability for your projects.
            <span className="block mt-6 text-brand-orange font-black text-sm tracking-[0.4em] uppercase opacity-80">
              NVMe Gen4 • DDR5 ECC • 10Gbps Network
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#plans"
              onClick={(e) => scrollToSection(e, 'plans')}
              className="w-full sm:w-auto px-16 py-6 bg-brand-orange text-white font-black rounded-2xl text-lg shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:shadow-brand-orange/50 hover:scale-105 transition-all duration-500 uppercase tracking-widest"
            >
              Explore Tiers
            </a>
            <a
              href={DISCORD_INVITE_LINK}
              target="_blank"
              className="w-full sm:w-auto px-16 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl text-lg hover:bg-white/10 backdrop-blur-xl transition-all duration-500 uppercase tracking-widest"
            >
              Discord Order
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section id="plans" className="py-32 scroll-mt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-8xl font-black mb-20 uppercase text-white tracking-tighter italic"
          >
            THE <span className="text-brand-orange not-italic">ARSENAL</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 mb-24 bg-brand-blue-darkest/60 p-2 rounded-[2.5rem] border border-white/5 inline-flex backdrop-blur-3xl shadow-2xl">
            {[
              { type: PlanType.BUDGET, label: 'Standard' },
              { type: PlanType.PREMIUM, label: 'Premium' },
              { type: PlanType.BOOSTER, label: 'Boosters' },
              { type: PlanType.INVITE, label: 'Invites' }
            ].map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`px-10 py-5 rounded-3xl font-black transition-all duration-500 uppercase tracking-[0.2em] text-[10px] ${
                  activeTab === tab.type
                    ? 'bg-brand-orange text-white shadow-xl scale-110'
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {getActivePlans().map((plan, index) => (
                <motion.div
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <PlanCard plan={plan} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= TERMS ================= */}
      <section id="terms" className="py-40 scroll-mt-24 relative bg-brand-blue-darkest/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter italic">
              LEGAL <span className="text-brand-orange not-italic">FORGE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Usage Policy', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
                rules: ['01. No crypto mining or stress testing.', '02. No abusive network activity allowed.']
              },
              { 
                title: 'Payments', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>,
                rules: ['03. IPv4 is an add-on for basic plans.', '04. Strict no-refund policy post-setup.']
              },
              { 
                title: 'Assistance', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
                rules: ['05. 99.9% Uptime SLA Guarantee.', '06. Ticket-based Discord support 24/7.']
              }
            ].map((section, i) => (
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                key={i} 
                className="glass-card p-12 rounded-[3rem] group hover:border-brand-orange/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-500">
                  <span className="text-brand-orange">{section.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">{section.title}</h3>
                <ul className="space-y-6 text-slate-400 font-bold text-sm">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-brand-orange/40">●</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-32 border-t border-white/5 text-center bg-brand-blue-darkest relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-orange/[0.03] blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <span className="font-black text-5xl tracking-tighter uppercase text-white italic">
              HOST<span className="text-brand-orange not-italic">FORGE</span>
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-20">
            {['Support Portal', 'Tier Pricing', 'Legal Terms'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-slate-500 font-black hover:text-white transition-all text-xs uppercase tracking-[0.4em]"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-12" />
          <p className="text-slate-700 text-[11px] font-black uppercase tracking-[0.6em]">
            © {new Date().getFullYear()} HostForge Global • High-Performance Cloud
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
