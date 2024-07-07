"use client";
import MainLayout from "@/layouts/main/layout";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = true;

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/signin");
    }
  }, [isAuth]);

  return <MainLayout>{children}</MainLayout>;
};

export default ClientLayout;
