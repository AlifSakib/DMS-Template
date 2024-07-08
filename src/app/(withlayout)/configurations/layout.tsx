"use client";

import ConfigurationLayout from "@/layouts/configuration/layout";
import { selectOption } from "@/redux/features/configuration/configurationSlice";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfigurationsLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = true;
  const pathname = usePathname();
  const dispatch = useDispatch();
  const selector = useSelector(
    (state: any) => state?.configuration?.selectedOption
  );

  useEffect(() => {
    if (pathname === "/configurations") {
      dispatch(selectOption(null));
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/signin");
    }
  }, [isAuth]);

  useEffect(() => {
    if (selector === null && pathname !== "/configurations") {
      redirect("/configurations");
    }
  }, [selector, pathname]);

  return <ConfigurationLayout>
    {children}
  </ConfigurationLayout>;
};

export default ConfigurationsLayout;
