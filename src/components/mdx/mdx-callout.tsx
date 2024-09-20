import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "primary" | "warning" | "danger"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-l-cyan-700 bg-cyan-50 dark:bg-cyan-900/5": type === "primary",
        "border-l-red-900 bg-red-50 dark:bg-red-900/5": type === "danger",
        "border-l-yellow-900 bg-yellow-50 dark:bg-yellow-900/5": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}