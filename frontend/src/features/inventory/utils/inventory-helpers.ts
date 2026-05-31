import type { Ingredient } from "../types/ingredient";

export function calculateInventoryValue(
    ingredients: Ingredient[]
) {

    return ingredients.reduce(
        (total, ingredient) => {

            return (
                total +
                ingredient.current_stock *
                ingredient.cost_per_unit
            );

        },
        0
    );
}

export function countLowStockItems(
    ingredients: Ingredient[]
) {

    return ingredients.filter(
        (ingredient) =>
            ingredient.status ===
            "low_stock"
    ).length;

}

export function countOutOfStockItems(
    ingredients: Ingredient[]
) {

    return ingredients.filter(
        (ingredient) =>
            ingredient.status ===
            "out_of_stock"
    ).length;

}