import { useQuery } from '@tanstack/react-query';
import { customerApi } from '../api/customer-api';
import type { Customer } from '../types/customer';

export const useCustomer = (id: number | null) => {
  return useQuery<Customer>({
    queryKey: ['customer', id],
    queryFn: () => customerApi.getById(id!).then(res => res.data),
    enabled: id !== null,
  });
};
