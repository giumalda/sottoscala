import { useState, type ComponentType } from "react";
import { Box, Loader2, X } from "lucide-react";

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
  const [loaded, setLoaded] = useState(false);
  const desc = stripHtml(item.description);
  const ar = item.mediaArThreeModel;

  return (
    <li className="glass-soft flex flex-col rounded-3xl p-4 transition-colors hover:bg-foreground/10">
      <div className="flex gap-4">
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
                onClick={() => setArOpen((v) => !v)}
                aria-expanded={arOpen}
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                {arOpen ? <X size={15} aria-hidden /> : <Box size={15} aria-hidden />}
                {arOpen ? "Chiudi 3D" : "Vedi in 3D / AR"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Il 3D si apre in linea: espande la card e spinge in basso i piatti successivi */}
      {arOpen && ar && (
        <div className="glass relative mt-4 overflow-hidden rounded-3xl">
          {!loaded && (
            <div className="absolute inset-0 flex animate-pulse flex-col items-center justify-center gap-3 bg-foreground/5 text-muted-foreground">
              <Loader2 size={26} className="animate-spin" aria-hidden />
              <span className="text-sm">Caricamento modello 3D…</span>
            </div>
          )}
          <ModelViewer
            src={ar.arThreeModelAndroidUrl}
            ios-src={ar.arThreeModelIosUrl}
            alt={`Modello 3D di ${item.name}`}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            onLoad={() => setLoaded(true)}
            style={{
              width: "100%",
              height: "320px",
              background: "transparent",
            }}
          />
        </div>
      )}
    </li>
  );
}
