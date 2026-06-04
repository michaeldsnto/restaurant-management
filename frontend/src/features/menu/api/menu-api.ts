import { api } from "@/api/axios";

export interface MenuQueryParams {

    page?: number;

    per_page?: number;

    search?: string;

    category_id?: number;

    is_available?: boolean;

    sort_by?: string;

    sort_direction?: "asc" | "desc";

}

export const menuApi = {

    /*
    |--------------------------------------------------------------------------
    | Categories
    |--------------------------------------------------------------------------
    */

    async getCategories() {

        const response =
            await api.get(
                "/menu-categories"
            );

        return response.data;
    },

    async getCategory(
        id: number
    ) {

        const response =
            await api.get(
                `/menu-categories/${id}`
            );

        return response.data;
    },

    async createCategory(
        payload: any
    ) {

        const response =
            await api.post(
                "/menu-categories",
                payload
            );

        return response.data;
    },

    async updateCategory(
        id: number,
        payload: any
    ) {

        const response =
            await api.put(
                `/menu-categories/${id}`,
                payload
            );

        return response.data;
    },

    async deleteCategory(
        id: number
    ) {

        const response =
            await api.delete(
                `/menu-categories/${id}`
            );

        return response.data;
    },

    /*
    |--------------------------------------------------------------------------
    | Menu Items
    |--------------------------------------------------------------------------
    */

    async getItems(
        params?: MenuQueryParams
    ) {

        const response =
            await api.get(
                "/menu-items",
                {
                    params,
                }
            );

        return response.data;
    },

    async getItem(
        id: number
    ) {

        const response =
            await api.get(
                `/menu-items/${id}`
            );

        return response.data;
    },

    async createItem(
        payload: FormData | any
    ) {

        const response =
            await api.post(
                "/menu-items",
                payload
            );

        return response.data;
    },

    async updateItem(
        id: number,
        payload: FormData | any
    ) {

        const response =
            await api.put(
                `/menu-items/${id}`,
                payload
            );

        return response.data;
    },

    async deleteItem(
        id: number
    ) {

        const response =
            await api.delete(
                `/menu-items/${id}`
            );

        return response.data;
    },

    /*
    |--------------------------------------------------------------------------
    | Variants
    |--------------------------------------------------------------------------
    */

    async getVariants(
        menuItemId: number
    ) {

        const response =
            await api.get(
                `/menu-items/${menuItemId}/variants`
            );

        return response.data;
    },

    async createVariant(
        menuItemId: number,
        payload: any
    ) {

        const response =
            await api.post(
                `/menu-items/${menuItemId}/variants`,
                payload
            );

        return response.data;
    },

    async updateVariant(
        variantId: number,
        payload: any
    ) {

        const response =
            await api.put(
                `/menu-variants/${variantId}`,
                payload
            );

        return response.data;
    },

    async deleteVariant(
        variantId: number
    ) {

        const response =
            await api.delete(
                `/menu-variants/${variantId}`
            );

        return response.data;
    },

    /*
    |--------------------------------------------------------------------------
    | Modifiers
    |--------------------------------------------------------------------------
    */

    async getModifiers(
        menuItemId: number
    ) {

        const response =
            await api.get(
                `/menu-items/${menuItemId}/modifiers`
            );

        return response.data;
    },

    async createModifier(
        menuItemId: number,
        payload: any
    ) {

        const response =
            await api.post(
                `/menu-items/${menuItemId}/modifiers`,
                payload
            );

        return response.data;
    },

    async updateModifier(
        modifierId: number,
        payload: any
    ) {

        const response =
            await api.put(
                `/menu-modifiers/${modifierId}`,
                payload
            );

        return response.data;
    },

    async deleteModifier(
        modifierId: number
    ) {

        const response =
            await api.delete(
                `/menu-modifiers/${modifierId}`
            );

        return response.data;
    },

    /*
    |--------------------------------------------------------------------------
    | Recipe
    |--------------------------------------------------------------------------
    */

    async getRecipe(
        menuItemId: number
    ) {

        const response =
            await api.get(
                `/menu-items/${menuItemId}/recipe`
            );

        return response.data;
    },

    async saveRecipe(
        menuItemId: number,
        payload: any
    ) {

        const response =
            await api.post(
                `/menu-items/${menuItemId}/recipe`,
                payload
            );

        return response.data;
    },

    /*
    |--------------------------------------------------------------------------
    | Image Upload
    |--------------------------------------------------------------------------
    */

    async uploadImage(
        file: File
    ) {

        const formData =
            new FormData();

        formData.append(
            "image",
            file
        );

        const response =
            await api.post(
                "/uploads/menu-image",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                }
            );

        return response.data;
    },

};