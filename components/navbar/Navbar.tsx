"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { NAVIGATION, SALON_NAME } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sectionIds = NAVIGATION.map((item) => item.href).filter((href) =>
      href.startsWith("#")
    );
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const anchor = window.scrollY + window.innerHeight * 0.34;
      const current =
        sectionIds.findLast((href) => {
          const section = document.querySelector(href);
          return section instanceof HTMLElement && section.offsetTop <= anchor;
        }) ?? "#home";

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkTone = isScrolled || isOpen ? "text-primary" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled || isOpen
          ? "border-border/80 bg-background/95 backdrop-blur-xl"
          : "border-white/10 bg-transparent"
      )}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-sm focus:bg-background focus:px-5 focus:py-3 focus:text-primary"
      >
        Skip to home
      </a>
      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center px-5 transition-[height] duration-500 ease-out sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12",
          isScrolled || isOpen ? "h-[4.35rem]" : "h-20"
        )}
      >
        <a
          href="#home"
          className={cn(
            "font-heading text-2xl font-medium tracking-normal transition-[color,transform] duration-500 ease-out",
            isScrolled || isOpen ? "scale-[0.94]" : "scale-100",
            linkTone
          )}
          aria-label={`${SALON_NAME} home`}
          onClick={() => setIsOpen(false)}
        >
          {SALON_NAME}
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center justify-center gap-9">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-active={activeSection === item.href}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={cn(
                    "premium-link text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-[color,opacity] duration-500 hover:text-gold",
                    linkTone,
                    activeSection === item.href && "text-gold"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden justify-end lg:flex">
          <a
            href="#contact"
          className={cn(
              "premium-button inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-xs font-semibold uppercase tracking-[0.18em]",
              isScrolled
                ? "border-primary bg-primary text-primary-foreground hover:bg-primary/85"
                : "border-white/55 text-white hover:border-white hover:bg-white hover:text-primary"
            )}
          >
            Book Appointment
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
            className={cn(
            "premium-button inline-flex size-11 items-center justify-center rounded-md border lg:hidden",
            isScrolled || isOpen
              ? "border-border bg-card text-primary"
              : "border-white/45 text-white"
          )}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid max-h-[calc(100svh-4.35rem)] overflow-y-auto border-t border-border/70 bg-background transition-[grid-template-rows] duration-500 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="min-h-0" aria-label="Mobile navigation">
          <ul className="space-y-1 px-5 py-6 sm:px-6 sm:py-8">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-active={activeSection === item.href}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className="premium-link flex items-center justify-between border-b border-border/70 py-3.5 font-heading text-2xl text-primary sm:py-4 sm:text-3xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" className="size-4 text-gold" />
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-6 sm:px-6 sm:pb-8">
            <a
              href="#contact"
              className="premium-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
