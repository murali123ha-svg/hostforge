
import React from 'react';
import { VPSPlan } from '../types';
import { DISCORD_INVITE_LINK } from '../constants';

interface PlanCardProps {
  plan: VPSPlan;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div className={`relative flex flex-col p-6 rounded-2xl glass-card transition-all duration-300 transform hover:-translate-y-2 group ${plan.isPremium ? 'border-brand-yellow/30' : ''}`}>
      {plan.isPremium && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-yellow text-brand-dark text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
          <span>👑</span> Premium
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-brand-yellow transition-colors">{plan.name}</h3>
        <p className="text-brand-yellow font-display font-bold text-2xl">
          {plan.requirement}
        </p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-yellow/10 transition-colors">
            <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <div>
            <p className="text-xs text-neutral-400">RAM</p>
            <p className="font-semibold">{plan.ram}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-yellow/10 transition-colors">
            <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          </div>
          <div>
            <p className="text-xs text-neutral-400">CPU</p>
            <p className="font-semibold">{plan.cpu}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-yellow/10 transition-colors">
            <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <div>
            <p className="text-xs text-neutral-400">STORAGE</p>
            <p className="font-semibold">{plan.storage}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-yellow/10 transition-colors">
            <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
          </div>
          <div>
            <p className="text-xs text-neutral-400">IPv4 ADDRESS</p>
            <p className={`font-semibold ${plan.ipv4 ? 'text-green-400' : 'text-red-400'}`}>
              {plan.ipv4 ? 'Dedicated IPv4' : '❌ Not Included'}
            </p>
          </div>
        </div>

        {plan.notes && plan.notes.length > 0 && (
          <div className="pt-4 border-t border-white/5">
            {plan.notes.map((note, i) => (
              <p key={i} className="text-xs text-neutral-400 italic">✅ {note}</p>
            ))}
          </div>
        )}
      </div>

      <a
        href={DISCORD_INVITE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-6 bg-brand-yellow hover:bg-brand-gold text-brand-dark font-bold rounded-xl text-center transition-all duration-200 shadow-lg shadow-brand-yellow/10"
      >
        Get this Plan
      </a>
    </div>
  );
};
