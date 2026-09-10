import { Link } from "@tanstack/react-router";
import { Calendar, UtensilsCrossed, Gift, ArrowRight } from "lucide-react";

export function ServiziSection() {
  return (
    <section className="my-16 px-4">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">I nostri servizi</h2>
          <p className="mt-2 text-muted-foreground">Scegli come gustare l'esperienza Sottoscala</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Prenota */}
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
                Riserva il tuo tavolo nel nostro locale a Mottola in modo semplice e veloce.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
              <span>Prenota ora</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card Delivery */}
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
                Gusta i nostri piatti comodamente a casa tua o ordina per il ritiro in sede.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground group-hover:translate-x-1 transition-transform">
              <span>Scopri il menu d'asporto</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card Gift Card */}
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
                Regala un'esperienza culinaria unica a chi ami con le nostre carte regalo digitali.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Acquista Gift Card</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
