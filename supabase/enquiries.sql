-- Run once in Supabase dashboard -> SQL Editor.
create table if not exists public.enquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  status text not null default 'new',          -- new | contacted | quoted | won | lost
  service text not null,
  pickup text not null,
  dropoff text not null,
  travel_date date,
  travel_time text,
  passengers int not null default 1,
  luggage int not null default 0,
  vehicle text,
  flight text,
  name text not null,
  phone text not null,
  email text,
  notes text,
  locale text,
  source text
);

-- No public access at all: only the server (service_role key) writes, and only you read.
alter table public.enquiries enable row level security;
create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
