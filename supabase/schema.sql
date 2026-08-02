create table if not exists public.wallpapers (
  id bigint primary key,
  slug text,
  title text not null,
  category text not null,
  tags text[] not null default '{}',
  orientation text,
  resolution text,
  image_url text,
  thumbnail_url text,
  description text,
  dimensions text,
  width integer,
  height integer,
  aspect_ratio text,
  file_size text,
  format text,
  views text,
  downloads text,
  uploaded_at text,
  added text,
  colors text[] not null default '{}',
  featured boolean not null default false,
  trending boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists wallpapers_category_idx on public.wallpapers (category);
create index if not exists wallpapers_featured_idx on public.wallpapers (featured) where featured;
create index if not exists wallpapers_published_idx on public.wallpapers (published) where published;
create index if not exists wallpapers_created_at_idx on public.wallpapers (created_at desc);

alter table public.wallpapers enable row level security;

drop policy if exists "Published wallpapers are publicly readable" on public.wallpapers;
create policy "Published wallpapers are publicly readable"
  on public.wallpapers
  for select
  to anon
  using (published = true);
