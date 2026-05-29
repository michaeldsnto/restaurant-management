import type { Customer, LoyaltyCard } from '../types/customer';

export const isActiveCustomer = (customer: Customer): boolean => {
  return customer.status === 'active';
};

export const isBannedCustomer = (customer: Customer): boolean => {
  return customer.status === 'banned';
};

export const getCustomerInitials = (name: string): string => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const getLoyaltyTier = (points: number): string => {
  if (points >= 10000) return 'Platinum';
  if (points >= 5000) return 'Gold';
  if (points >= 1000) return 'Silver';
  return 'Bronze';
};

export const calculateLoyaltyTierColor = (
  tier: LoyaltyCard['tier']
): string => {
  const colors: Record<string, string> = {
    bronze: '#CD7F32',
    silver: '#C0C0C0',
    gold: '#FFD700',
    platinum: '#E5E4E2',
  };
  return colors[tier] || '#FFD700';
};

export const formatCustomerPhone = (phone: string): string => {
  // Remove non-digits
  const cleaned = phone.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX for 10-digit numbers
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  return phone;
};

export const sortCustomersByName = (customers: Customer[]): Customer[] => {
  return [...customers].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortCustomersByPoints = (customers: Customer[]): Customer[] => {
  return [...customers].sort((a, b) => b.loyalty_points - a.loyalty_points);
};
