export type KitchenOrderStatus =

    | "pending"
    | "preparing"
    | "ready"
    | "served";

export type KitchenPriority =
 
    | "normal"
    | "high"
    | "urgent";

export interface KitchenOrderItem {

    id: number;

    menu_item_id: number;

    menu_name: string;

    quantity: number;

    notes?: string;

}

export interface KitchenOrder {

    id: number;

    order_number: string;

    table_name?: string;

    waiter_name?: string;

    customer_name?: string;

    priority: KitchenPriority;

    status: KitchenOrderStatus;

    estimated_time: number;

    elapsed_time: number;

    created_at: string;

    items: KitchenOrderItem[];
}