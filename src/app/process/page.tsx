import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Satellite,
  FileCheck,
  Sparkles,
  Handshake,
  Sun,
  ArrowRight,
} from "lucide-react";
import satellite from "@/../public/satellite.png";
import regulation from "@/../public/regulation.png";
import worker from "@/../public/worker.png";

const steps = [
  {
    num: "01",
    label: "The Design",
    title: "Mapped from the sky.",
    desc: "We use advanced satellite imagery to design your system down to the inch. No climbing on your roof, no interrupting your weekend. We respect your property from day one.",
    badge: { icon: Satellite, text: "Remote Analysis" },
    img: satellite,
    alt: "Satellite view of a modern home with solar panels",
  },
  {
    num: "02",
    label: "The Permit",
    title: "Paperwork? That's on us.",
    desc: "HOAs, city permits, utility interconnection agreements. We handle the entire bureaucracy while you handle your morning coffee.",
    badge: { icon: FileCheck, text: "Zero Headaches" },
    img: regulation,
    alt: "Signing documents on a wooden table",
  },
  {
    num: "03",
    label: "The Install",
    title: "One day. Zero mess.",
    desc: "Our 'White Glove' crew wears shoe covers, cleans up every speck of dust, and finishes before dinner. It's construction that feels like hospitality.",
    badge: { icon: Sparkles, text: "Spotless Guarantee" },
    img: worker,
    alt: "Clean, modern living room sunlit",
  },
];

export const metadata: Metadata = {
  title: "Our Process — Sun-Soaked Living",
  description:
    "White glove service from satellite design to spotless installation.",
};

export default function ProcessPage() {
  return (
    <div className="bg-bg text-main font-body selection:bg-primary selection:text-white">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay bg-grain"></div>

      <Navbar />

      <main className="pt-32 pb-24 overflow-hidden">
        {/* ── HERO ── */}
        <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-muted text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <Handshake className="w-4 h-4" />
            White Glove Service
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-main mb-8 animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
            Bringing the sun inside,
            <br />
            <span className="text-primary italic">without the stress.</span>
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
            We strip away the industrial jargon and focus on the warmth of
            energy independence. Here is how we respect your time and your home.
          </p>
        </section>

        {/* ── TIMELINE ── */}
        <section className="max-w-6xl mx-auto px-6 relative">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-24 md:gap-32">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`
                  relative flex flex-col md:flex-row items-center gap-12 md:gap-24
                  ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Image Side */}
                <div className="flex-1 w-full group perspective-1000">
                  <div className="relative aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-2xl shadow-primary-glow/20 border-4 border-white transition-transform duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" />
                    <Image
                      src={step.img}
                      alt={step.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Timeline Dot (Desktop Only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-lg hidden md:block z-10" />

                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`flex flex-col gap-6 ${index % 2 === 1 ? "md:items-end md:text-right" : "md:items-start"}`}
                  >
                    {/* Number Badge */}
                    <div className="flex items-center gap-3 text-primary-hover">
                      <span className="font-display font-bold text-5xl opacity-20">
                        {step.num}
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase">
                        {step.label}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-3xl md:text-5xl text-main leading-tight">
                      {step.title}
                    </h2>

                    <p className="text-muted text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-muted font-medium bg-bg px-4 py-2 rounded-lg border border-primary-light">
                      <step.badge.icon className="w-5 h-5" />
                      <span>{step.badge.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="max-w-4xl mx-auto mt-32 px-6">
          <div className="relative overflow-hidden bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl shadow-primary-glow/30 border border-primary-light group">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary-light/50 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <Sun className="w-16 h-16 text-primary mx-auto mb-8 animate-[spin_12s_linear_infinite]" />

            <h2 className="font-display font-bold text-4xl md:text-5xl text-main mb-6">
              Ready for a brighter home?
            </h2>

            <p className="text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed">
              Let's start with a conversation, not a sales pitch. See how much
              sunshine your roof can capture.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-widest uppercase py-4 px-10 rounded-pill shadow-btn hover:shadow-btn-hover hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
