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
import { routes } from "@/config/routes";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const router = useRouter();
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


        <div className="flex justify-between items-center mt-5">
        <div >
          <Link href={routes.auth.signin}>
          <h2 className="  text-center text-[16px] text-default-600 font-normal bg-clip-text text-transparent bg-gradient-to-r from-customBlue to-customGreen">
            Return to login
          </h2>
          </Link>
          <div className="h-[1px]  bg-gradient-to-r from-customBlue to-customGreen "></div>

        </div>
        <Button
          type="submit"
          className=" disabled:opacity-50 bg-gradient-to-r from-customBlue to-customGreen "
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending ? "Loading..." : "Send Reset Link"}
        </Button>
        </div>
      </form>
      
    </div>
  );
};

export default ResetPasswordForm;
