import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "../components/ecco/header";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";

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
    <ClerkProvider
      afterSignOutUrl={"/home"}
      localization={{
        ...esMX,
        signIn: {
          start: {
            titleCombined: "Bienvenido a {{applicationName}}",
          },
        },
      }}
    >
      <html lang="en">
        <body className={`${epilogueSans.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
