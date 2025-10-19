import type { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center text-sm",
        "px-3 py-2",
        "rounded-[var(--nm-radius-md)]",
        "text-[color:var(--nm-fg)]",
        "bg-[color:var(--nm-primary)]",
        "border border-[color:var(--nm-border)]",
        "hover:brightness-110 active:brightness-95",
        "transition",
        props.className ?? "",
      ].join(" ")}
    />
  );
}
