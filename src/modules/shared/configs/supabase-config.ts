import { createClient } from '@supabase/supabase-js';
import { Database } from '@/modules/shared/types/supabase-types';

const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
} as const;

export const supabase = createClient<Database>(supabaseConfig.url, supabaseConfig.anonKey);
