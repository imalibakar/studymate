import React from "react";
import { CORE_VALUES } from "@/data/platformData";

export default function ValuesSection() {
  return (
    <section className="py-space-2xl md:py-space-3xl bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-sage border border-secondary-fixed-dim/50 text-primary mb-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-semibold">
              ETHICAL FOUNDATIONS
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary font-medium mb-4">
            Built Upon Sacred Principles
          </h2>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            Every layer of this initiative is guided by four timeless values
            that protect the dignity of sacred knowledge.
          </p>
        </div>

        {/* 4 Cards Grid - Clean, continuous, properly spaced, no line distortions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val) => (
            <div
              key={val.number}
              className="bg-surface-white p-7 rounded-xl border border-border-subtle shadow-sm hover:border-tertiary-fixed-dim/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-tertiary-fixed-dim text-xl font-bold mb-2">
                  {val.number}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-medium mb-3">
                  {val.title}
                </h3>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
