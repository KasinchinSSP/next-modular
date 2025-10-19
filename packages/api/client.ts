import { createClient } from "@supabase/supabase-js";

export function makeSupabaseClient(url: string, anon: string) {
  return createClient(url, anon, { auth: { persistSession: false } });
}
