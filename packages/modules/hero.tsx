import { Button } from "@pkg/ui";

export type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
};

export function Hero({ title, subtitle, ctaText = "Get Started" }: HeroProps) {
  return (
    <section className="py-12">
      <div className="max-w-[960px] mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="opacity-70 mt-2">{subtitle}</p>}
        <div className="mt-4">
          <Button>{ctaText}</Button>
        </div>
      </div>
    </section>
  );
}
