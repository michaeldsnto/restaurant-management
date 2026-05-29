import React from 'react';
import type { Customer } from '../types/customer';

interface CustomerTableProps {
  customers: Customer[];
  isLoading?: boolean;
  onSelectCustomer?: (customer: Customer) => void;
  onEditCustomer?: (customer: Customer) => void;
  onDeleteCustomer?: (customer: Customer) => void;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  isLoading = false,
  onSelectCustomer,
  onEditCustomer,
  onDeleteCustomer,
}) => {
  if (isLoading) {
    return <div>Loading customers...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Loyalty Points</th>
            <th>Total Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.status}</td>
              <td>{customer.loyalty_points}</td>
              <td>${customer.total_spent.toFixed(2)}</td>
              <td>
                <button onClick={() => onSelectCustomer?.(customer)}>
                  View
                </button>
                <button onClick={() => onEditCustomer?.(customer)}>
                  Edit
                </button>
                <button onClick={() => onDeleteCustomer?.(customer)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
