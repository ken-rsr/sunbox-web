import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtcqikpjonxvarfhzquw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Y3Fpa3Bqb254dmFyZmh6cXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MzU2NzksImV4cCI6MjA2MjUxMTY3OX0.6rL1nTePcPQdYrdCWLh1x8eBCuHyZDwMIcm_f0YWGcs';

// In a production app, you should use environment variables for these keys:
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
