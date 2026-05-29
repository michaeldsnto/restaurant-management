import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    forgotPasswordSchema,
    type ForgotPasswordSchema,
} from "../schemas/forgot-password-schema";

import {
    useForgotPassword,
} from "../hooks/use-forgot-password";

import Input
    from "@/components/ui/input";

import Button
    from "@/components/ui/button";

export default function ForgotPasswordForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordSchema>({
        resolver:
            zodResolver(
                forgotPasswordSchema
            ),
    });

    const forgotPasswordMutation =
        useForgotPassword();

    function onSubmit(
        data: ForgotPasswordSchema
    ) {

        forgotPasswordMutation.mutate(
            data
        );
    }

    return (

        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="space-y-5"
        >

            <div>

                <Input
                    placeholder="Email Address"
                    {...register("email")}
                />

                {errors.email && (

                    <p className="
            mt-2
            text-xs
            text-red-400
          ">
                        {errors.email.message}
                    </p>

                )}

            </div>

            <Button
                type="submit"
                className="w-full"
                loading={
                    forgotPasswordMutation.isPending
                }
            >
                Send Reset Link
            </Button>

        </form>

    );
}