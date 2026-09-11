import { createFileRoute } from "@tanstack/react-router";
import { Gift, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, SUMUP_GIFTCARD } from "../components/SiteChrome";

export const Route = createFileRoute("/gift-card")({
  head: () => ({
    meta: [{ title: "Gift Card — Sottoscala" }],
  }),
  component: GiftCardPage,
});

function GiftCardPage() {
  return (
    <SiteLayout>
      {/* Sfondo in tema Sottoscala */}
      <div className="fixed inset-0 -z-10 bg-background/95" />
      <div className="fixed inset-0 -z-10 bg-[url('/bg-home.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <main className="mx-auto max-w-[800px] px-4 pb-24 pt-32 sm:px-6 sm:pt-40 text-center">
        
        {/* Icona in alto con tonalità ambrata/giallina */}
        <div className="inline-flex p-5 rounded-3xl bg-amber-500/10 text-amber-400 mb-8 shadow-lg shadow-amber-500/5">
          <Gift size={40} />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Gift Card Sottoscala
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Regala un'esperienza culinaria unica. Sorprendi chi ami con una cena o un aperitivo tra tradizione pugliese e anima asiatica.
        </p>
        
        <div className="glass rounded-4xl p-8 sm:p-12 border-white/10 shadow-xl text-left relative overflow-hidden">
          
          {/* Dettagli dell'offerta */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-amber-400 shrink-0" size={26} />
              <h2 className="text-2xl font-bold">Il regalo perfetto per ogni occasione</h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Le nostre carte regalo digitali sono flessibili, facilissime da acquistare e possono essere utilizzate direttamente nel nostro locale a Mottola.
            </p>

            <ul className="space-y-4 mb-10 text-muted-foreground">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400 shrink-0" size={20} />
                <span>Disponibili in vari tagli di importo</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400 shrink-0" size={20} />
                <span>Invio digitale immediato</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400 shrink-0" size={20} />
                <span>Valide per tutte le esperienze al Sottoscala</span>
              </li>
            </ul>

            {/* Pulsante di acquisto con il colore ambrato/giallino coordinato */}
            <a
              href={SUMUP_GIFTCARD}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all hover:brightness-110 active:scale-95"
            >
              Acquista subito una Gift Card
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
        
      </main>
    </SiteLayout>
  );
}
