import { z } from "zod";

export const modifierSchema =
    z.object({

        name:
            z.string(),

        price:
            z.number(),

    });

export type ModifierFormValues =
    z.infer<
        typeof modifierSchema
    >;