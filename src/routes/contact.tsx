import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CITIES } from "@/components/site/data";
import { MessageSquare, Phone, Mail, Facebook, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vegas Clean LLC | Text (219) 546-0135" },
      { name: "description", content: "Text, call, or email Vegas Clean LLC to book your cleaning in Northwest Indiana. Fast reply within 1 hour. Hablamos Español." },
      { property: "og:title", content: "Contact Vegas Clean LLC" },
      { property: "og:description", content: "Text us to book your cleaning in NW Indiana." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c447c] via-[#185fa5] to-[#0c447c]" aria-hidden />
        <div className="relative container-x py-20 sm:py-24 text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>Get In Touch</h1>
          <p className="mt-4 text-white/85 text-lg">We'd love to clean for you. Reach out any way you prefer.</p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {/* TEXT (primary) */}
          <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-[#1d9e75] flex flex-col">
            <span className="absolute -top-3 left-6 bg-[#1d9e75] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Fastest</span>
            <div className="text-4xl">📱</div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#0c447c]">Text Us</h2>
            <p className="mt-2 text-[#1a2233]/70">Text is the fastest way to book!</p>
            <a href="sms:2195460135" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] text-white px-5 py-3 font-bold transition shadow-lg shadow-[#1d9e75]/30">
              <MessageSquare className="h-5 w-5" /> Text (219) 546-0135
            </a>
            <p className="mt-5 text-sm text-[#1a2233]/65">Send us your name, address, and preferred service. We'll reply within 1 hour.</p>
          </div>

          {/* CALL */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition border border-[#e6f1fb] flex flex-col">
            <div className="text-4xl">📞</div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#0c447c]">Call Us</h2>
            <p className="mt-2 text-[#1a2233]/70">Prefer to talk? Call us directly.</p>
            <a href="tel:2195460135" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#185fa5] hover:bg-[#0c447c] text-white px-5 py-3 font-bold transition">
              <Phone className="h-5 w-5" /> Call (219) 546-0135
            </a>
            <p className="mt-5 text-sm text-[#1a2233]/65">Hours: Mon–Sat 8AM–6PM</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition border border-[#e6f1fb] flex flex-col">
            <div className="text-4xl">✉️</div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#0c447c]">Email Us</h2>
            <p className="mt-2 text-[#1a2233]/70">For detailed inquiries or quotes.</p>
            <a href="mailto:vegascleanservices@gmail.com" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#185fa5] text-[#185fa5] hover:bg-[#185fa5] hover:text-white px-5 py-3 font-bold transition break-all text-sm">
              <Mail className="h-5 w-5 shrink-0" /> vegascleanservices@gmail.com
            </a>
            <p className="mt-5 text-sm text-[#1a2233]/65">We respond to emails within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* BILINGUAL */}
      <section className="bg-[#1d9e75] text-white py-10">
        <div className="container-x text-center max-w-2xl">
          <p className="text-lg sm:text-xl font-semibold">
            🗣️ Se habla Español — Llámenos o envíenos un mensaje de texto hoy.
          </p>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-[#0c447c] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Service Areas</h2>
            <p className="mt-3 text-white/80">Proudly serving 12 cities across Lake & Porter counties.</p>
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

      {/* SOCIAL */}
      <section className="py-16 bg-white">
        <div className="container-x text-center max-w-2xl">
          <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Follow Us</h2>
          <p className="mt-3 text-[#1a2233]/70">See our latest work and updates on Facebook.</p>
          <a
            href="https://www.facebook.com/vegacleaningservices"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1877f2] hover:bg-[#0c5dc7] text-white px-6 py-3 font-bold transition"
          >
            <Facebook className="h-5 w-5" /> Follow on Facebook
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
