import React from 'react';
import type { Customer } from '../types/customer';
import { formatCurrency } from '../utils/customer-formatters';

interface CustomerStatisticsProps {
  customers: Customer[];
}

export const CustomerStatistics: React.FC<CustomerStatisticsProps> = ({
  customers,
}) => {
  const stats = {
    total: customers.length,
    active: customers.filter((c) => c.status === 'active').length,
    inactive: customers.filter((c) => c.status === 'inactive').length,
    banned: customers.filter((c) => c.status === 'banned').length,
    totalSpent: customers.reduce((sum, c) => sum + c.total_spent, 0),
    totalPoints: customers.reduce((sum, c) => sum + c.loyalty_points, 0),
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg border">
        <p className="text-sm text-gray-600">Total Customers</p>
        <p className="text-2xl font-bold">{stats.total}</p>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <p className="text-sm text-gray-600">Active</p>
        <p className="text-2xl font-bold text-green-600">{stats.active}</p>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <p className="text-sm text-gray-600">Total Spent</p>
        <p className="text-2xl font-bold">{formatCurrency(stats.totalSpent)}</p>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <p className="text-sm text-gray-600">Total Points</p>
        <p className="text-2xl font-bold">{stats.totalPoints.toLocaleString()}</p>
      </div>
    </div>
  );
};
