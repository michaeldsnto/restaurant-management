export interface OrderItem {

    id: number;

    menu_item_id: number;

    menu_item_name: string;

    quantity: number;

    unit_price: number;

    subtotal: number;

    notes?: string;

    variants?: string[];

    modifiers?: string[];

}