"use server";

import { createClient } from "@/lib/utils/supabase/server";
import Header from "./header-client";
export async function HeaderServer() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <Header user={user} />;
}
