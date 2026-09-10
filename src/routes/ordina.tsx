import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed, ShoppingBag, Bike, ArrowRight } from "lucide-react";
import { SiteLayout, DELIVEROO_URL, FOODBOOKING_DELIVERY } from "../components/SiteChrome";

export const Route = createFileRoute("/ordina")({
  head: () => ({
    meta: [{ title: "Delivery & Asporto — Sottoscala" }],
  }),
  component: OrdinaPage,
});

function OrdinaPage() {
  return (
    <SiteLayout>
      {/* Sfondo in tema Sottoscala */}
      <div className="fixed inset-0 -z-10 bg-background/95" />
      <div className="fixed inset-0 -z-10 bg-[url('/bg-home.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <main className="mx-auto max-w-[900px] px-4 pb-24 pt-32 sm:px-6 sm:pt-40 text-center">
        
        {/* Icona in alto */}
        <div className="inline-flex p-5 rounded-3xl bg-[oklch(0.85_0.09_205)]/10 text-[oklch(0.85_0.09_205)] mb-8 shadow-lg shadow-[oklch(0.85_0.09_205)]/5">
          <UtensilsCrossed size={40} />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Delivery & Asporto
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Gusta i piatti del Sottoscala comodamente a casa tua. Scegli il nostro servizio di asporto dal locale o affidati alla consegna di Deliveroo.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2">
          
          {/* Opzione 1: Asporto Diretto (Takeaway) */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between border-white/10 shadow-xl text-left hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="text-[oklch(0.85_0.09_205)]" size={28} />
                <h2 className="text-2xl font-bold">Asporto (Takeaway)</h2>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ordina online dal nostro menù e passa a ritirare i tuoi piatti caldi e pronti direttamente nel nostro locale a Mottola.
              </p>
            </div>
            <a
              href={FOODBOOKING_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full bg-[oklch(0.85_0.09_205)] px-6 py-4 text-base font-bold text-[oklch(0.24_0.06_205)] shadow-[0_0_20px_rgba(103,232,249,0.3)] transition-all hover:brightness-110 active:scale-95"
            >
              Ordina da asporto
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Opzione 2: Deliveroo */}
          <div className="glass rounded-4xl p-8 sm:p-10 flex flex-col justify-between border-white/10 shadow-xl text-left hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bike className="text-[#00CCBC]" size={28} />
                <h2 className="text-2xl font-bold">Consegna a Domicilio</h2>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Vuoi la comodità della consegna? Trovaci sull'app Deliveroo, effettuiamo consegne dirette a domicilio anche su Massafra e zone limitrofe.
              </p>
            </div>
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full bg-[oklch(0.85_0.09_205)] px-6 py-4 text-base font-bold text-[oklch(0.24_0.06_205)] shadow-[0_0_20px_rgba(103,232,249,0.3)] transition-all hover:brightness-110 active:scale-95"
            >
              Ordina su Deliveroo 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
        
      </main>
    </SiteLayout>
  );
}
