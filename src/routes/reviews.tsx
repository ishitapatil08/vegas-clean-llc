import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { REVIEWS } from "@/components/site/data";
import { MessageSquare, Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | Vegas Clean LLC" },
      { name: "description", content: "Read what Northwest Indiana clients say about Vegas Clean LLC — 5-star, detail-oriented, pet-friendly cleaning." },
      { property: "og:title", content: "Reviews — Vegas Clean LLC" },
      { property: "og:description", content: "Real reviews from real NW Indiana clients." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0c447c] text-white py-16 sm:py-20">
        <div className="container-x text-center max-w-3xl">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>What Our Clients Say</h1>
          <p className="mt-4 text-white/85 text-lg">Trusted across Northwest Indiana for over 4 years.</p>
        </div>
      </section>

      <section className="py-20 bg-[#f4f7fb]">
        <div className="container-x grid md:grid-cols-2 gap-6 max-w-5xl">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e6f1fb]">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#1a2233]/85 leading-relaxed text-lg">"{r.quote}"</p>
              <div className="mt-6 pt-5 border-t border-[#e6f1fb]">
                <div className="font-bold text-[#0c447c]">{r.name}</div>
                <div className="text-sm text-[#1a2233]/60">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1d9e75] to-[#178a64] text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Want to be our next 5-star review?</h2>
          <p className="mt-3 text-white/95">Book your first clean today and see the difference for yourself.</p>
          <a href="sms:2195460135" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0c447c] hover:bg-[#e6f1fb] px-6 py-3 font-bold transition">
            <MessageSquare className="h-5 w-5" /> Text to Book Now
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
