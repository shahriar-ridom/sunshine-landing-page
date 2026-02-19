"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Sun } from "lucide-react";
import { QuoteModalTrigger } from "@/components/QuoteModalTrigger";

interface NavbarProps {
  onQuoteClick?: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.dataset.scrolled = "true";
      } else {
        nav.dataset.scrolled = "false";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      ref={navRef}
      className="
        fixed top-0 left-0 right-0 z-50
        transition-[padding,background-color,box-shadow,backdrop-filter] duration-300 ease-out
        border-b border-transparent
        py-6

        /* Scrolled State */
        data-[scrolled=true]:py-3
        data-[scrolled=true]:bg-bg/85
        data-[scrolled=true]:backdrop-blur-md
        data-[scrolled=true]:border-primary/10
        data-[scrolled=true]:shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo Group */}
        <Link
          href="/"
          className="flex items-center gap-2 group select-none"
          aria-label="Sun-Soaked Homepage"
        >
          <Sun
            className="w-8 h-8 text-primary transition-transform duration-500 ease-out group-hover:rotate-45"
            strokeWidth={2}
          />
          <span className="font-display font-bold text-2xl tracking-tight text-main">
            Sun-Soaked
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "/process", label: "Our Process" },
            { href: "/savings", label: "Savings" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative text-sm font-medium text-muted transition-colors hover:text-primary py-2"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-right hover:origin-left hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          {onQuoteClick ? (
            <button
              onClick={onQuoteClick}
              className="bg-primary hover:bg-primary-hover text-white font-bold text-xs tracking-widest uppercase py-3 px-6 rounded-pill shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 cursor-pointer"
            >
              Get Quote
            </button>
          ) : (
            <QuoteModalTrigger className="bg-primary hover:bg-primary-hover text-white font-bold text-xs tracking-widest uppercase py-3 px-6 rounded-pill shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 cursor-pointer">
              Get Quote
            </QuoteModalTrigger>
          )}
        </div>
      </div>
    </nav>
  );
}
