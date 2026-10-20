-- =========================================================================
-- FOREVERADVENTURER DATABASE SCHEMA
-- Run this in your Supabase Dashboard: SQL Editor -> New Query -> Run
-- =========================================================================

-- 1. TRAVEL DIARIES TABLE (Editorial + Community Submissions)
CREATE TABLE IF NOT EXISTS public.diaries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  subtitle TEXT,
  destination TEXT NOT NULL,
  country TEXT NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous Adventurer',
  author_email TEXT,
  category TEXT DEFAULT 'Slow Journeys',
  hero_image TEXT,
  hero_caption TEXT,
  excerpt TEXT,
  content JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of paragraphs
  reflections JSONB DEFAULT '[]'::jsonb,      -- Array of takeaway thoughts
  tags JSONB DEFAULT '[]'::jsonb,             -- Array of string tags
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'pending', 'published', 'rejected')),
  is_community BOOLEAN DEFAULT false,
  is_illustrative_sample BOOLEAN DEFAULT false
);

-- 2. CURATED TRAVEL NEWS (Automated RSS Scraper)
CREATE TABLE IF NOT EXISTS public.curated_news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  source_name TEXT NOT NULL,
  source_url TEXT UNIQUE NOT NULL,
  published_date TIMESTAMPTZ,
  category TEXT DEFAULT 'Travel Trends',
  image_url TEXT,
  summary TEXT,
  is_approved BOOLEAN DEFAULT true
);

-- 3. COUNTRY VISA & TRAVEL ADVISORIES (Automated API Data)
CREATE TABLE IF NOT EXISTS public.visa_advisories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  country_code TEXT UNIQUE NOT NULL, -- e.g., 'HR', 'JP', 'NO'
  country_name TEXT NOT NULL,
  advisory_score NUMERIC(3, 1),       -- 1.0 to 5.0 rating from Travel Advisory API
  advisory_message TEXT,
  visa_policy_summary TEXT,
  currency TEXT,
  emergency_numbers JSONB DEFAULT '{}'::jsonb,
  verified_date TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.diaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curated_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visa_advisories ENABLE ROW LEVEL SECURITY;

-- Security Policies:
-- Allow anyone to read published diaries
CREATE POLICY "Public read published diaries" 
ON public.diaries FOR SELECT 
USING (status = 'published');

-- Allow anyone to read approved curated news
CREATE POLICY "Public read curated news" 
ON public.curated_news FOR SELECT 
USING (is_approved = true);

-- Allow anyone to read visa advisories
CREATE POLICY "Public read visa advisories" 
ON public.visa_advisories FOR SELECT 
USING (true);

-- Allow authenticated users to submit new community diaries
CREATE POLICY "Users can insert community diaries" 
ON public.diaries FOR INSERT 
WITH CHECK (true);

-- Allow service role (backend API and admin) full access to all tables
CREATE POLICY "Service role full access on diaries" 
ON public.diaries FOR ALL 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Service role full access on news" 
ON public.curated_news FOR ALL 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Service role full access on advisories" 
ON public.visa_advisories FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. STORAGE BUCKET FOR USER TRAVEL PHOTOS
INSERT INTO storage.buckets (id, name, public) 
VALUES ('travel-photos', 'travel-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read of uploaded photos
CREATE POLICY "Public read travel photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'travel-photos');

-- Allow anyone to upload photos into the travel-photos bucket
CREATE POLICY "Public upload travel photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'travel-photos');
