import React, { Key } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  overlayClassName?: string;
  key?: Key;
}

export function Slide({ children, className, bgImage, overlayClassName }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn("w-full h-full flex flex-col justify-center relative", className)}
    >
      {bgImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={cn("absolute inset-0 bg-nt-bg/90 backdrop-blur-sm", overlayClassName)} />
        </div>
      )}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-12 flex flex-col h-full justify-center">
        {children}
      </div>
    </motion.div>
  );
}

export function SlideHeader({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) {
  return (
    <div className="mb-10 text-right">
      {badge && <div className="mb-6 inline-block py-1 px-3 bg-nt-border border border-nt-border-dark rounded text-[10px] uppercase tracking-widest text-nt-muted">{badge}</div>}
      <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight text-nt-dark mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-nt-muted max-w-2xl leading-relaxed font-medium italic">{subtitle}</p>}
    </div>
  );
}

export function SlideControls({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  themeColor
}: { 
  currentSlide: number, 
  totalSlides: number, 
  onNext: () => void, 
  onPrev: () => void,
  themeColor: string 
}) {
  return (
    <div className="absolute bottom-8 left-0 w-full flex justify-between items-center px-8 sm:px-16 z-50">
      <div className="flex gap-2">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`p-3 rounded bg-white shadow-sm border border-nt-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-nt-bg text-${themeColor}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded bg-white shadow-sm border border-nt-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-nt-bg text-${themeColor}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>

      <div className="flex gap-2" dir="ltr">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={cn("h-1.5 rounded-full transition-all duration-300", i === currentSlide ? `w-8 bg-${themeColor}` : "w-2 bg-nt-border border border-nt-border-dark")}
          />
        ))}
      </div>
    </div>
  );
}
