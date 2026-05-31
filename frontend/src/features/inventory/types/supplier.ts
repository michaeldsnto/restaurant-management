export interface Supplier {

    id: number;

    code: string;

    name: string;

    contact_person: string;

    email: string;

    phone: string;

    address: string;

    status:
    | "active"
    | "inactive";

    created_at: string;

}

export interface SupplierFormData {

    code: string;

    name: string;

    contact_person: string;

    email: string;

    phone: string;

    address: string;

}