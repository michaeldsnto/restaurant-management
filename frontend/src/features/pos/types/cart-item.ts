export interface CartModifier {

    id: number;

    name: string;

    price: number;

}

export interface CartVariant {

    id: number;

    name: string;

    price: number;

}

export interface CartItem {

    id: number;

    menuItemId: number;

    name: string;

    sku: string;

    image?: string;

    quantity: number;

    price: number;

    note?: string;

    variant?: CartVariant;

    modifiers?: CartModifier[];

    subtotal: number;

}