import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

type HeadingProps<TElement extends ElementType = HeadingLevel> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  size?: HeadingSize;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-5xl leading-[0.95] sm:text-6xl lg:text-7xl",
  xl: "text-4xl leading-tight sm:text-5xl lg:text-6xl",
  lg: "text-3xl leading-tight sm:text-4xl",
  md: "text-2xl leading-snug sm:text-3xl",
  sm: "text-xl leading-snug sm:text-2xl",
};

export function Heading<TElement extends ElementType = "h2">({
  as,
  children,
  className,
  size = "xl",
  ...props
}: HeadingProps<TElement>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cn("font-heading font-medium tracking-normal text-primary", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
