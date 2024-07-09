"use client";

import { routes } from "@/config/routes";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Link from "next/link";

export default function Sidebar() {
  const isOpen = useAppSelector((state) => state.drawer.isOpen);

  return (
    <div
      className={`fixed top-[65px] right-0 flex flex-col justify-between border bg-white transition-all duration-300 transform ${
        isOpen ? "translate-x-0 w-[320px]" : "translate-x-full w-0"
      }`}
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="px-4 py-6 flex-1">
        <ul className="space-y-1">
          <li>
            <Link
              href={routes.configurations.page}
              className="block bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Configuration
            </Link>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
}
