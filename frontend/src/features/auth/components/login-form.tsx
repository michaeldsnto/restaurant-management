import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  loginSchema,
} from "../schemas/login-schema";

import type {
  LoginSchema,
} from "../schemas/login-schema";

import {
  useLogin,
} from "../hooks/use-login";

import Input
  from "@/components/ui/input";

import Button
  from "@/components/ui/button";

import PasswordInput
  from "./password-input";

export default function LoginForm() {

  const {
    register,
    handleSubmit,
  } = useForm<LoginSchema>({
    resolver:
      zodResolver(
        loginSchema
      ),
  });

  const loginMutation =
    useLogin();

  function onSubmit(
    data: LoginSchema
  ) {

    loginMutation.mutate(
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

      <Input
        placeholder="Email"
        {...register("email")}
      />

      <PasswordInput
        placeholder="Password"
        {...register("password")}
      />

      <Button
        type="submit"
        className="w-full"
        loading={
          loginMutation.isPending
        }
      >
        Sign In
      </Button>

    </form>

  );
}
