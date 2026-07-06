import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionSpacing = "default" | "compact" | "spacious";

type SectionProps<TElement extends ElementType = "section"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-14 sm:py-20",
  default: "py-18 sm:py-28 lg:py-32",
  spacious: "py-20 sm:py-32 lg:py-40",
};

export function Section<TElement extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "default",
  ...props
}: SectionProps<TElement>) {
  const Component = as ?? "section";

  return (
    <Component className={cn(spacingClasses[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
