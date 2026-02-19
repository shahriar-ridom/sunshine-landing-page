"use client";

import { useState } from "react";
import Image from "next/image";
import { QuoteModalTrigger } from "@/components/QuoteModalTrigger";
import {
  Coffee,
  Plane,
  GraduationCap,
  Sun,
  CloudSun,
  ArrowRight,
  DollarSign,
} from "lucide-react";

type Sunlight = "full" | "partial";

const TIERS = [
  {
    limit: 1800,
    icon: Coffee,
    title: "365 Morning Lattes",
    desc: "Start every single morning with a treat, on the house.",
  },
  {
    limit: 3500,
    icon: Plane,
    title: "2 Family Roadtrips",
    desc: "Pack the car and explore. The fuel is on the sun.",
  },
  {
    limit: 99999,
    icon: GraduationCap,
    title: "1 Year of College Savings",
    desc: "Invest in their future instead of paying the utility company.",
  },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
];

export default function SavingsCalculator() {
  const [bill, setBill] = useState(150);
  const [sunlight, setSunlight] = useState<Sunlight>("full");

  const factor = sunlight === "full" ? 0.85 : 0.7;
  const annualSavings = Math.floor(bill * 12 * factor);
  const tier =
    TIERS.find((t) => annualSavings <= t.limit) ?? TIERS[TIERS.length - 1];

  return (
    <div className="animate-scale-in [animation-delay:100ms] [animation-fill-mode:both] bg-white rounded-card shadow-glow border border-surface overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-135">
      {/* ── Inputs ── */}
      <div className="lg:col-span-5 p-8 md:p-14 bg-surface/30 flex flex-col justify-center gap-10 relative">
        <div className="absolute inset-0 opacity-50 bg-grain pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-10">
          {/* Bill Slider */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold tracking-widest uppercase text-muted">
                Monthly Electric Bill
              </label>
              <span className="font-display text-4xl font-bold text-primary leading-none">
                ${bill}
              </span>
            </div>

            <input
              type="range"
              min={50}
              max={800}
              step={10}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2 bg-primary-light rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <div className="flex justify-between text-xs font-medium text-muted/60">
              <span>$50</span>
              <span>$800+</span>
            </div>
            <p className="text-sm text-muted/70 leading-relaxed">
              Slide to match your average monthly energy costs.
            </p>
          </div>

          {/* Sunlight Selector */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-muted">
              Roof Sunlight Exposure
            </span>

            <div className="grid grid-cols-1 gap-3">
              {(["full", "partial"] as Sunlight[]).map((val) => (
                <label
                  key={val}
                  className={`
                    flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    ${
                      sunlight === val
                        ? "border-primary bg-white shadow-sm"
                        : "border-transparent bg-white/50 hover:bg-white hover:border-primary/20"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="sunlight"
                    value={val}
                    checked={sunlight === val}
                    onChange={() => setSunlight(val)}
                    className="sr-only"
                  />
                  <div
                    className={`transition-colors duration-200 ${sunlight === val ? "text-primary" : "text-muted/40"}`}
                  >
                    {val === "full" ? (
                      <Sun className="w-6 h-6" />
                    ) : (
                      <CloudSun className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-main mb-0.5">
                      {val === "full" ? "Full Sun" : "Partial Shade"}
                    </p>
                    <p className="text-xs text-muted">
                      {val === "full"
                        ? "Unobstructed view of the sky"
                        : "Some tree coverage"}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Output ── */}
      <div className="lg:col-span-7 bg-primary text-white p-8 md:p-14 flex flex-col justify-between gap-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)]" />
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-[60px]" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 opacity-80 mb-2">
            <DollarSign className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Projected Annual Savings
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <span
              key={annualSavings}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none animate-scale-in"
            >
              ${annualSavings.toLocaleString()}
            </span>
            <span className="opacity-60 text-lg font-medium">/ year</span>
          </div>

          <p className="opacity-60 text-xs font-medium">
            *Estimated based on current utility rates.
          </p>
        </div>

        {/* Lifestyle Tier */}
        <div
          key={tier.title}
          className="relative z-10 border-y border-white/20 py-8 animate-fade-in"
        >
          <p className="opacity-90 font-medium mb-5">That's equivalent to:</p>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
              <tier.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-1">
                {tier.title}
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">{tier.desc}</p>
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 pt-2">
          {/* Avatars */}
          <div className="flex items-center">
            {AVATARS.map((src, i) => (
              <div
                key={i}
                className={`relative w-10 h-10 rounded-full border-2 border-primary overflow-hidden ${i > 0 ? "-ml-3" : ""}`}
              >
                <Image src={src} alt="Customer" fill className="object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center text-[10px] font-bold -ml-3 z-10">
              +2k
            </div>
          </div>

          <QuoteModalTrigger className="bg-white hover:bg-primary-light text-primary font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-pill flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
            Start Your Savings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </QuoteModalTrigger>
        </div>
      </div>
    </div>
  );
}
