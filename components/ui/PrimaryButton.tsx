import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type PrimaryButtonProps<TElement extends ElementType = "button"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function PrimaryButton<TElement extends ElementType = "button">({
  as,
  children,
  className,
  ...props
}: PrimaryButtonProps<TElement>) {
  const Component = as ?? "button";

  return (
    <Component
      className={cn(
        "premium-button inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground hover:bg-primary/85 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
