"use client";

import { useDispatch } from "react-redux";

import {
  closeDrawer,
  openDrawer,
  toggleDrawer,
} from "@/redux/features/drawer/drawerSlice";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <header className="bg-white border-b">
        <div className="mx-auto max-w-screen-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 text-2xl font-bold" href="#">
                <span className="sr-only">Home</span>
                Logo
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-full bg-teal-600 px-4 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    N
                  </a>

                  <div className="hidden sm:flex">
                    <button
                      className="rounded-full bg-gray-100 px-4 py-2.5 text-sm font-medium text-teal-600"
                      onClick={() => dispatch(toggleDrawer())}
                    >
                      P
                    </button>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
