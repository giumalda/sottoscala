import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparkles } from "lucide-react";

import {
  SiteHeader,
  SiteFooter,
  ORDER_URL,
  PHONE_TEL,
} from "../components/SiteChrome";

const IMG = "https://api.moremenu.it/v1/user-files";
const HERO = `${IMG}/menu-category-cover-image-e81ff233-8d95-45a7-b3ad-f5b1d4462b97.jpeg`;
const COVER = `${IMG}/restaurant-cover-image-2e07ce36-d29e-49ef-924b-2a3884d5bf93-1715724443753.jpeg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOTTOSCALA — Bistrò, Cocktail Bar, Sushi & Pinsa a Mottola" },
      {
        name: "description",
        content:
          "Sottoscala a Mottola: tradizione pugliese e anima asiatica. Sushi fresco, pinse gourmet, signature cocktail e terrazza con vista sul golfo.",
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
      quote: "Location ottima, vista su tutto il golfo, cibo di alta qualità.",
      author: "Mauronofrio M.",
    },
    {
      quote:
        "Varietà di sapori rara, unisce ingredienti tradizionali a cucina asiatica.",
      author: "Utente TheFork",
    },
    {
      quote:
        "Locale intimo e raccolto, gestione dei fratelli e del sushiman superlativa.",
      author: "Utente TheFork",
    },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden px-4 pb-14 pt-32">
        <img
          src={HERO}
          alt="Cocktail signature del Sottoscala serviti al bancone"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        {/* Velo sfocato che scende dall'alto sopra le scritte */}
        <div className="blur-veil-top pointer-events-none absolute inset-x-0 top-0 h-2/3" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="glass max-w-3xl rounded-4xl px-7 py-10 sm:px-12 sm:py-14">
            <p className="flex items-center gap-2 text-base font-medium text-accent">
              <Sparkles size={16} aria-hidden />
              Bistrò · Cocktail Bar · Sushi & Pinsa — Mottola
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Tradizione Pugliese.
              <br />
              Anima Asiatica.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Un'esperienza culinaria avvolgente nel centro di Mottola. Dal
              Capocollo di Martina Franca al sushi fresco, accompagnati dai
              nostri signature cocktail.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/menu"
                className="rounded-full bg-primary px-8 py-4 text-center text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Sfoglia il Menù
              </Link>
              <a
                href={PHONE_TEL}
                className="rounded-full border border-foreground/40 px-8 py-4 text-center text-lg font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                Chiama per Prenotare
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-28 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="glass rounded-4xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
              Due Fratelli, Un SushiMan, Un'Atmosfera Unica
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Nato dall'idea di due fratelli, il Sottoscala è un rifugio intimo e
              raffinato. Uniamo ingredienti del nostro territorio, come la
              Stracciatella Gioiella e l'Olio Masseria Amodio, all'arte del sushi
              e della cucina asiatica. Il tutto accompagnato da una selezione
              musicale retrò e una terrazza con vista sul golfo.
            </p>
          </div>
          <img
            src={COVER}
            alt="L'atmosfera del Sottoscala a Mottola"
            className="h-full w-full rounded-4xl object-cover"
            loading="lazy"
            width={1920}
            height={711}
          />
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
            <figure key={review.author} className="glass rounded-4xl p-7">
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
      </section>

      {/* Ordina */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="glass flex flex-col items-start gap-6 rounded-4xl p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Asporto o domicilio?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Ordina direttamente dal menù digitale.
            </p>
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground"
          >
            Ordina / Prenota
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
