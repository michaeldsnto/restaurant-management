export type PurchaseOrderStatus =

    | "draft"
    | "pending"
    | "approved"
    | "received"
    | "cancelled";

export interface PurchaseOrder {

    id: number;

    po_number: string;

    supplier_id: number;

    supplier_name: string;

    total_amount: number;

    status: PurchaseOrderStatus;

    order_date: string;

    expected_date: string;

}

export interface PurchaseOrderFormData {

    supplier_id: number;

    expected_date: string;

}