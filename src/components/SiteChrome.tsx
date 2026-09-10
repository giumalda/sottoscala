import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
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

import { WhatsAppIcon } from "./WhatsAppIcon";

// === ICONA TIKTOK ===
export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.52z" />
    </svg>
  );
}

// === COSTANTI & LINK ===
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Sottoscala%20Mottola";
export const PHONE_DISPLAY = "351 466 7813";
export const PHONE_TEL = "tel:+393514667813";
export const WHATSAPP_URL = "https://wa.me/393514667813";
export const DELIVEROO_URL = "https://deliveroo.it/it/menu/bari/massafra/sottoscala-via-giovanni-amendola-1";
export const INSTAGRAM_URL = "https://www.instagram.com/sottoscala___";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100093060842951";
export const TIKTOK_URL = "https://www.tiktok.com/@tuo_profilo_tiktok";

export const FOODBOOKING_RESERVATION = "https://www.foodbooking.com/ordering/?reservation=true&facebook=true&restaurant_uid=c418f5bb-c92e-435c-ae98-ab61fdc28d75&company_uid=2e1cff0d-716a-4123-8dcf-714a093138ec";
export const FOODBOOKING_DELIVERY = "https://www.foodbooking.com/ordering/restaurant/menu/info?company_uid=2e1cff0d-716a-4123-8dcf-714a093138ec&restaurant_uid=c418f5bb-c92e-435c-ae98-ab61fdc28d75&facebook=true";
export const SUMUP_GIFTCARD = "https://giftcards.sumup.com/order/MCEHC2DR";

// Menu riordinato con Al Mare in evidenza luminosa
const NAV = [
  { to: "/", label: "Home" },
  { to: "/al-mare", label: "Al Mare", highlight: true },
  { to: "/menu", label: "Menù" },
  { to: "/prenota", label: "Prenota" },
  { to: "/ordina", label: "Delivery" },
  { to: "/gift-card", label: "Gift Card" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/SOTTOSCALA.png"
      alt="Sottoscala — logo"
      className={`w-auto object-contain ${className}`}
      width={565}
      height={169}
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const isAlMare = routerState.location.pathname === "/al-mare";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div className={`glass mx-auto max-w-[1100px] overflow-hidden rounded-3xl transition-colors duration-300 ${isAlMare ? 'border-blue-500/30 bg-blue-950/40' : ''}`}>
        <nav className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
          <Link to="/" className="flex items-center" aria-label="Sottoscala — home">
            <Logo className="h-7 sm:h-8 md:h-9" />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-foreground font-semibold" }}
                className={`relative text-sm xl:text-base transition-colors hover:text-foreground ${
                  l.highlight ? "text-blue-400 font-medium" : "text-muted-foreground"
                }`}
              >
                {l.label}
                {l.highlight && (
                  <span className="absolute -top-1 -right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                )}
              </Link>
            ))}
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-[oklch(0.85_0.09_205)] px-5 py-2.5 text-sm xl:text-base font-semibold text-[oklch(0.24_0.06_205)] transition-all duration-200 hover:brightness-110 active:scale-95"
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

        {/* Menu Mobile */}
        {open && (
          <div className="nav-panel border-t border-border/60 px-5 py-6 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-foreground/10 text-foreground" }}
                  className={`rounded-2xl px-3 py-3 text-lg font-medium transition-colors flex items-center justify-between ${
                    l.highlight ? "text-blue-400 font-semibold" : "text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {l.label}
                  {l.highlight && (
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
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
  const routerState = useRouterState();
  const isAlMare = routerState.location.pathname === "/al-mare";

  return (
    <footer id="contatti" className="px-4 pb-8">
      <div className={`glass mx-auto max-w-[1100px] rounded-4xl px-6 py-14 sm:px-10 transition-colors duration-300 ${isAlMare ? 'border-blue-500/30 bg-blue-950/30' : ''}`}>
        <Logo className="h-10" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <MapPin size={18} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
              Contatti
            </h3>
            <p className="mt-4 text-base">
              <a href={PHONE_TEL} className="flex items-center gap-2 text-foreground hover:underline">
                <Phone size={16} className="text-[oklch(0.72_0.19_145)]" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-3 text-base text-muted-foreground whitespace-pre-line">
              {isAlMare ? "Lungomare Eroi del Mare, 23\nCastellaneta Marina (TA)" : "Via Giovanni Amendola, 1\n74017 Mottola (TA)"}
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Clock size={18} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
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
                href={isAlMare ? "https://www.instagram.com/sottoscala_al_mare" : INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram size={18} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                {isAlMare ? "@sottoscala_al_mare" : "@sottoscala___"}
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <TikTokIcon className={`w-[18px] h-[18px] ${isAlMare ? "text-blue-400" : "text-primary"}`} aria-hidden />
                TikTok Ufficiale
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook size={18} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Servizi</h3>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <WheatOff size={16} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                Opzioni senza glutine
              </li>
              <li className="flex items-center gap-2">
                <Leaf size={16} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                Opzioni vegane
              </li>
              <li className="flex items-center gap-2">
                <ShoppingBag size={16} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                Asporto
              </li>
              <li className="flex items-center gap-2">
                <Bike size={16} className={isAlMare ? "text-blue-400" : "text-primary"} aria-hidden />
                Domicilio
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sottoscala {isAlMare ? "al Mare — Castellaneta Marina" : "— Mottola"}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const routerState = useRouterState();
  const isAlMare = routerState.location.pathname === "/al-mare";
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isAlMare ? 'bg-slate-950 text-slate-100' : ''}`}>
      <SiteHeader />
      <div className="flex-1">
        {children}
      </div>
      <SiteFooter />
      <WhatsAppFab />

      {showCookieBanner && (
        <aside aria-label="Informativa sui cookie" className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
          <div className="mx-auto max-w-[1100px] glass rounded-3xl p-6 shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Questo sito utilizza i cookie per migliorare l'esperienza di navigazione.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => { localStorage.setItem("cookie-consent", "rejected"); setShowCookieBanner(false); }}
                className="rounded-full px-5 py-2.5 text-sm font-semibold glass-soft transition-transform active:scale-95"
              >
                Rifiuta
              </button>
              <button
                onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setShowCookieBanner(false); }}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform active:scale-95"
              >
                Accetta
              </button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
