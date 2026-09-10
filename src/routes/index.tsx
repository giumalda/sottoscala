import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, DELIVEROO_URL } from "../components/SiteChrome";
import { Calendar, UtensilsCrossed, Gift, ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Sottoscala — Ristorante & Cocktail Bar a Mottola" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Sfondo fisso della Home */}
      <div className="fixed inset-0 -z-10 bg-[url('/bg-home.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 -z-10 bg-background/80 backdrop-blur-sm" />

      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-32 sm:px-6 sm:pt-36">
        
        {/* Sezione Principale / Hero */}
        <div className="flex flex-col items-center text-center py-12 sm:py-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-6 border border-primary/20">
            Mottola (TA) • Via Giovanni Amendola, 1
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Gusto, eleganza e convivialità nel cuore di Mottola
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Dal calore del nostro locale storico nel centro alle serate estive sulla spiaggia a Castellaneta Marina con Sottoscala al Mare.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/al-mare"
              className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:bg-blue-500 active:scale-95"
            >
              Scopri Sottoscala al Mare →
            </Link>
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[oklch(0.85_0.09_205)] px-8 py-4 text-base font-semibold text-[oklch(0.24_0.06_205)] shadow-lg transition-transform hover:brightness-110 active:scale-95"
            >
              Ordina con Deliveroo
            </a>
          </div>
        </div>

        {/* Sezione Servizi / Azioni Rapide */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">I nostri servizi</h2>
            <p className="mt-2 text-sm text-muted-foreground">Scegli come vivere l'esperienza Sottoscala</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/prenota"
              className="glass group rounded-4xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] border border-white/10 shadow-xl"
            >
              <div>
                <div className="inline-flex p-3.5 rounded-2xl bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110">
                  <Calendar size={26} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Prenota un tavolo</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Riserva subito il tuo posto nel nostro locale a Mottola.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                <span>Prenota ora</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/ordina"
              className="glass group rounded-4xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] border border-white/10 shadow-xl"
            >
              <div>
                <div className="inline-flex p-3.5 rounded-2xl bg-[oklch(0.85_0.09_205)]/20 text-[oklch(0.85_0.09_205)] mb-6 transition-transform group-hover:scale-110">
                  <UtensilsCrossed size={26} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Delivery &amp; Asporto</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Gusta i nostri piatti comodamente a casa tua o ritira in sede.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground group-hover:translate-x-1 transition-transform">
                <span>Scopri il menu</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/gift-card"
              className="glass group rounded-4xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] border border-white/10 shadow-xl"
            >
              <div>
                <div className="inline-flex p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 mb-6 transition-transform group-hover:scale-110">
                  <Gift size={26} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Gift Card</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Regala un'esperienza culinaria unica con le nostre carte regalo.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Acquista Gift Card</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>

      </main>
    </SiteLayout>
  );
}
