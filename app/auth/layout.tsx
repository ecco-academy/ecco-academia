import type { Metadata } from "next";
import "../globals.css";
import { HeaderServer } from "@/modules/header/components/header-server";

export const metadata: Metadata = {
  title: "Ecco Academia",
  description: "Academia de masaje y bienestar",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <HeaderServer />
      {children}
    </div>
  );
}
