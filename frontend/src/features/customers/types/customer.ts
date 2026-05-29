export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  status: 'active' | 'inactive' | 'banned';
  loyalty_points: number;
  total_spent: number;
  created_at: string;
  updated_at: string;
}

export interface CreateCustomerDTO {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface UpdateCustomerDTO extends Partial<CreateCustomerDTO> {
  status?: 'active' | 'inactive' | 'banned';
}

export interface CustomerWithOrders extends Customer {
  orders_count: number;
  last_order_date?: string;
}

export interface LoyaltyCard {
  customer_id: number;
  loyalty_points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  points_balance: number;
  last_reward_date?: string;
}
