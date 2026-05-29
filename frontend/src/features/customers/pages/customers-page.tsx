import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomers } from '../hooks/use-customers';
import { CustomerTable } from '../components/customer-table';
import { CustomerSearch } from '../components/customer-search';
import { CustomerFilters } from '../components/customer-filters';
import { CustomerStatistics } from '../components/customer-statistics';
import { useDeleteCustomer } from '../hooks/use-delete-customer';

export const CustomersPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('name');

  const { data: customers = [], isLoading } = useCustomers();
  const deleteCustomer = useDeleteCustomer();

  const handleSelectCustomer = (id: number) => {
    navigate(`/customers/${id}`);
  };

  const handleEditCustomer = (id: number) => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDeleteCustomer = async (id: number) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      await deleteCustomer.mutateAsync(id);
    }
  };

  const handleCreateCustomer = () => {
    navigate('/customers/create');
  };

  let filteredCustomers = customers;

  // Apply status filter
  if (statusFilter) {
    filteredCustomers = filteredCustomers.filter(
      (c) => c.status === statusFilter
    );
  }

  // Apply search
  if (searchQuery) {
    filteredCustomers = filteredCustomers.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.phone.includes(searchQuery)
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customers</h1>
        <button
          onClick={handleCreateCustomer}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Customer
        </button>
      </div>

      <CustomerStatistics customers={customers} />

      <div className="space-y-4">
        <CustomerSearch onSearch={setSearchQuery} isLoading={isLoading} />
        <CustomerFilters
          onStatusChange={setStatusFilter}
          onSortChange={setSortBy}
          currentStatus={statusFilter}
          currentSort={sortBy}
        />
      </div>

      <CustomerTable
        customers={filteredCustomers}
        isLoading={isLoading}
        onSelectCustomer={(customer) => handleSelectCustomer(customer.id)}
        onEditCustomer={(customer) => handleEditCustomer(customer.id)}
        onDeleteCustomer={(customer) => handleDeleteCustomer(customer.id)}
      />
    </div>
  );
};
