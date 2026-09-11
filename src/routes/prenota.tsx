import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, FOODBOOKING_RESERVATION } from "../components/SiteChrome";

export const Route = createFileRoute("/prenota")({
  head: () => ({
    meta: [{ title: "Prenota un tavolo — Sottoscala" }],
  }),
  component: PrenotaPage,
});

function PrenotaPage() {
  return (
    <SiteLayout>
      {/* Sfondo in tema Sottoscala */}
      <div className="fixed inset-0 -z-10 bg-background/95" />
      <div className="fixed inset-0 -z-10 bg-[url('/bg-home.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <main className="mx-auto max-w-[800px] px-4 pb-24 pt-32 sm:px-6 sm:pt-40 text-center">
        
        {/* Icona in alto con il colore coordinato */}
        <div className="inline-flex p-5 rounded-3xl bg-primary/10 text-primary mb-8 shadow-lg shadow-primary/5">
          <Calendar size={40} />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Prenota un Tavolo
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Vivi l'atmosfera suggestiva del nostro locale in pietra a Mottola. Riserva il tuo tavolo in pochi click.
        </p>
        
        <div className="glass rounded-4xl p-8 sm:p-12 border-white/10 shadow-xl text-left relative overflow-hidden">
          
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary shrink-0" size={26} />
              <h2 className="text-2xl font-bold">Riserva la tua esperienza</h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Il nostro sistema di prenotazione online ti permette di scegliere data, orario e numero di ospiti in tempo reale.
            </p>

            <ul className="space-y-4 mb-10 text-muted-foreground">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <span>Conferma immediata della prenotazione</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <span>Orari: Mar–Gio–Dom (18:00–00:30) • Ven–Sab (18:00–01:00)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <span>Per gruppi numerosi o esigenze particolari, contattaci su WhatsApp</span>
              </li>
            </ul>

            {/* Pulsante di prenotazione */}
            <a
              href={FOODBOOKING_RESERVATION}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_0_25px_rgba(var(--primary),0.3)] transition-all hover:brightness-110 active:scale-95"
            >
              Prenota un tavolo online
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
        
      </main>
    </SiteLayout>
  );
}
