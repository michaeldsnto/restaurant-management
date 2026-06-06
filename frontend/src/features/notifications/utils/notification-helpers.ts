import type {
    NotificationType,
} from "../types/notification";

export function
    getNotificationIcon(
        type:
            NotificationType
    ) {

    switch (type) {

        case "order":
            return "🛒";

        case "inventory":
            return "📦";

        case "kitchen":
            return "👨‍🍳";

        case "reservation":
            return "📅";

        case "payment":
            return "💳";

        default:
            return "🔔";

    }

}