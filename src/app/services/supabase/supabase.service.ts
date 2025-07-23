import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ctthrwffzswlkmxoudet.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dGhyd2ZmenN3bGtteG91ZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzM3NDksImV4cCI6MjA2NTkwOTc0OX0.AsAxk4KmgxagygVnBPX-fvOmtd2ueCB5MYaqrsphSHM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);