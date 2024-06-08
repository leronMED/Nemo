import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eehyrwocoavuwxzcnuie.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaHlyd29jb2F2dXd4emNudWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4ODg5NTksImV4cCI6MjAzMjQ2NDk1OX0.mdHV6P4rnUdopkmpeHuSNGG1vUoMXFm1nKYDePpVf7I";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
