import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCustomer } from '../hooks/use-customer';
import { useCustomerOrders } from '../hooks/use-customer-orders';
import { CustomerDetails } from '../components/customer-details';
import { CustomerOrderHistory } from '../components/customer-order-history';

export const CustomerDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const customerId = id ? parseInt(id) : null;

  const { data: customer, isLoading: customerLoading } =
    useCustomer(customerId);
  const { data: orders = [], isLoading: ordersLoading } =
    useCustomerOrders(customerId);

  if (customerLoading) {
    return <div className="p-6">Loading customer details...</div>;
  }

  if (!customer) {
    return <div className="p-6">Customer not found</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/customers')}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Customers
        </button>
        <div className="space-x-2">
          <button
            onClick={() => navigate(`/customers/${customer.id}/edit`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
            Actions
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-6 border">
            <CustomerDetails customer={customer} isLoading={customerLoading} />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Loyalty Tier</p>
              <p className="font-semibold text-lg">Gold</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-semibold">
                {new Date(customer.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border">
        <CustomerOrderHistory
          orders={orders}
          isLoading={ordersLoading}
          onViewOrder={(order) => {
            // Navigate to order details
          }}
        />
      </div>
    </div>
  );
};
