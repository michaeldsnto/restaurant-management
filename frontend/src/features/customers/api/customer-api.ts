import { api } from "@/api/axios";
import type {
    Customer,
    CreateCustomerDTO,
    UpdateCustomerDTO,
    CustomerWithOrders,
    LoyaltyCard,
} from '../types/customer';

const ENDPOINTS = {
  CUSTOMERS: '/customers',
  CUSTOMER: (id: number) => `/customers/${id}`,
  LOYALTY_CARD: (id: number) => `/customers/${id}/loyalty-card`,
  CUSTOMER_ORDERS: (id: number) => `/customers/${id}/orders`,
};

export const customerApi = {
  getAll: async (params?: Record<string, any>) => {
    return api.get<Customer[]>(ENDPOINTS.CUSTOMERS, { params });
  },

  getById: async (id: number) => {
    return api.get<Customer>(ENDPOINTS.CUSTOMER(id));
  },

  create: async (data: CreateCustomerDTO) => {
    return api.post<Customer>(ENDPOINTS.CUSTOMERS, data);
  },

  update: async (id: number, data: UpdateCustomerDTO) => {
    return api.put<Customer>(ENDPOINTS.CUSTOMER(id), data);
  },

  delete: async (id: number) => {
    return api.delete(ENDPOINTS.CUSTOMER(id));
  },

  getLoyaltyCard: async (customerId: number) => {
    return api.get<LoyaltyCard>(ENDPOINTS.LOYALTY_CARD(customerId));
  },

  getOrders: async (customerId: number, params?: Record<string, any>) => {
    return api.get<any[]>(ENDPOINTS.CUSTOMER_ORDERS(customerId), { params });
  },

  search: async (query: string) => {
    return api.get<Customer[]>(ENDPOINTS.CUSTOMERS, {
      params: { search: query },
    });
  },
};
