import { api } from "@/api/axios";

export async function getIngredientsApi() {

    const response =
        await api.get(
            "/inventory/ingredients"
        );

    return response.data;
}

export async function getIngredientApi(
    id: number
) {

    const response =
        await api.get(
            `/inventory/ingredients/${id}`
        );

    return response.data;
}

export async function createIngredientApi(
    payload: unknown
) {

    const response =
        await api.post(
            "/inventory/ingredients",
            payload
        );

    return response.data;
}

export async function updateIngredientApi(
    id: number,
    payload: unknown
) {

    const response =
        await api.put(
            `/inventory/ingredients/${id}`,
            payload
        );

    return response.data;
}

export async function deleteIngredientApi(
    id: number
) {

    const response =
        await api.delete(
            `/inventory/ingredients/${id}`
        );

    return response.data;
}