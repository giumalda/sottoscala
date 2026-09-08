import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

import {
  SiteLayout,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  DELIVEROO_URL,
} from "../components/SiteChrome";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e Orari — SOTTOSCALA Mottola" },
      {
        name: "description",
        content:
          "Telefono, indirizzo, orari di apertura e mappa del Sottoscala in Via Giovanni Amendola 1, Mottola (TA). Prenota un tavolo o ordina d'asporto.",
      },
      { property: "og:title", content: "Contatti e Orari — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "Dove siamo, quando siamo aperti e come prenotare un tavolo al Sottoscala di Mottola.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContattiPage,
});

const ORARI = [
  { day: "Lunedì", hours: "Chiuso", closed: true },
  { day: "Martedì", hours: "18:00 – 00:30" },
  { day: "Mercoledì", hours: "18:00 – 00:30" },
  { day: "Giovedì", hours: "18:00 – 00:30" },
  { day: "Venerdì", hours: "18:00 – 01:00" },
  { day: "Sabato", hours: "18:00 – 01:00" },
  { day: "Domenica", hours: "18:00 – 00:30" },
];

function ContattiPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Contatti
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Siamo nel centro di Mottola. Chiamaci per prenotare un tavolo o
          scrivici su WhatsApp per l'asporto.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-4xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <MapPin size={18} className="text-primary" aria-hidden />
              Dove siamo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Via Giovanni Amendola, 1<br />
              74017 Mottola (TA)
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-3 text-lg font-semibold hover:underline"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.78_0.21_142)] text-[oklch(0.16_0.05_160)] shadow-[0_0_18px_-4px_oklch(0.78_0.21_142/0.8)]">
                  <Phone size={18} aria-hidden />
                </span>
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle size={18} className="text-primary" aria-hidden />
                Scrivici su WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram size={18} className="text-primary" aria-hidden />
                @sottoscala___
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook size={18} className="text-primary" aria-hidden />
                Sottoscala su Facebook
              </a>
            </div>
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[oklch(0.85_0.09_205)] px-7 py-3.5 text-lg font-semibold text-[oklch(0.24_0.06_205)] transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Ordina con Deliveroo
            </a>
          </div>

          <div className="glass rounded-4xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Clock size={18} className="text-primary" aria-hidden />
              Orari di apertura
            </h2>
            <ul className="mt-6 divide-y divide-border/50">
              {ORARI.map((o) => (
                <li
                  key={o.day}
                  className="flex items-center justify-between py-3 text-lg"
                >
                  <span className="font-medium">{o.day}</span>
                  <span
                    className={
                      o.closed ? "text-muted-foreground" : "text-foreground"
                    }
                  >
                    {o.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-4xl border border-border/60 bg-white">
          <iframe
            title="Mappa — Sottoscala, Via Giovanni Amendola 1, Mottola"
            src="https://www.openstreetmap.org/export/embed.html?bbox=17.0250%2C40.6280%2C17.0460%2C40.6390&layer=mapnik&marker=40.6335%2C17.0356"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </main>
    </SiteLayout>
  );
}
