export type StockMovementType =

    | "purchase"
    | "sale"
    | "adjustment"
    | "waste"
    | "transfer";

export interface StockMovement {

    id: number;

    ingredient_id: number;

    ingredient_name: string;

    type: StockMovementType;

    quantity: number;

    previous_stock: number;

    current_stock: number;

    notes?: string;

    created_by: string;

    created_at: string;

}