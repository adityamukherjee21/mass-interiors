-- Run this in Supabase Dashboard > SQL Editor

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  work_email text NOT NULL,
  phone text NOT NULL,
  company text,
  project_type text,
  estimated_area text,
  product_interests text[],
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS status_checks (
  id text PRIMARY KEY,
  client_name text NOT NULL,
  timestamp timestamptz DEFAULT now()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anon inserts (so the frontend form can submit)
CREATE POLICY "Allow public inserts" ON enquiries
  FOR INSERT TO anon WITH CHECK (true);

-- Restrict reads to authenticated users only
CREATE POLICY "Allow authenticated reads" ON enquiries
  FOR SELECT TO authenticated USING (true);
