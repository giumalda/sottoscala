import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { SiteLayout, INSTAGRAM_URL } from "../components/SiteChrome";

const IMG = "https://api.moremenu.it/v1/user-files";
const COVER = `${IMG}/restaurant-cover-image-2e07ce36-d29e-49ef-924b-2a3884d5bf93-1715724443753.jpeg`;
const HERO = `${IMG}/menu-category-cover-image-e81ff233-8d95-45a7-b3ad-f5b1d4462b97.jpeg`;
const SUSHI = `${IMG}/menu-category-cover-image-eb609020-f544-4e1a-a9ef-d9e88237dc45.jpeg`;
const PINSA = `${IMG}/menu-category-cover-image-ea972651-0e5d-404d-aab9-2c215cc26f96.jpeg`;
const COCKTAIL = `${IMG}/menu-category-cover-image-1e75479d-3d30-421b-a09f-2ce7700557a2.jpeg`;
const FUSION = `${IMG}/menu-category-cover-image-1359bc0d-0dd2-4063-8fa5-50dd10e7b9b9.jpeg`;

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Galleria — Locale, terrazza e piatti del Sottoscala" },
      {
        name: "description",
        content:
          "Le foto del Sottoscala a Mottola: gli interni caldi e ovattati, la terrazza panoramica sul golfo e i piatti forti — sushi, pinse e cocktail signature.",
      },
      { property: "og:title", content: "Galleria — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "Interni, terrazza con vista sul golfo e i piatti simbolo del Sottoscala.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: COVER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: COVER },
    ],
  }),
  component: GalleriaPage,
});

const SPAZIO = [
  { src: COVER, alt: "La sala interna del Sottoscala", span: "sm:col-span-2 sm:row-span-2" },
  { src: HERO, alt: "Il bancone cocktail del Sottoscala", span: "" },
  { src: SUSHI, alt: "Uramaki e crudi serviti al Sottoscala", span: "" },
  { src: PINSA, alt: "Pinse gourmet appena sfornate", span: "" },
  { src: COCKTAIL, alt: "Signature cocktail del Sottoscala", span: "" },
  { src: FUSION, alt: "Tacos, bao e poke fusion", span: "sm:col-span-2" },
];

const POSTS = [
  { src: SUSHI, caption: "Nuovo uramaki con Capocollo di Martina Franca 🍣" },
  { src: COCKTAIL, caption: "Signature della settimana, solo in terrazza 🍸" },
  { src: PINSA, caption: "Pinsa stracciatella Gioiella e olio Masseria Amodio" },
  { src: HERO, caption: "Si comincia: banco pronto, luci basse ✨" },
  { src: FUSION, caption: "Bao & tacos night — posti limitati" },
  { src: COVER, caption: "Il nostro Sottoscala, sempre lo stesso angolo caldo" },
];

function GalleriaPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Galleria
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Lo spazio, la terrazza e i piatti che ci rappresentano.
        </p>

        <section className="mt-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Spazio, locale &amp; piatti
          </h2>
          <div className="mt-8 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
            {SPAZIO.map((p) => (
              <figure
                key={p.alt}
                className={`overflow-hidden rounded-3xl ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Dal nostro Instagram
            </h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              <Instagram size={20} aria-hidden />
              @sottoscala___
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <a
                key={post.caption}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
              >
                <img
                  src={post.src}
                  alt={post.caption}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <p className="p-4 text-base text-muted-foreground">
                  {post.caption}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground opacity-60">
            Anteprima dei contenuti pubblicati sul profilo ufficiale del locale:
            apri Instagram per vedere i post aggiornati.
          </p>
        </section>
      </main>
    </SiteLayout>
  );
}
