import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Ecco Academia",
  description: "Academia de masaje y bienestar",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
