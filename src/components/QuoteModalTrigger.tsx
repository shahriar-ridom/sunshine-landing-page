"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface TriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function QuoteModalTrigger({ children, className }: TriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${className} cursor-pointer`}
      >
        {children}
      </button>
      <QuoteModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
