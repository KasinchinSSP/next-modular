import type { ModuleKey } from "@pkg/modules";

type Block = { key: ModuleKey; props: Record<string, unknown> };

const home: Block[] = [
  {
    key: "hero",
    props: {
      title: "NextModular — Web A",
      subtitle: process.env.NEXT_PUBLIC_BRAND,
    },
  },
];

export default home;
