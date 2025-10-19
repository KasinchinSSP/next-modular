import * as React from "react";
import { modules } from "./registry";

type AnyBlock = { key: keyof typeof modules; props: Record<string, unknown> };

export function RenderPage({ config }: { config: AnyBlock[] }) {
  return (
    <>
      {config.map((blk, i) => {
        const entry = modules[blk.key];
        if (!entry) return null;
        const Cmp = entry.component as any;
        return <Cmp key={i} {...blk.props} />;
      })}
    </>
  );
}
