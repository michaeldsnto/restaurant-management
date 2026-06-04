export interface RecipeIngredient {

    ingredient_id: number;

    ingredient_name: string;

    quantity: number;

    unit: string;

}

export interface Recipe {

    id: number;

    menu_item_id: number;

    ingredients: RecipeIngredient[];

}