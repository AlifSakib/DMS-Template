"use client";

import ConfigurationLayout from "@/layouts/configuration/layout";
import { selectOption } from "@/redux/features/configuration/configurationSlice";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = true;

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/signin");
    }
  }, [isAuth]);

  return <ConfigurationLayout>{children}</ConfigurationLayout>;
};

export default ClientLayout;
