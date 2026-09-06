import { createServerFn } from "@tanstack/react-start";

export type ArModel = {
  id: string;
  name: string;
  arThreeModelAndroidUrl?: string;
  arThreeModelIosUrl?: string;
};

export type MenuItem = {
  id: string;
  slug: string;
  name: string;
  price?: number | undefined;
  description?: string | undefined;
  coverImageUrl?: string | undefined;
  allergens?: string[] | undefined;
  hasAr?: boolean | undefined;
  hidden?: boolean | undefined;
  position?: number | undefined;
  mediaArThreeModel?: ArModel | undefined;
};

export type MenuCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string | undefined;
  coverImageUrl?: string | undefined;
  hidden?: boolean | undefined;
  position?: number | undefined;
  menuItems: MenuItem[];
};

const API = "https://api.moremenu.it/v1/app/restaurants/sottoscala";

/** Correzioni tipografiche sui dati di origine. */
const TYPO_FIXES: [RegExp, string][] = [
  [/Stizzichini/gi, "Stuzzichini"],
  [/Salome\b/gi, "Salmone"],
  [/Teriaky/gi, "Teriyaki"],
  [/Cicken/gi, "Chicken"],
  [/Vermont rosso/gi, "Vermouth rosso"],
];

function fixTypos(text?: string) {
  if (!text) return text;
  return TYPO_FIXES.reduce((acc, [re, to]) => acc.replace(re, to), text);
}

/** Emoji per ogni categoria del menù (coerenza semantica). */
export const CATEGORY_EMOJI: { match: RegExp; emoji: string }[] = [
  { match: /degustazione/i, emoji: "🥢" },
  { match: /stuzzichini|fritti/i, emoji: "🍤" },
  { match: /aperitiv/i, emoji: "🥂" },
  { match: /sottosorsi/i, emoji: "🍸" },
  { match: /cocktail/i, emoji: "🍹" },
  { match: /bun/i, emoji: "🍔" },
  { match: /pinse|padellino/i, emoji: "🍕" },
  { match: /sushi/i, emoji: "🍣" },
  { match: /insalaton|poke/i, emoji: "🥗" },
  { match: /tacos/i, emoji: "🌮" },
  { match: /bao|pancake/i, emoji: "🥟" },
  { match: /soft drink/i, emoji: "🥤" },
  { match: /birr/i, emoji: "🍺" },
  { match: /distillat/i, emoji: "🥃" },
  { match: /carta dei vini/i, emoji: "🍷" },
  { match: /al calice/i, emoji: "🍇" },
  { match: /dolci/i, emoji: "🍰" },
  { match: /kit evento/i, emoji: "🎉" },
  { match: /dopo pasto/i, emoji: "☕" },
  { match: /acque/i, emoji: "💧" },
];

/** Rimuove eventuali emoji già presenti e restituisce il nome pulito. */
export function cleanCategoryName(name: string) {
  return name
    .replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function categoryEmoji(name: string) {
  return CATEGORY_EMOJI.find((e) => e.match.test(name))?.emoji ?? "🍽️";
}

export function categorySlug(name: string) {
  return cleanCategoryName(name)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Legge il menù live da MoreMenu (stessa fonte del menù digitale del locale). */
export const getMenu = createServerFn({ method: "GET" }).handler(async () => {
  const res = await fetch(`${API}/menu-categories?language=it`, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) throw new Error(`MoreMenu ${res.status}`);
  const data = (await res.json()) as MenuCategory[];

  return data
    .filter((c) => !c.hidden)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    .map((c) => ({
      ...c,
      name: cleanCategoryName(fixTypos(c.name) ?? c.name),
      description: fixTypos(c.description),
      menuItems: (c.menuItems ?? [])
        .filter((i) => !i.hidden)
        .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
        .map((i) => ({
          ...i,
          name: fixTypos(i.name.trim()) ?? i.name,
          description: fixTypos(i.description),
        })),
    }));
});
