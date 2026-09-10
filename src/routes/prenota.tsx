import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, FOODBOOKING_RESERVATION } from "../components/SiteChrome";

export const Route = createFileRoute("/prenota")({
  head: () => ({
    meta: [{ title: "Prenota un tavolo — SOTTOSCALA" }],
  }),
  component: PrenotaPage,
});

function PrenotaPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-4xl font-extrabold tracking-tight">Prenota il tuo tavolo</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Scegli la data e l'orario. La prenotazione sarà confermata immediatamente.
        </p>

        <div className="glass mt-8 overflow-hidden rounded-4xl p-2 sm:p-4 h-[750px] w-full">
          <iframe 
            src={FOODBOOKING_RESERVATION}
            title="Prenotazione Sottoscala"
            className="w-full h-full rounded-3xl border-0 bg-white"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </SiteLayout>
  );
}
