import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Star,
  Leaf,
  WheatOff,
  ShoppingBag,
  Bike,
} from "lucide-react";

import heroImage from "../assets/hero-cocktail.jpg";
import cardSushi from "../assets/card-sushi.jpg";
import cardPinsa from "../assets/card-pinsa.jpg";
import cardCocktail from "../assets/card-cocktail.jpg";
import cardFusion from "../assets/card-fusion.jpg";

const MENU_URL = "https://app.moremenu.it";
const PHONE_DISPLAY = "351 466 7813";
const PHONE_TEL = "tel:+393514667813";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    {
      title: "Sushi & Crudi",
      desc: "Uramaki, tartare, sashimi",
      image: cardSushi,
      alt: "Uramaki e nigiri di salmone su piatto di ardesia",
    },
    {
      title: "Pinse & Bun Gourmet",
      desc: "Impasti leggeri e farciture locali",
      image: cardPinsa,
      alt: "Bun gourmet farcito su piatto di ceramica scura",
    },
    {
      title: "Cocktail Signature & Vini",
      desc: "Mixology e cantina fornita",
      image: cardCocktail,
      alt: "Due cocktail signature su bancone scuro",
    },
    {
      title: "Tacos, Bao & Poke",
      desc: "Fusion asiatica",
      image: cardFusion,
      alt: "Tacos e poke bowl su tavolo scuro",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-bold tracking-widest text-foreground"
          >
            SOTTOSCALA
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#chi-siamo"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Chi Siamo
            </a>
            <a
              href="#menu"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Menù
            </a>
            <a
              href="#contatti"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Contatti
            </a>
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ordina / Prenota
            </a>
          </div>

          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#chi-siamo"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-foreground"
              >
                Chi Siamo
              </a>
              <a
                href="#menu"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-foreground"
              >
                Menù
              </a>
              <a
                href="#contatti"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-foreground"
              >
                Contatti
              </a>
              <a
                href={MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Ordina / Prenota
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero */}
      <section className="relative flex min-h-screen items-center">
        <img
          src={heroImage}
          alt="Cocktail signature ambrato sul bancone del Sottoscala"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Tradizione Pugliese.
              <br />
              Anima Asiatica.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Un'esperienza culinaria avvolgente nel centro di Mottola. Dal
              Capocollo di Martina Franca al sushi fresco, accompagnati dai
              nostri signature cocktail.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-8 py-4 text-center text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Sfoglia il Menù
              </a>
              <a
                href={PHONE_TEL}
                className="rounded-lg border border-foreground/40 px-8 py-4 text-center text-lg font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
              >
                Chiama per Prenotare
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Chi Siamo */}
      <section id="chi-siamo" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
              Due Fratelli, Un SushiMan, Un'Atmosfera Unica
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Nato dall'idea di due fratelli, il Sottoscala è un rifugio intimo
              e raffinato. Uniamo ingredienti del nostro territorio, come la
              Stracciatella Gioiella e l'Olio Masseria Amodio, all'arte del
              sushi e della cucina asiatica. Il tutto accompagnato da una
              selezione musicale retrò e una terrazza con vista sul golfo.
            </p>
          </div>
          <img
            src={cardCocktail}
            alt="Cocktail signature serviti al bancone del Sottoscala"
            className="w-full rounded-xl object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </section>

      {/* 4. Esplora il Menù */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Esplora il Menù
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Quattro mondi di sapori, un solo indirizzo.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                className="aspect-[4/3] w-full rounded-xl object-cover transition-opacity group-hover:opacity-80"
                loading="lazy"
                width={800}
                height={600}
              />
              <h3 className="mt-5 text-xl font-semibold">{cat.title}</h3>
              <p className="mt-1 text-base text-muted-foreground">{cat.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Vedi tutti i 150+ piatti e prezzi
          </a>
        </div>
      </section>

      {/* 5. Social Proof */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Cosa dicono di noi
        </h2>
        <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
          Valutazione 4.6/5
          <Star size={18} className="fill-primary text-primary" aria-hidden />
          su Google e recensioni top su TheFork.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.author}>
              <div className="flex gap-1" aria-label="5 stelle su 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
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

      {/* 6. Footer */}
      <footer id="contatti" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <MapPin size={18} className="text-primary" aria-hidden />
                Contatti
              </h3>
              <p className="mt-4 text-base text-muted-foreground">
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 text-foreground hover:underline"
                >
                  <Phone size={16} aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Via Giovanni Amendola, 1<br />
                74017 Mottola (TA)
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Clock size={18} className="text-primary" aria-hidden />
                Orari
              </h3>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li>Lunedì: Chiuso</li>
                <li>Mar – Gio – Dom: 18:00–00:30</li>
                <li>Ven – Sab: 18:00–01:00</li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Instagram size={18} className="text-primary" aria-hidden />
                Social
              </h3>
              <p className="mt-4 text-base">
                <a
                  href="https://www.instagram.com/sottoscala___"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  @sottoscala___
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Servizi</h3>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex items-center gap-2">
                  <WheatOff size={16} className="text-primary" aria-hidden />
                  Opzioni senza glutine
                </li>
                <li className="flex items-center gap-2">
                  <Leaf size={16} className="text-primary" aria-hidden />
                  Opzioni vegane
                </li>
                <li className="flex items-center gap-2">
                  <ShoppingBag size={16} className="text-primary" aria-hidden />
                  Asporto
                </li>
                <li className="flex items-center gap-2">
                  <Bike size={16} className="text-primary" aria-hidden />
                  Domicilio
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl">
            <iframe
              title="Mappa — Sottoscala, Via Giovanni Amendola 1, Mottola"
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.0250%2C40.6280%2C17.0460%2C40.6390&layer=mapnik&marker=40.6335%2C17.0356"
              className="h-72 w-full grayscale invert"
              loading="lazy"
            />
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sottoscala — Mottola. Tutti i diritti
            riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
