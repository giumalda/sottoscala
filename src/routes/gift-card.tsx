import { createFileRoute } from "@tanstack/react-router";
import { Gift, CreditCard, MailOpen, ArrowRight } from "lucide-react";
import { SiteLayout, SUMUP_GIFTCARD } from "../components/SiteChrome";

export const Route = createFileRoute("/gift-card")({
  head: () => ({
    meta: [{ title: "Gift Card — SOTTOSCALA" }],
  }),
  component: GiftCardPage,
});

function GiftCardPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Regala un'esperienza
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Acquista una Gift Card digitale da regalare a chi ami. 
            È valida per tutto il nostro menù ed è il pensiero perfetto per ogni occasione.
          </p>
        </div>

      <div className="mt-12 glass w-full rounded-4xl p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 sm:grid-cols-3 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Gift size={28} />
              </div>
              <h3 className="font-semibold text-lg">Scegli l'importo</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Decidi il valore del tuo regalo tra le opzioni disponibili.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="font-semibold text-lg">Paga in sicurezza</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Usa la tua carta tramite il nostro sistema crittografato.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <MailOpen size={28} />
              </div>
              <h3 className="font-semibold text-lg">Invia o stampa</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Riceverai il buono via email da girare a chi vuoi tu.
              </p>
            </div>
          </div>

          <div className="border-t border-border/60 pt-8 flex flex-col items-center">
            <p className="text-base text-muted-foreground mb-6 text-center">
              Verrai reindirizzato al nostro portale dedicato per l'acquisto sicuro.
            </p>
            <a
              href={SUMUP_GIFTCARD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
            >
              Acquista Gift Card
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
