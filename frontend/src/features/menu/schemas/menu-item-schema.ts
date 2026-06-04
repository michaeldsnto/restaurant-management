import { z } from "zod";

export const menuItemSchema =
    z.object({

        category_id:
            z.number(),

        name: z
            .string()
            .min(2),

        description:
            z.string(),

        base_price:
            z.number(),

        is_available:
            z.boolean(),

        image:
            z.string().optional(),

    });

export type MenuItemFormValues =
    z.infer<
        typeof menuItemSchema
    >;