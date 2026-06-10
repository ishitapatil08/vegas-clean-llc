import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES, CITIES, REVIEWS } from "@/components/site/data";
import { MessageSquare, Phone, Mail, Star, MapPin, ArrowRight, Check } from "lucide-react";
import kitchen from "@/assets/kitchen.jpg.asset.json";
import living from "@/assets/living.jpg.asset.json";
import baTub from "@/assets/ba-tub.jpg.asset.json";
import baShower from "@/assets/ba-shower.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vegas Clean LLC | Professional Cleaning Northwest Indiana" },
      { name: "description", content: "Residential & commercial cleaning in Hammond, Munster, Schererville and 9 more NW Indiana cities. Bilingual, pet-friendly. Text (219) 546-0135." },
      { property: "og:title", content: "Vegas Clean LLC — Northwest Indiana Cleaning" },
      { property: "og:description", content: "Reliable, thorough, guaranteed cleaning. Hablamos Español." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function CTAButtons({ variant = "hero" }: { variant?: "hero" | "compact" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${variant === "hero" ? "" : "justify-center"}`}>
      <a href="sms:2195460135" className="inline-flex items-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] text-white px-6 py-3 font-semibold shadow-lg shadow-[#1d9e75]/30 transition">
        <MessageSquare className="h-5 w-5" /> Text Us to Book
      </a>
      <a href="tel:2195460135" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0c447c] px-6 py-3 font-semibold transition">
        <Phone className="h-5 w-5" /> Call (219) 546-0135
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kitchen.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c447c]/95 via-[#185fa5]/85 to-[#0c447c]/90" aria-hidden />
        <div className="relative container-x py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium border border-white/20">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 5-Star Cleaning · Northwest Indiana
            </span>
            <h1 className="mt-5 font-extrabold leading-[1.05]" style={{ fontSize: "clamp(32px, 6vw, 58px)" }}>
              Your Home, Spotlessly Clean. <span className="text-[#7fd4b3]">Every Single Visit.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl">
              Professional residential & commercial cleaning for Northwest Indiana. Reliable. Thorough. Guaranteed.
            </p>
            <div className="mt-8"><CTAButtons /></div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#7fd4b3]" /> 4+ Years Serving NW Indiana</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#7fd4b3]" /> Pet-Friendly Products</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#7fd4b3]" /> Bilingual (EN/ES)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#0c447c] text-white">
        <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { e: "🏠", t: "Residential & Commercial" },
            { e: "⭐", t: "4+ Years 5-Star Service" },
            { e: "🐾", t: "Pet & Family Safe" },
            { e: "🗣️", t: "Bilingual (EN/ES)" },
          ].map((i) => (
            <div key={i.t} className="flex flex-col items-center gap-2">
              <div className="text-3xl">{i.e}</div>
              <div className="text-sm font-semibold">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Our Cleaning Services</h2>
            <p className="mt-3 text-[#1a2233]/70">From recurring upkeep to deep resets — we tailor every visit to your space.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-[#e6f1fb]">
                <div className="aspect-square bg-[#e6f1fb] flex items-center justify-center text-6xl">{s.icon}</div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0c447c]">{s.name}</h3>
                  <p className="mt-2 text-sm text-[#1a2233]/70">{s.desc}</p>
                  <div className="mt-4 h-1 w-12 bg-[#1d9e75] rounded-full group-hover:w-20 transition-all" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="sms:2195460135" className="inline-flex items-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] text-white px-7 py-3.5 font-semibold shadow-lg shadow-[#1d9e75]/30 transition">
              <MessageSquare className="h-5 w-5" /> Text for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#e6f1fb] shadow-xl">
            <img src={living.url} alt="Clean living room by Vegas Clean LLC" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[#1d9e75] font-semibold text-sm uppercase tracking-wider">About Vegas Clean LLC</span>
            <h2 className="mt-3 text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
              Cleaning Northwest Indiana with Heart & Dedication
            </h2>
            <p className="mt-5 text-[#1a2233]/80 leading-relaxed">
              Founded by Maribel Vega, Vegas Clean LLC has spent over four years building trust with families and businesses across Northwest Indiana. What started as a one-woman commitment to excellence has grown into a service clients invite back, week after week.
            </p>
            <p className="mt-4 text-[#1a2233]/80 leading-relaxed">
              Maribel believes every home deserves the same care she'd give her own — paying attention to the baseboards, the corners, the spots that often get missed. It's why so many of our clients have stayed with us for years.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#185fa5] hover:bg-[#0c447c] text-white px-6 py-3 font-semibold transition">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>See the Vegas Clean Difference</h2>
            <p className="mt-3 text-[#1a2233]/70">Real results from real Northwest Indiana homes.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[baTub, baShower].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <img src={img.url} alt={`Before and after cleaning ${i + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#0c447c] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>What Our Clients Say</h2>
            <p className="mt-3 text-white/80">Real reviews from real Northwest Indiana clients.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-[#0a3a6b] border border-white/10 rounded-2xl p-8 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed text-lg">"{r.quote}"</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-sm text-white/70">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "4+", l: "Years" },
            { n: "12", l: "Cities Served" },
            { n: "100%", l: "Satisfaction" },
            { n: "5★", l: "Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#185fa5]" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-[#1a2233]/70 font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#e6f1fb]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>How It Works</h2>
            <p className="mt-3 text-[#1a2233]/70">Booking your cleaning is quick and easy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Text or Call Us", d: "Send a text or give us a quick call — we'll respond fast." },
              { t: "We Schedule Your Clean", d: "Pick a date and time that works for you. We confirm the details." },
              { t: "Enjoy Your Spotless Home", d: "We arrive, clean thoroughly, and leave your space sparkling." },
            ].map((s, i) => (
              <div key={s.t} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#185fa5] text-white flex items-center justify-center text-2xl font-extrabold shadow-lg shadow-[#185fa5]/30">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0c447c]">{s.t}</h3>
                <p className="mt-2 text-[#1a2233]/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-[#0c447c] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Serving Northwest Indiana</h2>
            <p className="mt-3 text-white/80">Proudly cleaning homes and businesses across 12 cities in Lake & Porter counties.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {CITIES.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium transition">
                <MapPin className="h-4 w-4 text-[#7fd4b3] shrink-0" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILINGUAL */}
      <section className="py-14 bg-[#1d9e75] text-white">
        <div className="container-x text-center">
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Hablamos Español — We Speak Spanish!</h2>
          <p className="mt-3 text-white/95 max-w-2xl mx-auto">
            Atención bilingüe para toda la familia. Envíanos un mensaje y reserva tu limpieza hoy.
          </p>
          <a href="sms:2195460135" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-7 py-3.5 font-bold transition">
            <MessageSquare className="h-5 w-5" /> Envíanos un Texto
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>Ready for a Spotless Home?</h2>
          <p className="mt-4 text-white/95 text-lg">Reach out today — we'll get you on the schedule in no time.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="sms:2195460135" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-6 py-3 font-bold transition">
              <MessageSquare className="h-5 w-5" /> Text Us
            </a>
            <a href="tel:2195460135" className="inline-flex items-center gap-2 rounded-full bg-[#0c447c] hover:bg-[#0a3a6b] text-white px-6 py-3 font-bold transition">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href="mailto:vegascleanservices@gmail.com" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0c447c] px-6 py-3 font-bold transition">
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
