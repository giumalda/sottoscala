import { createFileRoute, Link } from "@tanstack/react-router";
import { Utensils, Bike, MapPin, Instagram, Globe } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

import {
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  DELIVEROO_URL,
} from "../components/SiteChrome";

import heroImage from "../assets/hero-sottoscala.jpg";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Link utili — SOTTOSCALA Mottola" },
      { name: "description", content: "Tutti i link utili per contattarci, ordinare o guardare il menù." },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  const links = [
    {
      label: "Visita il Sito Web",
      url: "/",
      icon: <Globe size={20} />,
      primary: true,
      internal: true,
    },
    {
      label: "Sfoglia il Menù Digitale",
      url: "/menu",
      icon: <Utensils size={20} />,
      primary: false,
      internal: true,
    },
    {
      label: "Ordina su Deliveroo",
      url: DELIVEROO_URL,
      icon: <Bike size={20} />,
      primary: false,
      internal: false,
    },
    {
      label: "Scrivici su WhatsApp",
      url: WHATSAPP_URL,
      icon: <WhatsAppIcon className="h-5 w-5" />,
      primary: false,
      internal: false,
    },
    {
      label: "Vieni a trovarci (Google Maps)",
      url: GOOGLE_MAPS_URL,
      icon: <MapPin size={20} />,
      primary: false,
      internal: false,
    },
    {
      label: "Seguici su Instagram",
      url: INSTAGRAM_URL,
      icon: <Instagram size={20} />,
      primary: false,
      internal: false,
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center p-6">
      {/* Sfondo in stile Sottoscala con overlay per leggerezza */}
      <img
        src={heroImage}
        alt="Sfondo Sottoscala"
        className="fixed inset-0 h-full w-full object-cover"
      />
      <div className="fixed inset-0 bg-background/80 backdrop-blur-2xl" />

      {/* Contenitore stile Linktree */}
      <div className="relative w-full max-w-sm mx-auto flex flex-col items-center z-10 py-10">
        
        {/* Logo e Info */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="glass flex h-28 w-28 items-center justify-center rounded-full p-4 mb-4 shadow-xl">
            <img
              src="/SOTTOSCALA.png"
              alt="Sottoscala Logo"
              className="h-auto w-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">@sottoscala___</h1>
          <p className="mt-2 text-base text-muted-foreground">
            Bistrò · Cocktail Bar · Sushi & Pinsa
          </p>
        </div>

        {/* Lista dei Pulsanti */}
        <div className="flex flex-col gap-4 w-full">
          {links.map((link, i) => {
            const buttonClasses = `flex items-center justify-center gap-3 p-4 rounded-full text-base font-semibold shadow-lg transition-transform hover:scale-[1.03] active:scale-95 ${
              link.primary
                ? "bg-primary text-primary-foreground"
                : "glass border border-white/10 text-foreground hover:bg-white/5"
            }`;

            return link.internal ? (
              <Link key={i} to={link.url} className={buttonClasses}>
                {link.icon}
                {link.label}
              </Link>
            ) : (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Footer minimal */}
        <p className="mt-12 text-sm text-muted-foreground opacity-70">
          Via Giovanni Amendola 1, Mottola (TA)
        </p>
      </div>
    </main>
  );
}
