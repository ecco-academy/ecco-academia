
import { createClient } from "@/lib/utils/supabase/client";

const supabase = createClient();

export async function signOut() {
   await supabase.auth.signOut(
  );
}
