import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const fillColor = variant === "light" ? "#ffffff" : "#2563eb"
  
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pizza slice shape */}
      <path
        d="M50 10 L85 80 Q50 95 15 80 Z"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="2"
      />
      {/* Fork prongs */}
      <path
        d="M35 25 L35 45 M45 20 L45 45 M55 20 L55 45 M65 25 L65 45"
        stroke={variant === "light" ? "#2563eb" : "#ffffff"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Fork handle */}
      <path
        d="M50 45 L50 75"
        stroke={variant === "light" ? "#2563eb" : "#ffffff"}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Decorative dots (toppings) */}
      <circle cx="40" cy="60" r="4" fill={variant === "light" ? "#2563eb" : "#ffffff"} />
      <circle cx="55" cy="55" r="3" fill={variant === "light" ? "#2563eb" : "#ffffff"} />
      <circle cx="60" cy="68" r="4" fill={variant === "light" ? "#2563eb" : "#ffffff"} />
    </svg>
  )
}
