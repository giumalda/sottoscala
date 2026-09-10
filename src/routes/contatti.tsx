import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

import {
  SiteLayout,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "../components/SiteChrome";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — SOTTOSCALA Mottola" },
      {
        name: "description",
        content:
          "Mettiti in contatto con il Sottoscala a Mottola. Indirizzo, numeri di telefono, orari di apertura e canali social.",
      },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contatti &amp; Posizione
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Vieni a trovarci nel centro di Mottola o contattaci per qualsiasi informazione.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Card Informazioni */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Riferimenti</h2>
              
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Indirizzo</h3>
                    <p className="mt-1 text-muted-foreground">
                      Via Giovanni Amendola, 1<br />
                      74017 Mottola (TA)
                    </p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Apri su Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefono</h3>
                    <p className="mt-1">
                      <a
                        href={PHONE_TEL}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-[oklch(0.72_0.19_145)]/10 text-[oklch(0.72_0.19_145)]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="mt-1">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Scrivici direttamente un messaggio
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[oklch(0.72_0.19_145)] px-6 py-3 text-sm font-semibold text-[oklch(0.99_0_0)] shadow-md transition-all hover:brightness-110 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Scrivi su WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Phone size={16} />
                Chiama Ora
              </a>
            </div>
          </div>

          {/* Card Orari e Social in evidenza */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Orari &amp; Social</h2>
              
              <div className="mt-6 flex items-start gap-4">
                <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Lunedì:</strong> Chiuso</li>
                    <li><strong className="text-foreground">Martedì:</strong> 18:00 – 00:30</li>
                    <li><strong className="text-foreground">Mercoledì:</strong> 18:00 – 00:30</li>
                    <li><strong className="text-foreground">Giovedì:</strong> 18:00 – 00:30</li>
                    <li><strong className="text-foreground">Venerdì:</strong> 18:00 – 01:00</li>
                    <li><strong className="text-foreground">Sabato:</strong> 18:00 – 01:00</li>
                    <li><strong className="text-foreground">Domenica:</strong> 18:00 – 00:30</li>
                  </ul>
                </div>
              </div>

              {/* Instagram in evidenza */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Instagram size={18} className="text-pink-500" />
                  Seguici su Instagram
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Scopri i nostri piatti, i cocktail e le storie del locale in tempo reale.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-95"
                  >
                    <Instagram size={18} />
                    @sottoscala___
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full glass-soft px-5 py-3 text-sm font-semibold transition-colors hover:text-primary"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
