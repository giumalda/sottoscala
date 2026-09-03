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
  price?: number;
  description?: string;
  coverImageUrl?: string;
  allergens?: string[];
  hasAr?: boolean;
  hidden?: boolean;
  position?: number;
  mediaArThreeModel?: ArModel;
};

export type MenuCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  coverImageUrl?: string;
  hidden?: boolean;
  position?: number;
  menuItems: MenuItem[];
};

const API = "https://api.moremenu.it/v1/app/restaurants/sottoscala";

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
      name: c.name.trim(),
      menuItems: (c.menuItems ?? [])
        .filter((i) => !i.hidden)
        .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
        .map((i) => ({ ...i, name: i.name.trim() })),
    }));
});
