import type { Block } from "@pkg/modules";

const home: Block[] = [
  {
    key: "hero",
    props: {
      title: "NextModular — Web A",
      subtitle: process.env.NEXT_PUBLIC_BRAND,
    },
  },
  {
    key: "feature-list",
    props: {
      title: "Why choose A",
      items: ["Fast", "Reliable", "Customizable"],
    },
  },
];

export default home;
