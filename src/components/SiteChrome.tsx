import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Leaf,
  WheatOff,
  ShoppingBag,
  Bike,
} from "lucide-react";

import logoAsset from "../assets/logo-sottoscala.png.asset.json";

export const PHONE_DISPLAY = "351 466 7813";
export const PHONE_TEL = "tel:+393514667813";
export const ORDER_URL = "https://app.moremenu.it/menu/sottoscala";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Sottoscala — logo"
      className={`w-auto ${className}`}
      width={565}
      height={169}
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link
        to="/"
        hash="chi-siamo"
        onClick={() => setOpen(false)}
        className="text-base text-muted-foreground transition-colors hover:text-foreground"
      >
        Chi Siamo
      </Link>
      <Link
        to="/menu"
        onClick={() => setOpen(false)}
        className="text-base text-muted-foreground transition-colors hover:text-foreground"
      >
        Menù
      </Link>
      <Link
        to="/"
        hash="contatti"
        onClick={() => setOpen(false)}
        className="text-base text-muted-foreground transition-colors hover:text-foreground"
      >
        Contatti
      </Link>
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto max-w-6xl rounded-3xl">
        <nav className="flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center" aria-label="Sottoscala — home">
            <Logo className="h-8 md:h-9" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ordina / Prenota
            </a>
          </div>

          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border/60 px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {links}
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Ordina / Prenota
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contatti" className="px-4 pb-8">
      <div className="glass mx-auto max-w-6xl rounded-4xl px-6 py-16 sm:px-10">
        <Logo className="h-10" />

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <MapPin size={18} className="text-primary" aria-hidden />
              Contatti
            </h3>
            <p className="mt-4 text-base">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-foreground hover:underline"
              >
                <Phone size={16} aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Via Giovanni Amendola, 1<br />
              74017 Mottola (TA)
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Clock size={18} className="text-primary" aria-hidden />
              Orari
            </h3>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              <li>Lunedì: Chiuso</li>
              <li>Mar – Gio – Dom: 18:00–00:30</li>
              <li>Ven – Sab: 18:00–01:00</li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Instagram size={18} className="text-primary" aria-hidden />
              Social
            </h3>
            <p className="mt-4 text-base">
              <a
                href="https://www.instagram.com/sottoscala___"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:underline"
              >
                @sottoscala___
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Servizi</h3>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <WheatOff size={16} className="text-primary" aria-hidden />
                Opzioni senza glutine
              </li>
              <li className="flex items-center gap-2">
                <Leaf size={16} className="text-primary" aria-hidden />
                Opzioni vegane
              </li>
              <li className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-primary" aria-hidden />
                Asporto
              </li>
              <li className="flex items-center gap-2">
                <Bike size={16} className="text-primary" aria-hidden />
                Domicilio
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border/60">
          <iframe
            title="Mappa — Sottoscala, Via Giovanni Amendola 1, Mottola"
            src="https://www.openstreetmap.org/export/embed.html?bbox=17.0250%2C40.6280%2C17.0460%2C40.6390&layer=mapnik&marker=40.6335%2C17.0356"
            className="h-72 w-full grayscale invert"
            loading="lazy"
          />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sottoscala — Mottola. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
