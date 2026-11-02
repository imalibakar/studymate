import React from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function VisionSection() {
  return (
    <section
      id="our-vision"
      className="py-space-2xl md:py-space-3xl bg-forest-dark text-surface relative overflow-hidden isolate"
    >
      {/* Watermark Islamic Arabesque Background Pattern */}
      <div className="absolute inset-0 arabesque-subtle opacity-15 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/40 border border-tertiary-fixed-dim/40 text-tertiary-fixed">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest font-semibold">
                OUR VISION
              </span>
            </div>

            <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-surface-white font-medium leading-tight">
              Making Islamic Learning Accessible to Everyone
            </h2>

            <p className="font-body-lg text-body-lg text-surface-variant leading-relaxed">
              StudyMate is being built around a simple vision: to help make
              Islamic learning more approachable for children and adults. We
              hope to create a learning environment where knowledge is shared
              with care, teachers are treated with respect, and learners can grow
              at a steady pace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-surface/5 border border-surface/10">
                <MaterialIcon
                  name="check_circle"
                  size={20}
                  className="text-tertiary-fixed-dim mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-label-button text-label-button text-surface-white font-medium">
                    Reverence &amp; Care
                  </h4>
                  <p className="font-body-sm text-body-sm text-surface-variant/80 mt-1">
                    Honoring sacred tradition with contemporary clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-surface/5 border border-surface/10">
                <MaterialIcon
                  name="check_circle"
                  size={20}
                  className="text-tertiary-fixed-dim mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-label-button text-label-button text-surface-white font-medium">
                    Gentle Pacing
                  </h4>
                  <p className="font-body-sm text-body-sm text-surface-variant/80 mt-1">
                    Nurturing steady consistency over hurried memorization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Quote Card Right (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-surface/5 backdrop-blur-sm border border-tertiary-fixed-dim/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed mb-6">
                <MaterialIcon
                  name="format_quote"
                  size={24}
                  className="text-tertiary-fixed"
                />
              </div>
              <blockquote className="font-headline-sm text-headline-sm text-surface-white font-normal italic leading-relaxed mb-6">
                “Knowledge shared with patience, reverence, and clarity
                transforms not only what a learner knows, but who they become.”
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-surface/10">
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></div>
                <span className="font-label-button text-label-button text-tertiary-fixed tracking-wider uppercase text-xs">
                  The Core Tenet of StudyMate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
