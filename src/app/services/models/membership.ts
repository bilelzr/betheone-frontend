export interface Membership {
  membershipPkId?: number;
  name?: string;
  description?: string;
  type?: MembershipType;
  price?: number;
  durationDays?: number;
  active?: boolean;
  includesClasses?: boolean;
  includesPersonalTraining?: boolean;
  maxClassesPerMonth?: number | null;
}

export interface MembershipDto {
  name: string;
  description?: string;
  type: MembershipType;
  price: number;
  durationDays: number;
  active: boolean;
  includesClasses: boolean;
  includesPersonalTraining: boolean;
  maxClassesPerMonth?: number | null;
}

export type MembershipType = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';

export const MEMBERSHIP_TYPES: { value: MembershipType; label: string; days: number }[] = [
  { value: 'DAILY', label: 'Daily', days: 1 },
  { value: 'WEEKLY', label: 'Weekly', days: 7 },
  { value: 'MONTHLY', label: 'Monthly', days: 30 },
  { value: 'QUARTERLY', label: 'Quarterly', days: 90 },
  { value: 'YEARLY', label: 'Yearly', days: 365 },
];
