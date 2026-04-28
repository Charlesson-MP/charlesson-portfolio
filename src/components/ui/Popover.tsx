/**
 * Popover Component
 *
 * Reusable popover abstraction built on top of Radix UI primitives.
 * Provides accessible, click-triggered contextual information.
 *
 * Responsibilities:
 * - Handle click/tap interactions for desktop and mobile
 * - Provide smooth animations and consistent styling
 * - Ensure accessibility with focus management and ARIA roles
 *
 * Usage:
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <button>Click me</button>
 *   </PopoverTrigger>
 *   <PopoverContent>Popover content</PopoverContent>
 * </Popover>
 *
 * Notes:
 * - Replaces Tooltip for scenarios requiring "click-to-open" behavior (e.g., Mobile UX)
 */

"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        role="dialog"
        className={cn(
          "bg-card text-card-foreground z-50 w-72 max-w-[90vw] rounded-md border border-border p-4 shadow-md outline-none",
          "animate-in fade-in-0 zoom-in-95 duration-200 ease-out",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        {children}

        <PopoverPrimitive.Arrow 
          width={12} 
          height={6} 
          className="fill-card stroke-border stroke-[2px] drop-shadow-sm" 
        />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

export { Popover, PopoverTrigger, PopoverContent };
