"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND_ASSETS, NAV_LINKS } from "@/data/platformData";
import MaterialIcon from "@/components/MaterialIcon";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="docked full-width top-0 sticky z-50 bg-surface/85 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between h-20">
          {/* Brand Logo / Product Name */}
          <a
            href="#hero"
            aria-label="StudyMate Home"
            className="flex items-center gap-3 transition-transform duration-200 active:scale-95 group"
          >
            <div className="relative h-10 w-10">
              <Image
                src={BRAND_ASSETS.logo}
                alt="StudyMate Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight hidden sm:inline-block">
              StudyMate
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-label-button text-label-button transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-medium border-b-2 border-tertiary-fixed-dim pb-1"
                      : "text-text-secondary font-normal hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-4">
            <a
              href="#our-vision"
              className="hidden md:inline-flex items-center justify-center bg-primary-container hover:bg-forest-dark text-on-primary font-label-button text-label-button px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95 shadow-sm border border-tertiary-fixed-dim/20"
            >
              Explore Our Vision
            </a>

            {/* Mobile Menu Trigger */}
            <button
              id="openMobileDrawerBtn"
              type="button"
              aria-label="Open Navigation Menu"
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-2 text-primary hover:bg-surface-sage rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim"
            >
              <MaterialIcon name="menu" size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        id="mobileDrawerOverlay"
        aria-hidden={!isDrawerOpen}
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 bg-forest-dark/50 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          id="mobileDrawerPanel"
          onClick={(e) => e.stopPropagation()}
          className={`fixed inset-y-0 right-0 w-80 max-w-full z-50 bg-surface border-l border-border-subtle shadow-lg transition-transform duration-300 ease-out flex flex-col h-full p-6 justify-between ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9">
                  <Image
                    src={BRAND_ASSETS.logo}
                    alt="StudyMate emblem rosette"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm font-bold text-primary">
                    StudyMate
                  </div>
                  <p className="font-body-sm text-body-sm text-text-secondary">
                    Online Islamic Learning Initiative
                  </p>
                </div>
              </div>
              <button
                id="closeMobileDrawerBtn"
                aria-label="Close navigation menu"
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 text-text-secondary hover:text-primary rounded-lg transition-colors"
              >
                <MaterialIcon name="close" size={22} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav aria-label="Mobile Navigation" className="mt-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-lg font-label-button text-label-button transition-colors ${
                      isActive
                        ? "bg-surface-sage text-primary font-medium"
                        : "text-text-secondary font-normal hover:bg-surface-container-high hover:text-text-primary"
                    }`}
                  >
                    {link.icon && (
                      <MaterialIcon
                        name={link.icon}
                        size={20}
                        className={isActive ? "text-primary" : "text-text-secondary"}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Drawer Bottom CTA */}
          <div className="pt-6 border-t border-border-subtle">
            <a
              href="#our-vision"
              onClick={() => setIsDrawerOpen(false)}
              className="mobile-nav-link w-full inline-flex items-center justify-center bg-primary-container hover:bg-forest-dark text-on-primary font-label-button text-label-button py-3 px-4 rounded-lg shadow-sm transition-all"
            >
              Explore Our Vision
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
