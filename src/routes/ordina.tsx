import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Bike, PackageOpen, ArrowRight } from "lucide-react";
import { SiteLayout, FOODBOOKING_DELIVERY } from "../components/SiteChrome";

export const Route = createFileRoute("/ordina")({
  head: () => ({
    meta: [{ title: "Delivery & Asporto — SOTTOSCALA" }],
  }),
  component: OrdinaPage,
});

function OrdinaPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Ordina a Domicilio o Asporto
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Gusta i nostri piatti dove vuoi. Scegli se ritirare al locale o ricevere 
            il tuo ordine comodamente a casa.
          </p>
        </div>

        <div className="mt-12 glass mx-auto max-w-3xl rounded-4xl p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 sm:grid-cols-3 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Utensils size={28} />
              </div>
              <h3 className="font-semibold text-lg">Scegli i piatti</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sfoglia il menù completo tra sushi, pinse e sfiziosità.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Bike size={28} />
              </div>
              <h3 className="font-semibold text-lg">Decidi il ritiro</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Seleziona la consegna a domicilio o il ritiro da noi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <PackageOpen size={28} />
              </div>
              <h3 className="font-semibold text-lg">Gusta a casa</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prepareremo il tuo ordine garantendo la massima qualità.
              </p>
            </div>
          </div>

          <div className="border-t border-border/60 pt-8 flex flex-col items-center">
            <p className="text-base text-muted-foreground mb-6 text-center">
              Verrai reindirizzato al nostro menù interattivo sicuro.
            </p>
            <a
              href={FOODBOOKING_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
            >
              Apri il Menù Interattivo
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
