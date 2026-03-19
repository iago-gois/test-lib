import { cn } from "@/lib/cn";
import * as ToastPrimitive from "@radix-ui/react-toast";
import * as React from "react";

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    ref={ref}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    className={cn(
      "group pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border border-[var(--ui-color-border)] bg-[var(--ui-color-surface)] p-4 text-[var(--ui-color-fg)] shadow-lg",
      className
    )}
    ref={ref}
    {...props}
  />
));

Toast.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title className={cn("text-sm font-semibold", className)} ref={ref} {...props} />
));

ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    className={cn("text-sm opacity-80", className)}
    ref={ref}
    {...props}
  />
));

ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    className={cn(
      "inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-color-primary)]",
      className
    )}
    ref={ref}
    toast-close=""
    {...props}
  >
    x
  </ToastPrimitive.Close>
));

ToastClose.displayName = ToastPrimitive.Close.displayName;

export { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport };
