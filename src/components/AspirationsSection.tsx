import React from "react";
import { BENTO_FEATURES } from "@/data/platformData";
import MaterialIcon from "@/components/MaterialIcon";

export default function AspirationsSection() {
  return (
    <section className="py-space-2xl md:py-space-3xl bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-sage border border-secondary-fixed-dim/50 text-primary mb-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-semibold">
              ASPIRATIONS FOR THE PLATFORM
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary font-medium mb-4">
            What We Hope to Support
          </h2>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            Our blueprint focuses on building enduring educational foundations
            that nurture sincere understanding at every stage of life.
          </p>
        </div>

        {/* 4 Responsive Cards Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENTO_FEATURES.map((item) => (
            <div
              key={item.title}
              className="bg-surface-white p-7 rounded-xl border border-border-subtle hover:border-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-sage flex items-center justify-center text-primary mb-5">
                  <MaterialIcon
                    name={item.icon}
                    size={26}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-medium mb-3">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center text-primary font-label-button text-label-button">
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
