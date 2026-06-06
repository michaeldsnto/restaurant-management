import type {
    NotificationType,
} from "./notification";

export interface NotificationFilter {

    search?: string;

    type?:
    NotificationType;

    is_read?: boolean;

    page?: number;

    per_page?: number;

}