import { useQuery } from '@tanstack/react-query';
import { customerApi } from '../api/customer-api';
import type { Customer } from '../types/customer';

export const useCustomers = (params?: Record<string, any>) => {
  return useQuery<Customer[]>({
    queryKey: ['customers', params],
    queryFn: () => customerApi.getAll(params).then(res => res.data),
  });
};
