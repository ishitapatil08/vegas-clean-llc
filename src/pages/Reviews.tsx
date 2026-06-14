import { SiteLayout } from "@/components/site/Layout";
import { useSeo } from "@/lib/seo";
import { MessageSquare, Star, Facebook, Quote } from "lucide-react";

const FULL_REVIEWS = [
  {
    quote: "I am writing to highly recommend Maribel Vega for any residential or commercial cleaning services. She has been cleaning my home for four years, and I have been consistently impressed by her exceptional service, reliability, and work ethic. Maribel is incredibly thorough and detail-oriented. Expert Deep Cleaning: She pays attention to overlooked details, from baseboards to tight corners. Outstanding Reliability: She arrives on time and has maintained a flawless attendance record. Utmost Trustworthiness: I completely trust her in my home, often leaving her with a spare key. I have recommended her to several friends and neighbors, all of whom have been equally delighted.",
    name: "Verified Client",
    location: "Schererville, IN",
    date: "June 2026",
  },
  {
    quote: "I've been using Vegas Clean for about three years now, and I can honestly say they've been a wonderful find. What stands out most is the attention to detail — every visit, our home is thoroughly cleaned from top to bottom. The products they use are high quality, which matters a lot to us since we have a dog. Anyone with pets knows how challenging it can be to keep up with fur and dander, but after each cleaning there isn't a trace of dog hair — not on the floors, not on the furniture. Everything is dusted and left spotless.",
    name: "3-Year Client",
    location: "Northwest Indiana",
    date: "Long-time Client",
  },
];

export default function ReviewsPage() {
  useSeo({
    title: "Client Reviews | Vegas Clean LLC — 5-Star NW Indiana Cleaning",
    description: "Real 5-star reviews from Northwest Indiana families. See why clients trust Vegas Clean LLC year after year.",
    ogTitle: "Reviews — Vegas Clean LLC",
    ogDescription: "Real reviews from real NW Indiana clients.",
    path: "/reviews",
  });

  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-[#0c447c] via-[#185fa5] to-[#0c447c] text-white py-20 sm:py-24">
        <div className="container-x text-center max-w-3xl">
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>What Our Clients Are Saying</h1>
          <p className="mt-4 text-white/85 text-lg">Real reviews from real families across Northwest Indiana.</p>
        </div>
      </section>

      <section className="bg-[#185fa5] text-white py-10">
        <div className="container-x text-center">
          <div className="text-6xl sm:text-7xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>5.0</div>
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mt-3 text-white/85 text-sm uppercase tracking-wider font-semibold">Based on client testimonials</p>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x grid lg:grid-cols-2 gap-6 max-w-6xl">
          {FULL_REVIEWS.map((r) => (
            <article key={r.name} className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition border border-[#e6f1fb]">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#e6f1fb]" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#1a2233]/85 leading-relaxed">"{r.quote}"</p>
              <div className="mt-7 pt-6 border-t border-[#e6f1fb] flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-bold text-[#0c447c]">{r.name}</div>
                  <div className="text-sm text-[#1a2233]/60">{r.location}</div>
                </div>
                <div className="text-xs text-[#1a2233]/50 uppercase tracking-wider font-semibold">{r.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x text-center max-w-2xl">
          <h2 className="text-[#0c447c]" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Happy with our service? We'd love to hear from you!</h2>
          <p className="mt-3 text-[#1a2233]/70">Your review helps other Northwest Indiana families find us.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://www.google.com/search?q=Vegas+Clean+LLC+Hammond+Indiana" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#185fa5] hover:bg-[#0c447c] text-white px-6 py-3 font-bold transition">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /> Leave a Google Review
            </a>
            <a href="https://www.facebook.com/vegacleaningservices" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877f2] hover:bg-[#0c5dc7] text-white px-6 py-3 font-bold transition">
              <Facebook className="h-5 w-5" /> Review on Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>Experience the 5-Star Difference</h2>
          <p className="mt-4 text-white/95 text-lg">Join the families who trust Vegas Clean year after year.</p>
          <a href="sms:2195460135" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-7 py-3.5 font-bold transition">
            <MessageSquare className="h-5 w-5" /> Text to Book
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
