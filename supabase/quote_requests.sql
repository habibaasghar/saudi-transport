-- Run in Supabase dashboard -> SQL Editor. Review before applying.
-- Quote requests are written ONLY by the server (service role, which bypasses RLS).
-- RLS is enabled with NO policies, so the anon / authenticated roles can neither read nor write.
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('en','ar')),
  service text not null,
  pickup text not null,
  destination text not null,
  travel_date date not null,
  travel_time time not null,
  passengers int not null check (passengers between 1 and 50),
  luggage int,
  vehicle text,
  flight text,
  full_name text not null,
  phone text not null,
  email text not null,
  notes text,
  status text not null default 'new'
);

alter table public.quote_requests enable row level security;
revoke all on public.quote_requests from anon, authenticated;
