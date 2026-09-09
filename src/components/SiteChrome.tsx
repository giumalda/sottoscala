import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Leaf,
  WheatOff,
  ShoppingBag,
  Bike,
} from "lucide-react";

import logoAsset from "../assets/logo-sottoscala.png.asset.json";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sottoscala%20Mottola";

export const PHONE_DISPLAY = "351 466 7813";
export const PHONE_TEL = "tel:+393514667813";
export const WHATSAPP_URL = "https://wa.me/393514667813";
export const ORDER_URL = "https://app.moremenu.it/menu/sottoscala";
export const DELIVEROO_URL = "https://deliveroo.it/it/menu/bari/massafra/sottoscala-via-giovanni-amendola-1";
export const INSTAGRAM_URL = "https://www.instagram.com/sottoscala___";
export const FACEBOOK_URL = "https://www.facebook.com/people/Sottoscala/61554464331306/";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menù" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/galleria", label: "Galleria" },
  { to: "/contatti", label: "Contatti" },
  { to: "/lavora-con-noi", label: "Lavora con Noi" },
] as const;

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/SOTTOSCALA.png"
      alt="Sottoscala — logo"
      className={`w-auto ${className}`}
      width={565}
      height={169}
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <nav className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
          <Link to="/" className="flex items-center" aria-label="Sottoscala — home">
            <Logo className="h-7 sm:h-8 md:h-9" />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-foreground font-semibold" }}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[oklch(0.85_0.09_205)] px-5 py-2.5 text-base font-semibold text-[oklch(0.24_0.06_205)] transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Ordina con Deliveroo
            </a>
          </div>

          <button
            className="p-2 text-foreground transition-transform duration-200 active:scale-90 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {open && (
          <div className="nav-panel border-t border-border/60 px-5 py-6 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-foreground/10 text-foreground" }}
                  className="rounded-2xl px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-foreground/10"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={DELIVEROO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-[oklch(0.85_0.09_205)] px-5 py-3 text-center text-base font-semibold text-[oklch(0.24_0.06_205)]"
              >
                Ordina con Deliveroo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="wa-glow glass fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.72_0.19_145)] text-[oklch(0.99_0_0)]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="contatti" className="px-4 pb-8">
      <div className="glass mx-auto max-w-6xl rounded-4xl px-6 py-14 sm:px-10">
        <Logo className="h-10" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="mt-4 flex flex-col gap-3 text-base">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram size={18} className="text-primary" aria-hidden />
                @sottoscala___
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook size={18} className="text-primary" aria-hidden />
                Sottoscala su Facebook
              </a>
            </div>
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

        <p className="mt-12 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sottoscala — Mottola. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

/** Layout globale: header, contenuto, footer e FAB WhatsApp su ogni pagina. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
