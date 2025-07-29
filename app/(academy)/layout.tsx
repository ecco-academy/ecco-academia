import type { Metadata } from "next";
import "../globals.css";
import { createClient } from "@/lib/utils/supabase/server";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ecco Academia",
  description: "Academia de masaje y bienestar",
};

export default async function AcademyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <Header user={user} />
      {children}
    </div>
  );
}
