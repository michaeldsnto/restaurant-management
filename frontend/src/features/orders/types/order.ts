import type {
    OrderItem,
} from "./order-item";

import type {
    OrderStatus,
    PaymentStatus,
    OrderType,
} from "./order-status";

export interface Order {

    id: number;

    order_number: string;

    customer_name?: string;

    customer_phone?: string;

    table_number?: string;

    branch_id: number;

    order_type: OrderType;

    order_status: OrderStatus;

    payment_status: PaymentStatus;

    subtotal: number;

    tax_amount: number;

    discount_amount: number;

    grand_total: number;

    notes?: string;

    items: OrderItem[];

    created_at: string;

    updated_at: string;

}