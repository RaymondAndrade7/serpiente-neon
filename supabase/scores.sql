-- Tabla de récords online de Serpiente Neón.
-- Se ejecuta una sola vez en Supabase: SQL Editor → New query → Run.
-- Cualquiera puede ver la tabla y agregar un puntaje; nadie puede borrar ni cambiar los de otros.

create table public.scores (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 12),
  score integer not null check (score between 1 and 9999),
  created_at timestamptz not null default now()
);
create index scores_top on public.scores (score desc, created_at asc);

alter table public.scores enable row level security;
create policy "Todos pueden ver los récords" on public.scores
  for select to anon using (true);
create policy "Todos pueden enviar un récord" on public.scores
  for insert to anon
  with check (char_length(name) between 1 and 12 and score between 1 and 9999);
grant select, insert on public.scores to anon;
grant usage on sequence public.scores_id_seq to anon;
