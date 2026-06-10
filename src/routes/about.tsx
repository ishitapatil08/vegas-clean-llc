import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CITIES } from "@/components/site/data";
import { MessageSquare, Heart, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import living from "@/assets/living.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maribel Vega | Vegas Clean LLC" },
      { name: "description", content: "Meet Maribel Vega and Vegas Clean LLC — 4+ years of trusted, bilingual cleaning service across Northwest Indiana." },
      { property: "og:title", content: "About Vegas Clean LLC" },
      { property: "og:description", content: "Owner Maribel Vega leads a bilingual, detail-driven cleaning team across NW Indiana." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { i: Heart, t: "Treated Like Family", d: "Every home gets the care we'd give our own." },
    { i: Sparkles, t: "Detail Obsessed", d: "Baseboards, corners, and the spots others miss." },
    { i: ShieldCheck, t: "Trusted in Your Home", d: "Years of repeat clients across NW Indiana." },
  ];
  return (
    <SiteLayout>
      <section className="bg-[#0c447c] text-white py-16 sm:py-20">
        <div className="container-x text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>About Vegas Clean LLC</h1>
          <p className="mt-4 text-white/85 text-lg">Built on trust, attention to detail, and four years of clean homes across Northwest Indiana.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
            <img src={living.url} alt="A home cleaned by Vegas Clean LLC" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">Meet the Owner</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Maribel Vega</h2>
            <p className="mt-5 text-[#1a2233]/80 leading-relaxed">
              Maribel founded Vegas Clean LLC with one simple promise: deliver the kind of careful, thorough cleaning that makes people exhale when they walk through the door. More than four years later, that promise has built a loyal client base across Hammond, Munster, Schererville, and beyond.
            </p>
            <p className="mt-4 text-[#1a2233]/80 leading-relaxed">
              From single-family homes and pet-filled households to busy offices and short-term rentals, Maribel and her team bring the same level of detail to every visit. Bilingual service (EN/ES) means clear communication and no detail lost in translation.
            </p>
            <p className="mt-4 text-[#1a2233]/80 leading-relaxed">
              When you book Vegas Clean, you're not getting a faceless service — you're getting a small, trusted local business that genuinely cares about your home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#e6f1fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#185fa5] text-white flex items-center justify-center">
                  <v.i className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0c447c]">{v.t}</h3>
                <p className="mt-2 text-[#1a2233]/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c447c] text-white">
        <div className="container-x">
          <h2 className="text-center" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Where We Clean</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {CITIES.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium">
                <MapPin className="h-4 w-4 text-[#7fd4b3]" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="sms:2195460135" className="inline-flex items-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] px-6 py-3 font-bold transition">
              <MessageSquare className="h-5 w-5" /> Text to Book
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
