import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { images, whyChooseUs } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SewPro Kenya | Sewing Machine Specialists" },
      {
        name: "description",
        content:
          "SewPro Kenya has supplied and serviced domestic and industrial sewing machines since 2013, with over 500 customers from home sewers to garment factories.",
      },
      { property: "og:title", content: "About SewPro Kenya | Sewing Machine Specialists" },
      {
        property: "og:description",
        content: "Genuine machines, expert technicians and honest advice since 2013.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2013", text: "Opened a two-bench repair shop on Kirinyaga Road." },
  { year: "2017", text: "Became a stockist for Juki, Jack and Siruba machines." },
  { year: "2021", text: "Launched countrywide delivery and factory maintenance contracts." },
  { year: "2026", text: "Serving 500+ customers with a full parts and training department." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Sewing Machine Specialists Since 2013"
        description="We started as a two-bench repair shop in Nairobi. Today we supply, install and service machines for tailors, fashion houses, schools and garment factories across Kenya."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Visit Our Showroom</Link>
        </Button>
      </PageHero>

      <section className="shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.jukiRow}
              alt="Rows of new industrial sewing machines in the SewPro Kenya warehouse"
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our promise</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Advice first, then the right machine
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Most people who walk in are about to buy more machine than they need — or far too
              little. We ask what fabric you sew, how many pieces a day and what your budget is,
              then recommend accordingly. If a refurbished machine will serve you better than a new
              one, we will say so.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Technicians on staff, not subcontracted",
                "Refurbished stock rebuilt in-house",
                "Warranty on every machine sold",
                "Parts kept for the machines we sell",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="shell">
          <SectionHeading eyebrow="Our story" title="How We Got Here" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 90} as="li" className="h-full">
                <div className="card-surface h-full p-6 hover-lift">
                  <span className="font-display text-2xl font-extrabold text-secondary">
                    {milestone.year}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {milestone.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-20">
        <SectionHeading eyebrow="Why choose us" title="What Sets Us Apart" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 4) * 80} className="h-full">
              <article className="card-surface flex h-full flex-col p-6 hover-lift">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name={reason.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="shell">
          <SectionHeading eyebrow="Customer stories" title="In Their Own Words" />
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
}
