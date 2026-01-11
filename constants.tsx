
import { VPSPlan } from './types';

export const DISCORD_INVITE_LINK = 'https://discord.gg/krUBn7Aw';
// Using a high-quality generic server/bolt icon that fits the brand
export const LOGO_URL = 'https://img.icons8.com/isometric/512/FFFFFF/server.png'; 
export const LOGO_YELLOW_URL = 'https://img.icons8.com/isometric/512/FACC15/server.png';

export const BOOSTER_PLANS: VPSPlan[] = [
  {
    id: 'booster-1',
    name: 'Booster VPS – Tier 1',
    requirement: '1 Boost',
    ram: '8 GB',
    cpu: '4 vCPU',
    storage: '80 GB SSD',
    ipv4: false,
    isPremium: true
  },
  {
    id: 'booster-2',
    name: 'Booster VPS – Tier 2',
    requirement: '2 Boosts',
    ram: '16 GB',
    cpu: '5 vCPU',
    storage: '160 GB SSD',
    ipv4: false,
    isPremium: true
  },
  {
    id: 'booster-3',
    name: 'Booster VPS – Tier 3',
    requirement: '4 Boosts',
    ram: '24 GB',
    cpu: '6 vCPU',
    storage: '240 GB SSD',
    ipv4: true,
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
    ipv4: false,
    bandwidth: 'Limited',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Light projects & bots.']
  },
  {
    id: 'invite-2',
    name: 'Basic VPS',
    requirement: '4 Invites',
    ram: '4 GB',
    cpu: '2 vCPU (Shared)',
    storage: '30 GB SSD',
    ipv4: false,
    bandwidth: 'Basic',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Small projects & bots.']
  },
  {
    id: 'invite-3',
    name: 'Standard VPS',
    requirement: '8 Invites',
    ram: '6 GB',
    cpu: '3 vCPU (Shared)',
    storage: '60 GB SSD',
    ipv4: false,
    bandwidth: 'Medium',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Medium projects & bots.']
  },
  {
    id: 'invite-4',
    name: 'Advanced VPS',
    requirement: '12 Invites',
    ram: '8 GB',
    cpu: '4 vCPU (Shared)',
    storage: '80 GB SSD',
    ipv4: false,
    bandwidth: 'Medium',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Advanced projects, APIs & services.']
  },
  {
    id: 'invite-5',
    name: 'Pro VPS',
    requirement: '16 Invites',
    ram: '12 GB',
    cpu: '6 vCPU (Shared)',
    storage: '100 GB SSD',
    ipv4: false,
    bandwidth: 'Medium',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Large bots, web hosting, game panels.']
  },
  {
    id: 'invite-6',
    name: 'Exclusive VPS',
    requirement: '20 Invites',
    ram: '8 GB',
    cpu: '4 vCPU (Shared)',
    storage: '60 GB SSD',
    ipv4: true,
    bandwidth: 'Medium',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Dedicated IPv4 included']
  },
  {
    id: 'invite-7',
    name: 'Elite VPS',
    requirement: '30 Invites',
    ram: '24 GB',
    cpu: '8 vCPU (Shared)',
    storage: '150 GB SSD',
    ipv4: false,
    bandwidth: 'Standard',
    virtualization: 'Proxmox',
    uptime: 'Best effort',
    notes: ['Professional bot hosting, services and advanced game panels.']
  }
];
