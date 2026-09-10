import { createFileRoute } from "@tanstack/react-router";
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
        <h1 className="text-4xl font-extrabold tracking-tight">Regala un'esperienza</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Acquista una Gift Card digitale da regalare a chi ami. Valida su tutto il nostro menù.
        </p>

        <div className="glass mt-8 overflow-hidden rounded-4xl p-2 sm:p-4 h-[750px] w-full">
          <iframe 
            src={SUMUP_GIFTCARD}
            title="Sottoscala Gift Card"
            className="w-full h-full rounded-3xl border-0 bg-white"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </SiteLayout>
  );
}
