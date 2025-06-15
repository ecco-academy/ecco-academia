import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import React from "react";

const epilogueSans = Epilogue({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecco Academia",
  description: "Academia de masaje y bienestar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogueSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
