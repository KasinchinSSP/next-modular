import type { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center rounded-md border px-4 py-2 text-sm " +
        (props.className ?? "")
      }
    />
  );
}
