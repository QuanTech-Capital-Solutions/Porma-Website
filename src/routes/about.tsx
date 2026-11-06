import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteFooter";
import thapelo from "@/assets/leader-thapelo.jpg";
import nomsa from "@/assets/leader-nomsa.jpg";
import kagiso from "@/assets/leader-kagiso.jpg";
import palesa from "@/assets/leader-palesa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Porma Trading (Pty) Ltd" },
      { name: "description", content: "Our history since 2004, our core values and the leadership behind Porma Trading." },
      { property: "og:title", content: "About Porma Trading" },
      { property: "og:description", content: "A Level 1 B-BBEE empowerment enterprise founded in 2004." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  ["2004", "Founded", "Established as a Level 1 B-BBEE empowerment enterprise focused on cleaning and supply."],
  ["2008", "Diversification", "Expanded into construction, civil works and transport services."],
  ["2014", "Industrial Growth", "Grew mining, heavy industry and security support across multiple provinces."],
  ["2020", "Specialised Services", "Added medical equipment supply and corporate catering divisions."],
  ["Today", "Nationwide Partner", "A multi-sector holdings company serving corporate, government and mining clients."],
];

const foundational = ["Accountability", "Integrity & Honesty", "Commitment", "Transparency", "Non-discrimination"];
const resultant = ["Customer Excellence", "Empowerment", "Community Benefit", "Market Leadership"];

const leaders = [
  { name: "Sibusiso Nkosi", role: "Managing Director", bio: "Leads group strategy, partnerships and empowerment initiatives.", image: thapelo },
  { name: "Nomsa Dlamini", role: "Operations Director", bio: "Oversees service delivery across all divisions and regions.", image: nomsa },
  { name: "Kagiso Molefe", role: "Finance Manager", bio: "Responsible for financial governance and compliance.", image: kagiso },
  { name: "Palesa Ndlovu", role: "SHEQ Manager", bio: "Drives safety, health, environment and quality standards.", image: palesa },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Two decades of building South Africa" intro="Since 2004, Porma Trading has grown from an empowerment enterprise into a diversified holdings company trusted across eight industries." />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="eyebrow text-primary">Our History</p>
        <ol className="mt-8 border-t">
          {timeline.map(([y, h, p]) => (
            <li key={y} className="grid gap-4 border-b py-8 md:grid-cols-[180px_260px_1fr]">
              <span className="font-display text-5xl text-primary">{y}</span>
              <h3 className="text-3xl">{h}</h3>
              <p className="text-muted-foreground">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          {[["Foundational Values", foundational], ["Resultant Benefit Values", resultant]].map(([h, list]) => (
            <div key={h as string}>
              <h2 className="text-5xl">{h as string}</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {(list as string[]).map((v, i) => (
                  <div key={v} className="border bg-card p-6 transition-colors hover:border-primary">
                    <p className="font-display text-xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-3 font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">Leadership</p>
        <h2 className="mt-3 text-5xl md:text-7xl">Executive & Management</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map(({ name, role, bio, image }) => (
            <div key={role}>
              <img src={image} alt={name} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <p className="mt-4 font-semibold">{name}</p>
              <p className="eyebrow mt-1 text-primary">{role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
