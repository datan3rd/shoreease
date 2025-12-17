export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum SubscriptionTier {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  FAMILY = 'FAMILY'
}