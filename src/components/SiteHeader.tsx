import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo2.png";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Porma Trading (Pty) Ltd" className="h-11 w-auto rounded-sm" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-ink lg:inline-block">
          Get in Touch
        </Link>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t bg-background px-6 py-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="block border-b py-3 font-display text-2xl uppercase data-[status=active]:text-primary">{n.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 block bg-primary py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">Get in Touch</Link>
        </nav>
      )}
    </header>
  );
}
