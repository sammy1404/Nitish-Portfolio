import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zhpmgnawrmotiaqdgadk.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpocG1nbmF3cm1vdGlhcWRnYWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNDkxMjksImV4cCI6MjA1NDkyNTEyOX0.w2MDwxyGXFSRHD7aZAQAJ2puNamEaHWMUahBVSY7udM"; // Replace with your Supabase anon key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
