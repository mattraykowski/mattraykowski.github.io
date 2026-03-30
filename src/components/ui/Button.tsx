import { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-highlight/10 text-highlight border border-highlight hover:bg-highlight/20",
  secondary:
    "border border-border text-text-muted hover:border-highlight hover:text-highlight",
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 font-mono text-sm font-medium transition-colors ${styles[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
