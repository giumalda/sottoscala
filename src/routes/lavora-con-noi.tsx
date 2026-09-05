import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Upload, CheckCircle2 } from "lucide-react";

import { SiteLayout, WHATSAPP_URL } from "../components/SiteChrome";

export const Route = createFileRoute("/lavora-con-noi")({
  head: () => ({
    meta: [
      { title: "Lavora con Noi — Candidature SOTTOSCALA Mottola" },
      {
        name: "description",
        content:
          "Invia la tua candidatura spontanea al Sottoscala di Mottola: sala, cucina, bar e sushi bar. Compila il modulo e allega il tuo CV.",
      },
      { property: "og:title", content: "Lavora con Noi — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "Cerchiamo persone appassionate per sala, cucina, bar e sushi bar. Candidati in un minuto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LavoraPage,
});

const ROLES = [
  "Sala / Cameriere",
  "Bar / Barman",
  "Cucina",
  "Sushi bar",
  "Fattorino / Consegne",
  "Altro",
];

const ACCEPTED = [".pdf", ".doc", ".docx"];
const MAX_MB = 5;

function LavoraPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setSent(false);
    if (!file) {
      setFileName(null);
      setFileError(null);
      return;
    }
    const ok = ACCEPTED.some((ext) => file.name.toLowerCase().endsWith(ext));
    if (!ok) {
      setFileName(null);
      setFileError("Formato non valido: carica un file PDF, DOC o DOCX.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setFileName(null);
      setFileError(`Il file è troppo grande: massimo ${MAX_MB} MB.`);
      e.target.value = "";
      return;
    }
    setFileError(null);
    setFileName(file.name);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fileName) {
      setFileError("Allega il tuo CV in formato PDF, DOC o DOCX.");
      return;
    }
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-2xl border border-border/60 bg-foreground/5 px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <SiteLayout>
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Lavora con Noi
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Siamo una squadra piccola e affiatata. Se ami l'ospitalità, la cucina o
          il bancone, raccontaci chi sei: leggiamo tutte le candidature.
        </p>

        <form onSubmit={onSubmit} className="glass mt-10 rounded-4xl p-7 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="text-base font-medium">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                required
                maxLength={60}
                autoComplete="given-name"
                className={field}
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label htmlFor="cognome" className="text-base font-medium">
                Cognome
              </label>
              <input
                id="cognome"
                name="cognome"
                required
                maxLength={60}
                autoComplete="family-name"
                className={field}
                placeholder="Il tuo cognome"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              autoComplete="email"
              className={field}
              placeholder="nome@email.it"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="ruolo" className="text-base font-medium">
              Ruolo d'interesse
            </label>
            <select id="ruolo" name="ruolo" required defaultValue="" className={field}>
              <option value="" disabled>
                Scegli un ruolo
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="messaggio" className="text-base font-medium">
              Due righe su di te <span className="text-muted-foreground">(facoltativo)</span>
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows={4}
              maxLength={1000}
              className={field}
              placeholder="Esperienze, disponibilità, cosa ti piacerebbe fare da noi"
            />
          </div>

          <div className="mt-6">
            <span className="text-base font-medium">Curriculum</span>
            <label
              htmlFor="cv"
              className="mt-2 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-border/70 bg-foreground/5 px-4 py-5 transition-colors hover:border-primary"
            >
              <Upload size={20} className="text-primary" aria-hidden />
              <span className="text-base text-muted-foreground">
                {fileName ?? "Carica il tuo CV — PDF, DOC o DOCX (max 5 MB)"}
              </span>
              <input
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={onFileChange}
                className="sr-only"
              />
            </label>
            {fileError && (
              <p role="alert" className="mt-2 text-base text-destructive">
                {fileError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
          >
            Invia candidatura
          </button>

          {sent && (
            <p
              role="status"
              className="mt-6 flex items-center gap-2 text-base text-primary"
            >
              <CheckCircle2 size={18} aria-hidden />
              Grazie! Abbiamo ricevuto i tuoi dati: ti ricontattiamo noi.
            </p>
          )}

          <p className="mt-6 text-sm text-muted-foreground opacity-70">
            I dati inviati sono trattati esclusivamente per la selezione del
            personale, in conformità al GDPR. Preferisci scriverci?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Contattaci su WhatsApp
            </a>
            .
          </p>
        </form>
      </main>
    </SiteLayout>
  );
}
