import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-4 py-2 rounded-full font-medium transition-colors focus:outline-none";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:active:bg-primary-600",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-800",
    outline:
      "border border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-800 dark:active:bg-gray-700",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
