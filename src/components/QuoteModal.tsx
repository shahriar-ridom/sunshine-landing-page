"use client";

import { useState, useEffect, useRef, memo, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Sun,
  MapPin,
  ShieldCheck,
  User,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

// --- Types ---
interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

interface StepProps {
  onNext: (data: any) => void;
  onBack?: () => void;
}

// --- Memoized Components (Performance Shield) ---

const ModalBackground = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]">
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 580 150">
      <path
        d="M0 150 C 150 50, 430 50, 580 150"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 10"
        fill="none"
        className="text-primary"
      />
    </svg>
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
  </div>
));

const Header = memo(({ step, submitted }: { step: number; submitted: boolean }) => {
  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;
  return (
    <div className="bg-surface p-8 pb-6 relative shrink-0 z-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-primary bg-white/80 px-3 py-1 rounded-full backdrop-blur-md border border-primary/10 shadow-sm">
          <Sun className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted">Sunrise to Noon</span>
        </div>
        <div className="w-64 h-2 bg-slate-100 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500 ease-out will-change-transform"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center space-y-1">
          <h2 key={step} className="font-display font-bold text-2xl text-main animate-in slide-in-from-bottom-2 fade-in duration-300">
            {submitted ? "You're all set! ☀️" : step === 1 ? "Let's find your sun." : step === 2 ? "Fueling your home." : "Your forecast is ready."}
          </h2>
          <p className="text-sm text-muted/80 max-w-xs mx-auto h-10">
            {submitted ? "A solar advisor will reach out within 24 hours." : step === 1 ? "We analyze roof angles and weather patterns." : step === 2 ? "We size your system perfectly for your needs." : "Your potential savings are ready."}
          </p>
        </div>
      </div>
    </div>
  );
});

// --- Step Components ---

const StepLocation = ({ onNext }: StepProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSumbit = () => onNext({ location: inputRef.current?.value || "Unknown" });

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 fade-in duration-300">
      <div className="space-y-6 flex-1">
        <label className="font-display font-bold text-xl text-main block">Where does the sun hit?</label>
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
          <input ref={inputRef} type="text" placeholder="Enter your street address" className="input-field-optimized" autoFocus onKeyDown={(e) => e.key === "Enter" && handleSumbit()} />
        </div>
        <div className="flex gap-4 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-muted/80">We use satellite data to map your roof remotely.</p>
        </div>
      </div>
      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button type="button" onClick={handleSumbit} className="btn-nav">Next Step <ArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

const StepBill = ({ onNext, onBack }: StepProps) => {
  const [bill, setBill] = useState(250);
  const sunScale = 0.8 + bill / 1000;

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 fade-in duration-300">
      <div className="space-y-6 flex-1 text-center">
        <div className="h-32 flex items-center justify-center my-2">
          <div className="relative text-primary transition-transform duration-75 ease-out will-change-transform" style={{ transform: `scale(${sunScale})`, opacity: 0.6 + bill / 1000 }}>
            <Sun className="w-20 h-20 fill-current" />
            <div className="absolute inset-0 bg-primary blur-2xl opacity-40 rounded-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold uppercase text-muted">Monthly Bill</span>
            <span className="font-display text-4xl font-bold text-primary tabular-nums">${bill}</span>
          </div>
          <input type="range" min={50} max={500} step={10} value={bill} onChange={(e) => setBill(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
      </div>
      <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
        <button type="button" onClick={onBack} className="text-muted hover:text-primary flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
        <button type="button" onClick={() => onNext({ billAmount: bill })} className="btn-nav">Next Step <ArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

const StepContact = ({ onNext, onBack }: StepProps) => {
  const nRef = useRef<HTMLInputElement>(null);
  const eRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 fade-in duration-300">
      <div className="space-y-4 flex-1">
        <div className="relative group"><User className="input-icon" /><input ref={nRef} placeholder="Full Name" className="input-field-optimized" /></div>
        <div className="relative group"><Mail className="input-icon" /><input ref={eRef} placeholder="Email" className="input-field-optimized" /></div>
        <div className="relative group"><Phone className="input-icon" /><input ref={pRef} placeholder="Phone" className="input-field-optimized" /></div>
      </div>
      <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
        <button type="button" onClick={onBack} className="text-muted hover:text-primary flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
        <button type="button" onClick={() => onNext({ name: nRef.current?.value, email: eRef.current?.value, phone: pRef.current?.value })} className="btn-nav w-full justify-center">Get My Score</button>
      </div>
    </div>
  );
};

// --- Main Controller ---

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formData = useRef<any>({});

  const reset = useCallback(() => {
    setStep(1);
    setSubmitted(false);
    onClose();
  }, [onClose]);

  const handleNext = useCallback((data: any) => {
    formData.current = { ...formData.current, ...data };
    setStep((s) => (s < 3 ? s + 1 : s));
    if (step === 3) setSubmitted(true);
  }, [step]);

  const handleBack = useCallback(() => setStep((s) => (s > 1 ? s - 1 : s)), []);

  useEffect(() => {
    setMounted(true);
    const h = (e: KeyboardEvent) => e.key === "Escape" && reset();
    if (open) {
      window.addEventListener("keydown", h);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [open, reset]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div onClick={reset} className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />
      <div className="relative w-full max-w-lg bg-bg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 transform-gpu">
        <ModalBackground />
        <Header step={step} submitted={submitted} />
        <div className="flex-1 overflow-y-auto p-8 relative z-10 bg-bg/50">
          {submitted ? (
            <div className="flex flex-col items-center gap-6 py-8 text-center animate-in zoom-in-50">
              <CheckCircle2 className="w-20 h-20 text-primary" />
              <p className="text-muted leading-relaxed">Forecast sent to <strong className="text-main">{formData.current.email}</strong></p>
              <button onClick={reset} className="w-full py-3 bg-primary/10 text-primary font-bold rounded-xl">Close</button>
            </div>
          ) : (
            <>
              {step === 1 && <StepLocation onNext={handleNext} />}
              {step === 2 && <StepBill onNext={handleNext} onBack={handleBack} />}
              {step === 3 && <StepContact onNext={handleNext} onBack={handleBack} />}
            </>
          )}
        </div>
        <button onClick={reset} className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full z-50 transition-colors"><X className="w-5 h-5" /></button>
      </div>

      <style jsx global>{`
        .input-field-optimized { width: 100%; padding: 1rem 1rem 1rem 3rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; outline: none; transition: 0.2s; }
        .input-field-optimized:focus { border-color: var(--color-primary); background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .btn-nav { background: var(--color-primary); color: white; font-weight: bold; padding: 0.75rem 2rem; border-radius: 9999px; display: flex; align-items: center; gap: 0.5rem; transition: 0.2s; cursor: pointer; }
        .btn-nav:active { scale: 0.95; }
        .input-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); width: 1.25rem; height: 1.25rem; color: #64748b; transition: 0.2s; }
        .group:focus-within .input-icon { color: var(--color-primary); }
      `}</style>
    </div>,
    document.body
  );
}
