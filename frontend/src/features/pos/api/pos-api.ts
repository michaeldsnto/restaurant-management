import { api } from "@/api/axios";

export interface ProductFilters {
    category_id?: number;
    search?: string;
    page?: number;
    per_page?: number;
}

export const posApi = {

    async getProducts(
        params?: ProductFilters
    ) {

        const response =
            await api.get(
                "/pos/products",
                {
                    params,
                }
            );

        return response.data;

    },

    async getCategories() {

        const response =
            await api.get(
                "/menu-categories"
            );

        return response.data;

    },

    async getCustomers() {

        const response =
            await api.get(
                "/customers"
            );

        return response.data;

    },

    async getTables() {

        const response =
            await api.get(
                "/restaurant-tables"
            );

        return response.data;

    },

    async getDiscounts() {

        const response =
            await api.get(
                "/discounts"
            );

        return response.data;

    },

    async getTaxes() {

        const response =
            await api.get(
                "/taxes"
            );

        return response.data;

    },

    async getPaymentMethods() {

        const response =
            await api.get(
                "/payment-methods"
            );

        return response.data;

    },

    async checkout(
        payload: any
    ) {

        const response =
            await api.post(
                "/pos/checkout",
                payload
            );

        return response.data;

    },

};