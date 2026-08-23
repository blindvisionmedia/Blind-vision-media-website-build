-- Blind Vision Media platform schema — Supabase/Postgres
create extension if not exists "uuid-ossp";

create type app_role as enum ('artist','business','admin');
create type project_kind as enum ('artist','business','internal');
create type booking_status as enum ('pending','confirmed','completed','cancelled');
create type availability_state as enum ('available','limited','booked','unavailable');
create type request_status as enum ('submitted','reviewing','approved','scheduled','in_progress','completed','declined');
create type approval_status as enum ('pending','approved','changes_requested');
create type invoice_status as enum ('draft','issued','part_paid','paid','overdue','void');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role app_role not null,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamptz default now()
);

create table public.artists (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete set null,
  artist_name text not null,
  bio text,
  stage text default 'active',
  created_at timestamptz default now()
);

create table public.businesses (
  id uuid primary key default uuid_generate_v4(),
  owner_user_id uuid references public.profiles(id) on delete set null,
  business_name text not null,
  website text,
  industry text,
  created_at timestamptz default now()
);

create table public.contacts (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text,
  phone text,
  source text,
  created_at timestamptz default now()
);

create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  lead_type text check (lead_type in ('studio','business','general')),
  contact_id uuid references public.contacts(id) on delete set null,
  business_id uuid references public.businesses(id) on delete set null,
  status text default 'new',
  budget text,
  timeline text,
  description text,
  created_at timestamptz default now()
);

create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  kind project_kind not null,
  artist_id uuid references public.artists(id) on delete cascade,
  business_id uuid references public.businesses(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'brief',
  progress int default 0 check (progress between 0 and 100),
  billing_status text default 'not_invoiced',
  is_public boolean default false,
  created_at timestamptz default now(),
  constraint project_owner_check check ((kind='artist' and artist_id is not null) or (kind='business' and business_id is not null) or kind='internal')
);

create table public.project_members (
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text default 'client',
  primary key(project_id,user_id)
);

create table public.services (
  id uuid primary key default uuid_generate_v4(),
  division text check (division in ('studio','business')) not null,
  category text not null,
  name text not null,
  description text,
  active boolean default true,
  sort_order int default 0
);

create table public.packages (
  id uuid primary key default uuid_generate_v4(),
  division text check (division in ('studio','business')) not null,
  category text not null,
  name text not null,
  description text,
  price_label text default 'Contact for pricing',
  active boolean default true,
  sort_order int default 0
);

create table public.availability (
  id uuid primary key default uuid_generate_v4(),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  state availability_state not null default 'available',
  service_id uuid references public.services(id),
  notes text,
  created_at timestamptz default now()
);

create table public.bookings (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid references public.artists(id) on delete set null,
  business_id uuid references public.businesses(id) on delete set null,
  service_id uuid references public.services(id),
  package_id uuid references public.packages(id),
  starts_at timestamptz,
  ends_at timestamptz,
  status booking_status default 'pending',
  deposit_required numeric(10,2),
  notes text,
  created_at timestamptz default now()
);

create table public.sessions (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid references public.bookings(id) on delete set null,
  project_id uuid references public.projects(id) on delete set null,
  starts_at timestamptz not null,
  ends_at timestamptz,
  service text,
  status booking_status default 'confirmed',
  notes text
);

create table public.files (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade,
  owner_user_id uuid references public.profiles(id) on delete set null,
  storage_bucket text not null,
  storage_path text not null,
  file_name text not null,
  file_type text,
  visibility text check (visibility in ('private_client','public_portfolio','admin_only')) default 'private_client',
  created_at timestamptz default now()
);

create table public.file_versions (
  id uuid primary key default uuid_generate_v4(),
  file_id uuid references public.files(id) on delete cascade,
  version_number int not null,
  storage_path text not null,
  notes text,
  created_at timestamptz default now(),
  unique(file_id, version_number)
);

create table public.project_updates (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade,
  author_user_id uuid references public.profiles(id) on delete set null,
  title text not null,
  body text,
  created_at timestamptz default now()
);

create table public.feedback (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade,
  file_id uuid references public.files(id) on delete set null,
  author_user_id uuid references public.profiles(id) on delete set null,
  body text not null,
  created_at timestamptz default now()
);

create table public.requests (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references public.businesses(id) on delete cascade,
  created_by uuid references public.profiles(id) on delete set null,
  category text not null,
  title text not null,
  description text,
  status request_status default 'submitted',
  created_at timestamptz default now()
);

create table public.approvals (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade,
  file_id uuid references public.files(id) on delete set null,
  requested_by uuid references public.profiles(id) on delete set null,
  status approval_status default 'pending',
  feedback text,
  decided_at timestamptz,
  created_at timestamptz default now()
);

