import React from "react";
import Image from "next/image";
import { FOUNDERS } from "@/data/platformData";
import MaterialIcon from "@/components/MaterialIcon";

export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="py-space-2xl md:py-space-3xl bg-surface-container-low border-y border-border-subtle relative"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold-light border border-tertiary-fixed-dim/50 text-tertiary mb-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest font-semibold">
              THE PEOPLE BEHIND THE VISION
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary font-medium mb-3">
            The People Behind StudyMate
          </h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-text-secondary leading-relaxed">
            Two individuals, one shared vision — making Islamic knowledge more
            accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="bg-surface-white rounded-2xl p-8 lg:p-10 border border-border-subtle shadow-sm hover:shadow-md hover:border-tertiary-fixed-dim/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div>
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-tertiary-fixed-dim/50 shadow-sm">
                      <Image
                        src={founder.image}
                        alt={founder.imageAlt}
                        fill
                        sizes="(max-width: 768px) 128px, 144px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-primary font-medium">
                    {founder.name}
                  </h3>
                  <p className="font-label-button text-label-button text-secondary font-medium mt-1">
                    {founder.role}
                  </p>
                </div>

                <blockquote className="font-body-md md:font-body-lg text-text-primary italic border-l-2 border-tertiary-fixed-dim pl-4 leading-relaxed">
                  {founder.quote}
                </blockquote>

                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between text-caption text-caption text-text-secondary">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  {founder.badge}
                </span>
                <span className="font-medium text-primary">
                  StudyMate Initiative
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#our-vision"
            className="inline-flex items-center justify-center bg-primary-container hover:bg-forest-dark text-on-primary font-label-button text-label-button px-7 py-3 rounded-lg shadow-sm transition-all duration-200 active:scale-95"
          >
            <span>Discover Our Vision</span>
            <MaterialIcon
              name="arrow_forward"
              size={16}
              className="ml-2 text-on-primary"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
