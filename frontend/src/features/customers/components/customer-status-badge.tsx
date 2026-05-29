import React from 'react';
import type { Customer } from '../types/customer';

interface CustomerStatusBadgeProps {
  customer: Customer;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const CustomerStatusBadge: React.FC<CustomerStatusBadgeProps> = ({
  customer,
  size = 'md',
  showLabel = true,
}) => {
  const baseClasses =
    'rounded-full font-semibold inline-flex items-center justify-center';

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const statusClasses = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    banned: 'bg-red-100 text-red-800',
  };

  const statusDot = {
    active: 'bg-green-600',
    inactive: 'bg-gray-400',
    banned: 'bg-red-600',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${statusClasses[customer.status]}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${statusDot[customer.status]} mr-2`}
      ></span>
      {showLabel && <span className="capitalize">{customer.status}</span>}
    </span>
  );
};
