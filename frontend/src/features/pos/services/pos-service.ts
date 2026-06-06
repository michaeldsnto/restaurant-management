import {
    posApi,
} from "../api/pos-api";

export class PosService {

    static async products(
        filters?: any
    ) {

        return posApi.getProducts(
            filters
        );

    }

    static async categories() {

        return posApi.getCategories();

    }

    static async customers() {

        return posApi.getCustomers();

    }

    static async tables() {

        return posApi.getTables();

    }

    static async discounts() {

        return posApi.getDiscounts();

    }

    static async taxes() {

        return posApi.getTaxes();

    }

    static async paymentMethods() {

        return posApi.getPaymentMethods();

    }

    static async checkout(
        payload: any
    ) {

        return posApi.checkout(
            payload
        );

    }

}