import * as React from "react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variantClasses =
      variant === "outline"
        ? "border border-slate-600 bg-transparent text-white hover:bg-slate-800"
        : "bg-cyan-500 text-slate-950 hover:bg-cyan-400";

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-2xl px-8 py-6 text-lg font-medium transition ${variantClasses} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
