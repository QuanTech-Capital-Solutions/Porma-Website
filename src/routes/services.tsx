import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/SiteFooter";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Porma Trading (Pty) Ltd" },
      { name: "description", content: "Cleaning, supply, construction, transport, catering, security, mining and medical supply services." },
      { property: "og:title", content: "Porma Trading Services" },
      { property: "og:description", content: "Eight divisions, one accountable partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState(0);
  const s = services[active] ?? services[0]!;
  return (
    <>
      <PageHero 
        eyebrow="Services" 
        title="Eight divisions. One standard." 
        intro={<>Every division operates under the same commitment to safety, quality and community empowerment. 
          <br /><br />
          Select a division below to learn more.</>}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[320px_1fr]">
        <div className="lg:hidden">
          {/*<label htmlFor="service-select" className="sr-only">Select a service</label> */}
          <select
            id="service-select"
            value={active}
            onChange={(event) => setActive(Number(event.target.value))}
            className="w-full border-t border-b bg-card px-4 py-4 text-sm font-semibold outline-none focus:border-primary"
          >
            {services.map((service, index) => (
              <option key={service.id} value={index}>{String(index + 1).padStart(2, "0")} — {service.title}</option>
            ))}
          </select>
        </div>
        <div className="hidden lg:block">
          {services.map((x, i) => (
            <button key={x.id} id={x.id} onClick={() => setActive(i)}
              className={`flex items-center gap-4 border-b py-4 pr-4 text-left transition-colors lg:w-full ${i === active ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
              <span className="font-display text-xl">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold">{x.title}</span>
            </button>
          ))}
        </div>
        <article key={s.id} className="rise">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={s.image} alt={s.title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <h2 className="mt-8 text-5xl md:text-6xl">{s.title}</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{s.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-3 border bg-card p-4 text-sm font-medium"><Check size={16} className="text-primary" />{p}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">All work is delivered in line with the Occupational Health and Safety Act 85 of 1993.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-ink">
            Request a proposal <ArrowRight size={16} />
          </Link>
        </article>
      </section>
    </>
  );
}
