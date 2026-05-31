import {

    getIngredientsApi,

    getIngredientApi,

    createIngredientApi,

    updateIngredientApi,

    deleteIngredientApi,

} from "../api/inventory-api";

export const inventoryService = {

    getIngredients:
        getIngredientsApi,

    getIngredient:
        getIngredientApi,

    createIngredient:
        createIngredientApi,

    updateIngredient:
        updateIngredientApi,

    deleteIngredient:
        deleteIngredientApi,
};