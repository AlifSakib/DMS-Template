"use client";

import ConfigurationHeader from "./header";

export default function ConfigurationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-grow">
      <div className="flex w-full flex-col">
        <ConfigurationHeader />
        <div className="flex flex-grow flex-col">{children}</div>
      </div>
    </main>
  );
}
