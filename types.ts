
export interface VPSPlan {
  id: string;
  name: string;
  requirement: string;
  ram: string;
  cpu: string;
  storage: string;
  ipv4: boolean;
  bandwidth?: string;
  virtualization?: string;
  uptime?: string;
  notes?: string[];
  isPremium?: boolean;
}

export enum PlanType {
  BOOSTER = 'BOOSTER',
  INVITE = 'INVITE'
}
