import { Link } from "@tanstack/react-router";
import logo from "@/assets/porma-logo.jpg";
import { contact, nav, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Porma Trading" className="h-12 w-auto rounded-sm" loading="lazy" />
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
            A diversified South African holdings enterprise, empowering industries and building communities since 2004.
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent">Navigate</p>
          <ul className="mt-5 space-y-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-ink-foreground/80 hover:text-accent">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Services</p>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => <li key={s.id}><Link to="/services" hash={s.id} className="text-ink-foreground/80 hover:text-accent">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Contact</p>
          <ul className="mt-5 space-y-2 text-sm text-ink-foreground/80">
            <li>{contact.address}</li>
            <li><a href={`tel:${contact.phone.replace(/[^\d+]/g, "").replace(/^(\+27)0/, "$1")}`} className="transition-colors hover:text-accent">Call {contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">Email {contact.email}</a></li>
            <li>{contact.hours}</li>
            <li className="pt-2 text-ink-foreground/60">Level 1 B-BBEE · OHASA Act 85 of 1993</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-ink-foreground/60">© 2026 Porma Trading (Pty) Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:pt-24">
      <span className="rule" />
      <p className="eyebrow mt-4 text-primary">{eyebrow}</p>
      <h1 className="rise mt-4 max-w-5xl text-6xl md:text-8xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
    </section>
  );
}
