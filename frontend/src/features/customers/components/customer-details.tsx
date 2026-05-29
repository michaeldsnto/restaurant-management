import React from 'react';
import type { Customer } from '../types/customer';
import { formatDate, formatAddress } from '../utils/customer-formatters';

interface CustomerDetailsProps {
  customer: Customer | null;
  isLoading?: boolean;
}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  customer,
  isLoading = false,
}) => {
  if (isLoading) {
    return <div>Loading customer details...</div>;
  }

  if (!customer) {
    return <div>No customer selected</div>;
  }

  return (
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">{customer.name}</h2>
        <p className="text-gray-600">{customer.email}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Phone</p>
          <p className="font-semibold">{customer.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Status</p>
          <p className="font-semibold capitalize">{customer.status}</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600">Address</p>
        <p className="font-semibold">{formatAddress(customer)}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-600">Loyalty Points</p>
          <p className="font-semibold text-lg">{customer.loyalty_points}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Spent</p>
          <p className="font-semibold text-lg">
            ${customer.total_spent.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Member Since</p>
          <p className="font-semibold">{formatDate(customer.created_at)}</p>
        </div>
      </div>
    </div>
  );
};
