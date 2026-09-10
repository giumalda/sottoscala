import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, Users, ArrowRight } from "lucide-react";
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
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Prenota il tuo tavolo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Assicurati un posto al Sottoscala. La prenotazione online è rapida, 
            gratuita e la conferma è immediata.
          </p>
        </div>

     <div className="mt-12 glass w-full rounded-4xl p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 sm:grid-cols-3 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Users size={28} />
              </div>
              <h3 className="font-semibold text-lg">Seleziona i posti</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scegli per quante persone vuoi prenotare il tavolo.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <CalendarDays size={28} />
              </div>
              <h3 className="font-semibold text-lg">Scegli la data</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Indica il giorno esatto in cui verrai a trovarci.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Clock size={28} />
              </div>
              <h3 className="font-semibold text-lg">Scegli l'orario</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Seleziona uno degli orari disponibili dal nostro sistema.
              </p>
            </div>
          </div>

          <div className="border-t border-border/60 pt-8 flex flex-col items-center">
            <p className="text-base text-muted-foreground mb-6 text-center">
              Verrai reindirizzato al nostro sistema sicuro per completare la prenotazione.
            </p>
            <a
              href={FOODBOOKING_RESERVATION}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
            >
              Vai alla Prenotazione
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
