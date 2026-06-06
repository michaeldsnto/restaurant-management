// @ts-ignore: module "sonner" has no type declarations
import { toast } from "sonner";

export function showRealtimeToast(
    title: string,
    message: string
) {

    toast.success(
        title,
        {
            description:
                message,
        }
    );

}