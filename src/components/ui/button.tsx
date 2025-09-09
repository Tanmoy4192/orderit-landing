// src/components/ui/button.tsx
"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
};

export function Button({
  children,
  className,
  size = "md",
  variant = "default",
}: ButtonProps) {
  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses: Record<string, string> = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      className={clsx(
        "rounded-full transition-shadow shadow-sm",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

// motion-wrapped version for easy hover/press animations.
// Using `as any` to avoid stricter typing friction — safe for UI components.
export const MotionButton = motion(Button as any);
