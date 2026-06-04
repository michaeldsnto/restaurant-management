import { z } from "zod";

export const variantSchema =
    z.object({

        name:
            z.string(),

        price_adjustment:
            z.number(),

    });

export type VariantFormValues =
    z.infer<
        typeof variantSchema
    >;