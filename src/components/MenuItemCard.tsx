import { useState, type ComponentType } from "react";
import { Box, X } from "lucide-react";

import type { MenuItem } from "../lib/menu.functions";

const ModelViewer = "model-viewer" as unknown as ComponentType<
  Record<string, unknown>
>;

export const ALLERGEN_LABELS: Record<string, string> = {
  gluten: "Glutine",
  milk: "Latte",
  egg: "Uova",
  fish: "Pesce",
  crustaceans: "Crostacei",
  clams: "Molluschi",
  soy: "Soia",
  sesame: "Sesamo",
  peanuts: "Arachidi",
  almonds: "Mandorle",
  pistachios: "Pistacchi",
  shellFruit: "Frutta a guscio",
  citrusFruits: "Agrumi",
  mustard: "Senape",
  spicy: "Piccante",
};

function stripHtml(html?: string) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(price?: number) {
  if (price == null) return "";
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export function MenuItemCard({ item }: { item: MenuItem }) {
  const [arOpen, setArOpen] = useState(false);
  const desc = stripHtml(item.description);
  const ar = item.mediaArThreeModel;

  return (
    <li className="glass-soft flex gap-4 rounded-3xl p-4 transition-colors hover:bg-foreground/10">
      {item.coverImageUrl && (
        <img
          src={item.coverImageUrl}
          alt={item.name}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28"
        />
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
          {item.price != null && (
            <span className="shrink-0 text-lg font-semibold text-primary">
              {formatPrice(item.price)}
            </span>
          )}
        </div>

        {desc && (
          <p className="mt-1 text-base leading-relaxed text-muted-foreground">
            {desc}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {(item.allergens ?? []).map((a) => (
            <span
              key={a}
              className="rounded-full border border-border/70 px-3 py-1 text-sm text-muted-foreground"
            >
              {ALLERGEN_LABELS[a] ?? a}
            </span>
          ))}

          {ar?.arThreeModelAndroidUrl && (
            <button
              onClick={() => setArOpen(true)}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground"
            >
              <Box size={15} aria-hidden />
              Vedi in 3D / AR
            </button>
          )}
        </div>
      </div>

      {arOpen && ar && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-xl"
          role="dialog"
          aria-label={`Anteprima 3D di ${item.name}`}
        >
          <div className="glass relative w-full max-w-lg rounded-4xl p-4">
            <button
              onClick={() => setArOpen(false)}
              aria-label="Chiudi anteprima 3D"
              className="absolute right-4 top-4 z-10 rounded-full bg-background/70 p-2"
            >
              <X size={18} />
            </button>
            <ModelViewer
              src={ar.arThreeModelAndroidUrl}
              ios-src={ar.arThreeModelIosUrl}
              alt={`Modello 3D di ${item.name}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              style={{ width: "100%", height: "60vh", background: "transparent" }}
            />
            <p className="px-2 pb-2 text-center text-base font-semibold">
              {item.name}
            </p>
          </div>
        </div>
      )}
    </li>
  );
}
