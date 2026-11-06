import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/SiteFooter";
import { contact, services } from "@/lib/site";

// Paste your Web3Forms access key here, or set VITE_WEB3FORMS_ACCESS_KEY in your deployment environment.
const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Porma Trading (Pty) Ltd" },
      { name: "description", content: "Request a proposal or make a general inquiry with Porma Trading." },
      { property: "og:title", content: "Contact Porma Trading" },
      { property: "og:description", content: "Request a proposal or make a general inquiry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Contact() {
  const [type, setType] = useState<"proposal" | "general">("proposal");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setError("The contact form is not configured yet. Please add the Web3Forms access key.");
      return;
    }

    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.set("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json() as { success: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Your message could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's build together" intro="Tell us about your project and the right division will be in touch." />
      <section className="mx-auto grid max-w-7xl gap-0 px-6 pb-24 lg:grid-cols-[1.15fr_0.85fr]">
        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 sm:p-10 lg:p-12">
          <input type="hidden" name="subject" value={`New ${type === "proposal" ? "Proposal Request" : "General Inquiry"}`} />
          <input type="hidden" name="from_name" value="Porma Trading Website" />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="flex gap-2">
            {(["proposal", "general"] as const).map((k) => (
              <button type="button" key={k} onClick={() => setType(k)}
                className={`flex-1 border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] ${type === k ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"}`}>
                {k === "proposal" ? "Request Proposal" : "General Inquiries"}
              </button>
            ))}
          </div>
          {sent ? (
            <div className="border border-primary bg-card p-8">
              <h2 className="text-4xl">Thank you</h2>
              <p className="mt-3 text-muted-foreground">We've received your message and will respond within one business day.</p>
            </div>
          ) : (
            <>
              <input required name="name" className={field} placeholder="Full name" autoComplete="name" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="email" type="email" className={field} placeholder="Business email" autoComplete="email" />
                <input name="phone" type="tel" className={field} placeholder="Phone" autoComplete="tel" />
              </div>
              <select name="division" className={field} defaultValue="">
                <option value="" disabled>Division inquiry</option>
                {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <textarea required name="message" rows={6} className={field} placeholder={type === "proposal" ? "Describe your project scope…" : "Your message…"} />
              {error && <p role="alert" className="border border-destructive px-4 py-3 text-sm text-destructive">{error}</p>}
              <button type="submit" disabled={submitting} className="w-full bg-primary py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? "Sending…" : "Send message"}
              </button>
            </>
          )}
        </form>
        <div className="bg-paper p-6 sm:p-10 lg:p-12">
          <p className="eyebrow text-primary">Reach our team</p>
          <h2 className="mt-3 text-4xl">Let’s talk business.</h2>
          <ul className="mt-8 divide-y border-y">
            {[[MapPin, "Headquarters", contact.address], [MapPin, "Postal Address", contact.postal], [Phone, "Direct Phone", contact.phone], [Mail, "Email", contact.email], [Clock, "Business Hours", contact.hours]].map(([Icon, l, v]) => {
              const I = Icon as typeof MapPin;
              return (
                <li key={l as string} className="flex items-start gap-4 py-5">
                  <I className="mt-1 text-primary" size={20} />
                  <div><p className="eyebrow text-muted-foreground">{l as string}</p><p className="mt-1 font-medium">{v as string}</p></div>
                </li>
              );
            })}
          </ul>
          <iframe title="Map" className="mt-8 h-72 w-full border" loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229753.75525694317!2d29.090515048677343!3d-25.87268863386863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaf29555555555%3A0xf9079eb7fbc7db9d!2sPorma%20Trading%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1793960890666!5m2!1sen!2sza" />
        </div>
      </section>
    </>
  );
}
