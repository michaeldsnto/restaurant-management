export type NotificationType =
    | "order"
    | "kitchen"
    | "inventory"
    | "reservation"
    | "payment"
    | "system";

export interface Notification {

    id: number;

    title: string;

    message: string;

    type: NotificationType;

    is_read: boolean;

    created_at: string;

    data?: Record<
        string,
        unknown
    >;
}