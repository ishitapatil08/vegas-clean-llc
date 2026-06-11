import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { MessageSquare, Check } from "lucide-react";
import { SERVICE_IMAGES } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services | Vegas Clean LLC — NW Indiana" },
      { name: "description", content: "Deep cleaning, move-in/out, recurring, Airbnb turnover, office and post-construction cleaning across Northwest Indiana." },
      { property: "og:title", content: "Our Cleaning Services — Vegas Clean LLC" },
      { property: "og:description", content: "Residential & commercial cleaning across NW Indiana." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  name: string;
  image: string;
  alt: string;
  desc: string;
  bullets: string[];
};

const RESIDENTIAL: Service[] = [
  {
    name: "Deep Cleaning",
    image: SERVICE_IMAGES.deepClean,
    alt: "Professional deep cleaning of bathroom tiles",
    desc: "A top-to-bottom reset for your home. We tackle the build-up that everyday cleaning leaves behind, leaving every surface sanitized and shining.",
    bullets: ["Full home scrub down", "Baseboards, vents & light fixtures", "Inside appliances on request", "Detailed sanitization & disinfecting"],
  },
  {
    name: "Recurring Cleaning",
    image: SERVICE_IMAGES.recurring,
    alt: "Cozy living room kept clean with recurring service",
    desc: "Keep your home consistently fresh with weekly, bi-weekly, or monthly visits. You'll get the same trusted cleaner every time.",
    bullets: ["Weekly, bi-weekly or monthly", "Same consistent cleaner each visit", "Flexible scheduling by text", "Customized checklist for your home"],
  },
  {
    name: "Move-In / Move-Out",
    image: SERVICE_IMAGES.moveInOut,
    alt: "Empty apartment with moving boxes after move-out clean",
    desc: "Whether you're handing over keys or settling in, we make the property spotless. Our move-out cleans are focused on getting your deposit back.",
    bullets: ["Full property cleaning", "Deposit-back guarantee focus", "Inside cabinets, drawers & closets", "Available on weekends"],
  },
  {
    name: "Airbnb Cleaning",
    image: SERVICE_IMAGES.airbnb,
    alt: "Hotel-quality vacation rental bedroom after turnover",
    desc: "Hotel-quality turnovers that earn 5-star reviews. We schedule quickly between guests so your listing stays booked.",
    bullets: ["Hotel-quality turnovers", "Quick scheduling between guests", "Fresh linen & towel service", "Restock support & photo confirmations"],
  },
];

const COMMERCIAL: Service[] = [
  {
    name: "Office Cleaning",
    image: SERVICE_IMAGES.office,
    alt: "Spotless modern office after commercial cleaning",
    desc: "Keep your workspace healthy and presentable for staff and clients. We work around your schedule with discreet, professional service.",
    bullets: ["Daily or weekly maintenance", "After-hours service available", "Supply restocking", "Restrooms, break rooms & desks"],
  },
  {
    name: "Post-Construction",
    image: SERVICE_IMAGES.postConstruction,
    alt: "Brand new home interior after post-construction cleanup",
    desc: "We make new builds and remodels reveal-ready. Fine dust and construction debris are no match for our detailed process.",
    bullets: ["Dust & debris removal", "Window cleaning", "Floor polishing", "Reveal-ready final detail"],
  },
];

const INCLUDED = {
  Kitchen: ["Counters & backsplash", "Exterior of appliances", "Sink scrubbed & sanitized", "Cabinets wiped down", "Floors mopped"],
  Bathroom: ["Tub, shower & tile", "Toilets disinfected", "Mirrors & fixtures", "Counters & sinks", "Floors mopped"],
  "Living Areas": ["Dusting all surfaces", "Vacuum carpets & rugs", "Hard floors mopped", "Furniture wiped", "Trash removed"],
  Bedrooms: ["Dusting & cobweb removal", "Beds made (linens on request)", "Floors vacuumed/mopped", "Mirrors & glass", "Surfaces sanitized"],
};

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-[#e6f1fb] overflow-hidden flex flex-col">
      <div className="aspect-[16/10] bg-[#e6f1fb] overflow-hidden">
        <img src={s.image} alt={s.alt} loading="lazy" width={800} height={500} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#0c447c]">{s.name}</h3>
        <p className="mt-2 text-[#1a2233]/70 text-sm">{s.desc}</p>
        <ul className="mt-4 space-y-2">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-[#1a2233]/80">
              <Check className="h-4 w-4 text-[#1d9e75] mt-0.5 shrink-0" /> {b}
            </li>
          ))}
        </ul>
        <a
          href="sms:2195460135"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] text-white px-5 py-3 font-bold transition"
        >
          📱 Text to Book This Service
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#185fa5] to-[#0c447c] text-white py-16 sm:py-24">
        <div className="container-x text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>Our Cleaning Services</h1>
          <p className="mt-4 text-white/85 text-lg">
            Professional, reliable cleaning for homes and businesses across Northwest Indiana
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#1d9e75] font-semibold uppercase tracking-wide text-sm">Residential</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0c447c]">Residential Cleaning Services</h2>
            <p className="mt-3 text-[#1a2233]/70">Trusted cleaning for every kind of home across NW Indiana.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {RESIDENTIAL.map((s) => <ServiceCard key={s.name} s={s} />)}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 bg-[#f4f7fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#1d9e75] font-semibold uppercase tracking-wide text-sm">Commercial</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0c447c]">Commercial Cleaning Services</h2>
            <p className="mt-3 text-[#1a2233]/70">Reliable, professional service for your business or job site.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {COMMERCIAL.map((s) => <ServiceCard key={s.name} s={s} />)}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0c447c]">What's Included In Every Clean</h2>
            <p className="mt-3 text-[#1a2233]/70">
              Every visit includes our complete attention to detail across every room.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(INCLUDED).map(([room, items]) => (
              <div key={room} className="bg-[#e6f1fb] rounded-2xl p-6 border border-[#185fa5]/10">
                <h3 className="text-lg font-bold text-[#0c447c] mb-4">{room}</h3>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#1a2233]/80">
                      <Check className="h-4 w-4 text-[#1d9e75] mt-0.5 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#185fa5] to-[#0c447c] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Not Sure Which Service You Need?</h2>
          <p className="mt-3 text-white/90">
            Tell us about your space and we'll recommend the perfect clean for you.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="sms:2195460135"
              className="inline-flex items-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] text-white px-7 py-3.5 font-bold transition"
            >
              <MessageSquare className="h-5 w-5" /> 📱 Text Us & We'll Help
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
