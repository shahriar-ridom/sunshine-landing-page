import Image from "next/image";
import Link from "next/link";
import { QuoteModalTrigger } from "@/components/QuoteModalTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroImage from "@/../public/hero.png";
import {
  VolumeX,
  BatteryCharging,
  TrendingUp,
  CheckCircle,
  Sun,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// Data
const testimonials = [
  {
    quote:
      "Our electric bill is gone, but the house feels warmer. It's the best investment we've made.",
    name: "The Miller Family",
    location: "Portland, OR",
    avatar: "https://i.pravatar.cc/150?u=miller",
  },
  {
    quote: "The installation was incredibly smooth. No mess, just sunshine.",
    name: "James Chen",
    location: "Austin, TX",
    avatar: "https://i.pravatar.cc/150?u=chen",
  },
  {
    quote: "I love checking the app and seeing how much we're saving.",
    name: "Sarah Jenkins",
    location: "San Diego, CA",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];

const benefits = [
  {
    icon: VolumeX,
    title: "Silent Operation",
    desc: "Energy without the hum. Our inverters are whisper quiet.",
  },
  {
    icon: BatteryCharging,
    title: "Grid Independence",
    desc: "Store sunshine for cloudy days and unexpected outages.",
  },
  {
    icon: TrendingUp,
    title: "Property Value Rise",
    desc: "Modern buyers are looking for sustainable, efficient homes.",
  },
  {
    icon: CheckCircle,
    title: "Zero Maintenance",
    desc: "Set it and forget it. Built to withstand the elements.",
  },
];

export default function Home() {
  return (
    <div className="bg-bg text-main font-body overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay bg-grain"></div>

      <Navbar />

      <main className="relative z-10 pt-24">
        {/* ── HERO ── */}
        <section className="max-w-7xl mx-auto px-6 pt-12 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] mb-6 text-main animate-fade-in-up [animation-fill-mode:both]">
              Power your home with <br className="hidden md:block" />
              <span className="text-primary italic">pure sunshine.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
              Energy independence for the family, designed for comfort. No
              industrial hardware, just warmth and savings.
            </p>

            {/* Button */}
            <div className="flex justify-center animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:both]">
              <QuoteModalTrigger className="relative overflow-hidden bg-primary text-white font-bold text-base tracking-wider uppercase py-4 px-10 rounded-pill shadow-btn hover:shadow-btn-hover hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group cursor-pointer">
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-linear-to-r from-transparent via-white/30 to-transparent z-10 skew-x-12" />

                <span className="relative z-20 flex items-center gap-2">
                  Capture the Sun
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </QuoteModalTrigger>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-14 max-w-full flex justify-center animate-scale-in [animation-delay:500ms] [animation-fill-mode:both]">
            {/* Glow Effect */}
            <div className="inset-0 bg-primary blur-[100px] opacity-20 rounded-full scale-90 translate-y-10 -z-20 animate-pulse"></div>

            <div className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-primary-glow/50 -z-10 aspect-video max-h-150 group cursor-default border-4 border-white/50">
              <Image
                src={HeroImage}
                alt="Family enjoying solar energy"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ── WAVE SEPARATOR ── */}
        <div className="text-white relative -mt-1 z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-24 block fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>

        {/* ── BENEFITS ── */}
        <section id="process" className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Sticky Title Area */}
            <div className="lg:flex-1 lg:sticky lg:top-32 h-fit">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-main leading-tight mb-4">
                Living Lighter.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-sm mb-8">
                Solar that feels like an upgrade to your home, not a utility
                project.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-primary font-bold tracking-wide border-b-2 border-transparent hover:border-primary transition-all duration-300 group"
              >
                Explore the technology
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Grid Area */}
            <div className="lg:flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <div
                  key={item.title}
                  className="group bg-bg rounded-card p-8 shadow-sm border border-primary-light/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 hover:border-primary-light"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <item.icon className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-main mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-bg overflow-hidden relative">
          <h2 className="font-display font-medium text-3xl md:text-5xl text-center text-main mb-12">
            Warmth, shared by neighbors.
          </h2>

          {/* Masking Gradients - Using theme bg color */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-bg to-transparent z-10 pointer-events-none"></div>

          {/* Marquee */}
          <div className="flex gap-6 w-max animate-marquee pl-6 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[320px] md:w-110 bg-white rounded-card p-8 border border-primary-light shadow-sm flex flex-col justify-between shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <span className="font-display text-8xl text-primary-light absolute -top-8 -left-2 -z-10 select-none">
                    “
                  </span>
                  <p className="font-display text-lg md:text-xl text-main leading-relaxed mt-4">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-light">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-main">{t.name}</p>
                    <p className="text-xs text-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-white -skew-y-3 origin-bottom-right z-[-1]"></div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-full bg-primary-light text-primary mb-6">
              <Sun className="w-10 h-10 animate-[spin_12s_linear_infinite]" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-main mb-6 leading-tight">
              Ready to capture the sun?
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed max-w-lg mx-auto">
              Get a personalised quote in minutes. No commitment, just a
              conversation about your home's potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteModalTrigger className="bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wider py-4 px-12 rounded-pill shadow-btn hover:shadow-btn-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                Start Your Quote
              </QuoteModalTrigger>
              <Link
                href="/savings"
                className="bg-transparent border-2 border-primary-light hover:border-primary hover:text-primary text-main font-bold uppercase tracking-wider py-3.5 px-12 rounded-pill transition-all duration-200"
              >
                View Savings
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
