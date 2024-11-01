import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `relative inline-flex transition-all duration-500 after:content-[""] after:duration-500 after:transition-all after:bg-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left`,
  {
    variants: {
      variant: {
        default: `after:scale-x-0 after:bg-opacity-100 hover:after:scale-x-100 hover:after:bg-opacity-20`,
        secondary: `after:scale-x-100 after:bg-opacity-100 hover:after:scale-x-50 hover:after:bg-opacity-50`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
