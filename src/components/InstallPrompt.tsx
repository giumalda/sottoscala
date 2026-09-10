import { useState, useEffect } from "react";
import { Download, X, Smartphone, Share, PlusSquare, Menu } from "lucide-react";

export function InstallPrompt() {
  const [isMobile, setIsMobile] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android" | "other">("other");
  const [showModal, setShowModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Riconosce se è mobile
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      setPlatform("ios");
      setIsMobile(true);
    } else if (isAndroid) {
      setPlatform("android");
      setIsMobile(true);
    }

    // Intercetta l'evento di installazione nativa di Android/Chrome
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsMobile(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (platform === "android" && deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      setShowModal(true);
    }
  };

  if (!isMobile) return null; // Mostra il banner solo da smartphone

  return (
    <>
      {/* Banner fluttuante in basso o nel flusso */}
      <div className="my-6 px-4">
        <div className="glass flex items-center justify-between gap-4 rounded-3xl p-4 border border-white/10 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Smartphone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Installa la Web App</h4>
              <p className="text-xs text-muted-foreground">
                Accedi al Sottoscala in un tap dalla tua Home!
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-transform active:scale-95 shrink-0"
          >
            <Download size={14} />
            Installa
          </button>
        </div>
      </div>

      {/* Modale con le istruzioni dettagliate */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="glass relative w-full max-w-md rounded-4xl p-6 sm:p-8 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-2">Come installare l'App</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Porta il Sottoscala sempre con te sulla schermata principale del tuo telefono.
            </p>

            {platform === "ios" ? (
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    1
                  </div>
                  <p>
                    Tocca il tasto <strong>Condividi</strong> <Share size={16} className="inline text-blue-500 mx-1" /> in basso nella barra di Safari.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    2
                  </div>
                  <p>
                    Scorri il menu e seleziona <strong>"Aggiungi alla schermata Home"</strong> <PlusSquare size={16} className="inline mx-1" />.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    3
                  </div>
                  <p>Conferma premendo <strong>Aggiungi</strong> in alto a destra. Fatto!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    1
                  </div>
                  <p>
                    Tocca il menu in alto a destra (i tre puntini <Menu size={16} className="inline mx-1" />) su Chrome.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    2
                  </div>
                  <p>
                    Seleziona <strong>"Installa app"</strong> o <strong>"Aggiungi a schermata Home"</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                    3
                  </div>
                  <p>Conferma l'installazione. L'app apparirà tra le tue applicazioni!</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="mt-8 w-full rounded-full bg-primary py-3 text-center text-sm font-bold text-primary-foreground shadow-md"
            >
              Ho capito
            </button>
          </div>
        </div>
      )}
    </>
  );
}
