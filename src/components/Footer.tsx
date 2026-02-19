import Link from "next/link";
import { Sun, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-primary/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Back to homepage"
        >
          <Sun className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display font-bold text-xl tracking-tight text-main">
            Sun-Soaked
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-muted">
          {["Privacy", "Terms", "Contact"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <SocialLink href="#" label="Facebook">
            <Facebook className="w-5 h-5" />
          </SocialLink>
          <SocialLink href="#" label="Instagram">
            <Instagram className="w-5 h-5" />
          </SocialLink>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-muted/60">
        © 2026 Sun-Soaked Living. Designed for comfort.
      </p>
    </footer>
  );
}

// Helper component
function SocialLink({
  href,
  children,
  label
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
