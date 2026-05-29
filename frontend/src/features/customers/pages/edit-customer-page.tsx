import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCustomer } from '../hooks/use-customer';
import { useUpdateCustomer } from '../hooks/use-update-customer';
import { CustomerForm } from '../components/customer-form';
import type { CreateCustomerDTO } from '../types/customer';

export const EditCustomerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const customerId = id ? parseInt(id) : null;

  const { data: customer, isLoading: customerLoading } =
    useCustomer(customerId);
  const updateCustomer = useUpdateCustomer();

  const handleSubmit = async (data: CreateCustomerDTO) => {
    if (!customerId) return;

    try {
      await updateCustomer.mutateAsync({
        id: customerId,
        data,
      });
      navigate(`/customers/${customerId}`);
    } catch (error) {
      console.error('Failed to update customer:', error);
    }
  };

  if (customerLoading) {
    return <div className="p-6">Loading customer...</div>;
  }

  if (!customer) {
    return <div className="p-6">Customer not found</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <button
          onClick={() => navigate(`/customers/${customerId}`)}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Customer
        </button>
        <h1 className="text-3xl font-bold mt-4">Edit Customer</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 border">
        <CustomerForm
          initialData={customer}
          onSubmit={handleSubmit}
          isLoading={updateCustomer.isPending}
        />
      </div>
    </div>
  );
};
