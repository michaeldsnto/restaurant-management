import { useQuery } from '@tanstack/react-query';
import { customerApi } from '../api/customer-api';

export const useCustomerOrders = (customerId: number | null) => {
  return useQuery({
    queryKey: ['customer-orders', customerId],
    queryFn: () => customerApi.getOrders(customerId!).then(res => res.data),
    enabled: customerId !== null,
  });
};
