import { createFileRoute } from "@tanstack/react-router";
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
        <h1 className="text-4xl font-extrabold tracking-tight">Ordina a Domicilio o Asporto</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Scegli i tuoi piatti preferiti e decidi se ritirarli al locale o riceverli comodamente a casa.
        </p>

        <div className="glass mt-8 overflow-hidden rounded-4xl p-2 sm:p-4 h-[750px] w-full">
          <iframe 
            src={FOODBOOKING_DELIVERY}
            title="Ordina Sottoscala"
            className="w-full h-full rounded-3xl border-0 bg-white"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </SiteLayout>
  );
}
