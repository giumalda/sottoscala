import { Link } from "@tanstack/react-router";
import { Calendar, UtensilsCrossed, Gift } from "lucide-react";

export function QuickActionsBar() {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Link
        to="/prenota"
        className="glass group rounded-3xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95 border border-white/10 shadow-lg"
      > 
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Calendar size={22} />
        </div>
        <div>
          <h3 className="font-bold text-base">Prenota un tavolo</h3>
          <p className="text-xs text-muted-foreground">Riserva subito il tuo posto</p>
        </div>
      </Link>

      <Link
        to="/ordina"
        className="glass group rounded-3xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95 border border-white/10 shadow-lg"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <UtensilsCrossed size={22} />
        </div>
        <div>
          <h3 className="font-bold text-base">Delivery &amp; Asporto</h3>
          <p className="text-xs text-muted-foreground">Gusta i nostri piatti a casa</p>
        </div>
      </Link>

      <Link
        to="/gift-card"
        className="glass group rounded-3xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95 border border-white/10 shadow-lg"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Gift size={22} />
        </div>
        <div>
          <h3 className="font-bold text-base">Gift Card</h3>
          <p className="text-xs text-muted-foreground">Regala un'esperienza unica</p>
        </div>
      </Link>
    </div>
  );
}
