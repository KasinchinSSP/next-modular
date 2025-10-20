import { Hero, type HeroProps } from "./hero";
import { FeatureList, type FeatureListProps } from "./feature-list";

export type Block =
  | { key: "hero"; props: HeroProps }
  | { key: "feature-list"; props: FeatureListProps };

export const modules = {
  hero: { component: Hero },
  "feature-list": { component: FeatureList },
} as const;
