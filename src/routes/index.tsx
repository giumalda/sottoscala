import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, UtensilsCrossed, Gift, ArrowRight } from "lucide-react";
import { SiteLayout, Logo } from "../components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Sottoscala — Ristorante & Cocktail Bar a Mottola" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Sfondo originale della Home */}
      <div className="fixed inset-0 -z-10 bg-[url('/bg-home.jpg')] bg-cover bg-center" />
      <div className="fixed inset-0 -z-10 bg-background/80 backdrop-blur-[2px]" />

      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        
        {/* Intestazione Home di prima */}
        <div className="flex flex-col items-center text-center pb-8 sm:pb-12">
          <Logo className="h-20 sm:h-28 mb-6 drop-shadow-xl" />
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl drop-shadow-sm">
            Benvenuti al Sottoscala
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Ristorante, cocktail bar e luogo di ritrovo nel cuore di Mottola.
          </p>
        </div>

        {/* NUOVA SEZIONE: I nostri servizi (aggiunta sotto la home) */}
        <div className="mt-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">I nostri servizi</h2>
            <p className="mt-2 text-muted-foreground">Scegli come vivere l'esperienza Sottoscala</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Prenota */}
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

            {/* 2. Delivery & Asporto */}
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

            {/* 3. Gift Card */}
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
