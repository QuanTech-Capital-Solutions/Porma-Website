import cleaning from "@/assets/cleaning.jpg";
import supply from "@/assets/supply.jpg";
import construction from "@/assets/construction.jpg";
import transport from "@/assets/transport.jpg";
import catering from "@/assets/catering.jpg";
import security from "@/assets/security.jpg";
import mining from "@/assets/mining.jpg";
import medical from "@/assets/medical.jpg";

export const contact = {
  email: "info@porma.co.za",
  phone: "+27 (0)82 470 1548",
  address: "Suite 13 Ground floor, ePH Building, eMalahleni, 1035",
  postal: "PO Box 1620, Witbank, South Africa, 1035",
  hours: "Mon – Fri, 08:00 – 17:00",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/safety", label: "Safety & Compliance" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const services = [
  { id: "cleaning", title: "Industrial & Domestic Cleaning", short: "Hazardous-area cleaning and corporate hygiene.", image: cleaning,
    body: "Trained teams in specialised protective gear deliver industrial, commercial and domestic cleaning under dedicated safety supervisors.",
    points: ["Hazardous area management", "On-site safety supervisors", "Corporate hygiene programmes", "Deep cleaning & sanitisation"] },
  { id: "supply", title: "Supply & Procurement", short: "Quality industrial hardware from trusted brands.", image: supply,
    body: "We source bearings, valves, PPE and industrial hardware from top international brands, delivered on time and to specification.",
    points: ["International brand sourcing", "Bearings, valves & hardware", "PPE and consumables", "Vendor-managed supply"] },
  { id: "construction", title: "Construction & Civil Works", short: "Single-source design and build delivery.", image: construction,
    body: "From blueprints to handover, we deliver building and civil projects through a single accountable design/build team.",
    points: ["Design & build delivery", "Civil & structural works", "Renovations & maintenance", "Project management"] },
  { id: "transport", title: "Transport & Logistics", short: "Reliable freight that keeps you moving.", image: transport,
    body: "A modern fleet and experienced drivers move freight and materials safely across South Africa.",
    points: ["Freight & haulage", "Client logistics planning", "Fleet tracking", "Nationwide reach"] },
  { id: "catering", title: "Catering & Hospitality", short: "Corporate banqueting and high-volume catering.", image: catering,
    body: "From boardroom lunches to site canteens, our catering teams serve quality meals at any scale.",
    points: ["Corporate banqueting", "Site & canteen catering", "Event hospitality", "Food safety compliance"] },
  { id: "security", title: "Security Services", short: "Trained personnel and modern monitoring.", image: security,
    body: "Registered, trained officers backed by modern monitoring systems protect your people and assets.",
    points: ["Guarding services", "CCTV monitoring", "Access control", "Risk assessments"] },
  { id: "mining", title: "Mining & Heavy Industry", short: "Machinery and site infrastructure support.", image: mining,
    body: "We support mining houses with equipment, site services and infrastructure that keep operations productive.",
    points: ["Plant & machinery support", "Site infrastructure", "Shutdown support", "Safety-first operations"] },
  { id: "medical", title: "Medical Equipment & Supplies", short: "Clinical hardware and consumables.", image: medical,
    body: "We supply clinics, hospitals and corporate health facilities with quality medical equipment and consumables.",
    points: ["Clinical equipment", "Medical consumables", "PPE supply", "Public & private sector"] },
];
