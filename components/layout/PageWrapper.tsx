import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={cn("min-h-screen bg-background text-foreground", className)}>
      {children}
    </main>
  );
}
