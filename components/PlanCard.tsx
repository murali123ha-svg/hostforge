
import React from 'react';
import { motion } from 'framer-motion';
import { VPSPlan } from '../types';
import { DISCORD_INVITE_LINK } from '../constants';

interface PlanCardProps {
  plan: VPSPlan;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const isIPv4Included = plan.ipv4.includes('✅') || plan.ipv4 === 'Included';
  const isIPv4Optional = plan.ipv4.toLowerCase().includes('optional');

  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      className={`relative flex flex-col p-10 rounded-[2.5rem] glass-card transition-all duration-500 group ${
        plan.isPremium ? 'border-brand-orange/20 bg-brand-orange/[0.04]' : ''
      }`}
    >
      {/* Glossy Reflection Overlay */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      {plan.isPremium && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-orange text-white text-[10px] font-black rounded-full uppercase tracking-[0.3em] flex items-center gap-2 shadow-[0_10px_30px_rgba(255,85,0,0.4)]">
          <span className="text-xs">★</span> Elite Tier
        </div>
      )}
      
      <div className="mb-12 text-center relative z-10">
        <h3 className="text-sm font-black mb-4 text-slate-500 uppercase tracking-[0.3em] group-hover:text-brand-orange transition-colors">
          {plan.name}
        </h3>
        
        {plan.priceINR ? (
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-white font-black text-4xl tracking-tighter">{plan.priceINR}</span>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">/mo</span>
            </div>
            <div className="mt-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5">
              <p className="text-slate-400 text-[10px] font-black tracking-widest">
                APPROX. {plan.priceUSD} USD
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-brand-orange/10 px-6 py-3 rounded-2xl inline-block border border-brand-orange/20">
             <p className="text-brand-orange font-black text-xl uppercase tracking-tighter">
              {plan.requirement}
            </p>
          </div>
        )}
      </div>

      <div className="flex-grow space-y-7 mb-12 relative z-10">
        {[
          { label: 'Memory', value: plan.ram, sub: 'DDR4 ECC' },
          { label: 'Compute', value: plan.cpu, sub: 'High Freq' },
          { label: 'Storage', value: plan.storage, sub: 'NVMe SSD' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-white/[0.03] pb-4">
            <div className="flex flex-col items-start">
               <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">{item.label}</span>
               <span className="text-[10px] text-slate-600 font-bold uppercase">{item.sub}</span>
            </div>
            <span className="font-black text-white text-base tracking-tight">{item.value}</span>
          </div>
        ))}

        <div className="flex items-center justify-between">
           <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">Public IP</span>
           <span className={`font-black text-[11px] uppercase tracking-[0.1em] px-3 py-1 rounded-lg ${
             isIPv4Included ? 'text-green-400 bg-green-400/10' : 
             isIPv4Optional ? 'text-brand-orange bg-brand-orange/10' : 
             'text-slate-600 bg-white/5'
           }`}>
              {plan.ipv4}
           </span>
        </div>

        {plan.notes && plan.notes.length > 0 && (
          <div className="pt-8 space-y-3">
            {plan.notes.map((note, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-brand-orange/50 text-xs mt-0.5">»</span>
                <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-wider">{note}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={DISCORD_INVITE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 w-full py-5 px-6 bg-brand-orange hover:bg-white text-white hover:text-brand-blue-darkest font-black rounded-2xl text-center text-xs transition-all duration-500 shadow-[0_10px_20px_rgba(255,85,0,0.15)] uppercase tracking-[0.3em]"
      >
        Order Node
      </motion.a>
    </motion.div>
  );
};
