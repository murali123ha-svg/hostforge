
import { VPSPlan } from './types';
import { HOSTFORGE_LOGO_URL } from './brand-assets';

export const DISCORD_INVITE_LINK = 'https://discord.gg/krUBn7Aw';
export const LOGO_ORANGE_URL = HOSTFORGE_LOGO_URL; 

export const BOOSTER_PLANS: VPSPlan[] = [
  {
    id: 'booster-1',
    name: 'Booster VPS – Tier 1',
    requirement: '1 Boost',
    ram: '8 GB',
    cpu: '4 vCPU',
    storage: '80 GB SSD',
    ipv4: '❌ Not Included',
    isPremium: true
  },
  {
    id: 'booster-2',
    name: 'Booster VPS – Tier 2',
    requirement: '2 Boosts',
    ram: '16 GB',
    cpu: '5 vCPU',
    storage: '160 GB SSD',
    ipv4: '❌ Not Included',
    isPremium: true
  },
  {
    id: 'booster-3',
    name: 'Booster VPS – Tier 3',
    requirement: '4 Boosts',
    ram: '24 GB',
    cpu: '6 vCPU',
    storage: '240 GB SSD',
    ipv4: '✅ Included',
    isPremium: true
  }
];

export const INVITE_PLANS: VPSPlan[] = [
  {
    id: 'invite-1',
    name: 'Starter VPS',
    requirement: '2 Invites',
    ram: '2 GB',
    cpu: '1 vCPU (Shared)',
    storage: '15 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Light projects & bots.']
  },
  {
    id: 'invite-2',
    name: 'Basic VPS',
    requirement: '4 Invites',
    ram: '4 GB',
    cpu: '2 vCPU (Shared)',
    storage: '30 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Small projects & bots.']
  },
  {
    id: 'invite-3',
    name: 'Standard VPS',
    requirement: '8 Invites',
    ram: '6 GB',
    cpu: '3 vCPU (Shared)',
    storage: '60 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Medium projects & bots.']
  },
  {
    id: 'invite-4',
    name: 'Advanced VPS',
    requirement: '12 Invites',
    ram: '8 GB',
    cpu: '4 vCPU (Shared)',
    storage: '80 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Advanced projects, APIs & services.']
  },
  {
    id: 'invite-5',
    name: 'Pro VPS',
    requirement: '16 Invites',
    ram: '12 GB',
    cpu: '6 vCPU (Shared)',
    storage: '100 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Large bots, web hosting.']
  },
  {
    id: 'invite-6',
    name: 'Exclusive VPS',
    requirement: '20 Invites',
    ram: '8 GB',
    cpu: '4 vCPU (Shared)',
    storage: '60 GB SSD',
    ipv4: '✅ Included',
    notes: ['Dedicated IPv4 included']
  },
  {
    id: 'invite-7',
    name: 'Elite VPS',
    requirement: '30 Invites',
    ram: '24 GB',
    cpu: '8 vCPU (Shared)',
    storage: '150 GB SSD',
    ipv4: '❌ Not Included',
    notes: ['Professional bot hosting.']
  }
];

export const BUDGET_PLANS: VPSPlan[] = [
  { id: 'b-1', name: 'Budget Tier 1', priceINR: '₹49', priceUSD: '$0.59', ram: '2 GB', cpu: '2 vCPU', storage: '30 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-2', name: 'Budget Tier 2', priceINR: '₹79', priceUSD: '$0.99', ram: '4 GB', cpu: '2 vCPU', storage: '40 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-3', name: 'Budget Tier 3', priceINR: '₹99', priceUSD: '$1.19', ram: '6 GB', cpu: '3 vCPU', storage: '60 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-4', name: 'Budget Tier 4', priceINR: '₹139', priceUSD: '$1.69', ram: '8 GB', cpu: '4 vCPU', storage: '80 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-5', name: 'Budget Tier 5', priceINR: '₹179', priceUSD: '$2.19', ram: '12 GB', cpu: '4 vCPU', storage: '120 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-6', name: 'Budget Tier 6', priceINR: '₹249', priceUSD: '$2.99', ram: '16 GB', cpu: '6 vCPU', storage: '180 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-7', name: 'Budget Tier 7', priceINR: '₹299', priceUSD: '$3.49', ram: '24 GB', cpu: '7 vCPU', storage: '240 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-8', name: 'Budget Tier 8', priceINR: '₹349', priceUSD: '$3.99', ram: '32 GB', cpu: '8 vCPU', storage: '240 GB SSD', ipv4: '❌ Unavailable' },
  { id: 'b-9', name: 'Custom VPS', priceINR: '₹299', priceUSD: '$3.99', ram: 'Custom', cpu: 'Custom', storage: 'Custom', ipv4: '❌ Unavailable', notes: ['Customizable specs'] }
];

export const PREMIUM_PLANS_PAID: VPSPlan[] = [
  { id: 'p-1', name: 'Premium Tier 1', priceINR: '₹99', priceUSD: '$1.49', ram: '4 GB', cpu: '2 vCPU', storage: '30 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-2', name: 'Premium Tier 2', priceINR: '₹149', priceUSD: '$1.99', ram: '6 GB', cpu: '3 vCPU', storage: '60 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-3', name: 'Premium Tier 3', priceINR: '₹199', priceUSD: '$2.49', ram: '8 GB', cpu: '4 vCPU', storage: '90 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-4', name: 'Premium Tier 4', priceINR: '₹249', priceUSD: '$2.99', ram: '12 GB', cpu: '5 vCPU', storage: '120 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-5', name: 'Premium Tier 5', priceINR: '₹299', priceUSD: '$3.49', ram: '16 GB', cpu: '6 vCPU', storage: '160 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-6', name: 'Premium Tier 6', priceINR: '₹349', priceUSD: '$3.99', ram: '24 GB', cpu: '7 vCPU', storage: '240 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-7', name: 'Premium Tier 7', priceINR: '₹399', priceUSD: '$4.49', ram: '32 GB', cpu: '8 vCPU', storage: '320 GB SSD', ipv4: 'Optional', isPremium: true },
  { id: 'p-8', name: 'Custom VPS', priceINR: '₹149', priceUSD: '$1.69', ram: 'Custom', cpu: 'Custom', storage: 'Custom', ipv4: 'Optional', isPremium: true, notes: ['High performance custom'] }
];
