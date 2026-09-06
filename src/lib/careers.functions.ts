import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const applicationSchema = z.object({
  nome: z.string().trim().min(1).max(60),
  cognome: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(255),
  ruolo: z.string().trim().min(1).max(60),
  messaggio: z.string().trim().max(1000).optional(),
  cvFilename: z.string().trim().min(1).max(200),
  cvType: z.string().trim().max(120),
  /** Contenuto del CV codificato in base64 (max 5 MB). */
  cvBase64: z.string().min(1).max(8_000_000),
});

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Salva la candidatura e carica il CV nello storage privato. */
export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const bytes = Uint8Array.from(atob(data.cvBase64), (c) => c.charCodeAt(0));
    if (bytes.byteLength > 5 * 1024 * 1024) {
      throw new Error("Il CV supera i 5 MB.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const ext = data.cvFilename.split(".").pop()?.toLowerCase() ?? "pdf";
    const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${slug(
      `${data.nome}-${data.cognome}`,
    )}.${ext}`;

    const upload = await supabaseAdmin.storage.from("cv").upload(path, bytes, {
      contentType: data.cvType || "application/octet-stream",
      upsert: false,
    });
    if (upload.error) throw new Error("Caricamento del CV non riuscito.");

    const insert = await supabaseAdmin.from("job_applications").insert({
      nome: data.nome,
      cognome: data.cognome,
      email: data.email,
      ruolo: data.ruolo,
      messaggio: data.messaggio ?? null,
      cv_path: path,
      cv_filename: data.cvFilename,
    });
    if (insert.error) throw new Error("Salvataggio della candidatura non riuscito.");

    return { ok: true as const };
  });
