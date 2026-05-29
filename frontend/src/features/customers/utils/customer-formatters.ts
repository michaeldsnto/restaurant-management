import type { Customer } from '../types/customer';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatDateLong = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  return phone;
};

export const formatEmail = (email: string): string => {
  return email.toLowerCase().trim();
};

export const formatAddress = (customer: Customer): string => {
  return `${customer.address}, ${customer.city}, ${customer.postal_code}, ${customer.country}`;
};

export const formatCustomerName = (customer: Customer): string => {
  return customer.name.trim();
};

export const formatLoyaltyPoints = (points: number): string => {
  return points.toLocaleString('en-US');
};

export const formatTotalSpent = (amount: number): string => {
  return formatCurrency(amount);
};
