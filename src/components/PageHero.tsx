import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand text-primary-foreground">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-80 rounded-full bg-secondary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-80 rounded-full bg-primary-foreground/10 blur-3xl"
      />
      <div className="shell relative py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-secondary">{eyebrow}</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
