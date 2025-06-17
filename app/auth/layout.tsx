import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/ecco/header";

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
      <Header hideSignInButton />
      {children}
    </div>
  );
}
