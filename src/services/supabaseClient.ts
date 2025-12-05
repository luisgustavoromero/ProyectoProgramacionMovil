//tarea: implementar .env

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://zmzmesnvqdmxyvuvwbvi.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptem1lc252cWRteHl2dXZ3YnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjIzODgsImV4cCI6MjA3OTU5ODM4OH0.UoGfUB_DdoW2VTScAaxKB5tMvC2Yd0pXPXraqHGt074'

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
