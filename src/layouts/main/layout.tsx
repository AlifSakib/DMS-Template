"use client";

import Header from "@/layouts/main/header";
import Sidebar from "./sidebar";
import { useDispatch } from "react-redux";
import { closeDrawer, toggleDrawer } from "@/redux/features/drawer/drawerSlice";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-grow">
      <div className="flex w-full flex-col">
        <Header />
        <Sidebar />
        <div
          onClick={() => dispatch(closeDrawer())}
          className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9"
        >
          {children}
        </div>
      </div>
    </main>
  );
}
