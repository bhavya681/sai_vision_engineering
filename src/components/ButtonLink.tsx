import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

const variants = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  dark: "btn btn-dark",
  ghost: "btn btn-ghost",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
