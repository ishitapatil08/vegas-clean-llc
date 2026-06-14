import { Link } from "react-router-dom";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const services = [
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Recurring Cleaning",
  "Airbnb / Vacation Rental",
  "Office & Commercial",
  "Post-Construction",
];

const cities = [
  "Hammond", "Munster", "Schererville", "Dyer", "Merrillville", "Crown Point",
  "Cedar Lake", "Lowell", "Valparaiso", "Hobart", "Lake Station", "Chesterton",
];

export function Footer() {
  return (
    <footer className="bg-[#0c447c] text-white/90 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="Vegas Clean LLC" className="h-14 bg-white rounded-md p-2 mb-4" />
          <p className="text-white/80 max-w-xs">Professional cleaning you can trust — serving Northwest Indiana families & businesses.</p>
          <a href="https://www.facebook.com/vegacleaningservices" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
            <Facebook className="h-4 w-4" /> Follow on Facebook
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-1 shrink-0" /><a href="tel:2195460135" className="hover:text-white">(219) 546-0135</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-1 shrink-0" /><a href="mailto:vegascleanservices@gmail.com" className="hover:text-white break-all">vegascleanservices@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 shrink-0" /><span>{cities.join(" · ")}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/70 text-center">
          © 2025 Vegas Clean LLC · All Rights Reserved · Hammond, IN
        </div>
      </div>
    </footer>
  );
}
