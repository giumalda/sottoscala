import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

import {
  SiteHeader,
  WhatsAppFab,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  TikTokIcon
} from "../components/SiteChrome";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const Route = createFileRoute("/contatti")({
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 mx-auto max-w-[1100px] w-full px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
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

          {/* Card Orari & Social in evidenza */}
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

              {/* Social in evidenza con TikTok */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Instagram size={18} className="text-pink-500" />
                  <TikTokIcon className="w-5 h-5 text-foreground" />
                  Seguici sui Social
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Scopri i nostri piatti, i cocktail e i video del locale in tempo reale.
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
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-95"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    TikTok
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

        {/* Mappa incorporata */}
        <div className="glass mt-12 overflow-hidden rounded-4xl p-4 sm:p-6">
          <h2 className="text-2xl font-bold tracking-tight mb-4 px-2">Dove ci troviamo</h2>
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-inner">
            <iframe
              title="Mappa Sottoscala Mottola"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.633469273574!2d17.0268!3d40.6453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13471f4562c55555%3A0x123456789abcdef!2sVia%20Giovanni%20Amendola%2C%201%2C%2074017%20Mottola%20TA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
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

      <WhatsAppFab />
    </div>
  );
}
