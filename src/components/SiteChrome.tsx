// Aggiungi questa icona TikTok personalizzata vicino a WhatsAppIcon
export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.52z" />
    </svg>
  );
}

// Aggiorna le tue costanti con i nuovi link forniti
export const TIKTOK_URL = "https://www.tiktok.com/@tuo_profilo_tiktok"; // Inserisci il link reale
export const FOODBOOKING_RESERVATION = "https://www.foodbooking.com/ordering/?reservation=true&facebook=true&restaurant_uid=c418f5bb-c92e-435c-ae98-ab61fdc28d75&company_uid=2e1cff0d-716a-4123-8dcf-714a093138ec";
export const FOODBOOKING_DELIVERY = "https://www.foodbooking.com/ordering/restaurant/menu/info?company_uid=2e1cff0d-716a-4123-8dcf-714a093138ec&restaurant_uid=c418f5bb-c92e-435c-ae98-ab61fdc28d75&facebook=true";
export const SUMUP_GIFTCARD = "https://giftcards.sumup.com/order/MCEHC2DR";

// Aggiorna la barra di navigazione
const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menù" },
  { to: "/prenota", label: "Prenota" }, // NUOVO
  { to: "/ordina", label: "Ordina Ora" }, // NUOVO
  { to: "/al-mare", label: "Al Mare" }, // NUOVO
  { to: "/gift-card", label: "Gift Card" }, // NUOVO
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

// ... (tieni intatto SiteHeader e Layout) ...

// Scorri fino a SiteFooter e aggiungi TikTok nei Social:
{/* Dentro SiteFooter, nella colonna "Social" aggiungi questo: */}
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <TikTokIcon className="text-primary" />
                Sottoscala su TikTok
              </a>
