import type { Metadata } from "next";
import "../globals.css";
import Header from "../../components/ecco/header";

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
      <Header />
      {children}
    </div>
  );
}
