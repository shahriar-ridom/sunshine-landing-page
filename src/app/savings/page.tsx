import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import {
  Leaf,
  TrendingUp,
  ShieldCheck,
  ArrowLeft
} from "lucide-react";

const TRUST = [
  {
    icon: Leaf,
    label: "Zero Emissions",
    desc: "Clean energy for a cleaner future.",
  },
  {
    icon: TrendingUp,
    label: "Property Value",
    desc: "Homes with solar sell for 4.1% more.",
  },
  {
    icon: ShieldCheck,
    label: "25-Year Warranty",
    desc: "Peace of mind for a generation.",
  },
];

export const metadata = {
  title: "Savings Calculator — Sun-Soaked Living",
  description: "Visualize your energy independence. Calculate how much you can save with solar.",
};

export default function SavingsPage() {
  return (
    <div className="bg-bg text-main font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* Note: We don't pass onQuoteClick anymore.
        Navbar handles its own modal trigger internally now.
      */}
      <Navbar />

      <main className="flex-1 pt-32 pb-16 relative overflow-hidden">
        {/* Ambient Blobs (Static CSS, server rendered) */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-surface rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -right-10 w-1/3 h-1/3 bg-primary-light/50 rounded-full blur-[100px] opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-12">

          {/* Header (Server Rendered) */}
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-main leading-tight mb-4">
              Visualize Your Freedom
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              See what your electric bill could be buying instead of disappearing into the grid.
            </p>
          </div>

          {/* Interactive Island (Client Rendered) */}
          <SavingsCalculator />

          {/* Trust Indicators (Server Rendered) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
            {TRUST.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-1 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-main mb-1">{label}</h4>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Back Link (Server Rendered) */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-hover transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
