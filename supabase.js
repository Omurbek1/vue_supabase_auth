import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xfjkgnwmtxuuqmtuhkqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmamtnbndtdHh1dXFtdHVoa3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MTcyODUsImV4cCI6MjAyMDE5MzI4NX0._Mi9TAs9STsvRmxbdLp7mj3ShCQwH0Ietajx8M9Dwuk";
export const supabase = createClient(supabaseUrl, supabaseKey);
