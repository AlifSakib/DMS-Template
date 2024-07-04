import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, lexendDeca } from "@/app/fonts";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import { cn } from "@/utils/class-names";
import "@/app/globals.css";
import MainLayout from "@/layouts/main/layout";
import { useState } from "react";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "App Name",
  description: "Write your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html
        // 💡 Prevent next-themes hydration warning
        suppressHydrationWarning
      >
        <body
          // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
          suppressHydrationWarning
          className={cn(inter.variable, lexendDeca.variable, "font-inter")}
        >
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>

            <GlobalDrawer />

            <GlobalModal />
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
