import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";
import { MessageSquare, Phone, Check } from "lucide-react";

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

const DETAILS: Record<string, string[]> = {
  "Deep Cleaning": ["Baseboards, vents & light fixtures", "Inside appliances on request", "Detailed bathroom scrubbing", "Hand-wiped surfaces top to bottom"],
  "Move-In / Move-Out": ["Full kitchen & bath detail", "Inside cabinets, drawers & closets", "Floors, baseboards & windows", "Move-out ready or move-in fresh"],
  "Recurring Cleaning": ["Weekly, bi-weekly, or monthly", "Same trusted cleaner each visit", "Customized checklist for your home", "Easy to reschedule by text"],
  "Airbnb / Vacation Rental": ["Reliable same-day turnovers", "Fresh linens & restock support", "Photo confirmations available", "Spotless 5-star guest experience"],
  "Office & Commercial": ["After-hours scheduling available", "Restrooms, break rooms & desks", "Trash removal & touchpoint sanitizing", "Recurring or one-time visits"],
  "Post-Construction": ["Fine dust removal", "Paint, adhesive & residue cleanup", "Window, fixture & floor detail", "Final walk-through ready"],
};

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0c447c] text-white py-16 sm:py-20">
        <div className="container-x text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>Our Cleaning Services</h1>
          <p className="mt-4 text-white/85 text-lg">Tailored cleaning for every home, rental, and workspace in Northwest Indiana.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f4f7fb]">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition border border-[#e6f1fb]">
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{s.icon}</div>
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold text-[#0c447c]">{s.name}</h2>
                  <p className="mt-2 text-[#1a2233]/70">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {DETAILS[s.name].map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-[#1a2233]/80">
                    <Check className="h-4 w-4 text-[#1d9e75] mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-1 w-16 bg-[#1d9e75] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Not sure which service you need?</h2>
          <p className="mt-3 text-white/95">Send us a text — we'll help you pick the perfect cleaning for your space.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="sms:2195460135" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-6 py-3 font-bold transition">
              <MessageSquare className="h-5 w-5" /> Text for a Free Quote
            </a>
            <a href="tel:2195460135" className="inline-flex items-center gap-2 rounded-full border-2 border-white hover:bg-white hover:text-[#0c447c] px-6 py-3 font-bold transition">
              <Phone className="h-5 w-5" /> (219) 546-0135
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
