import { createClient } from "@/utils/supabase/server";

type Painting = {
  id: number;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  current_location: string;
  created_at: string;
};

export default async function Paintings() {
  const supabase = await createClient();
  const res = await supabase.from("paintings").select();
  const paintings: Painting[] = res.data;

  return <pre>{JSON.stringify(paintings, null, 2)}</pre>;
}
