import React from "react";
import Image from "next/image";
import { BRAND_ASSETS } from "@/data/platformData";
import MaterialIcon from "@/components/MaterialIcon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-space-2xl md:pt-16 md:pb-space-3xl overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-desktop items-center">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-sage border border-secondary-fixed-dim/40 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-semibold">
                A JOURNEY OF KNOWLEDGE &amp; FAITH
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary leading-tight font-medium">
              Every Journey of Faith Begins with Knowledge.
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed">
              Our vision is to make meaningful Islamic education accessible to
              children and adults, helping every learner grow in knowledge,
              understanding, and faith.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#our-vision"
                className="inline-flex items-center justify-center bg-primary-container hover:bg-forest-dark text-on-primary font-label-button text-label-button px-7 py-3.5 rounded-lg shadow-sm transition-all duration-200 active:scale-95 group"
              >
                <span>Discover Our Vision</span>
                <MaterialIcon
                  name="arrow_forward"
                  size={18}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#founders"
                className="inline-flex items-center justify-center bg-transparent hover:bg-surface-sage/60 text-primary border border-primary-container font-label-button text-label-button px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                Meet Our Founders
              </a>
            </div>

            {/* Gentle reassurance footnotes */}
            <div className="pt-4 flex items-center gap-6 text-text-secondary border-t border-border-subtle w-full">
              <div className="flex items-center gap-2">
                <MaterialIcon
                  name="verified"
                  size={18}
                  className="text-tertiary-fixed-dim"
                />
                <span className="font-body-sm text-body-sm">
                  Scholarly Authenticity
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon
                  name="favorite"
                  size={18}
                  className="text-tertiary-fixed-dim"
                />
                <span className="font-body-sm text-body-sm">
                  Gentle Pedagogy
                </span>
              </div>
            </div>
          </div>

          {/* Hero Media Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Rosette Ambient Glow */}
            <div className="absolute -inset-4 bg-accent-gold-light/40 rounded-full blur-2xl -z-10 transform scale-95 pointer-events-none"></div>

            {/* Arch Media Frame */}
            <div className="relative w-full max-w-md p-2 rounded-[268px_268px_20px_20px] bg-surface-white border border-border-subtle shadow-md">
              <div className="relative overflow-hidden arch-mask border border-tertiary-fixed-dim/30 bg-surface-container h-[440px] md:h-[480px]">
                <Image
                  src={BRAND_ASSETS.heroImage}
                  alt="Open Noble Quran displayed gracefully upon a carved wooden rihal stand alongside an antique brass lantern illuminating a tranquil study setting"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                />
                {/* Subtle Top Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Reassurance Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-xs bg-surface-white/95 backdrop-blur-md border border-border-subtle px-4 py-2.5 rounded-full shadow-md text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <p className="font-body-sm text-body-sm text-text-primary font-medium tracking-wide">
                  Authentic • Sincere • Lifelong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
