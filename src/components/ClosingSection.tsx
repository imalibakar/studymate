import React from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function ClosingSection() {
  return (
    <section className="py-space-2xl md:py-space-3xl bg-forest-dark text-surface relative overflow-hidden isolate">
      {/* Radial Gold Gradient Illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tertiary-container/30 via-transparent to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-margin md:px-margin-tablet text-center relative z-10 space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full bg-surface-white/10 flex items-center justify-center text-tertiary-fixed">
          <MaterialIcon name="spa" size={26} className="text-tertiary-fixed" />
        </div>

        <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-surface-white font-medium leading-tight">
          Knowledge Is a Journey Worth Beginning.
        </h2>

        <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto leading-relaxed">
          Explore the vision behind StudyMate and join us in our hope to make
          authentic Islamic learning accessible to hearts and homes across the
          globe.
        </p>

        <div className="pt-4">
          <a
            href="#our-vision"
            className="inline-flex items-center justify-center bg-accent-gold-light hover:bg-tertiary-fixed text-forest-dark font-label-button text-label-button px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 active:scale-95 font-semibold"
          >
            Back to Our Vision
          </a>
        </div>
      </div>
    </section>
  );
}
