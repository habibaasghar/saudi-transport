-- Run this in Supabase dashboard -> SQL Editor
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Anyone may sign up, nobody can read the list from the browser
create policy "anyone can join waitlist"
  on public.waitlist for insert
  to anon
  with check (true);
