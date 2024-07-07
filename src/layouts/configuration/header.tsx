"use client";

import { routes } from "@/config/routes";
import Link from "next/link";
import { useSelector } from "react-redux";

const ConfigurationHeader = () => {
  const selector = useSelector(
    (state: any) => state?.configuration?.selectedOption
  );

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-screen-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className=" flex items-center justify-center gap-4 ">
            <div>
              <Link
                className="block text-teal-600 text-2xl font-bold"
                href={routes.configurations.page}
              >
                <span className="sr-only">Home</span>
                <h2>DigiQore</h2>
              </Link>
            </div>

            <div>
              {selector !== null && (
                <div className="hidden md:block">
                  <Link href={routes.configurations.page}>
                    <button className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="font-bold text-lg">
            {selector === null ? (
              <h2 className="text-lg">Configurations</h2>
            ) : (
              <h2 className="text-lg">{selector?.title}</h2>
            )}
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <button className="rounded-full bg-gray-100 px-4 py-2.5 text-sm font-medium text-teal-600">
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
  );
};

export default ConfigurationHeader;
