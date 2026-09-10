import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Utensils, Wine, Users } from "lucide-react";

import { SiteLayout, DELIVEROO_URL } from "../components/SiteChrome";
import heroImage from "../assets/hero-sottoscala.jpg";

const IMG = "https://api.moremenu.it/v1/user-files";
const COVER = `${IMG}/restaurant-cover-image-2e07ce36-d29e-49ef-924b-2a3884d5bf93-1715724443753.jpeg`;
const SUSHI = `${IMG}/menu-category-cover-image-eb609020-f544-4e1a-a9ef-d9e88237dc45.jpeg`;
const COCKTAIL = `${IMG}/menu-category-cover-image-1e75479d-3d30-421b-a09f-2ce7700557a2.jpeg`;
const PINSA = `${IMG}/menu-category-cover-image-ea972651-0e5d-404d-aab9-2c215cc26f96.jpeg`;
const FUSION = `${IMG}/menu-category-cover-image-1359bc0d-0dd2-4063-8fa5-50dd10e7b9b9.jpeg`;

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo — La vera storia del Sottoscala a Mottola" },
      {
        name: "description",
        content:
          "Dalle antiche cave in pietra di Mottola fino a Castellaneta Marina. La famiglia Notaristefano racconta l'incontro tra tradizioni pugliesi e cucina asiatica.",
      },
      { property: "og:title", content: "Chi Siamo — SOTTOSCALA Mottola" },
      {
        property: "og:description",
        content:
          "La storia, la filosofia di cucina e l'evoluzione del Sottoscala di Mottola.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: COVER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: COVER },
    ],
  }),
  component: ChiSiamoPage,
});

/** Blocchi narrativi alternati: testo discorsivo e foto reali. */
const STORY = [
  {
    id: "origini",
    title: "Le radici in pietra",
    image: heroImage,
    alt: "Il bancone del Sottoscala illuminato di sera",
    paragraphs: [
      "Il Sottoscala si trova a Mottola, in via Giovanni Amendola. Il suo nome deriva dalla particolare conformazione del locale, che si apre proprio ai piedi di una scalinata.",
      "Gli interni presentano un'affascinante struttura in pietra, tipica dei paesi della Murgia. L'aspetto richiama in modo diretto le antiche cave rupestri, creando un ambiente intimo e accogliente.",
    ],
  },
  {
    id: "rinascita",
    title: "Una nuova vita",
    image: PINSA,
    alt: "Pinsa gourmet del Sottoscala",
    paragraphs: [
      "Nel 2023, la famiglia Notaristefano ha deciso di investire su questo spazio per ridargli vita. Il locale era infatti chiuso da qualche anno, dopo aver ospitato una gelateria come sua ultima attività.",
      "L'obiettivo era chiaro fin da subito: recuperare l'anima storica della struttura e trasformarla in un punto di ritrovo moderno, dove il cibo e la convivialità fossero al centro di tutto.",
    ],
  },
  {
    id: "fusion",
    title: "L'incontro dei sapori",
    image: SUSHI,
    alt: "Roll e crudi preparati al banco del Sottoscala",
    paragraphs: [
      "L'idea alla base del progetto è una forte contaminazione tra la cucina italiana d'eccellenza e lo street food asiatico di qualità. Al Sottoscala, il sushi dialoga con i sapori mediterranei e le tradizioni pugliesi.",
      "Il menù unisce piatti tipici, come pinse e salumi locali, con preparazioni fusion come poke, bao e uramaki. L'atmosfera rilassata è accompagnata da birre artigianali, cocktail originali e serate con musica dal vivo.",
    ],
  },
  {
    id: "mare",
    title: "L'espansione verso il mare",
    image: COCKTAIL,
    alt: "Signature cocktail in terrazza o al mare",
    paragraphs: [
      "Seguendo il successo ottenuto sulla collina, il percorso del ristorante si è allargato verso la costa, dando vita al Sottoscala al Mare.",
      "Questa succursale estiva è ospitata nel Kalè Beach Club di Castellaneta Marina. In questa nuova location l'offerta si concentra sul pescato fresco del Mediterraneo, mantenendo però intatta la solita anima fusion che caratterizza il marchio.",
    ],
  },
];

function ChiSiamoPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <p className="flex items-center gap-2 text-base font-medium text-accent">
          <Sparkles size={16} aria-hidden />
          La nostra storia
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
          Un'antica cava in pietra,
          <br />
          l'incontro tra Puglia e Asia.
        </h1>

        <div className="mt-14 flex flex-col gap-16">
          {STORY.map((block, i) => (
            <section
              key={block.id}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div
                className={`glass rounded-4xl p-8 sm:p-10 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {block.title}
                </h2>
                {block.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-5 text-lg leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <img
                src={block.image}
                alt={block.alt}
                className="h-72 w-full rounded-4xl object-cover md:h-full md:max-h-[26rem]"
                loading="lazy"
                width={1200}
                height={800}
              />
            </section>
          ))}
        </div>

        <h2 className="mt-24 text-3xl font-bold tracking-tight md:text-4xl">
          La filosofia della cucina
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Utensils,
              title: "Materia prima locale",
              text: "Salumi del territorio e ingredienti a chilometro zero: la Puglia è la base di ogni piatto, anche quando la ricetta arriva da lontano.",
              image: FUSION,
            },
            {
              icon: Sparkles,
              title: "Tecnica asiatica",
              text: "Riso lavorato ogni giorno, pescato fresco, cotture rapide: roll, bao, tacos e poke curati con la disciplina della cucina asiatica.",
              image: SUSHI,
            },
            {
              icon: Wine,
              title: "Bere bene",
              text: "Signature cocktail originali per esaltare i sapori del menù, uniti a una selezione mirata di birre artigianali ed etichette del territorio.",
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
              role: "La famiglia Notaristefano",
              text: "La guida e l'anima del progetto. Dal 2023 curano ogni dettaglio per garantire un'atmosfera calda e familiare.",
            },
            {
              role: "Il Sushiman",
              text: "Al banco crudi: taglia, compone e firma i roll e i piatti fusion che hanno reso riconoscibile il marchio Sottoscala.",
            },
            {
              role: "Il team bar e cucina",
              text: "Mixology, pinseria e cucina: una squadra compatta che lavora con precisione per unire sapori distanti.",
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
