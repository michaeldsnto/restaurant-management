import React from 'react';
import { formatDate, formatCurrency } from '../utils/customer-formatters';

interface Order {
  id: number;
  order_number: string;
  total: number;
  status: string;
  created_at: string;
  items_count: number;
}

interface CustomerOrderHistoryProps {
  orders: Order[];
  isLoading?: boolean;
  onViewOrder?: (order: Order) => void;
}

export const CustomerOrderHistory: React.FC<CustomerOrderHistoryProps> = ({
  orders,
  isLoading = false,
  onViewOrder,
}) => {
  if (isLoading) {
    return <div>Loading order history...</div>;
  }

  if (orders.length === 0) {
    return <div>No orders found</div>;
  }

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">Order History</h3>
      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
          onClick={() => onViewOrder?.(order)}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Order #{order.order_number}</p>
              <p className="text-sm text-gray-600">
                {order.items_count} items
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{formatCurrency(order.total)}</p>
              <p className="text-sm text-gray-600">
                {formatDate(order.created_at)}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                order.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
