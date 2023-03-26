import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://glgppastvvwjvhvjnbju.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZ3BwYXN0dnZ3anZodmpuYmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyODg3NjEsImV4cCI6MTk5NDg2NDc2MX0.zLsiLRrVVhUFyEsBuBppav8LaCR9H5ATfAAzfYau_Kw'

export const supabase = createClient(supabaseUrl,supabaseAnonKey)