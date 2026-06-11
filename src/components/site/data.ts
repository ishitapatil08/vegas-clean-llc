import deepClean from "@/assets/service-deep-clean.jpg";
import moveInOut from "@/assets/service-move-in-out.jpg";
import recurring from "@/assets/service-recurring.jpg";
import airbnb from "@/assets/service-airbnb.jpg";
import office from "@/assets/service-office.jpg";
import postConstruction from "@/assets/service-post-construction.jpg";

export const SERVICES = [
  { icon: "✨", name: "Deep Cleaning", desc: "Top-to-bottom detailed cleaning that resets your entire home.", image: deepClean, alt: "Professional deep cleaning of white bathroom tiles" },
  { icon: "📦", name: "Move-In / Move-Out", desc: "Spotless turnover cleans for renters, buyers, and sellers.", image: moveInOut, alt: "Empty apartment with moving boxes after cleaning" },
  { icon: "🔄", name: "Recurring Cleaning", desc: "Weekly, bi-weekly, or monthly visits to keep things effortless.", image: recurring, alt: "Cozy clean living room after recurring service" },
  { icon: "🏖️", name: "Airbnb / Vacation Rental", desc: "Fast, reliable turnovers between guest stays — every time.", image: airbnb, alt: "Hotel-quality Airbnb bedroom turnover" },
  { icon: "🏢", name: "Office & Commercial", desc: "Healthy, professional workspaces your team will love.", image: office, alt: "Spotless modern office after commercial cleaning" },
  { icon: "🔨", name: "Post-Construction", desc: "Dust, debris, and residue removed after remodels & builds.", image: postConstruction, alt: "Bright home interior after post-construction clean" },
];

export const SERVICE_IMAGES = {
  deepClean,
  moveInOut,
  recurring,
  airbnb,
  office,
  postConstruction,
};

export const CITIES = [
  "Hammond, IN", "Munster, IN", "Schererville, IN", "Dyer, IN",
  "Merrillville, IN", "Crown Point, IN", "Cedar Lake, IN", "Lowell, IN",
  "Valparaiso, IN", "Hobart, IN", "Lake Station, IN", "Chesterton, IN",
];

export const REVIEWS = [
  {
    quote: "Maribel is incredibly thorough and detail-oriented. She pays attention to overlooked details, from baseboards to tight corners. I completely trust her in my home.",
    name: "Satisfied Customer",
    location: "Schererville, IN",
  },
  {
    quote: "I've been using Vegas Clean for about three years. What stands out most is the attention to detail. After each cleaning there isn't a trace of dog hair — not on the floors, not on the furniture.",
    name: "3-Year Client",
    location: "Northwest Indiana",
  },
];
