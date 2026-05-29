import { customerApi } from '../api/customer-api';
import type { Customer, CreateCustomerDTO, UpdateCustomerDTO } from '../types/customer';

export class CustomerService {
  static async getAllCustomers(filters?: Record<string, any>) {
    try {
      return await customerApi.getAll(filters);
    } catch (error) {
      console.error('Failed to fetch customers:', error);
      throw error;
    }
  }

  static async getCustomerById(id: number) {
    try {
      return await customerApi.getById(id);
    } catch (error) {
      console.error('Failed to fetch customer:', error);
      throw error;
    }
  }

  static async createCustomer(data: CreateCustomerDTO) {
    try {
      return await customerApi.create(data);
    } catch (error) {
      console.error('Failed to create customer:', error);
      throw error;
    }
  }

  static async updateCustomer(id: number, data: UpdateCustomerDTO) {
    try {
      return await customerApi.update(id, data);
    } catch (error) {
      console.error('Failed to update customer:', error);
      throw error;
    }
  }

  static async deleteCustomer(id: number) {
    try {
      return await customerApi.delete(id);
    } catch (error) {
      console.error('Failed to delete customer:', error);
      throw error;
    }
  }

  static async searchCustomers(query: string) {
    try {
      return await customerApi.search(query);
    } catch (error) {
      console.error('Failed to search customers:', error);
      throw error;
    }
  }

  static async getCustomerOrders(customerId: number) {
    try {
      return await customerApi.getOrders(customerId);
    } catch (error) {
      console.error('Failed to fetch customer orders:', error);
      throw error;
    }
  }

  static async getLoyaltyCard(customerId: number) {
    try {
      return await customerApi.getLoyaltyCard(customerId);
    } catch (error) {
      console.error('Failed to fetch loyalty card:', error);
      throw error;
    }
  }
}
