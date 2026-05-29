import { z }
    from "zod";

export const registerSchema =
    z.object({

        name: z
            .string()
            .min(3),

        email: z
            .string()
            .email(),

        password: z
            .string()
            .min(6),

        password_confirmation:
            z.string(),

    }).refine(
        (data) =>

            data.password ===
            data.password_confirmation,

        {
            message:
                "Password mismatch",

            path: [
                "password_confirmation",
            ],
        }
    );

export type RegisterSchema =
    z.infer<
        typeof registerSchema
    >;