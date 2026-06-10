import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CITIES } from "@/components/site/data";
import { MessageSquare, Phone, Mail, Facebook, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vegas Clean LLC | Text (219) 546-0135" },
      { name: "description", content: "Text or call Vegas Clean LLC to book your cleaning in Northwest Indiana. (219) 546-0135 · vegascleanservices@gmail.com" },
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
      <section className="bg-[#0c447c] text-white py-16 sm:py-20">
        <div className="container-x text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>Get In Touch</h1>
          <p className="mt-4 text-white/85 text-lg">The fastest way to book is a quick text. We'll get back to you right away.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f4f7fb]">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold">📱 Text Us to Book</h2>
            <p className="mt-3 text-white/95">The easiest way to schedule. Send us your address, preferred date, and type of cleaning.</p>
            <a href="sms:2195460135" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-6 py-3 font-bold transition">
              <MessageSquare className="h-5 w-5" /> Send a Text
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e6f1fb]">
            <h2 className="text-2xl font-bold text-[#0c447c]">Other Ways to Reach Us</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#e6f1fb] text-[#185fa5] flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#0c447c]">Call</div>
                  <a href="tel:2195460135" className="text-[#185fa5] hover:underline">(219) 546-0135</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#e6f1fb] text-[#185fa5] flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#0c447c]">Email</div>
                  <a href="mailto:vegascleanservices@gmail.com" className="text-[#185fa5] hover:underline break-all">vegascleanservices@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#e6f1fb] text-[#185fa5] flex items-center justify-center shrink-0">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#0c447c]">Facebook</div>
                  <a href="https://www.facebook.com/vegacleaningservices" target="_blank" rel="noreferrer" className="text-[#185fa5] hover:underline">facebook.com/vegacleaningservices</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#e6f1fb] text-[#185fa5] flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#0c447c]">Hours</div>
                  <div className="text-[#1a2233]/70 text-sm">Mon–Sat, 8:00 AM – 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c447c] text-white">
        <div className="container-x">
          <h2 className="text-center" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Service Areas</h2>
          <p className="text-center mt-3 text-white/80">Proudly serving 12 cities across Lake & Porter counties.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {CITIES.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium">
                <MapPin className="h-4 w-4 text-[#7fd4b3]" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
