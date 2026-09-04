import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { categoryEmoji, categorySlug } from "../lib/menu.functions";

type Cat = {
  id: string;
  name: string;
  coverImageUrl?: string;
  count: number;
};

export function CategorySlider({ categories }: { categories: Cat[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Categoria precedente"
        className="glass absolute -left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:brightness-125 active:scale-90 sm:flex"
      >
        <ChevronLeft size={22} aria-hidden />
      </button>

      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3"
      >
        {categories.map((c) => (
          <li key={c.id} className="snap-start">
            <a
              href={`#${categorySlug(c.name)}`}
              className="group relative flex h-28 w-64 shrink-0 items-end overflow-hidden rounded-[999px] transition-all duration-300 hover:-translate-y-1 active:scale-[0.97] sm:w-72"
            >
              {c.coverImageUrl && (
                <img
                  src={c.coverImageUrl}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <span className="glass-card relative flex h-full w-full flex-col justify-center rounded-[999px] px-6">
                <span className="truncate text-lg font-semibold text-foreground">
                  {categoryEmoji(c.name)} {c.name}
                </span>
                <span className="text-sm text-foreground/80">
                  {c.count} {c.count === 1 ? "piatto" : "piatti"}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Categoria successiva"
        className="glass absolute -right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:brightness-125 active:scale-90 sm:flex"
      >
        <ChevronRight size={22} aria-hidden />
      </button>
    </div>
  );
}
