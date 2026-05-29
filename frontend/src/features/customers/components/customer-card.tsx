import React from 'react';
import type { Customer } from '../types/customer';
import { getCustomerInitials } from '../utils/customer-helpers';

interface CustomerCardProps {
  customer: Customer;
  onClick?: () => void;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onClick,
}) => {
  return (
    <div
      className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {getCustomerInitials(customer.name)}
          </div>
          <div>
            <h3 className="font-semibold">{customer.name}</h3>
            <p className="text-sm text-gray-600">{customer.email}</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 rounded text-sm font-medium ${
            customer.status === 'active'
              ? 'bg-green-100 text-green-800'
              : customer.status === 'inactive'
                ? 'bg-gray-100 text-gray-800'
                : 'bg-red-100 text-red-800'
          }`}
        >
          {customer.status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-gray-600">Loyalty Points</p>
          <p className="font-semibold">{customer.loyalty_points}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Total Spent</p>
          <p className="font-semibold">${customer.total_spent.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
