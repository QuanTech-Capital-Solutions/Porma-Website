import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Download, Quote } from "lucide-react";
import { useState } from "react";
import construction from "@/assets/construction.jpg";
import transport from "@/assets/transport.jpg";
import medical from "@/assets/medical.jpg";
import mining from "@/assets/mining.jpg";
import { services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porma Trading (Pty) Ltd — Empowering Industries, Building Communities" },
      { name: "description", content: "South African multi-sector holdings company delivering supply, construction, transport, cleaning and specialised services since 2004." },
      { property: "og:title", content: "Porma Trading — Empowering Industries, Building Communities" },
      { property: "og:description", content: "Trusted South African multi-sector holdings company since 2004." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  ["20+", "Years Experience"],
  ["100%", "OHASA Compliant"],
  ["8", "Industry Divisions"],
  ["SA", "Nationwide Operations"],
];

const testimonials = [
  { quote: "Porma Trading has been a dependable partner on our site services. Safety standards are consistently excellent.", name: "Operations Manager", org: "Mining Partner, Limpopo" },
  { quote: "Their procurement team sources what we need, when we need it. Reliable and professional throughout.", name: "Procurement Lead", org: "Corporate Client, Gauteng" },
  { quote: "A committed empowerment partner that delivers quality work while uplifting local communities.", name: "Project Director", org: "Government Department" },
];

function Home() {
  const [t, setT] = useState(0);
  const cur = testimonials[t] ?? testimonials[0]!;
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[5fr_7fr] lg:pt-16">
        <div className="flex flex-col justify-center">
          <span className="rule" />
          <p className="eyebrow mt-4 text-primary">Est. 2004 · Level 1 B-BBEE</p>
          <h1 className="rise mt-5 text-7xl sm:text-8xl xl:text-[8.5rem]">
            Empowering <span className="text-primary">Industries,</span> Building Communities
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            A trusted South African multi-sector holdings company delivering excellence in Supply, Construction, Transport, Cleaning, and Specialized Services since 2004.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-ink">
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-foreground px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background">
              <Download size={16} /> Company Profile
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Tile img={construction} n="01" title="Construction & Civil" className="row-span-2 min-h-[520px]" eager />
          <Tile img={transport} n="02" title="Transport & Logistics" className="min-h-[255px]" />
          <Tile img={medical} n="03" title="Medical Equipment & Supplies" className="min-h-[255px]" />
        </div>
      </section>

      <section className="border-y bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map(([v, l], i) => (
            <div key={l} className={`py-10 ${i ? "md:border-l md:pl-8" : ""}`}>
              <p className="font-display text-6xl text-primary">{v}</p>
              <p className="eyebrow mt-2 text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-primary">Our Divisions</p>
            <h2 className="mt-3 text-5xl md:text-7xl">One partner. Eight sectors.</h2>
          </div>
          <Link to="/services" className="eyebrow flex items-center gap-2 text-primary hover:gap-3 transition-all">All services <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-14 grid border-l border-t sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link key={s.id} to="/services" hash={s.id} className="group border-b border-r p-7 transition-colors hover:bg-card">
              <p className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
              <p className="eyebrow mt-6 flex items-center gap-2 text-primary">Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <img src={mining} alt="Mining operations" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="grid bg-ink text-ink-foreground">
          {[
            ["Our Mission", "To empower people and eradicate unemployment by creating sustainable work, developing skills and uplifting the local communities we operate in."],
            ["Our Vision", "To be South Africa's leading diversified empowerment enterprise — recognised for excellence, integrity and lasting community benefit."],
          ].map(([h, p], i) => (
            <div key={h} className={`p-10 md:p-16 ${i ? "border-t border-ink-foreground/15" : ""}`}>
              <h2 className="mt-3 text-5xl">{h}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-foreground/75">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Quote className="mx-auto text-primary" size={40} />
        <blockquote key={t} className="rise mt-8 font-display text-4xl uppercase leading-tight md:text-5xl">“{cur.quote}”</blockquote>
        <p className="mt-8 font-semibold">{cur.name}</p>
        <p className="text-sm text-muted-foreground">{cur.org}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button aria-label="Previous" onClick={() => setT((t + testimonials.length - 1) % testimonials.length)} className="border p-3 hover:border-primary hover:text-primary"><ArrowLeft size={18} /></button>
          <span className="eyebrow text-muted-foreground">{t + 1} / {testimonials.length}</span>
          <button aria-label="Next" onClick={() => setT((t + 1) % testimonials.length)} className="border p-3 hover:border-primary hover:text-primary"><ArrowRight size={18} /></button>
        </div>
      </section>
    </>
  );
}

function Tile({ img, n, title, className = "", eager }: { img: string; n: string; title: string; className?: string; eager?: boolean }) {
  return (
    <Link to="/services" className={`group relative overflow-hidden ${className}`}>
      <img src={img} alt={title} loading={eager ? "eager" : "lazy"} width={1024} height={1280} className="img-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-ink/70 to-transparent p-5 text-ink-foreground">
        <p className="font-display text-3xl">{n}</p>
        <p className="eyebrow mt-1">{title}</p>
      </div>
    </Link>
  );
}
