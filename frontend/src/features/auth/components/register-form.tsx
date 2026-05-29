import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    registerSchema,
    type RegisterSchema,
} from "../schemas/register-schema";

import {
    useRegister,
} from "../hooks/use-register";

import Input
    from "@/components/ui/input";

import Button
    from "@/components/ui/button";

import PasswordInput
    from "./password-input";

export default function RegisterForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchema>({
        resolver:
            zodResolver(
                registerSchema
            ),
    });

    const registerMutation =
        useRegister();

    function onSubmit(
        data: RegisterSchema
    ) {

        registerMutation.mutate(
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
                    placeholder="Full Name"
                    {...register("name")}
                />

                {errors.name && (

                    <p className="
            mt-2
            text-xs
            text-red-400
          ">
                        {errors.name.message}
                    </p>

                )}

            </div>

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

            <div>

                <PasswordInput
                    placeholder="Password"
                    {...register("password")}
                />

                {errors.password && (

                    <p className="
            mt-2
            text-xs
            text-red-400
          ">
                        {errors.password.message}
                    </p>

                )}

            </div>

            <div>

                <PasswordInput
                    placeholder="Confirm Password"
                    {...register(
                        "password_confirmation"
                    )}
                />

                {errors.password_confirmation && (

                    <p className="
            mt-2
            text-xs
            text-red-400
          ">
                        {
                            errors
                                .password_confirmation
                                .message
                        }
                    </p>

                )}

            </div>

            <Button
                type="submit"
                className="w-full"
                loading={
                    registerMutation.isPending
                }
            >
                Create Account
            </Button>

        </form>

    );
}