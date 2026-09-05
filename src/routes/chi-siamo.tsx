import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Utensils, Wine, Users } from "lucide-react";

import { SiteLayout, DELIVEROO_URL } from "../components/SiteChrome";

const IMG = "https://api.moremenu.it/v1/user-files";
const COVER = `${IMG}/restaurant-cover-image-2e07ce36-d29e-49ef-924b-2a3884d5bf93-1715724443753.jpeg`;
const SUSHI = `${IMG}/menu-category-cover-image-eb609020-f544-4e1a-a9ef-d9e88237dc45.jpeg`;
const COCKTAIL = `${IMG}/menu-category-cover-image-1e75479d-3d30-421b-a09f-2ce7700557a2.jpeg`;
const PINSA = `${IMG}/menu-category-cover-image-ea972651-0e5d-404d-aab9-2c215cc26f96.jpeg`;

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo — La storia del Sottoscala a Mottola" },
      {
        name: "description",
        content:
          "Due fratelli, un sushiman e una terrazza con vista sul golfo: la storia del Sottoscala, tra Capocollo di Martina Franca, stracciatella Gioiella e l'arte dei roll.",
      },
      { property: "og:title", content: "Chi Siamo — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "La storia, la filosofia di cucina e le persone dietro al Sottoscala di Mottola.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: COVER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: COVER },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <p className="flex items-center gap-2 text-base font-medium text-accent">
          <Sparkles size={16} aria-hidden />
          La nostra storia
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
          Due fratelli, un sushiman,
          <br />
          un angolo di Mottola.
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="glass rounded-4xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Il Sottoscala nasce sotto una vecchia rampa di scale del centro
              storico, da un'idea semplice di due fratelli: creare un posto
              piccolo, caldo e ovattato, dove sentirsi a casa anche la prima
              volta. Poche luci, musica retrò, legno e pietra: uno spazio intimo
              in cui il tempo rallenta.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Poi è arrivata la terrazza. Salendo pochi gradini si apre la vista
              sul golfo: nelle sere limpide si vedono le luci della costa
              muoversi in lontananza, ed è lì che i nostri ospiti finiscono per
              restare fino a tardi, con un cocktail in mano.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              L'ingresso del nostro Sushiman ha cambiato tutto. La sua tecnica ha
              incontrato la nostra dispensa pugliese — il Capocollo di Martina
              Franca, la stracciatella Gioiella, l'olio della Masseria Amodio — e
              da quell'incontro sono nati i roll, i bao e le pinse che oggi
              raccontano il Sottoscala: due tradizioni che si rispettano invece
              di sovrapporsi.
            </p>
          </div>
          <img
            src={COVER}
            alt="La sala del Sottoscala a Mottola"
            className="h-full w-full rounded-4xl object-cover"
            loading="lazy"
            width={1920}
            height={711}
          />
        </div>

        <h2 className="mt-24 text-3xl font-bold tracking-tight md:text-4xl">
          La filosofia della cucina
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Utensils,
              title: "Materia prima locale",
              text: "Capocollo di Martina Franca, stracciatella Gioiella, olio Masseria Amodio: la Puglia è la base di ogni piatto, anche quando il piatto arriva da lontano.",
              image: PINSA,
            },
            {
              icon: Sparkles,
              title: "Tecnica asiatica",
              text: "Riso lavorato ogni giorno, pesce selezionato, cotture rapide: roll, bao, tacos e poke curati con la disciplina della cucina giapponese.",
              image: SUSHI,
            },
            {
              icon: Wine,
              title: "Bere bene",
              text: "Signature cocktail costruiti sugli stessi sapori del menù, più una cantina con etichette pugliesi e nazionali scelte una a una.",
              image: COCKTAIL,
            },
          ].map((c) => (
            <article key={c.title} className="glass overflow-hidden rounded-4xl">
              <img
                src={c.image}
                alt={c.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <c.icon size={18} className="text-primary" aria-hidden />
                  {c.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-24 text-3xl font-bold tracking-tight md:text-4xl">
          Le persone
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              role: "I fratelli fondatori",
              text: "In sala ogni sera: accolgono, consigliano e tengono il ritmo del locale.",
            },
            {
              role: "Il Sushiman",
              text: "Al banco crudi: taglia, compone e firma i roll che hanno reso riconoscibile il Sottoscala.",
            },
            {
              role: "Il team bar e cucina",
              text: "Mixology, forno e pass: una squadra piccola che lavora spalla a spalla.",
            },
          ].map((p) => (
            <div key={p.role} className="glass rounded-4xl p-7">
              <Users size={20} className="text-primary" aria-hidden />
              <h3 className="mt-3 text-xl font-semibold">{p.role}</h3>
              <p className="mt-2 text-base text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-20 flex flex-col items-start gap-6 rounded-4xl p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Vieni a trovarci
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Sfoglia il menù o ordina comodamente a casa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-primary px-7 py-3.5 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Sfoglia il Menù
            </Link>
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[oklch(0.85_0.09_205)] px-7 py-3.5 text-lg font-semibold text-[oklch(0.24_0.06_205)] transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Ordina con Deliveroo
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
