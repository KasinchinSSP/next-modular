import * as React from "react";
import { modules, type Block } from "@pkg/modules";

export function RenderPage({ config }: { config: Block[] }) {
  return (
    <>
      {config.map((blk, i) => {
        const entry = modules[blk.key];
        const Cmp = entry.component as any;
        return <Cmp key={i} {...blk.props} />;
      })}
    </>
  );
}
