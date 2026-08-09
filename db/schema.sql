CREATE TABLE IF NOT EXISTS public.stegstr_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text,
  mode text NOT NULL,
  carrier_name text,
  carrier_type text,
  platform text,
  payload_bytes integer,
  capacity_bytes integer,
  status text NOT NULL DEFAULT 'draft',
  result jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.stegstr_relay_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text,
  event_kind text NOT NULL,
  relay_url text,
  event_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
