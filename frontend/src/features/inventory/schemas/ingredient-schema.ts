import { z } from "zod";

export const ingredientSchema =
    z.object({

        sku: z.string()
            .min(3),

        name: z.string()
            .min(2),

        description:
            z.string().optional(),

        unit: z.enum([
            "kg",
            "gram",
            "liter",
            "ml",
            "pcs",
        ]),

        current_stock:
            z.number().min(0),

        minimum_stock:
            z.number().min(0),

        cost_per_unit:
            z.number().min(0),
    });

export type IngredientSchema =
    z.infer<
        typeof ingredientSchema
    >;