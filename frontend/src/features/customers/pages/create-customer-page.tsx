import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateCustomer } from '../hooks/use-create-customer';
import { CustomerForm } from '../components/customer-form';
import type { CreateCustomerDTO } from '../types/customer';

export const CreateCustomerPage: React.FC = () => {
  const navigate = useNavigate();
  const createCustomer = useCreateCustomer();

  const handleSubmit = async (data: CreateCustomerDTO) => {
    try {
      const result = await createCustomer.mutateAsync(data);
      navigate(`/customers/${result.id}`);
    } catch (error) {
      console.error('Failed to create customer:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <button
          onClick={() => navigate('/customers')}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Customers
        </button>
        <h1 className="text-3xl font-bold mt-4">Create New Customer</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 border">
        <CustomerForm
          onSubmit={handleSubmit}
          isLoading={createCustomer.isPending}
        />
      </div>
    </div>
  );
};
