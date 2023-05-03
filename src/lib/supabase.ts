import { createClient } from '@supabase/supabase-js'

// const URL = import.meta.env.SUPABASE_URL
// const ANON_KEY = import.meta.env.SUPABASE_ANON_KEY
const URL = 'https://udmxftvcbyxbzpthvudg.supabase.co'
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbXhmdHZjYnl4YnpwdGh2dWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NDkyNjUsImV4cCI6MTk5ODQyNTI2NX0.MN_tGZXpoLQHua_v51hMLxq4wvLZGFqKotDZ-_UFSUA'

export const supabase = createClient(URL, ANON_KEY)
