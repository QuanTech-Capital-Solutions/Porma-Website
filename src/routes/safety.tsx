import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, HardHat, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/SiteFooter";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & OHASA Compliance — Porma Trading" },
      { name: "description", content: "Our pledge under the Occupational Health and Safety Act 85 of 1993: zero harm, employee rights and hazard mitigation." },
      { property: "og:title", content: "Safety & OHASA Compliance — Porma Trading" },
      { property: "og:description", content: "Zero harm is our standard on every site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Safety,
});

const cards = [
  { icon: ShieldCheck, title: "Safety Standards", body: "Documented safe work procedures, risk assessments and regular audits on every contract." },
  { icon: HardHat, title: "Zero-Harm Policy", body: "Every employee is empowered to stop unsafe work. No job is so urgent it cannot be done safely." },
  { icon: Users, title: "Employee Rights", body: "Training, correct PPE and a voice in safety committees — protected for every worker." },
  { icon: AlertTriangle, title: "Hazard Mitigation", body: "Identification, control and monitoring of hazards, with incident reporting and investigation." },
];

function Safety() {
  return (
    <>
      <PageHero eyebrow="Safety & Compliance" title="Zero harm. No exceptions." intro="Safety is the foundation of everything we do — for our people, our clients and the communities around our sites." />
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="text-5xl md:text-6xl">Our OHASA Pledge</h2>
          <div>
            <p className="eyebrow text-accent">Occupational Health and Safety Act 85 of 1993</p>
            <p className="mt-5 text-xl leading-relaxed text-ink-foreground/85">
              Porma Trading commits to providing and maintaining, as far as reasonably practicable, a working environment that is safe and without risk to the health of our employees, contractors and the public — in full compliance with OHASA and its regulations.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 py-px sm:grid-cols-2 lg:grid-cols-4 my-24">
        {cards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-background p-8">
            <Icon className="text-primary" size={32} />
            <h3 className="mt-8 text-3xl">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
