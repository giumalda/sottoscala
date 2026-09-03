import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

import { getMenu } from "../lib/menu.functions";
import { MenuItemCard, ALLERGEN_LABELS } from "../components/MenuItemCard";
import { SiteHeader, SiteFooter, ORDER_URL } from "../components/SiteChrome";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menù — SOTTOSCALA Mottola | Sushi, Pinse, Cocktail" },
      {
        name: "description",
        content:
          "Il menù completo del Sottoscala a Mottola: sushi, pinse gourmet, bao, tacos, cocktail signature e vini. Foto, prezzi, allergeni e anteprima 3D/AR dei piatti.",
      },
      { property: "og:title", content: "Menù — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "Sushi, pinse gourmet, bao, tacos e cocktail signature. Prezzi, allergeni e anteprima in realtà aumentata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js",
        type: "module",
      },
    ],
  }),
  loader: () => getMenu(),
  component: MenuPage,
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function MenuPage() {
  const categories = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
        <section className="glass overflow-hidden rounded-4xl">
          <div className="px-6 py-14 sm:px-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Il nostro Menù
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Tradizione pugliese e anima asiatica: {categories.length} sezioni,
              foto reali, prezzi e allergeni sempre aggiornati.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground"
              >
                Ordina online
              </a>
              <span className="glass-soft flex items-center gap-2 rounded-full px-5 py-3 text-base">
                <Sparkles size={16} className="text-accent" aria-hidden />
                Alcuni piatti hanno l'anteprima 3D / AR
              </span>
            </div>
          </div>
        </section>

        {/* Navigazione categorie */}
        <nav
          aria-label="Categorie del menù"
          className="glass sticky top-24 z-30 mt-8 rounded-3xl px-3 py-3"
        >
          <ul className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${slugify(c.name)}`}
                  className="block whitespace-nowrap rounded-full px-4 py-2 text-base text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {categories.map((c) => (
          <section key={c.id} id={slugify(c.name)} className="scroll-mt-44 pt-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {c.coverImageUrl && (
                <img
                  src={c.coverImageUrl}
                  alt={c.name}
                  loading="lazy"
                  className="h-32 w-full rounded-3xl object-cover sm:h-28 sm:w-48"
                />
              )}
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {c.name}
                </h2>
                {c.description && (
                  <p className="mt-2 text-lg text-muted-foreground">
                    {c.description.replace(/<[^>]*>/g, " ").trim()}
                  </p>
                )}
              </div>
            </div>

            <ul className="mt-8 grid gap-4 lg:grid-cols-2">
              {c.menuItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </ul>
          </section>
        ))}

        <section className="glass-soft mt-20 rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Legenda allergeni</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.values(ALLERGEN_LABELS).map((label) => (
              <span
                key={label}
                className="rounded-full border border-border/70 px-3 py-1 text-sm text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-base text-muted-foreground">
            Per informazioni dettagliate su allergeni e intolleranze chiedi al
            personale in sala.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
