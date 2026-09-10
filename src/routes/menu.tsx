import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

import {
  getMenu,
  categoryEmoji,
  categorySlug,
} from "../lib/menu.functions";
import { MenuItemCard, ALLERGEN_LABELS } from "../components/MenuItemCard";
import { CategorySlider } from "../components/CategorySlider";
import { SiteLayout, DELIVEROO_URL } from "../components/SiteChrome";

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

function MenuPage() {
  const categories = Route.useLoaderData();

  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
        <section className="glass overflow-hidden rounded-4xl">
          <div className="px-6 py-10 sm:px-12 sm:py-14">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Il nostro Menù
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Tradizione pugliese e anima asiatica: {categories.length} sezioni,
              foto reali, prezzi e allergeni sempre aggiornati.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DELIVEROO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[oklch(0.85_0.09_205)] px-7 py-3 text-base font-semibold text-[oklch(0.24_0.06_205)] transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                Ordina con Deliveroo
    </a>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-base text-muted-foreground w-full">
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent shrink-0" aria-hidden />
                Alcuni piatti hanno l'anteprima 3D / AR
              </span>
            </div>
          </div>
        </div>
      </section>

        {/* Slider categorie */}
        <nav aria-label="Categorie del menù" className="mt-8">
          <CategorySlider
            categories={categories.map((c) => ({
              id: c.id,
              name: c.name,
              coverImageUrl: c.coverImageUrl,
              count: c.menuItems.length,
            }))}
          />
        </nav>

        {categories.map((c) => (
          <section
            key={c.id}
            id={categorySlug(c.name)}
            className="scroll-mt-28 pt-14"
          >
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
                  {categoryEmoji(c.name)} {c.name}
                </h2>
                <p className="mt-1 text-base text-muted-foreground">
                  {c.menuItems.length}{" "}
                  {c.menuItems.length === 1 ? "piatto" : "piatti"}
                </p>
                {c.description && (
                  <p className="mt-2 text-lg text-muted-foreground">
                    {c.description.replace(/<[^>]*>/g, " ").trim()}
                  </p>
                )}
              </div>
            </div>

            <ul className="mt-8 grid items-start gap-4 lg:grid-cols-2">
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
    </SiteLayout>
  );
}
