export type PaymentMethodType =

    | "cash"
    | "credit_card"
    | "debit_card"
    | "bank_transfer"
    | "qris"
    | "ewallet";

export interface PaymentMethod {

    id: number;

    code: PaymentMethodType;

    name: string;

    is_active: boolean;

}