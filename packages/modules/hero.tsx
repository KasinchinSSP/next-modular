import * as React from "react";
import { Button } from "@pkg/ui/button";

type HeroProps = { title: string; subtitle?: string; ctaText?: string };

export function Hero({ title, subtitle, ctaText = "Get Started" }: HeroProps) {
  return (
    <section style={{ padding: "48px 0" }}>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 36, fontWeight: 700 }}>{title}</h1>
        {subtitle && <p style={{ opacity: 0.7, marginTop: 8 }}>{subtitle}</p>}
        <div style={{ marginTop: 16 }}>
          <Button>{ctaText}</Button>
        </div>
      </div>
    </section>
  );
}
