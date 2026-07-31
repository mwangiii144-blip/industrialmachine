import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { images, site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "Sewing Machine Repairs in Nairobi & Kenya | SewPro Kenya" },
      {
        name: "description",
        content:
          "Fast sewing machine repairs for Juki, Jack, Siruba, Kansai, Brother and Butterfly machines. Workshop and on-site service with free diagnosis.",
      },
      { property: "og:title", content: "Sewing Machine Repairs in Nairobi & Kenya" },
      {
        property: "og:description",
        content:
          "Free diagnosis, genuine parts and same-day fixes for most common sewing machine faults.",
      },
    ],
  }),
  component: RepairsPage,
});

const faults = [
  { title: "Skipped stitches", text: "Needle, timing or hook wear — usually resolved the same day." },
  { title: "Thread breaking", text: "Tension assembly, burrs on the hook or wrong needle size." },
  { title: "Noisy or hot motor", text: "Bearings, belt tension or a failing clutch motor." },
  { title: "Machine jamming", text: "Bobbin case damage, lint build-up or bent feed dogs." },
  { title: "Uneven feeding", text: "Feed dog height, presser foot pressure and worn parts." },
  { title: "Electrical faults", text: "Pedals, switches, wiring and servo control boards." },
];

const pricing = [
  { title: "Basic Service", price: "KSh 1,500", items: ["Full strip & clean", "Oiling and lubrication", "Tension reset", "Test sewing"] },
  { title: "Full Overhaul", price: "KSh 4,500", items: ["Everything in Basic", "Timing reset", "Worn parts replaced", "3-month workmanship warranty"], featured: true },
  { title: "On-Site Callout", price: "From KSh 2,000", items: ["Technician to your premises", "Nairobi & environs", "Diagnosis included", "Parts quoted separately"] },
];

function RepairsPage() {
  return (
    <>
      <PageHero
        eyebrow="Repairs"
        title="Machine Down? We'll Get You Sewing Again"
        description="Free diagnosis, honest quotes and genuine parts. Most common faults are fixed the same day in our Nairobi workshop, or on site at your factory."
      >
        <Button asChild variant="hero" size="lg">
          <a href={site.phoneHref}>
            <Phone className="size-4" /> Call a Technician
          </a>
        </Button>
        <Button asChild variant="onDark" size="lg">
          <a
            href={whatsappLink(`Hello ${site.name}, my sewing machine has a problem:`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Describe the Fault
          </a>
        </Button>
      </PageHero>

      <section className="shell py-20">
        <SectionHeading
          eyebrow="Common faults"
          title="What We Fix Every Week"
          description="If your machine is doing any of these, it is almost certainly repairable — and usually cheaply."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faults.map((fault, index) => (
            <Reveal key={fault.title} delay={(index % 3) * 90} className="h-full">
              <article className="card-surface h-full p-6 hover-lift">
                <h3 className="font-display text-base font-bold text-foreground">{fault.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fault.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Repair pricing"
            title="Clear Rates, Quoted Up Front"
            description="Labour rates below exclude parts. You always approve the quote before work starts."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <Reveal key={tier.title} delay={index * 100} className="h-full">
                <article
                  className={`card-surface flex h-full flex-col p-7 hover-lift ${
                    tier.featured ? "border-primary/40 ring-2 ring-primary/20" : ""
                  }`}
                >
                  {tier.featured ? (
                    <span className="mb-3 self-start rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-secondary-foreground">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="font-display text-lg font-bold text-foreground">{tier.title}</h3>
                  <p className="mt-2 font-display text-3xl font-extrabold text-primary">{tier.price}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={tier.featured ? "hero" : "outline"} className="mt-6">
                    <a
                      href={whatsappLink(`Hello ${site.name}, I would like to book the ${tier.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book {tier.title}
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.kansaiHead}
              alt="Technician's view of a Kansai Special sewing head being serviced"
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Maintenance contracts</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Keep the production line moving
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For factories and training schools we offer monthly or quarterly maintenance visits at
              a fixed fee. Machines are cleaned, re-timed and logged, and any part likely to fail is
              flagged before it stops a shift.
            </p>
            <Button asChild size="lg" className="mt-7">
              <a
                href={whatsappLink(`Hello ${site.name}, I'd like a maintenance contract quote for our factory.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Contract Quote
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
