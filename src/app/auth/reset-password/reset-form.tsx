"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, Input, Password } from "rizzui";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "@/schemas/login-user/login-user";
import classNames from "classnames";
import { resetPasswordSchema } from "@/schemas/reset-password/reset-password";

const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  type FormValues = {
    email: string;

  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "all",
    defaultValues: {
      email: "",

    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    startTransition(() => {
      console.log(data);
    });
  };

  return (
    <div className="w-full py-10">
      <div
        className="
        2xl:text-2xl text-xl font-light text-primary 2xl:mt-0 mt-0"
      >
        Enter your email address to reset your password.
      </div>
      {/* <div className="2xl:text-4xl font-bold text-3xl text-primary mt-2">
        Welcome!
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7">
        <div>
          <Input
            disabled={isPending}
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email address"
            error={errors.email?.message}
          />
        </div>


        <Button
          type="submit"
          className="w-full disabled:opacity-50 bg-gradient-to-r from-customBlue to-customGreen mt-5"
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending ? "Loading..." : "Send Reset Link"}
        </Button>
      </form>
      <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
        Forget it? Send me back to{" "}
        <Link href="/auth/signin" className="text-primary hover:underline font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
