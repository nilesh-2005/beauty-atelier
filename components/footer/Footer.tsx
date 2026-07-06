import { Camera } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ADDRESS, NAVIGATION, SALON_NAME, SOCIAL_LINKS, TAGLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <Container>
        <Reveal y={14}>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
            <div>
              <a href="#home" className="premium-link font-heading text-3xl text-primary">
                {SALON_NAME}
              </a>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {TAGLINE}
              </p>
              <div className="mt-8 flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href || "#home"}
                    aria-label={link.label}
                    className="flex size-10 items-center justify-center border border-border text-primary transition-transform duration-300 ease-out motion-safe:hover:rotate-[5deg]"
                  >
                    <Camera aria-hidden="true" className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="premium-link text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="max-w-xs not-italic text-sm leading-7 text-muted-foreground">
              {ADDRESS.lines.slice(0, 4).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {ADDRESS.city}, {ADDRESS.region}
              </span>
            </address>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:flex-row">
            <p>© 2026 {SALON_NAME}</p>
            <p>Luxury beauty care in Jaipur</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
