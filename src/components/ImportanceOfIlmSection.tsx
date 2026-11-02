import React from "react";
import { ILM_PILLARS } from "@/data/platformData";
import MaterialIcon from "@/components/MaterialIcon";

export default function ImportanceOfIlmSection() {
  return (
    <section
      id="importance-of-ilm"
      className="py-space-2xl md:py-space-3xl bg-surface-container-low border-y border-border-subtle relative"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold-light border border-tertiary-fixed-dim/50 text-tertiary mb-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest font-semibold">
              THE VALUE OF KNOWLEDGE
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary mb-4 font-medium">
            Ilm is the Light That Guides Us
          </h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-text-secondary leading-relaxed">
            In Islam, seeking knowledge is not merely an academic endeavor—it is
            a sacred obligation and a path toward spiritual clarity. It
            illuminates understanding, cultivates righteous character, and
            safeguards sacred wisdom for future generations.
          </p>
        </div>

        {/* Sacred Quranic Verse Centerpiece Panel */}
        <div className="max-w-4xl mx-auto bg-forest-dark text-surface-bright rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-lg border border-tertiary-fixed-dim/40">
          {/* Geometric Background Ornamentation */}
          <div className="absolute inset-0 arabesque-subtle opacity-20 pointer-events-none"></div>

          {/* Inner Double Hairline Frame */}
          <div className="relative z-10 border border-tertiary-fixed-dim/30 rounded-xl p-6 md:p-10 text-center">
            <div className="flex justify-center mb-6">
              <MaterialIcon
                name="auto_stories"
                size={36}
                className="text-tertiary-fixed"
              />
            </div>

            {/* Arabic Calligraphy with RTL */}
            <div
              className="font-arabic text-3xl sm:text-4xl md:text-5xl leading-loose font-normal text-surface-white mb-6 tracking-wide drop-shadow-sm"
              dir="rtl"
              lang="ar"
            >
              رَبِّ زِدْنِي عِلْمًا
            </div>

            {/* Ornamental Gold Divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-16 h-px bg-tertiary-fixed-dim/40"></div>
              <span className="text-tertiary-fixed text-sm">✦</span>
              <div className="w-16 h-px bg-tertiary-fixed-dim/40"></div>
            </div>

            {/* Translation */}
            <p className="font-quran-verse-mobile md:font-quran-verse text-lg md:text-2xl text-accent-gold-light italic max-w-xl mx-auto leading-relaxed mb-3">
              “My Lord, increase me in knowledge.”
            </p>

            {/* Citation */}
            <div className="font-label-button text-label-button text-tertiary-fixed uppercase tracking-wider text-xs md:text-sm">
              Surah Taha • 20:114
            </div>
          </div>
        </div>

        {/* Three Reflective Pillars Beneath Verse */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {ILM_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-white p-6 rounded-xl border border-border-subtle hover:border-tertiary-fixed-dim/50 transition-all duration-200 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-surface-sage flex items-center justify-center text-primary mb-4">
                <MaterialIcon name={pillar.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2 font-medium">
                {pillar.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
