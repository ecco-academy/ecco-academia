import type { Metadata } from "next";
import "../globals.css";
import { HeaderServer } from "@/modules/header/components/header-server";

export const metadata: Metadata = {
  title: "Ecco Academia",
  description: "Academia de masaje y bienestar",
};

export default function AcademyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderServer />
      {children}
    </div>
  );
}
