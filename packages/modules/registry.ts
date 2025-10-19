import { Hero, type HeroProps } from "./hero";

export type ModuleKey = "hero"; // เพิ่มคีย์อื่นเมื่อมีโมดูลใหม่

export type Registry = {
  hero: { component: typeof Hero; props: HeroProps };
};

export const modules: Registry = {
  hero: { component: Hero, props: {} as HeroProps },
};
