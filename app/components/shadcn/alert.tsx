import type { VariantProps } from "class-variance-authority"

import * as React from "react"

import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
   "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
   {
      defaultVariants: {
         variant: "default",
      },
      variants: {
         variant: {
            default: "bg-background text-foreground",
            destructive:
               "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
            warning:
               " border-yellow-700 text-yellow-700 dark:border-yellow-500 dark:text-yellow-500 [&>svg]:text-yellow-700 dark:[&>svg]:text-yellow-500",
         },
      },
   },
)

const Alert = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
   <div
      ref={ref}
      className={cn(alertVariants({ variant }), className)}
      role="alert"
      {...props}
   />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
   />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
   />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription, AlertTitle }
