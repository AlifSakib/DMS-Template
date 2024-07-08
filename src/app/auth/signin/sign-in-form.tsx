"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Password } from "rizzui";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "@/schemas/login-user/login-user";

import { routes } from "@/config/routes";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginUserSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    startTransition(() => {
      console.log(data);
      setShowModal(true);
      // setTimeout(() => {
      //   setShowModal(false);
      //   router.push(routes.client.page);
      // }, 3000); // Adjust the duration as needed
    });
  };


  return (
    <div className="w-full py-10">
      <div
        className="
        2xl:text-6xl text-xl font-light text-primary 2xl:mt-0 mt-0"
      >
        Hello,
      </div>
      <div className="2xl:text-7xl font-bold text-3xl text-primary mt-2">
        Welcome!
      </div>
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

        <div className="mt-3.5">
          <div className="relative">
            <Password
              disabled={isPending}
              {...register("password")}
              id="password"
              placeholder="Enter your password"
              error={errors.password?.message}
            />
          </div>
        </div>
        {/* {errors.password && (
          <div className="text-destructive text-red-500 mt-2">
            {errors.password.message}
          </div>
        )} */}

        <div className="mt-5 mb-8 flex gap-2 w-full justify-end">
          <Link
            href={routes.auth.resetPassword}
            className="flex-none text-sm text-primary underline"
          >
            Reset Password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full disabled:opacity-50 bg-gradient-to-r from-customBlue to-customGreen"
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </form>

    </div>
  );
};

export default SignInForm;
