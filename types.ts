
export interface VPSPlan {
  id: string;
  name: string;
  requirement?: string;
  priceINR?: string;
  priceUSD?: string;
  ram: string;
  cpu: string;
  storage: string;
  ipv4: string; // Changed to string to support "Optional", "Included", etc.
  bandwidth?: string;
  virtualization?: string;
  uptime?: string;
  notes?: string[];
  isPremium?: boolean;
}

export enum PlanType {
  BOOSTER = 'BOOSTER',
  INVITE = 'INVITE',
  BUDGET = 'BUDGET',
  PREMIUM = 'PREMIUM'
}
