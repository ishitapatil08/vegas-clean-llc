import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageSquare, Sparkles } from "lucide-react";
import logoUrl from "@/assets/logo-vc.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#0a3a6b] text-white text-xs sm:text-sm">
        <div className="container-x py-2 text-center">
          ⭐ Serving Hammond, Munster, Schererville & 9 more Indiana cities · Hablamos Español
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-[#0c447c] text-white shadow-md">
        <div className="container-x flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logoUrl} alt="Vegas Clean LLC" className="h-11 w-auto bg-white rounded-md p-1" width={220} height={88} />
            <span className="sr-only">Vegas Clean LLC</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-white font-semibold" : "text-white/90 hover:text-white"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="sms:2195460135"
              className="inline-flex items-center gap-2 rounded-full bg-[#1d9e75] hover:bg-[#178a64] px-4 py-2 text-sm font-semibold transition-colors"
            >
              <MessageSquare className="h-4 w-4" /> Text to Book
            </a>
            <a
              href="tel:2195460135"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 hover:bg-white hover:text-[#0c447c] px-4 py-2 text-sm font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" /> (219) 546-0135
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 bg-[#0c447c]">
            <div className="container-x py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-white/90 hover:text-white"
                >
                  {n.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <a href="sms:2195460135" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d9e75] px-4 py-3 font-semibold">
                  <MessageSquare className="h-4 w-4" /> Text to Book
                </a>
                <a href="tel:2195460135" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-4 py-3 font-semibold">
                  <Phone className="h-4 w-4" /> (219) 546-0135
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export const Sparkle = Sparkles;
