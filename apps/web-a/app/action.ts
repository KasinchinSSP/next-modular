"use server";
import { createClient } from "@supabase/supabase-js";

export async function saveLead(input: {
  name: string;
  phone?: string;
  site_id?: string;
}) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("leads")
    .insert(input)
    .select("id")
    .single();
  if (error) throw new Error(error.message);
  return data.id as string;
}
