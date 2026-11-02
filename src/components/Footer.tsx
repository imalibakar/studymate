import React from "react";
import Image from "next/image";
import { BRAND_ASSETS, NAV_LINKS } from "@/data/platformData";

export default function Footer() {
  return (
    <footer className="w-full bg-forest-dark text-surface border-t border-forest-dark/40">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl flex flex-col md:flex-row justify-between items-center gap-space-lg">
        {/* Brand & Mission statement */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            aria-label="StudyMate Home"
            className="flex items-center gap-3"
          >
            <div className="relative h-9 w-9">
              <Image
                src={BRAND_ASSETS.logo}
                alt="StudyMate Logo"
                fill
                sizes="36px"
                className="object-contain brightness-110"
              />
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-surface-white">
              StudyMate
            </span>
          </a>
          <p className="font-body-sm text-body-sm text-surface-variant/80">
            Learn Deen. Grow with Knowledge.
          </p>
        </div>

        {/* Footer Anchor Links */}
        <nav
          aria-label="Footer Links"
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body-sm text-body-sm text-surface-variant/80 hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="font-body-sm text-body-sm text-surface-variant/80 hover:text-surface transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-body-sm text-body-sm text-surface-variant/80 hover:text-surface transition-colors duration-200"
          >
            Terms of Service
          </a>
        </nav>

        {/* Copyright Note */}
        <div className="font-body-sm text-body-sm text-surface-variant/60 text-center md:text-right">
          © {new Date().getFullYear()} StudyMate. Online Islamic Learning Initiative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
