import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Instagram } from "lucide-react";
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
      {/* Sfondo con immagine fissa e velatura scura */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="/bg-al-mare.jpg"
          alt="Sottoscala al Mare sfondo"
          className="h-full w-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
      </div>

      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32 text-white">
        
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-blue-400 drop-shadow-md">
            Sottoscala al Mare
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl drop-shadow">
            La nostra location estiva a Castellaneta Marina. Eleganza, cocktail ricercati 
            e ottima cucina a due passi dalla spiaggia.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Box Posizione */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between border-blue-500/20 bg-slate-900/60">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                <MapPin className="text-blue-400" /> Dove Siamo
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Lungomare Eroi del Mare, 23<br />
                74011 Castellaneta Marina (TA)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lungomare+Eroi+del+Mare+23+Castellaneta+Marina"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:bg-blue-500 active:scale-95"
            >
              Apri in Google Maps
            </a>
          </div>

          {/* Box Social */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between border-blue-500/20 bg-slate-900/60">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                <Instagram className="text-blue-400" /> Profilo Ufficiale
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Segui la pagina dedicata per rimanere aggiornato su eventi, serate e novità estive.
              </p>
            </div>
            <a
              href="https://www.instagram.com/sottoscala_al_mare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:bg-blue-500 active:scale-95"
            >
              <Instagram size={18} />
              @sottoscala_al_mare
            </a>
          </div>
        </div>

        {/* Mappa Incorporata Castellaneta Marina */}
        <div className="glass mt-8 overflow-hidden rounded-4xl p-4 sm:p-6 w-full border-blue-500/20 bg-slate-900/60">
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-inner">
            <iframe
              title="Mappa Sottoscala al Mare"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.534279768565!2d16.929761!3d40.485642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13476dd98533b3a3%3A0x6b4f7380f2d48c9!2sLungomare%20Eroi%20del%20Mare%2C%2023%2C%2074011%20Castellaneta%20Marina%20TA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
