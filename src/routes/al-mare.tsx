import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Instagram, Palmtree } from "lucide-react";
import { SiteLayout } from "../components/SiteChrome";

export const Route = createFileRoute("/al-mare")({
  head: () => ({
    meta: [{ title: "Sottoscala al Mare — Castellaneta Marina" }],
  }),
  component: AlMarePage,
});

function AlMarePage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        
        <div className="flex flex-col items-center text-center">
          <div className="p-4 rounded-full bg-blue-500/20 text-blue-400 mb-6">
            <Palmtree size={48} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-blue-100">
            Sottoscala <span className="text-blue-500">al Mare</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            La stessa qualità del Sottoscala, ora a due passi dalla spiaggia. 
            Vieni a scoprire la nostra nuova location estiva.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Posizione */}
          <div className="glass rounded-4xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="text-blue-500" /> Dove Siamo
            </h2>
            <p className="mt-4 text-lg">
              Lungomare Eroi del Mare, 23<br />
              Castellaneta Marina (TA)
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lungomare+Eroi+del+Mare+23+Castellaneta+Marina"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
            >
              Indicazioni Stradali
            </a>
          </div>

          {/* Social */}
          <div className="glass rounded-4xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Instagram className="text-pink-500" /> Profilo Dedicato
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Segui la pagina ufficiale della location estiva per rimanere aggiornato su eventi e serate.
            </p>
            <a
              href="https://www.instagram.com/sottoscala_al_mare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
            >
              <Instagram size={18} />
              @sottoscala_al_mare
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
