import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        novasce: 'rounded-full w-[300px] bg-[#00666C] text-white transition-all duration-700 hover:bg-[#65c0ba] hover:scale-110 hover:border hover:border-[#00666C]',
        novasce_secondary: 'rounded-full bg-white text-[#00666C] transition-all duration-700 hover:scale-[1.1]',
        novasce_tertiary: 'rounded-3xl uppercase bg-[#00666C] text-white text-md lg:text-2xl font-bold w-[400px] transition-transform duration-500 hover:scale-105 hover:shadow-lg',
        blue_btn_novasce: 'rounded-2xl text-center bg-[#102032] w-[300px] lg:w-[400px] text-white font-medium text-xl transition-all duration-500 cursor-pointer hover:bg-transparent hover:border-1 hover:scale-[1.1] hover:shadow-lg',
        novasce_outline: 'text-deep_blue bg-transparent transition-all duration-700 hover:text-petroleum_green hover:scale-[1.1] text-md '
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
