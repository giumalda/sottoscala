import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparkles, MapPin, Utensils } from "lucide-react";

import {
  SiteLayout,
  DELIVEROO_URL,
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
} from "../components/SiteChrome";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import heroImage from "../assets/hero-sottoscala.jpg";

const IMG = "https://api.moremenu.it/v1/user-files";
const COVER = `${IMG}/restaurant-cover-image-2e07ce36-d29e-49ef-924b-2a3884d5bf93-1715724443753.jpeg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOTTOSCALA — Bistrò, Cocktail Bar, Sushi & Pinsa a Mottola" },
      {
        name: "description",
        content:
          "Sottoscala a Mottola: tradizione pugliese e anima asiatica. Sushi fresco, pinse gourmet e signature cocktail in un'affascinante location in pietra.",
      },
      {
        property: "og:title",
        content: "SOTTOSCALA — Tradizione Pugliese. Anima Asiatica.",
      },
      {
        property: "og:description",
        content:
          "Bistrò, cocktail bar, sushi & pinsa bar nel centro di Mottola. Ordina online o prenota un tavolo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: COVER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: COVER },
    ],
  }),
  component: Index,
});

function Index() {
  const categories = [
    {
      title: "Sushi & Crudi",
      desc: "Uramaki, tartare, sashimi",
      image: `${IMG}/menu-category-cover-image-eb609020-f544-4e1a-a9ef-d9e88237dc45.jpeg`,
      hash: "sushi",
    },
    {
      title: "Pinse & Bun Gourmet",
      desc: "Impasti leggeri e farciture locali",
      image: `${IMG}/menu-category-cover-image-ea972651-0e5d-404d-aab9-2c215cc26f96.jpeg`,
      hash: "pinse-e-padellino",
    },
    {
      title: "Cocktail Signature & Vini",
      desc: "Mixology e cantina fornita",
      image: `${IMG}/menu-category-cover-image-1e75479d-3d30-421b-a09f-2ce7700557a2.jpeg`,
      hash: "cocktail",
    },
    {
      title: "Tacos, Bao & Poke",
      desc: "Fusion asiatica",
      image: `${IMG}/menu-category-cover-image-1359bc0d-0dd2-4063-8fa5-50dd10e7b9b9.jpeg`,
      hash: "tacos",
    },
  ];

  const reviews = [
    {
      id: "mauronofrio",
      quote: "Location ottima, interni in pietra suggestivi e cibo di alta qualità.",
      author: "Mauronofrio M.",
    },
    {
      id: "thefork-1",
      quote:
        "Varietà di sapori rara, unisce ingredienti tradizionali a cucina asiatica.",
      author: "Utente TheFork",
    },
    {
      id: "thefork-2",
      quote:
        "Locale intimo e raccolto, l'accoglienza della famiglia Notaristefano è superlativa.",
      author: "Utente TheFork",
    },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4 pb-12 pt-32 text-center sm:min-h-[85vh]">
        <img
          src={heroImage}
          alt="Il bancone cocktail del Sottoscala illuminato di sera"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative mx-auto w-full max-w-6xl flex flex-col items-center">
          <div className="glass w-full rounded-4xl px-6 py-10 sm:px-12 sm:py-14 flex flex-col items-center">
            
            {/* Logo ufficiale grande e centrato */}
            <div className="mb-6 flex items-center justify-center">
              <img
                src="/SOTTOSCALA.png"
                alt="Logo Sottoscala"
                className="h-20 sm:h-28 w-auto object-contain drop-shadow-md"
              />
            </div>

            <p className="flex items-center gap-2 text-sm font-medium text-accent sm:text-base mb-3">
              <Sparkles size={15} aria-hidden />
              Bistrò · Cocktail Bar · Sushi &amp; Pinsa — Mottola
            </p>

            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Tradizione Pugliese. Anima Asiatica.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un'esperienza culinaria avvolgente nel centro di Mottola, tra
              sushi fresco, pinse gourmet e signature cocktail in un'antica struttura in pietra.
            </p>

            {/* Pulsante Menu prima di Chiama/Ordina */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link
                to="/menu"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Utensils size={20} aria-hidden />
                Sfoglia il Menù
              </Link>
            </div>

            {/* Pulsanti Chiama / Ordina */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row justify-center w-full">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[oklch(0.72_0.19_145)] px-7 py-3.5 text-center text-base font-semibold text-[oklch(0.99_0_0)] shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-95 sm:text-lg"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chiama o scrivi su WhatsApp
              </a>
              <a
                href={DELIVEROO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[oklch(0.85_0.09_205)] px-7 py-3.5 text-center text-base font-semibold text-[oklch(0.24_0.06_205)] shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-95 sm:text-lg"
              >
                Ordina con Deliveroo
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section
        id="chi-siamo"
        className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20 sm:px-6"
      >
        <div className="glass rounded-4xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
            Un'antica cava in pietra, un'atmosfera unica
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Un locale nascosto sotto una rampa di scale nel centro di Mottola:
            luci basse e un'affascinante struttura in pietra che richiama le antiche cave rupestri. 
            Riaperto nel 2023 dalla famiglia Notaristefano, è il luogo in cui la dispensa
            pugliese incontra la tecnica del nostro Sushiman.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/chi-siamo"
              className="rounded-full bg-primary px-7 py-3.5 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Leggi la nostra storia
            </Link>
            <Link
              to="/galleria"
              className="glass-soft rounded-full px-7 py-3.5 text-lg font-semibold transition-transform hover:scale-[1.03] active:scale-95"
            >
              Guarda il locale
            </Link>
          </div>
        </div>
      </section>

      {/* Esplora il Menù */}
      <section id="menu" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Esplora il Menù
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Quattro mondi di sapori, un solo indirizzo.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/menu"
              hash={cat.hash}
              className="glass group overflow-hidden rounded-4xl transition-transform hover:-translate-y-1"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="mt-1 text-base text-muted-foreground">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Vedi tutti i 150+ piatti e prezzi
          </Link>
          <p className="mt-4 text-base text-muted-foreground">
            Con foto, allergeni e anteprima 3D / AR di alcuni piatti.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Cosa dicono di noi
        </h2>
        <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
          Valutazione 4.6/5
          <Star size={18} className="fill-accent text-accent" aria-hidden />
          su Google e recensioni top su TheFork.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.id} className="glass rounded-4xl p-7">
              <div className="flex gap-1" aria-label="5 stelle su 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed">
                "{review.quote}"
              </blockquote>
              <figcaption className="mt-4 text-base text-muted-foreground">
                — {review.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="glass-soft mt-10 flex flex-col items-start gap-5 rounded-4xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted-foreground">
            Sei stato da noi? Racconta com'è andata: ogni recensione ci aiuta a
            migliorare.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MapPin size={18} aria-hidden />
            Leggi tutte le 147 recensioni o lascia la tua su Google Maps
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-sm text-muted-foreground opacity-60">
          Le recensioni mostrate sono estratte dinamicamente da piattaforme
          verificate di terze parti. I dati sono trattati in conformità alla
          nostra Privacy Policy e al GDPR.
        </p>
      </section>
    </SiteLayout>
  );
}
