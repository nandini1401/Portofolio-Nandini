import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground shadow-elevation-medium hover:shadow-glow hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elevation-low hover:shadow-elevation-medium",
        outline: "border border-glass-border glass hover:shadow-elevation-low hover:scale-105",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-elevation-medium hover:shadow-purple-glow hover:scale-105 hover:-translate-y-1 active:scale-95",
        ghost: "hover:glass hover:shadow-elevation-low hover:scale-105",
        link: "text-gradient underline-offset-4 hover:underline hover:scale-105",
        hero: "bg-gradient-primary text-primary-foreground shadow-glow text-lg font-semibold px-8 py-4 hover:shadow-elevation-high hover:scale-110 hover:-translate-y-2 active:scale-95 relative overflow-hidden",
        glass: "glass text-foreground backdrop-blur-xl border border-glass-border/30 hover:border-glass-border/50 hover:shadow-elevation-medium hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
