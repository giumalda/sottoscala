CREATE TABLE public.job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  nome text NOT NULL,
  cognome text NOT NULL,
  email text NOT NULL,
  ruolo text NOT NULL,
  messaggio text,
  cv_path text NOT NULL,
  cv_filename text NOT NULL
);

GRANT ALL ON public.job_applications TO service_role;

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
-- Nessuna policy: le candidature sono accessibili solo lato server (service role).