create table public.invoices (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid references public.artists(id) on delete set null,
  business_id uuid references public.businesses(id) on delete set null,
  project_id uuid references public.projects(id) on delete set null,
  invoice_number text unique,
  status invoice_status default 'draft',
  amount_due numeric(10,2) not null default 0,
  amount_paid numeric(10,2) not null default 0,
  due_at timestamptz,
  created_at timestamptz default now()
);

create table public.payments (
  id uuid primary key default uuid_generate_v4(),
  invoice_id uuid references public.invoices(id) on delete cascade,
  provider text,
  provider_payment_id text,
  payment_type text,
  amount numeric(10,2) not null,
  status text default 'pending',
  created_at timestamptz default now()
);

create table public.portfolio_projects (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete set null,
  title text not null,
  slug text unique not null,
  category text,
  summary text,
  hero_file_id uuid references public.files(id) on delete set null,
  published boolean default false,
  created_at timestamptz default now()
);

create table public.case_studies (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references public.businesses(id) on delete set null,
  portfolio_project_id uuid references public.portfolio_projects(id) on delete set null,
  client text not null,
  problem text,
  insight text,
  execution text,
  deliverables text,
  results text,
  published boolean default false
);

create table public.performance_metrics (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references public.businesses(id) on delete cascade,
  project_id uuid references public.projects(id) on delete set null,
  period_start date,
  period_end date,
  metric_name text not null,
  current_value numeric,
  previous_value numeric,
  notes text
);

create table public.reports (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references public.businesses(id) on delete cascade,
  project_id uuid references public.projects(id) on delete set null,
  report_type text,
  title text not null,
  summary text,
  recommendations text,
  created_at timestamptz default now()
);

create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  body text,
  read_at timestamptz,
  created_at timestamptz default now()
);

create or replace function public.is_admin() returns boolean language sql stable as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
$$;

create or replace function public.is_project_member(pid uuid) returns boolean language sql stable as $$
  select exists(select 1 from public.project_members where project_id = pid and user_id = auth.uid()) or public.is_admin()
$$;

alter table public.profiles enable row level security;
alter table public.artists enable row level security;
alter table public.businesses enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.files enable row level security;
alter table public.file_versions enable row level security;
alter table public.feedback enable row level security;
alter table public.project_updates enable row level security;
alter table public.bookings enable row level security;
alter table public.sessions enable row level security;
alter table public.requests enable row level security;
alter table public.approvals enable row level security;
alter table public.invoices enable row level security;
alter table public.payments enable row level security;
alter table public.reports enable row level security;
alter table public.performance_metrics enable row level security;

create policy "own profile or admin" on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy "admin manage profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "artist own profile" on public.artists for select using (user_id = auth.uid() or public.is_admin());
create policy "business own org" on public.businesses for select using (owner_user_id = auth.uid() or public.is_admin());
create policy "members see projects" on public.projects for select using (public.is_project_member(id));
create policy "admin manage projects" on public.projects for all using (public.is_admin()) with check (public.is_admin());
create policy "members see files" on public.files for select using (public.is_project_member(project_id));
create policy "members see versions" on public.file_versions for select using (exists(select 1 from public.files f where f.id=file_id and public.is_project_member(f.project_id)));
create policy "members insert feedback" on public.feedback for insert with check (public.is_project_member(project_id) and author_user_id = auth.uid());
create policy "members see feedback" on public.feedback for select using (public.is_project_member(project_id));
create policy "members see updates" on public.project_updates for select using (public.is_project_member(project_id));
create policy "business see requests" on public.requests for select using (public.is_admin() or exists(select 1 from public.businesses b where b.id=business_id and b.owner_user_id=auth.uid()));
create policy "business create requests" on public.requests for insert with check (created_by=auth.uid());
create policy "members see approvals" on public.approvals for select using (public.is_project_member(project_id));
create policy "members see invoices" on public.invoices for select using (public.is_admin() or exists(select 1 from public.artists a where a.id=artist_id and a.user_id=auth.uid()) or exists(select 1 from public.businesses b where b.id=business_id and b.owner_user_id=auth.uid()));
create policy "business see reports" on public.reports for select using (public.is_admin() or exists(select 1 from public.businesses b where b.id=business_id and b.owner_user_id=auth.uid()));
create policy "business see metrics" on public.performance_metrics for select using (public.is_admin() or exists(select 1 from public.businesses b where b.id=business_id and b.owner_user_id=auth.uid()));

-- Storage buckets to create in Supabase dashboard or CLI:
-- artist-files private, business-files private, public-portfolio public.
-- Add storage.objects policies matching project membership before production uploads.
