export type IngredientUnit =
    | "kg"
    | "gram"
    | "liter"
    | "ml"
    | "pcs";

export type IngredientStatus =
    | "in_stock"
    | "low_stock"
    | "out_of_stock";

export interface Ingredient {

    id: number;

    sku: string;

    name: string;

    description?: string;

    unit: IngredientUnit;

    current_stock: number;

    minimum_stock: number;

    cost_per_unit: number;

    status: IngredientStatus;

    created_at: string;

    updated_at: string;
}

export interface IngredientFormData {

    name: string;

    sku: string;

    description?: string;

    unit: IngredientUnit;

    current_stock: number;

    minimum_stock: number;

    cost_per_unit: number;
}