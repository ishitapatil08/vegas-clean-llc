import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { MessageSquare, Search, Clock, Key, Languages, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import ownerMaribel from "@/assets/owner-maribel.jpg";
import teamWorking from "@/assets/team-working.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import cleaningSupplies from "@/assets/cleaning-supplies.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maribel Vega | Vegas Clean LLC" },
      { name: "description", content: "Meet Maribel Vega, founder of Vegas Clean LLC — 4+ years of trusted, detail-oriented, bilingual cleaning across Northwest Indiana." },
      { property: "og:title", content: "About Vegas Clean LLC" },
      { property: "og:description", content: "Trust, dedication, and a passion for clean — across NW Indiana." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const FEATURES = [
  { i: Search, e: "🔍", t: "Detail-Oriented", d: "We clean what others miss. Baseboards, corners, behind appliances." },
  { i: Clock, e: "⏰", t: "Reliable & Punctual", d: "On time, every time. Consistent attendance record for 4+ years." },
  { i: Key, e: "🔑", t: "Fully Trustworthy", d: "Clients trust us with spare keys. Your home is safe with us." },
  { i: Languages, e: "🗣️", t: "Bilingual Service", d: "We serve English and Spanish speaking families equally." },
];

const VALUES = [
  { i: ShieldCheck, t: "Trust", d: "Years of repeat clients and spare-key access speak louder than any promise. Your home and privacy are always protected." },
  { i: Sparkles, t: "Thoroughness", d: "We don't cut corners — we clean them. Every visit is top-to-bottom, careful, and consistent." },
  { i: HeartHandshake, t: "Reliability", d: "Show-up rate matters. Maribel and her team arrive when promised and deliver the same quality every single time." },
];

function AboutPage() {
  const pairs = [
    { b: beforeBathroom, a: afterBathroom, label: "Bathroom Refresh" },
    { b: beforeKitchen, a: afterKitchen, label: "Kitchen Deep Clean" },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c447c] via-[#185fa5] to-[#0c447c]" aria-hidden />
        <div className="relative container-x py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm">
            About Vegas Clean LLC
          </span>
          <h1 className="mt-5 max-w-4xl mx-auto" style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>
            Meet Maribel Vega — The Heart Behind Vegas Clean
          </h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">
            Four years of trust, dedication, and detail-driven cleaning across Northwest Indiana.
          </p>
        </div>
      </section>

      {/* OWNER STORY */}
      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#e6f1fb] shadow-xl">
            <img src={ownerMaribel} alt="Maribel Vega, founder of Vegas Clean LLC" loading="lazy" width={640} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
              Built on Trust, Dedication & a Passion for Clean
            </h2>
            <p className="mt-5 text-[#1a2233]/80 leading-relaxed">
              Hi, I'm Maribel Vega, founder of Vegas Clean LLC. For over four years, I've been providing families and businesses across Northwest Indiana with reliable, detail-oriented cleaning services they can truly trust. From Hammond to Valparaiso, I bring the same attention to every corner — because your home deserves more than a surface clean.
            </p>
            <p className="mt-4 text-[#1a2233]/80 leading-relaxed">
              I started Vegas Clean because I believe everyone deserves a home that feels fresh and cared for. What sets us apart isn't just how we clean — it's the trust and consistency we bring to every single visit.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 bg-[#e6f1fb] rounded-2xl px-5 py-4">
              <div className="w-12 h-12 rounded-full bg-[#185fa5] text-white flex items-center justify-center font-extrabold text-lg">MV</div>
              <div>
                <div className="font-bold text-[#0c447c]">Maribel Vega</div>
                <div className="text-sm text-[#1a2233]/70">Founder & Owner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#e6f1fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
              What Makes Vegas Clean Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.t} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-white">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{f.e}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#185fa5] text-white flex items-center justify-center">
                    <f.i className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0c447c]">{f.t}</h3>
                <p className="mt-2 text-sm text-[#1a2233]/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
              Three Pillars Behind Every Clean
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl p-8 border border-[#e6f1fb] bg-[#f4f7fb] hover:bg-white hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#185fa5] to-[#0c447c] text-white flex items-center justify-center shadow-lg shadow-[#185fa5]/30">
                  <v.i className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-[#0c447c]">{v.t}</h3>
                <p className="mt-3 text-[#1a2233]/75 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">Before & After</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
              See the Vegas Clean Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pairs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <img src={p.b.url} alt={`Before — ${p.label}`} className="w-full h-full object-cover grayscale" />
                    <span className="absolute top-3 left-3 bg-[#0c447c] text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</span>
                  </div>
                  <div className="relative aspect-square">
                    <img src={p.a.url} alt={`After — ${p.label}`} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#1d9e75] text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</span>
                  </div>
                </div>
                <div className="p-4 text-center text-sm font-semibold text-[#0c447c]">{p.label} · [BEFORE/AFTER IMAGE PAIR]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>Ready to Experience the Vegas Clean Difference?</h2>
          <p className="mt-4 text-white/95 text-lg">Text us today — we'll get you on the schedule fast.</p>
          <a href="sms:2195460135" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-7 py-3.5 font-bold transition">
            <MessageSquare className="h-5 w-5" /> Text to Book
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
